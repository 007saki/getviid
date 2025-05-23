"use client";
import { useState } from "react";

export default function ArticleRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (value: number) => {
    setRating(value);
    setSubmitted(true);
    // Here you could send the rating to a backend or analytics
  };

  return (
    <div className="mt-10 text-center">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Rate this article</h3>
      <div className="flex justify-center items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            className="focus:outline-none"
            disabled={submitted}
          >
            <svg
              className={`w-8 h-8 transition-colors ${
                (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          </button>
        ))}
      </div>
      {submitted && (
        <p className="mt-2 text-green-700 font-medium">Thank you for rating!</p>
      )}
    </div>
  );
}
