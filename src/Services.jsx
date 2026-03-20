import { useEffect, useRef, useState } from "react";
import "./Services.css";

function FlipCard({ children }) {
  const ref = useRef(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!entered) return;
    const el = ref.current;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardHeight = rect.height;
      const centerOffset = rect.top + cardHeight / 2 - windowHeight / 2;
      const range = windowHeight / 2;
      const progress = Math.min(1, Math.max(0, 1 - centerOffset / range));
      const rotate = -150 * (1 - progress);
      const lift = 60 * progress;
      el.style.transform = `rotateX(${rotate}deg) translateZ(${lift}px)`;
      el.style.boxShadow = `0 ${20 + lift / 3}px ${40 + lift}px rgba(0,0,0,${0.2 + 0.3 * progress})`;
      el.style.opacity = `${0.2 + 0.8 * progress}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [entered]);

  return (
    <div className="fc-wrapper">
      <div ref={ref} className={`fc-card ${entered ? "fc-entered" : ""}`}>
        {children}
      </div>
    </div>
  );
}

const IconInfra = () => (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <rect x="2" y="3" width="20" height="4" rx="1"/>
    <rect x="2" y="10" width="20" height="4" rx="1"/>
    <rect x="2" y="17" width="20" height="4" rx="1"/>
    <circle cx="18" cy="5" r="0.8" fill="currentColor"/>
    <circle cx="18" cy="12" r="0.8" fill="currentColor"/>
    <circle cx="18" cy="19" r="0.8" fill="currentColor"/>
  </svg>
);

const IconCloud = () => (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    <polyline points="12 16 16 12 12 8"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
  </svg>
);

const IconSecurity = () => (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6l-9-4z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);

const IconAnalytics = () => (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <path d="M3 3l7 7 4-4 7 7"/>
  </svg>
);

const IconConsulting = () => (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
  </svg>
);

const IconDevOps = () => (
  <svg className="fc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
    <polyline points="16 3 21 3 21 8"/>
    <line x1="4" y1="20" x2="21" y2="3"/>
    <polyline points="21 16 21 21 16 21"/>
    <line x1="15" y1="15" x2="21" y2="21"/>
    <path d="M4 4c0 0 2 2 2 6s-2 6-2 6"/>
    <path d="M8 6c0 0 1 1.5 1 4s-1 4-1 4"/>
  </svg>
);

const fcItems = [
  {
    code: "S0802",
    icon: <IconInfra />,
    title: "IT Infrastructure Management",
    desc: "Comprehensive management of organizational IT infrastructure including servers, networks, and storage systems to ensure high availability, performance stability, and operational continuity."
  },
  {
    code: "S0803",
    icon: <IconCloud />,
    title: "Cloud Migration & Deployment",
    desc: "End-to-end migration of business applications and data from on-premise environments to cloud platforms, ensuring secure transfer, optimized resource utilization, and minimal downtime."
  },
  {
    code: "S0804",
    icon: <IconSecurity />,
    title: "Cybersecurity Implementation",
    desc: "Deployment of advanced security frameworks and protocols to protect digital assets, prevent unauthorized access, and ensure compliance with industry security standards."
  },
  {
    code: "S0805",
    icon: <IconAnalytics />,
    title: "Data Analytics & Business Intelligence",
    desc: "Extraction, processing, and analysis of business data to generate actionable insights, enabling informed decision-making and strategic planning."
  },
  {
    code: "S0806",
    icon: <IconConsulting />,
    title: "IT Consulting & Digital Transformation",
    desc: "Strategic consulting to modernize IT systems, optimize workflows, and implement digital technologies that improve efficiency and business performance."
  },
  {
    code: "S0807",
    icon: <IconDevOps />,
    title: "DevOps Implementation & Automation",
    desc: "Design and implementation of DevOps practices including CI/CD pipelines, infrastructure as code, and automated deployment workflows to enhance development efficiency, system reliability, and faster release cycles."
  },
];

export default function FlipStackPage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fc-page">

      <div className="fc-hero">
        <p className="book-wrapper">
          <span className={`fc-label book-text ${heroVisible ? "book-open" : ""}`}>
            Our Services
          </span>
        </p>
        <h1 className="book-wrapper">
          <span className={`fc-title book-text delay-1 ${heroVisible ? "book-open" : ""}`}>
            Empowering Your<br />Business Growth
          </span>
        </h1>
        <p className="book-wrapper">
          <span className={`fc-subtitle book-text delay-2 ${heroVisible ? "book-open" : ""}`}>
            Discover how our solutions can elevate your business.
          </span>
        </p>
      </div>

      <div className="fc-stack">
        <div className="fc-spacer" />
        {fcItems.map((item, i) => (
          <FlipCard key={i}>
            <div className="fc-body">
              {item.icon}
              <div className="fc-text">
                <span className="fc-code">{item.code}</span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          </FlipCard>
        ))}
        <div className="fc-spacer" />
      </div>

    </div>
  );
}