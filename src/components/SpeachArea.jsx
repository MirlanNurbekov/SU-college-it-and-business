"use client";

import React, { useState } from 'react';
import Image from "next/image";

const SpeachArea = () => {
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
      question: "Founder's speech - Askar Salymbekov",
      answer: "The educational activities of the founders are primarily aimed at opening educational institutions with a comprehensive, intensive, motivational and modern training program aimed at comprehensive human development. To date, there is no support for research and science in the country, which is necessary to create the knowledge necessary for the growth and diversification of the economy, there is no system for solving the most pressing scientific, engineering, economic and social challenges facing the country, as well as an insignificant opportunity for cooperation with the world's leading scientists and research institutes. Becoming a knowledge-generating university is the most important task for us. However, entrepreneurs, business leaders, financiers, and workers should take advantage of this knowledge and transform it into economic growth and prosperity for the whole country. Graduates of higher educational institutions of Kyrgyzstan should have the best technical skills and capabilities that allow them to use these skills creatively in an ever-changing economic reality.",
      image: "/images/AS.jpg"
    },
    {
      question: "President's speech - Amangeldi Zhumadilovich",
      answer: "The International College of IT and Business “Salymbekov University” is a new college with a modern material and technical base designed to provide training for specialists in the latest training program in Russian and English. Students will be taught by the best specialists of the International College of IT and Business Salymbekov University and Lincoln University. At the end of the training, students will receive international level knowledge, two Kyrgyz and international diplomas, and will be proficient in English at the TOEFL/IELTS level.",
      image: "/images/AJ.jpg"
    },
    {
      question: "College Principal's speech - Nurzat Manasovna",
      answer: "Dear Students, Teachers, and Staff! Welcome to our new college, the International College of IT and Business! Transitions are never easy, whether it's school, college, university, or any other stage of life. As a teacher and parent, I understand that this is an incredibly exciting time for you as you embark on new journeys, explore your talents, and discover your future professions. I believe in the importance of practical learning over rote memorization, valuing people over machines, and prioritizing learning over grading. Our university has quickly met the expectations of students and parents, and I assure you it will continue to do so. I am honored to be part of this team. We are a family, and we must work together as one. It is either all of us or none of us. If you have any concerns or issues, please come and discuss them. Communication is the key to every successful relationship, whether professional or personal. Please feel free to bring forward new ideas, innovative techniques, new societies, programs, and talents. Above all, we are a team. We must do everything as a family, striving for a secure future for our children. Our children are our priority. Together, we will make the impossible possible and explore the unseen. Welcome to our college! Thank you!",
      image: "/images/NM.PNG"
    },
  ];

  return (
    <section className="lg:py-4" id="faq">
      <div className="w-4/5 h-1 bg-blue-800 mx-auto"></div>
      <div className="flex flex-col items-center justify-center mt-4">
        <div className="w-full">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-center py-2 px-4 bg-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-black font-bold">{item.question}</h2>
              </button>
              {openIndex === index && (
                <div className="py-2 px-4 bg-gray-50 flex">
                  {item.image && (
                    <div className="flex-shrink-0 mr-4">
                      <Image 
                        src={item.image} 
                        alt="INTI University" 
                        width={300} 
                        height={500} 
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeachArea;
