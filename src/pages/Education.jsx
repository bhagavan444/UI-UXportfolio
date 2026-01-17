import { useState, useEffect, useRef } from "react";
import { 
  Award, TrendingUp, Zap, Star, Sparkles, Trophy, Target, Flame, Rocket, Brain, Code, GraduationCap, Calendar, MapPin
} from "lucide-react";

import rceeImage from "../assets/Rcee.jpg";
import sriImage from "../assets/SRI.jpg";
import monteImage from "../assets/Monte.jpg";

const education = [
  {
    title: "B.Tech AI & Data Science",
    school: "Ramachandra College of Engineering",
    year: "2022–2026",
    score: "75%",
    cgpa: "8.5",
    desc: "Focused on designing intelligent systems using Machine Learning, Deep Learning, and Data Science. Gained hands-on experience with Python, TensorFlow, MERN stack, and real-world AI applications including predictive analytics, computer vision, and full-stack AI-driven platforms.",
    color: "linear-gradient(135deg, #00d4ff, #3b82f6, #6366f1)",
    accentColor: "#00d4ff",
    icon: "🚀",
    badge: "INNOVATION",
    achievement: "AI Specialist",
    focus: "AI / ML Engineering & Full-Stack Development",
    image: rceeImage,
    location: "Eluru, AP"
  },
  {
    title: "Intermediate MPC",
    school: "Sree Vidhya College",
    year: "2020–2022",
    score: "78%",
    cgpa: "7.8",
    desc: "Completed intensive coursework in Mathematics, Physics, and Chemistry with strong emphasis on analytical problem-solving and logical reasoning. Built solid quantitative foundation essential for algorithms and computational thinking.",
    color: "linear-gradient(135deg, #c084fc, #ec4899, #f43f5e)",
    accentColor: "#ec4899",
    icon: "🔬",
    badge: "EVOLUTION",
    achievement: "Science Excellence",
    focus: "STEM Foundations & Analytical Thinking",
    image: sriImage,
    location: "Vijayawada, AP"
  },
  {
    title: "10th Grade",
    school: "Montessori High School",
    year: "2020",
    score: "95%",
    cgpa: "10.0",
    desc: "Established strong academic foundation with excellence in Mathematics and Science. Demonstrated consistent top-tier performance, disciplined study habits, and early aptitude for logical reasoning and structured problem-solving.",
    color: "linear-gradient(135deg, #34d399, #14b8a6, #06b6d4)",
    accentColor: "#10b981",
    icon: "🌟",
    badge: "FOUNDATION",
    achievement: "Top 5%",
    focus: "Logic, Discipline & Problem Solving",
    image: monteImage,
    location: "Vijayawada, AP"
  }
];

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [progress, setProgress] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000000',
        color: 'white',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 60px)',
      }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.08); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes orbitFloat { 
          0%, 100% { transform: translate(0, 0) scale(1); } 
          25% { transform: translate(30px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 30px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        
        .gradient-text {
          background: linear-gradient(90deg, #00d4ff, #a855f7, #ec4899, #00d4ff);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 8s linear infinite;
        }
        
        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* Animated Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        {/* Floating gradient orbs */}
        {[
          { size: 700, top: '10%', left: '10%', color: 'rgba(0,212,255,0.15)', duration: '25s' },
          { size: 600, bottom: '10%', right: '10%', color: 'rgba(236,72,153,0.15)', duration: '20s', delay: '2s' },
          { size: 500, top: '50%', left: '50%', color: 'rgba(168,85,247,0.12)', duration: '22s', delay: '1s' }
        ].map((orb, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            ...(orb.top === '50%' && orb.left === '50%' && { transform: 'translate(-50%, -50%)' }),
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: `orbitFloat ${orb.duration} ease-in-out infinite`,
            animationDelay: orb.delay || '0s',
          }} />
        ))}

        {/* Animated grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.4,
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 3, maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div className="slideIn" style={{
          textAlign: 'center',
          marginBottom: 'clamp(60px, 10vh, 100px)',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 32px',
            background: 'rgba(0,212,255,0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '50px',
            border: '2px solid rgba(0,212,255,0.3)',
            marginBottom: '40px',
          }}>
            <GraduationCap size={20} style={{ color: '#00d4ff' }} className="pulse" />
            <span style={{
              fontSize: 'clamp(0.8rem, 2vw, 1rem)',
              fontWeight: '900',
              letterSpacing: '0.15em',
              color: '#00d4ff',
            }}>
              ACADEMIC JOURNEY • 2019–2026
            </span>
            <Trophy size={20} style={{ color: '#fbbf24' }} className="pulse" />
          </div>

          <h2 style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: '900',
            lineHeight: 1,
            marginBottom: '30px',
            letterSpacing: '-0.02em',
          }}>
            Academic
            <br />
            <span className="gradient-text">Excellence</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            color: '#94a3b8',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            From strong <strong style={{ color: '#34d399' }}>foundations</strong> through rigorous 
            <strong style={{ color: '#a855f7' }}> analytical training</strong> to cutting-edge 
            <strong style={{ color: '#00d4ff' }}> AI innovation</strong>
          </p>
        </div>

        {/* Education Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(25px, 5vw, 40px)',
          marginBottom: 'clamp(60px, 10vh, 100px)',
        }}>
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="slideIn"
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              onTouchStart={() => setActiveCard(idx)}
              style={{
                position: 'relative',
                borderRadius: '28px',
                overflow: 'hidden',
                background: 'rgba(10,14,39,0.7)',
                backdropFilter: 'blur(20px)',
                border: activeCard === idx 
                  ? `2px solid ${edu.accentColor}` 
                  : '2px solid rgba(255,255,255,0.1)',
                boxShadow: activeCard === idx 
                  ? `0 30px 70px ${edu.accentColor}60`
                  : '0 20px 50px rgba(0,0,0,0.5)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: activeCard === idx ? 'translateY(-12px) scale(1.02)' : 'translateY(0)',
                animationDelay: `${0.2 + idx * 0.15}s`,
              }}
            >
              {/* Image Section */}
              <div style={{
                position: 'relative',
                height: 'clamp(220px, 35vw, 280px)',
                overflow: 'hidden',
              }}>
                <img
                  src={edu.image}
                  alt={edu.school}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.8s ease',
                    transform: activeCard === idx ? 'scale(1.15)' : 'scale(1.05)',
                    filter: activeCard === idx ? 'brightness(1.1)' : 'brightness(0.9)',
                  }}
                />

                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)',
                }} />

                {/* Badge */}
                <div className={activeCard === idx ? 'pulse' : ''} style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                  fontWeight: '900',
                  letterSpacing: '0.1em',
                  background: edu.color,
                  color: 'white',
                  boxShadow: `0 10px 30px ${edu.accentColor}80`,
                }}>
                  {edu.badge}
                </div>

                {/* Year & Location */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <div style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    fontWeight: '700',
                  }}>
                    <Calendar size={16} style={{ color: '#fbbf24' }} />
                    {edu.year}
                  </div>
                  <div style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    background: 'rgba(0,0,0,0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                    fontWeight: '700',
                  }}>
                    <MapPin size={16} style={{ color: edu.accentColor }} />
                    {edu.location}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: 'clamp(25px, 5vw, 40px)' }}>
                
                {/* Icon + Title */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  marginBottom: '25px',
                }}>
                  <div className={activeCard === idx ? 'float' : ''} style={{
                    width: 'clamp(80px, 15vw, 100px)',
                    height: 'clamp(80px, 15vw, 100px)',
                    borderRadius: '24px',
                    background: edu.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'clamp(40px, 8vw, 56px)',
                    boxShadow: `0 20px 50px ${edu.accentColor}60`,
                    flexShrink: 0,
                  }}>
                    {edu.icon}
                  </div>

                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
                      fontWeight: '900',
                      marginBottom: '8px',
                      lineHeight: 1.2,
                    }}>
                      {edu.title}
                    </h3>
                    <p style={{
                      color: '#94a3b8',
                      fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                      fontWeight: '600',
                    }}>
                      {edu.school}
                    </p>
                  </div>
                </div>

                {/* Score & CGPA */}
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  marginBottom: '25px',
                  flexWrap: 'wrap',
                }}>
                  <div style={{
                    flex: 1,
                    minWidth: '120px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: edu.color,
                    color: 'white',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                      fontWeight: '900',
                      marginBottom: '4px',
                    }}>
                      {edu.score}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                      fontWeight: '600',
                      opacity: 0.9,
                    }}>
                      Score
                    </div>
                  </div>

                  <div style={{
                    flex: 1,
                    minWidth: '120px',
                    padding: '16px 20px',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.1)',
                    border: `2px solid ${edu.accentColor}40`,
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                      fontWeight: '900',
                      color: edu.accentColor,
                      marginBottom: '4px',
                    }}>
                      {edu.cgpa}
                    </div>
                    <div style={{
                      fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
                      color: '#94a3b8',
                      fontWeight: '600',
                    }}>
                      CGPA
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: '#cbd5e1',
                  lineHeight: '1.7',
                  marginBottom: '25px',
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                }}>
                  {edu.desc}
                </p>

                {/* Progress Bar */}
                <div style={{
                  height: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50px',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '25px',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${progress[idx]}%`,
                    background: edu.color,
                    transition: 'width 2s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `0 0 20px ${edu.accentColor}`,
                    position: 'relative',
                  }}>
                    <div className="shimmer" style={{
                      position: 'absolute',
                      inset: 0,
                    }} />
                  </div>
                </div>

                {/* Focus & Achievement */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    <Zap size={20} style={{ color: edu.accentColor }} />
                    <span style={{ 
                      fontWeight: '600', 
                      fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                      color: '#e5e7eb',
                    }}>
                      {edu.focus}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    <Award size={20} style={{ color: edu.accentColor }} />
                    <span style={{ 
                      fontWeight: '600', 
                      fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                      color: '#94a3b8',
                    }}>
                      {edu.achievement}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="slideIn" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: 'clamp(20px, 4vw, 30px)',
          animationDelay: '0.8s',
        }}>
          {[
            { icon: Brain, value: "8.5+", label: "Current CGPA", color: "#fbbf24" },
            { icon: Rocket, value: "AI/ML", label: "Specialization", color: "#00d4ff" },
            { icon: Code, value: "Production", label: "Ready Skills", color: "#f97316" },
            { icon: Target, value: "Future", label: "MNC Engineer", color: "#a855f7" }
          ].map((item, i) => (
            <div key={i} style={{
              padding: 'clamp(25px, 5vw, 40px) 20px',
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.1)',
              textAlign: 'center',
              transition: 'all 0.5s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = `0 25px 50px ${item.color}40`;
              e.currentTarget.style.borderColor = `${item.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
            }}>
              <item.icon size={40} style={{ 
                color: item.color, 
                marginBottom: '15px',
                filter: `drop-shadow(0 0 15px ${item.color})`,
              }} />
              <div style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                fontWeight: '900',
                color: item.color,
                marginBottom: '8px',
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                color: '#94a3b8',
                fontWeight: '600',
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