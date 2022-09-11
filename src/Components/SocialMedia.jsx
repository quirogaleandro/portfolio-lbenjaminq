import React from "react";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import style from "../Styles/SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={style.social}>
      <a href="https://github.com/lbenjaminq/" target="blank">
        <img src={github} alt="github" />
      </a>
      <a
        href="https://www.linkedin.com/in/leandro-quiroga-4613a1236/"
        target="blank"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  );
};

export default SocialMedia;
