import React from 'react';
import { Nav } from 'react-bootstrap';

function Header () {
  return (
    <Nav fill >
      <Nav.Item>
        <Nav.Link href="#home">Intro</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#services">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#our-story">Our Story</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
      </Nav.Item>
    </Nav >
  );
}

export default Header;
