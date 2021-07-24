import React from 'react'
import Button from './Button'
import './header.css'
import { Link } from 'react-router-dom';
import logo from '../assests/logo.svg'

export const Header = (props) => {
    return (
        <div className="Header">
            <nav class="navbar bg-light fixed-top navbar-expand-lg ">
  <div class="container-fluid">
  <a class="navbar-brand fonts_logo" href="#">
      <img src={logo} alt="logo" width="30" height="24" class="d-inline-block align-text-top "/>
      CRYPTOTRAK
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end  "  id="navbarSupportedContent">
      <ul class="navbar-nav    mx-lg-5 mb-2 mb-lg-0">
        <Link to="/">
        <li class="nav-item mx-lg-5">
          Home
          </li>
          </Link>
        
          <Link to="/Tracker">
        <li class="nav-item mx-lg-5">
          Tracker
          </li>
          </Link>
        
          <Link to="/News">
        <li class="nav-item mx-lg-5">
          News
          </li>
          </Link>
        
          <Link to="/Contact">
        <li class="nav-item mx-lg-5">
          Contact
          </li>
          </Link>
        
      </ul>
      <Button name="Sign Up" classes="me-sm-0"></Button>
    </div>
  </div>
</nav>
        </div>
    )
}
