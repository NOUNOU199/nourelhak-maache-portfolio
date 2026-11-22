"use client";

import Link from "next/link";
import { MotionConfig } from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { copy, type Locale } from "./content";

type IconName =
  | "spark"
  | "asterisk"
  | "plus"
  | "left"
  | "right"
  | "down"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "external"
  | "download"
  | "copy"
  | "check";
export function Icon({ name }: { name: IconName }) {
  const paths = {
    spark: <path d="M12 1v22M1 12h22M4.2 4.2l15.6 15.6M4.2 19.8 19.8 4.2" />,
    asterisk: <path d="M12 1v22M2.5 6.5l19 11M2.5 17.5l19-11" />,
    plus: <path d="M5 12h14M12 5v14" />,
    left: <path d="m14 6-6 6 6 6" />,
    right: <path d="m10 6 6 6-6 6" />,
    down: <path d="M12 3v17m-6-6 6 6 6-6" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </>
    ),
    moon: <path d="M20.8 13.2A9 9 0 0 1 10.8 3.1 9 9 0 1 0 20.8 13.2Z" />,
    menu: <path d="M4 8h16M4 16h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    external: (
      <>
        <path d="M13 4h7v7m0-7L10 14" />
        <path d="M9 4H4v16h16v-5" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M15 8V3H3v13h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

type Context = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};
const Site = createContext<Context | null>(null);
export function useSite() {
  const site = useContext(Site);
  if (!site) throw new Error("Site provider is missing");
  return site;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("en");
  const [theme, updateTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    let storedLocale: Locale = "en";
    let storedTheme: "light" | "dark" =
      document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    try {
      storedLocale =
        localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";
      storedTheme =
        localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
    const urlLocale = new URLSearchParams(window.location.search).get("lang");
    if (urlLocale === "fr" || urlLocale === "en") storedLocale = urlLocale;
    document.documentElement.lang = storedLocale;
    document.documentElement.dataset.theme = storedTheme;
    const frame = requestAnimationFrame(() => {
      updateLocale(storedLocale);
      updateTheme(storedTheme);
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  function setLocale(value: Locale) {
    updateLocale(value);
    document.documentElement.lang = value;
    try {
      localStorage.setItem("portfolio-language", value);
    } catch {
      /* Keep controls usable without storage. */
    }
    const url = new URL(window.location.href);
    url.searchParams.set("lang", value);
    history.replaceState(null, "", url);
  }
  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    updateTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      /* Keep controls usable without storage. */
    }
  }
  return (
    <Site.Provider value={{ locale, setLocale, theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">
        <SiteHeader />
        {children}
      </MotionConfig>
    </Site.Provider>
  );
}

function SiteHeader() {
  const { locale, setLocale, theme, toggleTheme } = useSite();
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <header className="site-header" id="top">
        <div className="header-inner page-width">
          <Link
            href="/"
            className="wordmark"
            aria-label="Nourelhak Maache — home"
          >
            nm<span>.</span>
          </Link>
          <nav
            className={open ? "main-nav is-open" : "main-nav"}
            id="main-navigation"
            aria-label={
              locale === "en" ? "Main navigation" : "Navigation principale"
            }
          >
            {(
              [
                ["work", t.work],
                ["about", t.about],
                ["contact", t.contact],
              ] as const
            ).map(([id, label]) => (
              <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <span className="mobile-nav-location">{t.location}</span>
          </nav>
          <div className="header-tools">
            <button
              type="button"
              className="language-button"
              onClick={() => setLocale(locale === "en" ? "fr" : "en")}
              aria-label={t.language}
            >
              <span className={locale === "en" ? "is-current" : ""}>EN</span>
              <span className="language-divider">/</span>
              <span className={locale === "fr" ? "is-current" : ""}>FR</span>
            </button>
            <button
              className="icon-button theme-button"
              type="button"
              aria-label={theme === "dark" ? t.light : t.dark}
              onClick={toggleTheme}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
            <button
              type="button"
              className="icon-button mobile-menu-button"
              aria-label={open ? t.close : t.menu}
              aria-expanded={open}
              aria-controls="main-navigation"
              onClick={() => setOpen(!open)}
            >
              <Icon name={open ? "close" : "menu"} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const { locale } = useSite();
  const t = copy[locale];
  return (
    <footer className="site-footer page-width">
      <div className="footer-top">
        <Link
          href="/"
          className="wordmark"
          aria-label="Nourelhak Maache — home"
        >
          nm<span>.</span>
        </Link>
        <p>{t.footer}</p>
        <div className="social-links">
          <a
            href="https://github.com/NOUNOU199"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/maache-nourelhak-868115342/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Nourelhak Maache</span>
        <a href="#top">{t.backTop}</a>
      </div>
    </footer>
  );
}
