import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code, Database, Brain, Sparkles, Award, Zap, Eye, X, CheckCircle2, Layers, Terminal, GitBranch } from 'lucide-react';

const internships = [
  {
    id: 1,
    title: "MERN Stack Intern",
    company: "StudyOwl Education Pvt Ltd",
    period: "May–July 2025",
    badge: "Full-Stack Pro",
    certId: "1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC",
    color: "#06b6d4",
    gradientStart: "#06b6d4",
    gradientEnd: "#3b82f6",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    achievements: ["Built 3+ Apps", "JWT Auth", "REST APIs", "Cloud Deploy"],
    icon: Code
  },
  {
    id: 2,
    title: "AI/ML Intern",
    company: "SmartBridge (Remote)",
    period: "May–June 2025",
    badge: "AI Engineer",
    certId: "1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw",
    color: "#a855f7",
    gradientStart: "#a855f7",
    gradientEnd: "#ec4899",
    tech: ["Python", "TensorFlow", "Scikit-learn", "CNN", "Flask"],
    achievements: ["5+ Models", "CNNs", "85%+ Accuracy", "Deployment"],
    icon: Brain
  },
  {
    id: 3,
    title: "ML & Data Science Intern",
    company: "Blackbucks (Remote)",
    period: "May–June 2024",
    badge: "Data Specialist",
    certId: "1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY",
    color: "#10b981",
    gradientStart: "#10b981",
    gradientEnd: "#06b6d4",
    tech: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    achievements: ["ML Models", "Data Preprocessing", "Feature Engineering", "Model Evaluation"],
    icon: Database
  }
];

const Internships = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);
  const [modalOpen, setModalOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Particle Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: internships[i % 3].color
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '60';
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = p.color + Math.floor((1 - dist / 120) * 30).toString(16);
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getDriveThumbnail = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

  return (
    <div ref={sectionRef} style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      background: '#000000',
      padding: '40px 20px 80px',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 20px currentColor); }
          50% { filter: drop-shadow(0 0 40px currentColor); }
        }
        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.4
        }}
      />

      {/* Dynamic Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Mesh Gradient */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: '80%',
          height: '60%',
          background: `radial-gradient(circle at center, ${internships[activeCard].color}25 0%, transparent 70%)`,
          transform: `translate(-50%, -50%) translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)`,
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
          filter: 'blur(100px)',
          borderRadius: '50%'
        }} />

        {/* Floating Code Symbols */}
        {['<>', '/>', '{}', '[]', '()', '===', '=>', '!='].map((symbol, i) => (
          <div key={`symbol-${i}`} style={{
            position: 'absolute',
            left: `${10 + (i * 12) % 80}%`,
            top: `${10 + (i * 15) % 80}%`,
            fontSize: `${24 + i * 4}px`,
            fontWeight: '900',
            color: internships[i % 3].color,
            opacity: 0.15,
            fontFamily: 'monospace',
            animation: `float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            userSelect: 'none'
          }}>
            {symbol}
          </div>
        ))}

        {/* Animated Grid Lines */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${internships[activeCard].color}15 2px, transparent 2px),
            linear-gradient(90deg, ${internships[activeCard].color}15 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px',
          opacity: 0.3,
          transition: 'all 0.6s ease'
        }} />
      </div>

      <div ref={containerRef} style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 10
      }}>
        {/* Hero Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          {/* Animated Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 28px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255,255,255,0.1)',
            borderRadius: '9999px',
            marginBottom: '32px',
            animation: 'scaleIn 0.8s ease-out 0.2s backwards',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(90deg, ${internships[0].color}, ${internships[1].color}, ${internships[2].color}, ${internships[0].color})`,
              backgroundSize: '200% 100%',
              opacity: 0.15,
              animation: 'borderRotate 3s linear infinite'
            }} />
            <Terminal style={{width: '20px', height: '20px', color: '#06b6d4', animation: 'glowPulse 2s ease-in-out infinite'}} />
            <span style={{
              fontSize: '11px',
              fontWeight: '900',
              letterSpacing: '0.15em',
              background: `linear-gradient(90deg, ${internships[0].color}, ${internships[1].color}, ${internships[2].color})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1
            }}>
              MERN STACK DEVELOPER
            </span>
            <Sparkles style={{width: '20px', height: '20px', color: '#a855f7', animation: 'rotate360 4s linear infinite'}} />
          </div>

          {/* Main Title with Split Animation */}
          <div style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: '900',
            lineHeight: 0.95,
            marginBottom: '24px',
            letterSpacing: '-0.03em'
          }}>
            <div style={{
              overflow: 'hidden',
              marginBottom: '8px'
            }}>
              <div style={{
                color: '#fff',
                animation: 'slideInLeft 1s ease-out 0.4s backwards'
              }}>
                Professional
              </div>
            </div>
            <div style={{
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                background: `linear-gradient(135deg, ${internships[0].color}, ${internships[1].color}, ${internships[2].color})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'slideInRight 1s ease-out 0.6s backwards',
                position: 'relative'
              }}>
                Internships
                {/* Shimmer Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmer 3s infinite',
                  pointerEvents: 'none'
                }} />
              </div>
            </div>
          </div>

          <p style={{
            fontSize: '18px',
            color: '#9ca3af',
            maxWidth: '650px',
            margin: '0 auto 32px',
            animation: 'fadeInUp 1s ease-out 0.8s backwards',
            lineHeight: 1.6
          }}>
            Transforming ideas into production-ready applications through{' '}
            <span style={{
              color: internships[activeCard].color,
              fontWeight: '700',
              transition: 'color 0.6s ease'
            }}>
              hands-on industry experience
            </span>
          </p>

          {/* Tech Stack Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            animation: 'fadeInUp 1s ease-out 1s backwards'
          }}>
            {['MongoDB', 'Express', 'React', 'Node.js', 'Python', 'TensorFlow'].map((tech, i) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${internships[i % 3].color}40`,
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#e0e0e0',
                  animation: `bounce ${2 + i * 0.2}s ease-in-out ${i * 0.1}s infinite`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Internship Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {internships.map((internship, index) => {
            const Icon = internship.icon;
            const isActive = activeCard === index;
            const isHovered = hoveredCard === internship.id;

            return (
              <div
                key={internship.id}
                onMouseEnter={() => setHoveredCard(internship.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCard(index)}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: (isActive || isHovered) ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)',
                  opacity: isVisible ? 1 : 0,
                  animation: `scaleIn 0.8s ease-out ${0.2 + index * 0.15}s backwards`
                }}
              >
                {/* Holographic Glow */}
                <div style={{
                  position: 'absolute',
                  inset: '-40px',
                  borderRadius: '40px',
                  background: `radial-gradient(circle at 50% 50%, ${internship.gradientStart}40, ${internship.gradientEnd}20, transparent)`,
                  filter: 'blur(60px)',
                  opacity: (isActive || isHovered) ? 0.8 : 0,
                  transition: 'opacity 0.6s',
                  animation: isActive ? 'glowPulse 3s ease-in-out infinite' : 'none'
                }} />

                <div style={{
                  position: 'relative',
                  background: 'rgba(10,10,10,0.9)',
                  borderRadius: '32px',
                  border: `2px solid ${(isActive || isHovered) ? internship.color : 'rgba(255,255,255,0.1)'}`,
                  backdropFilter: 'blur(30px)',
                  overflow: 'hidden',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: (isActive || isHovered) 
                    ? `0 40px 100px ${internship.color}50, inset 0 0 100px ${internship.color}10` 
                    : '0 10px 40px rgba(0,0,0,0.5)'
                }}>
                  {/* Animated Border */}
                  {isActive && (
                    <div style={{
                      position: 'absolute',
                      inset: '-2px',
                      background: `linear-gradient(45deg, ${internship.gradientStart}, ${internship.gradientEnd}, ${internship.gradientStart})`,
                      backgroundSize: '200% 200%',
                      animation: 'borderRotate 3s linear infinite',
                      borderRadius: '32px',
                      zIndex: 0,
                      opacity: 0.6
                    }} />
                  )}

                  {/* Background Gradient */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${internship.gradientStart}15, ${internship.gradientEnd}08)`,
                    opacity: isHovered ? 1 : 0.5,
                    transition: 'opacity 0.6s',
                    zIndex: 1
                  }} />

                  {/* Icon Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    right: '24px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${internship.gradientStart}, ${internship.gradientEnd})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 40px ${internship.color}60`,
                    zIndex: 10,
                    animation: isActive ? 'rotate360 8s linear infinite' : 'none'
                  }}>
                    <Icon style={{width: '32px', height: '32px', color: '#fff'}} />
                  </div>

                  {/* Certificate Preview */}
                  <div
                    onClick={(e) => { e.stopPropagation(); setModalOpen(internship); }}
                    style={{
                      position: 'relative',
                      height: '220px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      zIndex: 2
                    }}
                  >
                    <img
                      src={getDriveThumbnail(internship.certId)}
                      alt={internship.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transform: (isActive || isHovered) ? 'scale(1.1) rotate(1deg)' : 'scale(1)'
                      }}
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, transparent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: (isActive || isHovered) ? 1 : 0,
                      transition: 'opacity 0.5s'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 32px',
                        background: 'rgba(0,0,0,0.7)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        border: `2px solid ${internship.color}`,
                        fontSize: '14px',
                        fontWeight: '700',
                        color: '#fff',
                        transform: (isActive || isHovered) ? 'scale(1)' : 'scale(0.8)',
                        transition: 'transform 0.3s'
                      }}>
                        <Eye style={{width: '20px', height: '20px', color: internship.color}} />
                        <span>View Certificate</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: '32px',
                    position: 'relative',
                    zIndex: 3
                  }}>
                    {/* Status Badge */}
                    <div style={{
                      display: 'inline-block',
                      padding: '6px 14px',
                      borderRadius: '20px',
                      fontSize: '10px',
                      fontWeight: '900',
                      color: '#000',
                      background: internship.color,
                      marginBottom: '16px',
                      letterSpacing: '0.08em'
                    }}>
                      {internship.badge}
                    </div>

                    <h3 style={{
                      fontSize: '28px',
                      fontWeight: '900',
                      color: '#fff',
                      marginBottom: '10px',
                      lineHeight: 1.2
                    }}>
                      {internship.title}
                    </h3>
                    
                    <div style={{
                      fontSize: '15px',
                      color: '#9ca3af',
                      marginBottom: '6px',
                      fontWeight: '500'
                    }}>
                      {internship.company}
                    </div>
                    
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '700',
                      color: internship.color,
                      marginBottom: '24px'
                    }}>
                      {internship.period}
                    </div>

                    {/* Tech Stack */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '24px'
                    }}>
                      {internship.tech.map((tech, i) => (
                        <div
                          key={i}
                          style={{
                            padding: '6px 12px',
                            fontSize: '11px',
                            fontWeight: '700',
                            border: `1.5px solid ${internship.color}50`,
                            background: `${internship.color}15`,
                            borderRadius: '12px',
                            color: '#e5e5e5',
                            transition: 'all 0.3s',
                            transform: isActive ? 'translateY(0)' : 'translateY(5px)',
                            opacity: isActive ? 1 : 0.7,
                            transitionDelay: `${i * 0.05}s`
                          }}
                        >
                          {tech}
                        </div>
                      ))}
                    </div>

                    {/* Achievements Grid */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      marginBottom: '28px'
                    }}>
                      {internship.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '12px',
                            background: 'rgba(255,255,255,0.05)',
                            borderRadius: '14px',
                            fontSize: '12px',
                            fontWeight: '600',
                            color: '#d5d5d5',
                            border: `1px solid rgba(255,255,255,0.08)`,
                            transition: 'all 0.3s',
                            transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                            opacity: isActive ? 1 : 0.6,
                            transitionDelay: `${i * 0.08}s`
                          }}
                        >
                          <CheckCircle2 style={{width: '16px', height: '16px', color: internship.color, flexShrink: 0}} />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href={`https://drive.google.com/file/d/${internship.certId}/view`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        width: '100%',
                        padding: '18px',
                        borderRadius: '18px',
                        border: 'none',
                        background: `linear-gradient(135deg, ${internship.gradientStart}, ${internship.gradientEnd})`,
                        fontSize: '14px',
                        fontWeight: '800',
                        color: '#fff',
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        boxShadow: `0 10px 40px ${internship.color}50`,
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = `0 15px 50px ${internship.color}70`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = `0 10px 40px ${internship.color}50`;
                      }}
                    >
                      <Award style={{width: '20px', height: '20px'}} />
                      <span>View Full Certificate</span>
                      <ExternalLink style={{width: '18px', height: '18px'}} />
                    </a>
                  </div>

                  {/* Decorative Corners */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    width: '40px',
                    height: '40px',
                    borderTop: `3px solid ${internship.color}`,
                    borderLeft: `3px solid ${internship.color}`,
                    borderTopLeftRadius: '16px',
                    opacity: isActive ? 1 : 0.3,
                    transition: 'opacity 0.5s',
                    zIndex: 5
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    borderBottom: `3px solid ${internship.color}`,
                    borderRight: `3px solid ${internship.color}`,
                    borderBottomRightRadius: '16px',
                    opacity: isActive ? 1 : 0.3,
                    transition: 'opacity 0.5s',
                    zIndex: 5
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1.2s',
          animation: 'fadeInUp 1s ease-out 1.2s backwards'
        }}>
          {[
            { icon: Layers, label: "Total Internships", value: "3", color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)" },
            { icon: GitBranch, label: "Tech Stacks", value: "15+", color: "#a855f7", gradient: "linear-gradient(135deg, #a855f7, #ec4899)" },
            { icon: Zap, label: "Projects Built", value: "8+", color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #06b6d4)" }
          ].map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} style={{
                position: 'relative',
                padding: '32px 24px',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px',
                textAlign: 'center',
                overflow: 'hidden',
                transition: 'all 0.4s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = stat.color;
                e.currentTarget.style.boxShadow = `0 20px 60px ${stat.color}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: stat.gradient,
                  opacity: 0.08,
                  transition: 'opacity 0.4s'
                }} />
                
                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    margin: '0 auto 16px',
                    borderRadius: '18px',
                    background: stat.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 10px 30px ${stat.color}40`
                  }}>
                    <StatIcon style={{width: '28px', height: '28px', color: '#fff'}} />
                  </div>
                  
                  <div style={{
                    fontSize: '42px',
                    fontWeight: '900',
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '8px',
                    filter: 'drop-shadow(0 0 20px currentColor)'
                  }}>
                    {stat.value}
                  </div>
                  
                  <div style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificate Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(40px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeInUp 0.3s ease-out'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1200px',
              width: '100%',
              borderRadius: '32px',
              overflow: 'hidden',
              border: `4px solid ${modalOpen.color}`,
              boxShadow: `0 60px 140px ${modalOpen.color}60`,
              animation: 'scaleIn 0.4s ease-out'
            }}
          >
            {/* Animated Glow */}
            <div style={{
              position: 'absolute',
              inset: '-100px',
              background: `radial-gradient(circle, ${modalOpen.color}60, transparent 70%)`,
              filter: 'blur(100px)',
              animation: 'glowPulse 3s ease-in-out infinite',
              pointerEvents: 'none'
            }} />

            <img
              src={getDriveThumbnail(modalOpen.certId)}
              alt={modalOpen.title}
              style={{
                width: '100%',
                display: 'block',
                position: 'relative',
                zIndex: 2
              }}
              loading="eager"
            />

            {/* Close Button */}
            <button
              onClick={() => setModalOpen(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(239,68,68,0.95)',
                border: '3px solid rgba(255,255,255,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 12px 40px rgba(239,68,68,0.6)',
                transition: 'all 0.3s',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                e.currentTarget.style.background = 'rgba(239,68,68,1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.background = 'rgba(239,68,68,0.95)';
              }}
            >
              <X style={{width: '28px', height: '28px', color: '#fff'}} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships