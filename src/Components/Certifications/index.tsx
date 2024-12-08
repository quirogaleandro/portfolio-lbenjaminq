import React from "react";
import { Dark } from "../../interface/dark.interface";
import { Container, Carousel } from "react-bootstrap";
import style from "../../Styles/Certifications.module.css"; 
import { CertificationsMap } from '../../Certifications'; 

export const Certifications: React.FC<Dark> = ({ dark }) => {
  return (
    <Container
      id="Certifications"
      className={!dark ? style.container_Skills : style.container_Skills_light}
    >
      <h1 className={style.skills}>
        <span className={!dark ? style.front_title : style.front_title_light}>
          <span style={{ color: "rgb(82, 34, 193)" }}>CERTI</span>FICA
          <span style={{ color: "rgb(82, 34, 193)" }}>C</span>IONES
        </span>
      </h1>
      <Carousel indicators={false} controls={false} interval={2000}>
        {CertificationsMap.map((certification) => (
          <Carousel.Item key={certification.label}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: '600px' }} 
            >
              <img
                src={certification.img}
                alt={certification.label}
                className="d-block mx-auto"
                style={{
                  maxWidth: '100%',
                  maxHeight: '90%',  
                  objectFit: 'contain',
                  width: 'auto',
                  height: 'auto',
                }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};
