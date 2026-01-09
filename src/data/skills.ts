export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "Texniki Bacarıqlar",
    description: "sistemin stabil işləməsini təmin etmək üçün aşağıdakı sahələrdə dərin biliyə sahib olmalıdır: Linux və Terminal Bilikləri: Home Assistant-ın əsas əməliyyat sistemi Linux üzərində qurulub. SSH vasitəsilə sistemə daxil olmaq, əmrləri icra etmək və fayl sistemini idarə etmək (məsələn: docker, logs yoxlanılması) vacibdir. Şəbəkə (Networking) Bilikləri: * Statik IP ünvanlarının təyin edilməsi. VLAN qurulması (Smart cihazları əsas şəbəkədən ayırmaq təhlükəsizlik üçün mütləqdir). Port yönləndirmə (Port Forwarding) və ya VPN (WireGuard/Tailscale) vasitəsilə uzaqdan girişin təşkili.

    Protokol Anlayışı: Zigbee, Z-Wave, Thread və Matter protokollarının necə işlədiyini, hansı tezliklərdə maneələrlə qarşılaşdığını bilmək.

    YAML və Avtomatlaşdırma Məntiqi: HA-nın konfiqurasiya fayllarını (configuration.yaml) redaktə etmək və "Jinjal" şablonlaşdırma dilindən istifadə edərək mürəkkəb avtomatlaşdırmalar qurmaq.

    Təhlükəsizlik Standartları: Müştəri məlumatlarının məxfiliyi üçün 2FA (iki faktorlu təsdiqləmə) və yerli idarəetmə prinsiplərini tətbiq etmək.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Full‑Stack Development",
    description: "End‑to‑end features with React/Next.js, Node.js, and TypeScript, with strong UX, accessibility, and performance.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "APIs & Distributed Systems",
    description: "Designing REST/GraphQL APIs, background jobs, queues, idempotency, retries, and observability for reliability.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Databases & Caching",
    description: "Schema design, migrations, and performance tuning with Postgres; caching and rate‑limiting with Redis.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z"/></svg>`,
    title: "Testing & CI/CD",
    description: "Unit, integration, and E2E tests (Jest, Playwright) with GitHub Actions pipelines, preview envs, and quality gates.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 18H6a4 4 0 010-8 5 5 0 019.9-1.5A4.5 4.5 0 1119 18z"/></svg>`,
    title: "Cloud & DevOps",
    description: "AWS, Docker, and Terraform; secure deployments, monitoring/alerts, and cost‑aware operations.",
  },
];

export type Skill = (typeof skills)[number];

