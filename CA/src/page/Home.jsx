import React, { useEffect, useState } from 'react';
import '../style/Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const justSignedIn = localStorage.getItem("justSignedIn");
    if (justSignedIn === "true") {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        localStorage.removeItem("justSignedIn");
      }, 3000);
    }
  }, []);

  return (
    <div className="home-container">
      {showPopup && (
        <div className="welcome-popup fade-in">
          <p>🎉 Welcome back! Let’s grow your career </p>
        </div>
      )}

      <section className="hero">
        <div className="hero-content">
          <marquee behavior="" direction="right">
            <h1 style={{ color: "grey" }}>
              <b>CAREER ASSISTANT !!</b>
            </h1>
          </marquee>
          <h1 style={{color:"white"}}>Elevate Your Career</h1>
          <p>Discover endless opportunities and unlock your true potential.</p>
          <Link to='/chat' className="cta-btn" style={{textDecoration:"none"}}>Get Start</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="icon">🚀</div>
          <h2>Fast Growth</h2>
          <p>Accelerate your career with expert advice and innovative tools.</p>
        </div>
        <div className="feature">
          <div className="icon">🧠</div>
          <h2>Smart Guidance</h2>
          <p>Personalized assessments to find the perfect career path for you.</p>
        </div>
        <div className="feature">
          <div className="icon">🤝</div>
          <h2>Community Support</h2>
          <p>Join a vibrant network of professionals and mentors.</p>
        </div>
      </section>

      <section className="career-insights">
        <h2>Career Insights</h2>
        <div className="insight-container">
          <div className="insight">
            <h3>💻 Tech Industry Boom</h3>
            <p>AI, Cloud Computing, and Cybersecurity are the most in-demand fields for 2025.</p>
          </div>
          <div className="insight">
            <h3>🌍 Sustainability Careers</h3>
            <p>Green energy jobs like Solar Engineers and Environmental Scientists are trending.</p>
          </div>
          <div className="insight">
            <h3>📈 High-Paying Skills</h3>
            <p>Master skills like Data Science, Full-Stack Development, and Digital Marketing.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Home;

