"use client";
import { motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
} from "react-icons/di";
import {
  SiFramer,
  SiGreensock,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

const icons = [
  { icon: <SiTailwindcss className="text-[#38BDF8]" />, label: "Tailwind" },
  { icon: <SiNextdotjs className="text-white" />, label: "Nextjs" },
  { icon: <DiSass className="text-pink-600" />, label: "Sass" },
  { icon: <SiFramer className="text-[#0055FF]" />, label: "Framer Motion" },
  { icon: <DiJavascript1 className="text-yellow-500" />, label: "JavaScript" },
  { icon: <DiReact className="text-blue-500" />, label: "React" },
  { icon: <DiNodejsSmall className="text-green-500" />, label: "Node.js" },
  { icon: <DiMongodb className="text-green-500" />, label: "MongoDB" },
  { icon: <SiGreensock className="text-[#88CE02]" />, label: "Gsap" },
];

export default function Animation() {
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="lg:hidden mt-14">
      <div className="container mx-auto">
        <div
          className={`overflow-hidden ${"[mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]"}`}
        >
          <motion.div
            className={`flex gap-14 items-center flex-none`}
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedIcons.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 max-w-[40px] max-h-[40px] flex items-center justify-center text-[6rem]"
                aria-label={item.label}
              >
                {item.icon}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
