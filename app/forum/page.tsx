import React from "react";

export const metadata = {
  title: "Forum | G.E.T.V.I.I.D.",
  description:
    "Join the G.E.T.V.I.I.D. forum to ask questions, share experiences, and support others on their journey to safety, healing, and dignity.",
};

export default function ForumPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-16 px-4 min-h-screen">
      <section className="w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 text-center drop-shadow">
          Community Forum
        </h1>
        <p className="mb-8 text-lg text-gray-800 leading-relaxed text-center">
          Welcome to the G.E.T.V.I.I.D. forum. Here you can ask questions, share your story, and support others. This is a safe, respectful, and confidential space for everyone—survivors, those seeking to change, and allies.
        </p>
        <div className="bg-white/90 rounded-xl p-6 shadow border-l-4 border-blue-600 mb-8 text-center">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Coming Soon</h2>
          <p className="text-gray-700">
            The community forum feature is under development. Please check back soon or contact us if you have questions or want to connect.
          </p>
        </div>
      </section>
    </main>
  );
}
