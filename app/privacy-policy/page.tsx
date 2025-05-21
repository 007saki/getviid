import React from "react";

export const metadata = {
  title: "Privacy Policy | G.E.T.V.I.I.D.",
  description:
    "Read the privacy policy for G.E.T.V.I.I.D. to learn how your information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-16 px-4 min-h-screen">
      <section className="w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 text-center drop-shadow">
          Privacy Policy
        </h1>
        <p className="mb-8 text-lg text-gray-800 leading-relaxed text-center">
          Your privacy is important to G.E.T.V.I.I.D. This Privacy Policy explains how information about you is collected, used, and protected when you use this website.
        </p>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">1. Information Collection</h2>
          <p className="text-gray-700">
            G.E.T.V.I.I.D. does not collect personal information unless you voluntarily provide it (for example, via contact forms or email). Non-personal information, such as browser type and usage data, may be collected automatically for analytics and site improvement.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">2. Use of Information</h2>
          <p className="text-gray-700">
            Any information you provide is used solely to respond to your inquiries, improve the website, or as otherwise described at the point of collection. Your information will not be sold or shared with third parties except as required by law.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">3. Cookies & Analytics</h2>
          <p className="text-gray-700">
            This website may use cookies or analytics tools to understand how visitors use the site. You can disable cookies in your browser settings.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">4. Data Security</h2>
          <p className="text-gray-700">
            Reasonable measures are taken to protect your information, but no method of transmission over the Internet is 100% secure.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">5. External Links</h2>
          <p className="text-gray-700">
            G.E.T.V.I.I.D. may link to external sites. We are not responsible for the privacy practices of those sites.
          </p>
        </div>
        <div className="mb-8 bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">6. Changes to This Policy</h2>
          <p className="text-gray-700">
            This Privacy Policy may be updated from time to time. Please review it periodically for changes.
          </p>
        </div>
        <div className="bg-white/80 rounded-xl p-6 shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">7. Contact</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact the site creator.
          </p>
        </div>
      </section>
    </main>
  );
}