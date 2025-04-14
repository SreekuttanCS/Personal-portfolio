import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import SkillList from "./SkillList";

const Frontend = () => {
  return (
    <div>
      <h3 className="skill-technology">Frontend</h3>
      <div className="skill-list  d-flex justify-content-center align-items-center flex-wrap">
        <SkillList icon={<FaHtml5 />} title={"HTML"} />
        <SkillList icon={<FaCss3Alt />} title={"CSS"} />
        <SkillList icon={<FaBootstrap />} title={"Bootstrap"} />
        <SkillList icon={<RiTailwindCssFill />} title={"Tailwind CSS"} />
        <SkillList icon={<FaJs />} title={"JavaScript"} />
        <SkillList icon={<SiTypescript />} title={"TypeScript"} />
        <SkillList icon={<FaReact />} title={"React"} />
      </div>
    </div>
  );
};

export default Frontend;
