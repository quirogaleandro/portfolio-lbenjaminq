import { useState } from "react";
import Navbar from "./Components/Navbar";
import Presentation from "./Components/Presentation";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer";
import style from "./Styles/App.module.css";

function App() {
  const body = document.body;
  const [dark, setDark] = useState(() => {
    const mode = JSON.parse(window.localStorage.getItem("dark"));
    if (mode) {
      return mode;
    } else {
      return false;
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    setDark(!dark);
    window.localStorage.setItem("dark", JSON.stringify(!dark));
  };

  if (!dark) {
    body.classList.remove(style.ligth);
    body.classList.add(style.container);
  } else {
    body.classList.remove(style.container);
    body.classList.add(style.ligth);
  }

  return (
    <div>
      <Navbar handleClick={handleClick} dark={dark} />
      <Presentation dark={dark} />
      <Projects dark={dark} />
      <Skills dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}

export default App;
