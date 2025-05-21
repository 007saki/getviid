import React from "react";

export const metadata = {
  title: "Terms of Use | G.E.T.V.I.I.D.",
  description:
    "Read the terms of use for G.E.T.V.I.I.D. By using this website, you agree to these terms and conditions.",
};

export default function TermsOfUsePage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-16 px-4 min-h-screen">
      <section className="w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 text-center drop-shadow">
          Terms of Use
        </h1>
        <p className="mb-8 text-lg text-gray-800 leading-relaxed text-center">
          Welcome to G.E.T.V.I.I.D. Please read these Terms of Use {`("Terms")`} carefully before using this website. By accessing or using G.E.T.V.I.I.D., you agree to be bound by these Terms.
        </p>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">1. Use of Content</h2>
          <p className="text-gray-700">
            All content provided on this site is for informational and educational purposes only. You may not reproduce, distribute, or use any content without permission.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">2. No Professional Advice</h2>
          <p className="text-gray-700">
            The information on G.E.T.V.I.I.D. is not a substitute for professional advice, diagnosis, or treatment. Always seek the advice of qualified professionals regarding any concerns about domestic violence or personal well-being.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">3. User Conduct</h2>
          <p className="text-gray-700">
            You agree to use this website respectfully and lawfully. Do not post or transmit any harmful, offensive, or unlawful material.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">4. External Links</h2>
          <p className="text-gray-700">
            G.E.T.V.I.I.D. may contain links to external sites. We are not responsible for the content or practices of those sites.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">5. Changes to Terms</h2>
          <p className="text-gray-700">
            We may update these Terms at any time. Continued use of the site means you accept any changes.
          </p>
        </div>
        <div className="bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">6. Contact</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, please contact the site creator.
          </p>
        </div>
      </section>
    </main>
  );
}