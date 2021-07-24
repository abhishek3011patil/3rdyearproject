import React from 'react'
import  { Link } from 'react-router-dom';
import logo from '../assests/logo.svg'
import './Header.css'
import Button from './Button'


const Header = () => {
    return (
        <div className="Header">
        <header className="Navbar">
            <img src={logo} alt="" className="logo" />
            <a className="company_name" href="">CRYPTOTRAK</a>
            
            <nav>
                <ul>
                <Link className="Link" to="/">
                    <li><a href="">Home</a></li>

                    </Link>
                    <Link className="Link" to="/Tracker">
                    <li><a href="">Tracker</a></li>

                    </Link>
                    <Link className="Link" to="/News">
                    <li><a href="">News</a></li>

                    </Link>
                    <Link className="Link" to="/Videos">
                    <li><a href="">Videos</a></li>

                    </Link>
                    <Link className="Link" to="/Contacts">
                    <li><a href="">Contact</a></li>

                    </Link>
                    
                </ul>
            </nav>

            <Button style={{width:'100px'}} name="Sign Up"> </Button>

        </header>
        </div>
    )
}

export default Header
