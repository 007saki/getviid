import React from "react";

export const metadata = {
  title: "About | G.E.T.V.I.I.D.",
  description:
    "Learn more about G.E.T.V.I.I.D., a project dedicated to empowering individuals with guidance, resources, and support to overcome domestic violence, heal, and build lives of dignity and safety.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 min-h-screen">
      {/* Hero Section */}
      <section className="w-full flex flex-col justify-center items-center min-h-screen px-4 py-16 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-800 mb-6 text-center drop-shadow-lg">
          Guiding Everyone To Victory In Intimate Integrity & Dignity
        </h1>
        <p className="mb-8 text-xl sm:text-2xl text-gray-700 leading-relaxed text-center max-w-2xl">
          <span className="font-semibold text-blue-700">G.E.T.V.I.I.D.</span> is
          dedicated to empowering individuals affected by domestic violence—whether
          you are a survivor or someone seeking to change your behavior. Here,
          you will find guidance, resources, and a supportive community to help you
          recognize abuse, find safety, heal, and rebuild your life with dignity
          and hope.
        </p>
        <span className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg text-lg mt-4">
          You are not alone. Change and healing are possible.
        </span>
      </section>

      {/* Mission & Vision */}
      <section className="w-full max-w-4xl grid gap-8 md:grid-cols-2 px-4 py-16">
        <div className="bg-white/90 rounded-2xl p-6 shadow-md border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">My Mission</h2>
          <p className="text-gray-700 text-base">
            To guide and support everyone—especially those impacted by domestic
            violence—on their journey toward safety, healing, and personal growth.
            If you have caused harm, you are also welcome here: change is
            possible, and support is available to help you build healthier
            relationships and a better future.
          </p>
        </div>
        <div className="bg-white/90 rounded-2xl p-6 shadow-md border-l-4 border-purple-600">
          <h2 className="text-2xl font-bold text-purple-700 mb-2">My Vision</h2>
          <p className="text-gray-700 text-base">
            A world where every individual lives free from violence, with the
            integrity and dignity they deserve—and where everyone is empowered to
            grow, heal, and make positive change.
          </p>
        </div>
      </section>

      {/* About the Creator */}
      <section className="w-full max-w-2xl mt-12 px-4 pb-16">
        <div className="bg-white/90 rounded-2xl p-6 shadow border-l-4 border-blue-400">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
            About the Creator
          </h2>
          <p className="text-gray-700 text-base">
            Hi, I am{" "}
            <span className="font-semibold text-blue-700">
              Sakiasi Baleiwai Komaidrakulu
            </span>
            , the creator and sole author of G.E.T.V.I.I.D. I am passionate about
            helping others find strength, safety, and hope through awareness,
            education, and community support—for both survivors and those seeking
            to change.
          </p>
        </div>
      </section>
    </main>
  );
}