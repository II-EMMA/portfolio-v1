import React from "react";
import project1 from "../assets/projectOne.png";
import project2 from "../assets/projectTwo.png";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiGreensock,
  SiFramer,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import Animation from "./Animation";

const About = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto p-6 lg:grid lg:grid-cols-12 gap-8 place-items-center lg:text-start text-center text-wrap"
      id="about"
    >
      <div className="relative group col-span-6">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-300 to-purple-400 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-opacity-10 backdrop-blur-xs rounded-lg">
          <img
            src={project1.src}
            alt="project 1"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>

      <Animation />

      <div className="p-6 col-span-3 mt-20 lg:mt-0">
        <h2 className="dark:text-gray-200 text-gray-600 text-3xl font-bold mb-4">
          Skills
        </h2>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          Pixel-perfect Figma to Next.js. No drift. No compromise.
        </p>

        <div className="flex flex-wrap gap-4 text-4xl justify-center ">
          <SiFramer className="text-[#0055FF]" />
          <DiSass className="text-pink-600" />
          <SiTailwindcss className="text-[#38BDF8]" />
          <SiGreensock className="text-[#88CE02]" />
        </div>
      </div>

      <div className="p-6 col-span-3">
        <div className="lg:flex hidden flex-wrap mb-4 gap-4 text-4xl ">
          <SiNextdotjs className="text-white" />
          <SiTailwindcss className="text-[#38BDF8]" />
          <SiMongodb className="text-green-500" />
        </div>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          I am experienced in creating modern, responsive web applications.
        </p>
        <div className="flex justify-center lg:hidden flex-wrap mb-4 gap-4 text-4xl ">
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </div>

      <div className="p-6 col-span-5 mb-20 lg:mb-0">
        <h2 className="dark:text-gray-200 text-gray-600 text-3xl font-bold mb-4">
          Fullstack Experience
        </h2>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          Skilled in developing end-to-end solutions using fullstack
          technologies.
        </p>
        <div className="flex flex-wrap gap-4 text-4xl justify-center ">
          <DiNodejsSmall className="text-green-500" />
          <DiMongodb className="text-green-500" />
          <DiReact className="text-blue-500" />
          <SiNextdotjs className="text-white" />
          {/* <DiGithubBadge className="text-gray-500" /> */}
        </div>
      </div>

      <div className="relative group col-span-7">
        <div
          className="w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-300 to-purple-400 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"
        ></div>
        <div className="relative w-full p-4 bg-opacity-10 backdrop-blur-lg rounded-lg">
          <img
            src={project2.src}
            alt="project 3"
            className="rounded-lg md:max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
