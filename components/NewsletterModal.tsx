
'use client'
import React, { useState, useEffect } from "react";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  // Show modal after 10 seconds, or only once per session
  useEffect(() => {
    const hasShown = sessionStorage.getItem("newsletter-shown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("newsletter-shown", "true");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">Stay Updated!</h2>
        <p className="text-gray-700 mb-4 text-center">
          Subscribe to our newsletter for the latest resources, updates, and community news.
        </p>
        <form
          className="flex flex-col gap-3"
          onSubmit={e => {
            e.preventDefault();
            setOpen(false);
            // Optionally, handle submission here
          }}
        >
          <input
            type="email"
            required
            placeholder="Your email"
            className="px-3 py-2 rounded border border-blue-200 focus:outline-none text-sm"
            autoComplete="email"
          />
          <button
            type="submit"
            className="bg-blue-700 text-white rounded px-4 py-2 font-semibold hover:bg-blue-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}