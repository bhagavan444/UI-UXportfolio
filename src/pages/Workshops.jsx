import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Smartphone, Code, Brain, Cpu, Crown, Zap, ArrowRight, Calendar,
  Users, X, Sparkles, TrendingUp, Star, Rocket, Target, Award
} from "lucide-react";

const workshops = [
  {
    title: "Mobile App Development",
    icon: Smartphone,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    color: "#22d3ee",
    desc: "Build production-grade cross-platform apps with React Native & Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "App Store Deploy"],
    slots: 25,
    enrolled: 489,
    duration: "8 Weeks",
    level: "Intermediate",
    featured: true
  },
  {
    title: "Full-Stack Engineering",
    icon: Code,
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    color: "#a855f7",
    desc: "Master Next.js 14, TypeScript, GraphQL & cloud-native backends.",
    skills: ["Next.js 14", "TypeScript", "GraphQL", "PostgreSQL"],
    slots: 30,
    enrolled: 642,
    duration: "12 Weeks",
    level: "Beginner → Expert",
    featured: false
  },
  {
    title: "Machine Learning Pro",
    icon: Brain,
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    color: "#10b981",
    desc: "Real-world ML pipelines, MLOps & production model deployment.",
    skills: ["Python ML", "MLOps", "Feature Eng", "Time Series"],
    slots: 20,
    enrolled: 573,
    duration: "10 Weeks",
    level: "Intermediate",
    featured: false
  },
  {
    title: "Deep Learning & Gen AI",
    icon: Cpu,
    gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
    color: "#f59e0b",
    desc: "Transformers, Diffusion Models, LLM fine-tuning & RAG systems.",
    skills: ["PyTorch", "Transformers", "Stable Diffusion", "RAG"],
    slots: 18,
    enrolled: 521,
    duration: "12 Weeks",
    level: "Advanced",
    featured: true
  }
];

export default function EliteWorkshopsShowcase() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 300 });
  const containerRef = useRef(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const animate = () => {
      setTime((t) => t + 0.016);
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    const id = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(id);
    };
  }, []);

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const duration = 1800;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target]);
    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "#000",
        color: "white",
        overflow: "hidden",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Global Keyframes */}
      <style>{`
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse { 0%,100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @keyframes fadeInUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
      `}</style>

      {/* Background Layers */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        {/* Mouse-reactive gradient */}
        <motion.div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle 900px at ${springX}px ${springY}px, rgba(168,85,247,0.22), transparent 70%)`,
          }}
        />

        {/* Subtle moving orbs */}
        {[
          { x: 20, y: 30, size: 800, color: "rgba(34,211,238,0.18)", speed: 0.4 },
          { x: 70, y: 65, size: 1000, color: "rgba(168,85,247,0.14)", speed: 0.3 },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(120px)",
              left: `${orb.x + Math.sin(time * orb.speed) * 15}%`,
              top: `${orb.y + Math.cos(time * (orb.speed + 0.1)) * 15}%`,
              transform: `scale(${1 + Math.sin(time * 0.7 + i) * 0.15})`,
            }}
          />
        ))}

        {/* Very light grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            opacity: 0.4,
            transform: `translateY(${Math.sin(time * 0.2) * 10}px)`,
          }}
        />
      </div>

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1480px",
        margin: "0 auto",
        padding: "clamp(80px, 12vh, 140px) 24px",
      }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: "clamp(60px, 10vh, 100px)" }}
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)", marginBottom: "16px" }}
          >
            🚀
          </motion.div>

          <h1 style={{
            fontSize: "clamp(3.2rem, 9vw, 6.5rem)",
            fontWeight: 900,
            background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.05,
            marginBottom: "24px",
          }}>
            Elite Workshop Programs
          </h1>

          <p style={{
            fontSize: "clamp(1.15rem, 2.8vw, 1.45rem)",
            color: "#cbd5e1",
            maxWidth: "780px",
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}>
            Intensive, mentor-led programs designed to turn strong developers into industry-leading engineers.
          </p>

          {/* Quick stats */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(16px, 3vw, 32px)",
            justifyContent: "center",
          }}>
            {[
              { icon: Users, value: "2,225+", label: "Students Trained" },
              { icon: Award, value: "98%", label: "Success Rate" },
              { icon: Rocket, value: "40+", label: "Live Projects" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                style={{
                  padding: "16px 28px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: "999px",
                  border: "1px solid rgba(168,85,247,0.2)",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <item.icon size={22} color="#a855f7" />
                <div>
                  <div style={{ fontSize: "1.3rem", fontWeight: 800 }}>{item.value}</div>
                  <div style={{ fontSize: "0.9rem", color: "#94a3b8" }}>{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "clamp(24px, 4vw, 40px)",
        }}>
          {workshops.map((ws, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.9, type: "spring", stiffness: 100 }}
              whileHover={{ y: -16, scale: 1.02 }}
              onClick={() => setSelected(ws)}
              style={{
                position: "relative",
                padding: "clamp(32px, 5vw, 44px)",
                background: "rgba(15,15,40,0.75)",
                backdropFilter: "blur(20px)",
                borderRadius: "28px",
                border: hovered === idx ? `2px solid ${ws.color}` : "1px solid rgba(168,85,247,0.15)",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: hovered === idx
                  ? `0 40px 100px ${ws.color}40`
                  : "0 20px 60px rgba(0,0,0,0.5)",
                transition: "all 0.4s cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: ws.gradient,
                opacity: hovered === idx ? 0.12 : 0.05,
                transition: "opacity 0.5s",
                mixBlendMode: "screen",
              }} />

              {/* Featured crown */}
              {ws.featured && (
                <div style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  padding: "10px",
                  borderRadius: "50%",
                  boxShadow: "0 0 40px rgba(251,191,36,0.7)",
                }}>
                  <Crown size={24} color="#000" />
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: 100,
                height: 100,
                background: ws.gradient,
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 32px",
                boxShadow: `0 20px 60px ${ws.color}50`,
                transform: hovered === idx ? "scale(1.12) rotate(3deg)" : "scale(1)",
                transition: "transform 0.5s",
              }}>
                <ws.icon size={56} color="white" strokeWidth={2.2} />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.1rem)",
                fontWeight: 900,
                background: ws.gradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                marginBottom: "16px",
                textAlign: "center",
              }}>
                {ws.title}
              </h3>

              {/* Description */}
              <p style={{
                color: "#cbd5e1",
                fontSize: "clamp(1rem, 2.2vw, 1.1rem)",
                lineHeight: 1.6,
                marginBottom: "28px",
                textAlign: "center",
                opacity: hovered === idx ? 1 : 0.85,
                transition: "opacity 0.4s",
              }}>
                {ws.desc}
              </p>

              {/* Mini stats */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: "clamp(16px, 3vw, 28px)",
                marginBottom: "32px",
                flexWrap: "wrap",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Calendar size={18} color={ws.color} />
                  <span style={{ fontWeight: 600 }}>{ws.duration}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Users size={18} color={ws.color} />
                  <span style={{ fontWeight: 600 }}>
                    <Counter target={ws.enrolled} /> enrolled
                  </span>
                </div>
              </div>

              {/* CTA */}
              <div style={{
                textAlign: "center",
                marginTop: "auto",
              }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: "14px 32px",
                    background: ws.gradient,
                    borderRadius: "999px",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: `0 10px 40px ${ws.color}50`,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  View Program <ArrowRight size={20} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 1000,
              background: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(30px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(20px, 5vw, 40px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 60 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 900,
                width: "100%",
                background: "rgba(15,15,40,0.95)",
                backdropFilter: "blur(40px)",
                borderRadius: 32,
                padding: "clamp(40px, 6vw, 64px)",
                border: `3px solid ${selected.color}`,
                boxShadow: `0 0 120px ${selected.color}60`,
                position: "relative",
                maxHeight: "90vh",
                overflowY: "auto",
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                  border: "2px solid rgba(255,255,255,0.3)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <X size={24} />
              </button>

              <div style={{
                display: "flex",
                gap: "clamp(24px, 5vw, 48px)",
                alignItems: "center",
                marginBottom: "40px",
                flexWrap: "wrap",
              }}>
                <div style={{
                  width: 140,
                  height: 140,
                  background: selected.gradient,
                  borderRadius: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 30px 80px ${selected.color}60`,
                  flexShrink: 0,
                }}>
                  <selected.icon size={80} color="white" strokeWidth={2} />
                </div>

                <div>
                  <h2 style={{
                    fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
                    fontWeight: 900,
                    background: selected.gradient,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    marginBottom: 12,
                  }}>
                    {selected.title}
                  </h2>
                  <p style={{ color: "#cbd5e1", fontSize: "1.15rem", lineHeight: 1.6 }}>
                    {selected.desc}
                  </p>
                </div>
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20 }}>
                Core Skills You’ll Master
              </h3>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 40,
              }}>
                {selected.skills.map((skill) => (
                  <div key={skill} style={{
                    padding: "10px 18px",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 12,
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}>
                    {skill}
                  </div>
                ))}
              </div>

              <div style={{
                display: "flex",
                gap: "clamp(32px, 6vw, 64px)",
                flexWrap: "wrap",
              }}>
                <div>
                  <strong style={{ color: "#e2e8f0" }}>Duration:</strong> {selected.duration}
                </div>
                <div>
                  <strong style={{ color: "#e2e8f0" }}>Level:</strong> {selected.level}
                </div>
                <div>
                  <strong style={{ color: "#e2e8f0" }}>Slots:</strong> {selected.slots}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}