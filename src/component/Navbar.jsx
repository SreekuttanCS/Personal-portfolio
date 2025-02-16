import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="heading">
          sk
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Link to="/" className="navbar-link">
              Home
            </Link>

            <Link to="/contact" className="navbar-link">
              Contact
            </Link>

            <Link to="/about" className="navbar-link">
              About
            </Link>

            <Link to="/project" className="navbar-link">
              Project
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
