import { useEffect, useRef, useState } from "react";
import "./Contact.css";

function Contact() {

  const sectionRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);

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
      <section
        ref={sectionRef}
        className={`contact-main-page ${mounted && visible ? "show" : ""}`}
      >
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
                  <label>First Name *</label>
                  <input type="text" required />
                </div>

                <div className="contact-main-form-group delay-2">
                  <label>Last Name *</label>
                  <input type="text" required />
                </div>
              </div>

              <div className="contact-main-form-group delay-3">
                <label>Email *</label>
                <input type="email" required />
              </div>

              <div className="contact-main-form-group delay-4">
                <label>Message</label>
                <textarea rows="5"></textarea>
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