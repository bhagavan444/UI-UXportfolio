"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Code, Brain, Database, Terminal, Award, ExternalLink, X,
  CheckCircle2, Layers, Sparkles, Zap, Github, Trophy,
  Target, Flame, Star, Rocket, Clock, MapPin, Calendar,
  TrendingUp, Shield, Crown, Hexagon, Activity, Users,
  ChevronRight, Cpu, GitBranch, Box, Boxes, Globe,
  Briefcase, Mail, Download, Share2, Eye, Heart,
  Grid3x3, LayoutList, Network, Maximize2, Play
} from 'lucide-react';

const internships = [
  {
    id: 1,
    title: "MERN Stack Intern",
    company: "StudyOwl Education Pvt Ltd",
    location: "Hybrid",
    period: "May – July 2025",
    duration: "3 months",
    badge: "FULL-STACK PRO",
    rarity: "LEGENDARY",
    certId: "1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC",
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    secondaryColor: "#8b5cf6",
    accentColor: "#f59e0b",
    icon: Code,
    impact: "Built production apps serving 1000+ users",
    rating: 98,
    year: 2025,
    yearNum: 2025,
    progress: 98,
    gradient: "linear-gradient(135deg, #00f5ff 0%, #0099ff 100%)",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Git", "Cloud Deployment"],
    responsibilities: [
      "Developed responsive UI components using React",
      "Built secure RESTful APIs with Node.js and Express",
      "Implemented JWT-based authentication and authorization",
      "Integrated frontend with backend services",
      "Collaborated with team using Git and Agile workflows"
    ],
    achievements: [
      "🚀 Built 3+ full-stack web applications",
      "🔐 Implemented secure login & role-based access",
      "⚡ Optimized API performance and database queries",
      "☁️ Deployed applications to cloud environments"
    ],
    impact_metrics: [
      { label: "Apps Built", value: "3+", icon: Layers },
      { label: "Users Served", value: "1K+", icon: Users },
      { label: "Uptime", value: "99%", icon: Activity }
    ],
    skills_gained: ["Full-Stack Development", "API Design & Security", "Cloud Deployment", "Team Collaboration"],
    image: "https://lh3.googleusercontent.com/d/1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC"
  },
  {
    id: 2,
    title: "AI / ML Intern",
    company: "SmartBridge",
    location: "Remote",
    period: "May – June 2025",
    duration: "2 months",
    badge: "AI ENGINEER",
    rarity: "EPIC",
    certId: "1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw",
    color: "#a78bfa",
    glowRGB: "167, 139, 250",
    secondaryColor: "#ec4899",
    accentColor: "#06b6d4",
    icon: Brain,
    impact: "Achieved 85%+ accuracy on ML models",
    rating: 95,
    year: 2025,
    yearNum: 2025,
    progress: 95,
    gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    tech: ["Python", "TensorFlow", "Scikit-learn", "CNN", "OpenCV", "Flask"],
    responsibilities: [
      "Designed and trained CNN models for image classification",
      "Preprocessed and augmented image datasets",
      "Evaluated models using accuracy and loss metrics",
      "Integrated trained models into Flask web applications",
      "Deployed ML models for real-time inference"
    ],
    achievements: [
      "🧠 Built and evaluated 5+ ML/DL models",
      "🎯 Achieved 85%+ accuracy on image classification tasks",
      "🔄 Implemented end-to-end ML pipelines",
      "⏱️ Delivered working AI demos within deadlines"
    ],
    impact_metrics: [
      { label: "Models Built", value: "5+", icon: Brain },
      { label: "Accuracy", value: "85%", icon: Target },
      { label: "Projects", value: "4", icon: Rocket }
    ],
    skills_gained: ["Deep Learning & CNNs", "Computer Vision", "Model Deployment", "ML Pipeline Design"],
    image: "https://lh3.googleusercontent.com/d/1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw"
  },
  {
    id: 3,
    title: "Machine Learning & Data Science Intern",
    company: "Blackbucks",
    location: "Remote",
    period: "May – June 2024",
    duration: "2 months",
    badge: "DATA SPECIALIST",
    rarity: "EPIC",
    certId: "1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY",
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    secondaryColor: "#10b981",
    accentColor: "#f472b6",
    icon: Database,
    impact: "Processed 100K+ data records efficiently",
    rating: 92,
    year: 2024,
    yearNum: 2024,
    progress: 92,
    gradient: "linear-gradient(135deg, #00f5ff 0%, #10b981 100%)",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Feature Engineering"],
    responsibilities: [
      "Cleaned and preprocessed real-world datasets",
      "Performed exploratory data analysis (EDA)",
      "Built ML models for classification and prediction",
      "Evaluated models using standard ML metrics",
      "Documented findings and model performance"
    ],
    achievements: [
      "📊 Built multiple ML models from scratch",
      "🔧 Implemented feature engineering pipelines",
      "📈 Improved data quality and model accuracy",
      "💡 Strengthened foundation in data science workflows"
    ],
    impact_metrics: [
      { label: "Data Processed", value: "100K+", icon: Database },
      { label: "Models", value: "6", icon: TrendingUp },
      { label: "Accuracy", value: "92%", icon: CheckCircle2 }
    ],
    skills_gained: ["Data Preprocessing", "Feature Engineering", "ML Model Building", "Statistical Analysis"],
    image: "https://lh3.googleusercontent.com/d/1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY"
  }
];

export default function AdvancedInternships() {
  const [viewMode, setViewMode] = useState("timeline");
  const [hoveredId, setHoveredId] = useState(null);
  const [activeIntern, setActiveIntern] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const timelineRef = useRef(null);

  // Mouse tracking for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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

  // Advanced particle system with canvas
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
        this.opacity = Math.random();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.speed = Math.random() * 2 + 0.5;
        this.radius = Math.random() * 2.5 + 0.5;
        this.color = Math.random() > 0.5 ? '0, 245, 255' : '167, 139, 250';
        this.opacity = Math.random() * 0.5 + 0.3;
        this.drift = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.y += this.speed;
        this.x += this.drift;
        if (this.y > canvas.height + 10) this.reset();
        if (this.x < -10 || this.x > canvas.width + 10) this.reset();
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 3);
        gradient.addColorStop(0, `rgba(${this.color}, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 150 }, () => new Particle());

    // Floating orbs
    class Orb {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 100 + 50;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.color = ['0, 245, 255', '167, 139, 250', '255, 107, 53'][Math.floor(Math.random() * 3)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < -this.radius || this.x > canvas.width + this.radius) this.vx *= -1;
        if (this.y < -this.radius || this.y > canvas.height + this.radius) this.vy *= -1;
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
        gradient.addColorStop(0, `rgba(${this.color}, 0.08)`);
        gradient.addColorStop(0.5, `rgba(${this.color}, 0.03)`);
        gradient.addColorStop(1, `rgba(${this.color}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }

    const orbs = Array.from({ length: 5 }, () => new Orb());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw orbs
      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });

      // Draw and connect particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const getCertificateUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  const getViewUrl = (id) => `https://drive.google.com/file/d/${id}/view`;

  const getRarityColor = (rarity) => {
    const colors = { 'LEGENDARY': '#ffd700', 'EPIC': '#a78bfa', 'RARE': '#00f5ff' };
    return colors[rarity] || '#00f5ff';
  };

  const filteredInternships = selectedFilter === 'ALL'
    ? internships
    : internships.filter(i => i.rarity === selectedFilter);

  const ViewModeSelector = () => (
    <div style={{
      display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '5rem',
      flexWrap: 'wrap'
    }}>
      {[
        { mode: "timeline", icon: LayoutList, label: "Timeline" },
        { mode: "grid", icon: Grid3x3, label: "Grid" },
        { mode: "network", icon: Network, label: "Network" },
        { mode: "immersive", icon: Maximize2, label: "Immersive" }
      ].map(({ mode, icon: Icon, label }) => (
        <button
          key={mode}
          onClick={() => setViewMode(mode)}
          className="view-mode-btn"
          style={{
            padding: '1.2rem 3rem', background: viewMode === mode 
              ? 'rgba(0, 245, 255, 0.2)' 
              : 'rgba(255, 255, 255, 0.05)',
            border: viewMode === mode 
              ? '3px solid #00f5ff' 
              : '2px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '999px', color: viewMode === mode ? '#00f5ff' : '#fff',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem',
            fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
            transition: 'all 0.4s', backdropFilter: 'blur(10px)',
            boxShadow: viewMode === mode ? '0 0 40px rgba(0, 245, 255, 0.5)' : 'none'
          }}
        >
          <Icon size={22} strokeWidth={3} />
          {label}
        </button>
      ))}
    </div>
  );

  const TimelineView = () => (
    <div ref={timelineRef} style={{ position: 'relative', padding: '5rem 0' }}>
      {/* Timeline line */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px',
        background: 'linear-gradient(to bottom, #00f5ff, #a78bfa, #ff6b35)',
        transform: 'translateX(-50%)', boxShadow: '0 0 30px rgba(0, 245, 255, 0.8)'
      }} />

      {filteredInternships.map((intern, i) => {
        const isLeft = i % 2 === 0;
        const Icon = intern.icon;
        return (
          <div
            key={intern.id}
            onMouseEnter={() => setHoveredId(intern.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setActiveIntern(intern)}
            style={{
              display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start',
              marginBottom: '8rem', position: 'relative',
              animation: `slide-in-${isLeft ? 'left' : 'right'} 1s ease-out ${i * 0.3}s both`
            }}
          >
            {/* Timeline node */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px', height: '80px', borderRadius: '50%',
              background: intern.color, display: 'flex', alignItems: 'center',
              justifyContent: 'center', zIndex: 10,
              boxShadow: `0 0 60px ${intern.color}, inset 0 0 30px rgba(255,255,255,0.5)`,
              border: '6px solid rgba(0,0,0,0.9)',
              animation: hoveredId === intern.id ? 'pulse-node 1s infinite' : 'none'
            }}>
              <Icon size={36} strokeWidth={3} color="#000" />
            </div>

            {/* Content card */}
            <div className="glass-card timeline-card" style={{
              width: '45%', padding: '3rem', cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(40px)',
              border: `3px solid ${hoveredId === intern.id ? intern.color : 'rgba(255, 255, 255, 0.15)'}`,
              borderRadius: '32px', position: 'relative',
              transform: hoveredId === intern.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: hoveredId === intern.id 
                ? `0 30px 80px rgba(${intern.glowRGB}, 0.6)` 
                : '0 10px 40px rgba(0,0,0,0.3)'
            }}>
              {/* Year badge */}
              <div style={{
                position: 'absolute', top: '-25px', left: '2rem',
                padding: '0.7rem 2rem', background: intern.color,
                borderRadius: '999px', fontFamily: "'Orbitron', sans-serif",
                fontSize: '1.1rem', fontWeight: 900, color: '#000',
                boxShadow: `0 10px 40px ${intern.color}`
              }}>
                {intern.period}
              </div>

              {/* Image */}
              <div style={{
                height: '280px', borderRadius: '20px', overflow: 'hidden',
                marginBottom: '2rem', position: 'relative'
              }}>
                <img src={getCertificateUrl(intern.certId)} alt={intern.company} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hoveredId === intern.id ? 'scale(1.2)' : 'scale(1.1)',
                  transition: 'transform 1s'
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)`
                }} />
                <div style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  padding: '0.6rem 1.5rem', background: `rgba(${intern.glowRGB}, 0.3)`,
                  backdropFilter: 'blur(10px)', border: `2px solid ${intern.color}`,
                  borderRadius: '999px', fontSize: '0.85rem', fontWeight: 900,
                  color: intern.color, fontFamily: "'JetBrains Mono', monospace"
                }}>
                  {intern.badge}
                </div>
                <div style={{
                  position: 'absolute', top: '1.5rem', left: '1.5rem',
                  padding: '0.6rem 1.5rem', background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(10px)', border: `2px solid ${getRarityColor(intern.rarity)}`,
                  borderRadius: '999px', fontSize: '0.85rem', fontWeight: 900,
                  color: getRarityColor(intern.rarity), fontFamily: "'JetBrains Mono', monospace",
                  display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}>
                  <Star size={16} fill={getRarityColor(intern.rarity)} />
                  {intern.rarity}
                </div>
              </div>

              <h3 style={{
                fontSize: '2rem', fontWeight: 800, color: intern.color,
                marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif"
              }}>
                {intern.title}
              </h3>

              <div style={{
                fontSize: '1.15rem', color: '#d0d8f0', marginBottom: '1rem',
                fontWeight: 600
              }}>
                {intern.company}
              </div>

              <div style={{
                fontSize: '1rem', color: '#a8b0d0', marginBottom: '2rem',
                display: 'flex', alignItems: 'center', gap: '0.7rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <MapPin size={18} />
                {intern.location} • {intern.duration}
              </div>

              <div className="glass-card" style={{
                padding: '1rem',
                borderRadius: '16px',
                border: `1px solid ${intern.color}30`,
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: `${intern.color}05`
              }}>
                <Trophy size={20} style={{ color: intern.color, flexShrink: 0 }} />
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e2e8f0'
                }}>
                  {intern.impact}
                </span>
              </div>

              {/* Score */}
              <div style={{
                display: 'inline-block', padding: '0.8rem 2rem',
                background: `rgba(${intern.glowRGB}, 0.15)`, border: `2px solid ${intern.color}`,
                borderRadius: '999px', fontSize: '1.3rem', fontWeight: 900,
                color: intern.color, fontFamily: "'Orbitron', sans-serif"
              }}>
                {intern.rating}% RATING
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const GridView = () => (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '4rem', padding: '3rem 0'
    }}>
      {filteredInternships.map((intern, i) => {
        const Icon = intern.icon;
        return (
          <div
            key={intern.id}
            onMouseEnter={() => setHoveredId(intern.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setActiveIntern(intern)}
            className="glass-card"
            style={{
              background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(40px)',
              border: `3px solid ${hoveredId === intern.id ? intern.color : 'rgba(255, 255, 255, 0.12)'}`,
              borderRadius: '32px', overflow: 'hidden', cursor: 'pointer',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hoveredId === intern.id ? 'translateY(-20px) scale(1.03)' : 'translateY(0)',
              boxShadow: hoveredId === intern.id 
                ? `0 40px 100px rgba(${intern.glowRGB}, 0.6)` 
                : '0 10px 40px rgba(0,0,0,0.3)',
              animation: `slide-up 0.8s ease-out ${i * 0.2}s both`
            }}
          >
            <div style={{ height: '320px', position: 'relative' }}>
              <img src={getCertificateUrl(intern.certId)} alt={intern.company} style={{
                width: '100%', height: '100%', objectFit: 'cover',
                transform: hoveredId === intern.id ? 'scale(1.25)' : 'scale(1.1)',
                transition: 'transform 1s'
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(to top, rgba(0,0,0,0.95), transparent 70%)`
              }} />
              <div style={{
                position: 'absolute', top: '2rem', right: '2rem',
                padding: '0.7rem 1.8rem', background: `rgba(${intern.glowRGB}, 0.3)`,
                backdropFilter: 'blur(12px)', border: `3px solid ${intern.color}`,
                borderRadius: '999px', fontSize: '0.9rem', fontWeight: 900,
                color: intern.color, fontFamily: "'JetBrains Mono', monospace",
                display: 'flex', alignItems: 'center', gap: '0.6rem'
              }}>
                <Flame size={16} />
                {intern.badge}
              </div>
              <div style={{
                position: 'absolute', top: '2rem', left: '2rem',
                padding: '0.7rem 1.8rem', background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(12px)', border: `3px solid ${getRarityColor(intern.rarity)}`,
                borderRadius: '999px', fontSize: '0.9rem', fontWeight: 900,
                color: getRarityColor(intern.rarity), fontFamily: "'JetBrains Mono', monospace",
                display: 'flex', alignItems: 'center', gap: '0.6rem',
                boxShadow: `0 0 30px ${getRarityColor(intern.rarity)}`
              }}>
                <Star size={16} fill={getRarityColor(intern.rarity)} />
                {intern.rarity}
              </div>
            </div>

            <div style={{ padding: '3rem 2.5rem' }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '20px',
                  background: `rgba(${intern.glowRGB}, 0.15)`, border: `3px solid ${intern.color}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 0 30px ${intern.color}`
                }}>
                  <Icon size={40} color={intern.color} strokeWidth={3} />
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '2.8rem', fontWeight: 900, color: intern.color,
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {intern.rating}%
                  </div>
                  <div style={{
                    fontSize: '0.85rem', color: '#a0a8c0',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    RATING
                  </div>
                </div>
              </div>

              <h3 style={{
                fontSize: '1.9rem', fontWeight: 800, color: intern.color,
                marginBottom: '1rem', lineHeight: 1.2
              }}>
                {intern.title}
              </h3>

              <div style={{
                fontSize: '1.15rem', color: '#d0d8f0', marginBottom: '0.8rem',
                fontWeight: 600
              }}>
                {intern.company}
              </div>

              <div style={{
                fontSize: '1rem', color: '#a8b0d0', marginBottom: '2rem',
                display: 'flex', alignItems: 'center', gap: '0.7rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <Calendar size={18} />
                {intern.period}
              </div>

              <div className="glass-card" style={{
                padding: '1rem',
                borderRadius: '16px',
                border: `1px solid ${intern.color}30`,
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: `${intern.color}05`
              }}>
                <Trophy size={20} style={{ color: intern.color, flexShrink: 0 }} />
                <span style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#e2e8f0'
                }}>
                  {intern.impact}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                {intern.tech.slice(0, 4).map(tech => (
                  <span key={tech} style={{
                    padding: '0.6rem 1.3rem', background: 'rgba(0,0,0,0.6)',
                    border: `2px solid ${intern.color}`, borderRadius: '999px',
                    fontSize: '0.85rem', color: intern.color,
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 600
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <a href={getViewUrl(intern.certId)} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                padding: '1rem',
                background: `linear-gradient(90deg, ${intern.color}, ${intern.secondaryColor})`,
                color: '#000',
                fontWeight: 800,
                borderRadius: '100px',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'all 0.3s',
                fontFamily: "'Orbitron', sans-serif"
              }}>
                <Award size={18} />
                View Certificate
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  const NetworkView = () => {
    const centerX = 50;
    const centerY = 50;
    const radius = 35;

    return (
      <div style={{
        position: 'relative', height: '900px', margin: '5rem 0'
      }}>
        <svg style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%'
        }}>
          {filteredInternships.map((intern, i) => {
            const angle = (i / filteredInternships.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            return (
              <g key={intern.id}>
                <line
                  x1={`${centerX}%`} y1={`${centerY}%`}
                  x2={`${x}%`} y2={`${y}%`}
                  stroke={intern.color}
                  strokeWidth={hoveredId === intern.id ? "4" : "2"}
                  opacity={hoveredId === intern.id ? "1" : "0.4"}
                  style={{
                    transition: 'all 0.4s',
                    filter: `drop-shadow(0 0 ${hoveredId === intern.id ? 20 : 8}px ${intern.color})`
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Center node */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #ff6b35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 100px rgba(0, 245, 255, 0.8)',
          border: '8px solid rgba(0,0,0,0.9)',
          animation: 'pulse-glow 3s infinite'
        }}>
          <div style={{ textAlign: 'center' }}>
            <Briefcase size={60} strokeWidth={3} />
            <div style={{
              fontFamily: "'Orbitron', sans-serif", fontSize: '1.2rem',
              fontWeight: 900, marginTop: '1rem'
            }}>
              INTERNSHIPS
            </div>
          </div>
        </div>

        {/* Internship nodes */}
        {filteredInternships.map((intern, i) => {
          const angle = (i / filteredInternships.length) * 2 * Math.PI - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const Icon = intern.icon;

          return (
            <div
              key={intern.id}
              onMouseEnter={() => setHoveredId(intern.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveIntern(intern)}
              style={{
                position: 'absolute', left: `${x}%`, top: `${y}%`,
                transform: `translate(-50%, -50%) scale(${hoveredId === intern.id ? 1.15 : 1})`,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '280px', background: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(30px)', border: `4px solid ${intern.color}`,
                borderRadius: '24px', padding: '2rem', textAlign: 'center',
                boxShadow: hoveredId === intern.id 
                  ? `0 30px 80px rgba(${intern.glowRGB}, 0.8)` 
                  : `0 10px 40px rgba(${intern.glowRGB}, 0.4)`
              }}>
                <div style={{
                  width: '100px', height: '100px', margin: '0 auto 1.5rem',
                  borderRadius: '50%', overflow: 'hidden', border: `4px solid ${intern.color}`
                }}>
                  <img src={getCertificateUrl(intern.certId)} alt={intern.company} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transform: hoveredId === intern.id ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.8s'
                  }} />
                </div>

                <div style={{
                  fontSize: '1.5rem', fontWeight: 900, color: intern.color,
                  fontFamily: "'Orbitron', sans-serif", marginBottom: '0.8rem'
                }}>
                  {intern.yearNum}
                </div>

                <div style={{
                  fontSize: '1.1rem', fontWeight: 700, color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  {intern.title.split(' Intern')[0]}
                </div>

                <div style={{
                  fontSize: '0.9rem', color: '#a8b0d0', marginBottom: '0.8rem',
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  {intern.company}
                </div>

                <div style={{
                  fontSize: '1.3rem', fontWeight: 900, color: intern.color,
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  {intern.rating}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const ImmersiveView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeInternItem = filteredInternships[activeIndex];
    const Icon = activeInternItem.icon;

    return (
      <div style={{
        position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden'
        }}>
          <img src={getCertificateUrl(activeInternItem.certId)} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'blur(20px) brightness(0.3)', transform: 'scale(1.2)'
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.95) 70%)`
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10, maxWidth: '1400px', width: '100%',
          display: 'flex', gap: '5rem', alignItems: 'center', flexWrap: 'wrap'
        }}>
          {/* Image */}
          <div style={{
            flex: 1, minWidth: '400px', position: 'relative'
          }}>
            <div style={{
              borderRadius: '40px', overflow: 'hidden',
              border: `6px solid ${activeInternItem.color}`,
              boxShadow: `0 50px 150px rgba(${activeInternItem.glowRGB}, 0.8)`,
              position: 'relative', aspectRatio: '4/3'
            }}>
              <img src={getCertificateUrl(activeInternItem.certId)} alt={activeInternItem.company} style={{
                width: '100%', height: '100%', objectFit: 'cover'
              }} />
              <div style={{
                position: 'absolute', top: '3rem', right: '3rem',
                width: '120px', height: '120px', borderRadius: '50%',
                background: `rgba(${activeInternItem.glowRGB}, 0.3)`,
                backdropFilter: 'blur(20px)', border: `5px solid ${activeInternItem.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 60px ${activeInternItem.color}`
              }}>
                <Icon size={55} color={activeInternItem.color} strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Details */}
          <div style={{ flex: 1, minWidth: '400px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '1rem',
              padding: '0.8rem 2rem',
              background: `rgba(${activeInternItem.glowRGB}, 0.2)`,
              border: `3px solid ${activeInternItem.color}`,
              borderRadius: '999px', marginBottom: '2rem',
              fontSize: '1rem', fontWeight: 900, color: activeInternItem.color,
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              <Star size={18} fill={getRarityColor(activeInternItem.rarity)} />
              {activeInternItem.badge} • {activeInternItem.rarity}
            </div>

            <h2 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: `linear-gradient(135deg, ${activeInternItem.color}, #fff)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '2rem', lineHeight: 1.1
            }}>
              {activeInternItem.title}
            </h2>

            <div style={{
              fontSize: '1.5rem', color: '#d0d8f0', marginBottom: '1.5rem',
              fontWeight: 600
            }}>
              {activeInternItem.company}
            </div>

            <div style={{
              fontSize: '1.1rem', color: '#a8b0d0', marginBottom: '3rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              fontFamily: "'JetBrains Mono', monospace", flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={22} />
                {activeInternItem.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={22} />
                {activeInternItem.period}
              </div>
            </div>

            <div className="glass-card" style={{
              padding: '1.5rem',
              borderRadius: '20px',
              border: `2px solid ${activeInternItem.color}40`,
              marginBottom: '3rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              background: `${activeInternItem.color}05`
            }}>
              <Trophy size={28} style={{ color: activeInternItem.color, flexShrink: 0 }} />
              <span style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#e2e8f0'
              }}>
                {activeInternItem.impact}
              </span>
            </div>

            {/* Score */}
            <div style={{
              display: 'inline-block', padding: '1.5rem 4rem',
              background: activeInternItem.gradient,
              borderRadius: '999px', fontSize: '2.5rem', fontWeight: 900,
              color: '#000', fontFamily: "'Orbitron', sans-serif",
              boxShadow: `0 20px 60px rgba(${activeInternItem.glowRGB}, 0.8)`,
              marginBottom: '3rem'
            }}>
              {activeInternItem.rating}%
            </div>

            {/* Tech Stack */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem'
            }}>
              {activeInternItem.tech.map(tech => (
                <span key={tech} style={{
                  padding: '0.8rem 1.8rem', background: 'rgba(0,0,0,0.7)',
                  border: `2.5px solid ${activeInternItem.color}`,
                  borderRadius: '999px', fontSize: '1rem', color: activeInternItem.color,
                  fontFamily: "'JetBrains Mono', monospace", fontWeight: 700
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveIndex((activeIndex - 1 + filteredInternships.length) % filteredInternships.length)}
                style={{
                  padding: '1.2rem 2.5rem', background: 'rgba(255, 255, 255, 0.1)',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '999px', color: '#fff', cursor: 'pointer',
                  fontFamily: "'Orbitron', sans-serif", fontSize: '1rem',
                  fontWeight: 800, transition: 'all 0.3s',
                  backdropFilter: 'blur(10px)'
                }}
              >
                ← PREVIOUS
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % filteredInternships.length)}
                style={{
                  padding: '1.2rem 2.5rem', background: activeInternItem.gradient,
                  border: 'none', borderRadius: '999px', color: '#000',
                  cursor: 'pointer', fontFamily: "'Orbitron', sans-serif",
                  fontSize: '1rem', fontWeight: 800, transition: 'all 0.3s',
                  boxShadow: `0 15px 40px rgba(${activeInternItem.glowRGB}, 0.6)`
                }}
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div style={{
          position: 'absolute', bottom: '3rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex', gap: '1rem'
        }}>
          {filteredInternships.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '60px' : '15px',
                height: '15px', borderRadius: '999px',
                background: i === activeIndex 
                  ? activeInternItem.color 
                  : 'rgba(255, 255, 255, 0.3)',
                border: 'none', cursor: 'pointer', transition: 'all 0.4s',
                boxShadow: i === activeIndex 
                  ? `0 0 30px ${activeInternItem.color}` 
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="advanced-internships">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .advanced-internships {
          font-family: 'Inter', sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }

        @keyframes slide-up {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 40px currentColor; }
          50% { box-shadow: 0 0 80px currentColor, 0 0 120px currentColor; }
        }

        @keyframes pulse-node {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .view-mode-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 50px rgba(0, 245, 255, 0.4);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1024px) {
          .timeline-card { width: 100% !important; }
        }
      `}</style>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '5px', zIndex: 10000,
        background: 'rgba(0,0,0,0.8)'
      }}>
        <div style={{
          width: `${scrollProgress}%`, height: '100%',
          background: 'linear-gradient(90deg, #00f5ff, #a78bfa, #ff6b35)',
          boxShadow: '0 0 30px currentColor', transition: 'width 0.1s'
        }} />
      </div>

      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'fixed', 
          inset: 0, 
          pointerEvents: 'none', 
          zIndex: 1
        }} 
      />

      {/* Gradient Orbs Background Layer */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '10%',
          left: '10%',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 20s ease-in-out infinite',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }} />
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '60%',
          right: '10%',
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 25s ease-in-out infinite reverse',
          animationDelay: '-5s',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
        }} />
        <div style={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          bottom: '20%',
          left: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 53, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 30s ease-in-out infinite',
          animationDelay: '-10s',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        opacity: 0.3
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, maxWidth: '1800px', margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem)', paddingTop: 'clamp(6rem, 12vw, 8rem)',
        paddingBottom: '8rem'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            fontFamily: "'JetBrains Mono', monospace", color: '#00f5ff',
            fontSize: '1rem', padding: '1rem 2.5rem',
            border: '3px solid rgba(0, 245, 255, 0.4)', borderRadius: '999px',
            marginBottom: '2.5rem', background: 'rgba(0, 245, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 40px rgba(0, 245, 255, 0.3)'
          }}>
            <Terminal size={20} strokeWidth={3} />
            <span style={{ fontWeight: 700, letterSpacing: '2px' }}>
              PROFESSIONAL.EXPERIENCE.SYSTEM
            </span>
            <Activity size={20} strokeWidth={3} />
          </div>

          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif", letterSpacing: '8px',
            textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1,
            background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #ff6b35)',
            backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', animation: 'gradient-shift 6s ease infinite'
          }}>
            INTERNSHIPS
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#c8d0e8',
            maxWidth: '900px', margin: '0 auto 4rem', lineHeight: 1.9,
            fontWeight: 500
          }}>
            Elite experience across Full-Stack Engineering, Artificial Intelligence & Data Science
            <br/>
            <span style={{
              color: '#00f5ff', fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.05rem', display: 'inline-block', marginTop: '1rem'
            }}>
              [ 2024 → 2025 ] • 7+ Months of Industry Experience
            </span>
          </p>

          <ViewModeSelector />

          {/* Filter Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            {['ALL', 'LEGENDARY', 'EPIC'].map((filter) => (
              <button key={filter} onClick={() => setSelectedFilter(filter)} className="glass-card" style={{
                padding: '0.875rem 2rem',
                borderRadius: '100px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: selectedFilter === filter ? 'linear-gradient(135deg, #00f5ff, #a78bfa)' : 'rgba(255, 255, 255, 0.03)',
                color: selectedFilter === filter ? '#000' : '#a0aec0',
                border: selectedFilter === filter ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: "'Orbitron', sans-serif"
              }}>
                {filter === 'ALL' ? '⚡ All' : `✨ ${filter}`}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic View Rendering */}
        {viewMode === "timeline" && <TimelineView />}
        {viewMode === "grid" && <GridView />}
        {viewMode === "network" && <NetworkView />}
        {viewMode === "immersive" && <ImmersiveView />}

        {/* Stats Section */}
        <section className="glass-card" style={{
          padding: 'clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
          borderRadius: '32px',
          marginTop: '8rem',
          marginBottom: '6rem',
          border: '1px solid rgba(0, 245, 255, 0.3)'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '3rem',
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #ff6b35)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-shift 6s linear infinite'
          }}>
            CAREER IMPACT
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {[
              { label: 'Experience', value: '7+', unit: 'Months', icon: Clock, color: '#00f5ff' },
              { label: 'Companies', value: '3', unit: 'Elite', icon: Shield, color: '#a78bfa' },
              { label: 'Projects', value: '15+', unit: 'Built', icon: Rocket, color: '#ec4899' },
              { label: 'Technologies', value: '25+', unit: 'Skills', icon: Zap, color: '#10b981' },
              { label: 'Success Rate', value: '95%', unit: 'Average', icon: TrendingUp, color: '#fbbf24' },
              { label: 'Certificates', value: '3', unit: 'Verified', icon: Award, color: '#f97316' }
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div key={i} className="glass-card" style={{
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  borderRadius: '24px',
                  textAlign: 'center',
                  border: `1px solid ${stat.color}40`,
                  transition: 'all 0.4s',
                  cursor: 'pointer'
                }}>
                  <div style={{
                    width: 'clamp(50px, 12vw, 60px)',
                    height: 'clamp(50px, 12vw, 60px)',
                    margin: '0 auto 1rem',
                    background: `${stat.color}20`,
                    border: `2px solid ${stat.color}40`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <StatIcon size={28} style={{ color: stat.color }} />
                  </div>
                  <div style={{
                    fontSize: 'clamp(2rem, 6vw, 3rem)',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.5rem',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: '#fff',
                    fontWeight: 700,
                    marginBottom: '0.25rem'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                    color: '#94a3b8',
                    fontWeight: 500
                  }}>
                    {stat.unit}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <div className="glass-card" style={{
          padding: 'clamp(4rem, 10vw, 6rem) clamp(2.5rem, 5vw, 4rem)',
          textAlign: 'center', borderColor: 'rgba(0, 245, 255, 0.4)',
          background: 'rgba(0, 20, 40, 0.5)', backdropFilter: 'blur(40px)',
          borderRadius: '40px', border: '3px solid rgba(0, 245, 255, 0.4)'
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #ff6b35)',
            backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', marginBottom: '2.5rem',
            letterSpacing: '4px', animation: 'gradient-shift 6s linear infinite'
          }}>
            LET'S BUILD TOGETHER
          </h2>

          <p style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)', color: '#d0d8f0',
            maxWidth: '850px', margin: '0 auto 4rem', lineHeight: 2
          }}>
            Ready to collaborate on cutting-edge projects and innovative solutions
          </p>

          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/bhagavan444"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.5rem 3.5rem', borderRadius: '999px', fontSize: '1.05rem',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '1.2rem', background: 'linear-gradient(135deg, #00f5ff, #0099ff)',
                color: '#000', fontWeight: 800, fontFamily: "'Orbitron', sans-serif",
                border: 'none', cursor: 'pointer', transition: 'all 0.4s',
                boxShadow: '0 15px 50px rgba(0, 245, 255, 0.5)'
              }}
            >
              <GitBranch size={24} strokeWidth={3} />
              VIEW PROJECTS
              <ExternalLink size={24} strokeWidth={3} />
            </a>

            <a
              href="mailto:g.sivasatyasaibhagavan@gmail.com"
              style={{
                padding: '1.5rem 3.5rem', borderRadius: '999px', fontSize: '1.05rem',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '1.2rem', background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                color: '#000', fontWeight: 800, fontFamily: "'Orbitron', sans-serif",
                border: 'none', cursor: 'pointer', transition: 'all 0.4s',
                boxShadow: '0 15px 50px rgba(168, 85, 247, 0.5)'
              }}
            >
              <Sparkles size={24} strokeWidth={3} />
              START CONVERSATION
              <Rocket size={24} strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {activeIntern && (
        <div onClick={() => setActiveIntern(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.97)',
          backdropFilter: 'blur(25px)', zIndex: 9999, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '2rem',
          animation: 'slide-up 0.4s ease-out', overflowY: 'auto'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'rgba(5, 5, 30, 0.95)', border: `5px solid ${activeIntern.color}`,
            borderRadius: '40px', maxWidth: '1100px', width: '95%', maxHeight: '90vh',
            overflowY: 'auto', position: 'relative',
            boxShadow: `0 0 200px rgba(${activeIntern.glowRGB}, 0.7)`,
            backdropFilter: 'blur(30px)'
          }}>
            <button onClick={() => setActiveIntern(null)} style={{
              position: 'absolute', top: '2rem', right: '2rem',
              background: 'rgba(255, 107, 53, 0.2)', border: '3px solid #ff6b35',
              borderRadius: '50%', width: '55px', height: '55px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#ff6b35', cursor: 'pointer', backdropFilter: 'blur(10px)',
              transition: 'all 0.3s', zIndex: 10
            }}>
              <X size={28} strokeWidth={3.5} />
            </button>

            <div style={{ padding: '3.5rem 3rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '1rem',
                padding: '0.7rem 2rem',
                background: `rgba(${activeIntern.glowRGB}, 0.2)`,
                border: `3px solid ${activeIntern.color}`, borderRadius: '999px',
                marginBottom: '2rem', fontSize: '0.95rem', fontWeight: 900,
                color: activeIntern.color, fontFamily: "'JetBrains Mono', monospace"
              }}>
                <Star size={18} fill={getRarityColor(activeIntern.rarity)} />
                {activeIntern.badge} • {activeIntern.rarity}
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                background: `linear-gradient(135deg, ${activeIntern.color}, #fff)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem', lineHeight: 1.1
              }}>
                {activeIntern.title}
              </h2>

              <div style={{
                fontSize: '1.3rem', color: '#d0d8f0', marginBottom: '1rem',
                fontWeight: 600
              }}>
                {activeIntern.company}
              </div>

              <div style={{
                fontSize: '1.05rem', color: '#a8b0d0', marginBottom: '2.5rem',
                display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin size={20} />
                  {activeIntern.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar size={20} />
                  {activeIntern.period}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={20} />
                  {activeIntern.duration}
                </div>
              </div>

              <div className="glass-card" style={{
                padding: '1.5rem',
                borderRadius: '20px',
                border: `2px solid ${activeIntern.color}40`,
                marginBottom: '3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: `${activeIntern.color}05`
              }}>
                <Trophy size={28} style={{ color: activeIntern.color, flexShrink: 0 }} />
                <span style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#e2e8f0'
                }}>
                  {activeIntern.impact}
                </span>
              </div>

              <div style={{
                fontSize: '0.95rem', color: activeIntern.color,
                fontFamily: "'JetBrains Mono', monospace", marginBottom: '1.5rem',
                fontWeight: 700, letterSpacing: '2px'
              }}>
                &lt;KEY_ACHIEVEMENTS/&gt;
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {activeIntern.achievements.map((ach, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '1.3rem',
                    padding: '1.3rem', background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '18px', border: `2px solid rgba(${activeIntern.glowRGB}, 0.3)`
                  }}>
                    <CheckCircle2 size={22} style={{ color: activeIntern.color }} strokeWidth={3} />
                    <span style={{ fontSize: '1.1rem', color: '#f0f8ff' }}>{ach}</span>
                  </div>
                ))}
              </div>

              <div style={{
                fontSize: '0.95rem', color: activeIntern.color,
                fontFamily: "'JetBrains Mono', monospace", marginBottom: '1.5rem',
                fontWeight: 700, letterSpacing: '2px'
              }}>
                &lt;TECH_STACK/&gt;
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                {activeIntern.tech.map((tech) => (
                  <span key={tech} className="glass-card" style={{
                    padding: '0.8rem 1.8rem',
                    borderRadius: '100px',
                    border: `2px solid ${activeIntern.color}60`,
                    color: activeIntern.color,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <a
                  href={getViewUrl(activeIntern.certId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.4rem 3.2rem', borderRadius: '999px', fontSize: '1.15rem',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                    gap: '1.3rem', background: activeIntern.gradient, color: '#000',
                    fontWeight: 800, fontFamily: "'Orbitron', sans-serif",
                    boxShadow: `0 20px 60px rgba(${activeIntern.glowRGB}, 0.7)`,
                    transition: 'all 0.4s'
                  }}
                >
                  <Award size={26} strokeWidth={3} />
                  VIEW CERTIFICATE
                  <ExternalLink size={26} strokeWidth={3} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}