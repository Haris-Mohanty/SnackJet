import React from "react";
import Image from "next/image";
import { Lato, Inter, Pacifico } from "@next/font/google";

// Configure font weights and subsets
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 py-4 px-8 flex flex-col lg:flex-row items-center justify-between transition duration-300">
        {/* Text Section */}
        <div className="max-w-lg text-left lg:ml-16">
          <h3
            className={`${pacifico.className} text-purple-500 dark:text-purple-400 text-2xl font-semibold mb-2`}
          >
            Fast, Fresh, and Convenient!
          </h3>
          <h1
            className={`${lato.className} text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100`}
          >
            Your Favorite Meals,{" "}
            <span className="text-purple-500 lg:text-4xl dark:text-purple-400">
              Delivered to Your Door!
            </span>
          </h1>
          <p
            className={`${inter.className} text-gray-500 text-sm md:text-base dark:text-gray-300 mb-8`}
          >
            Whether it&apos;s a quick snack or a hearty meal, we bring your
            cravings to life with delicious, freshly made dishes. Delivered in
            record time to satisfy your appetite without the wait. From burgers
            and pizza to gourmet salads, whatever you&apos;re craving, it&apos;s
            on its way fast, fresh, and just the way you like it.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-400 dark:hover:bg-purple-500 text-white font-semibold py-4 px-6 md:px-10 rounded-full shadow-lg transition duration-300">
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-10 lg:mt-0 lg:ml-10 lg:mr-16">
          <div className="relative">
            <Image
              src={"/landing.png"} // Use your image here
              alt="Delicious Burger"
              height={950}
              width={650}
              className=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
