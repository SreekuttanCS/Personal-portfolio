import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Skills from "../projects/Skills";

const AboutSection = () => {
  return (
    <Container className="w-75">
      <motion.p
        className="py-2 about-para"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Hi, I’m a passionate Frontend Developer with expertise in HTML, CSS,
        JavaScript, and React JS. I also have experience in Backend Development
        with Node.js and Express.js, making me proficient in building full-stack
        MERN applications. I thrive on crafting scalable, responsive, and
        user-friendly solutions that solve real-world problems. With a keen eye
        for detail and a drive to continuously learn, I aim to deliver impactful
        web experiences. Let’s create something amazing together!
      </motion.p>
      <Skills />
    </Container>
  );
};

export default AboutSection;
