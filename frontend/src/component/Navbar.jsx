import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../index.css";

function Navbars() {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className="py-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="heading-navbar  fw-bold">
          sk
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>

            <Link to="/about" className="nav-link">
              About
            </Link>

            <Link to="/project" className="nav-link">
              Project
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
