import React from 'react'
import HTML from '../Images/Skills/HTML.png'
import CSS from '../Images/Skills/CSS.png'
import REACT from '../Images/Skills/REACT.png'
import REDUX from '../Images/Skills/REDUX.png'
import JS from '../Images/Skills/JS.png'
import NODE from '../Images/Skills/NODE.png'
import Bootstrap from '../Images/Skills/bootstrap.png'
import EXPRESS from '../Images/Skills/expressjs-icon.svg'
import SEQUELIZE from '../Images/Skills/SEQUELIZE.png'
 
import style from '../Styles/Skills.module.css'
import { Container } from 'react-bootstrap'

const Skills = () => {
  return (
    <Container id="Skills" className={style.container_Skills}>
      <h1 className={style.skills}>
        <span className={style.front_title}>
          <span style={{ color: "rgb(82, 34, 193)" }}>TEC</span>NO
          <span style={{ color: "rgb(82, 34, 193)" }}>L</span>OGÍ
          <span style={{ color: "rgb(82, 34, 193)" }}>AS</span>
        </span>
        <span className={style.back_title}>SKILLS</span>
      </h1>
      <div className={style.container_skills}>
        <div>
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
          <img src={Bootstrap} alt="BOOTSTRAP" />
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
      </div>
    </Container>
  );
}

export default Skills