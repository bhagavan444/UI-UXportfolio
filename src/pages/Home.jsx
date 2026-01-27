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
  Eye,
  Sparkles,
  Film,
  Play
} from "lucide-react";

export default function ModernPortfolio() {
  // ══════════════════════════════════════════════════════════════
  // STATE MANAGEMENT
  // ══════════════════════════════════════════════════════════════
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [skillProgress, setSkillProgress] = useState({});
  const [isVisible, setIsVisible] = useState({});
  const [particles, setParticles] = useState([]);
  const [cursorTrail, setCursorTrail] = useState([]);
  const [glitchActive, setGlitchActive] = useState(false);
  
  // ══════════════════════════════════════════════════════════════
  // REFS
  // ══════════════════════════════════════════════════════════════
  const containerRef = useRef(null);
  const heroRef = useRef(null);

  // ══════════════════════════════════════════════════════════════
  // TYPING ANIMATION ROLES
  // ══════════════════════════════════════════════════════════════
  const roles = [
    "AI ARCHITECT",
    "MERN SPECIALIST",
    "CLOUD ENGINEER",
    "ML INNOVATOR",
    "SYSTEMS DESIGNER"
  ];
  const [roleIndex, setRoleIndex] = useState(0);

  // ══════════════════════════════════════════════════════════════
  // PARTICLE SYSTEM
  // ══════════════════════════════════════════════════════════════
  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.2
      }));
      setParticles(newParticles);
    };
    createParticles();
  }, []);

  // ══════════════════════════════════════════════════════════════
  // CURSOR TRAIL EFFECT
  // ══════════════════════════════════════════════════════════════
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });

      setCursorTrail(prev => [
        ...prev.slice(-15),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ══════════════════════════════════════════════════════════════
  // GLITCH EFFECT
  // ══════════════════════════════════════════════════════════════
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 8000);
    return () => clearInterval(glitchInterval);
  }, []);

  // ══════════════════════════════════════════════════════════════
  // TYPING ANIMATION
  // ══════════════════════════════════════════════════════════════
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
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  // ══════════════════════════════════════════════════════════════
  // SCROLL PROGRESS
  // ══════════════════════════════════════════════════════════════
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ══════════════════════════════════════════════════════════════
  // INTERSECTION OBSERVER
  // ══════════════════════════════════════════════════════════════
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
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-observe]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ══════════════════════════════════════════════════════════════
  // SKILL PROGRESS ANIMATION
  // ══════════════════════════════════════════════════════════════
  useEffect(() => {
    if (isVisible.skills) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setSkillProgress((prev) => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, 200 + index * 100);
      });
    }
  }, [isVisible.skills]);

  // ══════════════════════════════════════════════════════════════
  // DATA
  // ══════════════════════════════════════════════════════════════
  const techStack = [
    { name: "TensorFlow", icon: Brain, color: "#FF6F00", glow: "255,111,0" },
    { name: "PyTorch", icon: Cpu, color: "#EE4C2C", glow: "238,76,44" },
    { name: "React", icon: Code, color: "#61DAFB", glow: "97,218,251" },
    { name: "Node.js", icon: Server, color: "#339933", glow: "51,153,51" },
    { name: "MongoDB", icon: Database, color: "#47A248", glow: "71,162,72" },
    { name: "AWS", icon: Cloud, color: "#FF9900", glow: "255,153,0" },
    { name: "Docker", icon: Layers, color: "#2496ED", glow: "36,150,237" },
    { name: "Kubernetes", icon: Zap, color: "#326CE5", glow: "50,108,229" },
  ];

  const skills = [
    { name: "Artificial Intelligence & Machine Learning", level: 95, color: "#FF6F00" },
    { name: "Full-Stack Web Development (MERN)", level: 93, color: "#61DAFB" },
    { name: "Deep Learning & Computer Vision", level: 90, color: "#a855f7" },
    { name: "Cloud Computing & Deployment", level: 88, color: "#FF9900" },
    { name: "DevOps, CI/CD & Automation", level: 85, color: "#2496ED" },
    { name: "Data Structures & Algorithms", level: 89, color: "#22c55e" },
  ];

  const stats = [
    { label: "Projects", value: "10+", icon: Briefcase, color: "#00f5ff" },
    { label: "Certifications", value: "15+", icon: Award, color: "#a855f7" },
    { label: "Technologies", value: "20+", icon: Code, color: "#22c55e" },
    { label: "Success Rate", value: "100%", icon: Target, color: "#ff6b35" },
  ];

  const achievements = [
    {
      year: "2022-2026",
      title: "3 Industry Internships",
      subtitle: "AI • ML • MERN Stack",
      icon: Star,
      color: "#FFD700",
      details: "Production-ready solutions delivered"
    },
    {
      year: "2022-2026",
      title: "15+ Certifications",
      subtitle: "AI, Cloud & Full-Stack",
      icon: Award,
      color: "#00f5ff",
      details: "Mastered cutting-edge technologies"
    },
    {
      year: "2026",
      title: "Ready for Impact",
      subtitle: "AI Engineer • Full-Stack Developer",
      icon: Rocket,
      color: "#a855f7",
      details: "Seeking full-time opportunities"
    }
  ];

  // ══════════════════════════════════════════════════════════════
  // RENDER
  // ══════════════════════════════════════════════════════════════
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Rajdhani', sans-serif;
          background: #000000;
          color: #ffffff;
          overflow-x: hidden;
          cursor: none;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* CUSTOM CURSOR */
        /* ═══════════════════════════════════════════════════════════ */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #00f5ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.2s ease;
          mix-blend-mode: difference;
        }

        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(0, 245, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          animation: fadeTrail 0.8s ease-out forwards;
        }

        @keyframes fadeTrail {
          to {
            opacity: 0;
            transform: scale(0);
          }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* CINEMATIC ANIMATIONS */
        /* ═══════════════════════════════════════════════════════════ */
        @keyframes cinematic-reveal {
          from { 
            opacity: 0; 
            transform: translateY(100px) scale(0.9);
            filter: blur(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes slide-left {
          from { transform: translateX(-100%) skewX(-10deg); opacity: 0; }
          to { transform: translateX(0) skewX(0); opacity: 1; }
        }

        @keyframes slide-right {
          from { transform: translateX(100%) skewX(10deg); opacity: 0; }
          to { transform: translateX(0) skewX(0); opacity: 1; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }

        @keyframes hologram-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px currentColor,
                        0 0 40px currentColor,
                        0 0 60px currentColor;
          }
          50% { 
            box-shadow: 0 0 40px currentColor,
                        0 0 80px currentColor,
                        0 0 120px currentColor;
          }
        }

        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0) rotateX(0deg) rotateY(0deg); 
          }
          25% { 
            transform: translateY(-20px) rotateX(5deg) rotateY(-5deg); 
          }
          50% { 
            transform: translateY(-10px) rotateX(-5deg) rotateY(5deg); 
          }
          75% { 
            transform: translateY(-15px) rotateX(3deg) rotateY(-3deg); 
          }
        }

        @keyframes particle-float {
          0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(100px) rotate(360deg); opacity: 0; }
        }

        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.2; }
          46% { opacity: 1; }
        }

        @keyframes shimmer-slide {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes expand-3d {
          0% { transform: scale(0) rotateY(0deg); opacity: 0; }
          50% { transform: scale(1.1) rotateY(180deg); }
          100% { transform: scale(1) rotateY(360deg); opacity: 1; }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* UTILITY CLASSES */
        /* ═══════════════════════════════════════════════════════════ */
        .cinematic-enter {
          animation: cinematic-reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .slide-left { animation: slide-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .slide-right { animation: slide-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .glitch-effect {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }
        .delay-6 { animation-delay: 0.6s; }

        /* ═══════════════════════════════════════════════════════════ */
        /* HOLLYWOOD GLASS MORPHISM */
        /* ═══════════════════════════════════════════════════════════ */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }

        .glass-card:hover::before {
          left: 100%;
        }

        .glass-card:hover {
          transform: translateY(-15px) scale(1.02);
          border-color: currentColor;
          box-shadow: 
            0 30px 90px rgba(0, 245, 255, 0.3),
            0 0 0 1px currentColor inset;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* PREMIUM BUTTONS */
        /* ═══════════════════════════════════════════════════════════ */
        .premium-btn {
          position: relative;
          background: linear-gradient(135deg, #00f5ff 0%, #a855f7 100%);
          border: none;
          color: #000;
          font-weight: 800;
          cursor: pointer;
          overflow: hidden;
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%);
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.6s;
        }

        .premium-btn:hover::before {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }

        .premium-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 
            0 20px 60px rgba(0, 245, 255, 0.5),
            0 0 0 3px #000,
            0 0 0 5px currentColor;
        }

        .outline-btn {
          background: transparent;
          border: 3px solid currentColor;
          color: currentColor;
          font-weight: 700;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .outline-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .outline-btn:hover::before {
          transform: scaleX(1);
        }

        .outline-btn:hover {
          color: #000;
          transform: translateY(-5px);
          box-shadow: 0 20px 60px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* 3D TECH STACK CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .tech-card-3d {
          background: rgba(0, 0, 0, 0.8);
          border: 2px solid currentColor;
          border-radius: 20px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .tech-card-3d::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, currentColor, transparent, currentColor);
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.5s;
          animation: rotate-border 4s linear infinite;
        }

        .tech-card-3d:hover::before {
          opacity: 0.3;
        }

        .tech-card-3d:hover {
          transform: translateY(-20px) rotateX(10deg) rotateY(-10deg) scale(1.05);
          box-shadow: 
            0 40px 100px currentColor,
            0 0 60px currentColor inset;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* HOLOGRAPHIC EFFECTS */
        /* ═══════════════════════════════════════════════════════════ */
        .hologram {
          position: relative;
          overflow: hidden;
        }

        .hologram::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 245, 255, 0.1) 50%,
            transparent 70%
          );
          animation: hologram-scan 3s linear infinite;
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* NEON TEXT */
        /* ═══════════════════════════════════════════════════════════ */
        .neon-text {
          text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 40px currentColor,
            0 0 80px currentColor;
          animation: neon-flicker 3s linear infinite;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* RESPONSIVE GRID */
        /* ═══════════════════════════════════════════════════════════ */
        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* TYPING CURSOR */
        /* ═══════════════════════════════════════════════════════════ */
        .typing-cursor {
          display: inline-block;
          width: 3px;
          height: 1.2em;
          background: #00f5ff;
          margin-left: 8px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* SKILL BAR */
        /* ═══════════════════════════════════════════════════════════ */
        .skill-bar {
          height: 12px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, currentColor 0%, rgba(168, 85, 247, 0.8) 100%);
          border-radius: 10px;
          transition: width 2s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          animation: shimmer-slide 2s infinite;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* MEDIA QUERIES */
        /* ═══════════════════════════════════════════════════════════ */
        @media (max-width: 1024px) {
          .hero-layout { flex-direction: column !important; gap: 4rem !important; }
          .profile-section { order: -1; }
        }

        @media (max-width: 768px) {
          body { cursor: default; }
          .custom-cursor, .cursor-trail { display: none; }
          h1 { font-size: 3rem !important; }
          h2 { font-size: 2rem !important; }
        }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* CUSTOM CURSOR */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div 
        className="custom-cursor"
        style={{
          left: cursorTrail[cursorTrail.length - 1]?.x || 0,
          top: cursorTrail[cursorTrail.length - 1]?.y || 0,
          transform: `translate(-50%, -50%)`
        }}
      />
      
      {cursorTrail.slice(-10).map((point, i) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* MAIN CONTAINER */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div style={{
        background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
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
          height: "4px",
          background: "linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)",
          zIndex: 10000,
          transition: "width 0.1s",
          boxShadow: "0 0 20px currentColor"
        }} />

        {/* Particle System */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'fixed',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'rgba(0, 245, 255, 0.6)',
              borderRadius: '50%',
              pointerEvents: 'none',
              animation: `particle-float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.8)',
              zIndex: 1
            }}
          />
        ))}

        {/* Animated Background */}
        <div style={{
          position: "fixed",
          inset: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.05) 0%, transparent 50%)
          `,
          opacity: 0.6,
          pointerEvents: "none",
          zIndex: 1
        }} />

        {/* Content Wrapper */}
        <div ref={containerRef} style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 10
        }}>
          {/* ═══════════════════ HERO SECTION ═══════════════════ */}
          <section ref={heroRef} style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            paddingTop: "4rem"
          }}>
            <div className="hero-layout" style={{
              display: "flex",
              gap: "6rem",
              alignItems: "center",
              width: "100%"
            }}>
              {/* Left Content */}
              <div style={{ flex: 1 }}>
                <div className="cinematic-enter delay-1" style={{
                  fontFamily: "'Space Mono', monospace",
                  color: "#00f5ff",
                  fontSize: "1rem",
                  marginBottom: "1.5rem",
                  opacity: 0.9,
                  letterSpacing: "2px"
                }}>
                  <Film size={18} style={{ display: 'inline', marginRight: '8px' }} />
                  INITIATING SEQUENCE...
                </div>

                <h1 className={`cinematic-enter delay-2 neon-text ${glitchActive ? 'glitch-effect' : ''}`} style={{
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                  fontFamily: "'Orbitron', sans-serif",
                  background: "linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textTransform: "uppercase"
                }}>
                  SIVA SATYA SAI<br />BHAGAVAN
                </h1>

                <div className="cinematic-enter delay-3" style={{
                  fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                  fontWeight: 700,
                  marginBottom: "2.5rem",
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: "3px",
                  color: "#00f5ff",
                  minHeight: "2.5rem"
                }}>
                  &lt; {typedText}<span className="typing-cursor" /> /&gt;
                </div>

                <p className="cinematic-enter delay-4" style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.8,
                  color: "#b0b0b0",
                  maxWidth: "600px",
                  marginBottom: "3rem",
                  fontWeight: 400
                }}>
                  Engineering the future with <span style={{color: '#00f5ff', fontWeight: 600}}>AI-powered solutions</span> and 
                  <span style={{color: '#a855f7', fontWeight: 600}}> cloud-native architectures</span>. 
                  Specializing in production-grade systems that scale.
                </p>

                <div className="cinematic-enter delay-5" style={{
                  display: "flex",
                  gap: "1.5rem",
                  marginBottom: "3rem",
                  flexWrap: "wrap"
                }}>
                  <Link 
                    to="/projects" 
                    className="premium-btn" 
                    style={{
                      padding: "1.2rem 3rem",
                      fontSize: "1rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      borderRadius: "8px"
                    }}
                  >
                    <Play size={20} />
                    VIEW PROJECTS
                  </Link>

                  <a 
                    href={resumePdf} 
                    download="Bhagavan_Resume.pdf"
                    className="outline-btn"
                    style={{
                      padding: "1.2rem 3rem",
                      fontSize: "1rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      borderRadius: "8px",
                      color: "#00f5ff"
                    }}
                  >
                    <Download size={20} />
                    DOWNLOAD CV
                  </a>
                </div>

                <div className="cinematic-enter delay-6" style={{
                  display: "flex",
                  gap: "1.2rem",
                  flexWrap: "wrap"
                }}>
                  {[
                    { icon: Github, href: "https://github.com/bhagavan444", color: "#ffffff" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/", color: "#00f5ff" },
                    { icon: Mail, href: "mailto:g.sivasatyasaibhagavan@gmail.com", color: "#a855f7" },
                    { icon: Phone, href: "tel:+917569205626", color: "#ff6b35" }
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
                        width: "50px",
                        height: "50px",
                        background: "rgba(0, 0, 0, 0.6)",
                        border: `2px solid ${link.color}`,
                        borderRadius: "50%",
                        color: link.color,
                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                        textDecoration: "none"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.3) translateY(-8px)";
                        e.currentTarget.style.boxShadow = `0 15px 40px ${link.color}`;
                        e.currentTarget.style.background = link.color;
                        e.currentTarget.style.color = "#000";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.6)";
                        e.currentTarget.style.color = link.color;
                      }}
                    >
                      <link.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right - 3D Profile */}
              <div className="profile-section cinematic-enter delay-4" style={{
                flex: 1,
                maxWidth: "500px",
                display: "flex",
                justifyContent: "center"
              }}>
                <div className="hologram" style={{
                  position: "relative",
                  width: "400px",
                  height: "480px",
                  animation: "float-3d 6s ease-in-out infinite"
                }}>
                  {/* Glowing Rings */}
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        position: "absolute",
                        inset: `${-30 - i * 20}px`,
                        border: "2px solid",
                        borderColor: i === 0 ? "#00f5ff" : i === 1 ? "#a855f7" : "#ff6b35",
                        borderRadius: "50%",
                        animation: `rotate-border ${8 + i * 2}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                        opacity: 0.4 - i * 0.1
                      }}
                    />
                  ))}

                  {/* Main Profile Container */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "3px solid rgba(0, 245, 255, 0.5)",
                    boxShadow: `
                      0 0 60px rgba(0, 245, 255, 0.4),
                      0 0 100px rgba(168, 85, 247, 0.3),
                      inset 0 0 60px rgba(0, 0, 0, 0.8)
                    `,
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                  }}>
                    <img
                      src={profileImg}
                      alt="Bhagavan"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)",
                      pointerEvents: "none"
                    }} />

                    {/* Status Badge */}
                    <div style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      background: "rgba(0, 245, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      border: "2px solid #00f5ff",
                      borderRadius: "30px",
                      padding: "0.6rem 1.2rem",
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.75rem",
                      color: "#00f5ff",
                      fontWeight: 700,
                      animation: "pulse-glow 2s ease-in-out infinite",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem"
                    }}>
                      <div style={{
                        width: "8px",
                        height: "8px",
                        background: "#00f5ff",
                        borderRadius: "50%",
                        animation: "neon-flicker 2s linear infinite"
                      }} />
                      AVAILABLE 2026
                    </div>

                    {/* Tech Orbits */}
                    {techStack.slice(0, 6).map((tech, index) => {
                      const positions = [
                        { top: "-8%", left: "50%", transform: "translate(-50%, -50%)" },
                        { top: "25%", right: "-8%", transform: "translate(50%, -50%)" },
                        { bottom: "25%", right: "-8%", transform: "translate(50%, 50%)" },
                        { bottom: "-8%", left: "50%", transform: "translate(-50%, 50%)" },
                        { bottom: "25%", left: "-8%", transform: "translate(-50%, 50%)" },
                        { top: "25%", left: "-8%", transform: "translate(-50%, -50%)" },
                      ];

                      return (
                        <div
                          key={index}
                          style={{
                            position: "absolute",
                            ...positions[index],
                            width: "65px",
                            height: "65px",
                            background: "rgba(0, 0, 0, 0.9)",
                            backdropFilter: "blur(10px)",
                            border: `3px solid ${tech.color}`,
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: tech.color,
                            boxShadow: `0 0 30px rgba(${tech.glow}, 0.6)`,
                            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                            animation: `float-3d ${6 + index}s ease-in-out infinite`,
                            animationDelay: `${index * 0.5}s`,
                            zIndex: 5
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = `${positions[index].transform} scale(1.5)`;
                            e.currentTarget.style.boxShadow = `0 0 60px rgba(${tech.glow}, 1)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = positions[index].transform;
                            e.currentTarget.style.boxShadow = `0 0 30px rgba(${tech.glow}, 0.6)`;
                          }}
                        >
                          <tech.icon size={30} />
                        </div>
                      );
                    })}

                    {/* Bottom Info */}
                    <div style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0, 0, 0, 0.9)",
                      backdropFilter: "blur(15px)",
                      border: "2px solid #00f5ff",
                      borderRadius: "30px",
                      padding: "0.8rem 1.5rem",
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "0.9rem",
                      color: "#00f5ff",
                      fontWeight: 700,
                      boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)",
                      whiteSpace: "nowrap",
                      zIndex: 10
                    }}>
                      <a
                        href="mailto:g.sivasatyasaibhagavan@gmail.com"
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem"
                        }}
                      >
                        <Sparkles size={16} />
                        LET'S COLLABORATE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════ STATS SECTION ═══════════════════ */}
          <section id="stats" data-observe style={{ padding: "6rem 0" }}>
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`glass-card ${isVisible.stats ? 'cinematic-enter' : ''}`}
                  style={{
                    padding: "2.5rem 2rem",
                    textAlign: "center",
                    animationDelay: `${i * 0.1}s`,
                    opacity: isVisible.stats ? 1 : 0,
                    color: stat.color,
                    borderColor: stat.color
                  }}
                >
                  <stat.icon size={45} style={{ marginBottom: "1rem" }} />
                  <div style={{
                    fontSize: "3rem",
                    fontWeight: 900,
                    marginBottom: "0.5rem",
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "0.95rem",
                    opacity: 0.9,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    fontWeight: 600
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════ SKILLS SECTION ═══════════════════ */}
          <section id="skills" data-observe style={{ padding: "6rem 0" }}>
            <h2 className="neon-text" style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 900,
              marginBottom: "4rem",
              textAlign: "center",
              color: "#00f5ff",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontFamily: "'Orbitron', sans-serif"
            }}>
              EXPERTISE MATRIX
            </h2>

            <div style={{
              maxWidth: "900px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "2.5rem"
            }}>
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="glass-card"
                  style={{
                    padding: "2rem",
                    opacity: isVisible.skills ? 1 : 0,
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    transitionDelay: `${i * 0.15}s`,
                    transform: isVisible.skills ? 'translateX(0)' : 'translateX(-50px)',
                    borderColor: skill.color
                  }}
                >
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem",
                    alignItems: "center"
                  }}>
                    <span style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: skill.color,
                      fontFamily: "'Rajdhani', sans-serif"
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
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

          {/* ═══════════════════ TECH STACK ═══════════════════ */}
          <section style={{ padding: "6rem 0" }}>
            <h2 className="neon-text" style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 900,
              marginBottom: "4rem",
              textAlign: "center",
              color: "#00f5ff",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontFamily: "'Orbitron', sans-serif"
            }}>
              TECHNOLOGY STACK
            </h2>

            <div className="tech-grid">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="tech-card-3d cinematic-enter"
                  style={{
                    color: tech.color,
                    borderColor: tech.color,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  <tech.icon size={40} style={{ marginBottom: "1rem" }} />
                  <div style={{ 
                    fontWeight: 800, 
                    fontSize: "1.1rem",
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: "1px"
                  }}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════ ACHIEVEMENTS ═══════════════════ */}
          <section style={{ padding: "6rem 0 8rem" }}>
            <h2 className="neon-text" style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 900,
              marginBottom: "5rem",
              textAlign: "center",
              color: "#00f5ff",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontFamily: "'Orbitron', sans-serif"
            }}>
              CAREER MILESTONES
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3rem"
            }}>
              {achievements.map((milestone, i) => (
                <div 
                  key={i} 
                  className="glass-card cinematic-enter"
                  style={{
                    padding: "3rem 2rem",
                    textAlign: "center",
                    animationDelay: `${i * 0.2}s`,
                    borderColor: milestone.color,
                    animation: `expand-3d 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${i * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <div style={{
                    width: "85px",
                    height: "85px",
                    margin: "0 auto 1.5rem",
                    borderRadius: "50%",
                    border: `3px solid ${milestone.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0, 0, 0, 0.8)",
                    boxShadow: `0 0 40px ${milestone.color}`,
                    animation: "pulse-glow 3s ease-in-out infinite"
                  }}>
                    <milestone.icon size={42} style={{ color: milestone.color }} />
                  </div>
                  
                  <div style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: milestone.color,
                    marginBottom: "1rem",
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {milestone.year}
                  </div>
                  
                  <div style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    color: "#ffffff",
                    marginBottom: "0.8rem"
                  }}>
                    {milestone.title}
                  </div>
                  
                  <div style={{
                    fontSize: "1rem",
                    color: "#b0b0b0",
                    marginBottom: "1rem"
                  }}>
                    {milestone.subtitle}
                  </div>
                  
                  <div style={{
                    fontSize: "0.95rem",
                    color: milestone.color,
                    fontStyle: "italic",
                    borderTop: `2px solid ${milestone.color}`,
                    paddingTop: "1rem",
                    marginTop: "1.5rem"
                  }}>
                    {milestone.details}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════════════════ CTA SECTION ═══════════════════ */}
          <section style={{
            padding: "6rem 0 8rem",
            textAlign: "center"
          }}>
            <div className="glass-card hologram" style={{
              padding: "5rem 3rem",
              maxWidth: "900px",
              margin: "0 auto",
              borderColor: "#00f5ff"
            }}>
              <div style={{
                fontSize: "1rem",
                color: "#00f5ff",
                marginBottom: "1rem",
                fontFamily: "'Space Mono', monospace",
                letterSpacing: "2px"
              }}>
                &lt;READY TO DEPLOY&gt;
              </div>

              <h2 className="neon-text" style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
                marginBottom: "2rem",
                background: "linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                fontFamily: "'Orbitron', sans-serif"
              }}>
                LET'S BUILD SOMETHING LEGENDARY
              </h2>
              
              <p style={{
                fontSize: "1.2rem",
                color: "#b0b0b0",
                marginBottom: "3rem",
                lineHeight: 1.8,
                maxWidth: "700px",
                marginLeft: "auto",
                marginRight: "auto"
              }}>
                Ready to transform ideas into reality with cutting-edge AI, 
                scalable cloud solutions, and production-grade full-stack applications.
              </p>
              
              <div style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  className="premium-btn"
                  style={{
                    padding: "1.3rem 3.5rem",
                    fontSize: "1rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    borderRadius: "8px"
                  }}
                >
                  <Mail size={22} />
                  START PROJECT
                </a>
                
                <Link
                  to="/projects"
                  className="outline-btn"
                  style={{
                    padding: "1.3rem 3.5rem",
                    fontSize: "1rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    borderRadius: "8px",
                    color: "#a855f7"
                  }}
                >
                  <Eye size={22} />
                  VIEW PORTFOLIO
                </Link>
              </div>

              <div style={{
                marginTop: "3rem",
                fontSize: "0.9rem",
                color: "#00f5ff",
                fontFamily: "'Space Mono', monospace"
              }}>
                &lt;/AVAILABLE_FOR_HIRE_2026&gt;
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}