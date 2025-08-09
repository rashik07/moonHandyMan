"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await emailjs.send(
        "service_sf5qozn", // Your EmailJS Service ID
        "template_u39mhcc", // Your EmailJS Template ID
        {
          name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "mnBPzV2opLko4bi7E" // Your EmailJS Public Key
      );

      console.log("SUCCESS!", result.status, result.text);

      // ✅ Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setSubmitted(true);
    } catch (error) {
      console.error("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8" id="contactUs">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Form */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#3AA66A] mb-3 text-center md:text-left">
            Let's Talk 💬
          </h2>
          <p className="text-gray-600 mb-8 text-center md:text-left">
            Have any questions or suggestions? Fill out the form and we’ll get
            back to you as soon as possible.
          </p>

          {submitted && (
            <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-medium shadow">
              ✅ Thank you! We'll be in touch shortly.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-100 mt-6"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +8801XXXXXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-2 bg-[#3AA66A] hover:bg-[#2d8253] text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  ✉️ Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Side - Info */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <img
            src="/contact.jpg"
            alt="Contact Illustration"
            className="w-full max-w-md mb-6 rounded-2xl border-4 border-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              We're Here to Help
            </h3>
            <p className="text-gray-600">
              Whether it's a general inquiry or feedback, we value your
              message. Expect a response within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
