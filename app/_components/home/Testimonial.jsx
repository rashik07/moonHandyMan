"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarFilled, StarOutlined } from "@ant-design/icons";

const testimonial = [
  {
    quote: "Their leadership embodies servant leadership...",
    name: "Rebecca S.",
    location: "North Indianapolis, IN",
    rating: 5,
  },
  {
    quote: "I'm on the path to profitability while making customers happy.",
    name: "Beth Y.",
    location: "Minnetonka, MN",
    rating: 4,
  },
  {
    quote: "Ace Handyman Services was the perfect fit.",
    name: "Joni & Todd C.",
    location: "Beaumont, TX",
    rating: 5,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-24 bg-gradient-to-br ">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-black mb-16">
        Owner Stories
      </h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Slider {...settings}>
          {testimonial.map((t, i) => (
            <div key={i} className="px-4">
              <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col justify-between border border-gray-200 hover:scale-[1.02]">
                <div className="mb-6 relative">
                  <div className="absolute top-[-10px] left-[-5px] text-7xl text-[#3AA66A] opacity-10 select-none">
                    “
                  </div>
                  <p className="italic text-gray-800 leading-relaxed relative z-10 mt-6 text-lg sm:text-base">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, index) =>
                    index < t.rating ? (
                      <StarFilled key={index} className="text-yellow-400 text-lg" />
                    ) : (
                      <StarOutlined key={index} className="text-yellow-400 text-lg" />
                    )
                  )}
                </div>

                <div>
                  <p className="text-[#3AA66A] font-semibold text-lg">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
