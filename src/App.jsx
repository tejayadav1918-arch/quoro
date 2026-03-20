import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import SvcCard from "./Services.jsx";
import Contact from "./Contact.jsx";
import ScrollToTop from "./ScrollToup.jsx";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      {/* WHATSAPP FLOAT */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/917799571879?text=Hello%20There%20Company!%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <FaWhatsapp className="whatsapp-icon" />
          <span className="whatsapp-text">Chat with us</span>
        </a>
      </div>

      {/* ROUTER */}
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<SvcCard/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;