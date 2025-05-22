import React from "react";
import { motion } from "framer-motion";

const HeadingText = ({ text }) => {
  return (
    <motion.h2
      className="pt-5 heading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {text}
    </motion.h2>
  );
};

export default HeadingText;
