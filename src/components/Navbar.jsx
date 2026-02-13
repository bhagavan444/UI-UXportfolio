"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  User, Briefcase, Code2, FolderGit2, Mail,
  ChevronDown, Menu, X, FileText, Award,
  GraduationCap, Trophy, Shield
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DESIGN SYSTEM
// ─────────────────────────────────────────────────────────────
const BRAND = "#3b82f6"; // Refined blue accent
const EASE = "cubic-bezier(.16,1,.3,1)";

// ─────────────────────────────────────────────────────────────
// NAVIGATION DATA
// ─────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────
// LOGO COMPONENT
// ─────────────────────────────────────────────────────────────
const Logo = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 0,
    }}
  >
    <div
      style={{
        width: "36px",
        height: "36px",
        borderRadius: "8px",
        background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(59, 130, 246, 0.15)",
      }}
    >
      <Code2 size={18} color="#ffffff" strokeWidth={2.5} />
    </div>
    <span
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "17px",
        fontWeight: 600,
        color: "#f1f5f9",
        letterSpacing: "-0.02em",
      }}
    >
      Bhagavan
    </span>
  </button>
);

// ─────────────────────────────────────────────────────────────
// NAV LINK COMPONENT
// ─────────────────────────────────────────────────────────────
const NavLink = ({ item, active, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        position: "relative",
        padding: "8px 16px",
        background: "none",
        border: "none",
        color: active ? "#f1f5f9" : "#94a3b8",
        fontSize: "14.5px",
        fontWeight: active ? 500 : 400,
        fontFamily: "'Inter', sans-serif",
        cursor: "pointer",
        transition: `color 240ms ${EASE}`,
        whiteSpace: "nowrap",
      }}
    >
      {item.label}
      
      {/* Active indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "-1px",
          left: "16px",
          right: "16px",
          height: "2px",
          background: BRAND,
          borderRadius: "2px 2px 0 0",
          opacity: active ? 1 : 0,
          transform: active ? "scaleX(1)" : "scaleX(0.7)",
          transition: `all 280ms ${EASE}`,
        }}
      />
      
      {/* Hover background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(148, 163, 184, 0.06)",
          borderRadius: "6px",
          opacity: isHover && !active ? 1 : 0,
          transition: `opacity 200ms ${EASE}`,
          pointerEvents: "none",
        }}
      />
    </button>
  );
};

// ─────────────────────────────────────────────────────────────
// DROPDOWN MENU
// ─────────────────────────────────────────────────────────────
const Dropdown = ({ isOpen, currentRoute, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 8px)",
        right: 0,
        width: "220px",
        background: "#1a1d29",
        border: "1px solid rgba(148, 163, 184, 0.12)",
        borderRadius: "12px",
        boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        animation: "dropdownIn 280ms cubic-bezier(.16,1,.3,1)",
        zIndex: 100,
      }}
    >
      <style>
        {`
          @keyframes dropdownIn {
            from {
              opacity: 0;
              transform: translateY(-8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      
      <div
        style={{
          padding: "8px 12px",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          color: "#64748b",
          textTransform: "uppercase",
          borderBottom: "1px solid rgba(148, 163, 184, 0.08)",
        }}
      >
        More
      </div>

      {SECONDARY_NAV.map((item) => {
        const active = currentRoute === item.path;
        const { Icon } = item;
        
        return (
          <DropdownItem
            key={item.path}
            item={item}
            active={active}
            Icon={Icon}
            onClick={() => onNavigate(item.path)}
          />
        );
      })}
    </div>
  );
};

const DropdownItem = ({ item, active, Icon, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        padding: "10px 16px",
        background: active ? "rgba(59, 130, 246, 0.08)" : isHover ? "rgba(148, 163, 184, 0.06)" : "transparent",
        border: "none",
        color: active ? BRAND : "#cbd5e1",
        fontSize: "14px",
        fontWeight: active ? 500 : 400,
        textAlign: "left",
        cursor: "pointer",
        transition: `all 180ms ${EASE}`,
      }}
    >
      <Icon size={16} strokeWidth={2} style={{ flexShrink: 0 }} />
      <span>{item.label}</span>
    </button>
  );
};

// ─────────────────────────────────────────────────────────────
// MOBILE MENU
// ─────────────────────────────────────────────────────────────
const MobileMenu = ({ isOpen, currentRoute, onNavigate, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)",
          zIndex: 9998,
          animation: "fadeIn 200ms ease-out",
        }}
      />
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>

      {/* Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(340px, 85vw)",
          background: "#12141d",
          borderLeft: "1px solid rgba(148, 163, 184, 0.12)",
          boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.6)",
          zIndex: 9999,
          overflowY: "auto",
          animation: "slideIn 320ms cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 24px",
            borderBottom: "1px solid rgba(148, 163, 184, 0.12)",
          }}
        >
          <span
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#f1f5f9",
              fontFamily: "'Space Grotesk', sans-serif",
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
              width: "32px",
              height: "32px",
              background: "rgba(148, 163, 184, 0.08)",
              border: "none",
              borderRadius: "6px",
              color: "#cbd5e1",
              cursor: "pointer",
              transition: `all 180ms ${EASE}`,
            }}
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          {/* Primary Nav */}
          <div style={{ marginBottom: "32px" }}>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#64748b",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Main
            </div>
            {PRIMARY_NAV.map((item) => (
              <MobileMenuItem
                key={item.path}
                item={item}
                active={currentRoute === item.path}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
              />
            ))}
          </div>

          {/* Secondary Nav */}
          <div>
            <div
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                color: "#64748b",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              More
            </div>
            {SECONDARY_NAV.map((item) => (
              <MobileMenuItem
                key={item.path}
                item={item}
                active={currentRoute === item.path}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
              />
            ))}
          </div>

          {/* Resume CTA */}
          <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(148, 163, 184, 0.12)" }}>
            <button
              onClick={() => {
                onNavigate("/resume");
                onClose();
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "12px",
                background: BRAND,
                border: "none",
                borderRadius: "8px",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.25)",
                transition: `all 200ms ${EASE}`,
              }}
            >
              <FileText size={16} strokeWidth={2} />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const MobileMenuItem = ({ item, active, onClick }) => {
  const { Icon } = item;
  
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        padding: "12px 16px",
        marginBottom: "6px",
        background: active ? "rgba(59, 130, 246, 0.08)" : "transparent",
        border: active ? "1px solid rgba(59, 130, 246, 0.2)" : "1px solid transparent",
        borderRadius: "8px",
        color: active ? BRAND : "#cbd5e1",
        fontSize: "14.5px",
        fontWeight: active ? 500 : 400,
        textAlign: "left",
        cursor: "pointer",
        transition: `all 200ms ${EASE}`,
      }}
    >
      <Icon size={18} strokeWidth={2} style={{ flexShrink: 0 }} />
      <span>{item.label}</span>
    </button>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN NAVBAR
// ─────────────────────────────────────────────────────────────
const ExecutiveNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const moreRef = useRef(null);
  
  const currentRoute = location.pathname === "/" ? "/home" : location.pathname;

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // Close more dropdown on outside click
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

  // Close menus on route change
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
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0f1117;
            color: #e2e8f0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          ::-webkit-scrollbar {
            width: 6px;
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }

          ::-webkit-scrollbar-thumb {
            background: rgba(148, 163, 184, 0.3);
            border-radius: 3px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: rgba(148, 163, 184, 0.5);
          }
        `}
      </style>

      {/* Navbar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: scrolled ? "64px" : "72px",
          background: scrolled ? "rgba(15, 17, 23, 0.85)" : "rgba(15, 17, 23, 0.7)",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(20px) saturate(160%)",
          borderBottom: `1px solid ${scrolled ? "rgba(148, 163, 184, 0.12)" : "rgba(148, 163, 184, 0.08)"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(0, 0, 0, 0.12)" : "none",
          transition: `all 320ms ${EASE}`,
          zIndex: 9000,
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            height: "100%",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* Logo */}
          <Logo onClick={() => handleNavigate("/home")} />

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
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

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                {/* More Dropdown */}
                <div style={{ position: "relative" }} ref={moreRef}>
                  <button
                    onClick={() => setMoreOpen(!moreOpen)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 14px",
                      background: moreOpen ? "rgba(148, 163, 184, 0.08)" : "transparent",
                      border: "none",
                      borderRadius: "6px",
                      color: "#94a3b8",
                      fontSize: "14px",
                      fontWeight: 400,
                      cursor: "pointer",
                      transition: `all 200ms ${EASE}`,
                    }}
                  >
                    More
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      style={{
                        transform: moreOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: `transform 280ms ${EASE}`,
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
                    gap: "8px",
                    padding: "9px 18px",
                    background: currentRoute === "/resume" ? "#2563eb" : BRAND,
                    border: "none",
                    borderRadius: "7px",
                    color: "#ffffff",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    boxShadow: "0 2px 8px rgba(59, 130, 246, 0.2)",
                    transition: `all 220ms ${EASE}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#2563eb";
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    if (currentRoute !== "/resume") {
                      e.currentTarget.style.background = BRAND;
                    }
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(59, 130, 246, 0.2)";
                  }}
                >
                  <FileText size={15} strokeWidth={2} />
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
                width: "40px",
                height: "40px",
                background: "rgba(148, 163, 184, 0.08)",
                border: "none",
                borderRadius: "8px",
                color: "#cbd5e1",
                cursor: "pointer",
                transition: `all 180ms ${EASE}`,
              }}
            >
              <Menu size={20} strokeWidth={2} />
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
};

export default ExecutiveNavbar;