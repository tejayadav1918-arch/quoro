import { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
import GlobeMap from "./ContactGlobe";

function Contact() {

  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Animation Observer (Mobile + Desktop optimized)
  useEffect(() => {

    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const createObserver = () => {

      const isMobile = mediaQuery.matches;

      return new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: isMobile ? 0.15 : 0.3,
          rootMargin: isMobile
            ? "0px 0px -150px 0px"
            : "0px 0px -100px 0px"
        }
      );
    };

    let observer = createObserver();

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // 🔁 Handle resize / rotation
    const handleResize = () => {
      if (observer) observer.disconnect();
      observer = createObserver();
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      if (observer) observer.disconnect();
      mediaQuery.removeEventListener("change", handleResize);
    };

  }, []);

  // ✅ Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      message: e.target[3].value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbyj8fl8VOEbbjWCxCbYgK1Wq3Q8lVltS5DLDCLIN4bBU_BSIDjbxxULvbDX0QoQjf3T/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setSuccess(true);
      e.target.reset();

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
    <Helmet>
      <title>Contact Quoro Technologies Pvt Ltd | IT Services</title>
  <meta
  name="description"
  content="Contact Quoro Technologies Pvt Ltd for professional IT services, software development, and web solutions. Reach out to our team for reliable and scalable technology solutions."
/>
  <link rel="canonical" href="https://quorotechnologiespvtltd.com/contact" />
</Helmet>
      <section
        ref={sectionRef}
        className={`contact-main-page ${mounted && visible ? "show" : ""}`}
      >
          <p className="seo-hidden">
    Contact Quoro Technologies Pvt Ltd for IT services, software development,
    and web solutions tailored to your business needs.
  </p>
        <div className="contact-main-container">

          {/* LEFT IMAGE */}
          <div className={`contact-main-left ${mounted && visible ? "slide-left" : ""}`}>
            <img src="/videos/pui.png" alt="Contact" />
          </div>

          {/* RIGHT FORM */}
          <div className={`contact-main-right ${mounted && visible ? "slide-right" : ""}`}>

            <span className="contact-main-small book-wrapper">
              <span className={`book-text delay-3 ${mounted && visible ? "book-open" : ""}`}>
                CONTACT US
              </span>
            </span>

            <h1 className="contact-main-title book-wrapper">
              <span className={`book-text delay-4 ${mounted && visible ? "book-open" : ""}`}>
                Reach Out
              </span>
            </h1>

            <p className="contact-main-subtitle book-wrapper">
              <span className={`book-text delay-4 ${mounted && visible ? "book-open" : ""}`}>
                Let's Connect Today for Innovative Solutions.
              </span>
            </p>

            <form 
              onSubmit={handleSubmit}
              className={`contact-main-form ${mounted && visible ? "form-show" : ""}`}
            >

              <div className="contact-main-form-row">
                <div className="contact-main-form-group delay-1">
                  <label for="name"> First Name</label>
<input id="name" type="text" required />
                </div>

                <div className="contact-main-form-group delay-2">
                  <label for="lastName"> Last Name</label>
<input id="lastName" type="text" required />
                </div>
              </div>

              <div className="contact-main-form-group delay-3">
                <label for="email">Email *</label>
                <input id="email" type="email" required />
              </div>

              <div className="contact-main-form-group delay-4">
                <label for="message">Message</label>
                <textarea id="message" rows="5"></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`contact-main-btn ${mounted && visible ? "btn-pop" : ""}`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

            </form>

          </div>
        </div>
      </section>
      <GlobeMap />

      {success && (
        <div className="contact-main-success-overlay">
          <div className="contact-main-success-popup">
            <div className="contact-main-success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>We’ll get back to you shortly.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;