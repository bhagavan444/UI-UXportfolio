import { Smartphone, Code, Brain, Cpu, Crown, Zap, ArrowRight, Calendar, Users, X, Sparkles, TrendingUp, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function WorkshopShowcase() {
  const [selected, setSelected] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [time, setTime] = useState(0);
  const containerRef = useRef(null);

  const workshops = [
    {
      title: "Mobile App Development",
      icon: Smartphone,
      gradient: "linear-gradient(135deg, #22d3ee, #3b82f6, #6366f1)",
      color: "#22d3ee",
      desc: "Build production-grade cross-platform apps with React Native, Flutter, and native performance optimization.",
      skills: ["React Native", "Flutter", "Firebase", "Push Notifications", "App Store Deploy"],
      slots: 25,
      enrolled: 489,
      duration: "8 Weeks",
      level: "Intermediate",
      featured: true
    },
    {
      title: "Full-Stack Engineering",
      icon: Code,
      gradient: "linear-gradient(135deg, #a855f7, #ec4899, #f43f5e)",
      color: "#a855f7",
      desc: "Master modern full-stack from Next.js 14 to scalable cloud-native backends with TypeScript excellence.",
      skills: ["Next.js 14", "TypeScript", "GraphQL", "PostgreSQL", "Docker"],
      slots: 30,
      enrolled: 642,
      duration: "12 Weeks",
      level: "Beginner to Expert",
      featured: false
    },
    {
      title: "Machine Learning Pro",
      icon: Brain,
      gradient: "linear-gradient(135deg, #10b981, #14b8a6, #06b6d4)",
      color: "#10b981",
      desc: "Real-world ML pipelines from raw data to production models with Python, scikit-learn, and MLOps.",
      skills: ["Python ML Stack", "Feature Engineering", "MLOps", "Model Deploy", "Time Series"],
      slots: 20,
      enrolled: 573,
      duration: "10 Weeks",
      level: "Intermediate",
      featured: false
    },
    {
      title: "Deep Learning & Gen AI",
      icon: Cpu,
      gradient: "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)",
      color: "#f59e0b",
      desc: "From CNNs to Diffusion Models — build intelligent systems with PyTorch, Transformers, and LLMs.",
      skills: ["PyTorch 2.0", "Transformers", "Stable Diffusion", "LLM Fine-tuning", "RAG Systems"],
      slots: 18,
      enrolled: 521,
      duration: "12 Weeks",
      level: "Advanced",
      featured: true
    }
  ];

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const animate = () => {
      setTime(prev => prev + 0.016);
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }, [target]);

    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <div ref={containerRef} style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Ultra Dynamic Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        {/* Animated mouse gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(circle 800px at ${mousePos.x}% ${mousePos.y}%, rgba(168,85,247,0.25), transparent 60%)`,
          transition: "background 0.1s ease-out",
          animation: "breathe 4s ease-in-out infinite"
        }} />
        
        {/* Moving orbs */}
        {[
          { size: 900, color: "rgba(34,211,238,0.2)", x: 10, y: 15 },
          { size: 1100, color: "rgba(168,85,247,0.15)", x: 70, y: 60 },
          { size: 800, color: "rgba(16,185,129,0.12)", x: 40, y: 80 }
        ].map((orb, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${orb.x + Math.sin(time * 0.3 + i) * 15}%`,
            top: `${orb.y + Math.cos(time * 0.4 + i) * 15}%`,
            width: orb.size, height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            borderRadius: "50%",
            filter: "blur(120px)",
            transform: `scale(${1 + Math.sin(time * 0.5 + i) * 0.2})`,
            transition: "all 0.3s ease-out"
          }} />
        ))}

        {/* Animated grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: `translateY(${Math.sin(time * 0.2) * 20}px) translateX(${Math.cos(time * 0.15) * 20}px) rotate(${Math.sin(time * 0.1)}deg)`,
          opacity: 0.4
        }} />

        {/* Dynamic particles */}
        {[...Array(60)].map((_, i) => {
          const angle = (i / 60) * Math.PI * 2;
          const radius = 300 + Math.sin(time * 0.5 + i) * 200;
          return (
            <div key={i} style={{
              position: "absolute",
              left: `${50 + Math.cos(angle + time * 0.3) * (radius / 15)}%`,
              top: `${50 + Math.sin(angle + time * 0.3) * (radius / 15)}%`,
              width: `${3 + Math.sin(time + i) * 2}px`,
              height: `${3 + Math.sin(time + i) * 2}px`,
              background: `hsl(${(i * 6 + time * 50) % 360}, 80%, 70%)`,
              borderRadius: "50%",
              boxShadow: `0 0 ${15 + Math.sin(time + i) * 10}px currentColor`,
              opacity: 0.6 + Math.sin(time * 2 + i) * 0.3,
              transform: `scale(${1 + Math.sin(time * 3 + i) * 0.5})`
            }} />
          );
        })}

        {/* Scanning lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(0deg, transparent ${(time * 20) % 100}%, rgba(168,85,247,0.1) ${(time * 20 + 1) % 100}%, transparent ${(time * 20 + 2) % 100}%)`,
          pointerEvents: "none"
        }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1500px", margin: "0 auto", padding: "100px 24px" }}>
        
        {/* Animated Hero */}
        <div style={{ textAlign: "center", marginBottom: "120px" }}>
          <div style={{
            fontSize: "6rem",
            marginBottom: "32px",
            transform: `translateY(${Math.sin(time * 2) * 15}px) rotate(${Math.sin(time) * 10}deg) scale(${1 + Math.sin(time * 3) * 0.1})`,
            filter: `drop-shadow(0 0 ${40 + Math.sin(time * 4) * 20}px rgba(168,85,247,0.8))`
          }}>
            🚀
          </div>

          <h1 style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            fontWeight: 900,
            background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #f59e0b, #22d3ee)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            backgroundSize: "300%",
            backgroundPosition: `${time * 10}% 50%`,
            marginBottom: "24px",
            lineHeight: 1.1,
            transform: `scale(${1 + Math.sin(time) * 0.02})`,
            filter: `brightness(${1 + Math.sin(time * 2) * 0.2})`
          }}>
            Elite Workshop Programs
          </h1>

          <p style={{
            fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
            color: "#cbd5e1",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.7,
            opacity: 0.9 + Math.sin(time) * 0.1
          }}>
            Expert-led mastery programs engineered to transform talented developers into industry-defining leaders
          </p>
        </div>

        {/* Workshop Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "32px",
          marginBottom: "80px"
        }}>
          {workshops.map((ws, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(ws)}
              style={{
                position: "relative",
                padding: "40px 32px",
                background: "rgba(15,23,42,0.8)",
                backdropFilter: "blur(30px)",
                borderRadius: "32px",
                border: "2px solid rgba(168,85,247,0.2)",
                cursor: "pointer",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
                overflow: "hidden",
                transform: `translateY(${Math.sin(time * 0.5 + idx) * 8}px) rotate(${Math.sin(time * 0.3 + idx) * 0.5}deg)`,
                boxShadow: `0 ${20 + Math.sin(time + idx) * 10}px 60px rgba(0,0,0,0.5)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `translateY(-16px) scale(1.03) rotate(0deg)`;
                e.currentTarget.style.borderColor = ws.color;
                e.currentTarget.style.boxShadow = `0 40px 100px ${ws.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translateY(${Math.sin(time * 0.5 + idx) * 8}px) rotate(${Math.sin(time * 0.3 + idx) * 0.5}deg)`;
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
                e.currentTarget.style.boxShadow = `0 ${20 + Math.sin(time + idx) * 10}px 60px rgba(0,0,0,0.5)`;
              }}
            >
              {/* Animated gradient overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: ws.gradient,
                opacity: 0.05 + Math.sin(time * 2 + idx) * 0.05,
                mixBlendMode: "screen",
                pointerEvents: "none"
              }} />

              {/* Live badge */}
              <div style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                padding: "8px 16px",
                background: "rgba(239,68,68,0.2)",
                border: "2px solid rgba(239,68,68,0.6)",
                borderRadius: "999px",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.85rem",
                fontWeight: 900,
                color: "#fee2e2",
                boxShadow: `0 0 ${20 + Math.sin(time * 4) * 10}px rgba(239,68,68,0.5)`,
                transform: `scale(${1 + Math.sin(time * 5 + idx) * 0.05})`
              }}>
                <div style={{
                  width: "8px",
                  height: "8px",
                  background: "#ef4444",
                  borderRadius: "50%",
                  boxShadow: `0 0 ${10 + Math.sin(time * 6) * 5}px #ef4444`,
                  transform: `scale(${1 + Math.sin(time * 4) * 0.3})`
                }} />
                LIVE
              </div>

              {ws.featured && (
                <div style={{
                  position: "absolute",
                  top: "24px",
                  left: "24px",
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  padding: "8px",
                  borderRadius: "50%",
                  boxShadow: `0 0 ${30 + Math.sin(time * 3) * 15}px rgba(251,191,36,0.7)`,
                  transform: `rotate(${time * 50}deg) scale(${1 + Math.sin(time * 4) * 0.1})`
                }}>
                  <Crown size={24} color="#000" />
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: "100px",
                height: "100px",
                background: ws.gradient,
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "28px",
                boxShadow: `0 20px 60px ${ws.color}60`,
                transform: `rotate(${Math.sin(time * 2 + idx) * 5}deg) scale(${1 + Math.sin(time * 3 + idx) * 0.05})`,
                transition: "transform 0.3s"
              }}>
                <ws.icon size={56} color="white" />
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "2rem",
                fontWeight: 900,
                background: ws.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginBottom: "16px",
                lineHeight: 1.2,
                transform: `translateX(${Math.sin(time + idx) * 2}px)`
              }}>
                {ws.title}
              </h3>

              <p style={{
                color: "#cbd5e1",
                fontSize: "1.05rem",
                lineHeight: 1.6,
                marginBottom: "24px"
              }}>
                {ws.desc}
              </p>

              {/* Stats */}
              <div style={{ display: "flex", gap: "24px", marginBottom: "24px" }}>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  transform: `translateY(${Math.sin(time * 3 + idx) * 3}px)`
                }}>
                  <Calendar size={18} color={ws.color} />
                  <span style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                    <Counter target={ws.slots} /> slots
                  </span>
                </div>
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "8px",
                  transform: `translateY(${Math.sin(time * 3.5 + idx) * 3}px)`
                }}>
                  <Users size={18} color={ws.color} />
                  <span style={{ color: "#94a3b8", fontSize: "0.95rem" }}>
                    <Counter target={ws.enrolled} /> enrolled
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button style={{
                width: "100%",
                padding: "16px",
                background: ws.gradient,
                border: "none",
                borderRadius: "16px",
                color: "white",
                fontSize: "1.05rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                cursor: "pointer",
                transition: "all 0.3s",
                boxShadow: `0 10px 40px ${ws.color}50`,
                transform: `scale(${1 + Math.sin(time * 4 + idx) * 0.02})`
              }}>
                View Program <ArrowRight size={20} style={{ transform: `translateX(${Math.sin(time * 6) * 3}px)` }} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(30px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          animation: "fadeIn 0.3s ease-out"
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            maxWidth: "900px",
            width: "100%",
            background: "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(0,0,0,0.98))",
            backdropFilter: "blur(40px)",
            borderRadius: "40px",
            padding: "48px",
            border: `3px solid ${selected.color}`,
            boxShadow: `0 0 ${100 + Math.sin(time * 4) * 30}px ${selected.color}80`,
            maxHeight: "90vh",
            overflowY: "auto",
            position: "relative",
            animation: "scaleIn 0.4s ease-out",
            transform: `scale(${1 + Math.sin(time) * 0.01})`
          }}>
            <button onClick={() => setSelected(null)} style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              width: "48px",
              height: "48px",
              background: "rgba(255,255,255,0.1)",
              border: "2px solid rgba(255,255,255,0.3)",
              borderRadius: "50%",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
              transform: `rotate(${Math.sin(time * 2) * 10}deg)`
            }}>
              <X size={24} />
            </button>

            <div style={{ display: "flex", gap: "28px", alignItems: "center", marginBottom: "32px" }}>
              <div style={{
                width: "120px",
                height: "120px",
                background: selected.gradient,
                borderRadius: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 30px 80px ${selected.color}60`,
                transform: `rotate(${Math.sin(time) * 5}deg) scale(${1 + Math.sin(time * 2) * 0.05})`
              }}>
                <selected.icon size={70} color="white" />
              </div>

              <div>
                <h2 style={{
                  fontSize: "3rem",
                  fontWeight: 900,
                  background: selected.gradient,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  lineHeight: 1.1,
                  marginBottom: "12px"
                }}>
                  {selected.title}
                </h2>
                <p style={{ fontSize: "1.2rem", color: "#94a3b8" }}>
                  {selected.duration} • {selected.level}
                </p>
              </div>
            </div>

            <p style={{
              fontSize: "1.25rem",
              color: "#e2e8f0",
              lineHeight: 1.7,
              marginBottom: "40px"
            }}>
              {selected.desc}
            </p>

            <h3 style={{
              fontSize: "1.8rem",
              fontWeight: 900,
              color: "white",
              marginBottom: "24px"
            }}>
              Skills You'll Master
            </h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "16px",
              marginBottom: "40px"
            }}>
              {selected.skills.map((skill, i) => (
                <div key={i} style={{
                  padding: "16px 20px",
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transform: `translateY(${Math.sin(time * 2 + i) * 3}px)`,
                  boxShadow: `0 ${5 + Math.sin(time + i) * 3}px 15px rgba(0,0,0,0.3)`
                }}>
                  <Sparkles size={18} color={selected.color} style={{ transform: `rotate(${Math.sin(time * 3 + i) * 15}deg)` }} />
                  <span style={{ color: "#e2e8f0", fontSize: "1rem" }}>{skill}</span>
                </div>
              ))}
            </div>

            <button style={{
              width: "100%",
              padding: "20px",
              background: selected.gradient,
              border: "none",
              borderRadius: "24px",
              color: "white",
              fontSize: "1.3rem",
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              cursor: "pointer",
              boxShadow: `0 20px 60px ${selected.color}70`,
              transition: "all 0.3s",
              transform: `scale(${1 + Math.sin(time * 3) * 0.02})`
            }}>
              Enroll Now <TrendingUp size={24} style={{ transform: `translateY(${Math.sin(time * 5) * 3}px)` }} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes breathe { 0%, 100% { opacity: 1 } 50% { opacity: 0.7 } }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9) } to { opacity: 1; transform: scale(1) } }
      `}</style>
    </div>
  );
}