"use client";

import Loading from "@/app/loading";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { Project } from "@/lib/types/type";

type ProjectDetailProps = {
  id: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectDetailComponent: React.FC<ProjectDetailProps> = ({ id }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const fetchSingleProject = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch project");
        }

        const data: Project = await res.json();
        setProject(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSingleProject();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!project) return <div>No project found.</div>;

  return (
    <motion.div
      className="w-[85%] mx-auto mt-[150px] mb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Button */}
      <motion.div variants={itemVariants}>
        <Link
          href="/"
          className="flex items-center text-blue-700 hover:underline w-fit"
        >
          <FiArrowLeft className="mr-2" />
          Back
        </Link>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6 font-dmSans"
        variants={containerVariants}
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-96 object-cover rounded-lg shadow-lg"
        />

        {/* Content */}
        <motion.div
          className="flex flex-col gap-4"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl font-bold underline text-white"
            variants={itemVariants}
          >
            {project.title}
          </motion.h1>

          {/* Tech Stack */}
          <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
            {project.tech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 rounded-full bg-blue-700 text-white text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p className="text-white" variants={itemVariants}>
            {project.fullDescription}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            variants={itemVariants}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition"
              >
                <FaGithub />
                <span>View on GitHub</span>
              </a>
            )}

            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-md transition"
              >
                <FaExternalLinkAlt />
                <span>View Website</span>
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailComponent;
