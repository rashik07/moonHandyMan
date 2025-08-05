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
      <ContactForm />

      {/* Testimonials */}
      {/* <Testimonials /> */}

      <CallSection />
      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter */}
      <Newsletter />
      {/* Contact Form */}
    </div>
  );
}
