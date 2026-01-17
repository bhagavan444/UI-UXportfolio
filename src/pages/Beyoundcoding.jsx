import { useState, useEffect, useRef } from 'react';
import { BookOpen, Music, Coffee, Dumbbell, Camera, Film, Gamepad2, Sparkles, Zap, TrendingUp, Heart, Brain, Code2, Rocket, Crown, Flame, Star, Target, Award, Cpu, Volume2, Timer, Activity } from "lucide-react";

const hobbiesData = [
  { 
    title: "Reading", 
    desc: "Deep diving into software architecture and system design",
    icon: BookOpen, 
    color: '#1a1a1a',
    glow: 'rgba(26,26,26,0.6)',
    stats: [
      { label: "Books/Year", value: "24+", icon: BookOpen },
      { label: "Topics", value: "Tech", icon: Target },
      { label: "Impact", value: "High", icon: Award }
    ]
  },
  { 
    title: "Music", 
    desc: "Enhancing focus and creativity through rhythm",
    icon: Music, 
    color: '#ff006e',
    glow: 'rgba(255,0,110,0.6)',
    stats: [
      { label: "Daily Hours", value: "4+", icon: Timer },
      { label: "Genres", value: "Various", icon: Volume2 },
      { label: "Boost", value: "200%", icon: Activity }
    ]
  },
  { 
    title: "Coffee", 
    desc: "Fueling late-night coding marathons",
    icon: Coffee, 
    color: '#ffffff',
    glow: 'rgba(255,255,255,0.6)',
    stats: [
      { label: "Cups/Day", value: "3+", icon: Coffee },
      { label: "Type", value: "Espresso", icon: Zap },
      { label: "Energy", value: "∞", icon: Rocket }
    ]
  },
  { 
    title: "Gaming", 
    desc: "Sharpening strategic thinking and reflexes",
    icon: Gamepad2, 
    color: '#8338ec',
    glow: 'rgba(131,56,236,0.6)',
    stats: [
      { label: "Strategy", value: "95%", icon: Brain },
      { label: "Reflexes", value: "88%", icon: Zap },
      { label: "Focus", value: "92%", icon: Target }
    ]
  },
  { 
    title: "Movies", 
    desc: "Learning storytelling and user experience",
    icon: Film, 
    color: '#fb5607',
    glow: 'rgba(251,86,7,0.6)',
    stats: [
      { label: "Weekly", value: "5+", icon: Film },
      { label: "Genres", value: "All", icon: Star },
      { label: "Learning", value: "UX", icon: Brain }
    ]
  },
  { 
    title: "Fitness", 
    desc: "Building mental clarity through physical strength",
    icon: Dumbbell, 
    color: '#06ffa5',
    glow: 'rgba(6,255,165,0.6)',
    stats: [
      { label: "Weekly", value: "5x", icon: Dumbbell },
      { label: "Strength", value: "90%", icon: TrendingUp },
      { label: "Clarity", value: "100%", icon: Brain }
    ]
  },
  { 
    title: "Photography", 
    desc: "Capturing moments and visual composition",
    icon: Camera, 
    color: '#1a1a1a',
    glow: 'rgba(26,26,26,0.6)',
    stats: [
      { label: "Photos", value: "500+", icon: Camera },
      { label: "Style", value: "Urban", icon: Star },
      { label: "Skill", value: "Pro", icon: Award }
    ]
  },
];

export default function BeyondCoding() {
  const [activeCard, setActiveCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    const particles = [...Array(100)].map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2,
      color: ['#00d4ff', '#ff006e', '#8338ec', '#06ffa5', '#ffbe0b'][Math.floor(Math.random() * 5)]
    }));

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', setSize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <div
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{
        minHeight: '100vh',
        background: '#000000',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px var(--glow), 0 0 40px var(--glow); } 50% { box-shadow: 0 0 40px var(--glow), 0 0 80px var(--glow); } }
        @keyframes neon { 0%, 100% { text-shadow: 0 0 10px var(--neon), 0 0 20px var(--neon); } 50% { text-shadow: 0 0 20px var(--neon), 0 0 40px var(--neon), 0 0 60px var(--neon); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ping { 0% { transform: scale(1); opacity: 1; } 75%, 100% { transform: scale(2); opacity: 0; } }
        @keyframes wave { 0%, 100% { height: 30%; } 50% { height: 100%; } }
        @keyframes steam { 0% { transform: translateY(0) scaleY(1); opacity: 0.8; } 100% { transform: translateY(-100px) scaleY(1.5); opacity: 0; } }
        @keyframes progressBar { from { width: 0; } }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .slideIn { animation: slideIn 0.8s ease-out forwards; }
        .glow { animation: glow 2s ease-in-out infinite; }
        .neon { animation: neon 1.5s ease-in-out infinite; }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); background-size: 200% 100%; animation: shimmer 2s infinite; }
        * { -webkit-tap-highlight-color: transparent; }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @media (max-width: 768px) {
          .grid-bg { background-size: 25px 25px; }
        }
      `}</style>

      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0, display: 'none' }} />
      
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: 1, opacity: 0, display: 'none' }} />

      <div style={{
        position: 'fixed',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'transparent',
        left: mousePos.x - 400,
        top: mousePos.y - 400,
        pointerEvents: 'none',
        filter: 'blur(80px)',
        transition: 'left 0.1s, top 0.1s',
        zIndex: 2,
        display: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        
        {/* Hero Section */}
        <div className="slideIn" style={{ 
          textAlign: 'center', 
          padding: 'clamp(40px, 10vw, 80px) 20px clamp(30px, 8vw, 60px)',
        }}>
          
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '30px' }}>
            <div className="pulse glow" style={{
              width: 'clamp(100px, 20vw, 140px)',
              height: 'clamp(100px, 20vw, 140px)',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00d4ff, #ff006e, #8338ec)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--glow': 'rgba(0,212,255,0.8)',
            }}>
              <Crown style={{ 
                width: 'clamp(50px, 10vw, 70px)', 
                height: 'clamp(50px, 10vw, 70px)', 
                color: '#fff' 
              }} />
            </div>

            {[...Array(8)].map((_, i) => (
              <div key={i} className="pulse" style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(${-80}px)`,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: ['#00d4ff', '#ff006e', '#8338ec', '#06ffa5'][i % 4],
                boxShadow: `0 0 15px ${['#00d4ff', '#ff006e', '#8338ec', '#06ffa5'][i % 4]}`,
                animationDelay: `${i * 0.2}s`,
              }} />
            ))}
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'clamp(10px, 2vw, 15px)',
            padding: 'clamp(10px, 2vw, 16px) clamp(20px, 4vw, 32px)',
            borderRadius: '50px',
            background: 'rgba(0,212,255,0.1)',
            border: '2px solid rgba(0,212,255,0.3)',
            backdropFilter: 'blur(20px)',
            marginBottom: 'clamp(20px, 4vw, 30px)',
          }}>
            <Sparkles className="pulse" style={{ 
              width: 'clamp(18px, 4vw, 24px)', 
              height: 'clamp(18px, 4vw, 24px)', 
              color: '#00d4ff' 
            }} />
            <span style={{
              fontSize: 'clamp(0.7rem, 2vw, 0.95rem)',
              fontWeight: '900',
              color: '#00d4ff',
              letterSpacing: '0.15em',
            }}>
              HOLISTIC DEVELOPER
            </span>
            <Flame className="pulse" style={{ 
              width: 'clamp(18px, 4vw, 24px)', 
              height: 'clamp(18px, 4vw, 24px)', 
              color: '#ff006e' 
            }} />
          </div>

          <h1 className="neon" style={{
            fontSize: 'clamp(2rem, 10vw, 5rem)',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #00d4ff, #ff006e, #8338ec, #06ffa5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 'clamp(15px, 3vw, 25px)',
            '--neon': '#00d4ff',
            letterSpacing: '0.02em',
          }}>
            Beyond the Code
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            The passions and habits that fuel innovation and excellence
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(15px, 3vw, 30px)',
            marginTop: 'clamp(30px, 6vw, 50px)',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: Rocket, value: '7+', label: 'Passions', color: '#00d4ff' },
              { icon: Activity, value: '24/7', label: 'Active', color: '#ff006e' },
              { icon: TrendingUp, value: '100%', label: 'Balanced', color: '#06ffa5' },
            ].map((stat, i) => (
              <div key={i} className="slideIn" style={{
                padding: 'clamp(12px, 3vw, 20px)',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.05)',
                border: `2px solid ${stat.color}40`,
                backdropFilter: 'blur(10px)',
                minWidth: 'clamp(100px, 20vw, 140px)',
                animationDelay: `${0.3 + i * 0.1}s`,
              }}>
                <stat.icon style={{ 
                  width: 'clamp(24px, 5vw, 32px)', 
                  height: 'clamp(24px, 5vw, 32px)', 
                  color: stat.color,
                  margin: '0 auto 8px',
                  display: 'block',
                }} />
                <div style={{ 
                  fontSize: 'clamp(1.2rem, 4vw, 2rem)', 
                  fontWeight: 'bold', 
                  color: stat.color,
                  marginBottom: '4px',
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', 
                  color: '#94a3b8',
                  fontWeight: '600',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(20px, 4vw, 30px)',
          marginBottom: 'clamp(40px, 8vw, 80px)',
        }}>
          {hobbiesData.map((hobby, i) => {
            const Icon = hobby.icon;
            const isActive = activeCard === i;

            return (
              <div
                key={i}
                className="slideIn"
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(i)}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(10,14,39,0.6)',
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${isActive ? hobby.color : 'rgba(255,255,255,0.1)'}`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isActive ? 'translateY(-12px) scale(1.02)' : 'translateY(0)',
                  boxShadow: isActive 
                    ? `0 25px 60px ${hobby.glow}, 0 0 40px ${hobby.glow}` 
                    : '0 10px 30px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  animationDelay: `${0.6 + i * 0.1}s`,
                }}
              >
                {isActive && (
                  <div className="shimmer" style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                  }} />
                )}

                <div style={{ padding: 'clamp(20px, 4vw, 30px)', position: 'relative', zIndex: 1 }}>
                  
                  {/* Icon */}
                  <div className={isActive ? 'float' : ''} style={{
                    width: 'clamp(70px, 15vw, 90px)',
                    height: 'clamp(70px, 15vw, 90px)',
                    margin: '0 auto 20px',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${hobby.color}, ${hobby.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: isActive ? `0 15px 40px ${hobby.glow}` : `0 8px 20px ${hobby.glow}`,
                    transition: 'all 0.5s',
                  }}>
                    <Icon style={{ 
                      width: 'clamp(35px, 8vw, 45px)', 
                      height: 'clamp(35px, 8vw, 45px)', 
                      color: '#fff',
                      filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))',
                    }} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
                    fontWeight: '900',
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: '12px',
                    textShadow: isActive ? `0 0 20px ${hobby.color}` : 'none',
                  }}>
                    {hobby.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                    color: '#cbd5e1',
                    textAlign: 'center',
                    lineHeight: '1.6',
                    marginBottom: isActive ? '20px' : '0',
                    transition: 'all 0.3s',
                  }}>
                    {hobby.desc}
                  </p>

                  {/* Stats - Show on Active */}
                  {isActive && (
                    <div style={{
                      marginTop: '20px',
                      paddingTop: '20px',
                      borderTop: `2px solid ${hobby.color}40`,
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '12px',
                    }}>
                      {hobby.stats.map((stat, si) => (
                        <div key={si} className="slideIn" style={{
                          textAlign: 'center',
                          animationDelay: `${si * 0.1}s`,
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            margin: '0 auto 8px',
                            borderRadius: '50%',
                            background: `${hobby.color}30`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: `2px solid ${hobby.color}60`,
                          }}>
                            <stat.icon style={{ 
                              width: '20px', 
                              height: '20px', 
                              color: hobby.color 
                            }} />
                          </div>
                          <div style={{
                            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                            fontWeight: 'bold',
                            color: hobby.color,
                            marginBottom: '4px',
                          }}>
                            {stat.value}
                          </div>
                          <div style={{
                            fontSize: 'clamp(0.65rem, 2vw, 0.75rem)',
                            color: '#94a3b8',
                            fontWeight: '600',
                          }}>
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Status Indicator */}
                  <div className={isActive ? 'pulse' : ''} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: isActive ? '16px' : '12px',
                    height: isActive ? '16px' : '12px',
                    borderRadius: '50%',
                    background: hobby.color,
                    boxShadow: `0 0 ${isActive ? '20px' : '10px'} ${hobby.color}`,
                    transition: 'all 0.3s',
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="slideIn" style={{
          textAlign: 'center',
          padding: 'clamp(30px, 6vw, 60px) 20px',
          animationDelay: '1.2s',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'clamp(15px, 3vw, 25px)',
            padding: 'clamp(15px, 3vw, 25px) clamp(25px, 5vw, 40px)',
            borderRadius: '20px',
            background: 'rgba(0,212,255,0.1)',
            border: '2px solid rgba(0,212,255,0.3)',
            backdropFilter: 'blur(20px)',
            marginBottom: '20px',
          }}>
            <Code2 className="pulse" style={{ 
              width: 'clamp(28px, 6vw, 40px)', 
              height: 'clamp(28px, 6vw, 40px)', 
              color: '#00d4ff' 
            }} />
            <span style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              fontWeight: '900',
              background: 'linear-gradient(90deg, #fff, #00d4ff, #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Balance × Focus = Excellence
            </span>
            <Rocket className="pulse" style={{ 
              width: 'clamp(28px, 6vw, 40px)', 
              height: 'clamp(28px, 6vw, 40px)', 
              color: '#ff006e' 
            }} />
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(10px, 2vw, 15px)',
            flexWrap: 'wrap',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
            color: '#94a3b8',
          }}>
            <Heart className="pulse" style={{ 
              width: 'clamp(20px, 4vw, 28px)', 
              height: 'clamp(20px, 4vw, 28px)', 
              color: '#ff006e' 
            }} />
            <span style={{ fontWeight: '600' }}>Life is code, but code isn't life</span>
            <Brain className="pulse" style={{ 
              width: 'clamp(20px, 4vw, 28px)', 
              height: 'clamp(20px, 4vw, 28px)', 
              color: '#8338ec' 
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}