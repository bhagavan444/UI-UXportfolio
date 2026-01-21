// src/pages/Home.jsx
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Code2,
  Brain,
  Database,
  Server,
  Award,
  Briefcase,
  Terminal,
  Rocket,
  Download,
  ArrowRight,
  CheckCircle2,
  Layers,
  Bot,
  Cpu as CpuIcon,
  Cloud,
  GitBranch,
  Star,
  Trophy,           // ← added here
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const canvasRef = useRef(null);
  const starsCanvasRef = useRef(null);

  const roles = [
    "AI & Data Science Engineer",
    "Full-Stack Developer",
    "Machine Learning Specialist",
    "MERN Stack Expert",
    "Cloud & DevOps Enthusiast",
    "System Design Enthusiast",
  ];

  // Typing animation
  useEffect(() => {
    setIsVisible(true);
    const typingSpeed = isDeleting ? 35 : 90;
    const currentText = roles[currentRole];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  // Starfield background
  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const stars = Array.from({ length: 380 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.4 + 0.4,
      speed: Math.random() * 0.35 + 0.08,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleSpeed: Math.random() * 0.025 + 0.008,
    }));

    let raf;
    const animate = () => {
      ctx.fillStyle = "rgba(5, 10, 25, 0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.y += s.speed;
        s.opacity += s.twinkleSpeed;
        if (s.opacity > 1 || s.opacity < 0.3) s.twinkleSpeed *= -1;
        if (s.y > canvas.height) {
          s.y = -10;
          s.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 230, 255, ${s.opacity})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Particle network (with fixed alpha)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles = Array.from({ length: 110 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 1.1,
      vy: (Math.random() - 0.5) * 1.1,
      radius: Math.random() * 2.8 + 0.8,
      color: ["#3b82f6", "#a855f7", "#ec4899", "#22d3ee", "#eab308", "#f97316", "#10b981", "#06b6d4"][
        Math.floor(Math.random() * 8)
      ],
      opacity: Math.random() * 0.6 + 0.35,
      pulse: Math.random() * 0.028 + 0.012,
      angle: Math.random() * Math.PI * 2,
      orbitSpeed: (Math.random() - 0.5) * 0.018,
    }));

    let raf;
    let frame = 0;

    const animate = () => {
      frame++;
      ctx.fillStyle = "rgba(2, 6, 23, 0.09)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.angle += p.orbitSpeed;
        p.x += p.vx + Math.cos(p.angle) * 0.4;
        p.y += p.vy + Math.sin(p.angle) * 0.4;

        p.opacity += p.pulse;
        if (p.opacity > 1.0 || p.opacity < 0.35) p.pulse *= -1;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const alpha = Math.max(0, Math.min(255, Math.floor(p.opacity * 255)));
        const alphaHex = alpha.toString(16).padStart(2, "0");

        // Glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4.5);
        g.addColorStop(0, `${p.color}${alphaHex}`);
        g.addColorStop(0.6, `${p.color}${Math.floor(alpha * 0.4).toString(16).padStart(2, "0")}`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        const size = p.radius * (1 + Math.sin(frame * 0.06 + i) * 0.28);
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${alphaHex}`;
        ctx.fill();

        // Connections
        particles.forEach((p2, j) => {
          if (i >= j) return;
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist >= 170) return;

          const lineAlpha = Math.floor((1 - dist / 170) * 255 * 0.45);
          const lineAlphaHex = lineAlpha.toString(16).padStart(2, "0");

          const lg = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
          lg.addColorStop(0, `${p.color}${lineAlphaHex}`);
          lg.addColorStop(1, `${p2.color}${lineAlphaHex}`);

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = lg;
          ctx.lineWidth = 1.4;
          ctx.stroke();
        });
      });

      raf = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
  };

  const techStack = [
    { icon: Code2, label: "React", color: "#61DAFB" },
    { icon: Layers, label: "Node.js", color: "#68A063" },
    { icon: Database, label: "MongoDB", color: "#47A248" },
    { icon: Brain, label: "TensorFlow", color: "#FF6F00" },
    { icon: Server, label: "AWS", color: "#FF9900" },
    { icon: Terminal, label: "Python", color: "#3776AB" },
    { icon: Bot, label: "Gemini AI", color: "#4285F4" },
    { icon: CpuIcon, label: "Docker", color: "#2496ED" },
    { icon: Cloud, label: "Kubernetes", color: "#326CE5" },
    { icon: GitBranch, label: "Git", color: "#f05032" },
  ];

  const stats = [
    { icon: Briefcase, value: "3", label: "Internships", color: "#22d3ee" },
    { icon: Rocket, value: "8", label: "Major Projects", color: "#a855f7" },
    { icon: Award, value: "15+", label: "Certifications", color: "#ec4899" },
    { icon: Trophy, value: "Top 10%", label: "Hackathons", color: "#eab308" },
  ];

  const highlights = [
    "3 production-level internships in Full-Stack & AI/ML",
    "15+ professional certifications (Google, IBM, AWS, DeepLearning.AI)",
    "Expert in MERN stack, TensorFlow, PyTorch & Gemini API",
    "Built real-world scalable ML & web applications",
    "Strong foundation in system design & cloud architecture",
    "Passionate about building intelligent, user-centric solutions",
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/bhagavan444", hoverColor: "#a855f7", bg: "rgba(168, 85, 247, 0.2)" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/bhagavan", hoverColor: "#0a66c2", bg: "rgba(10, 102, 194, 0.2)" },
    { icon: Mail, label: "Email", href: "mailto:g.sivasatyasaibhagavan@gmail.com", hoverColor: "#22d3ee", bg: "rgba(34, 211, 238, 0.2)" },
    { icon: Phone, label: "+91 7569205626", href: "tel:+917569205626", hoverColor: "#22c55e", bg: "rgba(34, 197, 94, 0.2)" },
  ];

  const handleViewProjects = () => {
    navigate("/projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/bhagavan-resume.pdf"; // ← make sure this path exists
    link.download = "Siva_Satya_Sai_Bhagavan_Resume_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        @keyframes gradient-shift { 0%,100% {background-position:0% 50%} 50% {background-position:100% 50%} }
        @keyframes ping { 75%,100% {transform:scale(2.5);opacity:0} }
        @keyframes blob {
          0%   {border-radius:58% 42% 63% 37% / 55% 48% 52% 45%; transform:rotate(0deg) scale(1)}
          33%  {border-radius:41% 59% 38% 62% / 62% 43% 57% 38%; transform:rotate(120deg) scale(1.08)}
          66%  {border-radius:62% 38% 59% 41% / 38% 62% 41% 59%; transform:rotate(240deg) scale(0.95)}
          100% {border-radius:58% 42% 63% 37% / 55% 48% 52% 45%; transform:rotate(360deg) scale(1)}
        }
        @keyframes float-badge { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-18px) rotate(6deg)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes meteor {
          0%   {transform:translate(-150px,-150px) rotate(40deg); opacity:0.9}
          60%  {opacity:0.9}
          100% {transform:translate(1200px,1200px) rotate(40deg); opacity:0}
        }
        @media (max-width:1024px) {
          .grid-2-col {grid-template-columns:1fr !important}
          .profile-align {margin-top:3.5rem !important}
        }
        @media (max-width:768px) {
          .profile-align {margin-top:2.8rem !important}
          .name-title {text-align:center}
          .content-col {order:2}
          .image-col {order:1}
          .floating-badge {display:none !important}
        }
      `}</style>

      <div
        onMouseMove={handleMouseMove}
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "radial-gradient(ellipse at top, #1a1a40 0%, #0b0b24 50%, #000 100%)",
          color: "white",
          overflow: "hidden",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <canvas ref={starsCanvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }} />
        <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, pointerEvents: "none", opacity: 0.82, zIndex: 1 }} />

        {/* Meteors */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "fixed",
              top: `${15 + Math.random() * 50}%`,
              left: `${Math.random() * 60}%`,
              width: "1.5px",
              height: "90px",
              background: "linear-gradient(to bottom, transparent, #a5b4fc, transparent)",
              animation: `meteor ${4 + Math.random() * 4}s linear infinite ${i * 2.5}s`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Animated orbs */}
        <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 2, overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              width: "36rem",
              height: "36rem",
              top: "10%",
              left: "8%",
              background: "radial-gradient(circle at 45% 55%, rgba(59,130,246,0.32), transparent 70%)",
              animation: "blob 24s ease-in-out infinite",
              transform: `translate(${mousePos.x * 28}px, ${mousePos.y * 28}px)`,
              filter: "blur(85px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "40rem",
              height: "40rem",
              bottom: "12%",
              right: "10%",
              background: "radial-gradient(circle at 55% 45%, rgba(168,85,247,0.32), transparent 70%)",
              animation: "blob 28s ease-in-out infinite 5s",
              transform: `translate(${mousePos.x * -32}px, ${mousePos.y * -32}px)`,
              filter: "blur(90px)",
            }}
          />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: "1780px", margin: "0 auto", padding: "6rem 1.6rem 3rem" }}>
          <div className="grid-2-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Left column */}
            <div
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(70px)",
                transition: "all 1.4s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Open to work */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1.1rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "999px",
                  background: "linear-gradient(to right, rgba(34,197,94,0.22), rgba(16,185,129,0.22))",
                  border: "1.5px solid rgba(34,197,94,0.5)",
                  backdropFilter: "blur(22px)",
                  marginBottom: "2.2rem",
                  boxShadow: "0 12px 36px rgba(34,197,94,0.28)",
                }}
              >
                <span style={{ position: "relative", width: "18px", height: "18px" }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", animation: "ping 2.5s infinite" }} />
                  <span style={{ position: "relative", display: "block", width: "18px", height: "18px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 20px #22c55e" }} />
                </span>
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "1.05rem" }}>
                  Open to Full-Time Opportunities • 2026 Batch
                </span>
              </div>

              <h1 style={{ fontSize: "clamp(3.8rem, 9.5vw, 6.4rem)", fontWeight: 900, lineHeight: 1.05 }}>
                <span
                  style={{
                    background: "linear-gradient(to right, #60a5fa, #22d3ee, #60a5fa)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradient-shift 10s ease infinite",
                  }}
                >
                  Siva Satya Sai
                </span>
                <br />
                <span
                  style={{
                    background: "linear-gradient(to right, #c084fc, #ec4899, #c084fc)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradient-shift 10s ease infinite 2.2s",
                  }}
                >
                  Bhagavan
                </span>
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", fontSize: "clamp(1.9rem, 5.2vw, 2.6rem)", fontWeight: 700, minHeight: "4rem", margin: "1.5rem 0" }}>
                <span style={{ color: "#22d3ee", fontSize: "2.8rem" }}>&gt;</span>
                <span style={{ minWidth: "380px" }}>{displayText}</span>
                <span
                  style={{
                    width: "8px",
                    height: "3.2rem",
                    background: "#22d3ee",
                    animation: "blink 1.5s infinite",
                    borderRadius: "4px",
                    boxShadow: "0 0 16px #22d3ee",
                  }}
                />
              </div>

              <p style={{ fontSize: "1.28rem", color: "#cbd5e1", lineHeight: 1.85, maxWidth: "640px", marginBottom: "2.5rem" }}>
                Passionate <strong style={{ color: "#22d3ee" }}>AI & Data Science</strong> undergraduate with strong hands-on experience in machine learning, full-stack development and modern cloud technologies.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", marginBottom: "3rem" }}>
                {highlights.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "start", gap: "1.1rem" }}>
                    <CheckCircle2 size={28} color="#22d3ee" />
                    <span style={{ fontSize: "1.18rem" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.1rem", marginBottom: "3.5rem" }}>
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "0.85rem 1.7rem",
                      background: "rgba(30,41,59,0.78)",
                      border: "1px solid rgba(71,85,105,0.65)",
                      borderRadius: "999px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      backdropFilter: "blur(14px)",
                      transition: "all 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px) scale(1.07)";
                      e.currentTarget.style.borderColor = tech.color;
                      e.currentTarget.style.boxShadow = `0 14px 32px ${tech.color}35`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.borderColor = "rgba(71,85,105,0.65)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <tech.icon size={22} color={tech.color} />
                    <span style={{ fontWeight: 600 }}>{tech.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))", gap: "1.6rem", marginBottom: "4rem" }}>
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "1.8rem 1.4rem",
                      background: "rgba(30,41,59,0.68)",
                      borderRadius: "18px",
                      border: "1px solid rgba(71,85,105,0.55)",
                      backdropFilter: "blur(16px)",
                      textAlign: "center",
                      transition: "all 0.45s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.borderColor = stat.color;
                      e.currentTarget.style.boxShadow = `0 18px 40px ${stat.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.borderColor = "rgba(71,85,105,0.55)";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <stat.icon size={38} color={stat.color} style={{ marginBottom: "0.9rem" }} />
                    <div style={{ fontSize: "2.4rem", fontWeight: 900 }}>{stat.value}</div>
                    <div style={{ color: "#94a3b8", fontSize: "0.92rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap" }}>
                <button
                  onClick={handleViewProjects}
                  style={{
                    padding: "1.3rem 3rem",
                    background: "linear-gradient(90deg, #2563eb, #06b6d4, #22d3ee)",
                    color: "white",
                    border: "none",
                    borderRadius: "14px",
                    fontSize: "1.18rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    boxShadow: "0 14px 36px rgba(6,182,212,0.45)",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px) scale(1.04)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = ""}
                >
                  <Rocket size={26} />
                  View Projects
                  <ArrowRight size={24} />
                </button>

                <button
                  onClick={handleDownloadResume}
                  style={{
                    padding: "1.3rem 3rem",
                    background: "rgba(30,41,59,0.88)",
                    border: "2px solid #475569",
                    color: "white",
                    borderRadius: "14px",
                    fontSize: "1.18rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.9rem",
                    backdropFilter: "blur(14px)",
                    transition: "all 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#22d3ee";
                    e.currentTarget.style.background = "rgba(30,41,59,0.98)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#475569";
                    e.currentTarget.style.background = "rgba(30,41,59,0.88)";
                  }}
                >
                  <Download size={24} />
                  Download Resume
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.6rem", marginTop: "3.5rem" }}>
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.9rem",
                      padding: "0.9rem 1.8rem",
                      borderRadius: "999px",
                      background: link.bg,
                      color: "#e2e8f0",
                      textDecoration: "none",
                      fontWeight: 600,
                      transition: "all 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.color = link.hoverColor;
                      e.currentTarget.style.boxShadow = `0 12px 30px ${link.hoverColor}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "";
                      e.currentTarget.style.color = "#e2e8f0";
                      e.currentTarget.style.boxShadow = "";
                    }}
                  >
                    <link.icon size={28} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Right column – profile image */}
            <div
              className="profile-align"
              style={{
                position: "relative",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(70px)",
                transition: "all 1.5s cubic-bezier(0.4,0,0.2,1) 0.4s",
              }}
            >
              <div style={{ position: "relative", maxWidth: "540px", margin: "0 auto" }}>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "4 / 5",
                    borderRadius: "2.8rem",
                    overflow: "hidden",
                    border: "4px solid rgba(34,211,238,0.48)",
                    boxShadow: "0 45px 90px -25px rgba(34,211,238,0.55)",
                    transition: "all 0.6s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05) rotate(2.5deg)";
                    e.currentTarget.style.boxShadow = "0 70px 140px -35px rgba(34,211,238,0.75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                    e.currentTarget.style.boxShadow = "0 45px 90px -25px rgba(34,211,238,0.55)";
                  }}
                >
                  <img
                    src="https://lh3.googleusercontent.com/d/1hFtkcydF2n7kk2XtWqD9hSGcLGiDRKuB"
                    alt="Siva Satya Sai Bhagavan"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center 18%",
                      transition: "transform 0.9s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, rgba(34,211,238,0.42), rgba(168,85,247,0.42), rgba(236,72,153,0.42))",
                      mixBlendMode: "overlay",
                      opacity: 0.78,
                    }}
                  />
                </div>

                {/* Floating badges */}
                {[
                  { text: "React + Next.js", top: "-2.8rem", left: "6%", bg: "#61DAFB", delay: 0 },
                  { text: "TensorFlow", top: "14%", right: "-5rem", bg: "#FF6F00", delay: 0.8 },
                  { text: "AWS Certified", bottom: "24%", left: "-5.5rem", bg: "#FF9900", delay: 1.6 },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="floating-badge"
                    style={{
                      position: "absolute",
                      ...badge,
                      padding: "0.8rem 1.6rem",
                      borderRadius: "999px",
                      background: badge.bg,
                      color: "#000",
                      fontWeight: 700,
                      fontSize: "1rem",
                      boxShadow: "0 14px 36px rgba(0,0,0,0.55)",
                      border: "2px solid rgba(255,255,255,0.38)",
                      backdropFilter: "blur(12px)",
                      animation: `float-badge 9s ease-in-out infinite ${badge.delay}s`,
                      zIndex: 15,
                    }}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}