"use client";
// import profilepic from "../assets/PLAYA.png";
import profilepic from "../assets/me.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1200px] mx-auto mt-14 relative lg:text-start text-center text-wrap">
      <div className="px-3 ">
        <TypeAnimation
          sequence={[
            "Developer",
            1000,
            "Web designer",
            1000,
            "Web Auditor",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="font-bold text-gray-200 text-2xl italic"
        />

        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          HEY,I AM <br />
          <span className="">EMMA</span> <br />
        </p>
        <p className="text-gray-300">
          As a passionate web front-end developer with over 5 years of
          experience, I have a proven track record of creating visually stunning
          and responsive websites.
        </p>

        <div className="self-start flex lg:flex-row flex-col items-center  gap-4 mt-6 mb-4 md:mb-0">
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-pointer font-bold text-gray-200 w-1/2 p-2
                border border-purple-500 rounded-xl"
          >
            Download CV
          </button>

          <div className="z-30 pointer-events-auto flex gap-6 flex-row text-5xl text-purple-400">
            {/* <Link
              href="https://github.com/II-EMMA"
              rel="noopener noreferrer"
              target="_blank"
            >
            </Link> */}
            <AiOutlineGithub />
            <Link
              href="https://www.linkedin.com/in/emma-ahmed-666759381"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </Link>
            {/* <Link
              href="https://www.instagram.com/imanahmmedd"
              rel="noopener noreferrer"
              target="_blank"
            >
            </Link> */}
            <AiOutlineInstagram />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>

      <img
        src={profilepic.src}
        className="w-[340px] md:w-[400px] rounded-full md:mx-0 mx-4"
      />
    </div>
  );
};

export default Hero;
