"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  User, Briefcase, Code2, FolderGit2, Mail,
  ChevronDown, Menu, X, FileText, Award,
  GraduationCap, Trophy, Shield
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
const T = {
  accent: "#5b7fff",
  accentDark: "#4c6fe8",
  bg: "#ffffff",
  bgGlass: "rgba(255, 255, 255, 0.9)",
  border: "rgba(0, 0, 0, 0.08)",
  borderHover: "rgba(0, 0, 0, 0.12)",
  text: "#000000",
  textMuted: "#4a4a52",
  textLight: "#7a7a85",
  shadow: "rgba(0, 0, 0, 0.04)",
  shadowMd: "rgba(0, 0, 0, 0.08)",
  shadowLg: "rgba(0, 0, 0, 0.12)",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION DATA
═══════════════════════════════════════════════════════════════ */
const PRIMARY_NAV = [
  { label: "About", path: "/home", Icon: User },
  { label: "Projects", path: "/projects", Icon: FolderGit2 },
  { label: "Skills", path: "/myskills", Icon: Code2 },
  { label: "Experience", path: "/internships", Icon: Briefcase },
  { label: "Contact", path: "/contact", Icon: Mail },
];

const SECONDARY_NAV = [
  { label: "Education", path: "/education", Icon: GraduationCap },
  { label: "Certifications", path: "/certifications", Icon: Shield },
  { label: "Competitions", path: "/hackathons", Icon: Trophy },
  { label: "Achievements", path: "/achivements", Icon: Award },
  { label: "Workshops", path: "/workshops", Icon: FileText },
  { label: "Resume", path: "/resume", Icon: FileText },
];

/* ═══════════════════════════════════════════════════════════════
   GLOBAL STYLES
═══════════════════════════════════════════════════════════════ */
const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-8px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(24px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes glowPulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(91, 127, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 30px rgba(91, 127, 255, 0.5);
    }
  }
  
  @keyframes scalePress {
    0% { transform: scale(1); }
    50% { transform: scale(0.98); }
    100% { transform: scale(1); }
  }
  
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.15);
  }
`;

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR COMPONENT
═══════════════════════════════════════════════════════════════ */
function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${x}px`;
        cursorDotRef.current.style.top = `${y}px`;
      }
      
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${x}px`;
        cursorGlowRef.current.style.top = `${y}px`;
      }
    };
    
    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);
    
    window.addEventListener("mousemove", moveCursor);
    
    // Attach hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, []);
  
  return (
    <>
      {/* Cursor Glow */}
      <div
        ref={cursorGlowRef}
        style={{
          position: "fixed",
          width: isHovering ? "40px" : "32px",
          height: isHovering ? "40px" : "32px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${T.accent}15, transparent 70%)`,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: `width 0.3s ${T.ease}, height 0.3s ${T.ease}`,
          zIndex: 10001,
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Cursor Dot */}
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed",
          width: isHovering ? "8px" : "6px",
          height: isHovering ? "8px" : "6px",
          borderRadius: "50%",
          background: T.accent,
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          transition: `width 0.2s ${T.ease}, height 0.2s ${T.ease}`,
          zIndex: 10002,
        }}
      />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LOGO COMPONENT
═══════════════════════════════════════════════════════════════ */
function Logo({ onClick, isScrolled }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        transition: `transform 0.3s ${T.easeSpring}`,
        transform: isHovered ? "scale(1.02)" : "scale(1)",
      }}
    >
      <div
        style={{
          width: isScrolled ? "32px" : "36px",
          height: isScrolled ? "32px" : "36px",
          borderRadius: "10px",
          background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accentDark} 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isHovered 
            ? `0 8px 24px ${T.accent}30` 
            : `0 4px 12px ${T.accent}20`,
          transition: `all 0.3s ${T.ease}`,
        }}
      >
        <Code2 
          size={isScrolled ? 16 : 18} 
          color="#ffffff" 
          strokeWidth={2.5}
          style={{ transition: `all 0.3s ${T.ease}` }}
        />
      </div>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: isScrolled ? "16px" : "17px",
          fontWeight: 700,
          color: T.text,
          letterSpacing: "-0.02em",
          transition: `all 0.3s ${T.ease}`,
        }}
      >
        Bhagavan - Developer
      </span>
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC NAV LINK COMPONENT
═══════════════════════════════════════════════════════════════ */
function NavLink({ item, active, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const linkRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!linkRef.current) return;
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 60;
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance;
      const moveX = x * strength * 0.15;
      const moveY = y * strength * 0.15;
      linkRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  };
  
  const handleMouseLeave = () => {
    if (linkRef.current) {
      linkRef.current.style.transform = "translate(0, 0)";
    }
    setIsHovered(false);
  };
  
  return (
    <button
      ref={linkRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        padding: "10px 18px",
        background: "none",
        border: "none",
        color: active ? T.text : T.textMuted,
        fontSize: "15px",
        fontWeight: active ? 600 : 500,
        fontFamily: "'Inter', sans-serif",
        cursor: "pointer",
        transition: `color 0.3s ${T.ease}, transform 0.2s ${T.ease}`,
        whiteSpace: "nowrap",
      }}
    >
      {item.label}
      
      {/* Underline */}
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          left: "50%",
          width: active ? "60%" : isHovered ? "40%" : "0%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${T.accent}, transparent)`,
          borderRadius: "2px",
          transform: "translateX(-50%)",
          transition: `width 0.4s ${T.easeSpring}`,
        }}
      />
      
      {/* Glow on active */}
      {active && (
        <div
          style={{
            position: "absolute",
            inset: "-8px",
            background: `radial-gradient(circle at center, ${T.accent}08, transparent 70%)`,
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DROPDOWN MENU
═══════════════════════════════════════════════════════════════ */
function Dropdown({ isOpen, currentRoute, onNavigate }) {
  if (!isOpen) return null;
  
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        right: 0,
        width: "240px",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px) saturate(180%)",
        border: `1px solid ${T.border}`,
        borderRadius: "16px",
        boxShadow: `
          0 20px 40px ${T.shadowLg},
          0 0 0 1px rgba(0, 0, 0, 0.03)
        `,
        overflow: "hidden",
        animation: "slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          padding: "12px 16px 8px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: T.textLight,
          textTransform: "uppercase",
          borderBottom: `1px solid ${T.border}`,
        }}
      >
        More
      </div>
      
      {SECONDARY_NAV.map((item, index) => (
        <DropdownItem
          key={item.path}
          item={item}
          active={currentRoute === item.path}
          onClick={() => onNavigate(item.path)}
          delay={index * 0.03}
        />
      ))}
    </div>
  );
}

function DropdownItem({ item, active, onClick, delay }) {
  const [isHovered, setIsHovered] = useState(false);
  const { Icon } = item;
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        padding: "12px 16px",
        background: active 
          ? `${T.accent}08` 
          : isHovered 
          ? "rgba(0, 0, 0, 0.02)" 
          : "transparent",
        border: "none",
        color: active ? T.accent : T.text,
        fontSize: "14.5px",
        fontWeight: active ? 600 : 500,
        textAlign: "left",
        cursor: "pointer",
        transition: `all 0.2s ${T.ease}`,
        animation: `slideInRight 0.3s ${T.ease} ${delay}s both`,
        transform: isHovered && !active ? "translateX(4px)" : "translateX(0)",
      }}
    >
      <Icon 
        size={17} 
        strokeWidth={2}
        style={{ 
          flexShrink: 0,
          opacity: active ? 1 : 0.6,
          transition: `opacity 0.2s ${T.ease}`,
        }} 
      />
      <span>{item.label}</span>
      
      {active && (
        <div
          style={{
            marginLeft: "auto",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: T.accent,
          }}
        />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE MENU
═══════════════════════════════════════════════════════════════ */
function MobileMenu({ isOpen, currentRoute, onNavigate, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          zIndex: 9998,
          animation: "fadeIn 0.2s ease-out",
        }}
      />
      
      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(380px, 90vw)",
          background: "#ffffff",
          boxShadow: "-12px 0 48px rgba(0, 0, 0, 0.15)",
          zIndex: 9999,
          overflowY: "auto",
          animation: "slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 28px",
            borderBottom: `1px solid ${T.border}`,
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: T.text,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            Navigation
          </span>
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              background: "rgba(0, 0, 0, 0.04)",
              border: "none",
              borderRadius: "10px",
              color: T.text,
              cursor: "pointer",
              transition: `all 0.2s ${T.ease}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.08)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
        
        {/* Content */}
        <div style={{ padding: "28px" }}>
          {/* Primary Nav */}
          <div style={{ marginBottom: "36px" }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: T.textLight,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Main
            </div>
            {PRIMARY_NAV.map((item, index) => (
              <MobileMenuItem
                key={item.path}
                item={item}
                active={currentRoute === item.path}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                delay={index * 0.05}
              />
            ))}
          </div>
          
          {/* Secondary Nav */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: T.textLight,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              More
            </div>
            {SECONDARY_NAV.map((item, index) => (
              <MobileMenuItem
                key={item.path}
                item={item}
                active={currentRoute === item.path}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                delay={(PRIMARY_NAV.length + index) * 0.05}
              />
            ))}
          </div>
          
          {/* CTA */}
          <div 
            style={{ 
              marginTop: "36px", 
              paddingTop: "28px", 
              borderTop: `1px solid ${T.border}` 
            }}
          >
            <button
              onClick={() => {
                onNavigate("/resume");
                onClose();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "14px",
                background: `linear-gradient(135deg, ${T.accent} 0%, ${T.accentDark} 100%)`,
                border: "none",
                borderRadius: "12px",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: `0 4px 16px ${T.accent}30`,
                transition: `all 0.2s ${T.ease}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 8px 24px ${T.accent}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = `0 4px 16px ${T.accent}30`;
              }}
            >
              <FileText size={18} strokeWidth={2.5} />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function MobileMenuItem({ item, active, onClick, delay }) {
  const { Icon } = item;
  
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        width: "100%",
        padding: "14px 16px",
        marginBottom: "8px",
        background: active ? `${T.accent}08` : "transparent",
        border: active ? `1.5px solid ${T.accent}30` : "1.5px solid transparent",
        borderRadius: "12px",
        color: active ? T.accent : T.text,
        fontSize: "15px",
        fontWeight: active ? 600 : 500,
        textAlign: "left",
        cursor: "pointer",
        transition: `all 0.25s ${T.ease}`,
        animation: `slideInRight 0.3s ${T.ease} ${delay}s both`,
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
          e.currentTarget.style.transform = "translateX(4px)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.transform = "translateX(0)";
        }
      }}
    >
      <Icon 
        size={19} 
        strokeWidth={2}
        style={{ 
          flexShrink: 0,
          opacity: active ? 1 : 0.6,
        }} 
      />
      <span>{item.label}</span>
      
      {active && (
        <div
          style={{
            marginLeft: "auto",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: T.accent,
            boxShadow: `0 0 8px ${T.accent}50`,
          }}
        />
      )}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN NAVBAR
═══════════════════════════════════════════════════════════════ */
export default function EliteNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const moreRef = useRef(null);
  const currentRoute = location.pathname === "/" ? "/home" : location.pathname;
  
  /* ───────────────────────────────────────────────────────────
     SCROLL EFFECTS
  ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrolled(scrollTop > 30);
      setScrollProgress(progress);
    };
    
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    
    handleScroll();
    handleResize();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  /* ───────────────────────────────────────────────────────────
     CLOSE DROPDOWN ON OUTSIDE CLICK
  ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!moreOpen) return;
    
    const handleClick = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [moreOpen]);
  
  /* ───────────────────────────────────────────────────────────
     CLOSE MENUS ON ROUTE CHANGE
  ─────────────────────────────────────────────────────────── */
  useEffect(() => {
    setMoreOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);
  
  const handleNavigate = (path) => {
    if (path !== currentRoute) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  return (
    <>
      {/* Global Styles */}
      <style>{GLOBAL_STYLES}</style>
      
      {/* Custom Cursor (Desktop Only) */}
      {!isMobile && <CustomCursor />}
      
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "2px",
          background: `linear-gradient(90deg, ${T.accent}, ${T.accentDark})`,
          zIndex: 10000,
          transition: "width 0.1s linear",
        }}
      />
      
      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: scrolled ? "68px" : "80px",
          background: scrolled 
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: scrolled 
            ? "blur(24px) saturate(180%)" 
            : "blur(16px) saturate(150%)",
          borderBottom: `1px solid ${scrolled ? T.border : "rgba(0, 0, 0, 0.05)"}`,
          boxShadow: scrolled 
            ? `0 8px 32px ${T.shadowMd}` 
            : "0 2px 8px rgba(0, 0, 0, 0.03)",
          transition: `all 0.4s ${T.ease}`,
          zIndex: 9000,
        }}
      >
        {/* Top Gradient Fade */}
        {scrolled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(91, 127, 255, 0.2), transparent)",
            }}
          />
        )}
        
        <div
          style={{
            maxWidth: "1440px",
            height: "100%",
            margin: "0 auto",
            padding: "0 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "56px",
          }}
        >
          {/* Logo */}
          <Logo onClick={() => handleNavigate("/home")} isScrolled={scrolled} />
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {PRIMARY_NAV.map((item) => (
                  <NavLink
                    key={item.path}
                    item={item}
                    active={currentRoute === item.path}
                    onClick={() => handleNavigate(item.path)}
                  />
                ))}
              </div>
              
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {/* More Dropdown */}
                <div style={{ position: "relative" }} ref={moreRef}>
                  <button
                    onClick={() => setMoreOpen(!moreOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "10px 16px",
                      background: moreOpen ? "rgba(0, 0, 0, 0.04)" : "transparent",
                      border: "none",
                      borderRadius: "10px",
                      color: T.textMuted,
                      fontSize: "15px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: `all 0.2s ${T.ease}`,
                    }}
                    onMouseEnter={(e) => {
                      if (!moreOpen) {
                        e.currentTarget.style.background = "rgba(0, 0, 0, 0.02)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!moreOpen) {
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    More
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      style={{
                        transform: moreOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: `transform 0.3s ${T.ease}`,
                      }}
                    />
                  </button>
                  
                  <Dropdown
                    isOpen={moreOpen}
                    currentRoute={currentRoute}
                    onNavigate={handleNavigate}
                  />
                </div>
                
                {/* Resume CTA */}
                <button
                  onClick={() => handleNavigate("/resume")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "11px 22px",
                    background: currentRoute === "/resume"
                      ? `linear-gradient(135deg, ${T.accentDark} 0%, ${T.accent} 100%)`
                      : `linear-gradient(135deg, ${T.accent} 0%, ${T.accentDark} 100%)`,
                    border: "none",
                    borderRadius: "11px",
                    color: "#ffffff",
                    fontSize: "14.5px",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: `0 4px 16px ${T.accent}30`,
                    transition: `all 0.3s ${T.easeSpring}`,
                    animation: currentRoute === "/resume" ? "none" : "glowPulse 3s ease-in-out infinite",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                    e.currentTarget.style.boxShadow = `0 8px 24px ${T.accent}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = `0 4px 16px ${T.accent}30`;
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.animation = "scalePress 0.2s ease";
                  }}
                >
                  <FileText size={16} strokeWidth={2.5} />
                  Resume
                </button>
              </div>
            </>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(true)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "rgba(0, 0, 0, 0.04)",
                border: "none",
                borderRadius: "11px",
                color: T.text,
                cursor: "pointer",
                transition: `all 0.2s ${T.ease}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.04)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMobile && (
        <MobileMenu
          isOpen={mobileOpen}
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}