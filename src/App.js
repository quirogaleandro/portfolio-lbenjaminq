import Navbar from './Components/Navbar';
import Presentation from './Components/Presentation';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import style from './Styles/App.module.css'

function App() {
  return (
    <div className={style.container}>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
