import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">

        <div className="logo-section">
          <div className="rotating-ring"></div>
          <div className="logo-text">QUORO TECHNOLOGIES</div>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact" className="contact-btn">Contact Us</Link>
        </div>

        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;