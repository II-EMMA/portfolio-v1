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
    <div className="grid md:grid-cols-2 place-items-center max-w-[1200px] mx-auto md:mt-14 mt-12 relative lg:text-start text-center text-wrap">
      <div className="px-3">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Pixel‑Perfect Specialist",
            1000,
            "Figma → Next.js Conversion",
            1000,
            "Live‑Site UI Replication",
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          className="font-bold dark:text-purple-300  text-purple-500 text-2xl italic"
        />

        <p className="dark:text-gray-200 text-gray-600 md:text-6xl text-3xl tracking-tight">
          HEY ,I AM
          <br />
          <span className="">EMMA</span> <br />
        </p>
        <p className="dark:text-gray-300 text-gray-700">
          I help brands and teams achieve{" "}
          <span className="font-semibold">flawless visual fidelity</span> —
          turning any Figma design or live website into a reusable, SEO‑ready
          Next.js template with <span className="italic">zero compromise</span>{" "}
          on design accuracy, performance, or accessibility.
        </p>

        <div className="self-start flex lg:flex-row flex-col items-center  gap-4 mt-6 mb-4 md:mb-0">
          <button
            className="transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-pointer font-bold dark:text-gray-200 text-gray-700 w-1/2 p-2
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
        className="w-[340px] md:w-[400px] rounded-full md:mx-0 mx-4 mt-14 mb-16 md:mb-0 md:mt-0"
      />
    </div>
  );
};

export default Hero;
