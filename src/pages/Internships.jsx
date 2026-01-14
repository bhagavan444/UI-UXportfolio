import { useState, useEffect } from "react";
import { Award, Trophy, Zap, Star, CheckCircle2, Eye, X, Sparkles } from "lucide-react";

const internships = [
  {
    title: "MERN Stack",
    badge: "Full-Stack Pro",
    certId: "1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC",
    color: "#00d4ff",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    achievements: ["3+ Apps", "JWT Auth", "REST APIs", "Cloud Deploy"]
  },
  {
    title: "AI & ML",
    badge: "AI Engineer",
    certId: "1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw",
    color: "#c026d3",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    achievements: ["5+ Models", "CNNs", "85%+ Accuracy", "Deployment"]
  },
  {
    title: "Industry Program",
    badge: "MNC Ready",
    certId: "1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY",
    color: "#10b981",
    tech: ["Agile", "Git", "CI/CD", "Docker"],
    achievements: ["Agile & Scrum", "Version Control", "Pipelines", "Team Work"]
  }
];

export default function Internships() {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const getDriveThumbnail = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  const item = internships[active];

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#000", overflow: "hidden", color: "#fff", fontFamily: "system-ui", padding: "40px 20px" }}>
      
      {/* Animated Background */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 40%, #1a0033 0%, #000 60%)", animation: "hueShift 20s infinite" }} />
      
      {/* Floating Orbs */}
      {[...Array(20)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: Math.random() * 6 + 3 + "px",
          height: Math.random() * 6 + 3 + "px",
          background: internships[i % 3].color,
          borderRadius: "50%",
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animation: `float ${Math.random() * 15 + 10}s linear infinite`,
          animationDelay: Math.random() * 5 + "s",
          opacity: 0.7,
          boxShadow: `0 0 30px ${internships[i % 3].color}`
        }} />
      ))}

      {/* Mouse Glow */}
      <div style={{
        position: "fixed",
        width: "600px",
        height: "600px",
        background: `radial-gradient(circle, ${item.color}50 0%, transparent 70%)`,
        left: mouse.x - 300,
        top: mouse.y - 300,
        pointerEvents: "none",
        transition: "all 0.2s",
        zIndex: 1
      }} />

      {/* Wave Background */}
      <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "300px", opacity: 0.1 }} viewBox="0 0 1440 320">
        <path fill={item.color} d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
            M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,154.7C672,128,768,96,864,101.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
          " />
        </path>
      </svg>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1400px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", animation: "slideDown 1s ease" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "12px 30px", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.2)", borderRadius: "50px", marginBottom: "20px", backdropFilter: "blur(10px)" }}>
            <Trophy size={24} color="#0ff" style={{ animation: "spin 3s linear infinite" }} />
            <span style={{ fontSize: "14px", fontWeight: "700", color: "#0ff" }}>PROFESSIONAL EXPERIENCE</span>
            <Sparkles size={24} color="#f0f" style={{ animation: "pulse 2s infinite" }} />
          </div>
          
          <h1 style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            fontWeight: "900",
            background: `linear-gradient(90deg, ${item.color}, #fff, ${item.color})`,
            backgroundSize: "200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 4s linear infinite",
            marginBottom: "20px",
            lineHeight: 0.9
          }}>
            INTERNSHIPS
          </h1>
        </div>

        {/* Main Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          {internships.map((int, i) => (
            <div key={i} onClick={() => setActive(i)} style={{
              position: "relative",
              cursor: "pointer",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: active === i ? "scale(1.05) translateY(-10px)" : "scale(1)",
              animation: `cardPop 0.8s ease ${i * 0.2}s backwards`
            }}>
              
              {/* Glow */}
              <div style={{
                position: "absolute",
                inset: "-20px",
                background: active === i ? int.color : "transparent",
                filter: "blur(40px)",
                opacity: active === i ? 0.6 : 0,
                transition: "all 0.6s",
                animation: active === i ? "breathe 3s infinite" : "none"
              }} />

              <div style={{
                position: "relative",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                border: active === i ? `3px solid ${int.color}` : "2px solid rgba(255,255,255,0.1)",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: active === i ? `0 30px 80px ${int.color}40` : "0 20px 50px rgba(0,0,0,0.5)"
              }}>
                
                {/* Badge */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  padding: "8px 20px",
                  background: `linear-gradient(135deg, ${int.color}, ${int.color}aa)`,
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: "900",
                  zIndex: 10,
                  boxShadow: `0 0 20px ${int.color}`,
                  animation: "badgeFloat 3s infinite"
                }}>
                  {int.badge}
                </div>

                {/* Certificate Image */}
                <div onClick={(e) => { e.stopPropagation(); setModal(int); }} style={{
                  position: "relative",
                  height: "250px",
                  overflow: "hidden",
                  cursor: "pointer"
                }}>
                  <img src={getDriveThumbnail(int.certId)} alt={int.title} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.8s",
                    transform: active === i ? "scale(1.15)" : "scale(1.05)"
                  }} loading="lazy" />
                  
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: active === i ? 1 : 0,
                    transition: "opacity 0.6s"
                  }}>
                    <div style={{
                      padding: "12px 30px",
                      background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(10px)",
                      borderRadius: "20px",
                      border: "2px solid rgba(255,255,255,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontWeight: "700"
                    }}>
                      <Eye size={20} color={int.color} />
                      View Certificate
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "30px" }}>
                  <h3 style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    marginBottom: "20px",
                    background: active === i ? `linear-gradient(90deg, ${int.color}, #fff)` : "#fff",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}>
                    {int.title}
                  </h3>

                  {/* Tech Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
                    {int.tech.map((t, idx) => (
                      <span key={idx} style={{
                        padding: "8px 16px",
                        fontSize: "13px",
                        background: `${int.color}20`,
                        border: `1px solid ${int.color}50`,
                        borderRadius: "12px",
                        color: "#e0e0e0",
                        animation: active === i ? `slideIn 0.4s ease ${idx * 0.1}s backwards` : "none"
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "25px" }}>
                    {int.achievements.map((a, idx) => (
                      <div key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#d0d0d0",
                        padding: "8px",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "10px",
                        animation: active === i ? `slideUp 0.5s ease ${idx * 0.1}s backwards` : "none"
                      }}>
                        <CheckCircle2 size={16} color={int.color} />
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <a href={`https://drive.google.com/file/d/${int.certId}/view`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    width: "100%",
                    padding: "16px",
                    background: `linear-gradient(135deg, ${int.color}, ${int.color}cc)`,
                    borderRadius: "16px",
                    fontWeight: "700",
                    color: "#fff",
                    border: `2px solid ${int.color}80`,
                    boxShadow: `0 10px 30px ${int.color}50`,
                    transition: "all 0.3s"
                  }}>
                    <Award size={20} />
                    View Certificate
                  </a>
                </div>

                {/* Corner Accents */}
                <div style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  width: "50px",
                  height: "50px",
                  borderTop: `3px solid ${int.color}`,
                  borderLeft: `3px solid ${int.color}`,
                  borderTopLeftRadius: "15px",
                  opacity: active === i ? 1 : 0.3,
                  transition: "opacity 0.6s"
                }} />
                <div style={{
                  position: "absolute",
                  bottom: "15px",
                  right: "15px",
                  width: "50px",
                  height: "50px",
                  borderBottom: `3px solid ${int.color}`,
                  borderRight: `3px solid ${int.color}`,
                  borderBottomRightRadius: "15px",
                  opacity: active === i ? 1 : 0.3,
                  transition: "opacity 0.6s"
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: "60px", padding: "40px 60px", background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: "50px", backdropFilter: "blur(20px)" }}>
            {[
              { label: "INTERNSHIPS", val: "3", icon: Trophy, color: "#00d4ff" },
              { label: "MONTHS", val: "8+", icon: Zap, color: "#c026d3" },
              { label: "COMPLETE", val: "100%", icon: Star, color: "#10b981" }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} style={{ textAlign: "center", animation: "float 4s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}>
                  <Icon size={40} color={stat.color} style={{ marginBottom: "15px", filter: `drop-shadow(0 0 15px ${stat.color})` }} />
                  <div style={{ fontSize: "3.5rem", fontWeight: "900", color: stat.color, textShadow: `0 0 25px ${stat.color}` }}>{stat.val}</div>
                  <div style={{ fontSize: "13px", color: "#999", letterSpacing: "2px" }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(null)} style={{
          position: "fixed",
          inset: 0,
          zIndex: 1000,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(30px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          animation: "fadeIn 0.4s"
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: "relative",
            maxWidth: "1200px",
            width: "100%",
            borderRadius: "30px",
            overflow: "hidden",
            border: `4px solid ${modal.color}`,
            boxShadow: `0 40px 100px ${modal.color}60`,
            animation: "zoomIn 0.5s ease"
          }}>
            <div style={{
              position: "absolute",
              inset: "-80px",
              background: `radial-gradient(circle, ${modal.color}60, transparent 70%)`,
              filter: "blur(80px)",
              animation: "breathe 4s infinite"
            }} />
            
            <img src={getDriveThumbnail(modal.certId)} alt={modal.title} style={{ width: "100%", display: "block", position: "relative", zIndex: 2 }} loading="eager" />
            
            <button onClick={() => setModal(null)} style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(239,68,68,0.9)",
              border: "3px solid rgba(255,255,255,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(239,68,68,0.5)",
              transition: "all 0.3s"
            }}>
              <X size={30} color="#fff" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-80vh) rotate(360deg); } }
        @keyframes shimmer { 0%, 100% { background-position: 0%; } 50% { background-position: 200%; } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.1); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes breathe { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.1); } }
        @keyframes slideDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes cardPop { from { opacity: 0; transform: scale(0.8) translateY(50px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes badgeFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.85); } to { transform: scale(1); } }
        @keyframes hueShift { 0%, 100% { filter: hue-rotate(0deg); } 50% { filter: hue-rotate(60deg); } }
      `}</style>
    </div>
  );
}