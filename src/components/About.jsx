import React from "react";
import project1 from "../assets/projectOne.png";
import project2 from "../assets/projectTwo.png";
// import project3 from "../assets/project7.png";
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

      <div className="lg:hidden mt-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center">
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiSass className="text-pink-600" />
        <DiBootstrap className="text-purple-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-500" />
        <DiNodejsSmall className="text-green-500" />
      </div>

      <div className="p-6 col-span-3 mt-10 lg:mt-0">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
        <p className="text-gray-300 mb-4">
          I have a proven track record of creating visually stunning and
          responsive websites.
        </p>

        <div className="flex flex-wrap gap-4 text-4xl justify-center ">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiSass className="text-pink-600" />
          <DiBootstrap className="text-purple-600" />
        </div>
      </div>

      <div className="p-6 col-span-3">
        <div className="lg:flex hidden flex-wrap mb-4 gap-4 text-4xl ">
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
        <p className="text-gray-300 mb-4">
          I am experienced in creating modern, responsive web applications.
        </p>
        <div className="flex justify-center lg:hidden flex-wrap mb-4 gap-4 text-4xl ">
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </div>

      <div className="p-6 col-span-5 mb-10 lg:mb-0">
        <h2 className="text-gray-200 text-3xl font-bold mb-4">
          Fullstack Experience
        </h2>
        <p className="text-gray-300 mb-4">
          Skilled in developing end-to-end solutions using fullstack
          technologies.
        </p>
        <div className="flex flex-wrap gap-4 text-4xl justify-center ">
          <DiNodejsSmall className="text-green-500" />
          <DiMongodb className="text-green-500" />
          <DiReact className="text-blue-500" />
          <DiGithubBadge className="text-gray-500" />
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
