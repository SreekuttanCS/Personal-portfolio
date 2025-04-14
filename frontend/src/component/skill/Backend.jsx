import React from "react";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import SkillList from "./SkillList";

const Backend = () => {
  return (
    <div className="mt-4">
      <h3 className="skill-technology ">Backend</h3>
      <div className="skill-list d-flex justify-content-center align-items-center flex-wrap">
        <div className="skill-list  d-flex justify-content-center align-items-center flex-wrap">
          <SkillList icon={<FaNodeJs />} title={"Node.js"} />
          <SkillList icon={<SiExpress />} title={"Express"} />
          <SkillList icon={<DiMongodb />} title={"MongoDB"} />
        </div>
      </div>
    </div>
  );
};

export default Backend;
