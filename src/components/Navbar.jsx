"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBars, FaTimes, FaHome, FaGraduationCap, FaBriefcase,
  FaCode, FaLaptopCode, FaTrophy, FaFileAlt, FaCertificate,
  FaHeart, FaAward, FaEnvelope, FaEllipsisH, FaChevronDown,
  FaRocket, FaBrain, FaStar, FaFire, FaBolt, FaGem
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [activeHover, setActiveHover] = useState(null);
  const navRef = useRef(null);
  const canvasRef = useRef(null);

  // Advanced mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  
  const glowOpacity = useTransform(mouseY, [0, 100], [0, 1]);

  const currentPath = location.pathname === "/" ? "/home" : location.pathname;

  // Particle system for navbar background
  useEffect(() => {
    if (isMobile || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    class NavParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 2 + 0.5;
        this.color = ['#00f0ff', '#c300ff', '#ff00aa'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        // Glow effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, this.color + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    particles = Array.from({ length: 30 }, () => new NavParticle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Connection lines
      ctx.globalAlpha = 0.15;
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 100) {
            ctx.globalAlpha = (1 - dist / 100) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [isMobile]);

  // Handle resize & scroll events
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setMoreDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mouse movement handler for glow effect
  const handleMouseMove = useCallback(
    (e) => {
      if (!isMobile && navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    },
    [isMobile, mouseX, mouseY]
  );

  // Navigation items
  const navItems = [
    { label: "Home",          path: "/home",          icon: <FaHome /> },
    { label: "Education",     path: "/education",     icon: <FaGraduationCap /> },
    { label: "Skills",        path: "/myskills",      icon: <FaCode /> },
    { label: "Projects",      path: "/projects",      icon: <FaLaptopCode /> },
    { label: "Internships",   path: "/internships",   icon: <FaBriefcase /> },
    { label: "Hackathons",    path: "/hackathons",    icon: <FaTrophy /> },
    { label: "Certifications",path: "/certifications",icon: <FaCertificate /> },
    { label: "Workshops",     path: "/workshops",     icon: <FaBrain /> },
    { label: "Achievements",  path: "/achivements",   icon: <FaAward /> },
    { label: "Beyond Coding", path: "/beyondcoding",  icon: <FaHeart /> },
    { label: "Resume",        path: "/resume",        icon: <FaFileAlt /> },
    { label: "Contact",       path: "/contact",       icon: <FaEnvelope /> },
  ];

  // Visible items on desktop
  const visibleItems = navItems.filter(item => 
    ["Home", "Education", "Skills", "Projects", "Contact"].includes(item.label)
  );

  // More dropdown items
  const moreItems = navItems.filter(item => 
    !["Home", "Education", "Skills", "Projects", "Contact"].includes(item.label)
  );

  const handleNavClick = (path) => {
    if (path !== currentPath) {
      navigate(path);
    }
    setMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <>
      {/* ===================== ULTIMATE HOLLYWOOD STYLES ===================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Roboto+Mono:wght@300;400;500;600;700&family=Exo+2:wght@300;400;500;600;700;800;900&display=swap');

        :root {
          --neon-cyan:     #00f0ff;
          --neon-purple:   #c300ff;
          --neon-pink:     #ff00aa;
          --neon-gold:     #ffd700;
          --neon-green:    #00ff88;
          --bg-dark:       #000000;
          --glass:         rgba(5, 5, 20, 0.85);
          --glass-border:  rgba(0, 240, 255, 0.35);
          --text-light:    #ffffff;
          --text-dim:      #b0d0ff;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: var(--bg-dark);
          font-family: 'Exo 2', sans-serif;
          overflow-x: hidden;
        }

        @keyframes hologramScan {
          0%, 100% { 
            transform: translateY(-100%) scaleY(1);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(100%) scaleY(1.2);
            opacity: 0.8;
          }
        }

        @keyframes energyPulse {
          0%, 100% { 
            box-shadow: 0 0 20px var(--neon-cyan), 
                        0 0 40px var(--neon-cyan),
                        inset 0 0 20px rgba(0,240,255,0.2);
          }
          50% { 
            box-shadow: 0 0 40px var(--neon-cyan), 
                        0 0 80px var(--neon-cyan),
                        0 0 120px var(--neon-purple),
                        inset 0 0 40px rgba(0,240,255,0.4);
          }
        }

        @keyframes dataStream {
          0% { 
            transform: translateX(-100%) translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% { 
            transform: translateX(200%) translateY(-20px);
            opacity: 0;
          }
        }

        @keyframes rotate3D {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }

        @keyframes shimmerGlow {
          0% { 
            background-position: -200% center;
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
          100% { 
            background-position: 200% center;
            filter: brightness(1);
          }
        }

        @keyframes floatIcon {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-8px) rotate(5deg) scale(1.1);
          }
          50% {
            transform: translateY(-12px) rotate(-5deg) scale(1.15);
          }
          75% {
            transform: translateY(-8px) rotate(3deg) scale(1.1);
          }
        }

        @keyframes borderFlow {
          0% {
            border-image-source: linear-gradient(90deg, 
              var(--neon-cyan), var(--neon-purple), var(--neon-pink));
          }
          50% {
            border-image-source: linear-gradient(90deg, 
              var(--neon-pink), var(--neon-cyan), var(--neon-purple));
          }
          100% {
            border-image-source: linear-gradient(90deg, 
              var(--neon-cyan), var(--neon-purple), var(--neon-pink));
          }
        }

        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            transparent 30%, 
            rgba(0,240,255,0.3) 50%, 
            transparent 70%);
          animation: hologramScan 4s linear infinite;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 1;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(0,240,255,0.3) 0%, 
            transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 0;
        }

        .nav-item:hover::before,
        .nav-item:hover::after {
          opacity: 1;
        }

        .nav-item:hover {
          transform: translateY(-6px) scale(1.08);
          box-shadow: 0 0 40px rgba(0,240,255,0.6),
                      0 20px 60px rgba(0,0,0,0.8);
        }

        .nav-active {
          background: linear-gradient(135deg, 
            rgba(0,240,255,0.25) 0%, 
            rgba(195,0,255,0.25) 100%) !important;
          border: 2.5px solid var(--neon-cyan) !important;
          color: var(--neon-cyan) !important;
          animation: energyPulse 3s ease-in-out infinite;
          transform: translateY(-4px) scale(1.05);
        }

        .nav-active .icon {
          animation: floatIcon 4s ease-in-out infinite;
          filter: drop-shadow(0 0 10px var(--neon-cyan));
        }

        .nav-active::before {
          opacity: 1 !important;
        }

        .logo-container {
          position: relative;
        }

        .logo-glow {
          filter: drop-shadow(0 0 30px var(--neon-cyan)) 
                  drop-shadow(0 0 60px var(--neon-purple));
        }

        .logo-orbit {
          position: absolute;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 50%;
          border-top-color: var(--neon-cyan);
          border-right-color: var(--neon-purple);
          animation: rotate3D 8s linear infinite;
          pointer-events: none;
        }

        .mobile-menu {
          background: linear-gradient(180deg, 
            rgba(0,0,0,0.98) 0%, 
            rgba(10,10,30,0.95) 100%);
          backdrop-filter: blur(30px) saturate(180%);
          border-top: 3px solid var(--neon-cyan);
        }

        .dropdown {
          background: linear-gradient(135deg, 
            rgba(5,5,20,0.95) 0%, 
            rgba(15,5,30,0.95) 100%);
          backdrop-filter: blur(25px) saturate(180%);
          border: 2.5px solid var(--neon-cyan);
          box-shadow: 0 30px 100px rgba(0,0,0,0.9), 
                      0 0 80px rgba(0,240,255,0.4),
                      inset 0 0 50px rgba(0,240,255,0.1);
        }

        .data-stream {
          position: absolute;
          width: 2px;
          height: 20px;
          background: linear-gradient(180deg, transparent, var(--neon-cyan), transparent);
          animation: dataStream 3s linear infinite;
          pointer-events: none;
        }

        .hologram-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            var(--neon-cyan), 
            transparent);
          opacity: 0.3;
          animation: hologramScan 6s linear infinite;
        }

        .energy-field {
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: linear-gradient(45deg, 
            var(--neon-cyan), 
            var(--neon-purple), 
            var(--neon-pink),
            var(--neon-cyan));
          background-size: 300% 300%;
          animation: shimmerGlow 4s ease infinite;
          opacity: 0;
          transition: opacity 0.4s;
          z-index: -1;
          filter: blur(8px);
        }

        .nav-item:hover .energy-field {
          opacity: 0.6;
        }

        .nav-active .energy-field {
          opacity: 0.8;
        }

        @media (max-width: 1024px) {
          .nav-item:hover {
            transform: translateY(-3px) scale(1.04);
          }
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: var(--bg-dark);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, var(--neon-cyan), var(--neon-purple));
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, var(--neon-purple), var(--neon-pink));
        }
      `}</style>

      {/* ===================== MAIN NAVBAR ===================== */}
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        className="nav-container"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: isScrolled 
            ? "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(10,5,20,0.95) 100%)"
            : "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(10,5,20,0.85) 100%)",
          backdropFilter: isScrolled ? "blur(40px) saturate(200%)" : "blur(30px) saturate(180%)",
          borderBottom: isScrolled
            ? "3px solid rgba(0,240,255,0.6)"
            : "2px solid rgba(0,240,255,0.4)",
          boxShadow: isScrolled
            ? "0 25px 100px rgba(0,0,0,0.95), 0 0 150px rgba(0,240,255,0.3)"
            : "0 15px 60px rgba(0,0,0,0.9), 0 0 80px rgba(0,240,255,0.2)",
          padding: isScrolled ? "0.8rem 0" : "1rem 0",
        }}
      >
        {/* Animated particle canvas */}
        {!isMobile && (
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              opacity: 0.6,
              zIndex: 0
            }}
          />
        )}

        {/* Hologram scan lines */}
        {!isMobile && (
          <>
            <div className="hologram-line" style={{ top: '20%' }} />
            <div className="hologram-line" style={{ top: '50%', animationDelay: '2s' }} />
            <div className="hologram-line" style={{ top: '80%', animationDelay: '4s' }} />
          </>
        )}

        {/* Mouse-following energy field */}
        {!isMobile && isScrolled && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle 1000px at ${glowX}px ${glowY}px, 
                rgba(0,240,255,0.15) 0%, 
                rgba(195,0,255,0.1) 40%,
                transparent 70%)`,
              pointerEvents: "none",
              opacity: glowOpacity,
              mixBlendMode: 'screen',
              zIndex: 1
            }}
          />
        )}

        {/* Data streams */}
        {!isMobile && Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${10 + i * 12}%`,
              top: 0,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.3
            }}
          />
        ))}

        <div
          style={{
            maxWidth: "1800px",
            margin: "0 auto",
            padding: "0 3rem",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Logo - Hollywood Style */}
          <motion.button
            onClick={() => handleNavClick("/home")}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            className="logo-container"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: 0,
              marginRight: "2rem",
              position: 'relative'
            }}
          >
            {/* Orbiting ring */}
            {!isMobile && <div className="logo-orbit" />}
            
            <motion.div
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="logo-glow"
              style={{
                fontSize: isMobile ? "2.5rem" : "3rem",
                color: "#00f0ff",
                position: 'relative',
                zIndex: 2
              }}
            >
              <FaRocket />
            </motion.div>

            {/* Glowing particles around logo */}
            {!isMobile && (
              <>
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80px',
                    height: '80px',
                    background: 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />
                <FaStar 
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    fontSize: '1rem',
                    color: '#ffd700',
                    animation: 'floatIcon 3s ease-in-out infinite',
                    filter: 'drop-shadow(0 0 8px #ffd700)'
                  }}
                />
              </>
            )}

            <motion.span
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: isMobile ? "2rem" : "2.5rem",
                fontWeight: 900,
                letterSpacing: "0px",
                background: "linear-gradient(90deg, #00f0ff 0%, #c300ff 50%, #ff00aa 100%)",
                backgroundSize: "200% 200%",
                animation: "shimmerGlow 4s ease infinite",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0 0 40px rgba(0,240,255,0.5)",
                position: 'relative',
                zIndex: 2
              }}
            >
              Bhagavan
            </motion.span>
          </motion.button>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}>
              {visibleItems.map((item, index) => {
                const isActive = currentPath === item.path;

                return (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    onMouseEnter={() => setActiveHover(item.path)}
                    onMouseLeave={() => setActiveHover(null)}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      const y = ((e.clientY - rect.top) / rect.height) * 100;
                      e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                      e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                    }}
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.08, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    className={`nav-item ${isActive ? "nav-active" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: "1rem 1.8rem",
                      color: isActive ? "var(--neon-cyan)" : "var(--text-light)",
                      fontSize: "1.05rem",
                      fontWeight: isActive ? 700 : 500,
                      border: isActive
                        ? "2.5px solid var(--neon-cyan)"
                        : "2px solid rgba(0,240,255,0.35)",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(0,240,255,0.2) 0%, rgba(195,0,255,0.2) 100%)"
                        : "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(15px)",
                      borderRadius: "18px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      position: "relative",
                      fontFamily: "'Exo 2', sans-serif",
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      overflow: 'hidden'
                    }}
                  >
                    <div className="energy-field" />
                    
                    <motion.span
                      animate={isActive ? { 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                        y: [0, -5, 0]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ 
                        fontSize: "1.4rem",
                        position: 'relative',
                        zIndex: 2,
                        filter: isActive ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                      }}
                      className="icon"
                    >
                      {item.icon}
                    </motion.span>
                    
                    <span style={{ position: 'relative', zIndex: 2 }}>{item.label}</span>
                    
                    {activeHover === item.path && !isActive && (
                      <motion.div
                        layoutId="navHover"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'rgba(0,240,255,0.1)',
                          borderRadius: '18px',
                          zIndex: 0
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}

              {/* More Dropdown - Hollywood Edition */}
              <div style={{ position: "relative" }}>
                <motion.button
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ scale: 1.08, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`nav-item ${moreDropdownOpen ? "nav-active" : ""}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    padding: "1rem 1.8rem",
                    color: moreDropdownOpen ? "var(--neon-cyan)" : "var(--text-light)",
                    fontSize: "1.05rem",
                    fontWeight: moreDropdownOpen ? 700 : 500,
                    borderRadius: "18px",
                    background: moreDropdownOpen
                      ? "linear-gradient(135deg, rgba(0,240,255,0.2) 0%, rgba(195,0,255,0.2) 100%)"
                      : "rgba(255,255,255,0.05)",
                    border: moreDropdownOpen
                      ? "2.5px solid var(--neon-cyan)"
                      : "2px solid rgba(0,240,255,0.35)",
                    backdropFilter: "blur(15px)",
                    cursor: "pointer",
                    fontFamily: "'Exo 2', sans-serif",
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="energy-field" />
                  
                  <motion.span
                    animate={{ rotate: moreDropdownOpen ? 360 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ 
                      fontSize: "1.4rem",
                      position: 'relative',
                      zIndex: 2,
                      filter: moreDropdownOpen ? 'drop-shadow(0 0 8px currentColor)' : 'none'
                    }}
                  >
                    <FaGem />
                  </motion.span>
                  
                  <span style={{ position: 'relative', zIndex: 2 }}>More</span>
                  
                  <motion.div
                    animate={{ rotate: moreDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ position: 'relative', zIndex: 2 }}
                  >
                    <FaChevronDown style={{ fontSize: "0.9rem" }} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {moreDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -40, scale: 0.9, rotateX: -15 }}
                      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, y: -40, scale: 0.9, rotateX: -15 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="dropdown"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 1.5rem)",
                        right: 0,
                        minWidth: "340px",
                        borderRadius: "22px",
                        padding: "1.5rem",
                        zIndex: 1001,
                        transformOrigin: "top right"
                      }}
                    >
                      {/* Dropdown header */}
                      <div style={{
                        marginBottom: '1.2rem',
                        paddingBottom: '1rem',
                        borderBottom: '2px solid rgba(0,240,255,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem'
                      }}>
                        <FaFire style={{ 
                          color: 'var(--neon-pink)', 
                          fontSize: '1.5rem',
                          filter: 'drop-shadow(0 0 8px var(--neon-pink))'
                        }} />
                        <span style={{
                          fontFamily: "'Orbitron', sans-serif",
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-purple))',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent'
                        }}>
                          Explore More
                        </span>
                      </div>

                      {moreItems.map((item, index) => {
                        const isActive = currentPath === item.path;

                        return (
                          <motion.button
                            key={item.path}
                            onClick={() => handleNavClick(item.path)}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 12, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`nav-item ${isActive ? "nav-active" : ""}`}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "1rem",
                              padding: "1rem 1.5rem",
                              color: isActive ? "var(--neon-cyan)" : "var(--text-light)",
                              fontSize: "1.05rem",
                              fontWeight: isActive ? 700 : 500,
                              borderRadius: "16px",
                              background: isActive 
                                ? "linear-gradient(135deg, rgba(0,240,255,0.2) 0%, rgba(195,0,255,0.2) 100%)"
                                : "transparent",
                              border: isActive ? '2px solid var(--neon-cyan)' : 'none',
                              cursor: "pointer",
                              textAlign: "left",
                              marginBottom: "0.5rem",
                              position: 'relative',
                              overflow: 'hidden'
                            }}
                          >
                            {isActive && <div className="energy-field" />}
                            
                            <motion.span 
                              style={{ 
                                fontSize: "1.5rem",
                                filter: isActive ? 'drop-shadow(0 0 8px currentColor)' : 'none',
                                position: 'relative',
                                zIndex: 2
                              }}
                            >
                              {item.icon}
                            </motion.span>
                            <span style={{ position: 'relative', zIndex: 2 }}>{item.label}</span>
                            
                            {isActive && (
                              <FaBolt style={{
                                marginLeft: 'auto',
                                color: 'var(--neon-gold)',
                                fontSize: '1rem',
                                animation: 'floatIcon 2s ease-in-out infinite',
                                position: 'relative',
                                zIndex: 2
                              }} />
                            )}
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Mobile Hamburger Menu Button - Hollywood Style */}
          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              whileHover={{ scale: 1.3, rotate: 90 }}
              whileTap={{ scale: 0.85 }}
              style={{
                background: menuOpen
                  ? "linear-gradient(135deg, rgba(0,240,255,0.5), rgba(195,0,255,0.4))"
                  : "rgba(255,255,255,0.1)",
                border: menuOpen
                  ? "3px solid var(--neon-cyan)"
                  : "2.5px solid rgba(0,240,255,0.4)",
                color: "var(--neon-cyan)",
                fontSize: "2.2rem",
                padding: "1rem 1.2rem",
                borderRadius: "18px",
                cursor: "pointer",
                boxShadow: menuOpen
                  ? "0 0 70px rgba(0,240,255,0.8), inset 0 0 30px rgba(0,240,255,0.3)"
                  : "0 10px 30px rgba(0,0,0,0.6)",
                position: 'relative',
                overflow: 'hidden'
              }}
              aria-label="Toggle menu"
            >
              {menuOpen && <div className="energy-field" style={{ opacity: 0.8 }} />}
              
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ position: 'relative', zIndex: 2 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -180, scale: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ position: 'relative', zIndex: 2 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* ===================== MOBILE FULL-SCREEN MENU - HOLLYWOOD EDITION ===================== */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mobile-menu"
            style={{
              position: "fixed",
              inset: "auto 0 0 0",
              top: "90px",
              zIndex: 999,
              overflowY: "auto",
              padding: "2.5rem 1.5rem",
            }}
            onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
          >
            {/* Animated gradient overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 0%, rgba(0,240,255,0.1) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "650px",
                margin: "0 auto",
                paddingBottom: "8rem",
                position: 'relative',
                zIndex: 1
              }}
            >
              {navItems.map((item, index) => {
                const isActive = currentPath === item.path;

                return (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.06, x: 14 }}
                    whileTap={{ scale: 0.94 }}
                    className={`nav-item ${isActive ? "nav-active" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      padding: "1.8rem 2rem",
                      background: isActive
                        ? "linear-gradient(135deg, rgba(0,240,255,0.25) 0%, rgba(195,0,255,0.25) 100%)"
                        : "rgba(255,255,255,0.08)",
                      borderRadius: "22px",
                      color: isActive ? "var(--neon-cyan)" : "var(--text-light)",
                      fontSize: "1.3rem",
                      fontWeight: isActive ? 700 : 500,
                      border: isActive
                        ? "3px solid var(--neon-cyan)"
                        : "2.5px solid rgba(0,240,255,0.35)",
                      backdropFilter: "blur(18px)",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                      boxShadow: isActive
                        ? "0 0 50px rgba(0,240,255,0.6), inset 0 0 30px rgba(0,240,255,0.2)"
                        : "0 10px 30px rgba(0,0,0,0.5)",
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    {isActive && <div className="energy-field" style={{ opacity: 0.7 }} />}
                    
                    <motion.span 
                      style={{ 
                        fontSize: "2rem",
                        filter: isActive ? 'drop-shadow(0 0 10px currentColor)' : 'none',
                        position: 'relative',
                        zIndex: 2
                      }}
                    >
                      {item.icon}
                    </motion.span>
                    <span style={{ position: 'relative', zIndex: 2 }}>{item.label}</span>
                    
                    {isActive && (
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          marginLeft: 'auto',
                          position: 'relative',
                          zIndex: 2
                        }}
                      >
                        <FaStar style={{
                          color: 'var(--neon-gold)',
                          fontSize: '1.2rem',
                          filter: 'drop-shadow(0 0 8px var(--neon-gold))'
                        }} />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;