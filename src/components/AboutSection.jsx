"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import TestingZone from "./TestingZone";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C# ASP.Net MVC</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>Blazor.NET</li>
        <li>React JS</li>
        <li>SQL Expertise</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Degree - Bachelor of Science with Honours in Computing 3+0, COVENTRY UNIVERSITY, Coventry, UK (August 2018 - March 2021)</li>
        <br>
        </br>
        <li>Diploma - Electrical and Electronic Engineering, INTI UNIVERSITY, Penang, Malaysia (August 2015 - August 2017)</li>
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
        <li>Web Development Lecturer / Projects and events manager - International College of IT and Business Salymbekov University, Bishkek, Kyrgyzstan  (Feb 2024 - Present)</li>
        <br>
        </br>
        <li>Software Engineer - Zentrek technologies Sdn Bhd ,Penang, Malaysia (Feb 2019 - June 2023)</li>
        <br>
        </br>
        <li>Electronic Engineer - Cincaria Sdn Bhd ,Penang, Malaysia (Jan 2017 - Jan 2019)</li>
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
        <li>1st place in JABIL GBS competition “LEADING THE DIGITAL FUTURE” Penang, Malaysia (11-15/09/2022) 
          Role - Team leader</li>
          <br></br>
        <li>2nd place in INTI-USC Competition in the Business Service Sector (20-23/10/2021)
          Role - App developer</li>
          <br></br>
          <li>
          Outstanding Contribution Award as a Student Ambassador - organized and hosted several workshops and events Penang, Malaysia(03/2016 - 12/2021)
          Role - Student Ambassador
          </li>
          <br></br>

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
    <section className="text-white" id="about">

      
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16">
      
      <Image src="/images/about-image.png" width={500} height={500} />
     
        <div className="mt-4 md:mt-20 text-left flex flex-col h-full">
          
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Full Stack Web Developer, specializing in crafting interactive and responsive web applications. My technical toolkit includes C# ASP.Net MVC, JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. 
          My collaborative spirit drives me to partner effectively with teams to deliver exceptional software solutions.
          </p>
          <br/>
          <div className="flex flex-row justify-start mt-3">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workexperience")}
              active={tab === "workexperience"}
            >
              {" "}
              Work Eperience{" "}
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