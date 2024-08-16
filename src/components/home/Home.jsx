import React from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../index.css";
// import { useState } from "react";
import {Link} from 'react-router-dom';

function Home() {

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
      {/* <!-- ======================== hero section================================= --> */}
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


   
<div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/c-1.avif" className="d-block w-100 vh-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome To our `GYM`</h5>
              <p>“The real workout starts when you want to stop.” – Ronnie Coleman</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/c-2.avif" className="d-block w-100 vh-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Know about our `GYM`</h5>
              <p>“If something stands between you and your success, move it.” —Dwayne “The Rock” Johnson</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/c-3.avif" className="d-block w-100 vh-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Motivational people</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/c-1.avif" className="d-block w-100 vh-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>four slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/c-2.avif" className="d-block w-100 vh-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>five slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- <p>Save more with coupons & up to 60% off!</p> --> */}
      {/* <!-- =========================== program ==================== --> */}

      <section className="services" id="services">
        <h1 className="heading">
          | our <span>Facility |</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fa-solid fa-dumbbell"></i>
            <h3>Weight lifting</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, veritatis.
            </p>
            {/* <!-- <a href="#" class="btn">learn more <span class="fa-solid fa-right-to-bracket"></span></a> --> */}
          </div>

          <div className="box">
            <i className="fa-solid fa-person"></i>
            <h3>Body bulding</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, veritatis.
            </p>
            {/* <!-- <a href="#" class="btn">learn more <span class="fa-solid fa-right-to-bracket"></span></a> --> */}
          </div>

          <div className="box">
            <i className="fa-solid fa-heart-pulse"></i>
            <h3>Healthy</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, veritatis.
            </p>
            {/* <!-- <a href="#" class="btn">learn more <span class="fa-solid fa-right-to-bracket"></span></a> --> */}
          </div>

          <div className="box">
            <i className="fa-solid fa-spa"></i>
            <h3>Yoga</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, veritatis.
            </p>
            {/* <!-- <a href="#" class="btn">learn more <span class="fa-solid fa-right-to-bracket"></span></a> --> */}
          </div>

          <div className="box">
            <i className="fa-solid fa-bed-pulse"></i>
            <h3>Medical Facility</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, veritatis.
            </p>
            {/* <!-- <a href="#" class="btn">learn more <span class="fa-solid fa-right-to-bracket"></span></a> --> */}
          </div>

          <div className="box">
            <i className="fa-solid fa-network-wired"></i>
            <h3>Other</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, veritatis.
            </p>
            {/* <!-- <a href="#" class="btn">learn more <span class="fa-solid fa-right-to-bracket"></span></a> --> */}
          </div>
        </div>
      </section>

      {/* <!-- ================banner================= --> */}
      <section id="banner" className="section-m1">
        <h4>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </h4>
        <h2>START YOUR JOURNEY WITH OUR EXCITING OFFERS</h2>
        <button class="normal">Join With us</button>
      </section>

      {/* <!-- =========================our class========================= -->   */}
      <h1 className="heading" style={{ textAlign: "center" }} >
          | our <span>program |</span>
        </h1>
      <section id="blog">
        <div class="blog-box">
          <div class="blog-img">
            <img src="/img/class-1.avif" alt="" />
          </div>
          <div class="blog-details">
            <h4>Cardio workout</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi cumque deserunt explicabo vitae quasi earum quo iste, iusto
              sit.
            </p>
            <a href="#">Continue Reading</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="/img/class-2.avif" alt="" />
          </div>
          <div class="blog-details">
            <h4>Body Building</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi cumque deserunt explicabo vitae quasi earum quo iste, iusto
              sit.
            </p>
            <a href="#">Continue Reading</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="/img/class-4.avif" alt="" />
          </div>
          <div class="blog-details">
            <h4>Racing runing</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi cumque deserunt explicabo vitae quasi earum quo iste, iusto
              sit.
            </p>
            <a href="#">Continue Reading</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="/img/class-5.avif" alt="" />
          </div>
          <div class="blog-details">
            <h4>Yoga Fitness</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi cumque deserunt explicabo vitae quasi earum quo iste, iusto
              sit.
            </p>
            <a href="#">Continue Reading</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="/img/class-6.avif" alt="" />
          </div>
          <div class="blog-details">
            <h4>Kick boxing</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi cumque deserunt explicabo vitae quasi earum quo iste, iusto
              sit.
            </p>
            <a href="#">Continue Reading</a>
          </div>
        </div>
        <div class="blog-box">
          <div class="blog-img">
            <img src="/img/class-3.avif" alt="" />
          </div>
          <div class="blog-details">
            <h4>Martial Arts</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              modi cumque deserunt explicabo vitae quasi earum quo iste, iusto
              sit.
            </p>
            <a href="#">Continue Reading</a>
          </div>
        </div>
      </section>

      {/* <!-- ====================our trainer==================== --> */}
      <section className="blogs" id="blogs">
        <h1 className="heading">
          | our <span>Trainer</span>
        </h1>
        {/* <hr /> */}
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="/img/class-2.avif" alt="" />
            </div>
            <div className="content">
              <h3>Martin Alex </h3>
              <h4>Gymer</h4>
              <p className="add1">
                Body Building, the original LES MILLS barbell class, will
                sculpt, tone and strengthen your entire body, fast!
              </p>
              <div className="share">
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/img/class-5.avif" alt="" />
            </div>
            <div className="content">
              <h3>Martin Alex </h3>
              <h4>Yoga</h4>
              <p className="add1">
                Body Building, the original LES MILLS barbell class, will
                sculpt, tone and strengthen your entire body, fast!
              </p>
              <div className="share">
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="/img/class-1.avif" alt="" />
            </div>
            <div className="content">
              <h3>Martin Alex </h3>
              <h4>Body Building</h4>
              <p className="add1">
                Body Building, the original LES MILLS barbell class, will
                sculpt, tone and strengthen your entire body, fast!
              </p>
              <div className="share">
                <a href="#">
                  <i className="fa-brands fa-square-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="banner" className="section-m1">
        <h2>START YOUR JOURNEY WITH OUR PROFETIONAL TRAINER</h2>
        <button class="normal">Learn More</button>
      </section>
      {/* <!-- ==================== latest news================= --> */}
      <div>
        <div className="head">
          <h2>| latest news</h2>
        </div>
        <hr />
        <section id="about-head" className="section-p1">
          <img src="img/class-a.avif" alt="" />
          <div>
            <h3>The Greatist Team's Favorite Leggings With Pockets</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              cum provident vero quis nihil, temporibus placeat suscipit earum,
              iure cumque, aperiam libero itaque voluptate sequi tempore
              voluptas minima neque excepturi voluptatem eos fugiat quasi
              commodi corrupti quaerat? Quaerat, non nobis aliquid vel natus
              sint neque molestias illo iste exercitationem! Esse!
            </p>
            <button className="normal">MORE-INFO</button>
          </div>
        </section>
        <hr />
        <section id="about-head" className="section-p1">
          <div>
            <h3>
              Everything You Need to Know Before Your First Indoor Cycling Class
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              cum provident vero quis nihil, temporibus placeat suscipit earum,
              iure cumque, aperiam libero itaque voluptate sequi tempore
              voluptas minima neque excepturi voluptatem eos fugiat quasi
              commodi corrupti quaerat? Quaerat, non nobis aliquid vel natus
              sint neque molestias illo iste exercitationem! Esse!
            </p>
            <button className="normal">MORE-INFO</button>
          </div>
          <img src="img/class-1.avif" alt="" />
        </section>
        <hr />
        <section id="about-head" className="section-p1">
          <img src="img/class-2.avif" alt="" />
          <div>
            <h3>
              Run Your Best Race Ever with These 5 Tips for the Perfect Taper
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              cum provident vero quis nihil, temporibus placeat suscipit earum,
              iure cumque, aperiam libero itaque voluptate sequi tempore
              voluptas minima neque excepturi voluptatem eos fugiat quasi
              commodi corrupti quaerat? Quaerat, non nobis aliquid vel natus
              sint neque molestias illo iste exercitationem! Esse!
            </p>
            <button className="normal">MORE-INFO</button>
          </div>
        </section>
      </div>
      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>sign up for news-letters</h4>
          <p>
            get e-mail updates about our latest and
            <span>special offers.</span>
          </p>
        </div>

        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button className="normal">sign up</button>
        </div>
      </section>

      {/* <!-- ================footer==================== --> */}
      <hr />
      <section id="contact-details" class="section-p1">
        <div class="details">
          <span>GET IN TOUCH</span>
          <h3>visit one of our gym locations or contact us today </h3>
          <h3>#main office</h3>
          <div>
            <li>
              <i class="fa-solid fa-map-location-dot"></i>
              <p>56 Glassford street Glasgow G1 1ul new york </p>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i class="fa-solid fa-mobile"></i>
              <p> +91 9879354065</p>
            </li>
            <li>
              <i class="fa-solid fa-business-time"></i>
              <p>monday to satueday: 9:00am to 16:00pm </p>
            </li>
          </div>
        </div>

        <diV class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.40735619265!2d-1.265153057511464!3d51.75674187867075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a85ae1ca65%3A0x2b1bc402e55d6557!2sOxford%20University%20Museum%20of%20Natural%20History!5e0!3m2!1shi!2sin!4v1706016146532!5m2!1shi!2sin"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </diV>
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
        kalathiya
      </div>


    <button className="Navigate" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  <a href="#" className="Navigater">
      <i className="fa-solid fa-arrow-up"></i>
  </a>
    </button>

    </>
  );
}
export default Home;
