import React from "react-dom";
import '../../index.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {Link} from 'react-router-dom';

const timetable = {
  '06:00 - 07:00': ['Yoga', 'Open Gym', 'Yoga', 'Open Gym', 'Yoga', 'Yoga', 'Yoga'],
  '07:00 - 08:00': ['Spin Class', 'Spin Class', 'Spin Class', 'Spin Class', 'Spin Class', 'Open Gym', 'Open Gym'],
  '08:00 - 09:00': ['Pilates', 'Open Gym', 'Pilates', 'Open Gym', 'Pilates', 'Pilates', 'Pilates'],
  '09:00 - 10:00': ['Open Gym', 'HIIT', 'Open Gym', 'HIIT', 'Open Gym', 'Open Gym', 'Open Gym'],
  '10:00 - 11:00': ['Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym'],
  '11:00 - 12:00': ['Body Pump', 'Body Pump', 'Body Pump', 'Body Pump', 'Body Pump', 'Body Pump', 'Body Pump'],
  '12:00 - 13:00': ['Lunch Break', 'Lunch Break', 'Lunch Break', 'Lunch Break', 'Lunch Break', 'Lunch Break', 'Lunch Break'],
  '13:00 - 14:00': ['Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym'],
  '14:00 - 15:00': ['CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit', 'CrossFit'],
  '15:00 - 16:00': ['Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym'],
  '16:00 - 17:00': ['Zumba', 'Zumba', 'Zumba', 'Zumba', 'Zumba', 'Zumba', 'Zumba'],
  '17:00 - 18:00': ['Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym'],
  '18:00 - 19:00': ['Boxing', 'Boxing', 'Boxing', 'Boxing', 'Boxing', 'Boxing', 'Boxing'],
  '19:00 - 20:00': ['Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym', 'Open Gym'],
  '20:00 - 21:00': ['Stretching', 'Stretching', 'Stretching', 'Stretching', 'Stretching', 'Stretching', 'Stretching']
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function About() {

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
      {/* <!-- page header============ --> */}
      <section id="page-header">
        <h2><span className="red" >#</span> About-Us</h2>
        <p>Home = About-Us</p>
      </section>

      <section id="about-head" class="section-p1">
        <img src="./img/class-a.avif" alt="" />
        <div>
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
            cum provident vero quis nihil, temporibus placeat suscipit earum,
            iure cumque, aperiam libero itaque voluptate sequi tempore voluptas
            minima neque excepturi voluptatem eos fugiat quasi commodi corrupti
            quaerat? Quaerat, non nobis aliquid vel natus sint neque molestias
            illo iste exercitationem! Esse!
          </p>
          <button class="normal">MORE-INFO</button>
        </div>
      </section>

      <section id="feature" class="section-p1">
        <div class="fe-box">
          <img src="/img/f-1.svg" alt="" />
          <h6>Free Training</h6>
        </div>

        <div class="fe-box">
          <img src="/img/f-4.svg" alt="" />
          <h6> Trainer Support</h6>
        </div>
        <div class="fe-box">
          <img src="/img/f-1.svg" alt="" />
          <h6>special Training</h6>
        </div>
        <div class="fe-box">
          <img src="/img/f-4.svg" alt="" />
          <h6>medical </h6>
        </div>
        <div class="fe-box">
          <img src="/img/f-1.svg" alt="" />
          <h6>discount</h6>
        </div>

        <div class="fe-box">
          <img src="/img/f-4.svg" alt="" />
          <h6>personal trainer</h6>
        </div>
      </section>
      <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
          <h4>sign up for news-letters</h4>
          <p>
            get e-mail updates about our latest and
            <span>special offers.</span>
          </p>
        </div>

        <div class="form">
          <input type="text" placeholder="Your email address" />
          <button class="normal">sign up</button>
        </div>
      </section>

      <section id="product1" class="section-p1">
        <h2>| Best Trainer</h2>
        <div class="pro-container">
          <div class="pro">
            {/* <!-- onclick="window.location.href='sproduct.html' --> */}
            <img src="img/t-1.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
              <hr />
              <div class="star">
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
          </div>

          <div class="pro">
            <img src="img/t-3.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
              <hr />
              <div class="star">
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
          </div>

          <div class="pro">
            <img src="img/t-2.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
              <hr />
              <div class="star">
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
          </div>
          <div class="pro">
            <img src="img/t-4.avif" alt="" />
            <div class="des">
              <span>Gymer</span>
              <h5>NOAH LEONARD</h5>
              <hr />
              <div class="star">
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-x-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

<hr className="line" />
<section className="time">
  <h3>| Time Table</h3>
<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            {daysOfWeek.map((day) => (
              <TableCell key={day}>{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(timetable).map(([time, activities]) => (
            <TableRow key={time}>
              <TableCell>{time}</TableCell>
              {activities.map((activity, index) => (
                <TableCell key={index}>{activity}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</section>
<hr />
<section className="review">
  <h2>| MemberShip`s` |</h2>

  <div className="cookiecards">

<div class="cookieCard">
  <p class="cookieHeading">"Membership-1"</p>
  <p class="">$299.00/per month</p>
  <p class="cookieDescription">if you need personal trainer then click heare but price is heigher then this <a href="#">What for?</a></p>
  <button class="acceptButton">More_Detail`s</button>
</div>

<div class="cookieCard">
  <p class="cookieHeading">"Membership-2"</p>
  <p class="">$3399.00/per year</p>
  <p class="cookieDescription">if you need personal trainer then click heare but price is heigher then this  <a href="#">What for?</a></p>
  <button class="acceptButton">More_Detail`s</button>
</div>

<div class="cookieCard">
  <p class="cookieHeading">"Membership-3"</p>
  <p class="">$5999.00/per year with personal trainer</p>
  <p class="cookieDescription">By using this website you automatically accept that we use cookies.  <a href="#">What for?</a></p>
  <button class="acceptButton">More_Detail`s</button>
</div>

</div>
</section>

<hr />
       <section id="contact-details" class="section-p1">
        <div class="details">
          <span>GET IN TOUCH</span>
          <h3>visit one of our gym locations or contact us today </h3>
          <h3>main office</h3>
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
export default About;
