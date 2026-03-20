import { useEffect, useState } from "react";
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
          <a href="/">Home</a>
          <a href="/About">About Us</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
          <a href="/contact" className="contact-btn">Contact Us</a>
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
