"use client";
import Link from "next/link";
import { FaCheckCircle, FaChevronRight, FaCog, FaStar, FaUsers } from "react-icons/fa";

// Local Features data
const FeaturesData = [
  {
    heading: "Premium Quality",
    subheading: "High-quality products with exceptional durability and design.",
  },
  {
    heading: "Customizable Options",
    subheading: "Personalize your experience with a range of customizable features.",
  },
  {
    heading: "Customer Support",
    subheading: "24/7 support to assist you with any issues or questions.",
  },
  {
    heading: "Community Driven",
    subheading: "Join a thriving community and get access to exclusive benefits.",
  },
];

const Features = () => {
  return (
    <section id= {"feature-section"}className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-teal-300 text-lg font-semibold uppercase tracking-widest">
            Features
          </p>
          <h2 className="text-5xl font-extrabold text-teal-300 max-w-2xl mx-auto">
            Discover Our Exclusive Features
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore a variety of premium features designed to enhance your experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          {FeaturesData.map((item, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Icon and Background Design */}
              <div className="flex justify-center items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-900 p-6 rounded-full shadow-xl animate-pulse">
                {i === 0 && <FaCheckCircle className="text-teal-300" size={40} />}
                {i === 1 && <FaCog className="text-teal-300" size={40} />}
                {i === 2 && <FaStar className="text-teal-300" size={40} />}
                {i === 3 && <FaUsers className="text-teal-300" size={40} />}
              </div>

              {/* Feature Heading */}
              <h3 className="text-2xl font-semibold text-center mt-6">
                {item.heading}
              </h3>

              {/* Feature Description */}
              <p className="text-lg text-gray-400 text-center mt-3">
                {item.subheading}
              </p>

              {/* Learn More Link */}
              <div className="flex justify-center mt-5">
                <Link
                  href="/"
                  className="text-lg font-medium text-teal-300 flex items-center gap-1 group hover:text-teal-400 transition-all"
                >
                  Learn More
                  <FaChevronRight className="text-teal-300 group-hover:translate-x-1 transition-transform" size={24} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
