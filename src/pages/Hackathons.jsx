// HackathonShowcase.jsx - FINAL ULTRA-PREMIUM VERSION (with small certificate card)
import { 
  Trophy, Award, ExternalLink, X, Code, Database, Shield, Rocket, Crown, 
  Clock, Users, Sparkles, Zap, Star, Flame, Target, Cpu, GitBranch, Download 
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import brainovisionCert from "../assets/images/Brainovision-certificate.jpg";

export default function HackathonShowcase() {
  const [modal, setModal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const milestones = [
    { hour: "0-6h", icon: Code, title: "Foundation", desc: "Architecture • Database • Auth System", color: "#22d3ee", glow: "cyan" },
    { hour: "6-14h", icon: Database, title: "Core Build", desc: "REST APIs • UI Components • State", color: "#a855f7", glow: "purple" },
    { hour: "14-20h", icon: Shield, title: "Integration", desc: "Real-time Chat • Security Layer", color: "#ec4899", glow: "pink" },
    { hour: "20-24h", icon: Rocket, title: "Launch", desc: "Testing • Demo • Deploy to Cloud", color: "#10b981", glow: "emerald" }
  ];

  const techStack = [
    { icon: Code, name: "MongoDB", color: "#10b981" },
    { icon: Cpu, name: "Express.js", color: "#22d3ee" },
    { icon: Sparkles, name: "React", color: "#a855f7" },
    { icon: GitBranch, name: "Node.js", color: "#ec4899" },
    { icon: Shield, name: "JWT Auth", color: "#f59e0b" },
    { icon: Zap, name: "Socket.io", color: "#3b82f6" }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);
    if (isMobile) window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
      if (isMobile) window.removeEventListener("touchmove", handleMove);
    };
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 1.2, ease: "easeOut" }
    }
  };

  const childVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Download handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = brainovisionCert;
    link.download = "Brainovision-Hackathon-Certificate-2024.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #000000 0%, #0a0118 50%, #000000 100%)",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
        padding: isMobile ? "40px 16px" : "60px 24px"
      }}
    >
      {/* ──────────────────────────────────────────────── */}
      {/*                GLOBAL KEYFRAMES                  */}
      {/* ──────────────────────────────────────────────── */}
      <style>{`
        @keyframes morphing {
          0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.6; }
          100% { transform: scale(1) rotate(360deg); opacity: 0.8; }
        }
        @keyframes slideLines {
          0% { background-position: 0 0; }
          100% { background-position: 200px 200px; }
        }
        @keyframes energyFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-50px) scale(1.2); opacity: 0.4; }
        }
        @keyframes beamPulse {
          0%, 100% { opacity: 0.3; transform: translateY(0); }
          50% { opacity: 0.6; transform: translateY(-20px); }
        }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes shimmer { 0% { background-position: -200%; } 100% { background-position: 200%; } }
        @keyframes glowPulse { 0%, 100% { box-shadow: 0 0 20px rgba(251,191,36,0.4); } 50% { box-shadow: 0 0 60px rgba(251,191,36,0.8); } }
        @keyframes gradientShift { 0% { background-position: 0%; } 100% { background-position: 200%; } }
        @keyframes popIn { 0% { transform: scale(0.8) translateY(20px); opacity: 0; } 100% { transform: scale(1) translateY(0); opacity: 1; } }
        @keyframes shine { 0% { left: -100%; } 100% { left: 100%; } }
        @keyframes floatSpin { 0% { transform: rotate(0deg) translateY(0); } 50% { transform: rotate(180deg) translateY(-10px); } 100% { transform: rotate(360deg) translateY(0); } }
        @keyframes fadeInUp { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes certificatePulse {
          0%, 100% { box-shadow: 0 0 30px rgba(168,85,247,0.4); }
          50% { box-shadow: 0 0 70px rgba(168,85,247,0.7); }
        }
      `}</style>

      {/* ──────────────────────────────────────────────── */}
      {/*           ADVANCED INTERACTIVE BACKGROUND         */}
      {/* ──────────────────────────────────────────────── */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          y: parallaxY
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(168,85,247,0.3), transparent 40%)`
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 20% 80%, rgba(236,72,153,0.25), transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(34,211,238,0.22), transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.18), transparent 60%)",
          animation: "morphing 15s ease-in-out infinite"
        }} />

        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(168,85,247,0.15) 2px, transparent 2px), linear-gradient(90deg, rgba(168,85,247,0.15) 2px, transparent 2px)`,
          backgroundSize: isMobile ? "60px 60px" : "80px 80px",
          opacity: 0.35
        }} />

        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 120px, rgba(168,85,247,0.1) 120px, rgba(168,85,247,0.1) 122px)",
          animation: "slideLines 25s linear infinite"
        }} />

        {[...Array(isMobile ? 30 : 60)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
            animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 8 + Math.random() * 15, repeat: Infinity, delay: Math.random() * 5 }}
            style={{
              position: "absolute",
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background: `hsl(${250 + Math.random() * 80}, 90%, 70%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${15 + Math.random() * 30}px currentColor`,
              opacity: 0.75
            }}
          />
        ))}

        {[...Array(isMobile ? 3 : 5)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            style={{
              position: "absolute",
              left: `${i * (100 / (isMobile ? 3 : 5))}%`,
              top: 0,
              width: "2px",
              height: "100%",
              background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? '#a855f7' : '#ec4899'} 50%, transparent)`,
              opacity: 0.35,
              y: useTransform(scrollYProgress, [0, 1], [0, -50 * i])
            }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </motion.div>

      {/* ──────────────────────────────────────────────── */}
      {/*                   MAIN CONTENT                    */}
      {/* ──────────────────────────────────────────────── */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1600px",
          margin: "0 auto"
        }}
      >
        <motion.div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "40px" : "80px",
            alignItems: "center",
            minHeight: "100vh",
            marginBottom: isMobile ? "40px" : "80px"
          }}
        >
          {/* ─── LEFT COLUMN ──────────────────────────────────────── */}
          <motion.div variants={childVariants}>
            {/* Champion Badge */}
            <motion.div
              style={{ marginBottom: "40px" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                padding: isMobile ? "12px 24px" : "14px 32px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, rgba(251,191,36,0.25), rgba(249,115,22,0.18))",
                border: "2px solid rgba(251,191,36,0.6)",
                boxShadow: "0 10px 40px rgba(251,191,36,0.4), inset 0 2px 0 rgba(255,255,255,0.15), 0 0 60px rgba(251,191,36,0.3)",
                animation: "glowPulse 2.5s ease-in-out infinite"
              }}>
                <Trophy size={isMobile ? 22 : 26} color="#fbbf24" style={{ animation: "spin 25s linear infinite", filter: "drop-shadow(0 0 8px #fbbf24)" }} />
                <span style={{
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  background: "linear-gradient(90deg, #fef08a, #fbbf24, #f59e0b, #fbbf24, #fef08a)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "200%",
                  animation: "shimmer 2.5s linear infinite",
                  textShadow: "0 0 20px rgba(251,191,36,0.5)"
                }}>
                  NATIONAL CHAMPION 2024
                </span>
                <Crown size={isMobile ? 20 : 24} color="#fde047" style={{ animation: "bounce 2s ease-in-out infinite", filter: "drop-shadow(0 0 8px #fde047)" }} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div style={{ marginBottom: "32px" }} variants={childVariants}>
              <h1 style={{
                fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                fontWeight: 900,
                lineHeight: 0.95,
                background: "linear-gradient(135deg, #c084fc 0%, #a855f7 25%, #ec4899 50%, #22d3ee 75%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "20px",
                filter: "drop-shadow(0 0 50px rgba(168,85,247,0.6))",
                animation: "gradientShift 3s ease-in-out infinite",
                backgroundSize: "200%"
              }}>
                Brainovision
              </h1>

              <div style={{
                fontSize: "clamp(1.4rem, 4vw, 2.8rem)",
                fontWeight: 800,
                background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "0.05em",
                marginBottom: "8px"
              }}>
                HACKATHON 2024
              </div>

              <div style={{
                display: "inline-block",
                padding: "8px 20px",
                background: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: "8px",
                color: "#34d399",
                fontSize: isMobile ? "0.85rem" : "0.95rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                boxShadow: "0 0 20px rgba(16,185,129,0.2)"
              }}>
                <Star size={14} style={{ display: "inline", marginRight: "6px" }} />
                FIRST PLACE WINNER
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "#e2e8f0",
                lineHeight: 1.7,
                marginBottom: "40px",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)"
              }}
              variants={childVariants}
            >
              Full-stack <span style={{ color: "#a855f7", fontWeight: 700 }}>MERN marketplace</span> featuring JWT authentication, Socket.io real-time chat, and production-ready architecture — conceptualized, built, and deployed in <span style={{ color: "#22d3ee", fontWeight: 700 }}>24 hours</span>
            </motion.p>

            {/* Stats */}
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                gap: "16px",
                marginBottom: "40px"
              }}
              variants={childVariants}
            >
              {[
                { icon: Clock, val: "24h", color: "#22d3ee" },
                { icon: Users, val: "4", color: "#a855f7" },
                { icon: Code, val: "5k+", color: "#ec4899" },
                { icon: Trophy, val: "1st", color: "#fbbf24" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, y: -5 }}
                  style={{
                    padding: isMobile ? "16px 8px" : "20px 12px",
                    borderRadius: "16px",
                    background: "rgba(15,23,42,0.7)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(168,85,247,0.25)",
                    textAlign: "center",
                    animation: `popIn 0.6s ease-out ${0.2 + i * 0.1}s backwards`
                  }}
                >
                  <stat.icon size={isMobile ? 24 : 28} color={stat.color} style={{ margin: "0 auto 8px", filter: `drop-shadow(0 0 10px ${stat.color}80)` }} />
                  <div style={{ fontSize: isMobile ? "1.4rem" : "1.8rem", fontWeight: 900, color: "white", marginBottom: "4px" }}>
                    {stat.val}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div style={{ marginBottom: "40px" }} variants={childVariants}>
              <div style={{
                fontSize: isMobile ? "0.75rem" : "0.85rem",
                fontWeight: 700,
                color: "#94a3b8",
                letterSpacing: "0.1em",
                marginBottom: "16px",
                textTransform: "uppercase"
              }}>
                <Cpu size={14} style={{ display: "inline", marginRight: "8px" }} />
                TECH STACK
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {techStack.map((tech, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: isMobile ? "8px 14px" : "10px 18px",
                      borderRadius: "12px",
                      background: "rgba(15,23,42,0.7)",
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${tech.color}40`,
                      color: tech.color,
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      fontWeight: 600,
                      boxShadow: `0 0 20px ${tech.color}20`,
                      animation: `popIn 0.6s ease-out ${0.4 + i * 0.1}s backwards`
                    }}
                  >
                    <tech.icon size={16} />
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline Button */}
            <motion.div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }} variants={childVariants}>
              <motion.button
                onClick={() => setModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: isMobile ? "14px 28px" : "18px 36px",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #7c3aed, #a855f7, #ec4899)",
                  borderRadius: "999px",
                  color: "white",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 12px 40px rgba(168,85,247,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <Zap size={20} style={{ zIndex: 1 }} />
                <span style={{ zIndex: 1 }}>24h Timeline</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT COLUMN - SMALL CERTIFICATE CARD ──────────────── */}
          <motion.div
            variants={childVariants}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: "center"
            }}
          >
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2, y: -10 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: isMobile ? "320px" : "380px",
                borderRadius: "20px",
                overflow: "hidden",
                background: "rgba(15, 23, 42, 0.7)",
                backdropFilter: "blur(20px)",
                border: "2px solid rgba(168,85,247,0.5)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 80px rgba(168,85,247,0.5)",
                position: "relative",
                animation: "certificatePulse 4s ease-in-out infinite"
              }}
            >
              {/* Animated glowing border */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: -3,
                  borderRadius: "20px",
                  background: "conic-gradient(from 0deg at 50% 50%, #a855f7, #ec4899, #22d3ee, #a855f7)",
                  opacity: 0.7,
                  zIndex: -1
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />

              {/* Certificate preview */}
              <div style={{
                padding: "12px",
                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                borderRadius: "16px"
              }}>
                <img
                  src={brainovisionCert}
                  alt="Brainovision Hackathon Certificate 2024"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    display: "block",
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.6)"
                  }}
                />
              </div>

              {/* Shine overlay */}
              <motion.div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                  pointerEvents: "none"
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.12, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "absolute",
                bottom: isMobile ? "-50px" : "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: isMobile ? "12px 28px" : "14px 32px",
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                borderRadius: "999px",
                color: "white",
                fontWeight: 700,
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 12px 40px rgba(124,58,237,0.6)",
                zIndex: 20
              }}
            >
              <Download size={isMobile ? 18 : 20} />
              Download Certificate
            </motion.button>
          </motion.div>
        </motion.div>

        {/* ──────────────────────────────────────────────── */}
        {/*                TIMELINE SECTION                   */}
        {/* ──────────────────────────────────────────────── */}
        <motion.div
          style={{ marginTop: isMobile ? "120px" : "140px" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.div style={{ textAlign: "center", marginBottom: "64px" }} variants={childVariants}>
            <h3 style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: 900,
              background: "linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "16px",
              filter: "drop-shadow(0 0 30px rgba(168,85,247,0.5))"
            }}>
              24-Hour Development Sprint
            </h3>
            <p style={{ color: "#94a3b8", fontSize: isMobile ? "1rem" : "1.1rem" }}>
              From concept to deployment in four intense phases
            </p>
          </motion.div>

          <motion.div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px"
            }}
          >
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.03, boxShadow: `0 0 40px ${m.color}50` }}
                style={{
                  padding: isMobile ? "28px 20px" : "36px 28px",
                  borderRadius: "24px",
                  background: "rgba(15,23,42,0.7)",
                  backdropFilter: "blur(30px)",
                  border: "1px solid rgba(168,85,247,0.25)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${m.color}15, transparent)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <motion.div
                    style={{
                      width: isMobile ? "70px" : "90px",
                      height: isMobile ? "70px" : "90px",
                      margin: "0 auto 24px",
                      borderRadius: "22px",
                      background: `${m.color}22`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 40px ${m.color}50, inset 0 0 20px ${m.color}20`,
                      border: `2px solid ${m.color}40`
                    }}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <m.icon size={isMobile ? 36 : 48} color={m.color} style={{ filter: `drop-shadow(0 0 10px ${m.color})` }} />
                  </motion.div>

                  <div style={{
                    color: m.color,
                    fontWeight: 900,
                    fontSize: isMobile ? "0.95rem" : "1.05rem",
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                    textShadow: `0 0 20px ${m.color}80`
                  }}>
                    {m.hour}
                  </div>

                  <div style={{
                    fontSize: isMobile ? "1.5rem" : "1.85rem",
                    fontWeight: 900,
                    color: "white",
                    marginBottom: "14px",
                    letterSpacing: "-0.02em"
                  }}>
                    {m.title}
                  </div>

                  <div style={{
                    color: "#cbd5e1",
                    lineHeight: 1.6,
                    fontSize: isMobile ? "0.9rem" : "1rem"
                  }}>
                    {m.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ──────────────────────────────────────────────── */}
      {/*                   TIMELINE MODAL                  */}
      {/* ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setModal(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.96)",
              backdropFilter: "blur(30px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "16px" : "24px"
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, type: "spring" }}
              style={{
                maxWidth: isMobile ? "100%" : "900px",
                width: "100%",
                background: "rgba(15,23,42,0.98)",
                backdropFilter: "blur(50px)",
                borderRadius: isMobile ? "24px" : "32px",
                padding: isMobile ? "40px 24px" : "56px",
                border: "2px solid rgba(168,85,247,0.4)",
                boxShadow: "0 50px 100px rgba(0,0,0,0.9), 0 0 100px rgba(168,85,247,0.3)",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative"
              }}
            >
              <motion.button
                onClick={() => setModal(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  backdropFilter: "blur(10px)"
                }}
              >
                <X size={20} />
              </motion.button>

              <h2 style={{
                fontSize: isMobile ? "2rem" : "2.8rem",
                fontWeight: 900,
                background: "linear-gradient(135deg, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textAlign: "center",
                marginBottom: "48px"
              }}>
                Complete Development Timeline
              </h2>

              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{
                    display: "flex",
                    gap: isMobile ? "16px" : "24px",
                    padding: isMobile ? "20px" : "28px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "20px",
                    border: `1px solid ${m.color}40`,
                    marginBottom: "24px"
                  }}
                >
                  <div style={{
                    width: isMobile ? "60px" : "80px",
                    height: isMobile ? "60px" : "80px",
                    flexShrink: 0,
                    borderRadius: "18px",
                    background: `${m.color}33`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 40px ${m.color}60`,
                    border: `2px solid ${m.color}50`
                  }}>
                    <m.icon size={isMobile ? 32 : 42} color={m.color} style={{ filter: `drop-shadow(0 0 8px ${m.color})` }} />
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      color: m.color,
                      fontWeight: 900,
                      marginBottom: "10px",
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      letterSpacing: "0.05em"
                    }}>
                      {m.hour}
                    </div>

                    <div style={{
                      fontSize: isMobile ? "1.6rem" : "2rem",
                      fontWeight: 900,
                      color: "white",
                      marginBottom: "14px"
                    }}>
                      {m.title}
                    </div>

                    <div style={{
                      color: "#cbd5e1",
                      lineHeight: 1.6,
                      fontSize: isMobile ? "1rem" : "1.1rem"
                    }}>
                      {m.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}