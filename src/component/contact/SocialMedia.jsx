import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const SocialMedia = () => {
  return (
    <div>
      <div className="social-media d-flex align-items-center gap-2 py-3 ">
        <FaInstagram />
        <span>Instagram</span>
      </div>
      <div className="social-media d-flex align-items-center gap-2 py-3 ">
        <SiGmail />
        <span>Gmail </span>
      </div>
      <div className="social-media d-flex align-items-center gap-2 py-3 ">
        <FaLinkedinIn />
        <span>LinkedIn </span>
      </div>
      <div className="social-media d-flex align-items-center gap-2 py-3 ">
        <FaGithub />
        <span>Github </span>
      </div>
    </div>
  );
};
