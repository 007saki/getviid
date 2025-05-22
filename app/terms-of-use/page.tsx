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
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-8 text-center drop-shadow">
          Terms of Use
        </h1>
        <p className="mb-10 text-lg text-gray-800 leading-relaxed text-center">
          Welcome to G.E.T.V.I.I.D. Please read these Terms of Use{" "}
          <span className="font-mono">(&quot;Terms&quot;)</span> carefully before using
          this website. By accessing or using G.E.T.V.I.I.D., you agree to be
          bound by these Terms.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-10">
          1. Use of Content
        </h2>
        <p className="mb-6 text-gray-700 text-base leading-relaxed">
          All content provided on this site is for informational and educational
          purposes only. You may not reproduce, distribute, or use any content
          without permission.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-10">
          2. No Professional Advice
        </h2>
        <p className="mb-6 text-gray-700 text-base leading-relaxed">
          The information on G.E.T.V.I.I.D. is not a substitute for professional
          advice, diagnosis, or treatment. Always seek the advice of qualified
          professionals regarding any concerns about domestic violence or personal
          well-being.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-10">
          3. User Conduct
        </h2>
        <p className="mb-6 text-gray-700 text-base leading-relaxed">
          You agree to use this website respectfully and lawfully. Do not post or
          transmit any harmful, offensive, or unlawful material.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-10">
          4. External Links
        </h2>
        <p className="mb-6 text-gray-700 text-base leading-relaxed">
          G.E.T.V.I.I.D. may contain links to external sites. We are not
          responsible for the content or practices of those sites.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-10">
          5. Changes to Terms
        </h2>
        <p className="mb-6 text-gray-700 text-base leading-relaxed">
          We may update these Terms at any time. Continued use of the site means
          you accept any changes.
        </p>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 mt-10">
          6. Contact
        </h2>
        <p className="mb-6 text-gray-700 text-base leading-relaxed">
          If you have any questions about these Terms, please contact the site
          creator.
        </p>
      </section>
    </main>
  );
}