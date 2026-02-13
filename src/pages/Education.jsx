"use client";

import React, { useState, useEffect, useRef } from "react";

const C = {
  bg:         "#0b0d13",
  surface:    "#111420",
  raised:     "#171a28",
  overlay:    "#1c2033",
  drawer:     "#0f1119",
  ink:        "#e8eaf4",
  inkSub:     "#7e85a3",
  inkMute:    "#454a63",
  inkFaint:   "#252840",
  line:       "rgba(255,255,255,0.06)",
  lineMd:     "rgba(255,255,255,0.10)",
  lineHi:     "rgba(255,255,255,0.18)",
  accent:     "#7c6af7",
  accentSoft: "rgba(124,106,247,0.12)",
  accentLine: "rgba(124,106,247,0.28)",
  green:      "#2dd4bf",
  greenDim:   "rgba(45,212,191,0.10)",
  greenLine:  "rgba(45,212,191,0.22)",
  tint:       ["#7c6af7", "#a78bfa", "#818cf8"],
};

const F = {
  display: "'DM Sans', system-ui, sans-serif",
  body:    "'DM Sans', system-ui, sans-serif",
  mono:    "'JetBrains Mono', 'Fira Code', monospace",
};

const EDU = [
  {
    id: 1, idx: "01", level: "Undergraduate",
    degree: "B.Tech", stream: "Artificial Intelligence & Data Science",
    institution: "Ramachandra College of Engineering", affiliation: "JNTUK",
    duration: "2022 – 2026", score: "7.9 CGPA", location: "Eluru, Andhra Pradesh",
    status: "current", certId: "1wxnzvsS3MA7xWSxuXKeIkS8GaQoG4Y1a",
    primary: true, tint: "#7c6af7",
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
    primary: false, tint: "#a78bfa",
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
    primary: false, tint: "#818cf8",
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

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function AnimStat({ v, l, tint }) {
  const [ref, inView] = useInView(0.3);
  const [disp, setDisp] = useState("0");
  const num = parseFloat(v);
  const isNum = !isNaN(num);
  useEffect(() => {
    if (!inView || !isNum) { if (!isNum) setDisp(v); return; }
    let frame = 0;
    const tick = () => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / 40, 3);
      setDisp(parseFloat((eased * num).toFixed(1)).toString());
      if (frame < 40) requestAnimationFrame(tick); else setDisp(v);
    };
    requestAnimationFrame(tick);
  }, [inView]);
  return (
    <div ref={ref} style={{ textAlign: "center", minWidth: "52px" }}>
      <div style={{ fontFamily: F.display, fontSize: "22px", fontWeight: 800, color: tint || C.ink, lineHeight: 1, letterSpacing: "-0.5px" }}>
        {isNum ? disp : v}
      </div>
      <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "2.5px", color: C.inkMute, textTransform: "uppercase", marginTop: "4px" }}>
        {l}
      </div>
    </div>
  );
}

function CertThumb({ edu, height = "220px", onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative", height, borderRadius: "10px", overflow: "hidden",
        background: C.raised, border: `1px solid ${C.line}`,
        cursor: onClick ? "pointer" : "default", flexShrink: 0,
      }}
    >
      {!err ? (
        <img
          src={thumbUrl(edu.certId)}
          alt={`${edu.degree} certificate`}
          onLoad={() => setLoaded(true)}
          onError={() => setErr(true)}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 400ms ease, transform 500ms ease",
          }}
          onMouseEnter={e => onClick && (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => onClick && (e.currentTarget.style.transform = "scale(1)")}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px" }}>
          <div style={{ fontFamily: F.mono, fontSize: "32px", color: C.inkFaint }}>◱</div>
          <div style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "2px", color: C.inkMute, textTransform: "uppercase" }}>Certificate</div>
        </div>
      )}
      {/* Gradient */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,13,19,0.92) 0%, rgba(11,13,19,0.25) 55%, transparent 100%)", pointerEvents: "none" }} />
      {/* Top tint stripe */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${edu.tint}, transparent 70%)` }} />
      {/* Big index watermark */}
      <div style={{ position: "absolute", bottom: "8px", left: "12px", fontFamily: F.display, fontSize: "56px", fontWeight: 900, color: "rgba(255,255,255,0.05)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
        {edu.idx}
      </div>
      {/* Status pill */}
      {edu.status === "current" ? (
        <div style={{ position: "absolute", top: "12px", right: "12px", display: "flex", alignItems: "center", gap: "6px", padding: "5px 12px", borderRadius: "999px", background: C.greenDim, border: `1px solid ${C.greenLine}`, backdropFilter: "blur(8px)" }}>
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: C.green, animation: "eduPulse 2.4s ease-in-out infinite" }} />
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "2px", color: C.green, textTransform: "uppercase" }}>Active</span>
        </div>
      ) : (
        <div style={{ position: "absolute", top: "12px", right: "12px", padding: "5px 12px", borderRadius: "999px", background: "rgba(255,255,255,0.05)", border: `1px solid ${C.line}`, backdropFilter: "blur(8px)" }}>
          <span style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "2px", color: C.inkMute, textTransform: "uppercase" }}>Completed</span>
        </div>
      )}
      {/* View credential CTA */}
      {onClick && (
        <div style={{ position: "absolute", bottom: "12px", right: "12px" }}>
          <a
            href={driveUrl(edu.certId)} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "6px 12px", borderRadius: "6px", background: "rgba(11,13,19,0.88)", border: `1px solid ${C.lineMd}`, color: C.inkSub, fontFamily: F.mono, fontSize: "10px", letterSpacing: "1.5px", textDecoration: "none", backdropFilter: "blur(8px)", transition: "all 200ms" }}
            onMouseEnter={e => { e.currentTarget.style.background = C.accentSoft; e.currentTarget.style.borderColor = C.accentLine; e.currentTarget.style.color = C.accent; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(11,13,19,0.88)"; e.currentTarget.style.borderColor = C.lineMd; e.currentTarget.style.color = C.inkSub; }}
          >
            VIEW CREDENTIAL ↗
          </a>
        </div>
      )}
    </div>
  );
}

function Drawer({ edu, onClose }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true));
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { cancelAnimationFrame(raf); document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9000, background: "rgba(6,7,12,0.80)", backdropFilter: "blur(10px) saturate(0.7)", opacity: open ? 1 : 0, transition: "opacity 280ms ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(540px, 100vw)", background: C.drawer, borderLeft: `1px solid ${C.lineMd}`, display: "flex", flexDirection: "column", transform: open ? "translateX(0)" : "translateX(36px)", opacity: open ? 1 : 0, transition: "transform 360ms cubic-bezier(0.22,1,0.36,1), opacity 300ms ease", overflowY: "auto" }}>
        {/* Top accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${edu.tint}, transparent 65%)` }} />
        {/* Header */}
        <div style={{ position: "sticky", top: 0, zIndex: 10, background: C.drawer, borderBottom: `1px solid ${C.line}`, padding: "22px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "3px", color: C.inkMute, textTransform: "uppercase", marginBottom: "5px" }}>{edu.level} · {edu.affiliation}</div>
            <div style={{ fontFamily: F.display, fontSize: "22px", fontWeight: 800, color: C.ink, letterSpacing: "-0.4px" }}>{edu.degree}</div>
          </div>
          <button onClick={onClose} style={{ width: "36px", height: "36px", borderRadius: "8px", border: `1px solid ${C.line}`, background: "transparent", color: C.inkMute, cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 180ms" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.lineHi; e.currentTarget.style.color = C.ink; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.line; e.currentTarget.style.color = C.inkMute; }}>×</button>
        </div>
        {/* Body */}
        <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Full-width cert image in drawer */}
          <CertThumb edu={edu} height="200px" />
          {/* Meta grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: C.line, borderRadius: "10px", overflow: "hidden" }}>
            {[["Institution", edu.institution], ["Score", edu.score], ["Duration", edu.duration], ["Location", edu.location]].map(([k, val]) => (
              <div key={k} style={{ background: C.raised, padding: "14px 18px" }}>
                <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "2.5px", color: C.inkMute, textTransform: "uppercase", marginBottom: "5px" }}>{k}</div>
                <div style={{ fontFamily: F.body, fontSize: "13px", fontWeight: 600, color: C.ink, lineHeight: 1.4 }}>{val}</div>
              </div>
            ))}
          </div>
          {/* Synopsis */}
          <div style={{ borderLeft: `2px solid ${edu.tint}44`, paddingLeft: "16px" }}>
            <p style={{ fontFamily: F.body, fontSize: "14px", color: C.inkSub, lineHeight: 1.8, margin: 0 }}>{edu.synopsis}</p>
          </div>
          {/* Outcomes */}
          <div>
            <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "3px", color: C.inkMute, textTransform: "uppercase", marginBottom: "12px" }}>Key Outcomes</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {edu.outcomes.map((o, i) => (
                <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "13px 15px", background: C.raised, border: `1px solid ${C.line}`, borderRadius: "8px" }}>
                  <span style={{ color: edu.tint, fontSize: "13px", fontWeight: 700, flexShrink: 0, marginTop: "2px", width: "18px" }}>{o.icon}</span>
                  <div>
                    <div style={{ fontFamily: F.body, fontSize: "13px", fontWeight: 600, color: C.ink, marginBottom: "3px" }}>{o.label}</div>
                    <div style={{ fontFamily: F.body, fontSize: "12px", color: C.inkSub, lineHeight: 1.6 }}>{o.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Skills */}
          <div>
            <div style={{ fontFamily: F.mono, fontSize: "9px", letterSpacing: "3px", color: C.inkMute, textTransform: "uppercase", marginBottom: "12px" }}>Focus Areas</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {edu.skills.map(s => (
                <span key={s} style={{ padding: "5px 13px", borderRadius: "5px", fontFamily: F.mono, fontSize: "11px", color: C.inkSub, background: C.raised, border: `1px solid ${C.line}` }}>{s}</span>
              ))}
            </div>
          </div>
          {/* Full cert link */}
          <a href={driveUrl(edu.certId)} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px", borderRadius: "8px", background: C.accentSoft, border: `1px solid ${C.accentLine}`, color: C.accent, textDecoration: "none", fontFamily: F.mono, fontSize: "11px", letterSpacing: "2px", transition: "all 200ms" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,106,247,0.20)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = C.accentSoft; }}>
            OPEN FULL CERTIFICATE ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function EduBlock({ edu, position, onOpen }) {
  const [ref, inView] = useInView();
  const [hov, setHov] = useState(false);
  const isPrimary = edu.primary;

  return (
    <div ref={ref} style={{ display: "flex", gap: 0, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(28px)", transition: `opacity 560ms ease ${position * 120}ms, transform 560ms ease ${position * 120}ms` }}>
      {/* Timeline rail */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "44px", flexShrink: 0, paddingTop: "10px", marginRight: "32px" }}>
        <div style={{ width: isPrimary ? "12px" : "8px", height: isPrimary ? "12px" : "8px", borderRadius: "50%", background: isPrimary ? edu.tint : C.inkFaint, boxShadow: isPrimary ? `0 0 0 4px ${edu.tint}22, 0 0 18px ${edu.tint}35` : "none", flexShrink: 0, marginTop: isPrimary ? 0 : "2px" }} />
        {position < EDU.length - 1 && (
          <div style={{ width: "1px", flex: 1, minHeight: "60px", marginTop: "10px", marginBottom: "-24px", background: `linear-gradient(to bottom, ${C.inkFaint} 0%, transparent 100%)` }} />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: position < EDU.length - 1 ? "64px" : 0 }}>
        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "14px" }}>
          <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "2.5px", color: C.inkMute, textTransform: "uppercase" }}>{edu.duration}</span>
          <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: C.inkFaint }} />
          <span style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "2.5px", color: C.inkMute, textTransform: "uppercase" }}>{edu.level}</span>
          {edu.status === "current" && (
            <span style={{ padding: "3px 9px", borderRadius: "4px", fontFamily: F.mono, fontSize: "10px", letterSpacing: "1.5px", color: C.green, background: C.greenDim, border: `1px solid ${C.greenLine}` }}>In Progress</span>
          )}
        </div>

        {isPrimary ? (
          <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
            {/* Degree */}
            <div style={{ marginBottom: "20px" }}>
              <h3 style={{ fontFamily: F.display, fontSize: "clamp(28px, 4.5vw, 40px)", fontWeight: 800, color: C.ink, letterSpacing: "-1px", lineHeight: 1.05, margin: "0 0 6px" }}>{edu.degree}</h3>
              <div style={{ fontFamily: F.body, fontSize: "15px", fontWeight: 600, color: edu.tint }}>{edu.stream}</div>
              <div style={{ fontFamily: F.body, fontSize: "14px", fontWeight: 500, color: C.inkSub, marginTop: "3px" }}>
                {edu.institution}<span style={{ color: C.inkMute, margin: "0 7px" }}>·</span><span style={{ color: C.inkMute, fontWeight: 400 }}>{edu.affiliation}</span>
              </div>
            </div>
            {/* 2-col card: image + content */}
            <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: "0", background: C.raised, border: `1px solid ${hov ? C.lineMd : C.line}`, borderRadius: "14px", overflow: "hidden", transition: "border-color 200ms, box-shadow 200ms", boxShadow: hov ? "0 8px 48px rgba(0,0,0,0.32)" : "none" }}>
              {/* Left: cert image */}
              <div style={{ minHeight: "280px" }}>
                <CertThumb edu={edu} height="100%" onClick={() => onOpen(edu)} />
              </div>
              {/* Right: details */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "16px", borderLeft: `1px solid ${C.line}` }}>
                {/* Score */}
                <div>
                  <div style={{ fontFamily: F.mono, fontSize: "10px", letterSpacing: "2px", color: C.inkMute, textTransform: "uppercase", marginBottom: "4px" }}>Academic Score</div>
                  <div style={{ fontFamily: F.display, fontSize: "20px", fontWeight: 800, color: C.ink, letterSpacing: "-0.3px" }}>{edu.score}</div>
                </div>
                {/* Outcomes */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", flex: 1 }}>
                  {edu.outcomes.map((o, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "9px", padding: "9px 12px", background: C.surface, border: `1px solid ${C.line}`, borderRadius: "7px" }}>
                      <span style={{ color: edu.tint, fontSize: "12px", fontWeight: 700, flexShrink: 0, width: "16px", marginTop: "2px" }}>{o.icon}</span>
                      <div>
                        <div style={{ fontFamily: F.body, fontSize: "12px", fontWeight: 600, color: C.ink, marginBottom: "2px" }}>{o.label}</div>
                        <div style={{ fontFamily: F.body, fontSize: "11px", color: C.inkSub, lineHeight: 1.55 }}>{o.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Stats + CTA */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", paddingTop: "16px", borderTop: `1px solid ${C.line}` }}>
                  <div style={{ display: "flex", gap: "24px" }}>
                    {edu.stats.map(s => <AnimStat key={s.l} v={s.v} l={s.l} tint={edu.tint} />)}
                  </div>
                  <button onClick={() => onOpen(edu)} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "9px 18px", borderRadius: "7px", border: `1px solid ${C.lineMd}`, background: "transparent", color: C.inkSub, fontFamily: F.mono, fontSize: "10px", letterSpacing: "1.5px", cursor: "pointer", transition: "all 200ms" }}
                    onMouseEnter={e => { e.currentTarget.style.background = C.accentSoft; e.currentTarget.style.borderColor = C.accentLine; e.currentTarget.style.color = C.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.lineMd; e.currentTarget.style.color = C.inkSub; }}>
                    FULL DETAILS →
                  </button>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
              {edu.skills.map(s => (
                <span key={s} style={{ padding: "4px 12px", borderRadius: "4px", fontFamily: F.mono, fontSize: "11px", color: C.inkMute, background: C.surface, border: `1px solid ${C.line}` }}>{s}</span>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Degree headline */}
            <div style={{ marginBottom: "14px" }}>
              <h3 style={{ fontFamily: F.display, fontSize: "22px", fontWeight: 800, color: C.ink, letterSpacing: "-0.4px", margin: "0 0 4px" }}>{edu.degree}</h3>
              <div style={{ fontFamily: F.body, fontSize: "13px", color: C.inkSub }}>
                {edu.stream}<span style={{ color: C.inkMute, margin: "0 7px" }}>·</span><span style={{ color: C.inkMute }}>{edu.institution}</span>
              </div>
            </div>
            {/* Horizontal strip: small thumb + content */}
            <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
              style={{ display: "flex", gap: "0", alignItems: "stretch", background: C.raised, border: `1px solid ${hov ? C.lineMd : C.line}`, borderRadius: "10px", overflow: "hidden", transition: "border-color 200ms" }}>
              {/* Small cert thumbnail */}
              <div style={{ width: "150px", flexShrink: 0 }}>
                <CertThumb edu={edu} height="100%" onClick={() => onOpen(edu)} />
              </div>
              {/* Content */}
              <div style={{ flex: 1, padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "12px", borderLeft: `1px solid ${C.line}` }}>
                <div>
                  <span style={{ display: "inline-block", fontFamily: F.mono, fontSize: "11px", letterSpacing: "1.5px", color: C.inkSub, padding: "4px 10px", background: C.surface, border: `1px solid ${C.line}`, borderRadius: "4px", marginBottom: "10px" }}>{edu.score}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    {edu.outcomes.map((o, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: edu.tint, fontSize: "11px", fontWeight: 700, flexShrink: 0 }}>{o.icon}</span>
                        <span style={{ fontFamily: F.body, fontSize: "12px", fontWeight: 600, color: C.ink }}>{o.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", gap: "20px" }}>
                    {edu.stats.map(s => <AnimStat key={s.l} v={s.v} l={s.l} tint={edu.tint} />)}
                  </div>
                  <button onClick={() => onOpen(edu)} style={{ padding: "7px 14px", borderRadius: "6px", border: `1px solid ${C.line}`, background: "transparent", color: C.inkMute, fontFamily: F.mono, fontSize: "10px", letterSpacing: "1.5px", cursor: "pointer", transition: "all 200ms" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.lineMd; e.currentTarget.style.color = C.inkSub; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.line; e.currentTarget.style.color = C.inkMute; }}>
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

export default function Education() {
  const [drawer, setDrawer] = useState(null);
  const [heroIn, setHeroIn] = useState(false);
  useEffect(() => { const r = requestAnimationFrame(() => setHeroIn(true)); return () => cancelAnimationFrame(r); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
        .edu-root *, .edu-root *::before, .edu-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .edu-root { background: #0b0d13; min-height: 100vh; font-family: 'DM Sans', system-ui, sans-serif; -webkit-font-smoothing: antialiased; color: #e8eaf4; }
        .edu-root ::-webkit-scrollbar { width: 3px; }
        .edu-root ::-webkit-scrollbar-track { background: transparent; }
        .edu-root ::-webkit-scrollbar-thumb { background: #252840; border-radius: 2px; }
        @keyframes eduPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.35;transform:scale(0.8)} }
        @media(max-width:700px){
          .edu-inner{padding:60px 20px 80px !important;}
          .edu-hero-title{font-size:42px !important;}
          .edu-hero-ghost{font-size:42px !important;}
          .edu-primary-grid{grid-template-columns:1fr !important;}
          .edu-summary-strip{flex-direction:column !important;gap:16px !important;}
          .edu-summary-item{border-right:none !important;padding-right:0 !important;margin-right:0 !important;padding-bottom:16px !important;border-bottom:1px solid rgba(255,255,255,0.06) !important;}
        }
        @media(max-width:460px){
          .edu-inner{padding:44px 16px 60px !important;}
          .edu-hero-title{font-size:34px !important;}
          .edu-hero-ghost{font-size:34px !important;}
        }
      `}</style>

      <div className="edu-root">
        <main className="edu-inner" style={{ maxWidth: "920px", margin: "0 auto", padding: "120px 48px 120px" }}>

          {/* HERO */}
          <header style={{ marginBottom: "88px", opacity: heroIn ? 1 : 0, transform: heroIn ? "none" : "translateY(20px)", transition: "opacity 650ms ease, transform 650ms ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "26px" }}>
              <div style={{ width: "28px", height: "1px", background: "linear-gradient(90deg, transparent, #454a63)" }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "4px", color: "#454a63", textTransform: "uppercase" }}>Portfolio · Academic Record</span>
            </div>
            <div style={{ marginBottom: "24px" }}>
              <div className="edu-hero-title" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(50px, 8.5vw, 90px)", fontWeight: 800, color: "#e8eaf4", letterSpacing: "-3px", lineHeight: 0.92, display: "block" }}>Academic</div>
              <div className="edu-hero-ghost" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(50px, 8.5vw, 90px)", fontWeight: 800, color: "transparent", letterSpacing: "-3px", lineHeight: 0.92, WebkitTextStroke: "1.5px #252840", display: "block" }}>Foundation</div>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", lineHeight: 1.8, color: "#7e85a3", fontWeight: 400, maxWidth: "520px", margin: "0 0 40px" }}>
              A decade of compounding — from school topper to AI engineer. Each stage built the analytical and technical infrastructure for the one that followed.
            </p>
            <div className="edu-summary-strip" style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "32px" }}>
              {[["B.Tech, AI & DS", "Current Specialisation"], ["2022 – 2026", "Program Duration"], ["Top 10%", "Academic Standing"]].map(([v, l], i) => (
                <div key={l} className="edu-summary-item" style={{ paddingRight: "36px", marginRight: "36px", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: "#e8eaf4", marginBottom: "4px", letterSpacing: "-0.2px" }}>{v}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#454a63", textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </header>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "52px", opacity: heroIn ? 1 : 0, transition: "opacity 600ms ease 350ms" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "4px", color: "#454a63", textTransform: "uppercase", flexShrink: 0 }}>Chronological · Latest First</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#252840" }}>{EDU.length} entries</span>
          </div>

          {/* Timeline */}
          <div>
            {EDU.map((edu, i) => <EduBlock key={edu.id} edu={edu} position={i} onOpen={setDrawer} />)}
          </div>

          {/* Footer */}
          <div style={{ marginTop: "80px", paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.8px", color: "#454a63", lineHeight: 1.8, margin: 0 }}>
              All credentials verifiable via linked certificates.<br />Currently in final year of B.Tech — graduating June 2026.
            </p>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: "#252840" }}>EDU · 2019–2026</span>
          </div>
        </main>
      </div>

      {drawer && <Drawer edu={drawer} onClose={() => setDrawer(null)} />}
    </>
  );
}