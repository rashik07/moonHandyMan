import React from "react";

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="py-20 bg-white px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-12">
          Our Services
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ServiceCard
            title="Home Repairs"
            description="From drywall to doors, we fix it all."
            imageSrc={`/repair.jpg`}
            imageAlt="Home repairs services"
          />
          <ServiceCard
            title="Carpentry"
            description="Custom woodwork, cabinets, and more."
            imageSrc={`/carpentry.jpg`}
            imageAlt="Carpentry services"
          />
          <ServiceCard
            title="Plumbing"
            description="Leaks, clogs, and fixture replacements."
            imageSrc={`/plumbing.jpg`}
            imageAlt="Plumbing services"
          />
          <ServiceCard
            title="Electrical"
            description="Light fixture, fan, and outlet installations."
            imageSrc={`/electrician.jpg`}
            imageAlt="Electrical services"
          />
          <ServiceCard
            title="Painting"
            description="Interior and exterior professional painting."
            imageSrc={`/painting.jpg`}
            imageAlt="Painting services"
          />
          <ServiceCard
            title="Assembly & Installation"
            description="Furniture, TVs, shelves and more."
            imageSrc={`/install.jpg`}
            imageAlt="Assembly and installation services"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;

function ServiceCard({ title, description, imageSrc, imageAlt }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-transform duration-300 p-6 max-w-sm mx-auto">
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-48 object-cover object-center"
        />
      </div>
      <h4 className="text-2xl font-semibold text-[#3AA66A] mb-3">{title}</h4>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
