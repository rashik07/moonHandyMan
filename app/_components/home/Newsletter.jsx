import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <section className="bg-[#3AA66A] px-6 py-12 text-white rounded-xl shadow-md">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Left Part - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Stay in the Loop
            </h2>
            <p className="text-white/90 text-sm sm:text-base">
              Subscribe for franchise tips, updates, and expert insights
              delivered straight to your inbox.
            </p>
          </div>

          {/* Right Part - Input & Button */}
          <form className="flex flex-col sm:flex-row items-center gap-3 w-full">
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full sm:flex-1 px-4 py-2.5 rounded-lg text-gray-800 placeholder-gray-500 outline-none bg-white focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white text-[#3AA66A] font-semibold hover:bg-gray-100 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
        </div>
    );
};

export default Newsletter;