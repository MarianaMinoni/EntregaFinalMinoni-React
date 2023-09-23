import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
<div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Beer Me</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#features">Cervezas importadas</Nav.Link>
        <Nav.Link href="#pricing">Cervezas nacionales</Nav.Link>
      </Nav>
      <CartWidget/>
    </Container>
    </Navbar>
  
    
      </div>
  )
}

export default NavBar
