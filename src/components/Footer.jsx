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
  { title: "InternConnect Platform",   tags: "React · Node.js · Express · MySQL", color: "#1E6FA6", href: "#projects" },
  { title: "E-Commerce Website",       tags: "React · Laravel · MySQL",           color: "#C9A84C", href: "#projects" },
  { title: "School Management System", tags: "Laravel · Livewire · MySQL · Flux UI", color: "#4CAF50", href: "#projects" },
  { title: "InventoryPro",             tags: "React · Node.js · Express · MySQL", color: "#E24B4A", href: "#projects" },
];

const SOCIALS = [
  { icon: "ti-brand-github",   label: "GitHub",   href: "https://github.com/gilbertlyimo"        },
  { icon: "ti-brand-linkedin", label: "LinkedIn",  href: "https://linkedin.com/in/gilbertlyimo"   },
  { icon: "ti-mail",           label: "Email",     href: "mailto:gillyimo2009@gmail.com"           },
  { icon: "ti-phone",          label: "Phone",     href: "tel:+255746731864"                      },
];

const STATS = [
  { value: "3+",  label: "Months at TRA"   },
  { value: "4+", label: "Projects ongoing"  },
  { value: "2",   label: "Languages"      },
];

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied]   = useState(false);

  /* Intersection observer – animate in when scrolled into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  /* Smooth-scroll helper */
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* Copy email to clipboard */
  const copyEmail = () => {
    navigator.clipboard.writeText("gillyimo2009@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* Back to top */
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={`gl-footer ${visible ? "gl-footer--visible" : ""}`} ref={footerRef}>

      {/* ── Gold accent bar ── */}
      <div className="gl-footer__bar" />

      <div className="gl-footer__inner">

        {/* ── Top grid ── */}
        <div className="gl-footer__grid">

          {/* Col 1 — Brand */}
          <div className="gl-footer__brand gl-footer__col--anim" style={{ "--delay": "0ms" }}>
            <div className="gl-footer__avatar">GI</div>
            <h2 className="gl-footer__name">Gilbert Lyimo</h2>
            <p className="gl-footer__role">Audit Officer &amp; Freelance Developer</p>
            <p className="gl-footer__bio">
              Based in Dar es Salaam, Tanzania. I blend financial expertise with
              modern web development to deliver clean, purposeful digital solutions.
            </p>

            {/* Social icons */}
            <div className="gl-footer__socials">
              {SOCIALS.map(({ icon, label, href }) => (
                <a key={label} href={href} className="gl-footer__soc" aria-label={label}
                   target={href.startsWith("http") ? "_blank" : undefined}
                   rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  <i className={`ti ${icon}`} aria-hidden="true" />
                </a>
              ))}
              <button className="gl-footer__soc gl-footer__soc--copy"
                      onClick={copyEmail} title="Copy email" aria-label="Copy email address">
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
                <button key={label} className="gl-footer__nav-link"
                        onClick={() => scrollTo(href)}>
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
              <button key={title} className="gl-footer__proj"
                      onClick={() => scrollTo(href)}>
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
              <a href="mailto:gillyimo2009@gmail.com" className="gl-footer__hire-btn">
                <i className="ti ti-send" aria-hidden="true" />
                Get in touch
              </a>
              <a href="tel:+255746731864" className="gl-footer__hire-call">
                <i className="ti ti-phone" aria-hidden="true" />
                +255 746 731 864
              </a>
            </div>
          </div>

        </div>{/* /grid */}

        {/* ── Divider ── */}
        <div className="gl-footer__divider" />

        {/* ── Bottom bar ── */}
        <div className="gl-footer__bottom">
          <p className="gl-footer__copy">
            © {new Date().getFullYear()}&nbsp;
            <span className="gl-footer__copy-name">Gilbert Lyimo</span>.
            &nbsp;Built with React in&nbsp;
            <span className="gl-footer__copy-name">Dar es Salaam</span>.
          </p>
          <div className="gl-footer__bottom-links">
            <button className="gl-footer__blink" onClick={() => scrollTo("#contact")}>
              Contact
            </button>
            <a className="gl-footer__blink"
               href="/Gilbert_Isidory_CV.pdf" download>
              Download CV
            </a>
            <button className="gl-footer__blink" onClick={backToTop}>
              Back to top&nbsp;↑
            </button>
          </div>
        </div>

      </div>{/* /inner */}
    </footer>
  );
}
