import React from 'react'
import github from '../Images/github.png'
import linkedin from '../Images/linkedin.png'
import style from '../Styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={style.container_footer}>
      <h5>
        Hecho por {" "}
        <span>Leandro Benjamin Quiroga</span>
      </h5>
      <div className={style.container_img}>
        <img src={github} />
        <img src={linkedin} />
      </div>
    </div>
  );
}

export default Footer