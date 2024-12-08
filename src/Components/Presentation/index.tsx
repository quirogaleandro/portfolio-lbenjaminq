import React from "react";
import Profile from "../../Images/Profile2024.jpg";
import Dowload from "../../Images/arrow.png";
import { Container } from "react-bootstrap";
import style from "../../Styles/Presentation.module.css";
import { Dark } from "../../interface/dark.interface";
import { SocialMedia } from "../SocialMedia";

export const Presentation: React.FC<Dark> = ({ dark }) => {
  return (
    <Container className={!dark ? style.container : style.container_light} id="Home" >
      <div className={!dark ? style.subcontainer : style.subcontainer_light}>
        <h1>Leandro Quiroga</h1>
        <h4>AWS Solutions Architect</h4>
        <p>
        Me especializo en AWS con orientación a DevOps, con experiencia en la migración de cargas de trabajo a la nube de AWS y la modernización de aplicaciones, creando soluciones escalables y automatizadas. En este portafolio encontrarás proyectos destacados en los que participé, con ejemplos de infraestructuras optimizadas diseñadas siguiendo las mejores prácticas de AWS.
        </p>
        <div className={style.cv_btn_container}>
          <a href="https://drive.google.com/uc?export=download&id=1e4XiDPtghFnDMek49zuadyInEApMLWsu">
            <button className={style.cv_btn}>
              Descargar CV{" "}
              <img
                alt="img"
                src={Dowload}
                style={{ width: "25px", marginLeft: "0.5%" }}
              />
            </button>
          </a>
          <SocialMedia />
        </div>
      </div>
      <img src={Profile} className={style.profile} alt="profile" />
    </Container>
  );
};

