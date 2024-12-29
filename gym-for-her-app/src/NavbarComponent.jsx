import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If you're using React Router

// Optional: Importing Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        {/* Navbar.Brand with logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="../src/assets/logo.png" // Adjust path as necessary
            alt="The Gym for Her"
            style={{ width: '150px', height: 'auto' }} // You can adjust the width/height as needed
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <Nav.Link as={Link} to="/instructors">Instructors</Nav.Link>
            <Nav.Link as={Link} to="/schedule">My Schedule</Nav.Link>
            <NavDropdown title="Classes" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/book-now">Book Now</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/our-classes">Our Classes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
