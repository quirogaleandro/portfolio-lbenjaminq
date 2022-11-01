import React from "react";
import { Dark } from "../../interface/dark.interface";
import { Container } from "react-bootstrap";
import style from "../../Styles/Skills.module.css";
import HTML from "../../Images/Skills/HTML.png";
import CSS from "../../Images/Skills/CSS.png";
import REACT from "../../Images/Skills/REACT.png";
import REDUX from "../../Images/Skills/REDUX.png";
import JS from "../../Images/Skills/JS.png";
import NODE from "../../Images/Skills/NODE.png";
import BOOTSTRAP from "../../Images/Skills/bootstrap.png";
import EXPRESS from "../../Images/Skills/expressjs-icon.svg";
import SEQUELIZE from "../../Images/Skills/SEQUELIZE.png";
import TYPESCRIPT from "../../Images/Skills/typescript.png";
import PostgreSQL from "../../Images/Skills/PostgreSQL.png";
import MUI from "../../Images/Skills/MUI.png";
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
        {/* <div>
          <img src={HTML} alt="HTML" />
          <span>HTML</span>
        </div>
        <div>
          <img src={CSS} alt="CSS" />
          <span>CSS</span>
        </div>
        <div>
          <img src={JS} alt="JAVASCRIPT" />
          <span>Javascript</span>
        </div>
        <div>
          <img src={BOOTSTRAP} alt="BOOTSTRAP" />
          <span>Bootstrap</span>
        </div>
        <div>
          <img src={REACT} alt="REACT" />
          <span>React</span>
        </div>
        <div>
          <img src={REDUX} alt="REDUX" />
          <span>Redux</span>
        </div>
        <div>
          <img src={NODE} alt="NODE" />
          <span>NodeJS</span>
        </div>
        <div>
          <img src={EXPRESS} alt="EXPRESS" />
          <span>ExpressJS</span>
        </div>
        <div>
          <img src={SEQUELIZE} alt="SEQUELIZE" />
          <span>Sequelize</span>
        </div>
        <div>
          <img src={TYPESCRIPT} alt="TYPESCRIPT" />
          <span>Typescript</span>
        </div>
        <div>
          <img src={PostgreSQL} alt="PostgreSQL" />
          <span>PostgreSQL</span>
        </div>
        <div>
          <img src={MUI} alt="MUI" />
          <span>MUI</span>
        </div> */}
      </div>
    </Container>
  );
};
