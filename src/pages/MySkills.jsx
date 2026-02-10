"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';

const skills = [
  {
    id: 1,
    category: "Full-Stack",
    title: "Full-Stack Development",
    subtitle: "MERN Stack Specialist",
    level: 82,
    projects: 2,
    experience: "Internship",
    whereLearned: "StudyOwl Education Pvt Ltd",
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    secondaryColor: "#8b5cf6",
    gradient: "linear-gradient(135deg, #00f5ff 0%, #0099ff 100%)",
    iconEmoji: "💻",
    badge: "FULL-STACK PRO",
    rarity: "LEGENDARY",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "OAuth", "REST API"],
    achievements: [
      "Built ATS-friendly Resume Builder with PDF & Word export",
      "Implemented secure OAuth-based authentication system",
      "Optimized REST API performance by 40%"
    ],
    impact: "Production-grade full-stack applications",
    impact_metrics: [
      { label: "Projects", value: "2+", iconEmoji: "🧩" },
      { label: "Auth", value: "OAuth", iconEmoji: "🔐" },
      { label: "Database", value: "Atlas", iconEmoji: "☁️" }
    ]
  },
  {
    id: 2,
    category: "AI/ML",
    title: "Machine Learning",
    subtitle: "NLP & Data Science",
    level: 80,
    projects: 2,
    experience: "Internship",
    whereLearned: "Blackbucks & SmartBridge",
    color: "#a78bfa",
    glowRGB: "167, 139, 250",
    secondaryColor: "#ec4899",
    gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    iconEmoji: "🧠",
    badge: "ML ENGINEER",
    rarity: "EPIC",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Jupyter"],
    achievements: [
      "Built Fake News Detection with 89% accuracy",
      "Implemented TF-IDF vectorization pipeline",
      "Analyzed 50K+ data points for model training"
    ],
    impact: "High-accuracy ML & NLP solutions",
    impact_metrics: [
      { label: "Models", value: "4+", iconEmoji: "📈" },
      { label: "Accuracy", value: "89%", iconEmoji: "🎯" },
      { label: "Data", value: "50K+", iconEmoji: "📊" }
    ]
  },
  {
    id: 3,
    category: "Deep Learning",
    title: "Deep Learning & CV",
    subtitle: "Neural Networks Expert",
    level: 78,
    projects: 2,
    experience: "Internship",
    whereLearned: "SmartBridge AI/ML Internship",
    color: "#3b82f6",
    glowRGB: "59, 130, 246",
    secondaryColor: "#2563eb",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    iconEmoji: "🤖",
    badge: "CV SPECIALIST",
    rarity: "EPIC",
    tech: ["TensorFlow", "Keras", "OpenCV", "PyTorch", "Flask", "Python"],
    achievements: [
      "Developed CNN models with 92% accuracy",
      "Deployed real-time object detection system",
      "Optimized inference time by 35%"
    ],
    impact: "Computer Vision & Deep Learning pipelines",
    impact_metrics: [
      { label: "Models", value: "3+", iconEmoji: "🧬" },
      { label: "Accuracy", value: "92%", iconEmoji: "🏆" },
      { label: "Deploy", value: "Flask", iconEmoji: "🚀" }
    ]
  },
  {
    id: 4,
    category: "Data Science",
    title: "Data Science",
    subtitle: "Analytics & Visualization",
    level: 76,
    projects: 2,
    experience: "Internship",
    whereLearned: "Blackbucks Internship",
    color: "#f97316",
    glowRGB: "249, 115, 22",
    secondaryColor: "#ea580c",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    iconEmoji: "📊",
    badge: "DATA ANALYST",
    rarity: "RARE",
    tech: ["Python", "Pandas", "NumPy", "Jupyter", "MySQL", "PostgreSQL"],
    achievements: [
      "Analyzed datasets with 100K+ records",
      "Created interactive data visualizations",
      "Automated data cleaning workflows"
    ],
    impact: "Large-scale data processing & insights",
    impact_metrics: [
      { label: "Datasets", value: "10+", iconEmoji: "📂" },
      { label: "Records", value: "100K+", iconEmoji: "📈" },
      { label: "Viz", value: "Multi", iconEmoji: "📉" }
    ]
  },
  {
    id: 5,
    category: "Programming",
    title: "Core Programming",
    subtitle: "Algorithms & Problem Solving",
    level: 85,
    projects: 5,
    experience: "Self + Academic",
    whereLearned: "Self-learning + College",
    color: "#8b5cf6",
    glowRGB: "139, 92, 246",
    secondaryColor: "#7c3aed",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    iconEmoji: "⚡",
    badge: "DSA MASTER",
    rarity: "LEGENDARY",
    tech: ["Python", "Java", "JavaScript", "C++", "Git", "GitHub"],
    achievements: [
      "Solved 100+ DSA problems on coding platforms",
      "Strong foundation in OOP principles",
      "Implemented complex algorithms efficiently"
    ],
    impact: "Strong algorithmic thinking & clean code",
    impact_metrics: [
      { label: "Problems", value: "100+", iconEmoji: "🧩" },
      { label: "OOP", value: "Expert", iconEmoji: "🏛️" },
      { label: "DSA", value: "Strong", iconEmoji: "🚀" }
    ]
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    title: "Cloud & DevOps",
    subtitle: "AWS & Docker Specialist",
    level: 70,
    projects: 2,
    experience: "Self-learning",
    whereLearned: "Personal projects & courses",
    color: "#10b981",
    glowRGB: "16, 185, 129",
    secondaryColor: "#059669",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    iconEmoji: "☁️",
    badge: "CLOUD ENGINEER",
    rarity: "RARE",
    tech: ["AWS", "Docker", "Kubernetes", "Linux", "Nginx", "Jenkins"],
    achievements: [
      "Deployed apps on AWS EC2 & S3",
      "Containerized microservices with Docker",
      "Set up CI/CD pipelines with GitHub Actions"
    ],
    impact: "Scalable & reliable cloud infrastructure",
    impact_metrics: [
      { label: "Cloud", value: "AWS", iconEmoji: "🌐" },
      { label: "CI/CD", value: "GitHub", iconEmoji: "🔄" },
      { label: "Container", value: "Docker", iconEmoji: "📦" }
    ]
  }
];

export default function AdvancedSkills() {
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredId, setHoveredId] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking
  useEffect(() => {
    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 15;
      targetY = (e.clientY / window.innerHeight - 0.5) * 15;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      setMousePosition({ x: currentX, y: currentY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.speed = Math.random() * 1.5 + 0.5;
        this.radius = Math.random() * 2 + 0.5;
        this.color = Math.random() > 0.5 ? '0, 245, 255' : '139, 92, 246';
        this.opacity = Math.random() * 0.4 + 0.2;
        this.drift = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.y += this.speed;
        this.x += this.drift;
        if (this.y > canvas.height + 20) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2.5);
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const getRarityColor = (rarity) => {
    const map = {
      'LEGENDARY': '#ffd700',
      'EPIC': '#c084fc',
      'RARE': '#22d3ee'
    };
    return map[rarity] || '#67e8f9';
  };

  const filteredSkills = selectedFilter === 'ALL'
    ? skills
    : skills.filter(s => s.rarity === selectedFilter);

  const stats = useMemo(() => {
    const totalProjects = skills.reduce((acc, s) => acc + s.projects, 0);
    const avgLevel = Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length);
    const topSkill = skills.reduce((max, s) => s.level > max.level ? s : max, skills[0]);
    return { totalProjects, avgLevel, topSkill };
  }, []);

  return (
    <div style={{
      background: '#000',
      color: '#fff',
      minHeight: '100vh',
      position: 'relative',
      overflowX: 'hidden',
      fontFamily: "'Inter', system-ui, sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=JetBrains+Mono:wght@400;600;800&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00f5ff, #a78bfa);
          border-radius: 10px;
        }
      `}</style>

      {/* Progress bar */}
      <div style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '4px', 
        zIndex: 10000,
        background: 'rgba(0,0,0,0.9)'
      }}>
        <div style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #00f5ff, #a78bfa, #10b981)',
          boxShadow: '0 0 20px currentColor',
          transition: 'width 0.1s linear'
        }} />
      </div>

      {/* Particles */}
      <canvas ref={canvasRef} style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.6
      }} />

      {/* Floating orbs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', 
          width: '500px', 
          height: '500px', 
          top: '15%', 
          left: '8%',
          background: 'radial-gradient(circle, rgba(0,245,255,0.1), transparent 70%)',
          borderRadius: '50%', 
          filter: 'blur(70px)',
          animation: 'float 24s infinite ease-in-out',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }} />
        <div style={{
          position: 'absolute', 
          width: '400px', 
          height: '400px', 
          bottom: '20%', 
          right: '10%',
          background: 'radial-gradient(circle, rgba(167,139,250,0.08), transparent 70%)',
          borderRadius: '50%', 
          filter: 'blur(60px)',
          animation: 'float 30s infinite ease-in-out reverse',
          transform: `translate(${-mousePosition.x * 0.4}px, ${-mousePosition.y * 0.4}px)`
        }} />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '4rem 2rem 6rem'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          paddingTop: '2rem',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)'
        }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 5rem)',
            fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #00f5ff 0%, #a78bfa 50%, #10b981 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientFlow 8s linear infinite',
            marginBottom: '1rem',
            letterSpacing: '4px',
            lineHeight: 1.1
          }}>
            SKILLS ARSENAL
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#94a3b8',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6
          }}>
            Full-Stack • AI/ML • Cloud • Data Science
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
            maxWidth: '800px',
            margin: '0 auto 2.5rem'
          }}>
            {[
              { label: 'Total Skills', value: skills.length, icon: '⚡', color: '#00f5ff' },
              { label: 'Avg Mastery', value: `${stats.avgLevel}%`, icon: '🎯', color: '#a78bfa' },
              { label: 'Projects', value: stats.totalProjects, icon: '🚀', color: '#10b981' },
              { label: 'Top Skill', value: stats.topSkill.level + '%', icon: '👑', color: '#f59e0b' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: `1.5px solid ${hoveredId === `stat-${i}` ? stat.color : 'rgba(255,255,255,0.08)'}`,
                  borderRadius: '14px',
                  padding: '1.2rem 1rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: hoveredId === `stat-${i}` ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredId === `stat-${i}` ? `0 12px 30px ${stat.color}40` : 'none'
                }}
                onMouseEnter={() => setHoveredId(`stat-${i}`)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: 900,
                  color: stat.color,
                  fontFamily: "'Orbitron', sans-serif",
                  marginBottom: '0.2rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#64748b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* View Mode Selector */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            margin: '0 auto 2.5rem',
            flexWrap: 'wrap'
          }}>
            {[
              { mode: "grid", label: "Grid", icon: "◼◼◼" },
              { mode: "cards", label: "Cards", icon: "▦▦▦" }
            ].map(({ mode, label, icon }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  padding: '0.85rem 2rem',
                  background: viewMode === mode ? 'linear-gradient(135deg, #00f5ff, #a78bfa)' : 'rgba(255,255,255,0.05)',
                  border: viewMode === mode ? 'none' : '1.5px solid rgba(255,255,255,0.12)',
                  borderRadius: '999px',
                  color: viewMode === mode ? '#000' : '#cbd5e1',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: viewMode === mode ? '0 8px 25px rgba(0,245,255,0.4)' : 'none'
                }}
              >
                <span style={{ marginRight: '8px' }}>{icon}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Filter */}
          <div style={{
            display: 'flex',
            gap: '0.8rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {['ALL', 'LEGENDARY', 'EPIC', 'RARE'].map(f => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                style={{
                  padding: '0.7rem 1.8rem',
                  borderRadius: '999px',
                  background: selectedFilter === f ? 'linear-gradient(135deg, #00f5ff, #a78bfa)' : 'rgba(255,255,255,0.04)',
                  color: selectedFilter === f ? '#000' : '#94a3b8',
                  border: selectedFilter === f ? 'none' : '1px solid rgba(255,255,255,0.1)',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.8rem',
                  letterSpacing: '1px',
                  boxShadow: selectedFilter === f ? '0 6px 20px rgba(0,245,255,0.35)' : 'none'
                }}
              >
                {f === 'ALL' ? '⚡ All' : f}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.8rem',
          padding: '1rem 0 3rem'
        }}>
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.id}
              onMouseEnter={() => setHoveredId(skill.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveSkill(skill)}
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(25px)',
                border: `2px solid ${hoveredId === skill.id ? skill.color : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                transform: hoveredId === skill.id ? 'translateY(-6px) scale(1.01)' : 'translateY(0)',
                boxShadow: hoveredId === skill.id
                  ? `0 20px 50px rgba(${skill.glowRGB},0.35)`
                  : '0 6px 20px rgba(0,0,0,0.25)',
                animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${index * 0.06}s both`,
                position: 'relative'
              }}
            >
              {hoveredId === skill.id && (
                <div style={{
                  position: 'absolute',
                  inset: '-2px',
                  background: `linear-gradient(135deg, ${skill.color}, ${skill.secondaryColor})`,
                  borderRadius: '20px',
                  opacity: 0.1,
                  filter: 'blur(12px)',
                  zIndex: -1
                }} />
              )}

              <div style={{ padding: '1.8rem 1.5rem' }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1.3rem'
                }}>
                  <div style={{
                    fontSize: '3.2rem',
                    lineHeight: 1,
                    transform: hoveredId === skill.id ? 'scale(1.08) rotate(-6deg)' : 'scale(1)',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    filter: `drop-shadow(0 0 18px ${skill.color}60)`
                  }}>
                    {skill.iconEmoji}
                  </div>

                  <div style={{
                    background: `linear-gradient(135deg, ${skill.color}18, ${skill.color}08)`,
                    border: `2px solid ${skill.color}`,
                    borderRadius: '10px',
                    padding: '0.5rem 0.9rem',
                    textAlign: 'center',
                    boxShadow: `0 0 15px ${skill.color}35`
                  }}>
                    <div style={{
                      fontSize: '1.6rem',
                      fontWeight: 900,
                      color: skill.color,
                      fontFamily: "'Orbitron', sans-serif",
                      lineHeight: 1
                    }}>
                      {skill.level}
                    </div>
                    <div style={{
                      fontSize: '0.65rem',
                      color: '#94a3b8',
                      marginTop: '2px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Level
                    </div>
                  </div>
                </div>

                {/* Rarity */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 1rem',
                  background: `${getRarityColor(skill.rarity)}12`,
                  border: `1.5px solid ${getRarityColor(skill.rarity)}`,
                  borderRadius: '999px',
                  marginBottom: '1rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: getRarityColor(skill.rarity),
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  <span>★</span>
                  {skill.rarity}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  background: skill.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.4rem',
                  fontFamily: "'Orbitron', sans-serif",
                  lineHeight: 1.2
                }}>
                  {skill.title}
                </h3>

                <div style={{
                  fontSize: '0.95rem',
                  color: '#94a3b8',
                  marginBottom: '1.2rem',
                  fontWeight: 500
                }}>
                  {skill.subtitle}
                </div>

                {/* Where Learned */}
                <div style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  marginBottom: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem',
                  background: 'rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <span style={{ color: skill.color, fontSize: '0.9rem' }}>📍</span>
                  <span style={{ fontSize: '0.75rem' }}>{skill.whereLearned}</span>
                </div>

                {/* Metrics */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '0.5rem',
                  marginBottom: '1.2rem'
                }}>
                  {skill.impact_metrics.map((metric, i) => (
                    <div
                      key={i}
                      style={{
                        background: `rgba(${skill.glowRGB},0.05)`,
                        border: `1px solid ${skill.color}20`,
                        borderRadius: '8px',
                        padding: '0.5rem 0.3rem',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{ fontSize: '1.1rem', marginBottom: '2px' }}>
                        {metric.iconEmoji}
                      </div>
                      <div style={{
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: skill.color,
                        fontFamily: "'Orbitron', sans-serif",
                        marginBottom: '2px'
                      }}>
                        {metric.value}
                      </div>
                      <div style={{
                        fontSize: '0.6rem',
                        color: '#64748b',
                        textTransform: 'uppercase'
                      }}>
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '0.4rem', 
                  marginBottom: '1.2rem' 
                }}>
                  {skill.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      style={{
                        padding: '0.35rem 0.8rem',
                        background: 'rgba(0,0,0,0.35)',
                        border: `1px solid ${skill.color}35`,
                        borderRadius: '999px',
                        fontSize: '0.7rem',
                        color: skill.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600
                      }}
                    >
                      {t}
                    </span>
                  ))}
                  {skill.tech.length > 3 && (
                    <span style={{
                      padding: '0.35rem 0.8rem',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      color: '#475569'
                    }}>
                      +{skill.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  padding: '0.8rem 1.3rem',
                  background: hoveredId === skill.id ? skill.gradient : 'rgba(255,255,255,0.05)',
                  color: hoveredId === skill.id ? '#000' : skill.color,
                  border: hoveredId === skill.id ? 'none' : `2px solid ${skill.color}35`,
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '0.8rem',
                  letterSpacing: '0.8px',
                  boxShadow: hoveredId === skill.id ? `0 6px 20px rgba(${skill.glowRGB},0.35)` : 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {hoveredId === skill.id && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      animation: 'shimmer 1.5s infinite'
                    }} />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>View Details</span>
                  <span style={{ 
                    fontSize: '0.95rem',
                    position: 'relative',
                    zIndex: 1,
                    transform: hoveredId === skill.id ? 'translateX(3px)' : 'translateX(0)',
                    transition: 'transform 0.3s ease'
                  }}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeSkill && (
          <div
            onClick={() => setActiveSkill(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, rgba(10,10,40,0.98), rgba(5,5,20,0.98))',
                border: `3px solid ${activeSkill.color}`,
                borderRadius: '28px',
                maxWidth: '1000px',
                width: '95%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: `0 0 120px rgba(${activeSkill.glowRGB},0.6)`,
                position: 'relative'
              }}
            >
              <button
                onClick={() => setActiveSkill(null)}
                style={{
                  position: 'sticky',
                  top: '1.5rem',
                  float: 'right',
                  marginRight: '1.5rem',
                  background: 'rgba(255,70,70,0.2)',
                  border: '2px solid #ff4646',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ff4646',
                  cursor: 'pointer',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
              >
                ×
              </button>

              <div style={{ padding: '3.5rem 3rem', clear: 'both' }}>
                <div style={{
                  display: 'flex',
                  gap: '2.5rem',
                  marginBottom: '3rem',
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    fontSize: 'clamp(5rem, 12vw, 8rem)',
                    filter: `drop-shadow(0 0 50px ${activeSkill.color})`
                  }}>
                    {activeSkill.iconEmoji}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                      fontWeight: 900,
                      background: activeSkill.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: "'Orbitron', sans-serif",
                      marginBottom: '0.8rem',
                      lineHeight: 1.1
                    }}>
                      {activeSkill.title}
                    </div>

                    <div style={{
                      fontSize: '1.3rem',
                      color: '#cbd5e1',
                      marginBottom: '1.5rem'
                    }}>
                      {activeSkill.subtitle}
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.8rem 2rem',
                      background: `rgba(${activeSkill.glowRGB},0.15)`,
                      border: `2.5px solid ${activeSkill.color}`,
                      borderRadius: '999px',
                      color: activeSkill.color,
                      fontSize: '1.1rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>★</span>
                      <span>{activeSkill.level}% MASTERY</span>
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'grid',
                  gap: '2.5rem'
                }}>
                  <div>
                    <h4 style={{
                      color: activeSkill.color,
                      fontSize: '1.3rem',
                      marginBottom: '1rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}>
                      <span>📍</span>
                      Where I Learned
                    </h4>
                    <div style={{
                      fontSize: '1.05rem',
                      color: '#e2e8f0',
                      padding: '1.2rem',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: '16px',
                      border: `2px solid ${activeSkill.color}25`
                    }}>
                      {activeSkill.whereLearned}
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      color: activeSkill.color,
                      fontSize: '1.3rem',
                      marginBottom: '1rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}>
                      <span>🏆</span>
                      Key Achievements
                    </h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {activeSkill.achievements.map((ach, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1rem',
                            padding: '1.2rem',
                            background: 'rgba(255,255,255,0.03)',
                            border: `2px solid ${activeSkill.color}20`,
                            borderRadius: '16px',
                            fontSize: '1.05rem',
                            color: '#e2e8f0'
                          }}
                        >
                          <span style={{ 
                            color: activeSkill.color, 
                            fontSize: '1.5rem',
                            lineHeight: 1
                          }}>
                            ›
                          </span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 style={{
                      color: activeSkill.color,
                      fontSize: '1.3rem',
                      marginBottom: '1rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}>
                      <span>⚙️</span>
                      Technology Stack
                    </h4>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.8rem' 
                    }}>
                      {activeSkill.tech.map((t, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '0.75rem 1.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: `2px solid ${activeSkill.color}40`,
                            borderRadius: '999px',
                            color: activeSkill.color,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 600,
                            fontSize: '0.95rem'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}