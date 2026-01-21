import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Brain, Cloud, Layers, Zap, Cpu, Globe, Sparkles, TrendingUp } from 'lucide-react';

const skills = [
  {
    id: 1,
    name: 'Full Stack Development',
    icon: Layers,
    level: 92,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#667eea',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript'],
    projects: 24,
    description: 'Building scalable web applications with modern frameworks'
  },
  {
    id: 2,
    name: 'Machine Learning',
    icon: Brain,
    level: 88,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#f093fb',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV'],
    projects: 18,
    description: 'Developing intelligent systems with deep learning'
  },
  {
    id: 3,
    name: 'Cloud Infrastructure',
    icon: Cloud,
    level: 85,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#4facfe',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    projects: 16,
    description: 'Deploying scalable cloud solutions'
  },
  {
    id: 4,
    name: 'Data Science',
    icon: Database,
    level: 90,
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    color: '#43e97b',
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Big Data'],
    projects: 22,
    description: 'Extracting insights from complex datasets'
  },
  {
    id: 5,
    name: 'AI & Deep Learning',
    icon: Sparkles,
    level: 87,
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    color: '#fa709a',
    technologies: ['Neural Networks', 'NLP', 'Computer Vision', 'GANs'],
    projects: 14,
    description: 'Creating intelligent AI-powered solutions'
  },
  {
    id: 6,
    name: 'Core Programming',
    icon: Code2,
    level: 94,
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    color: '#30cfd0',
    technologies: ['Python', 'JavaScript', 'Java', 'C++', 'Go'],
    projects: 32,
    description: 'Strong foundation in algorithms and design patterns'
  }
];

export default function ModernSkillsSection() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 150, 255, ${p.opacity})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
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

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #0a0a14, #1a1a2e)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: '"Inter", system-ui, sans-serif',
        padding: '4rem 2rem'
      }}
    >
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          animation: 'fadeInUp 0.8s ease-out'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.5rem',
            background: 'rgba(100, 150, 255, 0.1)',
            border: '1px solid rgba(100, 150, 255, 0.3)',
            borderRadius: '999px',
            marginBottom: '1.5rem',
            backdropFilter: 'blur(10px)'
          }}>
            <Zap size={16} style={{ color: '#6496ff' }} />
            <span style={{
              fontSize: '0.75rem',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#94a3b8'
            }}>
              Technical Expertise
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #fff 0%, #6496ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>
            My Skills & Expertise
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#94a3b8',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Passionate AI Engineer with expertise spanning Full Stack Development, 
            Machine Learning, and Cloud Infrastructure
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isActive = activeSkill === skill.id;

            return (
              <div
                key={skill.id}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{
                  position: 'relative',
                  background: 'rgba(20, 20, 35, 0.6)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '1.5rem',
                  border: isActive 
                    ? `2px solid ${skill.color}` 
                    : '2px solid rgba(255, 255, 255, 0.1)',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  animation: `fadeInUp ${0.6 + index * 0.1}s ease-out`,
                  transform: isActive ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: isActive 
                    ? `0 20px 60px ${skill.color}40, 0 0 0 1px ${skill.color}20` 
                    : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: skill.gradient,
                  opacity: isActive ? 1 : 0.5,
                  transition: 'opacity 0.3s ease'
                }} />

                {isActive && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${skill.color}15, transparent 50%)`,
                    pointerEvents: 'none',
                    transition: 'opacity 0.3s ease'
                  }} />
                )}

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1rem',
                    background: skill.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: isActive ? 'float 3s ease-in-out infinite' : 'none',
                    boxShadow: isActive ? `0 10px 30px ${skill.color}60` : 'none'
                  }}>
                    <Icon size={32} style={{ color: '#fff' }} />
                  </div>

                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '900',
                    background: skill.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {skill.level}%
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  marginBottom: '0.75rem',
                  color: '#fff'
                }}>
                  {skill.name}
                </h3>

                <p style={{
                  fontSize: '0.95rem',
                  color: '#94a3b8',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {skill.description}
                </p>

                <div style={{
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#64748b'
                    }}>
                      Proficiency
                    </span>
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: skill.color
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div style={{
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '999px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${skill.level}%`,
                      background: skill.gradient,
                      borderRadius: '999px',
                      transition: 'width 1s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      boxShadow: `0 0 10px ${skill.color}80`
                    }}>
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: isActive ? 'shimmer 2s infinite' : 'none'
                      }} />
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {skill.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.4rem 0.9rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: `1px solid ${isActive ? skill.color + '40' : 'rgba(255, 255, 255, 0.1)'}`,
                        borderRadius: '999px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: isActive ? skill.color : '#cbd5e1',
                        transition: 'all 0.3s ease',
                        animation: isActive ? `slideIn ${0.3 + i * 0.1}s ease-out` : 'none'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1rem',
                  background: `${skill.color}10`,
                  border: `1px solid ${skill.color}30`,
                  borderRadius: '0.75rem'
                }}>
                  <TrendingUp size={18} style={{ color: skill.color }} />
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    color: '#e2e8f0'
                  }}>
                    {skill.projects} Projects Completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          animation: 'fadeInUp 1s ease-out'
        }}>
          {[
            { label: 'Years Experience', value: '4+', icon: Cpu, gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
            { label: 'Projects', value: '126+', icon: Layers, gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
            { label: 'Technologies', value: '30+', icon: Globe, gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
            { label: 'Certifications', value: '12', icon: Sparkles, gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                style={{
                  padding: '2rem',
                  background: 'rgba(20, 20, 35, 0.6)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '1.25rem',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(100, 150, 255, 0.5)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(100, 150, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  margin: '0 auto 1rem',
                  borderRadius: '1rem',
                  background: stat.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Icon size={24} style={{ color: '#fff' }} />
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '900',
                  background: stat.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '0.5rem'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}