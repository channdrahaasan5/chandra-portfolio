import NavBar from "./NavBar";
import Reveal from "./Reveal";
import KineticHero from "./KineticHero";
import CursorGlow from "./CursorGlow";

const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "13+", label: "Apps Delivered" },
  { value: "4", label: "Biometric SDKs Integrated" },
  { value: "1", label: "Production SDK Shipped" },
];

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
      <h2 className="mt-2 text-4xl font-black tracking-tighter sm:text-5xl">{title}</h2>
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
    <>
      <CursorGlow />
      <NavBar />
      <main className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <KineticHero />

        {/* Stats */}
        <Reveal>
          <section className="grid grid-cols-2 gap-6 border-t border-border py-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </section>
        </Reveal>

        {/* About */}
        <Reveal>
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
        </Reveal>

        {/* Featured Projects */}
        <section id="projects" className="border-t border-border py-20">
          <Reveal>
            <p className="text-sm font-medium tracking-wide text-accent uppercase">Selected Work</p>
            <h2 className="mt-2 text-5xl font-black tracking-tighter sm:text-6xl">
              Featured Projects
            </h2>
          </Reveal>

          <div className="mt-14 divide-y divide-border border-t border-border">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.06}>
                <details className="group py-8">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <div className="flex items-start gap-6">
                      <span className="pt-1 text-sm font-mono text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-accent">{project.role}</p>
                      </div>
                    </div>
                    <span className="pt-1 text-2xl text-muted transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-4 pl-0 sm:pl-12">
                    <p className="max-w-2xl text-base leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h3 className="mt-16 mb-6 text-xl font-semibold">Additional Projects</h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {additionalProjects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-border p-5">
                  <h4 className="font-medium">{project.title}</h4>
                  <p className="mt-1 text-xs text-muted">{project.tech}</p>
                  <p className="mt-2 text-sm text-muted">{project.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-border py-20">
          <Reveal>
            <SectionHeading eyebrow="Toolbox" title="Skills" />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.05}>
                <div>
                  <h3 className="text-sm font-semibold text-muted uppercase tracking-wide">
                    {group.label}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-border py-20">
          <Reveal>
            <SectionHeading eyebrow="Career" title="Experience" />
          </Reveal>
          <div className="space-y-8">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted">
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-accent">{job.period}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact */}
        <Reveal>
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
                href="tel:+919652220652"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-surface"
              >
                +91 96522 20652
              </a>
            </div>
          </section>
        </Reveal>

        <footer className="border-t border-border py-10 text-center text-sm text-muted">
          © {new Date().getFullYear()} B. Chandra Hasan. Built with Next.js &amp; Tailwind CSS.
        </footer>
      </main>
    </>
  );
}
