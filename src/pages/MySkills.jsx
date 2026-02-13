"use client";

import React, { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
const C = {
  bg:       "#0f1117",
  surface:  "#14161e",
  surface2: "#1a1d28",
  surface3: "#1e2130",
  border:   "rgba(255,255,255,0.06)",
  border2:  "rgba(255,255,255,0.10)",
  border3:  "rgba(255,255,255,0.15)",
  text:     "#e8e9ee",
  muted:    "#6b7280",
  muted2:   "#9ca3af",
  accent:   "#4f7fff",       // primary blue
  accentDim:"rgba(79,127,255,0.12)",
  green:    "#22c55e",
  greenDim: "rgba(34,197,94,0.10)",
  amber:    "#f59e0b",
  amberDim: "rgba(245,158,11,0.10)",
  rose:     "#f43f5e",
};

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const pillars = [
  {
    id: "fullstack",
    number: "01",
    role: "Full-Stack Engineer",
    domain: "Full-Stack Engineering",
    context: "Production · 2 Internship Projects",
    contextType: "production",
    summary:
      "End-to-end product development across client, server, and database layers. Built and shipped two complete applications in production environments during industry internships.",
    keyTech: ["React", "Node.js", "Express", "MongoDB", "JWT / OAuth", "REST API"],
    outcomes: [
      { metric: "40%", label: "API latency reduction through query optimization and caching" },
      { metric: "2×", label: "Auth system rebuilt — migrated to OAuth 2.0 with zero downtime" },
    ],
    deployments: [
      { name: "ATS Resume Builder", status: "Production", detail: "PDF & DOCX export, real-time preview" },
      { name: "Secure Auth Service", status: "Production", detail: "OAuth 2.0, JWT rotation, rate limiting" },
    ],
    internship: "StudyOwl Education Pvt Ltd",
    accent: C.accent,
    accentDim: C.accentDim,
  },
  {
    id: "ml",
    number: "02",
    role: "ML / AI Engineer",
    domain: "Machine Learning & AI",
    context: "Academic + Internship · 4 Models Shipped",
    contextType: "mixed",
    summary:
      "Applied ML and NLP across classification, detection, and deep learning tasks. Trained, evaluated, and deployed models on real datasets exceeding 50K records.",
    keyTech: ["Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas / NumPy", "OpenCV"],
    outcomes: [
      { metric: "89%", label: "Accuracy on Fake News Detection model using TF-IDF + Logistic Regression" },
      { metric: "92%", label: "CNN accuracy on custom image classification dataset (3K+ samples)" },
    ],
    deployments: [
      { name: "Fake News Classifier", status: "GitHub", detail: "NLP pipeline, TF-IDF, 89% accuracy" },
      { name: "Object Detection API", status: "Deployed", detail: "Flask + OpenCV, real-time inference" },
    ],
    internship: "Blackbucks · SmartBridge AI/ML Internship",
    accent: "#a78bfa",
    accentDim: "rgba(167,139,250,0.10)",
  },
  {
    id: "cloud",
    number: "03",
    role: "Cloud & Infrastructure",
    domain: "Systems & Cloud",
    context: "Self-Directed · Personal Projects",
    contextType: "academic",
    summary:
      "Cloud deployment, containerization, and CI/CD pipeline setup for personal and internship-era projects. Comfortable operating at the infrastructure layer for Node.js and Python services.",
    keyTech: ["AWS EC2 / S3", "Docker", "Kubernetes", "GitHub Actions", "Nginx", "Linux"],
    outcomes: [
      { metric: "3", label: "Microservices containerized and orchestrated with Docker Compose" },
      { metric: "CI/CD", label: "Automated build-test-deploy pipeline with GitHub Actions" },
    ],
    deployments: [
      { name: "AWS EC2 Deployment", status: "Live", detail: "Node.js + Nginx reverse proxy" },
      { name: "Docker Compose Stack", status: "GitHub", detail: "Multi-container app orchestration" },
    ],
    internship: "Personal projects · Online coursework",
    accent: C.green,
    accentDim: C.greenDim,
  },
  {
    id: "foundations",
    number: "04",
    role: "Software Engineer",
    domain: "Programming Foundations",
    context: "Academic + Competitive · LeetCode Top 5%",
    contextType: "academic",
    summary:
      "Strong algorithmic fundamentals developed through competitive programming and academic coursework. Consistent problem-solver with proven performance on structured platforms.",
    keyTech: ["Python", "Java", "JavaScript", "C++", "Data Structures", "OOP"],
    outcomes: [
      { metric: "500+", label: "DSA problems solved across LeetCode and competitive platforms" },
      { metric: "Top 5%", label: "Global LeetCode ranking — consistent active participation" },
    ],
    deployments: [
      { name: "LeetCode Profile", status: "Active", detail: "Top 5% global rank · 365-day streak" },
      { name: "GitHub Portfolio", status: "Public", detail: "15+ repositories across languages" },
    ],
    internship: "College coursework · Self-learning",
    accent: C.amber,
    accentDim: C.amberDim,
  },
];

const tooling = [
  { name: "Git / GitHub", level: "Daily" },
  { name: "Docker",       level: "Regular" },
  { name: "AWS",          level: "Regular" },
  { name: "VS Code",      level: "Daily" },
  { name: "Jupyter",      level: "Regular" },
  { name: "Postman",      level: "Daily" },
  { name: "Linux / CLI",  level: "Regular" },
  { name: "Figma",        level: "Occasional" },
];

const deepening = [
  { area: "System Design",       detail: "Distributed systems, CAP theorem, load balancing patterns" },
  { area: "LLM Engineering",     detail: "Fine-tuning, RAG pipelines, prompt engineering at scale" },
  { area: "Kubernetes (CKA)",    detail: "Working toward Certified Kubernetes Administrator" },
  { area: "TypeScript (Advanced)", detail: "Generics, utility types, strict type architecture" },
];

/* ═══════════════════════════════════════════════════════════════
   SUBCOMPONENTS
═══════════════════════════════════════════════════════════════ */

/** Thin horizontal rule */
function Divider({ style }) {
  return <div style={{ height:"1px", background:C.border, width:"100%", ...style }} />;
}

/** Context badge */
function ContextBadge({ type, children }) {
  const map = {
    production: { bg:"rgba(34,197,94,0.08)",  border:"rgba(34,197,94,0.25)",  color:C.green },
    mixed:      { bg:"rgba(79,127,255,0.08)",  border:"rgba(79,127,255,0.25)",  color:C.accent },
    academic:   { bg:"rgba(245,158,11,0.08)",  border:"rgba(245,158,11,0.25)",  color:C.amber },
  };
  const s = map[type] || map.academic;
  return (
    <span style={{
      display:"inline-flex", alignItems:"center", gap:"0.35rem",
      padding:"0.25rem 0.7rem", borderRadius:"5px",
      background:s.bg, border:`1px solid ${s.border}`,
      fontSize:"0.7rem", fontWeight:600, color:s.color,
      fontFamily:"'DM Mono',monospace", letterSpacing:"0.04em",
      whiteSpace:"nowrap",
    }}>
      <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:s.color, display:"inline-block" }} />
      {children}
    </span>
  );
}

/** Deployment pill */
function DeployBadge({ status }) {
  const map = {
    Production: { color:"#22c55e", bg:"rgba(34,197,94,0.08)",  border:"rgba(34,197,94,0.2)" },
    Deployed:   { color:"#22c55e", bg:"rgba(34,197,94,0.08)",  border:"rgba(34,197,94,0.2)" },
    Live:       { color:"#22c55e", bg:"rgba(34,197,94,0.08)",  border:"rgba(34,197,94,0.2)" },
    GitHub:     { color:"#9ca3af", bg:"rgba(156,163,175,0.07)", border:"rgba(156,163,175,0.18)" },
    Active:     { color:C.accent,  bg:C.accentDim,              border:"rgba(79,127,255,0.25)" },
    Public:     { color:"#9ca3af", bg:"rgba(156,163,175,0.07)", border:"rgba(156,163,175,0.18)" },
  };
  const s = map[status] || map.GitHub;
  return (
    <span style={{
      padding:"0.2rem 0.55rem", borderRadius:"4px",
      background:s.bg, border:`1px solid ${s.border}`,
      fontSize:"0.65rem", fontWeight:700, color:s.color,
      fontFamily:"'DM Mono',monospace", letterSpacing:"0.06em",
    }}>
      {status}
    </span>
  );
}

/* ─── useInView hook ─── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, inView];
}

/* ═══════════════════════════════════════════════════════════════
   PILLAR CARD
═══════════════════════════════════════════════════════════════ */
function PillarCard({ pillar, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:       C.surface,
        border:           `1px solid ${hovered ? pillar.accent + "35" : C.border}`,
        borderRadius:     "16px",
        overflow:         "hidden",
        transition:       "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform:        hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow:        hovered ? `0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px ${pillar.accent}20` : "0 2px 16px rgba(0,0,0,0.3)",
        opacity:          inView ? 1 : 0,
        animation:        inView ? `cardReveal 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s both` : "none",
        position:         "relative",
      }}
    >
      {/* Subtle top accent line */}
      <div style={{ height:"2px", background:`linear-gradient(90deg, ${pillar.accent}, transparent)` }} />

      <div style={{ padding:"1.75rem 2rem 2rem" }}>

        {/* ── Row 1: Number + Domain + Context ── */}
        <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"1rem", marginBottom:"1.25rem", flexWrap:"wrap" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.9rem" }}>
            <span style={{
              fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", fontWeight:600,
              color:pillar.accent, letterSpacing:"0.12em",
              background:pillar.accentDim, border:`1px solid ${pillar.accent}30`,
              padding:"0.2rem 0.55rem", borderRadius:"4px",
            }}>
              {pillar.number}
            </span>
            <div>
              <div style={{ fontSize:"1.15rem", fontWeight:700, color:C.text, fontFamily:"'Instrument Serif',serif", lineHeight:1.2 }}>
                {pillar.domain}
              </div>
              <div style={{ fontSize:"0.78rem", color:C.muted2, fontWeight:500, marginTop:"0.2rem" }}>
                {pillar.role}
              </div>
            </div>
          </div>
          <ContextBadge type={pillar.contextType}>{pillar.context}</ContextBadge>
        </div>

        <Divider style={{ marginBottom:"1.25rem" }} />

        {/* ── Summary ── */}
        <p style={{ fontSize:"0.875rem", color:C.muted2, lineHeight:1.75, marginBottom:"1.5rem", fontWeight:400 }}>
          {pillar.summary}
        </p>

        {/* ── Outcome Metrics ── */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.75rem", marginBottom:"1.5rem" }}>
          {pillar.outcomes.map((o, i) => (
            <div key={i} style={{
              padding:"1rem 1.1rem",
              background:C.surface2,
              border:`1px solid ${C.border}`,
              borderRadius:"10px",
              transition:"border-color 0.25s ease",
              borderColor: hovered ? pillar.accent + "22" : C.border,
            }}>
              <div style={{
                fontFamily:"'Instrument Serif',serif",
                fontSize:"1.6rem", fontWeight:400,
                color:pillar.accent, lineHeight:1, marginBottom:"0.35rem",
                letterSpacing:"-0.02em",
              }}>
                {o.metric}
              </div>
              <div style={{ fontSize:"0.72rem", color:C.muted, lineHeight:1.55, fontWeight:500 }}>
                {o.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Core Technologies ── */}
        <div style={{ marginBottom:"1.5rem" }}>
          <div style={{ fontSize:"0.67rem", fontWeight:700, color:C.muted, letterSpacing:"0.13em", textTransform:"uppercase", fontFamily:"'DM Mono',monospace", marginBottom:"0.6rem" }}>
            Core Technologies
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
            {pillar.keyTech.map((t, i) => (
              <span key={i} style={{
                padding:"0.3rem 0.7rem", borderRadius:"5px",
                background:C.surface3, border:`1px solid ${C.border2}`,
                fontSize:"0.75rem", fontWeight:500, color:C.muted2,
                fontFamily:"'DM Mono',monospace",
                transition:"all 0.2s ease",
                ...(hovered ? { borderColor:pillar.accent+"28", color:C.text } : {}),
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        <Divider style={{ marginBottom:"1.25rem" }} />

        {/* ── Deployments ── */}
        <div style={{ marginBottom:"1.25rem" }}>
          <div style={{ fontSize:"0.67rem", fontWeight:700, color:C.muted, letterSpacing:"0.13em", textTransform:"uppercase", fontFamily:"'DM Mono',monospace", marginBottom:"0.75rem" }}>
            Shipped Work
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:"0.55rem" }}>
            {pillar.deployments.map((d, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"0.825rem", fontWeight:600, color:C.text, marginBottom:"0.1rem" }}>{d.name}</div>
                  <div style={{ fontSize:"0.72rem", color:C.muted }}>{d.detail}</div>
                </div>
                <DeployBadge status={d.status} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Source ── */}
        <div style={{
          display:"flex", alignItems:"center", gap:"0.5rem",
          padding:"0.6rem 0.9rem",
          background:C.bg, border:`1px solid ${C.border}`,
          borderRadius:"8px",
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={pillar.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{pillar.internship}</span>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════ */
export default function Skills() {
  const [scrollPct, setScrollPct] = useState(0);
  const [toolHover, setToolHover] = useState(null);
  const [headerRef, headerIn]     = useInView(0.2);
  const [strengthRef, strengthIn] = useInView(0.2);
  const [toolingRef, toolingIn]   = useInView(0.2);
  const [deepenRef, deepenIn]     = useInView(0.2);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct((window.scrollY / max) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive:true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── GLOBAL CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500;600&family=Geist:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'Geist','DM Sans',system-ui,sans-serif; background:${C.bg}; color:${C.text}; -webkit-font-smoothing:antialiased; }
        ::selection { background:rgba(79,127,255,0.25); }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:${C.bg}; }
        ::-webkit-scrollbar-thumb { background:rgba(79,127,255,0.3); border-radius:3px; }

        @keyframes cardReveal {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeSlide {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes lineGrow {
          from { width:0; }
          to   { width:100%; }
        }
      `}</style>

      {/* ── Scroll progress ── */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"2px", background:C.surface2, zIndex:9999 }}>
        <div style={{ width:`${scrollPct}%`, height:"100%", background:`linear-gradient(90deg, ${C.accent}, #a78bfa)`, transition:"width 0.1s linear" }} />
      </div>

      {/* ── Very subtle background texture ── */}
      <div style={{
        position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(ellipse 70% 50% at 50% 0%, rgba(79,127,255,0.05) 0%, transparent 60%)`,
      }} />

      {/* ═══════ PAGE WRAPPER ═══════ */}
      <div style={{ maxWidth:"1240px", margin:"0 auto", padding:"0 1.5rem", position:"relative", zIndex:1 }}>

        {/* ══════════════════════ HEADER ══════════════════════ */}
        <header
          ref={headerRef}
          style={{ padding:"5rem 0 3.5rem", borderBottom:`1px solid ${C.border}` }}
        >
          {/* Label */}
          <div style={{
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeSlide 0.5s cubic-bezier(0.22,1,0.36,1) both" : "none",
            display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"1.5rem",
          }}>
            <div style={{ width:"20px", height:"1px", background:C.accent }} />
            <span style={{
              fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", fontWeight:600,
              letterSpacing:"0.18em", textTransform:"uppercase", color:C.accent,
            }}>
              Technical Profile · 2026
            </span>
          </div>

          {/* Headline */}
          <div style={{
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.08s both" : "none",
          }}>
            <h1 style={{
              fontFamily:"'Instrument Serif',serif",
              fontSize:"clamp(2.4rem,5vw,3.8rem)", fontWeight:400,
              color:C.text, lineHeight:1.1, letterSpacing:"-0.025em",
              marginBottom:"1rem",
            }}>
              Skills &amp; Capabilities
            </h1>
            <p style={{ fontSize:"1rem", color:C.muted2, lineHeight:1.75, maxWidth:"680px", fontWeight:400 }}>
              A structured overview of technical competencies organized by domain, with
              production context, measurable outcomes, and experience classification.
              Last updated February 2026.
            </p>
          </div>

          {/* Quick stats row */}
          <div style={{
            display:"flex", gap:"2.5rem", marginTop:"2.5rem", flexWrap:"wrap",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.18s both" : "none",
          }}>
            {[
              { value:"4",    label:"Capability Domains" },
              { value:"3",    label:"Industry Internships" },
              { value:"15+",  label:"Projects Shipped" },
              { value:"20+",  label:"Certifications" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.8rem", color:C.text, letterSpacing:"-0.03em" }}>{s.value}</div>
                <div style={{ fontSize:"0.75rem", color:C.muted, fontWeight:500, marginTop:"0.15rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ══════════════════════ PRIMARY STRENGTH BANNER ══════════════════════ */}
        <section
          ref={strengthRef}
          style={{ padding:"3rem 0" }}
        >
          <div style={{
            background:     `linear-gradient(135deg, rgba(79,127,255,0.07) 0%, rgba(167,139,250,0.04) 100%)`,
            border:         `1px solid rgba(79,127,255,0.2)`,
            borderRadius:   "16px",
            padding:        "2rem 2.5rem",
            display:        "flex", alignItems:"center", gap:"2rem", flexWrap:"wrap",
            opacity:        strengthIn ? 1 : 0,
            animation:      strengthIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}>
            {/* Label */}
            <div style={{ flexShrink:0 }}>
              <div style={{ fontSize:"0.67rem", fontWeight:700, color:C.accent, letterSpacing:"0.18em", fontFamily:"'DM Mono',monospace", textTransform:"uppercase", marginBottom:"0.5rem" }}>
                Primary Strength
              </div>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", color:C.text, letterSpacing:"-0.02em" }}>
                Full-Stack × AI Integration
              </div>
            </div>

            <div style={{ width:"1px", height:"48px", background:C.border2, flexShrink:0, display:"block" }} />

            <p style={{ fontSize:"0.875rem", color:C.muted2, lineHeight:1.75, flex:1, minWidth:"260px" }}>
              The highest-leverage combination in my stack: building production-grade web applications
              that incorporate ML inference — from model training through REST API deployment to
              user-facing interface. Demonstrated across internship projects at SmartBridge and StudyOwl.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem", flexShrink:0 }}>
              {["React × Flask API", "MongoDB × Python pipeline", "OAuth × JWT security"].map((t, i) => (
                <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                  <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:C.accent, flexShrink:0 }} />
                  <span style={{ fontSize:"0.775rem", color:C.muted2, fontFamily:"'DM Mono',monospace" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ EXPERIENCE LEGEND ══════════════════════ */}
        <div style={{ display:"flex", gap:"1.5rem", marginBottom:"2rem", flexWrap:"wrap", alignItems:"center" }}>
          <span style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace", letterSpacing:"0.08em" }}>CONTEXT KEY</span>
          {[
            { type:"production", label:"Production · Internship" },
            { type:"mixed",      label:"Mixed · Internship + Academic" },
            { type:"academic",   label:"Academic · Self-Directed" },
          ].map(b => <ContextBadge key={b.type} type={b.type}>{b.label}</ContextBadge>)}
        </div>

        {/* ══════════════════════ PILLARS GRID ══════════════════════ */}
        <section style={{ paddingBottom:"3rem" }}>
          <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
            gap:"1.25rem",
          }}>
            {pillars.map((p, i) => <PillarCard key={p.id} pillar={p} index={i} />)}
          </div>
        </section>

        {/* ══════════════════════ TOOLING FAMILIARITY ══════════════════════ */}
        <section ref={toolingRef} style={{ paddingBottom:"3rem" }}>
          <div style={{
            borderTop:`1px solid ${C.border}`, paddingTop:"2.5rem",
            opacity: toolingIn ? 1 : 0,
            animation: toolingIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem", marginBottom:"1.75rem" }}>
              <div>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:C.muted, marginBottom:"0.5rem" }}>Section 05</div>
                <h2 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", fontWeight:400, color:C.text, letterSpacing:"-0.02em" }}>Tooling Familiarity</h2>
              </div>
              <div style={{ display:"flex", gap:"0.75rem", alignItems:"center" }}>
                {["Daily","Regular","Occasional"].map((l, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.35rem" }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background: l === "Daily" ? C.accent : l === "Regular" ? C.green : C.amber }} />
                    <span style={{ fontSize:"0.7rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display:"flex", flexWrap:"wrap", gap:"0.6rem" }}>
              {tooling.map((t, i) => {
                const levelColor = t.level === "Daily" ? C.accent : t.level === "Regular" ? C.green : C.amber;
                const levelBg    = t.level === "Daily" ? C.accentDim : t.level === "Regular" ? C.greenDim : C.amberDim;
                const isH = toolHover === i;
                return (
                  <div
                    key={i}
                    onMouseEnter={() => setToolHover(i)}
                    onMouseLeave={() => setToolHover(null)}
                    style={{
                      display:"flex", alignItems:"center", gap:"0.6rem",
                      padding:"0.55rem 1rem",
                      background: isH ? levelBg : C.surface,
                      border:`1px solid ${isH ? levelColor + "35" : C.border}`,
                      borderRadius:"8px",
                      transition:"all 0.22s ease",
                      cursor:"default",
                      animation: toolingIn ? `cardReveal 0.45s cubic-bezier(0.22,1,0.36,1) ${i * 0.04}s both` : "none",
                    }}
                  >
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:levelColor, flexShrink:0 }} />
                    <span style={{ fontSize:"0.825rem", fontWeight:500, color: isH ? C.text : C.muted2, fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}>
                      {t.name}
                    </span>
                    {isH && (
                      <span style={{ fontSize:"0.65rem", color:levelColor, fontFamily:"'DM Mono',monospace", letterSpacing:"0.06em" }}>
                        {t.level}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════ CURRENTLY DEEPENING ══════════════════════ */}
        <section ref={deepenRef} style={{ paddingBottom:"5rem" }}>
          <div style={{
            borderTop:`1px solid ${C.border}`, paddingTop:"2.5rem",
            opacity: deepenIn ? 1 : 0,
            animation: deepenIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}>
            <div style={{ marginBottom:"1.75rem" }}>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:C.muted, marginBottom:"0.5rem" }}>Section 06</div>
              <h2 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", fontWeight:400, color:C.text, letterSpacing:"-0.02em", marginBottom:"0.5rem" }}>
                Currently Deepening
              </h2>
              <p style={{ fontSize:"0.825rem", color:C.muted, lineHeight:1.65, maxWidth:"520px" }}>
                Active learning areas with intentional focus — these will move to core pillars within 6 months.
              </p>
            </div>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap:"0.9rem" }}>
              {deepening.map((d, i) => (
                <DeepCard key={i} item={d} delay={i * 0.08} triggered={deepenIn} />
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════ FOOTER STRIP ══════════════════════ */}
        <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 0", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.6rem" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:C.green, animation:"none" }} />
            <span style={{ fontSize:"0.75rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>Open to full-time roles · Immediate availability</span>
          </div>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{ fontSize:"0.75rem", color:C.muted, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              Email
            </a>
            <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ fontSize:"0.75rem", color:C.muted, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" target="_blank" rel="noopener noreferrer" style={{ fontSize:"0.75rem", color:C.muted, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = C.text}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─── Currently Deepening card ─── */
function DeepCard({ item, delay, triggered }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:"1.1rem 1.25rem",
        background: hovered ? C.surface2 : C.surface,
        border:`1px solid ${hovered ? C.border3 : C.border}`,
        borderRadius:"10px",
        transition:"all 0.25s ease",
        opacity: triggered ? 1 : 0,
        animation: triggered ? `cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) ${delay}s both` : "none",
        cursor:"default",
        position:"relative", overflow:"hidden",
      }}
    >
      {/* Thin left accent */}
      <div style={{ position:"absolute", left:0, top:"20%", bottom:"20%", width:"2px", background:C.accent, borderRadius:"1px", opacity: hovered ? 1 : 0.4, transition:"opacity 0.25s" }} />
      <div style={{ paddingLeft:"0.75rem" }}>
        <div style={{ fontSize:"0.875rem", fontWeight:600, color:C.text, marginBottom:"0.35rem" }}>{item.area}</div>
        <div style={{ fontSize:"0.775rem", color:C.muted, lineHeight:1.6 }}>{item.detail}</div>
      </div>
    </div>
  );
}