import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import SkillList from "./SkillList";
import { motion } from "framer-motion"; 
const Backend = () => {
  return (
    <div className="mt-4">
      <motion.h3
        className="skill-technology"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Backend
      </motion.h3>
      <div className="skill-list d-flex justify-content-center align-items-center flex-wrap">
        {[
          { icon: <FaNodeJs />, title: "Node.js" },
          { icon: <SiExpress />, title: "Express" },
          { icon: <DiMongodb />, title: "MongoDB" },
        ].map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <SkillList icon={skill.icon} title={skill.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Backend;
