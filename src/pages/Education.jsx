import { useState, useEffect, useRef } from "react";
import {
  Award,
  Zap,
  Trophy,
  Target,
  Brain,
  Code,
  GraduationCap,
  Calendar,
  MapPin,
  Star,
  Rocket,
  BookOpen,
  TrendingUp,
  Sparkles,
  Crown,
  Medal,
  X,
  ChevronRight,
  CheckCircle,
  Flame,
  Compass,
  Layers,
  Lightbulb,
  ArrowRight
} from "lucide-react";

// Import images - replace with your actual paths
import rceeImage from "../assets/Rcee.jpg";
import sriImage from "../assets/SRI.jpg";
import monteImage from "../assets/Monte.jpg";

const education = [
  {
    id: 1,
    title: "B.Tech AI & Data Science",
    school: "Ramachandra College of Engineering",
    year: "2022–2026",
    score: "75%",
    cgpa: "8.5",
    desc: "Focused on designing intelligent systems using Machine Learning, Deep Learning, and Data Science. Gained hands-on experience with Python, TensorFlow, MERN stack, and real-world AI applications.",
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    accentColor: "#06b6d4",
    icon: "🚀",
    badge: "CURRENT",
    image: rceeImage,
    location: "Eluru, AP",
    skills: ["Machine Learning", "Deep Learning", "MERN Stack", "Computer Vision", "MLOps"],
    achievements: ["AI Specialist", "Full-Stack Developer", "Top 10% Performance"]
  },
  {
    id: 2,
    title: "Intermediate MPC",
    school: "Sree Vidhya College",
    year: "2020–2022",
    score: "78%",
    cgpa: "7.8",
    desc: "Completed intensive coursework in Mathematics, Physics, and Chemistry with strong emphasis on analytical problem-solving and logical reasoning.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    accentColor: "#ec4899",
    icon: "🔬",
    badge: "FOUNDATION",
    image: sriImage,
    location: "Vijayawada, AP",
    skills: ["Advanced Mathematics", "Physics", "Chemistry", "Analytical Thinking"],
    achievements: ["Science Excellence", "Top Performer", "Research Aptitude"]
  },
  {
    id: 3,
    title: "10th Grade",
    school: "Montessori High School",
    year: "2020",
    score: "95%",
    cgpa: "10.0",
    desc: "Established strong academic foundation with excellence in Mathematics and Science. Demonstrated consistent top-tier performance and disciplined study habits.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accentColor: "#10b981",
    icon: "🌟",
    badge: "EXCELLENCE",
    image: monteImage,
    location: "Vijayawada, AP",
    skills: ["Mathematics Mastery", "Scientific Method", "Critical Thinking", "Leadership"],
    achievements: ["Top 5%", "Perfect Score", "School Topper"]
  }
];

export default function Education() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timelineHover, setTimelineHover] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Auto-rotate timeline
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % education.length);
    }, 6000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const openModal = (edu) => {
    setSelectedEdu(edu);
    setShowModal(true);
  };

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #000000, #0a0e1a, #000000)",
        color: "#ffffff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
        padding: "clamp(80px, 10vh, 120px) clamp(20px, 5vw, 60px)"
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 30px currentColor) drop-shadow(0 0 60px currentColor); 
            opacity: 1; 
          }
          50% { 
            filter: drop-shadow(0 0 50px currentColor) drop-shadow(0 0 100px currentColor); 
            opacity: 0.85; 
          }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(80px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(100px); }
          50% { transform: scale(1.08); }
          70% { transform: scale(0.97); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes orbit {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, -40px) scale(1.15); }
          50% { transform: translate(-40px, 50px) scale(0.9); }
          75% { transform: translate(40px, 40px) scale(1.1); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor; }
          50% { text-shadow: 0 0 30px currentColor, 0 0 60px currentColor, 0 0 90px currentColor; }
        }
        @keyframes card-entrance {
          from { 
            opacity: 0; 
            transform: translateY(100px) rotateX(-20deg) scale(0.9);
            filter: blur(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0px);
          }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-slide-up { animation: slide-up 1s ease-out forwards; }
        .animate-gradient { animation: gradient-shift 10s ease infinite; background-size: 200% 200%; }
        .animate-text-glow { animation: text-glow 4s ease-in-out infinite; }
      `}</style>

      {/* Background Effects */}
      <div style={{ position: "fixed", inset: "0", zIndex: "0", pointerEvents: "none" }}>
        {/* Animated gradient orbs with enhanced depth */}
        <div
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background: "radial-gradient(circle at center, rgba(6,182,212,0.25), rgba(6,182,212,0.1) 40%, transparent 70%)",
            top: "5%",
            left: "5%",
            filter: "blur(100px)",
            animation: "orbit 25s ease-in-out infinite",
            mixBlendMode: "screen"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "radial-gradient(circle at center, rgba(236,72,153,0.25), rgba(236,72,153,0.1) 40%, transparent 70%)",
            bottom: "5%",
            right: "5%",
            filter: "blur(100px)",
            animation: "orbit 30s ease-in-out infinite 3s",
            mixBlendMode: "screen"
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle at center, rgba(139,92,246,0.2), rgba(139,92,246,0.08) 40%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            filter: "blur(100px)",
            animation: "orbit 28s ease-in-out infinite 1.5s",
            mixBlendMode: "screen"
          }}
        />

        {/* Premium cursor follower with multiple layers */}
        <div
          style={{
            position: "absolute",
            width: "1000px",
            height: "1000px",
            borderRadius: "50%",
            background: "radial-gradient(circle at center, rgba(6,182,212,0.15), rgba(6,182,212,0.05) 50%, transparent 70%)",
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: "translate(-50%, -50%)",
            filter: "blur(80px)",
            transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
            mixBlendMode: "screen"
          }}
        />

        {/* Sophisticated grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage: `
              linear-gradient(rgba(6,182,212,0.05) 1.5px, transparent 1.5px),
              linear-gradient(90deg, rgba(6,182,212,0.05) 1.5px, transparent 1.5px)
            `,
            backgroundSize: "80px 80px",
            opacity: "0.3",
            maskImage: "radial-gradient(circle at center, black, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)"
          }}
        />

        {/* Premium floating particles with varied motion */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              borderRadius: "50%",
              background: `hsl(${180 + Math.random() * 120}, ${70 + Math.random() * 30}%, ${50 + Math.random() * 30}%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: `${0.3 + Math.random() * 0.5}`,
              animation: `float ${12 + Math.random() * 18}s ease-in-out infinite ${Math.random() * 8}s`,
              boxShadow: `0 0 ${10 + Math.random() * 20}px currentColor`,
              filter: "blur(0.5px)"
            }}
          />
        ))}

        {/* Radial gradient vignette for depth */}
        <div
          style={{
            position: "absolute",
            inset: "0",
            background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)",
            pointerEvents: "none"
          }}
        />
      </div>

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: "10", maxWidth: "1600px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(80px, 12vh, 140px)" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "20px",
              padding: "20px 48px",
              background: "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              borderRadius: "100px",
              border: "2px solid rgba(6,182,212,0.3)",
              boxShadow: "0 25px 80px rgba(6,182,212,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
              marginBottom: "60px",
              animation: "slide-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) backwards"
            }}
          >
            <GraduationCap 
              className="animate-pulse-glow" 
              size={32} 
              style={{ 
                color: "#06b6d4",
                filter: "drop-shadow(0 0 10px #06b6d4)"
              }} 
            />
            <span
              style={{
                fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
                fontWeight: "900",
                letterSpacing: "0.2em",
                background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textTransform: "uppercase"
              }}
            >
              Academic Excellence • 2020–2026
            </span>
            <Trophy 
              className="animate-pulse-glow" 
              size={28} 
              style={{ 
                color: "#fbbf24",
                filter: "drop-shadow(0 0 10px #fbbf24)"
              }} 
            />
          </div>

          <h1
            style={{
              fontSize: "clamp(3.5rem, 15vw, 9rem)",
              fontWeight: "900",
              lineHeight: "0.9",
              marginBottom: "40px",
              letterSpacing: "-0.03em",
              animation: "slide-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards"
            }}
          >
            My
            <br />
            <span
              className="animate-gradient animate-text-glow"
              style={{
                background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                display: "inline-block"
              }}
            >
              Journey
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 3.5vw, 1.6rem)",
              color: "#94a3b8",
              maxWidth: "1000px",
              margin: "0 auto",
              lineHeight: "1.8",
              fontWeight: "500",
              animation: "slide-up 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s backwards"
            }}
          >
            From <strong style={{ 
              color: "#34d399", 
              fontWeight: "700",
              textShadow: "0 0 20px rgba(52,211,153,0.5)"
            }}>strong foundations</strong> through{" "}
            <strong style={{ 
              color: "#8b5cf6", 
              fontWeight: "700",
              textShadow: "0 0 20px rgba(139,92,246,0.5)"
            }}>analytical mastery</strong> to{" "}
            <strong style={{ 
              color: "#06b6d4", 
              fontWeight: "700",
              textShadow: "0 0 20px rgba(6,182,212,0.5)"
            }}>AI innovation</strong>
          </p>
        </div>

        {/* Interactive Timeline */}
        <div style={{ marginBottom: "clamp(100px, 15vh, 160px)", position: "relative" }}>
          {/* Timeline connector line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80%",
              height: "3px",
              background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.2), rgba(6,182,212,0.2), transparent)",
              borderRadius: "100px",
              zIndex: "0"
            }}
          />

          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: "clamp(20px, 4vw, 48px)",
            marginBottom: "60px",
            position: "relative",
            zIndex: "1"
          }}>
            {education.map((edu, idx) => (
              <div key={edu.id} style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 3vw, 32px)" }}>
                <button
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setTimelineHover(idx)}
                  onMouseLeave={() => setTimelineHover(null)}
                  style={{
                    position: "relative",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0",
                    transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    transform: activeIndex === idx 
                      ? "scale(1.2)" 
                      : timelineHover === idx 
                      ? "scale(1.1)" 
                      : "scale(1)",
                    zIndex: activeIndex === idx ? "2" : "1"
                  }}
                >
                  {/* Outer glow ring */}
                  {activeIndex === idx && (
                    <div
                      style={{
                        position: "absolute",
                        inset: "-12px",
                        borderRadius: "50%",
                        background: `conic-gradient(from 0deg, ${edu.accentColor}, transparent, ${edu.accentColor})`,
                        animation: "rotate-border 6s linear infinite",
                        opacity: "0.6",
                        filter: "blur(8px)"
                      }}
                    />
                  )}

                  {/* Pulse ring */}
                  {activeIndex === idx && (
                    <div
                      style={{
                        position: "absolute",
                        inset: "-8px",
                        borderRadius: "50%",
                        border: `2px solid ${edu.accentColor}`,
                        animation: "pulse-glow 2s ease-in-out infinite",
                        opacity: "0.5"
                      }}
                    />
                  )}

                  {/* Main icon circle */}
                  <div
                    style={{
                      width: "clamp(70px, 15vw, 100px)",
                      height: "clamp(70px, 15vw, 100px)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "clamp(2rem, 6vw, 3rem)",
                      background: activeIndex === idx
                        ? `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}dd)`
                        : "rgba(15,20,35,0.8)",
                      border: activeIndex === idx 
                        ? `3px solid ${edu.accentColor}40`
                        : "3px solid rgba(255,255,255,0.08)",
                      boxShadow: activeIndex === idx
                        ? `0 25px 80px ${edu.accentColor}80, inset 0 1px 0 rgba(255,255,255,0.2)`
                        : timelineHover === idx
                        ? `0 15px 50px ${edu.accentColor}40`
                        : "0 10px 30px rgba(0,0,0,0.5)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    {/* Shine effect */}
                    {(activeIndex === idx || timelineHover === idx) && (
                      <div
                        style={{
                          position: "absolute",
                          inset: "0",
                          background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)",
                          animation: "shimmer 3s infinite"
                        }}
                      />
                    )}
                    <span style={{ position: "relative", zIndex: "1" }}>{edu.icon}</span>
                  </div>

                  {/* Year label */}
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% + 16px)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      whiteSpace: "nowrap",
                      fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                      fontWeight: "800",
                      color: activeIndex === idx ? edu.accentColor : "#64748b",
                      opacity: activeIndex === idx || timelineHover === idx ? "1" : "0.6",
                      transition: "all 0.4s ease",
                      letterSpacing: "0.05em",
                      textShadow: activeIndex === idx ? `0 0 20px ${edu.accentColor}80` : "none"
                    }}
                  >
                    {edu.year}
                  </div>
                </button>

                {/* Animated connector between nodes */}
                {idx < education.length - 1 && (
                  <div
                    style={{
                      width: "clamp(40px, 8vw, 80px)",
                      height: "4px",
                      borderRadius: "100px",
                      background: idx < activeIndex
                        ? `linear-gradient(90deg, ${education[idx].accentColor}, ${education[idx + 1].accentColor})`
                        : "rgba(255,255,255,0.08)",
                      boxShadow: idx < activeIndex
                        ? `0 0 20px ${education[idx].accentColor}60`
                        : "none",
                      transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    {/* Animated progress fill */}
                    {idx < activeIndex && (
                      <div
                        style={{
                          position: "absolute",
                          inset: "0",
                          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                          animation: "shimmer 2s infinite"
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress indicator bar */}
          <div
            style={{
              height: "6px",
              background: "rgba(15,20,35,0.8)",
              borderRadius: "100px",
              overflow: "hidden",
              maxWidth: "600px",
              margin: "0 auto",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)"
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${((activeIndex + 1) / education.length) * 100}%`,
                background: `linear-gradient(90deg, ${education[0].accentColor}, ${education[activeIndex].accentColor})`,
                borderRadius: "100px",
                transition: "all 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: `0 0 25px ${education[activeIndex].accentColor}`,
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Shimmer on progress bar */}
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                  animation: "shimmer 2s infinite"
                }}
              />
            </div>
          </div>
        </div>

        {/* 3D Card Display */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", 
          gap: "clamp(40px, 6vw, 60px)", 
          marginBottom: "clamp(100px, 15vh, 160px)" 
        }}>
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openModal(edu)}
              style={{
                position: "relative",
                transformStyle: "preserve-3d",
                perspective: "1500px",
                animation: `card-entrance 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 0.25}s backwards`,
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "32px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, rgba(15,20,45,0.9), rgba(10,14,35,0.95))",
                  backdropFilter: "blur(40px) saturate(180%)",
                  WebkitBackdropFilter: "blur(40px) saturate(180%)",
                  border: hoveredCard === idx 
                    ? `3px solid ${edu.accentColor}` 
                    : "3px solid rgba(255,255,255,0.08)",
                  boxShadow: hoveredCard === idx
                    ? `0 50px 120px ${edu.accentColor}70, 0 0 0 1px ${edu.accentColor}20 inset`
                    : "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset",
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoveredCard === idx
                    ? "translateY(-25px) rotateX(8deg) rotateY(-8deg) scale(1.02)"
                    : "translateY(0) rotateX(0deg) rotateY(0deg) scale(1)"
                }}
              >
                {/* Rotating holographic border */}
                {hoveredCard === idx && (
                  <>
                    <div
                      style={{
                        position: "absolute",
                        inset: "-4px",
                        borderRadius: "32px",
                        background: `conic-gradient(from 0deg at 50% 50%, ${edu.accentColor}, transparent 120deg, ${edu.accentColor} 240deg, transparent 360deg)`,
                        animation: "rotate-border 8s linear infinite",
                        opacity: "0.7",
                        filter: "blur(10px)",
                        zIndex: "-1"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: "-2px",
                        borderRadius: "32px",
                        background: `linear-gradient(135deg, ${edu.accentColor}40, transparent, ${edu.accentColor}40)`,
                        opacity: "0.3",
                        zIndex: "-1"
                      }}
                    />
                  </>
                )}

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: hoveredCard === idx ? "scale(1.2)" : "scale(1.05)",
                      filter: hoveredCard === idx ? "brightness(1.1)" : "brightness(0.8)"
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Shimmer effect */}
                  {hoveredCard === idx && (
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        animation: "shimmer 2s infinite"
                      }}
                    />
                  )}

                  {/* Badge */}
                  <div
                    className="absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-black tracking-wider"
                    style={{
                      background: `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}dd)`,
                      boxShadow: `0 10px 30px ${edu.accentColor}60`
                    }}
                  >
                    {edu.badge}
                  </div>

                  {/* Year & Location */}
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-sm">
                      <Calendar size={14} style={{ color: "#fbbf24" }} />
                      <span className="font-semibold">{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-full border border-white/20 text-sm">
                      <MapPin size={14} style={{ color: edu.accentColor }} />
                      <span className="font-semibold">{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div style={{ padding: "clamp(36px, 7vw, 52px)" }}>
                  
                  {/* Icon & Title */}
                  <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "28px",
                    marginBottom: "32px"
                  }}>
                    <div
                      style={{
                        width: "clamp(100px, 20vw, 120px)",
                        height: "clamp(100px, 20vw, 120px)",
                        borderRadius: "30px",
                        background: `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}dd)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "clamp(3rem, 11vw, 4rem)",
                        boxShadow: `0 30px 80px ${edu.accentColor}80, inset 0 1px 0 rgba(255,255,255,0.2)`,
                        flexShrink: "0",
                        transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: hoveredCard === idx ? "rotate(360deg) scale(1.05)" : "rotate(0deg) scale(1)",
                        border: `2px solid ${edu.accentColor}40`,
                        position: "relative",
                        overflow: "hidden"
                      }}
                    >
                      {/* Inner glow */}
                      <div style={{
                        position: "absolute",
                        inset: "0",
                        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%)`,
                        pointerEvents: "none"
                      }} />
                      <span style={{ position: "relative", zIndex: "1" }}>{edu.icon}</span>
                    </div>

                    <div style={{ flex: "1" }}>
                      <h2 style={{
                        fontSize: "clamp(1.8rem, 5.5vw, 2.6rem)",
                        fontWeight: "900",
                        marginBottom: "12px",
                        lineHeight: "1.15",
                        color: "#fff",
                        letterSpacing: "-0.01em"
                      }}>
                        {edu.title}
                      </h2>
                      <p style={{
                        color: "#94a3b8",
                        fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
                        fontWeight: "600",
                        lineHeight: "1.4"
                      }}>
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  {/* Score & CGPA Cards */}
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "18px",
                    marginBottom: "32px"
                  }}>
                    <div style={{
                      padding: "24px 28px",
                      borderRadius: "24px",
                      background: `linear-gradient(135deg, ${edu.accentColor}25, ${edu.accentColor}10)`,
                      border: `2px solid ${edu.accentColor}40`,
                      textAlign: "center",
                      boxShadow: `0 20px 50px ${edu.accentColor}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
                      transition: "all 0.5s ease",
                      transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)"
                    }}>
                      <div style={{
                        fontSize: "clamp(2.4rem, 7vw, 3rem)",
                        fontWeight: "900",
                        marginBottom: "8px",
                        background: `linear-gradient(135deg, ${edu.accentColor}, #fff)`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        lineHeight: "1"
                      }}>
                        {edu.score}
                      </div>
                      <div style={{
                        fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)",
                        fontWeight: "800",
                        color: edu.accentColor,
                        letterSpacing: "0.08em"
                      }}>
                        SCORE
                      </div>
                    </div>

                    <div style={{
                      padding: "24px 28px",
                      borderRadius: "24px",
                      background: "rgba(255,255,255,0.06)",
                      border: "2px solid rgba(255,255,255,0.1)",
                      textAlign: "center",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                      transition: "all 0.5s ease",
                      transform: hoveredCard === idx ? "translateY(-5px)" : "translateY(0)"
                    }}>
                      <div style={{
                        fontSize: "clamp(2.4rem, 7vw, 3rem)",
                        fontWeight: "900",
                        color: "#fff",
                        marginBottom: "8px",
                        lineHeight: "1",
                        textShadow: `0 0 30px ${edu.accentColor}80`
                      }}>
                        {edu.cgpa}
                      </div>
                      <div style={{
                        fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)",
                        color: "#94a3b8",
                        fontWeight: "800",
                        letterSpacing: "0.08em"
                      }}>
                        CGPA
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                    marginBottom: "32px",
                    fontSize: "clamp(0.95rem, 2.6vw, 1.08rem)",
                    fontWeight: "400"
                  }}>
                    {edu.desc}
                  </p>

                  {/* Animated Progress Bar */}
                  <div style={{
                    height: "16px",
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: "100px",
                    overflow: "hidden",
                    position: "relative",
                    marginBottom: "32px",
                    border: "2px solid rgba(255,255,255,0.08)",
                    boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)"
                  }}>
                    <div style={{
                      height: "100%",
                      width: `${parseInt(edu.score)}%`,
                      background: `linear-gradient(90deg, ${edu.accentColor}, ${edu.accentColor}dd)`,
                      borderRadius: "100px",
                      transition: "width 2.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      boxShadow: `0 0 30px ${edu.accentColor}, inset 0 1px 0 rgba(255,255,255,0.3)`,
                      position: "relative"
                    }}>
                      <div style={{
                        position: "absolute",
                        inset: "0",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                        backgroundSize: "200%",
                        animation: "shimmer 3s linear infinite",
                        borderRadius: "100px"
                      }} />
                    </div>
                  </div>

                  {/* Skills Preview */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "32px"
                  }}>
                    {edu.skills.slice(0, 3).map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "10px 20px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: "100px",
                          fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
                          fontWeight: "600",
                          color: "#e5e7eb",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${edu.accentColor}20`;
                          e.currentTarget.style.borderColor = `${edu.accentColor}50`;
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                    {edu.skills.length > 3 && (
                      <span style={{
                        padding: "10px 20px",
                        background: `${edu.accentColor}15`,
                        border: `1px solid ${edu.accentColor}30`,
                        borderRadius: "100px",
                        fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
                        fontWeight: "600",
                        color: edu.accentColor
                      }}>
                        +{edu.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button
                    style={{
                      width: "100%",
                      padding: "18px 32px",
                      borderRadius: "16px",
                      fontWeight: "700",
                      fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      background: hoveredCard === idx
                        ? `linear-gradient(135deg, ${edu.accentColor}, ${edu.accentColor}dd)`
                        : "rgba(255,255,255,0.08)",
                      color: hoveredCard === idx ? "white" : "#94a3b8",
                      border: hoveredCard === idx ? "none" : "2px solid rgba(255,255,255,0.12)",
                      boxShadow: hoveredCard === idx
                        ? `0 20px 60px ${edu.accentColor}60, inset 0 1px 0 rgba(255,255,255,0.2)`
                        : "0 8px 20px rgba(0,0,0,0.3)",
                      cursor: "pointer",
                      transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      letterSpacing: "0.02em"
                    }}
                    onMouseEnter={(e) => {
                      if (hoveredCard !== idx) {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.background = `${edu.accentColor}20`;
                        e.currentTarget.style.color = edu.accentColor;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (hoveredCard !== idx) {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.color = "#94a3b8";
                      }
                    }}
                  >
                    View Full Details
                    <ArrowRight 
                      size={20} 
                      style={{ 
                        transition: "transform 0.4s ease",
                        transform: hoveredCard === idx ? "translateX(5px)" : "translateX(0)"
                      }} 
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 250px), 1fr))", 
          gap: "clamp(28px, 5vw, 42px)" 
        }}>
          {[
            { icon: Brain, value: "8.5+", label: "CGPA", color: "#fbbf24", desc: "Academic Excellence" },
            { icon: Rocket, value: "AI/ML", label: "Focus", color: "#06b6d4", desc: "Future Tech" },
            { icon: Code, value: "15+", label: "Projects", color: "#f97316", desc: "Production Ready" },
            { icon: Trophy, value: "Top 10%", label: "Rank", color: "#8b5cf6", desc: "Class Standing" }
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "clamp(40px, 7vw, 56px) clamp(28px, 5vw, 36px)",
                background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
                backdropFilter: "blur(30px) saturate(180%)",
                WebkitBackdropFilter: "blur(30px) saturate(180%)",
                borderRadius: "32px",
                border: "2px solid rgba(255,255,255,0.1)",
                textAlign: "center",
                transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer",
                animation: `bounce-in 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.2 + i * 0.15}s backwards`,
                boxShadow: "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
                position: "relative",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                e.currentTarget.style.boxShadow = `0 40px 100px ${stat.color}60, inset 0 1px 0 rgba(255,255,255,0.15)`;
                e.currentTarget.style.borderColor = `${stat.color}60`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))";
              }}
            >
              {/* Corner accent */}
              <div style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "80px",
                height: "80px",
                background: `radial-gradient(circle at top right, ${stat.color}20, transparent 70%)`,
                pointerEvents: "none"
              }} />

              <stat.icon 
                size={52} 
                style={{ 
                  color: stat.color,
                  marginBottom: "24px",
                  filter: `drop-shadow(0 0 25px ${stat.color})`,
                  transition: "all 0.6s ease"
                }} 
                className="animate-pulse-glow"
              />
              <div style={{
                fontSize: "clamp(2.8rem, 8vw, 3.6rem)",
                fontWeight: "900",
                background: `linear-gradient(135deg, ${stat.color}, #fff)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                marginBottom: "12px",
                lineHeight: "1",
                textShadow: `0 0 40px ${stat.color}50`
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: "clamp(1rem, 2.8vw, 1.2rem)",
                color: "#e5e7eb",
                fontWeight: "800",
                marginBottom: "10px",
                letterSpacing: "0.08em"
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: "clamp(0.8rem, 2.2vw, 0.95rem)",
                color: "#64748b",
                fontWeight: "600",
                letterSpacing: "0.02em"
              }}>
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedEdu && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed",
            inset: "0",
            zIndex: "1000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(20px, 5vw, 40px)",
            background: "rgba(0,0,0,0.97)",
            backdropFilter: "blur(60px) saturate(150%)",
            WebkitBackdropFilter: "blur(60px) saturate(150%)",
            animation: "slide-up 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)"
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "linear-gradient(135deg, rgba(15,20,45,0.98), rgba(10,14,35,0.98))",
              backdropFilter: "blur(50px) saturate(180%)",
              WebkitBackdropFilter: "blur(50px) saturate(180%)",
              borderRadius: "40px",
              maxWidth: "1200px",
              width: "100%",
              maxHeight: "92vh",
              overflowY: "auto",
              border: `3px solid ${selectedEdu.accentColor}60`,
              boxShadow: `0 50px 150px ${selectedEdu.accentColor}80, 0 0 0 1px ${selectedEdu.accentColor}20 inset`,
              animation: "bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards"
            }}
          >
            {/* Rotating border */}
            <div
              style={{
                position: "absolute",
                inset: "-5px",
                borderRadius: "40px",
                background: `conic-gradient(from 0deg, ${selectedEdu.accentColor}, transparent 120deg, ${selectedEdu.accentColor} 240deg, transparent 360deg)`,
                animation: "rotate-border 10s linear infinite",
                opacity: "0.5",
                filter: "blur(15px)",
                zIndex: "-1",
                pointerEvents: "none"
              }}
            />

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "clamp(24px, 5vw, 32px)",
                right: "clamp(24px, 5vw, 32px)",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(239,68,68,0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "2px solid rgba(239,68,68,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer",
                zIndex: "10",
                boxShadow: "0 10px 30px rgba(239,68,68,0.3)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(239,68,68,0.3)";
                e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
                e.currentTarget.style.boxShadow = "0 15px 40px rgba(239,68,68,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(239,68,68,0.15)";
                e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(239,68,68,0.3)";
              }}
            >
              <X size={28} style={{ color: "#ef4444" }} />
            </button>

            {/* Header */}
            <div style={{
              position: "sticky",
              top: "0",
              zIndex: "5",
              background: "linear-gradient(135deg, rgba(15,20,45,0.98), rgba(10,14,35,0.95))",
              backdropFilter: "blur(30px) saturate(180%)",
              WebkitBackdropFilter: "blur(30px) saturate(180%)",
              padding: "clamp(28px, 6vw, 40px)",
              borderBottom: `2px solid ${selectedEdu.accentColor}30`,
              borderRadius: "40px 40px 0 0"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(20px, 4vw, 28px)",
                flexWrap: "wrap"
              }}>
                <div
                  style={{
                    width: "clamp(80px, 18vw, 100px)",
                    height: "clamp(80px, 18vw, 100px)",
                    borderRadius: "28px",
                    background: `linear-gradient(135deg, ${selectedEdu.accentColor}, ${selectedEdu.accentColor}dd)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "clamp(3rem, 8vw, 4rem)",
                    boxShadow: `0 30px 80px ${selectedEdu.accentColor}80, inset 0 1px 0 rgba(255,255,255,0.2)`,
                    border: `2px solid ${selectedEdu.accentColor}40`,
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    inset: "0",
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%)"
                  }} />
                  <span style={{ position: "relative", zIndex: "1" }}>{selectedEdu.icon}</span>
                </div>
                <div style={{ flex: "1", minWidth: "200px" }}>
                  <h2 style={{
                    fontSize: "clamp(2rem, 6vw, 3rem)",
                    fontWeight: "900",
                    marginBottom: "10px",
                    lineHeight: "1.1",
                    letterSpacing: "-0.01em"
                  }}>
                    {selectedEdu.title}
                  </h2>
                  <p style={{
                    fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                    fontWeight: "700",
                    background: `linear-gradient(90deg, ${selectedEdu.accentColor}, #fff)`,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}>
                    {selectedEdu.school}
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "clamp(36px, 7vw, 56px)" }}>
              {/* Description */}
              <p style={{
                color: "#cbd5e1",
                fontSize: "clamp(1.05rem, 3vw, 1.2rem)",
                lineHeight: "1.8",
                marginBottom: "48px",
                fontWeight: "400"
              }}>
                {selectedEdu.desc}
              </p>

              {/* Skills */}
              <div style={{ marginBottom: "48px" }}>
                <h3 style={{
                  fontSize: "clamp(1.6rem, 4vw, 2rem)",
                  fontWeight: "900",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: selectedEdu.accentColor
                }}>
                  <Sparkles size={32} style={{ filter: `drop-shadow(0 0 10px ${selectedEdu.accentColor})` }} />
                  Key Skills
                </h3>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "14px"
                }}>
                  {selectedEdu.skills.map((skill, i) => (
                    <div
                      key={i}
                      style={{
                        padding: "16px 28px",
                        borderRadius: "16px",
                        background: `linear-gradient(135deg, ${selectedEdu.accentColor}20, ${selectedEdu.accentColor}10)`,
                        border: `2px solid ${selectedEdu.accentColor}40`,
                        fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                        fontWeight: "700",
                        color: "#e5e7eb",
                        boxShadow: `0 10px 30px ${selectedEdu.accentColor}20, inset 0 1px 0 rgba(255,255,255,0.1)`,
                        animation: `slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.1 + 0.4}s backwards`,
                        transition: "all 0.4s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px) scale(1.05)";
                        e.currentTarget.style.boxShadow = `0 15px 40px ${selectedEdu.accentColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = `0 10px 30px ${selectedEdu.accentColor}20`;
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: "48px" }}>
                <h3 style={{
                  fontSize: "clamp(1.6rem, 4vw, 2rem)",
                  fontWeight: "900",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  color: selectedEdu.accentColor
                }}>
                  <Medal size={32} style={{ filter: `drop-shadow(0 0 10px ${selectedEdu.accentColor})` }} />
                  Achievements
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {selectedEdu.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "20px 28px",
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.05)",
                        border: "2px solid rgba(255,255,255,0.1)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                        animation: `slide-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15 + 0.5}s backwards`,
                        transition: "all 0.4s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${selectedEdu.accentColor}10`;
                        e.currentTarget.style.borderColor = `${selectedEdu.accentColor}30`;
                        e.currentTarget.style.transform = "translateX(8px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <CheckCircle 
                        size={28} 
                        style={{ 
                          color: selectedEdu.accentColor, 
                          flexShrink: "0",
                          filter: `drop-shadow(0 0 8px ${selectedEdu.accentColor})`
                        }} 
                      />
                      <span style={{ 
                        fontSize: "clamp(1rem, 2.8vw, 1.15rem)", 
                        color: "#e5e7eb", 
                        fontWeight: "600" 
                      }}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                style={{
                  width: "100%",
                  padding: "20px 48px",
                  background: `linear-gradient(135deg, ${selectedEdu.accentColor}, ${selectedEdu.accentColor}dd)`,
                  border: "none",
                  borderRadius: "18px",
                  color: "white",
                  fontSize: "clamp(1.05rem, 3vw, 1.2rem)",
                  fontWeight: "800",
                  cursor: "pointer",
                  boxShadow: `0 25px 80px ${selectedEdu.accentColor}70, inset 0 1px 0 rgba(255,255,255,0.3)`,
                  transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  letterSpacing: "0.05em"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
                  e.currentTarget.style.boxShadow = `0 35px 100px ${selectedEdu.accentColor}90, inset 0 1px 0 rgba(255,255,255,0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 25px 80px ${selectedEdu.accentColor}70, inset 0 1px 0 rgba(255,255,255,0.3)`;
                }}
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}