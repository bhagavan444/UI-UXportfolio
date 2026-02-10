import React, { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Github, Star, X, CheckCircle2, Terminal, Sparkles,
  Code, Zap, Eye, TrendingUp, Heart, Bookmark, Share2, ArrowRight,
  ChevronDown, Search, Filter, Grid, List, Award, Trophy, Target,
  Lightbulb, AlertCircle, Clock, Users, Activity, BarChart3, Rocket,
  Layers, Brain, Cpu, Play, Download, Copy, Check, GitBranch, Globe
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ATS Resume Builder Platform",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: "https://resumebuilder-demo.vercel.app",
    desc: "AI-powered platform that helps job seekers build ATS-optimized resumes and dramatically improve shortlisting chances.",
    longDesc: "Developed a complete full-stack ATS Resume Builder that uses AI to analyze job descriptions, suggest keywords, optimize formatting, and generate ATS-friendly PDFs in real-time.",
    problem: "Many qualified candidates get rejected because their resumes fail Applicant Tracking System (ATS) filters.",
    solution: "Built an intelligent resume builder that parses job descriptions, suggests missing keywords, and generates perfectly formatted ATS-compatible resumes.",
    role: "Full ownership — Designed UI/UX, developed complete frontend & backend, implemented ATS scoring engine.",
    tech: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "MongoDB", icon: "🍃", color: "#47A248" },
      { name: "JWT", icon: "🔐", color: "#000000" },
      { name: "AI", icon: "🤖", color: "#412991" },
      { name: "PDF.js", icon: "📄", color: "#EC1C24" }
    ],
    impact: ["2× improved shortlisting", "3k+ resumes built", "90%+ ATS score"],
    stats: { score: "90%+", users: "3k+", boost: "2×" },
    tags: ["ATS", "AI", "Full-Stack", "Career"],
    category: "AI",
    icon: "📄",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop",
    color: "#00f5ff",
    featured: true,
    views: "12.5k",
    likes: 342,
    stars: 89,
    year: "2024",
    duration: "3 months",
    teamSize: "Solo",
    metrics: [
      { label: "User Retention", value: "85%", trend: "+12%" },
      { label: "Avg Session", value: "8.5min", trend: "+25%" },
      { label: "Success Rate", value: "92%", trend: "+18%" }
    ]
  },
  {
    id: 2,
    title: "AI Chat Workspace",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://ai-workspace-demo.vercel.app",
    desc: "Enterprise-grade AI workspace for research, automation, content generation, and multi-modal interactions.",
    longDesc: "A powerful all-in-one AI platform supporting text, images, PDFs, code generation, and advanced prompt engineering.",
    problem: "Professionals juggle multiple disconnected AI tools, losing context and productivity.",
    solution: "Created a unified multi-modal AI workspace with ultra-fast responses, memory context, and premium UI/UX.",
    role: "Led product vision, UI/UX design, frontend architecture, and performance optimization.",
    tech: [
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "TailwindCSS", icon: "🎨", color: "#06B6D4" },
      { name: "OpenAI", icon: "🤖", color: "#412991" },
      { name: "Vercel", icon: "▲", color: "#000000" },
      { name: "Redis", icon: "🔴", color: "#DC382D" }
    ],
    impact: ["3× faster workflows", "Enterprise-grade UX", "Multi-modal support"],
    stats: { speed: "Ultra", modes: "Multi", quality: "Enterprise" },
    tags: ["AI Platform", "Productivity", "Enterprise"],
    category: "AI",
    icon: "⚡",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    color: "#a855f7",
    featured: true,
    views: "18.3k",
    likes: 521,
    stars: 134,
    year: "2024",
    duration: "4 months",
    teamSize: "Solo",
    metrics: [
      { label: "Response Time", value: "<500ms", trend: "-40%" },
      { label: "Accuracy", value: "96%", trend: "+8%" },
      { label: "Uptime", value: "99.9%", trend: "Stable" }
    ]
  },
  {
    id: 3,
    title: "Career AI Recommender",
    github: "https://github.com/bhagavan444/Career-Path-Recommendation",
    live: "https://career-ai-demo.vercel.app",
    desc: "AI-powered career guidance platform that recommends personalized career paths based on skills and interests.",
    longDesc: "Intelligent recommendation system using Machine Learning that analyzes student profiles and suggests optimal career trajectories.",
    problem: "Students lack personalized career direction.",
    solution: "Smart ML-based career recommendations with skill gap analysis.",
    role: "Built full ML pipeline, backend, and frontend.",
    tech: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Flask", icon: "🔥", color: "#000000" },
      { name: "Scikit-learn", icon: "📊", color: "#F7931E" },
      { name: "Pandas", icon: "🐼", color: "#150458" },
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "PostgreSQL", icon: "🐘", color: "#4169E1" }
    ],
    impact: ["92% accuracy", "50+ careers", "Structured paths"],
    stats: { accuracy: "92%", careers: "50+", time: "<200ms" },
    tags: ["AI", "ML", "EdTech"],
    category: "Machine Learning",
    icon: "🧭",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    color: "#10b981",
    featured: true,
    views: "18.4k",
    likes: 445,
    stars: 123,
    year: "2024",
    duration: "2 months",
    teamSize: "Solo",
    metrics: [
      { label: "User Satisfaction", value: "4.8/5", trend: "+0.3" },
      { label: "Recommendations", value: "15k+", trend: "+200%" },
      { label: "Match Rate", value: "89%", trend: "+15%" }
    ]
  },
  {
    id: 4,
    title: "Heart Disease Predictor",
    github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
    live: "https://heart-predictor-demo.vercel.app",
    desc: "Machine learning web app that predicts heart disease risk using clinical data with 87% accuracy.",
    longDesc: "Complete ML pipeline and Flask web app that takes patient parameters and predicts heart disease probability.",
    problem: "Early detection of heart disease is critical but often delayed.",
    solution: "User-friendly web platform powered by ML models trained on clinical datasets.",
    role: "End-to-end development: data preprocessing, model training, Flask backend, and frontend.",
    tech: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Scikit-learn", icon: "📊", color: "#F7931E" },
      { name: "Flask", icon: "🔥", color: "#000000" },
      { name: "Pandas", icon: "🐼", color: "#150458" },
      { name: "NumPy", icon: "🔢", color: "#013243" },
      { name: "Bootstrap", icon: "🅱️", color: "#7952B3" }
    ],
    impact: ["87% accuracy", "1.2k+ predictions", "Fast assessment"],
    stats: { accuracy: "87%", predictions: "1.2k+", response: "Instant" },
    tags: ["ML", "Healthcare", "Flask"],
    category: "Healthcare",
    icon: "❤️",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    color: "#ff6b35",
    featured: false,
    views: "9.4k",
    likes: 234,
    stars: 67,
    year: "2023",
    duration: "6 weeks",
    teamSize: "Solo",
    metrics: [
      { label: "Precision", value: "85%", trend: "+5%" },
      { label: "Recall", value: "89%", trend: "+7%" },
      { label: "F1 Score", value: "87%", trend: "+6%" }
    ]
  },
  {
    id: 5,
    title: "Fake News Detector",
    github: "https://github.com/bhagavan444/News-detector",
    live: "https://news-detector-demo.vercel.app",
    desc: "Advanced NLP & Deep Learning system for real-time fake news detection with explainable AI outputs.",
    longDesc: "End-to-end ML pipeline using TF-IDF + LSTM that classifies news articles with 95% accuracy and provides reasoning.",
    problem: "Fake news spreads misinformation and affects public decision-making.",
    solution: "High-accuracy NLP model with explainable outputs deployed as real-time detection system.",
    role: "Complete ML pipeline: data collection, preprocessing, feature engineering, model training, deployment.",
    tech: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
      { name: "Keras", icon: "🔥", color: "#D00000" },
      { name: "NLTK", icon: "📝", color: "#3776AB" },
      { name: "Flask", icon: "🔥", color: "#000000" },
      { name: "Docker", icon: "🐋", color: "#2496ED" }
    ],
    impact: ["95% accuracy", "1M+ articles processed", "Transparent predictions"],
    stats: { accuracy: "95%", articles: "1M+", time: "<100ms" },
    tags: ["NLP", "ML", "AI Safety", "Deep Learning"],
    category: "Machine Learning",
    icon: "🛡️",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
    color: "#8b5cf6",
    featured: true,
    views: "22.8k",
    likes: 678,
    stars: 189,
    year: "2024",
    duration: "5 months",
    teamSize: "Solo",
    metrics: [
      { label: "Detection Speed", value: "95ms", trend: "-35%" },
      { label: "False Positives", value: "3.2%", trend: "-45%" },
      { label: "Explainability", value: "98%", trend: "+12%" }
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [sort, setSort] = useState('featured');
  const [liked, setLiked] = useState(new Set());
  const [bookmarked, setBookmarked] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectRefs = useRef([]);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  const categories = ['all', ...new Set(projects.map(p => p.category))];

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated Particles Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      color: `rgba(${Math.random() > 0.5 ? '102, 126, 234' : '168, 85, 247'}, ${Math.random() * 0.3 + 0.2})`
    }));
    particlesRef.current = particles;

    let frame;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Draw connections
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(102, 126, 234, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      
      frame = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleProjects(prev => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(100, ((window.innerHeight - top) / (height + window.innerHeight)) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = projects
    .filter(p => filter === 'all' || p.category === filter)
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => {
      if (sort === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (sort === 'views') return parseFloat(b.views) - parseFloat(a.views);
      if (sort === 'likes') return b.likes - a.likes;
      return 0;
    });

  const handleLike = (id, e) => {
    e?.stopPropagation();
    setLiked(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const handleBookmark = (id, e) => {
    e?.stopPropagation();
    setBookmarked(prev => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const copyProjectLink = (project, e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(project.live || project.github);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@500;600;700;800;900&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; background: #000; color: #fff; overflow-x: hidden; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInScale { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes gradient { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 20px currentColor; } 50% { box-shadow: 0 0 40px currentColor; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @keyframes glow { 0%, 100% { text-shadow: 0 0 10px currentColor; } 50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes borderGlow { 0%, 100% { border-color: rgba(102, 126, 234, 0.5); } 50% { border-color: rgba(168, 85, 247, 0.8); } }
        @keyframes ripple { 0% { transform: scale(0); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
        @keyframes floatSlow { 0%, 100% { transform: translate(0, 0) rotate(0deg); } 33% { transform: translate(30px, -30px) rotate(120deg); } 66% { transform: translate(-20px, 20px) rotate(240deg); } }
        @keyframes floatMedium { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-40px, -40px); } }
        @keyframes orbitSlow { 0% { transform: rotate(0deg) translateX(100px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); } }
        @keyframes orbitFast { 0% { transform: rotate(0deg) translateX(150px) rotate(0deg); } 100% { transform: rotate(-360deg) translateX(150px) rotate(360deg); } }
        @keyframes scaleBreath { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.2); opacity: 0.5; } }
        @keyframes morphBlob { 0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; } }

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
        }
        
        .glass-btn {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-btn:hover { background: rgba(255, 255, 255, 0.1); transform: translateY(-2px); }
        
        .card { 
          position: relative; 
          overflow: hidden; 
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .card:hover { 
          transform: translateY(-8px) scale(1.01); 
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3); 
        }
        .card img { transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .card:hover img { transform: scale(1.1); }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 4s ease infinite;
        }
        
        .shimmer { position: relative; overflow: hidden; }
        .shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: shimmer 2.5s infinite;
        }

        .tech-badge {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tech-badge:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .metric-card {
          position: relative;
          overflow: hidden;
        }
        .metric-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          transition: left 0.5s;
        }
        .metric-card:hover::before {
          left: 100%;
        }

        .tab-btn {
          position: relative;
          padding: 1rem 2rem;
          background: transparent;
          border: none;
          color: #a0aec0;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tab-btn.active { color: #667eea; }
        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transform: scaleX(0);
          transition: transform 0.3s;
        }
        .tab-btn.active::after { transform: scaleX(1); }

        .floating { animation: float 3s ease-in-out infinite; }
        .glow-border { animation: borderGlow 3s ease-in-out infinite; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #667eea, #764ba2); border-radius: 10px; }

        @media (max-width: 768px) {
          .grid-responsive { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div ref={sectionRef} style={{ minHeight: '100vh', background: 'radial-gradient(ellipse at top, #0f0f23 0%, #000 100%)', position: 'relative', padding: '4rem 2rem', overflow: 'hidden' }}>
        {/* Animated Particles Canvas */}
        <canvas 
          ref={canvasRef} 
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            pointerEvents: 'none', 
            zIndex: 1,
            opacity: 0.6
          }} 
        />

        {/* ========== CIRCLES ========== */}
        
        {/* Large Gradient Circle Orbs */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '5%', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3), transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(80px)', 
          animation: 'scaleBreath 8s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          right: '10%', 
          width: '700px', 
          height: '700px', 
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25), transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(90px)', 
          animation: 'scaleBreath 10s ease-in-out infinite reverse',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '5%', 
          left: '40%', 
          width: '550px', 
          height: '550px', 
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.2), transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(75px)', 
          animation: 'scaleBreath 12s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '30%', 
          left: '50%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.18), transparent 70%)', 
          borderRadius: '50%', 
          filter: 'blur(70px)', 
          animation: 'scaleBreath 9s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        {/* Rotating Circle Rings - Large */}
        <div style={{ 
          position: 'absolute', 
          top: '15%', 
          right: '15%', 
          width: '300px', 
          height: '300px', 
          border: '3px solid rgba(102, 126, 234, 0.3)', 
          borderRadius: '50%', 
          animation: 'rotate 25s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            width: '220px', 
            height: '220px', 
            border: '2px solid rgba(168, 85, 247, 0.25)', 
            borderRadius: '50%', 
            transform: 'translate(-50%, -50%)',
            animation: 'rotate 18s linear infinite reverse'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              width: '140px', 
              height: '140px', 
              border: '2px solid rgba(0, 245, 255, 0.2)', 
              borderRadius: '50%', 
              transform: 'translate(-50%, -50%)',
              animation: 'rotate 12s linear infinite'
            }} />
          </div>
        </div>

        <div style={{ 
          position: 'absolute', 
          bottom: '20%', 
          left: '10%', 
          width: '280px', 
          height: '280px', 
          border: '3px solid rgba(168, 85, 247, 0.25)', 
          borderRadius: '50%', 
          animation: 'rotate 30s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            width: '200px', 
            height: '200px', 
            border: '2px solid rgba(0, 245, 255, 0.2)', 
            borderRadius: '50%', 
            transform: 'translate(-50%, -50%)',
            animation: 'rotate 20s linear infinite'
          }}>
            <div style={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              width: '120px', 
              height: '120px', 
              border: '2px solid rgba(102, 126, 234, 0.2)', 
              borderRadius: '50%', 
              transform: 'translate(-50%, -50%)',
              animation: 'rotate 15s linear infinite reverse'
            }} />
          </div>
        </div>

        {/* Medium Floating Circles */}
        <div style={{ 
          position: 'absolute', 
          top: '40%', 
          right: '25%', 
          width: '180px', 
          height: '180px', 
          border: '2px solid rgba(236, 72, 153, 0.25)', 
          borderRadius: '50%', 
          animation: 'floatSlow 14s ease-in-out infinite, rotate 22s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '35%', 
          right: '8%', 
          width: '150px', 
          height: '150px', 
          border: '2px solid rgba(102, 126, 234, 0.3)', 
          borderRadius: '50%', 
          animation: 'floatMedium 12s ease-in-out infinite reverse, rotate 20s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '25%', 
          left: '8%', 
          width: '160px', 
          height: '160px', 
          border: '2px solid rgba(0, 245, 255, 0.25)', 
          borderRadius: '50%', 
          animation: 'floatSlow 16s ease-in-out infinite, rotate 28s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Small Glowing Circles */}
        <div style={{ 
          position: 'absolute', 
          top: '18%', 
          left: '30%', 
          width: '80px', 
          height: '80px', 
          border: '2px solid rgba(168, 85, 247, 0.4)', 
          borderRadius: '50%', 
          boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
          animation: 'floatMedium 10s ease-in-out infinite, pulse 4s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '28%', 
          left: '35%', 
          width: '70px', 
          height: '70px', 
          border: '2px solid rgba(102, 126, 234, 0.4)', 
          borderRadius: '50%', 
          boxShadow: '0 0 30px rgba(102, 126, 234, 0.3)',
          animation: 'floatSlow 11s ease-in-out infinite reverse, pulse 3.5s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '55%', 
          right: '40%', 
          width: '90px', 
          height: '90px', 
          border: '2px solid rgba(0, 245, 255, 0.4)', 
          borderRadius: '50%', 
          boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
          animation: 'floatMedium 13s ease-in-out infinite, pulse 4.5s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Tiny Orbiting Circles */}
        <div style={{ 
          position: 'absolute', 
          top: '22%', 
          left: '25%', 
          width: '20px', 
          height: '20px', 
          background: 'rgba(102, 126, 234, 0.7)', 
          borderRadius: '50%', 
          boxShadow: '0 0 25px rgba(102, 126, 234, 0.9)',
          animation: 'orbitSlow 30s linear infinite',
          pointerEvents: 'none',
          zIndex: 4
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '32%', 
          right: '22%', 
          width: '18px', 
          height: '18px', 
          background: 'rgba(168, 85, 247, 0.7)', 
          borderRadius: '50%', 
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.9)',
          animation: 'orbitFast 20s linear infinite',
          pointerEvents: 'none',
          zIndex: 4
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '48%', 
          right: '18%', 
          width: '15px', 
          height: '15px', 
          background: 'rgba(0, 245, 255, 0.7)', 
          borderRadius: '50%', 
          boxShadow: '0 0 25px rgba(0, 245, 255, 0.9)',
          animation: 'orbitSlow 25s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 4
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '42%', 
          left: '32%', 
          width: '17px', 
          height: '17px', 
          background: 'rgba(236, 72, 153, 0.7)', 
          borderRadius: '50%', 
          boxShadow: '0 0 25px rgba(236, 72, 153, 0.9)',
          animation: 'orbitFast 22s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 4
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '62%', 
          left: '48%', 
          width: '16px', 
          height: '16px', 
          background: 'rgba(102, 126, 234, 0.7)', 
          borderRadius: '50%', 
          boxShadow: '0 0 25px rgba(102, 126, 234, 0.9)',
          animation: 'orbitSlow 28s linear infinite',
          pointerEvents: 'none',
          zIndex: 4
        }} />

        {/* ========== RECTANGLES ========== */}

        {/* Large Rotating Rectangles */}
        <div style={{ 
          position: 'absolute', 
          top: '12%', 
          left: '65%', 
          width: '250px', 
          height: '180px', 
          border: '3px solid rgba(102, 126, 234, 0.25)', 
          borderRadius: '30px',
          animation: 'rotate 35s linear infinite, floatSlow 18s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '18%', 
          right: '5%', 
          width: '220px', 
          height: '200px', 
          border: '3px solid rgba(168, 85, 247, 0.25)', 
          borderRadius: '25px',
          animation: 'rotate 40s linear infinite reverse, floatMedium 16s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '45%', 
          left: '5%', 
          width: '200px', 
          height: '160px', 
          border: '3px solid rgba(0, 245, 255, 0.25)', 
          borderRadius: '28px',
          animation: 'rotate 32s linear infinite, floatSlow 15s ease-in-out infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Medium Floating Rectangles */}
        <div style={{ 
          position: 'absolute', 
          top: '35%', 
          right: '35%', 
          width: '180px', 
          height: '140px', 
          border: '2px solid rgba(236, 72, 153, 0.3)', 
          borderRadius: '22px',
          animation: 'floatMedium 14s ease-in-out infinite, rotate 28s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '40%', 
          left: '15%', 
          width: '170px', 
          height: '130px', 
          border: '2px solid rgba(102, 126, 234, 0.3)', 
          borderRadius: '20px',
          animation: 'floatSlow 16s ease-in-out infinite reverse, rotate 30s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '58%', 
          right: '12%', 
          width: '160px', 
          height: '120px', 
          border: '2px solid rgba(168, 85, 247, 0.3)', 
          borderRadius: '24px',
          animation: 'floatMedium 13s ease-in-out infinite, rotate 26s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Small Squares (Special Rectangles) */}
        <div style={{ 
          position: 'absolute', 
          top: '28%', 
          left: '42%', 
          width: '120px', 
          height: '120px', 
          border: '2px solid rgba(0, 245, 255, 0.35)', 
          borderRadius: '18px',
          animation: 'floatSlow 12s ease-in-out infinite, rotate 24s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '25%', 
          right: '45%', 
          width: '110px', 
          height: '110px', 
          border: '2px solid rgba(236, 72, 153, 0.35)', 
          borderRadius: '16px',
          animation: 'floatMedium 11s ease-in-out infinite reverse, rotate 22s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          top: '68%', 
          left: '25%', 
          width: '100px', 
          height: '100px', 
          border: '2px solid rgba(102, 126, 234, 0.35)', 
          borderRadius: '20px',
          animation: 'floatSlow 13s ease-in-out infinite, rotate 20s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Tall Rectangles */}
        <div style={{ 
          position: 'absolute', 
          top: '15%', 
          left: '78%', 
          width: '140px', 
          height: '200px', 
          border: '2px solid rgba(168, 85, 247, 0.25)', 
          borderRadius: '26px',
          animation: 'floatMedium 15s ease-in-out infinite, rotate 27s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '12%', 
          left: '52%', 
          width: '130px', 
          height: '190px', 
          border: '2px solid rgba(0, 245, 255, 0.25)', 
          borderRadius: '24px',
          animation: 'floatSlow 17s ease-in-out infinite reverse, rotate 29s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Wide Rectangles */}
        <div style={{ 
          position: 'absolute', 
          top: '72%', 
          right: '28%', 
          width: '200px', 
          height: '100px', 
          border: '2px solid rgba(102, 126, 234, 0.3)', 
          borderRadius: '20px',
          animation: 'floatMedium 14s ease-in-out infinite, rotate 25s linear infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '52%', 
          left: '68%', 
          width: '180px', 
          height: '90px', 
          border: '2px solid rgba(236, 72, 153, 0.3)', 
          borderRadius: '18px',
          animation: 'floatSlow 16s ease-in-out infinite reverse, rotate 31s linear infinite reverse',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        {/* Glowing Rectangles */}
        <div style={{ 
          position: 'absolute', 
          top: '38%', 
          left: '88%', 
          width: '90px', 
          height: '90px', 
          border: '2px solid rgba(168, 85, 247, 0.5)', 
          borderRadius: '15px',
          boxShadow: '0 0 40px rgba(168, 85, 247, 0.4)',
          animation: 'floatMedium 10s ease-in-out infinite, rotate 18s linear infinite, pulse 5s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ 
          position: 'absolute', 
          bottom: '48%', 
          right: '82%', 
          width: '80px', 
          height: '80px', 
          border: '2px solid rgba(0, 245, 255, 0.5)', 
          borderRadius: '14px',
          boxShadow: '0 0 40px rgba(0, 245, 255, 0.4)',
          animation: 'floatSlow 11s ease-in-out infinite reverse, rotate 19s linear infinite reverse, pulse 4.5s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 3
        }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem', animation: 'fadeInUp 0.8s ease-out' }}>
            <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 2rem', borderRadius: '100px', marginBottom: '1.5rem' }}>
              <Sparkles size={20} style={{ color: '#667eea' }} />
              <span style={{ color: '#667eea', fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>Featured Work</span>
            </div>
            <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif", animation: 'glow 2s infinite' }}>
              TECH PROJECTS
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', color: '#a0aec0', maxWidth: '700px', margin: '0 auto' }}>
              Production-ready solutions built with cutting-edge technology
            </p>
          </div>

          {/* Search & Filters */}
          <div style={{ marginBottom: '3rem', animation: 'fadeInUp 0.8s ease-out 0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto 2rem' }}>
              <Search size={20} style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: '#667eea', pointerEvents: 'none' }} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
                className="glass" 
                style={{ width: '100%', padding: '1.25rem 1.5rem 1.25rem 4rem', fontSize: '1rem', color: '#fff', border: '2px solid rgba(102, 126, 234, 0.3)', outline: 'none', fontFamily: "'JetBrains Mono', monospace" }} 
              />
              {search && <button onClick={() => setSearch('')} style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#667eea', cursor: 'pointer' }}><X size={18} /></button>}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1.5rem' }}>
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)} 
                  className="glass-btn" 
                  style={{ padding: '0.75rem 1.75rem', borderRadius: '100px', background: filter === cat ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'transparent', color: filter === cat ? '#fff' : '#a0aec0', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', textTransform: 'capitalize', border: filter === cat ? 'none' : '1px solid rgba(255, 255, 255, 0.1)' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { key: 'featured', label: 'Featured', icon: Star },
                { key: 'views', label: 'Most Viewed', icon: TrendingUp },
                { key: 'likes', label: 'Most Liked', icon: Heart }
              ].map(s => {
                const Icon = s.icon;
                return (
                  <button 
                    key={s.key} 
                    onClick={() => setSort(s.key)} 
                    className="glass-btn" 
                    style={{ padding: '0.75rem 1.5rem', borderRadius: '100px', background: sort === s.key ? 'rgba(102, 126, 234, 0.2)' : 'transparent', color: sort === s.key ? '#667eea' : '#718096', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                  >
                    <Icon size={18} />
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
            {filtered.map((p, idx) => (
              <div 
                key={p.id} 
                ref={el => projectRefs.current[idx] = el}
                className={`glass card ${visibleProjects.has(idx) ? '' : ''}`}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveProject(p)} 
                style={{ 
                  borderColor: p.color, 
                  cursor: 'pointer', 
                  animation: visibleProjects.has(idx) ? `fadeInUp 0.6s ease-out ${idx * 0.1}s` : 'none',
                  opacity: visibleProjects.has(idx) ? 1 : 0
                }}
              >
                {/* Image */}
                <div style={{ height: '250px', position: 'relative', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px 20px 0 0' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent 50%)' }} />
                  
                  {p.featured && (
                    <div className="floating" style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.5rem 1rem', background: 'rgba(255, 215, 0, 0.25)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255, 215, 0, 0.5)', borderRadius: '100px', color: '#ffd700', fontSize: '0.75rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Star size={14} fill="#ffd700" />
                      FEATURED
                    </div>
                  )}
                  
                  <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', padding: '0.4rem 0.75rem', background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(102, 126, 234, 0.4)', borderRadius: '8px', fontSize: '0.7rem', color: '#667eea', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Eye size={12} />
                    {p.views}
                  </div>

                  {hoveredCard === p.id && (
                    <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', animation: 'slideInLeft 0.3s ease-out' }}>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="glass-btn" style={{ padding: '0.5rem 1rem', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, color: '#10b981' }}>
                          <ExternalLink size={14} />
                          Live
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="shimmer" style={{ width: '60px', height: '60px', flexShrink: 0, background: `linear-gradient(135deg, ${p.color}20, ${p.color}10)`, border: `2px solid ${p.color}40`, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                      {p.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                        {p.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div style={{ padding: '0.25rem 0.75rem', background: `${p.color}20`, border: `1px solid ${p.color}40`, borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, color: p.color }}>
                          {p.category}
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#718096' }}>• {p.year}</span>
                      </div>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#a0aec0', marginBottom: '1.25rem' }}>
                    {p.desc}
                  </p>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.7rem', color: '#718096', marginBottom: '0.6rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>Tech Stack</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {p.tech.slice(0, 5).map((tech, i) => (
                        <div key={i} className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.9rem', background: `${tech.color}15`, border: `1px solid ${tech.color}30`, borderRadius: '100px' }}>
                          <span style={{ fontSize: '1rem' }}>{tech.icon}</span>
                          <span style={{ fontSize: '0.75rem', color: '#cbd5e0', fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>
                            {tech.name}
                          </span>
                        </div>
                      ))}
                      {p.tech.length > 5 && (
                        <div style={{ padding: '0.4rem 0.9rem', background: `${p.color}15`, border: `1px solid ${p.color}30`, borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: p.color }}>
                          +{p.tech.length - 5}
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {p.tags.slice(0, 3).map(tag => (
                      <span key={tag} style={{ padding: '0.3rem 0.75rem', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '100px', fontSize: '0.75rem', color: '#a0aec0', fontFamily: "'JetBrains Mono', monospace" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="glass-btn" style={{ flex: 1, padding: '0.875rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', textDecoration: 'none', color: '#a855f7' }}>
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    <button onClick={e => handleLike(p.id, e)} className="glass-btn" style={{ padding: '0.875rem', borderRadius: '12px', cursor: 'pointer', color: liked.has(p.id) ? '#ec4899' : '#718096' }}>
                      <Heart size={18} fill={liked.has(p.id) ? '#ec4899' : 'none'} />
                    </button>
                    <button onClick={e => handleBookmark(p.id, e)} className="glass-btn" style={{ padding: '0.875rem', borderRadius: '12px', cursor: 'pointer', color: bookmarked.has(p.id) ? '#ffd700' : '#718096' }}>
                      <Bookmark size={18} fill={bookmarked.has(p.id) ? '#ffd700' : 'none'} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filtered.length === 0 && (
            <div className="glass" style={{ padding: '4rem 3rem', textAlign: 'center', animation: 'fadeInScale 0.5s ease-out' }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem', animation: 'float 3s infinite' }}>🔍</div>
              <h3 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 900 }}>No Projects Found</h3>
              <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>Try adjusting your filters</p>
              <button onClick={() => { setSearch(''); setFilter('all'); }} style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', border: 'none', borderRadius: '100px', color: '#fff', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(20px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', animation: 'fadeInScale 0.3s', overflow: 'auto' }} onClick={() => setActiveProject(null)}>
          <div className="glass" onClick={e => e.stopPropagation()} style={{ maxWidth: '1200px', width: '100%', maxHeight: '90vh', overflow: 'auto', position: 'relative', borderColor: activeProject.color }}>
            <button onClick={() => setActiveProject(null)} className="glass-btn" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}>
              <X size={24} color="#ff4444" />
            </button>

            <div style={{ position: 'relative', height: '350px', overflow: 'hidden' }}>
              <img src={activeProject.img} alt={activeProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px 20px 0 0' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent 50%)' }} />
              
              <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {Object.entries(activeProject.stats).map(([key, value], i) => (
                  <div key={i} className="glass" style={{ padding: '0.6rem 1.25rem', borderRadius: '10px', borderColor: `${activeProject.color}40` }}>
                    <div style={{ fontSize: '0.7rem', color: '#a0aec0', marginBottom: '0.2rem', textTransform: 'uppercase' }}>{key}</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 900, color: activeProject.color }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '3rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.6rem 1.75rem', background: `${activeProject.color}20`, border: `2px solid ${activeProject.color}40`, borderRadius: '100px', color: activeProject.color, fontSize: '0.9rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '1.3rem' }}>{activeProject.icon}</div>
                  {activeProject.category}
                  <span style={{ color: '#718096' }}>• {activeProject.year}</span>
                </div>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, background: `linear-gradient(135deg, ${activeProject.color}, #fff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif" }}>
                  {activeProject.title}
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#a0aec0', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                  {activeProject.longDesc}
                </p>
                
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {[
                    { icon: Clock, label: 'Duration', value: activeProject.duration },
                    { icon: Users, label: 'Team', value: activeProject.teamSize },
                    { icon: Eye, label: 'Views', value: activeProject.views }
                  ].map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a0aec0' }}>
                        <Icon size={18} style={{ color: activeProject.color }} />
                        <span style={{ fontSize: '0.85rem' }}>{m.label}:</span>
                        <span style={{ fontWeight: 700, color: '#cbd5e0' }}>{m.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                {['overview', 'tech', 'metrics'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    style={{ fontSize: '1rem', textTransform: 'capitalize' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'overview' && (
                <div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                    <div className="glass" style={{ padding: '2rem', borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                      <h4 style={{ color: '#ef4444', fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <AlertCircle size={24} />
                        Problem
                      </h4>
                      <p style={{ color: '#cbd5e0', lineHeight: 1.6, fontSize: '1rem' }}>{activeProject.problem}</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderColor: 'rgba(34, 197, 94, 0.4)' }}>
                      <h4 style={{ color: '#22c55e', fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Lightbulb size={24} />
                        Solution
                      </h4>
                      <p style={{ color: '#cbd5e0', lineHeight: 1.6, fontSize: '1rem' }}>{activeProject.solution}</p>
                    </div>
                  </div>

                  <div className="glass" style={{ padding: '2rem', marginBottom: '3rem', borderColor: `${activeProject.color}40` }}>
                    <h4 style={{ color: activeProject.color, fontSize: '1.3rem', fontWeight: 900, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Target size={24} />
                      My Role
                    </h4>
                    <p style={{ color: '#cbd5e0', lineHeight: 1.6, fontSize: '1rem' }}>{activeProject.role}</p>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffd700', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Trophy size={28} />
                      Impact & Results
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
                      {activeProject.impact.map((item, idx) => (
                        <div key={idx} className="glass" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', borderColor: 'rgba(255, 215, 0, 0.3)' }}>
                          <CheckCircle2 size={20} style={{ color: '#ffd700', flexShrink: 0 }} />
                          <span style={{ color: '#cbd5e0', lineHeight: 1.6, fontSize: '0.95rem' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div>
                  <h4 style={{ fontSize: '1.75rem', fontWeight: 900, color: activeProject.color, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Code size={28} />
                    Complete Tech Stack
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.25rem' }}>
                    {activeProject.tech.map((tech, i) => (
                      <div key={i} className="glass card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderColor: `${tech.color}30` }}>
                        <div style={{ fontSize: '2rem', flexShrink: 0 }}>
                          {tech.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#cbd5e0', marginBottom: '0.2rem' }}>{tech.name}</div>
                          <div style={{ fontSize: '0.7rem', color: '#718096' }}>Technology</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div>
                  <h4 style={{ fontSize: '1.75rem', fontWeight: 900, color: activeProject.color, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <BarChart3 size={28} />
                    Performance Metrics
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {activeProject.metrics.map((metric, i) => (
                      <div key={i} className="glass metric-card" style={{ padding: '1.75rem', borderColor: `${activeProject.color}40` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                          <div>
                            <div style={{ fontSize: '0.8rem', color: '#a0aec0', marginBottom: '0.4rem', textTransform: 'uppercase', fontWeight: 600 }}>{metric.label}</div>
                            <div style={{ fontSize: '2.25rem', fontWeight: 900, color: activeProject.color, fontFamily: "'Orbitron', sans-serif" }}>{metric.value}</div>
                          </div>
                          <Activity size={24} style={{ color: `${activeProject.color}60` }} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.9rem', background: metric.trend.includes('+') ? 'rgba(34, 197, 94, 0.1)' : 'rgba(59, 130, 246, 0.1)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, color: metric.trend.includes('+') ? '#22c55e' : '#3b82f6' }}>
                          <TrendingUp size={12} />
                          {metric.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', paddingTop: '2rem', marginTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="glass-btn shimmer" style={{ padding: '1.25rem 2.5rem', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#a855f7', borderColor: 'rgba(168, 85, 247, 0.5)' }}>
                    <Github size={22} />
                    View Source Code
                  </a>
                )}
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="shimmer" style={{ padding: '1.25rem 2.5rem', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', background: `linear-gradient(135deg, ${activeProject.color}, ${activeProject.color}dd)`, color: '#fff', boxShadow: `0 10px 30px ${activeProject.color}40` }}>
                    <ExternalLink size={22} />
                    View Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {copiedLink && (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 10001, animation: 'slideInRight 0.3s ease-out' }}>
          <div className="glass" style={{ padding: '1rem 1.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem', borderColor: 'rgba(34, 197, 94, 0.5)' }}>
            <Check size={18} style={{ color: '#22c55e' }} />
            <span style={{ color: '#22c55e', fontWeight: 700 }}>Link copied!</span>
          </div>
        </div>
      )}
    </>
  );
}