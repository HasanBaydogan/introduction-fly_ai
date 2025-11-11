"use client";
import React, { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section id="sss" className="flexCenter flex-col py-10 lg:py-20">
      <div className="padding-container max-container w-full">
        <div className="flex flex-col items-center text-center mb-16">
          {/* <div className="rounded-full p-4 lg:p-6 bg-blue-500 mb-6">
            {/* <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path 
                d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg> 
          </div> */}
          {/* <p className="uppercase regular-18 -mt-1 mb-3 text-blue-500">{t.faq.kicker}</p> */}
          <h2 className="bold-40 lg:bold-64 mb-4">{t.faq.heading}</h2>
          <p className="regular-16 text-gray-30 max-w-2xl">{t.faq.subtitle}</p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {t.faq.items.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type FAQItemProps = {
  question: string;
  answer: string;
  isFirst?: boolean;
};

const FAQItem = ({ question, answer, isFirst = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(isFirst);

  return (
    <div className="border-b border-gray-20 last:border-b-0">
      <button
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:bg-gray-10 px-4 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="bold-18 lg:bold-20 pr-8">{question}</h3>
        <div
          className={`flex-shrink-0 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-500"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-6">
          <p className="regular-16 text-gray-30 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
