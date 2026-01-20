// src/pages/Projects.jsx – FINAL ERROR-FREE VERSION (1000+ lines)
// Ultra-premium futuristic MERN + AI Portfolio Showcase
// Fixed all import & clamp errors • Holographic 3D cards • Live particle network • Interactive modals

import { useState, useEffect, useRef } from 'react';
import {
  ExternalLink,
  Code,
  Database,
  Brain,
  Sparkles,
  Award,
  Zap,
  Eye,
  X,
  CheckCircle2,
  Layers,
  Terminal,
  GitBranch,
  Globe,
  Briefcase,
  Rocket,
  Cpu,
  Server,
  Cloud,
  Lock,
  Download,
  ChevronRight,
  Linkedin,
  Mail,
  Github,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Star,          // FIXED: Added missing Star import
  TrendingUp,
  Lightbulb,
} from 'lucide-react';

// Custom clamp function (prevents ReferenceError)
const clamp = (min, max, value) => Math.min(Math.max(value, min), max);

// Project data with your real GitHub & live links
const projects = [
  {
    title: "ATS Resume Builder",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: null,
    desc: "Full-stack ATS-optimized resume builder with smart templates, real-time keyword scoring, ATS compatibility checker, PDF/Word export, and modern professional designs.",
    longDesc: "Engineered to help candidates beat Applicant Tracking Systems. Features real-time ATS score calculation, intelligent keyword optimization suggestions, multiple stunning templates, dark/light mode, drag & drop section editor, instant live preview, and export in PDF/Word formats.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "PDFKit", "MERN"],
    icon: "📄",
    img: "https://drive.google.com/thumbnail?id=1ngApn37ig05YDXxCbA5mppeva_opwcUs&sz=w1200",
    color: "#8B5CF6",
    featured: true,
    highlights: [
      "Real-time ATS Scoring Engine",
      "Intelligent Keyword Optimization",
      "Multiple Professional Templates",
      "Drag & Drop Section Editor",
      "Dark/Light Mode + Export (PDF/Word)"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "PDFKit", "TailwindCSS"]
  },
  {
    title: "Production-Style AI Chatbot Platform",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://bhagavanai.lovable.app",
    desc: "Advanced real-time AI chatbot with streaming responses, persistent conversation memory, markdown rendering, code highlighting, file upload, and beautiful responsive UI.",
    longDesc: "Built with modern AI architecture featuring streaming responses, long-term memory across sessions, rich markdown support, syntax-highlighted code blocks, file upload capability, multi-theme customization, and fully responsive design optimized for all devices.",
    tags: ["AI", "React", "Flask", "Gemini", "OpenAI", "Streaming"],
    icon: "🤖",
    img: "https://drive.google.com/thumbnail?id=10gvXlgHCb__NAWBoLEbj6LglL9dT6Kew&sz=w1200",
    color: "#06B6D4",
    featured: true,
    highlights: [
      "Real-time Streaming Responses",
      "Persistent Conversation Memory",
      "Rich Markdown & Code Highlighting",
      "File Upload Support",
      "Multi-Theme + Responsive UI"
    ],
    techStack: ["React", "Flask", "Gemini API", "OpenAI API", "Streaming", "TailwindCSS"]
  },
  {
    title: "AI Career Path Recommendation System",
    github: "https://github.com/bhagavan444/carrer-path-web-",
    live: null,
    desc: "Machine Learning-powered career recommendation engine that analyzes skills, interests, personality, and market trends to deliver personalized career paths and roadmaps.",
    longDesc: "Uses advanced ML algorithms to match user profiles with thousands of job roles. Provides detailed career roadmaps, skill gap analysis, recommended learning resources, salary expectations, and industry trend insights.",
    tags: ["ML", "Python", "Flask", "Career", "Recommendation"],
    icon: "🎯",
    img: "https://drive.google.com/thumbnail?id=1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj&sz=w1200",
    color: "#F59E0B",
    highlights: [
      "AI-Powered Career Matching",
      "Detailed Skills Gap Analysis",
      "Personalized Learning Roadmap",
      "Salary & Market Insights",
      "Industry Trend Integration"
    ],
    techStack: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy", "Streamlit"]
  },
  {
    title: "Fake News Detection System",
    github: "https://github.com/bhagavan444/News-detector",
    live: null,
    desc: "High-accuracy NLP-based fake news detector using TF-IDF, LSTM, and ensemble methods achieving 92%+ accuracy on real-world datasets.",
    longDesc: "Advanced NLP model trained on large verified news datasets. Provides confidence scores, key phrase highlighting, source credibility analysis, detailed detection explanation, and real-time prediction capabilities.",
    tags: ["NLP", "TensorFlow", "Python", "LSTM", "Fake News"],
    icon: "📰",
    img: "https://drive.google.com/thumbnail?id=1i-qZCMDiOAy677h3y12es5xM_IL-_oOF&sz=w1200",
    color: "#10B981",
    highlights: [
      "92%+ Detection Accuracy",
      "LSTM Neural Networks",
      "Real-time Source Credibility Check",
      "Confidence Scoring System",
      "Key Phrase Highlighting"
    ],
    techStack: ["Python", "TensorFlow", "Keras", "Scikit-learn", "NLTK", "Flask"]
  },
  {
    title: "AI System Architecture Generator",
    github: null,
    live: "https://archmind-spark.lovable.app",
    desc: "Revolutionary AI-powered tool that generates complete system architectures, tech stack recommendations, database schemas, API designs, and deployment strategies from natural language.",
    longDesc: "Understands complex requirements and produces professional-grade architecture diagrams, component breakdowns, scalability patterns, security considerations, and production-ready deployment blueprints.",
    tags: ["AI", "System Design", "React", "Architecture"],
    icon: "🧠",
    img: "https://drive.google.com/thumbnail?id=15dAzqZOC60zlje-DevzjWLFH4lIf5L0E&sz=w1200",
    color: "#8B5CF6",
    featured: true,
    highlights: [
      "Auto-Generated Architecture Diagrams",
      "Intelligent Tech Stack Recommendations",
      "Database Schema Design",
      "Security & Scalability Patterns",
      "Production Deployment Strategies"
    ],
    techStack: ["React", "AI Models", "Gemini/OpenAI", "TailwindCSS"]
  },
  {
    title: "NeuralLearn – AI-Powered EdTech Platform",
    github: null,
    live: "https://neurallearn.lovable.app",
    desc: "Next-generation AI-driven learning platform with personalized learning paths, adaptive difficulty adjustment, smart content recommendations, and comprehensive progress analytics.",
    longDesc: "Leverages reinforcement learning to dynamically adapt content difficulty, predicts knowledge gaps, recommends optimal study sequences, and delivers detailed performance insights and learning analytics.",
    tags: ["AI", "EdTech", "React", "Personalization"],
    icon: "📚",
    img: "https://drive.google.com/thumbnail?id=1jxmO9h3FbnKDYAiN9mWXpfR--cN8YF2O&sz=w1200",
    color: "#EC4899",
    featured: true,
    highlights: [
      "Adaptive Difficulty Learning Engine",
      "Personalized Learning Paths",
      "Smart Content Recommendations",
      "Knowledge Gap Prediction",
      "Advanced Progress Analytics"
    ],
    techStack: ["React", "AI Models", "Node.js", "MongoDB", "TailwindCSS"]
  }
];

export default function ProjectsShowcase() {
  const [modal, setModal] = useState(null);
  const [hover, setHover] = useState(null);
  const [visible, setVisible] = useState(false);
  const [filterTag, setFilterTag] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);

    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Particle Network Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 3 + 1,
        color: projects[i % projects.length].color,
        alpha: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 0, 26, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.floor(p.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              const opacity = Math.floor((1 - dist / 160) * 50);
              ctx.strokeStyle = `${p.color}${opacity.toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 0.8 + (1 - dist / 160) * 1.2;
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = filterTag === "All" ? projects : projects.filter(p => p.tags.includes(filterTag));
  const currentProject = modal ? projects.find(p => p.title === modal) : null;

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a001a 0%, #001433 50%, #0a0028 100%)",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
        fontFamily: '"Space Grotesk", system-ui, sans-serif',
        padding: "clamp(80px, 12vh, 140px) clamp(20px, 5vw, 80px)",
      }}
    >
      {/* Global Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(5deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.7; filter: drop-shadow(0 0 20px currentColor); }
          50% { opacity: 1; filter: drop-shadow(0 0 45px currentColor); }
        }
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) rotate(45deg); }
          100% { transform: translateX(150%) rotate(45deg); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8) translateY(60px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(80px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalFade {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes codeFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-40px) rotate(6deg); opacity: 0.4; }
        }
      `}</style>

      {/* Mega Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Deep Cosmic Gradient */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(139,92,246,0.15), transparent 70%)",
        }} />

        {/* Mouse Interactive Nebula */}
        <div style={{
          position: "absolute",
          width: "1400px",
          height: "1400px",
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
          filter: "blur(140px)",
          transform: "translate(-50%, -50%)",
          transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }} />

        {/* Animated Cyber Grid */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139,92,246,0.12) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(139,92,246,0.12) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "90px 90px",
          opacity: 0.4,
          transform: `translateY(${scrollY * 0.5}px)`,
        }} />

        {/* Floating Code Symbols */}
        {['{ }', '</>', '=>', '()', '[]', '===', 'const', 'import', 'AI', 'ML'].map((symbol, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${8 + (i * 11) % 84}%`,
              top: `${10 + (i * 13) % 90}%`,
              fontSize: `${clamp(1.8, 4.5, 3.2)}rem`,
              fontFamily: 'monospace',
              fontWeight: '900',
              color: projects[i % projects.length].color,
              opacity: 0.18,
              animation: `codeFloat ${6 + i * 0.8}s ease-in-out infinite ${i * 0.5}s`,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            {symbol}
          </div>
        ))}

        {/* Floating Particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              background: projects[i % projects.length].color,
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${12 + Math.random() * 18}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
              boxShadow: `0 0 30px ${projects[i % projects.length].color}80`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div style={{ position: "relative", maxWidth: "1800px", margin: "0 auto", zIndex: 10 }}>
        {/* Hero Section */}
        <div style={{
          textAlign: "center",
          marginBottom: "clamp(100px, 15vh, 160px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-80px)",
          transition: "all 1.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}>
          {/* Floating Rocket */}
          <div style={{
            fontSize: "clamp(5rem, 15vw, 9rem)",
            marginBottom: "40px",
            animation: "float 7s ease-in-out infinite",
            filter: "drop-shadow(0 0 60px rgba(139,92,246,0.8))",
          }}>
            🚀
          </div>

          {/* Premium Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '18px',
            padding: '18px 48px',
            background: 'rgba(139,92,246,0.12)',
            backdropFilter: 'blur(30px)',
            border: '2.5px solid rgba(139,92,246,0.5)',
            borderRadius: '999px',
            marginBottom: "48px",
            boxShadow: '0 25px 70px rgba(139,92,246,0.4)',
          }}>
            <Terminal size={28} style={{ color: '#8B5CF6', animation: 'pulseGlow 3s infinite' }} />
            <span style={{
              fontSize: '1.2rem',
              fontWeight: '900',
              letterSpacing: '0.2em',
              background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              MERN + AI PORTFOLIO
            </span>
            <Sparkles size={28} style={{ color: '#EC4899', animation: 'rotate360 12s linear infinite' }} />
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: "clamp(4rem, 14vw, 9rem)",
            fontWeight: "900",
            lineHeight: 0.92,
            marginBottom: "40px",
            letterSpacing: '-0.03em',
          }}>
            <span style={{
              background: "linear-gradient(135deg, #ffffff, #8B5CF6, #06B6D4, #EC4899)",
              backgroundSize: "300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradient 8s ease infinite",
            }}>
              Project Portfolio
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(1.3rem, 3.5vw, 1.8rem)",
            color: "#9ca3af",
            maxWidth: "950px",
            margin: "0 auto 60px",
            lineHeight: 1.7,
          }}>
            Production-grade applications powered by <strong style={{ color: "#8B5CF6" }}>MERN Stack</strong>, <strong style={{ color: "#06B6D4" }}>Artificial Intelligence</strong>, and <strong style={{ color: "#EC4899" }}>Machine Learning</strong>
          </p>

          {/* Quick Stats */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(24px, 5vw, 48px)",
            flexWrap: "wrap",
            marginBottom: "80px",
          }}>
            {[
              { label: "PROJECTS", value: projects.length, color: "#8B5CF6", icon: Code },
              { label: "FEATURED", value: projects.filter(p => p.featured).length, color: "#FBBF24", icon: Star },
              { label: "LIVE DEMOS", value: projects.filter(p => p.live).length, color: "#06B6D4", icon: Rocket },
              { label: "TECHNOLOGIES", value: "12+", color: "#EC4899", icon: Cpu },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  style={{
                    padding: "clamp(24px, 5vw, 40px) clamp(32px, 6vw, 56px)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(30px)",
                    borderRadius: "32px",
                    border: `2.5px solid ${stat.color}40`,
                    minWidth: "220px",
                    animation: `scaleIn 1s ease-out ${0.6 + i * 0.2}s backwards`,
                    transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
                    e.currentTarget.style.boxShadow = `0 40px 100px ${stat.color}60`;
                    e.currentTarget.style.borderColor = stat.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = `${stat.color}40`;
                  }}
                >
                  <Icon size={48} color={stat.color} style={{ marginBottom: "20px", animation: "pulseGlow 3s infinite" }} />
                  <div style={{
                    fontSize: "clamp(2.8rem, 8vw, 4.2rem)",
                    fontWeight: "900",
                    color: stat.color,
                    marginBottom: "12px",
                    filter: `drop-shadow(0 0 30px ${stat.color})`,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                    color: "#9ca3af",
                    fontWeight: "800",
                    letterSpacing: "0.08em",
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tag Filter */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "80px",
            animation: "fadeInUp 1.2s ease-out 1.2s backwards",
          }}>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                style={{
                  padding: "14px 32px",
                  background: filterTag === tag
                    ? "linear-gradient(135deg, #8B5CF6, #06B6D4)"
                    : "rgba(255,255,255,0.08)",
                  border: filterTag === tag ? "none" : "2.5px solid rgba(139,92,246,0.4)",
                  borderRadius: "999px",
                  fontSize: "1.1rem",
                  fontWeight: "900",
                  color: filterTag === tag ? "#ffffff" : "#9ca3af",
                  cursor: "pointer",
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  boxShadow: filterTag === tag ? "0 15px 45px rgba(139,92,246,0.6)" : "none",
                  transform: filterTag === tag ? "scale(1.12)" : "scale(1)",
                  letterSpacing: "0.06em",
                }}
                onMouseEnter={(e) => {
                  if (filterTag !== tag) {
                    e.currentTarget.style.background = "rgba(139,92,246,0.18)";
                    e.currentTarget.style.color = "#e5e7eb";
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.6)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (filterTag !== tag) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "#9ca3af";
                    e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)";
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
          gap: "clamp(40px, 6vw, 60px)",
        }}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setModal(project.title)}
              style={{
                position: "relative",
                cursor: "pointer",
                opacity: visible ? 1 : 0,
                animation: `scaleIn 1.2s ease-out ${0.5 + index * 0.15}s backwards`,
                transform: hover === index ? "translateY(-28px) scale(1.05) rotateX(10deg)" : "scale(1)",
                transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                perspective: "1500px",
              }}
            >
              {/* Holographic Outer Glow */}
              <div style={{
                position: "absolute",
                inset: "-60px",
                background: `radial-gradient(circle at center, ${project.color}45, transparent 70%)`,
                filter: "blur(90px)",
                opacity: hover === index ? 1 : 0.2,
                transition: "opacity 0.8s",
                animation: hover === index ? "pulseGlow 2.5s infinite" : "none",
                zIndex: -1,
              }} />

              {/* Main Card */}
              <div style={{
                position: "relative",
                background: "rgba(20, 20, 45, 0.92)",
                backdropFilter: "blur(40px)",
                borderRadius: "40px",
                border: `3px solid ${hover === index ? project.color : "rgba(139,92,246,0.25)"}`,
                overflow: "hidden",
                boxShadow: hover === index
                  ? `0 70px 140px ${project.color}60, inset 0 0 100px ${project.color}20`
                  : "0 30px 80px rgba(0,0,0,0.7)",
                transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transformStyle: "preserve-3d",
              }}>
                {/* Animated Border when Hovered */}
                {hover === index && (
                  <div style={{
                    position: "absolute",
                    inset: "-4px",
                    background: `linear-gradient(45deg, ${project.color}, #ffffff, ${project.color})`,
                    backgroundSize: "300% 300%",
                    animation: "borderRotate 4s linear infinite",
                    borderRadius: "40px",
                    zIndex: 0,
                    opacity: 0.7,
                  }} />
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    padding: "12px 28px",
                    background: "linear-gradient(135deg, #FBBF24, #F59E0B)",
                    borderRadius: "999px",
                    fontSize: "0.9rem",
                    fontWeight: "900",
                    color: "#000000",
                    zIndex: 30,
                    boxShadow: "0 12px 40px rgba(251,191,36,0.8)",
                    animation: "pulseGlow 2.5s infinite",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    letterSpacing: "0.06em",
                  }}>
                    <Star size={18} fill="#000" />
                    FEATURED
                  </div>
                )}

                {/* Project Image */}
                <div style={{
                  position: "relative",
                  height: "clamp(280px, 45vw, 380px)",
                  overflow: "hidden",
                }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      transform: hover === index ? "scale(1.25) rotate(3deg)" : "scale(1.08)",
                      filter: hover === index ? "brightness(1.25) contrast(1.15)" : "brightness(0.9)",
                    }}
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,0,26,0.98) 0%, rgba(10,0,26,0.4) 50%, transparent 100%)",
                  }} />

                  {/* Shimmer on Hover */}
                  {hover === index && (
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                      backgroundSize: "200% 100%",
                      animation: "shimmer 2.5s linear infinite",
                    }} />
                  )}
                </div>

                {/* Card Content */}
                <div style={{ padding: "clamp(40px, 6vw, 56px)", position: "relative", zIndex: 10 }}>
                  {/* Title */}
                  <h3 style={{
                    fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)",
                    fontWeight: "900",
                    marginBottom: "16px",
                    lineHeight: 1.2,
                    color: "#ffffff",
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}>
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    marginBottom: "40px",
                  }}>
                    {project.tags.map((tag, i) => (
                      <div
                        key={tag}
                        style={{
                          padding: "10px 20px",
                          fontSize: "0.95rem",
                          fontWeight: "800",
                          background: `${project.color}15`,
                          border: `2px solid ${project.color}40`,
                          borderRadius: "999px",
                          color: "#e0e0e0",
                          transition: "all 0.4s",
                          transform: hover === index ? "translateY(0)" : "translateY(8px)",
                          opacity: hover === index ? 1 : 0.7,
                          transitionDelay: `${i * 0.06}s`,
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div style={{
                    marginBottom: "40px",
                  }}>
                    <h4 style={{
                      fontSize: "1.4rem",
                      fontWeight: "800",
                      color: project.color,
                      marginBottom: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}>
                      <Sparkles size={24} />
                      Key Highlights
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            marginBottom: "16px",
                            fontSize: "1.05rem",
                            color: "#e5e7eb",
                            animation: hover === index ? `checkAppear 0.6s ease-out ${i * 0.1}s backwards` : "none",
                          }}
                        >
                          <CheckCircle2 size={20} style={{ color: project.color, flexShrink: 0 }} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          padding: "18px 32px",
                          borderRadius: "999px",
                          background: "rgba(255,255,255,0.1)",
                          border: `2.5px solid ${project.color}70`,
                          color: project.color,
                          fontSize: "1.1rem",
                          fontWeight: "900",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "14px",
                          transition: "all 0.4s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${project.color}20`;
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <Github size={22} />
                        View Source
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          padding: "18px 32px",
                          borderRadius: "999px",
                          background: `linear-gradient(135deg, ${project.color}, #ffffff)`,
                          color: "#000000",
                          fontSize: "1.1rem",
                          fontWeight: "900",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "14px",
                          boxShadow: `0 15px 50px ${project.color}60`,
                          transition: "all 0.4s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                          e.currentTarget.style.boxShadow = `0 25px 70px ${project.color}80`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow = `0 15px 50px ${project.color}60`;
                        }}
                      >
                        <Rocket size={22} />
                        Live Demo
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Decorative Corners */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "60px",
                  height: "60px",
                  borderTop: `4px solid ${project.color}`,
                  borderLeft: `4px solid ${project.color}`,
                  borderRadius: "24px 0 0 0",
                  opacity: hover === index ? 0.9 : 0.4,
                  transition: "opacity 0.6s",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  width: "60px",
                  height: "60px",
                  borderBottom: `4px solid ${project.color}`,
                  borderRight: `4px solid ${project.color}`,
                  borderRadius: "0 0 24px 0",
                  opacity: hover === index ? 0.9 : 0.4,
                  transition: "opacity 0.6s",
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {modal && currentProject && (
          <div
            onClick={() => setModal(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.96)",
              backdropFilter: "blur(60px)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(20px, 5vw, 40px)",
              animation: "modalFade 0.6s ease-out",
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "rgba(20,20,45,0.98)",
                backdropFilter: "blur(50px)",
                borderRadius: "40px",
                width: "min(95vw, 1400px)",
                maxHeight: "92vh",
                overflowY: "auto",
                border: `4px solid ${currentProject.color}60`,
                boxShadow: `0 80px 200px ${currentProject.color}80`,
                position: "relative",
                animation: "modalFade 0.7s ease-out",
              }}
            >
              {/* Modal Header */}
              <div style={{
                position: "sticky",
                top: 0,
                background: "rgba(20,20,45,0.98)",
                backdropFilter: "blur(40px)",
                padding: "32px 48px",
                borderBottom: `2px solid ${currentProject.color}40`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 10,
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                }}>
                  <div style={{
                    fontSize: "3.5rem",
                    background: `linear-gradient(135deg, ${currentProject.color}, #ffffff)`,
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}>
                    {currentProject.icon}
                  </div>
                  <div>
                    <h2 style={{
                      fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                      fontWeight: "900",
                      marginBottom: "8px",
                    }}>
                      {currentProject.title}
                    </h2>
                    <p style={{
                      fontSize: "1.3rem",
                      color: currentProject.color,
                      fontWeight: "700",
                    }}>
                      Production-Grade Application
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setModal(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#ef4444",
                    transition: "all 0.4s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "rotate(90deg) scale(1.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                  }}
                >
                  <X size={40} />
                </button>
              </div>

              {/* Modal Body */}
              <div style={{ padding: "clamp(40px, 6vw, 64px)" }}>
                {/* Image Gallery */}
                <div style={{
                  marginBottom: "56px",
                  borderRadius: "32px",
                  overflow: "hidden",
                  boxShadow: `0 40px 120px ${currentProject.color}50`,
                }}>
                  <img
                    src={currentProject.img}
                    alt={currentProject.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </div>

                {/* Description */}
                <p style={{
                  fontSize: "1.3rem",
                  lineHeight: 1.9,
                  color: "#cbd5e1",
                  marginBottom: "48px",
                }}>
                  {currentProject.longDesc}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: "56px" }}>
                  <h3 style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: currentProject.color,
                    marginBottom: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}>
                    <Sparkles size={32} />
                    Key Highlights
                  </h3>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "24px",
                  }}>
                    {currentProject.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "24px",
                          background: "rgba(255,255,255,0.06)",
                          borderRadius: "24px",
                          border: `2px solid ${currentProject.color}30`,
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                        }}
                      >
                        <CheckCircle2 size={28} style={{ color: currentProject.color }} />
                        <span style={{ fontSize: "1.2rem", fontWeight: "700" }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div style={{ marginBottom: "56px" }}>
                  <h3 style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: currentProject.color,
                    marginBottom: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                  }}>
                    <Cpu size={32} />
                    Technologies Used
                  </h3>
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                  }}>
                    {currentProject.techStack.map((tech, i) => (
                      <div
                        key={tech}
                        style={{
                          padding: "14px 28px",
                          background: "rgba(255,255,255,0.08)",
                          borderRadius: "999px",
                          border: `2px solid ${currentProject.color}50`,
                          fontSize: "1.1rem",
                          fontWeight: "800",
                          color: "#e5e7eb",
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: "flex",
                  gap: "32px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: "64px",
                }}>
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "20px 48px",
                        borderRadius: "999px",
                        background: "rgba(139,92,246,0.15)",
                        border: "3px solid #8B5CF6",
                        color: "#8B5CF6",
                        fontSize: "1.3rem",
                        fontWeight: "900",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        transition: "all 0.4s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#8B5CF620";
                        e.currentTarget.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(139,92,246,0.15)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <Github size={28} />
                      View Source Code
                    </a>
                  )}

                  {currentProject.live && (
                    <a
                      href={currentProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "20px 48px",
                        borderRadius: "999px",
                        background: `linear-gradient(135deg, ${currentProject.color}, #ffffff)`,
                        color: "#000000",
                        fontSize: "1.3rem",
                        fontWeight: "900",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        boxShadow: `0 20px 60px ${currentProject.color}70`,
                        transition: "all 0.4s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                        e.currentTarget.style.boxShadow = `0 30px 80px ${currentProject.color}90`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = `0 20px 60px ${currentProject.color}70`;
                      }}
                    >
                      <Rocket size={28} />
                      Live Demo
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div style={{
          textAlign: "center",
          marginTop: "clamp(100px, 15vh, 160px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(60px)",
          transition: "all 1.4s ease-out 1.2s",
        }}>
          <h2 style={{
            fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
            fontWeight: "900",
            marginBottom: "32px",
            background: "linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}>
            Ready to Build Something Amazing?
          </h2>
          <p style={{
            fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
            color: "#9ca3af",
            marginBottom: "48px",
          }}>
            Let's collaborate on your next MERN + AI project
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}>
            <a
              href="https://github.com/bhagavan444"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "20px 48px",
                borderRadius: "999px",
                background: "rgba(139,92,246,0.15)",
                border: "3px solid #8B5CF6",
                color: "#8B5CF6",
                fontSize: "1.3rem",
                fontWeight: "900",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                transition: "all 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8B5CF620";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(139,92,246,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <Github size={28} />
              Explore More on GitHub
            </a>

            <a
              href="mailto:g.sivasatyasaibhagavan@gmail.com"
              style={{
                padding: "20px 48px",
                borderRadius: "999px",
                background: `linear-gradient(135deg, #06B6D4, #EC4899)`,
                color: "#ffffff",
                fontSize: "1.3rem",
                fontWeight: "900",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                boxShadow: "0 20px 60px rgba(6,182,212,0.6)",
                transition: "all 0.4s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 30px 80px rgba(6,182,212,0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(6,182,212,0.6)";
              }}
            >
              <Mail size={28} />
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}