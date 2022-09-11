import React from "react";
import { Container } from "react-bootstrap";
import style from "../../Styles/Projects.module.css";
import Cards from "./Cards";

const Projects = ({ dark }) => {
  return (
    <Container
      id="Proyectos"
      className={
        !dark ? style.container_projects : style.container_projects_light
      }
    >
      <h1>
        <span className={!dark ? style.front_title : style.front_title_light}>
          <span style={{ color: "rgb(82, 34, 193)" }}>MIS PRO</span>YECTO
          <span style={{ color: "rgb(82, 34, 193)" }}>S</span>
        </span>
        <span className={style.back_title}>PROYECTOS</span>
      </h1>
      <Cards />
    </Container>
  );
};

export default Projects;
