"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink, Github, Rocket, Star, X, CheckCircle2,
  Terminal, Sparkles, Layers, Mail, Award, Brain, Cpu,
  Code, Zap, Cloud, Database, Server, Globe, Heart,
  Trophy, Briefcase, GraduationCap, Users, Sun, Moon
} from "lucide-react";

// ──────────────────────────────────────────────────────────────────────────────
// ALL PROJECTS DATA (UPDATED & ENHANCED)
// ──────────────────────────────────────────────────────────────────────────────
const allProjects = [
  // ================= AI / PRODUCT PROJECTS =================

  {
    id: 11,
    title: "ATS Resume Builder Platform",
    github: null,
    live: "https://melody-nap-17037283.figma.site",

    desc: "AI-powered platform that helps job seekers build ATS-optimized resumes and improve shortlisting chances.",

    problem:
      "Many qualified candidates are rejected because their resumes fail Applicant Tracking System (ATS) filters.",

    solution:
      "Built an AI-powered resume builder that analyzes keywords, formatting, and structure to generate ATS-friendly resumes with real-time scoring.",

    myRole:
      "Designed and developed the complete full-stack application including frontend UI, backend APIs, authentication, and ATS scoring logic.",

    techUsed: ["React", "Node.js", "MongoDB", "JWT", "Resume Parsing", "PDF Generation"],

    impact: [
      "Improved resume shortlisting probability by up to 2×",
      "Enabled users to generate professional resumes in minutes",
      "Handled thousands of resume generations reliably"
    ],

    highlights: ["ATS-Friendly Templates", "Real-Time Scoring", "Keyword Optimization", "PDF Export"],
    stats: { atsScore: "90%+", templates: "10+", resumesBuilt: "3k+", shortlistingBoost: "2×" },

    tags: ["ATS Optimization", "Resume Builder", "Full-Stack", "AI"],
    icon: "📄",
    img: "https://lh3.googleusercontent.com/d/1gSVeUalkdrQAgl0rBNdOm_g2I-kmQgia",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 9,
    title: "NexusAI – Multi-Modal AI Workspace",
    github: null,
    live: "https://bhagavanai.lovable.app/",

    desc: "Enterprise-grade AI workspace for research, automation, and content generation in one unified interface.",

    problem:
      "Professionals rely on multiple disconnected AI tools, reducing productivity and context continuity.",

    solution:
      "Built a unified multi-modal AI workspace supporting text, images, PDFs, and code with ultra-fast responses.",

    myRole:
      "Led product design, frontend development, and AI integration with focus on performance and UX.",

    techUsed: ["React", "AI APIs", "Prompt Engineering", "UI Optimization"],

    impact: [
      "Reduced task-switching overhead",
      "Enabled faster AI-driven workflows",
      "Delivered enterprise-grade user experience"
    ],

    highlights: ["Unified Workspace", "Multi-Modal Input", "Ultra-Fast Responses", "Premium UI"],
    stats: { speed: "Ultra-Fast", modes: "Multi-Modal", quality: "Enterprise" },

    tags: ["AI Platform", "Productivity", "Enterprise UI"],
    icon: "⚡",
    img: "https://lh3.googleusercontent.com/d/1Rz65QllbOI8nPEGeTO2GJT8a11jdbPtc",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 5,
    title: "Project Forge – AI Project Generator",
    github: null,
    live: "https://aiprojecttool.lovable.app",

    desc: "AI-powered tool that generates production-ready software project structures from simple prompts.",

    problem:
      "Developers lose time repeatedly setting up boilerplate and project architecture.",

    solution:
      "Built an AI system that converts prompts into clean, scalable project architectures instantly.",

    myRole:
      "Designed AI logic, frontend UI, and system workflows for prompt-to-code generation.",

    techUsed: ["React", "AI Models", "Automation Logic"],

    impact: [
      "Saved hours of setup time per project",
      "Enabled rapid prototyping",
      "Improved developer productivity"
    ],

    highlights: ["Prompt-to-Code", "Clean Architecture", "Production-Ready Output"],
    stats: { projects: "100k+", satisfaction: "99.9%" },

    tags: ["AI", "Developer Tools", "Automation"],
    icon: "⚡",
    img: "https://lh3.googleusercontent.com/d/1jE-44VOkR64pyjLZNKC3vLt8FIEzfg-g",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 7,
    title: "ArchMind – AI System Design Platform",
    github: null,
    live: "https://archmind-spark.lovable.app/",

    desc: "AI-powered platform for designing scalable, real-world system architectures.",

    problem:
      "System design interviews and real-world architecture planning require deep experience.",

    solution:
      "Built an AI system that generates scalable architectures, analyzes trade-offs, and applies best practices.",

    myRole:
      "Designed AI workflows, system logic, and frontend architecture visualizations.",

    techUsed: ["System Design", "AI Reasoning", "Scalability Patterns"],

    impact: [
      "Accelerated architecture planning",
      "Improved system design understanding",
      "Applied FAANG-level design principles"
    ],

    highlights: ["AI Architecture Generation", "Trade-Off Analysis", "Scalable Patterns"],
    stats: { architectures: "50k+", uptime: "99%", latency: "<50ms" },

    tags: ["System Design", "Scalability", "AI"],
    icon: "🧠",
    img: "https://lh3.googleusercontent.com/d/1sYsWzyDIuWAF-wz3A6iNorF3ATCpKXPF",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 8,
    title: "TruthGuard AI – Fake News Detection",
    github: null,
    live: "https://bliss-gala-22285345.figma.site/",

    desc: "NLP-based AI system that detects fake news articles with high accuracy.",

    problem:
      "Fake news spreads misinformation and harms public trust.",

    solution:
      "Built an NLP and deep learning system using TF-IDF and LSTM models for real-time fake news detection.",

    myRole:
      "Handled data preprocessing, feature engineering, model training, evaluation, and integration.",

    techUsed: ["Python", "NLP", "LSTM", "TensorFlow", "TF-IDF"],

    impact: [
      "Achieved 95% classification accuracy",
      "Processed large-scale news datasets",
      "Delivered explainable AI predictions"
    ],

    highlights: ["95% Accuracy", "Explainable AI", "Real-Time Analysis"],
    stats: { accuracy: "95%", articles: "1M+", responseTime: "<100ms" },

    tags: ["NLP", "Machine Learning", "AI Safety"],
    icon: "🛡️",
    img: "https://lh3.googleusercontent.com/d/1zVrR2EdQoPvSSvfnVox0xBoc5qbgr96r",
    color: "var(--neon-primary)",
    featured: true
  },

  // ================= GITHUB / ACADEMIC PROJECTS =================

  {
    id: 4,
    title: "Heart Disease Prediction Platform",
    github: "https://github.com/bhagavan444/Heart-Disease-Prediction",

    desc: "Machine learning web application to predict heart disease risk using clinical data.",

    problem:
      "Early detection of heart disease requires accurate data-driven prediction.",

    solution:
      "Built ML models using clinical parameters and deployed them via a Flask web application.",

    myRole:
      "Handled data preprocessing, model training, evaluation, and deployment.",

    techUsed: ["Python", "Scikit-learn", "Flask", "Pandas"],

    impact: [
      "Achieved 87% prediction accuracy",
      "Enabled fast and accessible risk assessment"
    ],

    highlights: ["ML-Based Prediction", "Clinical Feature Engineering"],
    stats: { accuracy: "87%", predictions: "1.2k+" },

    tags: ["Machine Learning", "Healthcare", "Flask"],
    icon: "❤️",
    img: "https://lh3.googleusercontent.com/d/1Uy1JiAFMcAwMD0LZgm0J-bYiWuHpRzqq",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 12,
    title: "AI Chatbot Platform",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://bhagavanai.lovable.app",

    desc: "Conversational AI platform with real-time streaming responses.",

    problem:
      "Traditional chatbots feel slow and lack conversational flow.",

    solution:
      "Built a streaming AI chatbot supporting multi-LLM integration and file-based queries.",

    myRole:
      "Developed frontend UI, backend logic, and LLM integration.",

    techUsed: ["React", "Flask", "LLMs", "Streaming APIs"],

    impact: [
      "Handled tens of thousands of chats",
      "Improved response latency and UX"
    ],

    highlights: ["Streaming Responses", "Multi-LLM Support", "File Upload"],
    stats: { chats: "45k+", messages: "320k+" },

    tags: ["AI", "Chatbot", "LLM"],
    icon: "🤖",
    img: "https://drive.google.com/thumbnail?id=10gvXlgHCb__NAWBoLEbj6LglL9dT6Kew&sz=w1200",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 13,
    title: "AI Career Path Recommendation System",
    github: "https://github.com/bhagavan444/carrer-path-web-",

    desc: "Machine learning system that recommends career paths based on skills and interests.",

    problem:
      "Students struggle to choose career paths without data-driven guidance.",

    solution:
      "Built an ML-based recommendation engine with skill-gap analysis and personalized roadmaps.",

    myRole:
      "Designed ML models, backend logic, and recommendation workflows.",

    techUsed: ["Python", "Flask", "Scikit-learn", "NLP"],

    impact: [
      "Guided thousands of users",
      "Generated personalized learning roadmaps"
    ],

    highlights: ["Career Matching", "Skills Gap Analysis", "Learning Roadmaps"],
    stats: { users: "1.9k+", roadmaps: "7.2k+" },

    tags: ["AI", "Recommendation System", "Education"],
    icon: "🎯",
    img: "https://drive.google.com/thumbnail?id=1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj&sz=w1200",
    color: "var(--neon-primary)",
    featured: true
  },

  {
    id: 14,
    title: "Fake News Detector (Academic)",
    github: "https://github.com/bhagavan444/News-detector",

    desc: "Academic NLP-based fake news classification system.",

    problem:
      "Detecting misinformation at scale requires reliable NLP models.",

    solution:
      "Built and evaluated deep learning models including LSTM and BERT.",

    myRole:
      "Implemented model training, evaluation, and performance analysis.",

    techUsed: ["Python", "TensorFlow", "LSTM", "BERT", "NLP"],

    impact: [
      "Achieved 92.4% accuracy",
      "Processed large article datasets"
    ],

    highlights: ["92%+ Accuracy", "Explainable Results"],
    stats: { articles: "150k+", accuracy: "92.4%" },

    tags: ["NLP", "Deep Learning", "AI"],
    icon: "📰",
    img: "https://drive.google.com/thumbnail?id=1i-qZCMDiOAy677h3y12es5xM_IL-_oOF&sz=w1200",
    color: "var(--neon-primary)",
    featured: true
  }
];


export default function CyberpunkProjects() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [theme, setTheme] = useState("light"); // DEFAULT: LIGHT theme
  const canvasRef = useRef(null);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("projects-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme & apply to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("projects-theme", theme);
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let id;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2.5 + 1.2
    }));

    const animate = () => {
      ctx.fillStyle = theme === "dark" ? 'rgba(0,0,0,0.08)' : 'rgba(240,244,255,0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        g.addColorStop(0, theme === "dark" ? 'rgba(0,240,255,0.35)' : 'rgba(0,102,204,0.35)');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      id = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap');

        :root {
          --neon-primary: #00b7eb;
          --neon-secondary: #7c3aed;
          --neon-gradient: linear-gradient(90deg, #00b7eb, #7c3aed);
          --neon-glow: 0 0 35px rgba(0, 183, 235, 0.75);
          --bg-primary: #f8f9fa;
          --bg-secondary: #ffffff;
          --text-primary: #1a1a1a;
          --text-secondary: #4b5563;
          --text-tertiary: #6b7280;
          --card-bg: rgba(255,255,255,0.94);
          --border-glow: rgba(0,183,235,0.32);
          --tech-bg: rgba(255,255,255,0.92);
          --tech-text: #1e40af;
          --tech-border: rgba(0,183,235,0.4);
          --modal-bg: rgba(255,255,255,0.98);
          --modal-text: #1a1a1a;
        }

        body.dark {
          --neon-primary: #00f0ff;
          --neon-secondary: #c084fc;
          --neon-gradient: linear-gradient(90deg, #00f0ff, #c084fc);
          --neon-glow: 0 0 35px rgba(0, 240, 255, 0.75);
          --bg-primary: #000000;
          --bg-secondary: #0f172a;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --text-tertiary: #94a3b8;
          --card-bg: rgba(15,23,42,0.94);
          --border-glow: rgba(0,240,255,0.32);
          --tech-bg: rgba(0,0,0,0.78);
          --tech-text: #e0f7ff;
          --tech-border: rgba(0,240,255,0.45);
          --modal-bg: rgba(8,8,30,0.97);
          --modal-text: #e0e0ff;
        }

        @keyframes slideIn { from { opacity:0; transform:translateY(50px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scan     { 0% { transform:translateY(-100%); } 100% { transform:translateY(100%); } }
        @keyframes float    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        @keyframes pulse    { 0%,100% { opacity:1; } 50% { opacity:0.7; } }

        .project-card {
          position: relative;
          background: var(--card-bg);
          border: 2px solid var(--border-glow);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23,1,0.32,1);
          max-width: 100%;
          box-sizing: border-box;
        }

        .project-card.featured {
          border-width: 3px;
          box-shadow: 0 0 40px var(--neon-primary);
          transform: scale(1.03);
        }

        .project-card:hover {
          transform: translateY(-16px) scale(1.04);
          border-color: var(--neon-primary);
          box-shadow: var(--neon-glow);
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 35%, rgba(var(--neon-primary-rgb),0.15) 50%, transparent 65%);
          animation: scan 7s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        .tech-pill {
          background: var(--tech-bg);
          border: 1.6px solid var(--tech-border);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-family: 'Fira Code',monospace;
          font-size: 0.86rem;
          transition: all 0.3s;
          color: var(--tech-text);
        }

        .tech-pill:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px var(--neon-primary);
        }

        .neon-glow {
          background: var(--neon-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 35px var(--neon-glow);
        }

        .action-btn {
          padding: 0.9rem 1.8rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.35s;
          text-decoration: none;
        }

        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 30px;
          z-index: 1000;
          background: var(--card-bg);
          border: 2px solid var(--neon-primary);
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 20px var(--neon-glow);
        }

        .theme-toggle:hover {
          transform: scale(1.15) rotate(15deg);
          box-shadow: 0 0 35px var(--neon-primary);
        }

        .modal-content {
          background: var(--modal-bg);
          border: 4px solid var(--neon-primary);
          border-radius: 28px;
          overflow: hidden;
        }

        /* ─── RESPONSIVE FIXES ──────────────────────────────────────── */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
            gap: 2.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .project-image-container {
            height: 220px !important;
          }
          .card-padding {
            padding: 1.8rem 1.5rem !important;
          }
          h1.neon-glow {
            font-size: clamp(3.4rem, 11vw, 5.5rem) !important;
            letter-spacing: 3px !important;
          }
          .modal-content {
            padding: 2.2rem 1.6rem !important;
            width: 98% !important;
            max-width: 98% !important;
          }
          .modal-image {
            max-height: 40vh !important;
            object-fit: cover !important;
          }
          .theme-toggle {
            top: 15px;
            right: 15px;
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 480px) {
          .project-image-container {
            height: 200px !important;
          }
          .card-padding {
            padding: 1.5rem 1.3rem !important;
          }
          h3 {
            font-size: 1.65rem !important;
          }
          .tech-pill {
            padding: 0.45rem 0.9rem;
            font-size: 0.82rem;
          }
          .cta-buttons {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .modal-content {
            padding: 2rem 1.4rem !important;
          }
        }

        @media (max-width: 360px) {
          .project-image-container {
            height: 180px !important;
          }
          .card-padding {
            padding: 1.4rem 1.2rem !important;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle between Light & Dark mode"
      >
        {theme === "light" ? (
          <Moon size={26} color="#0066cc" />
        ) : (
          <Sun size={26} color="#00f0ff" />
        )}
      </button>

      <div style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 12vw, 10rem) 1.5rem 6rem',
        fontFamily: "'Outfit', sans-serif",
        transition: "background 0.5s ease, color 0.5s ease",
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(var(--neon-primary-rgb),0.08) 1px,transparent 1px),
                            linear-gradient(90deg,rgba(var(--neon-primary-rgb),0.08) 1px,transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: theme === "dark" ? 0.22 : 0.12,
          pointerEvents: 'none'
        }} />

        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1600px', margin: '0 auto', width: '100%' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 10vw, 7rem)' }}>
            <div style={{
              display: 'inline-block',
              fontFamily: "'Fira Code',monospace",
              color: 'var(--neon-primary)',
              fontSize: 'clamp(1rem, 2.6vw, 1.15rem)',
              padding: '0.8rem 1.8rem',
              border: `2px solid rgba(var(--neon-primary-rgb),0.45)`,
              borderRadius: '999px',
              marginBottom: '1.6rem',
              animation: 'pulse 3.5s infinite'
            }}>
              {'>'} displayActiveProjects()
            </div>

            <h1 className="neon-glow" style={{
              fontSize: 'clamp(3.8rem, 11vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              lineHeight: 1.1
            }}>
              PROJECT MATRIX
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
              color: theme === "dark" ? '#a8a8d8' : '#555555',
              maxWidth: '860px',
              margin: '2rem auto 0',
              lineHeight: 1.8,
              fontFamily: "'Fira Code',monospace"
            }}>
              [ AI engines • Full-stack realities • Deployed systems ]<br/>
              Code-forged futures — 2050 protocol
            </p>
          </div>

          {/* Cards Grid */}
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'clamp(2rem, 5vw, 3.2rem)',
            width: '100%',
            maxWidth: '100%'
          }}>
            {allProjects.map(project => {
              const isHovered = hoveredId === project.id;
              const hasGithub = !!project.github;
              const hasLive   = !!project.live;

              return (
                <div
                  key={project.id}
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveProject(project)}
                  style={{
                    color: project.color,
                    animation: `slideIn 0.9s ease-out ${project.id * 0.08}s backwards`,
                    cursor: 'pointer'
                  }}
                >
                  {/* Image preview */}
                  <div className="project-image-container" style={{
                    height: project.featured ? 'clamp(220px, 55vw, 280px)' : 'clamp(180px, 50vw, 240px)',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={project.img}
                      alt={project.title}
                      onError={e => e.target.src = "https://via.placeholder.com/500x300/111/00ffff?text=Project"}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.7s ease',
                        transform: isHovered ? 'scale(1.12)' : 'scale(1.04)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 60%)'
                    }} />
                    {project.featured && (
                      <div style={{
                        position: 'absolute',
                        top: '1.2rem',
                        right: '1.2rem',
                        padding: '0.6rem 1.3rem',
                        background: theme === "dark" ? 'rgba(255,215,0,0.22)' : 'rgba(255,215,0,0.15)',
                        border: `2px solid ${theme === "dark" ? '#ffea8090' : '#ffd700'}`,
                        borderRadius: '999px',
                        color: theme === "dark" ? '#ffea80' : '#d97706',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem'
                      }}>
                        <Star size={16} fill={theme === "dark" ? "#ffea80" : "#d97706"} /> FEATURED
                      </div>
                    )}
                  </div>

                  <div className="card-padding" style={{ 
                    padding: 'clamp(1.6rem, 4vw, 2.2rem) clamp(1.4rem, 3.5vw, 2rem)' 
                  }}>
                    {/* Icon + Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', marginBottom: '1.4rem' }}>
                      <div style={{
                        width: '76px',
                        height: '76px',
                        border: `3px solid ${project.color}90`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.8rem',
                        animation: isHovered ? 'float 3.2s infinite' : 'none',
                        boxShadow: isHovered ? `0 0 44px ${project.color}aa` : 'none'
                      }}>
                        {project.icon}
                      </div>
                      <h3 style={{
                        fontSize: 'clamp(1.7rem, 4.5vw, 1.95rem)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        color: theme === "dark" ? '#ffffff' : '#1a1a1a'
                      }}>
                        {project.title}
                      </h3>
                    </div>

                    {/* Key Info */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr',
                      gap: '1.2rem',
                      marginBottom: '2rem',
                      '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }
                    }}>
                      <div style={{ 
                        padding: '1rem', 
                        background: theme === "dark" ? 'rgba(255,0,0,0.08)' : 'rgba(255,0,0,0.05)',
                        borderRadius: '12px', 
                        border: `1px solid ${theme === "dark" ? 'rgba(255,100,100,0.3)' : 'rgba(239,68,68,0.2)'}`
                      }}>
                        <h4 style={{ 
                          color: theme === "dark" ? '#ff6666' : '#ef4444', 
                          fontSize: '1.2rem', 
                          marginBottom: '0.5rem' 
                        }}>
                          Problem
                        </h4>
                        <p style={{ 
                          color: theme === "dark" ? '#ffcccc' : '#7f1d1d', 
                          fontSize: '0.95rem' 
                        }}>
                          {project.problem}
                        </p>
                      </div>

                      <div style={{ 
                        padding: '1rem', 
                        background: theme === "dark" ? 'rgba(0,255,0,0.08)' : 'rgba(0,255,0,0.05)',
                        borderRadius: '12px', 
                        border: `1px solid ${theme === "dark" ? 'rgba(0,200,0,0.3)' : 'rgba(34,197,94,0.2)'}`
                      }}>
                        <h4 style={{ 
                          color: theme === "dark" ? '#00cc00' : '#16a34a', 
                          fontSize: '1.2rem', 
                          marginBottom: '0.5rem' 
                        }}>
                          Solution
                        </h4>
                        <p style={{ 
                          color: theme === "dark" ? '#ccffcc' : '#166534', 
                          fontSize: '0.95rem' 
                        }}>
                          {project.solution}
                        </p>
                      </div>

                      <div style={{ 
                        padding: '1rem', 
                        background: theme === "dark" ? 'rgba(0,240,255,0.08)' : 'rgba(0,183,235,0.08)',
                        borderRadius: '12px', 
                        border: `1px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.2)'}`
                      }}>
                        <h4 style={{ 
                          color: 'var(--neon-primary)', 
                          fontSize: '1.2rem', 
                          marginBottom: '0.5rem' 
                        }}>
                          My Role
                        </h4>
                        <p style={{ 
                          color: theme === "dark" ? '#e0e0ff' : '#1e40af', 
                          fontSize: '0.95rem' 
                        }}>
                          {project.myRole}
                        </p>
                      </div>

                      <div style={{ 
                        padding: '1rem', 
                        background: theme === "dark" ? 'rgba(255,215,0,0.08)' : 'rgba(234,179,8,0.08)',
                        borderRadius: '12px', 
                        border: `1px solid ${theme === "dark" ? 'rgba(255,215,0,0.3)' : 'rgba(234,179,8,0.2)'}`
                      }}>
                        <h4 style={{ 
                          color: theme === "dark" ? '#ffd700' : '#d97706', 
                          fontSize: '1.2rem', 
                          marginBottom: '0.5rem' 
                        }}>
                          Impact
                        </h4>
                        <ul style={{ 
                          color: theme === "dark" ? '#ffffcc' : '#92400e', 
                          fontSize: '0.95rem', 
                          listStyleType: 'none', 
                          padding: 0 
                        }}>
                          {project.impact.map((item, idx) => (
                            <li key={idx} style={{ marginBottom: '0.5rem' }}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.8rem',
                      marginBottom: '2.2rem'
                    }}>
                      {project.tags.slice(0,5).map(t => (
                        <span key={t} className="tech-pill" style={{
                          color: isHovered ? project.color : theme === "dark" ? '#9999cc' : '#4b5563',
                          borderColor: isHovered ? project.color : theme === "dark" ? '#555588' : '#d1d5db'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{
                      display: 'flex',
                      gap: '1.2rem',
                      flexWrap: 'wrap',
                      marginTop: '1.4rem'
                    }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="action-btn"
                          style={{
                            background: theme === "dark" ? 'rgba(0,240,255,0.16)' : 'rgba(0,183,235,0.12)',
                            border: `2px solid ${project.color}80`,
                            color: project.color
                          }}
                        >
                          <Github size={22} />
                          GitHub
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="action-btn"
                          style={{
                            background: `linear-gradient(90deg, ${project.color}, #ffffff)`,
                            color: '#000',
                            boxShadow: `0 0 30px ${project.color}60`
                          }}
                        >
                          <Rocket size={22} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: '8rem',
            padding: 'clamp(3rem, 8vw, 4.5rem) 2.5rem',
            background: theme === "dark" ? 'rgba(0,0,0,0.78)' : 'rgba(255,255,255,0.92)',
            border: `3px solid ${theme === "dark" ? 'rgba(0,240,255,0.35)' : 'rgba(0,183,235,0.25)'}`,
            borderRadius: '32px',
            textAlign: 'center',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: 'clamp(3.2rem,7vw,5rem)',
              fontWeight: 900,
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2.8rem',
              textShadow: theme === "dark" ? '0 0 50px #00ffffa0' : '0 0 30px #00b7eba0'
            }}>
              EXECUTE NEXT PROTOCOL?
            </h2>

            <div className="cta-buttons" style={{ 
              display: 'flex', 
              gap: '2.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <a href="https://github.com/bhagavan444" target="_blank" style={{
                padding: '1.5rem 3.5rem',
                background: theme === "dark" ? 'rgba(0,240,255,0.18)' : 'rgba(0,183,235,0.12)',
                border: `2.5px solid ${theme === "dark" ? '#00ffff80' : '#00b7eb80'}`,
                borderRadius: '999px',
                color: 'var(--neon-primary)',
                fontSize: '1.3rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}>
                <Github size={34} /> VIEW ALL REPOS
              </a>

              <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
                padding: '1.5rem 3.5rem',
                background: 'var(--neon-gradient)',
                borderRadius: '999px',
                color: '#000',
                fontSize: '1.3rem',
                fontWeight: 900,
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}>
                <Mail size={34} /> CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROJECT DETAIL MODAL ───────────────────────────────────────────── */}
      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: theme === "dark" ? 'rgba(0,0,0,0.96)' : 'rgba(255,255,255,0.96)',
            backdropFilter: 'blur(16px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="modal-content"
            style={{
              background: theme === "dark" ? 'rgba(8,8,30,0.97)' : 'rgba(255,255,255,0.97)',
              border: `4px solid ${activeProject.color}aa`,
              borderRadius: '28px',
              maxWidth: '1300px',
              width: '96%',
              maxHeight: '92vh',
              overflowY: 'auto',
              boxShadow: `0 0 160px ${activeProject.color}70`
            }}
          >
            <button
              onClick={() => setActiveProject(null)}
              style={{ 
                position: 'absolute', 
                top: '1.5rem', 
                right: '1.8rem', 
                background: 'none', 
                border: 'none', 
                color: '#ff6666', 
                cursor: 'pointer' 
              }}
            >
              <X size={48} strokeWidth={2.8} />
            </button>

            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="modal-image"
              style={{ 
                width: '100%', 
                borderRadius: '20px 20px 0 0', 
                maxHeight: '40vh', 
                objectFit: 'cover', 
                display: 'block' 
              }}
            />

            <div style={{ padding: 'clamp(2.2rem, 6vw, 4rem) clamp(1.6rem, 5vw, 3.5rem) 5rem' }}>
              <h2 style={{
                fontSize: 'clamp(2.6rem, 7vw, 4.2rem)',
                fontWeight: 900,
                background: 'var(--neon-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
                marginBottom: '1.4rem',
                textShadow: `0 0 40px ${activeProject.color}b0`
              }}>
                {activeProject.title}
              </h2>

              <p style={{ 
                fontSize: 'clamp(1.25rem, 3.5vw, 1.45rem)', 
                color: theme === "dark" ? '#c8c8ff' : '#374151',
                lineHeight: 1.8,
                marginBottom: '2.5rem' 
              }}>
                {activeProject.longDesc || activeProject.desc}
              </p>

              {/* Problem & Solution */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr', 
                gap: '2rem', 
                marginBottom: '3rem',
                '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' } 
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  background: theme === "dark" ? 'rgba(255,0,0,0.08)' : 'rgba(239,68,68,0.05)',
                  borderRadius: '16px', 
                  border: `1px solid ${theme === "dark" ? 'rgba(255,100,100,0.3)' : 'rgba(239,68,68,0.2)'}`
                }}>
                  <h4 style={{ 
                    color: theme === "dark" ? '#ff6666' : '#ef4444', 
                    marginBottom: '1rem', 
                    fontSize: '1.4rem' 
                  }}>
                    Problem
                  </h4>
                  <p style={{ 
                    color: theme === "dark" ? '#ffcccc' : '#7f1d1d' 
                  }}>
                    {activeProject.problem}
                  </p>
                </div>

                <div style={{ 
                  padding: '1.5rem', 
                  background: theme === "dark" ? 'rgba(0,255,0,0.08)' : 'rgba(34,197,94,0.05)',
                  borderRadius: '16px', 
                  border: `1px solid ${theme === "dark" ? 'rgba(0,200,0,0.3)' : 'rgba(34,197,94,0.2)'}`
                }}>
                  <h4 style={{ 
                    color: theme === "dark" ? '#00cc00' : '#16a34a', 
                    marginBottom: '1rem', 
                    fontSize: '1.4rem' 
                  }}>
                    Solution
                  </h4>
                  <p style={{ 
                    color: theme === "dark" ? '#ccffcc' : '#166534' 
                  }}>
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* My Role & Tech */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr', 
                gap: '2rem', 
                marginBottom: '3rem',
                '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' } 
              }}>
                <div>
                  <h4 style={{ 
                    color: 'var(--neon-primary)', 
                    marginBottom: '1rem', 
                    fontSize: '1.4rem' 
                  }}>
                    My Role
                  </h4>
                  <p style={{ 
                    color: theme === "dark" ? '#e0e0ff' : '#1f2937' 
                  }}>
                    {activeProject.myRole}
                  </p>
                </div>

                <div>
                  <h4 style={{ 
                    color: 'var(--neon-primary)', 
                    marginBottom: '1rem', 
                    fontSize: '1.4rem' 
                  }}>
                    Tech Stack
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {activeProject.techUsed.map(t => (
                      <span key={t} className="tech-pill" style={{ 
                        background: theme === "dark" ? 'rgba(0,240,255,0.15)' : 'rgba(0,183,235,0.12)',
                        borderColor: theme === "dark" ? 'rgba(0,240,255,0.5)' : 'rgba(0,183,235,0.4)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.2rem',
                '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' }
              }}>
                {activeProject.highlights.map((h, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: theme === "dark" ? 'rgba(0,240,255,0.08)' : 'rgba(0,183,235,0.08)',
                    borderRadius: '12px',
                    border: `1px solid ${activeProject.color}30`
                  }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--neon-primary)' }} />
                    {h}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '1.5rem', 
                margin: '2.5rem 0', 
                justifyContent: 'center' 
              }}>
                {Object.entries(activeProject.stats).map(([key, value]) => (
                  <div key={key} style={{
                    padding: '1rem 1.8rem',
                    background: theme === "dark" ? 'rgba(0,240,255,0.12)' : 'rgba(0,183,235,0.1)',
                    borderRadius: '12px',
                    border: `1px solid ${activeProject.color}40`,
                    textAlign: 'center',
                    minWidth: '140px'
                  }}>
                    <div style={{ 
                      fontSize: '1.6rem', 
                      fontWeight: 900, 
                      color: 'var(--neon-primary)' 
                    }}>
                      {value}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem', 
                      color: theme === "dark" ? '#b0b0d8' : '#4b5563',
                      marginTop: '0.3rem' 
                    }}>
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.8rem', 
                marginBottom: '3rem', 
                justifyContent: 'center' 
              }}>
                {activeProject.tags.map(t => (
                  <span key={t} style={{
                    padding: '0.7rem 1.4rem',
                    background: theme === "dark" ? `rgba(0,240,255,0.15)` : `rgba(0,183,235,0.12)`,
                    border: `2px solid ${theme === "dark" ? 'rgba(0,240,255,0.5)' : 'rgba(0,183,235,0.4)'}`,
                    borderRadius: '999px',
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: theme === "dark" ? '#e0f7ff' : '#1a1a1a'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '1.2rem 2.5rem',
                      background: theme === "dark" ? 'rgba(0,240,255,0.16)' : 'rgba(0,183,235,0.12)',
                      border: `2.5px solid ${theme === "dark" ? 'rgba(0,240,255,0.7)' : 'rgba(0,183,235,0.4)'}`,
                      borderRadius: '999px',
                      color: 'var(--neon-primary)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <Github size={28} />
                    View on GitHub
                  </a>
                )}

                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '1.2rem 2.5rem',
                      background: 'var(--neon-gradient)',
                      borderRadius: '999px',
                      color: '#000',
                      fontWeight: 900,
                      fontSize: '1.15rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <Rocket size={28} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}