import React, { useState } from "react";
import Image from "next/image";
import { Pacifico, Inter } from "@next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

const FoodItems = () => {
  const foodData = [
    {
      id: 1,
      label: "NEW",
      title: "Garlic Burger",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      price: 180,
      rating: 4.5,
      imgSrc: "/garlic-burger.jpg",
    },
    {
      id: 2,
      label: "HOT",
      title: "Baked Chicken Wings and Legs",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      price: 1500,
      rating: 4.5,
      imgSrc: "/chicken-wings.jpg",
    },
    {
      id: 3,
      label: "NEW",
      title: "Vegetable Pizza",
      description:
        "It is a long established fact that a reader will be distracted by the readable content",
      price: 170,
      rating: 4.5,
      imgSrc: "/vegetable-pizza.jpg",
    },
    {
      id: 4,
      label: "SPECIAL",
      title: "Pasta Primavera",
      description: "A delicious blend of fresh vegetables and pasta.",
      price: 250,
      rating: 4.7,
      imgSrc: "/vegetable-pizza.jpg",
    },
    {
      id: 5,
      label: "SPECIAL",
      title: "Pasta Primavera",
      description: "A delicious blend of fresh vegetables and pasta.",
      price: 250,
      rating: 4.7,
      imgSrc: "/vegetable-pizza.jpg",
    },
    {
      id: 6,
      label: "SPECIAL",
      title: "Pasta Primavera",
      description: "A delicious blend of fresh vegetables and pasta.",
      price: 250,
      rating: 4.7,
      imgSrc: "/vegetable-pizza.jpg",
    },
  ];

  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next button
  const handleNext = () => {
    if (currentIndex < Math.ceil(foodData.length / itemsPerPage) - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle prev button
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Get current items
  const currentItems = foodData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 px-8 lg:px-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2
            className={`${pacifico.className} text-purple-500 text-3xl font-bold`}
          >
            Food Items
          </h2>
          <h3
            className={`${inter.className} text-lg md:text-2xl font-semibold dark:text-gray-100 mt-2`}
          >
            Our Popular Foods
          </h3>
        </div>
        <div className="flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 hover:scale-110 hover:text-purple-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-10 w-10  dark:text-gray-300 ${
                currentIndex === 0 ? "text-gray-500" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={
              currentIndex >= Math.ceil(foodData.length / itemsPerPage) - 1
            }
            className="p-2 hover:scale-110 hover:text-purple-500 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`h-10 w-10  dark:text-gray-300 ${
                currentIndex >= Math.ceil(foodData.length / itemsPerPage) - 1
                  ? "text-gray-500"
                  : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative md:mt-24">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-[470px] md:h-[400px] w-[320px] flex flex-col"
          >
            {/* Label */}
            <span className="top-14 bg-purple-500 text-white text-xs px-3 py-1 rounded-md z-20 absolute">
              {item.label}
            </span>

            {/* Image */}
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src={item.imgSrc}
                alt={item.title}
                height={120}
                width={120}
                className="w-56 h-56 md:h-60 md:w-60 object-cover rounded-full md:absolute md:-top-16"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-center flex-grow">
              <div className="flex justify-between items-center mb-2">
                {/* Heart Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-purple-500 cursor-pointer hover:scale-110 hover:fill-purple-500 hover:text-purple-500 transition duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>

                {/* Rating and Star Icon */}
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-bold text-gray-600 dark:text-gray-300">
                    ({item.rating})
                  </span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg text-left font-bold text-gray-800 dark:text-gray-100 text-ellipsis line-clamp-1">
                {item.title}
              </h4>

              {/* Description */}
              <p className="text-sm text-left text-gray-600 dark:text-gray-300 mt-2 text-ellipsis line-clamp-2">
                {item.description}
              </p>

              {/* Price */}
              <div className="text-lg text-left font-semibold mt-4 text-gray-800 dark:text-gray-100">
                Price: <span className="text-purple-500">{item.price}</span>
              </div>

              {/* Add to Cart Button */}
              <button className="mt-4 w-full flex justify-center items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodItems;
