"use client";

import React, { useState, useRef } from "react";
import {
  Download, Eye, X, ExternalLink, MapPin, Mail,
  Github, Linkedin, CheckCircle, ChevronRight,
  Code2, Brain, Cloud, Terminal, BookOpen, Award,
  Briefcase, GraduationCap, ArrowUpRight, Calendar,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════════ */
const RESUME_PREVIEW  = "https://drive.google.com/file/d/1-Ph6umgQ6P0YfBgQGLj-9UPMX2UDoKu3/preview";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1-Ph6umgQ6P0YfBgQGLj-9UPMX2UDoKu3";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS  (matches portfolio system)
═══════════════════════════════════════════════════════════════ */
const C = {
  bg:        "#0f1117",
  surface:   "#141720",
  surface2:  "#191c26",
  surface3:  "#1e2130",
  border:    "rgba(255,255,255,0.06)",
  border2:   "rgba(255,255,255,0.10)",
  border3:   "rgba(255,255,255,0.16)",
  text:      "#e8e9ef",
  muted:     "#6b7280",
  muted2:    "#9ca3af",
  accent:    "#4f7fff",
  accentDim: "rgba(79,127,255,0.08)",
  green:     "#22c55e",
  greenDim:  "rgba(34,197,94,0.08)",
  amber:     "#f59e0b",
  amberDim:  "rgba(245,158,11,0.08)",
  purple:    "#a78bfa",
  purpleDim: "rgba(167,139,250,0.08)",
};

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const snapStats = [
  { value: "6+",  label: "Deployed Projects",       sub: "Live, production-facing" },
  { value: "3",   label: "Industry Internships",     sub: "2024 – 2025" },
  { value: "500+",label: "DSA Problems Solved",      sub: "LeetCode · Top 5%" },
  { value: "20+", label: "Certifications",           sub: "AWS, Azure, GCP & more" },
];

const skillGroups = [
  {
    icon: Code2, label: "Full-Stack",
    color: C.accent, dim: C.accentDim,
    items: [
      { tech:"React",      note:"Auth systems, Redux, protected routes, memo optimisation" },
      { tech:"Node.js",    note:"REST APIs, JWT middleware, rate limiting, Express" },
      { tech:"MongoDB",    note:"Schema design, Atlas, aggregation pipelines" },
      { tech:"TypeScript", note:"Strict typing, generics, utility types" },
    ],
  },
  {
    icon: Brain, label: "AI / ML",
    color: C.purple, dim: C.purpleDim,
    items: [
      { tech:"TensorFlow / Keras", note:"CNN training, model evaluation, inference optimisation" },
      { tech:"Scikit-learn",       note:"Classification, feature engineering, cross-validation" },
      { tech:"NLP Pipelines",      note:"TF-IDF, tokenisation, Logistic Regression classifiers" },
      { tech:"OpenCV",             note:"Real-time object detection, frame processing" },
    ],
  },
  {
    icon: Cloud, label: "Cloud & DevOps",
    color: C.green, dim: C.greenDim,
    items: [
      { tech:"AWS EC2 / S3",      note:"Deployed Node.js services, Nginx reverse proxy" },
      { tech:"Docker",            note:"Containerised microservices, Docker Compose stacks" },
      { tech:"GitHub Actions",    note:"Automated build-test-deploy CI/CD pipelines" },
      { tech:"Linux / CLI",       note:"Server management, bash scripting, cron jobs" },
    ],
  },
  {
    icon: Terminal, label: "Foundations",
    color: C.amber, dim: C.amberDim,
    items: [
      { tech:"Python",      note:"Primary ML language, scripting, data pipelines" },
      { tech:"Java",        note:"OOP, Collections, academic projects" },
      { tech:"C++",         note:"DSA, algorithm competitions" },
      { tech:"Git / GitHub",note:"Branching strategy, PRs, code review" },
    ],
  },
];

const experiences = [
  {
    role:     "MERN Stack Intern",
    company:  "StudyOwl Education Pvt Ltd",
    period:   "May – Jul 2025 · 3 months",
    location: "Hybrid",
    color:    C.accent,
    dim:      C.accentDim,
    bullets: [
      "Built 3 full-stack web applications with React, Node.js, Express, and MongoDB — all deployed to production",
      "Rebuilt authentication layer using OAuth 2.0 and JWT with role-based access control, replacing insecure session approach",
      "Reduced REST API response times by 40% through query indexing, Redis caching, and payload restructuring",
      "Delivered ATS résumé builder with PDF/DOCX export — serving 1,000+ active users post-launch",
    ],
    tech: ["React", "Node.js", "MongoDB", "JWT", "Redis", "AWS"],
  },
  {
    role:     "AI / ML Intern",
    company:  "SmartBridge",
    period:   "May – Jun 2025 · 2 months",
    location: "Remote",
    color:    C.purple,
    dim:      C.purpleDim,
    bullets: [
      "Trained and evaluated 5+ ML / DL models across image classification and object detection tasks",
      "Built CNN classifier achieving 85% accuracy on a 3,000-sample custom dataset",
      "Reduced model inference time by 35% through architecture pruning and optimised batch processing",
      "Deployed real-time object detection API with Flask and OpenCV",
    ],
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
  },
  {
    role:     "ML & Data Science Intern",
    company:  "Blackbucks",
    period:   "May – Jun 2024 · 2 months",
    location: "Remote",
    color:    C.green,
    dim:      C.greenDim,
    bullets: [
      "Processed and cleaned 100,000+ record datasets using Pandas / NumPy, resolving nulls, duplicates, and schema issues",
      "Built Fake News Detection classifier (TF-IDF + Logistic Regression) achieving 89% accuracy on 50K+ articles",
      "Trained 6 supervised models (SVM, RF, XGBoost); best cross-validated accuracy 92%",
      "Engineered 15+ features using PCA and correlation filtering, improving F1-score by 12%",
    ],
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
];

const projects = [
  {
    name:     "ATS Résumé Builder",
    status:   "Live",
    role:     "Full-stack engineer",
    desc:     "Web app that generates ATS-optimised résumés with PDF and DOCX export. OAuth authentication, live preview, cloud-stored templates.",
    outcomes: ["1,000+ active users post-launch", "PDF/DOCX export with real-time preview", "OAuth 2.0 + JWT auth, role-based access"],
    tech:     ["React", "Node.js", "MongoDB", "JWT", "AWS"],
    github:   "https://github.com/bhagavan444",
  },
  {
    name:     "Fake News Detection System",
    status:   "GitHub",
    role:     "ML engineer",
    desc:     "NLP pipeline classifying real vs fake news using TF-IDF vectorisation and Logistic Regression on 50K+ labelled articles.",
    outcomes: ["89% accuracy on held-out test set", "TF-IDF + Logistic Regression pipeline", "50,000+ training records processed"],
    tech:     ["Python", "Scikit-learn", "Pandas", "TF-IDF"],
    github:   "https://github.com/bhagavan444",
  },
  {
    name:     "Real-Time Object Detection API",
    status:   "Deployed",
    role:     "AI engineer",
    desc:     "CNN-based image classifier deployed as a Flask REST API with OpenCV frame processing. Achieved 35% inference latency reduction post-optimisation.",
    outcomes: ["85% classification accuracy", "35% inference time reduction", "Flask + Docker deployment"],
    tech:     ["TensorFlow", "OpenCV", "Flask", "Docker"],
    github:   "https://github.com/bhagavan444",
  },
];

const certifications = [
  { name:"AWS Solutions Architect – Professional", issuer:"Amazon Web Services", year:"2025", color:C.amber },
  { name:"Azure AI Engineer Associate",            issuer:"Microsoft Azure",     year:"2025", color:C.accent },
  { name:"Google Cloud Professional",              issuer:"Google Cloud",        year:"2024", color:C.green },
  { name:"Deep Learning Specialisation",           issuer:"DeepLearning.AI",     year:"2024", color:C.purple },
  { name:"Full-Stack Open",                        issuer:"University of Helsinki", year:"2024", color:C.muted2 },
];

const education = {
  degree:   "B.Tech – Computer Science & Engineering",
  school:   "KKR & KSR Institute of Technology and Sciences",
  period:   "2022 – 2026",
  cgpa:     "7.9 CGPA",
  location: "Gudivada, Andhra Pradesh",
};

/* ═══════════════════════════════════════════════════════════════
   HOOK
═══════════════════════════════════════════════════════════════ */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, inView];
}

/* ═══════════════════════════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════════════════════════ */

function SectionHeader({ num, title, sub }) {
  return (
    <div style={{ marginBottom:"2rem" }}>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:C.muted, marginBottom:"0.5rem" }}>
        {num}
      </div>
      <h2 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"clamp(1.5rem,3vw,2rem)", fontWeight:400, color:C.text, letterSpacing:"-0.025em", lineHeight:1.2, marginBottom: sub ? "0.5rem" : 0 }}>
        {title}
      </h2>
      {sub && <p style={{ fontSize:"0.875rem", color:C.muted2, lineHeight:1.7 }}>{sub}</p>}
    </div>
  );
}

function DeployBadge({ status }) {
  const map = {
    Live:     { color:C.green,  bg:C.greenDim,  border:"rgba(34,197,94,0.2)" },
    Deployed: { color:C.green,  bg:C.greenDim,  border:"rgba(34,197,94,0.2)" },
    GitHub:   { color:C.muted2, bg:C.surface3,  border:C.border2 },
  };
  const s = map[status] || map.GitHub;
  return (
    <span style={{
      padding:"0.2rem 0.6rem", borderRadius:"4px",
      background:s.bg, border:`1px solid ${s.border}`,
      fontSize:"0.65rem", fontWeight:700,
      color:s.color, fontFamily:"'DM Mono',monospace", letterSpacing:"0.07em",
    }}>
      {status}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════ */
export default function Resume() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollPct, setScrollPct] = useState(0);

  React.useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* InView refs */
  const [headerRef, headerIn]   = useInView(0.2);
  const [statsRef,  statsIn]    = useInView(0.15);
  const [skillsRef, skillsIn]   = useInView(0.1);
  const [expRef,    expIn]      = useInView(0.1);
  const [projRef,   projIn]     = useInView(0.1);
  const [certRef,   certIn]     = useInView(0.15);
  const [ctaRef,    ctaIn]      = useInView(0.2);

  const tabs = [
    { id:"overview",       label:"Overview" },
    { id:"skills",         label:"Skills" },
    { id:"experience",     label:"Experience" },
    { id:"projects",       label:"Projects" },
    { id:"certifications", label:"Certifications" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500;600&family=Geist:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'Geist',system-ui,sans-serif; background:${C.bg}; color:${C.text}; -webkit-font-smoothing:antialiased; overflow-x:hidden; }
        ::selection { background:rgba(79,127,255,0.25); }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:${C.bg}; }
        ::-webkit-scrollbar-thumb { background:rgba(79,127,255,0.3); border-radius:3px; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeSlide {
          from { opacity:0; transform:translateX(-14px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; } to { opacity:1; }
        }
        @keyframes scaleIn {
          from { opacity:0; transform:scale(0.95); }
          to   { opacity:1; transform:scale(1); }
        }

        .tab-btn {
          padding: 0.55rem 1.1rem;
          background: transparent;
          border: 1px solid ${C.border2};
          border-radius: 8px;
          color: ${C.muted2};
          font-family: 'DM Mono', monospace;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .tab-btn:hover { color: ${C.text}; border-color: ${C.border3}; background: ${C.surface2}; }
        .tab-btn.active { color: ${C.accent}; border-color: rgba(79,127,255,0.35); background: ${C.accentDim}; }

        .skill-item { transition: background 0.2s ease, border-color 0.2s ease; }
        .skill-item:hover { background: ${C.surface3} !important; border-color: ${C.border3} !important; }

        .exp-card { transition: border-color 0.25s ease, box-shadow 0.25s ease; }
        .exp-card:hover { box-shadow: 0 8px 40px rgba(0,0,0,0.35); }

        .proj-card { transition: border-color 0.25s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s ease; }
        .proj-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.4); }

        .cert-row { transition: background 0.2s ease, border-color 0.2s ease; }
        .cert-row:hover { background: ${C.surface2} !important; border-color: ${C.border3} !important; }

        @media (max-width: 900px) {
          .overview-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .tabs-row { flex-wrap: wrap !important; }
        }
      `}</style>

      {/* Scroll progress */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"2px", background:C.surface, zIndex:9999 }}>
        <div style={{ width:`${scrollPct}%`, height:"100%", background:`linear-gradient(90deg,${C.accent},${C.purple})`, transition:"width 0.1s linear" }} />
      </div>

      {/* Faint mesh */}
      <div style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", background:`radial-gradient(ellipse 70% 45% at 50% -5%, rgba(79,127,255,0.05) 0%, transparent 60%)` }} />

      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"0 1.5rem", position:"relative", zIndex:1 }}>

        {/* ══════ HEADER ══════ */}
        <header ref={headerRef} style={{ padding:"5rem 0 3.5rem", borderBottom:`1px solid ${C.border}` }}>

          <div style={{
            display:"flex", alignItems:"center", gap:"0.65rem", marginBottom:"1.5rem",
            opacity:headerIn?1:0, animation:headerIn?"fadeSlide 0.5s cubic-bezier(0.22,1,0.36,1) both":"none",
          }}>
            <div style={{ width:"22px", height:"1px", background:C.accent }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:C.accent }}>
              Résumé · 2026 Graduate
            </span>
          </div>

          <h1 style={{
            fontFamily:"'Instrument Serif',serif",
            fontSize:"clamp(2.4rem,5vw,3.8rem)", fontWeight:400, color:C.text,
            letterSpacing:"-0.025em", lineHeight:1.1, marginBottom:"0.5rem",
            opacity:headerIn?1:0, animation:headerIn?"fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.07s both":"none",
          }}>
            Siva Satya Sai Bhagavan
          </h1>

          <p style={{
            fontSize:"1.05rem", color:C.muted2, fontWeight:500, marginBottom:"1.75rem",
            opacity:headerIn?1:0, animation:headerIn?"fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.13s both":"none",
          }}>
            Full-Stack &amp; AI Engineer · Open to SDE Roles
          </p>

          {/* Meta row */}
          <div style={{
            display:"flex", flexWrap:"wrap", gap:"1.25rem", alignItems:"center",
            marginBottom:"2rem",
            opacity:headerIn?1:0, animation:headerIn?"fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.19s both":"none",
          }}>
            {[
              { icon:MapPin,   text:"Gudivada, Andhra Pradesh",            href:null },
              { icon:Mail,     text:"g.sivasatyasaibhagavan@gmail.com",     href:"mailto:g.sivasatyasaibhagavan@gmail.com" },
              { icon:Github,   text:"github.com/bhagavan444",               href:"https://github.com/bhagavan444" },
              { icon:Linkedin, text:"LinkedIn Profile",                     href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" },
            ].map((m, i) => {
              const Tag = m.href ? "a" : "span";
              return (
                <Tag key={i} href={m.href||undefined} target={m.href?.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                  style={{
                    display:"inline-flex", alignItems:"center", gap:"0.4rem",
                    fontSize:"0.8rem", color:C.muted2, fontFamily:"'DM Mono',monospace",
                    textDecoration:"none", transition:"color 0.2s ease",
                  }}
                  onMouseEnter={m.href ? e=>e.currentTarget.style.color=C.text : undefined}
                  onMouseLeave={m.href ? e=>e.currentTarget.style.color=C.muted2 : undefined}
                >
                  <m.icon size={12} /> {m.text}
                </Tag>
              );
            })}
          </div>

          {/* CTA buttons */}
          <div style={{
            display:"flex", gap:"0.75rem", flexWrap:"wrap",
            opacity:headerIn?1:0, animation:headerIn?"fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.25s both":"none",
          }}>
            <a href={RESUME_DOWNLOAD}
              style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                padding:"0.7rem 1.4rem", borderRadius:"10px",
                background:C.accent, color:"#fff",
                fontSize:"0.875rem", fontWeight:600, textDecoration:"none",
                fontFamily:"'Geist',sans-serif",
                boxShadow:"0 4px 20px rgba(79,127,255,0.25)",
                transition:"all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(79,127,255,0.4)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(79,127,255,0.25)"; }}
            >
              <Download size={14} /> Download PDF
            </a>
            <button
              onClick={() => setShowModal(true)}
              style={{
                display:"inline-flex", alignItems:"center", gap:"0.5rem",
                padding:"0.7rem 1.4rem", borderRadius:"10px",
                background:"transparent", color:C.muted2,
                border:`1px solid ${C.border3}`,
                fontSize:"0.875rem", fontWeight:500, cursor:"pointer",
                fontFamily:"'Geist',sans-serif",
                transition:"all 0.22s ease",
              }}
              onMouseEnter={e=>{ e.currentTarget.style.color=C.text; e.currentTarget.style.borderColor="rgba(255,255,255,0.25)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.color=C.muted2; e.currentTarget.style.borderColor=C.border3; }}
            >
              <Eye size={14} /> Preview Fullscreen
            </button>
          </div>
        </header>

        {/* ══════ SNAP STATS ══════ */}
        <section ref={statsRef} style={{ padding:"2.5rem 0", borderBottom:`1px solid ${C.border}` }}>
          <div className="stats-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1px", background:C.border }}>
            {snapStats.map((s, i) => (
              <div key={i} style={{
                padding:"1.5rem 1.75rem", background:C.bg,
                opacity:statsIn?1:0,
                animation:statsIn?`fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${i*0.07}s both`:"none",
              }}>
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"2rem", color:C.text, letterSpacing:"-0.03em", marginBottom:"0.25rem" }}>{s.value}</div>
                <div style={{ fontSize:"0.825rem", fontWeight:600, color:C.muted2, marginBottom:"0.15rem" }}>{s.label}</div>
                <div style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ TABS ══════ */}
        <div style={{ padding:"2rem 0 0", position:"sticky", top:0, background:C.bg, zIndex:50, borderBottom:`1px solid ${C.border}`, marginBottom:"2.5rem" }}>
          <div className="tabs-row" style={{ display:"flex", gap:"0.5rem", overflowX:"auto", paddingBottom:"1.25rem" }}>
            {tabs.map(t => (
              <button key={t.id} className={`tab-btn${activeTab===t.id?" active":""}`} onClick={()=>setActiveTab(t.id)}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ══════ OVERVIEW ══════ */}
        {activeTab === "overview" && (
          <div className="overview-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:"1.5rem", paddingBottom:"4rem", animation:"fadeIn 0.4s ease both" }}>

            {/* Left: quick info + education */}
            <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>

              {/* Availability card */}
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"16px", padding:"1.5rem" }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"1rem" }}>
                  Availability
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
                  {[
                    { dot:C.green,  text:"Open to full-time SDE roles" },
                    { dot:C.accent, text:"Interested in AI / ML engineering" },
                    { dot:C.amber,  text:"Available for technical collaboration" },
                    { dot:C.green,  text:"Immediate joiner · 2026 graduate" },
                  ].map((r, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.65rem" }}>
                      <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:r.dot, flexShrink:0 }} />
                      <span style={{ fontSize:"0.85rem", color:C.muted2, fontWeight:500 }}>{r.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"16px", padding:"1.5rem" }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"1rem" }}>
                  Education
                </div>
                <div style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start" }}>
                  <div style={{ width:"36px", height:"36px", borderRadius:"8px", background:C.accentDim, border:`1px solid rgba(79,127,255,0.2)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <GraduationCap size={16} style={{ color:C.accent }} />
                  </div>
                  <div>
                    <div style={{ fontSize:"0.875rem", fontWeight:600, color:C.text, marginBottom:"0.2rem" }}>{education.degree}</div>
                    <div style={{ fontSize:"0.8rem", color:C.muted2, marginBottom:"0.2rem" }}>{education.school}</div>
                    <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap" }}>
                      <span style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{education.period}</span>
                      <span style={{ fontSize:"0.72rem", color:C.accent, fontFamily:"'DM Mono',monospace", fontWeight:600 }}>{education.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech focus */}
              <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"16px", padding:"1.5rem" }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"1rem" }}>
                  Core Focus
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.5rem" }}>
                  {[
                    { label:"MERN Stack Engineering",        note:"React · Node · MongoDB · Express" },
                    { label:"AI/ML Systems",                 note:"TensorFlow · Scikit-learn · NLP" },
                    { label:"Cloud & Infrastructure",        note:"AWS · Docker · GitHub Actions" },
                    { label:"Algorithms & Data Structures",  note:"LeetCode Top 5% · 500+ solved" },
                  ].map((f, i) => (
                    <div key={i} style={{ padding:"0.6rem 0.8rem", background:C.surface2, borderRadius:"8px", border:`1px solid ${C.border}` }}>
                      <div style={{ fontSize:"0.8rem", fontWeight:600, color:C.text, marginBottom:"0.1rem" }}>{f.label}</div>
                      <div style={{ fontSize:"0.7rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{f.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: resume iframe */}
            <div>
              <div style={{
                borderRadius:"16px", overflow:"hidden",
                border:`1px solid ${C.border2}`,
                background:C.surface,
                height:"clamp(560px,75vh,860px)",
                position:"relative",
              }}>
                {/* Iframe header */}
                <div style={{
                  padding:"0.75rem 1.1rem",
                  background:C.surface2,
                  borderBottom:`1px solid ${C.border}`,
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                    <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:C.green }} />
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.7rem", color:C.muted, letterSpacing:"0.06em" }}>résumé preview</span>
                  </div>
                  <div style={{ display:"flex", gap:"0.5rem" }}>
                    <button onClick={()=>setShowModal(true)}
                      style={{ display:"flex", alignItems:"center", gap:"0.3rem", padding:"0.25rem 0.6rem", borderRadius:"5px", background:"transparent", border:`1px solid ${C.border2}`, color:C.muted2, fontSize:"0.7rem", cursor:"pointer", fontFamily:"'DM Mono',monospace", transition:"all 0.2s" }}
                      onMouseEnter={e=>{ e.currentTarget.style.color=C.text; e.currentTarget.style.borderColor=C.border3; }}
                      onMouseLeave={e=>{ e.currentTarget.style.color=C.muted2; e.currentTarget.style.borderColor=C.border2; }}
                    >
                      <Eye size={10} /> Fullscreen
                    </button>
                    <a href={RESUME_DOWNLOAD}
                      style={{ display:"flex", alignItems:"center", gap:"0.3rem", padding:"0.25rem 0.6rem", borderRadius:"5px", background:C.accentDim, border:`1px solid rgba(79,127,255,0.25)`, color:C.accent, fontSize:"0.7rem", textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"all 0.2s" }}
                      onMouseEnter={e=>{ e.currentTarget.style.background="rgba(79,127,255,0.15)"; }}
                      onMouseLeave={e=>{ e.currentTarget.style.background=C.accentDim; }}
                    >
                      <Download size={10} /> PDF
                    </a>
                  </div>
                </div>
                <iframe src={RESUME_PREVIEW} style={{ width:"100%", height:"calc(100% - 41px)", border:"none", background:"#fff" }} title="Résumé Preview" allowFullScreen />
              </div>
            </div>
          </div>
        )}

        {/* ══════ SKILLS ══════ */}
        {activeTab === "skills" && (
          <section ref={skillsRef} style={{ paddingBottom:"4rem", animation:"fadeIn 0.4s ease both" }}>
            <SectionHeader num="Skills" title="Technical Capabilities" sub="Depth-over-breadth: each skill listed with real-world context from internships or deployed projects." />
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,460px),1fr))", gap:"1.25rem" }}>
              {skillGroups.map((g, gi) => (
                <div key={gi} style={{
                  background:C.surface, border:`1px solid ${C.border}`, borderRadius:"16px", overflow:"hidden",
                  opacity:skillsIn?1:0, animation:skillsIn?`fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${gi*0.08}s both`:"none",
                }}>
                  {/* Group header */}
                  <div style={{ padding:"1rem 1.5rem", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", gap:"0.65rem" }}>
                    <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:g.color, flexShrink:0 }} />
                    <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
                      <g.icon size={14} style={{ color:g.color }} />
                      <span style={{ fontSize:"0.8rem", fontWeight:700, color:C.text, fontFamily:"'DM Mono',monospace", letterSpacing:"0.06em" }}>{g.label}</span>
                    </div>
                  </div>
                  {/* Skills list */}
                  <div style={{ padding:"0.5rem 0" }}>
                    {g.items.map((item, ii) => (
                      <div key={ii} className="skill-item" style={{
                        display:"flex", gap:"0.75rem", padding:"0.75rem 1.5rem",
                        borderBottom: ii < g.items.length-1 ? `1px solid ${C.border}` : "none",
                        background:"transparent", cursor:"default",
                      }}>
                        <ChevronRight size={12} style={{ color:g.color, flexShrink:0, marginTop:"0.3rem" }} />
                        <div>
                          <div style={{ fontSize:"0.825rem", fontWeight:600, color:C.text, marginBottom:"0.15rem" }}>{item.tech}</div>
                          <div style={{ fontSize:"0.75rem", color:C.muted, lineHeight:1.55 }}>{item.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════ EXPERIENCE ══════ */}
        {activeTab === "experience" && (
          <section ref={expRef} style={{ paddingBottom:"4rem", animation:"fadeIn 0.4s ease both" }}>
            <SectionHeader num="Experience" title="Industry Internships" sub="3 positions across full-stack, AI/ML, and data science — 2024 to 2025." />
            <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
              {experiences.map((e, i) => (
                <div key={i} className="exp-card" style={{
                  background:C.surface, border:`1px solid ${e.color}18`,
                  borderRadius:"16px", overflow:"hidden",
                  opacity:expIn?1:0, animation:expIn?`fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${i*0.1}s both`:"none",
                }}>
                  {/* Accent top line */}
                  <div style={{ height:"2px", background:`linear-gradient(90deg,${e.color},transparent 60%)` }} />

                  <div style={{ padding:"1.75rem 2rem" }}>
                    {/* Header row */}
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"1rem", marginBottom:"1.25rem", flexWrap:"wrap" }}>
                      <div>
                        <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.3rem", color:C.text, letterSpacing:"-0.02em", marginBottom:"0.25rem" }}>{e.role}</div>
                        <div style={{ fontSize:"0.95rem", fontWeight:600, color:e.color }}>{e.company}</div>
                      </div>
                      <div style={{ display:"flex", flexDirection:"column", gap:"0.3rem", alignItems:"flex-end" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:"0.35rem", fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
                          <Calendar size={11}/> {e.period}
                        </div>
                        <div style={{ display:"flex", alignItems:"center", gap:"0.35rem", fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
                          <MapPin size={11}/> {e.location}
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height:"1px", background:C.border, marginBottom:"1.25rem" }} />

                    {/* Bullets */}
                    <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.65rem", marginBottom:"1.25rem" }}>
                      {e.bullets.map((b, bi) => (
                        <li key={bi} style={{ display:"flex", gap:"0.7rem", alignItems:"flex-start" }}>
                          <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:e.color, flexShrink:0, marginTop:"0.4rem" }} />
                          <span style={{ fontSize:"0.85rem", color:C.muted2, lineHeight:1.7 }}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech chips */}
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                      {e.tech.map((t, ti) => (
                        <span key={ti} style={{
                          padding:"0.25rem 0.65rem", borderRadius:"5px",
                          background:C.surface3, border:`1px solid ${C.border2}`,
                          fontSize:"0.72rem", fontWeight:500, color:C.muted2,
                          fontFamily:"'DM Mono',monospace",
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════ PROJECTS ══════ */}
        {activeTab === "projects" && (
          <section ref={projRef} style={{ paddingBottom:"4rem", animation:"fadeIn 0.4s ease both" }}>
            <SectionHeader num="Projects" title="Selected Work" sub="Production-deployed and independently validated projects with measurable outcomes." />
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,480px),1fr))", gap:"1.25rem" }}>
              {projects.map((p, i) => (
                <div key={i} className="proj-card" style={{
                  background:C.surface, border:`1px solid ${C.border}`, borderRadius:"16px", overflow:"hidden",
                  opacity:projIn?1:0, animation:projIn?`fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${i*0.1}s both`:"none",
                }}>
                  <div style={{ padding:"1.75rem 2rem" }}>
                    {/* Title row */}
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:"0.75rem", marginBottom:"0.75rem" }}>
                      <div>
                        <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.2rem", color:C.text, letterSpacing:"-0.02em", marginBottom:"0.2rem" }}>{p.name}</div>
                        <div style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{p.role}</div>
                      </div>
                      <div style={{ display:"flex", gap:"0.4rem", alignItems:"center", flexShrink:0 }}>
                        <DeployBadge status={p.status} />
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          style={{ display:"flex", alignItems:"center", gap:"0.25rem", padding:"0.2rem 0.55rem", borderRadius:"4px", background:C.surface3, border:`1px solid ${C.border2}`, fontSize:"0.65rem", fontWeight:600, color:C.muted2, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"all 0.2s" }}
                          onMouseEnter={e=>{ e.currentTarget.style.color=C.text; e.currentTarget.style.borderColor=C.border3; }}
                          onMouseLeave={e=>{ e.currentTarget.style.color=C.muted2; e.currentTarget.style.borderColor=C.border2; }}
                        >
                          <Github size={9} /> GitHub
                        </a>
                      </div>
                    </div>

                    <p style={{ fontSize:"0.825rem", color:C.muted2, lineHeight:1.7, marginBottom:"1.1rem" }}>{p.desc}</p>

                    {/* Outcomes */}
                    <div style={{ display:"flex", flexDirection:"column", gap:"0.4rem", marginBottom:"1.1rem" }}>
                      {p.outcomes.map((o, oi) => (
                        <div key={oi} style={{ display:"flex", gap:"0.55rem", alignItems:"flex-start" }}>
                          <CheckCircle size={11} style={{ color:C.green, flexShrink:0, marginTop:"0.25rem" }} />
                          <span style={{ fontSize:"0.78rem", color:C.muted2 }}>{o}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
                      {p.tech.map((t, ti) => (
                        <span key={ti} style={{ padding:"0.2rem 0.55rem", borderRadius:"4px", background:C.surface3, border:`1px solid ${C.border2}`, fontSize:"0.7rem", fontWeight:500, color:C.muted2, fontFamily:"'DM Mono',monospace" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════ CERTIFICATIONS ══════ */}
        {activeTab === "certifications" && (
          <section ref={certRef} style={{ paddingBottom:"4rem", animation:"fadeIn 0.4s ease both" }}>
            <SectionHeader num="Certifications" title="Verified Credentials" sub="Industry-recognised certifications from AWS, Microsoft, Google, and academic institutions." />
            <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
              {certifications.map((cert, i) => (
                <div key={i} className="cert-row" style={{
                  display:"flex", alignItems:"center", gap:"1rem",
                  padding:"1rem 1.5rem",
                  background:C.surface, border:`1px solid ${C.border}`,
                  borderRadius:"12px", cursor:"default",
                  opacity:certIn?1:0, animation:certIn?`fadeUp 0.5s cubic-bezier(0.22,1,0.36,1) ${i*0.07}s both`:"none",
                }}>
                  <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:cert.color, flexShrink:0 }} />
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:"0.875rem", fontWeight:600, color:C.text }}>{cert.name}</div>
                    <div style={{ fontSize:"0.75rem", color:C.muted }}>{cert.issuer}</div>
                  </div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.7rem", color:C.muted, flexShrink:0 }}>{cert.year}</div>
                  <span style={{
                    padding:"0.2rem 0.55rem", borderRadius:"4px",
                    background:`rgba(${cert.color===C.green?"34,197,94":cert.color===C.accent?"79,127,255":cert.color===C.amber?"245,158,11":"167,139,250"},0.08)`,
                    border:`1px solid ${cert.color}30`,
                    fontSize:"0.65rem", fontWeight:700, color:cert.color,
                    fontFamily:"'DM Mono',monospace", flexShrink:0,
                  }}>
                    Verified
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ══════ CTA ══════ */}
        <section ref={ctaRef} style={{ borderTop:`1px solid ${C.border}`, padding:"3rem 0 5rem" }}>
          <div style={{
            background:`linear-gradient(135deg, rgba(79,127,255,0.05) 0%, rgba(167,139,250,0.03) 100%)`,
            border:`1px solid ${C.border2}`, borderRadius:"18px",
            padding:"2.5rem 2.75rem",
            display:"flex", alignItems:"center", justifyContent:"space-between",
            gap:"2rem", flexWrap:"wrap",
            opacity:ctaIn?1:0, animation:ctaIn?"fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both":"none",
          }}>
            <div>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.6rem" }}>
                2026 Graduate · Immediate Availability
              </div>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", color:C.text, letterSpacing:"-0.02em", marginBottom:"0.5rem" }}>
                Ready to contribute from day one
              </div>
              <p style={{ fontSize:"0.85rem", color:C.muted2, lineHeight:1.7, maxWidth:"480px" }}>
                Full-stack engineer with MERN stack and AI/ML experience across three industry internships.
                Actively seeking SDE roles at product-focused engineering teams.
              </p>
            </div>
            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", flexShrink:0 }}>
              <a href={RESUME_DOWNLOAD}
                style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.75rem 1.5rem", borderRadius:"10px", background:C.accent, color:"#fff", fontWeight:600, fontSize:"0.875rem", textDecoration:"none", fontFamily:"'Geist',sans-serif", boxShadow:"0 4px 20px rgba(79,127,255,0.25)", transition:"all 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
                onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(79,127,255,0.4)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(79,127,255,0.25)"; }}
              >
                <Download size={14}/> Download Resume
              </a>
              <a href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{ display:"inline-flex", alignItems:"center", gap:"0.5rem", padding:"0.75rem 1.5rem", borderRadius:"10px", background:"transparent", border:`1px solid ${C.border3}`, color:C.muted2, fontWeight:500, fontSize:"0.875rem", textDecoration:"none", fontFamily:"'Geist',sans-serif", transition:"all 0.22s ease", justifyContent:"center" }}
                onMouseEnter={e=>{ e.currentTarget.style.color=C.text; e.currentTarget.style.borderColor="rgba(255,255,255,0.25)"; }}
                onMouseLeave={e=>{ e.currentTarget.style.color=C.muted2; e.currentTarget.style.borderColor=C.border3; }}
              >
                <Mail size={13}/> Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* ══════ FOOTER ══════ */}
        <footer style={{ borderTop:`1px solid ${C.border}`, padding:"1.75rem 0", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <span style={{ fontSize:"0.75rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
            © 2026 Siva Satya Sai Bhagavan
          </span>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {[
              { label:"GitHub",   href:"https://github.com/bhagavan444" },
              { label:"LinkedIn", href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" },
              { label:"Email",    href:"mailto:g.sivasatyasaibhagavan@gmail.com" },
            ].map((l,i) => (
              <a key={i} href={l.href} target={l.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
                style={{ fontSize:"0.75rem", color:C.muted, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}
                onMouseEnter={e=>e.currentTarget.style.color=C.text}
                onMouseLeave={e=>e.currentTarget.style.color=C.muted}
              >
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      </div>

      {/* ══════ FULLSCREEN MODAL ══════ */}
      {showModal && (
        <div
          onClick={()=>setShowModal(false)}
          style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.97)", backdropFilter:"blur(16px)", zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center", animation:"fadeIn 0.25s ease both" }}
        >
          <div onClick={e=>e.stopPropagation()} style={{ width:"100%", maxWidth:"960px", height:"92vh", margin:"0 auto", padding:"0 1rem", display:"flex", flexDirection:"column", gap:"0.75rem", animation:"scaleIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both" }}>
            {/* Modal toolbar */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", color:C.muted, letterSpacing:"0.08em" }}>
                Résumé · Bhagavan · 2026
              </span>
              <div style={{ display:"flex", gap:"0.6rem" }}>
                <a href={RESUME_DOWNLOAD}
                  style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", padding:"0.45rem 0.9rem", borderRadius:"7px", background:C.accentDim, border:`1px solid rgba(79,127,255,0.25)`, color:C.accent, fontSize:"0.75rem", fontWeight:600, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"all 0.2s" }}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(79,127,255,0.15)"}
                  onMouseLeave={e=>e.currentTarget.style.background=C.accentDim}
                >
                  <Download size={11}/> Download
                </a>
                <button onClick={()=>setShowModal(false)}
                  style={{ display:"flex", alignItems:"center", gap:"0.35rem", padding:"0.45rem 0.9rem", borderRadius:"7px", background:C.surface2, border:`1px solid ${C.border2}`, color:C.muted2, fontSize:"0.75rem", fontFamily:"'DM Mono',monospace", cursor:"pointer", transition:"all 0.2s" }}
                  onMouseEnter={e=>{ e.currentTarget.style.color=C.text; e.currentTarget.style.borderColor=C.border3; }}
                  onMouseLeave={e=>{ e.currentTarget.style.color=C.muted2; e.currentTarget.style.borderColor=C.border2; }}
                >
                  <X size={11}/> Close
                </button>
              </div>
            </div>
            {/* iframe */}
            <div style={{ flex:1, borderRadius:"14px", overflow:"hidden", border:`1px solid ${C.border2}` }}>
              <iframe src={RESUME_PREVIEW} style={{ width:"100%", height:"100%", border:"none", background:"#fff" }} title="Résumé Fullscreen" allowFullScreen />
            </div>
          </div>
        </div>
      )}
    </>
  );
}