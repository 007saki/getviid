import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white/80 backdrop-blur border-t border-blue-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 mb-2" aria-label="Home">
            <img src="/logo.png" alt="G.E.T.V.I.I.D. Logo" width={32} height={32} />
            <span className="text-lg font-bold text-blue-800 tracking-tight">G.E.T.V.I.I.D.</span>
          </Link>
          <span className="text-sm text-gray-500 text-center md:text-left max-w-xs">
            Empowering individuals to recognize, heal, and prevent domestic violence.
          </span>
          <div className="mt-3 flex flex-col gap-1 text-xs text-gray-400">
            <span>
              <span className="font-semibold text-blue-700">Support:</span>{" "}
              <a href="mailto:support@getviid.com" className="hover:underline">support@getviid.com</a>
            </span>
           
            <span>
              <span className="font-semibold text-blue-700">Location:</span>{" "}
              Suva, Fiji
            </span>
          </div>
          {/* Newsletter Signup */}
          <form className="mt-4 w-full max-w-xs">
            <label htmlFor="newsletter" className="block text-xs font-semibold text-blue-700 mb-1">
              Subscribe for updates
            </label>
            <div className="flex">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                className="flex-1 px-2 py-1 rounded-l border border-blue-200 focus:outline-none text-xs"
                autoComplete="email"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-blue-700 text-white rounded-r text-xs font-semibold hover:bg-blue-800 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        {/* Footer Links */}
        <div className="flex flex-col items-center md:items-center gap-2">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/about" className="text-gray-700 hover:text-blue-700 text-sm transition">About</Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-700 text-sm transition">Resources</Link>
            <Link href="/forum" className="text-gray-700 hover:text-blue-700 text-sm transition">Forum</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-700 text-sm transition">Contact</Link>
            <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-700 text-sm transition">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-gray-700 hover:text-blue-700 text-sm transition">Terms of Use</Link>
            <a href="https://github.com/sakibkom/getviid" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 text-sm transition">GitHub</a>
            <Link href="/sitemap.xml" className="text-gray-700 hover:text-blue-700 text-sm transition">Sitemap</Link>
          </div>
          {/* Emergency Exit */}
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-3 py-1 bg-red-600 text-white text-xs rounded font-semibold hover:bg-red-700 transition"
            title="Quickly leave this site"
          >
            Emergency Exit
          </a>
        </div>
        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-3 mb-1">
            <a href="mailto:sakiasi@getviid.com" aria-label="Email" className="text-blue-700 hover:text-blue-900 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 4.94A2.5 2.5 0 0 1 5.5 4h9a2.5 2.5 0 0 1 2.56.94l-7.06 5.3-7.06-5.3zm14.56 1.32v7.5A2.25 2.25 0 0 1 15.25 16h-10.5A2.25 2.25 0 0 1 2.5 13.76v-7.5l7.56 5.68a1 1 0 0 0 1.18 0l7.56-5.68z"/></svg>
            </a>
            <a href="https://github.com/sakibkom/getviid" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.853 0 1.337-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            </a>
            <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.548 1.67 4.905c-.386.663-.607 1.434-.607 2.26 0 1.56.794 2.936 2.003 3.744a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4.002 3.604 4.417-.377.103-.775.158-1.185.158-.29 0-.57-.028-.845-.08.57 1.78 2.23 3.08 4.19 3.12A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.19-.004-.38-.013-.57A9.1 9.1 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/></svg>
            </a>
            <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0"/></svg>
            </a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.6v5.596z"/></svg>
            </a>
          </div>
          <span className="text-xs text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} G.E.T.V.I.I.D. All rights reserved.
          </span>
          <span className="text-xs text-gray-400 text-center md:text-right">
            Built by <a href="https://github.com/sakibkom" target="_blank" rel="noopener noreferrer" className="hover:underline">Sakiasi Baleiwai Komaidrakulu</a>
          </span>
        </div>
      </div>
    </footer>
  );
}