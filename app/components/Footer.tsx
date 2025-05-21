import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur border-t border-blue-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 mb-2" aria-label="Home">
            <img src="/logo.png" alt="G.E.T.V.I.I.D. Logo" width={32} height={32} />
            <span className="text-lg font-bold text-blue-800 tracking-tight">G.E.T.V.I.I.D.</span>
          </Link>
          <span className="text-sm text-gray-500 text-center md:text-left">
            Empowering individuals to recognize, heal, and prevent domestic violence.
          </span>
        </div>
        {/* Footer Links */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/about" className="text-gray-700 hover:text-blue-700 text-sm transition">About</Link>
          <Link href="/resources" className="text-gray-700 hover:text-blue-700 text-sm transition">Resources</Link>
          <Link href="/forum" className="text-gray-700 hover:text-blue-700 text-sm transition">Forum</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700 text-sm transition">Contact</Link>
          <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-700 text-sm transition">Privacy Policy</Link>
          <Link href="/terms-of-use" className="text-gray-700 hover:text-blue-700 text-sm transition">Terms of Use</Link>
        </div>
        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3 mb-1">
            <a href="mailto:sakiasi@getviid.com" aria-label="Email" className="text-blue-700 hover:text-blue-900 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 4.94A2.5 2.5 0 0 1 5.5 4h9a2.5 2.5 0 0 1 2.56.94l-7.06 5.3-7.06-5.3zm14.56 1.32v7.5A2.25 2.25 0 0 1 15.25 16h-10.5A2.25 2.25 0 0 1 2.5 13.76v-7.5l7.56 5.68a1 1 0 0 0 1.18 0l7.56-5.68z"/></svg>
            </a>
            {/* Add more social icons here if needed */}
          </div>
          <span className="text-xs text-gray-400">&copy; {new Date().getFullYear()} G.E.T.V.I.I.D. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}