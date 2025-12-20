"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Loading from "../../loading";
import Link from "next/link";
import { Project } from "@/lib/types/type";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ProjectCards = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="bg-[#161616] px-6 sm:px-10 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-700 text-white text-xs font-medium px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link
                href={`projects/${project.id}`}
                className="mt-auto text-center bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
