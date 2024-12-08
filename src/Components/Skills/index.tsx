import React from "react";
import { Dark } from "../../interface/dark.interface";
import { Container } from "react-bootstrap";
import style from "../../Styles/Skills.module.css";
import {SkillsMap} from '../../Skills'

export const Skills: React.FC<Dark> = ({ dark }) => {
  return (
    <Container
      id="Skills"
      className={!dark ? style.container_Skills : style.container_Skills_light}
    >
      <h1 className={style.skills}>
        <span className={!dark ? style.front_title : style.front_title_light}>
          <span style={{ color: "rgb(82, 34, 193)" }}>TEC</span>NO
          <span style={{ color: "rgb(82, 34, 193)" }}>L</span>OGÍ
          <span style={{ color: "rgb(82, 34, 193)" }}>AS</span>
        </span>
        <span className={style.back_title}>SKILLS</span>
      </h1>
      <div
        className={
          !dark ? style.container_skills : style.container_skills_light
        }
      >
        {
          SkillsMap.map((skill)=>(
            <div key={skill.label}>
              <img src={skill.img} alt={skill.img} />
              <span>{skill.label}</span>
            </div>
          ))
        }
      </div>
    </Container>
  );
};
