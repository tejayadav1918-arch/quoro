import { useEffect, useRef } from "react";
import "./ContactGlobe.css";

const MAPS_URL =
  "https://maps.app.goo.gl/ADSkFEaau8GpUFVu8";

export default function GlobeMap() {
  const starsRef = useRef(null);

  useEffect(() => {
    const el = starsRef.current;
    if (!el) return;
    for (let i = 0; i < 100; i++) {
      const s = document.createElement("div");
      s.className = "gs-star";
      s.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --d:${(2 + Math.random() * 4).toFixed(2)}s;
        --delay:${(Math.random() * 6).toFixed(2)}s;
        --op:${(0.3 + Math.random() * 0.7).toFixed(2)};
      `;
      el.appendChild(s);
    }
    return () => { el.innerHTML = ""; };
  }, []);

  return (
    <div className="gs-outer">
      <div className="globe-section">

        {/* ── Stars ── */}
        <div className="gs-stars" ref={starsRef} />

        {/* ══════════════════ GLOBE ══════════════════ */}
        <div className="gs-globe-side">

          {/* Orbit rings (decorative) */}
          <div className="gs-orbit-ring gs-o1" />
          <div className="gs-orbit-ring gs-o2" />
          <div className="gs-orbit-ring gs-o3" />

          {/* Orbiting green dot */}
          <div className="gs-orbit-anim gs-a1">
            <div className="gs-dot-green" />
          </div>

          {/* Orbiting lime dot */}
          <div className="gs-orbit-anim gs-a2">
            <div className="gs-dot-lime" />
          </div>

          {/* Orbiting paper plane */}
          <div className="gs-orbit-anim gs-a3">
            <div className="gs-plane">✈</div>
          </div>

          {/* Globe sphere */}
          <div className="gs-globe-wrap">
            <div className="gs-sphere">
              <svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="gs-clip">
                    <circle cx="160" cy="160" r="160" />
                  </clipPath>
                </defs>

                <g clipPath="url(#gs-clip)">
                  <rect width="640" height="320" fill="#031008" />

                  <g className="gs-globe-land">
                    {/* Latitude lines */}
                    {[53, 107, 160, 213, 267].map((y) => (
                      <line
                        key={`lat-${y}`}
                        x1="0" y1={y} x2="640" y2={y}
                        stroke="#0d3a1a"
                        strokeWidth={y === 160 ? 0.9 : 0.6}
                      />
                    ))}

                    {/* Longitude lines */}
                    {[0, 53, 107, 160, 213, 267, 320, 373, 427, 480, 533, 587].map((x) => (
                      <line
                        key={`lon-${x}`}
                        x1={x} y1="0" x2={x} y2="320"
                        stroke="#0d3a1a"
                        strokeWidth="0.6"
                      />
                    ))}

                    {/* ── Continents set 1 ── */}
                    {/* Europe */}
                    <polygon points="118,72 140,65 155,72 158,88 148,100 130,104 115,95 110,82"              fill="#1a6e3a" opacity="0.7" />
                    {/* Africa */}
                    <polygon points="115,108 138,98 148,115 144,148 135,170 120,175 108,160 104,138 108,120"  fill="#1a6e3a" opacity="0.65" />
                    {/* India highlighted */}
                    <polygon points="192,143 200,137 208,143 212,156 208,168 200,176 192,174 185,165 182,155 186,146" fill="#3adf7e" opacity="0.95" />
                    <circle cx="198" cy="160" r="5" fill="#ff4d6d" />
                    <circle cx="198" cy="160" r="9" fill="none" stroke="#ff4d6d" strokeWidth="1.5" opacity="0.5" />
                    {/* Sri Lanka */}
                    <ellipse cx="204" cy="180" rx="4" ry="6" fill="#2abf6e" opacity="0.7" />
                    {/* Pakistan */}
                    <polygon points="168,130 178,124 188,130 188,143 178,147 168,142"                        fill="#1a6e3a" opacity="0.7" />
                    {/* Middle East */}
                    <polygon points="143,120 160,113 168,124 164,140 150,145 136,136"                        fill="#1a6e3a" opacity="0.55" />
                    {/* China */}
                    <polygon points="210,110 255,102 272,115 265,140 242,146 218,143 205,134"                fill="#1a6e3a" opacity="0.65" />
                    {/* SE Asia */}
                    <polygon points="225,148 248,140 257,155 248,168 230,170 220,160"                        fill="#1a6e3a" opacity="0.55" />
                    {/* Australia */}
                    <polygon points="252,186 280,178 290,196 280,215 255,218 245,203"                        fill="#1a6e3a" opacity="0.55" />
                    {/* North America */}
                    <polygon points="330,55 380,48 400,70 390,105 365,115 340,108 320,88 318,68"             fill="#1a6e3a" opacity="0.65" />
                    {/* South America */}
                    <polygon points="348,125 375,118 385,140 378,175 358,185 340,168 334,148"                fill="#1a6e3a" opacity="0.55" />
                    {/* Greenland */}
                    <ellipse cx="362" cy="32" rx="25" ry="18" fill="#1a6e3a" opacity="0.4" />

                    {/* ── Continents set 2 (seamless scroll repeat) ── */}
                    <polygon points="438,72 460,65 475,72 478,88 468,100 450,104 435,95 430,82"              fill="#1a6e3a" opacity="0.7" />
                    <polygon points="435,108 458,98 468,115 464,148 455,170 440,175 428,160 424,138 428,120"  fill="#1a6e3a" opacity="0.65" />
                    {/* India repeat */}
                    <polygon points="512,143 520,137 528,143 532,156 528,168 520,176 512,174 505,165 502,155 506,146" fill="#3adf7e" opacity="0.95" />
                    <circle cx="518" cy="160" r="5" fill="#ff4d6d" />
                    <circle cx="518" cy="160" r="9" fill="none" stroke="#ff4d6d" strokeWidth="1.5" opacity="0.5" />
                    <ellipse cx="524" cy="180" rx="4" ry="6" fill="#2abf6e" opacity="0.7" />
                    <polygon points="488,130 498,124 508,130 508,143 498,147 488,142"                        fill="#1a6e3a" opacity="0.7" />
                    <polygon points="463,120 480,113 488,124 484,140 470,145 456,136"                        fill="#1a6e3a" opacity="0.55" />
                    <polygon points="530,110 575,102 592,115 585,140 562,146 538,143 525,134"                fill="#1a6e3a" opacity="0.65" />
                    <polygon points="545,148 568,140 577,155 568,168 550,170 540,160"                        fill="#1a6e3a" opacity="0.55" />
                  </g>
                </g>

                {/* Globe border ring */}
                <circle cx="160" cy="160" r="158" fill="none" stroke="#1a6e3a" strokeWidth="2" />
              </svg>

              <div className="gs-shine" />
            </div>
          </div>
        </div>

        {/* ══════════════════ MAP ══════════════════ */}
        <div className="gs-map-side">
          <div className="gs-map-tag">Our Location</div>
          <div className="gs-map-heading">
            Tamil Nadu,<br />India
          </div>
          <div className="gs-map-desc">
            Choolaimedu ,<br />
            Chennai
          </div>

          {/* Clicking the card opens Google Maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="gs-map-link"
            title="Open in Google Maps"
          >
            <div className="gs-map-card">
              <svg viewBox="0 0 320 210" xmlns="http://www.w3.org/2000/svg">
                <rect width="320" height="210" fill="#071a10" />

                {/* Grid */}
                {[52, 105, 157].map((y) => (
                  <line key={`mh-${y}`} x1="0" y1={y} x2="320" y2={y} stroke="#0d2a18" strokeWidth="0.7" />
                ))}
                {[80, 160, 240].map((x) => (
                  <line key={`mv-${x}`} x1={x} y1="0" x2={x} y2="210" stroke="#0d2a18" strokeWidth="0.7" />
                ))}

                {/* India outline */}
                <polygon
                  points="95,25 135,18 175,24 200,38 215,58 220,82 212,110 198,130 188,148 176,158 162,155 146,147 128,138 115,122 104,104 92,82 86,60 88,42"
                  fill="#0f3a20" stroke="#1a7a40" strokeWidth="1.2"
                />

                {/* Andhra Pradesh highlight */}
                <polygon
                  points="162,112 177,104 188,112 187,128 178,137 167,138 158,130 156,118"
                  fill="#1a7a40" stroke="#4dff91" strokeWidth="1.5"
                />

                {/* Animated pin pulse */}
                <circle cx="173" cy="122" r="5" fill="#ff4d6d" />
                <circle cx="173" cy="122" r="5" fill="none" stroke="#ff4d6d" strokeWidth="1.5">
                  <animate attributeName="r"             values="5;24;5"     dur="2s" repeatCount="indefinite" />
                  <animate attributeName="strokeOpacity"  values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Pin stem */}
                <line x1="173" y1="122" x2="173" y2="96" stroke="#ff4d6d" strokeWidth="1.5" />

                {/* Label */}
                <text x="178" y="94" fill="#88ffb8" fontSize="10" fontFamily="Syne,sans-serif" fontWeight="700">
                  Chennai
                </text>

                {/* Scale bar */}
                <rect x="242" y="188" width="54" height="2" fill="#1a5a30" />
                <text x="242" y="202" fill="#2a7a40" fontSize="9" fontFamily="Syne,sans-serif">500 km</text>

                {/* Compass */}
                <text x="282" y="30" fill="#2a8a50" fontSize="11" fontFamily="Syne,sans-serif" fontWeight="700" textAnchor="middle">N</text>
                <line x1="282" y1="33" x2="282" y2="48" stroke="#2a8a50" strokeWidth="1.2" />
                <polygon points="282,18 278,33 282,28 286,33" fill="#2a8a50" />

                {/* Open in Maps hint */}
                <text x="160" y="200" fill="#2a6a3a" fontSize="9" fontFamily="Syne,sans-serif" textAnchor="middle">
                  Click to open in Google Maps ↗
                </text>
              </svg>

              <div className="gs-map-footer">
                <div className="gs-pin-badge">📍</div>
                <div>
                  <div className="gs-loc-name">Chennai</div>
                  <div className="gs-loc-coords"> Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}