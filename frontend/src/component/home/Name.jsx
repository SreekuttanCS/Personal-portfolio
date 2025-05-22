import React from "react";
import { motion } from "framer-motion";

const Name = () => (
  <motion.span
    className="home-name my-1"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
  >
    SreeKuttan
  </motion.span>
);

export default Name;
