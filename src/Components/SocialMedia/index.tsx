import React from "react";
import github from "../../Images/github.png";
import linkedin from "../../Images/linkedin.png";
import style from "../../Styles/SocialMedia.module.css";

export const SocialMedia: React.FC<{}> = () => {
  return (
    <div className={style.social}>
      <a href="https://github.com/quirogaleandro" target="blank">
        <img src={github} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/leandro-quiroga/"
        target="blank"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  );
};

