import { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Code, Brain, Sparkles, Award, Zap, Eye, X, CheckCircle2,
  Terminal, Github, Rocket, Star, TrendingUp, Cpu, Layers, Globe, Mail,
  Database, Server, Shield, BarChart, Lightbulb, Users, Clock, Target,
  FileText, GitBranch, LayoutDashboard, Search, MessageSquare, BookOpen
} from 'lucide-react';

// ──────────────────────────────────────────────────────────────────────────────
// PROJECT DATA
// ──────────────────────────────────────────────────────────────────────────────
const aiProjects = [
  {
    id: 11,
    title: "ATS Resume Builder Platform",
    github: null,
    live: "https://melody-nap-17037283.figma.site",
    desc: "AI-powered ATS resume builder designed to help candidates create resumes that pass applicant tracking systems.",
    longDesc: "Full-stack ATS-optimized resume builder with smart templates, keyword optimization, real-time scoring...",
    tags: ["ATS Optimization", "Resume Builder", "React", "Node.js", "MongoDB"],
    icon: "📄",
    img: "/src/assets/resume.jpeg",
    color: "#2563EB",
    featured: true,
    highlights: ["ATS-Friendly Templates", "Real-Time Scoring", "Keyword Optimization", "PDF Export"],
    stats: { atsScore: "90%+", templates: "10+", resumesBuilt: "3k+", shortlistingBoost: "2×" }
  },
  {
    id: 9,
    title: "NexusAI – Multi-Modal AI Workspace",
    github: null,
    live: "https://bhagavanai.lovable.app/",
    desc: "Enterprise-grade AI workspace for building, researching, automating and generating content.",
    longDesc: "Multi-modal AI platform supporting text, images, PDFs, code with ultra-fast responses...",
    tags: ["AI Platform", "Multi-Modal AI", "Productivity", "Enterprise UI"],
    icon: "⚡",
    img: "/src/assets/chat.jpeg",
    color: "#3B82F6",
    featured: true,
    highlights: ["Unified Workspace", "Multi-Modal Input", "Ultra-Fast", "Premium UI"],
    stats: { speed: "Ultra-Fast", modes: "Multi-Modal", quality: "Premium" }
  },
  {
    id: 5,
    title: "Project Forge – AI Project Generator",
    github: null,
    live: "https://aiprojecttool.lovable.app",
    desc: "AI-powered platform that generates production-ready software projects from simple prompts.",
    longDesc: "Instantly generates clean architecture, scalable structure, boilerplate code...",
    tags: ["AI", "React", "Automation", "Developer Tools"],
    icon: "⚡",
    img: "/src/assets/Ai website builder.jpg",
    color: "#22D3EE",
    featured: true,
    highlights: ["Production-Ready Projects", "Prompt-to-Code", "Clean Architecture"],
    stats: { projects: "100k+", satisfaction: "99.9%" }
  },
  {
    id: 7,
    title: "ArchMind – AI System Design Platform",
    live: "https://archmind-spark.lovable.app/",
    desc: "AI-powered system design platform for infinitely scalable architectures.",
    longDesc: "Real-time AI architecture generation, trade-off analysis, FAANG-grade patterns...",
    tags: ["System Design", "Architecture", "Scalability", "Engineering Tools"],
    icon: "🧠",
    img: "/src/assets/arc.jpeg",
    color: "#22D3EE",
    featured: true,
    highlights: ["AI Architecture Gen", "Trade-Off Analysis", "FAANG Patterns"],
    stats: { architectures: "50k+", uptime: "99%", latency: "<50ms" }
  },
  {
    id: 8,
    title: "TruthGuard AI – Fake News Detection",
    github: null,
    live: "https://bliss-gala-22285345.figma.site/",
    desc: "Advanced NLP + Deep Learning platform to detect fake news with high accuracy.",
    longDesc: "TF-IDF + LSTM/Bi-LSTM models, real-time analysis, explainable results...",
    tags: ["NLP", "LSTM", "Fake News Detection", "Machine Learning"],
    icon: "🛡️",
    img: "/src/assets/fake.jpeg",
    color: "#EC4899",
    featured: true,
    highlights: ["95% Accuracy", "Explainable AI", "Real-Time Analysis"],
    stats: { accuracy: "95%", articles: "1M+", responseTime: "<100ms" }
  },
  {
    id: 6,
    title: "VisionForge Studio",
    github: null,
    live: "https://cinematic-muse-studio.lovable.app/",
    desc: "Cinematic AI image generation platform with professional-grade visuals.",
    longDesc: "Advanced prompt engineering, image-to-image, fast generation...",
    tags: ["Image Generation", "Creative Tools", "Prompt Engineering"],
    icon: "🎨",
    img: "/src/assets/image.jpg",
    color: "#A855F7",
    featured: true,
    highlights: ["Cinematic Quality", "Image-to-Image", "Fast Generation"],
    stats: { creations: "50k+", creators: "4.9★" }
  },
  {
    id: 10,
    title: "NeuralLearn – Adaptive Learning Platform",
    github: null,
    live: "https://neurallearn.lovable.app/",
    desc: "AI-powered adaptive learning platform with personalized education paths.",
    longDesc: "Real-time performance analysis, dynamic content adjustment...",
    tags: ["AI Education", "Adaptive Learning", "EdTech"],
    icon: "🧠",
    img: "/src/assets/neural.jpeg",
    color: "#0EA5E9",
    featured: true,
    highlights: ["Personalized Paths", "Real-Time Adaptation", "Gamified Learning"],
    stats: { subjects: "26+", rounds: "78+", questions: "2340+" }
  }
];

const gitProjects = [
  {
    id: 3,
    title: "ATS Resume Builder",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: null,
    desc: "Full-stack ATS-optimized resume builder with smart templates...",
    tags: ["React", "Node.js", "MongoDB", "JWT", "PDFKit"],
    icon: "📄",
    img: "https://drive.google.com/thumbnail?id=1ngApn37ig05YDXxCbA5mppeva_opwcUs&sz=w1200",
    color: "#8B5CF6",
    featured: true,
    highlights: ["Real-time ATS Scoring", "Keyword Extraction", "Multiple Templates"],
    stats: { resumes: "3.8k+", downloads: "12k+" }
  },
  {
    id: 4,
    title: "Heart Disease Prediction Platform",
    github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
    live: null,
    desc: "Machine learning–powered web application to predict heart disease risk...",
    tags: ["Python", "Machine Learning", "Flask", "Scikit-learn", "Pandas"],
    icon: "❤️",
    img: "https://lh3.googleusercontent.com/d/1Uy1JiAFMcAwMD0LZgm0J-bYiWuHpRzqq",
    color: "#EF4444",
    featured: true,
    highlights: ["ML-based Prediction", "Clinical Feature Engineering", "Fast Predictions"],
    stats: { accuracy: "87%", predictions: "1.2k+" }
  },
  {
    id: 5,
    title: "AI Chatbot Platform",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://bhagavanai.lovable.app",
    desc: "Advanced conversational AI platform with streaming responses...",
    tags: ["AI", "React", "Flask", "Gemini", "Streaming"],
    icon: "🤖",
    img: "https://drive.google.com/thumbnail?id=10gvXlgHCb__NAWBoLEbj6LglL9dT6Kew&sz=w1200",
    color: "#06B6D4",
    featured: true,
    highlights: ["Streaming Responses", "File Upload", "Multi-LLM Support"],
    stats: { chats: "45k+", messages: "320k+" }
  },
  {
    id: 6,
    title: "AI Career Path System",
    github: "https://github.com/bhagavan444/carrer-path-web-",
    live: null,
    desc: "Machine Learning powered career recommendation engine...",
    tags: ["ML", "Python", "Flask", "Scikit-learn", "NLP"],
    icon: "🎯",
    img: "https://drive.google.com/thumbnail?id=1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj&sz=w1200",
    color: "#F59E0B",
    highlights: ["Career Matching", "Skills Gap Analysis", "Learning Roadmaps"],
    stats: { users: "1.9k+", roadmaps: "7.2k+" }
  },
  {
    id: 7,
    title: "Fake News Detector",
    github: "https://github.com/bhagavan444/News-detector",
    live: null,
    desc: "High-accuracy NLP-based fake news detection system...",
    tags: ["NLP", "TensorFlow", "LSTM", "BERT", "Python"],
    icon: "📰",
    img: "https://drive.google.com/thumbnail?id=1i-qZCMDiOAy677h3y12es5xM_IL-_oOF&sz=w1200",
    color: "#10B981",
    highlights: ["92%+ Accuracy", "Explainable AI", "Real-time Analysis"],
    stats: { articles: "150k+", accuracy: "92.4%" }
  }
];

// ──────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ──────────────────────────────────────────────────────────────────────────────
export default function FuturisticPortfolio2050() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [filter, setFilter] = useState("All");

  // Mouse & Scroll Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const allTags = ["All", ...new Set([...aiProjects, ...gitProjects].flatMap(p => p.tags))];
  const filteredProjects = filter === "All" 
    ? [...aiProjects, ...gitProjects] 
    : [...aiProjects, ...gitProjects].filter(p => p.tags.includes(filter));

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0015 0%, #120025 50%, #0a0020 100%)',
      color: '#e0e7ff',
      position: 'relative',
      overflowX: 'hidden',
      fontFamily: '"Inter", system-ui, -apple-system, sans-serif'
    }}>
      {/* ─── GLOBAL STYLES & ANIMATIONS ──────────────────────────────────────── */}
      <style>{`
        @keyframes holographicFlow {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatGentle {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-18px) scale(1.03); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 12px currentColor); }
          50%      { filter: drop-shadow(0 0 32px currentColor); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-150%) skewX(-25deg); }
          100% { transform: translateX(250%) skewX(-25deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
      `}</style>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '4px', zIndex: 9999,
        background: 'rgba(255,255,255,0.06)'
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #ec4899, #f59e0b)',
          transition: 'width 0.2s ease-out',
          boxShadow: '0 0 20px rgba(124,58,237,0.9)'
        }} />
      </div>

      {/* Subtle Cursor Glow */}
      <div style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle at center, rgba(124,58,237,0.18) 0%, transparent 65%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        left: mousePosition.x,
        top: mousePosition.y,
        transition: 'all 0.45s ease-out',
        zIndex: 2,
        filter: 'blur(80px)',
        opacity: 0.7
      }} />

      {/* ─── MAIN CONTENT ────────────────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1800px',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 4rem)'
      }}>
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
          <div style={{
            fontSize: 'clamp(6rem, 18vw, 12rem)',
            animation: 'floatGentle 12s ease-in-out infinite',
            marginBottom: '2rem'
          }}>
            🌌
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '1.2rem 3rem',
            background: 'rgba(124,58,237,0.15)',
            backdropFilter: 'blur(30px)',
            border: '2.5px solid rgba(124,58,237,0.4)',
            borderRadius: '999px',
            marginBottom: '3rem',
            boxShadow: '0 15px 60px rgba(124,58,237,0.45)'
          }}>
            <Terminal size={32} style={{ color: '#7c3aed', animation: 'glowPulse 4s infinite' }} />
            <span style={{
              fontWeight: '900',
              letterSpacing: '0.2em',
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              background: 'linear-gradient(90deg, #7c3aed, #06b6d4, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              2050 — FUTURE PORTFOLIO
            </span>
            <Sparkles size={32} style={{ color: '#06b6d4', animation: 'rotate3D 12s linear infinite' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(4rem, 14vw, 9rem)',
            fontWeight: '900',
            lineHeight: '1.05',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #ffffff, #7c3aed, #06b6d4, #ec4899)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'holographicFlow 10s ease infinite'
          }}>
            Project Showcase
          </h1>

          <p style={{
            fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
            color: '#c7d2fe',
            maxWidth: '900px',
            margin: '0 auto 5rem',
            lineHeight: '1.7'
          }}>
            Advanced <strong style={{ color: '#7c3aed' }}>MERN</strong> • <strong style={{ color: '#06b6d4' }}>AI</strong> • <strong style={{ color: '#ec4899' }}>Machine Learning</strong> Projects
          </p>

          {/* Filter Tags */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '8rem'
          }}>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  padding: '0.9rem 2rem',
                  background: filter === tag ? 'linear-gradient(135deg, #7c3aed, #06b6d4, #ec4899)' : 'rgba(255,255,255,0.08)',
                  border: filter === tag ? 'none' : '2.5px solid rgba(124,58,237,0.4)',
                  borderRadius: '999px',
                  color: filter === tag ? '#fff' : '#c7d2fe',
                  fontWeight: '800',
                  fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: filter === tag ? '0 15px 40px rgba(124,58,237,0.7)' : 'none'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* ─── PROJECT GRID ─ 2 CARDS PER ROW (Square Cards) ────────────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', // 2 columns on larger screens
          gap: 'clamp(2.5rem, 5vw, 4rem)',
          marginBottom: '12rem'
        }}>
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(5rem, 12vw, 9rem) clamp(2rem, 8vw, 6rem)',
          background: 'rgba(124,58,237,0.12)',
          backdropFilter: 'blur(40px)',
          borderRadius: '3.5rem',
          border: '3px solid rgba(124,58,237,0.3)',
          marginBottom: '8rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(3.5rem, 10vw, 6rem)',
            fontWeight: '900',
            marginBottom: '2.5rem',
            background: 'linear-gradient(135deg, #7c3aed, #06b6d4, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Build Tomorrow?
          </h2>

          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{
              padding: '1.4rem 3rem',
              background: 'rgba(124,58,237,0.2)',
              border: '2.5px solid #7c3aed',
              borderRadius: '999px',
              color: '#7c3aed',
              fontWeight: '900',
              fontSize: '1.3rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.4s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 25px 60px rgba(124,58,237,0.6)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Github size={32} />
              Explore GitHub
            </a>

            <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
              padding: '1.4rem 3rem',
              background: 'linear-gradient(135deg, #06b6d4, #ec4899)',
              border: 'none',
              borderRadius: '999px',
              color: '#000',
              fontWeight: '900',
              fontSize: '1.3rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 25px 70px rgba(6,182,212,0.7)',
              transition: 'all 0.4s'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
              <Mail size={32} />
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>

      {/* ─── PROJECT DETAIL MODAL ────────────────────────────────────────────── */}
      {activeProject && (
        <div
          onClick={() => setActiveProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(60px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 5vw, 4rem)'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'rgba(15,10,35,0.98)',
              backdropFilter: 'blur(60px)',
              borderRadius: '3rem',
              maxWidth: '1400px',
              width: '100%',
              maxHeight: '94vh',
              overflowY: 'auto',
              border: `4px solid ${activeProject.color}`,
              boxShadow: `0 80px 140px ${activeProject.color}80`,
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            {/* Modal Header */}
            <div style={{
              position: 'sticky',
              top: 0,
              background: 'rgba(15,10,35,0.98)',
              backdropFilter: 'blur(50px)',
              padding: 'clamp(2rem, 6vw, 3.5rem)',
              borderBottom: `3px solid ${activeProject.color}60`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <span style={{ fontSize: 'clamp(4rem, 12vw, 7rem)' }}>{activeProject.icon}</span>
                <div>
                  <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3.8rem)', fontWeight: '900' }}>
                    {activeProject.title}
                  </h2>
                  <p style={{ color: activeProject.color, fontWeight: '800', fontSize: '1.3rem' }}>
                    Advanced AI / Full-Stack Project
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ef4444',
                  cursor: 'pointer',
                  transition: 'all 0.4s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'rotate(90deg) scale(1.4)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0) scale(1)'}
              >
                <X size={48} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: 'clamp(3rem, 8vw, 5rem)' }}>
              <img
                src={activeProject.img}
                alt={activeProject.title}
                style={{
                  width: '100%',
                  borderRadius: '2.5rem',
                  marginBottom: '4rem',
                  boxShadow: `0 50px 100px ${activeProject.color}60`
                }}
              />

              <p style={{
                fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)',
                lineHeight: '1.9',
                color: '#cbd5e1',
                marginBottom: '4rem'
              }}>
                {activeProject.longDesc || activeProject.desc}
              </p>

              {/* Stats */}
              {activeProject.stats && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '2rem',
                  marginBottom: '4rem'
                }}>
                  {Object.entries(activeProject.stats).map(([key, value], i) => (
                    <div key={i} style={{
                      padding: '2rem',
                      background: 'rgba(255,255,255,0.07)',
                      borderRadius: '2rem',
                      border: `2.5px solid ${activeProject.color}50`,
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: 'clamp(2.2rem, 6vw, 3.5rem)',
                        fontWeight: '900',
                        color: activeProject.color
                      }}>
                        {value}
                      </div>
                      <div style={{
                        fontSize: '1.1rem',
                        color: '#94a3b8',
                        fontWeight: '600',
                        marginTop: '0.5rem',
                        textTransform: 'capitalize'
                      }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <h3 style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                fontWeight: '900',
                color: activeProject.color,
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}>
                <Sparkles size={36} />
                Key Features
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.8rem',
                marginBottom: '5rem'
              }}>
                {activeProject.highlights.map((highlight, i) => (
                  <div key={i} style={{
                    padding: '1.8rem',
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '1.8rem',
                    border: `2px solid ${activeProject.color}50`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem'
                  }}>
                    <CheckCircle2 size={28} style={{ color: activeProject.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <h3 style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                fontWeight: '900',
                color: activeProject.color,
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}>
                <Layers size={36} />
                Technology Stack
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '5rem' }}>
                {activeProject.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '1rem 2rem',
                    background: `${activeProject.color}30`,
                    border: `2.5px solid ${activeProject.color}70`,
                    borderRadius: '999px',
                    fontSize: '1.15rem',
                    fontWeight: '800',
                    color: '#e0e7ff'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" style={{
                    padding: '1.4rem 3rem',
                    background: 'rgba(124,58,237,0.2)',
                    border: '2.5px solid #7c3aed',
                    borderRadius: '999px',
                    color: '#7c3aed',
                    fontWeight: '900',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.4s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(124,58,237,0.6)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <Github size={32} />
                    View Source Code
                  </a>
                )}

                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noopener noreferrer" style={{
                    padding: '1.4rem 3rem',
                    background: `linear-gradient(135deg, ${activeProject.color}, #ffffff)`,
                    border: 'none',
                    borderRadius: '999px',
                    color: '#000',
                    fontWeight: '900',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    boxShadow: `0 25px 70px ${activeProject.color}80`,
                    transition: 'all 0.4s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 35px 90px ${activeProject.color}a0`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `0 25px 70px ${activeProject.color}80`;
                  }}>
                    <Rocket size={32} />
                    Launch Live Demo
                    <ExternalLink size={28} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── REUSABLE SQUARE PROJECT CARD ────────────────────────────────────────────
function ProjectCard({ project, idx, hoveredCard, setHoveredCard, setActiveProject }) {
  return (
    <div
      onMouseEnter={() => setHoveredCard(project.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => setActiveProject(project)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        animation: `fadeInUp 0.9s ease-out ${idx * 0.12}s backwards`,
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {/* Glow on hover */}
      <div style={{
        position: 'absolute',
        inset: '-60px',
        background: `radial-gradient(circle, ${project.color}45, transparent 70%)`,
        opacity: hoveredCard === project.id ? 0.9 : 0,
        transition: 'opacity 0.7s ease',
        filter: 'blur(90px)',
        zIndex: -1
      }} />

      <div style={{
        background: 'rgba(20,15,45,0.94)',
        backdropFilter: 'blur(40px)',
        borderRadius: '2.5rem',
        overflow: 'hidden',
        border: `2.5px solid ${hoveredCard === project.id ? project.color : 'rgba(255,255,255,0.15)'}`,
        boxShadow: hoveredCard === project.id 
          ? `0 60px 120px ${project.color}60`
          : '0 20px 60px rgba(0,0,0,0.7)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hoveredCard === project.id ? 'translateY(-20px) scale(1.03)' : 'translateY(0) scale(1)',
        aspectRatio: '1 / 1.15', // Slightly taller than square for better look
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Featured Badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            padding: '0.6rem 1.4rem',
            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            borderRadius: '999px',
            fontSize: '0.95rem',
            fontWeight: '900',
            color: '#000',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 12px 35px rgba(251,191,36,0.8)'
          }}>
            <Star size={16} fill="#000" />
            FEATURED
          </div>
        )}

        {/* Image - Square-ish */}
        <div style={{ 
          position: 'relative', 
          height: '42%', 
          minHeight: '180px',
          overflow: 'hidden'
        }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.9s cubic-bezier(0.34, 1.56, 0.64, 1)',
              transform: hoveredCard === project.id ? 'scale(1.18)' : 'scale(1.08)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(20,15,45,0.9) 0%, transparent 70%)'
          }} />

          {hoveredCard === project.id && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
              animation: 'shimmer 3s infinite'
            }} />
          )}
        </div>

        {/* Content */}
        <div style={{ 
          padding: 'clamp(1.5rem, 4vw, 2.2rem)', 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.2rem' }}>
            <span style={{ fontSize: 'clamp(2.8rem, 8vw, 4.5rem)' }}>{project.icon}</span>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: '900',
              lineHeight: '1.2'
            }}>
              {project.title}
            </h3>
          </div>

          <p style={{
            color: '#c7d2fe',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            flex: 1
          }}>
            {project.desc}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.5rem' }}>
            {project.tags.slice(0, 4).map(tag => (  // Show max 4 tags to save space
              <span key={tag} style={{
                padding: '0.5rem 1.2rem',
                background: `${project.color}30`,
                border: `2px solid ${project.color}60`,
                borderRadius: '999px',
                fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                fontWeight: '700'
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Quick Highlights */}
          <div style={{ marginBottom: '1.8rem' }}>
            {project.highlights.slice(0, 2).map((highlight, i) => (  // Show only 2 for compact look
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '0.8rem',
                fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                color: '#e0e7ff'
              }}>
                <CheckCircle2 size={18} style={{ color: project.color }} />
                {highlight}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: 'auto' }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  flex: 1,
                  minWidth: '140px',
                  padding: '0.9rem 1.5rem',
                  background: 'rgba(124,58,237,0.2)',
                  border: '2px solid rgba(124,58,237,0.7)',
                  borderRadius: '999px',
                  color: '#7c3aed',
                  fontWeight: '800',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.7rem',
                  transition: 'all 0.4s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(124,58,237,0.35)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(124,58,237,0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Github size={20} />
                View Code
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
                  minWidth: '140px',
                  padding: '0.9rem 1.5rem',
                  background: `linear-gradient(135deg, ${project.color}, #ffffff)`,
                  border: 'none',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: '900',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.7rem',
                  boxShadow: `0 12px 35px ${project.color}70`,
                  transition: 'all 0.4s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${project.color}90`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 12px 35px ${project.color}70`;
                }}
              >
                <Rocket size={20} />
                Live Demo
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}