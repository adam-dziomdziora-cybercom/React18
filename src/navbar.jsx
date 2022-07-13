import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

export const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/link">Link</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:
            <NavLink href="/login">Mark Otto</NavLink>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
