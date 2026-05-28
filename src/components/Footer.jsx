import { useEffect, useRef, useState } from "react";
import "./Footer.css";

const NAV_LINKS = [
  { label: "About",      icon: "ti-user",        href: "#about"      },
  { label: "Skills",     icon: "ti-code",         href: "#skills"     },
  { label: "Projects",   icon: "ti-briefcase",    href: "#projects"   },
  { label: "Experience", icon: "ti-building",     href: "#experience" },
  { label: "Education",  icon: "ti-school",       href: "#education"  },
  { label: "Contact",    icon: "ti-message",      href: "#contact"    },
];

const PROJECTS = [
  { title: "InternConnect Platform",   tags: "React · Node.js · Express · MySQL",    color: "#1E6FA6", href: "#projects" },
  { title: "E-Commerce Website",       tags: "React · Laravel · MySQL",              color: "#C9A84C", href: "#projects" },
  { title: "School Management System", tags: "Laravel · Livewire · MySQL · Flux UI", color: "#4CAF50", href: "#projects" },
  { title: "InventoryPro",             tags: "React · Node.js · Express · MySQL",    color: "#E24B4A", href: "#projects" },
];

// ── UPDATE YOUR REAL LINKS HERE ──────────────────────────────────────
const SOCIALS = [
  {
    icon:  "ti-brand-github",
    label: "GitHub",
    // ✅ Replace 'gilbertlyimo' with your actual GitHub username
    href:  "https://github.com/gilberas",
  },
  {
    icon:  "ti-brand-linkedin",
    label: "LinkedIn",
    // ✅ Replace 'gilbertlyimo' with your actual LinkedIn username
    href:  "https://linkedin.com/in/GILBERT LYIMO",
  },
  {
    icon:  "ti-brand-whatsapp",
    label: "WhatsApp",
    // ✅ Your WhatsApp — opens chat directly
    href:  "https://wa.me/255746731864?text=Hi%20Gilbert%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
  },
  {
    icon:  "ti-mail",
    label: "Email",
    // ✅ Your real email
    href:  "mailto:gillyimo2009@gmail.com",
  },
  {
    icon:  "ti-phone",
    label: "Phone",
    // ✅ Your real phone
    href:  "tel:+255746731864",
  },
];

const STATS = [
  { value: "3+", label: "Months at TRA"    },
  { value: "4+", label: "Projects ongoing" },
  { value: "2",  label: "Languages"        },
];

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied]   = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("gillyimo2009@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={`gl-footer ${visible ? "gl-footer--visible" : ""}`} ref={footerRef}>

      <div className="gl-footer__bar" />

      <div className="gl-footer__inner">
        <div className="gl-footer__grid">

          {/* Col 1 — Brand */}
          <div className="gl-footer__brand gl-footer__col--anim" style={{ "--delay": "0ms" }}>
            <div className="gl-footer__avatar">GI</div>
            <h2 className="gl-footer__name">Gilbert Isidory</h2>
            <p className="gl-footer__role">Audit Officer &amp; Freelance Developer</p>
            <p className="gl-footer__bio">
              Based in Dar es Salaam, Tanzania. I blend financial expertise with
              modern web development to deliver clean, purposeful digital solutions.
            </p>

            {/* Social icons */}
            <div className="gl-footer__socials">
              {SOCIALS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="gl-footer__soc"
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  title={label}
                >
                  <i className={`ti ${icon}`} aria-hidden="true" />
                </a>
              ))}
              {/* Copy email button */}
              <button
                className="gl-footer__soc gl-footer__soc--copy"
                onClick={copyEmail}
                title={copied ? "Copied!" : "Copy email address"}
                aria-label="Copy email address"
              >
                <i className={`ti ${copied ? "ti-check" : "ti-copy"}`} aria-hidden="true" />
              </button>
            </div>

            {/* Stats */}
            <div className="gl-footer__stats">
              {STATS.map(({ value, label }) => (
                <div key={label} className="gl-footer__stat">
                  <span className="gl-footer__stat-n">{value}</span>
                  <span className="gl-footer__stat-l">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="gl-footer__col gl-footer__col--anim" style={{ "--delay": "80ms" }}>
            <p className="gl-footer__col-title">Navigate</p>
            <nav aria-label="Footer navigation">
              {NAV_LINKS.map(({ label, icon, href }) => (
                <button key={label} className="gl-footer__nav-link" onClick={() => scrollTo(href)}>
                  <i className={`ti ${icon}`} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </nav>
          </div>

          {/* Col 3 — Projects */}
          <div className="gl-footer__col gl-footer__col--anim" style={{ "--delay": "160ms" }}>
            <p className="gl-footer__col-title">Recent projects</p>
            {PROJECTS.map(({ title, tags, color, href }) => (
              <button key={title} className="gl-footer__proj" onClick={() => scrollTo(href)}>
                <span className="gl-footer__proj-dot" style={{ background: color }} />
                <span className="gl-footer__proj-info">
                  <span className="gl-footer__proj-title">{title}</span>
                  <span className="gl-footer__proj-tags">{tags}</span>
                </span>
                <i className="ti ti-arrow-right gl-footer__proj-arrow" aria-hidden="true" />
              </button>
            ))}
          </div>

          {/* Col 4 — Hire me */}
          <div className="gl-footer__col gl-footer__col--anim" style={{ "--delay": "240ms" }}>
            <p className="gl-footer__col-title">Hire me</p>
            <div className="gl-footer__hire">
              <span className="gl-footer__avail">
                <span className="gl-footer__avail-dot" />
                Available for work
              </span>
              <h3 className="gl-footer__hire-title">Open to freelance projects</h3>
              <p className="gl-footer__hire-sub">
                Web apps, dashboards, auditing tools &amp; consulting.
                Let&apos;s build something great together.
              </p>

              {/* WhatsApp — Get in touch */}
              <a
                href="https://wa.me/255746731864?text=Hi%20Gilbert%2C%20I%20visited%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="gl-footer__hire-btn"
              >
                <i className="ti ti-brand-whatsapp" aria-hidden="true" />
                Get in touch
              </a>

              {/* Direct call */}
              <a href="tel:+255746731864" className="gl-footer__hire-call">
                <i className="ti ti-phone" aria-hidden="true" />
                +255 746 731 864
              </a>
            </div>
          </div>

        </div>

        <div className="gl-footer__divider" />

        {/* Bottom bar */}
        <div className="gl-footer__bottom">
          <p className="gl-footer__copy">
            © {new Date().getFullYear()}&nbsp;
            <span className="gl-footer__copy-name">Gilbert Isidory</span>.
            &nbsp;Built with React in&nbsp;
            <span className="gl-footer__copy-name">Dar es Salaam</span>.
          </p>
          <div className="gl-footer__bottom-links">
            <button className="gl-footer__blink" onClick={() => scrollTo("#contact")}>
              Contact
            </button>
            <a
              className="gl-footer__blink"
              href="/cv/Gilbert_Isidory_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <button className="gl-footer__blink" onClick={backToTop}>
              Back to top ↑
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
