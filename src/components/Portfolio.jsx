"use client";
import { useState } from "react";
// import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";
// import project4 from "../assets/project4.png";
// import project5 from "../assets/project5.png";
// import project6 from "../assets/project6.png";
import project1 from "../assets/projectOne.png";
import project2 from "../assets/projectTwo.png";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";
import Link from "next/link";

const projects = [
  {
    img: project1.src,
    title: "Project #1",
    description: "Wozell website demo built with Next.js.",
    links: {
      site: "https://woztell.vercel.app/en",
      github: "#",
    },
  },
  {
    img: project2.src,
    title: "Project #2",
    description: "Marcomista sologan company website.",
    links: {
      site: "https://marcomesta.vercel.app",
      github: "#",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <div
      className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row my-20 lg:my-0"
      id="portfolio"
    >
      <div className="z-10 glass p-6 w-full border-2 max-w-[565px] lg:mx-0 mx-auto">
        <div className="w-full">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        <p className="dark:text-gray-200 text-gray-600 my-4">
          {projects[currentProject].description}
        </p>
        <div className="flex space-x-4">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={projects[currentProject].links.site}
            className="px-4 py-2 bg-purple-600 text-gray-200 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            View Site
          </Link>
          <Link
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <AiFillGithub />
          </Link>
        </div>
      </div>

      <div className="absolute inset-0">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={0} size={900} />
        </div>
      </div>

      <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={`cursor-pointer
                text-gray-300 bg-purple-700 rounded-lg p-2 max-w-[100px] hover:bg-purple-800 transition 
                duration-300 ${
                  currentProject === index ? "bg-purple-900" : ""
                }`}
          >
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
