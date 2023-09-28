import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
<div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Beer Me</Navbar.Brand>
      <Nav className="me-auto">
        <Link style={{textDecoration:"none", marginRight:"10px"}}  to="/">Inicio</Link>
        <Link style={{textDecoration:"none", marginRight:"10px"}} to="/cervezasimportadas">Cervezas importadas</Link>
        <Link style={{textDecoration:"none", marginRight:"10px"}} to="/cervezasnacionales">Cervezas nacionales</Link>
      </Nav>
      <CartWidget/>
    </Container>
    </Navbar>
  
    
      </div>
  )
}

export default NavBar
