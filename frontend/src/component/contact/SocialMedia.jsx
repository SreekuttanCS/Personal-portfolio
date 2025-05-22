import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Media from "./Media";

export const SocialMedia = () => {
  const socialMediaLinks = [
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/sreekuttan7/",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      href: "https://github.com/SreekuttanCS",
    },
    {
      icon: <SiGmail />,
      title: "Gmail",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=sreekuttancs26@gmail.com",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      href: "https://www.instagram.com/_kxttan._",
    },
  ];

  return (
    <div>
      {socialMediaLinks.map((media, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
        >
          <Media icon={media.icon} title={media.title} href={media.href} />
        </motion.div>
      ))}
    </div>
  );
};
