"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Home, GraduationCap, Briefcase, Code2, FolderKanban, 
  Trophy, FileText, Award, Heart, Mail, ChevronDown,
  Menu, X, Sparkles, Zap, Brain, Target, Shield,
  Layers, Command, Terminal, Star, Flame, Cpu, Rocket,
  Activity, Circle, Hexagon, Binary, Workflow, Database,
  Cloud, Box, GitBranch, Clock, TrendingUp
} from "lucide-react";

const UltraModernNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeParticles, setActiveParticles] = useState([]);
  
  const navRef = useRef(null);
  const moreButtonRef = useRef(null);
  const canvasRef = useRef(null);

  const currentPath = location.pathname === "/" ? "/home" : location.pathname;

  // Navigation structure
  const primaryNav = [
    { 
      label: "Home", 
      path: "/home", 
      icon: Home,
      color: "#00f5ff",
      description: "Dashboard",
      gradient: "linear-gradient(135deg, #00f5ff, #00c4ff)"
    },
    { 
      label: "Skills", 
      path: "/myskills", 
      icon: Code2,
      color: "#22c55e",
      description: "Tech Stack",
      gradient: "linear-gradient(135deg, #22c55e, #16a34a)"
    },
    { 
      label: "Projects", 
      path: "/projects", 
      icon: FolderKanban,
      color: "#a855f7",
      description: "Portfolio",
      gradient: "linear-gradient(135deg, #a855f7, #8b5cf6)"
    },
    { 
      label: "Education", 
      path: "/education", 
      icon: GraduationCap,
      color: "#ffd700",
      description: "Academic",
      gradient: "linear-gradient(135deg, #ffd700, #ffed4e)"
    },
    { 
      label: "Contact", 
      path: "/contact", 
      icon: Mail,
      color: "#ff6b35",
      description: "Connect",
      gradient: "linear-gradient(135deg, #ff6b35, #f7931e)"
    },
  ];

  const secondaryNav = [
    { 
      label: "Internships", 
      path: "/internships", 
      icon: Briefcase,
      color: "#00f5ff",
      description: "Professional Experience",
      badge: "3+",
      gradient: "linear-gradient(135deg, #00f5ff, #00c4ff)"
    },
    { 
      label: "Hackathons", 
      path: "/hackathons", 
      icon: Trophy,
      color: "#ffd700",
      description: "Competition Wins",
      badge: "15+",
      gradient: "linear-gradient(135deg, #ffd700, #ffed4e)"
    },
    { 
      label: "Certifications", 
      path: "/certifications", 
      icon: Award,
      color: "#a855f7",
      description: "Industry Credentials",
      badge: "20+",
      gradient: "linear-gradient(135deg, #a855f7, #8b5cf6)"
    },
    { 
      label: "Workshops", 
      path: "/workshops", 
      icon: Brain,
      color: "#22c55e",
      description: "Learning Sessions",
      gradient: "linear-gradient(135deg, #22c55e, #16a34a)"
    },
    { 
      label: "Achievements", 
      path: "/achivements", 
      icon: Star,
      color: "#ff6b35",
      description: "Recognition & Awards",
      gradient: "linear-gradient(135deg, #ff6b35, #f7931e)"
    },
    { 
      label: "Beyond Coding", 
      path: "/beyondcoding", 
      icon: Heart,
      color: "#ef4444",
      description: "Personal Interests",
      gradient: "linear-gradient(135deg, #ef4444, #dc2626)"
    },
    { 
      label: "Resume", 
      path: "/resume", 
      icon: FileText,
      color: "#06b6d4",
      description: "Download CV",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)"
    },
  ];

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Particle background for navbar
  useEffect(() => {
    if (!canvasRef.current || isMobile) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      color: ['#00f5ff', '#a855f7', '#ffd700'][Math.floor(Math.random() * 3)]
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.floor(p.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - dist / 100) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  // Responsive & scroll handling
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    
    checkMobile();
    handleScroll();
    
    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreButtonRef.current && !moreButtonRef.current.contains(e.target)) {
        setIsMoreOpen(false);
      }
    };

    if (isMoreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMoreOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  }, [location.pathname]);

  // Mouse tracking
  const handleMouseMove = useCallback((e) => {
    if (!isMobile && navRef.current) {
      const rect = navRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, [isMobile]);

  const handleNavigation = (path) => {
    if (path !== currentPath) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          -webkit-font-smoothing: antialiased;
          cursor: none;
        }

        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #00f5ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001;
          transition: all 0.15s cubic-bezier(0.16,1,0.3,1);
          mix-blend-mode: difference;
        }

        .custom-cursor-dot {
          position: fixed;
          width: 4px;
          height: 4px;
          background: #00f5ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10002;
          box-shadow: 0 0 10px #00f5ff;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .glass-nav {
          background: rgba(10, 10, 20, 0.92);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-bottom: 1px solid rgba(0, 245, 255, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        }

        .glass-nav.scrolled {
          background: rgba(5, 5, 15, 0.96);
          border-bottom: 1px solid rgba(0, 245, 255, 0.25);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6), 0 0 40px rgba(0, 245, 255, 0.15);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }

        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s;
        }

        .nav-item:hover::before {
          left: 100%;
        }

        .nav-item:hover {
          transform: translateY(-3px) scale(1.02);
        }

        .badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background: linear-gradient(135deg, #ff6b35, #ef4444);
          color: #000;
          font-size: 0.625rem;
          font-weight: 900;
          padding: 3px 7px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.6);
          font-family: 'Roboto Mono', monospace;
          letter-spacing: 0.5px;
          animation: pulse 2s ease-in-out infinite;
        }

        .mobile-menu {
          background: rgba(5, 5, 15, 0.98);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-top: 1px solid rgba(0, 245, 255, 0.2);
        }

        .dropdown-menu {
          background: rgba(10, 10, 20, 0.98);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 2px solid rgba(0, 245, 255, 0.25);
          box-shadow: 
            0 25px 70px rgba(0, 0, 0, 0.7),
            0 0 50px rgba(0, 245, 255, 0.2),
            inset 0 0 30px rgba(0, 245, 255, 0.05);
        }

        .gradient-text {
          background: linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #ffd700 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 4s ease infinite;
        }

        @media (max-width: 1024px) {
          body { cursor: auto; }
          .custom-cursor, .custom-cursor-dot { display: none; }
        }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(180deg, #00f5ff, #a855f7); 
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover { 
          background: linear-gradient(180deg, #00c4ff, #8b3fc7); 
        }
      `}</style>

      {/* Custom Cursor */}
      {!isMobile && (
        <>
          <div 
            className="custom-cursor" 
            style={{ 
              left: mousePos.x - 10, 
              top: mousePos.y - 10 
            }} 
          />
          <div 
            className="custom-cursor-dot" 
            style={{ 
              left: mousePos.x - 2, 
              top: mousePos.y - 2 
            }} 
          />
        </>
      )}

      {/* Main Navbar */}
      <nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        className={`glass-nav ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Particle Canvas */}
        {!isMobile && (
          <canvas 
            ref={canvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              opacity: 0.4
            }}
          />
        )}

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(0,245,255,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(168,85,247,0.08) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }} />

        {/* Mouse Follower */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 245, 255, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
              left: mousePos.x - 150,
              top: mousePos.y - 150,
              transition: 'left 0.2s, top 0.2s',
            }}
          />
        )}

        <div
          style={{
            maxWidth: '1600px',
            margin: '0 auto',
            padding: isMobile ? '0 1.5rem' : '0 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            height: scrolled ? '75px' : '90px',
            transition: 'height 0.4s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          {/* Enhanced Logo */}
          <button
            onClick={() => handleNavigation("/home")}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: isMobile ? '0.75rem' : '1rem',
              padding: 0,
              transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div
              style={{
                position: 'relative',
                width: isMobile ? '48px' : scrolled ? '52px' : '60px',
                height: isMobile ? '48px' : scrolled ? '52px' : '60px',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              {/* Animated Rings */}
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '2px solid',
                    borderImage: 'linear-gradient(135deg, #00f5ff, #a855f7) 1',
                    opacity: 0,
                    animation: `pulse 3s ease-in-out infinite`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}

              {/* Logo Core with Hexagon */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 40px rgba(0, 245, 255, 0.5), inset 0 0 20px rgba(255,255,255,0.2)',
                  border: '3px solid rgba(255,255,255,0.3)',
                }}
              >
                {/* Inner glow */}
                <div style={{
                  position: 'absolute',
                  inset: '8px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
                }} />
                
                <div style={{ 
                  animation: 'spin 20s linear infinite',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <Cpu size={isMobile ? 24 : scrolled ? 26 : 30} color="white" strokeWidth={2.5} />
                </div>
              </div>

              {/* Corner Accents */}
              {[
                { top: 0, left: 0, borderTop: '3px solid #00f5ff', borderLeft: '3px solid #00f5ff' },
                { top: 0, right: 0, borderTop: '3px solid #a855f7', borderRight: '3px solid #a855f7' },
                { bottom: 0, left: 0, borderBottom: '3px solid #22c55e', borderLeft: '3px solid #22c55e' },
                { bottom: 0, right: 0, borderBottom: '3px solid #ffd700', borderRight: '3px solid #ffd700' }
              ].map((style, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  ...style,
                  animation: 'pulse 2s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`
                }} />
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span
                className="gradient-text"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: isMobile ? '1.3rem' : scrolled ? '1.4rem' : '1.6rem',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  transition: 'font-size 0.4s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                BHAGAVAN
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 10px #22c55e',
                  animation: 'pulse 2s ease-in-out infinite'
                }} />
                <span
                  style={{
                    fontFamily: "'Roboto Mono', monospace",
                    fontSize: '0.65rem',
                    color: '#888',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  Elite Developer
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {primaryNav.map((item, index) => {
                const isActive = currentPath === item.path;
                const Icon = item.icon;

                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavigation(item.path)}
                    onMouseEnter={() => setHoveredItem(item.path)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="nav-item"
                    style={{
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.75rem 1.2rem',
                      background: isActive 
                        ? `${item.color}20`
                        : hoveredItem === item.path 
                          ? 'rgba(255,255,255,0.05)'
                          : 'transparent',
                      border: isActive ? `2px solid ${item.color}` : '2px solid transparent',
                      borderRadius: '14px',
                      color: isActive ? item.color : '#fff',
                      fontSize: '0.9rem',
                      fontWeight: isActive ? 800 : 600,
                      cursor: 'pointer',
                      fontFamily: "'Rajdhani', sans-serif",
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      boxShadow: isActive ? `0 0 25px ${item.color}40` : 'none',
                      animation: `slideDown 0.5s ease forwards`,
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                    <span>{item.label}</span>
                    
                    {/* Active Glow */}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        inset: '-4px',
                        background: `${item.color}15`,
                        borderRadius: '16px',
                        zIndex: -1,
                        animation: 'pulse 2s ease-in-out infinite'
                      }} />
                    )}
                  </button>
                );
              })}

              {/* More Dropdown */}
              <div ref={moreButtonRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  onMouseEnter={() => setHoveredItem('more')}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="nav-item"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 1.2rem',
                    background: isMoreOpen
                      ? 'rgba(168, 85, 247, 0.2)'
                      : hoveredItem === 'more'
                        ? 'rgba(255,255,255,0.05)'
                        : 'transparent',
                    border: isMoreOpen ? '2px solid #a855f7' : '2px solid transparent',
                    borderRadius: '14px',
                    color: isMoreOpen ? '#a855f7' : '#fff',
                    fontSize: '0.9rem',
                    fontWeight: isMoreOpen ? 800 : 600,
                    cursor: 'pointer',
                    fontFamily: "'Rajdhani', sans-serif",
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    boxShadow: isMoreOpen ? '0 0 25px rgba(168, 85, 247, 0.4)' : 'none',
                    animation: 'slideDown 0.5s ease forwards',
                    animationDelay: '0.5s',
                    opacity: 0
                  }}
                >
                  <Layers size={20} strokeWidth={isMoreOpen ? 2.5 : 2} />
                  <span>More</span>
                  <div style={{
                    transform: isMoreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)'
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* Enhanced Dropdown Menu */}
                {isMoreOpen && (
                  <div
                    className="dropdown-menu"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 1rem)',
                      right: 0,
                      minWidth: '320px',
                      borderRadius: '20px',
                      padding: '0.75rem',
                      zIndex: 10000,
                      animation: 'slideDown 0.4s ease forwards'
                    }}
                  >
                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                      {secondaryNav.map((item, index) => {
                        const isActive = currentPath === item.path;
                        const Icon = item.icon;

                        return (
                          <button
                            key={item.path}
                            onClick={() => handleNavigation(item.path)}
                            style={{
                              position: 'relative',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              padding: '1rem 1.2rem',
                              background: isActive
                                ? `${item.color}20`
                                : 'rgba(255,255,255,0.03)',
                              border: isActive ? `2px solid ${item.color}` : '2px solid transparent',
                              borderRadius: '14px',
                              color: '#fff',
                              fontSize: '0.95rem',
                              fontWeight: isActive ? 700 : 600,
                              cursor: 'pointer',
                              textAlign: 'left',
                              width: '100%',
                              fontFamily: "'Inter', sans-serif",
                              transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                              boxShadow: isActive ? `0 0 20px ${item.color}30` : 'none'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = `${item.color}25`;
                              e.currentTarget.style.transform = 'translateX(5px)';
                              e.currentTarget.style.borderColor = item.color;
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = isActive ? `${item.color}20` : 'rgba(255,255,255,0.03)';
                              e.currentTarget.style.transform = 'translateX(0)';
                              e.currentTarget.style.borderColor = isActive ? item.color : 'transparent';
                            }}
                          >
                            <div
                              style={{
                                width: '44px',
                                height: '44px',
                                borderRadius: '12px',
                                background: item.gradient,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: `0 5px 20px ${item.color}40`
                              }}
                            >
                              <Icon size={22} color="#000" strokeWidth={2.5} />
                            </div>

                            <div style={{ flex: 1 }}>
                              <div style={{ 
                                fontWeight: 800, 
                                marginBottom: '0.2rem',
                                fontFamily: "'Rajdhani', sans-serif",
                                fontSize: '1.05rem',
                                letterSpacing: '0.5px'
                              }}>
                                {item.label}
                              </div>
                              <div
                                style={{
                                  fontSize: '0.8rem',
                                  color: '#888',
                                  fontWeight: 500,
                                }}
                              >
                                {item.description}
                              </div>
                            </div>

                            {item.badge && (
                              <span className="badge">{item.badge}</span>
                            )}

                            {isActive && (
                              <Sparkles size={18} color={item.color} fill={item.color} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Live Status Indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.2rem',
                background: 'rgba(0, 245, 255, 0.15)',
                border: '2px solid #00f5ff',
                borderRadius: '14px',
                marginLeft: '0.5rem',
                boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
                animation: 'slideDown 0.5s ease forwards',
                animationDelay: '0.6s',
                opacity: 0
              }}>
                <Clock size={16} color="#00f5ff" />
                <span style={{
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: '0.8rem',
                  color: '#00f5ff',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}>
                  {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                </span>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: isMenuOpen
                  ? 'linear-gradient(135deg, #00f5ff, #a855f7)'
                  : 'rgba(255, 255, 255, 0.1)',
                border: isMenuOpen ? '2px solid #00f5ff' : '2px solid rgba(255,255,255,0.2)',
                borderRadius: '14px',
                padding: '0.85rem',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                boxShadow: isMenuOpen ? '0 0 30px rgba(0, 245, 255, 0.5)' : 'none'
              }}
            >
              <div style={{
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1)'
              }}>
                {isMenuOpen ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
              </div>
            </button>
          )}
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && isMobile && (
        <div
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: scrolled ? '75px' : '90px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9998,
            overflowY: 'auto',
            padding: '2rem 1.5rem',
            animation: 'slideDown 0.4s ease forwards'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            {/* Live Status in Mobile */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.7rem',
              padding: '1rem',
              background: 'rgba(0, 245, 255, 0.15)',
              border: '2px solid #00f5ff',
              borderRadius: '14px',
              marginBottom: '1rem',
              boxShadow: '0 0 25px rgba(0, 245, 255, 0.3)'
            }}>
              <Clock size={18} color="#00f5ff" />
              <span style={{
                fontFamily: "'Roboto Mono', monospace",
                fontSize: '0.9rem',
                color: '#00f5ff',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}>
                {currentTime.toLocaleTimeString('en-US', { hour12: false })}
              </span>
            </div>

            {/* Primary navigation */}
            {primaryNav.map((item, index) => {
              const isActive = currentPath === item.path;
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    padding: '1.2rem 1.5rem',
                    background: isActive
                      ? `${item.color}25`
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `3px solid ${isActive ? item.color : 'transparent'}`,
                    borderRadius: '18px',
                    color: '#fff',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 800 : 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: isActive ? `0 10px 30px ${item.color}40` : 'none',
                    animation: 'slideDown 0.4s ease forwards',
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: item.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${item.color}50`
                    }}
                  >
                    <Icon size={26} color="#000" strokeWidth={2.5} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      marginBottom: '0.2rem'
                    }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#888',
                        fontWeight: 500,
                      }}
                    >
                      {item.description}
                    </div>
                  </div>

                  {isActive && (
                    <Zap size={22} color={item.color} fill={item.color} />
                  )}
                </button>
              );
            })}

            {/* Divider */}
            <div
              style={{
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00f5ff, transparent)',
                margin: '1rem 0',
                boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
              }}
            />

            {/* Secondary navigation */}
            {secondaryNav.map((item, index) => {
              const isActive = currentPath === item.path;
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    padding: '1.2rem 1.5rem',
                    background: isActive
                      ? `${item.color}25`
                      : 'rgba(255, 255, 255, 0.05)',
                    border: `3px solid ${isActive ? item.color : 'transparent'}`,
                    borderRadius: '18px',
                    color: '#fff',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 800 : 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%',
                    fontFamily: "'Inter', sans-serif",
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    boxShadow: isActive ? `0 10px 30px ${item.color}40` : 'none',
                    animation: 'slideDown 0.4s ease forwards',
                    animationDelay: `${(primaryNav.length + index) * 0.05}s`,
                    opacity: 0
                  }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: item.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 20px ${item.color}50`
                    }}
                  >
                    <Icon size={26} color="#000" strokeWidth={2.5} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      marginBottom: '0.2rem'
                    }}>
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#888',
                        fontWeight: 500,
                      }}
                    >
                      {item.description}
                    </div>
                  </div>

                  {item.badge && <span className="badge">{item.badge}</span>}
                  {isActive && <Flame size={22} color={item.color} fill={item.color} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default UltraModernNavbar;