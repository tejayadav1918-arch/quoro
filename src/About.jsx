import { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {

  const bannerRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [row1Visible, setRow1Visible] = useState(false);
  const [row2Visible, setRow2Visible] = useState(false);

  /* HERO LOAD */
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  /* INTERSECTION OBSERVER */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.target === bannerRef.current && entry.isIntersecting) {
            setBannerVisible(true);
            observer.unobserve(entry.target);
          }

          if (entry.target === row1Ref.current && entry.isIntersecting) {
            setRow1Visible(true);
            observer.unobserve(entry.target);
          }

          if (entry.target === row2Ref.current && entry.isIntersecting) {
            setRow2Visible(true);
            observer.unobserve(entry.target);
          }

        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -120px 0px"
      }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);
    if (row1Ref.current) observer.observe(row1Ref.current);
    if (row2Ref.current) observer.observe(row2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>

      {/* HERO */}
      <section className={`about-hero fade-up ${heroVisible ? "show" : ""}`}>
        <div className="about-hero-inner">
          <h1 className="book-wrapper">
            <span className={`book-text ${heroVisible ? "book-open" : ""}`}>
              Crafting Innovative <br /> Solutions
            </span>
          </h1>
        </div>
      </section>

      {/* BANNER */}
      <section
        ref={bannerRef}
        className={`about-banner fade-up ${bannerVisible ? "show" : ""}`}
      >
        <img src="/videos/bal.png" alt="Banner" />
      </section>

      {/* CONTENT */}
      <div className="about">
        <section className="about-section">

          {/* ROW 1 */}
          <div
            ref={row1Ref}
            className={`about-row fade-up ${row1Visible ? "show" : ""}`}
          >
            <div className="about-image">
              <img src="/videos/uff.jpg" alt="Vision" />
            </div>

            <div className="about-content">
              <h2 className="book-wrapper">
                <span className={`book-text ${row1Visible ? "book-open" : ""}`}>
                  Our Vision
                </span>
              </h2>

              <p className="book-wrapper">
                <span className={`book-text delay-1 ${row1Visible ? "book-open" : ""}`}>
                  To redefine the future of enterprise technology by building intelligent,
                  secure, and scalable digital ecosystems that empower organizations to
                  innovate without limits. We envision a world where technology is not just a tool,
                  but a strategic force
                </span>
              </p>

              <p className="book-wrapper">
                <span className={`book-text delay-2 ${row1Visible ? "book-open" : ""}`}>
                  that drives transformation, unlocks new opportunities, and creates sustainable long-term value.
                  Through continuous innovation and unwavering commitment to excellence, we strive to shape resilient
                  digital infrastructures that enable businesses to lead with confidence in an ever-evolving global landscape.
                </span>
              </p>
              <ul className="vision-points">
  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row1Visible ? "book-open" : ""}`}>
      Driving innovation through advanced technology solutions
    </span>
  </li>

  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row1Visible ? "book-open" : ""}`}>
      Building secure and scalable digital infrastructures
    </span>
  </li>

  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row1Visible ? "book-open" : ""}`}>
      Enabling businesses to adapt in a rapidly evolving market
    </span>
  </li>

  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row1Visible ? "book-open" : ""}`}>
      Delivering long-term value through continuous innovation
    </span>
  </li>

  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row1Visible ? "book-open" : ""}`}>
      Empowering organizations with intelligent systems
    </span>
  </li>
</ul>
            </div>
          </div>

          {/* ROW 2 */}
          <div
            ref={row2Ref}
            className={`about-row fade-up ${row2Visible ? "show" : ""}`}
          >
            <div className="about-content">
              <h2 className="book-wrapper">
                <span className={`book-text ${row2Visible ? "book-open" : ""}`}>
                  Our Approach
                </span>
              </h2>

              <p className="book-wrapper">
                <span className={`book-text delay-1 ${row2Visible ? "book-open" : ""}`}>
                  Our approach is rooted in strategy, precision, and long-term vision.
                  We begin by understanding each client’s unique business landscape,
                  challenges, and growth objectives. From there,
                  we design tailored technology solutions that are secure, scalable, and built for performance.
                </span>
              </p>

              <p className="book-wrapper">
                <span className={`book-text delay-2 ${row2Visible ? "book-open" : ""}`}>
                  By combining deep technical expertise with forward-thinking innovation,
                  we create systems that are not only efficient today but resilient for tomorrow.
                  Every solution we deliver is engineered to align with business goals,
                  enhance operational efficiency, and enable sustainable digital transformation.
                </span>
              </p>
              <ul className="vision-points">
  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row2Visible ? "book-open" : ""}`}>
      Strategic, business-aligned solutions designed for long-term scalability
    </span>
  </li>

  <li className="book-wrapper">
    <span className={`book-text delay-4 ${row2Visible ? "book-open" : ""}`}>
      Precision-driven execution ensuring performance, security, and reliability
    </span>
  </li>
  <li className="book-wrapper">
  <span className={`book-text delay-4 ${row2Visible ? "book-open" : ""}`}>
    Agile methodologies ensuring faster delivery and continuous improvement
  </span>
</li>

<li className="book-wrapper">
  <span className={`book-text delay-4 ${row2Visible ? "book-open" : ""}`}>
    Data-driven decision making to optimize performance and outcomes
  </span>
</li>

<li className="book-wrapper">
  <span className={`book-text delay-4 ${row2Visible ? "book-open" : ""}`}>
    Collaborative execution aligned with client goals and business vision
  </span>
</li>
</ul>
            </div>

            <div className="about-image">
              <img src="/videos/gone.jpg" alt="Approach" />
            </div>
          </div>

        </section>
      </div>

    </div>
  );
}

export default About;