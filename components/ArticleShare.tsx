"use client";
import { useState, useEffect } from "react";

export default function ArticleShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    if (navigator.clipboard && url) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareText = encodeURIComponent(title);
  const shareUrl = encodeURIComponent(url);

  return (
    <div className="mt-8 flex flex-col items-center gap-2">
      <span className="text-blue-800 font-semibold">Share this article:</span>
      <div className="flex gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Twitter
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded bg-blue-700 text-white hover:bg-blue-800 transition"
        >
          Facebook
        </a>
        <button
          onClick={handleCopy}
          className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          disabled={!url}
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
