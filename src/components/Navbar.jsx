"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <nav className="w-full h-24 dark:text-gray-200 text-gray-700">
      <div className="max-w-[1300px] mx-auto px-6 flex items-center justify-between h-full text-2xl">
        {/* Logo */}
        <Link
          href="/"
          className="dark:text-purple-300 text-purple-500 hover:text-purple-400 transition-all duration-300"
        >
          E.M
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          {["about", "portfolio", "contact"].map((section) => (
            <li key={section} className="relative group">
              <Link href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>

        {/* Toggle Button (Mobile Only) */}
        <button
          onClick={toggleNav}
          aria-label="Toggle menu"
          aria-expanded={nav}
          className={`${
            nav ? "opened" : ""
          } md:hidden block w-10 h-10 z-[100] dark:stroke-white ${
            nav ? "stroke-white" : "stroke-black"
          }`}
        >
          <svg width="40" height="40" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black z-20 transition-transform duration-300 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24 text-white text-center">
          {["about", "portfolio", "contact"].map((section) => (
            <li key={section}>
              <Link href={`#${section}`} onClick={closeNav}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
