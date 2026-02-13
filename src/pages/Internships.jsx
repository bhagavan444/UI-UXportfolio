"use client";

import React, { useState, useRef } from "react";
import { ExternalLink, MapPin, Calendar, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
const C = {
  bg:       "#0f1117",
  surface:  "#141720",
  surface2: "#191c26",
  surface3: "#1e2130",
  border:   "rgba(255,255,255,0.06)",
  border2:  "rgba(255,255,255,0.10)",
  border3:  "rgba(255,255,255,0.15)",
  text:     "#e8e9ef",
  muted:    "#6b7280",
  muted2:   "#9ca3af",
  accent:   "#4f7fff",
  green:    "#22c55e",
  greenDim: "rgba(34,197,94,0.08)",
  amber:    "#f59e0b",
};

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const internships = [
  {
    id: 1,
    role: "MERN Stack Intern",
    company: "StudyOwl Education Pvt Ltd",
    period: "May – July 2025",
    duration: "3 months",
    location: "Hybrid",
    type: "Full-Stack Engineering",
    accentColor: C.accent,
    accentDim: "rgba(79,127,255,0.08)",
    certId: "1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC",
    responsibilities: [
      "Built 3 full-stack web applications using React, Node.js, Express, and MongoDB — each deployed to production environments",
      "Implemented OAuth 2.0 and JWT-based authentication with role-based access control, replacing an insecure session approach",
      "Optimized REST API response times by 40% through query indexing, caching, and payload restructuring",
      "Designed and maintained MongoDB schemas for complex relational data across user, course, and assessment entities",
      "Delivered ATS-compatible résumé builder with PDF and DOCX export — used by 1,000+ active users post-launch",
    ],
    stack: {
      languages:    ["JavaScript", "Node.js", "Python"],
      frameworks:   ["React", "Express.js", "Mongoose"],
      databases:    ["MongoDB Atlas", "Redis"],
      architecture: ["REST API", "OAuth 2.0", "JWT Auth", "Role-Based Access"],
      deployment:   ["Cloud (AWS)", "Vercel", "CI/CD via GitHub Actions"],
    },
    metrics: [
      { label: "Applications built",   value: "3" },
      { label: "Active users served",  value: "1,000+" },
      { label: "API latency reduced",  value: "40%" },
      { label: "Auth method upgraded", value: "OAuth 2.0" },
    ],
  },
  {
    id: 2,
    role: "AI / ML Intern",
    company: "SmartBridge",
    period: "May – June 2025",
    duration: "2 months",
    location: "Remote",
    type: "Machine Learning & Computer Vision",
    accentColor: "#a78bfa",
    accentDim: "rgba(167,139,250,0.08)",
    certId: "1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw",
    responsibilities: [
      "Trained and evaluated 5+ machine learning and deep learning models across classification and object detection tasks",
      "Built CNN-based image classifier achieving 85% accuracy on a custom dataset of 3,000+ labeled samples",
      "Implemented end-to-end ML pipeline: data ingestion, preprocessing, model training, evaluation, and Flask API deployment",
      "Reduced model inference time by 35% through architecture pruning and optimized batch processing",
      "Deployed real-time object detection system using OpenCV and Flask, accessible via REST endpoint",
    ],
    stack: {
      languages:    ["Python"],
      frameworks:   ["TensorFlow", "Keras", "Scikit-learn", "Flask"],
      libraries:    ["OpenCV", "NumPy", "Pandas", "Matplotlib"],
      architecture: ["CNN Architecture", "TF-IDF Pipeline", "REST Inference API"],
      deployment:   ["Flask Server", "Docker", "Google Colab"],
    },
    metrics: [
      { label: "ML/DL models built",       value: "5+" },
      { label: "Image classification acc.", value: "85%" },
      { label: "Inference time reduced",    value: "35%" },
      { label: "Training samples",          value: "3,000+" },
    ],
  },
  {
    id: 3,
    role: "Machine Learning & Data Science Intern",
    company: "Blackbucks",
    period: "May – June 2024",
    duration: "2 months",
    location: "Remote",
    type: "Data Science & ML Engineering",
    accentColor: C.green,
    accentDim: C.greenDim,
    certId: "1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY",
    responsibilities: [
      "Processed and cleaned datasets exceeding 100,000 records using Pandas and NumPy, resolving nulls, duplicates, and schema inconsistencies",
      "Built 6 supervised learning models (Logistic Regression, SVM, Random Forest, XGBoost) with cross-validated accuracy reaching 92%",
      "Engineered 15+ features using domain analysis, correlation filtering, and PCA — improving model F1-score by 12%",
      "Built a Fake News Detection classifier using TF-IDF vectorization and Logistic Regression, achieving 89% accuracy on 50K+ news articles",
      "Automated data cleaning and validation workflows, reducing manual preprocessing time by 60%",
    ],
    stack: {
      languages:    ["Python"],
      frameworks:   ["Scikit-learn", "XGBoost"],
      libraries:    ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      architecture: ["Supervised Learning Pipeline", "TF-IDF + Logistic Regression", "Feature Engineering"],
      deployment:   ["Jupyter Notebook", "GitHub"],
    },
    metrics: [
      { label: "Records processed",        value: "100,000+" },
      { label: "Models trained",            value: "6" },
      { label: "Best model accuracy",       value: "92%" },
      { label: "Fake news classifier acc.", value: "89%" },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */
const getCertUrl  = (id) => `https://drive.google.com/file/d/${id}/view`;
const getThumbUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w800`;

function useInView(threshold = 0.12) {
  const ref  = useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, inView];
}

/* ─── Thin divider ─── */
function Hr({ style }) {
  return <div style={{ height: "1px", background: C.border, ...style }} />;
}

/* ─── Stack table row ─── */
function StackRow({ label, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "0.55rem 0", borderBottom: `1px solid ${C.border}` }}>
      <span style={{ fontSize: "0.72rem", fontFamily: "'DM Mono',monospace", color: C.muted, letterSpacing: "0.06em", minWidth: "100px", paddingTop: "0.15rem", flexShrink: 0 }}>
        {label}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {items.map((t, i) => (
          <span key={i} style={{
            padding: "0.2rem 0.6rem", borderRadius: "4px",
            background: C.surface3, border: `1px solid ${C.border2}`,
            fontSize: "0.72rem", fontWeight: 500, color: C.muted2,
            fontFamily: "'DM Mono',monospace",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INTERNSHIP CARD
═══════════════════════════════════════════════════════════════ */
function InternshipCard({ data, index }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered,  setHovered]  = useState(false);
  const [ref, inView]           = useInView();

  const ac  = data.accentColor;
  const dim = data.accentDim;

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    C.surface,
        border:        `1px solid ${hovered ? ac + "28" : C.border}`,
        borderRadius:  "18px",
        overflow:      "hidden",
        transition:    "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        transform:     hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow:     hovered ? `0 20px 56px rgba(0,0,0,0.45)` : "0 2px 16px rgba(0,0,0,0.3)",
        opacity:       inView ? 1 : 0,
        animation:     inView ? `cardReveal 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s both` : "none",
      }}
    >
      {/* Accent top line */}
      <div style={{ height: "2px", background: `linear-gradient(90deg, ${ac}, transparent 70%)` }} />

      {/* ── HEADER ── */}
      <div style={{ padding: "1.75rem 2rem 0" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>

          {/* Left: role + company */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.4rem" }}>
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "0.68rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: ac, background: dim,
                border: `1px solid ${ac}30`,
                padding: "0.2rem 0.6rem", borderRadius: "4px",
              }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: "0.72rem", color: C.muted, fontFamily: "'DM Mono',monospace", letterSpacing: "0.08em" }}>
                {data.type}
              </span>
            </div>

            <h3 style={{
              fontFamily: "'Instrument Serif',serif",
              fontSize: "1.45rem", fontWeight: 400,
              color: C.text, letterSpacing: "-0.025em",
              lineHeight: 1.2, marginBottom: "0.3rem",
            }}>
              {data.role}
            </h3>
            <div style={{ fontSize: "1rem", fontWeight: 600, color: C.muted2 }}>{data.company}</div>
          </div>

          {/* Right: meta + cert link */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", alignItems: "flex-end", flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.775rem", color: C.muted, fontFamily: "'DM Mono',monospace" }}>
              <Calendar size={12} style={{ color: C.muted }} /> {data.period} · {data.duration}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.775rem", color: C.muted, fontFamily: "'DM Mono',monospace" }}>
              <MapPin size={12} style={{ color: C.muted }} /> {data.location}
            </div>
            <a
              href={getCertUrl(data.certId)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.3rem",
                marginTop: "0.25rem",
                fontSize: "0.72rem", fontWeight: 600, color: ac,
                fontFamily: "'DM Mono',monospace",
                textDecoration: "none", letterSpacing: "0.04em",
                padding: "0.25rem 0.65rem",
                border: `1px solid ${ac}30`,
                borderRadius: "5px",
                background: dim,
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = ac + "18"; e.currentTarget.style.borderColor = ac + "60"; }}
              onMouseLeave={e => { e.currentTarget.style.background = dim; e.currentTarget.style.borderColor = ac + "30"; }}
            >
              <ExternalLink size={10} /> View Certificate
            </a>
          </div>
        </div>

        <Hr />

        {/* ── METRICS ROW ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          margin: "0 -2rem",
          borderBottom: `1px solid ${C.border}`,
        }}>
          {data.metrics.map((m, i) => (
            <div key={i} style={{
              padding: "1rem 1.25rem",
              borderRight: i < data.metrics.length - 1 ? `1px solid ${C.border}` : "none",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: "1.45rem", fontWeight: 400,
                color: ac, letterSpacing: "-0.02em",
                marginBottom: "0.2rem",
              }}>
                {m.value}
              </div>
              <div style={{ fontSize: "0.68rem", color: C.muted, lineHeight: 1.4, fontWeight: 500 }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RESPONSIBILITIES ── */}
      <div style={{ padding: "1.5rem 2rem 0" }}>
        <div style={{ fontSize: "0.67rem", fontWeight: 700, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono',monospace", marginBottom: "1rem" }}>
          Key Contributions
        </div>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.5rem" }}>
          {data.responsibilities.map((r, i) => (
            <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <span style={{
                marginTop: "0.35rem", width: "5px", height: "5px", borderRadius: "50%",
                background: ac, flexShrink: 0, opacity: 0.9,
              }} />
              <span style={{ fontSize: "0.85rem", color: C.muted2, lineHeight: 1.7, fontWeight: 400 }}>
                {r}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── EXPAND TOGGLE ── */}
      <button
        onClick={() => setExpanded(v => !v)}
        style={{
          width: "100%", background: "none", border: "none",
          borderTop: `1px solid ${C.border}`,
          padding: "0.9rem 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer",
          color: C.muted, fontSize: "0.775rem", fontFamily: "'DM Mono',monospace",
          fontWeight: 500, letterSpacing: "0.06em",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.background = C.surface2}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        <span>{expanded ? "Hide technical details" : "View technical stack & architecture"}</span>
        {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {/* ── EXPANDABLE: STACK ── */}
      {expanded && (
        <div style={{
          padding: "1.5rem 2rem 2rem",
          background: C.surface2,
          borderTop: `1px solid ${C.border}`,
          animation: "expandDown 0.25s ease both",
        }}>
          <div style={{ fontSize: "0.67rem", fontWeight: 700, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono',monospace", marginBottom: "1rem" }}>
            Technical Stack
          </div>

          <div style={{ borderTop: `1px solid ${C.border}` }}>
            <StackRow label="Languages"    items={data.stack.languages} />
            <StackRow label="Frameworks"   items={data.stack.frameworks} />
            <StackRow label="Libraries"    items={data.stack.libraries} />
            <StackRow label="Architecture" items={data.stack.architecture} />
            <StackRow label="Deployment"   items={data.stack.deployment} />
          </div>

          {/* Certificate preview thumbnail */}
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ fontSize: "0.67rem", fontWeight: 700, color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Mono',monospace", marginBottom: "0.75rem" }}>
              Certificate of Completion
            </div>
            <div style={{
              borderRadius: "10px", overflow: "hidden",
              border: `1px solid ${C.border2}`,
              background: C.surface3,
              position: "relative", maxWidth: "380px",
            }}>
              <img
                src={getThumbUrl(data.certId)}
                alt={`${data.company} certificate`}
                style={{ width: "100%", display: "block", opacity: 0.85 }}
                loading="lazy"
              />
              <a
                href={getCertUrl(data.certId)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(0,0,0,0)",
                  transition: "background 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(0,0,0,0.55)"; e.currentTarget.querySelector("span").style.opacity = "1"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0)"; e.currentTarget.querySelector("span").style.opacity = "0"; }}
              >
                <span style={{
                  opacity: 0, transition: "opacity 0.2s ease",
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  fontSize: "0.8rem", fontWeight: 600, color: "#fff",
                  fontFamily: "'DM Mono',monospace",
                  padding: "0.5rem 1rem",
                  background: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "6px",
                }}>
                  <ArrowUpRight size={13} /> Open Certificate
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════ */
export default function Internships() {
  const [scrollPct, setScrollPct] = React.useState(0);
  const [headerRef, headerIn]     = useInView(0.2);
  const [summaryRef, summaryIn]   = useInView(0.2);

  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── GLOBAL CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500;600&family=Geist:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body {
          font-family:'Geist','DM Sans',system-ui,sans-serif;
          background:${C.bg};
          color:${C.text};
          -webkit-font-smoothing:antialiased;
          overflow-x:hidden;
        }
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
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes expandDown {
          from { opacity:0; transform:translateY(-8px); }
          to   { opacity:1; transform:translateY(0); }
        }

        @media (max-width:768px) {
          .metrics-row { grid-template-columns:repeat(2,1fr) !important; }
          .header-row  { flex-direction:column !important; gap:1rem !important; }
          .summary-grid { grid-template-columns:1fr 1fr !important; }
        }
        @media (max-width:520px) {
          .metrics-row { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      {/* Scroll progress */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"2px", background:C.surface, zIndex:9999 }}>
        <div style={{ width:`${scrollPct}%`, height:"100%", background:`linear-gradient(90deg,${C.accent},#a78bfa)`, transition:"width 0.1s linear" }} />
      </div>

      {/* Very faint mesh bg */}
      <div style={{
        position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
        backgroundImage:`radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,127,255,0.04) 0%, transparent 60%)`,
      }} />

      {/* ═══════ WRAPPER ═══════ */}
      <div style={{ maxWidth:"960px", margin:"0 auto", padding:"0 1.5rem", position:"relative", zIndex:1 }}>

        {/* ══════════════════ HEADER ══════════════════ */}
        <header ref={headerRef} style={{ padding:"5rem 0 3.5rem", borderBottom:`1px solid ${C.border}` }}>

          <div style={{
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeSlide 0.5s cubic-bezier(0.22,1,0.36,1) both" : "none",
            display:"flex", alignItems:"center", gap:"0.65rem", marginBottom:"1.5rem",
          }}>
            <div style={{ width:"22px", height:"1px", background:C.accent }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:C.accent }}>
              Industry Experience · 2024 – 2025
            </span>
          </div>

          <h1 style={{
            fontFamily:"'Instrument Serif',serif",
            fontSize:"clamp(2.4rem,5vw,3.8rem)",
            fontWeight:400, color:C.text,
            lineHeight:1.1, letterSpacing:"-0.025em",
            marginBottom:"1rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.08s both" : "none",
          }}>
            Professional Experience
          </h1>

          <p style={{
            fontSize:"1rem", color:C.muted2, lineHeight:1.8,
            maxWidth:"600px", fontWeight:400,
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.16s both" : "none",
          }}>
            Three industry internships across full-stack engineering, machine learning,
            and data science — each resulting in production-deployed or independently
            validated outcomes.
          </p>

          {/* Quick-scan header stats */}
          <div style={{
            display:"flex", gap:"2.5rem", marginTop:"2.5rem",
            paddingTop:"2rem", borderTop:`1px solid ${C.border}`,
            flexWrap:"wrap",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.24s both" : "none",
          }}>
            {[
              { value:"3",    label:"Internships" },
              { value:"7+",   label:"Months total" },
              { value:"15+",  label:"Projects shipped" },
              { value:"3",    label:"Verified certificates" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.7rem", color:C.text, letterSpacing:"-0.03em" }}>{s.value}</div>
                <div style={{ fontSize:"0.75rem", color:C.muted, marginTop:"0.1rem", fontWeight:500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ══════════════════ TIMELINE LABEL ══════════════════ */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"2rem 0 1.5rem", flexWrap:"wrap", gap:"0.75rem" }}>
          <div style={{ display:"flex", gap:"1rem", alignItems:"center" }}>
            {[
              { color:C.accent,   label:"Full-Stack" },
              { color:"#a78bfa",  label:"AI / ML" },
              { color:C.green,    label:"Data Science" },
            ].map((b, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"0.4rem" }}>
                <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:b.color, flexShrink:0 }} />
                <span style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>{b.label}</span>
              </div>
            ))}
          </div>
          <span style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
            Chronological · newest first
          </span>
        </div>

        {/* ══════════════════ CARDS ══════════════════ */}
        <section style={{ display:"flex", flexDirection:"column", gap:"1.25rem", paddingBottom:"3.5rem" }}>
          {internships.map((d, i) => (
            <InternshipCard key={d.id} data={d} index={i} />
          ))}
        </section>

        {/* ══════════════════ AGGREGATE SUMMARY ══════════════════ */}
        <section ref={summaryRef} style={{
          borderTop:`1px solid ${C.border}`, paddingTop:"2.5rem", paddingBottom:"4rem",
          opacity: summaryIn ? 1 : 0,
          animation: summaryIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both" : "none",
        }}>
          <div style={{ marginBottom:"1.75rem" }}>
            <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:C.muted, marginBottom:"0.5rem" }}>
              Aggregate Overview
            </div>
            <h2 style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", fontWeight:400, color:C.text, letterSpacing:"-0.02em" }}>
              Combined Impact
            </h2>
          </div>

          <div className="summary-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
            {[
              { value:"5+",      label:"Production apps",          sub:"Deployed and serving real users" },
              { value:"100K+",   label:"Data records processed",   sub:"Cleaned, engineered, and modeled" },
              { value:"6",       label:"ML models trained",        sub:"Supervised classification & CV" },
              { value:"≥85%",    label:"Model accuracy achieved",  sub:"Across NLP and image tasks" },
              { value:"40%",     label:"API latency reduced",      sub:"Through indexing and caching" },
              { value:"1,000+",  label:"Active users served",      sub:"Post-launch, live product" },
            ].map((s, i) => (
              <div key={i} style={{
                padding:"1.25rem 1.5rem",
                background:C.surface, border:`1px solid ${C.border}`,
                borderRadius:"12px",
                transition:"border-color 0.25s ease",
                animation: summaryIn ? `cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both` : "none",
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = C.border3}
                onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
              >
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.6rem", color:C.text, letterSpacing:"-0.02em", marginBottom:"0.3rem" }}>
                  {s.value}
                </div>
                <div style={{ fontSize:"0.8rem", fontWeight:600, color:C.muted2, marginBottom:"0.2rem" }}>{s.label}</div>
                <div style={{ fontSize:"0.72rem", color:C.muted, lineHeight:1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════ FOOTER STRIP ══════════════════ */}
        <footer style={{ borderTop:`1px solid ${C.border}`, padding:"2rem 0", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.55rem" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:C.green }} />
            <span style={{ fontSize:"0.75rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
              All certificates independently verifiable via Google Drive
            </span>
          </div>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {[
              { label:"Email",    href:"mailto:g.sivasatyasaibhagavan@gmail.com" },
              { label:"LinkedIn", href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" },
              { label:"GitHub",   href:"https://github.com/bhagavan444" },
            ].map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize:"0.75rem", color:C.muted, textDecoration:"none", fontFamily:"'DM Mono',monospace", transition:"color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = C.text}
                onMouseLeave={e => e.currentTarget.style.color = C.muted}
              >
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}