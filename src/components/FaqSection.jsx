"use client";

import React, { useState } from 'react';
import AchievementsSection from '@/components/AchievementsSection';
import Link from 'next/link';
import Image from "next/image";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems = [
    {
      question: "Can I transfer to Salymbekov University from another college?",
      answer: "Yes, we accept transfer students."
    },
    {
      question: "If there is another quarantine, what will happen in terms of teaching?",
      answer: "Our building has just been reconstructed and has the best ventilation system available today. We have taken all possible steps to ensure the safety of our students and staff, and thus expect that we will be offering in-person education in the fall. However, if this is not allowed, we are already fully prepared to move to on-line education if necessary."
    },
    {
      question: "How much does it cost to study at the International College of IT and Business “Salymbekov University”?",
      answer: "Salymbekov University costs $3500 per year. For a full picture of the financial policies at Salymbekov University, including various discounts and stipends, please see our website under the topic “Cost of Education.”"
    },
    {
      question: "What are the admission requirements?",
      answer: "We accept applicants on the basis of 9th and 11th grade."
    }
  ];
  
  return (
    <section className="lg:py-4" id="faq">
      <div className="w-1/2 h-1 bg-blue-800 mx-auto"></div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-black text-lg md:text-xl lg:text-2xl font-bold text-center">
          Frequently Asked Questions
        </h1>
        <div className="w-full">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left py-2 px-4 bg-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-black font-bold">{item.question}</h2>
              </button>
              {openIndex === index && (
                <div className="py-2 px-4 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
