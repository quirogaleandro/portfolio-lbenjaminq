import HTML from "./Images/Skills/HTML.png";
import CSS from "./Images/Skills/CSS.png";
import REACT from "./Images/Skills/REACT.png";
import REDUX from "./Images/Skills/REDUX.png";
import JS from "./Images/Skills/JS.png";
import NODE from "./Images/Skills/NODE.png";
import BOOTSTRAP from "./Images/Skills/bootstrap.png";
import EXPRESS from "./Images/Skills/expressjs-icon.svg";
import SEQUELIZE from "./Images/Skills/SEQUELIZE.png";
import TYPESCRIPT from "./Images/Skills/typescript.png";
import PostgreSQL from "./Images/Skills/PostgreSQL.png";
import MUI from "./Images/Skills/MUI.png";

interface Skill {
  img: string,
  label:string
}

export const SkillsMap: Skill[] = [
  {
    img: HTML,
    label: "HTML",
  },
  {
    img: CSS,
    label: "CSS",
  },
  {
    img: REACT,
    label: "React",
  },
  {
    img: REDUX,
    label: "Redux",
  },
  {
    img: JS,
    label: "Javascript",
  },
  {
    img: TYPESCRIPT,
    label: "Typescript",
  },
  {
    img: NODE,
    label: "Node.js",
  },
  {
    img: BOOTSTRAP,
    label: "Bootstrap",
  },
  {
    img: MUI,
    label: "MUI",
  },
  {
    img: EXPRESS,
    label: "Express",
  },
  {
    img: SEQUELIZE,
    label: "Sequelize",
  },
  {
    img: PostgreSQL,
    label: "PostgreSQL",
  },
];
