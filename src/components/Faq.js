import React, { useState } from "react";
import { Pacifico, Inter } from "@next/font/google";
import Image from "next/image";

// Custom fonts
const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-8 md:py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* FAQ Content */}
        <div className="lg:w-1/2 space-y-4">
          <h2
            className={`${pacifico.className} text-purple-500 text-2xl md:text-4xl`}
          >
            Frequently Asked Questions
          </h2>
          <p className={`${inter.className} text-gray-600 dark:text-gray-300 text-sm md:text-base mt-2`}>
            Find answers to common questions about our services, policies, and
            how to make the most of what we offer.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {/* Question 1 */}
            <div className="bg-white dark:bg-gray-800 border border-purple-500 rounded-lg shadow-md">
              <button
                onClick={() => toggleAnswer(0)}
                className="flex justify-between w-full p-4 text-left font-semibold text-gray-800 dark:text-gray-100"
              >
                How do I create an account?
                <span className="text-purple-500">
                  {openIndex === 0 ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in ${
                  openIndex === 0 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  To create an account, click on the &lsquo;Login&lsquo;
                  button on the top menu, fill in the required information, and
                  submit the form.
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white dark:bg-gray-800 border border-purple-500 rounded-lg shadow-md">
              <button
                onClick={() => toggleAnswer(1)}
                className="flex justify-between w-full p-4 text-left font-semibold text-gray-800 dark:text-gray-100"
              >
                What is your refund policy?
                <span className="text-purple-500">
                  {openIndex === 1 ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in ${
                  openIndex === 1 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  We offer a full refund within 30 days of purchase if
                  you&lsquo;re not satisfied with our service. Contact support
                  for assistance.
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white dark:bg-gray-800 border border-purple-500 rounded-lg shadow-md">
              <button
                onClick={() => toggleAnswer(2)}
                className="flex justify-between w-full p-4 text-left font-semibold text-gray-800 dark:text-gray-100"
              >
                Can I upgrade my plan later?
                <span className="text-purple-500">
                  {openIndex === 2 ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in ${
                  openIndex === 2 ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Yes, you can upgrade your plan at any time from your account
                  settings. The upgrade will take effect immediately.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/faq.png"
            alt="FAQ Illustration"
            width={300}
            height={300}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;
