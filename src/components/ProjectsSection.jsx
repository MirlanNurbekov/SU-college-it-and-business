"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Personal website portfolio using TNextJs and Tailwind css",
    image: "/images/projects/12.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MirlanNurbekov/mirlan-nurbekov-portfolio-website.git",
    previewUrl: "https://mirlan-nurbekov-portfolio-website.vercel.app/",
  },
  {
    id: 2,
    title: "M-GYM_website",
    description: "Responsive Gym Website UI on ReactJS.",
    image: "/images/projects/2.JPG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MirlanNurbekov/M-GYM_website.git",
    previewUrl: "https://www.youtube.com/watch?v=nwCTVNm4u9s",
  },
  {
    id: 3,
    title: "Web studio UI",
    description: "The UI design for web studio with full description using HTML CSS and JS all run on CodePen.",
    image: "/images/projects/web.png",
    tag: ["All", "Web"],
    gitUrl: "https://codepen.io/Mirlan_Nurbekov/pen/oNVWMpN",
    previewUrl: "https://codepen.io/Mirlan_Nurbekov/full/oNVWMpN",
  },
  {
    id: 4,
    title: "Flipping cards",
    description: "Flipping cards component using HTML CSS and JS all run on CodePen.",
    image: "/images/projects/web2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://codepen.io/Mirlan_Nurbekov/pen/zYbwaRp",
    previewUrl: "https://codepen.io/Mirlan_Nurbekov/full/zYbwaRp",
  },
  {
    id: 5,
    title: "Switching panel UI",
    description: "Responcive UI with switching panel animaton using HTML CSS and JS all run on CodePen.",
    image: "/images/projects/web3.png",
    tag: ["All", "Web"],
    gitUrl: "https://codepen.io/Mirlan_Nurbekov/pen/PoLmegx",
    previewUrl: "https://codepen.io/Mirlan_Nurbekov/full/PoLmegx",
  },
  {
    id: 6,
    title: "The Solar System animation",
    description: "A true time scaled solar-system, which means that every objects have a time relative to an Earth year, using HTML CSS and JS all run on CodePen.",
    image: "/images/projects/web4.png",
    tag: ["All", "Web"],
    gitUrl: "https://codepen.io/Mirlan_Nurbekov/pen/bGZWMNM",
    previewUrl: "https://codepen.io/Mirlan_Nurbekov/full/bGZWMNM",
  },
  {
  id: 7,
  title: "Hover card components",
  description: "Web components to create hover effect, using HTML CSS and JS all run on CodePen.",
  image: "/images/projects/web5.png",
  tag: ["All", "Web"],
  gitUrl: "https://codepen.io/Mirlan_Nurbekov/pen/VwRbXNj",
  previewUrl: "https://codepen.io/Mirlan_Nurbekov/full/VwRbXNj",
},
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;