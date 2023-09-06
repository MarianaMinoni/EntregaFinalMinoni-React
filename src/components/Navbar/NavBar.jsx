import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Beer Me</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cervezas nacionales</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cervezas importadas</a>
          </li>
        
        </ul>
      </div>
      <CartWidget/>
    </div>
  </nav>
  )
}

export default NavBar
