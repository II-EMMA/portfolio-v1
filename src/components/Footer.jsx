import Link from "next/link";
import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl dark:text-purple-300 text-purple-500 hover:text-purple-400 duration-300 transition-all">
          EMMA
        </h3>
        <div className="flex flex-row gap-4 dark:text-gray-400 text-gray-800 text-4xl">
          {/* <Link
            href="https://github.com/II-EMMA"
            rel="noopener noreferrer"
            target="_blank"
          >
          </Link> */}
          <FaGithubSquare size={28} />
          {/* <Link
            href="https://www.instagram.com/imanahmmedd"
            rel="noopener noreferrer"
            target="_blank"
          >

          </Link> */}
          <FaInstagram size={28} />
        </div>
      </div>

      <div className="flex flex-col gap-y-3 items-center">
        <p className="dark:text-gray-400 text-gray-800">@ 2025 EMMA</p>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
