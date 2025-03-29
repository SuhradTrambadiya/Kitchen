"use client";
import Image from 'next/image';

const Cook = () => {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 py-24" id="cook-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-6">
        {/* Image on the right side for larger screens */}
        <div className="absolute right-0 bottom-[-25%] hidden lg:block ">
          <Image
            src={'/images/cook/burger.png'}
            alt="burger-image"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Image of cook */}
          <div className="col-span-6 flex justify-center lg:justify-start">
            <Image
              src="/images/cook/cook.png"
              alt="Cook Image"
              width={636}
              height={808}
            />
          </div>

          {/* Content Section */}
          <div className="col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-primary text-2xl font-semibold mb-3 tracking-widest uppercase text-start">
              Cook with Us
            </p>
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white text-start">
              Culinary Expertise at Your Fingertips
            </h2>
            <p className="text-black/70 dark:text-white/70 text-lg font-light mb-6 text-start">
              Join our expert chefs for an immersive cooking experience that takes your culinary skills to the next level. Whether you're a beginner or an experienced cook, our step-by-step guidance ensures a fun, hands-on approach to creating delicious dishes.
            </p>
            <p className="text-black/70 dark:text-white/70 text-lg font-light mb-6 text-start">
              Explore a variety of cooking styles, from traditional methods to modern innovations. Learn how to select the best ingredients, master essential techniques, and create meals that will impress your friends and family.
            </p>
            <p className="text-black/70 dark:text-white/70 text-lg font-light mb-10 text-start">
              Our classes are designed to cater to your unique learning pace and preferences, with a focus on quality, flavor, and creativity. Step into the kitchen with confidence, and leave with new skills and culinary inspiration.
            </p>

            {/* Learn More Button */}
            <button className="text-xl font-medium rounded-full text-white py-4 px-8 bg-primary border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;
