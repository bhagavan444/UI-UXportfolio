"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const TOKENS = {
  bg:       "#04040c",
  surface:  "#0a091a",
  panel:    "#0e0d1f",
  border:   "rgba(255,255,255,0.07)",
  text:     "#e8eaf2",
  muted:    "#5c6080",
  // Accent palette — one per card, no sharing
  a1: { hex: "#00e5ff", rgb: "0,229,255",    name: "CYAN"   },  // B.Tech
  a2: { hex: "#c084fc", rgb: "192,132,252",  name: "VIOLET" },  // Intermediate
  a3: { hex: "#fb923c", rgb: "251,146,60",   name: "AMBER"  },  // SSC
};

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const EDUCATION = [
  {
    id: 1,
    index: "01",
    degree: "B.Tech",
    stream: "AI & Data Science",
    institution: "Ramachandra College of Engineering",
    university: "JNTUK",
    duration: "2022 – 2026",
    score: "7.9 CGPA",
    location: "Eluru, Andhra Pradesh",
    status: "ACTIVE",
    badge: "CURRENT",
    rarity: "LEGENDARY",
    progress: 85,
    certId: "1wxnzvsS3MA7xWSxuXKeIkS8GaQoG4Y1a",
    accent: TOKENS.a1,
    description:
      "Specialized in building intelligent systems using Machine Learning, Deep Learning, and Full-Stack Development. Focused on shipping production-ready AI applications.",
    skills: ["Machine Learning","Deep Learning","MERN Stack","Computer Vision","MLOps","Neural Networks","Python","React.js"],
    achievements: [
      "AI/ML Internship at Leading Tech Firms",
      "Top 10% Academic Performer",
      "10+ Full-Stack AI Projects Deployed",
      "24-Hour Hackathon Winner",
      "20+ Professional Certifications",
    ],
    metrics: [
      { label: "Projects", value: "10+" },
      { label: "CGPA",     value: "7.9" },
      { label: "Certs",    value: "20+" },
    ],
  },
  {
    id: 2,
    index: "02",
    degree: "Intermediate",
    stream: "MPC",
    institution: "Srividhya Junior College",
    university: "Board of Intermediate",
    duration: "2020 – 2022",
    score: "7.8 CGPA",
    location: "Gudivada, Andhra Pradesh",
    status: "COMPLETED",
    badge: "FOUNDATION",
    rarity: "EPIC",
    progress: 78,
    certId: "1N1K1j6QGrgNPNL2D9UmfJAL2PVSulhPJ",
    accent: TOKENS.a2,
    description:
      "Pre-engineering curriculum with emphasis on Mathematics, Physics, and Chemistry. Built the analytical and problem-solving foundation that drives every technical decision.",
    skills: ["Mathematical Reasoning","Physics Principles","Problem Solving","Analytical Thinking","Scientific Method"],
    achievements: [
      "Top Performer in Mathematics",
      "Strong Academic Foundation",
      "Science Exhibition Participant",
    ],
    metrics: [
      { label: "CGPA",  value: "7.8"    },
      { label: "Maths", value: "Top"    },
      { label: "Sci",   value: "Strong" },
    ],
  },
  {
    id: 3,
    index: "03",
    degree: "Secondary",
    stream: "SSC Board",
    institution: "Montessori English Medium High School",
    university: "SSC Board",
    duration: "2019 – 2020",
    score: "9.5 GPA",
    location: "Gudivada, Andhra Pradesh",
    status: "COMPLETED",
    badge: "EXCELLENCE",
    rarity: "LEGENDARY",
    progress: 95,
    certId: "1p1RXnVn9jySamu8OiIWF0WFhe7G6QxiL",
    accent: TOKENS.a3,
    description:
      "Achieved academic excellence with exceptional performance across all subjects. Recognised as school topper with perfect marks in Mathematics.",
    skills: ["Academic Excellence","Leadership","Critical Thinking","Discipline"],
    achievements: [
      "School Topper — 9.5 GPA",
      "Perfect Score in Mathematics",
      "Excellence Award Winner",
    ],
    metrics: [
      { label: "GPA",  value: "9.5" },
      { label: "Math", value: "100%" },
      { label: "Rank", value: "#1"  },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const thumb = (id) => `https://lh3.googleusercontent.com/d/${id}`;
const driveUrl = (id) => `https://drive.google.com/file/d/${id}/view`;

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

// ── ANIMATED COUNTER
const Counter = ({ value, suffix = "" }) => {
  const [display, setDisplay] = useState(0);
  const numVal = parseFloat(value);
  useEffect(() => {
    if (isNaN(numVal)) { setDisplay(value); return; }
    let start = 0;
    const end = numVal;
    const step = end / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setDisplay(end); clearInterval(timer); }
      else setDisplay(parseFloat(start.toFixed(1)));
    }, 25);
    return () => clearInterval(timer);
  }, [numVal]);
  return <span>{isNaN(numVal) ? value : display}{suffix}</span>;
};

// ── PROGRESS ARC (SVG)
const ProgressArc = ({ pct, color, size = 88 }) => {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={5}/>
      <circle
        cx={size/2} cy={size/2} r={r}
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{
          filter: `drop-shadow(0 0 6px ${color})`,
          transition: "stroke-dasharray 1.2s cubic-bezier(.22,1,.36,1)",
        }}
      />
    </svg>
  );
};

// ── DOSSIER CARD (main card for grid + timeline)
const DossierCard = ({ edu, isActive, onSelect }) => {
  const { accent } = edu;
  const [hovered, setHovered] = useState(false);
  const hot = hovered || isActive;

  return (
    <article
      className={`dossier-card${hot ? " hot" : ""}`}
      style={{ "--ac": accent.hex, "--ar": accent.rgb }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(edu)}
    >
      {/* Rarity stripe */}
      <div className="rarity-stripe" />

      {/* Certificate thumb */}
      <div className="card-thumb">
        <img src={thumb(edu.certId)} alt={edu.institution} className="thumb-img" />
        <div className="thumb-veil" />
        {/* Index watermark */}
        <span className="index-mark">{edu.index}</span>
        {/* Status pill */}
        <span className={`status-pill status-${edu.status}`}>
          {edu.status === "ACTIVE" && <span className="blink-dot" />}
          {edu.status}
        </span>
      </div>

      {/* Body */}
      <div className="card-body">
        {/* Top meta row */}
        <div className="meta-row">
          <span className="badge-pill">{edu.badge}</span>
          <span className="rarity-label">{edu.rarity}</span>
        </div>

        {/* Degree headline */}
        <div className="degree-block">
          <h2 className="degree-title">{edu.degree}</h2>
          <span className="stream-label">{edu.stream}</span>
        </div>

        <div className="institution-name">{edu.institution}</div>
        <div className="uni-row">
          <span>{edu.university}</span>
          <span className="dot-sep">·</span>
          <span>{edu.location}</span>
        </div>

        {/* Score + Progress */}
        <div className="score-arc-row">
          <div>
            <div className="score-value" style={{ color: accent.hex }}>
              {edu.score}
            </div>
            <div className="score-sub">{edu.duration}</div>
          </div>
          <div className="arc-wrap">
            <ProgressArc pct={edu.progress} color={accent.hex} size={76} />
            <span className="arc-label">{edu.progress}%</span>
          </div>
        </div>

        {/* Metrics row */}
        <div className="metrics-row">
          {edu.metrics.map((m) => (
            <div key={m.label} className="metric-chip" style={{ "--ac": accent.hex }}>
              <span className="metric-val">{m.value}</span>
              <span className="metric-lbl">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="skills-strip">
          {edu.skills.slice(0, 4).map((s) => (
            <span key={s} className="skill-tag" style={{ "--ac": accent.hex }}>{s}</span>
          ))}
          {edu.skills.length > 4 && (
            <span className="skill-tag skill-more" style={{ "--ac": accent.hex }}>
              +{edu.skills.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <button className="card-cta" style={{ "--ac": accent.hex, "--ar": accent.rgb }}>
          <span>OPEN DOSSIER</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </article>
  );
};

// ── MODAL
const Modal = ({ edu, onClose }) => {
  const { accent } = edu;

  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel"
        style={{ "--ac": accent.hex, "--ar": accent.rgb }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Left column */}
        <div className="modal-left">
          <div className="modal-img-wrap">
            <img src={thumb(edu.certId)} alt={edu.institution} className="modal-img" />
            <div className="modal-img-veil" />
          </div>

          {/* Metrics */}
          <div className="modal-metrics">
            {edu.metrics.map((m) => (
              <div key={m.label} className="mod-metric">
                <span className="mod-metric-val" style={{ color: accent.hex }}>
                  <Counter value={m.value} />
                </span>
                <span className="mod-metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Progress arc */}
          <div className="modal-arc-row">
            <ProgressArc pct={edu.progress} color={accent.hex} size={110} />
            <div className="modal-arc-text">
              <span className="modal-arc-pct" style={{ color: accent.hex }}>{edu.progress}%</span>
              <span className="modal-arc-sub">COMPLETION</span>
            </div>
          </div>

          <a
            href={driveUrl(edu.certId)}
            target="_blank"
            rel="noopener noreferrer"
            className="view-cert-btn"
            style={{ "--ac": accent.hex, "--ar": accent.rgb }}
          >
            VIEW CERTIFICATE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>

        {/* Right column */}
        <div className="modal-right">
          {/* Header */}
          <div className="modal-badge-row">
            <span className="modal-badge" style={{ "--ac": accent.hex }}>{edu.badge}</span>
            <span className="modal-rarity" style={{ color: accent.hex }}>{edu.rarity}</span>
          </div>

          <h2 className="modal-degree">{edu.degree}</h2>
          <h3 className="modal-stream" style={{ color: accent.hex }}>{edu.stream}</h3>

          <div className="modal-inst">{edu.institution}</div>
          <div className="modal-meta">
            <span>{edu.university}</span>
            <span className="dot-sep">·</span>
            <span>{edu.duration}</span>
            <span className="dot-sep">·</span>
            <span>{edu.score}</span>
          </div>
          <div className="modal-loc">📍 {edu.location}</div>

          <p className="modal-desc">{edu.description}</p>

          {/* Achievements */}
          <section className="modal-section">
            <h4 className="modal-section-head" style={{ color: accent.hex }}>
              KEY ACHIEVEMENTS
            </h4>
            <ul className="modal-achievements">
              {edu.achievements.map((a, i) => (
                <li key={i} className="modal-achievement-item" style={{ animationDelay: `${i * 0.07}s` }}>
                  <span className="ach-icon" style={{ color: accent.hex }}>›</span>
                  {a}
                </li>
              ))}
            </ul>
          </section>

          {/* Skills */}
          <section className="modal-section">
            <h4 className="modal-section-head" style={{ color: accent.hex }}>
              SKILLS & FOCUS AREAS
            </h4>
            <div className="modal-skills">
              {edu.skills.map((s) => (
                <span key={s} className="modal-skill-tag" style={{ "--ac": accent.hex }}>
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// TIMELINE VIEW
// ─────────────────────────────────────────────────────────────────────────────
const TimelineView = ({ onSelect }) => (
  <div className="timeline-wrap">
    {/* Vertical spine */}
    <div className="timeline-spine" />

    {EDUCATION.map((edu, i) => {
      const isRight = i % 2 === 0;
      return (
        <div key={edu.id} className={`timeline-row tl-${isRight ? "right" : "left"}`}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {/* Connector line */}
          <div className="tl-connector" style={{ "--ac": edu.accent.hex }} />

          {/* Node */}
          <div className="tl-node" style={{ "--ac": edu.accent.hex, "--ar": edu.accent.rgb }}>
            <span className="tl-node-idx">{edu.index}</span>
          </div>

          {/* Card */}
          <div
            className="tl-card"
            style={{ "--ac": edu.accent.hex, "--ar": edu.accent.rgb }}
            onClick={() => onSelect(edu)}
          >
            <div className="tl-year">{edu.duration}</div>
            <div className="tl-degree">{edu.degree}</div>
            <div className="tl-stream" style={{ color: edu.accent.hex }}>{edu.stream}</div>
            <div className="tl-inst">{edu.institution}</div>
            <div className="tl-score" style={{ color: edu.accent.hex }}>{edu.score}</div>
            <div className="tl-progress-bar">
              <div className="tl-progress-fill"
                style={{ width: `${edu.progress}%`, background: edu.accent.hex }} />
            </div>
            <div className="tl-cta">VIEW DETAILS →</div>
          </div>
        </div>
      );
    })}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// IMMERSIVE VIEW
// ─────────────────────────────────────────────────────────────────────────────
const ImmersiveView = ({ onSelect }) => {
  const [active, setActive] = useState(0);
  const edu = EDUCATION[active];
  const { accent } = edu;

  return (
    <div className="imm-wrap" style={{ "--ac": accent.hex, "--ar": accent.rgb }}>
      {/* Background overlay */}
      <div className="imm-bg" />

      {/* Left panel — big number + switcher */}
      <div className="imm-left">
        <div className="imm-index" style={{ color: accent.hex }}>{edu.index}</div>
        <div className="imm-switchers">
          {EDUCATION.map((e, i) => (
            <button
              key={e.id}
              className={`imm-switch${active === i ? " active" : ""}`}
              style={{ "--ac": e.accent.hex }}
              onClick={() => setActive(i)}
            >
              <span>{e.index}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Center — hero content */}
      <div className="imm-center">
        <div className="imm-badge" style={{ borderColor: accent.hex, color: accent.hex }}>
          {edu.badge} · {edu.duration}
        </div>
        <h1 className="imm-degree">{edu.degree}</h1>
        <h2 className="imm-stream" style={{ color: accent.hex }}>{edu.stream}</h2>
        <div className="imm-inst">{edu.institution}</div>

        <div className="imm-metrics">
          {edu.metrics.map((m) => (
            <div key={m.label} className="imm-metric">
              <span className="imm-mval" style={{ color: accent.hex }}>{m.value}</span>
              <span className="imm-mlbl">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="imm-actions">
          <button className="imm-prev" onClick={() => setActive((active - 1 + EDUCATION.length) % EDUCATION.length)}>
            ← PREV
          </button>
          <button
            className="imm-detail"
            style={{ background: accent.hex, color: "#000" }}
            onClick={() => onSelect(edu)}
          >
            OPEN DOSSIER
          </button>
          <button className="imm-next" onClick={() => setActive((active + 1) % EDUCATION.length)}>
            NEXT →
          </button>
        </div>
      </div>

      {/* Right — arc + skills */}
      <div className="imm-right">
        <div className="imm-arc-block">
          <ProgressArc pct={edu.progress} color={accent.hex} size={140} />
          <div className="imm-arc-info">
            <span className="imm-arc-pct" style={{ color: accent.hex }}>{edu.progress}%</span>
            <span className="imm-arc-sub">PROGRESS</span>
          </div>
        </div>
        <div className="imm-skills">
          {edu.skills.map((s) => (
            <span key={s} className="imm-skill" style={{ "--ac": accent.hex }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function AdvancedEducation() {
  const [view, setView] = useState("grid");
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxS = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct((window.scrollY / maxS) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = filter === "ALL" ? EDUCATION : EDUCATION.filter((e) => e.rarity === filter);

  const VIEWS = [
    { id: "grid",      label: "Grid",      glyph: "⊞" },
    { id: "timeline",  label: "Timeline",  glyph: "⌬" },
    { id: "immersive", label: "Immersive", glyph: "⛶" },
  ];

  return (
    <>
      {/* ── ALL CSS ─────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');

        /* ── RESET & BASE ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        .edu-root {
          background: ${TOKENS.bg};
          color: ${TOKENS.text};
          min-height: 100vh;
          font-family: 'Manrope', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
          position: relative;
        }

        /* ── SCROLLBAR ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(0,229,255,.3); border-radius: 2px; }

        /* ── PROGRESS BAR ── */
        .scroll-progress {
          position: fixed; top: 0; left: 0; right: 0;
          height: 3px; z-index: 9999;
          background: rgba(255,255,255,.05);
        }
        .scroll-fill {
          height: 100%;
          background: linear-gradient(90deg, #00e5ff, #c084fc, #fb923c);
          transition: width .1s linear;
          box-shadow: 0 0 12px rgba(0,229,255,.6);
        }

        /* ── BACKGROUND GEOMETRY ── */
        .geo-bg {
          position: fixed; inset: 0;
          pointer-events: none; z-index: 0; overflow: hidden;
        }
        .geo-line {
          position: absolute; background: rgba(255,255,255,.03);
          transform-origin: center;
        }
        .gl1 { width: 1px; height: 110vh; top: -5vh; left: 22%; transform: rotate(12deg); }
        .gl2 { width: 1px; height: 110vh; top: -5vh; left: 48%; transform: rotate(-6deg); }
        .gl3 { width: 1px; height: 110vh; top: -5vh; right: 18%; transform: rotate(9deg); }
        .geo-orb {
          position: absolute; border-radius: 50%; filter: blur(120px);
          animation: orbFloat 28s ease-in-out infinite;
        }
        .go1 { width: 700px; height: 700px; background: rgba(0,229,255,.04); top:-200px; left:-180px; }
        .go2 { width: 600px; height: 600px; background: rgba(192,132,252,.04); bottom:-100px; right:-150px; animation-delay: -12s; }
        .go3 { width: 400px; height: 400px; background: rgba(251,146,60,.03); top:40%; left:55%; animation-delay:-7s; }
        @keyframes orbFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-60px)} }

        /* ── PAGE WRAPPER ── */
        .edu-page {
          position: relative; z-index: 1;
          max-width: 1700px; margin: 0 auto;
          padding: clamp(7rem,12vw,11rem) clamp(1.5rem,5vw,5rem) 8rem;
        }

        /* ── PAGE HEADER ── */
        .page-header {
          margin-bottom: 6rem;
        }
        .page-eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .72rem; letter-spacing: 4px;
          color: ${TOKENS.muted};
          text-transform: uppercase; margin-bottom: 1.4rem;
          display: flex; align-items: center; gap: 1.2rem;
        }
        .page-eyebrow::before {
          content: ''; flex: 0 0 42px; height: 1px;
          background: linear-gradient(90deg, transparent, ${TOKENS.muted});
        }
        .page-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5rem,14vw,11rem);
          line-height: .92; letter-spacing: 3px;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,.45) 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent;
          margin-bottom: 1.8rem;
        }
        .page-sub {
          font-size: clamp(1rem,2vw,1.15rem);
          color: ${TOKENS.muted};
          max-width: 640px; line-height: 1.85;
          font-weight: 500;
        }

        /* ── CONTROLS BAR ── */
        .controls-bar {
          display: flex; align-items: center; gap: 2rem;
          margin-bottom: 5rem; flex-wrap: wrap;
        }
        .view-tabs {
          display: flex; gap: 4px;
          background: rgba(255,255,255,.04);
          border: 1px solid ${TOKENS.border};
          border-radius: 12px; padding: 4px;
        }
        .view-tab {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 20px; border-radius: 8px;
          border: none; background: transparent;
          color: ${TOKENS.muted};
          font-family: 'IBM Plex Mono', monospace;
          font-size: .74rem; letter-spacing: 1.5px;
          cursor: pointer; transition: all .3s ease;
          text-transform: uppercase;
        }
        .view-tab:hover { color: ${TOKENS.text}; }
        .view-tab.vtact {
          background: rgba(255,255,255,.09);
          color: ${TOKENS.text};
          box-shadow: 0 0 0 1px rgba(255,255,255,.12);
        }
        .view-tab-glyph { font-size: 1rem; }

        .filter-tabs {
          display: flex; gap: 6px; margin-left: auto;
        }
        .filter-tab {
          padding: 9px 22px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,.1);
          background: transparent;
          color: ${TOKENS.muted};
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem; letter-spacing: 2px;
          cursor: pointer; transition: all .3s ease;
          text-transform: uppercase;
        }
        .filter-tab:hover { color: ${TOKENS.text}; border-color: rgba(255,255,255,.22); }
        .filter-tab.ftact {
          background: rgba(255,255,255,.08);
          color: ${TOKENS.text};
          border-color: rgba(255,255,255,.25);
        }

        /* ── GRID VIEW ── */
        .grid-view {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
          gap: 2px;
        }

        /* ── DOSSIER CARD ── */
        .dossier-card {
          position: relative;
          background: ${TOKENS.surface};
          border: 1px solid ${TOKENS.border};
          cursor: pointer; overflow: hidden;
          transition: all .45s cubic-bezier(.22,1,.36,1);
          display: flex; flex-direction: column;
        }
        .dossier-card::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 30% 0%, rgba(var(--ar,0,229,255),.07) 0%, transparent 60%);
          opacity: 0; transition: opacity .4s;
        }
        .dossier-card.hot {
          border-color: rgba(var(--ar,0,229,255),.4);
          transform: translateY(-6px);
          box-shadow: 0 32px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(var(--ar,0,229,255),.15),
                      0 0 60px rgba(var(--ar,0,229,255),.08);
        }
        .dossier-card.hot::before { opacity: 1; }

        .rarity-stripe {
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--ac), transparent);
        }

        .card-thumb {
          position: relative; height: 220px; overflow: hidden;
          flex-shrink: 0;
        }
        .thumb-img {
          width: 100%; height: 100%; object-fit: cover;
          transition: transform .8s ease;
        }
        .dossier-card.hot .thumb-img { transform: scale(1.07); }
        .thumb-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, ${TOKENS.surface} 0%, rgba(10,9,26,.4) 60%, transparent 100%);
        }
        .index-mark {
          position: absolute; bottom: 1rem; left: 1.4rem;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 5rem; line-height: 1;
          color: rgba(255,255,255,.07);
          pointer-events: none; user-select: none;
        }
        .status-pill {
          position: absolute; top: 1.2rem; right: 1.2rem;
          display: flex; align-items: center; gap: 6px;
          padding: 5px 14px; border-radius: 999px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .64rem; letter-spacing: 2px;
          font-weight: 600;
          backdrop-filter: blur(12px);
        }
        .status-ACTIVE {
          background: rgba(16,185,129,.18);
          border: 1px solid rgba(16,185,129,.45);
          color: #34d399;
        }
        .status-COMPLETED {
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.15);
          color: ${TOKENS.muted};
        }
        .blink-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #34d399;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

        .card-body { padding: 1.8rem 2rem 2.2rem; flex: 1; display: flex; flex-direction: column; gap: 1.1rem; }

        .meta-row { display: flex; align-items: center; justify-content: space-between; }
        .badge-pill {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .62rem; letter-spacing: 3px;
          padding: 4px 12px; border-radius: 4px;
          background: rgba(var(--ar,0,229,255),.12);
          color: var(--ac);
          border: 1px solid rgba(var(--ar,0,229,255),.28);
        }
        .rarity-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .58rem; letter-spacing: 2.5px;
          color: rgba(255,255,255,.28);
        }

        .degree-block { display: flex; align-items: baseline; gap: .8rem; flex-wrap: wrap; }
        .degree-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.4rem; line-height: 1;
          color: ${TOKENS.text};
        }
        .stream-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .72rem; color: var(--ac);
          letter-spacing: 1.5px; font-weight: 600;
        }

        .institution-name {
          font-size: .88rem; font-weight: 700; color: ${TOKENS.text};
          line-height: 1.4;
        }
        .uni-row {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .68rem; color: ${TOKENS.muted};
          display: flex; gap: .5rem; flex-wrap: wrap;
        }
        .dot-sep { opacity: .4; }

        .score-arc-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.2rem;
          background: rgba(255,255,255,.03);
          border: 1px solid ${TOKENS.border};
          border-radius: 10px;
        }
        .score-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem; line-height: 1;
        }
        .score-sub {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .65rem; color: ${TOKENS.muted};
          letter-spacing: 1.5px; margin-top: 4px;
        }
        .arc-wrap {
          position: relative; display: flex;
          align-items: center; justify-content: center;
        }
        .arc-label {
          position: absolute;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .72rem; font-weight: 700;
          color: ${TOKENS.text};
        }

        .metrics-row { display: flex; gap: .5rem; }
        .metric-chip {
          flex: 1; padding: .7rem .5rem;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(var(--ar,0,229,255),.15);
          border-radius: 8px; text-align: center;
          transition: border-color .3s;
        }
        .dossier-card.hot .metric-chip { border-color: rgba(var(--ar,0,229,255),.32); }
        .metric-val {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem; color: var(--ac);
        }
        .metric-lbl {
          display: block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .56rem; letter-spacing: 2px;
          color: ${TOKENS.muted}; margin-top: 2px;
          text-transform: uppercase;
        }

        .skills-strip { display: flex; flex-wrap: wrap; gap: .4rem; }
        .skill-tag {
          padding: 4px 12px; border-radius: 4px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .62rem; letter-spacing: 1px;
          color: var(--ac);
          background: rgba(var(--ar,0,229,255),.07);
          border: 1px solid rgba(var(--ar,0,229,255),.2);
          transition: background .25s;
        }
        .dossier-card.hot .skill-tag { background: rgba(var(--ar,0,229,255),.14); }
        .skill-more { opacity: .6; }

        .card-cta {
          margin-top: auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.4rem; border-radius: 8px;
          background: rgba(var(--ar,0,229,255),.08);
          border: 1px solid rgba(var(--ar,0,229,255),.22);
          color: var(--ac);
          font-family: 'IBM Plex Mono', monospace;
          font-size: .72rem; letter-spacing: 2px;
          cursor: pointer; transition: all .3s ease;
        }
        .card-cta:hover, .dossier-card.hot .card-cta {
          background: rgba(var(--ar,0,229,255),.18);
          border-color: var(--ac);
        }

        /* ── MODAL ── */
        .modal-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(4,4,12,.95);
          backdrop-filter: blur(24px);
          display: flex; align-items: center; justify-content: center;
          padding: 2rem; overflow-y: auto;
          animation: fadeIn .3s ease;
        }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        .modal-panel {
          position: relative; display: flex; gap: 0;
          max-width: 1100px; width: 100%;
          background: ${TOKENS.panel};
          border: 1px solid rgba(var(--ar,0,229,255),.3);
          border-radius: 4px;
          box-shadow: 0 0 0 1px rgba(var(--ar,0,229,255),.1),
                      0 60px 120px rgba(0,0,0,.8),
                      0 0 80px rgba(var(--ar,0,229,255),.1);
          overflow: hidden;
          animation: panelIn .4s cubic-bezier(.22,1,.36,1);
          max-height: 92vh; overflow-y: auto;
        }
        @keyframes panelIn { from{transform:scale(.96);opacity:0} to{transform:scale(1);opacity:1} }

        /* modal accent strip */
        .modal-panel::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--ac), transparent 80%);
        }

        .modal-close {
          position: absolute; top: 1.2rem; right: 1.2rem;
          width: 38px; height: 38px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          color: ${TOKENS.muted}; font-size: 1rem;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          z-index: 10; transition: all .25s;
        }
        .modal-close:hover { color: ${TOKENS.text}; border-color: rgba(255,255,255,.28); }

        .modal-left {
          flex: 0 0 320px; padding: 2.5rem 2rem;
          background: rgba(255,255,255,.02);
          border-right: 1px solid rgba(255,255,255,.06);
          display: flex; flex-direction: column; gap: 1.8rem;
        }
        .modal-img-wrap {
          position: relative; border-radius: 6px; overflow: hidden;
          border: 1px solid rgba(255,255,255,.08);
        }
        .modal-img { width: 100%; height: auto; display: block; }
        .modal-img-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(14,13,31,.9) 0%, transparent 55%);
        }

        .modal-metrics {
          display: flex; gap: .5rem;
        }
        .mod-metric {
          flex: 1; text-align: center; padding: .9rem .5rem;
          background: rgba(255,255,255,.03); border-radius: 6px;
          border: 1px solid rgba(255,255,255,.07);
        }
        .mod-metric-val {
          display: block;
          font-family: 'Bebas Neue', sans-serif; font-size: 1.6rem;
        }
        .mod-metric-lbl {
          display: block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .55rem; letter-spacing: 2px; color: ${TOKENS.muted};
          margin-top: 2px; text-transform: uppercase;
        }

        .modal-arc-row {
          display: flex; align-items: center; gap: 1.4rem;
          padding: 1.2rem 1rem;
          background: rgba(255,255,255,.03); border-radius: 6px;
          border: 1px solid rgba(255,255,255,.07);
        }
        .modal-arc-text { display: flex; flex-direction: column; }
        .modal-arc-pct {
          font-family: 'Bebas Neue', sans-serif; font-size: 2.4rem; line-height: 1;
        }
        .modal-arc-sub {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .58rem; letter-spacing: 2px; color: ${TOKENS.muted};
          margin-top: 4px;
        }

        .view-cert-btn {
          display: flex; align-items: center; justify-content: center; gap: .6rem;
          padding: 1rem; border-radius: 6px;
          background: rgba(var(--ar,0,229,255),.1);
          border: 1px solid rgba(var(--ar,0,229,255),.3);
          color: var(--ac);
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem; letter-spacing: 2px;
          text-decoration: none; transition: all .3s;
          margin-top: auto;
        }
        .view-cert-btn:hover {
          background: rgba(var(--ar,0,229,255),.2);
          border-color: var(--ac);
        }

        .modal-right {
          flex: 1; padding: 3rem 2.5rem 3rem;
          overflow-y: auto;
        }
        .modal-badge-row {
          display: flex; align-items: center; gap: 1rem; margin-bottom: 1.4rem;
        }
        .modal-badge {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .62rem; letter-spacing: 3px;
          padding: 4px 14px; border-radius: 3px;
          border: 1px solid rgba(var(--ar,0,229,255),.3);
          background: rgba(var(--ar,0,229,255),.1);
          color: var(--ac);
        }
        .modal-rarity {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .58rem; letter-spacing: 3px; opacity: .6;
        }

        .modal-degree {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.5rem,6vw,4rem); line-height: 1;
          color: ${TOKENS.text}; margin-bottom: .3rem;
        }
        .modal-stream {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem; margin-bottom: 1.4rem;
          letter-spacing: 2px;
        }
        .modal-inst {
          font-size: .95rem; font-weight: 700; color: ${TOKENS.text};
          margin-bottom: .5rem;
        }
        .modal-meta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem; color: ${TOKENS.muted};
          display: flex; flex-wrap: wrap; gap: .5rem;
          margin-bottom: .5rem;
        }
        .modal-loc {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem; color: ${TOKENS.muted};
          margin-bottom: 1.8rem;
        }
        .modal-desc {
          font-size: .9rem; color: rgba(232,234,242,.65);
          line-height: 1.8; margin-bottom: 2.5rem;
          padding-left: 1.2rem;
          border-left: 2px solid rgba(var(--ar,0,229,255),.3);
        }

        .modal-section { margin-bottom: 2.2rem; }
        .modal-section-head {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .66rem; letter-spacing: 3.5px;
          text-transform: uppercase; margin-bottom: 1.2rem;
          display: flex; align-items: center; gap: 1rem;
        }
        .modal-section-head::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(255,255,255,.06);
        }

        .modal-achievements { list-style: none; display: flex; flex-direction: column; gap: .6rem; }
        .modal-achievement-item {
          display: flex; align-items: flex-start; gap: .8rem;
          padding: .8rem 1rem; border-radius: 6px;
          background: rgba(255,255,255,.03);
          border: 1px solid ${TOKENS.border};
          font-size: .85rem; line-height: 1.6;
          animation: slideIn .5s ease both;
        }
        @keyframes slideIn { from{opacity:0;transform:translateX(-12px)} to{opacity:1;transform:translateX(0)} }
        .ach-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

        .modal-skills { display: flex; flex-wrap: wrap; gap: .5rem; }
        .modal-skill-tag {
          padding: 5px 14px; border-radius: 3px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .65rem; letter-spacing: 1px;
          color: var(--ac);
          background: rgba(var(--ar,0,229,255),.08);
          border: 1px solid rgba(var(--ar,0,229,255),.2);
        }

        /* Responsive modal */
        @media(max-width:720px) {
          .modal-panel { flex-direction: column; }
          .modal-left { flex: 0 0 auto; border-right: none; border-bottom: 1px solid rgba(255,255,255,.06); }
        }

        /* ── TIMELINE VIEW ── */
        .timeline-wrap {
          position: relative; padding: 4rem 0;
          max-width: 1200px; margin: 0 auto;
        }
        .timeline-spine {
          position: absolute; left: 50%; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(0,229,255,.4) 15%, rgba(192,132,252,.4) 50%, rgba(251,146,60,.4) 85%, transparent);
          transform: translateX(-50%);
        }
        .timeline-row {
          display: flex; position: relative; margin: 4.5rem 0;
          animation: fadeUp .8s ease both;
        }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .tl-right { justify-content: flex-end; }
        .tl-left  { justify-content: flex-start; }

        .tl-node {
          position: absolute; left: 50%; top: 50%;
          transform: translate(-50%,-50%);
          width: 56px; height: 56px; border-radius: 50%;
          background: ${TOKENS.panel};
          border: 2px solid var(--ac);
          box-shadow: 0 0 30px rgba(var(--ar,0,229,255),.4);
          display: flex; align-items: center; justify-content: center;
          z-index: 5;
        }
        .tl-node-idx {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem; color: var(--ac);
        }
        .tl-connector {
          position: absolute; top: 50%; height: 1px;
          background: linear-gradient(90deg, rgba(var(--ar,0,229,255),.3), transparent);
          width: 5%; left: 45%;
        }
        .tl-left .tl-connector {
          left: auto; right: 45%;
          background: linear-gradient(270deg, rgba(var(--ar,0,229,255),.3), transparent);
        }

        .tl-card {
          width: 46%; padding: 2rem;
          background: ${TOKENS.surface};
          border: 1px solid rgba(var(--ar,0,229,255),.2);
          border-radius: 4px; cursor: pointer;
          transition: all .4s ease;
        }
        .tl-card:hover {
          border-color: var(--ac);
          box-shadow: 0 20px 60px rgba(0,0,0,.5), 0 0 40px rgba(var(--ar,0,229,255),.1);
          transform: translateY(-4px);
        }
        .tl-year {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .64rem; letter-spacing: 3px;
          color: ${TOKENS.muted}; margin-bottom: .8rem;
        }
        .tl-degree {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem; line-height: 1; margin-bottom: .3rem;
          color: ${TOKENS.text};
        }
        .tl-stream {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .72rem; letter-spacing: 2px;
          margin-bottom: .9rem;
        }
        .tl-inst {
          font-size: .82rem; color: rgba(232,234,242,.7);
          margin-bottom: .5rem;
        }
        .tl-score {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.5rem; margin-bottom: 1rem;
        }
        .tl-progress-bar {
          height: 2px; background: rgba(255,255,255,.07);
          border-radius: 2px; margin-bottom: 1rem; overflow: hidden;
        }
        .tl-progress-fill {
          height: 100%; border-radius: 2px;
          transition: width 1.2s cubic-bezier(.22,1,.36,1);
        }
        .tl-cta {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .62rem; letter-spacing: 2.5px; color: var(--ac);
        }

        /* ── IMMERSIVE VIEW ── */
        .imm-wrap {
          display: flex; align-items: stretch; gap: 0;
          min-height: 70vh;
          border: 1px solid rgba(var(--ar,0,229,255),.2);
          background: ${TOKENS.surface};
          position: relative; overflow: hidden;
          transition: border-color .5s;
        }
        .imm-wrap::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(var(--ar,0,229,255),.06) 0%, transparent 60%);
          pointer-events: none;
        }
        .imm-bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(var(--ar,0,229,255),.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .imm-left {
          flex: 0 0 120px;
          display: flex; flex-direction: column; align-items: center;
          justify-content: space-between; padding: 3rem 0;
          border-right: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
        }
        .imm-index {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 5rem; line-height: 1; letter-spacing: 2px;
          writing-mode: vertical-rl; text-orientation: mixed;
          transform: rotate(180deg);
          transition: color .5s;
        }
        .imm-switchers {
          display: flex; flex-direction: column; gap: 8px;
        }
        .imm-switch {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,.12);
          background: transparent; color: ${TOKENS.muted};
          cursor: pointer; transition: all .3s;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem;
        }
        .imm-switch:hover { border-color: rgba(255,255,255,.28); color: ${TOKENS.text}; }
        .imm-switch.active {
          border-color: var(--ac);
          background: rgba(var(--ar,0,229,255),.12);
          color: var(--ac);
          box-shadow: 0 0 16px rgba(var(--ar,0,229,255),.3);
        }

        .imm-center {
          flex: 1; padding: 4rem 3.5rem; display: flex;
          flex-direction: column; justify-content: center;
        }
        .imm-badge {
          display: inline-block; margin-bottom: 1.4rem;
          padding: 5px 18px; border-radius: 3px;
          border: 1px solid; /* uses inline style */
          font-family: 'IBM Plex Mono', monospace;
          font-size: .66rem; letter-spacing: 3px;
          transition: all .5s;
        }
        .imm-degree {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.5rem,8vw,6rem);
          line-height: .92; letter-spacing: 3px;
          color: ${TOKENS.text}; margin-bottom: .4rem;
        }
        .imm-stream {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem; letter-spacing: 3px;
          margin-bottom: 1.2rem; transition: color .5s;
        }
        .imm-inst {
          font-size: .9rem; color: rgba(232,234,242,.6);
          margin-bottom: 2.5rem;
        }
        .imm-metrics {
          display: flex; gap: 2.5rem; margin-bottom: 3rem;
        }
        .imm-metric { display: flex; flex-direction: column; gap: 4px; }
        .imm-mval {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.2rem; line-height: 1;
          transition: color .5s;
        }
        .imm-mlbl {
          font-family: 'IBM Plex Mono', monospace;
          font-size: .6rem; letter-spacing: 2.5px; color: ${TOKENS.muted};
          text-transform: uppercase;
        }
        .imm-actions { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
        .imm-prev, .imm-next {
          padding: 11px 24px; border-radius: 3px;
          border: 1px solid rgba(255,255,255,.14);
          background: transparent; color: ${TOKENS.muted};
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem; letter-spacing: 2px;
          cursor: pointer; transition: all .3s;
        }
        .imm-prev:hover, .imm-next:hover {
          color: ${TOKENS.text}; border-color: rgba(255,255,255,.3);
        }
        .imm-detail {
          padding: 11px 28px; border-radius: 3px;
          border: none;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .7rem; letter-spacing: 2.5px; font-weight: 700;
          cursor: pointer; transition: all .4s;
          box-shadow: 0 8px 30px rgba(var(--ar,0,229,255),.3);
        }

        .imm-right {
          flex: 0 0 280px; padding: 3rem 2rem;
          border-left: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          display: flex; flex-direction: column; gap: 2rem;
          align-items: center;
        }
        .imm-arc-block {
          position: relative; display: flex;
          align-items: center; justify-content: center;
        }
        .imm-arc-info {
          position: absolute; text-align: center;
        }
        .imm-arc-pct {
          display: block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem; line-height: 1; transition: color .5s;
        }
        .imm-arc-sub {
          display: block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .5rem; letter-spacing: 2px; color: ${TOKENS.muted};
          margin-top: 4px;
        }
        .imm-skills {
          display: flex; flex-wrap: wrap; gap: .4rem; justify-content: center;
        }
        .imm-skill {
          padding: 4px 10px; border-radius: 3px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: .6rem; letter-spacing: 1px;
          color: var(--ac);
          background: rgba(var(--ar,0,229,255),.07);
          border: 1px solid rgba(var(--ar,0,229,255),.18);
          transition: background .3s;
        }

        /* ── RESPONSIVE ── */
        @media(max-width:900px) {
          .grid-view { grid-template-columns: 1fr; }
          .timeline-spine { left: 28px; }
          .timeline-row, .tl-right, .tl-left { justify-content: flex-end; }
          .tl-node { left: 28px; }
          .tl-card { width: calc(100% - 80px); }
          .tl-connector { display: none; }
          .imm-wrap { flex-direction: column; }
          .imm-left { flex: 0 0 auto; flex-direction: row; padding: 1.2rem 2rem; }
          .imm-index { writing-mode: horizontal-tb; transform: none; font-size: 2.5rem; }
          .imm-right { flex: 0 0 auto; }
          .filter-tabs { margin-left: 0; }
          .controls-bar { flex-direction: column; align-items: flex-start; gap: 1rem; }
        }
        @media(max-width:600px) {
          .page-title { letter-spacing: 1px; }
        }
      `}</style>

      {/* ── SCROLL PROGRESS ── */}
      <div className="scroll-progress">
        <div className="scroll-fill" style={{ width: `${scrollPct}%` }} />
      </div>

      {/* ── BACKGROUND ── */}
      <div className="geo-bg">
        <div className="geo-line gl1" />
        <div className="geo-line gl2" />
        <div className="geo-line gl3" />
        <div className="geo-orb go1" />
        <div className="geo-orb go2" />
        <div className="geo-orb go3" />
      </div>

      {/* ── PAGE CONTENT ── */}
      <div className="edu-root">
        <main className="edu-page">

          {/* HEADER */}
          <header className="page-header">
            <div className="page-eyebrow">PORTFOLIO · ACADEMIC RECORD</div>
            <h1 className="page-title">
              EDU<br />CATION
            </h1>
            <p className="page-sub">
              From foundational excellence to advanced AI specialisation —
              every credential is a building block toward engineering systems that matter.
            </p>
          </header>

          {/* CONTROLS */}
          <div className="controls-bar">
            <div className="view-tabs">
              {VIEWS.map((v) => (
                <button
                  key={v.id}
                  className={`view-tab${view === v.id ? " vtact" : ""}`}
                  onClick={() => setView(v.id)}
                >
                  <span className="view-tab-glyph">{v.glyph}</span>
                  {v.label}
                </button>
              ))}
            </div>
            <div className="filter-tabs">
              {["ALL", "LEGENDARY", "EPIC"].map((f) => (
                <button
                  key={f}
                  className={`filter-tab${filter === f ? " ftact" : ""}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* VIEWS */}
          {view === "grid" && (
            <div className="grid-view">
              {filtered.map((edu) => (
                <DossierCard key={edu.id} edu={edu} isActive={false} onSelect={setActive} />
              ))}
            </div>
          )}

          {view === "timeline" && (
            <TimelineView onSelect={setActive} />
          )}

          {view === "immersive" && (
            <ImmersiveView onSelect={setActive} />
          )}

        </main>

        {/* MODAL */}
        {active && (
          <Modal edu={active} onClose={() => setActive(null)} />
        )}
      </div>
    </>
  );
}