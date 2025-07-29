import HeroSection from "./_components/home/HeroSection";
import CallSection from "./_components/home/CallSection";
import FAQSection from "./_components/home/FAQSection";
import ContactForm from "./_components/home/ContactForm";
import Newsletter from "./_components/home/Newsletter";
import Services from "./_components/home/Services";
import WhyChooseUs from "./_components/home/WhyChooseUs";
import Testimonials from "./_components/home/Testimonial";

export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <WhyChooseUs />
      <Services />
      {/* Steps Section */}
      <section className="py-20 bg-[#F0FDF7] px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-12">
          Start Your Franchise in 4 Easy Steps
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {["Inquiry", "Consultation", "Approval", "Launch"].map(
            (step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md"
              >
                <div className="text-3xl font-bold text-[#3AA66A] mb-2">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-lg">{step}</h4>
                <p className="text-sm text-gray-600 mt-2">
                  {index === 0 && "Submit your interest form."}
                  {index === 1 && "Talk to our franchise consultant."}
                  {index === 2 && "Get approved and sign the agreement."}
                  {index === 3 && "Begin training and open your business."}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
      {/* <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-[#F0FDF7]">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-[#3AA66A] mb-16">
          Owner Stories
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="absolute top-[-15px] left-6 text-5xl text-[#3AA66A]">
                “
              </div>
              <p className="italic text-gray-700 mb-6 mt-4 leading-relaxed z-10 relative">
                {t.quote}
              </p>
              <div className="h-[1px] bg-gray-200 mb-4" />
              <p className="text-[#3AA66A] font-semibold text-lg">{t.name}</p>
              <p className="text-sm text-gray-500">{t.location}</p>
            </div>
          ))}
        </div>
      </section> */}
      <CallSection />
      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter */}
      <Newsletter />
      {/* Contact Form */}
      <ContactForm />
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
