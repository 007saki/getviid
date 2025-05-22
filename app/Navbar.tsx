
'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="G.E.T.V.I.I.D. Logo"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform duration-200"
            priority
          />
          <span className="ml-2 text-xl font-bold text-blue-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200 hidden sm:inline">
            G.E.T.V.I.I.D.
          </span>
        </Link>
        {/* Hamburger Button */}
        <button
          className="sm:hidden flex items-center px-2 py-2 rounded-md text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                menuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        {/* Nav Links */}
        <div className="hidden sm:flex gap-1 sm:gap-3 items-center">
          {(
            [
              { href: "/about", label: "About" },
              { href: "/resources", label: "Resources" },
              { href: "/contact", label: "Contact" },
              { href: "/privacy-policy", label: "Privacy" },
              { href: "/terms-of-use", label: "Terms" },
              { href: "/forum", label: "Forum" },
            ] as const
          ).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 rounded-md text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur shadow-md border-t border-blue-100">
          <div className="flex flex-col px-4 py-2 gap-1">
            {(
              [
                { href: "/about", label: "About" },
                { href: "/resources", label: "Resources" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy-policy", label: "Privacy" },
                { href: "/terms-of-use", label: "Terms" },
                { href: "/forum", label: "Forum" },
              ] as const
            ).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}