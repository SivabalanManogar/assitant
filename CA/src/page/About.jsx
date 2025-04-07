
import React from 'react';
import '../style/About.css'; 
import { FaRocket, FaClipboardList, FaUsers, FaLightbulb } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>Welcome to Career Assistant</h1>
       <h3> <b>Your one-stop platform to guide you in your career journey.</b></h3>
      </section>

      <section className="about-intro">
        <h2>What is Career Assistant?</h2>
        
        <p>
          Career Assistant is a robust platform designed to support you at every stage of your career. Whether you're entering the job market, transitioning to a new career, or advancing your skills, we provide the resources and tools to help you succeed in the modern workforce.
        </p>
      </section>

      <section className="about-features">
        <h2>Key Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>Career Launch</h3>
            <p>Get expert guidance on how to start and accelerate your career with personalized job search strategies.</p>
          </div>

          <div className="feature-card">
            <FaClipboardList className="feature-icon" />
            <h3>Resume Builder</h3>
            <p>Build standout resumes that catch employers' attention using our intuitive templates and advice.</p>
          </div>

          <div className="feature-card">
            <FaUsers className="feature-icon" />
            <h3>Networking</h3>
            <p>Expand your professional network and build meaningful connections to open doors to new opportunities.</p>
          </div>

          <div className="feature-card">
            <FaLightbulb className="feature-icon" />
            <h3>Career Insights</h3>
            <p>Stay updated with trends and insights in your industry, and make informed decisions for career growth.</p>
          </div>
        </div>
      </section>

      <section className="about-goals">
        <h2>Our Goals</h2>
        <p>
          Career Assistant is committed to helping you unlock your full potential. We aim to provide tools that make your job search, resume building, and professional development easier and more effective. Our goal is to empower you to navigate your career journey with confidence.
        </p>
      </section>
      

      

      
    </div>
  );
};

export default About;
