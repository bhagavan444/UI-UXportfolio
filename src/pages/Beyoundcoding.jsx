import { BookOpen, Music, Coffee, Dumbbell, Camera, Film, Gamepad2, Sparkles, Zap, TrendingUp, Heart, Brain, Code2, Rocket, Crown, Flame, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function BeyondCoding() {
  const [view, setView] = useState(false);
  const [active, setActive] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  const items = [
    { title: "Reading", desc: "Deep diving into software architecture and system design", icon: BookOpen, grad: "linear-gradient(135deg, #3b82f6, #06b6d4)", glow: "rgba(59,130,246,0.6)" },
    { title: "Music", desc: "Enhancing focus and creativity through rhythm", icon: Music, grad: "linear-gradient(135deg, #ec4899, #a855f7)", glow: "rgba(236,72,153,0.6)" },
    { title: "Coffee", desc: "Fueling late-night coding marathons", icon: Coffee, grad: "linear-gradient(135deg, #f97316, #f59e0b)", glow: "rgba(251,146,60,0.6)" },
    { title: "Gaming", desc: "Sharpening strategic thinking and reflexes", icon: Gamepad2, grad: "linear-gradient(135deg, #6366f1, #8b5cf6)", glow: "rgba(99,102,241,0.6)" },
    { title: "Movies", desc: "Learning storytelling and user experience", icon: Film, grad: "linear-gradient(135deg, #ef4444, #f43f5e)", glow: "rgba(239,68,68,0.6)" },
    { title: "Fitness", desc: "Building mental clarity through physical strength", icon: Dumbbell, grad: "linear-gradient(135deg, #22c55e, #10b981)", glow: "rgba(34,197,94,0.6)" },
    { title: "Photography", desc: "Capturing moments and visual composition", icon: Camera, grad: "linear-gradient(135deg, #0ea5e9, #3b82f6)", glow: "rgba(14,165,233,0.6)" },
  ];

  useEffect(() => {
    setTimeout(() => setView(true), 100);
    const p = Array.from({length: 50}, (_, i) => ({
      id: i, 
      left: Math.random() * 100, 
      top: Math.random() * 100, 
      delay: Math.random() * 5, 
      duration: 15 + Math.random() * 20
    }));
    setParticles(p);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / 30, 
      y: (e.clientY - rect.top - rect.height / 2) / 30
    });
  };

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #050816, #0a0f2e, #020617)',
    overflow: 'hidden',
    padding: '8rem 1rem',
  };

  const orb1Style = {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '600px',
    height: '600px',
    background: 'rgba(168, 85, 247, 0.3)',
    borderRadius: '50%',
    filter: 'blur(150px)',
    animation: 'orbPulse1 10s ease-in-out infinite',
  };

  const orb2Style = {
    position: 'absolute',
    bottom: '25%',
    right: '25%',
    width: '600px',
    height: '600px',
    background: 'rgba(236, 72, 153, 0.3)',
    borderRadius: '50%',
    filter: 'blur(150px)',
    animation: 'orbPulse2 12s ease-in-out infinite 1s',
  };

  const orb3Style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '700px',
    background: 'rgba(6, 182, 212, 0.2)',
    borderRadius: '50%',
    filter: 'blur(180px)',
    animation: 'orbPulse3 14s ease-in-out infinite 2s',
  };

  const gridStyle = {
    position: 'absolute',
    inset: 0,
    opacity: 0.25,
    backgroundImage: 'linear-gradient(rgba(168,85,247,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.4) 1px, transparent 1px)',
    backgroundSize: '80px 80px',
    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
    transition: 'transform 0.3s ease-out',
    animation: 'gridDrift 30s linear infinite',
  };

  const contentStyle = {
    position: 'relative',
    maxWidth: '1280px',
    margin: '0 auto',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '6rem',
    opacity: view ? 1 : 0,
    transform: view ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
    transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3), rgba(6, 182, 212, 0.3))',
    border: '2px solid rgba(168, 85, 247, 0.5)',
    backdropFilter: 'blur(20px)',
    marginBottom: '2.5rem',
    boxShadow: '0 0 60px rgba(168,85,247,0.6)',
    animation: 'badgeFloat 4s ease-in-out infinite',
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    fontWeight: '900',
    marginBottom: '2rem',
    lineHeight: '1.2',
  };

  const titleLine1Style = {
    display: 'block',
    color: 'white',
    marginBottom: '0.75rem',
    animation: 'titleGlow 3s ease-in-out infinite',
  };

  const titleLine2Style = {
    position: 'relative',
    display: 'inline-block',
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #a78bfa, #f0abfc, #67e8f9)',
    backgroundSize: '300% 300%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: 'drop-shadow(0 0 40px rgba(168,85,247,0.8))',
    animation: 'gradientFlow 6s ease infinite',
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: '-1rem',
    left: 0,
    right: 0,
    height: '0.5rem',
    background: 'linear-gradient(to right, #a855f7, #ec4899, #06b6d4)',
    borderRadius: '9999px',
    boxShadow: '0 0 20px rgba(168,85,247,0.8)',
    animation: 'underlineGrow 1.2s ease-out 1s forwards',
    transformOrigin: 'left',
    transform: 'scaleX(0)',
  };

  const subtitleStyle = {
    fontSize: '1.25rem',
    color: '#cbd5e1',
    maxWidth: '48rem',
    margin: '0 auto',
    animation: 'fadeSlideUp 1s ease 0.5s backwards',
    lineHeight: '1.75',
  };

  const cardsContainerStyle = {
    position: 'relative',
    perspective: '2000px',
    opacity: view ? 1 : 0,
    transform: view ? 'none' : 'translateZ(-100px)',
    transition: 'all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
  };

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const getCardStyle = (i, isActive) => ({
    position: 'relative',
    animation: `cardRise 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.15}s backwards`,
    transformStyle: 'preserve-3d',
  });

  const getCardGlowStyle = (isActive, glow) => ({
    position: 'absolute',
    inset: '-0.5rem',
    background: glow,
    filter: 'blur(3rem)',
    borderRadius: '1.5rem',
    opacity: isActive ? 0.6 : 0,
    transition: 'all 0.7s',
    animation: isActive ? 'glowPulse 3s ease-in-out infinite' : 'none',
  });

  const getCardInnerStyle = (isActive, glow) => ({
    position: 'relative',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
    backdropFilter: 'blur(20px)',
    border: `2px solid ${isActive ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)'}`,
    borderRadius: '1.5rem',
    padding: '2rem',
    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    overflow: 'hidden',
    transform: isActive ? 'translateZ(40px) rotateX(8deg) rotateY(-8deg) scale(1.1)' : 'translateZ(0)',
    boxShadow: isActive ? `0 30px 80px ${glow}` : 'none',
  });

  const shimmerStyle = {
    position: 'absolute',
    inset: 0,
    opacity: 0.2,
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
    backgroundSize: '200% 200%',
    animation: 'shimmerSweep 3s linear infinite',
  };

  const getIconContainerStyle = (isActive) => ({
    position: 'relative',
    marginBottom: '2rem',
    transition: 'all 0.7s',
    transform: isActive ? 'scale(1.25)' : 'scale(1)',
  });

  const getIconBoxStyle = (isActive, grad, glow) => ({
    width: '6rem',
    height: '6rem',
    margin: '0 auto',
    borderRadius: '1rem',
    background: grad,
    padding: '1.25rem',
    boxShadow: isActive ? `0 20px 60px ${glow}` : 'none',
    animation: isActive ? 'iconWiggle 1s ease-in-out infinite' : 'iconFloat 3s ease-in-out infinite',
  });

  const iconStyle = {
    width: '100%',
    height: '100%',
    color: 'white',
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))',
  };

  const getCardTitleStyle = (isActive) => ({
    fontSize: '1.5rem',
    fontWeight: '900',
    color: 'white',
    marginBottom: '1rem',
    textAlign: 'center',
    transition: 'all 0.3s',
    animation: isActive ? 'textGlow 2s ease-in-out infinite' : 'none',
  });

  const cardDescStyle = {
    fontSize: '1rem',
    color: '#cbd5e1',
    lineHeight: '1.75',
    textAlign: 'center',
    transition: 'color 0.3s',
  };

  const getStatusDotStyle = (isActive, grad, glow) => ({
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    width: '1rem',
    height: '1rem',
    borderRadius: '50%',
    background: grad,
    transition: 'all 0.5s',
    transform: isActive ? 'scale(2)' : 'scale(1)',
    opacity: isActive ? 1 : 0.6,
    boxShadow: isActive ? `0 0 20px ${glow}` : 'none',
    animation: isActive ? 'pulsePremium 2s ease-in-out infinite' : 'none',
  });

  const footerStyle = {
    textAlign: 'center',
    marginTop: '6rem',
    opacity: view ? 1 : 0,
    transition: 'opacity 1.5s ease-out 1s',
  };

  const footerBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1.25rem 2.5rem',
    borderRadius: '1rem',
    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2), rgba(6, 182, 212, 0.2))',
    border: '2px solid rgba(168, 85, 247, 0.4)',
    backdropFilter: 'blur(20px)',
    marginBottom: '2rem',
    boxShadow: '0 0 50px rgba(168,85,247,0.5)',
    animation: 'footerFloat 4s ease-in-out infinite',
  };

  const footerTextStyle = {
    fontSize: '1.5rem',
    fontWeight: '900',
    background: 'linear-gradient(to right, white, #e9d5ff, white)',
    backgroundSize: '200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'textShimmer 4s ease infinite',
  };

  const footerSubStyle = {
    fontSize: '1rem',
    color: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
  };

  const detailsContainerStyle = {
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '2px solid rgba(255,255,255,0.2)',
  };

  const waveBarStyle = (idx) => ({
    width: '0.625rem',
    background: 'linear-gradient(to top, #ec4899, #a855f7)',
    borderRadius: '9999px',
    boxShadow: '0 0 10px rgba(236,72,153,0.6)',
    animation: `wave 0.8s ease-in-out infinite`,
    animationDelay: `${idx * 0.08}s`,
    minHeight: '25%',
  });

  const steamStyle = (idx) => ({
    position: 'absolute',
    bottom: 0,
    left: `${30 + idx * 10}%`,
    width: '0.625rem',
    height: '4rem',
    background: 'linear-gradient(to top, #f97316, transparent)',
    borderRadius: '9999px',
    filter: 'blur(4px)',
    animation: 'steamRise 3s ease-in-out infinite',
    animationDelay: `${idx * 0.3}s`,
  });

  const skillBarStyle = (val, grad, glow, idx) => ({
    height: '0.75rem',
    background: grad,
    borderRadius: '9999px',
    boxShadow: `0 0 20px ${glow}`,
    width: `${val}%`,
    animation: 'progressFill 1.5s ease-out backwards',
    animationDelay: `${idx * 0.2}s`,
  });

  const iconBadgeStyle = (grad, glow, idx) => ({
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    background: grad,
    border: '2px solid rgba(34,197,94,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 20px ${glow}`,
    animation: 'iconBounce 2s ease-in-out infinite',
    animationDelay: `${idx * 0.2}s`,
  });

  const dotStyle = (grad, glow, idx) => ({
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    background: grad,
    boxShadow: `0 0 10px ${glow}`,
    animation: 'dotPing 2s ease-in-out infinite',
    animationDelay: `${idx * 0.2}s`,
  });

  return (
    <div onMouseMove={handleMouseMove} style={containerStyle}>
      <div style={{position: 'absolute', inset: 0}}>
        <div style={orb1Style} />
        <div style={orb2Style} />
        <div style={orb3Style} />
      </div>

      <div style={gridStyle} />

      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          width: '0.5rem',
          height: '0.5rem',
          borderRadius: '50%',
          left: `${p.left}%`,
          top: `${p.top}%`,
          background: `radial-gradient(circle, ${['#06B6D4', '#A855F7', '#EC4899'][p.id % 3]}, transparent)`,
          animation: 'particleOrbit linear infinite',
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`,
          opacity: 0.7,
        }} />
      ))}

      <div style={contentStyle}>
        <div style={headerStyle}>
          <div style={badgeStyle}>
            <Crown style={{width: '1.5rem', height: '1.5rem', color: '#fbbf24', animation: 'crownRotate 8s ease-in-out infinite'}} />
            <Sparkles style={{width: '1.25rem', height: '1.25rem', color: '#a78bfa', animation: 'sparkleDance 2s ease-in-out infinite'}} />
            <span style={{fontSize: '0.875rem', fontWeight: '900', color: '#e9d5ff', letterSpacing: '0.1em', animation: 'textGlow 2s ease-in-out infinite'}}>HOLISTIC ENGINEERING</span>
            <div style={{position: 'relative', width: '0.75rem', height: '0.75rem'}}>
              <div style={{position: 'absolute', inset: 0, borderRadius: '50%', background: '#a78bfa', animation: 'pingMega 2s cubic-bezier(0,0,0.2,1) infinite'}} />
              <div style={{position: 'absolute', inset: 0, borderRadius: '50%', background: '#a78bfa'}} />
            </div>
            <Flame style={{width: '1.25rem', height: '1.25rem', color: '#fb923c', animation: 'flameWild 1.5s ease-in-out infinite'}} />
          </div>

          <h1 style={titleStyle}>
            <span style={titleLine1Style}>Beyond the</span>
            <span style={titleLine2Style}>
              <span style={gradientTextStyle}>Code Editor</span>
              <div style={underlineStyle} />
              <Star style={{position: 'absolute', top: '-0.75rem', right: '-0.75rem', width: '2rem', height: '2rem', color: '#fbbf24', animation: 'starTwinkle 2s ease-in-out infinite'}} />
            </span>
          </h1>

          <p style={subtitleStyle}>
            The habits and passions that fuel innovation and excellence
          </p>
        </div>

        <div style={cardsContainerStyle}>
          <div style={gridContainerStyle}>
            {items.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;

              return (
                <div key={i} style={getCardStyle(i, isActive)}>
                  <div style={getCardGlowStyle(isActive, item.glow)} />
                  
                  <div
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                    style={getCardInnerStyle(isActive, item.glow)}
                  >
                    <div style={shimmerStyle} />
                    
                    <div style={getIconContainerStyle(isActive)}>
                      <div style={getIconBoxStyle(isActive, item.grad, item.glow)}>
                        <Icon style={iconStyle} />
                      </div>
                      {isActive && <Sparkles style={{position: 'absolute', top: '-0.5rem', right: '-0.5rem', width: '1.5rem', height: '1.5rem', color: 'white', animation: 'sparkleSpinMega 2s linear infinite'}} />}
                    </div>

                    <h3 style={getCardTitleStyle(isActive)}>{item.title}</h3>
                    <p style={cardDescStyle}>{item.desc}</p>

                    {isActive && (
                      <div style={detailsContainerStyle}>
                        {item.icon === Music && (
                          <div style={{display: 'flex', gap: '0.375rem', height: '5rem', alignItems: 'flex-end', justifyContent: 'center'}}>
                            {[...Array(12)].map((_, idx) => (
                              <div key={idx} style={waveBarStyle(idx)} />
                            ))}
                          </div>
                        )}

                        {item.icon === Coffee && (
                          <div style={{position: 'relative', height: '5rem', display: 'flex', justifyContent: 'center'}}>
                            {[...Array(5)].map((_, idx) => (
                              <div key={idx} style={steamStyle(idx)} />
                            ))}
                          </div>
                        )}

                        {item.icon === Gamepad2 && (
                          <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                            {[{ label: "Strategy", val: 85 }, { label: "Focus", val: 90 }].map((s, idx) => (
                              <div key={idx}>
                                <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem'}}>
                                  <span style={{fontWeight: '700'}}>{s.label}</span>
                                  <span style={{fontWeight: '900', color: '#c7d2fe'}}>{s.val}%</span>
                                </div>
                                <div style={{height: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)'}}>
                                  <div style={skillBarStyle(s.val, item.grad, item.glow, idx)} />
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.icon === Dumbbell && (
                          <div style={{display: 'flex', justifyContent: 'center', gap: '1.25rem'}}>
                            {[Dumbbell, TrendingUp, Zap].map((S, idx) => (
                              <div key={idx} style={iconBadgeStyle(item.grad, item.glow, idx)}>
                                <S style={{width: '1.5rem', height: '1.5rem', color: 'white'}} />
                              </div>
                            ))}
                          </div>
                        )}

                        {(item.icon === BookOpen || item.icon === Film || item.icon === Camera) && (
                          <div style={{display: 'flex', justifyContent: 'center', gap: '0.75rem'}}>
                            {[...Array(5)].map((_, idx) => (
                              <div key={idx} style={dotStyle(item.grad, item.glow, idx)} />
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div style={getStatusDotStyle(isActive, item.grad, item.glow)} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={footerStyle}>
          <div style={footerBadgeStyle}>
            <Code2 style={{width: '1.75rem', height: '1.75rem', color: '#a78bfa', animation: 'codePulse 2s ease-in-out infinite'}} />
            <p style={footerTextStyle}>
              Great Code + Great Habits = Innovation
            </p>
            <Rocket style={{width: '1.75rem', height: '1.75rem', color: '#67e8f9', animation: 'rocketLaunch 2s ease-in-out infinite'}} />
          </div>
          <p style={footerSubStyle}>
            <Heart style={{width: '1.5rem', height: '1.5rem', color: '#f472b6', animation: 'heartBeat 1.5s ease-in-out infinite'}} />
            <span style={{fontWeight: '600'}}>Balance creates excellence</span>
            <Brain style={{width: '1.5rem', height: '1.5rem', color: '#a78bfa', animation: 'brainPulse 3s ease-in-out infinite'}} />
          </p>
        </div>
      </div>

      <style>{`
        @keyframes orbPulse1{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.5;transform:scale(1.15)}}
        @keyframes orbPulse2{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.5;transform:scale(1.15)}}
        @keyframes orbPulse3{0%,100%{opacity:0.2;transform:translate(-50%,-50%) scale(1)}50%{opacity:0.4;transform:translate(-50%,-50%) scale(1.15)}}
        @keyframes gridDrift{0%{background-position:0 0}100%{background-position:80px 80px}}
        @keyframes particleOrbit{0%{transform:translate(0,0) rotate(0deg)}100%{transform:translate(60px,40px) rotate(360deg)}}
        @keyframes badgeFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-12px) scale(1.05)}}
        @keyframes crownRotate{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.2)}100%{transform:rotate(360deg) scale(1)}}
        @keyframes sparkleDance{0%,100%{transform:rotate(0deg) scale(0.8)}50%{transform:rotate(180deg) scale(1.3)}}
        @keyframes textGlow{0%,100%{text-shadow:0 0 20px rgba(168,85,247,0.8)}50%{text-shadow:0 0 40px rgba(168,85,247,1),0 0 60px rgba(236,72,153,0.8)}}
        @keyframes pingMega{0%{opacity:1;transform:scale(1)}75%,100%{opacity:0;transform:scale(3)}}
        @keyframes flameWild{0%,100%{transform:translateY(0) scale(1) rotate(0deg)}50%{transform:translateY(-4px) scale(1.3) rotate(10deg)}}
        @keyframes titleGlow{0%,100%{text-shadow:0 0 30px rgba(255,255,255,0.7)}50%{text-shadow:0 0 60px rgba(255,255,255,1),0 0 90px rgba(168,85,247,0.9)}}
        @keyframes gradientFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes underlineGrow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        @keyframes starTwinkle{0%,100%{opacity:0.5;transform:scale(0.8) rotate(0deg)}50%{opacity:1;transform:scale(1.3) rotate(180deg)}}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes cardRise{from{opacity:0;transform:translateY(80px) rotateX(30deg) scale(0.9)}to{opacity:1;transform:translateY(0) rotateX(0) scale(1)}}
        @keyframes glowPulse{0%,100%{opacity:0.6;transform:scale(1)}50%{opacity:0.9;transform:scale(1.1)}}
        @keyframes shimmerSweep{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes iconWiggle{0%,100%{transform:rotate(-5deg) scale(1)}50%{transform:rotate(5deg) scale(1.1)}}
        @keyframes iconFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes pulsePremium{0%,100%{opacity:0.7;transform:scale(1)}50%{opacity:1;transform:scale(1.15)}}
        @keyframes sparkleSpinMega{0%{transform:rotate(0deg) scale(0.8)}100%{transform:rotate(360deg) scale(1.2)}}
        @keyframes wave{0%,100%{height:25%}50%{height:100%}}
        @keyframes steamRise{0%{transform:translateY(0) scale(1);opacity:0.7}100%{transform:translateY(-70px) scale(1.8);opacity:0}}
        @keyframes progressFill{from{width:0}}
        @keyframes iconBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes dotPing{0%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:0.5}100%{transform:scale(2);opacity:0}}
        @keyframes footerFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes codePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}
        @keyframes textShimmer{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
        @keyframes rocketLaunch{0%,100%{transform:translateY(0) rotate(-45deg)}50%{transform:translateY(-8px) rotate(-35deg)}}
        @keyframes heartBeat{0%,100%{transform:scale(1)}25%{transform:scale(1.3)}50%{transform:scale(1)}75%{transform:scale(1.2)}}
        @keyframes brainPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:0.8}}
        `}</style>
    </div>
  );
}