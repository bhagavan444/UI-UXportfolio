import { useState, useEffect, useRef } from "react";
import {
  GraduationCap, Calendar, MapPin, Brain, Code, Trophy,
  Sparkles, BookOpen, X, CheckCircle2, ExternalLink, Award,
  TrendingUp, Zap, Star, ChevronRight, Globe, Users, Target,
  Rocket, Eye, Film, Play, Layers, Activity, Box
} from "lucide-react";

// Replace with your actual image paths
import rceeImage from "../assets/Rcee.jpg";
import sriImage from "../assets/SRI.jpg";
import monteImage from "../assets/Monte.jpg";

const education = [
  {
    id: 1,
    title: "B.Tech – Artificial Intelligence & Data Science",
    school: "Ramachandra College of Engineering (JNTUK)",
    year: "2022 – 2026",
    score: "7.9 CGPA",
    desc: "Specialized in building intelligent, data-driven systems using Machine Learning, Deep Learning, and Full-Stack Development. Leading AI projects and building production-ready applications.",
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    image: rceeImage,
    location: "Eluru, Andhra Pradesh",
    coreSubjects: ["Machine Learning", "Deep Learning", "AI", "DSA", "Big Data", "Computer Vision", "NLP", "DBMS"],
    tools: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "MongoDB", "Docker", "Git"],
    skills: ["Machine Learning", "Deep Learning", "MERN Stack", "Computer Vision", "MLOps", "Neural Networks"],
    achievements: [
      "AI & ML Internship Experience",
      "Top 10% Academic Performer",
      "Multiple Full-Stack AI Projects",
      "24-Hour Hackathon Participant",
      "15+ Professional Certifications",
      "Published Research Work"
    ],
    badge: "CURRENT",
    icon: Brain,
    progress: 85
  },
  {
    id: 2,
    title: "Intermediate – MPC",
    school: "Srividhya Junior College",
    year: "2020 – 2022",
    score: "7.8 CGPA",
    desc: "Pre-engineering curriculum with focus on analytical thinking, mathematical reasoning, and problem-solving. Built strong foundation for engineering studies.",
    color: "#a855f7",
    glowRGB: "168, 85, 247",
    image: sriImage,
    location: "Vijayawada, Andhra Pradesh",
    coreSubjects: ["Advanced Mathematics", "Physics", "Chemistry"],
    tools: ["Scientific Computing", "Mathematical Modeling", "Problem Analysis"],
    skills: ["Problem Solving", "Logical Reasoning", "Analytical Thinking"],
    achievements: ["Top Performer in Mathematics", "Strong Academic Foundation", "Excellence in Science"],
    badge: "FOUNDATION",
    icon: Code,
    progress: 78
  },
  {
    id: 3,
    title: "Secondary School (10th)",
    school: "Montessori English Medium High School",
    year: "2019 – 2020",
    score: "9.5 GPA",
    desc: "Achieved academic excellence with exceptional performance in Mathematics and Science. Demonstrated discipline and leadership.",
    color: "#ff6b35",
    glowRGB: "255, 107, 53",
    image: monteImage,
    location: "Vijayawada, Andhra Pradesh",
    coreSubjects: ["Mathematics", "Science", "English"],
    tools: ["Academic Excellence", "Research Methods", "Presentation Skills"],
    skills: ["Discipline", "Critical Thinking", "Leadership"],
    achievements: ["School Topper", "Perfect GPA", "Mathematics Excellence Award"],
    badge: "EXCELLENCE",
    icon: Trophy,
    progress: 95
  }
];

export default function EliteEducation() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeEdu, setActiveEdu] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [cursorTrail, setCursorTrail] = useState([]);
  const canvasRef = useRef(null);

  // Particle System
  useEffect(() => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  // Mouse movement parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });

      setCursorTrail(prev => [
        ...prev.slice(-12),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-observe]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const nodes = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 245, 255, 0.4)';
        ctx.fill();

        nodes.forEach(other => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Rajdhani', sans-serif; 
          background: #000; 
          color: #fff; 
          overflow-x: hidden;
          cursor: none;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* CUSTOM CURSOR */
        /* ═══════════════════════════════════════════════════════════ */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #00f5ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(0, 245, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          animation: fadeTrail 0.8s ease-out forwards;
        }

        @keyframes fadeTrail {
          to { opacity: 0; transform: scale(0); }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* HOLLYWOOD ANIMATIONS */
        /* ═══════════════════════════════════════════════════════════ */
        @keyframes cinematic-reveal {
          from { 
            opacity: 0; 
            transform: translateY(100px) scale(0.9) rotateX(-10deg);
            filter: blur(10px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px currentColor,
                        0 0 40px currentColor;
          }
          50% { 
            box-shadow: 0 0 40px currentColor,
                        0 0 80px currentColor,
                        0 0 120px currentColor;
          }
        }

        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.2; }
          46% { opacity: 1; }
        }

        @keyframes hologram-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes expand-card {
          0% { transform: scale(0.8) rotateY(-20deg); opacity: 0; }
          100% { transform: scale(1) rotateY(0); opacity: 1; }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* GLASS MORPHISM CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.7s;
        }

        .glass-card:hover::before {
          left: 100%;
        }

        .glass-card:hover {
          transform: translateY(-20px) scale(1.02) rotateX(5deg);
          border-color: var(--card-color);
          box-shadow: 
            0 40px 100px var(--card-glow),
            0 0 60px var(--card-glow) inset;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* EDUCATION CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .edu-card {
          animation: cinematic-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .edu-card.visible {
          animation: expand-card 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* PREMIUM BUTTONS */
        /* ═══════════════════════════════════════════════════════════ */
        .premium-btn {
          position: relative;
          background: linear-gradient(135deg, var(--btn-color), #a855f7);
          border: none;
          color: #000;
          font-weight: 800;
          cursor: pointer;
          overflow: hidden;
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .premium-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .premium-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .premium-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 60px var(--btn-glow);
        }

        .outline-btn {
          background: transparent;
          border: 3px solid var(--btn-color);
          color: var(--btn-color);
          font-weight: 700;
          cursor: pointer;
          font-family: 'Orbitron', sans-serif;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .outline-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--btn-color);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .outline-btn:hover::before {
          transform: scaleX(1);
        }

        .outline-btn:hover {
          color: #000;
          transform: translateY(-5px);
          box-shadow: 0 20px 60px var(--btn-glow);
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* SKILL TAGS */
        /* ═══════════════════════════════════════════════════════════ */
        .skill-tag {
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid currentColor;
          padding: 0.7rem 1.3rem;
          border-radius: 999px;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .skill-tag:hover::before {
          opacity: 0.2;
        }

        .skill-tag:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 40px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* STAT CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 2px solid;
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: currentColor;
          opacity: 0.1;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .stat-card:hover::before {
          width: 400px;
          height: 400px;
        }

        .stat-card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 30px 80px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* NEON TEXT */
        /* ═══════════════════════════════════════════════════════════ */
        .neon-text {
          text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 40px currentColor,
            0 0 80px currentColor;
          animation: neon-flicker 4s linear infinite;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* HOLOGRAM EFFECT */
        /* ═══════════════════════════════════════════════════════════ */
        .hologram {
          position: relative;
          overflow: hidden;
        }

        .hologram::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(0, 245, 255, 0.15) 50%,
            transparent 60%
          );
          animation: hologram-scan 3s linear infinite;
          pointer-events: none;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* PROGRESS CIRCLE */
        /* ═══════════════════════════════════════════════════════════ */
        .progress-ring {
          transform: rotate(-90deg);
          filter: drop-shadow(0 0 10px currentColor);
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* RESPONSIVE */
        /* ═══════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          body { cursor: default; }
          .custom-cursor, .cursor-trail { display: none; }
          .edu-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: cursorTrail[cursorTrail.length - 1]?.x || 0,
          top: cursorTrail[cursorTrail.length - 1]?.y || 0,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {cursorTrail.slice(-8).map((point, i) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}

      <div style={{ minHeight: '100vh', background: '#000', position: 'relative', overflow: 'hidden' }}>
        {/* Progress Bar */}
        <div style={{
          position: 'fixed', top: 0, left: 0, width: `${scrollProgress}%`, height: '4px',
          background: 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)',
          zIndex: 10000, boxShadow: '0 0 20px currentColor', transition: 'width 0.1s'
        }} />

        {/* Particle System */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'fixed',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'rgba(0, 245, 255, 0.6)',
              borderRadius: '50%',
              pointerEvents: 'none',
              animation: `particle-float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.8)',
              zIndex: 1
            }}
          />
        ))}

        {/* Animated Background */}
        <div style={{
          position: 'fixed', inset: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
          `,
          opacity: 0.5, pointerEvents: 'none', zIndex: 1
        }} />

        {/* Canvas Background */}
        <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2 }} />

        {/* Floating Orbs */}
        <div style={{
          position: 'fixed', top: '10%', right: '-5%', width: '600px', height: '600px',
          border: '2px solid rgba(0, 245, 255, 0.1)', borderRadius: '50%',
          animation: 'rotate-border 35s linear infinite', pointerEvents: 'none',
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
        }} />

        <div style={{
          position: 'fixed', bottom: '-5%', left: '-5%', width: '500px', height: '500px',
          border: '2px solid rgba(168, 85, 247, 0.1)', borderRadius: '50%',
          animation: 'rotate-border 45s linear infinite reverse', pointerEvents: 'none',
          transform: `translate(${-mousePosition.x * 0.7}px, ${-mousePosition.y * 0.7}px)`
        }} />

        <div style={{
          position: 'relative', zIndex: 10, maxWidth: '1600px', margin: '0 auto',
          padding: '0 2rem', paddingTop: 'clamp(4rem, 10vw, 6rem)', paddingBottom: '6rem'
        }}>
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
              fontFamily: "'Space Mono', monospace", color: '#00f5ff',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', padding: '0.8rem 2rem',
              border: '2px solid rgba(0, 245, 255, 0.5)', borderRadius: '999px',
              marginBottom: '2rem', background: 'rgba(0, 245, 255, 0.05)',
              animation: 'pulse-glow 3s infinite'
            }}>
              <Film size={18} />
              EDUCATION.MATRIX.LOADED
            </div>

            <h1 className="neon-text" style={{
              fontSize: 'clamp(3rem, 9vw, 6rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif", letterSpacing: '6px',
              textTransform: 'uppercase', marginBottom: '1.5rem', lineHeight: 1.1,
              background: 'linear-gradient(135deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              ACADEMIC ODYSSEY
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', color: '#b0b0d8',
              maxWidth: '800px', margin: '0 auto 3rem',
              fontFamily: "'Rajdhani', sans-serif", lineHeight: 1.8, fontWeight: 500
            }}>
              From foundational excellence to cutting-edge AI mastery
              <br/>
              <span style={{ color: '#00f5ff', fontFamily: "'Space Mono', monospace" }}>
                [ 2019 → 2026 ]
              </span>
              <span style={{ color: '#a855f7' }}> • 7 Years of Innovation</span>
            </p>

            {/* Stats Grid */}
            <div className="stats-grid" style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem',
              maxWidth: '1100px', margin: '0 auto'
            }}>
              {[
                { label: "Duration", value: "7Y", icon: Calendar, color: "#00f5ff" },
                { label: "Performance", value: "86%", icon: TrendingUp, color: "#a855f7" },
                { label: "Achievements", value: "15+", icon: Award, color: "#ff6b35" },
                { label: "Tech Stack", value: "25+", icon: Zap, color: "#00f5ff" }
              ].map((stat, i) => (
                <div key={i} className="stat-card" style={{
                  borderColor: stat.color, color: stat.color,
                  animationDelay: `${i * 0.1}s`
                }}>
                  <stat.icon size={36} style={{ marginBottom: '0.8rem' }} />
                  <div style={{
                    fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.4rem',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.85rem', opacity: 0.9,
                    textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Cards */}
          <div className="edu-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '6rem'
          }}>
            {education.map((edu, i) => {
              const isHovered = hoveredId === edu.id;
              const isVisible = visibleCards[edu.id];

              return (
                <div
                  key={edu.id}
                  data-id={edu.id}
                  data-observe
                  className={`glass-card edu-card ${isVisible ? 'visible' : ''}`}
                  onMouseEnter={() => setHoveredId(edu.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveEdu(edu)}
                  style={{
                    '--card-color': edu.color,
                    '--card-glow': `rgba(${edu.glowRGB}, 0.4)`,
                    animationDelay: `${i * 0.15}s`,
                    cursor: 'pointer'
                  }}
                >
                  {/* Top Accent Line */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
                    background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)`,
                    opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.5s'
                  }} />

                  {/* Image Section */}
                  <div className="hologram" style={{
                    height: '300px', position: 'relative', overflow: 'hidden'
                  }}>
                    <img src={edu.image} alt={edu.school} style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transition: 'transform 0.8s', transform: isHovered ? 'scale(1.2)' : 'scale(1.1)'
                    }} />

                    {/* Image Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 70%)'
                    }} />

                    {/* Progress Circle */}
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%',
                      transform: 'translate(-50%, -50%)',
                      opacity: isHovered ? 1 : 0, transition: 'opacity 0.6s'
                    }}>
                      <svg width="140" height="140" className="progress-ring">
                        <circle cx="70" cy="70" r="60" fill="none"
                          stroke="rgba(0, 245, 255, 0.2)" strokeWidth="10" />
                        <circle cx="70" cy="70" r="60" fill="none"
                          stroke={edu.color} strokeWidth="10"
                          strokeDasharray={377} strokeDashoffset={377 * (1 - edu.progress / 100)}
                          strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s' }} />
                      </svg>
                      <div style={{
                        position: 'absolute', top: '50%', left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '2rem', fontWeight: 900, color: edu.color,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        {edu.progress}%
                      </div>
                    </div>

                    {/* Badge */}
                    <div style={{
                      position: 'absolute', top: '20px', right: '20px',
                      padding: '0.6rem 1.3rem', background: `rgba(${edu.glowRGB}, 0.2)`,
                      backdropFilter: 'blur(10px)', border: `2px solid ${edu.color}`,
                      borderRadius: '999px', fontSize: '0.85rem', fontWeight: 800,
                      color: edu.color, animation: 'pulse-glow 2.5s infinite',
                      fontFamily: "'Space Mono', monospace"
                    }}>
                      {edu.badge}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div style={{ padding: 'clamp(1.8rem, 4vw, 2.5rem) clamp(1.5rem, 3.5vw, 2.2rem)' }}>
                    {/* Icon & Year */}
                    <div style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '75px', height: '75px', border: `3px solid ${edu.color}`,
                        borderRadius: '16px', display: 'flex', alignItems: 'center',
                        justifyContent: 'center', background: 'rgba(0, 0, 0, 0.6)',
                        animation: isHovered ? 'float-3d 3s ease-in-out infinite' : 'none',
                        boxShadow: isHovered ? `0 0 40px ${edu.color}` : 'none',
                        transition: 'all 0.5s'
                      }}>
                        <edu.icon size={38} style={{ color: edu.color }} />
                      </div>

                      <div style={{
                        fontSize: '1.1rem', fontWeight: 700, color: edu.color,
                        fontFamily: "'Space Mono', monospace"
                      }}>
                        {edu.year}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: 'clamp(1.6rem, 4vw, 1.9rem)', fontWeight: 800,
                      color: '#fff', marginBottom: '0.8rem', lineHeight: 1.2
                    }}>
                      {edu.title}
                    </h3>

                    {/* School */}
                    <div style={{
                      fontSize: '1.1rem', color: '#b0b0d8', marginBottom: '0.5rem',
                      fontFamily: "'Rajdhani', sans-serif", fontWeight: 500
                    }}>
                      {edu.school}
                    </div>

                    {/* Location */}
                    <div style={{
                      fontSize: '0.95rem', color: '#a0a0c0', marginBottom: '1.2rem',
                      display: 'flex', alignItems: 'center', gap: '0.5rem'
                    }}>
                      <MapPin size={16} />
                      {edu.location}
                    </div>

                    {/* Score */}
                    <div style={{
                      fontSize: 'clamp(2.5rem, 6vw, 3.2rem)', fontWeight: 900,
                      color: edu.color, marginBottom: '1.8rem',
                      textShadow: `0 0 20px ${edu.color}`,
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      {edu.score}
                    </div>

                    {/* Skills */}
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: '0.7rem',
                      marginBottom: '1.8rem'
                    }}>
                      {edu.skills.slice(0, 6).map(skill => (
                        <span key={skill} className="skill-tag" style={{
                          color: isHovered ? edu.color : '#b0e0ff',
                          borderColor: isHovered ? edu.color : 'rgba(0, 245, 255, 0.4)'
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div style={{
                      display: 'flex', flexDirection: 'column', gap: '0.8rem',
                      marginBottom: '2rem'
                    }}>
                      {edu.achievements.slice(0, 3).map((ach, idx) => (
                        <div key={idx} style={{
                          display: 'flex', alignItems: 'center', gap: '0.8rem',
                          fontSize: '0.95rem', color: '#d0d0d0'
                        }}>
                          <CheckCircle2 size={18} style={{ color: edu.color, flexShrink: 0 }} />
                          {ach}
                        </div>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <button
                      className="premium-btn"
                      onClick={(e) => { e.stopPropagation(); setActiveEdu(edu); }}
                      style={{
                        '--btn-color': edu.color,
                        '--btn-glow': `rgba(${edu.glowRGB}, 0.5)`,
                        width: '100%', padding: '1.2rem',
                        borderRadius: '999px', fontSize: '1rem',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: '0.8rem',
                        position: 'relative', zIndex: 1
                      }}
                    >
                      <BookOpen size={20} />
                      EXPLORE DETAILS
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="glass-card" style={{
            padding: 'clamp(3.5rem, 8vw, 5rem) 2.5rem',
            textAlign: 'center', marginTop: '6rem',
            borderColor: 'rgba(0, 245, 255, 0.3)'
          }}>
            <div style={{
              fontSize: '0.95rem', color: '#00f5ff', marginBottom: '1rem',
              fontFamily: "'Space Mono', monospace", letterSpacing: '2px'
            }}>
              &lt;COLLABORATION.READY&gt;
            </div>

            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 7vw, 4rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff6b35)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '2rem'
            }}>
              BUILD THE FUTURE TOGETHER
            </h2>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', color: '#b0b0d8',
              maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.8
            }}>
              Whether it's cutting-edge AI research, full-stack innovation,
              or revolutionary projects — let's create something extraordinary.
            </p>

            <div style={{
              display: 'flex', gap: '2rem', justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://github.com/bhagavan444"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn"
                style={{
                  '--btn-color': '#00f5ff',
                  '--btn-glow': 'rgba(0, 245, 255, 0.5)',
                  padding: '1.3rem 3rem', borderRadius: '999px',
                  fontSize: '1rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '1rem',
                  position: 'relative', zIndex: 1
                }}
              >
                <ExternalLink size={22} />
                VIEW PROJECTS
              </a>

              <a
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                className="premium-btn"
                style={{
                  '--btn-color': '#a855f7',
                  '--btn-glow': 'rgba(168, 85, 247, 0.5)',
                  padding: '1.3rem 3rem', borderRadius: '999px',
                  fontSize: '1rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '1rem',
                  position: 'relative', zIndex: 1
                }}
              >
                <Sparkles size={22} />
                START CONVERSATION
              </a>
            </div>

            <div style={{
              marginTop: '2.5rem', fontSize: '0.9rem',
              color: '#00f5ff', fontFamily: "'Space Mono', monospace"
            }}>
              &lt;/READY_FOR_INNOVATION_2026&gt;
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeEdu && (
        <div onClick={() => setActiveEdu(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.98)',
          backdropFilter: 'blur(20px)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'rgba(6, 6, 28, 0.98)', border: `4px solid ${activeEdu.color}`,
            borderRadius: '28px', maxWidth: '1400px', width: '96%',
            maxHeight: '92vh', overflowY: 'auto', position: 'relative',
            boxShadow: `0 0 150px rgba(${activeEdu.glowRGB}, 0.6)`
          }}>
            {/* Close Button */}
            <button onClick={() => setActiveEdu(null)} style={{
              position: 'absolute', top: '1.5rem', right: '2rem',
              background: 'none', border: 'none', color: '#ff6b35',
              cursor: 'pointer', zIndex: 10, transition: 'transform 0.3s'
            }}>
              <X size={42} strokeWidth={3} />
            </button>

            {/* Modal Image */}
            <div className="hologram" style={{
              height: '45vh', overflow: 'hidden', position: 'relative'
            }}>
              <img src={activeEdu.image} alt={activeEdu.school} style={{
                width: '100%', height: '100%', objectFit: 'cover'
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 60%)'
              }} />
            </div>

            {/* Modal Content */}
            <div style={{
              padding: 'clamp(2.5rem, 6vw, 4.5rem) clamp(2rem, 5vw, 4rem) 5rem'
            }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                background: `linear-gradient(135deg, ${activeEdu.color}, #a855f7)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem'
              }}>
                {activeEdu.title}
              </h2>

              {/* Meta Info */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '2rem',
                marginBottom: '3rem', fontSize: '1.2rem', color: '#d0d0ff'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <GraduationCap size={24} />
                  {activeEdu.school}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Calendar size={24} />
                  {activeEdu.year}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <MapPin size={24} />
                  {activeEdu.location}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <Star size={24} />
                  {activeEdu.score}
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(1.15rem, 2.8vw, 1.35rem)', lineHeight: 1.8,
                color: '#c8d0ff', marginBottom: '3.5rem'
              }}>
                {activeEdu.desc}
              </p>

              {/* Details Grid */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem', marginBottom: '3rem'
              }}>
                {/* Core Subjects */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem', color: activeEdu.color,
                    marginBottom: '1.2rem', fontFamily: "'Space Mono', monospace",
                    fontWeight: 700
                  }}>
                    &lt;CORE_SUBJECTS/&gt;
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {activeEdu.coreSubjects.map(sub => (
                      <span key={sub} className="skill-tag" style={{
                        color: activeEdu.color, borderColor: activeEdu.color
                      }}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem', color: activeEdu.color,
                    marginBottom: '1.2rem', fontFamily: "'Space Mono', monospace",
                    fontWeight: 700
                  }}>
                    &lt;TOOLS_TECH/&gt;
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {activeEdu.tools.map(tool => (
                      <span key={tool} className="skill-tag" style={{
                        color: activeEdu.color, borderColor: activeEdu.color
                      }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 style={{
                    fontSize: '1.5rem', color: activeEdu.color,
                    marginBottom: '1.2rem', fontFamily: "'Space Mono', monospace",
                    fontWeight: 700
                  }}>
                    &lt;KEY_SKILLS/&gt;
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                    {activeEdu.skills.map(skill => (
                      <span key={skill} className="skill-tag" style={{
                        color: activeEdu.color, borderColor: activeEdu.color
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 style={{
                  fontSize: '1.8rem', color: activeEdu.color,
                  marginBottom: '1.5rem', fontFamily: "'Space Mono', monospace",
                  fontWeight: 700
                }}>
                  &lt;ACHIEVEMENTS/&gt;
                </h3>
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '1.2rem'
                }}>
                  {activeEdu.achievements.map((ach, idx) => (
                    <div key={idx} className="glass-card" style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1.2rem', borderColor: `rgba(${activeEdu.glowRGB}, 0.3)`
                    }}>
                      <Award size={24} style={{ color: activeEdu.color, flexShrink: 0 }} />
                      <span style={{ fontSize: '1rem', color: '#e0e0ff' }}>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  className="premium-btn"
                  style={{
                    '--btn-color': activeEdu.color,
                    '--btn-glow': `rgba(${activeEdu.glowRGB}, 0.5)`,
                    padding: '1.4rem 3.5rem', borderRadius: '999px',
                    fontSize: '1.2rem', textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: '1rem',
                    position: 'relative', zIndex: 1
                  }}
                >
                  <Rocket size={24} />
                  LET'S COLLABORATE
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}