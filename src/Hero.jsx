
import { useEffect, useRef, useState } from "react";
import "./Hero.css";
import ServicesGlimpse from "./ServiceGlimpse.jsx";
import Advantages from "./Adavantages.jsx";
import { Link } from "react-router-dom";


function Hero() {

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [mounted, setMounted] = useState(false);

  const [heroVisible, setHeroVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const [heroLoading, setHeroLoading] = useState(false);
  const [success, setHeroSuccess] = useState(false);

  /* FIRST RENDER */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* INTERSECTION OBSERVER */
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.target === heroRef.current && entry.isIntersecting) {
            setHeroVisible(true);
            setTimeout(() => setTextVisible(true), 400);
            observer.unobserve(entry.target);
          }

          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setAboutVisible(true);
            observer.unobserve(entry.target);
          }

          if (entry.target === contactRef.current && entry.isIntersecting) {
            setContactVisible(true);
            observer.unobserve(entry.target);
          }

        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -120px 0px"
      }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();

  }, []);

  /* HERO CONTACT SUBMIT */
  const handleHeroSubmit = async (e) => {
  e.preventDefault();

  if (heroLoading) return;

  setHeroLoading(true);

  const formData = {
    firstName: e.target[0].value,
    lastName: e.target[1].value,
    email: e.target[2].value,
    message: e.target[3].value,
  };

  const startTime = Date.now();

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyj8fl8VOEbbjWCxCbYgK1Wq3Q8lVltS5DLDCLIN4bBU_BSIDjbxxULvbDX0QoQjf3T/exec", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    e.target.reset();
    setHeroSuccess(true);

    setTimeout(() => {
      setHeroSuccess(false);
    }, 3000);

  } catch (error) {
    console.error(error);
  }

  // 🔥 Ensure minimum 800ms disabled state
  const elapsed = Date.now() - startTime;
  const remaining = Math.max(800 - elapsed, 0);

  setTimeout(() => {
    setHeroLoading(false);
  }, remaining);
};

  return (
    <div>

      {/* HERO */}
      <section
        ref={heroRef}
        className={`hero-section fade-up ${mounted && heroVisible ? "show" : ""}`}
      >
        <div className="hero-container">

          <div className={`hero-video ${mounted && heroVisible ? "video-show" : ""}`}>
            <video src="/videos/download.mp4" autoPlay loop muted playsInline />
          </div>

          <div className="hero-right">

            <div className="hero-content">
              <h1 className="book-wrapper">
                <span className={`book-text ${mounted && textVisible ? "book-open" : ""}`}>
                  Enterprise-Grade Technology Services
                </span>
              </h1>

              <p className="book-wrapper">
                <span className={`book-text delay-1 ${mounted && textVisible ? "book-open" : ""}`}>
                  Secure, scalable and future-ready solutions designed
                  for modern organizations.
                </span>
              </p>
            </div>

            <div className={`hero-image ${mounted && heroVisible ? "image-show" : ""}`}>
              <img src="/videos/JAIN.jpg" alt="Enterprise" />
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
          <section
        ref={aboutRef}
        className={`home-about-section fade-up ${
          mounted && aboutVisible ? "show" : ""
        }`}
      >
        <div className="home-about-title-wrapper">
          <h2 className="book-wrapper">
            <span className={`book-text delay-1 ${
              mounted && aboutVisible ? "book-open" : ""
            }`}>
              About Us
            </span>
          </h2>

          <div className="home-about-accent"></div>

          <p className={`book-text delay-2 ${mounted && aboutVisible ? "book-open" : ""}`}>
            Turning Vision Into Scalable Digital Reality
          </p>
        </div>

        <div className="home-about-layout">
          <div className="home-about-image">
            <img src="/videos/akka.avif" alt="About" />
          </div>

          <div className="home-about-content-box">
            <h3 className="book-wrapper">
              <span className={`book-text delay-1 ${
                mounted && aboutVisible ? "book-open" : ""
              }`}>
                Engineering Scalable Enterprise Systems
              </span>
            </h3>

            <p className="book-wrapper">
              <span className={`book-text delay-2 ${
                mounted && aboutVisible ? "book-open" : ""
              }`}>
                We design secure and high-performance solutions that empower
                organizations to grow with confidence.
              </span>
            </p>
          </div>

          <div className="home-about-grey-strip">
            <div className="grey-strip-content">
              <h4 className="book-wrapper">
                <span className={`book-text delay-3 ${
                  mounted && aboutVisible ? "book-open" : ""
                }`}>
                  Our Vision
                </span>
              </h4>

              <p className="book-wrapper">
                <span className={`book-text delay-4 ${
                  mounted && aboutVisible ? "book-open" : ""
                }`}>
                  Our vision is to be the leading provider of innovative cloud
                  solutions that drive business growth and success.
                </span>
              </p>
            </div>
          </div>

          <div className="home-about-mint-box">
  <Link
    to="/about"
    className="home-about-btn book-wrapper"
  >
    <span
      className={`book-text ${
        mounted && aboutVisible ? "book-open" : ""
      }`}
    >
      Learn More
    </span>
  </Link>
</div>
        </div>
      </section>

      <ServicesGlimpse />
      <Advantages />

      {/* CONTACT */}
      <section
        ref={contactRef}
        className={`contact-wrapper fade-up ${mounted && contactVisible ? "show" : ""}`}
      >
        <div className="contact-container">

          {/* LEFT BLACK BLOCK WITH TEXT */}
          <div className={`contact-left ${mounted && contactVisible ? "slide-left" : ""}`}>
            <div className="contact-left-content">
              <h3 className="book-wrapper">
                <span className={`book-text ${mounted && contactVisible ? "book-open" : ""}`}>
                  Let’s Build Something Powerful.
                </span>
              </h3>
              <p className="book-wrapper">
                <span className={`book-text delay-1 ${mounted && contactVisible ? "book-open" : ""}`}>
                  Share your requirements with us, and our expert team will analyze your needs in detail and connect with you shortly to provide customized, efficient, and scalable solutions.
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className={`contact-right ${mounted && contactVisible ? "slide-right" : ""}`}>

            <h2 className="contact-title book-wrapper">
              <span className={`book-text ${mounted && contactVisible ? "book-open" : ""}`}>
                Get in Touch
              </span>
            </h2>

            <p className="contact-subtitle book-wrapper">
              <span className={`book-text delay-1 ${mounted && contactVisible ? "book-open" : ""}`}>
                Reach out to us for inquiries or collaborations.
              </span>
            </p>

            <form
              onSubmit={handleHeroSubmit}
              className={`contact-form ${mounted && contactVisible ? "form-show" : ""}`}
            >

              <div className="form-row">
                <div className="form-group delay-1">
                  <label>First Name *</label>
                  <input type="text" required />
                </div>

                <div className="form-group delay-2">
                  <label>Last Name *</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="form-group delay-3">
                <label>Email *</label>
                <input type="email" required />
              </div>

              <div className="form-group delay-4">
                <label>Message</label>
                <textarea rows="5"></textarea>
              </div>

              <button
                type="submit"
                disabled={heroLoading}
                className={`contact-btn ${mounted && contactVisible ? "btn-pop" : ""}`}
              >
                {heroLoading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
       {success && (
        <div className="contact-main-success-overlay">
          <div className="contact-main-success-popup">
            <div className="contact-main-success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>We’ll get back to you shortly.</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default Hero;