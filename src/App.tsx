import React, { useState } from "react";
import style from "./Styles/App.module.css";
import { ContactForm, Footer, NavbarComponent, Presentation, Projects, Skills } from "./Components";

function App() {
  const body = document.body;
  const [dark, setDark] = useState<boolean>(() => {
    const mode = JSON.parse(window.localStorage.getItem("dark")as string) ;
    if (mode) {
      return mode;
    } else {
      return false;
    }
  });

  const handleClick = (e: React.MouseEvent) => {
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
      <NavbarComponent handleClick={handleClick} dark={dark} />
      <Presentation dark={dark} />
      <Projects dark={dark} />
      <Skills dark={dark} />
      <ContactForm dark={dark} />
      <Footer />
    </div>
  );
}

export default App;
