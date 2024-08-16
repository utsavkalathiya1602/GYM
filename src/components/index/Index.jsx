import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../index.css';

function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section id="header" className="fixed-top">
        <div className="logo-container">
          <img src="" className="logo" alt="" />
          <a href="#index" className="name"><i className="fa-brands fa-pied-piper-alt"></i> utsav <br /> kalathiya</a>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul id="navbar">
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/registration'>Registration</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Carousel */}
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
            <img src="img/c-1.avif" className="d-block w-100 vh-100" alt="..." />
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
   
        
          {/* ============================= */}
          <section id="about-head" className="section-p1">
                <img src="./img/class-1.avif" alt="" />
                <div>
                  <h3>Why Choose Us ?</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
                    cum provident vero quis nihil, temporibus placeat suscipit earum,
                    iure cumque, aperiam libero itaque voluptate sequi tempore voluptas
                    minima neque excepturi voluptatem eos fugiat quasi commodi corrupti
                    quaerat? Quaerat, non nobis aliquid vel natus sint neque molestias
                    illo iste exercitationem! Esse!
                  </p>
                  <button className="normal">MORE-INFO</button>
                </div>
              </section>
          {/* ========================================== */}
          <section id="product1" className="section-p1">
                <h2>| About Our Trainer</h2>
                <div className="pro-container">
                  <div className="pro">
                    {/* <!-- onclick="window.location.href='sproduct.html' --> */}
                    <img src="img/t-1.avif" alt="" />
                    <div className="des">
                      <span>Gymer</span>
                      <h5>NOAH LEONARD</h5>
                      <hr />
                      <div className="star">
                        <i className="fa-brands fa-square-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </div>
                    </div>
                  </div>
        
                  <div className="pro">
                    <img src="img/t-3.avif" alt="" />
                    <div className="des">
                      <span>Gymer</span>
                      <h5>NOAH LEONARD</h5>
                      <hr />
                      <div className="star">
                        <i className="fa-brands fa-square-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </div>
                    </div>
                  </div>
        
                  <div className="pro">
                    <img src="img/t-2.avif" alt="" />
                    <div className="des">
                      <span>Gymer</span>
                      <h5>NOAH LEONARD</h5>
                      <hr />
                      <div className="star">
                        <i className="fa-brands fa-square-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pro">
                    <img src="img/t-4.avif" alt="" />
                    <div className="des">
                      <span>Gymer</span>
                      <h5>NOAH LEONARD</h5>
                      <hr />
                      <div className="star">
                        <i className="fa-brands fa-square-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-square-x-twitter"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
          {/* =================================================== */}
          <section id="sm-banner" className="section-p1">
                <div className="banner-box">
                  <h4>Are Crunches the Best Workout for Abs? </h4>
                  <span>
                    Its a moment many aspiring marathoners fantasize about as they
                    finish their umpteenth long training run: The few weeks leading up
                    to the race when a training program calls for less running...{" "}
                  </span>{" "}
                  <br />
                  <button className="white">Read More</button>
                </div>
                <div className="banner-box banner-box-2">
                  <h4>How to Stop Muscle Cramps in Their Tracks</h4>
                  <span>
                    Its a moment many aspiring marathoners fantasize about as they
                    finish their umpteenth long training run: The few weeks leading up
                    to the race when a training program calls for less running...{" "}
                  </span>{" "}
                  <br />
                  <button className="white">Read More</button>
                </div>
              </section>
        
              <section id="pagination" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">
                  <i className="fa-solid fa-arrow-right"></i>
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
        
        
          {/* ================================================ */}

        
    <hr className="line" />
      <div className="main">
        <div className="sub-main main1">
          <span>
          <i className="fa-brands fa-pied-piper-alt"></i>  utsav <br /> kalathiya
          </span>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="star1">
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
          </div>
        </div>
        <div className="sub-main main2">
        <div className="link" >
          <h3>
            #Explore
          </h3>
          <div className="links">
            <a href="#"><i className="fa-solid fa-arrow-right"></i>About Us</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Trainers Team</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Awesome Classes</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Pricing Packages</a>
            <a href="#"><i className="fa-solid fa-arrow-right"></i>Latest News</a>
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
          <img src="img/t-3.avif" alt="" />
          <img src="img/t-1.avif" alt="" />
          <img src="img/t-2.avif" alt="" />
        </div>
      </div>
      <hr className="line" />
      <div className="footer"> 
      Copyright ©2024 All rights reserved | This template is made by @utsav kalathiya </div> 

        </>
        )
        
}

export default Index
