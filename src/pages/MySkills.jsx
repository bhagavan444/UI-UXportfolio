"use client";

import React, { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS — PREMIUM NEUTRALS + ACCENT SYSTEM
═══════════════════════════════════════════════════════════════ */
const C = {
  bg: "#ffffff",
  surface: "#f9fafb",
  surface2: "#f3f4f6",
  surface3: "#e5e7eb",
  border: "rgba(0,0,0,0.08)",
  border2: "rgba(0,0,0,0.12)",
  border3: "rgba(0,0,0,0.16)",
  text: "#0f172a",
  muted: "#64748b",
  muted2: "#475569",
  accent: "#4f7fff",
  accentDim: "rgba(79,127,255,0.08)",
  green: "#10b981",
  greenDim: "rgba(16,185,129,0.08)",
  amber: "#f59e0b",
  amberDim: "rgba(245,158,11,0.08)",
  purple: "#a78bfa",
  purpleDim: "rgba(167,139,250,0.08)",
};

/* ═══════════════════════════════════════════════════════════════
   DATA — RESTRUCTURED FOR IMMERSIVE SECTIONS
═══════════════════════════════════════════════════════════════ */
const pillars = [
  {
    id: "fullstack",
    number: "01",
    title: "Full-Stack Development",
    role: "MERN Stack Applications",
    context: "MERN Internship · Academic Projects",
    summary:
      "Built end-to-end web applications using React, Node.js, and MongoDB. Implemented authentication systems, REST APIs, and frontend–backend integration with real-world project deployment experience.",

    highlight: "Implemented Google & GitHub OAuth authentication",

    metrics: [
      { value: 3, suffix: "+", label: "Full-Stack Projects", desc: "MERN-based applications" },
      { value: 2, suffix: "", label: "OAuth Providers", desc: "Google & GitHub integration" },
      { value: 100, suffix: "%", label: "REST Integration", desc: "Frontend–backend connectivity" },
    ],

    tech: {
      Frontend: ["React.js", "HTML", "CSS", "JavaScript"],
      Backend: ["Node.js", "Express.js"],
      Database: ["MongoDB"],
      Tools: ["JWT", "REST APIs", "Git"]
    },

    projects: [
      { name: "ATS Resume Builder", detail: "Resume templates, keyword scoring, PDF parsing" },
      { name: "AI Chatbot Web App", detail: "React frontend + Flask backend integration" },
    ],

    source: "StudyOwl Education Pvt Ltd · Academic Projects",
    accent: C.accent,
    accentDim: C.accentDim,
  },

  {
    id: "ml",
    number: "02",
    title: "Machine Learning & AI",
    role: "Model Training & Web Deployment",
    context: "Blackbucks · SmartBridge Internships",
    summary:
      "Trained and evaluated machine learning models for classification and NLP tasks. Deployed models using Flask APIs and integrated predictions into web interfaces.",

    highlight: "CNN-based image classification deployed via Flask",

    metrics: [
      { value: 90, suffix: "%+", label: "NLP Model Accuracy", desc: "TF-IDF + classification" },
      { value: 92, suffix: "%", label: "CNN Accuracy", desc: "Image classification model" },
      { value: 4, suffix: "", label: "ML Projects", desc: "Classification & NLP systems" },
    ],

    tech: {
      Core: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
      Processing: ["Pandas", "NumPy", "NLTK"],
      Deployment: ["Flask API", "REST Endpoints"]
    },

    projects: [
      { name: "Fake News Detector", detail: "TF-IDF vectorization + classifier pipeline" },
      { name: "Career Path Recommender", detail: "Supervised ML-based prediction system" },
    ],

    source: "Blackbucks · SmartBridge AI/ML Internship",
    accent: C.purple,
    accentDim: C.purpleDim,
  },

  {
    id: "deployment",
    number: "03",
    title: "Application Deployment",
    role: "Cloud & Hosting Basics",
    context: "Self-Learning · Project Deployment",
    summary:
      "Deployed web and ML applications using cloud hosting platforms. Configured environment variables, backend APIs, and production-ready builds for demo usage.",

    highlight: "Successfully deployed full-stack demo applications",

    metrics: [
      { value: 5, suffix: "+", label: "Apps Deployed", desc: "Demo-ready deployments" },
      { value: 1, suffix: "", label: "Cloud Platform", desc: "Vercel / Similar hosting" },
      { value: 100, suffix: "%", label: "Environment Setup", desc: "Configured APIs & variables" },
    ],

    tech: {
      Hosting: ["Vercel", "Cloud-based hosting"],
      Backend: ["Flask Deployment", "Node Deployment"],
      Tools: ["Environment Config", "GitHub"]
    },

    projects: [
      { name: "AI Chatbot Deployment", detail: "Frontend + Flask API hosted" },
      { name: "Resume Builder Deployment", detail: "OAuth + MongoDB Atlas integration" },
    ],

    source: "Personal Projects",
    accent: C.green,
    accentDim: C.greenDim,
  },

  {
    id: "foundations",
    number: "04",
    title: "Programming Foundations",
    role: "Data Structures & OOP",
    context: "College Coursework · Coding Practice",
    summary:
      "Strong fundamentals in object-oriented programming and basic data structures. Practiced problem solving across arrays, strings, searching, and sorting algorithms.",

    highlight: "Consistent coding practice across multiple platforms",

    metrics: [
      { value: 100, suffix: "+", label: "Problems Solved", desc: "LeetCode & practice platforms" },
      { value: 3, suffix: "", label: "Languages Used", desc: "Python, Java, C" },
      { value: 1, suffix: "", label: "Core Strength", desc: "OOP Concepts" },
    ],

    tech: {
      Languages: ["Python", "Java", "C"],
      Concepts: ["Data Structures", "OOP", "Searching & Sorting"],
      Practice: ["LeetCode", "College Lab Work"]
    },

    projects: [
      { name: "LeetCode Practice", detail: "100+ coding problems solved" },
      { name: "Academic Coursework", detail: "OOP and DSA implementations" },
    ],

    source: "College Coursework · Self-Learning",
    accent: C.amber,
    accentDim: C.amberDim,
  },
];

const tooling = [
  { name: "Git / GitHub", level: "Daily", category: "Core" },
  { name: "VS Code", level: "Daily", category: "Core" },
  { name: "Postman", level: "Daily", category: "Core" },
  { name: "MongoDB Atlas", level: "Regular", category: "Database" },
  { name: "Jupyter Notebook", level: "Regular", category: "ML" },
  { name: "Flask Deployment (Local)", level: "Regular", category: "Backend" },
  { name: "Vercel / Demo Hosting", level: "Occasional", category: "Deployment" },
  { name: "Figma (Basic UI Mockups)", level: "Occasional", category: "Design" },
];

const deepening = [
  {
    area: "System Design Fundamentals",
    detail: "Learning REST architecture, database indexing, caching concepts, and scalability basics",
    icon: "🏗️"
  },
  {
    area: "LLM Integration",
    detail: "Exploring prompt engineering and API-based LLM integration in web applications",
    icon: "🤖"
  },
  {
    area: "Cloud & Deployment Basics",
    detail: "Studying containerization concepts and cloud deployment workflows",
    icon: "☁️"
  },
  {
    area: "TypeScript Fundamentals",
    detail: "Improving type safety and component structure in React projects",
    icon: "📘"
  },
];

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR COMPONENT
═══════════════════════════════════════════════════════════════ */
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [currentAccent, setCurrentAccent] = useState(C.accent);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Detect hover on interactive elements
      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("[data-magnetic]") ||
        target.closest("[data-hover]");
      setIsHovering(!!isInteractive);

      // Detect section accent
      const section = target.closest("[data-accent]");
      if (section) {
        setCurrentAccent(section.dataset.accent);
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "32px" : "8px",
          height: isHovering ? "32px" : "8px",
          borderRadius: "50%",
          background: isHovering ? "transparent" : currentAccent,
          border: isHovering ? `2px solid ${currentAccent}` : "none",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease",
          mixBlendMode: "difference",
        }}
      />
      {/* Cursor glow */}
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "64px" : "48px",
          height: isHovering ? "64px" : "48px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${currentAccent}25 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease",
        }}
      />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════════════════ */
function AnimatedCounter({ value, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = 0;
          const end = value;
          const startTime = Date.now();

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
            setCount(Math.floor(start + (end - start) * eased));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL PROGRESS INDICATOR
═══════════════════════════════════════════════════════════════ */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: C.surface2,
        zIndex: 9998,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${C.accent}, ${C.purple})`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SECTION INDICATOR (STICKY LEFT SIDE)
═══════════════════════════════════════════════════════════════ */
function SectionIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = index;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: "2rem",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      {pillars.map((p, i) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onClick={() => {
            document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div
            style={{
              width: activeSection === i ? "32px" : "16px",
              height: "2px",
              background: activeSection === i ? p.accent : C.border2,
              transition: "all 0.3s ease",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontFamily: "'DM Mono', monospace",
              color: activeSection === i ? C.text : C.muted,
              opacity: activeSection === i ? 1 : 0,
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
            }}
          >
            {p.number}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC BUTTON
═══════════════════════════════════════════════════════════════ */
function MagneticButton({ children, href, style }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.75rem 1.5rem",
    background: C.surface2,
    border: `1px solid ${C.border2}`,
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: C.text,
    textDecoration: "none",
    transition: "all 0.2s ease",
    transform: `translate(${position.x}px, ${position.y}px)`,
    cursor: "pointer",
    ...style,
  };

  return (
    <a
      ref={ref}
      href={href}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={baseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = C.surface3;
        e.currentTarget.style.borderColor = C.border3;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = C.surface2;
        e.currentTarget.style.borderColor = C.border2;
      }}
    >
      {children}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   IMMERSIVE PILLAR SECTION
═══════════════════════════════════════════════════════════════ */
function PillarSection({ pillar, index }) {
  const [inView, setInView] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 3, y: -x * 3 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const isEven = index % 2 === 0;

  return (
    <section
      id={pillar.id}
      ref={ref}
      data-section
      data-accent={pillar.accent}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        padding: "8rem 0",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(60px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Background number watermark */}
      <div
        style={{
          position: "absolute",
          [isEven ? "left" : "right"]: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "clamp(12rem, 20vw, 24rem)",
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
          color: pillar.accentDim,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          opacity: 0.3,
        }}
      >
        {pillar.number}
      </div>

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          [isEven ? "left" : "right"]: "10%",
          top: "30%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${pillar.accent}15 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isEven ? "1fr 1fr" : "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Content side */}
        <div
          style={{
            order: isEven ? 1 : 2,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : `translateX(${isEven ? "-40px" : "40px"})`,
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: "24px", height: "1px", background: pillar.accent }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: pillar.accent,
              }}
            >
              {pillar.number} · {pillar.context}
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: C.text,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1rem",
            }}
          >
            {pillar.title}
          </h2>

          {/* Role */}
          <div
            style={{
              fontSize: "1.125rem",
              color: C.muted2,
              fontWeight: 500,
              marginBottom: "2rem",
            }}
          >
            {pillar.role}
          </div>

          {/* Summary */}
          <p
            style={{
              fontSize: "1rem",
              color: C.muted2,
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            {pillar.summary}
          </p>

          {/* Highlight */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 1.5rem",
              background: pillar.accentDim,
              border: `1px solid ${pillar.accent}30`,
              borderRadius: "8px",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: pillar.accent,
              }}
            />
            <span
              style={{
                fontSize: "0.875rem",
                color: C.text,
                fontWeight: 500,
              }}
            >
              {pillar.highlight}
            </span>
          </div>

          {/* Technology Grid */}
          <div style={{ marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: C.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                marginBottom: "1.25rem",
              }}
            >
              Technology Stack
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {Object.entries(pillar.tech).map(([category, techs]) => (
                <div key={category}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: pillar.accent,
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {category}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        data-hover
                        style={{
                          padding: "0.4rem 0.9rem",
                          background: C.surface2,
                          border: `1px solid ${C.border}`,
                          borderRadius: "6px",
                          fontSize: "0.8rem",
                          fontWeight: 500,
                          color: C.muted2,
                          transition: "all 0.2s ease",
                          cursor: "default",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = C.surface3;
                          e.currentTarget.style.borderColor = pillar.accent + "40";
                          e.currentTarget.style.color = C.text;
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = C.surface2;
                          e.currentTarget.style.borderColor = C.border;
                          e.currentTarget.style.color = C.muted2;
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                color: C.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "'DM Mono', monospace",
                marginBottom: "1rem",
              }}
            >
              Shipped Work
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {pillar.projects.map((project) => (
                <div
                  key={project.name}
                  style={{
                    padding: "1rem 1.25rem",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = pillar.accent + "30";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {project.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: C.muted }}>
                    {project.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics side */}
        <div
          style={{
            order: isEven ? 2 : 1,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : `translateX(${isEven ? "40px" : "-40px"})`,
            transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            style={{
              position: "relative",
              padding: "3rem",
              background: C.surface,
              border: `1px solid ${C.border2}`,
              borderRadius: "24px",
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.2s ease",
              boxShadow: `0 24px 48px rgba(0,0,0,0.08), 0 0 0 1px ${pillar.accent}10`,
            }}
          >
            {/* Glow overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "24px",
                background: `radial-gradient(circle at 50% 50%, ${pillar.accent}08 0%, transparent 60%)`,
                pointerEvents: "none",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {pillar.metrics.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    paddingBottom: i < pillar.metrics.length - 1 ? "2.5rem" : 0,
                    borderBottom:
                      i < pillar.metrics.length - 1
                        ? `1px solid ${C.border}`
                        : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "4rem",
                      fontWeight: 400,
                      color: pillar.accent,
                      lineHeight: 1,
                      marginBottom: "0.75rem",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {metric.label}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: C.muted, lineHeight: 1.6 }}>
                    {metric.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Source badge */}
            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: `1px solid ${C.border}`,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={pillar.accent}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: C.muted,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {pillar.source}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Skills() {
  const [headerInView, setHeaderInView] = useState(false);
  const [toolingInView, setToolingInView] = useState(false);
  const [deepeningInView, setDeepeningInView] = useState(false);
  const headerRef = useRef(null);
  const toolingRef = useRef(null);
  const deepeningRef = useRef(null);

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderInView },
      { ref: toolingRef, setter: setToolingInView },
      { ref: deepeningRef, setter: setDeepeningInView },
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true);
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observerInstances.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      {/* ═══════ GLOBAL STYLES ═══════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Geist', system-ui, sans-serif;
          background: ${C.bg};
          color: ${C.text};
          -webkit-font-smoothing: antialiased;
          cursor: none;
        }

        ::selection {
          background: ${C.accentDim};
          color: ${C.text};
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: ${C.bg};
        }

        ::-webkit-scrollbar-thumb {
          background: ${C.border3};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${C.muted};
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Section indicator */}
      <SectionIndicator />

      {/* Background texture */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ═══════ PAGE WRAPPER ═══════ */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ═══════ HEADER ═══════ */}
        <header
          ref={headerRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "8rem 2rem 4rem",
            borderBottom: `1px solid ${C.border}`,
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Overline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ width: "32px", height: "1px", background: C.accent }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.accent,
              }}
            >
              Technical Profile · 2026
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 400,
              color: C.text,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              maxWidth: "900px",
            }}
          >
            Skills & Capabilities
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.125rem",
              color: C.muted2,
              lineHeight: 1.8,
              maxWidth: "720px",
              marginBottom: "3rem",
            }}
          >
            A structured overview of technical competencies organized by domain, with
            production context, measurable outcomes, and experience classification.
            Last updated February 2026.
          </p>

          {/* Stats grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "3rem",
              maxWidth: "800px",
            }}
          >
            {[
              { value: "4", label: "Capability Domains" },
              { value: "3", label: "Industry Internships" },
              { value: "5+", label: "Projects Shipped" },
              { value: "20+", label: "Certifications" },
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "2.5rem",
                    fontWeight: 400,
                    color: C.text,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: C.muted,
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ═══════ PRIMARY STRENGTH HERO ═══════ */}
        <section
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "8rem 2rem",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "4rem 5rem",
              background: `linear-gradient(135deg, ${C.accentDim} 0%, ${C.purpleDim} 100%)`,
              border: `1px solid ${C.accent}20`,
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background: `radial-gradient(circle, ${C.accent}20 0%, transparent 70%)`,
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Label */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  background: `${C.accent}15`,
                  border: `1px solid ${C.accent}40`,
                  borderRadius: "6px",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: C.accent,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: C.accent,
                  }}
                >
                  Primary Strength
                </span>
              </div>

              {/* Title with gradient underline */}
              <div style={{ marginBottom: "2rem" }}>
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 400,
                    color: C.text,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    marginBottom: "1rem",
                  }}
                >
                  Full-Stack × AI Integration
                </h2>
                <div
                  style={{
                    width: "200px",
                    height: "3px",
                    background: `linear-gradient(90deg, ${C.accent}, ${C.purple})`,
                    borderRadius: "2px",
                  }}
                />
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "1.125rem",
                  color: C.muted2,
                  lineHeight: 1.8,
                  maxWidth: "800px",
                  marginBottom: "3rem",
                }}
              >
                The highest-leverage combination in my stack: building production-grade web
                applications that incorporate ML inference — from model training through REST
                API deployment to user-facing interface. Demonstrated across internship
                projects at SmartBridge and StudyOwl.
              </p>

              {/* Tech stack highlights */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {[
                  "React × Flask API",
                  "MongoDB × Python pipeline",
                  "OAuth × JWT security",
                ].map((tech) => (
                  <div
                    key={tech}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem 1.5rem",
                      background: C.surface,
                      border: `1px solid ${C.border2}`,
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: C.accent,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.875rem",
                        color: C.text,
                        fontWeight: 500,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ PILLAR SECTIONS ═══════ */}
        {pillars.map((pillar, index) => (
          <PillarSection key={pillar.id} pillar={pillar} index={index} />
        ))}

        {/* ═══════ TOOLING SECTION ═══════ */}
        <section
          ref={toolingRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "8rem 2rem",
            borderTop: `1px solid ${C.border}`,
            opacity: toolingInView ? 1 : 0,
            transform: toolingInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: "1rem",
              }}
            >
              Section 05
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Tooling Familiarity
            </h2>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "1.5rem",
              }}
            >
              {[
                { level: "Daily", color: C.accent },
                { level: "Regular", color: C.green },
                { level: "Occasional", color: C.amber },
              ].map((item) => (
                <div
                  key={item.level}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: item.color,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: C.muted2,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tooling grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {tooling.map((tool, i) => {
              const levelColor =
                tool.level === "Daily"
                  ? C.accent
                  : tool.level === "Regular"
                  ? C.green
                  : C.amber;
              const levelBg =
                tool.level === "Daily"
                  ? C.accentDim
                  : tool.level === "Regular"
                  ? C.greenDim
                  : C.amberDim;

              return (
                <div
                  key={tool.name}
                  data-hover
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "12px",
                    transition: "all 0.25s ease",
                    cursor: "default",
                    opacity: toolingInView ? 1 : 0,
                    transform: toolingInView ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = levelBg;
                    e.currentTarget.style.borderColor = levelColor + "40";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.08)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.surface;
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: levelColor,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: C.text,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {tool.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: C.muted,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {tool.level}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════ CURRENTLY DEEPENING ═══════ */}
        <section
          ref={deepeningRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "8rem 2rem",
            borderTop: `1px solid ${C.border}`,
            opacity: deepeningInView ? 1 : 0,
            transform: deepeningInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: "1rem",
              }}
            >
              Section 06
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Currently Deepening
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: C.muted2,
                lineHeight: 1.8,
                maxWidth: "640px",
              }}
            >
              Active learning areas with intentional focus — these will move to core
              pillars within 6 months.
            </p>
          </div>

          {/* Deepening grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {deepening.map((item, i) => (
              <div
                key={item.area}
                data-hover
                style={{
                  position: "relative",
                  padding: "2rem",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  cursor: "default",
                  overflow: "hidden",
                  opacity: deepeningInView ? 1 : 0,
                  transform: deepeningInView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.accent + "40";
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 16px 48px rgba(0,0,0,0.08)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Accent line */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "25%",
                    bottom: "25%",
                    width: "3px",
                    background: `linear-gradient(180deg, ${C.accent}, ${C.purple})`,
                    borderRadius: "0 2px 2px 0",
                  }}
                />

                <div style={{ paddingLeft: "1rem" }}>
                  {/* Icon */}
                  <div
                    style={{
                      fontSize: "2rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: "0.75rem",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {item.area}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: C.muted,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "4rem 2rem",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {/* Status */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: C.green,
                  animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: C.muted2,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Open to full-time roles · Immediate availability
              </span>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "2rem" }}>
              <MagneticButton href="mailto:g.sivasatyasaibhagavan@gmail.com">
                Email
              </MagneticButton>
              <MagneticButton
                href="https://github.com/bhagavan444"
                style={{ target: "_blank", rel: "noopener noreferrer" }}
              >
                GitHub
              </MagneticButton>
              <MagneticButton
                href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/"
                style={{ target: "_blank", rel: "noopener noreferrer" }}
              >
                LinkedIn
              </MagneticButton>
            </div>
          </div>
        </footer>
      </div>

      {/* Pulse animation for status indicator */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}