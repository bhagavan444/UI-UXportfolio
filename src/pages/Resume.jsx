import { useState, useEffect } from 'react';
import { Download, Eye, FileText, Award, Code, Rocket, Star, Sparkles, ExternalLink, CheckCircle, TrendingUp } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1BfrC-GloabR5mOXuPb8mjkKQmya5luDE/preview";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1BfrC-GloabR5mOXuPb8mjkKQmya5luDE";

export default function Resume() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div
      onMouseMove={(e) => setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })}
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes pulse-scale {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59,130,246,0.5),
                        0 0 40px rgba(139,92,246,0.3); 
          }
          50% { 
            box-shadow: 0 0 60px rgba(139,92,246,0.9),
                        0 0 100px rgba(236,72,153,0.6),
                        0 0 150px rgba(59,130,246,0.4); 
          }
        }
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer-bg {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes bounce-smooth {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes orbit {
          from { 
            transform: rotate(0deg) translateX(130px) rotate(0deg);
          }
          to { 
            transform: rotate(360deg) translateX(130px) rotate(-360deg);
          }
        }
        .animate-float {
          animation: float var(--duration, 15s) ease-in-out infinite;
        }
        .animate-pulse-scale {
          animation: pulse-scale 2s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate-slow var(--duration, 20s) linear infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer-bg 3s linear infinite;
        }
        .animate-bounce {
          animation: bounce-smooth 2s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-orbit {
          animation: orbit var(--duration, 15s) linear infinite;
        }
        
        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-strong {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Hover Effects */
        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        }
        .hover-scale {
          transition: all 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-glow {
          transition: all 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 40px currentColor;
        }
      `}</style>

      {/* Animated Background Layer */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Gradient Orbs */}
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent)',
            filter: 'blur(150px)',
            top: '-20%',
            left: '-10%',
            transform: `translate(${mousePos.x * 50}px, ${mousePos.y * 50}px)`,
            transition: 'transform 0.3s ease-out',
            '--duration': '10s',
          }}
        />
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent)',
            filter: 'blur(130px)',
            bottom: '-15%',
            right: '-10%',
            transform: `translate(${-mousePos.x * 40}px, ${-mousePos.y * 40}px)`,
            transition: 'transform 0.3s ease-out',
            animationDelay: '2s',
            '--duration': '12s',
          }}
        />
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(236,72,153,0.3), transparent)',
            filter: 'blur(120px)',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDelay: '4s',
            '--duration': '14s',
          }}
        />

        {/* Floating Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="animate-float"
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${['#3b82f6', '#8b5cf6', '#ec4899'][p.id % 3]}, transparent)`,
              '--duration': `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
            transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '80px 16px' }}>
        {/* Header */}
        <div className="animate-fade-in" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="glass" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 32px',
            borderRadius: '9999px',
            marginBottom: '32px',
          }}>
            <FileText className="animate-bounce" style={{ width: '24px', height: '24px', color: '#3b82f6' }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '900',
              letterSpacing: '0.1em',
              background: 'linear-gradient(90deg, #3b82f6, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              PROFESSIONAL RESUME
            </span>
            <Sparkles className="animate-pulse-scale" style={{ width: '20px', height: '20px', color: '#ec4899' }} />
          </div>

          <h1 className="animate-shimmer" style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: '900',
            marginBottom: '24px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Resume
          </h1>
          <p style={{ fontSize: '20px', color: '#9ca3af', maxWidth: '672px', margin: '0 auto' }}>
            Production-grade engineer with <span style={{ color: '#06b6d4', fontWeight: 'bold' }}>AI/ML</span> & <span style={{ color: '#a78bfa', fontWeight: 'bold' }}>Full-Stack</span> expertise
          </p>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '7fr 5fr' : '1fr',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Left Content */}
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px', animationDelay: '0.2s' }}>
            {/* Description Card */}
            <div className="glass hover-lift" style={{ padding: '32px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ fontSize: '30px', fontWeight: '900', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Award className="animate-bounce" style={{ width: '32px', height: '32px', color: '#fbbf24' }} />
                ATS-Optimized Resume
              </h3>
              
              <p style={{ color: '#d1d5db', lineHeight: '1.75', fontSize: '18px', marginBottom: '24px' }}>
                Professionally crafted resume highlighting <span style={{ color: '#06b6d4', fontWeight: '600' }}>MERN Stack</span>, <span style={{ color: '#a78bfa', fontWeight: '600' }}>Machine Learning</span>, and <span style={{ color: '#ec4899', fontWeight: '600' }}>production engineering</span>.
              </p>

              {/* Highlights Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {[
                  { icon: Award, text: '8.5+ CGPA', color: '#fbbf24' },
                  { icon: Code, text: '30+ Tech Stack', color: '#06b6d4' },
                  { icon: Rocket, text: '6 Projects', color: '#a78bfa' },
                  { icon: Star, text: '13+ Certificates', color: '#ec4899' },
                ].map((item, i) => (
                  <div key={i} className="glass hover-scale" style={{ padding: '16px', borderRadius: '12px', cursor: 'pointer' }}>
                    <item.icon className="hover-glow" style={{ width: '24px', height: '24px', color: item.color, marginBottom: '8px' }} />
                    <div style={{ color: '#fff', fontWeight: 'bold' }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glass hover-lift" style={{ padding: '32px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '32px', textAlign: 'center' }}>
                Technology Stack
              </h3>
              
              {/* Orbiting Icons */}
              <div style={{ position: 'relative', height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="animate-pulse-scale" style={{
                  position: 'relative',
                  zIndex: 10,
                  width: '96px',
                  height: '96px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                }}>
                  🚀
                </div>

                {[
                  { icon: '⚛️', name: 'React', grad: 'linear-gradient(135deg, #06b6d4, #3b82f6)' },
                  { icon: '🟢', name: 'Node.js', grad: 'linear-gradient(135deg, #34d399, #10b981)' },
                  { icon: '🍃', name: 'MongoDB', grad: 'linear-gradient(135deg, #10b981, #14b8a6)' },
                  { icon: '🐍', name: 'Python', grad: 'linear-gradient(135deg, #fbbf24, #f97316)' },
                  { icon: '🤖', name: 'AI/ML', grad: 'linear-gradient(135deg, #a78bfa, #ec4899)' },
                  { icon: '📘', name: 'TypeScript', grad: 'linear-gradient(135deg, #3b82f6, #4f46e5)' },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="animate-orbit"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      '--duration': `${15 + i * 2}s`,
                      animationDelay: `${-i * 2.5}s`,
                    }}
                  >
                    <div className="hover-scale" style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: tech.grad,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '32px',
                      cursor: 'pointer',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    }} title={tech.name}>
                      {tech.icon}
                    </div>
                  </div>
                ))}

                <div className="animate-rotate" style={{
                  position: 'absolute',
                  inset: 0,
                  border: '2px dashed rgba(255,255,255,0.1)',
                  borderRadius: '50%',
                  '--duration': '30s',
                }} />
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a
                href={RESUME_DOWNLOAD}
                className="animate-glow hover-lift"
                style={{
                  flex: 1,
                  minWidth: '200px',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  background: 'linear-gradient(90deg, #2563eb, #7c3aed, #db2777)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  textDecoration: 'none',
                }}
              >
                <Download style={{ width: '24px', height: '24px' }} />
                Download Resume
              </a>

              <button
                onClick={() => setShowModal(true)}
                className="glass-strong hover-lift"
                style={{
                  flex: 1,
                  minWidth: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                <Eye className="animate-pulse-scale" style={{ width: '24px', height: '24px' }} />
                View Full Size
              </button>
            </div>
          </div>

          {/* Right Preview */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div style={{ position: 'sticky', top: '96px' }}>
              <div style={{ position: 'relative' }}>
                {/* Rotating Glow */}
                <div className="animate-rotate" style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: '24px',
                  background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
                  filter: 'blur(40px)',
                  opacity: 0.75,
                  '--duration': '4s',
                }} />

                {/* Card */}
                <div style={{ position: 'relative', borderRadius: '24px', background: '#000', border: '2px solid rgba(255,255,255,0.2)', overflow: 'hidden' }}>
                  {/* Badges */}
                  <div className="animate-glow" style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    zIndex: 20,
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #10b981, #059669)',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <CheckCircle style={{ width: '16px', height: '16px' }} />
                    ATS Score: 87%
                  </div>

                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    zIndex: 20,
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    <div className="animate-pulse-scale" style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399' }} />
                    Live Preview
                  </div>

                  {/* Resume Preview */}
                  <div style={{ position: 'relative', aspectRatio: '8.5/11', background: 'linear-gradient(135deg, #111827, #000)' }}>
                    <iframe
                      src={RESUME_URL}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      title="Resume Preview"
                    />
                  </div>

                  {/* Stats */}
                  <div className="glass" style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                      {[
                        { icon: TrendingUp, value: '100+', label: 'Problems', color: '#34d399' },
                        { icon: Star, value: '4★', label: 'Rating', color: '#fbbf24' },
                        { icon: Rocket, value: '6+', label: 'Projects', color: '#a78bfa' },
                      ].map((stat, i) => (
                        <div key={i} className="hover-scale" style={{ cursor: 'pointer' }}>
                          <stat.icon className="animate-bounce" style={{ width: '20px', height: '20px', color: stat.color, margin: '0 auto 4px' }} />
                          <div style={{ fontSize: '14px', fontWeight: 'bold' }}>{stat.value}</div>
                          <div style={{ fontSize: '12px', color: '#9ca3af' }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
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
          className="animate-fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            background: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(24px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1152px',
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '4px solid rgba(255,255,255,0.2)',
              boxShadow: '0 50px 100px rgba(0,0,0,0.5)',
            }}
          >
            <iframe
              src={RESUME_URL}
              style={{ width: '100%', height: '85vh', border: 'none' }}
              title="Resume Fullscreen"
            />
            
            <button
              onClick={() => setShowModal(false)}
              className="hover-scale"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '16px',
                background: 'linear-gradient(90deg, #ef4444, #ec4899)',
                borderRadius: '50%',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <ExternalLink style={{ width: '24px', height: '24px', transform: 'rotate(45deg)' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}