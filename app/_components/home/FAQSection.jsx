"use client";
import { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    { q: "What services do you offer?", a: "We provide a variety of home repair and maintenance services." },
    { q: "How do I book a handyman?", a: "You can book directly through our website or contact our support team." },
    { q: "Are your handymen certified?", a: "Yes, all our handymen are background-checked and certified professionals." },
    { q: "What is your cancellation policy?", a: "You can cancel up to 24 hours before your appointment for a full refund." },
  ];

  const toggle = (idx) => {
    setActiveIndex(idx === activeIndex ? null : idx);
  };

  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-4xl font-bold text-center text-black mb-14">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center p-6 focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.q}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === idx ? "rotate-180 text-[#3AA66A]" : "text-gray-500"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeIndex === idx && (
              <div className="px-6 pb-6 text-gray-600 transition-all duration-300">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;