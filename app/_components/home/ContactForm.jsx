"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_lbf70m9",
        "template_vi03dwq",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "lqhuTFLYZDCc9qTJW"
      );
      console.log("SUCCESS!", result.status, result.text);
      setSubmitted(true);
    } catch (error) {
      console.error("FAILED...", error);
    }
  };
  return (
    <div>
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
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

            {submitted ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-medium shadow">
                ✅ Thank you! We'll be in touch shortly.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 border border-gray-100"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      required
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                      placeholder="example@domain.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3AA66A] outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3AA66A] hover:bg-[#2d8253] text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
                >
                  ✉️ Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Image + Content */}
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
    </div>
  );
};

export default ContactForm;
