import { useState, useEffect, useRef } from "react";
import { 
  Code2, Database, Cloud, Brain, Wrench, Zap, Sparkles, TrendingUp, 
  Terminal, Cpu, Network, Rocket, Star, Award, ChevronRight, Play
} from "lucide-react";

const talents = [
  {
    id: 1,
    category: "AI & Machine Learning",
    level: 95,
    color: "#00f5ff",
    gradient: "linear-gradient(135deg, #00f5ff, #0080ff)",
    icon: Brain,
    description: "Building intelligent systems with cutting-edge ML/DL frameworks",
    techs: [
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "Keras", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
    ]
  },
  {
    id: 2,
    category: "Full-Stack Development",
    level: 92,
    color: "#ff00ff",
    gradient: "linear-gradient(135deg, #ff00ff, #ff0080)",
    icon: Code2,
    description: "Creating seamless web experiences from frontend to backend",
    techs: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ]
  },
  {
    id: 3,
    category: "Cloud & DevOps",
    level: 88,
    color: "#ffaa00",
    gradient: "linear-gradient(135deg, #ffaa00, #ff6600)",
    icon: Cloud,
    description: "Deploying scalable applications with modern cloud infrastructure",
    techs: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" }
    ]
  },
  {
    id: 4,
    category: "Backend Engineering",
    level: 90,
    color: "#00ff88",
    gradient: "linear-gradient(135deg, #00ff88, #00cc66)",
    icon: Database,
    description: "Architecting robust server-side solutions and APIs",
    techs: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
    ]
  }
];

export default function AdvancedSkillsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveIndex(current => (current + 1) % talents.length);
          return 0;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30
    });
  };

  const activeTalent = talents[activeIndex];
  const Icon = activeTalent.icon;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 60px)'
      }}
    >
      <style>{`
        @keyframes float { 
          0%, 100% { transform: translate3d(0, 0, 0); } 
          50% { transform: translate3d(0, -20px, 0); }
        }
        @keyframes pulse { 
          0%, 100% { transform: scale(1); opacity: 1; } 
          50% { transform: scale(1.05); opacity: 0.8; } 
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
          0%, 100% { filter: blur(60px) brightness(1); }
          50% { filter: blur(80px) brightness(1.5); }
        }
        @keyframes scan {
          0% { left: -50%; }
          100% { left: 150%; }
        }
        @keyframes techPop {
          0% { opacity: 0; transform: scale(0.7) rotateY(180deg); }
          60% { transform: scale(1.1) rotateY(0deg); }
          100% { opacity: 1; transform: scale(1) rotateY(0deg); }
        }
        @keyframes borderFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #00f5ff, #ff00ff, #ffaa00, #00ff88, #00f5ff);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 6s linear infinite;
        }
        
        .tech-card-3d {
          transform-style: preserve-3d;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @media (max-width: 768px) {
          .grid-main { grid-template-columns: 1fr !important; }
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Dynamic Gradient Orbs */}
        <div style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          top: '-15%',
          left: '-10%',
          background: `radial-gradient(circle, ${activeTalent.color}15, transparent 70%)`,
          animation: 'float 20s ease-in-out infinite, glow 8s ease-in-out infinite',
          transition: 'background 0.8s ease',
          transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0)`
        }} />
        
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          bottom: '-10%',
          right: '-10%',
          background: `radial-gradient(circle, ${activeTalent.color}20, transparent 70%)`,
          animation: 'float 25s ease-in-out infinite 5s, glow 10s ease-in-out infinite 3s',
          transition: 'background 0.8s ease',
          transform: `translate3d(${mousePos.x * -1}px, ${mousePos.y * -1}px, 0)`
        }} />

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(${activeTalent.color}20 1px, transparent 1px),
            linear-gradient(90deg, ${activeTalent.color}20 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.15,
          transition: 'background-image 0.5s ease'
        }} />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: activeTalent.color,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `float ${Math.random() * 10 + 15}s ease-in-out infinite ${Math.random() * 5}s`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px ${activeTalent.color}`,
              transition: 'background 0.5s, box-shadow 0.5s'
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', maxWidth: '1600px', margin: '0 auto' }}>
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
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(20px)',
            borderRadius: '999px',
            border: `1px solid ${activeTalent.color}30`,
            marginBottom: '32px',
            boxShadow: `0 0 30px ${activeTalent.color}20`,
            transition: 'all 0.5s ease'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#ff0000',
              animation: 'pulse 1.5s infinite',
              boxShadow: '0 0 15px #ff0000'
            }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '900',
              letterSpacing: '3px',
              color: '#fff'
            }}>
              LIVE SKILLS BROADCAST
            </span>
            <Sparkles size={18} style={{ color: activeTalent.color }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: '900',
            lineHeight: 1,
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Technical
            <br />
            <span className="gradient-text">Arsenal</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: '#9ca3af',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            <strong style={{ color: activeTalent.color }}>Real-time expertise</strong> across AI, 
            Full-Stack, Cloud & Backend engineering
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid-main" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: 'clamp(24px, 4vw, 40px)',
          marginBottom: '60px'
        }}>
          {/* Main Skills Display */}
          <div style={{
            position: 'relative',
            padding: 'clamp(32px, 5vw, 48px)',
            background: 'rgba(10,10,20,0.6)',
            backdropFilter: 'blur(30px) saturate(180%)',
            borderRadius: '32px',
            border: `2px solid ${activeTalent.color}40`,
            boxShadow: `0 20px 60px -10px ${activeTalent.color}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
            overflow: 'hidden',
            transition: 'all 0.5s ease'
          }}>
            {/* Animated Border */}
            <div style={{
              position: 'absolute',
              inset: -2,
              background: activeTalent.gradient,
              borderRadius: '32px',
              opacity: 0.3,
              filter: 'blur(20px)',
              animation: 'rotate 8s linear infinite'
            }} />

            {/* Header with Icon */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '32px',
              position: 'relative'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '20px',
                background: activeTalent.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 15px 40px -10px ${activeTalent.color}60`,
                animation: 'pulse 3s infinite',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <Icon size={40} style={{ color: '#fff', position: 'relative', zIndex: 2 }} />
                
                {/* Ripple effect */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  border: `2px solid ${activeTalent.color}`,
                  borderRadius: '20px',
                  animation: 'ripple 2s infinite'
                }} />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                  fontWeight: '900',
                  marginBottom: '8px',
                  color: activeTalent.color,
                  textShadow: `0 0 30px ${activeTalent.color}50`
                }}>
                  {activeTalent.category}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  lineHeight: 1.5
                }}>
                  {activeTalent.description}
                </p>
              </div>
            </div>

            {/* Proficiency Meter */}
            <div style={{ marginBottom: '36px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  color: '#6b7280',
                  textTransform: 'uppercase'
                }}>
                  Proficiency Level
                </span>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  background: activeTalent.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: `0 0 30px ${activeTalent.color}50`
                }}>
                  {activeTalent.level}%
                </div>
              </div>

              <div style={{
                position: 'relative',
                height: '24px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '999px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{
                  height: '100%',
                  width: `${activeTalent.level}%`,
                  background: activeTalent.gradient,
                  borderRadius: '999px',
                  boxShadow: `0 0 30px ${activeTalent.color}70, inset 0 1px 0 rgba(255,255,255,0.3)`,
                  position: 'relative',
                  transition: 'width 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  overflow: 'hidden'
                }}>
                  {/* Shimmer effect */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    animation: 'shimmer 2s infinite'
                  }} />
                </div>

                {/* Scan line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  width: '4px',
                  height: '100%',
                  background: activeTalent.color,
                  filter: 'blur(4px)',
                  boxShadow: `0 0 20px ${activeTalent.color}`,
                  animation: 'scan 3s ease-in-out infinite'
                }} />
              </div>
            </div>

            {/* Technologies Grid */}
            <div className="tech-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              {activeTalent.techs.map((tech, i) => (
                <div
                  key={i}
                  className="tech-card-3d"
                  onMouseEnter={() => setHoveredTech(i)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{
                    position: 'relative',
                    padding: '24px',
                    background: hoveredTech === i 
                      ? `${activeTalent.color}10` 
                      : 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: hoveredTech === i 
                      ? `2px solid ${activeTalent.color}` 
                      : '2px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transform: hoveredTech === i ? 'translateY(-8px) scale(1.05)' : 'scale(1)',
                    boxShadow: hoveredTech === i 
                      ? `0 20px 40px -10px ${activeTalent.color}50, 0 0 30px ${activeTalent.color}30`
                      : '0 4px 12px rgba(0,0,0,0.3)',
                    animation: `techPop 0.6s ease-out ${i * 0.1}s backwards`,
                    overflow: 'hidden'
                  }}
                >
                  {/* Corner accents */}
                  {hoveredTech === i && (
                    <>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '12px',
                        height: '12px',
                        borderTop: `3px solid ${activeTalent.color}`,
                        borderLeft: `3px solid ${activeTalent.color}`,
                        opacity: 0.7
                      }} />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '12px',
                        height: '12px',
                        borderTop: `3px solid ${activeTalent.color}`,
                        borderRight: `3px solid ${activeTalent.color}`,
                        opacity: 0.7
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '12px',
                        height: '12px',
                        borderBottom: `3px solid ${activeTalent.color}`,
                        borderLeft: `3px solid ${activeTalent.color}`,
                        opacity: 0.7
                      }} />
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '12px',
                        height: '12px',
                        borderBottom: `3px solid ${activeTalent.color}`,
                        borderRight: `3px solid ${activeTalent.color}`,
                        opacity: 0.7
                      }} />
                    </>
                  )}

                  <div style={{
                    width: '56px',
                    height: '56px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: hoveredTech === i 
                          ? `drop-shadow(0 0 15px ${activeTalent.color})` 
                          : 'none',
                        transition: 'filter 0.3s ease'
                      }}
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{
                      display: 'none',
                      width: '56px',
                      height: '56px',
                      background: activeTalent.gradient,
                      borderRadius: '12px',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      fontWeight: '900',
                      color: '#fff'
                    }}>
                      {tech.name[0]}
                    </div>
                  </div>

                  <span style={{
                    fontSize: '13px',
                    fontWeight: '700',
                    textAlign: 'center',
                    color: hoveredTech === i ? activeTalent.color : '#fff',
                    transition: 'color 0.3s ease'
                  }}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Navigator */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {talents.map((talent, i) => {
              const TalentIcon = talent.icon;
              const isActive = i === activeIndex;
              
              return (
                <button
                  key={talent.id}
                  onClick={() => {
                    setActiveIndex(i);
                    setProgress(0);
                  }}
                  style={{
                    position: 'relative',
                    padding: '24px',
                    background: isActive 
                      ? `${talent.color}08` 
                      : 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: isActive 
                      ? `2px solid ${talent.color}` 
                      : '2px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: isActive ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isActive 
                      ? `0 15px 40px -10px ${talent.color}40, 0 0 30px ${talent.color}20`
                      : 'none'
                  }}
                >
                  {/* Vertical indicator */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '4px',
                    background: talent.gradient,
                    opacity: isActive ? 1 : 0.3,
                    transition: 'opacity 0.3s ease'
                  }} />

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    marginBottom: '12px',
                    paddingLeft: '12px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: isActive ? talent.gradient : 'rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}>
                      <TalentIcon size={24} style={{ 
                        color: isActive ? '#fff' : talent.color,
                        transition: 'color 0.3s ease'
                      }} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: talent.color,
                        marginBottom: '4px',
                        letterSpacing: '1px'
                      }}>
                        LEVEL {String(talent.id).padStart(2, '0')}
                      </div>
                      <div style={{
                        fontSize: '15px',
                        fontWeight: '700',
                        color: '#fff',
                        marginBottom: '4px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {talent.category}
                      </div>
                      <div style={{
                        fontSize: '18px',
                        fontWeight: '900',
                        color: talent.color
                      }}>
                        {talent.level}%
                      </div>
                    </div>

                    <ChevronRight 
                      size={24} 
                      style={{ 
                        color: talent.color,
                        opacity: isActive ? 1 : 0.3,
                        transform: isActive ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'all 0.3s ease'
                      }} 
                    />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '4px',
                    width: `${isActive ? progress : 0}%`,
                    background: talent.gradient,
                    borderRadius: '0 0 18px 0',
                    transition: 'width 0.3s ease' 
                  }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}