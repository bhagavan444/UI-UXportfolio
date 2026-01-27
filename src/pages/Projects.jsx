import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Github, Rocket, Star, X, CheckCircle2,
  Terminal, Sparkles, Layers, Mail, Award, Brain, Cpu,
  Code, Zap, Cloud, Database, Server, Globe, Heart,
  Trophy, Briefcase, GraduationCap, Users, Search, Filter,
  Grid, List, TrendingUp, Eye, Download, Share2, AlertCircle,
  Film, Play, Box, Crosshair, Target, Flame, Activity
} from 'lucide-react';

const allProjects = [
  {
    id: 11,
    title: "ATS Resume Builder Platform",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: "https://melody-nap-17037283.figma.site",
    desc: "AI-powered platform that helps job seekers build ATS-optimized resumes and dramatically improve shortlisting chances.",
    longDesc: "Developed a complete full-stack ATS Resume Builder that uses AI to analyze job descriptions, suggest keywords, optimize formatting, and generate ATS-friendly PDFs in real-time. Includes real-time scoring, multiple professional templates, and export functionality.",
    problem: "Many qualified candidates get rejected because their resumes fail Applicant Tracking System (ATS) filters.",
    solution: "Built an intelligent resume builder that parses job descriptions, suggests missing keywords, and generates perfectly formatted ATS-compatible resumes.",
    myRole: "Full ownership — Designed UI/UX, developed complete frontend & backend, implemented ATS scoring engine, keyword optimization, and PDF generation.",
    techUsed: ["React", "Node.js", "MongoDB", "JWT", "Resume Parsing", "PDF Generation", "AI Keyword Matching"],
    impact: [
      "Improved resume shortlisting probability by up to 2×",
      "Thousands of resumes generated with high success rate",
      "Real-time ATS scoring & keyword suggestions"
    ],
    highlights: ["ATS-Friendly Templates", "Real-Time Scoring", "Keyword Optimization", "PDF Export", "Job Description Analysis"],
    stats: { atsScore: "90%+", templates: "10+", resumesBuilt: "3k+", shortlistingBoost: "2×" },
    tags: ["ATS Optimization", "Resume Builder", "Full-Stack", "AI", "Career Tools"],
    category: "AI",
    icon: "📄",
    img: "https://lh3.googleusercontent.com/d/1gSVeUalkdrQAgl0rBNdOm_g2I-kmQgia",
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    featured: true,
    views: "12.5k",
    downloads: "3.2k"
  },
  {
    id: 9,
    title: "NexusAI – Multi-Modal AI Workspace",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://bhagavanai.lovable.app/",
    desc: "Enterprise-grade AI workspace for research, automation, content generation, and multi-modal interactions in one unified interface.",
    longDesc: "A powerful all-in-one AI platform supporting text, images, PDFs, code generation, and advanced prompt engineering — designed for professionals and teams.",
    problem: "Professionals juggle multiple disconnected AI tools, losing context and productivity.",
    solution: "Created a unified multi-modal AI workspace with ultra-fast responses, memory context, file understanding, and premium UI/UX.",
    myRole: "Led product vision, UI/UX design, frontend architecture, prompt engineering, and performance optimization.",
    techUsed: ["React", "AI APIs", "Prompt Engineering", "File Parsing", "Real-time Processing"],
    impact: [
      "Eliminated tool-switching overhead",
      "Enabled 3× faster AI-driven workflows",
      "Premium enterprise-grade experience"
    ],
    highlights: ["Unified Workspace", "Multi-Modal Input", "Ultra-Fast Responses", "Premium UI", "Context Memory"],
    stats: { speed: "Ultra-Fast", modes: "Multi-Modal", quality: "Enterprise" },
    tags: ["AI Platform", "Productivity", "Enterprise UI", "Multi-Modal AI"],
    category: "AI",
    icon: "⚡",
    img: "https://lh3.googleusercontent.com/d/1Rz65QllbOI8nPEGeTO2GJT8a11jdbPtc",
    color: "#a855f7",
    glowRGB: "168, 85, 247",
    featured: true,
    views: "18.3k",
    downloads: "5.1k"
  },
  {
    id: 5,
    title: "Project Forge – AI Project Generator",
    github: null,
    live: "https://aiprojecttool.lovable.app",
    desc: "AI-powered tool that instantly generates complete, production-ready software project structures from simple natural language prompts.",
    longDesc: "Transforms vague ideas into fully structured, well-organized project repositories with folder structure, README, tech stack suggestions, and starter code.",
    problem: "Developers waste hours setting up boilerplate, folder structure, and initial architecture.",
    solution: "An intelligent AI system that understands requirements and generates clean, scalable project skeletons instantly.",
    myRole: "Designed AI generation logic, prompt engineering, frontend interface, and output formatting.",
    techUsed: ["React", "AI Models", "File System Generation", "Prompt Engineering"],
    impact: [
      "Saved developers 4–8 hours of setup time per project",
      "Enabled lightning-fast prototyping",
      "100k+ projects generated"
    ],
    highlights: ["Prompt-to-Code", "Clean Architecture", "Production-Ready Output", "Tech Stack Suggestions"],
    stats: { projects: "100k+", satisfaction: "99.9%" },
    tags: ["AI", "Developer Tools", "Automation", "Code Generation"],
    category: "Developer Tools",
    icon: "🚀",
    img: "https://lh3.googleusercontent.com/d/1jE-44VOkR64pyjLZNKC3vLt8FIEzfg-g",
    color: "#ff6b35",
    glowRGB: "255, 107, 53",
    featured: true,
    views: "25.7k",
    downloads: "8.9k"
  },
  {
    id: 7,
    title: "ArchMind – AI System Design Platform",
    github: null,
    live: "https://archmind-spark.lovable.app/",
    desc: "AI-powered platform that generates scalable, production-grade system architectures with trade-off analysis and best practices.",
    longDesc: "Helps engineers and students design high-level system architectures for real-world problems with detailed explanations and scalability considerations.",
    problem: "System design interviews and real-world architecture planning require deep expertise and time.",
    solution: "AI that generates complete system designs, identifies bottlenecks, suggests improvements, and applies FAANG-level patterns.",
    myRole: "Designed AI reasoning engine, architecture visualization, prompt chains, and interactive UI.",
    techUsed: ["System Design", "AI Reasoning", "Scalability Patterns", "React"],
    impact: [
      "Helped users master system design concepts faster",
      "Generated 50k+ professional architectures",
      "Applied real-world best practices"
    ],
    highlights: ["AI Architecture Generation", "Trade-Off Analysis", "Scalable Patterns", "FAANG-Level Designs"],
    stats: { architectures: "50k+", uptime: "99%", latency: "<50ms" },
    tags: ["System Design", "Scalability", "AI", "Interview Prep"],
    category: "AI",
    icon: "🧠",
    img: "https://lh3.googleusercontent.com/d/1sYsWzyDIuWAF-wz3A6iNorF3ATCpKXPF",
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    featured: true,
    views: "31.2k",
    downloads: "11.4k"
  },
  {
    id: 8,
    title: "TruthGuard AI – Fake News Detection",
    github: "https://github.com/bhagavan444/News-detector",
    live: "https://bliss-gala-22285345.figma.site/",
    desc: "Advanced NLP & Deep Learning system for real-time fake news detection with explainable AI outputs.",
    longDesc: "Built an end-to-end ML pipeline using TF-IDF + LSTM that classifies news articles with 95% accuracy and provides reasoning for predictions.",
    problem: "Fake news spreads misinformation and affects public decision-making.",
    solution: "High-accuracy NLP model with explainable outputs deployed as a real-time detection system.",
    myRole: "Complete ML pipeline: data collection, preprocessing, feature engineering, model training, evaluation, and deployment.",
    techUsed: ["Python", "NLP", "LSTM", "TensorFlow", "TF-IDF", "Explainable AI"],
    impact: [
      "Achieved 95% classification accuracy",
      "Processed millions of articles",
      "Provided transparent, explainable predictions"
    ],
    highlights: ["95% Accuracy", "Explainable AI", "Real-Time Analysis", "Large-Scale Dataset"],
    stats: { accuracy: "95%", articles: "1M+", responseTime: "<100ms" },
    tags: ["NLP", "Machine Learning", "AI Safety", "Deep Learning"],
    category: "Machine Learning",
    icon: "🛡️",
    img: "https://lh3.googleusercontent.com/d/1zVrR2EdQoPvSSvfnVox0xBoc5qbgr96r",
    color: "#a855f7",
    glowRGB: "168, 85, 247",
    featured: true,
    views: "22.8k",
    downloads: "6.7k"
  },
  {
    id: 10,
    title: "CareerCompass AI – Career Path Recommendation System",
    github: "https://github.com/bhagavan444/Career-Path-Recommendation",
    live: null,
    desc: "AI-powered career guidance platform that recommends personalized career paths based on skills, interests, and aptitude.",
    longDesc: "Developed an intelligent recommendation system using Machine Learning that analyzes student profiles and suggests optimal career trajectories.",
    problem: "Students lack personalized career direction.",
    solution: "Smart ML-based career recommendations.",
    myRole: "Built full pipeline, backend, and frontend.",
    techUsed: ["Python", "Machine Learning", "Flask", "Scikit-learn", "React"],
    impact: ["Effective career recommendations", "Structured learning paths"],
    highlights: ["ML-Driven Logic", "Interactive UI", "Skill Gap Analysis"],
    stats: { accuracy: "92%", careers: "50+", responseTime: "<200ms" },
    tags: ["AI", "ML", "EdTech", "Recommendation"],
    category: "Machine Learning",
    icon: "🧭",
    img: "https://lh3.googleusercontent.com/d/1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj",
    color: "#10b981",
    glowRGB: "16, 185, 129",
    featured: true,
    views: "18.4k",
    downloads: "4.9k"
  },
  {
    id: 4,
    title: "Heart Disease Prediction Platform",
    github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
    live: null,
    desc: "Machine learning web application that predicts heart disease risk using clinical data with 87% accuracy.",
    longDesc: "Developed a complete ML pipeline and Flask web app that takes patient parameters and predicts heart disease probability with detailed explanations.",
    problem: "Early detection of heart disease is critical but often delayed due to lack of accessible tools.",
    solution: "User-friendly web platform powered by ML models trained on clinical datasets.",
    myRole: "End-to-end development: data preprocessing, model training, evaluation, Flask backend, and responsive frontend.",
    techUsed: ["Python", "Scikit-learn", "Flask", "Pandas", "HTML/CSS/JS"],
    impact: [
      "Achieved 87% prediction accuracy",
      "Enabled fast, accessible health risk assessment",
      "Educational tool for medical students"
    ],
    highlights: ["ML-Based Prediction", "Clinical Feature Engineering", "Web Deployment"],
    stats: { accuracy: "87%", predictions: "1.2k+" },
    tags: ["Machine Learning", "Healthcare", "Flask", "Web App"],
    category: "Healthcare",
    icon: "❤️",
    img: "https://lh3.googleusercontent.com/d/1Uy1JiAFMcAwMD0LZgm0J-bYiWuHpRzqq",
    color: "#ff6b35",
    glowRGB: "255, 107, 53",
    featured: false,
    views: "9.4k",
    downloads: "2.1k"
  }
];

export default function CyberpunkProjects() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [projectType, setProjectType] = useState('all'); // 'all', 'github', 'live'
  const [sortBy, setSortBy] = useState('featured');
  const [particles, setParticles] = useState([]);
  const [cursorTrail, setCursorTrail] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef(null);

  const categories = ['all', ...new Set(allProjects.map(p => p.category))];

  // Matrix Code Rain Effect
  useEffect(() => {
    const codeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]()=+-*/%$#@!&|^~`;:.,?';
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array.from({ length: columns }, () => ({
      y: Math.random() * -100,
      speed: Math.random() * 2 + 1,
      char: codeChars[Math.floor(Math.random() * codeChars.length)]
    }));
    setParticles(drops);
  }, []);

  // Cursor Trail
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorTrail(prev => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: `${Date.now()}-${Math.random()}` }
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated Code Lines Background
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

    // Code lines configuration
    const codeLines = Array.from({ length: 15 }, (_, i) => ({
      y: (i * canvas.height) / 15,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.3 + 0.1,
      text: '01'.repeat(100).split('').map(() => Math.random() > 0.5 ? '1' : '0').join(''),
      offset: Math.random() * 1000
    }));

    // Binary streams
    const binaryStreams = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      chars: Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0'),
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw horizontal code lines
      ctx.font = '12px "Space Mono", monospace';
      codeLines.forEach(line => {
        line.offset += line.speed;
        if (line.offset > canvas.width) line.offset = -100;

        ctx.fillStyle = `rgba(0, 245, 255, ${line.opacity})`;
        ctx.fillText(line.text, line.offset, line.y);
      });

      // Draw binary streams
      ctx.font = '14px "Space Mono", monospace';
      binaryStreams.forEach(stream => {
        stream.y += stream.speed;
        if (stream.y > canvas.height + 100) {
          stream.y = -100;
          stream.x = Math.random() * canvas.width;
        }

        stream.chars.forEach((char, i) => {
          const alpha = stream.opacity * (1 - i / stream.chars.length);
          ctx.fillStyle = `rgba(0, 245, 255, ${alpha})`;
          ctx.fillText(char, stream.x, stream.y + i * 20);
        });
      });

      // Draw glowing brackets
      const time = Date.now() * 0.001;
      ctx.strokeStyle = `rgba(168, 85, 247, ${0.3 + Math.sin(time) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(50, 150);
      ctx.lineTo(80, 150);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width - 50, 50);
      ctx.lineTo(canvas.width - 50, 150);
      ctx.lineTo(canvas.width - 80, 150);
      ctx.stroke();

      id = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const filteredProjects = allProjects
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => {
      if (projectType === 'github') return p.github !== null;
      if (projectType === 'live') return p.live !== null;
      return true;
    })
    .filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sortBy === 'views') return parseFloat(b.views) - parseFloat(a.views);
      return 0;
    });

  const totalViews = allProjects.reduce((sum, p) => sum + parseFloat(p.views), 0);
  const totalDownloads = allProjects.reduce((sum, p) => sum + parseFloat(p.downloads), 0);
  const githubProjects = allProjects.filter(p => p.github).length;
  const liveProjects = allProjects.filter(p => p.live).length;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Rajdhani', sans-serif; 
          background: #000; 
          color: #fff; 
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
          to { opacity: 0; transform: scale(0); }
        }

        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes code-typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes terminal-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }

        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }

        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        @keyframes binary-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bracket-pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.5;
          }
          50% { 
            transform: scale(1.1);
            opacity: 1;
          }
        }

        @keyframes cinematic-reveal {
          from { 
            opacity: 0; 
            transform: translateY(80px) scale(0.95) rotateX(-5deg);
            filter: blur(8px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(3deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px currentColor,
                        0 0 40px currentColor;
          }
          50% { 
            box-shadow: 0 0 40px currentColor,
                        0 0 80px currentColor,
                        0 0 120px currentColor;
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.2; }
          46% { opacity: 1; }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* PROJECT CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px) saturate(180%);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.7s;
        }

        .project-card:hover::before {
          left: 100%;
        }

        .project-card:hover {
          transform: translateY(-25px) scale(1.03);
          border-color: var(--card-color);
          box-shadow: 
            0 40px 100px var(--card-glow),
            0 0 60px var(--card-glow) inset;
        }

        .project-card.featured {
          border-width: 3px;
          box-shadow: 0 0 50px rgba(0,245,255,0.4);
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* BUTTONS */
        /* ═══════════════════════════════════════════════════════════ */
        .filter-btn {
          background: rgba(0, 0, 0, 0.7);
          border: 3px solid;
          padding: 0.9rem 2rem;
          border-radius: 999px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: white;
          font-size: 0.95rem;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .filter-btn:hover::before,
        .filter-btn.active::before {
          transform: scaleX(1);
        }

        .filter-btn:hover,
        .filter-btn.active {
          color: #000;
          transform: translateY(-5px);
          box-shadow: 0 20px 60px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* TECH PILLS */
        /* ═══════════════════════════════════════════════════════════ */
        .tech-pill {
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid;
          padding: 0.7rem 1.3rem;
          border-radius: 999px;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-pill:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 40px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* SEARCH INPUT */
        /* ═══════════════════════════════════════════════════════════ */
        .search-input {
          width: 100%;
          padding: 1.2rem 1.8rem 1.2rem 3.5rem;
          background: rgba(0,0,0,0.6);
          border: 2px solid rgba(0,245,255,0.35);
          border-radius: 999px;
          color: #fff;
          font-size: 1.05rem;
          font-family: 'Rajdhani', sans-serif;
          transition: all 0.4s;
          outline: none;
        }

        .search-input:focus {
          border-color: #00f5ff;
          box-shadow: 0 0 40px rgba(0,245,255,0.4);
          background: rgba(0,0,0,0.8);
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* STAT CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 3px solid;
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: currentColor;
          opacity: 0.1;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .stat-card:hover::before {
          width: 500px;
          height: 500px;
        }

        .stat-card:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 40px 100px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* MODAL */
        /* ═══════════════════════════════════════════════════════════ */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.98);
          backdrop-filter: blur(20px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: cinematic-reveal 0.4s ease-out;
        }

        .modal-content {
          background: linear-gradient(135deg, rgba(10,10,40,0.98), rgba(20,20,55,0.96));
          border: 4px solid;
          border-radius: 32px;
          max-width: 1400px;
          width: 100%;
          max-height: 94vh;
          overflow-y: auto;
          position: relative;
          animation: cinematic-reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-content::-webkit-scrollbar {
          width: 12px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.3);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #00f5ff, #a855f7);
          border-radius: 10px;
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
          animation: neon-flicker 4s linear infinite;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* RESPONSIVE */
        /* ═══════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          body { cursor: default; }
          .custom-cursor, .cursor-trail { display: none; }
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: cursorTrail[cursorTrail.length - 1]?.x || 0,
          top: cursorTrail[cursorTrail.length - 1]?.y || 0,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {cursorTrail.slice(-8).map((point, i) => (
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

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #0a0a1a, #000000)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Progress Bar */}
        <div style={{
          position: 'fixed', top: 0, left: 0, width: `${scrollProgress}%`, height: '4px',
          background: 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)',
          zIndex: 10000, boxShadow: '0 0 20px currentColor', transition: 'width 0.1s'
        }} />

        {/* Matrix Code Rain */}
        {particles.map((drop, i) => (
          <div
            key={`code-${i}`}
            style={{
              position: 'fixed',
              left: `${(i / particles.length) * 100}%`,
              top: 0,
              width: '20px',
              height: '100vh',
              pointerEvents: 'none',
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: `${drop.y}%`,
                left: 0,
                color: '#00f5ff',
                fontSize: '14px',
                fontFamily: "'Space Mono', monospace",
                opacity: 0.4,
                textShadow: '0 0 5px rgba(0, 245, 255, 0.5)',
                animation: `matrix-fall ${drop.speed * 5}s linear infinite`,
                whiteSpace: 'nowrap'
              }}
            >
              {drop.char}
            </div>
          </div>
        ))}

        {/* Canvas Background */}
        <canvas ref={canvasRef} style={{ 
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2 
        }} />

        {/* Grid Background */}
        <div style={{
          position: 'fixed', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5, pointerEvents: 'none'
        }} />

        {/* Animated Scan Line */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #00f5ff, transparent)',
          animation: 'scan-line 8s linear infinite',
          opacity: 0.6,
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Decorative Code Brackets */}
        <div style={{
          position: 'fixed',
          top: '20%',
          left: '2%',
          fontSize: '8rem',
          color: '#00f5ff',
          opacity: 0.1,
          fontFamily: "'Space Mono', monospace",
          pointerEvents: 'none',
          animation: 'bracket-pulse 3s ease-in-out infinite',
          zIndex: 1
        }}>
          {'<'}
        </div>

        <div style={{
          position: 'fixed',
          top: '20%',
          right: '2%',
          fontSize: '8rem',
          color: '#a855f7',
          opacity: 0.1,
          fontFamily: "'Space Mono', monospace",
          pointerEvents: 'none',
          animation: 'bracket-pulse 3s ease-in-out infinite 1.5s',
          zIndex: 1
        }}>
          {'>'}
        </div>

        {/* Floating Binary Code */}
        <div style={{
          position: 'fixed',
          bottom: '10%',
          left: 0,
          right: 0,
          height: '40px',
          overflow: 'hidden',
          pointerEvents: 'none',
          opacity: 0.15,
          zIndex: 1
        }}>
          <div style={{
            position: 'absolute',
            whiteSpace: 'nowrap',
            fontFamily: "'Space Mono', monospace",
            fontSize: '1rem',
            color: '#00f5ff',
            animation: 'binary-flow 20s linear infinite'
          }}>
            {'01010011 01001111 01000110 01010100 01010111 01000001 01010010 01000101 '.repeat(10)}
          </div>
        </div>

        <div style={{
          position: 'relative', zIndex: 10, maxWidth: '1700px',
          margin: '0 auto', padding: '0 2rem',
          paddingTop: 'clamp(4rem, 8vw, 6rem)',
          paddingBottom: '6rem'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '1rem',
              fontFamily: "'Space Mono', monospace", color: '#00f5ff',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', padding: '1rem 2rem',
              border: '2px solid rgba(0, 245, 255, 0.5)', borderRadius: '999px',
              marginBottom: '2rem', background: 'rgba(0, 245, 255, 0.05)',
              animation: 'pulse-glow 3s infinite'
            }}>
              <Film size={20} />
              PORTFOLIO.INITIALIZE()
              <Activity size={20} />
            </div>

            <h1 className="neon-text" style={{
              fontSize: 'clamp(3rem, 9vw, 7rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif", letterSpacing: '8px',
              textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1.1,
              background: 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 100%'
            }}>
              PROJECT SHOWCASE
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', color: '#b0b0d8',
              maxWidth: '900px', margin: '0 auto',
              fontFamily: "'Rajdhani', sans-serif", lineHeight: 1.8,
              fontWeight: 500
            }}>
              AI-Powered Systems • Full-Stack Innovation • Production Deployments
              <br/>
              <span style={{ color: '#00f5ff', fontFamily: "'Space Mono', monospace" }}>
                [ Building the future, one project at a time ]
              </span>
            </p>
          </div>

          {/* Stats Dashboard */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '5rem'
          }}>
            {[
              { label: 'Total Projects', value: allProjects.length, icon: Rocket, color: '#00f5ff' },
              { label: 'GitHub Projects', value: githubProjects, icon: Github, color: '#a855f7' },
              { label: 'Live Demos', value: liveProjects, icon: Globe, color: '#ff6b35' },
              { label: 'Total Views', value: `${totalViews.toFixed(1)}k`, icon: Eye, color: '#00f5ff' },
              { label: 'Downloads', value: `${totalDownloads.toFixed(1)}k`, icon: Download, color: '#a855f7' },
              { label: 'Featured', value: allProjects.filter(p => p.featured).length, icon: Star, color: '#ffd700' }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="stat-card"
                  style={{
                    borderColor: stat.color,
                    animation: `cinematic-reveal ${1 + i * 0.1}s ease-out forwards`,
                    animationDelay: `${i * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div style={{
                    width: '70px', height: '70px',
                    margin: '0 auto 1rem',
                    border: `3px solid ${stat.color}`,
                    borderRadius: '16px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    animation: 'float-3d 4s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`,
                    boxShadow: `0 0 40px ${stat.color}50`,
                    background: `linear-gradient(135deg, ${stat.color}10, transparent)`
                  }}>
                    <Icon size={32} style={{ color: stat.color }} />
                  </div>
                  <div style={{
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    fontWeight: 900, color: stat.color,
                    marginBottom: '0.5rem',
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: `0 0 30px ${stat.color}`
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.95rem', color: '#b0b0d8',
                    fontWeight: 600, textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontFamily: "'Rajdhani', sans-serif"
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Search & Filters */}
          <div style={{ marginBottom: '4rem' }}>
            {/* Search Bar */}
            <div style={{
              position: 'relative',
              maxWidth: '700px',
              margin: '0 auto 2.5rem'
            }}>
              <Search
                size={22}
                style={{
                  position: 'absolute',
                  left: '1.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00f5ff',
                  pointerEvents: 'none'
                }}
              />
              <input
                type="text"
                placeholder="Search projects, technologies, categories..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Project Type Filter */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.2rem',
              marginBottom: '2rem',
              flexWrap: 'wrap'
            }}>
              <button
                className={`filter-btn ${projectType === 'all' ? 'active' : ''}`}
                onClick={() => setProjectType('all')}
                style={{
                  borderColor: '#00f5ff',
                  color: projectType === 'all' ? '#000' : 'white',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <Box size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                ALL PROJECTS
              </button>

              <button
                className={`filter-btn ${projectType === 'github' ? 'active' : ''}`}
                onClick={() => setProjectType('github')}
                style={{
                  borderColor: '#a855f7',
                  color: projectType === 'github' ? '#000' : 'white',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <Github size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                GITHUB REPOS
              </button>

              <button
                className={`filter-btn ${projectType === 'live' ? 'active' : ''}`}
                onClick={() => setProjectType('live')}
                style={{
                  borderColor: '#ff6b35',
                  color: projectType === 'live' ? '#000' : 'white',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                <Globe size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                LIVE DEMOS
              </button>
            </div>

            {/* Category Filters */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.2rem',
              marginBottom: '2rem'
            }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                  style={{
                    borderColor: '#00f5ff',
                    color: filter === cat ? '#000' : 'white',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {cat === 'all' ? '🌐 All Categories' : cat}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <button
                className="filter-btn"
                style={{
                  borderColor: sortBy === 'featured' ? '#ffd700' : 'rgba(0,245,255,0.3)',
                  color: sortBy === 'featured' ? '#000' : 'white',
                  background: sortBy === 'featured' ? '#ffd700' : 'rgba(0,0,0,0.7)',
                  position: 'relative',
                  zIndex: 1
                }}
                onClick={() => setSortBy('featured')}
              >
                <Star size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                FEATURED
              </button>

              <button
                className="filter-btn"
                style={{
                  borderColor: sortBy === 'views' ? '#00f5ff' : 'rgba(0,245,255,0.3)',
                  color: sortBy === 'views' ? '#000' : 'white',
                  background: sortBy === 'views' ? '#00f5ff' : 'rgba(0,0,0,0.7)',
                  position: 'relative',
                  zIndex: 1
                }}
                onClick={() => setSortBy('views')}
              >
                <TrendingUp size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                MOST VIEWED
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '1.1rem',
            color: '#00f5ff'
          }}>
            &gt; {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
          </div>

          {/* Projects Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            marginBottom: '6rem'
          }}>
            {filteredProjects.map((project, idx) => {
              const isHovered = hoveredId === project.id;

              return (
                <div
                  key={project.id}
                  className={`project-card ${project.featured ? 'featured' : ''}`}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveProject(project)}
                  style={{
                    '--card-color': project.color,
                    '--card-glow': `rgba(${project.glowRGB}, 0.4)`,
                    animation: `cinematic-reveal ${0.8 + idx * 0.1}s ease-out forwards`,
                    animationDelay: `${idx * 0.1}s`,
                    opacity: 0
                  }}
                >
                  {/* Top Accent */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '5px',
                    background: `linear-gradient(90deg, ${project.color}, transparent)`,
                    opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.5s'
                  }} />

                  {/* Project Image */}
                  <div style={{
                    height: project.featured ? '280px' : '240px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={project.img}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s',
                        transform: isHovered ? 'scale(1.2)' : 'scale(1.05)'
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 70%)'
                    }} />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div style={{
                        position: 'absolute', top: '1.2rem', right: '1.2rem',
                        padding: '0.6rem 1.3rem',
                        background: 'rgba(255,215,0,0.2)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid #ffd700',
                        borderRadius: '999px',
                        color: '#ffd700',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        animation: 'pulse-glow 2s infinite',
                        fontFamily: "'Space Mono', monospace"
                      }}>
                        <Star size={16} fill="#ffd700" />
                        FEATURED
                      </div>
                    )}

                    {/* Project Type Badges */}
                    <div style={{
                      position: 'absolute', bottom: '1rem',
                      left: '1rem', right: '1rem',
                      display: 'flex', justifyContent: 'space-between',
                      gap: '0.8rem', zIndex: 2
                    }}>
                      {project.github && (
                        <div style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(168, 85, 247, 0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid #a855f7',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          color: '#a855f7',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: 700,
                          fontFamily: "'Space Mono', monospace"
                        }}>
                          <Github size={14} />
                          REPO
                        </div>
                      )}

                      {project.live && (
                        <div style={{
                          padding: '0.5rem 1rem',
                          background: 'rgba(255, 107, 53, 0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '2px solid #ff6b35',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          color: '#ff6b35',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontWeight: 700,
                          fontFamily: "'Space Mono', monospace"
                        }}>
                          <Globe size={14} />
                          LIVE
                        </div>
                      )}

                      <div style={{
                        marginLeft: 'auto',
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0,245,255,0.3)',
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        color: '#00f5ff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <Eye size={14} />
                        {project.views}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{
                    padding: 'clamp(1.8rem, 4vw, 2.5rem) clamp(1.5rem, 3.5vw, 2.2rem)'
                  }}>
                    {/* Icon & Title */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.2rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '75px', height: '75px',
                        flexShrink: 0,
                        border: `3px solid ${project.color}`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                        animation: isHovered ? 'float-3d 2.5s ease-in-out infinite' : 'none',
                        boxShadow: isHovered ? `0 0 50px ${project.color}60` : 'none',
                        transition: 'all 0.5s'
                      }}>
                        {project.icon}
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: 'clamp(1.5rem, 3vw, 1.8rem)',
                          fontWeight: 800,
                          lineHeight: 1.2,
                          color: '#ffffff',
                          marginBottom: '0.8rem'
                        }}>
                          {project.title}
                        </h3>

                        <div style={{
                          display: 'inline-block',
                          padding: '0.4rem 1rem',
                          background: `${project.color}20`,
                          border: `1.5px solid ${project.color}60`,
                          borderRadius: '999px',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: project.color,
                          fontFamily: "'Space Mono', monospace"
                        }}>
                          {project.category}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '1.05rem',
                      lineHeight: 1.7,
                      color: '#c0c0d8',
                      marginBottom: '2rem'
                    }}>
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.7rem',
                      marginBottom: '2rem'
                    }}>
                      {project.tags.slice(0, 4).map(tag => (
                        <span
                          key={tag}
                          className="tech-pill"
                          style={{
                            color: isHovered ? project.color : '#b0d0e0',
                            borderColor: isHovered ? project.color : 'rgba(0,245,255,0.4)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          style={{
                            flex: project.live ? '0 1 auto' : '1',
                            padding: '1rem 2rem',
                            background: 'rgba(168, 85, 247, 0.15)',
                            border: `2.5px solid #a855f7`,
                            color: '#a855f7',
                            borderRadius: '999px',
                            fontWeight: 700,
                            fontSize: '1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.8rem',
                            textDecoration: 'none',
                            transition: 'all 0.4s',
                            fontFamily: "'Orbitron', sans-serif"
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 15px 40px rgba(168, 85, 247, 0.5)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          <Github size={20} />
                          CODE
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          style={{
                            flex: 1,
                            padding: '1rem 2rem',
                            background: `linear-gradient(135deg, ${project.color}, #ffffff)`,
                            color: '#000',
                            fontWeight: 900,
                            borderRadius: '999px',
                            fontSize: '1rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.8rem',
                            textDecoration: 'none',
                            transition: 'all 0.4s',
                            fontFamily: "'Orbitron', sans-serif",
                            boxShadow: `0 0 40px ${project.color}50`,
                            border: 'none'
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                            e.currentTarget.style.boxShadow = `0 15px 50px ${project.color}`;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = `0 0 40px ${project.color}50`;
                          }}
                        >
                          <Rocket size={20} />
                          LIVE DEMO
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '5rem 2rem'
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🔍</div>
              <h3 style={{
                fontSize: '2rem',
                color: '#00f5ff',
                marginBottom: '1rem',
                fontWeight: 800,
                fontFamily: "'Orbitron', sans-serif"
              }}>
                NO PROJECTS FOUND
              </h3>
              <p style={{
                fontSize: '1.2rem',
                color: '#8899aa',
                maxWidth: '500px',
                margin: '0 auto 2rem'
              }}>
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                  setProjectType('all');
                }}
                style={{
                  padding: '1rem 2.5rem',
                  background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                  border: 'none',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  fontFamily: "'Orbitron', sans-serif"
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              >
                RESET FILTERS
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div style={{
            marginTop: '8rem',
            padding: 'clamp(3.5rem, 8vw, 5rem) clamp(2rem, 5vw, 3rem)',
            background: 'rgba(0, 245, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '3px solid rgba(0, 245, 255, 0.3)',
            borderRadius: '36px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, transparent 30%, rgba(0,245,255,0.08) 50%, transparent 70%)',
              animation: 'scan 10s linear infinite',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '0.95rem', color: '#00f5ff',
                marginBottom: '1rem', fontFamily: "'Space Mono', monospace",
                letterSpacing: '2px'
              }}>
                &lt;COLLABORATION.READY&gt;
              </div>

              <h2 className="neon-text" style={{
                fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff6b35)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '2rem'
              }}>
                LET'S BUILD TOGETHER
              </h2>

              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                color: '#c0c0d8', marginBottom: '3rem',
                fontFamily: "'Rajdhani', sans-serif",
                maxWidth: '800px', margin: '0 auto 3rem',
                lineHeight: 1.8
              }}>
                From concept to deployment, I bring ideas to life with cutting-edge technology and clean code
              </p>

              <div style={{
                display: 'flex', gap: '2rem',
                justifyContent: 'center', flexWrap: 'wrap'
              }}>
                <a
                  href="https://github.com/bhagavan444"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.3rem 3rem',
                    background: 'rgba(0,245,255,0.15)',
                    border: '3px solid #00f5ff',
                    color: '#00f5ff',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    textDecoration: 'none',
                    transition: 'all 0.4s',
                    fontFamily: "'Orbitron', sans-serif",
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 245, 255, 0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Github size={24} />
                  VIEW ALL REPOS
                </a>

                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  style={{
                    padding: '1.3rem 3rem',
                    background: 'linear-gradient(135deg, #00f5ff, #a855f7)',
                    border: 'none',
                    borderRadius: '999px',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '1.1rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    textDecoration: 'none',
                    transition: 'all 0.4s',
                    fontFamily: "'Orbitron', sans-serif",
                    position: 'relative',
                    zIndex: 1
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 245, 255, 0.7)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Mail size={24} />
                  LET'S CONNECT
                </a>
              </div>

              <div style={{
                marginTop: '2.5rem', fontSize: '0.9rem',
                color: '#00f5ff', fontFamily: "'Space Mono', monospace"
              }}>
                &lt;/READY_FOR_INNOVATION_2026&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              borderColor: activeProject.color,
              boxShadow: `0 0 150px rgba(${activeProject.glowRGB}, 0.6)`
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,0,0,0.2)',
                border: '2px solid #ff4444',
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                zIndex: 10
              }}
              onMouseEnter={e => {
                e.target.style.background = '#ff4444';
                e.target.style.transform = 'scale(1.1) rotate(90deg)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'rgba(255,0,0,0.2)';
                e.target.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <X size={32} color="#fff" strokeWidth={3} />
            </button>

            {/* Modal Image */}
            <img
              src={activeProject.img}
              alt={activeProject.title}
              style={{
                width: '100%',
                maxHeight: '45vh',
                objectFit: 'cover',
                borderRadius: '28px 28px 0 0',
                display: 'block'
              }}
            />

            {/* Modal Content */}
            <div style={{
              padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(2rem, 5vw, 4rem) 5rem'
            }}>
              {/* Title & Category */}
              <div style={{
                textAlign: 'center',
                marginBottom: '3rem'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  background: `${activeProject.color}20`,
                  border: `2px solid ${activeProject.color}`,
                  borderRadius: '999px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: activeProject.color,
                  marginBottom: '1.5rem',
                  fontFamily: "'Space Mono', monospace"
                }}>
                  {activeProject.category}
                </div>

                <h2 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 900,
                  background: `linear-gradient(135deg, ${activeProject.color}, #ffffff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '1.5rem',
                  letterSpacing: '2px',
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  {activeProject.title}
                </h2>

                <p style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                  color: '#c0c0d8',
                  lineHeight: 1.8,
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  {activeProject.longDesc}
                </p>
              </div>

              {/* Problem & Solution */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                gap: '2.5rem',
                marginBottom: '3.5rem'
              }}>
                <div style={{
                  padding: '2rem',
                  background: 'rgba(255,0,0,0.08)',
                  borderRadius: '20px',
                  border: '2px solid rgba(255,100,100,0.3)'
                }}>
                  <h4 style={{
                    color: '#ff6666',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    <AlertCircle size={26} />
                    PROBLEM
                  </h4>
                  <p style={{
                    color: '#ffcccc',
                    fontSize: '1.1rem',
                    lineHeight: 1.7
                  }}>
                    {activeProject.problem}
                  </p>
                </div>

                <div style={{
                  padding: '2rem',
                  background: 'rgba(0,255,0,0.08)',
                  borderRadius: '20px',
                  border: '2px solid rgba(0,200,0,0.3)'
                }}>
                  <h4 style={{
                    color: '#00cc00',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    <Zap size={26} />
                    SOLUTION
                  </h4>
                  <p style={{
                    color: '#ccffcc',
                    fontSize: '1.1rem',
                    lineHeight: 1.7
                  }}>
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              {/* My Role */}
              <div style={{
                padding: '2rem',
                background: `rgba(${activeProject.glowRGB}, 0.08)`,
                borderRadius: '20px',
                border: `2px solid rgba(${activeProject.glowRGB}, 0.3)`,
                marginBottom: '3.5rem'
              }}>
                <h4 style={{
                  color: activeProject.color,
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  <Users size={26} />
                  MY ROLE
                </h4>
                <p style={{
                  color: '#e0e0ff',
                  fontSize: '1.1rem',
                  lineHeight: 1.8
                }}>
                  {activeProject.myRole}
                </p>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '3.5rem' }}>
                <h4 style={{
                  fontSize: '1.7rem',
                  fontWeight: 800,
                  color: activeProject.color,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  <Code size={28} />
                  TECHNOLOGY STACK
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  {activeProject.techUsed.map(tech => (
                    <span
                      key={tech}
                      className="tech-pill"
                      style={{
                        background: `${activeProject.color}20`,
                        borderColor: activeProject.color,
                        color: activeProject.color,
                        fontSize: '1rem',
                        padding: '0.8rem 1.5rem'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div style={{ marginBottom: '3.5rem' }}>
                <h4 style={{
                  fontSize: '1.7rem',
                  fontWeight: 800,
                  color: '#ffd700',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  <Trophy size={28} />
                  IMPACT & RESULTS
                </h4>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 768 ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
                  gap: '1.5rem'
                }}>
                  {activeProject.impact.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: 'rgba(255,215,0,0.08)',
                        borderRadius: '16px',
                        border: '2px solid rgba(255,215,0,0.3)'
                      }}
                    >
                      <CheckCircle2
                        size={24}
                        style={{
                          color: '#ffd700',
                          flexShrink: 0,
                          marginTop: '0.2rem'
                        }}
                      />
                      <span style={{
                        color: '#ffffcc',
                        fontSize: '1.05rem',
                        lineHeight: 1.6
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: '3.5rem' }}>
                <h4 style={{
                  fontSize: '1.7rem',
                  fontWeight: 800,
                  color: activeProject.color,
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  <Layers size={28} />
                  KEY HIGHLIGHTS
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  {activeProject.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.9rem 1.8rem',
                        background: `${activeProject.color}15`,
                        border: `2px solid ${activeProject.color}40`,
                        borderRadius: '999px',
                        color: activeProject.color,
                        fontWeight: 600,
                        fontSize: '1rem'
                      }}
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'center',
                marginBottom: '3.5rem'
              }}>
                {Object.entries(activeProject.stats).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      padding: '1.5rem 2.5rem',
                      background: `${activeProject.color}15`,
                      border: `2px solid ${activeProject.color}40`,
                      borderRadius: '16px',
                      minWidth: '180px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: 900,
                      color: activeProject.color,
                      marginBottom: '0.5rem',
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      {value}
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      color: '#b8c5d5',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '1.3rem 3rem',
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: `3px solid #a855f7`,
                      color: '#a855f7',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      textDecoration: 'none',
                      transition: 'all 0.4s',
                      fontFamily: "'Orbitron', sans-serif"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 20px 60px rgba(168, 85, 247, 0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Github size={24} />
                    VIEW SOURCE CODE
                  </a>
                )}

                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '1.3rem 3rem',
                      background: `linear-gradient(135deg, ${activeProject.color}, #ffffff)`,
                      color: '#000',
                      fontWeight: 900,
                      borderRadius: '999px',
                      fontSize: '1.1rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      textDecoration: 'none',
                      transition: 'all 0.4s',
                      fontFamily: "'Orbitron', sans-serif",
                      boxShadow: `0 0 50px ${activeProject.color}60`,
                      border: 'none'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 25px 70px ${activeProject.color}`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = `0 0 50px ${activeProject.color}60`;
                    }}
                  >
                    <Rocket size={24} />
                    LAUNCH LIVE DEMO
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