import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Simsiz Azadlıq: Niyə 2026-cı ildə Kabelli Sistemlər Artıq Keçmişdə Qalıb?",
    company: "Home Assist",
    region: "Azerbaijan",
    description:
          " Divarları dağıtmadan peşəkar ağıllı ev qurmaq mümkündürmü? Home Assistant və müasir simsiz protokolların (Zigbee, Thread) kabelli sistemlərə (KNX, Loxone) qarşı üstünlüklərini mühəndislik perspektivindən analiz edirik.",
    technologies: [
      "TypeScript",
      "YAML",
      "HomeAssistant",
      "SonOff",
      "Tuya",
      "RaspberryPi",
      "Docker",
      "MiHome",
      
      
    ],
  },
  {
    title: "Staff Software Engineer",
    company: "FinchPay",
    region: "Global",
    description:
      "Architected event‑driven payment services with idempotency and retries, introduced Kafka for async processing, enforced API versioning, and drove observability with structured logging and tracing.",
    technologies: [
      "TypeScript",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "OpenTelemetry",
      "AWS",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "Insight Analytics",
    region: "Europe",
    description:
      "Owned the design system and SSR/ISR strategy, improved Core Web Vitals (LCP/INP) into the green, and shipped accessible UI components with strong tests and story coverage.",
    technologies: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Playwright",
      "Vitest",
    ],
  },
  {
    title: "Software Engineer",
    company: "LaunchPad",
    region: "Brazil",
    description:
      "Built MVPs end‑to‑end: designed REST/GraphQL APIs, set up CI/CD with preview environments, introduced feature flags, and migrated data to Postgres.",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Docker",
    ],
  },
];

export type WorkItem = (typeof work)[number];

