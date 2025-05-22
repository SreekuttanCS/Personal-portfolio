import React from "react";
import { motion } from "framer-motion";

const IntroText = () => (
  <motion.span
    className="home-text my-1"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    HEY! I'M-
  </motion.span>
);

export default IntroText;
