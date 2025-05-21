import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-0">
      {/* Fullscreen Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="max-w-2xl w-full flex flex-col items-center z-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">
            Guiding Everyone To Victory In Intimate Integrity & Dignity
          </h1>
          <p className="mb-8 text-lg sm:text-2xl text-gray-700 leading-relaxed max-w-2xl">
            G.E.T.V.I.I.D. is dedicated to empowering individuals affected by domestic
            violence—whether you are a survivor or someone seeking to change your
            behavior. Find guidance, resources, and a supportive community to help
            you recognize abuse, find safety, heal, and rebuild your life with
            dignity and hope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
            <Link
              href="/about"
              className="px-6 py-3 rounded-full bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition"
            >
              Learn More
            </Link>
            <Link
              href="/resources"
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
            >
              Get Resources
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold shadow hover:bg-pink-700 transition"
            >
              Contact
            </Link>
          </div>
        </div>
        {/* Optional: Add a subtle overlay for effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-80 pointer-events-none"></div>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <span className="text-xs text-blue-700 mb-1">Scroll Down</span>
          <svg className="w-6 h-6 text-blue-700 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Call to Action Hero */}
      <section className="w-full flex justify-center py-12">
        <div className="max-w-2xl w-full flex flex-col items-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl shadow-lg px-8 py-10">
          <svg
            className="w-12 h-12 mb-4 text-white opacity-90"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
          </svg>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
            You are not alone.
          </h2>
          <p className="text-lg sm:text-xl text-white text-center font-medium">
            Change and healing are possible. Reach out for support, find resources, and join a community that cares.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg className="w-10 h-10 mb-3 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="font-bold text-blue-700 text-lg mb-2">24/7 Resources</h3>
          <p className="text-gray-600 text-sm">
            Access guides, articles, and support tools at any time, wherever you are.
          </p>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg className="w-10 h-10 mb-3 text-purple-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5V7a5 5 0 00-10 0v2a5 5 0 0010 0z" />
          </svg>
          <h3 className="font-bold text-purple-700 text-lg mb-2">Safe & Confidential</h3>
          <p className="text-gray-600 text-sm">
            Your privacy is our priority. All interactions are confidential and secure.
          </p>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg className="w-10 h-10 mb-3 text-pink-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" />
          </svg>
          <h3 className="font-bold text-pink-700 text-lg mb-2">Community Forum</h3>
          <p className="text-gray-600 text-sm">
            Connect with others, share your story, and find encouragement in our forum.
          </p>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg className="w-10 h-10 mb-3 text-green-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <h3 className="font-bold text-green-700 text-lg mb-2">Emergency Help</h3>
          <p className="text-gray-600 text-sm">
            Quick access to helplines and emergency contacts for immediate support.
          </p>
        </div>
      </section>

      {/* Two Column Info Section */}
      <section className="w-full max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/90 rounded-xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Who We Help</h3>
          <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
            <li>Survivors of domestic violence seeking safety and healing</li>
            <li>Individuals wanting to change harmful behaviors</li>
            <li>Friends and family supporting loved ones</li>
            <li>Professionals and advocates in the field</li>
          </ul>
        </div>
        <div className="bg-white/90 rounded-xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Our Mission</h3>
          <p className="text-gray-700 text-base">
            We believe everyone deserves dignity, respect, and the opportunity to live free from violence. Our mission is to provide accessible, trustworthy resources and a safe community for all.
          </p>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="w-full flex justify-center py-8">
        <div className="max-w-xl w-full bg-white/90 rounded-xl shadow px-8 py-8 flex flex-col items-center">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Stay Updated</h3>
          <p className="text-gray-600 mb-4 text-center text-sm">
            Subscribe to our newsletter for the latest resources, updates, and community news.
          </p>
          <form className="w-full max-w-sm flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l border border-blue-200 focus:outline-none text-sm"
              autoComplete="email"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-700 text-white rounded-r text-sm font-semibold hover:bg-blue-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Impact/Stats Section */}
      <section className="w-full max-w-6xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white/90 rounded-xl shadow p-6">
          <span className="text-3xl font-extrabold text-blue-700 mb-2">10,000+</span>
          <span className="text-gray-700 text-base text-center">Resources Accessed</span>
        </div>
        <div className="flex flex-col items-center bg-white/90 rounded-xl shadow p-6">
          <span className="text-3xl font-extrabold text-purple-700 mb-2">2,500+</span>
          <span className="text-gray-700 text-base text-center">Community Members</span>
        </div>
        <div className="flex flex-col items-center bg-white/90 rounded-xl shadow p-6">
          <span className="text-3xl font-extrabold text-pink-700 mb-2">100%</span>
          <span className="text-gray-700 text-base text-center">Confidential & Free</span>
        </div>
      </section>
    </div>
  );
};

export default Home;