// src/pages/MERNSkillsShowcase.jsx – FINAL 1000+ LINES VERSION
// Ultra-premium futuristic MERN Stack Skills Showcase
// Holographic cards • Live progress animation • Interactive tech grid • 3D effects • Full responsiveness

import { useState, useEffect, useRef, useMemo } from "react";
import {
  Code2,
  Database,
  Server,
  Layers,
  Zap,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Star,
  Award,
  ChevronRight,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Rocket,
  GitBranch,
  Cloud,
  Lock,
} from "lucide-react";

const mernSkills = [
  {
    id: 1,
    category: "Programming Languages",
    level: 90,
    color: "#3776AB",
    gradient: "linear-gradient(135deg, #3776AB, #2B5F9E)",
    icon: Code2,
    description: "Strong foundation in problem solving, OOP concepts and backend logic",
    techs: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
    stats: { projects: 5, experience: "0+ years" },
  },
  {
    id: 2,
    category: "Full Stack Development",
    level: 88,
    color: "#61DAFB",
    gradient: "linear-gradient(135deg, #61DAFB, #21A1C4)",
    icon: Layers,
    description: "End-to-end web application development using MERN stack & REST APIs",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    stats: { projects: 5, experience: "0+ years" },
  },
  {
    id: 3,
    category: "Machine Learning & AI",
    level: 85,
    color: "#FF6F00",
    gradient: "linear-gradient(135deg, #FF6F00, #E65100)",
    icon: Cpu,
    description: "Building ML models, deep learning pipelines & AI-powered applications",
    techs: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "NLP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    stats: { projects: 8, experience: "0+ years" },
  },
  {
    id: 4,
    category: "Data Engineering & Analysis",
    level: 82,
    color: "#4CAF50",
    gradient: "linear-gradient(135deg, #4CAF50, #2E7D32)",
    icon: Database,
    description: "Data preprocessing, feature engineering & exploratory data analysis",
    techs: [
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
      { name: "Seaborn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    stats: { projects: 5, experience: "0+ years" },
  },
  {
    id: 5,
    category: "Cloud, DevOps & Tools",
    level: 80,
    color: "#F0DB4F",
    gradient: "linear-gradient(135deg, #F0DB4F, #D4BD3C)",
    icon: Terminal,
    description: "Deployment, version control, containerization & developer productivity tools",
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    ],
    stats: { projects: 6, experience: "0+ years" },
  },
];

export default function MERNSkillsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const animationRef = useRef(null);

  // Intersection Observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Progress animation + auto-cycle
  useEffect(() => {
    let lastTime = Date.now();
    const animate = () => {
      const now = Date.now();
      const delta = now - lastTime;
      lastTime = now;

      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % mernSkills.length);
          return 0;
        }
        return Math.min(prev + delta / 40, 100);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Mouse movement for 3D effect
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    });
  };

  const activeTalent = useMemo(() => mernSkills[activeIndex], [activeIndex]);
  const Icon = activeTalent.icon;

  // Particle system for background
  const particles = useMemo(
    () =>
      [...Array(12)].map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.3,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #0a0a0f)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(60px, 10vh, 120px) clamp(20px, 5vw, 60px)",
      }}
    >
      {/* Global Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -25px, 0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { filter: blur(50px) brightness(1.2); }
          50% { filter: blur(70px) brightness(1.6); }
        }
        @keyframes scan {
          0% { left: -30%; }
          100% { left: 130%; }
        }
        @keyframes techPop {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          60% { transform: scale(1.05) translateY(-5px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes ripple {
          0% { transform: scale(0.9); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes rotateGlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .gradient-text {
          background: linear-gradient(90deg, #61DAFB, #8CC84B, #00ED64, #F0DB4F, #61DAFB);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s ease infinite;
        }
        .tech-card {
          will-change: transform;
          transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @media (max-width: 1024px) {
          .grid-main { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .stats-row { flex-direction: column !important; gap: 16px !important; }
        }
        @media (max-width: 480px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Optimized Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* Dynamic Gradient Orbs */}
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            top: "-10%",
            left: "-5%",
            background: `radial-gradient(circle, ${activeTalent.color}18, transparent 65%)`,
            animation: "float 18s ease-in-out infinite, glow 7s ease-in-out infinite",
            transition: "background 0.6s ease",
            transform: `translate3d(${mousePos.x * 2}px, ${mousePos.y * 2}px, 0)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            bottom: "-5%",
            right: "-5%",
            background: `radial-gradient(circle, ${activeTalent.color}22, transparent 70%)`,
            animation: "float 22s ease-in-out infinite 4s, glow 9s ease-in-out infinite 2s",
            transition: "background 0.6s ease",
            transform: `translate3d(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px, 0)`,
          }}
        />

        {/* Optimized Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(${activeTalent.color}15 1px, transparent 1px),
              linear-gradient(90deg, ${activeTalent.color}15 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.2,
            transition: "background-image 0.4s ease",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 80%)",
          }}
        />

        {/* Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: activeTalent.color,
              borderRadius: "50%",
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              animation: `float ${p.duration}s ease-in-out infinite ${p.delay}s`,
              boxShadow: `0 0 ${p.size * 5}px ${activeTalent.color}`,
              transition: "background 0.5s, box-shadow 0.5s",
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", maxWidth: "1600px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(50px, 8vh, 80px)",
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? "slideUp 0.8s ease-out" : "none",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 28px",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              borderRadius: "999px",
              border: `1px solid ${activeTalent.color}35`,
              marginBottom: "28px",
              boxShadow: `0 0 25px ${activeTalent.color}15`,
              transition: "all 0.4s ease",
            }}
          >
            <div
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: activeTalent.color,
                animation: "pulse 1.5s infinite",
                boxShadow: `0 0 12px ${activeTalent.color}`,
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontWeight: "800",
                letterSpacing: "2.5px",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              MERN Stack Expertise
            </span>
            <Zap size={16} style={{ color: activeTalent.color }} />
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 9vw, 6.5rem)",
              fontWeight: "900",
              lineHeight: 0.95,
              marginBottom: "20px",
              letterSpacing: "-0.03em",
            }}
          >
            My Skills
            <br />
            <span className="gradient-text">Show Case</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
              color: "#9ca3af",
              maxWidth: "650px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Crafting scalable web applications with{" "}
            <strong style={{ color: activeTalent.color }}>
              MongoDB, Express, React & Node.js
            </strong>
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="grid-main"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "clamp(20px, 3.5vw, 36px)",
            marginBottom: "50px",
          }}
        >
          {/* Main Card */}
          <div
            style={{
              position: "relative",
              padding: "clamp(28px, 4.5vw, 44px)",
              background: "rgba(15,15,25,0.7)",
              backdropFilter: "blur(30px) saturate(180%)",
              borderRadius: "28px",
              border: `2px solid ${activeTalent.color}35`,
              boxShadow: `0 20px 50px -10px ${activeTalent.color}25, inset 0 1px 0 rgba(255,255,255,0.08)`,
              overflow: "hidden",
              transition: "all 0.4s ease",
              transform: `perspective(1000px) rotateX(${mousePos.y}px) rotateY(${mousePos.x}px)`,
            }}
          >
            {/* Rotating Border Glow */}
            <div
              style={{
                position: "absolute",
                inset: -2,
                background: `conic-gradient(from 0deg, transparent, ${activeTalent.color}40, transparent 100%)`,
                borderRadius: "28px",
                opacity: 0.6,
                animation: "rotateGlow 6s linear infinite",
              }}
            />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "18px",
                    background: activeTalent.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 12px 35px -8px ${activeTalent.color}50`,
                    animation: "pulse 2.5s infinite",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Icon
                    size={36}
                    style={{ color: "#fff", position: "relative", zIndex: 2 }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: `2px solid ${activeTalent.color}`,
                      borderRadius: "18px",
                      animation: "ripple 2s infinite",
                    }}
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <h2
                    style={{
                      fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                      fontWeight: "900",
                      marginBottom: "6px",
                      color: activeTalent.color,
                      textShadow: `0 0 25px ${activeTalent.color}40`,
                    }}
                  >
                    {activeTalent.category}
                  </h2>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#9ca3af",
                      lineHeight: 1.5,
                    }}
                  >
                    {activeTalent.description}
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div
                className="stats-row"
                style={{
                  display: "flex",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    background: `${activeTalent.color}08`,
                    borderRadius: "14px",
                    border: `1px solid ${activeTalent.color}25`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "4px",
                      fontWeight: "700",
                      letterSpacing: "1px",
                    }}
                  >
                    PROJECTS
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "900",
                      color: activeTalent.color,
                    }}
                  >
                    {activeTalent.stats.projects}+
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "16px 20px",
                    background: `${activeTalent.color}08`,
                    borderRadius: "14px",
                    border: `1px solid ${activeTalent.color}25`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#6b7280",
                      marginBottom: "4px",
                      fontWeight: "700",
                      letterSpacing: "1px",
                    }}
                  >
                    EXPERIENCE
                  </div>
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: "900",
                      color: activeTalent.color,
                    }}
                  >
                    {activeTalent.stats.experience}
                  </div>
                </div>
              </div>

              {/* Proficiency */}
              <div style={{ marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "1.8px",
                      color: "#6b7280",
                      textTransform: "uppercase",
                    }}
                  >
                    Proficiency
                  </span>
                  <div
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: "900",
                      background: activeTalent.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {activeTalent.level}%
                  </div>
                </div>

                <div
                  style={{
                    position: "relative",
                    height: "20px",
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: "999px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${activeTalent.level}%`,
                      background: activeTalent.gradient,
                      borderRadius: "999px",
                      boxShadow: `0 0 25px ${activeTalent.color}60, inset 0 1px 0 rgba(255,255,255,0.25)`,
                      position: "relative",
                      transition: "width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                        animation: "shimmer 2s infinite",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      width: "3px",
                      height: "100%",
                      background: activeTalent.color,
                      filter: "blur(3px)",
                      boxShadow: `0 0 15px ${activeTalent.color}`,
                      animation: "scan 2.5s ease-in-out infinite",
                    }}
                  />
                </div>
              </div>

              {/* Tech Grid */}
              <div
                className="tech-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "14px",
                }}
              >
                {activeTalent.techs.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-card"
                    onMouseEnter={() => setHoveredTech(i)}
                    onMouseLeave={() => setHoveredTech(null)}
                    style={{
                      position: "relative",
                      padding: "22px",
                      background:
                        hoveredTech === i
                          ? `${activeTalent.color}12`
                          : "rgba(255,255,255,0.03)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "16px",
                      border:
                        hoveredTech === i
                          ? `2px solid ${activeTalent.color}`
                          : "2px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      transform:
                        hoveredTech === i ? "translateY(-6px) scale(1.04)" : "scale(1)",
                      boxShadow:
                        hoveredTech === i
                          ? `0 18px 35px -8px ${activeTalent.color}45, 0 0 25px ${activeTalent.color}25`
                          : "0 4px 12px rgba(0,0,0,0.25)",
                      animation: `techPop 0.5s ease-out ${i * 0.08}s backwards`,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          filter:
                            hoveredTech === i
                              ? `drop-shadow(0 0 12px ${activeTalent.color})`
                              : "none",
                          transition: "filter 0.3s ease",
                        }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        style={{
                          display: "none",
                          width: "52px",
                          height: "52px",
                          background: activeTalent.gradient,
                          borderRadius: "12px",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "22px",
                          fontWeight: "900",
                          color: "#fff",
                        }}
                      >
                        {tech.name[0]}
                      </div>
                    </div>

                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        textAlign: "center",
                        color: hoveredTech === i ? activeTalent.color : "#fff",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigator */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {mernSkills.map((skill, i) => {
              const SkillIcon = skill.icon;
              const isActive = i === activeIndex;

              return (
                <button
                  key={skill.id}
                  onClick={() => {
                    setActiveIndex(i);
                    setProgress(0);
                  }}
                  style={{
                    position: "relative",
                    padding: "20px",
                    background: isActive
                      ? `${skill.color}06`
                      : "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "18px",
                    border: isActive
                      ? `2px solid ${skill.color}`
                      : "2px solid rgba(255,255,255,0.06)",
                    cursor: "pointer",
                    textAlign: "left",
                    overflow: "hidden",
                    transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: isActive ? "scale(1.02)" : "scale(1)",
                    boxShadow: isActive
                      ? `0 12px 35px -8px ${skill.color}35, 0 0 25px ${skill.color}18`
                      : "none",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3px",
                      background: skill.gradient,
                      opacity: isActive ? 1 : 0.25,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      paddingLeft: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "11px",
                        background: isActive ? skill.gradient : "rgba(255,255,255,0.04)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <SkillIcon
                        size={22}
                        style={{
                          color: isActive ? "#fff" : skill.color,
                          transition: "color 0.3s ease",
                        }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          color: isActive ? skill.color : "#ffffff",
                          marginBottom: "4px",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {skill.category}
                      </div>

                      <div
                        style={{
                          fontSize: "11px",
                          color: isActive ? skill.color : "#9ca3af",
                          opacity: isActive ? 1 : 0.7,
                        }}
                      >
                        {skill.stats.projects}+ Projects
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "1.8rem",
                        fontWeight: "900",
                        color: skill.color,
                        opacity: isActive ? 1 : 0.4,
                      }}
                    >
                      {skill.level}%
                    </div>
                  </div>

                  {/* Progress Bar in Navigator */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "3px",
                        width: `${progress}%`,
                        background: skill.gradient,
                        transition: "width 0.4s ease",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "clamp(20px, 3vw, 32px)",
            marginTop: "clamp(60px, 8vh, 100px)",
          }}
        >
          {[
            { label: "Total Projects", value: "292", color: "#00ED64", icon: Rocket },
            { label: "Years Experience", value: "4+", color: "#61DAFB", icon: TrendingUp },
            { label: "Technologies Mastered", value: "25+", color: "#F0DB4F", icon: Layers },
            { label: "Code Quality", value: "98%", color: "#EC4899", icon: Award },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: `2px solid ${stat.color}30`,
                  textAlign: "center",
                  transition: "all 0.4s ease",
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${0.8 + i * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                  e.currentTarget.style.boxShadow = `0 25px 60px ${stat.color}40`;
                  e.currentTarget.style.borderColor = stat.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = `${stat.color}30`;
                }}
              >
                <Icon
                  size={40}
                  style={{
                    color: stat.color,
                    marginBottom: "16px",
                    animation: "pulseGlow 3s infinite",
                  }}
                />
                <div
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: "900",
                    color: stat.color,
                    marginBottom: "8px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    color: "#9ca3af",
                    fontWeight: "700",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}