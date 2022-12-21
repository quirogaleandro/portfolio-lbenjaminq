import CountriesApp from "./Images/CountriesApp.jpg";
import B2B from "./Images/B2BCommodities.png";
import NetflixClone from "./Images/NetflixClone.jpg";
import TeslaClone from "./Images/TeslaClone.jpg";
import AppJuniorColaboration from "./Images/AppJuniorColaboration.png";
import EcommerceTS from "./Images/EcommerceTS.png"
import Ecommerce2TS from "./Images/Ecommerce2.0TS.png"

export const projects = [
  {
    name: "Countries app",
    overview:
      "Single Page Aplication (SPA) para usuarios donde pueden buscar y/o crear actividades en cada país del mundo, filtrar y ordernar los mismos por distintos parámetros.",
    link: "https://github.com/lbenjaminq/PI-Countries",
    deploy: "https://pi-countries-sigma.vercel.app/",
    img: CountriesApp,
  },
  {
    name: "B2B Commodities",
    overview:
      " Foro Online B2B (Bussines to Bussines) para importadores/exportadores de Commodities a nivel internacional. Los usuarios generan “posteos” donde puedan ofrecer/buscar productos.",
    link: "https://github.com/BarberoPablo/Commodities-Project",
    deploy: "https://dev-commodities.vercel.app/",
    img: B2B,
  },
  {
    name: "Netflix Clone",
    overview:
      "Clon de Netflix hecho en React, implementando Firebase para el manejo de usuarios y MUI para los estilos.",
    link: "https://github.com/lbenjaminq/NetflixClone",
    deploy: "https://netflux-bice.vercel.app/",
    img: NetflixClone,
  },
  {
    name: "App Junior",
    overview:
      "Colaborador en app para juniors, implementación de comentarios de un usuario trayendolos de una base de datos(MongoDB) y dando estilos con MUI.",
    link: "https://github.com/gpitrella/JUNIOR",
    deploy: "https://appjunior.vercel.app/",
    img: AppJuniorColaboration,
  },
  {
    name: "Tesla Clone",
    overview: "Clon de Tesla hecho en React, al 100% con Styled Components",
    link: "https://github.com/lbenjaminq/teslaClone",
    deploy: "https://tesla-clone-tau-snowy.vercel.app/",
    img: TeslaClone,
  },
  {
    name: "Ecommerce 1.0",
    overview: "Ecommerce hecho para practicar con Typescript, useContext y useReducer. Cuenta con un carrito para agregar productos.",
    link: "https://github.com/lbenjaminq/ecommerce-ts",
    deploy: "https://ecommerce-ts-theta.vercel.app/",
    img: EcommerceTS,
  },
  {
    name: "Ecommerce 2.0",
    overview: "Ecommerce hecho con Vite + React + TS. Auth con Firebase, login with Google, carrito de compras, filtrados y busquedas de productos",
    link: "https://github.com/lbenjaminq/vitets-ecommerce",
    deploy: "https://vitets-ecommerce-gumktnuu2-lbenjaminq.vercel.app/",
    img: Ecommerce2TS,
  },
];
