"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBars, FaTimes, FaHome, FaGraduationCap, FaBriefcase,
  FaCode, FaLaptopCode, FaTrophy, FaFileAlt, FaCertificate,
  FaHeart, FaAward, FaEnvelope, FaEllipsisH, FaChevronDown,
  FaRocket, FaBrain
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const navRef = useRef(null);

  // Mouse-following glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 280 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 280 });

  const currentPath = location.pathname === "/" ? "/home" : location.pathname;

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
      setIsScrolled(window.scrollY > 80);
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

  // Navigation items (ordered logically)
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

  // Only these 5 links will be visible on desktop
  const visibleItems = navItems.filter(item => 
    ["Home", "Education", "Skills", "Projects", "Contact"].includes(item.label)
  );

  // All remaining items go to "More" dropdown
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
      {/* ===================== GLOBAL STYLES ===================== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;900&family=Roboto+Mono:wght@300;400;500;600&display=swap');

        :root {
          --neon-cyan:    #00f0ff;
          --neon-purple:  #c300ff;
          --neon-pink:    #ff00aa;
          --bg-dark:      #0a0a1a;
          --glass:        rgba(15, 15, 35, 0.78);
          --glass-border: rgba(0, 240, 255, 0.28);
          --text-light:   #e0f7ff;
          --text-dim:     #a0d0ff;
        }

        body {
          margin: 0;
          background: var(--bg-dark);
          font-family: 'Roboto Mono', monospace;
        }

        @keyframes scanline {
          0%   { transform: translateY(-120%); }
          100% { transform: translateY(120%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%      { transform: translateY(-8px) rotate(3deg); }
        }

        .nav-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 90px;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-item {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-item:hover {
          transform: translateY(-4px) scale(1.06);
          box-shadow: 0 0 30px rgba(0, 240, 255, 0.4);
        }

        .nav-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(0,240,255,0.25) 50%, transparent 60%);
          animation: scanline 8s linear infinite;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s;
          z-index: 1;
        }

        .nav-item:hover::before,
        .nav-active::before {
          opacity: 0.9;
        }

        .nav-active {
          background: rgba(0, 240, 255, 0.22) !important;
          border: 2px solid var(--neon-cyan) !important;
          color: var(--neon-cyan) !important;
          box-shadow: 0 0 35px rgba(0,240,255,0.6), inset 0 0 20px rgba(0,240,255,0.3);
          transform: translateY(-3px) scale(1.04);
        }

        .nav-active .icon {
          animation: float 3.2s ease-in-out infinite;
        }

        .logo-glow {
          text-shadow: 0 0 25px var(--neon-cyan), 0 0 50px var(--neon-purple);
        }

        .mobile-menu {
          background: rgba(10,10,26,0.96);
          backdrop-filter: blur(24px);
          border-top: 3px solid rgba(0,240,255,0.45);
        }

        .dropdown {
          background: rgba(15,15,35,0.92);
          backdrop-filter: blur(22px);
          border: 2px solid rgba(0,240,255,0.45);
          box-shadow: 0 25px 90px rgba(0,0,0,0.85), 0 0 70px rgba(0,240,255,0.35);
        }
      `}</style>

      {/* ===================== MAIN NAVBAR ===================== */}
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        className="nav-container"
        style={{
          background: isScrolled ? "rgba(10,10,26,0.92)" : "rgba(10,10,26,0.78)",
          backdropFilter: isScrolled ? "blur(32px) saturate(180%)" : "blur(24px) saturate(160%)",
          borderBottom: isScrolled
            ? "3px solid rgba(0,240,255,0.45)"
            : "2px solid rgba(0,240,255,0.28)",
          boxShadow: isScrolled
            ? "0 20px 80px rgba(0,0,0,0.9), 0 0 120px rgba(0,240,255,0.3)"
            : "0 12px 50px rgba(0,0,0,0.8)",
        }}
      >
        {/* Mouse-following glow effect */}
        {!isMobile && isScrolled && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle 800px at ${glowX}px ${glowY}px, rgba(0,240,255,0.18), transparent 65%)`,
              pointerEvents: "none",
              opacity: 0.85,
            }}
          />
        )}

        <div
          style={{
            maxWidth: "1720px",
            margin: "0 auto",
            padding: "0 40px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("/home")}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.94 }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: 0,
              marginRight: "30px",
            }}
          >
            <motion.span
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.18, 1],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
              className="logo-glow"
              style={{
                fontSize: isMobile ? "2.4rem" : "2.8rem",
                color: "#00f0ff",
              }}
            >
              <FaRocket />
            </motion.span>

            <motion.span
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: isMobile ? "1.9rem" : "2.2rem",
                fontWeight: 900,
                letterSpacing: "-1px",
                background: "linear-gradient(90deg, #00f0ff, #c300ff, #00f0ff)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Bhagavan
            </motion.span>
          </motion.button>

          {/* Desktop Navigation - Only 5 main items */}
          {!isMobile && (
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              {visibleItems.map((item) => {
                const isActive = currentPath === item.path;

                return (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.96 }}
                    className={`nav-item ${isActive ? "nav-active" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 22px",
                      color: isActive ? "var(--neon-cyan)" : "var(--text-light)",
                      fontSize: "0.98rem",
                      fontWeight: isActive ? 700 : 500,
                      border: isActive
                        ? "2px solid var(--neon-cyan)"
                        : "1.5px solid rgba(0,240,255,0.3)",
                      background: isActive
                        ? "rgba(0,240,255,0.22)"
                        : "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                      borderRadius: "16px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <motion.span
                      animate={isActive ? { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.8 }}
                      style={{ fontSize: "1.3rem" }}
                      className="icon"
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}

              {/* More Dropdown - contains all remaining items */}
              <div style={{ position: "relative" }}>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                  className={`nav-item ${moreDropdownOpen ? "nav-active" : ""}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 22px",
                    color: moreDropdownOpen ? "var(--neon-cyan)" : "var(--text-light)",
                    fontSize: "0.98rem",
                    fontWeight: moreDropdownOpen ? 700 : 500,
                    borderRadius: "16px",
                    background: moreDropdownOpen
                      ? "rgba(0,240,255,0.22)"
                      : "rgba(255,255,255,0.05)",
                    border: moreDropdownOpen
                      ? "2px solid var(--neon-cyan)"
                      : "1.5px solid rgba(0,240,255,0.3)",
                    backdropFilter: "blur(12px)",
                    cursor: "pointer",
                  }}
                >
                  <motion.span
                    animate={{ rotate: moreDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: "1.3rem" }}
                  >
                    <FaEllipsisH />
                  </motion.span>
                  <span>More</span>
                  <FaChevronDown style={{ fontSize: "0.85rem" }} />
                </motion.button>

                <AnimatePresence>
                  {moreDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -30, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -30, scale: 0.92 }}
                      transition={{ duration: 0.3 }}
                      className="dropdown"
                      style={{
                        position: "absolute",
                        top: "calc(100% + 18px)",
                        right: 0,
                        minWidth: "300px",
                        borderRadius: "18px",
                        padding: "1.2rem",
                        zIndex: 1001,
                      }}
                    >
                      {moreItems.map((item) => {
                        const isActive = currentPath === item.path;

                        return (
                          <motion.button
                            key={item.path}
                            onClick={() => handleNavClick(item.path)}
                            whileHover={{ x: 12, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className={`nav-item ${isActive ? "nav-active" : ""}`}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              gap: "16px",
                              padding: "14px 22px",
                              color: isActive ? "var(--neon-cyan)" : "var(--text-light)",
                              fontSize: "1.02rem",
                              fontWeight: isActive ? 700 : 500,
                              borderRadius: "14px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              textAlign: "left",
                              marginBottom: "6px",
                            }}
                          >
                            <motion.span style={{ fontSize: "1.4rem" }}>
                              {item.icon}
                            </motion.span>
                            <span>{item.label}</span>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )}

          {/* Mobile Hamburger Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.88 }}
              style={{
                background: menuOpen
                  ? "linear-gradient(135deg, rgba(0,240,255,0.4), rgba(195,0,255,0.35))"
                  : "rgba(255,255,255,0.08)",
                border: menuOpen
                  ? "2.5px solid var(--neon-cyan)"
                  : "2px solid rgba(0,240,255,0.4)",
                color: "var(--neon-cyan)",
                fontSize: "2rem",
                padding: "14px 18px",
                borderRadius: "16px",
                cursor: "pointer",
                boxShadow: menuOpen
                  ? "0 0 60px rgba(0,240,255,0.6)"
                  : "0 8px 25px rgba(0,0,0,0.5)",
              }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <FaTimes />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.45 }}
                  >
                    <FaBars />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* ===================== MOBILE FULL-SCREEN MENU ===================== */}
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
              inset: "90px 0 0 0",
              zIndex: 999,
              overflowY: "auto",
              padding: "3rem 2rem",
            }}
            onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                maxWidth: "600px",
                margin: "0 auto",
                paddingBottom: "6rem",
              }}
            >
              {navItems.map((item) => {
                const isActive = currentPath === item.path;

                return (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    whileHover={{ scale: 1.06, x: 14 }}
                    whileTap={{ scale: 0.94 }}
                    className={`nav-item ${isActive ? "nav-active" : ""}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "24px 32px",
                      background: isActive
                        ? "rgba(0,240,255,0.28)"
                        : "rgba(255,255,255,0.07)",
                      borderRadius: "20px",
                      color: isActive ? "var(--neon-cyan)" : "var(--text-light)",
                      fontSize: "1.25rem",
                      fontWeight: isActive ? 700 : 500,
                      border: isActive
                        ? "2.5px solid var(--neon-cyan)"
                        : "2px solid rgba(0,240,255,0.35)",
                      backdropFilter: "blur(14px)",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                      boxShadow: isActive
                        ? "0 0 40px rgba(0,240,255,0.5)"
                        : "none",
                    }}
                  >
                    <motion.span style={{ fontSize: "1.9rem" }}>
                      {item.icon}
                    </motion.span>
                    <span>{item.label}</span>
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