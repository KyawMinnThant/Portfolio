"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "@/lib/types/type";

const sections: Section[] = [
  { name: "Projects", id: "projects", scrollIndex: 1, scrollIndexSm: 1.1 },
  { name: "About Me", id: "about", scrollIndex: 3.5, scrollIndexSm: 5.1 },
];

const fade = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.8, delay },
  }),
};

const HeroSection = () => {
  const [activeId, setActiveId] = useState("home");

  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentId = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const top =
          (isMobile() ? sections[i].scrollIndexSm : sections[i].scrollIndex) *
          window.innerHeight;

        if (scrollY >= top) {
          currentId = sections[i].id;
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const section = sections.find((s) => s.id === id);
    if (!section) return;

    const index = isMobile() ? section.scrollIndexSm : section.scrollIndex;

    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-x-hidden font-dmSans sm:px-8 md:px-10 lg:px-[30px] lg:mt-[70px] md:mt-[100px] mt-[120px]">
      <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2 gap-10 min-h-[calc(100vh-60px)]">
        {/* Text */}
        <motion.div
          className="flex flex-col order-2 lg:order-1 justify-center items-start text-center lg:text-left"
          initial="hidden"
          animate="visible"
          variants={fade}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight mx-auto lg:mx-0"
            custom={0.1}
            variants={fade}
          >
            Hi, I am Kyaw Min Thant.
            <br />
            <span className="text-blue-500 inline-block mt-2">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Backend Developer",
                    "Fullstack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0"
            custom={0.3}
            variants={fade}
          >
            I am a Fullstack Developer with a passion for creating user-friendly
            and visually appealing web applications. I specialize in building
            seamless and responsive interfaces combined with robust backend
            systems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 font-semibold max-w-xs mx-auto lg:mx-0"
            custom={0.5}
            variants={fade}
          >
            <motion.button
              onClick={() => handleScrollTo("projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded transition"
            >
              View Projects
            </motion.button>

            <motion.button
              onClick={() => handleScrollTo("about")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white py-2 px-6 rounded transition"
            >
              About Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fade}
        >
          <img
            src="https://ik.imagekit.io/iyawrzexxj/Portfolio/portfolio_img.jpg"
            alt="Hero"
            className="w-full max-w-sm sm:max-w-md lg:max-w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
