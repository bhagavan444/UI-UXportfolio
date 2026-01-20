import { useState, useEffect, useRef } from "react";

import { Code, Database, Server, Zap, Cpu, Globe, Terminal, Award, Rocket, Briefcase, ChevronRight, Download, Coffee, Brain, Cloud, GitBranch } from "lucide-react";

export default function UltimateMERNPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [codeLines, setCodeLines] = useState([]);
  const [matrixRain, setMatrixRain] = useState([]);
  const canvasRef = useRef(null);

  // MERN Stack technologies with animated icons
  const mernStack = [
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      angle: 0,
      description: "NoSQL Database Expert"
    },
    { 
      name: "Express.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#FFFFFF",
      angle: 90,
      description: "Backend Framework Master"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
      angle: 180,
      description: "Frontend Architect"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      angle: 270,
      description: "JavaScript Runtime Pro"
    }
  ];

  const techEcosystem = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#FF6F00" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", color: "#FF9900" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "#007396" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" }
  ];

  const codeSnippets = [
    "const express = require('express');",
    "app.use(express.json());",
    "mongoose.connect(DB_URL);",
    "const server = app.listen(3000);",
    "React.useEffect(() => {});",
    "await fetch('/api/data');",
    "const pipeline = [...stages];",
    "JWT.sign(payload, secret);",
    "docker build -t app .",
    "git push origin main"
  ];

  // Initialize matrix rain effect
  useEffect(() => {
    const columns = Math.floor(window.innerWidth / 20);
    const drops = Array(columns).fill(1).map(() => Math.random() * 100);
    setMatrixRain(drops);

    const interval = setInterval(() => {
      setMatrixRain(prev => prev.map(drop => drop > 100 ? 0 : drop + 0.5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Scroll-based animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const section = Math.floor(window.scrollY / 400);
      setActiveSection(section);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated code lines
  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev, codeSnippets[Math.floor(Math.random() * codeSnippets.length)]];
        return newLines.slice(-8);
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setMousePos({ x, y });
  };

  // 3D DNA Helix Effect with Profile
  const DNAHelix = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 30);
      return () => clearInterval(interval);
    }, []);

    return (
      <div style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        perspective: '1000px'
      }}>
        {/* DNA Strands */}
        {[...Array(30)].map((_, i) => {
          const angle1 = (rotation + i * 12) * Math.PI / 180;
          const angle2 = (rotation + i * 12 + 180) * Math.PI / 180;
          const y = i * 18 - 270;
          
          return (
            <div key={i}>
              {/* Strand 1 */}
              <div style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${mernStack[i % 4].color}, ${mernStack[(i + 1) % 4].color})`,
                boxShadow: `0 0 20px ${mernStack[i % 4].color}`,
                left: '50%',
                top: '50%',
                transform: `
                  translateX(${Math.cos(angle1) * 180}px) 
                  translateY(${y}px) 
                  translateZ(${Math.sin(angle1) * 100}px)
                `,
                opacity: 0.8
              }} />
              
              {/* Strand 2 */}
              <div style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${mernStack[(i + 2) % 4].color}, ${mernStack[(i + 3) % 4].color})`,
                boxShadow: `0 0 20px ${mernStack[(i + 2) % 4].color}`,
                left: '50%',
                top: '50%',
                transform: `
                  translateX(${Math.cos(angle2) * 180}px) 
                  translateY(${y}px) 
                  translateZ(${Math.sin(angle2) * 100}px)
                `,
                opacity: 0.8
              }} />
              
              {/* Connecting line */}
              <div style={{
                position: 'absolute',
                height: '2px',
                width: Math.abs(Math.cos(angle1) - Math.cos(angle2)) * 180 + 'px',
                background: `linear-gradient(90deg, ${mernStack[i % 4].color}50, transparent)`,
                left: '50%',
                top: '50%',
                transform: `
                  translateX(${Math.min(Math.cos(angle1), Math.cos(angle2)) * 180}px) 
                  translateY(${y}px)
                `,
                opacity: 0.3
              }} />
            </div>
          );
        })}

        {/* Central Profile with Holographic Ring */}
        <div style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(15,15,35,0.95), rgba(30,30,60,0.95))',
          border: '3px solid rgba(97,218,251,0.6)',
          boxShadow: `
            0 0 60px rgba(97,218,251,0.4),
            inset 0 0 60px rgba(97,218,251,0.1),
            0 0 120px rgba(71,162,72,0.2)
          `,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          animation: 'holoPulse 3s ease-in-out infinite',
          zIndex: 10
        }}>
          {/* Rotating holographic rings */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: 'absolute',
              width: `${100 + i * 20}%`,
              height: `${100 + i * 20}%`,
              borderRadius: '50%',
              border: `2px solid ${i === 0 ? 'rgba(97,218,251,0.3)' : i === 1 ? 'rgba(71,162,72,0.3)' : 'rgba(255,159,0,0.3)'}`,
              animation: `holoSpin ${3 + i}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`
            }} />
          ))}
          
          {/* Profile image placeholder */}
          <div style={{
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a1a3a, #2a2a4a)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            color: '#61DAFB',
            fontWeight: '900',
            zIndex: 1,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(97,218,251,0.2), rgba(71,162,72,0.2))',
              animation: 'shimmer 3s linear infinite'
            }} />
            <span style={{ position: 'relative', zIndex: 2 }}>SS</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        overflow: 'hidden',
        fontFamily: '"Space Grotesk", -apple-system, sans-serif'
      }}
    >
      {/* Matrix Rain Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity: 0.15
      }}>
        {matrixRain.map((drop, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${(i / matrixRain.length) * 100}%`,
            top: `${drop}%`,
            color: '#00ff41',
            fontSize: '14px',
            fontFamily: 'monospace',
            textShadow: '0 0 10px #00ff41'
          }}>
            {codeSnippets[i % codeSnippets.length].charAt(Math.floor(drop) % 20)}
          </div>
        ))}
      </div>

      {/* Animated grid with parallax */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(97,218,251,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(97,218,251,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
        transition: 'transform 0.3s ease',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
      }} />

      {/* Floating orbs with mouse tracking */}
      {[0, 1, 2, 3].map(i => (
        <div key={i} style={{
          position: 'fixed',
          width: `${300 + i * 100}px`,
          height: `${300 + i * 100}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${mernStack[i].color}20, transparent 70%)`,
          filter: 'blur(60px)',
          top: `${20 + i * 20}%`,
          left: `${10 + i * 20}%`,
          transform: `translate(${mousePos.x * (i + 1) * 0.5}px, ${mousePos.y * (i + 1) * 0.5}px)`,
          transition: 'transform 0.5s ease',
          animation: `float ${8 + i * 2}s ease-in-out infinite`,
          zIndex: 1
        }} />
      ))}

      {/* Main Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1600px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        
        {/* Hero Header Section */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative'
        }}>
          
          {/* Animated Status Badge */}
          <div style={{
            padding: '12px 32px',
            borderRadius: '100px',
            background: 'rgba(97,218,251,0.1)',
            border: '2px solid rgba(97,218,251,0.5)',
            backdropFilter: 'blur(20px)',
            marginBottom: '2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            animation: 'glow 2s ease-in-out infinite'
          }}>
            <div style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#00ff41',
              boxShadow: '0 0 20px #00ff41',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
            <span style={{
              fontWeight: '700',
              fontSize: '0.9rem',
              letterSpacing: '2px',
              color: '#00ff41'
            }}>
              AVAILABLE FOR OPPORTUNITIES 2026
            </span>
          </div>

          {/* Main Title with Glitch Effect */}
          <h1 style={{
            fontSize: 'clamp(3rem, 12vw, 8rem)',
            fontWeight: '900',
            lineHeight: 1,
            marginBottom: '1rem',
            position: 'relative'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #61DAFB 50%, #47A248 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease infinite',
              textShadow: '0 0 80px rgba(97,218,251,0.5)'
            }}>
              Bhagavan Mern & AIDS Student
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #61DAFB 0%, #339933 50%, #FF6F00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease infinite 1s'
            }}>
              RCEE
            </div>
          </h1>

          {/* Typing Console Effect */}
          <div style={{
            background: 'rgba(10,10,25,0.9)',
            border: '2px solid rgba(97,218,251,0.3)',
            borderRadius: '12px',
            padding: '1.5rem 2rem',
            marginBottom: '2rem',
            fontFamily: 'monospace',
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
            backdropFilter: 'blur(20px)',
            maxWidth: '800px'
          }}>
            <div style={{ color: '#00ff41', marginBottom: '0.5rem' }}>
              <Terminal size={20} style={{ display: 'inline', marginRight: '8px' }} />
              bhagavan@portfolio:~$
            </div>
            {codeLines.map((line, i) => (
              <div key={i} style={{
                color: '#61DAFB',
                opacity: 1 - (i * 0.1),
                marginBottom: '4px',
                animation: 'fadeIn 0.5s ease'
              }}>
                {'>'} {line}
              </div>
            ))}
            <span style={{
              display: 'inline-block',
              width: '10px',
              height: '20px',
              background: '#61DAFB',
              animation: 'blink 1s step-end infinite',
              marginLeft: '4px'
            }} />
          </div>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: '#9ca3af',
            maxWidth: '800px',
            lineHeight: 1.6,
            marginBottom: '3rem'
          }}>
            Final-Year <span style={{ color: '#61DAFB', fontWeight: '700' }}>AI & Data Science</span> Engineer 
            crafting <span style={{ color: '#47A248', fontWeight: '700' }}>Full-Stack Solutions</span> with 
            cutting-edge <span style={{ color: '#FF6F00', fontWeight: '700' }}>Intelligence</span>
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}>
            <button style={{
              padding: '18px 40px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #61DAFB, #339933)',
              color: 'white',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 40px rgba(97,218,251,0.4)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(97,218,251,0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(97,218,251,0.4)';
              }}
            >
              <Rocket size={20} />
              Explore Projects
              <ChevronRight size={20} />
            </button>

            <button style={{
              padding: '18px 40px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(97,218,251,0.5)',
              backdropFilter: 'blur(10px)',
              color: '#61DAFB',
              fontWeight: '700',
              fontSize: '1.1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(97,218,251,0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Scroll Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            opacity: 0.6,
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <span style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>SCROLL</span>
            <ChevronRight size={24} style={{ transform: 'rotate(90deg)' }} />
          </div>
        </div>

        {/* DNA Helix Section with MERN Focus */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '4rem 0'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #61DAFB, #47A248, #339933)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            MERN DNA
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#9ca3af',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Full-Stack Mastery Encoded in My Engineering
          </p>

          <DNAHelix />

          {/* MERN Stack Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '1200px',
            marginTop: '4rem'
          }}>
            {mernStack.map((tech, i) => (
              <div key={i} style={{
                background: 'rgba(10,10,25,0.9)',
                border: `2px solid ${tech.color}50`,
                borderRadius: '20px',
                padding: '2rem',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                animation: `fadeInUp 0.6s ease ${i * 0.2}s both`
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${tech.color}60`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.borderColor = `${tech.color}50`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    background: `${tech.color}20`,
                    filter: 'blur(20px)'
                  }} />
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      filter: `drop-shadow(0 0 10px ${tech.color})`,
                      position: 'relative'
                    }}
                  />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: tech.color,
                  textAlign: 'center',
                  marginBottom: '0.5rem'
                }}>
                  {tech.name}
                </h3>
                <p style={{
                  color: '#9ca3af',
                  textAlign: 'center',
                  fontSize: '0.95rem'
                }}>
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Ecosystem Galaxy */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: '4rem 0'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, #FF6F00, #61DAFB, #47A248)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            TECH GALAXY
          </h2>

          {/* Orbiting Tech Icons */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '800px',
            height: '800px',
            margin: '0 auto'
          }}>
            {/* Central Core */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(97,218,251,0.3), rgba(71,162,72,0.3))',
              boxShadow: '0 0 100px rgba(97,218,251,0.5), inset 0 0 50px rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: '900',
              animation: 'coreGlow 3s ease-in-out infinite'
            }}>
              <Code size={80} color="#61DAFB" />
            </div>

            {/* Orbiting Technologies */}
            {techEcosystem.map((tech, i) => {
              const angle = (i / techEcosystem.length) * 360;
              const radius = 320;
              
              return (
                <div key={i} style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100px',
                  height: '100px',
                  animation: `orbit ${20 + i * 2}s linear infinite`,
                  animationDelay: `${-i * (20 / techEcosystem.length)}s`
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '20px',
                    background: 'rgba(10,10,25,0.95)',
                    border: `3px solid ${tech.color}60`,
                    boxShadow: `0 10px 40px ${tech.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)'
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.3)';
                      e.currentTarget.style.borderColor = tech.color;
                      e.currentTarget.style.boxShadow = `0 15px 60px ${tech.color}80`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.borderColor = `${tech.color}60`;
                      e.currentTarget.style.boxShadow = `0 10px 40px ${tech.color}40`;
                    }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      style={{
                        width: '70%',
                        height: '70%',
                        objectFit: 'contain',
                        filter: `drop-shadow(0 0 10px ${tech.color})`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section with Animated Cards */}
        <div style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 0'
        }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #61DAFB, #FF6F00)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            ACHIEVEMENTS
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#9ca3af',
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            Building Experience Through Real Projects
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            width: '100%',
            maxWidth: '1200px'
          }}>
            {[
              { icon: Briefcase, value: "3+", label: "Internships", color: "#61DAFB", desc: "MERN, AI/ML, Data Science" },
              { icon: Rocket, value: "5+", label: "Live Projects", color: "#47A248", desc: "Production Applications" },
              { icon: Award, value: "13+", label: "Certifications", color: "#FF6F00", desc: "Google, IBM, Infosys" },
              { icon: Brain, value: "AI/ML", label: "Specialist", color: "#a78bfa", desc: "TensorFlow & Deep Learning" }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: 'rgba(10,10,25,0.9)',
                    border: `2px solid ${stat.color}50`,
                    borderRadius: '24px',
                    padding: '2.5rem',
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    animation: `fadeInUp 0.6s ease ${i * 0.15}s both`,
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                    e.currentTarget.style.borderColor = stat.color;
                    e.currentTarget.style.boxShadow = `0 25px 70px ${stat.color}70`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = `${stat.color}50`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, transparent, ${stat.color}15)`,
                    animation: 'shimmer 3s linear infinite'
                  }} />
                  
                  <div style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto 1.5rem',
                    borderRadius: '50%',
                    background: `${stat.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <Icon size={40} color={stat.color} />
                  </div>

                  <div style={{
                    fontSize: '3.5rem',
                    fontWeight: '900',
                    color: stat.color,
                    textAlign: 'center',
                    textShadow: `0 0 30px ${stat.color}80`,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.value}
                  </div>
                  
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: '0.5rem'
                  }}>
                    {stat.label}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#9ca3af',
                    textAlign: 'center'
                  }}>
                    {stat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Section */}
        <div style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '4rem 2rem'
        }}>
          <div style={{
            maxWidth: '800px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: '900',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #61DAFB, #47A248, #FF6F00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s ease infinite'
            }}>
              Let's Build Something Amazing
            </h2>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              color: '#9ca3af',
              marginBottom: '3rem',
              lineHeight: 1.6
            }}>
              Ready to bring your next <span style={{ color: '#61DAFB', fontWeight: '700' }}>MERN Stack</span> project to life with 
              <span style={{ color: '#FF6F00', fontWeight: '700' }}> AI-powered intelligence</span>? 
              Let's connect and create the future together.
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button style={{
                padding: '20px 50px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #61DAFB, #47A248)',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.2rem',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 15px 50px rgba(97,218,251,0.4)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 70px rgba(97,218,251,0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 50px rgba(97,218,251,0.4)';
                }}
              >
                <Coffee size={24} />
                Get In Touch
                <ChevronRight size={24} />
              </button>

              <button style={{
                padding: '20px 50px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '2px solid rgba(97,218,251,0.5)',
                backdropFilter: 'blur(10px)',
                color: '#61DAFB',
                fontWeight: '700',
                fontSize: '1.2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(97,218,251,0.1)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <GitBranch size={24} />
                View GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations & Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(97,218,251,0.5); }
          50% { box-shadow: 0 0 50px rgba(97,218,251,1); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-20px); }
        }
        @keyframes holoSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes holoPulse {
          0%, 100% { box-shadow: 0 0 60px rgba(97,218,251,0.4), inset 0 0 60px rgba(97,218,251,0.1); }
          50% { box-shadow: 0 0 100px rgba(97,218,251,0.7), inset 0 0 80px rgba(97,218,251,0.2); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(320px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(320px) rotate(-360deg); }
        }
        @keyframes coreGlow {
          0%, 100% { box-shadow: 0 0 100px rgba(97,218,251,0.5); }
          50% { box-shadow: 0 0 150px rgba(97,218,251,0.8); }
        }
      `}</style>
    </div>
  );
}