import CountriesApp from "../../Images/CountriesApp.png";
import B2B from "../../Images/B2BCommodities.png";
import githubRepo from "../../Images/githubRepo.png";
import web from "../../Images/web.png";
import style from "../../Styles/Projects.module.css";

function GroupExample() {
  return (
    <section id='Proyectos' className={style.container_cards}>
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
          Descripcion del project para que la gente pueda ver de que es lo que
          trata este preojecto asi es que lo hacemos
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
          Descripcion del project para que la gente pueda ver de que es lo que
          trata este preojecto asi es que lo hacemos
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
