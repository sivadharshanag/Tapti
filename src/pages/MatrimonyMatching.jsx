import React from 'react';
import FastPaperRockets from '../components/FastPaperRockets';

export default function MatrimonyMatching() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-gray-900 py-12 relative overflow-hidden">
      {/* Fast Paper Rockets Background */}
      <FastPaperRockets />
      <div className="w-full px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        {/* Left: Text */}
        <div className="flex-1" data-aos="fade-right">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide">
            MATRIMONY SERVICE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Matrimony Matching
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 font-medium leading-relaxed">
            Experience the spiritual and cultural beauty of Tamil matrimony.<br />
            Our matching service blends tradition, astrology, and modern technology to help you find your perfect life partner.
          </p>
          {/* Feature Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium text-base">
              <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
              Astrology Match
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium text-base">
              <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
              Confidential
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium text-base">
              <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
              Tamil Community
            </span>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-2">
            <a
              href="/src/assets/file.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-lg shadow hover:shadow-lg transition-all duration-300 mb-2 inline-block text-center"
            >
              Download
            </a>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 text-base mb-2 space-y-1">
              <li>Download 2 copies of this document and fill the Groom's and Bride's details</li>
              <li>After filling the details, Click Contact us</li>
              <li>Fill the google form and submit</li>
            </ol>
            <div className="flex gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdy1A1ALsy-V9In2iNANRR0A0N2rsQZeMbzh01UHPAOrdiJ-Q/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold text-lg shadow hover:shadow-lg transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/services"
                className="px-6 py-3 rounded-lg border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-bold text-lg hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300"
              >
                Back to Services
              </a>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div
          className="flex-1 relative group"
          data-aos="fade-left"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl bg-gray-100 dark:bg-gray-800">
            <img
              src="https://images.unsplash.com/photo-1542042161784-26ab9e041e89?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VkZGluZyUyMGhhbmR8ZW58MHx8MHx8fDA%3D"
              alt="Tamil Wedding Couple"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
              Trusted by 100+ Families
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        [data-aos="fade-right"] { opacity: 0; transform: translateX(-40px); animation: fadeRight 1s forwards; }
        [data-aos="fade-left"] { opacity: 0; transform: translateX(40px); animation: fadeLeft 1s forwards; }
        @keyframes fadeRight { to { opacity: 1; transform: none; } }
        @keyframes fadeLeft { to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
} 