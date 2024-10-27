import React from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Shaik Kamal",
    role: "CEO & Founder of Aptech",
    title: "The best food ever",
    feedback:
      "This restaurant offers an extraordinary dining experience. The food is perfectly seasoned, beautifully presented, and absolutely delicious. A true culinary delight!",
    image: "/test-1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Monira Moni",
    role: "UI/UX & Graphic Designer",
    title: "Awesome and delicious food",
    feedback:
      "From the ambiance to the plating, every detail is on point. The flavors are unique and the portions are generous. Definitely a must-try!",
    image: "/test-2.png",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8 px-8 lg:px-16 relative">
      {/* Navigation Arrows */}
      <div className="absolute top-4 md:top-16 right-2 md:right-8 flex">
        <button
          aria-label="Previous testimonial"
          className="p-2 hover:scale-110 hover:text-purple-500 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button
          aria-label="Next testimonial"
          className="p-2 hover:scale-110 hover:text-purple-500 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 dark:text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>

      <div className="text-center mb-8 md:mb-12">
        <h2
          className='text-purple-500 text-2xl md:text-4xl pacifico'
        >
          Testimonial
        </h2>
        <h3
          className='text-lg md:text-3xl mt-2 font-bold dark:text-gray-300'
        >
          Our Customer Feedback
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
        {testimonials.map(
          ({ id, name, role, title, feedback, image, rating }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl rounded-lg p-6 max-w-[500px]"
            >
              <div className="flex mb-4">
                <div className="hover:scale-110 transition-transform duration-300">
                  <Image
                    src={image}
                    alt={name}
                    className="rounded-full border-4 border-purple-500"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="mt-4 ml-4">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    {name}
                  </h4>
                  <p className="text-purple-500 text-sm md:text-base">{role}</p>
                </div>
              </div>

              <h5 className="font-bold text-lg md:text-xl mt-2 text-gray-800 dark:text-gray-300">
                {title}
              </h5>
              <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mt-2 mb-2">
                {feedback}
              </p>
              <hr />
              <div className="flex mt-4 text-sm md:text-base">
                Review:
                <span className="text-yellow-500 flex ml-2">
                  {[...Array(rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </span>
                <span className="ml-2 text-gray-500 dark:text-gray-400">
                  ({rating}/5)
                </span>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex justify-center mt-6">
        <span className="w-3 h-3 bg-purple-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mx-1"></span>
      </div>
    </section>
  );
};

export default Testimonial;
