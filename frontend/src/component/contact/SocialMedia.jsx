import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Media from "./Media";

export const SocialMedia = () => {
  return (
    <div>
      <Media
        icon={<FaLinkedinIn />}
        title={"LinkedIn"}
        href={"https://www.linkedin.com/in/sreekuttan7/"}
      />
      <Media
        icon={<FaGithub />}
        title={" GitHub"}
        href={" https://github.com/SreekuttanCS"}
      />
      <Media
        icon={<SiGmail />}
        title={"Gmail"}
        href={
          "https://mail.google.com/mail/?view=cm&fs=1&to=sreekuttancs26@gmail.com"
        }
      />
      <Media
        icon={<FaInstagram />}
        title={"Instagram"}
        href={"https://www.instagram.com/_kxttan._"}
      />
    </div>
  );
};
