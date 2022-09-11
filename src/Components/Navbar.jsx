import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import moon from "../Images/moon.png";
import sun from "../Images/sun.png";
import style from "../Styles/Navbar.module.css";

function CollapsibleExample({ handleClick, dark }) {
  return (
    <Navbar
      id="Home"
      collapseOnSelect
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ background: "#0F0E0E",maxWidth:'1200px',margin:'auto' }}
    >
      <Container fluid="lg">
        <Navbar.Brand href="#Home">{"< Home />"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={style.items}>
            <Nav.Link style={{ color: "white" }} href="#Proyectos">
              Proyectos
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#Skills">
              Skills
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="#Contacto">
              Contacto
            </Nav.Link>
              {dark ? (
                <button onClick={handleClick} className={style.mode_light}>
                  <img src={sun} />
                </button>
              ) : (
                <button onClick={handleClick} className={style.mode}>
                  <img src={moon} />
                </button>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
