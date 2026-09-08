export const contact = {
  name: "Yevhenii Riabokon",
  role: "Junior Full-Stack Webentwickler",
  location: "Baunatal, Hessen · Deutschland",
  email: "eugen.riabokon@gmail.com",
  phone: "+49 151 241 23597",
  linkedin: "https://www.linkedin.com/in/yevhenii-r-5584a83aa",
  github: "https://github.com/Yevhenii1951",
  cv: "/cv/Yevhenii_Riabokon_Lebenslauf_Junior_FullStack_AI_DE.pdf",
};

export type Project = {
  id: string;
  label: string;
  title: string;
  description: string;
  stack: string[];
  imageFront: string;
  imageHover: string;
  badge?: string;
  featured?: boolean;
  links: {
    live?: string;
    liveLabel?: string;
    presentation?: string;
    code: string;
  };
};

export const projects: Project[] = [
  {
    id: "oma-netz",
    label: "Full-Stack · Abschlussprojekt",
    title: "OMA-NETZ Kassel",
    description:
      "Nachbarschaftshilfe-Plattform, die ältere Menschen in Kassel mit freiwilligen Helfern verbindet — mit rollenbasierter Authentifizierung, Echtzeit-Chat und einem integrierten KI-Assistenten.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Pusher",
      "Groq AI",
      "Leaflet",
      "Vercel",
    ],
    imageFront: "/img/oma-1.webp",
    imageHover: "/img/oma-2.webp",
    badge: "Abschlussprojekt",
    featured: true,
    links: {
      live: "https://oma-netz-final-project-valerija-yev.vercel.app/landing",
      liveLabel: "Live-Demo",
      presentation: "https://oma-netz-presentation.onrender.com",
      code: "https://github.com/Yevhenii1951/Oma_netz_final_project_Valerija_Yevhenii",
    },
  },
  {
    id: "salonflow",
    label: "Astro · Lokales SEO",
    title: "SalonFlow Kassel",
    description:
      "Reales Kundenprojekt-Setup für einen Friseursalon: Online-Termin, Leistungen, Galerie, Team, OpenStreetMap-Kontakt und CMS-ready Content mit Decap CMS — deployt auf Netlify.",
    stack: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Decap CMS",
      "JSON-LD",
      "Netlify",
    ],
    imageFront: "/img/salon-1.webp",
    imageHover: "/img/salon-2.webp",
    badge: "Statische Site",
    links: {
      live: "https://clinquant-jalebi-8c402e.netlify.app/",
      code: "https://github.com/Yevhenii1951/SalonFlow-Kassel",
    },
  },
  {
    id: "bergblick",
    label: "Astro + React Islands",
    title: "Bergblick Restaurant",
    description:
      "Dreisprachige (DE / RU / EN) Restaurant-Website mit Bestellsystem: Warenkorb, Abholung/Lieferung, Vercel-Functions, PostgreSQL, Telegram-Benachrichtigungen und Statistik-Dashboard.",
    stack: [
      "Astro 5",
      "React 19",
      "Nanostores",
      "Tailwind 4",
      "Vercel Functions",
      "PostgreSQL",
    ],
    imageFront: "/img/berg-1.webp",
    imageHover: "/img/berg-2.webp",
    badge: "Full-Stack",
    links: {
      code: "https://github.com/Yevhenii1951/bergblick-restaurant",
    },
  },
  {
    id: "handwerker",
    label: "Next.js + Supabase",
    title: "Handwerker-Booking Kassel",
    description:
      "Buchungsplattform für Handwerker: Slots im 14-Tage-Kalender, konfliktfreie Termine per PostgreSQL, Geo-Fence-Check der PLZ, RLS, Rollen-Dashboards und Portfoliouploads.",
    stack: [
      "Next.js 16",
      "Supabase",
      "PostgreSQL",
      "zod",
      "shadcn/ui",
      "Vitest",
    ],
    imageFront: "/img/hwk-1.webp",
    imageHover: "/img/hwk-2.webp",
    badge: "Full-Stack",
    links: {
      code: "https://github.com/Yevhenii1951/handwerker-booking-pro-Kassel",
    },
  },
];

export const smallProjects = [
  {
    title: "Vite Game · Rate die Zahl",
    description:
      "React + TypeScript App mit eigener API auf MongoDB — Zahlen-Ratespiel mit Bestenliste.",
    github: "https://github.com/Yevhenii1951/Vite_project_GAME_Valeriia_Yevgenii",
  },
  {
    title: "Forum-Projekt",
    description:
      "Full-Stack-Forum mit Prisma, Authentifizierung und Themen-Diskussionen.",
    github: "https://github.com/Yevhenii1951/forum-project-Valeriia-Yevhenii",
  },
  {
    title: "CROWDS · Realtime Practicum",
    description:
      "WebSocket-Schicht mit Heartbeat, Reconnect (Backoff + Jitter), State-Recovery und Lasttests bis 900 simulierte Clients (Node.js, Socket.IO, MongoDB, Vue).",
    github: "https://github.com/Yevhenii1951",
  },
];

export const skills = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vue.js",
      "Astro",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "WebSocket",
      "Socket.IO",
      "Server Components",
      "Server Actions",
    ],
  },
  {
    title: "Datenbanken",
    items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Supabase", "Row-Level Security"],
  },
  {
    title: "Tools & Deployment",
    items: ["Git", "GitHub", "Linux", "Vercel", "Netlify", "Render", "Docker", "Vitest"],
  },
  {
    title: "KI-gestützte Entwicklung",
    items: [
      "Groq SDK",
      "OpenAI Codex",
      "GitHub Copilot",
      "Claude",
      "Prompt Engineering",
      "Context Engineering",
    ],
  },
];

export const journey = [
  {
    period: "2025 — 2026",
    role: "Web Development Bootcamp · Full-Stack",
    org: "Digital Career Institute (DCI), Deutschland",
    points: [
      "HTML, CSS, JavaScript, TypeScript, React, Node.js, Express",
      "Datenbanken, APIs, Git, Deployment",
    ],
  },
  {
    period: "04/2026 — 06/2026",
    role: "Software-Engineering-Praktikum",
    org: "CROWDS · Echtzeit-Synchronisationssystem",
    points: [
      "Zuverlässige WebSocket-Schicht mit Heartbeat, Ping/Pong und Reconnect",
      "Lastsimulator für bis zu 900 parallele Clients",
      "Versioniertes JSON-Kommandoschema und Protokollanalyse",
    ],
  },
  {
    period: "2008 — 2023",
    role: "Selbstständiger Unternehmer",
    org: "Installation & technische Systeme, Kiew (UA)",
    points: [
      "Eigenes Gewerbe: Video-Überwachung, Satelliten-TV, Klimaanlagen",
      "Technische Beratung, Fehleranalyse und eigene Website mit SEO",
    ],
  },
  {
    period: "1997 — 2008",
    role: "Teamleiter · Brandschutz und Rettung",
    org: "Hauptdirektion für Notfallsituationen der Ukraine",
    points: [
      "Teamführung im Schichtbetrieb unter hohem Druck",
      "Strukturiertes Arbeiten und klare Kommunikation in kritischen Situationen",
    ],
  },
];

export const stats = [
  { value: "15+", label: "Jahre Technik & Handwerk" },
  { value: "4", label: "Projekte produziert & deployt" },
  { value: "12+", label: "DB-Modelle modelliert" },
  { value: "3", label: "Sprachen im Interface" },
];

export const nav = [
  { href: "#profil", label: "Profil" },
  { href: "#stack", label: "Stack" },
  { href: "#projekte", label: "Projekte" },
  { href: "#werdegang", label: "Werdegang" },
  { href: "#kontakt", label: "Kontakt" },
];