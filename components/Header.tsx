"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MenuShapeIcon from "./MenuShapeIcon";

const NAV_LINKS = [
  { label: "Why Berlin?", href: "/why-berlin" },
  { label: "Key Industries", href: "/key-industries" },
  { label: "News & Events", href: "/news-events" },
  { label: "Meet Us", href: "/meet-us" },
];

const LOGO_SRC = "/images/berlin-business-office-usa-logo.svg";
// Mobile bar uses the stacked footer logo, matching the live site.
const MOBILE_LOGO_SRC = "/images/berlin-business-office-usa-logo-footer.svg";

/**
 * Header — replicates the live site:
 *  - desktop: fixed, transparent over the hero, turns white once scrolled
 *  - mobile (<=991px): hidden, replaced by a top bar + left slideout menu
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the slideout is open
  useEffect(() => {
    document.documentElement.classList.toggle("slideout-open", open);
    return () => document.documentElement.classList.remove("slideout-open");
  }, [open]);

  return (
    <>
      {/* Desktop header */}
      <header className={`header-area${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-12" style={{ width: "100%" }}>
              <div className="header">
                <div className="menu-left">
                  <Link href="https://www.berlinoffice-usa.com/" rel="home">
                    <span className="single-image-holder">
                      <Image
                        src={LOGO_SRC}
                        width={270}
                        height={49}
                        alt="Berlin Business Office, USA"
                        priority
                      />
                    </span>
                  </Link>
                </div>
                <div className="menu">
                  <ul className="menu-nav">
                    <li className="menu-item-icon no-link">
                      <MenuShapeIcon />
                    </li>
                    {NAV_LINKS.map((item) => (
                      <li
                        key={item.href}
                        className={pathname === item.href ? "active" : undefined}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile top bar: hamburger (left) + stacked logo (right) */}
      <div className="panel-header">
        <button
          type="button"
          className="btn-hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </button>
        <div className="mobile-logo">
          <Link href="https://www.berlinoffice-usa.com/" rel="home">
            <Image
              src={MOBILE_LOGO_SRC}
              width={150}
              height={78}
              alt="Berlin Business Office, USA"
            />
          </Link>
        </div>
      </div>

      {/* Mobile slideout menu */}
      <div
        className="slideout-overlay"
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <nav id="menu" className="slideout-menu slideout-menu-left" aria-label="Mobile">
        <section className="menu-section">
          <ul className="menu-section-list">
            <li className="menu-shape-li">
              <MenuShapeIcon />
            </li>
            {NAV_LINKS.map((item) => (
              <li
                key={item.href}
                className={pathname === item.href ? "active" : undefined}
              >
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </>
  );
}
