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
        <li> 1. Cвидетельство об окончании 9 класса
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>1. Aттестат</li>
        <br>
        </br>
      
    </ul>
    ),
  },

  
];

const HowToenroll = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="howtoenroll">
<br/>
<div className="w-4/5 h-1 bg-blue-800 mx-auto"></div>
<h1 className="text-black text-lg md:text-xl lg:text-2xl font-bold text-center">
   About our College
        </h1>
      
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16"> 
        <div className="mt-4 md:mt-20 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">SU</h2>
          <br/>
          <div className="flex flex-row justify-start mt-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              After 9th grade{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              After 11th grade{" "}
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

export default HowToenroll;