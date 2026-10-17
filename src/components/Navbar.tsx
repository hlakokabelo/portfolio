import { useEffect, useRef, useState } from "react";
import {
  FaUser,
  FaCode,
  FaTools,
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaGithub,
} from "react-icons/fa";

const links = [
  { href: "#about", label: "About", icon: FaUser },
  { href: "#projects", label: "Projects", icon: FaCode },
  { href: "#skills", label: "Skills", icon: FaTools },
  { href: "#experience", label: "Experience", icon: FaBriefcase },
  { href: "#education", label: "Education", icon: FaGraduationCap },
  { href: "#certifications", label: "Certifications", icon: FaCertificate },
  { href: "#contact", label: "Contact", icon: FaEnvelope },
];

const githubUrl = "https://github.com/hlakokabelo";

const linkStyles =
  "flex items-center gap-2 rounded-md text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !menuButtonRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-slate-800/70 bg-slate-950/90 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "border-transparent bg-slate-950/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          className="shrink-0 font-mono text-base tracking-tight text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Kabelo Hlako — Home"
        >
          kabelo<span className="text-accent">.</span>hlako
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-5 lg:flex">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a href={href} className={linkStyles}>
                <Icon aria-hidden="true" className="text-sm" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop GitHub link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkStyles} hidden border border-slate-800 px-3 py-2 hover:border-slate-600 sm:flex`}
        >
          <FaGithub aria-hidden="true" className="text-base" />
          <span>GitHub</span>
          <span aria-hidden="true" className="text-xs">
            ↗
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" className="text-xl" />
          ) : (
            <FaBars aria-hidden="true" className="text-xl" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-800/70 transition-all duration-200 lg:hidden ${
          menuOpen
            ? "max-h-[80vh] overflow-y-auto opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
        inert={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <ul className="mx-auto max-w-6xl space-y-1 px-6 py-4">
          {links.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon aria-hidden="true" className="text-base text-accent" />
                {label}
              </a>
            </li>
          ))}

          <li className="border-t border-slate-800 pt-2 sm:hidden">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuOpen ? 0 : -1}
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800/70 hover:text-white"
            >
              <FaGithub aria-hidden="true" className="text-base" />
              GitHub profile ↗
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
