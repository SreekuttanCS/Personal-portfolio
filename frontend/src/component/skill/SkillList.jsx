import React from "react";
import { motion } from "framer-motion";

const SkillList = ({ icon, title }) => {
  return (
    <motion.div
      className="skill-list-item"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="skill-icon">{icon}</span>
      <span className="skill-title">{title}</span>
    </motion.div>
  );
};

export default SkillList;
