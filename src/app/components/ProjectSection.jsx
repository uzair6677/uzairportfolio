"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectData = [
  {
    id: 1,
    title: "Portfolio Website in Next.js",
    description: "Project 1 description",
    image: "/assets/images/projects/1.jpg",
    tag: [ "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Portfoli Website in Next.js",
    description: "Project 1 description",
    image: "/assets/images/projects/2.avif",
    tag: ["All", ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portflio Website in Next.js",
    description: "Project 1 description",
    image: "/assets/images/projects/3.jpg",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProject=projectData.filter((project)=>project.tag.includes(tag));
  return (
    <div id='projects'>
      <h1 className="text-white text-center">My Projects</h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
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
      </div>
      <div>
        {filteredProject.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
