"use client";
import React from "react";
import BgTitle from "../bgtitle";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const contactVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Contact: React.FC = () => {
  const contacts = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/share/1RoQKg486f/",
      label: "facebook.com/kyawminnthant",
      colorClass: "text-blue-600",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/da_j_siron?igsh=MTFya3h0cHFmN2Nqag==",
      label: "instagram.com/da_j_siron",
      colorClass: "text-pink-500",
      hoverColor: "hover:text-pink-500",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/kyaw-min-thant-81943725a/",
      label: "linkedin.com/kyawminthant",
      colorClass: "text-blue-700",
      hoverColor: "hover:text-blue-700",
    },
    {
      icon: FaEnvelope,
      href: "mailto:kyawminnthant12345@gmail.com",
      label: "kyawminnthant12345@gmail.com",
      colorClass: "text-gray-400",
      hoverColor: "hover:text-gray-400",
    },
    {
      icon: FaGithub,
      href: "https://github.com/KyawMinnThant",
      label: "github.com/KyawMinnThant",
      colorClass: "text-gray-300",
      hoverColor: "hover:text-gray-300",
    },
  ];

  return (
    <div className="flex mt-24 font-dmSans mb-10 flex-col gap-8 max-w-4xl mx-auto px-6 text-gray-200">
      <BgTitle bgtitle="CONTACT" maintitle="Contact Me" />

      <p className="text-lg text-center max-w-3xl mx-auto">
        You can reach out to me via any of the following platforms. Whether you
        want to collaborate, ask a question, or just say hello, I’d love to hear
        from you! And also I am eager to learn news tech from you and I'd love
        to share more about the tech.
      </p>

      <ul className="space-y-6 text-lg max-w-md mx-auto flex flex-col">
        {contacts.map(
          ({ icon: Icon, href, label, colorClass, hoverColor }, i) => (
            <motion.li
              key={label}
              className={`flex items-center gap-4 cursor-pointer ${hoverColor} transition`}
              variants={contactVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              <Icon className={colorClass} size={24} />
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                aria-label={label}
              >
                {label}
              </a>
            </motion.li>
          )
        )}
      </ul>
    </div>
  );
};

export default Contact;
