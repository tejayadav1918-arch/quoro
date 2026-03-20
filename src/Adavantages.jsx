import { useEffect, useRef, useState } from "react";
import { Users, BarChart3, Headphones, Sparkles } from "lucide-react";
import "./Adavantages.css";

function Advantages() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 300);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="advantages-section" ref={sectionRef}>
      
      {/* HEADER */}
      <div className={`advantages-header ${visible ? "show" : ""}`}>
        <p className="small-title book-wrapper">
          <span className={`book-text ${visible ? "book-open" : ""}`}>
            Why Choose Us
          </span>
        </p>

        <h2 className="main-title book-wrapper">
          <span className={`book-text delay-2 ${visible ? "book-open" : ""}`}>
            Our Advantages
          </span>
        </h2>
      </div>

      {/* CARDS */}
      <div className="advantages-grid">

        <div
          className={`adv-card ${visible ? "slide-down" : ""}`}
          style={{ transitionDelay: "0s" }}
        >
          <div className="adv-image">
            <Users size={64} strokeWidth={1.4} />
          </div>
          <span className="adv-number">01</span>
          <h3 className="book-wrapper">
            <span className={`book-text delay-1 ${visible ? "book-open" : ""}`}>
              Expert Team
            </span>
          </h3>
          <p className="book-wrapper">
            <span className={`book-text delay-2 ${visible ? "book-open" : ""}`}>
              Our expert team works tirelessly to ensure project success
              and protect your digital infrastructure.
            </span>
          </p>
        </div>

        <div
          className={`adv-card ${visible ? "slide-down" : ""}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="adv-image">
            <BarChart3 size={64} strokeWidth={1.4} />
          </div>
          <span className="adv-number">02</span>
          <h3 className="book-wrapper">
            <span className={`book-text delay-1 ${visible ? "book-open" : ""}`}>
              Tailored Solutions
            </span>
          </h3>
          <p className="book-wrapper">
            <span className={`book-text delay-2 ${visible ? "book-open" : ""}`}>
              Customized systems built specifically around your
              operational needs and growth.
            </span>
          </p>
        </div>

        <div
          className={`adv-card ${visible ? "slide-down" : ""}`}
          style={{ transitionDelay: "0.4s" }}
        >
          <div className="adv-image">
            <Headphones size={64} strokeWidth={1.4} />
          </div>
          <span className="adv-number">03</span>
          <h3 className="book-wrapper">
            <span className={`book-text delay-1 ${visible ? "book-open" : ""}`}>
              24/7 Support
            </span>
          </h3>
          <p className="book-wrapper">
            <span className={`book-text delay-2 ${visible ? "book-open" : ""}`}>
              Round-the-clock monitoring and assistance to keep your
              systems secure and stable.
            </span>
          </p>
        </div>

        <div
          className={`adv-card ${visible ? "slide-down" : ""}`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="adv-image">
            <Sparkles size={64} strokeWidth={1.4} />
          </div>
          <span className="adv-number">04</span>
          <h3 className="book-wrapper">
            <span className={`book-text delay-1 ${visible ? "book-open" : ""}`}>
              Innovation
            </span>
          </h3>
          <p className="book-wrapper">
            <span className={`book-text delay-2 ${visible ? "book-open" : ""}`}>
              We apply modern technologies and forward-thinking
              strategies to keep your business ahead.
            </span>
          </p>
        </div>

      </div>

    </section>
  );
}

export default Advantages;
