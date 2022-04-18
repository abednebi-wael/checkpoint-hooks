import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Add from "./Add";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="home-page">
      <>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand className="title-navig" href="#home">
              Our Movies
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown
                as={Link}
                to="/movies"
                title="Movies"
                id="basic-nav-dropdown link"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Musical</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Adenture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Love story</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Add />
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">About Us</Nav.Link>
            </Nav>
            <Add  />
          </Container>
        </Navbar>
      </>
    </div>
  );
}
export default NavBar;
