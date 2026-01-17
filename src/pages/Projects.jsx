import { useState, useEffect } from "react";
import { Eye, Github, Rocket, Star, X, Sparkles, Code, Zap } from "lucide-react";

const projects = [
  { title: 'ATS Resume Builder', github: 'https://github.com/bhagavan444/Resumebuilderwebapp', live: null, desc: 'Full-stack ATS-focused resume builder with templates, scoring, and export', tags: ['React', 'Node.js', 'MongoDB', 'JWT'], icon: '📄', img: 'https://drive.google.com/thumbnail?id=1ngApn37ig05YDXxCbA5mppeva_opwcUs&sz=w1200', color: '#8B5CF6', featured: true },
  { title: 'AI Chatbot Platform', github: 'https://github.com/bhagavan444/chatbotwebapp', live: 'https://bhagavanai.lovable.app', desc: 'Real-time AI chatbot with streaming responses and session memory', tags: ['AI', 'Python', 'React', 'Flask'], icon: '🤖', img: 'https://drive.google.com/thumbnail?id=10gvXlgHCb__NAWBoLEbj6LglL9dT6Kew&sz=w1200', color: '#06B6D4', featured: true },
  { title: 'Career Path AI', github: 'https://github.com/bhagavan444/carrer-path-web-', live: null, desc: 'ML-based career recommendation using user skills and interests', tags: ['ML', 'Python', 'Flask'], icon: '🎯', img: 'https://drive.google.com/thumbnail?id=1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj&sz=w1200', color: '#F59E0B' },
  { title: 'Fake News Detector', github: 'https://github.com/bhagavan444/News-detector', live: null, desc: 'NLP-based fake news detection with TF-IDF and supervised learning', tags: ['NLP', 'TensorFlow', 'Python'], icon: '📰', img: 'https://drive.google.com/thumbnail?id=1i-qZCMDiOAy677h3y12es5xM_IL-_oOF&sz=w1200', color: '#10B981' },
  { title: 'AI News Detector Live', github: 'https://github.com/bhagavan444/News-detector', live: 'https://bliss-gala-22285345.figma.site/', desc: 'Live AI news verification platform with interactive UI', tags: ['AI', 'NLP', 'Live'], icon: '🗞️', img: 'https://drive.google.com/thumbnail?id=17XFIpJvdtb-0KXi5cyW37FQyXXc1-iC9&sz=w1200', color: '#22C55E' },
  { title: 'Heart Disease Predictor', github: 'https://github.com/bhagavan444/Heart-Disease-Web-', live: null, desc: 'Healthcare ML app predicting heart disease risk from medical data', tags: ['ML', 'Healthcare', 'Python'], icon: '❤️', img: 'https://drive.google.com/thumbnail?id=1Uy1JiAFMcAwMD0LZgm0J-bYiWuHpRzqq&sz=w1200', color: '#EC4899' },
  { title: 'AI Architecture Generator', github: null, live: 'https://archmind-spark.lovable.app', desc: 'AI-driven system architecture generator for software design', tags: ['AI', 'Architecture', 'React'], icon: '🧠', img: 'https://drive.google.com/thumbnail?id=15dAzqZOC60zlje-DevzjWLFH4lIf5L0E&sz=w1200', color: '#8B5CF6', featured: true },
  { title: 'NeuralLearn Platform', github: null, live: 'https://neurallearn.lovable.app', desc: 'AI EdTech with personalized learning paths and recommendations', tags: ['AI', 'EdTech', 'React'], icon: '📚', img: 'https://drive.google.com/thumbnail?id=1jxmO9h3FbnKDYAiN9mWXpfR--cN8YF2O&sz=w1200', color: '#EC4899', featured: true },
  { title: 'AI Project Generator', github: null, live: 'https://aiprojecttool.lovable.app', desc: 'Generates complete project ideas with tech stacks and guidance', tags: ['AI', 'React', 'Tools'], icon: '⚡', img: 'https://drive.google.com/thumbnail?id=1X3P5LUi4qynETadfMVPxIhh9WtevWJlZ&sz=w1200', color: '#FBBF24', featured: true }
];

export default function PremiumProjects() {
  const [modal, setModal] = useState(null);
  const [hover, setHover] = useState(null);
  const [visible, setVisible] = useState(false);
  const [filterTag, setFilterTag] = useState('All');

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = filterTag === 'All' ? projects : projects.filter(p => p.tags.includes(filterTag));

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a001a 0%, #001433 50%, #0a0028 100%)',
      padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 24px)',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes floatProject { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes glowPulse { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotateGlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shimmerEffect { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes statPulse { 0%, 100% { transform: scale(1); box-shadow: 0 5px 20px rgba(139,92,246,0.3); } 50% { transform: scale(1.05); box-shadow: 0 10px 40px rgba(139,92,246,0.5); } }
      `}</style>

      {/* Animated Background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          top: '-15%',
          right: '-10%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)',
          filter: 'blur(80px)',
          animation: 'floatProject 15s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          bottom: '-10%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.35), transparent 70%)',
          filter: 'blur(70px)',
          animation: 'floatProject 18s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        
        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.2
        }} />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              borderRadius: '50%',
              background: `${projects[i % projects.length].color}20`,
              border: `2px solid ${projects[i % projects.length].color}40`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatProject ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3
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
          transform: visible ? 'translateY(0)' : 'translateY(-40px)',
          transition: 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          {/* Icon */}
          <div style={{
            fontSize: 'clamp(4rem, 12vw, 6rem)',
            marginBottom: '24px',
            animation: 'floatProject 4s ease-in-out infinite',
            filter: 'drop-shadow(0 0 30px rgba(139,92,246,0.5))'
          }}>
            🚀
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: '900',
            lineHeight: 1.1,
            margin: '0 0 20px 0',
            background: 'linear-gradient(135deg, #ffffff, #8B5CF6, #06B6D4, #ffffff)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmerEffect 3s linear infinite'
          }}>
            Portfolio Showcase
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            color: '#9ca3af',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}>
            Innovative <span style={{ color: '#8B5CF6', fontWeight: '700' }}>AI-powered</span> solutions 
            & <span style={{ color: '#06B6D4', fontWeight: '700' }}>full-stack</span> applications
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(15px, 4vw, 30px)',
            flexWrap: 'wrap',
            marginBottom: '50px'
          }}>
            {[
              { l: 'PROJECTS', v: projects.length, c: '#8B5CF6', icon: Code },
              { l: 'FEATURED', v: projects.filter(p => p.featured).length, c: '#FBBF24', icon: Star },
              { l: 'LIVE', v: projects.filter(p => p.live).length, c: '#06B6D4', icon: Zap }
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  position: 'relative',
                  padding: 'clamp(16px, 4vw, 22px) clamp(28px, 6vw, 40px)',
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${s.c}40`,
                  borderRadius: '20px',
                  animation: `statPulse 3s ease-in-out ${i * 0.3}s infinite`,
                  overflow: 'hidden'
                }}
              >
                {/* Rotating Glow */}
                <div style={{
                  position: 'absolute',
                  inset: '-50%',
                  background: `conic-gradient(from 0deg, transparent, ${s.c}30, transparent)`,
                  animation: 'rotateGlow 4s linear infinite',
                  opacity: 0.5
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <s.icon size={window.innerWidth < 640 ? 20 : 24} color={s.c} style={{ marginBottom: '8px' }} />
                  <div style={{
                    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                    fontWeight: '900',
                    color: s.c,
                    marginBottom: '4px'
                  }}>
                    {s.v}
                  </div>
                  <div style={{
                    fontSize: 'clamp(10px, 2vw, 12px)',
                    color: '#9ca3af',
                    fontWeight: '600',
                    letterSpacing: '0.1em'
                  }}>
                    {s.l}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Filter Tags */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
            {allTags.map((tag, i) => (
              <button
                key={i}
                onClick={() => setFilterTag(tag)}
                style={{
                  padding: '10px 20px',
                  background: filterTag === tag ? 'linear-gradient(135deg, #8B5CF6, #06B6D4)' : 'rgba(255,255,255,0.05)',
                  border: filterTag === tag ? 'none' : '2px solid rgba(139,92,246,0.3)',
                  borderRadius: '25px',
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  fontWeight: '700',
                  color: filterTag === tag ? '#fff' : '#9ca3af',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: filterTag === tag ? '0 5px 20px rgba(139,92,246,0.4)' : 'none',
                  transform: filterTag === tag ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (filterTag !== tag) {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (filterTag !== tag) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)';
                  }
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'clamp(24px, 5vw, 40px)',
          marginBottom: '60px'
        }}>
          {filteredProjects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setModal(p)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                animation: `slideIn 0.8s ease ${i * 0.1}s backwards`,
                transform: hover === i ? 'translateY(-12px) scale(1.02)' : 'scale(1)',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                inset: '-30px',
                background: `radial-gradient(circle at 50% 50%, ${p.color}50, transparent 70%)`,
                filter: 'blur(50px)',
                opacity: hover === i ? 1 : 0,
                transition: 'opacity 0.5s',
                pointerEvents: 'none'
              }} />

              {/* Card */}
              <div style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.04)',
                border: `2px solid ${hover === i ? p.color : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '24px',
                overflow: 'hidden',
                backdropFilter: 'blur(20px)',
                boxShadow: hover === i ? `0 30px 80px ${p.color}40` : '0 15px 40px rgba(0,0,0,0.3)',
                transition: 'all 0.5s'
              }}>
                {/* Featured Badge */}
                {p.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 16px',
                    background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
                    borderRadius: '20px',
                    fontSize: 'clamp(10px, 2.5vw, 12px)',
                    fontWeight: '800',
                    color: '#000',
                    zIndex: 10,
                    boxShadow: '0 5px 20px rgba(251,191,36,0.5)',
                    animation: 'glowPulse 2s ease-in-out infinite'
                  }}>
                    <Star size={14} />
                    FEATURED
                  </div>
                )}

                {/* Image */}
                <div style={{ position: 'relative', height: 'clamp(200px, 40vw, 260px)', overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transform: hover === i ? 'scale(1.15)' : 'scale(1)',
                      transition: 'transform 0.6s ease-out'
                    }}
                    loading="lazy"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                    opacity: hover === i ? 0.6 : 0.9,
                    transition: 'opacity 0.4s'
                  }} />

                  {/* Icon */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontSize: 'clamp(2.5rem, 6vw, 3rem)',
                    filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.6))',
                    animation: hover === i ? 'floatProject 2s ease-in-out infinite' : 'none'
                  }}>
                    {p.icon}
                  </div>

                  {/* View Overlay */}
                  {hover === i && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(8px)',
                      animation: 'slideIn 0.3s ease'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '14px 28px',
                        background: 'rgba(255,255,255,0.95)',
                        borderRadius: '30px',
                        fontSize: 'clamp(13px, 3vw, 15px)',
                        fontWeight: '800',
                        color: p.color,
                        boxShadow: `0 10px 30px ${p.color}60`
                      }}>
                        <Eye size={20} />
                        VIEW PROJECT
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: 'clamp(20px, 5vw, 30px)' }}>
                  <h3 style={{
                    fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
                    fontWeight: '900',
                    marginBottom: '12px',
                    color: '#fff',
                    lineHeight: 1.2
                  }}>
                    {p.title}
                  </h3>
                  
                  <p style={{
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    color: '#d1d5db',
                    marginBottom: '20px',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {p.desc}
                  </p>

                  {/* Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {p.tags.slice(0, 4).map((tag, j) => (
                      <div
                        key={j}
                        style={{
                          padding: '6px 14px',
                          border: `1.5px solid ${p.color}40`,
                          background: `${p.color}15`,
                          borderRadius: '20px',
                          fontSize: 'clamp(11px, 2.5vw, 13px)',
                          color: '#fff',
                          fontWeight: '600'
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: 'clamp(10px, 3vw, 13px) clamp(20px, 5vw, 26px)',
                          background: `linear-gradient(135deg, ${p.color}, ${p.color}CC)`,
                          borderRadius: '30px',
                          fontSize: 'clamp(12px, 2.5vw, 14px)',
                          fontWeight: '800',
                          color: '#fff',
                          textDecoration: 'none',
                          boxShadow: `0 8px 25px ${p.color}50`,
                          transition: 'all 0.3s',
                          flex: p.github ? '1' : 'auto'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = `0 12px 35px ${p.color}70`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = `0 8px 25px ${p.color}50`;
                        }}
                      >
                        <Rocket size={16} />
                        LIVE
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: 'clamp(10px, 3vw, 13px) clamp(20px, 5vw, 26px)',
                          background: 'rgba(255,255,255,0.06)',
                          border: '2px solid rgba(255,255,255,0.1)',
                          borderRadius: '30px',
                          fontSize: 'clamp(12px, 2.5vw, 14px)',
                          fontWeight: '800',
                          color: '#9ca3af',
                          textDecoration: 'none',
                          transition: 'all 0.3s',
                          flex: '1'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                          e.currentTarget.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                          e.currentTarget.style.color = '#9ca3af';
                        }}
                      >
                        <Github size={16} />
                        CODE
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner Accents */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  width: '25px',
                  height: '25px',
                  borderTop: `3px solid ${p.color}`,
                  borderLeft: `3px solid ${p.color}`,
                  borderTopLeftRadius: '12px',
                  opacity: hover === i ? 1 : 0.2,
                  transition: 'opacity 0.4s'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '25px',
                  height: '25px',
                  borderBottom: `3px solid ${p.color}`,
                  borderRight: `3px solid ${p.color}`,
                  borderBottomRightRadius: '12px',
                  opacity: hover === i ? 1 : 0.2,
                  transition: 'opacity 0.4s'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 'clamp(16px, 4vw, 24px)',
            zIndex: 1000,
            animation: 'slideIn 0.3s ease'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              background: 'rgba(10,10,10,0.98)',
              border: `3px solid ${modal.color}`,
              borderRadius: '24px',
              overflow: 'hidden',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: `0 50px 120px ${modal.color}60`
            }}
          >
            {/* Animated Background Glow */}
            <div style={{
              position: 'absolute',
              inset: '-60px',
              background: `radial-gradient(circle at 50% 0%, ${modal.color}30, transparent 70%)`,
              filter: 'blur(80px)',
              animation: 'glowPulse 4s ease-in-out infinite',
              pointerEvents: 'none'
            }} />

            {/* Image */}
            <div style={{ position: 'relative', height: 'clamp(250px, 50vw, 350px)' }}>
              <img
                src={modal.img}
                alt={modal.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
              }} />
              {/* Icon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                fontSize: 'clamp(3rem, 8vw, 4rem)',
                filter: 'drop-shadow(0 0 30px rgba(0,0,0,0.7))'
              }}>
                {modal.icon}
              </div>
            </div>
            {/* Content */}
            <div style={{ padding: 'clamp(24px, 6vw, 36px)' }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 6vw, 2.5rem)',
                fontWeight: '900',
                marginBottom: '16px',
                color: '#fff',
                lineHeight: 1.2
              }}>
                {modal.title}
              </h2>
              
              <p style={{
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                color: '#d1d5db',
                marginBottom: '24px',
                lineHeight: 1.6
              }}>
                {modal.desc}
              </p>
              {/* Tags */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '30px'
              }}>
                {modal.tags.map((tag, j) => (
                  <div
                    key={j}
                    style={{
                      padding: '8px 18px',
                      border: `2px solid ${modal.color}40`,
                      background: `${modal.color}15`,
                      borderRadius: '25px',
                      fontSize: 'clamp(12px, 2.5vw, 14px)',
                      color: '#fff',
                      fontWeight: '600'
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
              {/* Actions */}
              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                {modal.live && (
                  <a
                    href={modal.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',  
                      padding: 'clamp(12px, 4vw, 16px) clamp(24px, 6vw, 32px)',
                      background: `linear-gradient(135deg, ${modal.color}, ${modal.color}CC)`,
                      borderRadius: '30px',
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      fontWeight: '800',
                      color: '#fff',
                      textDecoration: 'none',
                      boxShadow: `0 10px 30px ${modal.color}50`,
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 12px 35px ${modal.color}70`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = `0 10px 30px ${modal.color}50`;
                      
                    }
                    }
                  >
                    <Rocket size={18} />
                    LIVE PROJECT
                  </a>
                )}
                {modal.github && (
                  <a
                    href={modal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',  
                      alignItems: 'center',
                      gap: '10px',
                      padding: 'clamp(12px, 4vw, 16px) clamp(24px, 6vw, 32px)',
                      background: 'rgba(255,255,255,0.06)',
                      border: '2px solid rgba(255,255,255,0.1)',
                      borderRadius: '30px',
                      fontSize: 'clamp(14px, 3vw, 16px)',
                      fontWeight: '800',
                      color: '#9ca3af',
                      textDecoration: 'none',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.color = '#9ca3af';
                    }
                    }
                  >
                    <Github size={18} />
                    VIEW CODE
                  </a>
                )}
              </div>
            </div>
          </div>  
        </div>
      )}
    </div>
  );
}