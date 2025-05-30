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
        <li>redux</li>

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
    <section className="text-white" id='about'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        
        <Image
          src="/assets/images/aboutg.webp"
          alt="about me"
          width={500}
          height={300}
        />{" "}
        <div className="mt-4 md:mt-0 text-left  flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            I'm a passionate frontend developer with 1 years of experience
            building web applications using React, Next.js, and modern
            JavaScript ecosystems. I specialize in creating fast, scalable, and
            maintainable frontend architectures.
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
              experience
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
