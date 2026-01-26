"use client";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/bhagavanresume.pdf";

import { 
  Terminal, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ChevronRight,
  Cpu,
  Database,
  Globe,
  Star,
  Brain,
  Code,
  Zap,
  Cloud,
  Layers,
  Server,
  Award,
  TrendingUp,
  Briefcase,
  Target,
  Rocket,
  Activity,
  Eye
} from "lucide-react";

export default function ModernPortfolio() {
  // ──────────────────────────────────────────────────────────────
  // STATE MANAGEMENT
  // ──────────────────────────────────────────────────────────────
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [skillProgress, setSkillProgress] = useState({});
  const [isVisible, setIsVisible] = useState({});
  
  // ──────────────────────────────────────────────────────────────
  // REFS
  // ──────────────────────────────────────────────────────────────
  const containerRef = useRef(null);

  // ──────────────────────────────────────────────────────────────
  // TYPING ANIMATION ROLES
  // ──────────────────────────────────────────────────────────────
  const roles = [
    "AI Engineer",
    "Full-Stack Developer",
    "Cloud Architect",
    "ML Engineer",
    "System Designer"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  // ──────────────────────────────────────────────────────────────
  // MOUSE PARALLAX EFFECT
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 25;
      const y = (e.clientY / window.innerHeight - 0.5) * 25;
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ──────────────────────────────────────────────────────────────
  // TYPING ANIMATION
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let index = 0;
    
    const typingInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setTypedText(currentRole.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2200);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  // ──────────────────────────────────────────────────────────────
  // SCROLL PROGRESS & ACTIVE SECTION
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
      
      // Update active section based on scroll position
      setActiveSection(Math.floor(scrolled / 700));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ──────────────────────────────────────────────────────────────
  // INTERSECTION OBSERVER FOR ANIMATIONS
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    document.querySelectorAll("[data-observe]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ──────────────────────────────────────────────────────────────
  // SKILL PROGRESS ANIMATION
  // ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isVisible.skills) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setSkillProgress((prev) => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, 300 + index * 150);
      });
    }
  }, [isVisible.skills]);

  // ──────────────────────────────────────────────────────────────
  // DATA
  // ──────────────────────────────────────────────────────────────
  const techStack = [
    { name: "TensorFlow",     icon: Brain,     color: "#FF6F00", desc: "Deep Learning & Model Training" },
    { name: "PyTorch",        icon: Cpu,       color: "#EE4C2C", desc: "Neural Networks & Research" },
    { name: "React",          icon: Code,      color: "#61DAFB", desc: "Modern Frontend" },
    { name: "Node.js",        icon: Server,    color: "#339933", desc: "Backend APIs" },
    { name: "MongoDB",        icon: Database,  color: "#47A248", desc: "NoSQL Database" },
    { name: "AWS",            icon: Cloud,     color: "#FF9900", desc: "Cloud Infrastructure" },
    { name: "Docker",         icon: Layers,    color: "#2496ED", desc: "Containerization" },
    { name: "Kubernetes",     icon: Zap,       color: "#326CE5", desc: "Orchestration" },
  ];

  const skills = [
    { name: "Artificial Intelligence & Machine Learning", level: 95, color: "#FF6F00" },
    { name: "Full-Stack Web Development (MERN)",          level: 93, color: "#61DAFB" },
    { name: "Deep Learning & Computer Vision",            level: 90, color: "#8b5cf6" },
    { name: "Cloud Computing & Deployment",               level: 88, color: "#FF9900" },
    { name: "DevOps, CI/CD & Automation",                 level: 85, color: "#2496ED" },
    { name: "Data Structures & Algorithms",               level: 89, color: "#22c55e" },
  ];

  const stats = [
    { label: "Projects Completed", value: "10+",  icon: Briefcase,  color: "#00ffff" },
    { label: "Certifications",     value: "15+",  icon: Award,      color: "#8a2be2" },
    { label: "Tech Stack",         value: "20+",  icon: Code,       color: "#00ffff" },
    { label: "Success Rate",       value: "100%", icon: Target,     color: "#8a2be2" },
  ];

  const achievements = [
    {
      year: "2022-2026",
      title: "3 Industry Internships",
      subtitle: "AI • ML • MERN Stack",
      icon: Star,
      color: "#FFD700",
      details: "Delivered production-ready solutions"
    },
    {
      year: "2022-2026",
      title: "15+ Certifications",
      subtitle: "AI, Cloud & Full-Stack",
      icon: Award,
      color: "#00E5FF",
      details: "Mastered cutting-edge technologies"
    },
    {
      year: "2026",
      title: "Ready for Impact",
      subtitle: "AI Engineer • Full-Stack Developer",
      icon: Rocket,
      color: "#7C4DFF",
      details: "Seeking full-time opportunities"
    }
  ];

  // ──────────────────────────────────────────────────────────────
  // RENDER
  // ──────────────────────────────────────────────────────────────
  return (
    <>
      {/* ────────────────────────────────────────────────────────────── */}
      {/* GLOBAL STYLES - CYBERPUNK NEON AESTHETIC */}
      {/* ────────────────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Outfit', sans-serif;
          background: #000000;
          color: #ffffff;
          overflow-x: hidden;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        @keyframes scan {
          0% { transform: translateY(-120%); }
          100% { transform: translateY(120%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(4deg); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 50px currentColor, 0 0 80px currentColor; }
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          50% { border-color: transparent; }
        }

        @keyframes shimmer {
          0% { background-position: -1200px 0; }
          100% { background-position: 1200px 0; }
        }

        @keyframes slideIn {
          from { transform: translateX(-120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .fade-in {
          animation: fadeSlide 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        .fade-up {
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        .d1 { animation-delay: 0.15s; }
        .d2 { animation-delay: 0.3s;  }
        .d3 { animation-delay: 0.45s; }
        .d4 { animation-delay: 0.6s;  }
        .d5 { animation-delay: 0.75s; }
        .d6 { animation-delay: 0.9s;  }

        .neon-text {
          text-shadow: 
            0 0 15px rgba(0, 255, 255, 0.8),
            0 0 30px rgba(0, 255, 255, 0.6),
            0 0 60px rgba(0, 255, 255, 0.4);
        }

        .hologram-card {
          background: linear-gradient(145deg, rgba(0,255,255,0.06) 0%, rgba(138,43,226,0.06) 100%);
          border: 1.5px solid rgba(0,255,255,0.25);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
          backdrop-filter: blur(8px);
        }

        .hologram-card:hover {
          transform: translateY(-12px) scale(1.03);
          border-color: rgba(0,255,255,0.6);
          box-shadow: 0 25px 70px rgba(0,255,255,0.35);
        }

        .hologram-card::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -60%;
          width: 220%;
          height: 220%;
          background: linear-gradient(45deg, transparent 35%, rgba(0,255,255,0.12) 50%, transparent 65%);
          animation: scan 4s linear infinite;
          pointer-events: none;
        }

        .cyber-btn {
          position: relative;
          background: linear-gradient(135deg, #00ffff, #8a2be2);
          border: none;
          color: #000;
          font-weight: 800;
          cursor: pointer;
          clip-path: polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%);
          transition: all 0.4s;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          overflow: hidden;
        }

        .cyber-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s;
        }

        .cyber-btn:hover::before {
          left: 120%;
        }

        .cyber-btn:hover {
          transform: scale(1.06) translateY(-3px);
          box-shadow: 0 15px 50px rgba(0,255,255,0.7);
        }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(0,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.12) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 25s linear infinite;
        }

        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }

        .tech-tag {
          background: rgba(0,0,0,0.65);
          border: 1.5px solid currentColor;
          padding: 1.2rem 1.2rem;
          border-radius: 22px;
          font-size: 0.9rem;
          font-family: 'Fira Code', monospace;
          transition: all 0.4s;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(6px);
        }

        .tech-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(90deg, transparent, currentColor 50%, transparent);
          opacity: 0.15;
          transition: left 0.6s;
        }

        .tech-tag:hover::before {
          left: 120%;
        }

        .tech-tag:hover {
          transform: translateY(-6px) scale(1.07);
          box-shadow: 0 15px 40px currentColor;
          border-width: 2.5px;
        }

        .tech-orbit {
          position: absolute;
          width: 70px;
          height: 70px;
          background: rgba(0,0,0,0.7);
          border: 3px solid;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px currentColor;
          animation: float 8s ease-in-out infinite;
          z-index: 2;
          transition: all 0.5s;
        }

        .tech-orbit:hover {
          transform: scale(1.4) !important;
          box-shadow: 0 0 60px currentColor !important;
          animation: glow 1.8s ease-in-out infinite;
        }

        .ready-badge {
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #00ffff, #8a2be2);
          color: #000;
          font-weight: 900;
          font-size: 1.3rem;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          box-shadow: 0 0 40px rgba(0,255,255,0.85);
          border: 3px solid #fff;
          letter-spacing: 2.5px;
          z-index: 10;
          animation: pulse 2.2s infinite;
          white-space: nowrap;
        }

        .skill-bar {
          height: 10px;
          background: rgba(0,255,255,0.12);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, currentColor, rgba(138,43,226,0.85));
          border-radius: 12px;
          transition: width 1.8s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shimmer 2.5s infinite;
        }

        .stat-card {
          background: linear-gradient(145deg, rgba(0,0,0,0.85), rgba(0,255,255,0.06));
          border: 2.5px solid;
          border-radius: 24px;
          padding: 2.2rem;
          text-align: center;
          transition: all 0.5s;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(8px);
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.12;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .stat-card:hover::before {
          width: 350px;
          height: 350px;
        }

        .stat-card:hover {
          transform: translateY(-12px) scale(1.06);
          box-shadow: 0 25px 70px currentColor;
        }

        .typing-cursor {
          display: inline-block;
          width: 4px;
          height: 1.3em;
          background: #00ffff;
          margin-left: 6px;
          animation: blink 1.1s step-end infinite;
        }

        .hire-badge {
          color: #00ffff;
          text-decoration: none;
          font-weight: 800;
          transition: all 0.4s;
          letter-spacing: 1px;
        }

        .hire-badge:hover {
          color: #ffffff;
          text-shadow: 0 0 20px #00ffff;
        }

        @media (max-width: 1024px) {
          .hero-layout { flex-direction: column !important; gap: 5rem !important; }
          .tech-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .profile-container { width: 360px !important; height: 440px !important; }
          .tech-orbit { width: 60px !important; height: 60px !important; }
          .ready-badge { font-size: 1.1rem !important; padding: 0.7rem 1.4rem !important; top: -24px !important; }
        }

        @media (max-width: 768px) {
          .hero-layout { padding-top: 2rem !important; }
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
          .profile-container { width: 320px !important; height: 400px !important; }
          .tech-orbit { width: 54px !important; height: 54px !important; }
          h1 { font-size: 4rem !important; }
          h2 { font-size: 2.5rem !important; }
        }
      `}</style>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* MAIN CONTAINER */}
      {/* ────────────────────────────────────────────────────────────── */}
      <div style={{
        background: "#000000",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Progress Bar */}
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "5px",
          background: "linear-gradient(90deg, #00ffff, #8a2be2, #00ffff)",
          zIndex: 1000,
          transition: "width 0.15s",
          boxShadow: "0 0 25px rgba(0,255,255,0.9)"
        }} />

        {/* Grid Background */}
        <div className="grid-bg" style={{
          position: "fixed",
          inset: 0,
          opacity: 0.35,
          pointerEvents: "none",
          zIndex: 1
        }} />

        {/* Animated Background Orbs */}
        <div style={{
          position: "fixed",
          top: "40%",
          right: "-15%",
          width: "900px",
          height: "900px",
          border: "3px solid rgba(0,255,255,0.12)",
          borderRadius: "50%",
          animation: "rotate 35s linear infinite",
          pointerEvents: "none",
          transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
          opacity: 0.6
        }} />

        <div style={{
          position: "fixed",
          bottom: "-15%",
          left: "-15%",
          width: "700px",
          height: "700px",
          border: "3px solid rgba(138,43,226,0.12)",
          borderRadius: "50%",
          animation: "rotate 45s linear infinite reverse",
          pointerEvents: "none",
          transform: `translate(${-mousePosition.x * 1.1}px, ${-mousePosition.y * 1.1}px)`,
          opacity: 0.5
        }} />

        {/* ────────────────────────────────────────────────────────────── */}
        {/* CONTENT WRAPPER */}
        {/* ────────────────────────────────────────────────────────────── */}
        <div ref={containerRef} style={{
          maxWidth: "1380px",
          margin: "0 auto",
          padding: "0 3rem",
          position: "relative",
          zIndex: 10
        }}>
          {/* ────────────────────── HERO SECTION ────────────────────── */}
          <section style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "5rem"
          }}>
            <div className="hero-layout" style={{
              display: "flex",
              gap: "5rem",
              alignItems: "center",
              width: "100%"
            }}>
              {/* Left - Text Content */}
              <div style={{ flex: 1 }}>
                <div className="fade-in d1" style={{
                  fontFamily: "'Fira Code', monospace",
                  color: "#00ffff",
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                  opacity: 0.85
                }}>
                  {'>'} boot_sequence.initiated()
                </div>

                <h1 className="fade-in d2 neon-text" style={{
                  fontSize: "clamp(3.5rem, 8vw, 6.2rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                  background: "linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent"
                }}>
                  SIVA SATYA SAI<br />BHAGAVAN
                </h1>

                <div className="fade-in d3" style={{
                  fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
                  fontWeight: 600,
                  marginBottom: "2.5rem",
                  fontFamily: "'Fira Code', monospace",
                  letterSpacing: "0.15em",
                  color: "#00ffff",
                  minHeight: "3rem"
                }}>
                  [ {typedText}<span className="typing-cursor" /> ]
                </div>

                <p className="fade-in d4" style={{
                  fontSize: "1.3rem",
                  lineHeight: 1.9,
                  color: "#b0b0b0",
                  maxWidth: "620px",
                  marginBottom: "3.5rem"
                }}>
                  Crafting intelligent systems and scalable architectures. 
                  Specialized in production-grade AI/ML pipelines, cloud-native 
                  applications, and high-performance full-stack solutions.
                </p>

                <div className="fade-in d5" style={{
                  display: "flex",
                  gap: "1.8rem",
                  marginBottom: "3.5rem",
                  flexWrap: "wrap"
                }}>
                  <Link 
                    to="/projects" 
                    className="cyber-btn" 
                    style={{
                      padding: "1.3rem 3.5rem",
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.8rem"
                    }}
                  >
                    <Terminal size={22} />
                    Explore Projects
                  </Link>

                  <a 
                    href={resumePdf} 
                    download="Bhagavan_Resume.pdf"
                    style={{
                      padding: "1.3rem 3.5rem",
                      background: "transparent",
                      border: "2.5px solid #00ffff",
                      color: "#00ffff",
                      fontWeight: 700,
                      cursor: "pointer",
                      transition: "all 0.4s",
                      fontSize: "1.1rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "6px"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#00ffff";
                      e.currentTarget.style.color = "#000";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#00ffff";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Download size={22} />
                    Download Résumé
                  </a>
                </div>

                <div className="fade-in d6" style={{
                  display: "flex",
                  gap: "1.5rem",
                  flexWrap: "wrap"
                }}>
                  {[
                    { icon: Github, href: "https://github.com/bhagavan444", color: "#ffffff" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/", color: "#00ffff" },
                    { icon: Mail, href: "mailto:g.sivasatyasaibhagavan@gmail.com", color: "#8a2be2" },
                    { icon: Phone, href: "tel:+917569205626", color: "#00ffff" }
                  ].map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "55px",
                        height: "55px",
                        background: "rgba(0,0,0,0.55)",
                        border: `2.5px solid ${link.color}`,
                        borderRadius: "50%",
                        color: link.color,
                        transition: "all 0.4s",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.25) translateY(-6px)";
                        e.currentTarget.style.boxShadow = `0 12px 35px ${link.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <link.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - Animated Profile */}
              <div className="fade-in d4" style={{
                flex: 1,
                maxWidth: "480px",
                display: "flex",
                justifyContent: "center"
              }}>
                <div className="profile-container" style={{
                  position: "relative",
                  width: "420px",
                  height: "500px"
                }}>
                  <div className="ready-badge">2026 READY</div>

                  {/* Rotating Borders */}
                  <div style={{
                    position: "absolute",
                    inset: "-25px",
                    border: "3.5px solid transparent",
                    borderTopColor: "#00ffff",
                    borderRightColor: "#00ffff",
                    borderRadius: "24px",
                    animation: "rotate 4.5s linear infinite",
                    opacity: 0.65
                  }} />

                  <div style={{
                    position: "absolute",
                    inset: "-40px",
                    border: "2.5px solid transparent",
                    borderBottomColor: "#8a2be2",
                    borderLeftColor: "#8a2be2",
                    borderRadius: "28px",
                    animation: "rotate 7s linear infinite reverse",
                    opacity: 0.55
                  }} />

                  <div style={{
                    position: "absolute",
                    inset: "-55px",
                    border: "2.5px solid transparent",
                    borderTopColor: "#00ffff",
                    borderRadius: "34px",
                    animation: "rotate 9s linear infinite",
                    opacity: 0.35
                  }} />

                  {/* Corner Glows */}
                  {[
                    { top: "-12px", left: "-12px", borderTop: true, borderLeft: true, color: "#00ffff" },
                    { top: "-12px", right: "-12px", borderTop: true, borderRight: true, color: "#8a2be2", delay: "0.6s" },
                    { bottom: "-12px", left: "-12px", borderBottom: true, borderLeft: true, color: "#00ffff", delay: "1.2s" },
                    { bottom: "-12px", right: "-12px", borderBottom: true, borderRight: true, color: "#8a2be2", delay: "1.8s" }
                  ].map((corner, i) => (
                    <div key={i} style={{
                      position: "absolute",
                      ...Object.fromEntries(Object.entries(corner).filter(([k]) => ['top', 'right', 'bottom', 'left'].includes(k))),
                      width: "36px",
                      height: "36px",
                      ...(corner.borderTop && { borderTop: `3.5px solid ${corner.color}` }),
                      ...(corner.borderRight && { borderRight: `3.5px solid ${corner.color}` }),
                      ...(corner.borderBottom && { borderBottom: `3.5px solid ${corner.color}` }),
                      ...(corner.borderLeft && { borderLeft: `3.5px solid ${corner.color}` }),
                      animation: "pulse 2.2s ease-in-out infinite",
                      animationDelay: corner.delay || "0s"
                    }} />
                  ))}

                  {/* Profile Image Container */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "24px",
                    overflow: "hidden",
                    border: "4.5px solid rgba(0,255,255,0.45)",
                    boxShadow: `
                      0 0 50px rgba(0,255,255,0.6),
                      0 0 100px rgba(138,43,226,0.45),
                      inset 0 0 50px rgba(0,0,0,0.7)
                    `,
                    transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
                  }}>
                    <img
                      src={profileImg}
                      alt="Siva Satya Sai Bhagavan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />

                    {/* Scan Line Effect */}
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "140px",
                      background: "linear-gradient(to bottom, transparent, rgba(0,255,255,0.35), transparent)",
                      animation: "scan 3.5s ease-in-out infinite",
                      pointerEvents: "none"
                    }} />

                    {/* Bottom Gradient */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent 65%)",
                      pointerEvents: "none"
                    }} />
                  </div>

                  {/* Orbiting Tech Icons */}
                  {techStack.map((tech, index) => {
                    const positions = [
                      { top: "-12%", left: "50%", transform: "translate(-50%, -50%)" },
                      { top: "18%", right: "-12%", transform: "translate(50%, -50%)" },
                      { top: "50%", right: "-12%", transform: "translate(50%, -50%)" },
                      { bottom: "18%", right: "-12%", transform: "translate(50%, 50%)" },
                      { bottom: "-12%", left: "50%", transform: "translate(-50%, 50%)" },
                      { bottom: "18%", left: "-12%", transform: "translate(-50%, 50%)" },
                      { top: "50%", left: "-12%", transform: "translate(-50%, -50%)" },
                      { top: "18%", left: "-12%", transform: "translate(-50%, -50%)" },
                    ];

                    const pos = positions[index % positions.length];
                    const delay = index * 0.6;

                    return (
                      <div
                        key={index}
                        className="tech-orbit"
                        style={{
                          ...pos,
                          borderColor: tech.color,
                          color: tech.color,
                          animationDelay: `${delay}s`,
                        }}
                        title={tech.desc}
                      >
                        <tech.icon size={36} />
                      </div>
                    );
                  })}

                  {/* Hire Me Badge */}
                  <div style={{
                    position: "absolute",
                    bottom: "25px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "rgba(0,0,0,0.85)",
                    border: "2.5px solid #00ffff",
                    borderRadius: "40px",
                    padding: "0.9rem 1.8rem",
                    fontFamily: "'Fira Code', monospace",
                    fontSize: "0.95rem",
                    color: "#00ffff",
                    fontWeight: 700,
                    boxShadow: "0 0 25px rgba(0,255,255,0.6)",
                    animation: "pulse 2.3s ease-in-out infinite",
                    whiteSpace: "nowrap"
                  }}>
                    <a
                      href="mailto:g.sivasatyasaibhagavan@gmail.com"
                      className="hire-badge"
                    >
                      AVAILABLE FOR HIRE 2026
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ────────────────────── STATS SECTION ────────────────────── */}
          <section id="stats" data-observe style={{ padding: "5rem 0" }}>
            <div className="stats-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2.5rem"
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`stat-card ${isVisible.stats ? 'fade-up' : ''}`}
                  style={{
                    borderColor: stat.color,
                    color: stat.color,
                    animationDelay: `${i * 0.15}s`,
                    opacity: isVisible.stats ? 1 : 0
                  }}
                >
                  <stat.icon size={48} style={{ marginBottom: "1.2rem" }} />
                  <div style={{
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    marginBottom: "0.6rem",
                    fontFamily: "'Fira Code', monospace"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    opacity: 0.85,
                    textTransform: "uppercase",
                    letterSpacing: "1.2px"
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────── SKILLS SECTION ────────────────────── */}
          <section id="skills" data-observe style={{ padding: "7rem 0" }}>
            <h2 style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              marginBottom: "4rem",
              textAlign: "center",
              color: "#00ffff",
              textTransform: "uppercase",
              letterSpacing: "2.5px"
            }}>
              Core Competencies
            </h2>

            <div style={{
              maxWidth: "860px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem"
            }}>
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  style={{
                    opacity: isVisible.skills ? 1 : 0,
                    transition: "opacity 0.6s",
                    transitionDelay: `${i * 0.15}s`
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    alignItems: "center"
                  }}>
                    <span style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: skill.color
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: "1.1rem",
                      color: skill.color,
                      fontWeight: 800
                    }}>
                      {skillProgress[skill.name] || 0}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{
                        width: `${skillProgress[skill.name] || 0}%`,
                        color: skill.color
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────── TECH STACK SECTION ────────────────────── */}
          <section style={{ padding: "7rem 0" }}>
            <h2 style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              marginBottom: "4rem",
              textAlign: "center",
              color: "#00ffff",
              textTransform: "uppercase",
              letterSpacing: "2.5px"
            }}>
              Technology Arsenal
            </h2>

            <div className="tech-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem"
            }}>
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="tech-tag fade-in"
                  style={{
                    color: tech.color,
                    borderColor: tech.color,
                    animationDelay: `${i * 0.08}s`,
                    textAlign: "center",
                    padding: "1.5rem 1.2rem"
                  }}
                >
                  <tech.icon size={38} style={{ marginBottom: "0.8rem" }} />
                  <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>{tech.name}</div>
                  <div style={{ fontSize: "0.8rem", opacity: 0.75 }}>{tech.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────── ACHIEVEMENTS TIMELINE ────────────────────── */}
          <section style={{ padding: "7rem 0 11rem" }}>
            <h2 style={{
              fontSize: "3.5rem",
              fontWeight: 900,
              marginBottom: "5rem",
              textAlign: "center",
              color: "#00ffff",
              textTransform: "uppercase",
              letterSpacing: "2.5px"
            }}>
              Journey Milestones
            </h2>

            <div style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: "3.5rem"
            }}>
              {achievements.map((milestone, i) => (
                <div 
                  key={i} 
                  className="hologram-card fade-in" 
                  style={{
                    padding: "3rem 2.5rem",
                    borderRadius: "24px",
                    textAlign: "center",
                    minWidth: "300px",
                    flex: "1 1 300px",
                    maxWidth: "380px",
                    animationDelay: `${i * 0.2}s`,
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem"
                  }}
                >
                  <div style={{
                    width: "90px",
                    height: "90px",
                    margin: "0 auto",
                    borderRadius: "50%",
                    border: `3.5px solid ${milestone.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.65)",
                    boxShadow: `0 0 35px ${milestone.color}`
                  }}>
                    <milestone.icon size={48} style={{ color: milestone.color }} />
                  </div>
                  
                  <div style={{
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    color: milestone.color
                  }}>
                    {milestone.year}
                  </div>
                  
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#ffffff"
                  }}>
                    {milestone.title}
                  </div>
                  
                  <div style={{
                    fontSize: "1.1rem",
                    color: "#b0b0b0",
                    marginBottom: "0.6rem"
                  }}>
                    {milestone.subtitle}
                  </div>
                  
                  <div style={{
                    fontSize: "1rem",
                    color: milestone.color,
                    fontStyle: "italic",
                    borderTop: `1.5px solid ${milestone.color}`,
                    paddingTop: "1.2rem",
                    marginTop: "auto"
                  }}>
                    {milestone.details}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ────────────────────── FINAL CTA SECTION ────────────────────── */}
          <section style={{
            padding: "7rem 0 9rem",
            textAlign: "center"
          }}>
            <div className="hologram-card" style={{
              padding: "5rem 3rem",
              borderRadius: "36px",
              maxWidth: "860px",
              margin: "0 auto"
            }}>
              <h2 style={{
                fontSize: "3rem",
                fontWeight: 900,
                marginBottom: "2rem",
                background: "linear-gradient(135deg, #00ffff 0%, #8a2be2 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}>
                Let's Build The Future Together
              </h2>
              
              <p style={{
                fontSize: "1.3rem",
                color: "#b0b0b0",
                marginBottom: "3rem",
                lineHeight: 1.7,
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto"
              }}>
                Ready to collaborate on groundbreaking AI-powered solutions, 
                scalable cloud architectures, or high-performance full-stack applications?
              </p>
              
              <div style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  className="cyber-btn"
                  style={{
                    padding: "1.4rem 4rem",
                    fontSize: "1.15rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.8rem"
                  }}
                >
                  <Mail size={24} />
                  Get in Touch
                </a>
                
                <Link
                  to="/projects"
                  style={{
                    padding: "1.4rem 4rem",
                    background: "transparent",
                    border: "2.5px solid #8a2be2",
                    color: "#8a2be2",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.4s",
                    fontSize: "1.15rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    borderRadius: "8px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#8a2be2";
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#8a2be2";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Rocket size={24} />
                  View My Work
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}