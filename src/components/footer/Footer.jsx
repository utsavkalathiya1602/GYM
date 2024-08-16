import React from "react";
import "../../index.css";
function Footer() {
  return (
    <>
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
          <img src="img/t-3.avif" alt="" />
          <img src="img/t-1.avif" alt="" />
          <img src="img/t-2.avif" alt="" />
        </div>
      </div>
      <hr className="line" />
      <div className="footer"> 
      Copyright ©2024 All rights reserved | This template is made by @utsav kalathiya </div>

      
    </>

    
  );
}

export default Footer;
