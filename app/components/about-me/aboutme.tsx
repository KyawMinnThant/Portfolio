"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import BgTitle from "../bgtitle";
import Timeline from "./timeline";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiFirebase,
  SiMysql,
  SiFramer,
  SiPrisma,
} from "react-icons/si";

type TechIcon = {
  Icon: React.ElementType;
  color: string;
  title: string;
};

const techStack: TechIcon[] = [
  { Icon: SiReact, color: "#61DAFB", title: "React" },
  { Icon: SiNextdotjs, color: "#FFFFFF", title: "Next.js" },
  { Icon: SiTailwindcss, color: "#06B6D4", title: "Tailwind CSS" },
  { Icon: SiTypescript, color: "#3178C6", title: "TypeScript" },
  { Icon: SiPhp, color: "#777BB4", title: "PHP" },
  { Icon: SiLaravel, color: "#FF2D20", title: "Laravel" },
  { Icon: SiFirebase, color: "#FFCA28", title: "Firebase" },
  { Icon: SiMysql, color: "#4479A1", title: "MySQL" },
  { Icon: SiFramer, color: "#0055FF", title: "Framer Motion" },
  { Icon: SiPrisma, color: "#0C344B", title: "Prisma" },
];

// Variants for the container wrapping all icons
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Variants for each icon
const iconVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const AboutMe: React.FC = () => {
  return (
    <div className="flex mt-24 font-dmSans flex-col gap-8 max-w-4xl mx-auto px-6 text-gray-200">
      <BgTitle bgtitle="ABOUT" maintitle="About Me" />

      <p className="text-lg leading-relaxed text-center tracking-wide max-w-prose mx-auto">
        I am a passionate Fullstack Developer dedicated to crafting elegant,
        user-friendly, and performant web applications. With a strong foundation
        in both frontend and backend technologies, I enjoy turning ideas into
        seamless digital experiences that solve real-world problems.
      </p>

      <p className="text-lg leading-relaxed text-center tracking-wide max-w-prose mx-auto">
        Inspired by clean design, scalable architecture, and continuous
        learning, I constantly seek to improve my skills and stay up to date
        with the latest industry trends. Whether building intuitive interfaces
        or robust APIs, I strive to deliver quality code and meaningful value.
      </p>

      <p className="text-lg leading-relaxed text-center tracking-wide max-w-prose mx-auto">
        <strong>My preferred tech stack includes:</strong> React, Next.js,
        Tailwind CSS, TypeScript, PHP, Laravel, Firebase, and MySQL. I also
        enjoy working with modern tools like Framer Motion for animations and
        Prisma for database management.
      </p>

      <div className="mt-10">
        <p className="font-semibold mb-6 text-center text-4xl text-gray-200 tracking-wide">
          Tech Stack
        </p>

        <motion.div
          className="flex flex-wrap justify-center gap-12 mt-4 text-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techStack.map(({ Icon, color, title }) => (
            <motion.div
              key={title}
              variants={iconVariants}
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <Icon
                title={title}
                style={{ color }}
                aria-label={title}
                role="img"
                className="drop-shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Timeline />

      <a
        href="https://drive.google.com/file/d/1ZsRzwAm-QUDdco4OoebO5iObme2xehoe/view?usp=drive_link"
        target="_blank"
        className="bg-blue-700 text-center text-white hover:bg-blue-800 p-2 font-semibold mb-5 transition-transform active:scale-95"
      >
        View My CV
      </a>
    </div>
  );
};

export default AboutMe;
