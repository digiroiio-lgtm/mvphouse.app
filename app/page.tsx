import Link from "next/link";

type App = {
  name: string;
  description: string;
  tags: string[];
  url?: string;
  status?: "live" | "coming-soon";
  featured?: boolean;
};

const apps: App[] = [
  {
    name: "MapsRankChecker",
    description:
      "Live Google Maps visibility scanning with a 7×7 grid and real-time local rankings.",
    tags: ["SEO", "Analytics"],
    url: "https://scan.mvphouse.app",
    status: "live",
    featured: true,
  },
  {
    name: "RepCleaner",
    description:
      "AI engine that flags spam, abusive, or invalid reviews and protects your reputation.",
    tags: ["AI", "Reputation"],
    url: "https://rep.mvphouse.app",
    status: "live",
    featured: true,
  },
  {
    name: "Forge.AI",
    description:
      "Internal creation framework that turns prompts into production-ready micro-apps.",
    tags: ["AI", "Builder"],
    url: "https://forge.mvphouse.app",
    status: "live",
    featured: true,
  },
  {
    name: "LocalHeatmap",
    description: "Local SEO heatmaps for multi-location businesses.",
    tags: ["SEO", "Insights"],
    url: "https://localheatmap.mvphouse.app",
    status: "live",
  },
  {
    name: "ReviewSync",
    description: "Monitor and sync reviews from every marketplace in one view.",
    tags: ["Automation", "Ops"],
    status: "coming-soon",
  },
  {
    name: "PromptPages",
    description: "Landing page snippets generated from a single prompt.",
    tags: ["AI", "Marketing"],
    status: "coming-soon",
  },
  {
    name: "AutoDocs",
    description: "Generate, version, and publish product docs automatically.",
    tags: ["Documentation", "Automation"],
    status: "coming-soon",
  },
  {
    name: "GeoTrigger",
    description: "Location-based automation triggers for local workflows.",
    tags: ["Automation", "Geo"],
    status: "coming-soon",
  },
  {
    name: "MailVault",
    description: "Store and search transactional email logs securely.",
    tags: ["Security", "Email"],
    status: "coming-soon",
  },
  {
    name: "DocWarden",
    description: "Policy and compliance doc versioning made simple.",
    tags: ["Compliance", "Docs"],
    status: "coming-soon",
  },
  {
    name: "FormPilot",
    description: "Form-to-API builder for internal teams and workflows.",
    tags: ["Automation", "Forms"],
    status: "coming-soon",
  },
  {
    name: "SignalPulse",
    description: "Alerts and KPIs across every micro-SaaS property in one stream.",
    tags: ["Ops", "Monitoring"],
    status: "coming-soon",
  },
];

const navLinks = [
  { label: "Apps", href: "#apps" },
  { label: "Docs", href: "#how" },
  { label: "About", href: "#inside" },
  { label: "Contact", href: "#footer" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "https://mvphouse.app/terms" },
  { label: "Privacy Policy", href: "https://mvphouse.app/privacy" },
  { label: "Refund & Cancellation Policy", href: "https://mvphouse.app/refund-policy" },
  { label: "Cookie Policy", href: "https://mvphouse.app/cookies" },
  { label: "Billing & Subscription Policy", href: "https://mvphouse.app/billing" },
  { label: "Acceptable Use Policy (AUP)", href: "https://mvphouse.app/acceptable-use" },
  { label: "Data Processing Agreement (DPA)", href: "https://mvphouse.app/dpa" },
  { label: "Subprocessors List", href: "https://mvphouse.app/subprocessors" },
  { label: "Security Policy", href: "https://mvphouse.app/security" },
  { label: "Fair Use Policy (FUP)", href: "https://mvphouse.app/fair-use" },
  { label: "AI Use & Disclosure Policy", href: "https://mvphouse.app/ai-policy" },
  { label: "Copyright & DMCA Policy", href: "https://mvphouse.app/dmca" },
];

const heroPreviewCards = [
  { title: "Ops Board", tag: "Automation" },
  { title: "Listings IQ", tag: "SEO" },
  { title: "InboxRadar", tag: "Email" },
  { title: "PromptStack", tag: "AI" },
  { title: "LeadBeams", tag: "Growth" },
  { title: "DocsPilot", tag: "Docs" },
];

const marketplaces = [
  "Flippa",
  "Acquire",
  "Empire Flippers",
  "Tiny Acquisitions",
  "Microns.io",
];

const buildSteps = [
  {
    title: "Research",
    body:
      "We identify underserved niches and real operator pain points in micro-SaaS markets.",
  },
  {
    title: "Build",
    body:
      "MVP Studio & MVP Labs prototype fast using AI-assisted development and strict minimalism.",
  },
  {
    title: "Ship",
    body:
      "We deploy live tools here and list the proven ones on trusted marketplaces.",
  },
];

const cultureHighlights = [
  "Micro-SaaS factory mindset",
  "AI-first development pipelines",
  "Fast shipping culture",
  "Multi-domain ecosystem: mvphouse.io, mvphouse.dev, mvphouse.app",
];

const philosophyCards = [
  {
    title: "Ship Fast",
    body: "Short build cycles, rapid iteration, and constant learning from real usage.",
  },
  {
    title: "AI-Native",
    body: "We treat AI as a core building block, not an afterthought.",
  },
  {
    title: "Minimal & Purposeful",
    body: "No bloat — just focused tools that solve specific problems.",
  },
];

export default function HomePage() {
  const featuredApps = apps.filter((app) => app.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[rgba(0,0,0,0.9)]">
      <NavBar />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturedApps apps={featuredApps} />
        <AppGallery apps={apps} />
        <HowWeBuild />
        <InsideMvpHouse />
        <Philosophy />
      </main>
      <SiteFooter />
    </div>
  );
}

const NavBar = () => (
  <header className="sticky top-0 z-50 border-b border-[#EDEDED] bg-white/90 backdrop-blur">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20 sm:px-8">
      <span className="text-lg font-semibold tracking-tight">MVP House</span>
      <nav className="flex items-center gap-6 text-sm font-medium text-[rgba(0,0,0,0.7)]">
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="transition hover:text-black/80"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="border-b border-[#F3F3F3] bg-white" id="hero">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          mvphouse.app
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          The Micro-SaaS We Build. All In One Place.
        </h1>
        <p className="text-lg text-[rgba(0,0,0,0.7)]">
          A curated gallery of internal products crafted inside MVP House — designed,
          built, and shipped with precision.
        </p>
        <div className="flex flex-col gap-4 text-sm font-semibold sm:flex-row">
          <Link
            href="#apps"
            className="inline-flex items-center justify-center rounded-xl bg-[#0066FF] px-6 py-3 text-white shadow-card transition hover:scale-[1.02] hover:shadow-xl"
          >
            Browse All Apps →
          </Link>
          <Link
            href="#inside"
            className="inline-flex items-center justify-center rounded-xl border border-[#E8E8E8] px-6 py-3 text-[rgba(0,0,0,0.7)] transition hover:border-[#d0d0d0]"
          >
            About MVP House
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {heroPreviewCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-[#F3F3F3] bg-white/70 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-card">
            <div className="mb-4 h-8 w-8 rounded-xl bg-gradient-to-br from-[#0066FF]/10 to-[#0066FF]/40"></div>
            <p className="text-sm font-semibold text-gray-800">{card.title}</p>
            <p className="text-xs text-gray-500">{card.tag}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof = () => (
  <section className="border-y border-[#F3F3F3] bg-white" aria-label="Marketplace logos">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-6 py-10 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
        Trusted by buyers on the world’s leading micro-SaaS marketplaces
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 text-base font-semibold tracking-[0.2em] text-gray-400">
        {marketplaces.map((name) => (
          <span key={name} className="transition hover:text-gray-600">
            {name}
          </span>
        ))}
      </div>
      <p className="text-sm text-[rgba(0,0,0,0.7)]">
        10+ micro-SaaS products successfully acquired.
      </p>
    </div>
  </section>
);

const FeaturedApps = ({ apps }: { apps: App[] }) => (
  <section className="bg-white" aria-labelledby="featured" id="featured">
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-10 flex flex-col gap-3">
        <h2 className="section-heading" id="featured">
          Featured Apps
        </h2>
        <p className="section-subheading max-w-2xl">
          Highlights from MVP Studio & MVP Labs — the tools we use daily and occasionally
          list on marketplaces.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <article
            key={app.name}
            className="flex h-full flex-col rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#EEF3FF] to-[#D6E6FF]"></div>
            <h3 className="text-2xl font-semibold text-gray-900">{app.name}</h3>
            <p className="mt-2 text-sm text-[rgba(0,0,0,0.65)]">{app.description}</p>
            <div className="mt-6">
              <Link
                href={app.url ?? "#"}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-semibold text-[#0066FF] transition hover:underline"
              >
                Open App →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const AppGallery = ({ apps }: { apps: App[] }) => (
  <section className="bg-white" id="apps" aria-labelledby="apps-heading">
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-12 text-center">
        <h2 className="section-heading" id="apps-heading">
          House Apps
        </h2>
        <p className="section-subheading mt-3">
          All the micro-SaaS tools we build inside MVP Studio &amp; MVP Labs.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <article
            key={app.name}
            className="flex h-full flex-col rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">{app.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                {app.status === "coming-soon" ? "Soon" : "Live"}
              </span>
            </div>
            <p className="mt-3 text-sm text-[rgba(0,0,0,0.65)]">{app.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E8E8E8] px-3 py-1 text-xs font-medium text-[rgba(0,0,0,0.6)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-5 text-sm font-semibold">
              {app.status === "coming-soon" || !app.url ? (
                <span className="text-gray-400">Coming soon</span>
              ) : (
                <Link
                  href={app.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#0066FF] transition hover:underline"
                >
                  Open App →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const HowWeBuild = () => (
  <section className="bg-white" id="how" aria-labelledby="how-heading">
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-12 text-center">
        <h2 className="section-heading" id="how-heading">
          How We Build
        </h2>
        <p className="section-subheading mt-3">
          A simple loop: research, build, ship — then repeat.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {buildSteps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-2xl border border-[#EAEAEA] bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F7FF] text-sm font-semibold text-[#0066FF]">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-3 text-sm text-[rgba(0,0,0,0.65)]">{step.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const InsideMvpHouse = () => (
  <section className="bg-white" id="inside" aria-labelledby="inside-heading">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
          Inside MVP House
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-gray-900 sm:text-4xl" id="inside-heading">
          We are a venture studio.
        </h2>
        <p className="mt-4 text-base text-[rgba(0,0,0,0.65)]">
          MVP House is a small, focused team that builds micro-SaaS apps, automation tools, and
          AI-driven utilities. We ship fast, keep things minimal, and treat every app like a tiny
          product with real users and real outcomes.
        </p>
        <ul className="mt-8 space-y-4 text-sm text-[rgba(0,0,0,0.8)]">
          {cultureHighlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F5F5F5] text-xs font-semibold text-[#0066FF]">
                •
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full rounded-[18px] border border-[#F0F0F0] bg-gradient-to-br from-[#F5F7FF] via-white to-[#E8F1FF] p-10 shadow-card">
        <div className="h-full rounded-2xl border border-dashed border-white/60 bg-white/50 p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-gray-400">Studio Snapshot</p>
          <p className="mt-6 text-2xl font-semibold text-gray-900">
            MVP Studio & Labs
          </p>
          <p className="mt-2 text-sm text-[rgba(0,0,0,0.65)]">
            30+ experiments / year · Multi-time marketplace exits · Operators first.
          </p>
          <div className="mt-8 grid gap-4 text-sm text-[rgba(0,0,0,0.8)]">
            <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Focus</p>
              <p className="mt-1 font-semibold">Micro-SaaS · AI · Automation</p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Stack</p>
              <p className="mt-1 font-semibold">Next.js · Edge · Internal APIs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
  <section className="bg-white" id="philosophy" aria-labelledby="philosophy-heading">
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="mb-12 text-center">
        <h2 className="section-heading" id="philosophy-heading">
          Our Philosophy
        </h2>
        <p className="section-subheading mt-3">
          Principles that guide how we build, launch, and sell micro-SaaS.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {philosophyCards.map((card) => (
          <article
            key={card.title}
            className="rounded-2xl border border-[#EAEAEA] bg-white p-6 shadow-sm"
          >
            <div className="mb-4 h-12 w-12 rounded-2xl bg-[#F5F7FF]"></div>
            <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
            <p className="mt-3 text-sm text-[rgba(0,0,0,0.65)]">{card.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SiteFooter = () => (
  <footer
    id="footer"
    className="border-t border-[#EDEDED] bg-[#FAFAFA] text-sm text-[rgba(0,0,0,0.7)]"
  >
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 sm:py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-gray-900">MVP House</p>
          <p className="mt-2 max-w-sm text-sm">Micro-SaaS built inside MVP Studio.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:text-right">
          <div className="flex flex-wrap gap-4 font-semibold text-gray-600 sm:justify-end">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-gray-900">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-gray-500">support@mvphouse.app</p>
        </div>
      </div>
      <div className="rounded-2xl border border-[#E3E3E3] bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
          MVP HOUSE LTD — Legal URLs (12 Belge)
        </p>
        <ul className="mt-4 grid gap-3 text-sm text-[rgba(0,0,0,0.7)] sm:grid-cols-2 lg:grid-cols-3">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-transparent px-2 py-1 transition hover:border-[#EAEAEA] hover:text-gray-900"
              >
                <span className="text-xs font-semibold text-[#0066FF]">●</span>
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="border-t border-[#EDEDED] py-4 text-center text-xs text-gray-500">
      © 2025 MVP House
    </div>
  </footer>
);
