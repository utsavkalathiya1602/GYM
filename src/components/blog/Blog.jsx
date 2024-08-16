import React from "react-dom";
import "../../index.css";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <section id="page-header">
        <h2>
          <span className="red">#</span> Our Blog
        </h2>
        <p>Home = Blog</p>
      </section>
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
        <div>
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
      <section id="sm-banner" class="section-p1">
        <div class="banner-box">
          <h4>Are Crunches the Best Workout for Abs? </h4>
          <span>
            Its a moment many aspiring marathoners fantasize about as they
            finish their umpteenth long training run: The few weeks leading up
            to the race when a training program calls for less running...{" "}
          </span>{" "}
          <br />
          <button class="white">Read More</button>
        </div>
        <div class="banner-box banner-box-2">
          <h4>How to Stop Muscle Cramps in Their Tracks</h4>
          <span>
            Its a moment many aspiring marathoners fantasize about as they
            finish their umpteenth long training run: The few weeks leading up
            to the race when a training program calls for less running...{" "}
          </span>{" "}
          <br />
          <button class="white">Read More</button>
        </div>
        <div class="banner-box banner-box-3">
          <h4>The 17 Most Amazing Fitness Vacations of 2014 </h4>
          <span>
            Its a moment many aspiring marathoners fantasize about as they
            finish their umpteenth long training run: The few weeks leading up
            to the race when a training program calls for less running...{" "}
          </span>{" "}
          <br />
          <button class="white">Read More</button>
        </div>
      </section>

      <section id="pagination" class="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </section>

      <section id="banner3">
        <div className="banner-box banner-box">
          <h2>#OFFER</h2>
          <h3>Buy ` 2 ` membership $ Get ` 1 ` Free</h3>
        </div>
        <div className="banner-box banner-box-2">
          <h2>#NEW EQUIPMENT</h2>
          <h3>Update our equipment in every year</h3>
        </div>
        <div className="banner-box banner-box-3">
          <h2>#BEST TRAINER</h2>
          <h3>we provide best trainer</h3>
        </div>
      </section>
      <hr />

       <h3 style={{textAlign:"center"}} > | GYM-Manegment Staff |</h3>
      <section className="review-card" >
<div class="card card1 ">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> Sem C.</span>
  <p class="job"> Manager</p>
  <p class="job"> Email: contact@example.com</p>
  <button> About-more
  </button>
</div>
<div class="card card2">
  <div class="card-border-top">
  </div> 
  <div class="img ">
  </div>
  <span> Martin B.</span>
  <p class="job"> Manager</p>
  <p class="job"> Email: contact@example.com</p>
  <button>  About-more
  </button>
</div>
<div class="card card3">
  <div class="card-border-top">
  </div>
  <div class="img ">
  </div>
  <span> Lensi S.</span>
  <p class="job">Manager</p>
  <p class="job"> Email: contact@example.com</p>
  <button>  About-more
  </button>
</div>
<div class="card card4">
  <div class="card-border-top">
  </div>
  <div class="img">
  </div>
  <span> Martin B.</span>
  <p class="job"> Manager</p>
  <p class="job"> Email: contact@example.com</p>
  <button>  About-more
  </button>
</div>
      </section>

      <hr className="line" />
      <div className="main">
        <div className="sub-main main1">
          <span>
            <i class="fa-brands fa-pied-piper-alt"></i> utsav <br /> kalathiya
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
          <div className="link">
            <h3>#Explore</h3>
            <div className="links">
              <a href="#">
                <i class="fa-solid fa-arrow-right"></i>About Us
              </a>
              <a href="#">
                <i class="fa-solid fa-arrow-right"></i>Trainers Team
              </a>
              <a href="#">
                <i class="fa-solid fa-arrow-right"></i>Awesome Classes
              </a>
              <a href="#">
                <i class="fa-solid fa-arrow-right"></i>Pricing Packages
              </a>
              <a href="#">
                <i class="fa-solid fa-arrow-right"></i>Latest News
              </a>
            </div>
          </div>
          <div className="contact">
            <h3>#our contacts</h3>
            <div>
              <div className="ad-1 cd">
                <i class="fa-solid fa-location-dot"></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </div>
              <div className="m-1 cd">
                <i class="fa-solid fa-phone"></i>
                +2 392 3929 210
              </div>
              <div className="e-1 cd">
                <i class="fa-solid fa-envelope"></i>
                vishalkalathiya@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="sub-main main3">
          <img src="img/t-2.avif" alt="" />
          <img src="img/t-3.avif" alt="" />
          <img src="img/t-1.avif" alt="" />
          <img src="img/t-3.avif" alt="" />
          <img src="img/t-1.avif" alt="" />
          <img src="img/t-2.avif" alt="" />
        </div>
      </div>
      <hr className="line" />
      <div className="footer">
        Copyright ©2024 All rights reserved | This template is made by @utsav
        kalathiya{" "}
      </div>
    </>
  );
}
export default Blog;
