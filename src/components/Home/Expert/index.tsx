"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon from react-icons

// Local Data for Experts
const experts = [
  {
    name: "Gaby Anderson",
    profession: "Head Chef",
    description: "A seasoned chef with over 15 years of experience in leading culinary teams and creating exquisite dishes.",
    imgSrc: "👨‍🍳",  // Using an emoji for a chef
    linkedin: "https://www.linkedin.com/suhrad-trambadiya",
  },
  {
    name: "Sophia Smith",
    profession: "Pastry Chef",
    description: "Specializes in delicate pastries and desserts, bringing a sweet touch to every culinary creation.",
    imgSrc: "👩‍🍳",  // Using an emoji for a female chef
    linkedin: "https://www.linkedin.com/in/sophiasmith",
  },
  {
    name: "Michael Johnson",
    profession: "Sous Chef",
    description: "A rising star in the kitchen, Michael ensures every dish meets the highest standards of quality and flavor.",
    imgSrc: "🧑‍🍳",  // Using an emoji for a person cooking
    linkedin: "https://www.linkedin.com/in/michaeljohnson",
  },
];

const Expert = () => {
  return (
    <section id="expert-section" className="bg-teal-300 py-24 mt-10">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-6">
        <div className="text-center mb-12">
          <p className="text-teal-800 text-xl font-semibold tracking-widest uppercase mb-4">
            Meet Our Experts
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-white">
            Let's Meet the Experts Behind the Magic
          </h2>
        </div>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 overflow-hidden"
            >
              <div className="relative w-full h-64 flex justify-center items-center bg-teal-200">
                <div className="text-9xl">{item.imgSrc}</div> {/* Display emoji */}
                <div className="absolute top-4 right-4 bg-teal-500 p-2 rounded-full shadow-lg">
                  <a
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-teal-100 transition duration-300"
                  >
                    <FaLinkedin size={50} />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-teal-600 rounded-b-2xl">
                <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
                <h4 className="text-lg font-normal text-teal-100 pt-2">{item.profession}</h4>
                <p className="text-teal-200 text-sm pt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expert;
