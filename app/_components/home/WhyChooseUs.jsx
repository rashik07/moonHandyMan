import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#E6FAF1] to-[#F0FDF7] text-center">
        <h2 className="text-3xl font-bold text-black mb-12">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              ✅
            </div>
            <h3 className="text-xl font-semibold text-[#3AA66A] mb-2">
              Reliable & Professional
            </h3>
            <p className="text-gray-600">
              Count on us for consistent service and dependable quality every
              time.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              👷
            </div>
            <h3 className="text-xl font-semibold text-[#3AA66A] mb-2">
              Skilled Craftsmen Community
            </h3>
            <p className="text-gray-600">
              Tap into a network of experienced professionals ready to serve.
            </p>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              📈
            </div>
            <h3 className="text-xl font-semibold text-[#3AA66A] mb-2">
              Profitable Business Model
            </h3>
            <p className="text-gray-600">
              Grow sustainably with a model built for long-term success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
