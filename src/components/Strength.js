import React from "react";
import Image from "next/image";

const Strength = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2
          className='text-purple-500 text-2xl md:text-4xl pacifico'
        >
          Our Strength
        </h2>
        <h3
          className='text-xl md:text-3xl mt-2 font-bold dark:text-gray-300'
        >
          Why we are the Best?
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {/* Card 1 */}
        <div className="p-4 md:p-8 border-2 md:border-0 md:border-l-4 md:border-b-4 border-purple-500">
          <div className="flex justify-center mb-6">
            <Image
              src="/quality-food-icon.png"
              alt="Quality Foods"
              width={180}
              height={180}
              priority
            />
          </div>
          <h4 className="text-purple-500 text-lg md:text-xl font-semibold text-center">
            Quality Foods
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-4 text-sm md:text-base">
            We prioritize providing high-quality food that exceeds expectations.
            With our rigorous standards and fresh ingredients, we ensure every
            meal is prepared to perfection, offering a delightful dining
            experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-4 md:p-8 border-2 md:border-0 md:border-l-4 md:border-t-4 border-purple-500">
          <div className="flex justify-center mb-6">
            <Image
              src="/easy-order-icon.png"
              alt="Easy to Order"
              width={180}
              height={180}
              priority
            />
          </div>
          <h4 className="text-purple-500 text-lg md:text-xl font-semibold text-center">
            Easy to Order
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-4 text-sm md:text-base">
            Our streamlined ordering process is designed to save you time. With
            just a few clicks, you can quickly select and order your favorite
            dishes without any hassle.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-4 md:p-8 border-2 md:border-0 md:border-l-4 md:border-b-4 md:border-r-4 border-purple-500">
          <div className="flex justify-center mb-6">
            <Image
              src="/delivery-icon.png"
              alt="On Time Delivery"
              width={180}
              height={180}
              priority
            />
          </div>
          <h4 className="text-purple-500 text-lg md:text-xl font-semibold text-center">
            On-Time Delivery
          </h4>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-4 text-sm md:text-base">
            We take pride in our punctual delivery service. Your meals will
            always arrive fresh and on time, ensuring that you never have to
            wait long to enjoy your favorite dishes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Strength;
