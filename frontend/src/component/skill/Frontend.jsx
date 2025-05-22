import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SkillList from "./SkillList";
import { motion } from "framer-motion"; 
const Frontend = () => {
  return (
    <div>
      <motion.h3
        className="skill-technology"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        Frontend
      </motion.h3>
      <div className="skill-list d-flex justify-content-center align-items-center flex-wrap">
        {[
          { icon: <FaHtml5 />, title: "HTML" },
          { icon: <FaCss3Alt />, title: "CSS" },
          { icon: <FaBootstrap />, title: "Bootstrap" },
          { icon: <RiTailwindCssFill />, title: "Tailwind CSS" },
          { icon: <FaJs />, title: "JavaScript" },
          { icon: <SiTypescript />, title: "TypeScript" },
          { icon: <FaReact />, title: "React" },
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

export default Frontend;
