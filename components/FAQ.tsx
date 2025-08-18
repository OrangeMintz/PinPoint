"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Pinpoint?",
      answer:
        "Pinpoint is a geography game, in which you are dropped somewhere in the world in a street view panorama and your mission is to find clues and guess your location on the world map.",
    },
    {
      question: "I have trouble accessing my account.",
      answer:
        'If you\'ve forgot your password, click on "Already have an account?" in the upper right corner, and then on "Forgot your password?". Enter the email address which is connected to your account, and we\'ll send you an email with a link to reset your password! Don\'t forget to check you spam email if it may have gotten caught there.',
    },
    {
      question: "Is Pinpoint available on App Store and Google Play?",
      answer:
        "Unfortunately, we are not, the app is still under development and might soon be released",
    },
    {
      question: "What languages is Pinpoint available in?",
      answer:
        'Pinpoint is available in 11 different languages. You can select language in the website footer under "Change language".',
    },
    {
      question: "Business enquiries",
      answer:
        " We'd love to come in contact. To make sure your email gets to the right person, please contact us at: https://design.pinpoint.com.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // close if clicked again
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
          FAQ&apos;s
        </h1>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left focus:outline-none"
              >
                <div className="flex items-center">
                  {openIndex === index ? (
                    <IconMinus className="w-6 h-6 text-blue-500" />
                  ) : (
                    <IconPlus className="w-6 h-6 text-blue-500" />
                  )}
                  <h2 className="mx-4 text-xl text-gray-700 dark:text-white">
                    {faq.question}
                  </h2>
                </div>
              </button>

              {/* Collapsible Section */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="md:mx-10">
                  <p className="px-14 text-gray-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
