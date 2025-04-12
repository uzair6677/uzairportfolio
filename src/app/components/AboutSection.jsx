"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const Tab_Data = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML</li>

        <li>CSS</li>

        <li>JavaScript</li>

        <li>React</li>

        <li>Tailwind CSS</li>

        <li>Git</li>

        <li>Responsive Design</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul>
        <li>Bachelor of Science, Punjab University — 2022</li>
        Higher <li>Secondary School Certificate (HSSC), FBISE — 2017</li>
        <li>Secondary School Certificate (SSC), FBISE — 2015</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul>
        <li>MindZBase</li>
        <li>
          During my frontend development internship, I assisted in building and
          maintaining user interfaces using HTML, CSS, and JavaScript. I worked
          closely with senior developers to implement responsive a. I also
          gained experience in integrating RESTful APIs and handling
          asynchronous data using JavaScript. Throughout the internship, I used
          Git and GitHub for version control and collaborated effectively within
          a team environment, further strengthening my understanding of
          real-world web development practices.
        </li>
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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/assets/images/hero-image.jpg"
          alt="about me"
          width={500}
          height={500}
        />{" "}
        <div className="mt-4 md:mt-0 text-left  flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium ipsa iure esse eveniet facilis reprehenderit corporis,
            cupiditate nesciunt vel perspiciatis, omnis harum possimus est
            autem, incidunt placeat. Ut temporibus repellendus, sed reiciendis
            quasi, necessitatibus obcaecati suscipit quaerat voluptatum itaque
            in unde debitis
          </p>
          <div className="flex flex-row  justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              certification
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
 