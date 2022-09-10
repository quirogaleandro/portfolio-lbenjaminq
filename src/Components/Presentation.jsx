import React from 'react'
import { Container } from 'react-bootstrap';
import Profile from '../Images/Profile.jpg'
import SocialMedia from './SocialMedia';
import Dowload from '../Images/arrow.png'
import style from '../Styles/Presentation.module.css'

const Presentation = () => {
  return (
    <Container className={style.container}>
      <div className={style.subcontainer}>
        <span>Bienvenido, soy </span>
        <h1>Leandro Quiroga</h1>
        <h4>Full stack developer</h4>
        <p>
          Soy una persona ambiciosa, aventurera y motivada en busca de nuevos
          retos para crecer profesional y personalmente. Buenas habilidades de
          colaboración dentro de un equipo productivo. Buscador de soluciones
          optimizadas.
        </p>
        <div className={style.cv_btn_container}>
          <a
            href="https://drive.google.com/uc?export=download&id=1ixWAXkv7otU4MnhR_FQlU3QFmQblCwYE"
          >
          <button className={style.cv_btn}>Descargar CV <img src={Dowload} style={{width:'25px',marginLeft:'0.5%'}} /></button>
          </a>
          <SocialMedia />
        </div>
      </div>
      <img
        src={Profile}
        className={style.profile}
        alt="profile"
      />
    </Container>
  );
}

export default Presentation