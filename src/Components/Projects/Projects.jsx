import React from "react";
import { Container } from "react-bootstrap";
import style from "../../Styles/Projects.module.css";
import Cards from "./Cards";

const Projects = () => {
  return (
    <Container id="Proyectos" className={style.container_projects}>
      <h1>
        <span className={style.front_title}>
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
