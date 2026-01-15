import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles, Award, Zap, Eye, X, CheckCircle2, Calendar, Briefcase, Trophy, Star } from 'lucide-react';

const internships = [
  {
    id: 1,
    title: "MERN Stack Intern",
    company: "StudyOwl Education Pvt Ltd",
    period: "May–July 2025",
    badge: "Full-Stack Pro",
    certId: "1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    achievements: ["Built 3+ Apps", "JWT Auth", "REST APIs", "Cloud Deploy"]
  },
  {
    id: 2,
    title: "AI/ML Intern",
    company: "SmartBridge (Remote)",
    period: "May–June 2025",
    badge: "AI Engineer",
    certId: "1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    tech: ["Python", "TensorFlow", "Scikit-learn", "CNN", "Flask"],
    achievements: ["5+ Models", "CNNs", "85%+ Accuracy", "Deployment"]
  },
  {
    id: 3,
    title: "ML & Data Science Intern",
    company: "Blackbucks (Remote)",
    period: "May–June 2024",
    badge: "Data Specialist",
    certId: "1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    tech: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
    achievements: ["ML Models", "Data Preprocessing", "Feature Engineering", "Model Evaluation"]
  }
];

const Internships = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCard, setActiveCard] = useState(0);
  const [modalOpen, setModalOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

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

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getDriveThumbnail = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;

  return (
    <div ref={sectionRef} style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      background: '#000000',
      padding: '20px 20px 80px',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes morphFloat {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg) scale(1);
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% { 
            transform: translate(18px, -18px) rotate(90deg) scale(1.08);
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% { 
            transform: translate(0, -35px) rotate(180deg) scale(0.95);
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% { 
            transform: translate(-18px, -18px) rotate(270deg) scale(1.08);
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-110vh) scale(1); opacity: 0; }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse { 0%, 100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideIn { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes ringExpand {
          0% { transform: scale(0.92); opacity: 0.7; }
          100% { transform: scale(1.25); opacity: 0; }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
      `}</style>

      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Dynamic Mesh Gradient */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: internships[activeCard].gradient,
          opacity: 0.14,
          filter: 'blur(110px)',
          transition: 'all 0.8s ease-out',
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`
        }} />

        {/* Floating Morphing Shapes */}
        {[...Array(12)].map((_, i) => (
          <div key={`shape-${i}`} style={{
            position: 'absolute',
            width: `${70 + i * 12}px`,
            height: `${70 + i * 12}px`,
            left: `${(i * 15) % 100}%`,
            top: `${(i * 22) % 100}%`,
            background: `linear-gradient(135deg, ${internships[i % 3].color}12, transparent)`,
            border: `1px solid ${internships[i % 3].color}25`,
            animation: `morphFloat ${9 + i * 1.2}s ease-in-out ${i * 0.4}s infinite`,
            backdropFilter: 'blur(8px)'
          }} />
        ))}

        {/* Energy Particles */}
        {[...Array(40)].map((_, i) => (
          <div key={`particle-${i}`} style={{
            position: 'absolute',
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: internships[i % 3].color,
            boxShadow: `0 0 18px ${internships[i % 3].color}`,
            animation: `particleFloat ${12 + Math.random() * 12}s linear ${Math.random() * 5}s infinite`,
            opacity: 0.7
          }} />
        ))}

        {/* Animated Grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${internships[activeCard].color}12 1px, transparent 1px), linear-gradient(90deg, ${internships[activeCard].color}12 1px, transparent 1px)`,
          backgroundSize: '70px 70px',
          animation: 'gridPulse 4s ease-in-out infinite',
          opacity: 0.5,
          transition: 'background-image 0.8s ease'
        }} />

        {/* Mouse Glow */}
        <div style={{
          position: 'fixed',
          width: '650px',
          height: '650px',
          background: `radial-gradient(circle, ${internships[activeCard].color}35 0%, transparent 70%)`,
          left: mousePos.x - 325,
          top: mousePos.y - 325,
          pointerEvents: 'none',
          transition: 'all 0.6s ease',
          filter: 'blur(70px)'
        }} />
      </div>

      <div ref={containerRef} style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
        zIndex: 2
      }}>
        {/* Command Center Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          {/* Professional Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            padding: '14px 32px',
            background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(25px)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '9999px',
            marginBottom: '36px',
            animation: 'fadeInUp 1s ease-out 0.2s backwards'
          }}>
            <Trophy style={{width: '22px', height: '22px', color: '#fbbf24'}} />
            <span style={{
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '0.15em',
              background: 'linear-gradient(90deg, #fbbf24, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              PROFESSIONAL EXPERIENCE
            </span>
            <Sparkles style={{width: '22px', height: '22px', color: '#a855f7'}} />
          </div>

          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 11vw, 8rem)',
            fontWeight: '900',
            lineHeight: 0.9,
            marginBottom: '28px',
            letterSpacing: '-0.02em'
          }}>
            <span style={{
              display: 'block',
              color: '#fff',
              animation: 'fadeInUp 1s ease-out 0.4s backwards'
            }}>
              Industry
            </span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #06b6d4, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeInUp 1s ease-out 0.6s backwards'
            }}>
              Internships
            </span>
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#9ca3af',
            maxWidth: '700px',
            margin: '0 auto',
            animation: 'fadeInUp 1s ease-out 0.8s backwards'
          }}>
            Real-world experience in <span style={{color: internships[activeCard].color, fontWeight: '700', transition: 'color 0.6s ease'}}>cutting-edge technologies</span>
          </p>

          {/* Decorative Line */}
          <div style={{
            width: '150px',
            height: '3px',
            background: `linear-gradient(90deg, transparent, ${internships[activeCard].color}, transparent)`,
            margin: '30px auto 0',
            borderRadius: '10px',
            animation: 'fadeInUp 1s ease-out 0.9s backwards',
            transition: 'background 0.6s ease'
          }} />
        </div>

        {/* Internship Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(30px, 4vw, 40px)',
          marginBottom: '80px',
          padding: '0 10px'
        }}>
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              onMouseEnter={() => setHoveredCard(internship.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCard(index)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: (activeCard === index || hoveredCard === internship.id) ? 'translateY(-12px)' : 'translateY(0)',
                opacity: isVisible ? 1 : 0,
                animation: `fadeInUp 1s ease-out ${0.6 + index * 0.15}s backwards`
              }}
            >
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                inset: '-35px',
                borderRadius: '36px',
                background: internship.gradient,
                filter: 'blur(50px)',
                opacity: (activeCard === index || hoveredCard === internship.id) ? 0.6 : 0,
                transition: 'opacity 0.5s'
              }} />

              {/* Pulse Ring */}
              {activeCard === index && (
                <div style={{
                  position: 'absolute',
                  inset: '-18px',
                  borderRadius: '32px',
                  border: `3px solid ${internship.color}`,
                  zIndex: 0,
                  animation: 'ringExpand 2.5s ease-out infinite'
                }} />
              )}

              <div style={{
                position: 'relative',
                background: 'rgba(10,10,10,0.95)',
                borderRadius: '28px',
                border: `2px solid ${(activeCard === index || hoveredCard === internship.id) ? internship.color : 'rgba(255,255,255,0.1)'}`,
                backdropFilter: 'blur(30px)',
                overflow: 'hidden',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: (activeCard === index || hoveredCard === internship.id) 
                  ? `0 30px 80px ${internship.color}40` 
                  : '0 10px 40px rgba(0,0,0,0.5)'
              }}>
                {/* Card Background */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: internship.gradient,
                  opacity: hoveredCard === internship.id ? 0.12 : 0.06,
                  transition: 'opacity 0.5s'
                }} />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: '900',
                  color: '#000',
                  background: internship.color,
                  boxShadow: `0 5px 20px ${internship.color}60`,
                  zIndex: 10,
                  letterSpacing: '0.05em'
                }}>
                  {internship.badge}
                </div>

                {/* Certificate Image */}
                <div
                  onClick={(e) => { e.stopPropagation(); setModalOpen(internship); }}
                  style={{
                    position: 'relative',
                    height: '240px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={getDriveThumbnail(internship.certId)}
                    alt={internship.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transform: (activeCard === index || hoveredCard === internship.id) ? 'scale(1.08)' : 'scale(1)'
                    }}
                    loading="lazy"
                  />

                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: (activeCard === index || hoveredCard === internship.id) ? 1 : 0,
                    transition: 'opacity 0.5s'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 28px',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(15px)',
                      borderRadius: '20px',
                      border: `2px solid ${internship.color}`,
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#fff'
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
                  zIndex: 1
                }}>
                  <h3 style={{
                    fontSize: '26px',
                    fontWeight: '800',
                    color: '#fff',
                    marginBottom: '8px',
                    lineHeight: 1.2
                  }}>
                    {internship.title}
                  </h3>
                  
                  <div style={{
                    fontSize: '14px',
                    color: '#9ca3af',
                    marginBottom: '6px'
                  }}>
                    {internship.company}
                  </div>
                  
                  <div style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: internship.color,
                    marginBottom: '20px'
                  }}>
                    {internship.period}
                  </div>

                  {/* Tech Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '24px'
                  }}>
                    {internship.tech.map((tech, i) => (
                      <div
                        key={i}
                        style={{
                          padding: '8px 14px',
                          fontSize: '12px',
                          fontWeight: '600',
                          border: `1px solid ${internship.color}40`,
                          background: `${internship.color}10`,
                          borderRadius: '10px',
                          color: '#e0e0e0',
                          animation: activeCard === index ? `slideIn 0.4s ease ${i * 0.08}s backwards` : 'none'
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginBottom: '24px'
                  }}>
                    {internship.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 12px',
                          background: 'rgba(255,255,255,0.04)',
                          borderRadius: '12px',
                          fontSize: '13px',
                          color: '#d0d0d0',
                          animation: activeCard === index ? `fadeInUp 0.5s ease ${i * 0.1}s backwards` : 'none'
                        }}
                      >
                        <CheckCircle2 style={{width: '16px', height: '16px', color: internship.color, flexShrink: 0}} />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Button */}
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
                      padding: '16px',
                      borderRadius: '16px',
                      border: 'none',
                      background: internship.gradient,
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      boxShadow: `0 10px 35px ${internship.color}40`
                    }}
                  >
                    <Award style={{width: '20px', height: '20px'}} />
                    <span>View Full Certificate</span>
                  </a>
                </div>

                {/* Corner Accents */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  width: '50px',
                  height: '50px',
                  borderTop: `3px solid ${internship.color}`,
                  borderLeft: `3px solid ${internship.color}`,
                  borderTopLeftRadius: '15px',
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: 'opacity 0.5s'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '15px',
                  width: '50px',
                  height: '50px',
                  borderBottom: `3px solid ${internship.color}`,
                  borderRight: `3px solid ${internship.color}`,
                  borderBottomRightRadius: '15px',
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: 'opacity 0.5s'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '28px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 1s'
        }}>
          {[
            { icon: Briefcase, label: "Internships", value: "3", color: "#06b6d4" },
            { icon: Calendar, label: "Total Duration", value: "8+ Months", color: "#a855f7" },
            { icon: Star, label: "Completion", value: "100%", color: "#10b981" }
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '36px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(25px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              textAlign: 'center',
              animation: `fadeInUp 1s ease-out ${1.5 + i * 0.15}s backwards`
            }}>
              <stat.icon style={{width: '32px', height: '32px', color: stat.color, marginBottom: '12px'}} />
              <div style={{
                fontSize: '40px',
                fontWeight: '900',
                color: stat.color,
                marginBottom: '8px',
                filter: 'drop-shadow(0 0 18px currentColor)'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#9ca3af',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.96)',
            backdropFilter: 'blur(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            animation: 'fadeInUp 0.4s ease-out'
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
              boxShadow: `0 50px 120px ${modalOpen.color}50`,
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            {/* Glow */}
            <div style={{
              position: 'absolute',
              inset: '-90px',
              background: `radial-gradient(circle, ${modalOpen.color}50, transparent 70%)`,
              filter: 'blur(90px)',
              animation: 'breathe 4s ease-in-out infinite'
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

            <button
              onClick={() => setModalOpen(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(239,68,68,0.9)',
                border: '3px solid rgba(255,255,255,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 12px 35px rgba(239,68,68,0.5)',
                transition: 'all 0.3s',
                zIndex: 3
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

export default Internships;