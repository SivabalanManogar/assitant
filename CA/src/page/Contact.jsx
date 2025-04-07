import React from "react";
import "../style/Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaTwitter, FaClock, FaUserTie } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      
      
      <section className="contact-hero">
        <h1>We'd Love to Hear from You!</h1>
        <p>Get in touch with us for any queries, support, or collaboration opportunities.</p>
      </section>

      <section className="contact-details">
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h2>Call Us</h2>
          <p>+91 9361182924</p>
          <p>+91 8122860254</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h2>Email</h2>
          <p>careerassistant543@gmail.com</p>
        </div>
        <div className="contact-card">
          <FaClock className="contact-icon" />
          <h2>Office Hours</h2>
          <p>Mon - Fri: 9 AM - 6 PM</p>
          <p>Sat - Sun: 10 AM - 4 PM</p>
        </div>
      </section>

      
      <section className="expert-team">
        <h2>Meet Our Experts</h2>
        <div className="expert-container">
          <div className="expert">
            <FaUserTie className="expert-icon" />
            <h3>Dr. M.Siva Balan</h3>
            <p>Career Consultant</p>
          </div>
          <div className="expert">
            <FaUserTie className="expert-icon" />
            <h3>Dr.S.Kishore</h3>
            <p>Career Consultant</p>
          </div>
          <div className="expert">
            <FaUserTie className="expert-icon" />
            <h3>Dr.S.Nagulesh</h3>
            <p>Education Specialist</p>
          </div>
          <div className="expert">
            <FaUserTie className="expert-icon" />
            <h3>Dr.R.Manikandan</h3>
            <p>Industry Mentor</p>
          </div>
        </div>
      </section>

     
      <section className="social-links">
        <h2>Follow Us on Social Media</h2>
        <div className="social-icons">
          <a href="https://www.linkedin.com/posts" target="blank"><FaLinkedin /></a>
          
          <a href="https://github.com/" target="blank"><FaGithub size={30} style={{ color: "black" }} /></a>
        </div>
      </section>
    

     
    </div>
  );
}

export default Contact;
