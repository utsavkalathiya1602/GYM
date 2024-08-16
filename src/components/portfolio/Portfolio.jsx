import React from "react-dom";
import '../../index.css'
import {Link, NavLink} from 'react-router-dom'

function Portfoliyo() {
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
        <div >
        {/* className={`nav-links ${isMenuOpen ? 'active' : ''}`} */}
          <ul id="navbar">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/About">About-us</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfoliyo</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/index">Log-out</Link>
            </li>
          </ul>
        </div>
      </section>
      <section id="page-header">
        <h2><span className="red" >#</span> Portfoliyo</h2>
        <p>Home = Portfoliyo</p>
      </section>

      <div class="list">
        <li>
          <a
            href="#All Galary"
            class="galary"
            style={{backgroundColor: "#fb8500"}}
            // style={{ background-color: "#fb8500"; }}
            >
            All Galary
          </a>
        </li>
        <li>
          <a href="#Fitness" 
          class="fitnes" 
          style={{backgroundColor: "#ffb703"}}
          // style={"background-color: #ffb703 ;"}
          >
            Fitness
          </a>
        </li>
        <li>
          <a
            href="#Coaching"
            class="coaching"
            style={{backgroundColor: "#023047"}}
            // style={"background-color: #023047 ;"}
            >
            Coaching
          </a>
        </li>
        <li>
          <a href="#Event" 
          class="event" 
          style={{backgroundColor: "#219ebc"}}
          // style={"background-color: #219ebc ;"}
          >
            Event
          </a>
        </li>
      </div>

      <section id="product1" class="section-p1">
        <h3
          id="All Galary"
          style={{backgroundColor: "#fb8500",borderRadius: "20px",padding: "15px"}}
          >
          <a href=""  id="galary">
            {" "}
            # All Galary{" "}
          </a>
        </h3>
        <div class="pro-container">
          <div class="pro">
            {/* <!-- onclick="window.location.href='sproduct.html' --> */}
            <img src="/img/portfoliyo/event-1.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/coach-1.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/fitnes-1.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
          <div class="pro">
            <img src="/img/t-4.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
        </div>

        <div class="pro-container">
          <div class="pro">
            {/* <!-- onclick="window.location.href='sproduct.html' --> */}
            <img src="/img/portfoliyo/coach-4.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/fitnes-2.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/event-2.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
          <div class="pro">
            <img src="/img/portfoliyo/coach-2.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="product1" class="section-p1">
        <h3
          id="Fitness"
          style={{backgroundColor: "#ffb703",borderRadius: "20px",padding: "15px"}}
          >
          <a href="" id="fitnes">
            {" "}
            # Fitness{" "}
          </a>
        </h3>
        <div class="pro-container">
          <div class="pro">
            {/* <!-- onclick="window.location.href='sproduct.html' --> */}
            <img src="/img/portfoliyo/fitnes-1.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/fitnes-2.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/fitnes-3.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
          <div class="pro">
            <img src="/img/portfoliyo/fitnes-4.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="product1" class="section-p1">
        <h3
          id="Coaching"
          style={{backgroundColor: "#023047",borderRadius: "20px",padding: "15px"}}
          >
          <a href="" id="coaching">
            {" "}
            # Coaching{" "}
          </a>
        </h3>
        <div class="pro-container">
          <div class="pro">
            {/* <!-- onclick="window.location.href='sproduct.html' --> */}
            <img src="/img/portfoliyo/coach-1.avif" alt="" />
            <div class="des">
              <span>phisics trainer</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/coach-3.avif" alt="" />
            <div class="des">
              <span>calesthetic`s</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/coach-2.avif" alt="" />
            <div class="des">
              <span>musal building</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
          <div class="pro">
            <img src="/img/portfoliyo/coach-4.avif" alt="" />
            <div class="des">
              <span>core musal-building</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
        </div>
      </section>

      <section id="product1" class="section-p1">
        <h3
          id="Event"
          style={{backgroundColor: "#219ebc",borderRadius: "20px",padding: "15px"}}
          >
          <a href="" id="event">
            # Event{" "}
          </a>{" "}
        </h3>
        <div class="pro-container">
          <div class="pro">
            {/* <!-- onclick="window.location.href='sproduct.html' --> */}
            <img src="/img/portfoliyo/event-1.avif" alt="" />
            <div class="des">
              <span>Boxing</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/event-2.avif" alt="" />
            <div class="des">
              <span>Climbing</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>

          <div class="pro">
            <img src="/img/portfoliyo/event-3.avif" alt="" />
            <div class="des">
              <span>Waight-Lifting</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
          <div class="pro">
            <img src="/img/t-4.avif" alt="" />
            <div class="des">
              <span>musal-building</span>
              <h5>NOAH LEONARD</h5>
            </div>
          </div>
        </div>
      </section>

     
<hr className="line" />
      <div className="main">
        <div className="sub-main main1">
          <span>
          <i class="fa-brands fa-pied-piper-alt"></i>  utsav <br /> kalathiya
          </span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div class="star1">
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-square-x-twitter"></i>
          </div>
        </div>
        <div className="sub-main main2">
        <div className="link" >
          <h3>
            #Explore
          </h3>
          <div className="links">
            <a href="#"><i class="fa-solid fa-arrow-right"></i>About Us</a>
            <a href="#"><i class="fa-solid fa-arrow-right"></i>Trainers Team</a>
            <a href="#"><i class="fa-solid fa-arrow-right"></i>Awesome Classes</a>
            <a href="#"><i class="fa-solid fa-arrow-right"></i>Pricing Packages</a>
            <a href="#"><i class="fa-solid fa-arrow-right"></i>Latest News</a>
          </div>
        </div>
        <div className="contact">
          <h3>
            #our contacts
          </h3>
          <div>
            <div className="ad-1 cd"><i class="fa-solid fa-location-dot"></i>
            203 Fake St. Mountain View, San Francisco, California, USA
            </div>
            <div className="m-1 cd"><i class="fa-solid fa-phone"></i>
            +2 392 3929 210
            </div>
            <div className="e-1 cd"><i class="fa-solid fa-envelope"></i>
              vishalkalathiya@gmail.com
            </div>
          </div>
        </div>
        </div>
        <div className="sub-main main3">
          <img src="img/t-2.avif" alt="" />
          <img src="img/t-3.avif" alt="" />
          <img src="img/t-1.avif" alt="" />
          <img src="img/portfoliyo/coach-3.avif" alt="" />
          <img src="img/portfoliyo/event-3.avif" alt="" />
          <img src="img/portfoliyo/fitnes-3.avif" alt="" />
        </div>
      </div>
      <hr className="line" />
      <div className="footer"> 
      Copyright ©2024 All rights reserved | This template is made by @utsav kalathiya </div>

      
    </>
  );
}
export default Portfoliyo;
