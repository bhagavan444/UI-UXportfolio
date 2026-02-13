"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/bhagavanresume.pdf";
import {
  Download, Github, Linkedin, Mail, Phone, ArrowRight,
  ExternalLink, CheckCircle, Verified, ChevronRight, ChevronLeft,
  Sparkles, MapPin
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   DESIGN SYSTEM TOKENS
───────────────────────────────────────────────────────────────── */
const T = {
  bg:       "#0e0e11",
  surface:  "#16161a",
  surface2: "#1c1c22",
  border:   "rgba(255,255,255,0.07)",
  border2:  "rgba(255,255,255,0.12)",
  text:     "#f0f0f0",
  muted:    "#6e6e7a",
  muted2:   "#9898a8",
  accent:   "#5b7fff",
  accent2:  "#8b5cf6",
  green:    "#34d399",
  gold:     "#f59e0b",
};

/* ─────────────────────────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: ${T.bg};
    color: ${T.text};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  ::selection { background: rgba(91,127,255,0.3); color: #fff; }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${T.bg}; }
  ::-webkit-scrollbar-thumb { background: rgba(91,127,255,0.4); border-radius: 3px; }

  /* ── Keyframes ── */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity:0; } to { opacity:1; }
  }
  @keyframes meshMove {
    0%,100% { background-position: 0% 50%; }
    50%      { background-position: 100% 50%; }
  }
  @keyframes float {
    0%,100% { transform: translateY(0px); }
    50%      { transform: translateY(-12px); }
  }
  @keyframes pulse-ring {
    0%   { box-shadow: 0 0 0 0 rgba(91,127,255,0.3); }
    70%  { box-shadow: 0 0 0 18px rgba(91,127,255,0); }
    100% { box-shadow: 0 0 0 0 rgba(91,127,255,0); }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes counter {
    from { opacity:0; transform: scale(0.6); }
    to   { opacity:1; transform: scale(1); }
  }
  @keyframes glowPulse {
    0%,100% { opacity:0.4; }
    50%      { opacity:0.8; }
  }
  @keyframes rotateSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes slideIn {
    from { opacity:0; transform: translateX(-20px); }
    to   { opacity:1; transform: translateX(0); }
  }
  @keyframes cursorGlow {
    0%,100% { transform: scale(1); opacity:0.6; }
    50%      { transform: scale(1.4); opacity:1; }
  }

  /* ── Utility classes ── */
  .fade-up   { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }
  .fade-in   { animation: fadeIn 0.6s ease both; }
  .d1 { animation-delay:0.05s; }
  .d2 { animation-delay:0.12s; }
  .d3 { animation-delay:0.20s; }
  .d4 { animation-delay:0.30s; }
  .d5 { animation-delay:0.42s; }
  .d6 { animation-delay:0.55s; }
  .d7 { animation-delay:0.68s; }

  .glass {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid ${T.border};
    border-radius: 20px;
  }

  .hover-lift {
    transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .hover-lift:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 64px rgba(0,0,0,0.5);
    border-color: rgba(91,127,255,0.25);
  }

  .btn-primary {
    display: inline-flex; align-items:center; gap:0.5rem;
    background: ${T.accent};
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600; font-size: 0.9rem;
    padding: 0.75rem 1.6rem;
    border-radius: 12px; border: none; cursor:pointer;
    text-decoration:none; letter-spacing:0.01em;
    transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
    box-shadow: 0 4px 24px rgba(91,127,255,0.35);
    white-space:nowrap;
  }
  .btn-primary:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 32px rgba(91,127,255,0.5);
    background: #7090ff;
  }

  .btn-ghost {
    display: inline-flex; align-items:center; gap:0.5rem;
    background: transparent;
    color: ${T.muted2};
    font-family: 'DM Sans', sans-serif;
    font-weight: 500; font-size: 0.9rem;
    padding: 0.75rem 1.6rem;
    border-radius: 12px;
    border: 1px solid ${T.border2};
    cursor:pointer; text-decoration:none; letter-spacing:0.01em;
    transition: all 0.25s ease;
    white-space:nowrap;
  }
  .btn-ghost:hover {
    color: #fff;
    border-color: rgba(255,255,255,0.25);
    background: rgba(255,255,255,0.05);
  }

  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem; font-weight:600;
    letter-spacing: 0.18em; text-transform:uppercase;
    color: ${T.accent};
  }

  .display-heading {
    font-family: 'DM Serif Display', serif;
    line-height: 1.05;
    letter-spacing: -0.03em;
  }

  /* Marquee */
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 35s linear infinite;
  }
  .marquee-track:hover { animation-play-state: paused; }

  /* Skill card hover */
  .skill-card { transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
  .skill-card:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(91,127,255,0.3) !important;
    background: rgba(91,127,255,0.06) !important;
  }

  /* Nav link */
  .nav-link {
    font-size:0.875rem; font-weight:500; color:${T.muted2};
    text-decoration:none; padding:0.4rem 0.8rem;
    border-radius:8px; transition:all 0.2s ease;
  }
  .nav-link:hover { color:#fff; background:rgba(255,255,255,0.06); }

  /* Badge */
  .badge {
    display:inline-flex; align-items:center; gap:0.4rem;
    padding:0.3rem 0.75rem; border-radius:999px;
    font-size:0.72rem; font-weight:600;
    letter-spacing:0.04em;
  }

  /* Timeline item */
  .timeline-item { transition: all 0.3s ease; }
  .timeline-item:hover .timeline-dot { box-shadow: 0 0 0 8px rgba(91,127,255,0.15); }

  /* Testimonial card */
  .testimonial-slide {
    transition: all 0.5s cubic-bezier(0.34,1,0.64,1);
  }

  /* Cursor glow */
  #cursor-glow {
    position: fixed; pointer-events:none;
    width:400px; height:400px;
    border-radius:50%;
    background: radial-gradient(circle, rgba(91,127,255,0.06) 0%, transparent 70%);
    transform: translate(-50%,-50%);
    transition: left 0.08s ease, top 0.08s ease;
    z-index:0;
  }

  /* Number counter animation */
  .stat-number {
    animation: counter 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
  }

  @media (max-width:1024px) {
    .hero-grid { grid-template-columns:1fr !important; }
    .hero-image-col { display:none !important; }
  }
  @media (max-width:768px) {
    .nav-links { display:none !important; }
    .cta-row { flex-direction:column !important; }
    .trust-row { flex-wrap:wrap !important; gap:0.75rem !important; }
    .metrics-grid { grid-template-columns:1fr 1fr !important; }
    .skills-grid { grid-template-columns:1fr !important; }
    .footer-links { flex-direction:column !important; gap:1rem !important; }
  }
`;

/* ─────────────────────────────────────────────────────────────────
   HELPER: ANIMATED COUNTER
───────────────────────────────────────────────────────────────── */
function AnimCounter({ target, suffix = "", duration = 1400, triggered }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!triggered || started.current) return;
    started.current = true;
    const num = parseInt(target.replace(/\D/g, ""), 10);
    const step = Math.ceil(num / (duration / 16));
    let cur = 0;
    const id = setInterval(() => {
      cur = Math.min(cur + step, num);
      setVal(cur);
      if (cur >= num) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [triggered]);

  return <span>{val}{suffix}</span>;
}

/* ─────────────────────────────────────────────────────────────────
   HOOK: INTERSECTION OBSERVER
───────────────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
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
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function FinalHome() {
  const navigate = useNavigate();

  // Navbar scroll state
  const [scrolled, setScrolled]   = useState(false);
  const [scrollPct, setScrollPct] = useState(0);

  // Role cycling (elegant fade, not typing)
  const roles = ["Full-Stack Engineer", "AI/ML Architect", "Cloud Systems Expert", "Systems Designer"];
  const [roleIdx, setRoleIdx]       = useState(0);
  const [roleFading, setRoleFading] = useState(false);

  // Testimonial slider
  const [testIdx, setTestIdx] = useState(0);

  // Cursor
  const cursorRef = useRef(null);

  /* ── Scroll Effects ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct((y / max) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Cursor Glow ── */
  useEffect(() => {
    const onMove = (e) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Role Cycling ── */
  useEffect(() => {
    const id = setInterval(() => {
      setRoleFading(true);
      setTimeout(() => {
        setRoleIdx(p => (p + 1) % roles.length);
        setRoleFading(false);
      }, 350);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  /* ── Testimonial Auto ── */
  useEffect(() => {
    const id = setInterval(() => setTestIdx(p => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  /* ─── InView refs ─── */
  const [metricsRef, metricsIn]       = useInView();
  const [skillsRef,  skillsIn]        = useInView();
  const [achievRef,  achievIn]        = useInView();
  const [testRef,    testIn]          = useInView();
  const [projectRef, projectIn]       = useInView();
  const [ctaRef,     ctaIn]           = useInView();

  /* ─────────────────────────────────── DATA ───────────────────── */
  const metrics = [
    { value: "15", suffix: "+", label: "Production Projects", sub: "Shipped across 3 internships", color: T.accent },
    { value: "20", suffix: "+", label: "Certifications",      sub: "AWS, Azure, GCP & more",       color: T.accent2 },
    { value: "30", suffix: "+", label: "Tech Stack",          sub: "Languages, frameworks, tools",  color: T.green },
    { value: "100", suffix: "%", label: "Client Satisfaction", sub: "Zero bug production record",   color: T.gold },
  ];

  const skillGroups = [
    {
      category: "AI & Machine Learning",
      color: T.accent2,
      dot: "#8b5cf6",
      skills: ["TensorFlow", "PyTorch", "NLP", "LLMs", "Computer Vision", "Deep Learning"],
      desc: "Building intelligent systems that learn and scale in production.",
    },
    {
      category: "Full-Stack Engineering",
      color: T.accent,
      dot: "#5b7fff",
      skills: ["React", "Node.js", "Python", "TypeScript", "REST/GraphQL", "Microservices"],
      desc: "End-to-end product development from database to polished UI.",
    },
    {
      category: "Cloud & DevOps",
      color: T.green,
      dot: "#34d399",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      desc: "Scalable, resilient infrastructure built for high availability.",
    },
    {
      category: "Data & Architecture",
      color: T.gold,
      dot: "#f59e0b",
      skills: ["PostgreSQL", "MongoDB", "Redis", "System Design", "Kafka", "Elasticsearch"],
      desc: "Designing data layers that power real-time, high-throughput systems.",
    },
  ];

  const techStack = [
    "React", "Node.js", "Python", "TypeScript", "Docker",
    "Kubernetes", "AWS", "TensorFlow", "MongoDB", "PostgreSQL",
    "Azure", "Redis", "Next.js", "GraphQL", "FastAPI",
    "React", "Node.js", "Python", "TypeScript", "Docker",
    "Kubernetes", "AWS", "TensorFlow", "MongoDB", "PostgreSQL",
    "Azure", "Redis", "Next.js", "GraphQL", "FastAPI",
  ];

  const achievements = [
    { year: "2025", title: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", color: T.gold },
    { year: "2025", title: "Azure AI Engineer Associate",          issuer: "Microsoft Azure",     color: T.accent },
    { year: "2024", title: "Google Cloud Professional",            issuer: "Google Cloud",        color: T.green },
    { year: "2024", title: "Top 5% — LeetCode",                   issuer: "500+ Problems Solved", color: T.accent2 },
    { year: "2024", title: "365-Day Coding Streak",               issuer: "Continuous Excellence", color: "#f59e0b" },
  ];

  const testimonials = [
    {
      quote: "Rare combination of technical depth and communication clarity. Delivered our ML pipeline two weeks ahead of schedule, with documentation that actually made sense.",
      name: "Sarah Chen", role: "CTO, TechVision Inc.", avatar: "SC", color: T.accent,
    },
    {
      quote: "Transformed our legacy monolith into a modern microservices architecture with minimal downtime. The kind of engineer you build a team around.",
      name: "Priya Sharma", role: "VP of Engineering, CloudNative Co.", avatar: "PS", color: T.accent2,
    },
    {
      quote: "His ability to bridge AI research and production engineering is exceptional. Brought measurable impact within the first sprint.",
      name: "Michael Rodriguez", role: "Director, Engineering, DataForge", avatar: "MR", color: T.green,
    },
  ];

const featuredProject = {
  title: "Real-Time Leave Automation System",
  tag: "Low-Code × Enterprise Automation × Microsoft 365",
  desc: "Enterprise-grade leave management system built using Microsoft Power Apps and Power Automate. Automates leave requests, multi-level approvals, real-time status tracking, and HR reporting dashboards — integrated with SharePoint and Microsoft Teams for seamless organizational workflow.",
  stats: [
    { label: "Approval Time Reduced", value: "65%" },
    { label: "Manual Processing Eliminated", value: "90%" },
    { label: "User Adoption", value: "100+ Employees" },
  ],
  tech: [
    "Microsoft Power Apps",
    "Power Automate",
    "SharePoint",
    "Microsoft 365",
    "Dataverse",
    "Power BI"
  ],
  color: T.accent,
};


  /* ════════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════════ */
  return (
    <>
      <style>{GLOBAL_CSS}</style>

      {/* Cursor glow */}
      <div id="cursor-glow" ref={cursorRef} />

      {/* Scroll progress */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"2px", background:T.surface, zIndex:9999 }}>
        <div style={{ width:`${scrollPct}%`, height:"100%", background:`linear-gradient(90deg, ${T.accent}, ${T.accent2})`, transition:"width 0.1s linear" }} />
      </div>

      {/* ══════ NAVBAR ══════ */}
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:900,
        padding:"0 2rem", height:"60px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        background: scrolled ? "rgba(14,14,17,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${T.border}` : "1px solid transparent",
        transition:"all 0.4s ease",
        maxWidth:"100vw",
      }}>
        <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.15rem", fontWeight:400, color:T.text, letterSpacing:"-0.02em" }}>
          Bhagavan<span style={{ color:T.accent }}>.</span>
        </div>
        <div className="nav-links" style={{ display:"flex", alignItems:"center", gap:"0.25rem" }}>
          {["About","Projects","Skills","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </div>
        <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
            <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:T.green, animation:"pulse-ring 2.5s ease-in-out infinite" }} />
            <span style={{ fontSize:"0.75rem", fontWeight:600, color:T.green, fontFamily:"'JetBrains Mono',monospace" }}>Available</span>
          </div>
          <a href={resumePdf} download className="btn-ghost" style={{ padding:"0.4rem 1rem", fontSize:"0.8rem" }}>
            <Download size={13} /> Resume
          </a>
        </div>
      </nav>

      {/* ══════ MAIN ══════ */}
      <main style={{ position:"relative", zIndex:1 }}>

        {/* ─── GRADIENT MESH BG ─── */}
        <div style={{
          position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
          background:`
            radial-gradient(ellipse 80% 60% at 15% 10%, rgba(91,127,255,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 85% 85%, rgba(139,92,246,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 60% 40%, rgba(52,211,153,0.04) 0%, transparent 55%)
          `,
        }} />

        {/* ─────────────────── HERO ─────────────────── */}
        <section id="about" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", zIndex:1 }}>
          {/* Subtle grid overlay */}
          <div style={{
            position:"absolute", inset:0, zIndex:0, pointerEvents:"none",
            backgroundImage:`
              linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
            `,
            backgroundSize:"64px 64px",
          }} />

          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem", width:"100%", position:"relative", zIndex:1, paddingTop:"80px", paddingBottom:"40px" }}>
            <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1fr 420px", gap:"6rem", alignItems:"center" }}>

              {/* LEFT: Content */}
              <div>
                {/* Availability badge */}
                <div className="fade-up d1" style={{ marginBottom:"2rem" }}>
                  <span className="badge" style={{ background:"rgba(52,211,153,0.08)", border:`1px solid rgba(52,211,153,0.2)`, color:T.green }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:T.green, animation:"pulse-ring 2s ease-in-out infinite" }} />
                    Open to full-time roles · 2026 Graduate
                    <MapPin size={11} />
                    India / Remote
                  </span>
                </div>

                {/* Headline */}
                <h1 className="display-heading fade-up d2" style={{ fontSize:"clamp(3rem,6vw,5.2rem)", marginBottom:"0.5rem", color:T.text }}>
                  Siva Satya Sai
                </h1>
                <h1 className="display-heading fade-up d3" style={{ fontSize:"clamp(3rem,6vw,5.2rem)", marginBottom:"1.5rem" }}>
                  <span style={{ color:T.accent }}>Bhagavan</span>
                </h1>

                {/* Role transition */}
                <div className="fade-up d4" style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"2rem" }}>
                  <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.8rem", color:T.muted, letterSpacing:"0.12em" }}>CURRENTLY →</span>
                  <span style={{
                    fontFamily:"'DM Sans',sans-serif", fontSize:"1.05rem", fontWeight:600,
                    color:T.muted2,
                    opacity: roleFading ? 0 : 1,
                    transform: roleFading ? "translateY(8px)" : "translateY(0)",
                    transition:"opacity 0.35s ease, transform 0.35s ease",
                  }}>
                    {roles[roleIdx]}
                  </span>
                </div>

                {/* Description */}
                <p className="fade-up d5" style={{ fontSize:"1.1rem", lineHeight:1.75, color:T.muted2, maxWidth:"560px", marginBottom:"2.5rem", fontWeight:400 }}>
                  Elite software engineer with <strong style={{ color:T.text, fontWeight:600 }}>3 industry internships</strong> and
                  {" "}<strong style={{ color:T.text, fontWeight:600 }}>15+ production systems</strong> shipped.
                  Specializing in AI-powered applications and scalable cloud architecture that drives real business outcomes.
                </p>

                {/* CTAs */}
                <div className="cta-row fade-up d6" style={{ display:"flex", gap:"0.9rem", marginBottom:"3rem", flexWrap:"wrap", alignItems:"center" }}>
                  <button className="btn-primary" onClick={() => navigate('/projects')}>
                    View Work <ArrowRight size={15} />
                  </button>
                  <a href="mailto:g.sivasatyasaibhagavan@gmail.com" className="btn-ghost">
                    <Mail size={14} /> Get in Touch
                  </a>
                  <a href={resumePdf} download className="btn-ghost">
                    <Download size={14} /> Resume
                  </a>
                </div>

                {/* Trust indicators */}
                <div className="trust-row fade-up d7" style={{ display:"flex", gap:"1.5rem", alignItems:"center", paddingTop:"2rem", borderTop:`1px solid ${T.border}` }}>
                  {[
                    { icon:"🏅", text:"20+ Certifications" },
                    { icon:"🚀", text:"15+ Projects" },
                    { icon:"⭐", text:"LeetCode Top 5%" },
                  ].map((t, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                      <span style={{ fontSize:"1rem" }}>{t.icon}</span>
                      <span style={{ fontSize:"0.8rem", fontWeight:500, color:T.muted2 }}>{t.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: Portrait */}
              <div className="hero-image-col fade-in d3" style={{ position:"relative" }}>
                {/* Glow behind */}
                <div style={{
                  position:"absolute", inset:"-20px",
                  background:`radial-gradient(ellipse at center, rgba(91,127,255,0.18) 0%, transparent 70%)`,
                  animation:"glowPulse 4s ease-in-out infinite",
                  borderRadius:"32px",
                  zIndex:0,
                }} />

                {/* Card */}
                <div style={{
                  position:"relative", zIndex:1,
                  borderRadius:"28px",
                  border:`1px solid ${T.border2}`,
                  overflow:"hidden",
                  background:T.surface,
                  boxShadow:`0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)`,
                  animation:"float 7s ease-in-out infinite",
                }}>
                  <img
                    src={profileImg} alt="Siva Satya Sai Bhagavan"
                    style={{ width:"100%", display:"block", aspectRatio:"4/5", objectFit:"cover" }}
                  />
                  {/* Overlay gradient */}
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(14,14,17,0.9) 0%, rgba(14,14,17,0.1) 50%, transparent 100%)" }} />

                  {/* Floating status chip */}
                  <div style={{
                    position:"absolute", top:"20px", left:"50%", transform:"translateX(-50%)",
                    background:"rgba(14,14,17,0.9)", border:`1px solid ${T.border2}`,
                    backdropFilter:"blur(20px)", borderRadius:"999px",
                    padding:"0.45rem 1rem", display:"flex", alignItems:"center", gap:"0.5rem",
                    whiteSpace:"nowrap",
                  }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:T.green, animation:"pulse-ring 2s ease-in-out infinite" }} />
                    <span style={{ fontSize:"0.7rem", fontWeight:600, color:T.text, fontFamily:"'JetBrains Mono',monospace" }}>AVAILABLE · IMMEDIATE</span>
                  </div>

                  {/* Bottom info bar */}
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"1.5rem" }}>
                    <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1.3rem", color:"#fff", marginBottom:"0.3rem" }}>
                      Bhagavan
                    </div>
                    <div style={{ fontSize:"0.8rem", color:T.muted2, marginBottom:"1rem" }}>Full-Stack · AI/ML · Cloud</div>
                    <div style={{ display:"flex", gap:"0.6rem" }}>
                      {[
                        { icon: Github,   href:"https://github.com/bhagavan444",                                               color:"#fff" },
                        { icon: Linkedin, href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/", color:"#0a91fb" },
                        { icon: Mail,     href:"mailto:g.sivasatyasaibhagavan@gmail.com",                                      color:T.accent },
                      ].map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                          style={{
                            width:"36px", height:"36px", borderRadius:"10px",
                            background:"rgba(255,255,255,0.08)", border:`1px solid ${T.border}`,
                            display:"flex", alignItems:"center", justifyContent:"center",
                            color:s.color, textDecoration:"none",
                            transition:"all 0.25s ease",
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1.12)"; }}
                          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = "scale(1)"; }}
                        >
                          <s.icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── METRICS ─────────────────── */}
        <section ref={metricsRef} style={{ padding:"6rem 0", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
            <div className="metrics-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.25rem" }}>
              {metrics.map((m, i) => (
                <div key={i} className="glass hover-lift" style={{
                  padding:"2rem 1.75rem",
                  opacity: metricsIn ? 1 : 0,
                  animation: metricsIn ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s both` : "none",
                }}>
                  <div className="stat-number" style={{
                    fontFamily:"'DM Serif Display',serif",
                    fontSize:"2.8rem", fontWeight:400,
                    color:m.color, marginBottom:"0.5rem",
                    letterSpacing:"-0.03em",
                    animation: metricsIn ? `counter 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.3 + i * 0.08}s both` : "none",
                  }}>
                    <AnimCounter target={m.value} suffix={m.suffix} triggered={metricsIn} />
                  </div>
                  <div style={{ fontSize:"0.925rem", fontWeight:600, color:T.text, marginBottom:"0.35rem" }}>{m.label}</div>
                  <div style={{ fontSize:"0.775rem", color:T.muted, lineHeight:1.5 }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── TECH MARQUEE ─────────────────── */}
        <section style={{ padding:"3rem 0 5rem", overflow:"hidden", position:"relative", zIndex:1 }}>
          <div style={{ marginBottom:"1.5rem", textAlign:"center" }}>
            <span className="section-label">Technology Arsenal</span>
          </div>
          {/* Fade masks */}
          <div style={{ position:"relative" }}>
            <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"140px", background:`linear-gradient(90deg, ${T.bg}, transparent)`, zIndex:2, pointerEvents:"none" }} />
            <div style={{ position:"absolute", right:0, top:0, bottom:0, width:"140px", background:`linear-gradient(270deg, ${T.bg}, transparent)`, zIndex:2, pointerEvents:"none" }} />
            <div style={{ overflow:"hidden" }}>
              <div className="marquee-track">
                {techStack.map((t, i) => (
                  <div key={i} style={{
                    display:"inline-flex", alignItems:"center", gap:"0.6rem",
                    margin:"0 0.75rem", padding:"0.6rem 1.25rem",
                    background:T.surface, border:`1px solid ${T.border}`,
                    borderRadius:"999px", whiteSpace:"nowrap",
                    fontSize:"0.85rem", fontWeight:500, color:T.muted2,
                    transition:"all 0.25s ease", cursor:"default",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = T.accent; e.currentTarget.style.background = "rgba(91,127,255,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = T.muted2; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.surface; }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── SKILLS ─────────────────── */}
        <section id="skills" ref={skillsRef} style={{ padding:"6rem 0", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
            <div style={{ marginBottom:"3.5rem" }}>
              <span className="section-label" style={{ display:"block", marginBottom:"1rem" }}>Expertise</span>
              <h2 className="display-heading" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:T.text, maxWidth:"500px" }}>
                Skills &amp; Competencies
              </h2>
            </div>

            <div className="skills-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"1.25rem" }}>
              {skillGroups.map((g, i) => (
                <div key={i} className="skill-card glass" style={{
                  padding:"2rem",
                  opacity: skillsIn ? 1 : 0,
                  animation: skillsIn ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both` : "none",
                  cursor:"default",
                }}>
                  {/* Header */}
                  <div style={{ display:"flex", alignItems:"center", gap:"0.75rem", marginBottom:"1rem" }}>
                    <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:g.dot, boxShadow:`0 0 12px ${g.dot}80` }} />
                    <span style={{ fontSize:"0.875rem", fontWeight:700, color:T.text }}>{g.category}</span>
                  </div>
                  {/* Description */}
                  <p style={{ fontSize:"0.825rem", color:T.muted, lineHeight:1.6, marginBottom:"1.25rem" }}>{g.desc}</p>
                  {/* Skill chips */}
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                    {g.skills.map((sk, j) => (
                      <span key={j} style={{
                        padding:"0.3rem 0.75rem",
                        borderRadius:"6px",
                        background:`rgba(${g.color === T.accent ? "91,127,255" : g.color === T.accent2 ? "139,92,246" : g.color === T.green ? "52,211,153" : "245,158,11"},0.1)`,
                        border:`1px solid rgba(${g.color === T.accent ? "91,127,255" : g.color === T.accent2 ? "139,92,246" : g.color === T.green ? "52,211,153" : "245,158,11"},0.2)`,
                        fontSize:"0.75rem", fontWeight:500,
                        color:g.color,
                        fontFamily:"'JetBrains Mono',monospace",
                      }}>
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── FEATURED PROJECT ─────────────────── */}
        <section ref={projectRef} style={{ padding:"6rem 0", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
            <div style={{ marginBottom:"3rem" }}>
              <span className="section-label" style={{ display:"block", marginBottom:"1rem" }}>Featured Work</span>
              <h2 className="display-heading" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:T.text }}>
                Selected Project
              </h2>
            </div>

            <div style={{
              borderRadius:"24px", overflow:"hidden",
              border:`1px solid ${T.border2}`,
              background:T.surface,
              opacity: projectIn ? 1 : 0,
              animation: projectIn ? "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both" : "none",
            }}>
              {/* Top banner */}
              <div style={{
                height:"220px", position:"relative", overflow:"hidden",
                background:`linear-gradient(135deg, rgba(91,127,255,0.15), rgba(139,92,246,0.1), rgba(52,211,153,0.08))`,
                borderBottom:`1px solid ${T.border}`,
                display:"flex", alignItems:"center", justifyContent:"center",
              }}>
                {/* Abstract grid */}
                <div style={{
                  position:"absolute", inset:0,
                  backgroundImage:`
                    linear-gradient(rgba(91,127,255,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(91,127,255,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize:"40px 40px",
                }} />
                {/* Orbs */}
                {[
                  { size:200, x:"10%", y:"50%", c:T.accent, o:0.15 },
                  { size:160, x:"70%", y:"30%", c:T.accent2, o:0.12 },
                  { size:120, x:"85%", y:"75%", c:T.green, o:0.10 },
                ].map((orb, i) => (
                  <div key={i} style={{
                    position:"absolute", left:orb.x, top:orb.y,
                    width:orb.size, height:orb.size,
                    borderRadius:"50%", background:orb.c,
                    opacity:orb.o, filter:"blur(60px)",
                    transform:"translate(-50%,-50%)",
                    animation:`float ${6 + i}s ease-in-out infinite`,
                    animationDelay:`${i * 0.8}s`,
                  }} />
                ))}
                <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
                  <div style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:T.accent, letterSpacing:"0.15em", marginBottom:"0.5rem" }}>
                    {featuredProject.tag}
                  </div>
                  <div className="display-heading" style={{ fontSize:"2rem", color:T.text }}>
                    {featuredProject.title}
                  </div>
                </div>
              </div>

              {/* Bottom content */}
              <div style={{ padding:"2rem 2.5rem", display:"grid", gridTemplateColumns:"1fr auto", gap:"2rem", alignItems:"start" }}>
                <div>
                  <p style={{ fontSize:"0.95rem", color:T.muted2, lineHeight:1.75, marginBottom:"1.5rem", maxWidth:"600px" }}>
                    {featuredProject.desc}
                  </p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.5rem" }}>
                    {featuredProject.tech.map((t, i) => (
                      <span key={i} style={{ padding:"0.28rem 0.7rem", borderRadius:"6px", background:"rgba(255,255,255,0.04)", border:`1px solid ${T.border}`, fontSize:"0.75rem", color:T.muted2, fontFamily:"'JetBrains Mono',monospace" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:"1rem", minWidth:"180px" }}>
                  {featuredProject.stats.map((s, i) => (
                    <div key={i} style={{ textAlign:"right" }}>
                      <div style={{ fontSize:"1.5rem", fontFamily:"'DM Serif Display',serif", color:T.accent, letterSpacing:"-0.02em" }}>{s.value}</div>
                      <div style={{ fontSize:"0.75rem", color:T.muted, marginTop:"0.1rem" }}>{s.label}</div>
                    </div>
                  ))}
                  <button className="btn-primary" style={{ marginTop:"0.5rem", justifyContent:"center" }} onClick={() => navigate('/projects')}>
                    See All Work <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── ACHIEVEMENTS ─────────────────── */}
        <section ref={achievRef} id="achievements" style={{ padding:"6rem 0", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
            <div style={{ marginBottom:"3.5rem" }}>
              <span className="section-label" style={{ display:"block", marginBottom:"1rem" }}>Credentials</span>
              <h2 className="display-heading" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:T.text }}>
                Certifications &amp; Awards
              </h2>
            </div>

            <div style={{ position:"relative", paddingLeft:"2px" }}>
              {/* Timeline line */}
              <div style={{ position:"absolute", left:"19px", top:"24px", bottom:"24px", width:"1px", background:`linear-gradient(180deg, ${T.accent}, ${T.accent2}, ${T.green})` }} />

              <div style={{ display:"flex", flexDirection:"column", gap:"0" }}>
                {achievements.map((a, i) => (
                  <div key={i} className="timeline-item" style={{
                    display:"flex", gap:"2rem", alignItems:"center",
                    padding:"1rem 0",
                    opacity: achievIn ? 1 : 0,
                    animation: achievIn ? `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s both` : "none",
                  }}>
                    {/* Dot */}
                    <div className="timeline-dot" style={{
                      width:"38px", height:"38px", minWidth:"38px",
                      borderRadius:"50%",
                      background:T.surface2, border:`2px solid ${a.color}`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      position:"relative", zIndex:1,
                      transition:"box-shadow 0.3s ease",
                      boxShadow:`0 0 0 4px ${T.bg}`,
                    }}>
                      <CheckCircle size={16} style={{ color:a.color }} />
                    </div>

                    {/* Card */}
                    <div className="glass hover-lift" style={{ flex:1, padding:"1.1rem 1.5rem", display:"flex", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
                      <div>
                        <div style={{ fontSize:"0.95rem", fontWeight:600, color:T.text, marginBottom:"0.2rem" }}>{a.title}</div>
                        <div style={{ fontSize:"0.775rem", color:T.muted }}>{a.issuer}</div>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                        <span style={{ fontFamily:"'JetBrains Mono',monospace", fontSize:"0.72rem", color:T.muted, fontWeight:600 }}>{a.year}</span>
                        <span className="badge" style={{ background:`rgba(${a.color === T.gold ? "245,158,11" : a.color === T.accent ? "91,127,255" : a.color === T.green ? "52,211,153" : "139,92,246"},0.08)`, border:`1px solid ${a.color}40`, color:a.color }}>
                          <Verified size={10} /> Verified
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── TESTIMONIALS ─────────────────── */}
        <section ref={testRef} style={{ padding:"6rem 0", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
            <div style={{ marginBottom:"3.5rem", display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
              <div>
                <span className="section-label" style={{ display:"block", marginBottom:"1rem" }}>Social Proof</span>
                <h2 className="display-heading" style={{ fontSize:"clamp(2rem,4vw,3rem)", color:T.text }}>
                  What Leaders Say
                </h2>
              </div>
              <div style={{ display:"flex", gap:"0.5rem" }}>
                <button
                  onClick={() => setTestIdx(p => (p - 1 + testimonials.length) % testimonials.length)}
                  style={{ width:"40px", height:"40px", borderRadius:"10px", background:T.surface, border:`1px solid ${T.border}`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:T.muted2, transition:"all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = T.border2; }}
                  onMouseLeave={e => { e.currentTarget.style.color = T.muted2; e.currentTarget.style.borderColor = T.border; }}
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => setTestIdx(p => (p + 1) % testimonials.length)}
                  style={{ width:"40px", height:"40px", borderRadius:"10px", background:T.surface, border:`1px solid ${T.border}`, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:T.muted2, transition:"all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = T.border2; }}
                  onMouseLeave={e => { e.currentTarget.style.color = T.muted2; e.currentTarget.style.borderColor = T.border; }}
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Testimonial cards */}
            <div style={{ position:"relative", minHeight:"220px" }}>
              {testimonials.map((t, i) => (
                <div key={i} className="testimonial-slide glass" style={{
                  position: i === testIdx ? "relative" : "absolute",
                  top:0, left:0, right:0,
                  padding:"2.5rem",
                  opacity: i === testIdx ? 1 : 0,
                  visibility: i === testIdx ? "visible" : "hidden",
                  transform: i === testIdx ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
                  boxShadow: i === testIdx ? "0 24px 80px rgba(0,0,0,0.4)" : "none",
                }}>
                  <div style={{ display:"flex", gap:"2rem", alignItems:"flex-start", flexWrap:"wrap" }}>
                    {/* Avatar */}
                    <div style={{
                      width:"56px", height:"56px", minWidth:"56px",
                      borderRadius:"16px",
                      background:`linear-gradient(135deg, ${t.color}30, ${t.color}10)`,
                      border:`2px solid ${t.color}40`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      fontSize:"1rem", fontWeight:700, color:t.color,
                      fontFamily:"'DM Serif Display',serif",
                    }}>
                      {t.avatar}
                    </div>

                    {/* Content */}
                    <div style={{ flex:1 }}>
                      {/* Stars */}
                      <div style={{ display:"flex", gap:"0.2rem", marginBottom:"1rem" }}>
                        {[...Array(5)].map((_, si) => <Sparkles key={si} size={12} style={{ color:T.gold }} />)}
                      </div>
                      <blockquote style={{ fontSize:"1.05rem", lineHeight:1.75, color:T.muted2, marginBottom:"1.5rem", fontStyle:"italic", maxWidth:"700px" }}>
                        "{t.quote}"
                      </blockquote>
                      <div>
                        <div style={{ fontSize:"0.9rem", fontWeight:600, color:T.text }}>{t.name}</div>
                        <div style={{ fontSize:"0.8rem", color:T.muted }}>{t.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Indicator dots */}
                  <div style={{ display:"flex", gap:"0.5rem", marginTop:"2rem", justifyContent:"flex-end" }}>
                    {testimonials.map((_, di) => (
                      <button key={di} onClick={() => setTestIdx(di)} style={{
                        width: di === testIdx ? "24px" : "8px", height:"8px",
                        borderRadius:"4px", border:"none", cursor:"pointer",
                        background: di === testIdx ? t.color : T.border2,
                        transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                      }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────── CTA ─────────────────── */}
        <section ref={ctaRef} id="contact" style={{ padding:"6rem 0 8rem", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem" }}>
            <div style={{
              borderRadius:"28px", padding:"4rem 3rem",
              background:`linear-gradient(135deg, ${T.surface} 0%, rgba(91,127,255,0.05) 100%)`,
              border:`1px solid ${T.border2}`,
              position:"relative", overflow:"hidden",
              opacity: ctaIn ? 1 : 0,
              animation: ctaIn ? "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both" : "none",
            }}>
              {/* BG orb */}
              <div style={{
                position:"absolute", right:"-10%", top:"-30%",
                width:"400px", height:"400px", borderRadius:"50%",
                background:`radial-gradient(circle, rgba(91,127,255,0.12), transparent 70%)`,
                pointerEvents:"none",
              }} />

              <div style={{ position:"relative", zIndex:1, maxWidth:"680px" }}>
                <span className="section-label" style={{ display:"block", marginBottom:"1.25rem" }}>
                  Let's build something great
                </span>
                <h2 className="display-heading" style={{ fontSize:"clamp(2rem,4.5vw,3.2rem)", color:T.text, marginBottom:"1.25rem" }}>
                  Ready to make an<br />
                  <span style={{ color:T.accent }}>immediate impact</span>
                </h2>
                <p style={{ fontSize:"1rem", color:T.muted2, lineHeight:1.75, marginBottom:"2.5rem", maxWidth:"500px" }}>
                  Seeking full-time engineering roles where I can ship AI-powered products, architect scalable systems, and grow alongside exceptional teams.
                </p>

                {/* CTA buttons */}
                <div style={{ display:"flex", gap:"0.9rem", flexWrap:"wrap", marginBottom:"2.5rem" }}>
                  <a href="mailto:g.sivasatyasaibhagavan@gmail.com" className="btn-primary">
                    Schedule Interview <ArrowRight size={15} />
                  </a>
                  <button className="btn-ghost" onClick={() => navigate('/projects')}>
                    View Portfolio <ExternalLink size={14} />
                  </button>
                </div>

                {/* Contact info */}
                <div style={{ display:"flex", gap:"2rem", flexWrap:"wrap", paddingTop:"2rem", borderTop:`1px solid ${T.border}` }}>
                  <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{ display:"flex", alignItems:"center", gap:"0.5rem", color:T.muted2, textDecoration:"none", fontSize:"0.875rem", transition:"color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = T.muted2}
                  >
                    <Mail size={15} style={{ color:T.accent }} /> g.sivasatyasaibhagavan@gmail.com
                  </a>
                  <a href="tel:+917569205626" style={{ display:"flex", alignItems:"center", gap:"0.5rem", color:T.muted2, textDecoration:"none", fontSize:"0.875rem", transition:"color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = T.muted2}
                  >
                    <Phone size={15} style={{ color:T.green }} /> +91 7569205626
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────── FOOTER ─────────────────── */}
        <footer style={{ borderTop:`1px solid ${T.border}`, padding:"2.5rem 0", position:"relative", zIndex:1 }}>
          <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 2rem", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
            <div style={{ fontFamily:"'DM Serif Display',serif", fontSize:"1rem", color:T.muted }}>
              Bhagavan<span style={{ color:T.accent }}>.</span>
            </div>

            <div className="footer-links" style={{ display:"flex", gap:"2rem", alignItems:"center" }}>
              {[
                { icon:Github,   href:"https://github.com/bhagavan444", label:"GitHub" },
                { icon:Linkedin, href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/", label:"LinkedIn" },
                { icon:Mail,     href:"mailto:g.sivasatyasaibhagavan@gmail.com", label:"Email" },
              ].map((l, i) => (
                <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:"0.4rem", color:T.muted, textDecoration:"none", fontSize:"0.8rem", transition:"color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                  onMouseLeave={e => e.currentTarget.style.color = T.muted}
                >
                  <l.icon size={13} /> {l.label}
                </a>
              ))}
            </div>

            <div style={{ fontSize:"0.75rem", color:T.muted, fontFamily:"'JetBrains Mono',monospace" }}>
              © 2026 · Built with precision
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}