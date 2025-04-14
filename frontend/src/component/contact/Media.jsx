import React from "react";

const Media = ({ icon, title, href }) => {
  return (
    <div>
      <a
        className="social-media d-flex align-items-center gap-2 py-3 text-decoration-none"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
        <span>{title}</span>
      </a>
    </div>
  );
};

export default Media;
