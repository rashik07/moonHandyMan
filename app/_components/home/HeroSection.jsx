"use client";
import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Transform Your Future with <br /> Moon Handyman Services
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Join a trusted brand offering high-margin, reputable handyman
            services.
          </p>

          <button
            onClick={() => {
              document
                .getElementById("contactUs")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
