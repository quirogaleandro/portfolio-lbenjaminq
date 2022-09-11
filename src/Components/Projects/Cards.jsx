import style from "../../Styles/Projects.module.css";
import CountriesApp from "../../Images/CountriesApp.png";
import B2B from "../../Images/B2BCommodities.png";
import githubRepo from "../../Images/githubRepo.png";
import web from "../../Images/web.png";

function GroupExample() {
  return (
    <section id="Proyectos" className={style.container_cards}>
      <div className={style.card_one}>
        <a href="https://pi-countries-sigma.vercel.app/" target={"blank"}>
          <img
            src={CountriesApp}
            className={style.projects}
            alt="CountriesApp"
          />
        </a>
        <h3>Countries app</h3>
        <p>
          Single Page Aplication (SPA) para usuarios donde pueden buscar y/o
          crear actividades en cada país del mundo, filtrar y ordernar los
          mismos por distintos parámetros.
        </p>
        <div className={style.social_media}>
          <a href="https://github.com/lbenjaminq/PI-Countries" target={"blank"}>
            <img src={githubRepo} alt="github" />
          </a>
          <a href="https://pi-countries-sigma.vercel.app/" target={"blank"}>
            <img src={web} style={{ width: "25px" }} alt="CountriesApp" />
          </a>
        </div>
      </div>
      <div className={style.card_two}>
        <a href="https://dev-commodities.vercel.app/" target={"blank"}>
          <img src={B2B} className={style.projects} alt="B2B" />
        </a>
        <h3>B2B Commodities</h3>
        <p>
          Foro Online B2B (Bussines to Bussines) para importadores/exportadores
          de Commodities a nivel internacional. Los usuarios generan “posteos”
          donde puedan ofrecer/buscar productos.
        </p>
        <div className={style.social_media}>
          <a
            href="https://github.com/BarberoPablo/Commodities-Project"
            target={"blank"}
          >
            <img src={githubRepo} alt="github" />
          </a>
          <a href="https://dev-commodities.vercel.app/" target={"blank"}>
            <img src={web} style={{ width: "25px" }} alt="B2B" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default GroupExample;
