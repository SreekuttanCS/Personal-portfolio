import React from "react";
import { motion } from "framer-motion";

const Description = () => (
  <motion.span
    className="home-text home-para w-75 my-2"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    Crafting seamless web solutions with precision. As a full-stack developer, I
    develop user-friendly, accessible experiences that drive engagement.
  </motion.span>
);

export default Description;
