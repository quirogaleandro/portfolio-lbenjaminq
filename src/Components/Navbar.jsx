import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from '../Styles/Navbar.module.css'

function CollapsibleExample() {
  return (
    <Navbar  id='Home' collapseOnSelect expand="lg" variant="dark" style={{background:'#0F0E0E'}}>
      <Container fluid='lg'>
        <Navbar.Brand href="#Home">{'< Home />'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={style.items}>
            <Nav.Link style={{color:'white'}} href="#Proyectos" >Proyectos</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#Skills">Skills</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#Contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;