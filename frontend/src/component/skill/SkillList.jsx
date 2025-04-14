import React from "react";

const SkillList = ({ icon, title }) => {
  return (
    <div className="skill-list-item ">
      <span className="skill-icon">{icon}</span>
      <span className="skill-title">{title}</span>
    </div>
  );
};

export default SkillList;
