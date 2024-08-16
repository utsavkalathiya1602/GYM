import React, { useState } from 'react';
import '../../index.css';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError('All fields are required.');
      return false;
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('http://localhost/project/index.php', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data.success) {
        setSuccess('Form submitted successfully!');
      } else {
        setError(response.data.message || 'An error occurred.');
      }
    } catch (error) {
      setError('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="page-header">
        <h2><span className="red">#</span> contact-Us</h2>
        <p>Home = contact</p>
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
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h3>Visit one of our gym locations or contact us today</h3>
          <h3>Main Office</h3>
          <ul>
            <li>
              <i className="fa-solid fa-map-location-dot"></i>
              <p>56 Glassford Street, Glasgow, G1 1UL, New York</p>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <p>contact@example.com</p>
            </li>
            <li>
              <i className="fa-solid fa-mobile"></i>
              <p>+91 9879354065</p>
            </li>
            <li>
              <i className="fa-solid fa-business-time"></i>
              <p>Monday to Saturday: 9:00 AM to 4:00 PM</p>
            </li>
          </ul>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.40735619265!2d-1.265153057511464!3d51.75674187867075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a85ae1ca65%3A0x2b1bc402e55d6557!2sOxford%20University%20Museum%20of%20Natural%20History!5e0!3m2!1shi!2sin!4v1706016146532!5m2!1shi!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form onSubmit={handleSubmit} method="post">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="normal" type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}
        </form>

        <div className="people">
          <div>
            <img src="/img/1.png" alt="Sem C." />
            <p>
              <span>Sem C.</span> Manager <br /> Phone: +91 9879354066 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="/img/2.png" alt="Martin B." />
            <p>
              <span>Martin B.</span> Manager <br /> Phone: +91 9879354066 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="/img/3.png" alt="Lensi S." />
            <p>
              <span>Lensi S.</span> Manager <br /> Phone: +91 9879354066 <br />
              Email: contact@example.com
            </p>
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

export default Contact;