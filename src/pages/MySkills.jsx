import { useState, useEffect } from "react";
import { Code2, Database, Cloud, Brain, Wrench, Users, Zap } from "lucide-react";

export default function AdvancedSkills() {
  const [active, setActive] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const skills = [
    { title: "Programming", icon: Code2, color: "#00f0ff", items: ["Python", "Java", "JavaScript", "SQL", "MongoDB"] },
    { title: "Full-Stack", icon: Zap, color: "#ff00ff", items: ["React", "Node.js", "Express", "REST APIs", "JWT"] },
    { title: "AI & ML", icon: Brain, color: "#00ff88", items: ["TensorFlow", "Scikit-learn", "NLP", "CNNs"] },
    { title: "Cloud & DevOps", icon: Cloud, color: "#ff6600", items: ["AWS", "Azure", "Docker", "CI/CD"] },
    { title: "Databases", icon: Database, color: "#8800ff", items: ["MongoDB", "MySQL", "Indexing", "Schema"] },
    { title: "Engineering", icon: Wrench, color: "#ffff00", items: ["OOP", "DSA", "Algorithms"] },
    { title: "Professional", icon: Users, color: "#ff0088", items: ["Problem Solving", "Teamwork", "Communication"] }
  ];

  useEffect(() => {
    const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % skills.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const Icon = skills[active].icon;

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden", fontFamily: "system-ui" }}>
      {/* Animated Gradient Background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, #1a0033 0%, #000 50%)", animation: "gradientShift 15s ease infinite" }} />
      
      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: Math.random() * 4 + 2 + "px",
          height: Math.random() * 4 + 2 + "px",
          background: skills[i % skills.length].color,
          borderRadius: "50%",
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animation: `float ${Math.random() * 10 + 15}s linear infinite`,
          animationDelay: Math.random() * 5 + "s",
          opacity: 0.6,
          boxShadow: `0 0 20px ${skills[i % skills.length].color}`
        }} />
      ))}

      {/* Mouse Follower Glow */}
      <div style={{
        position: "fixed",
        width: "500px",
        height: "500px",
        background: `radial-gradient(circle, ${skills[active].color}40 0%, transparent 70%)`,
        left: mousePos.x - 250,
        top: mousePos.y - 250,
        pointerEvents: "none",
        transition: "all 0.3s ease",
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "60px 20px", maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <div style={{
            display: "inline-block",
            padding: "8px 24px",
            background: "rgba(255,255,255,0.05)",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: "50px",
            marginBottom: "20px",
            backdropFilter: "blur(10px)",
            animation: "pulse 2s ease infinite"
          }}>
            <span style={{ color: "#0ff", fontSize: "14px", fontWeight: "700" }}>⚡ LIVE SKILLS SHOWCASE</span>
          </div>
          
          <h1 style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            fontWeight: "900",
            background: `linear-gradient(45deg, ${skills[active].color}, #fff, ${skills[active].color})`,
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite",
            marginBottom: "20px",
            lineHeight: 1
          }}>
            SKILL MATRIX
          </h1>
          
          <p style={{ color: "#888", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
            Interactive showcase of production-ready expertise
          </p>
        </div>

        {/* Main Display */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          
          {/* Icon Display */}
          <div style={{
            gridColumn: "span 1",
            background: "rgba(255,255,255,0.03)",
            border: "2px solid rgba(255,255,255,0.1)",
            borderRadius: "30px",
            padding: "60px 40px",
            backdropFilter: "blur(20px)",
            position: "relative",
            overflow: "hidden"
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at 50% 50%, ${skills[active].color}20 0%, transparent 70%)`,
              animation: "pulseGlow 3s ease infinite"
            }} />
            
            <div style={{ position: "relative", textAlign: "center" }}>
              <div style={{
                width: "180px",
                height: "180px",
                margin: "0 auto 30px",
                background: `linear-gradient(135deg, ${skills[active].color}, ${skills[active].color}80)`,
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "rotate3d 10s linear infinite",
                boxShadow: `0 20px 60px ${skills[active].color}60`,
                position: "relative"
              }}>
                <Icon size={90} color="#fff" style={{ filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))" }} />
                
                {/* Orbiting dots */}
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    position: "absolute",
                    width: "12px",
                    height: "12px",
                    background: "#fff",
                    borderRadius: "50%",
                    animation: `orbit 3s linear infinite ${i * 1}s`,
                    boxShadow: "0 0 15px #fff"
                  }} />
                ))}
              </div>
              
              <h2 style={{
                fontSize: "36px",
                fontWeight: "900",
                color: "#fff",
                marginBottom: "10px",
                textShadow: `0 0 30px ${skills[active].color}`
              }}>
                {skills[active].title}
              </h2>
              
              <div style={{ fontSize: "48px", fontWeight: "900", color: skills[active].color, marginTop: "20px" }}>
                {skills[active].items.length}
              </div>
              <div style={{ color: "#666", fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px" }}>Technologies</div>
            </div>
          </div>

          {/* Skills Grid */}
          <div style={{ gridColumn: "span 2", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "15px" }}>
            {skills[active].items.map((item, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.05)",
                border: `2px solid ${skills[active].color}40`,
                borderRadius: "20px",
                padding: "25px 20px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                animation: `slideUp 0.5s ease ${i * 0.1}s backwards`,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${skills[active].color}20, transparent)`,
                  opacity: 0.5
                }} />
                <div style={{ position: "relative", color: "#fff", fontWeight: "700", fontSize: "15px" }}>{item}</div>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: skills[active].color,
                  animation: "fillBar 2s ease infinite"
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Skill Selector */}
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
          {skills.map((skill, i) => {
            const SkillIcon = skill.icon;
            return (
              <button key={i} onClick={() => setActive(i)} style={{
                background: active === i ? `linear-gradient(135deg, ${skill.color}, ${skill.color}80)` : "rgba(255,255,255,0.05)",
                border: `2px solid ${active === i ? skill.color : "rgba(255,255,255,0.1)"}`,
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                backdropFilter: "blur(10px)",
                transform: active === i ? "scale(1.2)" : "scale(1)",
                boxShadow: active === i ? `0 10px 40px ${skill.color}80` : "none",
                position: "relative",
                overflow: "hidden"
              }}>
                {active === i && (
                  <div style={{
                    position: "absolute",
                    inset: "-2px",
                    background: `conic-gradient(${skill.color}, transparent, ${skill.color})`,
                    borderRadius: "50%",
                    animation: "spin 2s linear infinite"
                  }} />
                )}
                <SkillIcon size={32} color={active === i ? "#fff" : "#666"} style={{ position: "relative", zIndex: 1 }} />
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-100vh) rotate(360deg); } }
        @keyframes shimmer { 0%, 100% { background-position: 0%; } 50% { background-position: 200%; } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes rotate3d { 0% { transform: rotateY(0deg) rotateX(0deg); } 100% { transform: rotateY(360deg) rotateX(360deg); } }
        @keyframes orbit { 0% { transform: rotate(0deg) translateX(100px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fillBar { 0%, 100% { width: 0%; } 50% { width: 100%; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes gradientShift { 0%, 100% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(90deg); } }
      `}</style>
    </div>
  );
}