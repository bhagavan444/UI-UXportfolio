import { useState, useEffect, useRef } from "react";
import { 
  Award, TrendingUp, Zap, Star, Sparkles, Trophy, Target, Flame, Rocket, Brain, Code
} from "lucide-react";

// Import your images (make sure these files exist in src/assets/)
import rceeImage from "../assets/Rcee.jpg";
import sriImage from "../assets/SRI.jpg";
import monteImage from "../assets/Monte.jpg";

const education = [
  {
    title: "B.Tech AI & Data Science",
    school: "Ramachandra College of Engineering",
    year: "2022–2026",
    score: "75%",
    desc: "Focused on designing intelligent systems using Machine Learning, Deep Learning, and Data Science. Gained hands-on experience with Python, TensorFlow, MERN stack, and real-world AI applications including predictive analytics, computer vision, and full-stack AI-driven platforms.",
    color: "linear-gradient(135deg, #22d3ee, #3b82f6, #6366f1)",
    accentColor: "#06b6d4",
    icon: "🚀",
    badge: "INNOVATION",
    achievement: "AI Specialist",
    focus: "AI / ML Engineering & Full-Stack Development",
    image: rceeImage
  },
  {
    title: "Intermediate MPC",
    school: "Sree Vidhya College",
    year: "2020–2022",
    score: "78%",
    desc: "Completed intensive coursework in Mathematics, Physics, and Chemistry with strong emphasis on analytical problem-solving and logical reasoning. Built solid quantitative foundation essential for algorithms and computational thinking.",
    color: "linear-gradient(135deg, #c084fc, #ec4899, #f43f5e)",
    accentColor: "#ec4899",
    icon: "🔬",
    badge: "EVOLUTION",
    achievement: "Science Excellence",
    focus: "STEM Foundations & Analytical Thinking",
    image: sriImage
  },
  {
    title: "10th Grade",
    school: "Montessori High School",
    year: "2020",
    score: "95%",
    desc: "Established strong academic foundation with excellence in Mathematics and Science. Demonstrated consistent top-tier performance, disciplined study habits, and early aptitude for logical reasoning and structured problem-solving.",
    color: "linear-gradient(135deg, #34d399, #14b8a6, #06b6d4)",
    accentColor: "#10b981",
    icon: "🌟",
    badge: "FOUNDATION",
    achievement: "Top 5%",
    focus: "Logic, Discipline & Problem Solving",
    image: monteImage
  }
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [cardPositions, setCardPositions] = useState([]);
  const [progress, setProgress] = useState([0, 0, 0]);
  const [scrollY, setScrollY] = useState(0);
  
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setProgress(education.map(edu => parseInt(edu.score)));
          }, 800);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCardMouseMove = (e, idx) => {
    if (window.innerWidth < 768) return;
    
    const card = cardsRef.current[idx];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    
    const newPositions = [...cardPositions];
    newPositions[idx] = { x, y };
    setCardPositions(newPositions);
  };

  const resetCardPosition = (idx) => {
    const newPositions = [...cardPositions];
    newPositions[idx] = { x: 0, y: 0 };
    setCardPositions(newPositions);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        overflow: 'hidden',
        padding: 'clamp(100px, 15vh, 180px) clamp(20px, 5vw, 80px)'
      }}
    >
      <style>{`
        @keyframes float { 
          0%, 100% { transform: translate3d(0, 0, 0); } 
          33% { transform: translate3d(30px, -30px, 0); }
          66% { transform: translate3d(-20px, 20px, 0); }
        }
        @keyframes pulse { 
          0%, 100% { transform: scale(1); opacity: 1; } 
          50% { transform: scale(1.05); opacity: 0.9; } 
        }
        @keyframes shimmer { 
          0% { background-position: -200% center; } 
          100% { background-position: 200% center; } 
        }
        @keyframes rotate { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { filter: brightness(1) blur(20px); }
          50% { filter: brightness(1.4) blur(25px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #22d3ee, #a855f7, #ec4899, #22d3ee);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 8s linear infinite;
        }
        
        .card-3d {
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
        }
        
        .card-inner {
          transform: translateZ(40px);
        }
        
        .floating-particle {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>

      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          width: '1000px',
          height: '1000px',
          top: '-20%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.15), transparent 70%)',
          animation: 'float 25s ease-in-out infinite, glow 8s ease-in-out infinite',
          filter: 'blur(80px)'
        }} />
        
        <div style={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          bottom: '-10%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)',
          animation: 'float 30s ease-in-out infinite 5s, glow 10s ease-in-out infinite 2s',
          filter: 'blur(80px)'
        }} />

        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '40%',
          right: '20%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1), transparent 70%)',
          animation: 'float 35s ease-in-out infinite 10s, glow 12s ease-in-out infinite 4s',
          filter: 'blur(90px)'
        }} />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              position: 'absolute',
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: ['#22d3ee', '#a855f7', '#ec4899', '#10b981'][i % 4],
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }} />
      </div>

      <div style={{ position: 'relative', maxWidth: '1600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(80px, 12vh, 120px)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.9)',
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '14px 36px',
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(30px) saturate(180%)',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.1)',
            marginBottom: '40px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            animation: 'bounce 3s ease-in-out infinite'
          }}>
            <Sparkles size={20} style={{ color: '#22d3ee' }} />
            <span style={{
              fontSize: '13px',
              fontWeight: '900',
              letterSpacing: '3px',
              background: 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              EXCELLENCE • INNOVATION • GROWTH
            </span>
            <Trophy size={20} style={{ color: '#fbbf24', animation: 'pulse 2s infinite' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            fontWeight: '900',
            lineHeight: 0.95,
            marginBottom: '32px',
            letterSpacing: '-0.02em'
          }}>
            Academic
            <br />
            <span className="gradient-text">
              Excellence
            </span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            A transformative journey from <strong style={{ color: '#34d399' }}>solid foundations</strong> through 
            <strong style={{ color: '#a855f7' }}> analytical thinking</strong> to 
            <strong style={{ color: '#06b6d4' }}> cutting-edge AI innovation</strong>
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
          gap: 'clamp(24px, 5vw, 48px)',
          marginBottom: '120px'
        }}>
          {education.map((edu, idx) => {
            const pos = cardPositions[idx] || { x: 0, y: 0 };
            
            return (
              <div
                key={idx}
                ref={el => cardsRef.current[idx] = el}
                onMouseMove={(e) => handleCardMouseMove(e, idx)}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => {
                  setActiveCard(null);
                  resetCardPosition(idx);
                }}
                className="card-3d"
                style={{
                  opacity: isVisible ? 1 : 0,
                  animation: isVisible ? `slideUp 1s ease-out ${idx * 0.2}s backwards` : 'none',
                  transform: activeCard === idx 
                    ? `perspective(1500px) rotateY(${pos.x}deg) rotateX(${-pos.y}deg) translateZ(20px) scale(1.02)`
                    : 'perspective(1500px) rotateY(0deg) rotateX(0deg) translateZ(0) scale(1)'
                }}
              >
                <div style={{
                  position: 'relative',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: 'rgba(15,15,25,0.8)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  border: activeCard === idx 
                    ? `2px solid ${edu.accentColor}80`
                    : '2px solid rgba(255,255,255,0.1)',
                  boxShadow: activeCard === idx 
                    ? `0 30px 80px -15px ${edu.accentColor}40, 0 0 60px -10px ${edu.accentColor}30, inset 0 1px 0 rgba(255,255,255,0.1)`
                    : '0 20px 60px -15px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer'
                }}>
                  {/* Rotating border gradient */}
                  {activeCard === idx && (
                    <div style={{
                      position: 'absolute',
                      inset: -2,
                      background: edu.color,
                      borderRadius: '32px',
                      opacity: 0.5,
                      filter: 'blur(10px)',
                      animation: 'rotate 4s linear infinite',
                      zIndex: -1
                    }} />
                  )}

                  {/* Image Section */}
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={edu.image}
                      alt={edu.school}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s ease',
                        transform: activeCard === idx ? 'scale(1.15)' : 'scale(1)',
                        filter: activeCard === idx ? 'brightness(1.1)' : 'brightness(0.9)'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)`
                    }} />

                    {/* Floating Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      padding: '10px 24px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '900',
                      letterSpacing: '2px',
                      background: edu.color,
                      color: 'white',
                      boxShadow: `0 10px 40px -10px ${edu.accentColor}80`,
                      animation: activeCard === idx ? 'pulse 2s infinite' : 'none',
                      backdropFilter: 'blur(10px)'
                    }}>
                      {edu.badge}
                    </div>

                    {/* Year Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 20px',
                      borderRadius: '999px',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <Star size={16} style={{ color: '#fbbf24' }} />
                      <span style={{ fontWeight: '700', fontSize: '14px' }}>{edu.year}</span>
                    </div>
                  </div>

                  <div className="card-inner" style={{ padding: 'clamp(28px, 5vw, 48px)' }}>
                    {/* Icon + Title */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '24px',
                      marginBottom: '32px'
                    }}>
                      <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '24px',
                        background: edu.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '56px',
                        flexShrink: 0,
                        boxShadow: `0 20px 60px -15px ${edu.accentColor}60`,
                        transform: activeCard === idx ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)',
                        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}>
                        {edu.icon}
                      </div>

                      <div style={{ flex: 1 }}>
                        <h3 style={{
                          fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                          fontWeight: '900',
                          marginBottom: '12px',
                          lineHeight: 1.2
                        }}>
                          {edu.title}
                        </h3>
                        <p style={{
                          color: '#9ca3af',
                          fontSize: '16px',
                          fontWeight: '600'
                        }}>
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Score Display */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 32px',
                      borderRadius: '20px',
                      background: edu.color,
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: '900',
                      marginBottom: '32px',
                      boxShadow: activeCard === idx 
                        ? `0 15px 50px -10px ${edu.accentColor}70, 0 0 40px ${edu.accentColor}40`
                        : `0 10px 30px -5px ${edu.accentColor}50`
                    }}>
                      <TrendingUp size={28} />
                      <span>{edu.score}</span>
                    </div>

                    {/* Description */}
                    <p style={{
                      color: '#d1d5db',
                      lineHeight: '1.8',
                      marginBottom: '32px',
                      fontSize: '15.5px'
                    }}>
                      {edu.desc}
                    </p>

                    {/* Animated Progress Bar */}
                    <div style={{
                      position: 'relative',
                      height: '16px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '999px',
                      overflow: 'hidden',
                      marginBottom: '28px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${progress[idx]}%`,
                        background: edu.color,
                        transition: 'width 2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        boxShadow: `0 0 30px ${edu.accentColor}80`,
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Shimmer effect */}
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          animation: 'shimmer 2s infinite'
                        }} />
                      </div>

                      <div style={{
                        position: 'absolute',
                        right: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: '13px',
                        fontWeight: '900',
                        color: 'white',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {progress[idx]}%
                      </div>
                    </div>

                    {/* Focus & Achievement */}
                    <div style={{
                      display: 'grid',
                      gap: '16px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px 20px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        transform: activeCard === idx ? 'translateX(8px)' : 'translateX(0)'
                      }}>
                        <Zap size={20} style={{ 
                          color: edu.accentColor,
                          filter: `drop-shadow(0 0 8px ${edu.accentColor}80)`
                        }} />
                        <span style={{ fontWeight: '600', fontSize: '15px' }}>{edu.focus}</span>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px 20px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease 0.1s',
                        transform: activeCard === idx ? 'translateX(8px)' : 'translateX(0)'
                      }}>
                        <Award size={20} style={{ 
                          color: edu.accentColor,
                          filter: `drop-shadow(0 0 8px ${edu.accentColor}80)`
                        }} />
                        <span style={{ color: '#9ca3af', fontSize: '15px' }}>{edu.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
          opacity: isVisible ? 1 : 0,
          animation: isVisible ? 'slideUp 1.2s ease-out 0.8s backwards' : 'none'
        }}>
          {[
            { icon: Brain, value: "8.5+", label: "Current CGPA", color: "#fbbf24", bg: "linear-gradient(135deg, #fbbf24, #f59e0b)" },
            { icon: Rocket, value: "AI/ML", label: "Specialization", color: "#06b6d4", bg: "linear-gradient(135deg, #06b6d4, #0891b2)" },
            { icon: Code, value: "Production", label: "Ready Skills", color: "#f97316", bg: "linear-gradient(135deg, #f97316, #ea580c)" },
            { icon: Target, value: "Future", label: "MNC Engineer", color: "#a855f7", bg: "linear-gradient(135deg, #a855f7, #9333ea)" }
          ].map((item, i) => (
            <div key={i} style={{
              padding: '36px 28px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px) saturate(180%)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 25px 60px -15px ${item.color}40, 0 0 40px ${item.color}20`;
              e.currentTarget.style.borderColor = `${item.color}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}>
              {/* Gradient glow background */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: item.bg,
                opacity: 0.1,
                filter: 'blur(40px)',
                transition: 'opacity 0.4s ease'
              }} />
              
              <item.icon size={48} style={{ 
                color: item.color, 
                marginBottom: '20px',
                filter: `drop-shadow(0 0 20px ${item.color}60)`,
                position: 'relative',
                zIndex: 1
              }} />
              <div style={{
                fontSize: '3rem',
                fontWeight: '900',
                background: item.bg,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '12px',
                position: 'relative',
                zIndex: 1
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: '15px',
                color: '#9ca3af',
                fontWeight: '600',
                letterSpacing: '0.5px',
                position: 'relative',
                zIndex: 1
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}