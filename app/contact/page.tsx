import React from "react";

export const metadata = {
  title: "Contact | G.E.T.V.I.I.D.",
  description:
    "Contact G.E.T.V.I.I.D. for support, questions, or feedback. Reach out to the creator directly.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 py-16 px-4 min-h-screen">
      <section className="w-full max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 text-center drop-shadow">
          Contact
        </h1>
        <p className="mb-8 text-lg text-gray-800 leading-relaxed text-center">
          If you have questions, need support, or want to share feedback, please
          reach out. Your message is important and will be handled with care and
          confidentiality.
        </p>
      
        <div className="mb-8 p-6 bg-white/80 rounded-xl shadow border-l-4 border-blue-600">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Email</h2>
          <p className="text-gray-700 break-all">
            <a
              href="mailto:sakiasi@getviid.com"
              className="text-blue-700 underline hover:text-blue-900"
            >
              support@getviid.com
            </a>
          </p>
        </div>
        <div className="p-6 bg-white/80 rounded-xl shadow border-l-4 border-purple-600">
          <h2 className="text-xl font-bold text-purple-700 mb-2">
            Confidentiality
          </h2>
          <p className="text-gray-700">
            All messages are kept confidential. If you are in immediate danger,
            please contact local authorities or a trusted helpline.
          </p>
        </div>
      </section>
    </main>
  );
}