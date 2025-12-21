import React from "react";
import { motion, Variants } from "framer-motion";

type TimelineItem = {
  id: number;
  date: string;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    id: 1,
    date: "2020",
    title: "Passed the High School Exam",
    description:
      "I passed the high school exam and started my journey in learning foreign languages like English.",
  },
  {
    id: 2,
    date: "2021",
    title: "Graphic Design Internship",
    description:
      "Worked as a graphic designer, creating visually appealing designs for posters, logos and also I got to know about the team collaboration.",
  },
  {
    id: 3,
    date: "2022",
    title: "Start Learning Coding From Scratch",
    description:
      "Started Learning Web Development from scratch and learned HTML, CSS, and JavaScript. Then started learning React and Next.js. And also I want to learn more about backend development and start learning PHP, Laravel and MySQL. And wrote projects using these technologies.",
  },
  {
    id: 4,
    date: "2024",
    title: "Attending NCC Level-4 Diploma in MST College",
    description:
      "Attended NCC Level-4 Diploma in MST College and learned about database,software engineering,algorithms,basic networking,frontend,C#,OOSAD and basic computer systems. And I passed the exam with 7 distinctions and 1 merit.",
  },
  {
    id: 5,
    date: "Present",
    title: "Continuous Learning & Growth",
    description:
      "Expanding my knowledge and skills in web development, learning new technologies, and staying up-to-date with industry trends. And I am now craving to learn docker, doing more projects and hunting for a job.",
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Timeline: React.FC = () => {
  return (
    <div className="w-full mt-10 mx-auto p-6">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-200">
        My Journey
      </h2>
      <div className="relative border-l-4 border-blue-600 ml-4">
        {timelineData.map(({ id, date, title, description }, index) => (
          <motion.div
            key={id}
            className="mb-10 ml-6 relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            {/* Circle */}
            <span className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-gray-900"></span>
            {/* Content */}
            <time className="mb-1 text-sm font-semibold text-blue-400">
              {date}
            </time>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
