"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "MainInformation",
    id: "mainInformation",
    content: (
      <ul className="list-disc pl-2">
        <li>Talk about IT and Malaysia</li>
      </ul>
    ),
    image: "/images/hero-image.jpeg",
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>I need to put infromation about our UNI</li>
        <br></br>
      </ul>
    ),
    image: "/images/INTI.png",
  },
  {
    title: "Employees",
    id: "employees",
    content: (
      <ul className="list-disc pl-2">
        <li>NM</li>
        <li>MN</li>
        <br></br>
      </ul>
    ),
    image: "/images/NM.PNG",
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certifications</li>
      </ul>
    ),
    image: "/images/Sertificate .jpeg",
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("mainInformation");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTabData = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-black" id="about">
      <br />
      <div className="w-4/5 h-1 bg-blue-800 mx-auto"></div>
      <h1 className="text-black text-lg md:text-xl lg:text-2xl font-bold text-center">
        About our College
      </h1>
      <p>
        
      </p>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-20 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">SU</h2>
          <br />
          <div className="flex flex-row justify-start mt-3">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-2">
            {selectedTabData.content}
          </div>
        </div>
        {selectedTabData.image && (
          <div className="mt-4 md:mt-20 text-left flex flex-col h-full">
            <Image
              src={selectedTabData.image}
              width={800}
              height={300}
              alt={selectedTabData.title}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
