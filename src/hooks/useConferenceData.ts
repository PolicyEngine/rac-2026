import { useState, useEffect, useCallback, useRef } from 'react';
import { supabase } from '../lib/supabase';

type UserName = 'Pavel' | 'Vahid';

interface AttendanceRow {
  id: string;
  session_id: number;
  user_name: UserName;
}

interface NoteRow {
  id: string;
  speaker_name: string;
  user_name: UserName;
  notes: string;
}

export function useConferenceData(currentUser: UserName | null) {
  const [attendance, setAttendance] = useState<AttendanceRow[]>([]);
  const [notes, setNotes] = useState<NoteRow[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const debounceTimers = useRef<Record<string, NodeJS.Timeout>>({});

  // Load all data on mount
  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [attRes, notesRes] = await Promise.all([
        supabase.from('rac2026_session_attendance').select('id, session_id, user_name'),
        supabase.from('rac2026_speaker_notes').select('id, speaker_name, user_name, notes'),
      ]);

      if (cancelled) return;

      if (attRes.error || notesRes.error) {
        setIsOnline(false);
        return;
      }

      setIsOnline(true);
      setAttendance(attRes.data ?? []);
      setNotes(notesRes.data ?? []);
    }

    load();
    return () => { cancelled = true; };
  }, []);

  const isAttending = useCallback(
    (sessionId: number, userName: UserName) =>
      attendance.some((a) => a.session_id === sessionId && a.user_name === userName),
    [attendance],
  );

  const getNote = useCallback(
    (speakerName: string, userName: UserName) =>
      notes.find((n) => n.speaker_name === speakerName && n.user_name === userName)?.notes ?? '',
    [notes],
  );

  const toggleAttendance = useCallback(
    async (sessionId: number) => {
      if (!currentUser) return;

      const existing = attendance.find(
        (a) => a.session_id === sessionId && a.user_name === currentUser,
      );

      if (existing) {
        // Optimistic delete
        setAttendance((prev) => prev.filter((a) => a.id !== existing.id));
        const { error } = await supabase
          .from('rac2026_session_attendance')
          .delete()
          .eq('id', existing.id);
        if (error) {
          setIsOnline(false);
          setAttendance((prev) => [...prev, existing]);
        }
      } else {
        // Optimistic insert
        const tempId = `${sessionId}-${currentUser}-${Date.now()}`;
        const newRow: AttendanceRow = { id: tempId, session_id: sessionId, user_name: currentUser };
        setAttendance((prev) => [...prev, newRow]);

        const { data, error } = await supabase
          .from('rac2026_session_attendance')
          .upsert(
            { id: tempId, session_id: sessionId, user_name: currentUser },
            { onConflict: 'session_id,user_name' },
          )
          .select('id')
          .single();

        if (error) {
          setIsOnline(false);
          setAttendance((prev) => prev.filter((a) => a.id !== tempId));
        } else if (data) {
          setAttendance((prev) =>
            prev.map((a) => (a.id === tempId ? { ...a, id: data.id } : a)),
          );
        }
      }
    },
    [currentUser, attendance],
  );

  const saveSpeakerNote = useCallback(
    (speakerName: string, text: string) => {
      if (!currentUser) return;

      // Optimistic update
      setNotes((prev) => {
        const idx = prev.findIndex(
          (n) => n.speaker_name === speakerName && n.user_name === currentUser,
        );
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = { ...updated[idx], notes: text };
          return updated;
        }
        return [
          ...prev,
          { id: `${speakerName}-${currentUser}-${Date.now()}`, speaker_name: speakerName, user_name: currentUser, notes: text },
        ];
      });

      // Debounced persist
      const key = `${speakerName}::${currentUser}`;
      if (debounceTimers.current[key]) clearTimeout(debounceTimers.current[key]);

      debounceTimers.current[key] = setTimeout(async () => {
        const existing = notes.find(
          (n) => n.speaker_name === speakerName && n.user_name === currentUser,
        );
        const id = existing?.id ?? `${speakerName}-${currentUser}-${Date.now()}`;

        const { error } = await supabase
          .from('rac2026_speaker_notes')
          .upsert(
            { id, speaker_name: speakerName, user_name: currentUser, notes: text },
            { onConflict: 'speaker_name,user_name' },
          );

        if (error) setIsOnline(false);
      }, 500);
    },
    [currentUser, notes],
  );

  return { attendance, notes, isOnline, isAttending, getNote, toggleAttendance, saveSpeakerNote };
}
