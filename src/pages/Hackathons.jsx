import { Trophy, Award, ExternalLink, X, Code, Database, Shield, Rocket, Crown, Clock, Users, Sparkles, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function HackathonShowcase() {
  const [modal, setModal] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  const milestones = [
    { hour: "0-6h", icon: Code, title: "Foundation", desc: "Architecture • Database • Auth System", color: "#22d3ee", glow: "cyan" },
    { hour: "6-14h", icon: Database, title: "Core Build", desc: "REST APIs • UI Components • State", color: "#a855f7", glow: "purple" },
    { hour: "14-20h", icon: Shield, title: "Integration", desc: "Real-time Chat • Security Layer", color: "#ec4899", glow: "pink" },
    { hour: "20-24h", icon: Rocket, title: "Launch", desc: "Testing • Demo • Deploy to Cloud", color: "#10b981", glow: "emerald" }
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

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden", fontFamily: "system-ui, sans-serif" }}>
      
      {/* Dynamic Gradient Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(168,85,247,0.15), transparent 50%)`,
          transition: "all 0.3s ease-out"
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 20% 80%, rgba(236,72,153,0.12), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(34,211,238,0.1), transparent 60%)",
          animation: "pulse 8s ease-in-out infinite"
        }} />
        
        {/* Animated Grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `linear-gradient(rgba(168,85,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.4
        }} />

        {/* Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: `hsl(${260 + Math.random() * 60}, 80%, 65%)`,
            borderRadius: "50%",
            boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
            animation: `float ${10 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.6
          }} />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1400px", margin: "0 auto", padding: "80px 24px" }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          
          {/* Champion Badge */}
          <div style={{ marginBottom: "48px", animation: "fadeInDown 1s ease-out" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "16px",
              padding: "16px 36px", borderRadius: "999px",
              background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(249,115,22,0.15))",
              border: "2px solid rgba(251,191,36,0.5)",
              boxShadow: "0 8px 32px rgba(251,191,36,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              animation: "glow 3s ease-in-out infinite"
            }}>
              <Trophy size={28} color="#fbbf24" style={{ animation: "spin 20s linear infinite" }} />
              <span style={{
                fontSize: "1.1rem", fontWeight: 900, letterSpacing: "0.1em",
                background: "linear-gradient(90deg, #fef08a, #fbbf24, #fef08a)",
                backgroundClip: "text", WebkitBackgroundClip: "text",
                color: "transparent", backgroundSize: "200%",
                animation: "shimmer 3s linear infinite"
              }}>
                NATIONAL CHAMPION
              </span>
              <Crown size={26} color="#fde047" style={{ animation: "bounce 2s ease-in-out infinite" }} />
            </div>
          </div>

          {/* Main Title */}
          <div style={{ animation: "fadeInUp 1s ease-out 0.2s backwards" }}>
            <h1 style={{
              fontSize: "clamp(3rem, 10vw, 6rem)", fontWeight: 900, lineHeight: 1,
              background: "linear-gradient(135deg, #c084fc, #ec4899, #22d3ee)",
              backgroundClip: "text", WebkitBackgroundClip: "text",
              color: "transparent", marginBottom: "16px",
              filter: "drop-shadow(0 0 40px rgba(168,85,247,0.5))",
              animation: "titleGlow 4s ease-in-out infinite"
            }}>
              Brainovision
            </h1>
            <h2 style={{
              fontSize: "clamp(4rem, 12vw, 8rem)", fontWeight: 900,
              background: "linear-gradient(120deg, #a855f7, #ec4899, #22d3ee, #a855f7)",
              backgroundClip: "text", WebkitBackgroundClip: "text",
              color: "transparent", backgroundSize: "200%",
              animation: "gradient 8s linear infinite"
            }}>
              HACKATHON 2024
            </h2>
          </div>

          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "#d1d5db",
            maxWidth: "700px", margin: "32px auto 48px", lineHeight: 1.6,
            animation: "fadeInUp 1s ease-out 0.4s backwards"
          }}>
            Full-stack MERN marketplace with JWT authentication and Socket.io real-time features — built and won in 24 hours
          </p>

          {/* Stats Grid */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "20px", maxWidth: "800px", margin: "0 auto 48px",
            animation: "fadeInUp 1s ease-out 0.6s backwards"
          }}>
            {[
              { icon: Clock, val: "24", unit: "hours", color: "#22d3ee" },
              { icon: Users, val: "4", unit: "developers", color: "#a855f7" },
              { icon: Code, val: "5k+", unit: "lines", color: "#ec4899" },
              { icon: Trophy, val: "1st", unit: "place", color: "#fbbf24" }
            ].map((stat, i) => (
              <div key={i} className="stat-card" style={{
                padding: "28px 20px", borderRadius: "20px",
                background: "rgba(15,23,42,0.6)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(168,85,247,0.2)",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer"
              }}>
                <div style={{
                  width: "64px", height: "64px", margin: "0 auto 16px",
                  borderRadius: "16px", background: `${stat.color}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 30px ${stat.color}40`
                }}>
                  <stat.icon size={36} color={stat.color} />
                </div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "white" }}>{stat.val}</div>
                <div style={{ fontSize: "0.9rem", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", animation: "fadeInUp 1s ease-out 0.8s backwards" }}>
            <a href="https://drive.google.com/file/d/1CQaoA9V93Lg4XS1FmcG-0gVUaKvw2zUq/view" target="_blank" className="primary-btn" style={{
              padding: "16px 40px", fontSize: "1.1rem", fontWeight: 700,
              background: "linear-gradient(90deg, #7c3aed, #ec4899)",
              borderRadius: "999px", color: "white", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "12px",
              boxShadow: "0 10px 40px rgba(168,85,247,0.4)",
              transition: "all 0.3s ease", border: "none", cursor: "pointer"
            }}>
              <Award size={20} /> View Certificate <ExternalLink size={18} />
            </a>
            <button onClick={() => setModal(true)} className="secondary-btn" style={{
              padding: "16px 40px", fontSize: "1.1rem", fontWeight: 700,
              background: "rgba(30,41,59,0.6)", backdropFilter: "blur(20px)",
              border: "2px solid rgba(168,85,247,0.4)", borderRadius: "999px",
              color: "white", display: "inline-flex", alignItems: "center", gap: "12px",
              transition: "all 0.3s ease", cursor: "pointer"
            }}>
              <Zap size={20} /> 24h Timeline
            </button>
          </div>
        </div>

        {/* Certificate Display */}
        <div style={{ maxWidth: "1000px", margin: "0 auto 100px", animation: "fadeInUp 1s ease-out 1s backwards" }}>
          <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 80px rgba(168,85,247,0.3)" }} className="cert-hover">
            <div style={{
              position: "absolute", inset: -2,
              background: "linear-gradient(135deg, #a855f7, #ec4899, #22d3ee, #a855f7)",
              backgroundSize: "300%", animation: "gradient 6s linear infinite",
              opacity: 0.5, filter: "blur(20px)"
            }} />
            <div style={{ position: "relative", background: "#000", padding: "4px", borderRadius: "24px" }}>
              <img src="/images/rainovision-certificate.jpg" alt="Champion Certificate" style={{ width: "100%", display: "block", borderRadius: "20px" }} />
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div style={{ animation: "fadeInUp 1s ease-out 1.2s backwards" }}>
          <h3 style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, textAlign: "center",
            background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
            backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent",
            marginBottom: "64px"
          }}>
            24-Hour Execution Timeline
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {milestones.map((m, i) => (
              <div key={i} className="milestone-card" style={{
                padding: "32px 24px", borderRadius: "24px",
                background: "rgba(15,23,42,0.6)", backdropFilter: "blur(20px)",
                border: "1px solid rgba(168,85,247,0.2)",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer", animation: `fadeInUp 1s ease-out ${1.4 + i * 0.2}s backwards`
              }}>
                <div style={{
                  width: "80px", height: "80px", margin: "0 auto 20px",
                  borderRadius: "20px", background: `${m.color}22`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 40px ${m.color}50`
                }}>
                  <m.icon size={48} color={m.color} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: m.color, fontWeight: 900, fontSize: "1rem", marginBottom: "8px", letterSpacing: "0.05em" }}>
                    {m.hour}
                  </div>
                  <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "white", marginBottom: "12px" }}>
                    {m.title}
                  </div>
                  <div style={{ color: "#cbd5e1", lineHeight: 1.6, fontSize: "0.95rem" }}>
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(false)} style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.95)", backdropFilter: "blur(20px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px", animation: "fadeIn 0.3s ease-out"
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            maxWidth: "800px", width: "100%",
            background: "rgba(15,23,42,0.95)", backdropFilter: "blur(40px)",
            borderRadius: "32px", padding: "48px",
            border: "2px solid rgba(168,85,247,0.3)",
            maxHeight: "90vh", overflowY: "auto",
            position: "relative", animation: "scaleIn 0.3s ease-out"
          }}>
            <button onClick={() => setModal(false)} style={{
              position: "absolute", top: "20px", right: "20px",
              width: "48px", height: "48px", borderRadius: "12px",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s"
            }}>
              <X size={24} />
            </button>

            <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "white", textAlign: "center", marginBottom: "40px" }}>
              Complete Timeline
            </h2>

            {milestones.map((m, i) => (
              <div key={i} style={{
                display: "flex", gap: "20px", padding: "24px",
                background: "rgba(255,255,255,0.05)", borderRadius: "20px",
                border: "1px solid rgba(168,85,247,0.2)", marginBottom: "20px"
              }}>
                <div style={{
                  width: "70px", height: "70px", flexShrink: 0,
                  borderRadius: "16px", background: `${m.color}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 30px ${m.color}60`
                }}>
                  <m.icon size={40} color={m.color} />
                </div>
                <div>
                  <div style={{ color: m.color, fontWeight: 900, marginBottom: "8px" }}>{m.hour}</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "white", marginBottom: "8px" }}>{m.title}</div>
                  <p style={{ color: "#d1d5db", lineHeight: 1.6 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg) } 50% { transform: translateY(-20px) rotate(180deg) } }
        @keyframes pulse { 0%, 100% { opacity: 1 } 50% { opacity: 0.5 } }
        @keyframes shimmer { 0%, 100% { background-position: 0% } 50% { background-position: 200% } }
        @keyframes gradient { 0% { background-position: 0% 50% } 100% { background-position: 200% 50% } }
        @keyframes glow { 0%, 100% { box-shadow: 0 8px 32px rgba(251,191,36,0.3), inset 0 1px 0 rgba(255,255,255,0.1) } 50% { box-shadow: 0 8px 48px rgba(251,191,36,0.5), inset 0 1px 0 rgba(255,255,255,0.2) } }
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        @keyframes bounce { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-10px) } }
        @keyframes titleGlow { 0%, 100% { filter: drop-shadow(0 0 40px rgba(168,85,247,0.5)) } 50% { filter: drop-shadow(0 0 80px rgba(168,85,247,0.8)) } }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9) } to { opacity: 1; transform: scale(1) } }
        
        .stat-card:hover, .milestone-card:hover { transform: translateY(-12px) scale(1.05); box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(168,85,247,0.4) !important; }
        .primary-btn:hover { transform: translateY(-4px) scale(1.05); box-shadow: 0 20px 60px rgba(168,85,247,0.6) !important; }
        .secondary-btn:hover { transform: translateY(-4px); border-color: rgba(168,85,247,0.8); background: rgba(30,41,59,0.8); }
        .cert-hover:hover { transform: scale(1.02); box-shadow: 0 50px 120px rgba(0,0,0,0.8), 0 0 100px rgba(168,85,247,0.5) !important; }
      `}</style>
    </div>
  );
}