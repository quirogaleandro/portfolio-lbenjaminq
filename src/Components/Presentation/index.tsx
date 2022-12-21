import React from "react";
import Profile from "../../Images/Profile.jpg";
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
        <h4>Full stack developer</h4>
        <p>
          Soy una persona ambiciosa, aventurera y motivada en busca de nuevos
          retos para crecer profesional y personalmente. Buenas habilidades de
          colaboración dentro de un equipo productivo. Buscador de soluciones
          optimizadas.
        </p>
        <div className={style.cv_btn_container}>
          <a href="https://drive.google.com/uc?export=download&id=1c9CeVa2tZinobeZiNNs5exR8BTI2X1Bu">
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

