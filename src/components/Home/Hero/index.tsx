"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home-section"
      className="relative bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 py-20"
    >
      <div className="container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Right Content (Text & Buttons) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Master the <br /> Art of Cooking
          </h1>
          <p className="text-white mt-6 text-lg lg:text-xl">
            Learn from top chefs, explore exclusive recipes, and elevate your culinary skills effortlessly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <Link
              href="#cook-section"
              className="px-10 py-4 text-lg font-medium rounded-lg text-white bg-teal-700 hover:bg-teal-800 transition-all shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="#about-section"
              className="px-10 py-4 text-lg font-medium rounded-lg border bg-black  text-white border-teal-700  hover:bg-teal-700 hover:text-white transition-all shadow-lg"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Left Image & Floating Stats */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative">
            <Image
              src="/images/hero/banner-image.png"
              alt="Cooking Banner"
              width={600}
              height={500}
            />
            {/* Floating Stats */}
            <div className="hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white p-5 rounded-xl lg:flex items-center shadow-md">
              <Image src="/images/hero/pizza.svg" alt="Pizza Icon" width={50} height={50} />
              <p className="ml-3 text-teal-700 font-medium text-lg">
                Over 500+ Exclusive Recipes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-600 opacity-20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
