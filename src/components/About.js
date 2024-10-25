import React from "react";
import Image from "next/image";
import { Pacifico, Inter } from "@next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

const About = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16 px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between transition duration-300">
      {/* Image Section */}
      <div className="relative lg:w-1/2 flex justify-center lg:justify-start">
        {/* First Image */}
        <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/about-1.jpg"
            alt="Chef in the kitchen"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Second Image (Overlapping the first one) */}
        <div className="absolute bottom-0 left-1/3 w-44 h-44 lg:w-96 lg:h-60 rounded-lg overflow-hidden shadow-xl transform translate-x-8 translate-y-12">
          <Image
            src="/about-2.jpg"
            alt="Happy diner"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:ml-16 mt-10 lg:mt-0 lg:w-1/2 text-left">
        <h2
          className={`${pacifico.className} text-2xl lg:text-3xl text-purple-500 mb-4`}
        >
          Welcome to our Restaurant
        </h2>
        <h3
          className={`${inter.className} text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100`}
        >
          About Us
        </h3>
        <p
          className={`${inter.className} text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-6`}
        >
          At our restaurant, we believe in crafting unforgettable dining
          experiences. Whether you&apos;re joining us for a quick bite or a
          special celebration, we are dedicated to serving meals that delight
          both the eyes and the palate.
        </p>
        <p
          className={`${inter.className} text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-8`}
        >
          Our chefs use only the freshest ingredients, blending traditional
          techniques with modern flavors to bring you dishes that are as unique
          as they are delicious. From our famous handcrafted pizzas to gourmet
          salads and indulgent desserts, there&apos;s something on the menu for
          every craving.
        </p>

        <button className="flex items-center bg-purple-500 hover:bg-purple-600 dark:bg-purple-400 dark:hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300">
          Learn more
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default About;
