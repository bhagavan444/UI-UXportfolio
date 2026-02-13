"use client";

import React, { useState, useRef } from "react";
import {
  Download, Eye, X, MapPin, Mail, Github, Linkedin,
  CheckCircle, ChevronRight, Code2, Brain, Cloud, Terminal,
  Award, Briefcase, GraduationCap, ArrowRight, Calendar,
  TrendingUp, Zap, Shield, Users, BarChart3, GitBranch,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   CONFIG
═══════════════════════════════════════════════════════════════ */
const RESUME_PREVIEW  = "https://drive.google.com/file/d/1-Ph6umgQ6P0YfBgQGLj-9UPMX2UDoKu3/preview";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1-Ph6umgQ6P0YfBgQGLj-9UPMX2UDoKu3";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS (White Background System)
═══════════════════════════════════════════════════════════════ */
const C = {
  bg:        "#ffffff",
  surface:   "#fafafa",
  surface2:  "#f5f5f5",
  border:    "#e5e5e5",
  border2:   "#d4d4d4",
  text:      "#0a0a0a",
  text2:     "#171717",
  muted:     "#737373",
  muted2:    "#525252",
  accent:    "#2563eb",
  accentDim: "#eff6ff",
  green:     "#16a34a",
  greenDim:  "#f0fdf4",
  amber:     "#d97706",
  amberDim:  "#fffbeb",
  purple:    "#7c3aed",
  purpleDim: "#faf5ff",
};

/* ═══════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════ */
const engineeringMetrics = [
  { value: "6+",    label: "Deployed Systems",              sub: "Production-facing applications",    icon: Cloud },
  { value: "1K+",   label: "Production Users",              sub: "Active user base post-launch",      icon: Users },
  { value: "40%",   label: "Performance Gains",             sub: "API latency reduction achieved",    icon: TrendingUp },
  { value: "500+",  label: "Core CS Patterns",              sub: "DSA problems — LeetCode Top 5%",    icon: GitBranch },
];

const engineeringPrinciples = [
  {
    icon: Shield,
    title: "Design for scale, not just functionality",
    desc: "Architecture decisions prioritize long-term maintainability and horizontal scalability.",
  },
  {
    icon: Zap,
    title: "Secure by default",
    desc: "OAuth 2.0, JWT with RBAC, input validation, and rate limiting built into every system.",
  },
  {
    icon: BarChart3,
    title: "Measure performance before optimizing",
    desc: "Data-driven optimizations using Redis caching, query indexing, and latency profiling.",
  },
  {
    icon: Code2,
    title: "Write code that others can maintain",
    desc: "Clean abstractions, comprehensive documentation, and consistent design patterns.",
  },
];

const experiences = [
  {
    role:     "MERN Stack Intern",
    company:  "StudyOwl Education Pvt Ltd",
    period:   "May – Jul 2025 · 3 months",
    location: "Hybrid",
    color:    C.accent,
    
    owned: [
      "End-to-end ownership of 3 production web applications serving 1,000+ active users",
      "Authentication architecture migration from sessions to OAuth 2.0 + JWT",
      "REST API performance optimization initiative reducing response times by 40%",
    ],
    
    decisions: [
      "Migrated from session-based auth → JWT + RBAC for improved security and scalability",
      "Introduced Redis caching layer to reduce database load on high-traffic endpoints",
      "Implemented OAuth 2.0 flow with role-based permissions replacing insecure approach",
      "Restructured API payloads and added query indexing for 40% latency reduction",
    ],
    
    impact: [
      { metric: "1,000+", label: "Active users post-launch" },
      { metric: "40%", label: "API response time reduction" },
      { metric: "3", label: "Production systems deployed" },
    ],
    
    tech: ["React", "Node.js", "MongoDB", "JWT", "Redis", "AWS EC2"],
  },
  {
    role:     "AI / ML Intern",
    company:  "SmartBridge",
    period:   "May – Jun 2025 · 2 months",
    location: "Remote",
    color:    C.purple,
    
    owned: [
      "CNN architecture design and training pipeline for image classification tasks",
      "Model optimization strategy reducing inference latency by 35%",
      "Real-time object detection API deployment with Flask and OpenCV",
    ],
    
    decisions: [
      "Selected CNN architecture over traditional ML for superior feature extraction",
      "Implemented batch processing and model pruning to achieve 35% inference speedup",
      "Chose Flask + Docker deployment for portability and horizontal scaling capability",
      "Designed custom data augmentation pipeline to improve generalization on limited dataset",
    ],
    
    impact: [
      { metric: "85%", label: "Classification accuracy achieved" },
      { metric: "35%", label: "Inference time reduction" },
      { metric: "5+", label: "Models trained and evaluated" },
    ],
    
    tech: ["TensorFlow", "Keras", "OpenCV", "Flask", "Docker"],
  },
  {
    role:     "ML & Data Science Intern",
    company:  "Blackbucks",
    period:   "May – Jun 2024 · 2 months",
    location: "Remote",
    color:    C.green,
    
    owned: [
      "Data pipeline design and implementation for 100K+ record datasets",
      "Fake News Detection classifier development achieving 89% accuracy",
      "Feature engineering strategy improving F1-score by 12%",
    ],
    
    decisions: [
      "Selected TF-IDF + Logistic Regression over deep learning for interpretability and speed",
      "Engineered 15+ features using PCA and correlation filtering to reduce dimensionality",
      "Trained 6 supervised models (SVM, RF, XGBoost); selected best via cross-validation",
      "Implemented robust data cleaning pipeline handling nulls, duplicates, and schema issues",
    ],
    
    impact: [
      { metric: "89%", label: "Classification accuracy" },
      { metric: "100K+", label: "Records processed" },
      { metric: "12%", label: "F1-score improvement" },
    ],
    
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
];

const projects = [
  {
    name:     "ATS Résumé Builder",
    status:   "Live",
    problem:  "Users needed ATS-optimized résumés with real-time preview and multiple export formats",
    approach: "Built full-stack application with React frontend, Node.js backend, and cloud-stored templates",
    
    architecture: [
      { aspect: "Auth Strategy",      detail: "OAuth 2.0 + JWT with role-based access control" },
      { aspect: "Database Design",    detail: "MongoDB with indexed user collections and template schema" },
      { aspect: "Deployment",         detail: "AWS EC2 with Nginx reverse proxy and SSL termination" },
      { aspect: "Performance",        detail: "Redis caching for templates, lazy loading for UI components" },
    ],
    
    impact: [
      { metric: "1,000+", label: "Active users post-launch" },
      { metric: "PDF/DOCX", label: "Export formats with real-time preview" },
      { metric: "OAuth 2.0", label: "Secure authentication with RBAC" },
    ],
    
    tech: ["React", "Node.js", "MongoDB", "JWT", "Redis", "AWS"],
    github: "https://github.com/bhagavan444",
  },
  {
    name:     "Fake News Detection System",
    status:   "GitHub",
    problem:  "Need for high-accuracy, interpretable classifier to identify misinformation at scale",
    approach: "NLP pipeline using TF-IDF vectorization and Logistic Regression on 50K+ labeled articles",
    
    architecture: [
      { aspect: "Model Selection",    detail: "TF-IDF + Logistic Regression for speed and interpretability" },
      { aspect: "Feature Engineering", detail: "15+ features via PCA and correlation filtering" },
      { aspect: "Training Pipeline",  detail: "Cross-validation across 6 models; best F1-score selected" },
      { aspect: "Data Processing",    detail: "Pandas pipeline handling 100K+ records with cleaning logic" },
    ],
    
    impact: [
      { metric: "89%", label: "Test accuracy on 50K articles" },
      { metric: "92%", label: "Best cross-validated accuracy" },
      { metric: "12%", label: "F1-score improvement via feature engineering" },
    ],
    
    tech: ["Python", "Scikit-learn", "Pandas", "TF-IDF", "NumPy"],
    github: "https://github.com/bhagavan444",
  },
  {
    name:     "Real-Time Object Detection API",
    status:   "Deployed",
    problem:  "Real-time image classification API with low latency for production use cases",
    approach: "CNN-based classifier deployed as Flask REST API with optimized inference pipeline",
    
    architecture: [
      { aspect: "Model Architecture", detail: "Custom CNN with batch normalization and dropout layers" },
      { aspect: "Optimization",       detail: "Architecture pruning and batch processing for 35% speedup" },
      { aspect: "Deployment",         detail: "Flask + Docker containerization for portability" },
      { aspect: "Frame Processing",   detail: "OpenCV pipeline with efficient memory management" },
    ],
    
    impact: [
      { metric: "85%", label: "Classification accuracy" },
      { metric: "35%", label: "Inference latency reduction" },
      { metric: "Flask + Docker", label: "Production-ready deployment" },
    ],
    
    tech: ["TensorFlow", "Keras", "OpenCV", "Flask", "Docker"],
    github: "https://github.com/bhagavan444",
  },
];

const coreCertifications = [
  { name: "AWS Solutions Architect – Professional", issuer: "Amazon Web Services", year: "2025" },
  { name: "Azure AI Engineer Associate", issuer: "Microsoft Azure", year: "2025" },
  { name: "Google Cloud Professional", issuer: "Google Cloud", year: "2024" },
  { name: "Deep Learning Specialization", issuer: "DeepLearning.AI", year: "2024" },
];

const additionalCoursework = "Full-Stack Open (University of Helsinki), Docker & Kubernetes, System Design, Advanced Algorithms";

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
    <div style={{ marginBottom: "2.5rem" }}>
      {num && (
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
          fontWeight: 600,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: C.muted,
          marginBottom: "0.75rem",
        }}>
          {num}
        </div>
      )}
      <h2 style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
        fontWeight: 600,
        color: C.text,
        letterSpacing: "-0.03em",
        lineHeight: 1.2,
        marginBottom: sub ? "0.75rem" : 0,
      }}>
        {title}
      </h2>
      {sub && (
        <p style={{
          fontSize: "0.95rem",
          color: C.muted2,
          lineHeight: 1.6,
          maxWidth: "720px",
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Live: { color: C.green, bg: C.greenDim, border: "#bbf7d0" },
    Deployed: { color: C.green, bg: C.greenDim, border: "#bbf7d0" },
    GitHub: { color: C.muted2, bg: C.surface2, border: C.border },
  };
  const s = styles[status] || styles.GitHub;
  
  return (
    <span style={{
      padding: "0.25rem 0.7rem",
      borderRadius: "6px",
      background: s.bg,
      border: `1px solid ${s.border}`,
      fontSize: "0.7rem",
      fontWeight: 600,
      color: s.color,
      fontFamily: "'DM Mono', monospace",
      letterSpacing: "0.04em",
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
  const [scrollPct, setScrollPct] = useState(0);

  React.useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const [headerRef, headerIn] = useInView(0.2);
  const [metricsRef, metricsIn] = useInView(0.15);
  const [expRef, expIn] = useInView(0.1);
  const [projRef, projIn] = useInView(0.1);
  const [principlesRef, principlesIn] = useInView(0.15);
  const [certRef, certIn] = useInView(0.15);
  const [ctaRef, ctaIn] = useInView(0.2);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Mono:wght@400;500;600&display=swap');

        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: ${C.bg};
          color: ${C.text};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
        }
        ::selection { background: #dbeafe; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${C.surface}; }
        ::-webkit-scrollbar-thumb { background: ${C.border2}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.muted}; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .exp-card { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .exp-card:hover { box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06); }

        .proj-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .proj-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08); }

        .principle-card { transition: all 0.25s ease; }
        .principle-card:hover { background: ${C.surface} !important; }

        @media (max-width: 768px) {
          .metrics-grid { grid-template-columns: 1fr 1fr !important; }
          .two-col-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* Scroll Progress */}
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: C.surface,
        zIndex: 9999,
      }}>
        <div style={{
          width: `${scrollPct}%`,
          height: "100%",
          background: C.accent,
          transition: "width 0.1s linear",
        }} />
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ══════ HERO ══════ */}
        <header ref={headerRef} style={{ padding: "5rem 0 4rem", borderBottom: `1px solid ${C.border}` }}>
          
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.4rem 0.85rem",
            background: C.accentDim,
            border: `1px solid #bfdbfe`,
            borderRadius: "6px",
            marginBottom: "1.75rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "slideIn 0.5s ease both" : "none",
          }}>
            <div style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: C.accent,
            }} />
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.accent,
            }}>
              Available · 2026 Graduate
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "clamp(2.75rem, 6vw, 4rem)",
            fontWeight: 700,
            color: C.text,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s ease 0.1s both" : "none",
          }}>
            Production-Ready<br />Software Engineer
          </h1>

          <p style={{
            fontSize: "1.15rem",
            color: C.muted2,
            fontWeight: 500,
            lineHeight: 1.6,
            marginBottom: "0.5rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s ease 0.2s both" : "none",
          }}>
            Full-stack systems, AI-backed applications, and cloud deployments — built, shipped, and maintained.
          </p>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
            fontSize: "0.875rem",
            color: C.muted,
            marginBottom: "2.5rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s ease 0.3s both" : "none",
          }}>
            <span>6+ deployed applications</span>
            <span>·</span>
            <span>3 industry internships</span>
            <span>·</span>
            <span>500+ DSA problems</span>
            <span>·</span>
            <span>20+ certifications</span>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "2rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s ease 0.4s both" : "none",
          }}>
            {[
              { icon: MapPin, text: "Gudivada, Andhra Pradesh", href: null },
              { icon: Mail, text: "g.sivasatyasaibhagavan@gmail.com", href: "mailto:g.sivasatyasaibhagavan@gmail.com" },
              { icon: Github, text: "github.com/bhagavan444", href: "https://github.com/bhagavan444" },
              { icon: Linkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" },
            ].map((item, i) => {
              const Tag = item.href ? "a" : "span";
              return (
                <Tag
                  key={i}
                  href={item.href || undefined}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.825rem",
                    color: C.muted2,
                    fontFamily: "'DM Mono', monospace",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={item.href ? e => e.currentTarget.style.color = C.text : undefined}
                  onMouseLeave={item.href ? e => e.currentTarget.style.color = C.muted2 : undefined}
                >
                  <item.icon size={13} /> {item.text}
                </Tag>
              );
            })}
          </div>

          <div style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s ease 0.5s both" : "none",
          }}>
            <a
              href={RESUME_DOWNLOAD}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                background: C.accent,
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "none",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
              }}
            >
              <Download size={16} /> Download PDF
            </a>
            <button
              onClick={() => setShowModal(true)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "8px",
                background: "transparent",
                color: C.muted2,
                border: `1px solid ${C.border2}`,
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = C.text;
                e.currentTarget.style.borderColor = C.muted;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = C.muted2;
                e.currentTarget.style.borderColor = C.border2;
              }}
            >
              <Eye size={16} /> Preview Fullscreen
            </button>
          </div>
        </header>

        {/* ══════ ENGINEERING METRICS DASHBOARD ══════ */}
        <section ref={metricsRef} style={{ padding: "4rem 0", borderBottom: `1px solid ${C.border}` }}>
          <div className="metrics-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}>
            {engineeringMetrics.map((metric, i) => (
              <div
                key={i}
                style={{
                  padding: "1.75rem 1.5rem",
                  background: C.surface,
                  borderRadius: "12px",
                  border: `1px solid ${C.border}`,
                  opacity: metricsIn ? 1 : 0,
                  animation: metricsIn ? `fadeUp 0.5s ease ${i * 0.08}s both` : "none",
                }}
              >
                <metric.icon size={20} style={{ color: C.accent, marginBottom: "1rem" }} />
                <div style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "2.25rem",
                  fontWeight: 700,
                  color: C.text,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.5rem",
                }}>
                  {metric.value}
                </div>
                <div style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: C.text2,
                  marginBottom: "0.25rem",
                }}>
                  {metric.label}
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  color: C.muted,
                  lineHeight: 1.5,
                }}>
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ ENGINEERING SUMMARY ══════ */}
        <section style={{ padding: "4rem 0", borderBottom: `1px solid ${C.border}` }}>
          <div className="two-col-grid" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "2.5rem",
          }}>
            <div>
              <h3 style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                color: C.text,
                marginBottom: "1rem",
              }}>
                Engineering Summary
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: C.muted2,
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}>
                Full-stack engineer with production experience across MERN stack applications and AI/ML systems.
                Proven ability to architect scalable solutions, optimize performance, and ship user-facing products.
              </p>
              <div style={{
                padding: "1.25rem",
                background: C.surface,
                borderRadius: "10px",
                border: `1px solid ${C.border}`,
              }}>
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: C.muted,
                  marginBottom: "0.75rem",
                }}>
                  Education
                </div>
                <div style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}>
                  <div style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: C.accentDim,
                    border: `1px solid #bfdbfe`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <GraduationCap size={18} style={{ color: C.accent }} />
                  </div>
                  <div>
                    <div style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: "0.25rem",
                    }}>
                      {education.degree}
                    </div>
                    <div style={{
                      fontSize: "0.8rem",
                      color: C.muted2,
                      marginBottom: "0.25rem",
                    }}>
                      {education.school}
                    </div>
                    <div style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "0.75rem",
                      color: C.muted,
                      fontFamily: "'DM Mono', monospace",
                    }}>
                      <span>{education.period}</span>
                      <span style={{ color: C.accent, fontWeight: 600 }}>{education.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: `1px solid ${C.border}`,
              background: C.surface,
              height: "420px",
            }}>
              <div style={{
                padding: "0.75rem 1rem",
                background: C.surface2,
                borderBottom: `1px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
                <span style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: C.muted,
                  letterSpacing: "0.06em",
                }}>
                  résumé preview
                </span>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => setShowModal(true)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "5px",
                      background: "transparent",
                      border: `1px solid ${C.border}`,
                      color: C.muted2,
                      fontSize: "0.7rem",
                      cursor: "pointer",
                      fontFamily: "'DM Mono', monospace",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = C.text;
                      e.currentTarget.style.borderColor = C.border2;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = C.muted2;
                      e.currentTarget.style.borderColor = C.border;
                    }}
                  >
                    <Eye size={11} /> Fullscreen
                  </button>
                  <a
                    href={RESUME_DOWNLOAD}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      padding: "0.3rem 0.65rem",
                      borderRadius: "5px",
                      background: C.accentDim,
                      border: `1px solid #bfdbfe`,
                      color: C.accent,
                      fontSize: "0.7rem",
                      textDecoration: "none",
                      fontFamily: "'DM Mono', monospace",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "#dbeafe";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = C.accentDim;
                    }}
                  >
                    <Download size={11} /> PDF
                  </a>
                </div>
              </div>
              <iframe
                src={RESUME_PREVIEW}
                style={{ width: "100%", height: "calc(100% - 41px)", border: "none" }}
                title="Résumé Preview"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ══════ INDUSTRY EXPERIENCE ══════ */}
        <section ref={expRef} style={{ padding: "4rem 0", borderBottom: `1px solid ${C.border}` }}>
          <SectionHeader
            num="Industry Experience"
            title="Production Engineering Roles"
            sub="Three internships across full-stack development, AI/ML engineering, and data science — May 2024 to July 2025."
          />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="exp-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  opacity: expIn ? 1 : 0,
                  animation: expIn ? `fadeUp 0.5s ease ${i * 0.12}s both` : "none",
                }}
              >
                <div style={{
                  height: "3px",
                  background: exp.color,
                }} />

                <div style={{ padding: "2rem" }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    marginBottom: "1.75rem",
                    flexWrap: "wrap",
                  }}>
                    <div>
                      <div style={{
                        fontSize: "1.375rem",
                        fontWeight: 600,
                        color: C.text,
                        letterSpacing: "-0.02em",
                        marginBottom: "0.35rem",
                      }}>
                        {exp.role}
                      </div>
                      <div style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: exp.color,
                        marginBottom: "0.5rem",
                      }}>
                        {exp.company}
                      </div>
                    </div>
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.35rem",
                      alignItems: "flex-end",
                    }}>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.75rem",
                        color: C.muted,
                        fontFamily: "'DM Mono', monospace",
                      }}>
                        <Calendar size={12} /> {exp.period}
                      </div>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.75rem",
                        color: C.muted,
                        fontFamily: "'DM Mono', monospace",
                      }}>
                        <MapPin size={12} /> {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* What I Owned */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <div style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.text2,
                      marginBottom: "0.75rem",
                    }}>
                      What I Owned
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {exp.owned.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                          <ChevronRight size={14} style={{ color: exp.color, flexShrink: 0, marginTop: "0.2rem" }} />
                          <span style={{ fontSize: "0.875rem", color: C.text2, lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Engineering Decisions */}
                  <div style={{ marginBottom: "1.75rem" }}>
                    <div style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.text2,
                      marginBottom: "0.75rem",
                    }}>
                      Key Engineering Decisions
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {exp.decisions.map((item, idx) => (
                        <li key={idx} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start" }}>
                          <div style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: exp.color,
                            flexShrink: 0,
                            marginTop: "0.5rem",
                          }} />
                          <span style={{ fontSize: "0.875rem", color: C.muted2, lineHeight: 1.6 }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Measurable Impact */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.text2,
                      marginBottom: "0.75rem",
                    }}>
                      Measurable Impact
                    </div>
                    <div style={{
                      display: "flex",
                      gap: "1.5rem",
                      flexWrap: "wrap",
                    }}>
                      {exp.impact.map((item, idx) => (
                        <div key={idx} style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.25rem",
                        }}>
                          <div style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: exp.color,
                            letterSpacing: "-0.02em",
                          }}>
                            {item.metric}
                          </div>
                          <div style={{
                            fontSize: "0.75rem",
                            color: C.muted,
                          }}>
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {exp.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "0.35rem 0.75rem",
                          borderRadius: "6px",
                          background: C.surface,
                          border: `1px solid ${C.border}`,
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: C.muted2,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ PROJECTS (CASE STUDIES) ══════ */}
        <section ref={projRef} style={{ padding: "4rem 0", borderBottom: `1px solid ${C.border}` }}>
          <SectionHeader
            num="Case Study Projects"
            title="Production Systems"
            sub="Independently validated projects with measurable outcomes and architectural depth."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {projects.map((proj, i) => (
              <div
                key={i}
                className="proj-card"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  opacity: projIn ? 1 : 0,
                  animation: projIn ? `fadeUp 0.5s ease ${i * 0.12}s both` : "none",
                }}
              >
                <div style={{ padding: "2rem" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    marginBottom: "1.25rem",
                  }}>
                    <div>
                      <div style={{
                        fontSize: "1.375rem",
                        fontWeight: 600,
                        color: C.text,
                        letterSpacing: "-0.02em",
                        marginBottom: "0.25rem",
                      }}>
                        {proj.name}
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexShrink: 0 }}>
                      <StatusBadge status={proj.status} />
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.35rem",
                          padding: "0.25rem 0.65rem",
                          borderRadius: "6px",
                          background: C.surface,
                          border: `1px solid ${C.border}`,
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          color: C.muted2,
                          textDecoration: "none",
                          fontFamily: "'DM Mono', monospace",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = C.text;
                          e.currentTarget.style.borderColor = C.border2;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = C.muted2;
                          e.currentTarget.style.borderColor = C.border;
                        }}
                      >
                        <Github size={10} /> GitHub
                      </a>
                    </div>
                  </div>

                  {/* Problem */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <div style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.5rem",
                    }}>
                      Problem
                    </div>
                    <p style={{ fontSize: "0.875rem", color: C.text2, lineHeight: 1.6 }}>
                      {proj.problem}
                    </p>
                  </div>

                  {/* Engineering Approach */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    <div style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.5rem",
                    }}>
                      Engineering Approach
                    </div>
                    <p style={{ fontSize: "0.875rem", color: C.muted2, lineHeight: 1.6 }}>
                      {proj.approach}
                    </p>
                  </div>

                  {/* Architecture Highlights */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.75rem",
                    }}>
                      Architecture Highlights
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                      gap: "0.75rem",
                    }}>
                      {proj.architecture.map((arch, idx) => (
                        <div
                          key={idx}
                          style={{
                            padding: "0.85rem 1rem",
                            background: C.surface,
                            borderRadius: "8px",
                            border: `1px solid ${C.border}`,
                          }}
                        >
                          <div style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            color: C.text2,
                            marginBottom: "0.25rem",
                          }}>
                            {arch.aspect}
                          </div>
                          <div style={{
                            fontSize: "0.75rem",
                            color: C.muted,
                            lineHeight: 1.5,
                          }}>
                            {arch.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.75rem",
                    }}>
                      Impact Metrics
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                      {proj.impact.map((item, idx) => (
                        <div key={idx}>
                          <div style={{
                            fontSize: "1.5rem",
                            fontWeight: 700,
                            color: C.accent,
                            letterSpacing: "-0.02em",
                            marginBottom: "0.25rem",
                          }}>
                            {item.metric}
                          </div>
                          <div style={{
                            fontSize: "0.75rem",
                            color: C.muted,
                          }}>
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {proj.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: "0.35rem 0.75rem",
                          borderRadius: "6px",
                          background: C.surface,
                          border: `1px solid ${C.border}`,
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: C.muted2,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ ENGINEERING PRINCIPLES ══════ */}
        <section ref={principlesRef} style={{ padding: "4rem 0", borderBottom: `1px solid ${C.border}` }}>
          <SectionHeader
            title="Engineering Approach"
            sub="Core principles that guide technical decision-making and system design."
          />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 420px), 1fr))",
            gap: "1.25rem",
          }}>
            {engineeringPrinciples.map((principle, i) => (
              <div
                key={i}
                className="principle-card"
                style={{
                  padding: "1.75rem",
                  background: C.surface,
                  borderRadius: "12px",
                  border: `1px solid ${C.border}`,
                  opacity: principlesIn ? 1 : 0,
                  animation: principlesIn ? `fadeUp 0.5s ease ${i * 0.08}s both` : "none",
                }}
              >
                <div style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: C.accentDim,
                  border: `1px solid #bfdbfe`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}>
                  <principle.icon size={20} style={{ color: C.accent }} />
                </div>
                <div style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: C.text,
                  marginBottom: "0.5rem",
                  lineHeight: 1.4,
                }}>
                  {principle.title}
                </div>
                <p style={{
                  fontSize: "0.85rem",
                  color: C.muted2,
                  lineHeight: 1.6,
                }}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ CERTIFICATIONS ══════ */}
        <section ref={certRef} style={{ padding: "4rem 0", borderBottom: `1px solid ${C.border}` }}>
          <SectionHeader
            num="Core Certifications"
            title="Verified Credentials"
            sub="Industry-recognized certifications from AWS, Microsoft, Google, and academic institutions."
          />

          <div style={{
            background: C.surface,
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
            overflow: "hidden",
            marginBottom: "1.5rem",
          }}>
            {coreCertifications.map((cert, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.25rem 1.5rem",
                  borderBottom: i < coreCertifications.length - 1 ? `1px solid ${C.border}` : "none",
                  opacity: certIn ? 1 : 0,
                  animation: certIn ? `fadeUp 0.5s ease ${i * 0.06}s both` : "none",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: "0.2rem",
                  }}>
                    {cert.name}
                  </div>
                  <div style={{
                    fontSize: "0.8rem",
                    color: C.muted,
                  }}>
                    {cert.issuer}
                  </div>
                </div>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    color: C.muted,
                  }}>
                    {cert.year}
                  </span>
                  <span style={{
                    padding: "0.3rem 0.7rem",
                    borderRadius: "6px",
                    background: C.greenDim,
                    border: `1px solid #bbf7d0`,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: C.green,
                    fontFamily: "'DM Mono', monospace",
                  }}>
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: "1.25rem 1.5rem",
            background: C.surface,
            borderRadius: "12px",
            border: `1px solid ${C.border}`,
          }}>
            <div style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: C.muted,
              marginBottom: "0.5rem",
            }}>
              Additional Technical Coursework
            </div>
            <p style={{
              fontSize: "0.85rem",
              color: C.muted2,
              lineHeight: 1.6,
            }}>
              {additionalCoursework}
            </p>
          </div>
        </section>

        {/* ══════ HIRING CTA ══════ */}
        <section ref={ctaRef} style={{ padding: "4rem 0 5rem" }}>
          <div
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "12px",
              padding: "3rem 2.5rem",
              opacity: ctaIn ? 1 : 0,
              animation: ctaIn ? "fadeUp 0.6s ease both" : "none",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 0.85rem",
                  background: C.greenDim,
                  border: `1px solid #bbf7d0`,
                  borderRadius: "6px",
                  marginBottom: "1rem",
                }}>
                  <div style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: C.green,
                  }} />
                  <span style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: C.green,
                  }}>
                    Available for Software Engineering Roles
                  </span>
                </div>

                <div style={{
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: C.text,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}>
                  2026 Graduate
                </div>

                <p style={{
                  fontSize: "0.95rem",
                  color: C.muted2,
                  lineHeight: 1.7,
                  marginBottom: "0.5rem",
                }}>
                  Open to backend, full-stack, and AI engineering positions.
                </p>

                <p style={{
                  fontSize: "0.9rem",
                  color: C.muted,
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}>
                  Let's discuss how I can contribute to your product roadmap.
                </p>
              </div>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                flexShrink: 0,
              }}>
                <a
                  href={RESUME_DOWNLOAD}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "8px",
                    background: C.accent,
                    color: "#fff",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.2s ease",
                    justifyContent: "center",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.25)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <Download size={16} /> Download Resume
                </a>
                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "8px",
                    background: "transparent",
                    border: `1px solid ${C.border2}`,
                    color: C.muted2,
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    justifyContent: "center",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = C.text;
                    e.currentTarget.style.borderColor = C.muted;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = C.muted2;
                    e.currentTarget.style.borderColor = C.border2;
                  }}
                >
                  <Mail size={15} /> Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ FOOTER ══════ */}
        <footer style={{
          borderTop: `1px solid ${C.border}`,
          padding: "2rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <span style={{
            fontSize: "0.8rem",
            color: C.muted,
            fontFamily: "'DM Mono', monospace",
          }}>
            © 2026 Siva Satya Sai Bhagavan
          </span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { label: "GitHub", href: "https://github.com/bhagavan444" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" },
              { label: "Email", href: "mailto:g.sivasatyasaibhagavan@gmail.com" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.8rem",
                  color: C.muted,
                  textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = C.text}
                onMouseLeave={e => e.currentTarget.style.color = C.muted}
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>

      {/* ══════ FULLSCREEN MODAL ══════ */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.92)",
            backdropFilter: "blur(12px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.25s ease both",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "960px",
              height: "92vh",
              margin: "0 auto",
              padding: "0 1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                color: "#9ca3af",
                letterSpacing: "0.08em",
              }}>
                Résumé · Bhagavan · 2026
              </span>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={RESUME_DOWNLOAD}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "7px",
                    background: C.accentDim,
                    border: `1px solid #bfdbfe`,
                    color: C.accent,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    fontFamily: "'DM Mono', monospace",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#dbeafe"}
                  onMouseLeave={e => e.currentTarget.style.background = C.accentDim}
                >
                  <Download size={12} /> Download
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 1rem",
                    borderRadius: "7px",
                    background: C.surface2,
                    border: `1px solid ${C.border}`,
                    color: C.muted2,
                    fontSize: "0.75rem",
                    fontFamily: "'DM Mono', monospace",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = C.text;
                    e.currentTarget.style.borderColor = C.border2;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = C.muted2;
                    e.currentTarget.style.borderColor = C.border;
                  }}
                >
                  <X size={12} /> Close
                </button>
              </div>
            </div>
            <div style={{
              flex: 1,
              borderRadius: "12px",
              overflow: "hidden",
              border: `1px solid ${C.border}`,
            }}>
              <iframe
                src={RESUME_PREVIEW}
                style={{ width: "100%", height: "100%", border: "none" }}
                title="Résumé Fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}