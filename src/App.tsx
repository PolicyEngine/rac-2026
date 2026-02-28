import React, { useState, useMemo } from 'react';
import { speakers, Speaker } from './data/speakers';
import { sessions, Session, Track, trackColors, trackLabels } from './data/sessions';

const ff = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const mono = "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace";

type Tab = 'schedule' | 'speakers';
type DayFilter = 'all' | 'March 10' | 'March 11';
type TrackFilter = 'all' | Track;

/* ── tiny helpers ───────────────────────── */

function Badge({ label, bg, color }: { label: string; bg: string; color: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '10px',
        fontWeight: 600,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        padding: '2px 8px',
        borderRadius: '4px',
        background: bg,
        color,
        fontFamily: ff,
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: '11px',
        padding: '2px 7px',
        borderRadius: '4px',
        background: '#F1F5F9',
        color: '#475569',
        fontFamily: mono,
        border: '1px solid #E2E8F0',
      }}
    >
      {label}
    </span>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '6px 16px',
        fontSize: '13px',
        fontWeight: 500,
        color: active ? '#0F172A' : '#64748B',
        background: active ? '#FFF' : 'none',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontFamily: ff,
        boxShadow: active ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
        whiteSpace: 'nowrap' as const,
      }}
    >
      {label}
    </button>
  );
}

/* ── Session Card ───────────────────────── */

function SessionCard({ s }: { s: Session }) {
  const [open, setOpen] = useState(false);
  const tc = trackColors[s.track];
  return (
    <div
      style={{
        background: '#FFF',
        border: '1px solid #E2E8F0',
        borderLeft: `3px solid ${tc}`,
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={() => setOpen(!open)}
    >
      <div style={{ padding: '20px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
          <Badge label={s.track} bg={tc + '18'} color={tc} />
          <Badge label={trackLabels[s.track]} bg="#F8FAFC" color="#64748B" />
          <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: mono }}>{s.time}</span>
        </div>
        <div
          style={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#0F172A',
            letterSpacing: '-0.3px',
            lineHeight: 1.35,
            fontFamily: ff,
            marginBottom: '6px',
          }}
        >
          {s.title}
        </div>
        <div style={{ fontSize: '13px', color: '#64748B', fontFamily: ff }}>
          {s.speakers.join(', ')}
        </div>
      </div>
      {open && (
        <div
          style={{
            padding: '0 24px 20px',
            borderTop: '1px solid #F1F5F9',
            paddingTop: '16px',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '14px',
              color: '#475569',
              lineHeight: 1.6,
              fontFamily: ff,
              marginBottom: '12px',
            }}
          >
            {s.description}
          </p>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {s.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Speaker Card ───────────────────────── */

function SpeakerCard({ sp }: { sp: Speaker }) {
  const initials = sp.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2);
  const speakerSessions = sessions.filter((s) => s.speakers.includes(sp.name));
  const hue = sp.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 360;

  return (
    <div
      style={{
        background: '#FFF',
        border: '1px solid #E2E8F0',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: `hsl(${hue}, 55%, 48%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFF',
            fontSize: '14px',
            fontWeight: 700,
            fontFamily: ff,
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: '#0F172A',
              letterSpacing: '-0.2px',
              fontFamily: ff,
            }}
          >
            {sp.name}
          </div>
          <div style={{ fontSize: '12px', color: '#64748B', fontFamily: ff, marginTop: '1px' }}>
            {sp.role}
          </div>
        </div>
      </div>
      {sp.org && (
        <div
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#475569',
            fontFamily: ff,
          }}
        >
          {sp.org}
        </div>
      )}
      {sp.bio && (
        <p
          style={{
            margin: 0,
            fontSize: '13px',
            color: '#64748B',
            lineHeight: 1.55,
            fontFamily: ff,
          }}
        >
          {sp.bio}
        </p>
      )}
      {speakerSessions.length > 0 && (
        <div
          style={{
            borderTop: '1px solid #F1F5F9',
            paddingTop: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <div
            style={{
              fontSize: '10px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              color: '#94A3B8',
              fontFamily: ff,
            }}
          >
            Sessions ({speakerSessions.length})
          </div>
          {speakerSessions.map((ss) => (
            <div key={ss.id} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: trackColors[ss.track],
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '12px', color: '#475569', fontFamily: ff }}>{ss.title}</span>
            </div>
          ))}
        </div>
      )}
      {sp.tags.length > 0 && (
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
          {sp.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── App ────────────────────────────────── */

export default function App() {
  const [tab, setTab] = useState<Tab>('schedule');
  const [dayFilter, setDayFilter] = useState<DayFilter>('all');
  const [trackFilter, setTrackFilter] = useState<TrackFilter>('all');
  const [speakerSearch, setSpeakerSearch] = useState('');

  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      if (dayFilter !== 'all' && s.day !== dayFilter) return false;
      if (trackFilter !== 'all' && s.track !== trackFilter) return false;
      return true;
    });
  }, [dayFilter, trackFilter]);

  const groupedByDay = useMemo(() => {
    const groups: Record<string, Session[]> = {};
    filteredSessions.forEach((s) => {
      if (!groups[s.day]) groups[s.day] = [];
      groups[s.day].push(s);
    });
    return groups;
  }, [filteredSessions]);

  const filteredSpeakers = useMemo(() => {
    if (!speakerSearch) return speakers;
    const q = speakerSearch.toLowerCase();
    return speakers.filter(
      (sp) =>
        sp.name.toLowerCase().includes(q) ||
        sp.org.toLowerCase().includes(q) ||
        sp.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [speakerSearch]);

  return (
    <div style={{ minHeight: '100vh', background: '#F8FAFC' }}>
      {/* ── Hero ────────── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F4C75 100%)',
          padding: '56px 32px 48px',
          color: '#FFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: '#60A5FA',
              marginBottom: '8px',
              fontFamily: ff,
            }}
          >
            March 10&ndash;11, 2026 &middot; The Hague, Netherlands
          </div>
          <h1
            style={{
              fontSize: '36px',
              fontWeight: 700,
              letterSpacing: '-0.8px',
              lineHeight: 1.15,
              margin: 0,
              fontFamily: ff,
            }}
          >
            Rules as Code 2026
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: 'rgba(255,255,255,0.65)',
              marginTop: '12px',
              maxWidth: '640px',
              lineHeight: 1.55,
              fontFamily: ff,
            }}
          >
            International conference on encoding legislation as machine-executable rules &mdash;
            spanning governance, tools, and engineering.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '28px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { n: speakers.length.toString(), l: 'Speakers' },
              { n: sessions.length.toString(), l: 'Sessions' },
              { n: '3', l: 'Tracks' },
              { n: '2', l: 'Days' },
            ].map((stat) => (
              <div key={stat.l}>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    fontFamily: ff,
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.5)',
                    fontWeight: 500,
                    fontFamily: ff,
                  }}
                >
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Nav bar ────────── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(248,250,252,0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E2E8F0',
          padding: '0 32px',
          height: '52px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A', fontFamily: ff }}>
            RaC 2026
          </span>
          <span style={{ color: '#CBD5E1' }}>|</span>
          <div
            style={{
              display: 'flex',
              gap: '2px',
              background: '#F1F5F9',
              padding: '3px',
              borderRadius: '10px',
            }}
          >
            <Pill label="Schedule" active={tab === 'schedule'} onClick={() => setTab('schedule')} />
            <Pill label="Speakers" active={tab === 'speakers'} onClick={() => setTab('speakers')} />
          </div>
        </div>

        {/* Filters */}
        {tab === 'schedule' && (
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <span style={{ fontSize: '12px', color: '#94A3B8', fontFamily: ff, marginRight: '4px' }}>
              Filter:
            </span>
            {(['all', 'March 10', 'March 11'] as DayFilter[]).map((d) => (
              <Pill
                key={d}
                label={d === 'all' ? 'All Days' : d}
                active={dayFilter === d}
                onClick={() => setDayFilter(d)}
              />
            ))}
            <span style={{ color: '#E2E8F0', margin: '0 4px' }}>|</span>
            {(['all', 'Track 1', 'Track 2', 'Track 3'] as TrackFilter[]).map((t) => (
              <Pill
                key={t}
                label={t === 'all' ? 'All Tracks' : `${t}`}
                active={trackFilter === t}
                onClick={() => setTrackFilter(t)}
              />
            ))}
          </div>
        )}

        {tab === 'speakers' && (
          <input
            type="text"
            placeholder="Search speakers..."
            value={speakerSearch}
            onChange={(e) => setSpeakerSearch(e.target.value)}
            style={{
              padding: '6px 14px',
              fontSize: '13px',
              fontFamily: ff,
              border: '1px solid #E2E8F0',
              borderRadius: '8px',
              outline: 'none',
              width: '240px',
              background: '#FFF',
              color: '#0F172A',
            }}
          />
        )}
      </div>

      {/* ── Content ────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 32px 80px' }}>
        {tab === 'schedule' && (
          <>
            {/* Track legend */}
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '32px',
                padding: '14px 20px',
                background: '#FFF',
                border: '1px solid #E2E8F0',
                borderRadius: '10px',
                flexWrap: 'wrap',
              }}
            >
              {(Object.entries(trackColors) as [Track, string][])
                .filter(([t]) => t !== 'Tracks 1&2')
                .map(([t, c]) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: c,
                      }}
                    />
                    <span style={{ fontSize: '12px', color: '#475569', fontWeight: 500, fontFamily: ff }}>
                      {t}: {trackLabels[t]}
                    </span>
                  </div>
                ))}
            </div>

            {Object.entries(groupedByDay).map(([day, daySessions]) => {
              const rounds: Record<number, Session[]> = {};
              daySessions.forEach((s) => {
                if (!rounds[s.round]) rounds[s.round] = [];
                rounds[s.round].push(s);
              });

              return (
                <div key={day} style={{ marginBottom: '48px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '24px',
                    }}
                  >
                    <h2
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#0F172A',
                        letterSpacing: '-0.4px',
                        margin: 0,
                        fontFamily: ff,
                      }}
                    >
                      {day}
                    </h2>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 500,
                        color: '#94A3B8',
                        fontFamily: ff,
                      }}
                    >
                      {daySessions.length} sessions
                    </span>
                  </div>

                  {Object.entries(rounds)
                    .sort(([a], [b]) => Number(a) - Number(b))
                    .map(([round, roundSessions]) => {
                      const time = roundSessions[0]?.time;
                      return (
                        <div key={round} style={{ marginBottom: '32px' }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              marginBottom: '14px',
                            }}
                          >
                            <div
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '7px',
                                background: '#0F172A',
                                color: '#FFF',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '12px',
                                fontWeight: 700,
                                fontFamily: ff,
                              }}
                            >
                              R{round}
                            </div>
                            <span
                              style={{
                                fontSize: '13px',
                                fontWeight: 500,
                                color: '#64748B',
                                fontFamily: mono,
                              }}
                            >
                              {time}
                            </span>
                          </div>
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                              gap: '12px',
                            }}
                          >
                            {roundSessions.map((s) => (
                              <SessionCard key={s.id} s={s} />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </>
        )}

        {tab === 'speakers' && (
          <>
            <div
              style={{
                fontSize: '13px',
                color: '#94A3B8',
                marginBottom: '20px',
                fontFamily: ff,
              }}
            >
              {filteredSpeakers.length} speaker{filteredSpeakers.length !== 1 && 's'}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '16px',
              }}
            >
              {filteredSpeakers.map((sp) => (
                <SpeakerCard key={sp.name} sp={sp} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Footer ────────── */}
      <footer
        style={{
          background: '#0F172A',
          color: '#94A3B8',
          padding: '24px 32px',
          fontSize: '13px',
          fontFamily: ff,
          textAlign: 'center',
        }}
      >
        Rules as Code 2026 &middot; The Hague &middot; March 10&ndash;11
      </footer>
    </div>
  );
}
