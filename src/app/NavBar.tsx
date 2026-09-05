"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#" className="font-semibold tracking-tight">
          B. Chandra Hasan
        </a>
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={
                active === link.id
                  ? "font-medium text-accent"
                  : "text-muted transition hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/Chandra_Hasan_Resume.pdf"
            download
            className="hidden rounded-full border border-border px-4 py-2 text-xs font-semibold transition hover:bg-surface sm:inline-block"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
