import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./component/Nav";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Api from "./page/Api";
import SignIn from "./page/SignIn";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ New loading state

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      setUser(storedUser ? JSON.parse(storedUser) : null);
    } catch (err) {
      localStorage.removeItem("user");
    } finally {
      setLoading(false); // ✅ Set loading false after user check
    }
  }, []);

  // ✅ Prevent route rendering while checking user
  if (loading) return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;

  return (
    <BrowserRouter>
      {user && <Nav />}
      <Routes>
        {!user ? (
          <>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/sign-in" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/chat" element={<Api />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
