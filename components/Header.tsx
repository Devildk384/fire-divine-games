"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Brand from "./Brand";

const navItems = [
  { label: "Games", href: "/#games" },
  { label: "Studio", href: "/studio" },
  { label: "Team", href: "/studio#team" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 820) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="site-header">
      <Brand />

      <nav
        id="primary-navigation"
        className={`main-nav ${open ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
            <span className="main-nav__arrow" aria-hidden="true">&#8594;</span>
          </Link>
        ))}
      </nav>

      <a
        className="header-cta"
        href="https://play.google.com/store/apps/dev?id=8878040228937888848"
        target="_blank"
        rel="noreferrer"
      >
        Play our games <span aria-hidden="true">&#8599;</span>
      </a>

      <button
        className={`menu-button ${open ? "is-open" : ""}`}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
