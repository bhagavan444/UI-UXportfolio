import { useState, useEffect, useRef } from 'react';
import { 
  Download, Eye, FileText, Award, Code, Rocket, Star, Sparkles, 
  X, CheckCircle, TrendingUp, Zap, Target, Brain, Flame, Trophy
} from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1BfrC-GloabR5mOXuPb8mjkKQmya5luDE/preview";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1BfrC-GloabR5mOXuPb8mjkKQmya5luDE";

export default function FuturisticResume() {
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState('preview');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    };

    const animate = () => {
      setTime(prev => prev + 0.016);
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const stats = [
    { icon: Award, value: '8.5+', label: 'CGPA', color: '#fbbf24', grad: 'linear-gradient(135deg, #fbbf24, #f59e0b)' },
    { icon: Code, value: '30+', label: 'Technologies', color: '#06b6d4', grad: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
    { icon: Rocket, value: '6+', label: 'Projects', color: '#a855f7', grad: 'linear-gradient(135deg, #a855f7, #9333ea)' },
    { icon: Star, value: '13+', label: 'Certificates', color: '#ec4899', grad: 'linear-gradient(135deg, #ec4899, #db2777)' }
  ];

  const skills = [
    { icon: '⚛️', name: 'React', color: '#06b6d4' },
    { icon: '🟢', name: 'Node.js', color: '#10b981' },
    { icon: '🍃', name: 'MongoDB', color: '#14b8a6' },
    { icon: '🐍', name: 'Python', color: '#f59e0b' },
    { icon: '🤖', name: 'AI/ML', color: '#a855f7' },
    { icon: '📘', name: 'TypeScript', color: '#3b82f6' }
  ];

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'system-ui, sans-serif'
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { filter: blur(80px) brightness(1); }
          50% { filter: blur(100px) brightness(1.5); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        @media (max-width: 768px) {
          .main-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .skills-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      {/* Dynamic Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Gradient orbs */}
        <div style={{
          position: 'absolute',
          width: '1000px',
          height: '1000px',
          top: '-20%',
          left: '-10%',
          background: `radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)`,
          animation: 'float 20s ease-in-out infinite, glow 10s ease-in-out infinite',
          transition: 'transform 0.3s ease',
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
        }} />
        
        <div style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          bottom: '-15%',
          right: '-10%',
          background: `radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)`,
          animation: 'float 25s ease-in-out infinite 5s, glow 12s ease-in-out infinite 3s',
          transition: 'transform 0.3s ease',
          transform: `translate(${-mousePos.x * 0.3}px, ${-mousePos.y * 0.3}px)`
        }} />

        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '40%',
          left: '50%',
          background: `radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)`,
          animation: 'float 30s ease-in-out infinite 10s, glow 15s ease-in-out infinite 5s',
          transform: 'translate(-50%, -50%)'
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.2
        }} />

        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: ['#3b82f6', '#a855f7', '#ec4899'][i % 3],
              borderRadius: '50%',
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite ${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`
            }}
          />
        ))}
      </div>

      <div ref={sectionRef} style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1600px',
        margin: '0 auto',
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 60px)'
      }}>
        
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(60px, 10vh, 100px)',
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? 'slideUp 1s ease-out' : 'none'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 32px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(20px)',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '32px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              animation: 'pulse 2s infinite',
              boxShadow: '0 0 15px #10b981'
            }} />
            <span style={{
              fontSize: '13px',
              fontWeight: '900',
              letterSpacing: '3px',
              color: '#fff'
            }}>
              PROFESSIONAL RESUME
            </span>
            <FileText size={20} style={{ color: '#3b82f6' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: '900',
            lineHeight: 1,
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #3b82f6, #a855f7, #ec4899, #f59e0b, #3b82f6)',
            backgroundSize: '300%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 8s linear infinite',
            textShadow: '0 0 80px rgba(59,130,246,0.5)'
          }}>
            Resume
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Production-grade <strong style={{ color: '#3b82f6' }}>AI/ML Engineer</strong> & 
            <strong style={{ color: '#a855f7' }}> Full-Stack Developer</strong> with proven expertise
          </p>
        </div>

        {/* Main Grid */}
        <div className="main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 3fr',
          gap: 'clamp(24px, 4vw, 48px)',
          marginBottom: '60px'
        }}>
          
          {/* Left Column - Stats & Actions */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(20px, 3vw, 32px)'
          }}>
            
            {/* Stats Cards */}
            <div className="stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? 'slideUp 0.8s ease-out 0.2s backwards' : 'none'
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    padding: 'clamp(20px, 4vw, 32px)',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                    e.currentTarget.style.boxShadow = `0 20px 60px -10px ${stat.color}60`;
                    e.currentTarget.style.borderColor = `${stat.color}60`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {/* Gradient glow */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: stat.grad,
                    opacity: 0.1,
                    filter: 'blur(30px)'
                  }} />
                  
                  <stat.icon 
                    size={28} 
                    style={{ 
                      color: stat.color,
                      marginBottom: '12px',
                      filter: `drop-shadow(0 0 10px ${stat.color}60)`,
                      position: 'relative',
                      zIndex: 1
                    }} 
                  />
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                    fontWeight: '900',
                    background: stat.grad,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '4px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    color: '#9ca3af',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div style={{
              padding: 'clamp(24px, 4vw, 36px)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? 'slideUp 0.8s ease-out 0.3s backwards' : 'none'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
                fontWeight: '900',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Zap size={24} style={{ color: '#fbbf24' }} />
                Core Skills
              </h3>

              <div className="skills-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px'
              }}>
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 'clamp(12px, 2vw, 16px)',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                      e.currentTarget.style.background = `${skill.color}15`;
                      e.currentTarget.style.borderColor = `${skill.color}50`;
                      e.currentTarget.style.boxShadow = `0 10px 30px -5px ${skill.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>
                      {skill.icon}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
                      fontWeight: '700',
                      color: '#fff',
                      textAlign: 'center'
                    }}>
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              opacity: isVisible ? 1 : 0,
              animation: isVisible ? 'slideUp 0.8s ease-out 0.4s backwards' : 'none'
            }}>
              <a
                href={RESUME_DOWNLOAD}
                style={{
                  padding: 'clamp(14px, 3vw, 18px) clamp(24px, 4vw, 36px)',
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed, #db2777)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  textDecoration: 'none',
                  boxShadow: '0 10px 40px -10px rgba(37,99,235,0.5)',
                  transition: 'all 0.3s ease',
                  border: '2px solid rgba(255,255,255,0.2)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(37,99,235,0.8)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(37,99,235,0.5)';
                }}
              >
                <Download size={22} />
                Download Resume
              </a>

              <button
                onClick={() => setShowModal(true)}
                style={{
                  padding: 'clamp(14px, 3vw, 18px) clamp(24px, 4vw, 36px)',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px -10px rgba(168,85,247,0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Eye size={22} />
                View Fullscreen
              </button>
            </div>
          </div>

          {/* Right Column - Resume Preview */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            animation: isVisible ? 'slideUp 0.8s ease-out 0.5s backwards' : 'none'
          }}>
            <div style={{ position: 'relative' }}>
              {/* Animated glow border */}
              <div style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '32px',
                background: 'conic-gradient(from 0deg, #3b82f6, #a855f7, #ec4899, #3b82f6)',
                animation: 'rotate 6s linear infinite',
                opacity: 0.5,
                filter: 'blur(20px)'
              }} />

              <div style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '2px solid rgba(255,255,255,0.2)',
                background: '#000',
                boxShadow: '0 30px 80px -10px rgba(0,0,0,0.7)'
              }}>
                {/* Status badges */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 20,
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(16,185,129,0.4)'
                }}>
                  <CheckCircle size={16} />
                  ATS: 87%
                </div>

                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 20,
                  padding: '8px 16px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: '#fff'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    animation: 'pulse 2s infinite',
                    boxShadow: '0 0 10px #10b981'
                  }} />
                  LIVE
                </div>

                {/* Resume iframe */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '8.5/11',
                  background: 'linear-gradient(135deg, #111827, #000)'
                }}>
                  <iframe
                    src={RESUME_URL}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    title="Resume Preview"
                  />
                  
                  {/* Scan line effect */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.1), transparent)',
                    height: '100px',
                    animation: 'scan 4s ease-in-out infinite',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Bottom stats bar */}
                <div style={{
                  padding: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(10px)',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  textAlign: 'center'
                }}>
                  {[
                    { icon: TrendingUp, value: '100+', label: 'Problems', color: '#10b981' },
                    { icon: Trophy, value: '4★', label: 'Rating', color: '#fbbf24' },
                    { icon: Target, value: '90%', label: 'Success', color: '#a855f7' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <item.icon 
                        size={20} 
                        style={{ 
                          color: item.color,
                          marginBottom: '4px',
                          filter: `drop-shadow(0 0 8px ${item.color}60)`
                        }} 
                      />
                      <div style={{
                        fontSize: '16px',
                        fontWeight: '900',
                        color: '#fff',
                        marginBottom: '2px'
                      }}>
                        {item.value}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#9ca3af',
                        fontWeight: '600'
                      }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(40px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(20px, 5vw, 40px)',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1200px',
              width: '100%',
              borderRadius: '32px',
              overflow: 'hidden',
              border: '3px solid rgba(255,255,255,0.2)',
              boxShadow: '0 50px 100px rgba(0,0,0,0.8)',
              animation: 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            <iframe
              src={RESUME_URL}
              style={{
                width: '100%',
                height: '90vh',
                border: 'none'
              }}
              title="Resume Fullscreen"
            />
            
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135 deg, #ef4444, #b91c1c)',
                borderRadius: '50%',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(239,68,68,0.5)',
                transition: 'all 0.3s ease'
              }}
            >
              <X size={28} color="#fff" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}