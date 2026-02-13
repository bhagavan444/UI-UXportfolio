"use client";

import React, { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS - WHITE THEME
═══════════════════════════════════════════════════════════════ */
const C = {
  bg:         "#ffffff",
  surface:    "#f8f9fa",
  raised:     "#f0f2f5",
  overlay:    "#e8eaf0",
  drawer:     "#ffffff",
  ink:        "#000000",
  inkSub:     "#3a3a42",
  inkMute:    "#6a6a75",
  inkFaint:   "#c0c0c8",
  line:       "rgba(0,0,0,0.08)",
  lineMd:     "rgba(0,0,0,0.12)",
  lineHi:     "rgba(0,0,0,0.18)",
  accent:     "#5b7fff",
  accentSoft: "rgba(91,127,255,0.08)",
  accentLine: "rgba(91,127,255,0.25)",
  green:      "#10b981",
  greenDim:   "rgba(16,185,129,0.08)",
  greenLine:  "rgba(16,185,129,0.25)",
  tint:       ["#5b7fff", "#8b5cf6", "#6366f1"],
};

const F = {
  display: "'Fraunces', 'DM Serif Display', serif",
  body:    "'Inter', system-ui, sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', monospace",
};

/* ═══════════════════════════════════════════════════════════════
   EDUCATION DATA
═══════════════════════════════════════════════════════════════ */
const EDU = [
  {
    id: 1, idx: "01", level: "Undergraduate",
    degree: "B.Tech", stream: "Artificial Intelligence & Data Science",
    institution: "Ramachandra College of Engineering", affiliation: "JNTUK",
    duration: "2022 – 2026", score: "7.9 CGPA", location: "Eluru, Andhra Pradesh",
    status: "current", certId: "1wxnzvsS3MA7xWSxuXKeIkS8GaQoG4Y1a",
    primary: true, tint: "#5b7fff",
    synopsis: "Specialising at the intersection of machine intelligence and scalable software — building systems that move from notebook to production.",
    outcomes: [
      { icon: "↗", label: "10+ AI products deployed", detail: "NLP, computer vision & recommendation systems in production" },
      { icon: "◈", label: "AI/ML internships at tech firms", detail: "Industry pipelines, real data, real-world stakes" },
      { icon: "⬡", label: "20+ professional certifications", detail: "AWS, TensorFlow, cloud & React — applied, not collected" },
      { icon: "⌘", label: "Hackathon finalist recognition", detail: "Placed in 24-hour multi-institution competitive builds" },
    ],
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "MERN Stack", "Python", "MLOps", "React.js", "Neural Networks"],
    stats: [{ v: "7.9", l: "CGPA" }, { v: "10+", l: "Projects" }, { v: "20+", l: "Certs" }],
  },
  {
    id: 2, idx: "02", level: "Pre-University",
    degree: "Intermediate", stream: "Mathematics, Physics & Chemistry",
    institution: "Srividhya Junior College", affiliation: "Board of Intermediate",
    duration: "2020 – 2022", score: "7.8 CGPA", location: "Gudivada, Andhra Pradesh",
    status: "completed", certId: "1N1K1j6QGrgNPNL2D9UmfJAL2PVSulhPJ",
    primary: false, tint: "#8b5cf6",
    synopsis: "Pre-engineering foundation built on applied mathematics and physical reasoning — the problem-solving instincts that drive every technical decision today.",
    outcomes: [
      { icon: "∫", label: "Top performer in Mathematics", detail: "Calculus & algebra — core to ML and optimization" },
      { icon: "⚛", label: "Strong Physics foundation", detail: "First-principles thinking applied to systems design" },
    ],
    skills: ["Mathematical Reasoning", "Analytical Thinking", "Physics", "Problem Solving"],
    stats: [{ v: "7.8", l: "CGPA" }],
  },
  {
    id: 3, idx: "03", level: "Secondary Education",
    degree: "Secondary", stream: "SSC Board Examination",
    institution: "Montessori English Medium High School", affiliation: "SSC Board",
    duration: "2019 – 2020", score: "9.5 GPA", location: "Gudivada, Andhra Pradesh",
    status: "completed", certId: "1p1RXnVn9jySamu8OiIWF0WFhe7G6QxiL",
    primary: false, tint: "#6366f1",
    synopsis: "Graduated as school topper with distinction. A perfect Mathematics score was the first signal of an aptitude that would define the career trajectory ahead.",
    outcomes: [
      { icon: "◉", label: "School topper — 9.5 GPA", detail: "Ranked first in graduating class across all subjects" },
      { icon: "✦", label: "100% score in Mathematics", detail: "The subject that anchors every technical decision since" },
    ],
    skills: ["Academic Excellence", "Leadership", "Critical Thinking"],
    stats: [{ v: "9.5", l: "GPA" }, { v: "#1", l: "Class Rank" }],
  },
];

const thumbUrl = (id) => `https://lh3.googleusercontent.com/d/${id}`;
const driveUrl = (id) => `https://drive.google.com/file/d/${id}/view`;

/* ═══════════════════════════════════════════════════════════════
   INTERSECTION OBSERVER HOOK
═══════════════════════════════════════════════════════════════ */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, 
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED STAT COUNTER
═══════════════════════════════════════════════════════════════ */
function AnimStat({ v, l, tint }) {
  const [ref, inView] = useInView(0.3);
  const [disp, setDisp] = useState("0");
  const num = parseFloat(v);
  const isNum = !isNaN(num);
  
  useEffect(() => {
    if (!inView || !isNum) { 
      if (!isNum) setDisp(v); 
      return; 
    }
    let frame = 0;
    const tick = () => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / 50, 3);
      setDisp(parseFloat((eased * num).toFixed(1)).toString());
      if (frame < 50) requestAnimationFrame(tick); 
      else setDisp(v);
    };
    requestAnimationFrame(tick);
  }, [inView, isNum, num, v]);
  
  return (
    <div ref={ref} style={{ textAlign: "center", minWidth: "60px" }}>
      <div 
        style={{ 
          fontFamily: F.display, 
          fontSize: "28px", 
          fontWeight: 700, 
          color: tint || C.ink, 
          lineHeight: 1, 
          letterSpacing: "-0.02em" 
        }}
      >
        {isNum ? disp : v}
      </div>
      <div 
        style={{ 
          fontFamily: F.mono, 
          fontSize: "10px", 
          letterSpacing: "0.15em", 
          color: C.inkMute, 
          textTransform: "uppercase", 
          marginTop: "6px",
          fontWeight: 600,
        }}
      >
        {l}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CERTIFICATE THUMBNAIL
═══════════════════════════════════════════════════════════════ */
function CertThumb({ edu, height = "240px", onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", 
        height, 
        borderRadius: "16px", 
        overflow: "hidden",
        background: C.raised, 
        border: `1.5px solid ${C.line}`,
        cursor: onClick ? "pointer" : "default", 
        flexShrink: 0,
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "scale(1.02) translateY(-4px)" : "scale(1)",
        boxShadow: hovered 
          ? `0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px ${C.line}`
          : "0 4px 16px rgba(0,0,0,0.04)",
      }}
    >
      {!err ? (
        <img
          src={thumbUrl(edu.certId)}
          alt={`${edu.degree} certificate`}
          onLoad={() => setLoaded(true)}
          onError={() => setErr(true)}
          style={{
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      ) : (
        <div 
          style={{ 
            width: "100%", 
            height: "100%", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            gap: "12px" 
          }}
        >
          <div style={{ fontFamily: F.mono, fontSize: "40px", color: C.inkFaint }}>◱</div>
          <div 
            style={{ 
              fontFamily: F.mono, 
              fontSize: "11px", 
              letterSpacing: "0.15em", 
              color: C.inkMute, 
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Certificate
          </div>
        </div>
      )}
      
      {/* Gradient Overlay */}
      <div 
        style={{ 
          position: "absolute", 
          inset: 0, 
          background: "linear-gradient(to top, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.3) 55%, transparent 100%)", 
          pointerEvents: "none" 
        }} 
      />
      
      {/* Top Accent Line */}
      <div 
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          right: 0, 
          height: "3px", 
          background: `linear-gradient(90deg, ${edu.tint}, transparent 70%)` 
        }} 
      />
      
      {/* Index Watermark */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "12px", 
          left: "16px", 
          fontFamily: F.display, 
          fontSize: "72px", 
          fontWeight: 700, 
          color: "rgba(0,0,0,0.03)", 
          lineHeight: 1, 
          userSelect: "none", 
          pointerEvents: "none" 
        }}
      >
        {edu.idx}
      </div>
      
      {/* Status Badge */}
      {edu.status === "current" ? (
        <div 
          style={{ 
            position: "absolute", 
            top: "16px", 
            right: "16px", 
            display: "flex", 
            alignItems: "center", 
            gap: "8px", 
            padding: "6px 14px", 
            borderRadius: "999px", 
            background: C.greenDim, 
            border: `1.5px solid ${C.greenLine}`,
            boxShadow: "0 2px 8px rgba(16,185,129,0.15)",
          }}
        >
          <div 
            style={{ 
              width: "7px", 
              height: "7px", 
              borderRadius: "50%", 
              background: C.green, 
              animation: "statusPulse 2.5s ease-in-out infinite" 
            }} 
          />
          <span 
            style={{ 
              fontFamily: F.mono, 
              fontSize: "10px", 
              letterSpacing: "0.12em", 
              color: C.green, 
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Active
          </span>
        </div>
      ) : (
        <div 
          style={{ 
            position: "absolute", 
            top: "16px", 
            right: "16px", 
            padding: "6px 14px", 
            borderRadius: "999px", 
            background: "rgba(0,0,0,0.04)", 
            border: `1.5px solid ${C.line}`,
          }}
        >
          <span 
            style={{ 
              fontFamily: F.mono, 
              fontSize: "10px", 
              letterSpacing: "0.12em", 
              color: C.inkMute, 
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Completed
          </span>
        </div>
      )}
      
      {/* View Credential CTA */}
      {onClick && (
        <div style={{ position: "absolute", bottom: "16px", right: "16px" }}>
          <a
            href={driveUrl(edu.certId)} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "6px", 
              padding: "8px 16px", 
              borderRadius: "10px", 
              background: "rgba(255,255,255,0.95)", 
              border: `1.5px solid ${C.lineMd}`, 
              color: C.inkSub, 
              fontFamily: F.mono, 
              fontSize: "11px", 
              letterSpacing: "0.08em", 
              textDecoration: "none", 
              backdropFilter: "blur(12px)", 
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              fontWeight: 600,
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.background = C.accentSoft; 
              e.currentTarget.style.borderColor = C.accentLine; 
              e.currentTarget.style.color = C.accent;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.background = "rgba(255,255,255,0.95)"; 
              e.currentTarget.style.borderColor = C.lineMd; 
              e.currentTarget.style.color = C.inkSub;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            VIEW CREDENTIAL ↗
          </a>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DRAWER COMPONENT
═══════════════════════════════════════════════════════════════ */
function Drawer({ edu, onClose }) {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true));
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    
    return () => { 
      cancelAnimationFrame(raf); 
      document.removeEventListener("keydown", onKey); 
      document.body.style.overflow = ""; 
    };
  }, [onClose]);
  
  return (
    <div 
      onClick={onClose} 
      style={{ 
        position: "fixed", 
        inset: 0, 
        zIndex: 9000, 
        background: "rgba(0,0,0,0.4)", 
        backdropFilter: "blur(12px)", 
        opacity: open ? 1 : 0, 
        transition: "opacity 0.35s ease" 
      }}
    >
      <div 
        onClick={e => e.stopPropagation()} 
        style={{ 
          position: "fixed", 
          top: 0, 
          right: 0, 
          bottom: 0, 
          width: "min(560px, 100vw)", 
          background: C.drawer, 
          borderLeft: `1.5px solid ${C.lineMd}`, 
          display: "flex", 
          flexDirection: "column", 
          transform: open ? "translateX(0)" : "translateX(48px)", 
          opacity: open ? 1 : 0, 
          transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease", 
          overflowY: "auto",
          boxShadow: "-16px 0 64px rgba(0,0,0,0.15)",
        }}
      >
        {/* Top Accent Line */}
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            right: 0, 
            height: "3px", 
            background: `linear-gradient(90deg, ${edu.tint}, transparent 65%)` 
          }} 
        />
        
        {/* Header */}
        <div 
          style={{ 
            position: "sticky", 
            top: 0, 
            zIndex: 10, 
            background: C.drawer, 
            borderBottom: `1.5px solid ${C.line}`, 
            padding: "28px 32px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between",
            backdropFilter: "blur(20px)",
          }}
        >
          <div>
            <div 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                color: C.inkMute, 
                textTransform: "uppercase", 
                marginBottom: "8px",
                fontWeight: 600,
              }}
            >
              {edu.level} · {edu.affiliation}
            </div>
            <div 
              style={{ 
                fontFamily: F.display, 
                fontSize: "28px", 
                fontWeight: 700, 
                color: C.ink, 
                letterSpacing: "-0.02em" 
              }}
            >
              {edu.degree}
            </div>
          </div>
          <button 
            onClick={onClose} 
            style={{ 
              width: "40px", 
              height: "40px", 
              borderRadius: "10px", 
              border: `1.5px solid ${C.line}`, 
              background: "transparent", 
              color: C.inkMute, 
              cursor: "pointer", 
              fontSize: "20px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              flexShrink: 0, 
              transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              fontWeight: 300,
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.borderColor = C.lineHi; 
              e.currentTarget.style.color = C.ink;
              e.currentTarget.style.background = "rgba(0,0,0,0.02)";
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.borderColor = C.line; 
              e.currentTarget.style.color = C.inkMute;
              e.currentTarget.style.background = "transparent";
            }}
          >
            ×
          </button>
        </div>
        
        {/* Body */}
        <div style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Certificate Image */}
          <CertThumb edu={edu} height="220px" />
          
          {/* Meta Grid */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "1.5px", 
              background: C.line, 
              borderRadius: "14px", 
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
            }}
          >
            {[
              ["Institution", edu.institution], 
              ["Score", edu.score], 
              ["Duration", edu.duration], 
              ["Location", edu.location]
            ].map(([k, val]) => (
              <div key={k} style={{ background: "#fff", padding: "18px 20px" }}>
                <div 
                  style={{ 
                    fontFamily: F.mono, 
                    fontSize: "10px", 
                    letterSpacing: "0.15em", 
                    color: C.inkMute, 
                    textTransform: "uppercase", 
                    marginBottom: "6px",
                    fontWeight: 600,
                  }}
                >
                  {k}
                </div>
                <div 
                  style={{ 
                    fontFamily: F.body, 
                    fontSize: "14px", 
                    fontWeight: 600, 
                    color: C.ink, 
                    lineHeight: 1.5 
                  }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>
          
          {/* Synopsis */}
          <div 
            style={{ 
              borderLeft: `3px solid ${edu.tint}`, 
              paddingLeft: "20px",
              background: C.surface,
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <p 
              style={{ 
                fontFamily: F.body, 
                fontSize: "15px", 
                color: C.inkSub, 
                lineHeight: 1.75, 
                margin: 0 
              }}
            >
              {edu.synopsis}
            </p>
          </div>
          
          {/* Outcomes */}
          <div>
            <div 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "10px", 
                letterSpacing: "0.15em", 
                color: C.inkMute, 
                textTransform: "uppercase", 
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              Key Outcomes
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {edu.outcomes.map((o, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: "flex", 
                    gap: "14px", 
                    alignItems: "flex-start", 
                    padding: "16px 18px", 
                    background: "#fff", 
                    border: `1.5px solid ${C.line}`, 
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = C.lineMd;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = C.line;
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <span 
                    style={{ 
                      color: edu.tint, 
                      fontSize: "16px", 
                      fontWeight: 700, 
                      flexShrink: 0, 
                      marginTop: "2px", 
                      width: "20px" 
                    }}
                  >
                    {o.icon}
                  </span>
                  <div>
                    <div 
                      style={{ 
                        fontFamily: F.body, 
                        fontSize: "14px", 
                        fontWeight: 600, 
                        color: C.ink, 
                        marginBottom: "4px" 
                      }}
                    >
                      {o.label}
                    </div>
                    <div 
                      style={{ 
                        fontFamily: F.body, 
                        fontSize: "13px", 
                        color: C.inkSub, 
                        lineHeight: 1.6 
                      }}
                    >
                      {o.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Skills */}
          <div>
            <div 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "10px", 
                letterSpacing: "0.15em", 
                color: C.inkMute, 
                textTransform: "uppercase", 
                marginBottom: "16px",
                fontWeight: 600,
              }}
            >
              Focus Areas
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {edu.skills.map(s => (
                <span 
                  key={s} 
                  style={{ 
                    padding: "6px 16px", 
                    borderRadius: "8px", 
                    fontFamily: F.mono, 
                    fontSize: "12px", 
                    color: C.inkSub, 
                    background: C.surface, 
                    border: `1.5px solid ${C.line}`,
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          
          {/* Full Certificate Link */}
          <a 
            href={driveUrl(edu.certId)} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              gap: "10px", 
              padding: "16px", 
              borderRadius: "12px", 
              background: C.accentSoft, 
              border: `1.5px solid ${C.accentLine}`, 
              color: C.accent, 
              textDecoration: "none", 
              fontFamily: F.mono, 
              fontSize: "12px", 
              letterSpacing: "0.1em", 
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              fontWeight: 600,
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.background = "rgba(91,127,255,0.15)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.background = C.accentSoft;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            OPEN FULL CERTIFICATE ↗
          </a>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EDUCATION BLOCK COMPONENT
═══════════════════════════════════════════════════════════════ */
function EduBlock({ edu, position, onOpen }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  const isPrimary = edu.primary;

  return (
    <div 
      ref={ref} 
      style={{ 
        display: "flex", 
        gap: 0, 
        opacity: inView ? 1 : 0, 
        transform: inView ? "translateY(0)" : "translateY(32px)", 
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${position * 150}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${position * 150}ms` 
      }}
    >
      {/* Timeline Rail */}
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          width: "50px", 
          flexShrink: 0, 
          paddingTop: "12px", 
          marginRight: "40px" 
        }}
      >
        <div 
          style={{ 
            width: isPrimary ? "14px" : "10px", 
            height: isPrimary ? "14px" : "10px", 
            borderRadius: "50%", 
            background: isPrimary ? edu.tint : C.inkFaint, 
            boxShadow: isPrimary 
              ? `0 0 0 5px ${edu.tint}15, 0 0 20px ${edu.tint}20` 
              : "none", 
            flexShrink: 0, 
            marginTop: isPrimary ? 0 : "2px",
            transition: "all 0.3s ease",
          }} 
        />
        {position < EDU.length - 1 && (
          <div 
            style={{ 
              width: "2px", 
              flex: 1, 
              minHeight: "80px", 
              marginTop: "12px", 
              marginBottom: "-32px", 
              background: `linear-gradient(to bottom, ${C.inkFaint} 0%, transparent 100%)` 
            }} 
          />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: position < EDU.length - 1 ? "80px" : 0 }}>
        {/* Meta Row */}
        <div 
          style={{ 
            display: "flex", 
            alignItems: "center", 
            flexWrap: "wrap", 
            gap: "12px", 
            marginBottom: "18px" 
          }}
        >
          <span 
            style={{ 
              fontFamily: F.mono, 
              fontSize: "11px", 
              letterSpacing: "0.12em", 
              color: C.inkMute, 
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {edu.duration}
          </span>
          <span 
            style={{ 
              width: "4px", 
              height: "4px", 
              borderRadius: "50%", 
              background: C.inkFaint 
            }} 
          />
          <span 
            style={{ 
              fontFamily: F.mono, 
              fontSize: "11px", 
              letterSpacing: "0.12em", 
              color: C.inkMute, 
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {edu.level}
          </span>
          {edu.status === "current" && (
            <span 
              style={{ 
                padding: "4px 12px", 
                borderRadius: "6px", 
                fontFamily: F.mono, 
                fontSize: "10px", 
                letterSpacing: "0.1em", 
                color: C.green, 
                background: C.greenDim, 
                border: `1.5px solid ${C.greenLine}`,
                fontWeight: 600,
              }}
            >
              In Progress
            </span>
          )}
        </div>

        {isPrimary ? (
          <div 
            onMouseEnter={() => setHov(true)} 
            onMouseLeave={() => setHov(false)}
          >
            {/* Degree Headline */}
            <div style={{ marginBottom: "24px" }}>
              <h3 
                style={{ 
                  fontFamily: F.display, 
                  fontSize: "clamp(32px, 5vw, 48px)", 
                  fontWeight: 700, 
                  color: C.ink, 
                  letterSpacing: "-0.02em", 
                  lineHeight: 1.1, 
                  margin: "0 0 10px" 
                }}
              >
                {edu.degree}
              </h3>
              <div 
                style={{ 
                  fontFamily: F.body, 
                  fontSize: "17px", 
                  fontWeight: 600, 
                  color: edu.tint,
                  marginBottom: "6px",
                }}
              >
                {edu.stream}
              </div>
              <div 
                style={{ 
                  fontFamily: F.body, 
                  fontSize: "15px", 
                  fontWeight: 500, 
                  color: C.inkSub 
                }}
              >
                {edu.institution}
                <span style={{ color: C.inkMute, margin: "0 8px" }}>·</span>
                <span style={{ color: C.inkMute, fontWeight: 400 }}>
                  {edu.affiliation}
                </span>
              </div>
            </div>
            
            {/* 2-Column Card */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "280px 1fr", 
                gap: "0", 
                background: "#fff", 
                border: `1.5px solid ${hov ? C.lineMd : C.line}`, 
                borderRadius: "20px", 
                overflow: "hidden", 
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", 
                boxShadow: hov 
                  ? "0 16px 64px rgba(0,0,0,0.08)" 
                  : "0 4px 16px rgba(0,0,0,0.03)" 
              }}
              className="edu-primary-grid"
            >
              {/* Left: Certificate */}
              <div style={{ minHeight: "320px" }}>
                <CertThumb edu={edu} height="100%" onClick={() => onOpen(edu)} />
              </div>
              
              {/* Right: Details */}
              <div 
                style={{ 
                  padding: "32px", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between", 
                  gap: "20px", 
                  borderLeft: `1.5px solid ${C.line}` 
                }}
              >
                {/* Score */}
                <div>
                  <div 
                    style={{ 
                      fontFamily: F.mono, 
                      fontSize: "11px", 
                      letterSpacing: "0.12em", 
                      color: C.inkMute, 
                      textTransform: "uppercase", 
                      marginBottom: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Academic Score
                  </div>
                  <div 
                    style={{ 
                      fontFamily: F.display, 
                      fontSize: "28px", 
                      fontWeight: 700, 
                      color: C.ink, 
                      letterSpacing: "-0.02em" 
                    }}
                  >
                    {edu.score}
                  </div>
                </div>
                
                {/* Outcomes */}
                <div 
                  style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    gap: "8px", 
                    flex: 1 
                  }}
                >
                  {edu.outcomes.map((o, i) => (
                    <div 
                      key={i} 
                      style={{ 
                        display: "flex", 
                        alignItems: "flex-start", 
                        gap: "12px", 
                        padding: "12px 14px", 
                        background: C.surface, 
                        border: `1.5px solid ${C.line}`, 
                        borderRadius: "10px" 
                      }}
                    >
                      <span 
                        style={{ 
                          color: edu.tint, 
                          fontSize: "14px", 
                          fontWeight: 700, 
                          flexShrink: 0, 
                          width: "18px", 
                          marginTop: "2px" 
                        }}
                      >
                        {o.icon}
                      </span>
                      <div>
                        <div 
                          style={{ 
                            fontFamily: F.body, 
                            fontSize: "13px", 
                            fontWeight: 600, 
                            color: C.ink, 
                            marginBottom: "3px" 
                          }}
                        >
                          {o.label}
                        </div>
                        <div 
                          style={{ 
                            fontFamily: F.body, 
                            fontSize: "12px", 
                            color: C.inkSub, 
                            lineHeight: 1.6 
                          }}
                        >
                          {o.detail}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Stats + CTA */}
                <div 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    flexWrap: "wrap", 
                    gap: "16px", 
                    paddingTop: "20px", 
                    borderTop: `1.5px solid ${C.line}` 
                  }}
                >
                  <div style={{ display: "flex", gap: "28px" }}>
                    {edu.stats.map(s => (
                      <AnimStat key={s.l} v={s.v} l={s.l} tint={edu.tint} />
                    ))}
                  </div>
                  <button 
                    onClick={() => onOpen(edu)} 
                    style={{ 
                      display: "inline-flex", 
                      alignItems: "center", 
                      gap: "8px", 
                      padding: "11px 20px", 
                      borderRadius: "10px", 
                      border: `1.5px solid ${C.lineMd}`, 
                      background: "transparent", 
                      color: C.inkSub, 
                      fontFamily: F.mono, 
                      fontSize: "11px", 
                      letterSpacing: "0.08em", 
                      cursor: "pointer", 
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      fontWeight: 600,
                    }}
                    onMouseEnter={e => { 
                      e.currentTarget.style.background = C.accentSoft; 
                      e.currentTarget.style.borderColor = C.accentLine; 
                      e.currentTarget.style.color = C.accent;
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => { 
                      e.currentTarget.style.background = "transparent"; 
                      e.currentTarget.style.borderColor = C.lineMd; 
                      e.currentTarget.style.color = C.inkSub;
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    FULL DETAILS →
                  </button>
                </div>
              </div>
            </div>
            
            {/* Skills */}
            <div 
              style={{ 
                display: "flex", 
                flexWrap: "wrap", 
                gap: "8px", 
                marginTop: "16px" 
              }}
            >
              {edu.skills.map(s => (
                <span 
                  key={s} 
                  style={{ 
                    padding: "5px 14px", 
                    borderRadius: "6px", 
                    fontFamily: F.mono, 
                    fontSize: "12px", 
                    color: C.inkMute, 
                    background: C.surface, 
                    border: `1.5px solid ${C.line}`,
                    fontWeight: 500,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Degree Headline */}
            <div style={{ marginBottom: "16px" }}>
              <h3 
                style={{ 
                  fontFamily: F.display, 
                  fontSize: "28px", 
                  fontWeight: 700, 
                  color: C.ink, 
                  letterSpacing: "-0.01em", 
                  margin: "0 0 6px" 
                }}
              >
                {edu.degree}
              </h3>
              <div 
                style={{ 
                  fontFamily: F.body, 
                  fontSize: "14px", 
                  color: C.inkSub 
                }}
              >
                {edu.stream}
                <span style={{ color: C.inkMute, margin: "0 8px" }}>·</span>
                <span style={{ color: C.inkMute }}>{edu.institution}</span>
              </div>
            </div>
            
            {/* Horizontal Strip */}
            <div 
              onMouseEnter={() => setHov(true)} 
              onMouseLeave={() => setHov(false)}
              style={{ 
                display: "flex", 
                gap: "0", 
                alignItems: "stretch", 
                background: "#fff", 
                border: `1.5px solid ${hov ? C.lineMd : C.line}`, 
                borderRadius: "16px", 
                overflow: "hidden", 
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: hov 
                  ? "0 12px 48px rgba(0,0,0,0.06)" 
                  : "0 2px 12px rgba(0,0,0,0.02)",
              }}
            >
              {/* Small Certificate Thumbnail */}
              <div style={{ width: "160px", flexShrink: 0 }}>
                <CertThumb edu={edu} height="100%" onClick={() => onOpen(edu)} />
              </div>
              
              {/* Content */}
              <div 
                style={{ 
                  flex: 1, 
                  padding: "20px 24px", 
                  display: "flex", 
                  flexDirection: "column", 
                  justifyContent: "space-between", 
                  gap: "14px", 
                  borderLeft: `1.5px solid ${C.line}` 
                }}
              >
                <div>
                  <span 
                    style={{ 
                      display: "inline-block", 
                      fontFamily: F.mono, 
                      fontSize: "12px", 
                      letterSpacing: "0.08em", 
                      color: C.inkSub, 
                      padding: "5px 12px", 
                      background: C.surface, 
                      border: `1.5px solid ${C.line}`, 
                      borderRadius: "6px", 
                      marginBottom: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {edu.score}
                  </span>
                  <div 
                    style={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      gap: "6px" 
                    }}
                  >
                    {edu.outcomes.map((o, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          display: "flex", 
                          alignItems: "center", 
                          gap: "10px" 
                        }}
                      >
                        <span 
                          style={{ 
                            color: edu.tint, 
                            fontSize: "13px", 
                            fontWeight: 700, 
                            flexShrink: 0 
                          }}
                        >
                          {o.icon}
                        </span>
                        <span 
                          style={{ 
                            fontFamily: F.body, 
                            fontSize: "13px", 
                            fontWeight: 600, 
                            color: C.ink 
                          }}
                        >
                          {o.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div 
                  style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    flexWrap: "wrap", 
                    gap: "12px" 
                  }}
                >
                  <div style={{ display: "flex", gap: "24px" }}>
                    {edu.stats.map(s => (
                      <AnimStat key={s.l} v={s.v} l={s.l} tint={edu.tint} />
                    ))}
                  </div>
                  <button 
                    onClick={() => onOpen(edu)} 
                    style={{ 
                      padding: "9px 16px", 
                      borderRadius: "8px", 
                      border: `1.5px solid ${C.line}`, 
                      background: "transparent", 
                      color: C.inkMute, 
                      fontFamily: F.mono, 
                      fontSize: "11px", 
                      letterSpacing: "0.08em", 
                      cursor: "pointer", 
                      transition: "all 0.3s ease",
                      fontWeight: 600,
                    }}
                    onMouseEnter={e => { 
                      e.currentTarget.style.borderColor = C.lineMd; 
                      e.currentTarget.style.color = C.inkSub;
                      e.currentTarget.style.background = "rgba(0,0,0,0.02)";
                    }}
                    onMouseLeave={e => { 
                      e.currentTarget.style.borderColor = C.line; 
                      e.currentTarget.style.color = C.inkMute;
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    VIEW →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN EDUCATION COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Education() {
  const [drawer, setDrawer] = useState(null);
  const [heroIn, setHeroIn] = useState(false);
  
  useEffect(() => { 
    const raf = requestAnimationFrame(() => setHeroIn(true)); 
    return () => cancelAnimationFrame(raf); 
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
        
        .edu-root *, 
        .edu-root *::before, 
        .edu-root *::after { 
          box-sizing: border-box; 
          margin: 0; 
          padding: 0; 
        }
        
        .edu-root { 
          background: #ffffff; 
          min-height: 100vh; 
          font-family: 'Inter', system-ui, sans-serif; 
          -webkit-font-smoothing: antialiased; 
          color: #000000; 
        }
        
        .edu-root ::-webkit-scrollbar { width: 6px; }
        .edu-root ::-webkit-scrollbar-track { background: transparent; }
        .edu-root ::-webkit-scrollbar-thumb { 
          background: rgba(0,0,0,0.1); 
          border-radius: 3px; 
        }
        .edu-root ::-webkit-scrollbar-thumb:hover { 
          background: rgba(0,0,0,0.15); 
        }
        
        @keyframes statusPulse { 
          0%, 100% { opacity: 1; transform: scale(1); } 
          50% { opacity: 0.4; transform: scale(0.85); } 
        }
        
        @media(max-width: 768px) {
          .edu-inner { 
            padding: 80px 24px 100px !important; 
          }
          .edu-hero-title { 
            font-size: 48px !important; 
          }
          .edu-hero-ghost { 
            font-size: 48px !important; 
          }
          .edu-primary-grid { 
            grid-template-columns: 1fr !important; 
          }
          .edu-summary-strip { 
            flex-direction: column !important; 
            gap: 20px !important; 
          }
          .edu-summary-item { 
            border-right: none !important; 
            padding-right: 0 !important; 
            margin-right: 0 !important; 
            padding-bottom: 20px !important; 
            border-bottom: 1.5px solid rgba(0,0,0,0.08) !important; 
          }
          .edu-summary-item:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
        }
        
        @media(max-width: 480px) {
          .edu-inner { 
            padding: 60px 20px 80px !important; 
          }
          .edu-hero-title { 
            font-size: 40px !important; 
          }
          .edu-hero-ghost { 
            font-size: 40px !important; 
          }
        }
      `}</style>

      <div className="edu-root">
        <main 
          className="edu-inner" 
          style={{ 
            maxWidth: "1000px", 
            margin: "0 auto", 
            padding: "140px 48px 140px" 
          }}
        >
          {/* HERO SECTION */}
          <header 
            style={{ 
              marginBottom: "100px", 
              opacity: heroIn ? 1 : 0, 
              transform: heroIn ? "none" : "translateY(24px)", 
              transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" 
            }}
          >
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "16px", 
                marginBottom: "32px" 
              }}
            >
              <div 
                style={{ 
                  width: "32px", 
                  height: "2px", 
                  background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.15))" 
                }} 
              />
              <span 
                style={{ 
                  fontFamily: F.mono, 
                  fontSize: "11px", 
                  letterSpacing: "0.2em", 
                  color: C.inkMute, 
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Portfolio · Academic Record
              </span>
            </div>
            
            <div style={{ marginBottom: "28px" }}>
              <div 
                className="edu-hero-title" 
                style={{ 
                  fontFamily: F.display, 
                  fontSize: "clamp(56px, 9vw, 100px)", 
                  fontWeight: 700, 
                  color: C.ink, 
                  letterSpacing: "-0.03em", 
                  lineHeight: 0.95, 
                  display: "block" 
                }}
              >
                Academic
              </div>
              <div 
                className="edu-hero-ghost" 
                style={{ 
                  fontFamily: F.display, 
                  fontSize: "clamp(56px, 9vw, 100px)", 
                  fontWeight: 700, 
                  color: "transparent", 
                  letterSpacing: "-0.03em", 
                  lineHeight: 0.95, 
                  WebkitTextStroke: "1.5px rgba(0,0,0,0.08)", 
                  display: "block" 
                }}
              >
                Foundation
              </div>
            </div>
            
            <p 
              style={{ 
                fontFamily: F.body, 
                fontSize: "17px", 
                lineHeight: 1.75, 
                color: C.inkSub, 
                fontWeight: 400, 
                maxWidth: "580px", 
                margin: "0 0 48px" 
              }}
            >
              A decade of compounding — from school topper to AI engineer. Each stage 
              built the analytical and technical infrastructure for the one that followed.
            </p>
            
            <div 
              className="edu-summary-strip" 
              style={{ 
                display: "flex", 
                gap: 0, 
                borderTop: "1.5px solid rgba(0,0,0,0.08)", 
                paddingTop: "36px" 
              }}
            >
              {[
                ["B.Tech, AI & DS", "Current Specialisation"], 
                ["2022 – 2026", "Program Duration"], 
                ["Top 10%", "Academic Standing"]
              ].map(([v, l], i) => (
                <div 
                  key={l} 
                  className="edu-summary-item" 
                  style={{ 
                    paddingRight: "40px", 
                    marginRight: "40px", 
                    borderRight: i < 2 ? "1.5px solid rgba(0,0,0,0.08)" : "none" 
                  }}
                >
                  <div 
                    style={{ 
                      fontFamily: F.body, 
                      fontSize: "18px", 
                      fontWeight: 700, 
                      color: C.ink, 
                      marginBottom: "6px", 
                      letterSpacing: "-0.01em" 
                    }}
                  >
                    {v}
                  </div>
                  <div 
                    style={{ 
                      fontFamily: F.mono, 
                      fontSize: "11px", 
                      letterSpacing: "0.12em", 
                      color: C.inkMute, 
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </header>

          {/* Divider */}
          <div 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "20px", 
              marginBottom: "64px", 
              opacity: heroIn ? 1 : 0, 
              transition: "opacity 0.7s ease 0.4s" 
            }}
          >
            <span 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "11px", 
                letterSpacing: "0.15em", 
                color: C.inkMute, 
                textTransform: "uppercase", 
                flexShrink: 0,
                fontWeight: 600,
              }}
            >
              Chronological · Latest First
            </span>
            <div 
              style={{ 
                flex: 1, 
                height: "1.5px", 
                background: "rgba(0,0,0,0.08)" 
              }} 
            />
            <span 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "11px", 
                color: C.inkFaint,
                fontWeight: 500,
              }}
            >
              {EDU.length} entries
            </span>
          </div>

          {/* Timeline */}
          <div>
            {EDU.map((edu, i) => (
              <EduBlock 
                key={edu.id} 
                edu={edu} 
                position={i} 
                onOpen={setDrawer} 
              />
            ))}
          </div>

          {/* Footer */}
          <div 
            style={{ 
              marginTop: "100px", 
              paddingTop: "36px", 
              borderTop: "1.5px solid rgba(0,0,0,0.08)", 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "flex-end", 
              flexWrap: "wrap", 
              gap: "16px" 
            }}
          >
            <p 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "12px", 
                letterSpacing: "0.04em", 
                color: C.inkMute, 
                lineHeight: 1.75, 
                margin: 0,
                fontWeight: 500,
              }}
            >
              All credentials verifiable via linked certificates.
              <br />
              Currently in final year of B.Tech — graduating June 2026.
            </p>
            <span 
              style={{ 
                fontFamily: F.mono, 
                fontSize: "11px", 
                letterSpacing: "0.12em", 
                color: C.inkFaint,
                fontWeight: 600,
              }}
            >
              EDU · 2019–2026
            </span>
          </div>
        </main>
      </div>

      {drawer && <Drawer edu={drawer} onClose={() => setDrawer(null)} />}
    </>
  );
}