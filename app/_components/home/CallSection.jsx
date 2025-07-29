"use client";
import Image from "next/image";
import { useState } from "react";

const CallSection = () => {
  return (
    <section className="bg-[#F0FDF7] py-12 px-4 flex justify-center items-center">
      <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 max-w-7xl w-full shadow-lg">
        {/* Van Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/van.png"
            alt="Ace Handyman Van"
            width={400}
            height={300}
            className="rounded-md object-contain w-full max-w-xs md:max-w-sm"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Talk to Our Team
          </h2>
          <p className="text-lg text-gray-700">
            Have questions or ready to start? Give us a call now!
          </p>
          <a href="tel:+18001234567">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full shadow transition">
              Call Now: (800) 123-4567
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
