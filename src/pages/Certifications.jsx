"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Download, Eye, FileText, Award, Code, Rocket, Star, Sparkles, 
  X, CheckCircle2, TrendingUp, Zap, Target, Brain, Trophy,
  GraduationCap, Calendar, MapPin, Linkedin, Github, Mail,
  Briefcase, Terminal, Database, Server, Code2, GitBranch,
  ExternalLink, Users, Cpu, Cloud, Sun, Moon
} from 'lucide-react';

const certificationsData = [
  {
    title: "Full Stack Web Development",
    image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog",
    link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view",
    category: "Web",
    level: "Advanced",
    skills: ["React", "Node.js", "MongoDB"],
    power: 95,
    desc: "Advanced full-stack certification focused on building complete web applications.",
    detailedDesc: "Covered frontend development, backend API creation, database design, authentication, and deployment.",
    outcomes: [
      "Built end-to-end web applications",
      "Implemented secure authentication",
      "Understood full-stack system architecture"
    ]
  },

  {
    title: "Python Programming",
    image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6",
    link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Python", "OOP", "Algorithms"],
    power: 92,
    desc: "Comprehensive Python programming certification.",
    detailedDesc: "Focused on Python fundamentals, object-oriented programming, and algorithmic thinking.",
    outcomes: [
      "Strong command over Python",
      "Applied OOP principles in projects",
      "Improved problem-solving ability"
    ]
  },

  {
    title: "Java Programming",
    image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM",
    link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Java", "Spring", "Multithreading"],
    power: 90,
    desc: "Advanced Java certification covering core and backend concepts.",
    detailedDesc: "Learned OOP, exception handling, multithreading basics, and backend logic.",
    outcomes: [
      "Built backend logic in Java",
      "Understood concurrency concepts",
      "Strengthened core programming skills"
    ]
  },

  {
    title: "AWS Cloud",
    image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9",
    link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view",
    category: "Cloud",
    level: "Professional",
    skills: ["AWS", "EC2", "S3"],
    power: 88,
    desc: "Professional certification on AWS cloud services.",
    detailedDesc: "Covered compute, storage, deployment, and cloud fundamentals.",
    outcomes: [
      "Deployed applications on AWS",
      "Used EC2 and S3 services",
      "Understood cloud infrastructure basics"
    ]
  },

  {
    title: "Azure Fundamentals",
    image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM",
    link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view",
    category: "Cloud",
    level: "Professional",
    skills: ["Azure", "Cloud", "DevOps"],
    power: 85,
    desc: "Fundamental certification on Microsoft Azure cloud.",
    detailedDesc: "Introduced Azure services, cloud models, and DevOps basics.",
    outcomes: [
      "Multi-cloud platform understanding",
      "Cloud service comparison skills"
    ]
  },

  {
    title: "Data Science",
    image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv",
    link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view",
    category: "Data",
    level: "Advanced",
    skills: ["Python", "Pandas", "Visualization"],
    power: 93,
    desc: "Advanced data science certification.",
    detailedDesc: "Focused on data cleaning, EDA, visualization, and insights generation.",
    outcomes: [
      "Analyzed real-world datasets",
      "Built data-driven insights",
      "Prepared data for ML models"
    ]
  },

  {
    title: "Machine Learning",
    image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6",
    link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["ML", "AI", "Neural Networks"],
    power: 98,
    desc: "Expert-level certification in machine learning.",
    detailedDesc: "Covered supervised, unsupervised learning, evaluation metrics, and AI workflows.",
    outcomes: [
      "Built ML prediction models",
      "Improved model accuracy",
      "Applied ML in production projects"
    ]
  },

  {
    title: "Cloud Computing",
    image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX",
    link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view",
    category: "Cloud",
    level: "Professional",
    skills: ["Cloud", "Distributed Systems"],
    power: 87,
    desc: "Cloud computing concepts and architectures.",
    detailedDesc: "Focused on distributed systems, scalability, and cloud fundamentals.",
    outcomes: [
      "Understanding cloud architectures",
      "Prepared for scalable system design"
    ]
  },

  {
    title: "R Programming",
    image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-",
    link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view",
    category: "Programming",
    level: "Advanced",
    skills: ["R", "Statistics", "Data Analysis"],
    power: 86,
    desc: "Statistical programming using R.",
    detailedDesc: "Learned statistical analysis, data manipulation, and visualization.",
    outcomes: [
      "Performed statistical analysis",
      "Strengthened data analytics skills"
    ]
  },

  {
    title: "Art of Programming",
    image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx",
    link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Algorithms", "Problem Solving"],
    power: 91,
    desc: "Algorithmic thinking and problem-solving certification.",
    detailedDesc: "Focused on logical reasoning, patterns, and optimized solutions.",
    outcomes: [
      "Improved algorithmic mindset",
      "Stronger DSA foundation"
    ]
  },

  {
    title: "Machine Learning with Python",
    image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK",
    link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["Python", "Scikit-learn", "TensorFlow"],
    power: 96,
    desc: "Hands-on ML certification using Python.",
    detailedDesc: "Built ML models using real datasets and Python ML libraries.",
    outcomes: [
      "Built ML pipelines",
      "Improved practical ML skills"
    ]
  },

  {
    title: "Large Language Models",
    image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s",
    link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["LLM", "GPT", "Prompt Engineering"],
    power: 99,
    desc: "Advanced certification on Large Language Models.",
    detailedDesc: "Covered transformers, prompt engineering, and LLM-based applications.",
    outcomes: [
      "Built LLM-powered systems",
      "Advanced prompt engineering skills"
    ]
  },

  {
    title: "React",
    image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf",
    link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view",
    category: "Web",
    level: "Advanced",
    skills: ["React", "Hooks", "State Management"],
    power: 94,
    desc: "Advanced React development certification.",
    detailedDesc: "Focused on hooks, component architecture, and state management.",
    outcomes: [
      "Built scalable React apps",
      "Improved frontend architecture"
    ]
  },

  {
    title: "JavaScript",
    image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd",
    link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view",
    category: "Web",
    level: "Advanced",
    skills: ["JavaScript", "ES6+", "Async"],
    power: 93,
    desc: "Modern JavaScript programming certification.",
    detailedDesc: "Covered ES6+, async programming, and browser behavior.",
    outcomes: [
      "Strong JS fundamentals",
      "Improved frontend logic"
    ]
  },

  {
    title: "MLOps",
    image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP",
    link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view",
    category: "DevOps",
    level: "Professional",
    skills: ["MLOps", "CI/CD", "Kubernetes"],
    power: 89,
    desc: "Professional certification in MLOps.",
    detailedDesc: "Focused on ML deployment, monitoring, and CI/CD pipelines.",
    outcomes: [
      "Understood ML production lifecycle",
      "Bridged ML and DevOps"
    ]
  },

  {
    title: "CI/CD",
    image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr",
    link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view",
    category: "DevOps",
    level: "Professional",
    skills: ["Jenkins", "GitHub Actions", "Docker"],
    power: 87,
    desc: "CI/CD pipeline automation certification.",
    detailedDesc: "Covered automated builds, testing, and deployments.",
    outcomes: [
      "Built CI/CD workflows",
      "Improved deployment efficiency"
    ]
  },

  {
    title: "Django",
    image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc",
    link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view",
    category: "Web",
    level: "Advanced",
    skills: ["Django", "Python", "REST API"],
    power: 90,
    desc: "Backend web development using Django.",
    detailedDesc: "Focused on REST APIs, backend logic, and database integration.",
    outcomes: [
      "Built backend services",
      "Improved backend architecture skills"
    ]
  },

  {
    title: "HTML",
    image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr",
    link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view",
    category: "Web",
    level: "Advanced",
    skills: ["HTML5", "Semantic", "Accessibility"],
    power: 88,
    desc: "Advanced HTML and semantic web development.",
    detailedDesc: "Focused on semantic structure and accessibility standards.",
    outcomes: [
      "Built accessible web pages",
      "Improved SEO & structure"
    ]
  },

  {
    title: "CSS",
    image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE",
    link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view",
    category: "Web",
    level: "Advanced",
    skills: ["CSS3", "Flexbox", "Grid"],
    power: 89,
    desc: "Advanced CSS layout and styling techniques.",
    detailedDesc: "Covered responsive layouts, Flexbox, Grid, and animations.",
    outcomes: [
      "Built responsive UIs",
      "Improved UI/UX quality"
    ]
  }
];


const categoryConfig = {
  Web: { icon: Code, color: '#00b7eb', bg: 'from-cyan-500/15 to-blue-500/10' },
  Programming: { icon: Terminal, color: '#7c3aed', bg: 'from-purple-500/15 to-indigo-500/10' },
  Cloud: { icon: Cloud, color: '#0ea5e9', bg: 'from-sky-500/15 to-cyan-500/10' },
  Data: { icon: Database, color: '#f59e0b', bg: 'from-amber-500/15 to-yellow-500/10' },
  "AI/ML": { icon: Brain, color: '#a855f7', bg: 'from-violet-500/15 to-purple-500/10' },
  DevOps: { icon: Rocket, color: '#f97316', bg: 'from-orange-500/15 to-amber-500/10' }
};

export default function CertificationsShowcase() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [theme, setTheme] = useState("light"); // DEFAULT: LIGHT theme
  const canvasRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("certifications-theme");
    if (saved) setTheme(saved);
  }, []);

  // Save theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("certifications-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // DNA Helix + Particles (now theme-aware)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // DNA Helix - softer in light mode
      for (let i = 0; i < 100; i++) {
        const x = canvas.width / 2 + Math.sin(i * 0.1 + frame * 0.02) * 200;
        const y = i * (canvas.height / 100);
        const x2 = canvas.width / 2 + Math.sin(i * 0.1 + frame * 0.02 + Math.PI) * 200;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = theme === "dark" 
          ? `rgba(0, 240, 255, ${0.3 + Math.sin(frame * 0.05 + i * 0.1) * 0.2})`
          : `rgba(0, 183, 235, ${0.25 + Math.sin(frame * 0.05 + i * 0.1) * 0.15})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x2, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = theme === "dark" 
          ? `rgba(124, 58, 237, ${0.3 + Math.cos(frame * 0.05 + i * 0.1) * 0.2})`
          : `rgba(124, 58, 237, ${0.25 + Math.cos(frame * 0.05 + i * 0.1) * 0.15})`;
        ctx.fill();
        
        if (i % 10 === 0) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = theme === "dark" ? 'rgba(0, 212, 255, 0.18)' : 'rgba(0, 183, 235, 0.15)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }
      
      frame++;
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener('resize', resize);
  }, [theme]);

  const filteredCerts = certificationsData.filter(cert => {
    const matchesFilter = filter === "All" || cert.category === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const avgPower = Math.round(
    filteredCerts.reduce((sum, c) => sum + c.power, 0) / (filteredCerts.length || 1)
  );

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
          --text-primary: #1a1a1a;
          --text-secondary: #4b5563;
          --card-bg: rgba(255,255,255,0.94);
          --border-glow: rgba(0,183,235,0.32);
          --stat-bg: rgba(255,255,255,0.92);
          --modal-bg: rgba(255,255,255,0.98);
        }

        body.dark {
          --neon-primary: #00f0ff;
          --neon-secondary: #c084fc;
          --neon-gradient: linear-gradient(90deg, #00f0ff, #c084fc);
          --neon-glow: 0 0 35px rgba(0, 240, 255, 0.75);
          --bg-primary: #000000;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --card-bg: rgba(15,23,42,0.94);
          --border-glow: rgba(0,240,255,0.32);
          --stat-bg: rgba(0,0,0,0.78);
          --modal-bg: rgba(6,6,28,0.98);
        }

        @keyframes pulse3d {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
      `}</style>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="theme-toggle"
        style={{
          position: 'fixed',
          top: '20px',
          right: '30px',
          zIndex: 1000,
          background: 'var(--card-bg)',
          border: '2px solid var(--neon-primary)',
          borderRadius: '50%',
          width: '55px',
          height: '55px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 20px var(--neon-glow)',
          transition: 'all 0.4s ease'
        }}
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
        overflow: 'hidden'
      }}>
        {/* DNA Helix Canvas */}
        <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, opacity: 0.18, pointerEvents: 'none', zIndex: 0 }} />

        <div style={{ 
          position: 'relative', 
          zIndex: 20, 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: 'clamp(2rem, 5vh, 3rem) clamp(1rem, 3vw, 2rem)' 
        }}>
          {/* Hero Header */}
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'clamp(2rem, 6vh, 3rem)', 
            position: 'relative' 
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 10vw, 7rem)',
              fontWeight: 900,
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: 'clamp(2px, 0.5vw, 5px)'
            }}>
              CERTIFICATIONS
            </h1>

            {/* Live Stats Dashboard */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              maxWidth: '56rem',
              margin: '2rem auto 0'
            }}>
              {[
                { label: 'Total Power', value: avgPower, icon: Zap, color: '#ffd700' },
                { label: 'Certifications', value: filteredCerts.length, icon: Award, color: '#00b7eb' },
                { label: 'Categories', value: Object.keys(categoryConfig).length, icon: Sparkles, color: '#7c3aed' },
                { label: 'Skill Level', value: 'Expert', icon: Star, color: '#00f0ff' },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    background: theme === "dark" ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.92)',
                    border: `2px solid ${stat.color}40`,
                    borderRadius: 'clamp(0.75rem, 2vw, 1rem)',
                    padding: 'clamp(0.75rem, 2vw, 1rem)',
                    textAlign: 'center'
                  }}
                >
                  <stat.icon style={{ width: 'clamp(1.8rem, 4vw, 2.5rem)', height: 'auto', color: stat.color, marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 'bold', color: stat.color }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.875rem)', color: theme === "dark" ? '#94a3b8' : '#6b7280' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter & Search */}
          <div style={{ margin: '2rem 0 3rem' }}>
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '420px',
                padding: '0.9rem 1.4rem',
                borderRadius: '999px',
                border: `2px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.3)'}`,
                background: theme === "dark" ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.9)',
                color: theme === "dark" ? '#fff' : '#000',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 0 20px rgba(var(--neon-primary-rgb),0.12)'
              }}
            />

            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.8rem', 
              marginTop: '1.5rem',
              justifyContent: 'center' 
            }}>
              {['All', ...Object.keys(categoryConfig)].map(cat => {
                const cfg = categoryConfig[cat] || {};
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    style={{
                      padding: '0.6rem 1.4rem',
                      borderRadius: '999px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      border: `2px solid ${active ? cfg.color : theme === "dark" ? '#374151' : '#d1d5db'}`,
                      background: active ? `${cfg.color}15` : theme === "dark" ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      color: active ? cfg.color : theme === "dark" ? '#e0e0ff' : '#1a1a1a',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Certifications Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {filteredCerts.map((cert, idx) => {
              const cfg = categoryConfig[cert.category] || {};
              const isHovered = hoveredCard === idx;

              return (
                <div
                  key={idx}
                  onClick={() => window.open(cert.link, '_blank')}
                  style={{
                    position: 'relative',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    background: theme === "dark" ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.92)',
                    border: `2px solid ${isHovered ? cfg.color : theme === "dark" ? '#374151' : '#d1d5db'}`,
                    transition: 'all 0.3s ease',
                    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{
                    height: '180px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1.03)'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%)'
                    }} />
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      marginBottom: '0.75rem',
                      color: theme === "dark" ? '#e0e0ff' : '#1a1a1a'
                    }}>
                      {cert.title}
                    </h3>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1rem'
                    }}>
                      <span style={{
                        padding: '0.35rem 0.9rem',
                        background: `${cfg.color}20`,
                        borderRadius: '999px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: cfg.color
                      }}>
                        {cert.level}
                      </span>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: cfg.color
                      }}>
                        <Zap size={18} />
                        <strong>{cert.power}%</strong>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.6rem',
                      marginBottom: '1.2rem'
                    }}>
                      {cert.skills.map(s => (
                        <span key={s} style={{
                          padding: '0.4rem 0.9rem',
                          background: theme === "dark" ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                          borderRadius: '999px',
                          fontSize: '0.82rem',
                          color: theme === "dark" ? '#cbd5e1' : '#374151'
                        }}>
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        color: cfg.color,
                        fontWeight: 600,
                        fontSize: '0.95rem'
                      }}
                    >
                      View Certificate <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCerts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <p style={{ fontSize: '1.4rem', color: theme === "dark" ? '#94a3b8' : '#6b7280' }}>
                No certifications found matching your search
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}