import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
<div>
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Link to="/" style={{textDecoration:"none"}}>
      <Navbar.Brand >Beer Me</Navbar.Brand>
      </Link>
      <Nav className="me-auto">
        <Link style={{textDecoration:"none", marginRight:"10px"}}  to="/">Inicio</Link>
        <Link style={{textDecoration:"none", marginRight:"10px"}} to="/categoria/importadas">Cervezas importadas</Link>
        <Link style={{textDecoration:"none", marginRight:"10px"}} to="/categoria/nacionales">Cervezas nacionales</Link>
        <Link style={{textDecoration:"none", marginRight:"10px"}} to="/cart">Cart </Link>
        <Link style={{textDecoration:"none", marginRight:"10px"}} to="/user">Perfil </Link>
        
      </Nav>
      <CartWidget />
    </Container>
    </Navbar>
  
    
      </div>
  )
}

export default NavBar
