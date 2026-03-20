import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

function Footer() {

  const footerRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFooterVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();

  }, []);

  return (
    <footer
      ref={footerRef}
      className={`footer-wrapper fade-up ${footerVisible ? "show" : ""}`}
    >

      {/* TOP ROW */}
      <div className="footer-top">

        {/* LEFT CARD */}
        <div className={`footer-card left-card ${footerVisible ? "slide-left" : ""}`}>

          <h2 className="company-name book-wrapper">
            <span className={`book-text ${footerVisible ? "book-open" : ""}`}>
              QUORO TECHNOLOGIES PVT. LTD.
            </span>
          </h2>

          <div className="company-details">

            <div className="info-row book-wrapper">
              <FiMapPin className="info-icon" />
              <p>
                <span className={`book-text delay-1 ${footerVisible ? "book-open" : ""}`}>
                  67/4351/A10, Swapnil Enclave, Shanmugham Road<br />
                  High Court Junction, Kochi<br />
                  Ernakulam, Kerala - 682031
                </span>
              </p>
            </div>

            <div className="info-row book-wrapper">
              <FiPhone className="info-icon" />
              <p>
                <span className={`book-text delay-2 ${footerVisible ? "book-open" : ""}`}>
                  +91 90018 65202
                </span>
              </p>
            </div>

            <div className="info-row book-wrapper">
              <FiMail className="info-icon" />
              <p>
                <span className={`book-text delay-3 ${footerVisible ? "book-open" : ""}`}>
                  Quorotechnologiespvtltd@gmail.com
                </span>
              </p>
            </div>
            <div className="info-row book-wrapper">
              <FiMail className="info-icon" />
              <p>
                <span className={`book-text delay-3 ${footerVisible ? "book-open" : ""}`}>
                  Info@quorotechnologies.com
                </span>
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT CARD */}
        <div className={`footer-card right-card ${footerVisible ? "slide-right" : ""}`}>

          <h3 className="book-wrapper">
            <span className={`book-text delay-1 ${footerVisible ? "book-open" : ""}`}>
              Quick Links
            </span>
          </h3>

          <div className="links-columns">

            <div className="main-links">
              <Link to="/" className="book-wrapper">
                <span className={`book-text delay-2 ${footerVisible ? "book-open" : ""}`}>Home</span>
              </Link>
              <Link to="/about" className="book-wrapper">
                <span className={`book-text delay-2 ${footerVisible ? "book-open" : ""}`}>About</span>
              </Link>
              <Link to="/services" className="book-wrapper">
                <span className={`book-text delay-2 ${footerVisible ? "book-open" : ""}`}>Services</span>
              </Link>
              <Link to="/contact" className="book-wrapper">
                <span className={`book-text delay-2 ${footerVisible ? "book-open" : ""}`}>Contact Us</span>
              </Link>
            </div>


          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-copyright book-wrapper">
        <p>
          <span className={`book-text delay-4 ${footerVisible ? "book-open" : ""}`}>
            © 2025 Quoro Technologies Pvt. Ltd. All Rights Reserved.
          </span>
        </p>
      </div>

    </footer>
  );
}

export default Footer;