"use client";

import React, { useEffect, useState } from "react";
import { playClickSound } from "../utils/sound";
import { motion } from "framer-motion";

const Navbar = ({
  musicEnabled = false,
  started = false,
}: {
  musicEnabled?: boolean;
  started?: boolean;
}) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (sectionId:string) =>{
    document.getElementById(sectionId)?.scrollIntoView({
      behavior:"smooth",
      block:"start",
    });
  }

  const links = [
    {
      name: "About",
      section: "about",
      mobile: false,
    },
    {
      name: "Skills",
      section: "skills",
      mobile: true,
    },
    {
      name: "Projects",
      section: "projects",
      mobile: true,
    },
    {
      name: "Experience",
      section: "experience",
      mobile: false,
    },
    {
      name: "Resume",
      section: "resume",
      mobile: true,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.99, filter: "blur(10px)" }}
      animate={{
        opacity: started ? 1 : 0,
        scale: started ? 1 : 0.99,
        filter: started ? "blur(0px)" : "blur(10px)",
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`fixed top-5 left-1/2 -translate-x-1/2 ${scrolled ? "w-[75%] h-16" : "w-[85%] h-18"} bg-white border-[3px] border-black rounded-full shadow-[0_8px_0_#000] flex items-center justify-between md:justify-between md:items-center px-6 z-50 transition-all duration-300
      `}
    >
      {/* Logo / Home */}
      <motion.button
        onClick={()=>handleScroll("home")}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 0.75,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        w-12
        h-12
        rounded-full
        border-[3px]
        border-black

        flex
        items-center
        justify-center

        bg-[#fff7b3]
        cursor-pointer
        hover:scale-105
        transition
        "
      >
        <div
          className="
          w-6
          h-6
          rounded-full
          bg-orange-500
          border-2
          border-black
          "
        />
      </motion.button>

      {/* Links */}
      <div
        className="
  flex
  gap-5
  md:gap-7
  text-gray-600
  font-semibold
  text-sm
  md:text-base
  "
      >
        {links.map((link) => (
          <button
            key={link.name}
            onClick={()=>handleScroll(link.section)}
            className={`
group
relative
hover:text-black
transition
cursor-pointer
${link.mobile ? "" : "hidden md:block"}
`}
          >
            {link.name}

            <span
              className="
absolute
left-0
-bottom-2

h-0.75
w-0

bg-orange-500

rounded-full

group-hover:w-full

transition-all
duration-300
"
            />
          </button>
        ))}
      </div>
      {/* Contact */}
      <button
        onClick={() => {
          if (musicEnabled) playClickSound();
          document.getElementById("contact")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="hidden md:block bg-orange-500 text-white font-bold text-base px-6 py-2 rounded-full border-[3px] border-black shadow-[0_5px_0_#000] active:translate-y-1 active:shadow-none transition cursor-pointer
        "
      >
        Contact me
      </button>
    </motion.nav>
  );
};

export default Navbar;
