import PocApps from "./PocApps";

const skillGroups = [
  {
    label: "Programming Languages",
    items: ["Swift", "Objective-C", "Kotlin", "Java", "Dart", "TypeScript", "JavaScript", "HTML", "PHP"],
  },
  {
    label: "Mobile Platforms & Frameworks",
    items: ["iOS (UIKit, SwiftUI)", "Android", "Flutter", "React Native", "Apache Cordova"],
  },
  {
    label: "SDK & Identity Technologies",
    items: [
      "SDK Development (SPM, CocoaPods)",
      "Biometrics",
      "Fingerprint Authentication",
      "Face Recognition",
      "KYC / Identity Verification",
      "Tech5",
      "IDEMIA Finger Capture SDK",
      "Regula OCR SDK",
      "Innovatrics DOT SDK",
    ],
  },
  {
    label: "Backend & APIs",
    items: ["RESTful API Development", "XML/JSON Parsing", "PHP REST APIs", "Firebase (Crashlytics, Push Notifications)"],
  },
  {
    label: "Databases",
    items: ["SQLite", "CoreData", "MySQL"],
  },
  {
    label: "Architecture & Engineering",
    items: [
      "MVC / MVVM Architecture",
      "Performance Optimization",
      "Offline Storage Management",
      "Code Review",
      "Debugging & Maintenance",
    ],
  },
  {
    label: "Tools & Deployment",
    items: ["Xcode", "Android Studio", "VS Code", "GitHub", "Postman", "Hostinger", "GoDaddy"],
  },
];

const featuredProjects = [
  {
    title: "IDEMIA Wallet SDK — React Native SDK Development",
    role: "Mobile Application / SDK Developer",
    tech: ["React Native", "TypeScript", "Swift", "Kotlin", "IDEMIA Wallet SDK"],
    description:
      "Engineered a React Native interface for the IDEMIA Wallet SDK, bridging native iOS and Android wallet capabilities. Delivered a sample application and complete technical documentation covering setup, configuration, APIs, callbacks, and troubleshooting.",
  },
  {
    title: "Emirates ID Integrated KYC — Native & Hybrid",
    role: "Android & iOS Developer",
    tech: ["Java", "Swift", "Flutter", "Cordova", "Firebase"],
    description:
      "Created KYC applications for Android and iOS integrating Emirates ID and biometric authentication for identity verification in banking and government services.",
  },
  {
    title: "Digital Onboarding Solution — Bank of Abyssinia",
    role: "Android Developer",
    tech: ["Java", "Firebase", "IDEMIA Finger Capture", "Regula OCR"],
    description:
      "Developed a KYC Android application for customer registration, integrating biometric authentication and ID verification with backend systems.",
  },
  {
    title: "BioHaazNetwork iOS SDK — v1.0.5",
    role: "SDK Author",
    tech: ["Swift", "URLSession", "Swift Package Manager", "CocoaPods"],
    description:
      "Designed and shipped a reusable iOS networking SDK for high-performance API communication, distributed via SPM and CocoaPods. Features request/response interceptors, structured API logging, offline request queuing, automatic retry handling, and multi-environment configuration.",
  },
];

const additionalProjects = [
  {
    title: "Aptiway FlowDesk (Ongoing)",
    tech: "React Native, PHP, MySQL, React JS",
    description:
      "Internal business/workflow management tool for Aptiway Technologies — React Native mobile app, PHP REST API backend, and React JS admin panel, deployed on Hostinger.",
  },
  {
    title: "Selected Flutter Applications — GScience, STC, APCOST",
    tech: "Flutter, PHP, MySQL, React JS",
    description:
      "End-to-end delivery of three citizen/public-service platforms sharing a common stack: Flutter mobile app, PHP REST API backend, and React JS admin panel, deployed on GoDaddy.",
  },
  {
    title: "Timesheet Mobile iOS",
    tech: "Objective-C, Firebase",
    description: "Timekeeping and location-tracking app for healthcare and transportation industries.",
  },
  {
    title: "JNTUK App — Android",
    tech: "Java, Firebase",
    description: "University news and notifications app with real-time push alerts.",
  },
  {
    title: "Kanna BJP — iOS",
    tech: "Swift",
    description: "Events/updates app for a state political leader, published to the App Store.",
  },
  {
    title: "APSPDCL / APCPDCL — iOS",
    tech: "Objective-C",
    description: "Utility apps for complaint registration, connections, and billing.",
  },
  {
    title: "My Contact — Personal iOS",
    tech: "Swift",
    description: "Contact management app with syncing and a custom UI.",
  },
];

const experience = [
  {
    title: "Senior Mobile Application Developer",
    company: "Aptiway Technologies",
    location: "Hyderabad, Telangana, India",
    period: "Sep 2021 – Present",
  },
  {
    title: "iOS Application Developer",
    company: "Invensis Technologies",
    location: "Tirupathi, Andhra Pradesh, India",
    period: "May 2021 – Sep 2021",
  },
  {
    title: "iOS Application Developer",
    company: "Spgon Software Solutions",
    location: "Rajahmundry, Andhra Pradesh, India",
    period: "Apr 2018 – Apr 2021",
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium tracking-wide text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 sm:px-8">
      {/* Nav */}
      <header className="flex items-center justify-between py-6">
        <span className="font-semibold tracking-tight">B. Chandra Hasan</span>
        <nav className="hidden gap-6 text-sm text-muted sm:flex">
          <a href="#projects" className="hover:text-foreground">Projects</a>
          <a href="#poc-apps" className="hover:text-foreground">POC Apps</a>
          <a href="#skills" className="hover:text-foreground">Skills</a>
          <a href="#experience" className="hover:text-foreground">Experience</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="flex min-h-[70vh] flex-col justify-center py-16">
        <p className="text-sm font-medium tracking-wide text-accent uppercase">
          Senior Mobile Application Developer
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Building native &amp; cross-platform mobile apps, SDKs, and biometric KYC systems.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          8+ years shipping iOS, Android, Flutter, and React Native applications for banking
          and government clients — with particular depth in SDK development and biometric
          identity verification.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-border py-20">
        <SectionHeading eyebrow="About" title="Summary" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted">
          Senior Mobile Application Developer with 8+ years building native (iOS, Android)
          and cross-platform (Flutter, React Native, Apache Cordova) applications, with
          particular depth in SDK development and biometric/KYC identity verification for
          banking and government clients. Owns projects end-to-end — from Swift/Kotlin
          application code through PHP REST API backends to production deployment — and
          has shipped a standalone iOS networking SDK (BioHaazNetwork) alongside a React
          Native bridge for the IDEMIA Wallet SDK.
        </p>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="border-t border-border py-20">
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-accent">{project.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-16 mb-6 text-xl font-semibold">Additional Projects</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {additionalProjects.map((project) => (
            <div key={project.title} className="rounded-xl border border-border p-5">
              <h4 className="font-medium">{project.title}</h4>
              <p className="mt-1 text-xs text-muted">{project.tech}</p>
              <p className="mt-2 text-sm text-muted">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POC Apps */}
      <section id="poc-apps" className="border-t border-border py-20">
        <SectionHeading eyebrow="Hands-on Builds" title="POC Apps" />
        <p className="-mt-6 mb-10 max-w-2xl text-sm text-muted">
          Tap a card to see the full details. (Screenshots and details coming soon — placeholders shown for now.)
        </p>
        <PocApps />
      </section>

      {/* Skills */}
      <section id="skills" className="border-t border-border py-20">
        <SectionHeading eyebrow="Toolbox" title="Skills" />
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-border py-20">
        <SectionHeading eyebrow="Career" title="Experience" />
        <div className="space-y-8">
          {experience.map((job) => (
            <div key={job.company} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-sm text-muted">
                  {job.company} — {job.location}
                </p>
              </div>
              <p className="text-sm font-medium text-accent">{job.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border py-20">
        <SectionHeading eyebrow="Get in Touch" title="Contact" />
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:channdrahaasan5@gmail.com"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
          >
            channdrahaasan5@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/chandra-hasan-88023819b/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted transition hover:bg-surface"
            title="Add your GitHub profile URL here"
          >
            GitHub (add your URL)
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} B. Chandra Hasan. Built with Next.js &amp; Tailwind CSS.
      </footer>
    </main>
  );
}
