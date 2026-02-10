"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Gauge, Cpu, CircuitBoard, GraduationCap, Radio,
  Briefcase, Trophy, Shield, Brain, Heart, FileText,
  Star, Layers, Terminal, Zap, Clock, ChevronDown,
  Menu, X, Activity, Code2, Award
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────
const T = {
  cyan:    "#00e5ff",
  violet:  "#8b5cf6",
  emerald: "#10d88b",
  gold:    "#f5c542",
  crimson: "#ff4d6d",
  navy:    "#080714",
  surface: "rgba(10, 9, 28, 0.92)",
  glass:   "rgba(255,255,255,0.04)",
  border:  "rgba(0,229,255,0.12)",
};

// ─────────────────────────────────────────────────────────────
// NAV DATA
// ─────────────────────────────────────────────────────────────
const PRIMARY = [
  { label: "Dashboard", short: "DASHBOARD",     path: "/home",     Icon: Gauge,        color: T.cyan    },
  { label: "Tech Stack",short: "SKILLS",    path: "/myskills", Icon: Cpu,          color: T.emerald },
  { label: "Projects",  short: "PROJECTS",     path: "/projects", Icon: CircuitBoard, color: T.violet  },
  { label: "Education", short: "EDUCATION",    path: "/education",Icon: GraduationCap,color: T.gold    },
  { label: "Connect",   short: "CONTACT",   path: "/contact",  Icon: Radio,        color: T.crimson },
];

const EXTENDED = [
  { label: "Experience",      path: "/internships",  Icon: Briefcase,   color: T.cyan,    badge: "3+",    desc: "Professional Timeline"      },
  { label: "Competitions",    path: "/hackathons",   Icon: Trophy,      color: T.gold,    badge: "15+",   desc: "Hackathon History"          },
  { label: "Credentials",     path: "/certifications",Icon: Shield,     color: T.violet,  badge: "20+",   desc: "Verified Certificates"      },
  { label: "Workshops",       path: "/workshops",    Icon: Brain,       color: T.emerald,               desc: "Knowledge Transfer"         },
  { label: "Milestones",      path: "/achivements",  Icon: Star,        color: T.crimson,               desc: "Recognition & Awards"       },
  { label: "Beyond Code",     path: "/beyondcoding", Icon: Heart,       color: "#fb7185",               desc: "Life & Interests"           },
  { label: "Curriculum Vitae",path: "/resume",       Icon: FileText,    color: "#60a5fa", badge: "2025",  desc: "Download PDF"               },
];

// ─────────────────────────────────────────────────────────────
// UTILITY: hex → r,g,b string
// ─────────────────────────────────────────────────────────────
function hexRGB(hex) {
  const h = hex.replace("#","");
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  return `${r},${g},${b}`;
}

// ─────────────────────────────────────────────────────────────
// NOISE SVG FILTER (grain overlay)
// ─────────────────────────────────────────────────────────────
const NoiseSVG = () => (
  <svg style={{ position:"absolute", width:0, height:0 }}>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.68" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feBlend in="SourceGraphic" mode="overlay" result="blend"/>
      <feComposite in="blend" in2="SourceGraphic"/>
    </filter>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// LIVE CLOCK WIDGET
// ─────────────────────────────────────────────────────────────
const LiveClock = () => {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(t.getHours()).padStart(2,"0");
  const mm = String(t.getMinutes()).padStart(2,"0");
  const ss = String(t.getSeconds()).padStart(2,"0");

  return (
    <div className="clock-widget">
      <Activity size={13} strokeWidth={2.5}/>
      <span className="clock-digits">{hh}</span>
      <span className="clock-sep">:</span>
      <span className="clock-digits">{mm}</span>
      <span className="clock-sep">:</span>
      <span className="clock-digits pulse-sec">{ss}</span>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
// SIGNATURE LOGO
// ─────────────────────────────────────────────────────────────
const LogoMark = ({ compact, onClick }) => (
  <button className="logo-btn" onClick={onClick}>
    <div className={`logo-ring ${compact ? "compact" : ""}`}>
      <div className="logo-aura"/>
      <div className="logo-face">
        <Code2 size={compact ? 20 : 24} color={T.cyan} strokeWidth={2.4}/>
      </div>
      <svg className="logo-svg" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="27" fill="none"
          stroke={T.cyan} strokeWidth="0.8" strokeDasharray="3 5"
          style={{ animation: "spinCW 22s linear infinite" }}/>
        <circle cx="30" cy="30" r="22" fill="none"
          stroke={T.violet} strokeWidth="0.6" strokeDasharray="2 8"
          style={{ animation: "spinCCW 18s linear infinite" }}/>
      </svg>
    </div>
    <div className="logo-text-wrap">
      <span className="logo-name">BHAGAVAN</span>
      <span className="logo-sub">FULL-STACK ENGINEER</span>
    </div>
  </button>
);

// ─────────────────────────────────────────────────────────────
// PRIMARY NAV ITEM
// ─────────────────────────────────────────────────────────────
const NavItem = ({ item, active, onClick }) => {
  const { Icon, short, color } = item;
  const rgb = hexRGB(color);
  return (
    <button
      className={`nav-pill ${active ? "nav-active" : ""}`}
      onClick={onClick}
      style={{ "--ac": color, "--ar": rgb }}
    >
      <span className="pill-icon">
        <Icon size={15} strokeWidth={active ? 2.8 : 2.2}/>
      </span>
      <span className="pill-label">{short}</span>
      {active && <span className="active-dot"/>}
      <span className="pill-glow"/>
    </button>
  );
};

// ─────────────────────────────────────────────────────────────
// MORE DROPDOWN
// ─────────────────────────────────────────────────────────────
const MoreDropdown = ({ currentRoute, onNavigate }) => (
  <div className="mega-drop">
    <div className="mega-header">
      <span>EXTENDED PROFILE</span>
      <span className="mega-count">{EXTENDED.length} MODULES</span>
    </div>
    <div className="mega-grid">
      {EXTENDED.map((item) => {
        const active = currentRoute === item.path;
        const { Icon, color, badge } = item;
        return (
          <button
            key={item.path}
            className={`mega-item ${active ? "mega-active" : ""}`}
            style={{ "--mc": color, "--mr": hexRGB(color) }}
            onClick={() => onNavigate(item.path)}
          >
            <span className="mega-icon">
              <Icon size={17} color="#0a0918" strokeWidth={2.6}/>
            </span>
            <div className="mega-body">
              <span className="mega-label">{item.label}</span>
              <span className="mega-desc">{item.desc}</span>
            </div>
            {badge && <span className="mega-badge">{badge}</span>}
          </button>
        );
      })}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
const ModernCyberNav = () => {
  const location  = useLocation();
  const navigate  = useNavigate();

  const [menuOpen, setMenuOpen]   = useState(false);
  const [moreOpen, setMoreOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [isMobile, setIsMobile]   = useState(false);
  const [lx, setLx]               = useState(0); // spotlight X %
  const [ly, setLy]               = useState(0); // spotlight Y %

  const navRef      = useRef(null);
  const moreRef     = useRef(null);

  const currentRoute = location.pathname === "/" ? "/home" : location.pathname;

  // ── Scroll & resize
  useEffect(() => {
    const sync = () => {
      setScrolled(window.scrollY > 36);
      setIsMobile(window.innerWidth < 1024);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => { window.removeEventListener("scroll", sync); window.removeEventListener("resize", sync); };
  }, []);

  // ── Close menu on route change
  useEffect(() => { setMenuOpen(false); setMoreOpen(false); }, [location.pathname]);

  // ── Click outside → close more
  useEffect(() => {
    if (!moreOpen) return;
    const handle = (e) => { if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false); };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [moreOpen]);

  // ── Mouse spotlight
  const handleMouseMove = useCallback((e) => {
    if (!navRef.current) return;
    const r = navRef.current.getBoundingClientRect();
    setLx(((e.clientX - r.left) / r.width)  * 100);
    setLy(((e.clientY - r.top)  / r.height) * 100);
  }, []);

  const go = useCallback((path) => {
    if (path !== currentRoute) navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
    setMoreOpen(false);
  }, [currentRoute, navigate]);

  // ─────────────────────────────────────────────────────────
  return (
    <>
      {/* ── GLOBAL STYLES ────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Syne+Mono&family=Syne:wght@600;700;800&display=swap');

        /* ---------- RESET & BASE ---------- */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #07060f;
          color: #dde3f0;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ---------- NAVBAR SHELL ---------- */
        .gnav {
          position: fixed;
          inset: 0 0 auto 0;
          z-index: 9000;
          height: 76px;
          transition: height .5s cubic-bezier(.22,1,.36,1),
                      background .5s, border-color .5s, box-shadow .5s;
        }

        /* blur + noise bg */
        .gnav::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(8, 7, 20, 0.82);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          border-bottom: 1px solid rgba(0,229,255,0.10);
          transition: inherit;
          z-index: 0;
        }
        /* spotlight overlay */
        .gnav::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle 420px at var(--lx,50%) var(--ly,50%),
            rgba(0,229,255,0.06) 0%,
            transparent 70%
          );
          pointer-events: none;
          transition: background .12s linear;
          z-index: 1;
        }

        .gnav.scrolled { height: 64px; }
        .gnav.scrolled::before {
          background: rgba(6, 5, 16, 0.96);
          border-bottom-color: rgba(0,229,255,0.22);
          box-shadow: 0 12px 60px rgba(0,0,0,.7), 0 0 60px rgba(0,229,255,0.08);
        }

        /* top accent line */
        .gnav-topline {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent 0%,
            rgba(0,229,255,0.7) 35%,
            rgba(139,92,246,0.7) 65%,
            transparent 100%
          );
          z-index: 2;
        }
        /* bottom scanline */
        .gnav-scan {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg,
            transparent, rgba(0,229,255,0.18), transparent
          );
          z-index: 2;
          animation: scanSlide 8s linear infinite;
        }
        @keyframes scanSlide {
          0%   { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        /* row */
        .gnav-inner {
          position: relative;
          z-index: 3;
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 3.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        @media(max-width:1023px) {
          .gnav-inner { padding: 0 1.4rem; }
        }

        /* ---- LOGO ---- */
        .logo-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }
        .logo-ring {
          position: relative;
          width: 52px; height: 52px;
          flex-shrink: 0;
          transition: width .5s, height .5s;
        }
        .logo-ring.compact { width: 44px; height: 44px; }
        .logo-aura {
          position: absolute; inset: -5px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,229,255,.35), transparent 70%);
          animation: breatheAura 7s ease-in-out infinite;
        }
        @keyframes breatheAura {
          0%,100% { opacity:.7; transform:scale(1); }
          50%      { opacity:1; transform:scale(1.12); }
        }
        .logo-face {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 14px;
          background: linear-gradient(145deg, #12112a, #0c0b1e);
          border: 1.5px solid rgba(0,229,255,0.55);
          box-shadow: inset 0 0 18px rgba(0,229,255,.2),
                      0 0 28px rgba(0,229,255,.18);
          display: flex; align-items: center; justify-content: center;
          z-index: 1;
        }
        .logo-svg {
          position: absolute; inset: -8px;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          pointer-events: none;
        }
        @keyframes spinCW  { to { transform: rotate(360deg);  }}
        @keyframes spinCCW { to { transform: rotate(-360deg); }}

        .logo-text-wrap {
          display: flex; flex-direction: column; gap: 3px;
        }
        .logo-name {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.45rem;
          letter-spacing: 4px;
          background: linear-gradient(90deg, #00e5ff 0%, #8b5cf6 55%, #f5c542 100%);
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradFlow 10s linear infinite;
        }
        @keyframes gradFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 250% 50%; }
        }
        .logo-sub {
          font-family: 'Syne Mono', monospace;
          font-size: 0.62rem;
          letter-spacing: 3.5px;
          color: rgba(165,180,252,0.75);
          text-transform: uppercase;
        }

        /* ---- DESKTOP PILLS ---- */
        .nav-pills {
          display: flex; align-items: center; gap: 4px;
        }
        .nav-pill {
          position: relative;
          display: flex; align-items: center; gap: 7px;
          padding: 8px 18px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: transparent;
          color: rgba(221,227,240,0.7);
          font-family: 'Syne Mono', monospace;
          font-size: 0.76rem;
          letter-spacing: 1.6px;
          cursor: pointer;
          transition: all .3s cubic-bezier(.16,1,.3,1);
          overflow: hidden;
          white-space: nowrap;
        }
        .nav-pill:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
          border-color: rgba(var(--ar,0,229,255),.3);
          transform: translateY(-1px);
        }
        .nav-pill:hover .pill-glow {
          opacity: 1;
        }
        .nav-active {
          background: rgba(var(--ar,0,229,255),0.12) !important;
          border-color: var(--ac, #00e5ff) !important;
          color: var(--ac, #00e5ff) !important;
          box-shadow: 0 0 24px rgba(var(--ar,0,229,255),0.22),
                      inset 0 0 10px rgba(var(--ar,0,229,255),0.1);
          font-weight: 600;
        }
        .pill-icon {
          display: flex; align-items: center;
          opacity: .85;
        }
        .nav-active .pill-icon { opacity: 1; }
        .pill-label { position: relative; z-index: 1; }
        .active-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--ac,#00e5ff);
          box-shadow: 0 0 8px var(--ac,#00e5ff);
          animation: dotBlink 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes dotBlink {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.3; transform:scale(.7); }
        }
        .pill-glow {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 120%,
            rgba(var(--ar,0,229,255),.15) 0%, transparent 70%
          );
          opacity: 0;
          transition: opacity .3s;
          pointer-events: none;
        }

        /* ---- MORE BUTTON ---- */
        .more-wrap { position: relative; }
        .more-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 18px;
          border-radius: 10px;
          border: 1px solid rgba(139,92,246,.35);
          background: rgba(139,92,246,0.08);
          color: rgba(196,181,253,.85);
          font-family: 'Syne Mono', monospace;
          font-size: .76rem;
          letter-spacing: 1.6px;
          cursor: pointer;
          transition: all .3s ease;
          white-space: nowrap;
        }
        .more-btn:hover, .more-open {
          background: rgba(139,92,246,.18) !important;
          border-color: #8b5cf6 !important;
          color: #c4b5fd !important;
          box-shadow: 0 0 22px rgba(139,92,246,.25);
        }
        .more-chevron {
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .more-chevron.open { transform: rotate(180deg); }

        /* ---- MEGA DROPDOWN ---- */
        .mega-drop {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 480px;
          background: rgba(10,9,24,0.97);
          backdrop-filter: blur(48px);
          border: 1px solid rgba(0,229,255,0.2);
          border-radius: 20px;
          box-shadow:
            0 32px 100px rgba(0,0,0,.85),
            0 0 0 1px rgba(139,92,246,.12),
            0 0 80px rgba(0,229,255,.08);
          overflow: hidden;
          animation: dropIn .38s cubic-bezier(.16,1,.3,1);
          z-index: 9999;
        }
        @keyframes dropIn {
          from { opacity:0; transform:translateY(-14px) scale(.97); }
          to   { opacity:1; transform:translateY(0)    scale(1);    }
        }
        .mega-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.4rem .9rem;
          border-bottom: 1px solid rgba(0,229,255,.1);
        }
        .mega-header > span:first-child {
          font-family: 'Syne Mono', monospace;
          font-size: .65rem;
          letter-spacing: 3px;
          color: rgba(0,229,255,.6);
        }
        .mega-count {
          font-family: 'Syne Mono', monospace;
          font-size: .62rem;
          letter-spacing: 2px;
          color: rgba(139,92,246,.7);
          background: rgba(139,92,246,.12);
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid rgba(139,92,246,.25);
        }
        .mega-grid {
          padding: .7rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px;
        }
        .mega-item {
          display: flex; align-items: center; gap: .9rem;
          padding: .9rem 1rem;
          border-radius: 12px;
          border: 1px solid transparent;
          background: transparent;
          color: #dde3f0;
          cursor: pointer;
          transition: all .28s cubic-bezier(.16,1,.3,1);
          text-align: left;
        }
        .mega-item:hover {
          background: rgba(var(--mr,0,229,255),.09);
          border-color: rgba(var(--mr,0,229,255),.3);
          transform: translateY(-1px);
          box-shadow: 0 8px 26px rgba(var(--mr,0,229,255),.14);
        }
        .mega-active {
          background: rgba(var(--mr,0,229,255),.12) !important;
          border-color: var(--mc,#00e5ff) !important;
        }
        .mega-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--mc,#00e5ff), rgba(var(--mr,0,229,255),.6));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 6px 16px rgba(var(--mr,0,229,255),.25);
        }
        .mega-body {
          display: flex; flex-direction: column; gap: 3px;
          flex: 1;
          min-width: 0;
        }
        .mega-label {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: .87rem;
          letter-spacing: .4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mega-desc {
          font-size: .72rem;
          color: rgba(148,163,184,.7);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .mega-badge {
          font-family: 'Syne Mono', monospace;
          font-size: .64rem;
          padding: 4px 9px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(0,229,255,.22);
          border-radius: 20px;
          color: rgba(196,181,253,.9);
          flex-shrink: 0;
        }

        /* ---- CLOCK ---- */
        .clock-widget {
          display: flex; align-items: center; gap: 7px;
          padding: 7px 14px;
          border-radius: 10px;
          border: 1px solid rgba(0,229,255,.25);
          background: rgba(0,229,255,.06);
          font-family: 'Syne Mono', monospace;
          font-size: .82rem;
          color: #00e5ff;
          letter-spacing: 1px;
          box-shadow: 0 0 22px rgba(0,229,255,.1);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .clock-digits { opacity: .9; }
        .clock-sep {
          opacity: .45;
          animation: sepBlink 1s ease-in-out infinite;
        }
        @keyframes sepBlink { 0%,100%{opacity:.45} 50%{opacity:.15} }
        .pulse-sec { color: rgba(0,229,255,.65); }

        /* ---- MOBILE TOGGLE ---- */
        .mob-toggle {
          display: flex; align-items: center; justify-content: center;
          width: 46px; height: 46px;
          border-radius: 12px;
          border: 1px solid rgba(0,229,255,.3);
          background: rgba(0,229,255,.07);
          color: #00e5ff;
          cursor: pointer;
          transition: all .3s ease;
        }
        .mob-toggle.open {
          background: rgba(0,229,255,.14);
          border-color: #00e5ff;
          box-shadow: 0 0 28px rgba(0,229,255,.3);
        }

        /* ---- MOBILE MENU ---- */
        .mob-menu {
          position: fixed;
          top: 76px;
          inset-inline: 0;
          bottom: 0;
          background: rgba(6,5,16,.98);
          backdrop-filter: blur(44px);
          z-index: 8999;
          overflow-y: auto;
          padding: 2rem 1.4rem 4rem;
          animation: mobSlide .42s cubic-bezier(.22,1,.36,1);
        }
        @keyframes mobSlide {
          from { opacity:0; transform:translateY(-28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mob-inner { max-width: 600px; margin: 0 auto; }

        .mob-clock {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 1.2rem;
          border-radius: 16px;
          border: 1px solid rgba(0,229,255,.2);
          background: rgba(0,229,255,.05);
          font-family: 'Syne Mono', monospace;
          font-size: 1.05rem;
          color: #00e5ff;
          margin-bottom: 2rem;
        }

        .mob-section-label {
          font-family: 'Syne Mono', monospace;
          font-size: .62rem;
          letter-spacing: 3px;
          color: rgba(0,229,255,.45);
          padding: .4rem .4rem .8rem;
        }

        .mob-item {
          display: flex; align-items: center; gap: 1.2rem;
          width: 100%;
          padding: 1.1rem 1.3rem;
          margin-bottom: .6rem;
          border-radius: 16px;
          border: 1px solid rgba(0,229,255,.1);
          background: rgba(255,255,255,.03);
          color: #dde3f0;
          cursor: pointer;
          transition: all .32s ease;
          text-align: left;
          animation: mobItemIn .6s cubic-bezier(.22,1,.36,1) both;
        }
        .mob-item:hover {
          background: rgba(var(--mr,0,229,255),.07);
          border-color: rgba(var(--mr,0,229,255),.3);
          transform: translateX(5px);
        }
        .mob-item.mob-active {
          background: rgba(var(--mr,0,229,255),.12);
          border-color: var(--mc,#00e5ff);
          color: var(--mc,#00e5ff);
          box-shadow: 0 8px 30px rgba(var(--mr,0,229,255),.18);
        }
        @keyframes mobItemIn {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .mob-icon {
          width: 52px; height: 52px;
          border-radius: 13px;
          background: linear-gradient(135deg, var(--mc,#00e5ff), rgba(var(--mr,0,229,255),.6));
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 22px rgba(var(--mr,0,229,255),.25);
        }
        .mob-text { flex: 1; }
        .mob-label {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          display: block;
        }
        .mob-desc {
          font-size: .8rem;
          color: rgba(148,163,184,.65);
          display: block;
          margin-top: 3px;
        }
        .mob-badge {
          font-family: 'Syne Mono', monospace;
          font-size: .68rem;
          padding: 5px 11px;
          border-radius: 20px;
          border: 1px solid rgba(0,229,255,.28);
          background: rgba(0,229,255,.09);
          color: rgba(196,181,253,.9);
        }

        .mob-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,229,255,.35), transparent);
          margin: 1.6rem 0;
          box-shadow: 0 0 12px rgba(0,229,255,.25);
        }

        /* ── scrollbar ── */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb {
          background: rgba(0,229,255,.25);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover { background: rgba(0,229,255,.5); }
      `}</style>

      <NoiseSVG/>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* NAVBAR                                                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <nav
        ref={navRef}
        className={`gnav ${scrolled ? "scrolled" : ""}`}
        style={{ "--lx": `${lx}%`, "--ly": `${ly}%` }}
        onMouseMove={handleMouseMove}
      >
        <div className="gnav-topline"/>
        <div className="gnav-scan"/>

        <div className="gnav-inner">

          {/* LOGO */}
          <LogoMark compact={scrolled} onClick={() => go("/home")}/>

          {/* DESKTOP LINKS */}
          {!isMobile && (
            <>
              <div className="nav-pills">
                {PRIMARY.map((item) => (
                  <NavItem
                    key={item.path}
                    item={item}
                    active={currentRoute === item.path}
                    onClick={() => go(item.path)}
                  />
                ))}
              </div>

              {/* MORE */}
              <div className="more-wrap" ref={moreRef}>
                <button
                  className={`more-btn ${moreOpen ? "more-open" : ""}`}
                  onClick={() => setMoreOpen(!moreOpen)}
                >
                  <Layers size={15} strokeWidth={2.2}/>
                  <span>MORE</span>
                  <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                    className={`more-chevron ${moreOpen ? "open" : ""}`}
                  />
                </button>
                {moreOpen && (
                  <MoreDropdown currentRoute={currentRoute} onNavigate={go}/>
                )}
              </div>

              {/* CLOCK */}
              <LiveClock/>
            </>
          )}

          {/* MOBILE TOGGLE */}
          {isMobile && (
            <button
              className={`mob-toggle ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} strokeWidth={2.5}/> : <Menu size={22} strokeWidth={2.5}/>}
            </button>
          )}
        </div>
      </nav>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MOBILE MENU                                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      {isMobile && menuOpen && (
        <div className="mob-menu">
          <div className="mob-inner">
            <div className="mob-clock">
              <Activity size={15}/>
              <LiveClock/>
            </div>

            <div className="mob-section-label">// MAIN NAVIGATION</div>

            {PRIMARY.map((item, i) => {
              const act = currentRoute === item.path;
              const { Icon, color, label, desc } = item;
              const rgb = hexRGB(color);
              return (
                <button
                  key={item.path}
                  className={`mob-item ${act ? "mob-active" : ""}`}
                  style={{
                    "--mc": color, "--mr": rgb,
                    animationDelay: `${i * 0.06}s`,
                  }}
                  onClick={() => go(item.path)}
                >
                  <span className="mob-icon">
                    <Icon size={24} color="#090818" strokeWidth={2.6}/>
                  </span>
                  <span className="mob-text">
                    <span className="mob-label">{label}</span>
                    <span className="mob-desc">{item.desc || ""}</span>
                  </span>
                </button>
              );
            })}

            <div className="mob-divider"/>
            <div className="mob-section-label">// EXTENDED PROFILE</div>

            {EXTENDED.map((item, i) => {
              const act = currentRoute === item.path;
              const { Icon, color, label, desc, badge } = item;
              const rgb = hexRGB(color);
              return (
                <button
                  key={item.path}
                  className={`mob-item ${act ? "mob-active" : ""}`}
                  style={{
                    "--mc": color, "--mr": rgb,
                    animationDelay: `${(PRIMARY.length + i) * 0.055}s`,
                  }}
                  onClick={() => go(item.path)}
                >
                  <span className="mob-icon">
                    <Icon size={24} color="#090818" strokeWidth={2.6}/>
                  </span>
                  <span className="mob-text">
                    <span className="mob-label">{label}</span>
                    <span className="mob-desc">{desc}</span>
                  </span>
                  {badge && <span className="mob-badge">{badge}</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ModernCyberNav;