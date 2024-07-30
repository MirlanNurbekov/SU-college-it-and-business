"use client";
import React, { useTransition, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import TabButton from "./TabButton";
import TestingZone from "./TestingZone";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Good</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Good</li>
        <br>
        </br>
      
    </ul>
    ),
  },
  {
    title: "Work experience",
    id: "workexperience",
    content: (
      <ul className="list-disc pl-2">
        <li>Good</li>
        <br>
        </br>
       
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Good</li>
          

      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
<br/>
<div className="w-4/5 h-1 bg-blue-800 mx-auto"></div>
<h1 className="text-black text-lg md:text-xl lg:text-2xl font-bold text-center">
   About our College
        </h1>
      
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">
      
      <Image src="/images/hero-image.jpeg" width={500} height={500} />
     
        <div className="mt-4 md:mt-20 text-left flex flex-col h-full">
          
          <h2 className="text-4xl font-bold text-black mb-4">SU</h2>
          <p className="text-base lg:text-lg">
          SU
          </p>
          <br/>
          <div className="flex flex-row justify-start mt-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Information{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Opportunities{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workexperience")}
              active={tab === "workexperience"}
            >
              {" "}
              Employees{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              
            >
              Awards 
            </TabButton>
          </div>
          <div className="mt-2">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;