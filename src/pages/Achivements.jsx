// Achievements.jsx
import { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Award,
  Users,
  Target,
  TrendingUp,
  Zap,
  Star,
  Medal,
  Sparkles,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "National Hackathon Experience",
    highlight: "24-Hour High-Pressure Build",
    description:
      "Selected as a core full-stack developer in a national-level 24-hour hackathon. Designed system architecture, implemented authentication flows, built REST APIs, and developed responsive React interfaces for a MERN-based electronics marketplace...",
    color: "linear-gradient(135deg, #eab308, #f97316)",
    glowColor: "#ff9500",
  },
  {
    icon: Award,
    title: "Industry Certifications",
    highlight: "15+ Professional Credentials",
    description:
      "Earned 15+ industry-recognized certifications spanning Generative AI, Machine Learning, Cloud Computing, MERN Stack, DevOps, Data Science, and Software Engineering fundamentals...",
    color: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    glowColor: "#00bfff",
  },
  {
    icon: Users,
    title: "Hands-On Technical Workshops",
    highlight: "Applied Learning",
    description:
      "Actively participated in hands-on technical workshops focused on Machine Learning, Deep Learning, Full-Stack Web Development, and Mobile Application Development...",
    color: "linear-gradient(135deg, #a855f7, #ec4899)",
    glowColor: "#c44ce8",
  },
  {
    icon: Target,
    title: "Project Delivery",
    highlight: "Production-Style Systems",
    description:
      "Successfully designed, developed, and delivered 8+ end-to-end projects across AI/ML and full-stack domains. Implemented JWT-secured APIs, OAuth-based authentication...",
    color: "linear-gradient(135deg, #10b981, #14b8a6)",
    glowColor: "#00d9a6",
  },
];

const metrics = [
  { label: "Production Projects", value: "5+", icon: Zap, color: "#ffaa00" },
  { label: "Technologies Used", value: "30+", icon: Star, color: "#ff00ff" },
  { label: "Lines of Code", value: "10K+", icon: TrendingUp, color: "#00ffff" },
  { label: "Problem-Solving", value: "4★", icon: Medal, color: "#00ff88" },
];

export default function Achievements() {
  const [inView, setInView] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.05, rootMargin: "50px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "80px 24px",
        background: "linear-gradient(135deg, #020617, #0f172a, #020617)",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Background Effects */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Twinkling stars */}
        {[...Array(isMobile ? 25 : 50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
              animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Energy orbs */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "25%",
            width: isMobile ? "160px" : "384px",
            height: isMobile ? "160px" : "384px",
            borderRadius: "50%",
            backgroundColor: "rgba(34,211,238,0.2)",
            filter: "blur(48px)",
            animation: "energy-pulse 7s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "25%",
            left: "25%",
            width: isMobile ? "160px" : "384px",
            height: isMobile ? "160px" : "384px",
            borderRadius: "50%",
            backgroundColor: "rgba(168,85,247,0.2)",
            filter: "blur(48px)",
            animation: "energy-pulse-delayed 7s ease-in-out infinite",
          }}
        />

        {/* Subtle grid (desktop only) */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(0,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage: "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
            }}
          />
        )}
      </div>

      <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", zIndex: 10 }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "96px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease-out",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 32px",
              borderRadius: "9999px",
              border: "2px solid rgba(34,211,238,0.3)",
              backgroundColor: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(16px)",
              marginBottom: "32px",
              animation: "badge-glow 2.5s ease-in-out infinite",
            }}
          >
            <Sparkles
              size={20}
              color="#22d3ee"
              style={{ animation: "sparkle-rotate 2.5s linear infinite" }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                letterSpacing: "0.2em",
                background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "text-shimmer 3.5s linear infinite",
                backgroundSize: "200% auto",
              }}
            >
              TALENT SHOWCASE
            </span>
            <Sparkles
              size={20}
              color="#ec4899"
              style={{ animation: "sparkle-rotate-reverse 2.5s linear infinite" }}
            />
          </div>

          <h2 style={{ fontSize: "4.5rem", fontWeight: "900", lineHeight: 1.1, marginBottom: "24px" }}>
            <span
              style={{
                display: "block",
                color: "white",
                textShadow: "0 0 20px rgba(255,255,255,0.3)",
                animation: "title-pulse 2.5s ease-in-out infinite",
              }}
            >
              Proof of
            </span>
            <span
              style={{
                background: "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "300% auto",
                animation: "gradient-mega 5s linear infinite",
                textShadow: "0 0 30px rgba(0,255,255,0.4)",
              }}
            >
              execution & impact
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#9ca3af",
              maxWidth: "48rem",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Real outcomes achieved through{" "}
            <span style={{ color: "#22d3ee", fontWeight: "600", animation: "word-glow 1.8s ease-in-out infinite" }}>
              learning velocity
            </span>
            ,{" "}
            <span
              style={{
                color: "#a855f7",
                fontWeight: "600",
                animation: "word-glow 1.8s ease-in-out infinite 0.5s",
              }}
            >
              execution under pressure
            </span>
            , and{" "}
            <span
              style={{
                color: "#ec4899",
                fontWeight: "600",
                animation: "word-glow 1.8s ease-in-out infinite 1s",
              }}
            >
              production-style thinking
            </span>
          </p>
        </div>

        {/* Metrics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            marginBottom: "96px",
          }}
        >
          {metrics.map((m, i) => {
            const Icon = m.icon;
            const isHovered = hoveredMetric === i;

            return (
              <div
                key={i}
                onMouseEnter={() => !isMobile && setHoveredMetric(i)}
                onMouseLeave={() => !isMobile && setHoveredMetric(null)}
                onTouchStart={() => !isMobile && setHoveredMetric(i)}
                style={{
                  position: "relative",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(48px)",
                  transition: `all 0.6s ease-out ${i * 80}ms`,
                  cursor: "pointer",
                }}
              >
                {isHovered && !isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "-16px",
                      borderRadius: "16px",
                      background: `radial-gradient(circle, ${m.color}60, transparent)`,
                      filter: "blur(24px)",
                    }}
                  />
                )}

                <div
                  style={{
                    position: "relative",
                    padding: "20px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(24px)",
                    border: isHovered ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "16px",
                    transition: "all 0.4s",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      margin: "0 auto 16px",
                      borderRadius: "12px",
                      background: `linear-gradient(135deg, ${m.color}30, transparent)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isHovered ? `0 0 20px ${m.color}80` : "none",
                      transform: isHovered ? "scale(1.1) rotate(12deg)" : "scale(1)",
                      transition: "all 0.4s",
                    }}
                  >
                    <Icon size={28} color={m.color} style={{ animation: "icon-float 1.8s ease-in-out infinite" }} />
                  </div>

                  <div
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: "900",
                      textAlign: "center",
                      color: isHovered ? m.color : "white",
                      textShadow: isHovered ? `0 0 12px ${m.color}` : "none",
                      transition: "all 0.3s",
                    }}
                  >
                    {m.value}
                  </div>

                  <div
                    style={{
                      fontSize: "14px",
                      color: "#94a3b8",
                      textAlign: "center",
                      marginTop: "4px",
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "32px",
          }}
        >
          {achievements.map((ach, i) => {
            const Icon = ach.icon;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => !isMobile && setHoveredIndex(i)}
                onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                onTouchStart={() => !isMobile && setHoveredIndex(i)}
                style={{
                  position: "relative",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(48px)",
                  transition: `all 0.7s ease-out ${350 + i * 120}ms`,
                }}
              >
                {isHovered && !isMobile && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "-32px",
                      borderRadius: "24px",
                      background: `radial-gradient(circle, ${ach.glowColor}60, transparent 70%)`,
                      filter: "blur(32px)",
                      transition: "all 0.5s",
                    }}
                  />
                )}

                <div
                  style={{
                    position: "relative",
                    padding: "32px",
                    background: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(24px)",
                    border: isHovered ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "24px",
                    transition: "all 0.4s",
                    overflow: "hidden",
                  }}
                >
                  {/* Icon container */}
                  <div
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "80px",
                      marginBottom: "24px",
                      borderRadius: "16px",
                      background: ach.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isHovered ? `0 15px 45px ${ach.glowColor}` : `0 8px 25px ${ach.glowColor}40`,
                      transform: isHovered ? "scale(1.1) rotate(360deg)" : "scale(1)",
                      transition: "all 0.6s",
                    }}
                  >
                    <Icon size={40} color="white" style={{ animation: "icon-bounce 1.8s ease-in-out infinite" }} />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: "bold",
                      marginBottom: "16px",
                      color: isHovered ? "white" : "#f3f4f6",
                      textShadow: isHovered ? `0 0 15px ${ach.glowColor}40` : "none",
                      transition: "all 0.3s",
                    }}
                  >
                    {ach.title}
                  </h3>

                  {/* Highlight badge */}
                  <div
                    style={{
                      display: "inline-block",
                      padding: "8px 20px",
                      marginBottom: "16px",
                      borderRadius: "12px",
                      background: ach.color,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      border: isHovered ? "1px solid rgba(255,255,255,0.4)" : "1px solid rgba(255,255,255,0.2)",
                      fontSize: "13px",
                      fontWeight: "bold",
                      transition: "all 0.3s",
                    }}
                  >
                    {ach.highlight}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: "15px", color: "#9ca3af", lineHeight: "1.6" }}>
                    {ach.description}
                  </p>

                  {/* Corner decorations */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "40px",
                      height: "40px",
                      borderTop: `2px solid ${isHovered ? ach.glowColor : "rgba(255,255,255,0.1)"}`,
                      borderRight: `2px solid ${isHovered ? ach.glowColor : "rgba(255,255,255,0.1)"}`,
                      borderTopRightRadius: "12px",
                      animation: isHovered ? "corner-1 1.8s ease-in-out infinite" : "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      width: "40px",
                      height: "40px",
                      borderBottom: `2px solid ${isHovered ? ach.glowColor : "rgba(255,255,255,0.1)"}`,
                      borderLeft: `2px solid ${isHovered ? ach.glowColor : "rgba(255,255,255,0.1)"}`,
                      borderBottomLeftRadius: "12px",
                      animation: isHovered ? "corner-2 1.8s ease-in-out infinite 0.4s" : "none",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "96px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s ease-out 900ms",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 32px",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #06b6d4, #a855f7)",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.125rem",
              transition: "all 0.3s",
            }}
          >
            <span>Explore Real Projects</span>
            <TrendingUp size={24} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%,100% { opacity: 0.2; }
          50%     { opacity: 1; }
        }
        @keyframes energy-pulse {
          0%,100% { transform: scale(1); opacity: 0.2; }
          50%     { transform: scale(1.15); opacity: 0.35; }
        }
        @keyframes badge-glow {
          0%,100% { box-shadow: 0 0 12px rgba(0,255,255,0.25); }
          50%     { box-shadow: 0 0 25px rgba(0,255,255,0.5), 0 0 40px rgba(255,0,255,0.25); }
        }
        @keyframes sparkle-rotate {
          0%   { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.15); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes text-shimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes title-pulse {
          0%,100% { filter: drop-shadow(0 0 25px rgba(255,255,255,0.3)); }
          50%     { filter: drop-shadow(0 0 40px rgba(255,255,255,0.5)); }
        }
        @keyframes gradient-mega {
          0%,100% { background-position: 0% 50%; }
          50%     { background-position: 300% 50%; }
        }
        @keyframes word-glow {
          0%,100% { text-shadow: 0 0 8px currentColor; }
          50%     { text-shadow: 0 0 16px currentColor; }
        }
        @keyframes icon-float {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-4px); }
        }
        @keyframes icon-bounce {
          0%,100% { transform: scale(1); }
          50%     { transform: scale(1.08); }
        }
        @keyframes corner-1 {
          0%,100% { opacity: 0.4; box-shadow: 0 0 0; }
          50%     { opacity: 0.9; box-shadow: 0 0 12px currentColor; }
        }
        @keyframes corner-2 {
          0%,100% { opacity: 0.4; box-shadow: 0 0 0; }
          50%     { opacity: 0.9; box-shadow: 0 0 12px currentColor; }
        }
      `}</style>
    </section>
  );
}