"use client";

import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/lib/types/type";
import Link from "next/link";

const sections: Section[] = [
  { name: "Home", id: 1, scrollIndex: 0, scrollIndexSm: 0 },
  { name: "Projects", id: 2, scrollIndex: 1, scrollIndexSm: 1 },
  { name: "About Me", id: 3, scrollIndex: 3.5, scrollIndexSm: 5.5 },
  { name: "Contact", id: 4, scrollIndex: 6, scrollIndexSm: 9.9 },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<number | string>(1);
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = () => window.innerWidth < 768;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolled(scrollY > 10);

    let currentId = sections[0].id;

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Recalculate on resize

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollTo = (id: number | string) => {
    const section = sections.find((s) => s.id === id);
    setActiveId(id);
    if (!section) return;

    const index = isMobile() ? section.scrollIndexSm : section.scrollIndex;

    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  console.log(activeId);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 mx-auto mt-5 w-[85%] rounded-full border-2 border-blue-900 backdrop-blur transition-all duration-300 ${
          scrolled ? "bg-gray-950 shadow-xl" : "bg-transparent"
        }`}
      >
        <div className=" flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href={"/"}
            onClick={() => handleScrollTo(1)}
            className="cursor-pointer text-3xl font-extrabold text-blue-500"
          >
            Portfolio
          </Link>

          <ul className="hidden items-center gap-10 font-medium text-gray-300 md:flex">
            {sections.map(({ name, id }) => (
              <li
                key={id}
                className={`relative ${
                  activeId === id ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                <button onClick={() => handleScrollTo(id)}>
                  {name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all ${
                      activeId === id ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            className="text-3xl text-white md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <IoMdMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <motion.button
              className="absolute right-6 top-6 text-3xl text-white"
              onClick={() => setIsOpen(false)}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RxCross1 />
            </motion.button>

            {/* Menu */}
            <motion.div
              className="flex h-full items-center justify-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.ul
                className="flex flex-col items-center gap-12 text-xl font-semibold text-gray-300"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
              >
                {sections.map(({ name, id }) => (
                  <motion.li
                    key={id}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      show: { y: 0, opacity: 1 },
                    }}
                    className={`${
                      activeId === id
                        ? "text-blue-400 scale-110"
                        : "hover:text-blue-400 hover:scale-105"
                    }`}
                  >
                    <button
                      onClick={() => {
                        handleScrollTo(id);
                        setIsOpen(false);
                      }}
                      className="relative px-4 py-2"
                    >
                      {name}
                      <span
                        className={`absolute -bottom-1 left-0 h-[3px] bg-blue-500 rounded-full transition-all ${
                          activeId === id ? "w-full" : "w-0"
                        }`}
                      />
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
