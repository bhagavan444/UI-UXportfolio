"use client";

import React, { useState, useEffect, useRef } from 'react';
import {
  Code, Brain, Database, Terminal, Award, ExternalLink, X,
  CheckCircle2, Sparkles, Zap, Trophy, Target, Flame,
  Star, Rocket, Clock, MapPin, Calendar, TrendingUp, Shield,
  Activity, Users, Cpu, GitBranch, Briefcase, Eye, Heart,
  Grid3x3, Maximize2, Search, Layers, ArrowRight, Bookmark
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
    gradient: "linear-gradient(135deg, #00f5ff 0%, #0099ff 100%)",
    icon: Code,
    rating: 98,
    year: 2025,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Git", "Cloud"],
    impact: "Built production apps serving 1000+ users",
    achievements: [
      "🚀 Built 3+ full-stack web applications",
      "🔐 Implemented secure login & role-based access",
      "⚡ Optimized API performance and database queries",
      "☁️ Deployed applications to cloud environments"
    ],
    metrics: [
      { label: "Apps Built", value: "3+", icon: Layers },
      { label: "Users Served", value: "1K+", icon: Users },
      { label: "Uptime", value: "99%", icon: Activity }
    ],
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
    gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    icon: Brain,
    rating: 95,
    year: 2025,
    tech: ["Python", "TensorFlow", "Scikit-learn", "CNN", "OpenCV", "Flask"],
    impact: "Achieved 85%+ accuracy on ML models",
    achievements: [
      "🧠 Built and evaluated 5+ ML/DL models",
      "🎯 Achieved 85%+ accuracy on image classification",
      "🔄 Implemented end-to-end ML pipelines",
      "⏱️ Delivered working AI demos within deadlines"
    ],
    metrics: [
      { label: "Models Built", value: "5+", icon: Brain },
      { label: "Accuracy", value: "85%", icon: Target },
      { label: "Projects", value: "4", icon: Rocket }
    ],
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
    color: "#10b981",
    glowRGB: "16, 185, 129",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: Database,
    rating: 92,
    year: 2024,
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Analysis", "Feature Engineering"],
    impact: "Processed 100K+ data records efficiently",
    achievements: [
      "📊 Built multiple ML models from scratch",
      "🔧 Implemented feature engineering pipelines",
      "📈 Improved data quality and model accuracy",
      "💡 Strengthened foundation in data science workflows"
    ],
    metrics: [
      { label: "Data Processed", value: "100K+", icon: Database },
      { label: "Models", value: "6", icon: TrendingUp },
      { label: "Accuracy", value: "92%", icon: CheckCircle2 }
    ],
  }
];

export default function PremiumInternships() {
  const [viewMode, setViewMode] = useState("immersive");
  const [hoveredId, setHoveredId] = useState(null);
  const [activeIntern, setActiveIntern] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [liked, setLiked] = useState(new Set());
  const [bookmarked, setBookmarked] = useState(new Set());
  const canvasRef = useRef(null);

  // Filtered internships - MUST be declared before any component that uses it
  const filteredInternships = internships
    .filter(i => selectedFilter === 'ALL' || i.rarity === selectedFilter)
    .filter(i =>
      i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.company.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Particle background effect
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
        this.y = -10;
        this.speed = Math.random() * 2 + 0.5;
        this.radius = Math.random() * 2.5 + 0.5;
        this.color = ['0, 245, 255', '167, 139, 250', '16, 185, 129'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.5 + 0.3;
        this.drift = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.y += this.speed;
        this.x += this.drift;
        if (this.y > canvas.height + 10) this.reset();
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

    const particles = Array.from({ length: 100 }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - dist / 100)})`;
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

  // Scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-slide for immersive view
  useEffect(() => {
    if (viewMode === "immersive" && filteredInternships.length > 0) {
      const timer = setInterval(() => {
        setActiveSlide(prev => (prev + 1) % filteredInternships.length);
      }, 8000);
      return () => clearInterval(timer);
    }
  }, [viewMode, filteredInternships.length]);

  const getCertificateUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  const getViewUrl = (id) => `https://drive.google.com/file/d/${id}/view`;

  const getRarityColor = (rarity) => {
    const colors = { 'LEGENDARY': '#ffd700', 'EPIC': '#a78bfa' };
    return colors[rarity] || '#00f5ff';
  };

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

  // ────────────────────────────────────────────────
  // IMMERSIVE CAROUSEL VIEW
  // ────────────────────────────────────────────────
  const ImmersiveCarousel = () => {
    if (filteredInternships.length === 0) return null;

    const activeInternItem = filteredInternships[activeSlide] || filteredInternships[0];
    const Icon = activeInternItem.icon;

    return (
      <div style={{ position: 'relative', minHeight: '100vh', marginBottom: '8rem' }}>
        {/* Blurred background */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={getCertificateUrl(activeInternItem.certId)}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(30px) brightness(0.2)',
              transform: 'scale(1.2)'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.95) 80%)'
          }} />
        </div>

        {/* Main content */}
        <div style={{
          position: 'relative', zIndex: 10, padding: '8rem 2rem',
          maxWidth: '1600px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '6rem', alignItems: 'center'
        }}>
          {/* Certificate + floating elements + metrics */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '40px', overflow: 'hidden',
              border: `6px solid ${activeInternItem.color}`,
              boxShadow: `0 60px 200px rgba(${activeInternItem.glowRGB}, 0.8)`,
              aspectRatio: '4/3',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <img
                src={getCertificateUrl(activeInternItem.certId)}
                alt={activeInternItem.company}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Floating tech icon */}
              <div style={{
                position: 'absolute', top: '3rem', right: '3rem',
                width: '140px', height: '140px', borderRadius: '50%',
                background: `rgba(${activeInternItem.glowRGB}, 0.2)`,
                backdropFilter: 'blur(20px)',
                border: `6px solid ${activeInternItem.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 80px ${activeInternItem.color}`,
                animation: 'pulse-glow 3s infinite'
              }}>
                <Icon size={65} color={activeInternItem.color} strokeWidth={3} />
              </div>

              {/* Rarity badge */}
              <div style={{
                position: 'absolute', top: '3rem', left: '3rem',
                padding: '1rem 2.5rem', background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(20px)',
                border: `4px solid ${getRarityColor(activeInternItem.rarity)}`,
                borderRadius: '999px', fontSize: '1.1rem', fontWeight: 900,
                color: getRarityColor(activeInternItem.rarity),
                fontFamily: "'Orbitron', sans-serif",
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                boxShadow: `0 0 40px ${getRarityColor(activeInternItem.rarity)}`
              }}>
                <Star size={22} fill={getRarityColor(activeInternItem.rarity)} />
                {activeInternItem.rarity}
              </div>
            </div>

            {/* Metrics grid */}
            <div style={{
              marginTop: '3rem', display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'
            }}>
              {activeInternItem.metrics.map((metric, i) => {
                const MetricIcon = metric.icon;
                return (
                  <div key={i} className="glass-card" style={{
                    padding: '1.5rem', borderRadius: '20px',
                    border: `2px solid ${activeInternItem.color}40`,
                    textAlign: 'center', background: `${activeInternItem.color}05`
                  }}>
                    <MetricIcon size={28} style={{ color: activeInternItem.color, marginBottom: '0.8rem' }} />
                    <div style={{
                      fontSize: '2rem', fontWeight: 900,
                      color: activeInternItem.color, fontFamily: "'Orbitron', sans-serif",
                      marginBottom: '0.3rem'
                    }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#a0aec0' }}>
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details section */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '1rem',
              padding: '1rem 3rem', background: `rgba(${activeInternItem.glowRGB}, 0.15)`,
              border: `4px solid ${activeInternItem.color}`, borderRadius: '999px',
              marginBottom: '2.5rem', fontSize: '1.1rem', fontWeight: 900,
              color: activeInternItem.color, fontFamily: "'JetBrains Mono', monospace",
              boxShadow: `0 0 40px ${activeInternItem.color}`
            }}>
              <Flame size={22} />
              {activeInternItem.badge}
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: `linear-gradient(135deg, ${activeInternItem.color}, #fff)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '2rem', lineHeight: 1.1, letterSpacing: '-2px'
            }}>
              {activeInternItem.title}
            </h2>

            {/* Company */}
            <div style={{
              fontSize: '1.8rem', color: '#e2e8f0', marginBottom: '2rem',
              fontWeight: 700, display: 'flex', alignItems: 'center', gap: '1rem'
            }}>
              <Briefcase size={32} style={{ color: activeInternItem.color }} />
              {activeInternItem.company}
            </div>

            {/* Meta info */}
            <div style={{
              fontSize: '1.15rem', color: '#cbd5e0', marginBottom: '3rem',
              display: 'flex', gap: '2rem', flexWrap: 'wrap',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <MapPin size={22} style={{ color: activeInternItem.color }} />
                {activeInternItem.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Calendar size={22} style={{ color: activeInternItem.color }} />
                {activeInternItem.period}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={22} style={{ color: activeInternItem.color }} />
                {activeInternItem.duration}
              </div>
            </div>

            {/* Impact highlight */}
            <div className="glass-card" style={{
              padding: '2rem', borderRadius: '24px',
              border: `3px solid ${activeInternItem.color}50`,
              marginBottom: '3rem', background: `${activeInternItem.color}08`,
              display: 'flex', alignItems: 'center', gap: '1.5rem'
            }}>
              <Trophy size={40} style={{ color: activeInternItem.color, flexShrink: 0 }} />
              <div>
                <div style={{
                  fontSize: '0.9rem', color: activeInternItem.color,
                  fontWeight: 700, marginBottom: '0.5rem',
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  IMPACT ACHIEVED
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                  {activeInternItem.impact}
                </div>
              </div>
            </div>

            {/* Rating circle */}
            <div style={{
              display: 'inline-block', padding: '2rem 5rem',
              background: activeInternItem.gradient, borderRadius: '999px',
              fontSize: '3.5rem', fontWeight: 900, color: '#000',
              fontFamily: "'Orbitron', sans-serif",
              boxShadow: `0 30px 80px rgba(${activeInternItem.glowRGB}, 0.8)`,
              marginBottom: '3rem'
            }}>
              {activeInternItem.rating}%
            </div>

            {/* Tech stack */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem'
            }}>
              {activeInternItem.tech.map(tech => (
                <span key={tech} style={{
                  padding: '1rem 2rem', background: 'rgba(0,0,0,0.7)',
                  border: `3px solid ${activeInternItem.color}`,
                  borderRadius: '999px', fontSize: '1.05rem',
                  color: activeInternItem.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700, backdropFilter: 'blur(10px)'
                }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <button onClick={() => setActiveIntern(activeInternItem)} style={{
                padding: '1.5rem 3.5rem', background: activeInternItem.gradient,
                border: 'none', borderRadius: '999px', color: '#000',
                fontSize: '1.15rem', fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                gap: '1rem', boxShadow: `0 20px 60px rgba(${activeInternItem.glowRGB}, 0.7)`,
                transition: 'all 0.3s'
              }}>
                <Eye size={24} />
                VIEW DETAILS
                <ArrowRight size={24} />
              </button>

              <a href={getViewUrl(activeInternItem.certId)} target="_blank" rel="noopener noreferrer" style={{
                padding: '1.5rem 3.5rem', background: 'rgba(255, 255, 255, 0.1)',
                border: `3px solid ${activeInternItem.color}`,
                borderRadius: '999px', color: '#fff',
                fontSize: '1.15rem', fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                cursor: 'pointer', display: 'flex', alignItems: 'center',
                gap: '1rem', backdropFilter: 'blur(10px)',
                textDecoration: 'none', transition: 'all 0.3s'
              }}>
                <Award size={24} />
                CERTIFICATE
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div style={{
          position: 'absolute', bottom: '4rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex', gap: '1.5rem',
          zIndex: 20
        }}>
          {filteredInternships.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              style={{
                width: i === activeSlide ? '80px' : '20px',
                height: '20px',
                borderRadius: '999px',
                background: i === activeSlide ? activeInternItem.color : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.5s',
                boxShadow: i === activeSlide ? `0 0 40px ${activeInternItem.color}` : 'none'
              }}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setActiveSlide((activeSlide - 1 + filteredInternships.length) % filteredInternships.length)}
          style={{
            position: 'absolute', left: '3rem', top: '50%',
            transform: 'translateY(-50%)', width: '70px', height: '70px',
            borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)',
            border: `3px solid ${activeInternItem.color}`,
            color: activeInternItem.color, cursor: 'pointer',
            backdropFilter: 'blur(10px)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', fontWeight: 900, zIndex: 20,
            transition: 'all 0.3s'
          }}
        >
          ←
        </button>

        <button
          onClick={() => setActiveSlide((activeSlide + 1) % filteredInternships.length)}
          style={{
            position: 'absolute', right: '3rem', top: '50%',
            transform: 'translateY(-50%)', width: '70px', height: '70px',
            borderRadius: '50%', background: 'rgba(255, 255, 255, 0.1)',
            border: `3px solid ${activeInternItem.color}`,
            color: activeInternItem.color, cursor: 'pointer',
            backdropFilter: 'blur(10px)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', fontWeight: 900, zIndex: 20,
            transition: 'all 0.3s'
          }}
        >
          →
        </button>
      </div>
    );
  };

  // ────────────────────────────────────────────────
  // GRID VIEW
  // ────────────────────────────────────────────────
  const GridView = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '4rem',
      padding: '5rem 0'
    }}>
      {filteredInternships.map((intern, i) => {
        const Icon = intern.icon;

        return (
          <div
            key={intern.id}
            onMouseEnter={() => setHoveredId(intern.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="glass-card"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(40px)',
              border: `3px solid ${hoveredId === intern.id ? intern.color : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '40px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: hoveredId === intern.id ? 'translateY(-20px) scale(1.02)' : 'translateY(0)',
              boxShadow: hoveredId === intern.id
                ? `0 50px 120px rgba(${intern.glowRGB}, 0.6)`
                : '0 20px 60px rgba(0,0,0,0.3)',
              animation: `slide-up 0.8s ease-out ${i * 0.15}s both`
            }}
          >
            {/* Certificate image */}
            <div style={{ height: '350px', position: 'relative' }}>
              <img
                src={getCertificateUrl(intern.certId)}
                alt={intern.company}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: hoveredId === intern.id ? 'scale(1.15)' : 'scale(1)',
                  transition: 'transform 1s'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.98), transparent 70%)'
              }} />

              {/* Badges */}
              <div style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                padding: '0.9rem 2rem',
                background: `rgba(${intern.glowRGB}, 0.25)`,
                backdropFilter: 'blur(15px)',
                border: `3px solid ${intern.color}`,
                borderRadius: '999px',
                fontSize: '1rem',
                fontWeight: 900,
                color: intern.color,
                fontFamily: "'JetBrains Mono', monospace",
                boxShadow: `0 0 30px ${intern.color}`
              }}>
                {intern.badge}
              </div>

              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                padding: '0.9rem 2rem',
                background: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(15px)',
                border: `3px solid ${getRarityColor(intern.rarity)}`,
                borderRadius: '999px',
                fontSize: '1rem',
                fontWeight: 900,
                color: getRarityColor(intern.rarity),
                fontFamily: "'JetBrains Mono', monospace",
                display: 'flex',
                alignItems: 'center',
                gap: '0.7rem',
                boxShadow: `0 0 30px ${getRarityColor(intern.rarity)}`
              }}>
                <Star size={18} fill={getRarityColor(intern.rarity)} />
                {intern.rarity}
              </div>

              {/* Like & Bookmark buttons */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                display: 'flex',
                gap: '1rem'
              }}>
                <button
                  onClick={(e) => handleLike(intern.id, e)}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${liked.has(intern.id) ? '#ec4899' : 'rgba(255,255,255,0.3)'}`,
                    color: liked.has(intern.id) ? '#ec4899' : '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <Heart size={20} fill={liked.has(intern.id) ? '#ec4899' : 'none'} />
                </button>

                <button
                  onClick={(e) => handleBookmark(intern.id, e)}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: `2px solid ${bookmarked.has(intern.id) ? '#fbbf24' : 'rgba(255,255,255,0.3)'}`,
                    color: bookmarked.has(intern.id) ? '#fbbf24' : '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}
                >
                  <Bookmark size={20} fill={bookmarked.has(intern.id) ? '#fbbf24' : 'none'} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '3rem 2.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '24px',
                  background: `rgba(${intern.glowRGB}, 0.15)`,
                  border: `3px solid ${intern.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 40px ${intern.color}`
                }}>
                  <Icon size={45} color={intern.color} strokeWidth={3} />
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    color: intern.color,
                    fontFamily: "'Orbitron', sans-serif",
                    lineHeight: 1
                  }}>
                    {intern.rating}%
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#a0aec0',
                    fontFamily: "'JetBrains Mono', monospace",
                    marginTop: '0.3rem'
                  }}>
                    RATING
                  </div>
                </div>
              </div>

              <h3 style={{
                fontSize: '2.2rem',
                fontWeight: 800,
                color: intern.color,
                marginBottom: '1rem',
                lineHeight: 1.2
              }}>
                {intern.title}
              </h3>

              <div style={{
                fontSize: '1.25rem',
                color: '#e2e8f0',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {intern.company}
              </div>

              <div style={{
                fontSize: '1.05rem',
                color: '#cbd5e0',
                marginBottom: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <Calendar size={20} />
                {intern.period} • {intern.duration}
              </div>

              <div className="glass-card" style={{
                padding: '1.5rem',
                borderRadius: '20px',
                border: `2px solid ${intern.color}40`,
                marginBottom: '2.5rem',
                background: `${intern.color}05`,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Trophy size={24} style={{ color: intern.color, flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#e2e8f0' }}>
                  {intern.impact}
                </span>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.9rem',
                marginBottom: '2.5rem'
              }}>
                {intern.tech.slice(0, 4).map(tech => (
                  <span key={tech} style={{
                    padding: '0.7rem 1.5rem',
                    background: 'rgba(0,0,0,0.6)',
                    border: `2px solid ${intern.color}`,
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    color: intern.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600
                  }}>
                    {tech}
                  </span>
                ))}

                {intern.tech.length > 4 && (
                  <span style={{
                    padding: '0.7rem 1.5rem',
                    background: `${intern.color}20`,
                    border: `2px solid ${intern.color}`,
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    color: intern.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700
                  }}>
                    +{intern.tech.length - 4}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <button
                  onClick={() => setActiveIntern(intern)}
                  style={{
                    flex: 1,
                    padding: '1.2rem',
                    background: intern.gradient,
                    border: 'none',
                    borderRadius: '100px',
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: 800,
                    fontFamily: "'Orbitron', sans-serif",
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    boxShadow: `0 15px 40px rgba(${intern.glowRGB}, 0.5)`,
                    transition: 'all 0.3s'
                  }}
                >
                  <Eye size={20} />
                  Details
                </button>

                <a
                  href={getViewUrl(intern.certId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${intern.color}`,
                    borderRadius: '100px',
                    color: intern.color,
                    fontSize: '1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s'
                  }}
                >
                  <Award size={20} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="premium-internships">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .premium-internships {
          font-family: 'Inter', sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
          min-height: 100vh;
          position: relative;
        }

        @keyframes slide-up {
          from { transform: translateY(100px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 40px currentColor; }
          50%      { box-shadow: 0 0 100px currentColor, 0 0 150px currentColor; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0);    }
          50%      { transform: translateY(-30px); }
        }

        @keyframes gradient-shift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 1024px) {
          .premium-internships > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: '6px', zIndex: 10000,
        background: 'rgba(0,0,0,0.9)'
      }}>
        <div style={{
          width: `${scrollProgress}%`,
          height: '100%',
          background: 'linear-gradient(90deg, #00f5ff, #a78bfa, #10b981)',
          boxShadow: '0 0 30px currentColor',
          transition: 'width 0.1s'
        }} />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed', inset: 0,
          pointerEvents: 'none', zIndex: 1
        }}
      />

      {/* Gradient Orbs */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none', overflow: 'hidden' }}>
        {[
          { size: '700px', top: '10%', left: '10%', color: '0, 245, 255', delay: '0s' },
          { size: '600px', top: '60%', right: '10%', color: '167, 139, 250', delay: '-5s' },
          { size: '550px', bottom: '20%', left: '50%', color: '16, 185, 129', delay: '-10s' }
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
              background: `radial-gradient(circle, rgba(${orb.color}, 0.15) 0%, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(80px)',
              animation: `float 20s ease-in-out infinite`,
              animationDelay: orb.delay
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '2000px',
        margin: '0 auto',
        padding: '0 clamp(2rem, 5vw, 4rem)',
        paddingTop: 'clamp(8rem, 15vw, 10rem)',
        paddingBottom: '10rem'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(6rem, 12vw, 10rem)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.2rem',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#00f5ff',
            fontSize: '1.1rem',
            padding: '1.2rem 3rem',
            border: '4px solid rgba(0, 245, 255, 0.5)',
            borderRadius: '999px',
            marginBottom: '3rem',
            background: 'rgba(0, 245, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 15px 60px rgba(0, 245, 255, 0.4)'
          }}>
            <Terminal size={24} strokeWidth={3} />
            <span style={{ fontWeight: 800, letterSpacing: '3px' }}>
              PROFESSIONAL EXPERIENCE VAULT
            </span>
            <Cpu size={24} strokeWidth={3} />
          </div>

          <h1 style={{
            fontSize: 'clamp(5rem, 15vw, 10rem)',
            fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: '10px',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            lineHeight: 0.95,
            background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #10b981)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-shift 6s ease infinite'
          }}>
            INTERNSHIPS
          </h1>

          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            color: '#d0d8f0',
            maxWidth: '1000px',
            margin: '0 auto 5rem',
            lineHeight: 2,
            fontWeight: 500
          }}>
            Elite Professional Experience • Full-Stack Engineering • AI/ML • Data Science
            <br />
            <span style={{
              color: '#00f5ff',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.15rem',
              display: 'inline-block',
              marginTop: '1.5rem',
              fontWeight: 700
            }}>
              [ 2024 → 2025 ] • 7+ MONTHS • 3 PREMIUM COMPANIES
            </span>
          </p>

          {/* Search & Filters */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 4rem',
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
              <Search size={22} style={{
                position: 'absolute',
                left: '2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#00f5ff'
              }} />
              <input
                type="text"
                placeholder="Search internships..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-card"
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem 1.5rem 5rem',
                  fontSize: '1.1rem',
                  color: '#fff',
                  border: '3px solid rgba(0, 245, 255, 0.3)',
                  borderRadius: '999px',
                  outline: 'none',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['ALL', 'LEGENDARY', 'EPIC'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  style={{
                    padding: '1.2rem 2.5rem',
                    borderRadius: '999px',
                    fontSize: '1rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: selectedFilter === filter
                      ? 'linear-gradient(135deg, #00f5ff, #a78bfa)'
                      : 'rgba(255, 255, 255, 0.05)',
                    color: selectedFilter === filter ? '#000' : '#cbd5e0',
                    border: selectedFilter === filter
                      ? 'none'
                      : '2px solid rgba(255, 255, 255, 0.15)',
                    fontFamily: "'Orbitron', sans-serif",
                    backdropFilter: 'blur(10px)',
                    boxShadow: selectedFilter === filter
                      ? '0 15px 50px rgba(0, 245, 255, 0.5)'
                      : 'none'
                  }}
                >
                  {filter === 'ALL' ? '⚡ ALL' : `✨ ${filter}`}
                </button>
              ))}
            </div>
          </div>

          {/* View Mode Selector */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { mode: "immersive", icon: Maximize2, label: "Immersive" },
              { mode: "grid", icon: Grid3x3, label: "Grid View" }
            ].map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                style={{
                  padding: '1.5rem 4rem',
                  background: viewMode === mode ? 'rgba(0, 245, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  border: viewMode === mode ? '4px solid #00f5ff' : '3px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '999px',
                  color: viewMode === mode ? '#00f5ff' : '#cbd5e0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  transition: 'all 0.4s',
                  backdropFilter: 'blur(10px)',
                  boxShadow: viewMode === mode ? '0 0 50px rgba(0, 245, 255, 0.6)' : 'none'
                }}
              >
                <Icon size={26} strokeWidth={3} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected View */}
        {viewMode === "immersive" && <ImmersiveCarousel />}
        {viewMode === "grid" && <GridView />}

        {/* Stats Section */}
        <section className="glass-card" style={{
          padding: 'clamp(4rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem)',
          borderRadius: '40px',
          marginTop: '10rem',
          border: '3px solid rgba(0, 245, 255, 0.4)',
          background: 'rgba(0, 20, 40, 0.4)'
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '5rem',
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #10b981)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradient-shift 6s linear infinite'
          }}>
            CAREER IMPACT
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)'
          }}>
            {[
              { label: 'Experience', value: '7+', unit: 'Months', icon: Clock, color: '#00f5ff' },
              { label: 'Companies', value: '3', unit: 'Elite', icon: Shield, color: '#a78bfa' },
              { label: 'Projects', value: '15+', unit: 'Built', icon: Rocket, color: '#ec4899' },
              { label: 'Technologies', value: '25+', unit: 'Mastered', icon: Zap, color: '#10b981' },
              { label: 'Success Rate', value: '95%', unit: 'Average', icon: TrendingUp, color: '#fbbf24' },
              { label: 'Certificates', value: '3', unit: 'Verified', icon: Award, color: '#f97316' }
            ].map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: 'clamp(2rem, 4vw, 3rem)',
                    borderRadius: '30px',
                    textAlign: 'center',
                    border: `2px solid ${stat.color}50`,
                    transition: 'all 0.4s',
                    cursor: 'pointer',
                    background: `${stat.color}05`
                  }}
                >
                  <div style={{
                    width: 'clamp(60px, 15vw, 80px)',
                    height: 'clamp(60px, 15vw, 80px)',
                    margin: '0 auto 1.5rem',
                    background: `${stat.color}20`,
                    border: `3px solid ${stat.color}50`,
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <StatIcon size={36} style={{ color: stat.color }} strokeWidth={3} />
                  </div>

                  <div style={{
                    fontSize: 'clamp(3rem, 8vw, 4rem)',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.8rem',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {stat.value}
                  </div>

                  <div style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    color: '#fff',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.label}
                  </div>

                  <div style={{
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)',
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
          padding: 'clamp(5rem, 12vw, 8rem) clamp(3rem, 6vw, 5rem)',
          textAlign: 'center',
          marginTop: '8rem',
          background: 'rgba(0, 20, 40, 0.6)',
          backdropFilter: 'blur(50px)',
          borderRadius: '50px',
          border: '4px solid rgba(0, 245, 255, 0.5)',
          boxShadow: '0 30px 100px rgba(0, 245, 255, 0.3)'
        }}>
          <h2 style={{
            fontSize: 'clamp(3.5rem, 10vw, 6rem)',
            fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #00f5ff, #a78bfa, #10b981)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '3rem',
            letterSpacing: '6px',
            animation: 'gradient-shift 6s linear infinite'
          }}>
            LET'S BUILD TOGETHER
          </h2>

          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
            color: '#e2e8f0',
            maxWidth: '900px',
            margin: '0 auto 5rem',
            lineHeight: 2
          }}>
            Ready to collaborate on cutting-edge projects and innovative solutions
          </p>

          <div style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://github.com/bhagavan444"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '2rem 4.5rem',
                borderRadius: '999px',
                fontSize: '1.2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: 'linear-gradient(135deg, #00f5ff, #0099ff)',
                color: '#000',
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.4s',
                boxShadow: '0 20px 60px rgba(0, 245, 255, 0.6)'
              }}
            >
              <GitBranch size={28} strokeWidth={3} />
              VIEW PROJECTS
              <ExternalLink size={28} strokeWidth={3} />
            </a>

            <a
              href="mailto:g.sivasatyasaibhagavan@gmail.com"
              style={{
                padding: '2rem 4.5rem',
                borderRadius: '999px',
                fontSize: '1.2rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                color: '#000',
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.4s',
                boxShadow: '0 20px 60px rgba(168, 85, 247, 0.6)'
              }}
            >
              <Sparkles size={28} strokeWidth={3} />
              START CONVERSATION
              <Rocket size={28} strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {activeIntern && (
        <div
          onClick={() => setActiveIntern(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(30px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem',
            animation: 'slide-up 0.4s ease-out',
            overflowY: 'auto'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'rgba(5, 5, 30, 0.98)',
              border: `6px solid ${activeIntern.color}`,
              borderRadius: '50px',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '95vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: `0 0 250px rgba(${activeIntern.glowRGB}, 0.8)`,
              backdropFilter: 'blur(40px)'
            }}
          >
            <button
              onClick={() => setActiveIntern(null)}
              style={{
                position: 'absolute',
                top: '2.5rem',
                right: '2.5rem',
                background: 'rgba(255, 107, 53, 0.2)',
                border: '4px solid #ff6b35',
                borderRadius: '50%',
                width: '65px',
                height: '65px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff6b35',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s',
                zIndex: 10
              }}
            >
              <X size={32} strokeWidth={4} />
            </button>

            <div style={{ padding: '4rem 4rem 5rem' }}>
              {/* Header Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '1rem 3rem',
                background: `rgba(${activeIntern.glowRGB}, 0.2)`,
                border: `4px solid ${activeIntern.color}`,
                borderRadius: '999px',
                marginBottom: '3rem',
                fontSize: '1.1rem',
                fontWeight: 900,
                color: activeIntern.color,
                fontFamily: "'JetBrains Mono', monospace",
                boxShadow: `0 0 50px ${activeIntern.color}`
              }}>
                <Star size={22} fill={getRarityColor(activeIntern.rarity)} />
                {activeIntern.badge} • {activeIntern.rarity}
              </div>

              <h2 style={{
                fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                background: `linear-gradient(135deg, ${activeIntern.color}, #fff)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '2rem',
                lineHeight: 1.1
              }}>
                {activeIntern.title}
              </h2>

              <div style={{
                fontSize: '1.6rem',
                color: '#e2e8f0',
                marginBottom: '1.5rem',
                fontWeight: 700
              }}>
                {activeIntern.company}
              </div>

              <div style={{
                fontSize: '1.2rem',
                color: '#cbd5e0',
                marginBottom: '3rem',
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <MapPin size={24} />
                  {activeIntern.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <Calendar size={24} />
                  {activeIntern.period}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <Clock size={24} />
                  {activeIntern.duration}
                </div>
              </div>

              {/* Impact Box */}
              <div className="glass-card" style={{
                padding: '2rem',
                borderRadius: '24px',
                border: `3px solid ${activeIntern.color}50`,
                marginBottom: '4rem',
                background: `${activeIntern.color}08`,
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem'
              }}>
                <Trophy size={36} style={{ color: activeIntern.color, flexShrink: 0 }} />
                <div>
                  <div style={{
                    fontSize: '1rem',
                    color: activeIntern.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 800,
                    marginBottom: '0.5rem',
                    letterSpacing: '2px'
                  }}>
                    IMPACT ACHIEVED
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>
                    {activeIntern.impact}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div style={{
                fontSize: '1.1rem',
                color: activeIntern.color,
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '2rem',
                fontWeight: 800,
                letterSpacing: '3px'
              }}>
                &lt;KEY_ACHIEVEMENTS/&gt;
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {activeIntern.achievements.map((ach, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.8rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '20px',
                    border: `3px solid rgba(${activeIntern.glowRGB}, 0.3)`
                  }}>
                    <CheckCircle2 size={28} style={{ color: activeIntern.color }} strokeWidth={3} />
                    <span style={{ fontSize: '1.25rem', color: '#f0f8ff' }}>
                      {ach}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div style={{
                fontSize: '1.1rem',
                color: activeIntern.color,
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '2rem',
                fontWeight: 800,
                letterSpacing: '3px'
              }}>
                &lt;TECH_STACK/&gt;
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '4rem'
              }}>
                {activeIntern.tech.map(tech => (
                  <span
                    key={tech}
                    className="glass-card"
                    style={{
                      padding: '1rem 2.5rem',
                      borderRadius: '999px',
                      border: `3px solid ${activeIntern.color}70`,
                      color: activeIntern.color,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Certificate CTA */}
              <div style={{ textAlign: 'center' }}>
                <a
                  href={getViewUrl(activeIntern.certId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '2rem 5rem',
                    borderRadius: '999px',
                    fontSize: '1.3rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.8rem',
                    background: activeIntern.gradient,
                    color: '#000',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    boxShadow: `0 25px 80px rgba(${activeIntern.glowRGB}, 0.8)`,
                    transition: 'all 0.4s'
                  }}
                >
                  <Award size={32} strokeWidth={3} />
                  VIEW CERTIFICATE
                  <ExternalLink size={32} strokeWidth={3} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}