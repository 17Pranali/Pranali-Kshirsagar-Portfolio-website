import { Navbar, Nav, Container } from "react-bootstrap";
import './Navbar.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Pranali Kshirsagar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#certification">Certification</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
