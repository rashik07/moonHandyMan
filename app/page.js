"use client";
import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center max-w-2xl px-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Transform Your Future with <br /> Ace Handyman Services
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Join a trusted brand offering high-margin, reputable handyman services.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#F0FDF7] text-center">
        <h2 className="text-3xl font-bold text-[#3AA66A] mb-12">Why Choose Us</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          <Feature icon="✅" title="Reliable & Professional" />
          <Feature icon="👷" title="Skilled Craftsmen Community" />
          <Feature icon="📈" title="Profitable Business Model" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3AA66A] mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ServiceCard title="Home Repairs" description="From drywall to doors, we fix it all." />
          <ServiceCard title="Carpentry" description="Custom woodwork, cabinets, and more." />
          <ServiceCard title="Plumbing" description="Leaks, clogs, and fixture replacements." />
          <ServiceCard title="Electrical" description="Light fixture, fan, and outlet installations." />
          <ServiceCard title="Painting" description="Interior and exterior professional painting." />
          <ServiceCard title="Assembly & Installation" description="Furniture, TVs, shelves and more." />
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-[#F0FDF7] px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3AA66A] mb-12">Start Your Franchise in 4 Easy Steps</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {['Inquiry', 'Consultation', 'Approval', 'Launch'].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-md">
              <div className="text-3xl font-bold text-[#3AA66A] mb-2">{index + 1}</div>
              <h4 className="font-semibold text-lg">{step}</h4>
              <p className="text-sm text-gray-600 mt-2">
                {index === 0 && "Submit your interest form."}
                {index === 1 && "Talk to our franchise consultant."}
                {index === 2 && "Get approved and sign the agreement."}
                {index === 3 && "Begin training and open your business."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-[#3AA66A] mb-12">Owner Stories</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all">
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <p className="text-[#3AA66A] font-semibold">{t.name}, {t.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white px-6">
        <h2 className="text-3xl font-bold text-center text-[#3AA66A] mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h4 className="font-semibold text-lg text-gray-800">{faq.q}</h4>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#3AA66A] text-white px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p className="mb-6">Subscribe to receive news, insights, and tips on franchise ownership.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md text-black outline-none bg-white"
          />
          <button
            type="submit"
            className="bg-white text-[#3AA66A] px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#3AA66A] mb-8">Send Us a Message</h2>
          {submitted ? (
            <p className="text-center text-green-600 text-lg">Thank you! We'll be in touch shortly.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white p-8 rounded-xl shadow-md">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3AA66A] outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3AA66A] outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                required
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#3AA66A] outline-none"
              />
              <button
                type="submit"
                className="w-full bg-[#3AA66A] hover:bg-[#2d8253] text-white font-semibold py-3 rounded-md transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

    
    </div>
  );
}

function Feature({ icon, title }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition text-center">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold text-[#3AA66A]">{title}</h3>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
      <h4 className="text-xl font-bold text-[#3AA66A] mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const testimonials = [
  {
    quote: "Their leadership embodies servant leadership...",
    name: "Rebecca S.",
    location: "North Indianapolis, IN",
  },
  {
    quote: "I'm on the path to profitability while making customers happy.",
    name: "Beth Y.",
    location: "Minnetonka, MN",
  },
  {
    quote: "Ace Handyman Services was the perfect fit.",
    name: "Joni & Todd C.",
    location: "Beaumont, TX",
  },
];

const faqData = [
  {
    q: "What does it cost to open a franchise?",
    a: "Startup costs vary by territory, but we offer financing options and training support.",
  },
  {
    q: "Do I need handyman experience?",
    a: "Not at all — we train you. We look for leadership and business acumen.",
  },
  {
    q: "How long does it take to launch?",
    a: "Typically around 16 weeks after approval and training.",
  },
];
