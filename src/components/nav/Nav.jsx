import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../../index.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section id="header" className="fixed-top">
        <div className="logo-container">
          <img src="" className="logo" alt="" />
          <Link to="#" className="name">
            utsav <br /> kalathiya
          </Link>
        </div>
        {/* <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div> */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul id="navbar">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About-us</Link>
            </li>
            <li>
              <Link to="/Portfoliyo">Portfoliyo</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            {/* <li>
              <Link to="/index">index</Link>
            </li> */}
            <li>
              <Link to="/Home">Log-out</Link>
            </li>
            {/* <li>
              <a href="/Home">Log-out</a>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Nav;
