import React from 'react'
import  { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
        <div className="Footer">
        <div className="social" >
            <h2>Connect with us: </h2>
        <div>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-github"></i>
        </div>
        </div>

        <div className="links">
        <ul>
            <li><h3>Our Pages :</h3></li>
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

                <ul>
            <li><h3>Tools</h3></li>
                
            <Link className="Link" to="/News">
                    <li><a href="">Tracker</a></li>

                    </Link>
                    <Link className="Link" to="/Videos">
                    <li><a href="">Converter</a></li>

                    </Link>
                    <Link className="Link" to="/Contacts">
                    <li><a href="">Contact</a></li>

                    </Link>
                    
                </ul>

                <ul>
            <li><h3>Participate :</h3></li>
            <Link className="Link" to="/News">
                    <li><a href="">Development</a></li>

                    </Link>
                    <Link className="Link" to="/Videos">
                    <li><a href="">Support Cryptotrak</a></li>

                    </Link>
                    
                   
                    
                </ul>
                <ul>
            <li><h3>Other :</h3></li>
                
            <Link className="Link" to="/News">
                    <li><a href="">Legal</a></li>

                    </Link>
                    <Link className="Link" to="/Videos">
                    <li><a href="">Privacy policy</a></li>

                    </Link>
                    <Link className="Link" to="/Contacts">
                    <li><a href="">About us</a></li>

                    </Link>
                    
                </ul>






        </div>
        </div>
        <div className="footer_end"><p>CryptoTrak 2020-21</p></div>
        </div>
    )
}

export default Footer
