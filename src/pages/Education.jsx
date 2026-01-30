import { useState, useEffect, useRef } from "react";
import {
  GraduationCap, Calendar, MapPin, Brain, Code, Trophy,
  Sparkles, BookOpen, X, CheckCircle2, ExternalLink, Award,
  TrendingUp, Zap, Star, ChevronRight, Rocket, Terminal, 
  Activity, Cpu, Database, GitBranch, Shield, Flame,
  Grid3x3, LayoutList, Network, Globe, Maximize2, Play
} from "lucide-react";

// NEXT-GEN EDUCATION EXPERIENCE
// Multiple view modes, holographic effects, live particle systems
// Designed to impress Fortune 500 tech companies

export default function AdvancedEducation() {
  const [viewMode, setViewMode] = useState("timeline"); // timeline, grid, network, immersive
  const [hoveredId, setHoveredId] = useState(null);
  const [activeEdu, setActiveEdu] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [neuralNodes, setNeuralNodes] = useState([]);
  const canvasRef = useRef(null);
  const timelineRef = useRef(null);

  const education = [
    {
      id: 1,
      title: "B.Tech – AI & Data Science",
      school: "Ramachandra College of Engineering (JNTUK)",
      year: "2022 – 2026",
      score: "7.9 CGPA",
      desc: "Specialized in building intelligent, data-driven systems using Machine Learning, Deep Learning, and Full-Stack Development.",
      color: "#00f5ff",
      glowRGB: "0, 245, 255",
      image: "https://lh3.googleusercontent.com/d/1wxnzvsS3MA7xWSxuXKeIkS8GaQoG4Y1a",
      location: "Eluru, Andhra Pradesh",
      skills: ["Machine Learning", "Deep Learning", "MERN Stack", "Computer Vision", "MLOps", "Neural Networks"],
      achievements: [
        "AI & ML Internship Experience",
        "Top 10% Academic Performer",
        "Multiple Full-Stack AI Projects",
        "24-Hour Hackathon Participant",
        "15+ Professional Certifications"
      ],
      badge: "CURRENT",
      icon: Brain,
      progress: 85,
      gradient: "linear-gradient(135deg, #00f5ff 0%, #0099ff 100%)",
      yearNum: 2024
    },
    {
      id: 2,
      title: "Intermediate – MPC",
      school: "Srividhya Junior College",
      year: "2020 – 2022",
      score: "7.8 CGPA",
      desc: "Pre-engineering curriculum with focus on analytical thinking, mathematical reasoning, and problem-solving.",
      color: "#a855f7",
      glowRGB: "168, 85, 247",
      image: "https://lh3.googleusercontent.com/d/1N1K1j6QGrgNPNL2D9UmfJAL2PVSulhPJ",
      location: "Gudivada, Andhra Pradesh",
      skills: ["Problem Solving", "Logical Reasoning", "Analytical Thinking"],
      achievements: ["Top Performer in Mathematics", "Strong Academic Foundation"],
      badge: "FOUNDATION",
      icon: Code,
      progress: 78,
      gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
      yearNum: 2021
    },
    {
      id: 3,
      title: "Secondary School (10th)",
      school: "Montessori English Medium High School",
      year: "2019 – 2020",
      score: "9.5 GPA",
      desc: "Achieved academic excellence with exceptional performance in Mathematics and Science.",
      color: "#ff6b35",
      glowRGB: "255, 107, 53",
      image: "https://lh3.googleusercontent.com/d/1p1RXnVn9jySamu8OiIWF0WFhe7G6QxiL",
      location: "Gudivada, Andhra Pradesh",
      skills: ["Discipline", "Critical Thinking", "Leadership"],
      achievements: ["School Topper", "Perfect GPA", "Mathematics Excellence Award"],
      badge: "EXCELLENCE",
      icon: Trophy,
      progress: 95,
      gradient: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
      yearNum: 2020
    }
  ];

  // Particle system
  useEffect(() => {
    setParticles(Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 40 + 20,
      delay: Math.random() * 10
    })));
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
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

  // Neural network animation
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

    const nodes = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
        gradient.addColorStop(0, 'rgba(0, 245, 255, 0.9)');
        gradient.addColorStop(1, 'rgba(0, 245, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();

        nodes.forEach(other => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.3;
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
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

  const ViewModeSelector = () => (
    <div style={{
      display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '5rem',
      flexWrap: 'wrap'
    }}>
      {[
        { mode: "timeline", icon: LayoutList, label: "Timeline" },
        { mode: "grid", icon: Grid3x3, label: "Grid" },
        { mode: "network", icon: Network, label: "Network" },
        { mode: "immersive", icon: Maximize2, label: "Immersive" }
      ].map(({ mode, icon: Icon, label }) => (
        <button
          key={mode}
          onClick={() => setViewMode(mode)}
          className="view-mode-btn"
          style={{
            padding: '1.2rem 3rem', background: viewMode === mode 
              ? 'rgba(0, 245, 255, 0.2)' 
              : 'rgba(255, 255, 255, 0.05)',
            border: viewMode === mode 
              ? '3px solid #00f5ff' 
              : '2px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '999px', color: viewMode === mode ? '#00f5ff' : '#fff',
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem',
            fontFamily: "'JetBrains Mono', monospace", fontSize: '1rem',
            fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
            transition: 'all 0.4s', backdropFilter: 'blur(10px)',
            boxShadow: viewMode === mode ? '0 0 40px rgba(0, 245, 255, 0.5)' : 'none'
          }}
        >
          <Icon size={22} strokeWidth={3} />
          {label}
        </button>
      ))}
    </div>
  );

  const TimelineView = () => (
    <div ref={timelineRef} style={{ position: 'relative', padding: '5rem 0' }}>
      {/* Timeline line */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px',
        background: 'linear-gradient(to bottom, #00f5ff, #a855f7, #ff6b35)',
        transform: 'translateX(-50%)', boxShadow: '0 0 30px rgba(0, 245, 255, 0.8)'
      }} />

      {education.map((edu, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            key={edu.id}
            onMouseEnter={() => setHoveredId(edu.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setActiveEdu(edu)}
            style={{
              display: 'flex', justifyContent: isLeft ? 'flex-end' : 'flex-start',
              marginBottom: '8rem', position: 'relative',
              animation: `slide-in-${isLeft ? 'left' : 'right'} 1s ease-out ${i * 0.3}s both`
            }}
          >
            {/* Timeline node */}
            <div style={{
              position: 'absolute', left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80px', height: '80px', borderRadius: '50%',
              background: edu.color, display: 'flex', alignItems: 'center',
              justifyContent: 'center', zIndex: 10,
              boxShadow: `0 0 60px ${edu.color}, inset 0 0 30px rgba(255,255,255,0.5)`,
              border: '6px solid rgba(0,0,0,0.9)',
              animation: hoveredId === edu.id ? 'pulse-node 1s infinite' : 'none'
            }}>
              <edu.icon size={36} strokeWidth={3} color="#000" />
            </div>

            {/* Content card */}
            <div className="glass-card timeline-card" style={{
              width: '45%', padding: '3rem', cursor: 'pointer',
              background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(40px)',
              border: `3px solid ${hoveredId === edu.id ? edu.color : 'rgba(255, 255, 255, 0.15)'}`,
              borderRadius: '32px', position: 'relative',
              transform: hoveredId === edu.id ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: hoveredId === edu.id 
                ? `0 30px 80px rgba(${edu.glowRGB}, 0.6)` 
                : '0 10px 40px rgba(0,0,0,0.3)'
            }}>
              {/* Year badge */}
              <div style={{
                position: 'absolute', top: '-25px', left: '2rem',
                padding: '0.7rem 2rem', background: edu.color,
                borderRadius: '999px', fontFamily: "'Orbitron', sans-serif",
                fontSize: '1.1rem', fontWeight: 900, color: '#000',
                boxShadow: `0 10px 40px ${edu.color}`
              }}>
                {edu.year}
              </div>

              {/* Image */}
              <div style={{
                height: '280px', borderRadius: '20px', overflow: 'hidden',
                marginBottom: '2rem', position: 'relative'
              }}>
                <img src={edu.image} alt={edu.school} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transform: hoveredId === edu.id ? 'scale(1.2)' : 'scale(1.1)',
                  transition: 'transform 1s'
                }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)`
                }} />
                <div style={{
                  position: 'absolute', top: '1.5rem', right: '1.5rem',
                  padding: '0.6rem 1.5rem', background: `rgba(${edu.glowRGB}, 0.3)`,
                  backdropFilter: 'blur(10px)', border: `2px solid ${edu.color}`,
                  borderRadius: '999px', fontSize: '0.85rem', fontWeight: 900,
                  color: edu.color, fontFamily: "'JetBrains Mono', monospace"
                }}>
                  {edu.badge}
                </div>
              </div>

              <h3 style={{
                fontSize: '2rem', fontWeight: 800, color: edu.color,
                marginBottom: '1rem', fontFamily: "'Orbitron', sans-serif"
              }}>
                {edu.title}
              </h3>

              <div style={{
                fontSize: '1.15rem', color: '#d0d8f0', marginBottom: '1rem',
                fontWeight: 600
              }}>
                {edu.school}
              </div>

              <div style={{
                fontSize: '1rem', color: '#a8b0d0', marginBottom: '2rem',
                display: 'flex', alignItems: 'center', gap: '0.7rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <MapPin size={18} />
                {edu.location}
              </div>

              <p style={{
                fontSize: '1.05rem', color: '#b8c0e0', lineHeight: 1.8,
                marginBottom: '2rem'
              }}>
                {edu.desc}
              </p>

              {/* Score */}
              <div style={{
                display: 'inline-block', padding: '0.8rem 2rem',
                background: `rgba(${edu.glowRGB}, 0.15)`, border: `2px solid ${edu.color}`,
                borderRadius: '999px', fontSize: '1.3rem', fontWeight: 900,
                color: edu.color, fontFamily: "'Orbitron', sans-serif"
              }}>
                {edu.score}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const GridView = () => (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '4rem', padding: '3rem 0'
    }}>
      {education.map((edu, i) => (
        <div
          key={edu.id}
          onMouseEnter={() => setHoveredId(edu.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setActiveEdu(edu)}
          className="glass-card"
          style={{
            background: 'rgba(255, 255, 255, 0.04)', backdropFilter: 'blur(40px)',
            border: `3px solid ${hoveredId === edu.id ? edu.color : 'rgba(255, 255, 255, 0.12)'}`,
            borderRadius: '32px', overflow: 'hidden', cursor: 'pointer',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: hoveredId === edu.id ? 'translateY(-20px) scale(1.03)' : 'translateY(0)',
            boxShadow: hoveredId === edu.id 
              ? `0 40px 100px rgba(${edu.glowRGB}, 0.6)` 
              : '0 10px 40px rgba(0,0,0,0.3)',
            animation: `slide-up 0.8s ease-out ${i * 0.2}s both`
          }}
        >
          <div style={{ height: '320px', position: 'relative' }}>
            <img src={edu.image} alt={edu.school} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hoveredId === edu.id ? 'scale(1.25)' : 'scale(1.1)',
              transition: 'transform 1s'
            }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(to top, rgba(0,0,0,0.95), transparent 70%)`
            }} />
            <div style={{
              position: 'absolute', top: '2rem', right: '2rem',
              padding: '0.7rem 1.8rem', background: `rgba(${edu.glowRGB}, 0.3)`,
              backdropFilter: 'blur(12px)', border: `3px solid ${edu.color}`,
              borderRadius: '999px', fontSize: '0.9rem', fontWeight: 900,
              color: edu.color, fontFamily: "'JetBrains Mono', monospace",
              display: 'flex', alignItems: 'center', gap: '0.6rem'
            }}>
              <Flame size={16} />
              {edu.badge}
            </div>
          </div>

          <div style={{ padding: '3rem 2.5rem' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '20px',
                background: `rgba(${edu.glowRGB}, 0.15)`, border: `3px solid ${edu.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 30px ${edu.color}`
              }}>
                <edu.icon size={40} color={edu.color} strokeWidth={3} />
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '2.8rem', fontWeight: 900, color: edu.color,
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  {edu.score.split(' ')[0]}
                </div>
                <div style={{
                  fontSize: '0.85rem', color: '#a0a8c0',
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  PERFORMANCE
                </div>
              </div>
            </div>

            <h3 style={{
              fontSize: '1.9rem', fontWeight: 800, color: edu.color,
              marginBottom: '1rem', lineHeight: 1.2
            }}>
              {edu.title}
            </h3>

            <div style={{
              fontSize: '1.15rem', color: '#d0d8f0', marginBottom: '0.8rem',
              fontWeight: 600
            }}>
              {edu.school}
            </div>

            <div style={{
              fontSize: '1rem', color: '#a8b0d0', marginBottom: '2rem',
              display: 'flex', alignItems: 'center', gap: '0.7rem',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              <Calendar size={18} />
              {edu.year}
            </div>

            <p style={{
              fontSize: '1.05rem', color: '#b8c0e0', lineHeight: 1.8,
              marginBottom: '2rem'
            }}>
              {edu.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {edu.skills.slice(0, 4).map(skill => (
                <span key={skill} style={{
                  padding: '0.6rem 1.3rem', background: 'rgba(0,0,0,0.6)',
                  border: `2px solid ${edu.color}`, borderRadius: '999px',
                  fontSize: '0.85rem', color: edu.color,
                  fontFamily: "'JetBrains Mono', monospace", fontWeight: 600
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const NetworkView = () => {
    const centerX = 50;
    const centerY = 50;
    const radius = 35;

    return (
      <div style={{
        position: 'relative', height: '900px', margin: '5rem 0'
      }}>
        <svg style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%'
        }}>
          {education.map((edu, i) => {
            const angle = (i / education.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            
            return (
              <g key={edu.id}>
                <line
                  x1={`${centerX}%`} y1={`${centerY}%`}
                  x2={`${x}%`} y2={`${y}%`}
                  stroke={edu.color}
                  strokeWidth={hoveredId === edu.id ? "4" : "2"}
                  opacity={hoveredId === edu.id ? "1" : "0.4"}
                  style={{
                    transition: 'all 0.4s',
                    filter: `drop-shadow(0 0 ${hoveredId === edu.id ? 20 : 8}px ${edu.color})`
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* Center node */}
        <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px', height: '200px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff6b35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 100px rgba(0, 245, 255, 0.8)',
          border: '8px solid rgba(0,0,0,0.9)',
          animation: 'pulse-glow 3s infinite'
        }}>
          <div style={{ textAlign: 'center' }}>
            <GraduationCap size={60} strokeWidth={3} />
            <div style={{
              fontFamily: "'Orbitron', sans-serif", fontSize: '1.2rem',
              fontWeight: 900, marginTop: '1rem'
            }}>
              EDUCATION
            </div>
          </div>
        </div>

        {/* Education nodes */}
        {education.map((edu, i) => {
          const angle = (i / education.length) * 2 * Math.PI - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <div
              key={edu.id}
              onMouseEnter={() => setHoveredId(edu.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveEdu(edu)}
              style={{
                position: 'absolute', left: `${x}%`, top: `${y}%`,
                transform: `translate(-50%, -50%) scale(${hoveredId === edu.id ? 1.15 : 1})`,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '280px', background: 'rgba(0,0,0,0.9)',
                backdropFilter: 'blur(30px)', border: `4px solid ${edu.color}`,
                borderRadius: '24px', padding: '2rem', textAlign: 'center',
                boxShadow: hoveredId === edu.id 
                  ? `0 30px 80px rgba(${edu.glowRGB}, 0.8)` 
                  : `0 10px 40px rgba(${edu.glowRGB}, 0.4)`
              }}>
                <div style={{
                  width: '100px', height: '100px', margin: '0 auto 1.5rem',
                  borderRadius: '50%', overflow: 'hidden', border: `4px solid ${edu.color}`
                }}>
                  <img src={edu.image} alt={edu.school} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transform: hoveredId === edu.id ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.8s'
                  }} />
                </div>

                <div style={{
                  fontSize: '1.5rem', fontWeight: 900, color: edu.color,
                  fontFamily: "'Orbitron', sans-serif", marginBottom: '0.8rem'
                }}>
                  {edu.yearNum}
                </div>

                <div style={{
                  fontSize: '1.1rem', fontWeight: 700, color: '#fff',
                  marginBottom: '0.5rem'
                }}>
                  {edu.title.split('–')[0]}
                </div>

                <div style={{
                  fontSize: '1.3rem', fontWeight: 900, color: edu.color,
                  fontFamily: "'Orbitron', sans-serif"
                }}>
                  {edu.score}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const ImmersiveView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeEduItem = education[activeIndex];

    return (
      <div style={{
        position: 'relative', minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: '5rem 2rem'
      }}>
        {/* Background image */}
        <div style={{
          position: 'absolute', inset: 0, overflow: 'hidden'
        }}>
          <img src={activeEduItem.image} alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'blur(20px) brightness(0.3)', transform: 'scale(1.2)'
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.95) 70%)`
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 10, maxWidth: '1400px', width: '100%',
          display: 'flex', gap: '5rem', alignItems: 'center'
        }}>
          {/* Image */}
          <div style={{
            flex: 1, position: 'relative'
          }}>
            <div style={{
              borderRadius: '40px', overflow: 'hidden',
              border: `6px solid ${activeEduItem.color}`,
              boxShadow: `0 50px 150px rgba(${activeEduItem.glowRGB}, 0.8)`,
              position: 'relative', aspectRatio: '4/3'
            }}>
              <img src={activeEduItem.image} alt={activeEduItem.school} style={{
                width: '100%', height: '100%', objectFit: 'cover'
              }} />
              <div style={{
                position: 'absolute', top: '3rem', right: '3rem',
                width: '120px', height: '120px', borderRadius: '50%',
                background: `rgba(${activeEduItem.glowRGB}, 0.3)`,
                backdropFilter: 'blur(20px)', border: `5px solid ${activeEduItem.color}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 60px ${activeEduItem.color}`
              }}>
                <activeEduItem.icon size={55} color={activeEduItem.color} strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Details */}
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'inline-block', padding: '0.8rem 2rem',
              background: `rgba(${activeEduItem.glowRGB}, 0.2)`,
              border: `3px solid ${activeEduItem.color}`,
              borderRadius: '999px', marginBottom: '2rem',
              fontSize: '1rem', fontWeight: 900, color: activeEduItem.color,
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              {activeEduItem.badge} • {activeEduItem.year}
            </div>

            <h2 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: `linear-gradient(135deg, ${activeEduItem.color}, #fff)`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '2rem', lineHeight: 1.1
            }}>
              {activeEduItem.title}
            </h2>

            <div style={{
              fontSize: '1.5rem', color: '#d0d8f0', marginBottom: '1.5rem',
              fontWeight: 600
            }}>
              {activeEduItem.school}
            </div>

            <div style={{
              fontSize: '1.1rem', color: '#a8b0d0', marginBottom: '3rem',
              display: 'flex', alignItems: 'center', gap: '1rem',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              <MapPin size={22} />
              {activeEduItem.location}
            </div>

            <p style={{
              fontSize: '1.3rem', color: '#e0e8f8', lineHeight: 2,
              marginBottom: '3rem'
            }}>
              {activeEduItem.desc}
            </p>

            {/* Score */}
            <div style={{
              display: 'inline-block', padding: '1.5rem 4rem',
              background: activeEduItem.gradient,
              borderRadius: '999px', fontSize: '2.5rem', fontWeight: 900,
              color: '#000', fontFamily: "'Orbitron', sans-serif",
              boxShadow: `0 20px 60px rgba(${activeEduItem.glowRGB}, 0.8)`,
              marginBottom: '3rem'
            }}>
              {activeEduItem.score}
            </div>

            {/* Skills */}
            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem'
            }}>
              {activeEduItem.skills.map(skill => (
                <span key={skill} style={{
                  padding: '0.8rem 1.8rem', background: 'rgba(0,0,0,0.7)',
                  border: `2.5px solid ${activeEduItem.color}`,
                  borderRadius: '999px', fontSize: '1rem', color: activeEduItem.color,
                  fontFamily: "'JetBrains Mono', monospace", fontWeight: 700
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Navigation */}
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button
                onClick={() => setActiveIndex((activeIndex - 1 + education.length) % education.length)}
                style={{
                  padding: '1.2rem 2.5rem', background: 'rgba(255, 255, 255, 0.1)',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '999px', color: '#fff', cursor: 'pointer',
                  fontFamily: "'Orbitron', sans-serif", fontSize: '1rem',
                  fontWeight: 800, transition: 'all 0.3s',
                  backdropFilter: 'blur(10px)'
                }}
              >
                ← PREVIOUS
              </button>
              <button
                onClick={() => setActiveIndex((activeIndex + 1) % education.length)}
                style={{
                  padding: '1.2rem 2.5rem', background: activeEduItem.gradient,
                  border: 'none', borderRadius: '999px', color: '#000',
                  cursor: 'pointer', fontFamily: "'Orbitron', sans-serif",
                  fontSize: '1rem', fontWeight: 800, transition: 'all 0.3s',
                  boxShadow: `0 15px 40px rgba(${activeEduItem.glowRGB}, 0.6)`
                }}
              >
                NEXT →
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div style={{
          position: 'absolute', bottom: '3rem', left: '50%',
          transform: 'translateX(-50%)', display: 'flex', gap: '1rem'
        }}>
          {education.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? '60px' : '15px',
                height: '15px', borderRadius: '999px',
                background: i === activeIndex 
                  ? activeEduItem.color 
                  : 'rgba(255, 255, 255, 0.3)',
                border: 'none', cursor: 'pointer', transition: 'all 0.4s',
                boxShadow: i === activeIndex 
                  ? `0 0 30px ${activeEduItem.color}` 
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="advanced-education">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        .advanced-education {
          font-family: 'Inter', sans-serif;
          background: #000;
          color: #fff;
          overflow-x: hidden;
          min-height: 100vh;
        }

        @keyframes slide-up {
          from { transform: translateY(80px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 40px currentColor; }
          50% { box-shadow: 0 0 80px currentColor, 0 0 120px currentColor; }
        }

        @keyframes pulse-node {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .view-mode-btn:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 50px rgba(0, 245, 255, 0.4);
        }

        @media (max-width: 768px) {
          .timeline-card { width: 100% !important; }
        }
      `}</style>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '5px', zIndex: 10000,
        background: 'rgba(0,0,0,0.8)'
      }}>
        <div style={{
          width: `${scrollProgress}%`, height: '100%',
          background: 'linear-gradient(90deg, #00f5ff, #a855f7, #ff6b35)',
          boxShadow: '0 0 30px currentColor', transition: 'width 0.1s'
        }} />
      </div>

      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'fixed', left: `${particle.x}%`, top: `${particle.y}%`,
            width: `${particle.size}px`, height: `${particle.size}px`,
            background: 'rgba(0, 245, 255, 0.7)', borderRadius: '50%',
            pointerEvents: 'none', animation: `particle-float ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`, boxShadow: '0 0 15px rgba(0, 245, 255, 0.8)',
            zIndex: 1
          }}
        />
      ))}

      {/* Background */}
      <div style={{
        position: 'fixed', inset: 0,
        background: `
          radial-gradient(circle at 20% 80%, rgba(0, 245, 255, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
        `,
        opacity: 0.8, pointerEvents: 'none', zIndex: 1
      }} />

      {/* Neural Network Canvas */}
      <canvas ref={canvasRef} style={{ 
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2, opacity: 0.6
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, maxWidth: '1800px', margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem)', paddingTop: 'clamp(6rem, 12vw, 8rem)',
        paddingBottom: '8rem'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            fontFamily: "'JetBrains Mono', monospace", color: '#00f5ff',
            fontSize: '1rem', padding: '1rem 2.5rem',
            border: '3px solid rgba(0, 245, 255, 0.4)', borderRadius: '999px',
            marginBottom: '2.5rem', background: 'rgba(0, 245, 255, 0.08)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 40px rgba(0, 245, 255, 0.3)'
          }}>
            <Terminal size={20} strokeWidth={3} />
            <span style={{ fontWeight: 700, letterSpacing: '2px' }}>
              NEXT-GEN.EDUCATION.SYSTEM
            </span>
            <Activity size={20} strokeWidth={3} />
          </div>

          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)', fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif", letterSpacing: '8px',
            textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1,
            background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff6b35)',
            backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', animation: 'gradient-shift 6s ease infinite'
          }}>
            EDUCATION
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', color: '#c8d0e8',
            maxWidth: '900px', margin: '0 auto 4rem', lineHeight: 1.9,
            fontWeight: 500
          }}>
            Journey through innovation, excellence, and technological mastery
            <br/>
            <span style={{
              color: '#00f5ff', fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.05rem', display: 'inline-block', marginTop: '1rem'
            }}>
              [ 2019 → 2026 ] • 7 Years of Excellence
            </span>
          </p>

          <ViewModeSelector />
        </div>

        {/* Dynamic View Rendering */}
        {viewMode === "timeline" && <TimelineView />}
        {viewMode === "grid" && <GridView />}
        {viewMode === "network" && <NetworkView />}
        {viewMode === "immersive" && <ImmersiveView />}

        {/* CTA Section */}
        <div className="glass-card" style={{
          padding: 'clamp(4rem, 10vw, 6rem) clamp(2.5rem, 5vw, 4rem)',
          textAlign: 'center', borderColor: 'rgba(0, 245, 255, 0.4)',
          background: 'rgba(0, 20, 40, 0.5)', backdropFilter: 'blur(40px)',
          borderRadius: '40px', border: '3px solid rgba(0, 245, 255, 0.4)',
          marginTop: '8rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900,
            fontFamily: "'Orbitron', sans-serif",
            background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff6b35)',
            backgroundSize: '200% auto', WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent', marginBottom: '2.5rem',
            letterSpacing: '4px', animation: 'gradient-shift 6s linear infinite'
          }}>
            LET'S BUILD TOGETHER
          </h2>

          <p style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)', color: '#d0d8f0',
            maxWidth: '850px', margin: '0 auto 4rem', lineHeight: 2
          }}>
            Ready to collaborate on cutting-edge AI projects and innovative solutions
          </p>

          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://github.com/bhagavan444"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1.5rem 3.5rem', borderRadius: '999px', fontSize: '1.05rem',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '1.2rem', background: 'linear-gradient(135deg, #00f5ff, #0099ff)',
                color: '#000', fontWeight: 800, fontFamily: "'Orbitron', sans-serif",
                border: 'none', cursor: 'pointer', transition: 'all 0.4s',
                boxShadow: '0 15px 50px rgba(0, 245, 255, 0.5)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(0, 245, 255, 0.7)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 245, 255, 0.5)';
              }}
            >
              <GitBranch size={24} strokeWidth={3} />
              VIEW PROJECTS
              <ExternalLink size={24} strokeWidth={3} />
            </a>

            <a
              href="mailto:g.sivasatyasaibhagavan@gmail.com"
              style={{
                padding: '1.5rem 3.5rem', borderRadius: '999px', fontSize: '1.05rem',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                gap: '1.2rem', background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                color: '#000', fontWeight: 800, fontFamily: "'Orbitron', sans-serif",
                border: 'none', cursor: 'pointer', transition: 'all 0.4s',
                boxShadow: '0 15px 50px rgba(168, 85, 247, 0.5)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 25px 70px rgba(168, 85, 247, 0.7)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(168, 85, 247, 0.5)';
              }}
            >
              <Sparkles size={24} strokeWidth={3} />
              START CONVERSATION
              <Rocket size={24} strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {activeEdu && (
        <div onClick={() => setActiveEdu(null)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.97)',
          backdropFilter: 'blur(25px)', zIndex: 9999, display: 'flex',
          alignItems: 'center', justifyContent: 'center', padding: '2rem',
          animation: 'slide-up 0.4s ease-out'
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: 'rgba(5, 5, 30, 0.95)', border: `5px solid ${activeEdu.color}`,
            borderRadius: '40px', maxWidth: '1100px', width: '95%', maxHeight: '85vh',
            overflowY: 'auto', position: 'relative',
            boxShadow: `0 0 200px rgba(${activeEdu.glowRGB}, 0.7)`,
            backdropFilter: 'blur(30px)'
          }}>
            <button onClick={() => setActiveEdu(null)} style={{
              position: 'absolute', top: '2rem', right: '2rem',
              background: 'rgba(255, 107, 53, 0.2)', border: '3px solid #ff6b35',
              borderRadius: '50%', width: '55px', height: '55px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#ff6b35', cursor: 'pointer', backdropFilter: 'blur(10px)',
              transition: 'all 0.3s', zIndex: 10
            }}>
              <X size={28} strokeWidth={3.5} />
            </button>

            <div style={{ padding: '3.5rem 3rem' }}>
              <div style={{
                display: 'inline-block', padding: '0.7rem 2rem',
                background: `rgba(${activeEdu.glowRGB}, 0.2)`,
                border: `3px solid ${activeEdu.color}`, borderRadius: '999px',
                marginBottom: '2rem', fontSize: '0.95rem', fontWeight: 900,
                color: activeEdu.color, fontFamily: "'JetBrains Mono', monospace"
              }}>
                {activeEdu.badge} • {activeEdu.year}
              </div>

              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                background: `linear-gradient(135deg, ${activeEdu.color}, #fff)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                marginBottom: '1.5rem', lineHeight: 1.1
              }}>
                {activeEdu.title}
              </h2>

              <div style={{
                fontSize: '1.3rem', color: '#d0d8f0', marginBottom: '1rem',
                fontWeight: 600
              }}>
                {activeEdu.school}
              </div>

              <div style={{
                fontSize: '1.05rem', color: '#a8b0d0', marginBottom: '2.5rem',
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <MapPin size={20} />
                {activeEdu.location}
              </div>

              <p style={{
                fontSize: '1.2rem', lineHeight: 2, color: '#e0e8f8',
                marginBottom: '3rem', fontWeight: 500
              }}>
                {activeEdu.desc}
              </p>

              <div style={{
                fontSize: '0.95rem', color: activeEdu.color,
                fontFamily: "'JetBrains Mono', monospace", marginBottom: '1.5rem',
                fontWeight: 700, letterSpacing: '2px'
              }}>
                &lt;KEY_ACHIEVEMENTS/&gt;
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                {activeEdu.achievements.map((ach, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '1.3rem',
                    padding: '1.3rem', background: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '18px', border: `2px solid rgba(${activeEdu.glowRGB}, 0.3)`
                  }}>
                    <CheckCircle2 size={22} style={{ color: activeEdu.color }} strokeWidth={3} />
                    <span style={{ fontSize: '1.1rem', color: '#f0f8ff' }}>{ach}</span>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  style={{
                    padding: '1.4rem 3.2rem', borderRadius: '999px', fontSize: '1.15rem',
                    textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                    gap: '1.3rem', background: activeEdu.gradient, color: '#000',
                    fontWeight: 800, fontFamily: "'Orbitron', sans-serif",
                    boxShadow: `0 20px 60px rgba(${activeEdu.glowRGB}, 0.7)`,
                    transition: 'all 0.4s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <Sparkles size={26} strokeWidth={3} />
                  LET'S COLLABORATE
                  <Rocket size={26} strokeWidth={3} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}