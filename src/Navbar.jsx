import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(false); // 👈 NEW

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // 👇 trigger fade-down after mount
    setTimeout(() => {
      setShowNav(true);
    }, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`nav-wrapper ${scrolled ? "scrolled" : ""} ${showNav ? "fade-down" : ""}`}>
      <nav className="navbar">

        <div className="logo-section">
          <img 
            src="./favicon.jpeg" 
            alt="Quoro Technologies" 
            className="logo-image"
          />
           <span className="company-text">
    QUORO TECHNOLOGIES PRIVATE LIMITED
  </span>
        </div>
        

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/services" onClick={closeMenu}>Our Services</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          <Link to="/contact" className="contact-btn" onClick={closeMenu}>
            Contact Us
          </Link>
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