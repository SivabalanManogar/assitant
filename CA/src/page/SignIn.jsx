import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Logo from "../assets/logo 3.svg";
import "../style/Sign.css";

const SignIn = () => {
  
  const handleSignIn = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        localStorage.setItem("user", JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        }));
        localStorage.setItem("justSignedIn", "true"); 
        window.location.reload();
      } catch (error) {
        console.error("Sign-in error:", error);
      }


  };

  return (
    <div className="new-signin-wrapper">
         <nav className="project-navbar">
                <div className="navbar-left">
                  <img src={Logo} alt="Logo" className="navbar-logo" />
                  <span className="project-name">Career Assistance</span>
                </div>
                <div className="navbar-right">
                  <p><b>"Fueling your future with smart choices in education and health."</b></p>
                </div>
          </nav>



      <div className="content-wrapper">
        <div className="career-section slide-from-left" style={{textAlign:"center"}}>
          <h1 style={{ color: "green" }}>Your Future Starts Here 🌟</h1>
          <ul style={{ fontFamily: "initial" }}>
            <li>✅ Discover high-demand careers in tech, science, and creative fields</li>
            <li>✅ Get personalized career paths powered by smart algorithms</li>
            <li>✅ Build confidence with wellness tips and professional insights</li>
            <li>✅ Explore learning resources and career-building tools</li>
            <li>✅ Connect your passions with real-world job opportunities</li>
          </ul>
        </div>

        <div className="signin-section slide-from-right">
          <div className="glass-card">
            <h2>Sign In to Begin</h2>
            <button className="google-btn" onClick={handleSignIn}>
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
