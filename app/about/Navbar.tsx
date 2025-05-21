import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Home">
          <Image
            src="/logo.png"
            alt="G.E.T.V.I.I.D. Logo"
            width={40}
            height={40}
            className="hover:scale-105 transition-transform"
            priority
          />
        </Link>
        <div className="flex gap-4">
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            About
          </Link>
          <Link
            href="/resources"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Resources
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Privacy
          </Link>
          <Link
            href="/terms-of-use"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Terms
          </Link>
          <Link
            href="/forum"
            className="text-gray-700 hover:text-blue-700 transition-colors font-medium"
          >
            Forum
          </Link>
        </div>
      </div>
    </nav>
  );
}