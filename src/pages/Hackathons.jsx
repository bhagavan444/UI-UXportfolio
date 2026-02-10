"use client";

import { useState, useEffect } from "react";
import {
  Trophy, Award, X, Code, Database, Shield, Rocket,
  Clock, Users, Sparkles, Zap, Terminal,
  Download, Layers, CheckCircle2, ArrowRight,
  Server, Lock, Github, Mail, Container, Network,
  ChevronDown
} from "lucide-react";

export default function NextGenPortfolio() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [expandedTech, setExpandedTech] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const certUrl = "https://lh3.googleusercontent.com/d/1bkXJCzHQPbSSovbaLs4EPeKT1f9ERl5O";

  const phases = [
    {
      id: 1,
      time: "0-6h",
      title: "Foundation",
      desc: "Architecture design, MongoDB sharding, JWT auth, CI/CD setup",
      icon: Terminal,
      color: "#00ffff",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      achievements: ["Microservices Design", "MongoDB Sharding", "JWT Auth", "Docker Setup"],
      stack: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
      metrics: { code: 1200, apis: 5, tests: 15 }
    },
    {
      id: 2,
      time: "6-14h",
      title: "Development",
      desc: "REST APIs, Redux state, TypeScript components, real-time sync",
      icon: Code,
      color: "#a78bfa",
      gradient: "linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)",
      achievements: ["20+ API Endpoints", "TypeScript Library", "Redux Integration", "React Router"],
      stack: ["React 18", "TypeScript", "Redux", "Axios"],
      metrics: { code: 2100, apis: 10, tests: 35 }
    },
    {
      id: 3,
      time: "14-20h",
      title: "Security",
      desc: "Socket.io scaling, OAuth 2.0, rate limiting, logging system",
      icon: Shield,
      color: "#ff61d2",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      achievements: ["WebSocket + Redis", "OAuth 2.0", "Rate Limiting", "Winston Logger"],
      stack: ["Socket.io", "Redis", "OAuth", "Helmet.js"],
      metrics: { code: 1500, apis: 4, tests: 28 }
    },
    {
      id: 4,
      time: "20-24h",
      title: "Deployment",
      desc: "AWS ECS, CDN integration, monitoring, live demo dashboard",
      icon: Rocket,
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      achievements: ["AWS Deployment", "CloudFront CDN", "Prometheus", "Live Dashboard"],
      stack: ["Docker", "AWS", "Nginx", "Grafana"],
      metrics: { code: 200, apis: 1, tests: 12 }
    }
  ];

  const techStack = [
    { name: "MongoDB", icon: Database, skill: 95, color: "#10b981" },
    { name: "Express.js", icon: Server, skill: 92, color: "#00ffff" },
    { name: "React", icon: Sparkles, skill: 98, color: "#a78bfa" },
    { name: "Node.js", icon: Layers, skill: 90, color: "#ec4899" },
    { name: "JWT & OAuth", icon: Lock, skill: 88, color: "#f59e0b" },
    { name: "Socket.io", icon: Zap, skill: 85, color: "#3b82f6" },
    { name: "Docker", icon: Container, skill: 87, color: "#06b6d4" },
    { name: "Redis", icon: Network, skill: 84, color: "#dc2626" }
  ];

  const stats = [
    { label: "Duration", value: 24, unit: "hrs", icon: Clock, color: "#00ffff" },
    { label: "Team", value: 4, unit: "devs", icon: Users, color: "#a78bfa" },
    { label: "Code", value: 5000, unit: "lines", icon: Code, color: "#ff61d2" },
    { label: "Winner", value: "1st", unit: "place", icon: Trophy, color: "#ffd700" },
    { label: "APIs", value: 20, unit: "routes", icon: Server, color: "#f59e0b" },
    { label: "Tests", value: 90, unit: "%", icon: CheckCircle2, color: "#10b981" }
  ];

  const team = [
    { name: "Bhagavan", role: "Full-Stack", avatar: "🧑‍💻", contrib: "System Design & Backend", skills: ["Node", "Mongo", "AWS"], github: "https://github.com/bhagavan444" },
    { name: "Dhanus", role: "Frontend", avatar: "👩‍💻", contrib: "UI/UX & Components", skills: ["React", "TypeScript", "Redux"] },
    { name: "Pavan", role: "DevOps", avatar: "👨‍💻", contrib: "CI/CD & Infrastructure", skills: ["Docker", "K8s", "AWS"] },
    { name: "Rahul", role: "Security", avatar: "👩‍💻", contrib: "Auth Systems", skills: ["JWT", "OAuth", "Security"] }
  ];

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.dataset.section === 'stats') {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const glassStyle = {
    background: 'rgba(15, 15, 25, 0.7)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #00ffff, #a78bfa, #ff61d2, #10b981)',
    backgroundSize: '300% 300%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 8s ease infinite'
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          33% { transform: translateY(-15px); }
          66% { transform: translateY(-8px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes expand {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #020617, #0f172a, #020617)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Space Grotesk', sans-serif"
      }}>
        
        {/* Animated gradient overlay */}
        <div style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.3,
          pointerEvents: 'none'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: '25%',
            width: '384px',
            height: '384px',
            background: '#06b6d4',
            borderRadius: '50%',
            mixBlendMode: 'multiply',
            filter: 'blur(100px)',
            animation: 'float 15s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '33.333333%',
            right: '25%',
            width: '384px',
            height: '384px',
            background: '#a78bfa',
            borderRadius: '50%',
            mixBlendMode: 'multiply',
            filter: 'blur(100px)',
            animation: 'float 20s ease-in-out infinite',
            animationDelay: '2s'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '384px',
            height: '384px',
            background: '#ec4899',
            borderRadius: '50%',
            mixBlendMode: 'multiply',
            filter: 'blur(100px)',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '4s'
          }} />
        </div>

        {/* Main Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(3rem, 5vw, 4rem) clamp(1rem, 4vw, 4rem)',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Hero Section */}
          <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <div style={{
              ...glassStyle,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              marginBottom: '2rem',
              animation: 'pulse 3s ease infinite'
            }}>
              <Terminal size={18} style={{ color: '#06b6d4' }} />
              <span style={{ color: '#06b6d4', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem' }}>
                $ hackathon.execute()
              </span>
              <Sparkles size={18} style={{ color: '#06b6d4' }} />
            </div>

            <h1 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(3rem, 12vw, 8rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              lineHeight: 1
            }}>
              BRAINO VISION
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
              fontWeight: 700,
              background: 'linear-gradient(to right, #06b6d4, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '3rem'
            }}>
              National Championship 2024
            </h2>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              width: '100%',
              maxWidth: '1000px',
              marginBottom: '3rem'
            }}>
              {[
                { icon: Trophy, text: '1st Place', color: '#ffd700' },
                { icon: Users, text: '4 Devs', color: '#00ffff' },
                { icon: Clock, text: '24 Hours', color: '#a78bfa' },
                { icon: Code, text: '5K Lines', color: '#ff61d2' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{
                    ...glassStyle,
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    transform: hoveredItem === `quick-${i}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `quick-${i}` ? `0 20px 60px ${item.color}33` : 'none',
                    borderColor: hoveredItem === `quick-${i}` ? `${item.color}99` : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={() => setHoveredItem(`quick-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <item.icon size={24} style={{ color: item.color, filter: `drop-shadow(0 0 8px ${item.color})` }} />
                  <span style={{ fontWeight: 600, fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Certificate Preview */}
            <div style={{
              ...glassStyle,
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              width: '100%',
              maxWidth: '1000px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                flexWrap: 'wrap'
              }}>
                <Award size={32} style={{ color: '#ffd700', animation: 'bounce 2s ease-in-out infinite' }} />
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(to right, #ffd700, #ffed4e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  NATIONAL CHAMPIONSHIP
                </h3>
                <Award size={32} style={{ color: '#ffd700', animation: 'bounce 2s ease-in-out infinite', animationDelay: '0.2s' }} />
              </div>

              <div 
                onClick={() => setShowCert(true)} 
                style={{
                  cursor: 'pointer',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  border: '2px solid rgba(255, 215, 0, 0.5)',
                  transition: 'all 0.3s ease',
                  transform: hoveredItem === 'cert' ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: hoveredItem === 'cert' ? '0 0 30px rgba(255, 215, 0, 0.3)' : 'none'
                }}
                onMouseEnter={() => setHoveredItem('cert')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img src={certUrl} alt="Certificate" style={{ width: '100%', display: 'block' }} />
              </div>

              <button 
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = certUrl;
                  a.download = 'Certificate.jpg';
                  a.click();
                }} 
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(to right, #ffd700, #ffed4e)',
                  border: 'none',
                  borderRadius: '9999px',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  margin: '1.5rem auto 0',
                  transition: 'all 0.3s ease',
                  transform: hoveredItem === 'download' ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: hoveredItem === 'download' ? '0 0 40px rgba(255, 215, 0, 0.5)' : '0 10px 40px rgba(255, 215, 0, 0.4)'
                }}
                onMouseEnter={() => setHoveredItem('download')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Download size={20} />
                Download Certificate
              </button>
            </div>

            <ChevronDown size={32} style={{ color: '#06b6d4', marginTop: '3rem', animation: 'bounce 2s ease-in-out infinite' }} />
          </section>

          {/* Stats Dashboard */}
          <section data-section="stats" style={{ marginBottom: '5rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              PERFORMANCE METRICS
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem'
            }}>
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  style={{
                    ...glassStyle,
                    padding: '1.5rem',
                    textAlign: 'center',
                    animation: statsVisible ? `expand 0.5s ease-out ${i * 0.1}s backwards` : 'none',
                    transform: activeCard === `stat-${i}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: activeCard === `stat-${i}` ? `0 20px 60px ${stat.color}33` : 'none',
                    borderColor: activeCard === `stat-${i}` ? `${stat.color}99` : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={() => setActiveCard(`stat-${i}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <stat.icon size={36} style={{ color: stat.color, margin: '0 auto 0.75rem', filter: `drop-shadow(0 0 8px ${stat.color})` }} />
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.25rem',
                    textShadow: `0 0 20px ${stat.color}88`
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Grid */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              ELITE TEAM
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {team.map((member, i) => (
                <div 
                  key={i} 
                  style={{
                    ...glassStyle,
                    padding: '1.5rem',
                    textAlign: 'center',
                    transform: hoveredItem === `team-${i}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `team-${i}` ? '0 20px 60px rgba(0, 255, 255, 0.3)' : 'none',
                    borderColor: hoveredItem === `team-${i}` ? 'rgba(0, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={() => setHoveredItem(`team-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}>
                    {member.avatar}
                  </div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    marginBottom: '0.25rem',
                    background: 'linear-gradient(to right, #ffffff, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {member.name}
                  </h3>
                  <div style={{ color: '#06b6d4', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {member.role}
                  </div>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.75rem',
                    marginBottom: '1rem',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {member.contrib}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(0, 0, 0, 0.6)',
                          border: '1px solid #06b6d4',
                          borderRadius: '9999px',
                          color: '#06b6d4',
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        borderRadius: '9999px',
                        color: '#06b6d4',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              24-HOUR TIMELINE
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {phases.map((phase, i) => (
                <div 
                  key={phase.id} 
                  onClick={() => setSelectedPhase(phase)} 
                  style={{
                    ...glassStyle,
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transform: hoveredItem === `phase-${i}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `phase-${i}` ? `0 20px 60px ${phase.color}33` : 'none',
                    borderColor: hoveredItem === `phase-${i}` ? `${phase.color}99` : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={() => setHoveredItem(`phase-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '1rem',
                      background: phase.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 10px 30px ${phase.color}40`,
                      transform: hoveredItem === `phase-${i}` ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
                      transition: 'all 0.3s ease'
                    }}>
                      <phase.icon size={32} style={{ color: '#000' }} />
                    </div>
                    <span style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: `2px solid ${phase.color}`,
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: phase.color,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      {phase.time}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '0.75rem',
                    color: '#fff'
                  }}>
                    {phase.title}
                  </h3>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem'
                  }}>
                    {phase.desc}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '0.75rem'
                  }}>
                    {[
                      { label: 'Lines', value: phase.metrics.code },
                      { label: 'APIs', value: phase.metrics.apis },
                      { label: 'Tests', value: phase.metrics.tests }
                    ].map((metric, idx) => (
                      <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ color: phase.color, fontSize: '1.5rem', fontWeight: 800 }}>{metric.value}</div>
                        <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'transparent',
                    border: `2px solid ${phase.color}`,
                    borderRadius: '0.75rem',
                    color: phase.color,
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    View Details
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2rem, 7vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              TECH ARSENAL
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {techStack.map((tech, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedTech(expandedTech === i ? null : i)} 
                  style={{
                    ...glassStyle,
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transform: hoveredItem === `tech-${i}` ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `tech-${i}` ? `0 20px 60px ${tech.color}33` : 'none',
                    borderColor: hoveredItem === `tech-${i}` ? `${tech.color}99` : 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={() => setHoveredItem(`tech-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${tech.color}20`,
                      border: `2px solid ${tech.color}40`,
                      transform: hoveredItem === `tech-${i}` ? 'rotate(10deg)' : 'rotate(0deg)',
                      transition: 'all 0.3s ease'
                    }}>
                      <tech.icon size={28} style={{ color: tech.color }} />
                    </div>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: 800,
                      color: tech.color
                    }}>
                      {tech.skill}%
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    color: '#fff'
                  }}>
                    {tech.name}
                  </h3>

                  <div style={{
                    height: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.25rem',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: statsVisible ? `${tech.skill}%` : '0%',
                      height: '100%',
                      background: tech.color,
                      borderRadius: '0.25rem',
                      transition: 'width 1.5s ease-out',
                      boxShadow: `0 0 10px ${tech.color}`
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{
            ...glassStyle,
            padding: 'clamp(2rem, 5vw, 3rem)',
            textAlign: 'center'
          }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem'
            }}>
              READY FOR YOUR PROJECT?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '750px',
              margin: '0 auto 2rem',
              lineHeight: 1.6
            }}>
              Enterprise-grade MERN stack development from hackathon champions to production deployment
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="https://github.com/bhagavan444" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  padding: '1rem 2rem',
                  background: 'rgba(6, 182, 212, 0.15)',
                  border: '2px solid rgba(6, 182, 212, 0.6)',
                  borderRadius: '0.75rem',
                  color: '#06b6d4',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="mailto:g.sivasatyasaibhagavan@gmail.com" 
                style={{
                  padding: '1rem 2rem',
                  background: 'linear-gradient(to right, #06b6d4, #a78bfa)',
                  borderRadius: '0.75rem',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)'
                }}
              >
                <Mail size={20} />
                Collaborate
              </a>
            </div>
          </section>
        </div>

        {/* Certificate Modal */}
        {showCert && (
          <div 
            onClick={() => setShowCert(false)} 
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}
          >
            <div 
              onClick={e => e.stopPropagation()} 
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '95vh',
                overflow: 'auto'
              }}
            >
              <button 
                onClick={() => setShowCert(false)} 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '3rem',
                  height: '3rem',
                  background: 'rgba(239, 68, 68, 0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.3s ease'
                }}
              >
                <X size={24} />
              </button>
              <img 
                src={certUrl} 
                alt="Certificate" 
                style={{
                  width: '100%',
                  borderRadius: '1.5rem',
                  border: '4px solid #ffd700',
                  boxShadow: '0 0 100px rgba(255, 215, 0, 0.6)'
                }} 
              />
            </div>
          </div>
        )}

        {/* Phase Modal */}
        {selectedPhase && (
          <div 
            onClick={() => setSelectedPhase(null)} 
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              overflowY: 'auto'
            }}
          >
            <div 
              onClick={e => e.stopPropagation()} 
              style={{
                ...glassStyle,
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                maxWidth: '1000px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
              }}
            >
              <button 
                onClick={() => setSelectedPhase(null)} 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '3rem',
                  height: '3rem',
                  background: 'rgba(239, 68, 68, 0.3)',
                  border: '2px solid #ef4444',
                  borderRadius: '50%',
                  color: '#ef4444',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <X size={24} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{
                  width: '6rem',
                  height: '6rem',
                  margin: '0 auto 1rem',
                  borderRadius: '1.5rem',
                  background: selectedPhase.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 50px ${selectedPhase.color}`,
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  <selectedPhase.icon size={48} style={{ color: '#000' }} />
                </div>
                <span style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: `2px solid ${selectedPhase.color}`,
                  borderRadius: '9999px',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  marginBottom: '1rem',
                  color: selectedPhase.color,
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  {selectedPhase.time}
                </span>
                <h2 style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 900,
                  marginBottom: '1rem',
                  background: `linear-gradient(135deg, ${selectedPhase.color}, #fff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {selectedPhase.title}
                </h2>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6
                }}>
                  {selectedPhase.desc}
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: selectedPhase.color, marginBottom: '1rem', fontWeight: 800 }}>
                  Key Achievements
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '0.75rem'
                }}>
                  {selectedPhase.achievements.map((ach, idx) => (
                    <div key={idx} style={{
                      padding: '1rem',
                      background: `${selectedPhase.color}15`,
                      border: `2px solid ${selectedPhase.color}40`,
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem'
                    }}>
                      <CheckCircle2 size={20} style={{ color: selectedPhase.color, flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '0.875rem' }}>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: selectedPhase.color, marginBottom: '1rem', fontWeight: 800 }}>
                  Technologies
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {selectedPhase.stack.map((tech, idx) => (
                    <span key={idx} style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: `2px solid ${selectedPhase.color}`,
                      borderRadius: '9999px',
                      color: selectedPhase.color,
                      fontSize: '0.875rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}