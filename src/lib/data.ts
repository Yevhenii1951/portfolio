export const contact = {
  name: "Yevhenii Riabokon",
  role: "Junior Full-Stack Webentwickler",
  location: "Baunatal bei Kassel",
  email: "eugen.riabokon@gmail.com",
  phone: "+49 151 241 23597",
  linkedin: "https://www.linkedin.com/in/yevhenii-r-5584a83aa",
  github: "https://github.com/Yevhenii1951",
  cv: "/cv/Yevhenii_Riabokon_Lebenslauf_Junior_FullStack_DE_ATS.pdf",
};

export type Project = {
  id: string;
  label: string;
  title: string;
  description: string;
  highlights: string[];
  imageFront: string;
  imageHover?: string;
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
    label: "Next.js · TypeScript · Prisma",
    title: "OMA-NETZ Kassel",
    description:
      "Mein Anteil an der Abschlussarbeit: Anmeldung, Buchungslogik und Datenmodell. Gesucht wird nach Zeitfenster und Standort statt über eine offene Anzeigenliste; Echtzeit-Chat und ein KI-Assistent begleiten die Vermittlung.",
    highlights: ["Prisma / PostgreSQL", "Pusher", "Groq"],
    imageFront: "/img/oma-1.webp",
    imageHover: "/img/oma-2.webp",
    badge: "Abschlussprojekt",
    links: {
      live: "https://oma-netz-final-project-valerija-yev.vercel.app/landing",
      liveLabel: "Live-Demo",
      presentation: "https://oma-netz-presentation.onrender.com",
      code: "https://github.com/Yevhenii1951/Oma_netz_final_project_Valerija_Yevhenii",
    },
  },
  {
    id: "aue-baeckerei",
    label: "Next.js · TypeScript · Supabase",
    title: "Aue-Bäckerei Kassel",
    description:
      "Übungsprojekt für eine Kasseler Bäckerei: Produktkatalog, gemeinsamer Warenkorb, Vorbestellung, Lieferinformationen und eine Backliste für den nächsten Produktionstag. Der Schwerpunkt liegt auf einem durchgängigen, mehrsprachigen Bestellweg.",
    highlights: ["Next.js 16", "TypeScript", "Supabase / PostgreSQL"],
    imageFront: "/img/aue-1.webp",
    imageHover: "/img/aue-2.webp",
    badge: "Übungsprojekt",
    links: {
      live: "https://aue-baeckerei-kassel.vercel.app/de",
      liveLabel: "Live-Demo",
      code: "https://github.com/Yevhenii1951/Aue-Baeckerei-Kassel",
    },
  },
  {
    id: "kalyna",
    label: "Next.js · TypeScript · Supabase",
    title: "Kalyna Ukrainische Küche",
    description:
      "Der aufwendigste Teil ist nicht die Speisekarte, sondern der Bestellablauf: Preise werden serverseitig in Cent neu berechnet, Zahlungen laufen über signierte Webhooks, und belegte Tische verschwinden aus der Verfügbarkeit. Dazu Personalbereich mit Audit-Log und ein KI-Assistent mit Kostenlimit.",
    highlights: ["Supabase / PostgreSQL", "Stripe Webhooks", "next-intl (de/en/uk)"],
    imageFront: "/img/kalyna-1.png",
    badge: "Übungsprojekt",
    featured: true,
    links: {
      live: "https://restourant-ukrainishe-kueche.vercel.app/de",
      liveLabel: "Live-Demo",
      code: "https://github.com/Yevhenii1951/Restourant_ukrainishe_kueche",
    },
  },
  {
    id: "handwerker",
    label: "Next.js · TypeScript · Supabase",
    title: "Handwerker-Booking Kassel",
    description:
      "Hier zählt, dass kein Termin doppelt vergeben wird: Die Slot-Vergabe läuft transaktional über PostgreSQL, Berechtigungen über Datenbank-Policies, und die Entfernung zur Werkstatt wird aus der Postleitzahl geprüft.",
    highlights: ["Supabase / PostgreSQL", "Row-Level Security", "Vitest"],
    imageFront: "/img/hwk-1.webp",
    imageHover: "/img/hwk-2.webp",
    badge: "Übungsprojekt",
    links: {
      live: "https://handwerker-booking-pro-kassel.vercel.app/",
      liveLabel: "Live-Demo",
      code: "https://github.com/Yevhenii1951/handwerker-booking-pro-Kassel",
    },
  },
  {
    id: "ukrainian-kitchen",
    label: "Next.js · TypeScript · Prisma",
    title: "Borschtsch & Pampuschky",
    description:
      "Rezeptplattform als Fullstack-Übungsprojekt. Das Rechenstück ist die Zutatenverwaltung: Kategorien, Einheiten und Preise pro Einheit werden konsistent gehalten, während Rezepte per Server-Rendering mit ISR ausgeliefert werden.",
    highlights: ["NextAuth", "Prisma / PostgreSQL", "ISR / revalidatePath"],
    imageFront: "/img/ukrainian-1.webp",
    badge: "Übungsprojekt",
    links: {
      live: "https://ukrainian-kitchen.vercel.app/",
      liveLabel: "Live-Demo",
      code: "https://github.com/Yevhenii1951/Ukrainian_Kitchen",
    },
  },
  {
    id: "bergblick",
    label: "Astro · TypeScript · Vercel Postgres",
    title: "Bergblick Restaurant",
    description:
      "Für die Praxisnähe in drei Sprachen gebaut (DE / RU / EN), weil die Zielgruppe mehrsprachig ist. Der Bestellweg läuft über React-Inseln und Vercel-Functions bis zur Statistik im Adminbereich.",
    highlights: ["Astro 5", "React Islands", "Vercel Postgres"],
    imageFront: "/img/berg-1.webp",
    imageHover: "/img/berg-2.webp",
    badge: "Übungsprojekt",
    links: {
      live: "https://bergblick-restaurant.vercel.app/",
      liveLabel: "Live-Demo",
      code: "https://github.com/Yevhenii1951/bergblick-restaurant",
    },
  },
  {
    id: "salonflow",
    label: "Astro · TypeScript · Tailwind",
    title: "SalonFlow Kassel",
    description:
      "Übungsprojekt für einen Friseursalon: Terminbuchung, Leistungen, Galerie, Teamdarstellung und Geo-Karte. Die Inhalte sind über ein Git-basiertes CMS ohne Redaktionssystem pflegbar.",
    highlights: ["Astro", "Tailwind CSS", "Decap CMS / JSON-LD"],
    imageFront: "/img/salon-1.webp",
    imageHover: "/img/salon-2.webp",
    badge: "Übungsprojekt",
    links: {
      live: "https://clinquant-jalebi-8c402e.netlify.app/",
      code: "https://github.com/Yevhenii1951/SalonFlow-Kassel",
    },
  },
];

export type SmallProject = {
  title: string;
  description: string;
  demo?: string;
  github: string;
};

export const smallProjects: SmallProject[] = [
  {
    title: "Oma-Netz Präsentation",
    description:
      "Interaktive Slide-Präsentation zur Abschlussarbeit: Problemstellung, Planung, Architektur und Code-Durchgang als eine Seite statt als Foliensatz.",
    demo: "https://oma-netz-presentation.onrender.com",
    github: "https://github.com/Yevhenii1951/Oma-Netz_Presentation",
  },
  {
    title: "Referat Node.js",
    description:
      "Interaktive deutschsprachige Präsentation zu Node.js mit ausführbaren Demos zu Event Loop, Dateisystem und HTTP.",
    github: "https://github.com/Yevhenii1951/Referat_NodeJS",
  },
  {
    title: "Forum-Projekt",
    description:
      "Forum mit Prisma, Authentifizierung und Themen-Diskussionen.",
    github: "https://github.com/Yevhenii1951/forum-project-Valeriia-Yevhenii",
  },
  {
    title: "Vite Game · Rate die Zahl",
    description:
      "Ratespiel mit eigener API auf MongoDB und Bestenliste.",
    github: "https://github.com/Yevhenii1951/Vite_project_GAME_Valeriia_Yevgenii",
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
      "Server Components",
      "Server Actions",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "WebSocket", "Socket.IO"],
  },
  {
    title: "Datenbanken",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Supabase",
      "Row-Level Security",
    ],
  },
  {
    title: "Tools & Deployment",
    items: ["Git", "GitHub", "Linux", "Vercel", "Netlify", "Render", "Vitest"],
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
      "WebSocket-Schicht mit Heartbeat, Ping/Pong und Reconnect nach Backoff",
      "Lasttest mit bis zu 900 parallelen Clients und versioniertem Kommandoschema",
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
    points: ["Teamleitung im Schichtdienst"],
  },
];

export const nav = [
  { href: "#stack", label: "Stack" },
  { href: "#projekte", label: "Projekte" },
  { href: "#werdegang", label: "Werdegang" },
  { href: "#kontakt", label: "Kontakt" },
];
