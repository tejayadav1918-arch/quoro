import { useEffect, useState, useRef } from "react";
import {
  FiShield,
  FiCode,
  FiCloud,
  FiDatabase,
  FiActivity,
  FiCpu
} from "react-icons/fi";
import "./ServiceGlimpse.css";

const slidesData = [
  {
    title: "IT INFRASTRUCTURE MANAGEMENT SERVICE",
    text: "Comprehensive management of organizational IT infrastructure including servers, networks, and storage systems to ensure high availability, performance stability, and operational continuity.",
    icons: [FiShield, FiActivity, FiCpu],
    image: "/videos/Young.avif"
  },
  {
    title: "CLOUD MIGRATION AND DEPLOYMENT SERVICE",
    text: "End-to-end migration of business applications and data from on-premise environments to cloud platforms, ensuring secure transfer, optimized resource utilization, and minimal downtime.",
    icons: [FiCode, FiDatabase, FiActivity],
    image: "/videos/Lap.avif"
  },
  {
    title: "CYBERSECURITY IMPLEMENTATION SERVICE",
    text: "Deployment of advanced security frameworks and protocols to protect digital assets, prevent unauthorized access, and ensure compliance with industry security standards.",
    icons: [FiCloud, FiDatabase, FiShield],
    image: "/videos/Chikri.png"
  },
  {
    title: "DATA ANALYTICS AND BUSINESS INTELLIGENCE SERVICE",
    text: "Extraction, processing, and analysis of business data to generate actionable insights, enabling informed decision-making and strategic planning.",
    icons: [FiDatabase, FiCpu, FiShield],
    image: "/videos/Data.png"
  },
  {
    title: "IT CONSULTING AND DIGITAL TRANSFORMATION SERVICE",
    text: "Strategic consulting to modernize IT systems, optimize workflows, and implement digital technologies that improve efficiency and business performance.",
    icons: [FiActivity, FiCloud, FiCode],
    image: "/videos/ben.png"
  },
  {
    title: "DEVOPS IMPLEMENTATION AND AUTOMATION SERVICE",
    text: "Enterprise-grade IT infrastructure management.",
    icons: [FiCpu, FiShield, FiDatabase],
    image: "/videos/Phi.webp"
  }
];

function ServicesGlimpse() {

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [visible, setVisible] = useState(false);
  const [textAnimate, setTextAnimate] = useState(false);

  const sectionRef = useRef(null);

  const slides = [
    slidesData[slidesData.length - 1],
    ...slidesData,
    slidesData[0]
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    setTextAnimate(false);
    const timer = setTimeout(() => setTextAnimate(true), 200);
    return () => clearTimeout(timer);
  }, [index, visible]);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => setIndex(prev => prev + 1), 5000);
    return () => clearInterval(interval);
  }, [visible]);

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => { setTransition(false); setIndex(1); }, 800);
    }
    if (index === 0) {
      setTimeout(() => { setTransition(false); setIndex(slides.length - 2); }, 800);
    }
    setTimeout(() => setTransition(true), 50);
  }, [index, slides.length]);

  return (
    <div className="sg-overflow-clip">
    <section
      ref={sectionRef}
      className={`sg-section ${visible ? "sg-visible" : ""}`}
    >
      <div
        className="sg-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.9s cubic-bezier(0.65, 0, 0.35, 1)" : "none"
        }}
      >
        {slides.map((slide, i) => (
          <div className="sg-slide" key={i}>
            <div className="sg-grid">

              {/* LEFT */}
              <div className="sg-left">
                <div className="sg-icon-row">
                  {slide.icons.map((Icon, idx) => (
                    <div className="sg-mint" key={idx}>
                      <Icon className="sg-mint-icon" />
                    </div>
                  ))}
                </div>
                <div className="sg-image-block">
                  <img src={slide.image} alt={slide.title} />
                </div>
              </div>

              {/* RIGHT */}
              <div className="sg-right">
                <div className="sg-content-block">
                  <div>
                    <h3 className="book-wrapper">
                      <span className={`book-text delay-1 ${textAnimate ? "book-open" : ""}`}>
                        {slide.title}
                      </span>
                    </h3>
                    <p className="book-wrapper">
                      <span className={`book-text delay-2 ${textAnimate ? "book-open" : ""}`}>
                        {slide.text}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="sg-grey-block"></div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="sg-dots">
        {slidesData.map((_, i) => (
          <div
            key={i}
            className={`sg-dot ${index === i + 1 ? "active" : ""}`}
            onClick={() => { setTransition(true); setIndex(i + 1); }}
          />
        ))}
      </div>

    </section>
    </div>
  );
}

export default ServicesGlimpse;