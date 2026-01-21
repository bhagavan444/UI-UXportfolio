import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Brain, Cloud, Layers, Zap, Cpu, Globe, Terminal, TrendingUp, Award, Star } from 'lucide-react';

const skills = [
  {
    id: 1,
    name: 'Full Stack Development',
    icon: Layers,
    level: 92,
    color: '#00ffff',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'TypeScript'],
    projects: 24,
    description: 'Building scalable web applications with modern frameworks'
  },
  {
    id: 2,
    name: 'Machine Learning',
    icon: Brain,
    level: 88,
    color: '#8a2be2',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV'],
    projects: 18,
    description: 'Developing intelligent systems with deep learning'
  },
  {
    id: 3,
    name: 'Cloud Infrastructure',
    icon: Cloud,
    level: 85,
    color: '#00ffff',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    projects: 16,
    description: 'Deploying scalable cloud solutions'
  },
  {
    id: 4,
    name: 'Data Science',
    icon: Database,
    level: 90,
    color: '#8a2be2',
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Big Data'],
    projects: 22,
    description: 'Extracting insights from complex datasets'
  },
  {
    id: 5,
    name: 'AI & Deep Learning',
    icon: Star,
    level: 87,
    color: '#00ffff',
    technologies: ['Neural Networks', 'NLP', 'Computer Vision', 'GANs'],
    projects: 14,
    description: 'Creating intelligent AI-powered solutions'
  },
  {
    id: 6,
    name: 'Core Programming',
    icon: Code2,
    level: 94,
    color: '#8a2be2',
    technologies: ['Python', 'JavaScript', 'Java', 'C++', 'Go'],
    projects: 32,
    description: 'Strong foundation in algorithms and design patterns'
  }
];

export default function CyberpunkSkills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        const progress = Math.max(0, Math.min(100, (1 - rect.top / window.innerHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0.3)');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fill();
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

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap');

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .skill-card {
          position: relative;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid rgba(0, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .skill-card:hover {
          transform: translateY(-10px);
          border-color: currentColor;
          box-shadow: 0 0 40px currentColor;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(0, 255, 255, 0.1) 50%,
            transparent 70%
          );
          animation: scan 4s linear infinite;
          pointer-events: none;
        }

        .tech-tag {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid currentColor;
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          font-family: 'Fira Code', monospace;
          font-size: 0.8rem;
          transition: all 0.3s;
        }

        .tech-tag:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px currentColor;
        }

        .neon-text {
          text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 40px currentColor;
        }

        .grid-bg {
          background-image: 
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      <div id="skills-section" style={{
        minHeight: '100vh',
        background: '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 2rem',
        fontFamily: "'Outfit', sans-serif"
      }}>
        {/* Grid Background */}
        <div className="grid-bg" style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.2,
          pointerEvents: 'none'
        }} />

        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Rotating Border */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '500px',
          height: '500px',
          border: '2px solid rgba(0, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 20s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem'
          }}>
            <div style={{
              display: 'inline-block',
              fontFamily: "'Fira Code', monospace",
              color: '#00ffff',
              fontSize: '1rem',
              marginBottom: '1rem',
              padding: '0.75rem 1.5rem',
              border: '2px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '30px',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              {'>'} skills.initialize()
            </div>

            <h1 className="neon-text" style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              color: '#00ffff',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              animation: 'slideIn 1s ease-out'
            }}>
              TECHNICAL ARSENAL
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              color: '#a0a0a0',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8,
              fontFamily: "'Fira Code', monospace"
            }}>
              [ Mastering the tools that power next-generation systems ]
            </p>
          </div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === skill.id;

              return (
                <div
                  key={skill.id}
                  className="skill-card"
                  onMouseEnter={() => setActiveSkill(skill.id)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{
                    padding: '2rem',
                    borderRadius: '20px',
                    color: skill.color,
                    animation: `slideIn ${0.8 + index * 0.1}s ease-out`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Top Border */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                    opacity: isActive ? 1 : 0.5
                  }} />

                  {/* Header */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      border: `2px solid ${skill.color}`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: isActive ? 'float 2s ease-in-out infinite' : 'none',
                      boxShadow: isActive ? `0 0 30px ${skill.color}` : 'none'
                    }}>
                      <Icon size={32} style={{ color: skill.color }} />
                    </div>

                    <div style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: skill.color,
                      textShadow: isActive ? `0 0 20px ${skill.color}` : 'none'
                    }}>
                      {skill.level}
                      <span style={{ fontSize: '1.5rem' }}>%</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#a0a0a0',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    fontFamily: "'Fira Code', monospace"
                  }}>
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.75rem',
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '0.85rem'
                    }}>
                      <span style={{ color: '#666' }}>PROFICIENCY</span>
                      <span style={{ color: skill.color }}>[{skill.level}%]</span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                      <div style={{
                        height: '100%',
                        width: isActive ? `${skill.level}%` : '0%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                        transition: 'width 1s cubic-bezier(0.22, 1, 0.36, 1)',
                        boxShadow: `0 0 10px ${skill.color}`,
                        position: 'relative'
                      }}>
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          width: '20px',
                          height: '100%',
                          background: 'rgba(255, 255, 255, 0.5)',
                          filter: 'blur(4px)'
                        }} />
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag"
                        style={{
                          color: isActive ? skill.color : '#666',
                          borderColor: isActive ? skill.color : '#333'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Projects Count */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: `1px solid ${isActive ? skill.color : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '10px',
                    fontFamily: "'Fira Code', monospace"
                  }}>
                    <Terminal size={20} style={{ color: skill.color }} />
                    <span style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#ffffff'
                    }}>
                      {skill.projects} PROJECTS DEPLOYED
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            padding: '3rem',
            background: 'rgba(0, 0, 0, 0.7)',
            border: '2px solid rgba(0, 255, 255, 0.2)',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: 'linear-gradient(90deg, #00ffff, #8a2be2, #00ffff)',
              animation: 'loadBar 2s ease-out'
            }} />

            {[
              { label: 'Experience', value: '4+', icon: Cpu, color: '#00ffff' },
              { label: 'Projects', value: '126+', icon: Layers, color: '#8a2be2' },
              { label: 'Technologies', value: '30+', icon: Globe, color: '#00ffff' },
              { label: 'Certifications', value: '15+', icon: Award, color: '#8a2be2' }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    animation: `slideIn ${1 + i * 0.15}s ease-out`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto 1rem',
                    border: `2px solid ${stat.color}`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'float 3s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`
                  }}>
                    <Icon size={28} style={{ color: stat.color }} />
                  </div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.5rem',
                    fontFamily: "'Fira Code', monospace",
                    textShadow: `0 0 20px ${stat.color}`
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#a0a0a0',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}