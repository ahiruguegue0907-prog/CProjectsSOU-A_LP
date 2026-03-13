"use client";

import { useState } from "react";
import { navLinks, freeGuideUrl } from "../constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" aria-label="SOU-A トップへ">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-white font-bold text-sm">
              S
            </span>
            <span className="text-xl font-bold text-heading tracking-wide">
              SOU-A
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="メインナビゲーション">
            {navLinks.map((link) => {
              const isExternal = "external" in link && link.external;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-body hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href={freeGuideUrl}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            無料ガイドを受け取る
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-body"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-card bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-3" aria-label="モバイルナビゲーション">
            {navLinks.map((link) => {
              const isExternal = "external" in link && link.external;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-body hover:text-primary py-2 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={freeGuideUrl}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors mt-2"
              onClick={() => setMenuOpen(false)}
            >
              無料ガイドを受け取る
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
