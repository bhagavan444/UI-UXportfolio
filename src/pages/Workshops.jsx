import { useState, useEffect } from "react";
import {
  Smartphone, Code, Brain, Cpu, Crown, Zap, ArrowRight, Calendar,
  Users, X, Sparkles, Star, Rocket, Award, CheckCircle, Play
} from "lucide-react";

const workshops = [
  {
    title: "Mobile App Development",
    icon: Smartphone,
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    color: "#22d3ee",
    desc: "Build production-grade cross-platform apps with React Native & Flutter.",
    skills: ["React Native", "Flutter", "Firebase", "App Store Deploy"],
    slots: 25,
    enrolled: 489,
    duration: "8 Weeks",
    level: "Intermediate",
    featured: true
  },
  {
    title: "Full-Stack Engineering",
    icon: Code,
    gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    color: "#a855f7",
    desc: "Master Next.js 14, TypeScript, GraphQL & cloud-native backends.",
    skills: ["Next.js 14", "TypeScript", "GraphQL", "PostgreSQL"],
    slots: 30,
    enrolled: 642,
    duration: "12 Weeks",
    level: "Beginner → Expert",
    featured: false
  },
  {
    title: "Machine Learning Pro",
    icon: Brain,
    gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    color: "#10b981",
    desc: "Real-world ML pipelines, MLOps & production model deployment.",
    skills: ["Python ML", "MLOps", "Feature Eng", "Time Series"],
    slots: 20,
    enrolled: 573,
    duration: "10 Weeks",
    level: "Intermediate",
    featured: false
  },
  {
    title: "Deep Learning & Gen AI",
    icon: Cpu,
    gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
    color: "#f59e0b",
    desc: "Transformers, Diffusion Models, LLM fine-tuning & RAG systems.",
    skills: ["PyTorch", "Transformers", "Stable Diffusion", "RAG"],
    slots: 18,
    enrolled: 521,
    duration: "12 Weeks",
    level: "Advanced",
    featured: true
  }
];

export default function EliteWorkshops() {
  const [selected, setSelected] = useState(null);
  const [hover, setHover] = useState(null);
  const [visible, setVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 1024) {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    }
  };

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const duration = 1500;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target]);
    return <span>{count.toLocaleString()}</span>;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a001a 0%, #001433 50%, #0a0028 100%)',
        color: 'white',
        overflow: 'hidden',
        padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)'
      }}
    >
      <style>{`
        @keyframes floatWorkshop { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes rotateGlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulseGlow { 0%, 100% { box-shadow: 0 5px 25px rgba(168,85,247,0.3); } 50% { box-shadow: 0 10px 50px rgba(168,85,247,0.6); } }
        @keyframes shimmerSlide { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        @keyframes iconBounce { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(5deg); } }
      `}</style>

      {/* Animated Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Dynamic Gradient Orbs */}
        <div style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          top: '-15%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)',
          filter: 'blur(100px)',
          animation: 'floatWorkshop 20s ease-in-out infinite',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.5s ease-out'
        }} />
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          bottom: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)',
          filter: 'blur(90px)',
          animation: 'floatWorkshop 25s ease-in-out infinite',
          animationDelay: '3s',
          transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
          transition: 'transform 0.5s ease-out'
        }} />

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.3
        }} />

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              borderRadius: '50%',
              background: `${workshops[i % workshops.length].color}15`,
              border: `2px solid ${workshops[i % workshops.length].color}30`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatWorkshop ${15 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.4
            }}
          />
        ))}
      </div>

      <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto', zIndex: 1 }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(50px, 8vw, 80px)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-50px)',
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          {/* Animated Icon */}
          <div style={{
            fontSize: 'clamp(4rem, 12vw, 7rem)',
            marginBottom: '24px',
            animation: 'iconBounce 4s ease-in-out infinite',
            filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.6))'
          }}>
            🎓
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: '900',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
            background: 'linear-gradient(135deg, #22d3ee, #a855f7, #ec4899, #22d3ee)',
            backgroundSize: '300% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmerSlide 4s linear infinite'
          }}>
            Elite Workshops
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            color: '#cbd5e1',
            maxWidth: '700px',
            margin: '0 auto 50px',
            lineHeight: 1.7
          }}>
            Transform into an <span style={{ color: '#a855f7', fontWeight: '700' }}>industry-leading engineer</span> through 
            intensive, <span style={{ color: '#22d3ee', fontWeight: '700' }}>mentor-led programs</span>
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(12px, 4vw, 24px)',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {[
              { icon: Users, value: '2,225+', label: 'Students', color: '#a855f7' },
              { icon: Award, value: '98%', label: 'Success', color: '#22d3ee' },
              { icon: Rocket, value: '40+', label: 'Projects', color: '#10b981' }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  padding: 'clamp(14px, 4vw, 20px) clamp(24px, 6vw, 36px)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${stat.color}40`,
                  borderRadius: '20px',
                  animation: `pulseGlow 3s ease-in-out ${i * 0.3}s infinite`,
                  overflow: 'hidden'
                }}
              >
                {/* Rotating Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: '-80%',
                  background: `conic-gradient(from 0deg, transparent, ${stat.color}30, transparent)`,
                  animation: 'rotateGlow 6s linear infinite'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <stat.icon size={window.innerWidth < 640 ? 18 : 24} color={stat.color} />
                  <div>
                    <div style={{
                      fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                      fontWeight: '900',
                      color: stat.color
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      color: '#94a3b8',
                      fontWeight: '600',
                      letterSpacing: '0.05em'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Workshops Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(24px, 5vw, 40px)'
        }}>
          {workshops.map((ws, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHover(idx)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setSelected(ws)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                animation: `slideInUp 0.8s ease ${idx * 0.15}s backwards`,
                transform: hover === idx ? 'translateY(-12px) scale(1.02)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                inset: '-40px',
                background: `radial-gradient(circle at 50% 50%, ${ws.color}40, transparent 70%)`,
                filter: 'blur(60px)',
                opacity: hover === idx ? 1 : 0,
                transition: 'opacity 0.5s',
                pointerEvents: 'none'
              }} />

              {/* Card */}
              <div style={{
                position: 'relative',
                padding: 'clamp(28px, 6vw, 40px)',
                background: 'rgba(15,15,40,0.7)',
                backdropFilter: 'blur(25px)',
                borderRadius: '28px',
                border: hover === idx ? `2px solid ${ws.color}` : '2px solid rgba(168,85,247,0.15)',
                overflow: 'hidden',
                boxShadow: hover === idx 
                  ? `0 40px 100px ${ws.color}50` 
                  : '0 20px 60px rgba(0,0,0,0.4)',
                transition: 'all 0.5s'
              }}>
                {/* Background Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: ws.gradient,
                  opacity: hover === idx ? 0.15 : 0.06,
                  transition: 'opacity 0.5s',
                  mixBlendMode: 'screen'
                }} />

                {/* Shimmer Effect */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                  backgroundSize: '200% 100%',
                  animation: hover === idx ? 'shimmerSlide 2s infinite' : 'none',
                  pointerEvents: 'none'
                }} />

                {/* Featured Badge */}
                {ws.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                    borderRadius: '20px',
                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                    fontWeight: '800',
                    color: '#000',
                    boxShadow: '0 5px 25px rgba(251,191,36,0.6)',
                    animation: 'pulseGlow 2s ease-in-out infinite',
                    zIndex: 10
                  }}>
                    <Crown size={14} />
                    FEATURED
                  </div>
                )}

                {/* Icon Container */}
                <div style={{
                  position: 'relative',
                  width: 'clamp(90px, 20vw, 120px)',
                  height: 'clamp(90px, 20vw, 120px)',
                  background: ws.gradient,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 28px',
                  boxShadow: `0 20px 60px ${ws.color}60`,
                  transform: hover === idx ? 'scale(1.15) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  overflow: 'hidden'
                }}>
                  {/* Icon Glow */}
                  <div style={{
                    position: 'absolute',
                    inset: '-50%',
                    background: `conic-gradient(from 0deg, transparent, ${ws.color}80, transparent)`,
                    animation: hover === idx ? 'rotateGlow 3s linear infinite' : 'none'
                  }} />
                  
                  <ws.icon 
                    size={window.innerWidth < 640 ? 50 : 60} 
                    color="white" 
                    strokeWidth={2.5}
                    style={{ position: 'relative', zIndex: 1 }}
                  />
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                  fontWeight: '900',
                  background: ws.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '16px',
                  textAlign: 'center',
                  lineHeight: 1.2
                }}>
                  {ws.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: '#cbd5e1',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  textAlign: 'center',
                  opacity: hover === idx ? 1 : 0.9,
                  transition: 'opacity 0.4s'
                }}>
                  {ws.desc}
                </p>

                {/* Stats Row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 'clamp(16px, 4vw, 24px)',
                  marginBottom: '28px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    border: `1px solid ${ws.color}30`
                  }}>
                    <Calendar size={16} color={ws.color} />
                    <span style={{ 
                      fontWeight: '700', 
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      color: '#e2e8f0'
                    }}>
                      {ws.duration}
                    </span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    border: `1px solid ${ws.color}30`
                  }}>
                    <Users size={16} color={ws.color} />
                    <span style={{ 
                      fontWeight: '700', 
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      color: '#e2e8f0'
                    }}>
                      <Counter target={ws.enrolled} />+
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ textAlign: 'center' }}>
                  <button
                    style={{
                      padding: 'clamp(12px, 3vw, 16px) clamp(28px, 6vw, 40px)',
                      background: ws.gradient,
                      borderRadius: '999px',
                      color: 'white',
                      fontWeight: '800',
                      fontSize: 'clamp(13px, 3vw, 16px)',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: `0 10px 40px ${ws.color}60`,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      transition: 'all 0.3s',
                      transform: hover === idx ? 'scale(1.05)' : 'scale(1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    View Details <ArrowRight size={18} />
                  </button>
                </div>

                {/* Corner Accents */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '30px',
                  height: '30px',
                  borderTop: `3px solid ${ws.color}`,
                  borderLeft: `3px solid ${ws.color}`,
                  borderTopLeftRadius: '16px',
                  opacity: hover === idx ? 1 : 0.3,
                  transition: 'opacity 0.4s'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  width: '30px',
                  height: '30px',
                  borderBottom: `3px solid ${ws.color}`,
                  borderRight: `3px solid ${ws.color}`,
                  borderBottomRightRadius: '16px',
                  opacity: hover === idx ? 1 : 0.3,
                  transition: 'opacity 0.4s'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.94)',
            backdropFilter: 'blur(30px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 5vw, 40px)',
            zIndex: 1000,
            animation: 'slideInUp 0.3s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              background: 'rgba(15,15,40,0.98)',
              backdropFilter: 'blur(40px)',
              borderRadius: '32px',
              padding: 'clamp(32px, 7vw, 64px)',
              border: `3px solid ${selected.color}`,
              boxShadow: `0 50px 150px ${selected.color}70`,
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            {/* Animated Glow */}
            <div style={{
              position: 'absolute',
              inset: '-80px',
              background: `radial-gradient(circle at 50% 0%, ${selected.color}30, transparent 70%)`,
              filter: 'blur(100px)',
              animation: 'pulseGlow 4s ease-in-out infinite',
              pointerEvents: 'none'
            }} />

            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '2px solid rgba(255,255,255,0.2)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={24} />
            </button>

            {/* Header Section */}
            <div style={{
              position: 'relative',
              display: 'flex',
              gap: 'clamp(20px, 5vw, 48px)',
              alignItems: 'center',
              marginBottom: '40px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <div style={{
                width: 'clamp(100px, 25vw, 140px)',
                height: 'clamp(100px, 25vw, 140px)',
                background: selected.gradient,
                borderRadius: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 30px 80px ${selected.color}70`,
                flexShrink: 0
              }}>
                <selected.icon size={window.innerWidth < 640 ? 60 : 80} color="white" strokeWidth={2} />
              </div>

              <div style={{ flex: 1, minWidth: '250px' }}>
                <h2 style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: '900',
                  background: selected.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '12px',
                  lineHeight: 1.1
                }}>
                  {selected.title}
                </h2>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  lineHeight: 1.6
                }}>
                  {selected.desc}
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <h3 style={{
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              fontWeight: '800',
              marginBottom: '20px',
              color: '#fff'
            }}>
              Core Skills You'll Master
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px'
            }}>
              {selected.skills.map((skill, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: 'clamp(10px, 3vw, 14px) clamp(16px, 4vw, 22px)',
                    background: `${selected.color}15`,
                    border: `2px solid ${selected.color}40`,
                    borderRadius: '16px',
                    fontSize: 'clamp(13px, 3vw, 16px)',
                    fontWeight: '700',
                    color: '#e2e8f0'
                  }}
                >
                  <CheckCircle size={16} color={selected.color} />
                  {skill}
                </div>
              ))}
            </div>

            {/* Details Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              <div style={{
                padding: '20px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Calendar size={24} color={selected.color} style={{ marginBottom: '8px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Duration</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>{selected.duration}</div>
              </div>
              <div style={{
                padding: '20px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Users size={24} color={selected.color} style={{ marginBottom: '8px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} /> 
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Enrolled</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>
                  <Counter target={selected.enrolled} />
                </div>
              </div>
              <div style={{ 
                padding: '20px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Sparkles size={24} color={selected.color} style={{ marginBottom: '8px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Level</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>{selected.level}</div>
              </div>
              <div style={{ 
                padding: '20px',
                background: 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
              }}>
                <Star size={24} color={selected.color} style={{ marginBottom: '8px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />
                <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>Slots</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#fff' }}>{selected.slots}</div>
              </div>
            </div>
            {/* Enroll Button */}
            <div style={{ textAlign: 'center' }}>
              <button
                style={{
                  padding: 'clamp(14px, 4vw, 18px) clamp(32px, 7vw, 44px)',
                  background: selected.gradient,
                  borderRadius: '999px',
                  color: 'white',
                  fontWeight: '800',
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: `0 15px 50px ${selected.color}70`, 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 70px ${selected.color}90`;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 15px 50px ${selected.color}70`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Enroll Now <Play size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}