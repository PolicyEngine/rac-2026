export type Track = 'Track 1' | 'Track 2' | 'Track 3' | 'Tracks 1&2';

export type Session = {
  id: number;
  title: string;
  speakers: string[];
  track: Track;
  description: string;
  day: 'March 10' | 'March 11';
  time: string;
  round: number;
  tags: string[];
};

export const sessions: Session[] = [
  // === March 10 ===
  // Round 1
  {
    id: 1,
    title: 'Using AI4DRPM for Rules as Code',
    speakers: ['Alessio Nardin', 'Davide Audrito'],
    track: 'Track 2',
    description:
      'Framework for annotating legal acts with new vocabularies related to the Interoperable Europe Act.',
    day: 'March 10',
    time: '13:30\u201314:40',
    round: 1,
    tags: ['EU', 'interoperability', 'frameworks'],
  },
  {
    id: 2,
    title: 'Explainability in Rules as Code',
    speakers: ['Suzan Zuurmond'],
    track: 'Track 3',
    description:
      'Addresses government automation transparency \u2014 decision pathway tracing, code validation, and citizen-understandable outcome communication.',
    day: 'March 10',
    time: '13:30\u201314:40',
    round: 1,
    tags: ['explainability', 'ALEF', 'transparency'],
  },
  {
    id: 3,
    title: 'Global Digital Provision of Law: OECD Perspective',
    speakers: ['Natalie Cohen'],
    track: 'Track 1',
    description:
      'Overview of international Rules as Code experiments, success stories, challenges, and convergence toward interoperable approaches.',
    day: 'March 10',
    time: '13:30\u201314:40',
    round: 1,
    tags: ['OECD', 'international', 'governance'],
  },
  {
    id: 4,
    title: 'Comparing Methods and Tools for Interpreting Regulations',
    speakers: [
      'Robert van Doesburg',
      'Robert Goen\u00e9',
      'Sandra Chakrou',
      'Mads Adam',
      'Eirini Andriopoulou',
      'Tomas Algotsson',
      'Vincent van Dijk',
    ],
    track: 'Tracks 1&2',
    description:
      'Expert introductions followed by panel discussion covering interpretation schemes, functional rule uses, cross-language translation, and regulation interpretation\u2019s role.',
    day: 'March 10',
    time: '13:30\u201315:40',
    round: 1,
    tags: ['panel', 'tools', 'interpretation'],
  },
  // Round 2
  {
    id: 5,
    title: 'Building a Rules as Code Community',
    speakers: ['Ronald Damhof'],
    track: 'Track 1',
    description:
      'Creating a Dutch RaC community with governance focus, common working approaches, and craftsmanship development.',
    day: 'March 10',
    time: '14:40\u201315:40',
    round: 2,
    tags: ['community', 'governance', 'netherlands'],
  },
  {
    id: 6,
    title: 'NRML \u2014 Normalised Rule Model Language',
    speakers: ['Wouter Berman'],
    track: 'Track 2',
    description:
      'Capturing the semantics of rules in an interoperable format \u2014 bridging everyday legal meaning with machine-readable logic.',
    day: 'March 10',
    time: '14:40\u201315:40',
    round: 2,
    tags: ['DSL', 'interoperability', 'ALEF'],
  },
  {
    id: 7,
    title: 'Legal Network Research',
    speakers: ['Tam\u00e1s Kov\u00e1cs'],
    track: 'Track 2',
    description:
      'Citation network analysis of 1,042 Supreme Court tax decisions using graph theory; planned NLP integration for precedent prioritization.',
    day: 'March 10',
    time: '14:40\u201315:40',
    round: 2,
    tags: ['research', 'graph-theory', 'tax'],
  },
  {
    id: 8,
    title: 'AI4Deliberation: Democratic AI Infrastructure',
    speakers: ['Alexandros Melidis'],
    track: 'Track 2',
    description:
      'HORIZON Europe project developing AI tools for mass deliberation. Recommendations on EU text standards, interoperability, and linguistic infrastructure.',
    day: 'March 10',
    time: '14:40\u201315:40',
    round: 2,
    tags: ['AI', 'democracy', 'EU'],
  },
  {
    id: 9,
    title: 'Digital Ethics',
    speakers: ['Dani\u00ebl Tijink'],
    track: 'Track 1',
    description:
      'Philosophy of technology perspective on the ethics/codes relationship. Guidance ethics methodology applied to spatial planning chatbot.',
    day: 'March 10',
    time: '14:40\u201315:40',
    round: 2,
    tags: ['ethics', 'philosophy'],
  },
  // Round 3
  {
    id: 10,
    title: 'Implicit Temporal Reasoning for Executable Legal Rules',
    speakers: ['Gert Veldhuijzen van Zanten'],
    track: 'Track 2',
    description:
      'Execution model automating temporal aspects \u2014 rules written at a single timepoint while handling duration, proportional values, and period-based conditions.',
    day: 'March 10',
    time: '16:00\u201317:00',
    round: 3,
    tags: ['temporal-logic', 'ALEF', 'engineering'],
  },
  {
    id: 11,
    title: 'Rules as Code and Software Engineering: Catala',
    speakers: ['Louis Gesbert', 'Laetitia Lemiere'],
    track: 'Track 2',
    description:
      'Software engineering lessons for maintainable RaC codebases. Abstractions, modules, testing, and project management enabling 10k\u2013100k+ line code scaling.',
    day: 'March 10',
    time: '16:00\u201317:00',
    round: 3,
    tags: ['Catala', 'engineering', 'DSL'],
  },
  {
    id: 12,
    title: 'Educating Digital Professionals on Rules as Code',
    speakers: ['Ivar Timmer'],
    track: 'Track 3',
    description:
      'Open-access interdisciplinary courses addressing legality, transparency, and efficiency. Modular approach for legal, IT, public administration professionals.',
    day: 'March 10',
    time: '16:00\u201317:00',
    round: 3,
    tags: ['education', 'curriculum'],
  },
  {
    id: 13,
    title: 'eFLINT Executable Rules',
    speakers: ['Thomas van Binsbergen'],
    track: 'Track 3',
    description:
      'Domain-specific language integrating RaC into software engineering. Automated reasoning for compliance; GDPR/data governance case study.',
    day: 'March 10',
    time: '16:00\u201317:00',
    round: 3,
    tags: ['eFLINT', 'DSL', 'compliance'],
  },
  {
    id: 14,
    title: 'Lessons from European E-Justice Program',
    speakers: ['Sandra Taal'],
    track: 'Track 1',
    description: 'Interoperability lessons from the EU E-justice program.',
    day: 'March 10',
    time: '16:00\u201317:00',
    round: 3,
    tags: ['EU', 'justice', 'interoperability'],
  },
  // === March 11 ===
  // Round 1
  {
    id: 15,
    title: 'Governance and Policy Making: Grassroots vs. State Strategy',
    speakers: ['Andrzej J\u00f3zefczyk', 'Katarzyna Kos'],
    track: 'Track 1',
    description:
      'Poland\u2019s growing standardization/digitalization initiatives. Grassroots and governmental tool interaction; RIA Virtual Assistant case.',
    day: 'March 11',
    time: '10:40\u201311:40',
    round: 1,
    tags: ['poland', 'governance', 'strategy'],
  },
  {
    id: 16,
    title: 'Automating Rules-to-Code with AI',
    speakers: ['Beno\u00eet Courty'],
    track: 'Track 2',
    description:
      'LLM evolution in legal text processing. AI agents updating fiscal parameters in OpenFisca-France via MCP and tooling. From 5% success (2023) to significant recent improvements.',
    day: 'March 11',
    time: '10:40\u201311:40',
    round: 1,
    tags: ['AI', 'OpenFisca', 'LLM', 'automation'],
  },
  {
    id: 17,
    title: 'From Compass to GPS',
    speakers: ['Stefan \u2019t Hoen'],
    track: 'Track 2',
    description:
      'Mapping Social Security rules in Netherlands \u2014 making law visible and navigable like a cartographer plotting routes for equal societal access.',
    day: 'March 11',
    time: '10:40\u201311:40',
    round: 1,
    tags: ['social-security', 'navigation', 'netherlands'],
  },
  {
    id: 18,
    title: 'Blawx: User-Friendly Rules as Code Tool',
    speakers: ['Jason Morris'],
    track: 'Track 2',
    description:
      'Symbolic AI development/testing environment enabling legal subject-matter experts to directly develop Rules as Code without developer assistance.',
    day: 'March 11',
    time: '10:40\u201311:40',
    round: 1,
    tags: ['Blawx', 'tools', 'symbolic-AI'],
  },
  {
    id: 19,
    title: 'How to Scale-up Rules as Code Solutions',
    speakers: [
      'Alex Borg',
      'Thomas Guillet',
      'Andreas Triantafyllidis',
      'Wouter Berman',
      'Robert van Doesburg',
    ],
    track: 'Tracks 1&2',
    description:
      'Panel on ALEF lessons, domain/scaling opportunities, and innovation agenda development. Combining government, business, and academia strengths.',
    day: 'March 11',
    time: '10:40\u201312:50',
    round: 1,
    tags: ['panel', 'scaling', 'strategy'],
  },
  {
    id: 20,
    title: 'Rules as Code is Not Enough: Cooperation Essential',
    speakers: ['Matthijs van Kempen'],
    track: 'Track 3',
    description:
      'Multi-disciplinary team lessons from 10 years across three government bodies. Diverse specialist collaboration requirements.',
    day: 'March 11',
    time: '10:40\u201311:40',
    round: 1,
    tags: ['collaboration', 'ALEF', 'lessons'],
  },
  // Round 2
  {
    id: 21,
    title: 'ALEF \u2014 Agile Law Execution Factory',
    speakers: ['Arjan Oortgiese'],
    track: 'Track 2',
    description:
      'Controlled natural language rule specification, legal scenario validation, production execution. Enables nine times faster law changes. Over 100 million annual decisions.',
    day: 'March 11',
    time: '11:50\u201312:50',
    round: 2,
    tags: ['ALEF', 'DSL', 'production'],
  },
  {
    id: 22,
    title: 'From Legal Text to Executable Law: Rulemapping',
    speakers: ['Till Behnke'],
    track: 'Track 2',
    description:
      'Visual, human/machine-readable structured models transforming legislation. Germany\u2019s 2025 Modernisation Agenda official implementation path.',
    day: 'March 11',
    time: '11:50\u201312:50',
    round: 2,
    tags: ['Rulemapping', 'germany', 'visual'],
  },
  {
    id: 23,
    title: 'Early Steps Most Important: Digital-Ready Legislation',
    speakers: ['Styne Nygaard', 'Mads Adam'],
    track: 'Track 1',
    description:
      'Danish secretariat for digital-ready legislation supporting early legislative process engagement and policy-maker assistance.',
    day: 'March 11',
    time: '11:50\u201312:50',
    round: 2,
    tags: ['denmark', 'digital-ready', 'governance'],
  },
  // Round 3
  {
    id: 24,
    title: 'Citizen Centric Rules as Code \u2014 GovTech4All',
    speakers: ['Bas Kaptijn', 'Gorka Oteiza', 'Andreas Triantafyllidis'],
    track: 'Track 2',
    description:
      'Citizen-focused RaC concept. Waste Shipments Acts case. Data security and Post Quantum Cryptography discussion.',
    day: 'March 11',
    time: '13:45\u201314:45',
    round: 3,
    tags: ['GovTech', 'citizen-centric', 'security'],
  },
  {
    id: 25,
    title: 'Hybrid AI: LLMs Meet Knowledge',
    speakers: ['Maaike de Boer'],
    track: 'Track 2',
    description:
      'Data-driven and knowledge-driven AI combination. FlintFiller for LLM-based legal text formalization. KRAGbot chatbot combining legal sources for explainable answers.',
    day: 'March 11',
    time: '13:45\u201314:45',
    round: 3,
    tags: ['AI', 'hybrid-AI', 'LLM', 'knowledge-graphs'],
  },
  {
    id: 26,
    title: 'Large Tax Administration RaC Approach',
    speakers: ['Victoire Daher'],
    track: 'Track 1',
    description:
      'RaC exploration without pilot projects. International inspiration, national research, and peer administration experience.',
    day: 'March 11',
    time: '13:45\u201314:45',
    round: 3,
    tags: ['france', 'tax', 'strategy'],
  },
  {
    id: 27,
    title: 'Rules as a Service',
    speakers: ['Paul Ruijgrok', 'David Stoll'],
    track: 'Track 1',
    description:
      'Translating national law into executable rules adjustable to autonomous local policy using DMN/BPMN. Efficiency improvements and scaling.',
    day: 'March 11',
    time: '13:45\u201314:45',
    round: 3,
    tags: ['DMN', 'BPMN', 'local-government'],
  },
  {
    id: 28,
    title: 'Towards Scientific Conference on RaC',
    speakers: ['Tom Barbereau'],
    track: 'Track 3',
    description:
      'Announcement of first scientific RaC conference (Amsterdam, January 27\u201329, 2027). Call for papers including practitioner track.',
    day: 'March 11',
    time: '13:45\u201314:45',
    round: 3,
    tags: ['research', 'academic', 'announcement'],
  },
  // Round 4
  {
    id: 29,
    title: 'Machine Law for Human Life',
    speakers: ['Anne Schuth'],
    track: 'Track 2',
    description:
      'Runnable laws showing life event impacts on rights. Open-source tools and public code libraries. Not AI interpreting law, but making government intelligible and just.',
    day: 'March 11',
    time: '14:55\u201315:55',
    round: 4,
    tags: ['open-source', 'citizen-centric', 'philosophy'],
  },
  {
    id: 30,
    title: 'Structuring EU Law: Publication Format & Ontology',
    speakers: ['Pieterjan Montens'],
    track: 'Track 2',
    description:
      'HTML4EU semantically rich publication format. Legal Obligation Metadata Ontology standardizing interoperable normative representation.',
    day: 'March 11',
    time: '14:55\u201315:55',
    round: 4,
    tags: ['EU', 'standards', 'ontology'],
  },
  {
    id: 31,
    title: 'Innovation Agenda for Rules as Code',
    speakers: ['Robert van Doesburg'],
    track: 'Track 3',
    description:
      'Working session preparing EU Innovation Agenda presentation for the conference closing.',
    day: 'March 11',
    time: '14:55\u201315:55',
    round: 4,
    tags: ['workshop', 'EU', 'strategy'],
  },
  {
    id: 32,
    title: 'Scaling Up with Local Innovations',
    speakers: ['Lenneke Sluijter'],
    track: 'Track 1',
    description:
      'Dutch "opschalingsticket" selective funding supporting innovative RaC solution scaling. Long-term perspective and cooperation strengthening.',
    day: 'March 11',
    time: '14:55\u201315:55',
    round: 4,
    tags: ['scaling', 'funding', 'netherlands'],
  },
];

export const trackColors: Record<Track, string> = {
  'Track 1': '#2563EB',
  'Track 2': '#059669',
  'Track 3': '#9333EA',
  'Tracks 1&2': '#D97706',
};

export const trackLabels: Record<Track, string> = {
  'Track 1': 'Governance',
  'Track 2': 'Community & Tools',
  'Track 3': 'Engineering',
  'Tracks 1&2': 'Joint Panel',
};
