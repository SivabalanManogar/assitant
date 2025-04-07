import React from "react";
import "../style/Services.css";

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We provide expert guidance in education, career planning, and professional growth.  
        Whether you're a student, job seeker, or professional, we have something for you.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon">📚</div>
          <h2>Study Assistance</h2>
          <p>
            Get access to high-quality study materials, online courses, and expert mentorship.  
            Our educational resources cover <strong>competitive exams, university courses, and skill development</strong>.
          </p>
          <ul>
            <li>📖 E-books & Study Guides</li>
            <li>🎓 Online Tutoring with Experts</li>
            <li>📝 Exam Preparation (JEE, NEET, UPSC, etc.)</li>
            <li>🧠 Personalized Learning Paths</li>
            <li>📅 Study Planners and Schedules</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">💼</div>
          <h2>Job Opportunities</h2>
          <p>
            Find job openings, career advice, and resume-building support. We help  
            professionals <strong>connect with top employers and land their dream jobs</strong>.
          </p>
          <ul>
            <li>💻 IT & Software Jobs (Remote & On-site)</li>
            <li>🏭 Core Engineering & Industry Roles</li>
            <li>🏥 Healthcare & Medical Jobs</li>
            <li>📈 Business & Finance Roles</li>
            <li>🌍 Sustainable & Green Careers</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🎓</div>
          <h2>Professional Courses</h2>
          <p>
            Explore <strong>certification programs and skill-building courses</strong> designed to  
            boost your career. We offer <strong>both free and paid courses</strong> in various domains.
          </p>
          <ul>
            <li>🚀 Full-Stack Web Development</li>
            <li>📊 Data Science, AI & Machine Learning</li>
            <li>🖌 Graphic Design & UI/UX</li>
            <li>🔐 Cybersecurity & Ethical Hacking</li>
            <li>📱 Mobile App Development</li>
          </ul>
        </div>

        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h2>Career Guidance & Support</h2>
          <p>
            Our experts provide <strong>one-on-one career counseling, resume building,  
            and mock interviews</strong> to help you succeed in your career path.
          </p>
          <ul>
            <li>📋 Resume Writing & Review</li>
            <li>🎤 Mock Interviews with Feedback</li>
            <li>📈 Personalized Career Roadmaps</li>
            <li>💡 Skill Gap Analysis</li>
            <li>🧭 Choosing the Right Career Path</li>
          </ul>
        </div>
      </div>

      {/* New Section: Why Choose Us */}
      <div className="why-choose-us">
        <h2>Why Choose Career Assistance?</h2>
        <ul>
          <li>✅ Tailored support for students, job seekers, and professionals</li>
          <li>✅ Regularly updated job & course listings</li>
          <li>✅ Real-world mentorship from industry experts</li>
          <li>✅ Free resources and affordable premium options</li>
          <li>✅ 100% online, accessible anywhere, anytime</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
