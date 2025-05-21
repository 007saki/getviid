import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
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
        {/* Nav Links */}
        <div className="flex gap-1 sm:gap-3 items-center">
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
    </nav>
  );
}