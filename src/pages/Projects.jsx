import { useState, useEffect } from "react";
import { Eye, Github, ExternalLink, X, Star, Zap, Code, Rocket } from "lucide-react";

const projects = [
  { title: 'ATS Resume Builder', github: 'https://github.com/bhagavan444/Resumebuilderwebapp', live: null, desc: 'Full-stack ATS-focused resume builder with templates, scoring, and export', tags: ['React', 'Node.js', 'MongoDB', 'JWT'], icon: '📄', img: 'https://drive.google.com/thumbnail?id=1ngApn37ig05YDXxCbA5mppeva_opwcUs&sz=w1200', color: '#8B5CF6', featured: true },
  { title: 'AI Chatbot Platform', github: 'https://github.com/bhagavan444/chatbotwebapp', live: 'https://bhagavanai.lovable.app', desc: 'Real-time AI chatbot with streaming responses and session memory', tags: ['AI', 'Python', 'React', 'Flask'], icon: '🤖', img: 'https://drive.google.com/thumbnail?id=10gvXlgHCb__NAWBoLEbj6LglL9dT6Kew&sz=w1200', color: '#06B6D4', featured: true },
  { title: 'Career Path AI', github: 'https://github.com/bhagavan444/carrer-path-web-', live: null, desc: 'ML-based career recommendation using user skills and interests', tags: ['ML', 'Python', 'Flask'], icon: '🎯', img: 'https://drive.google.com/thumbnail?id=1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj&sz=w1200', color: '#F59E0B' },
  { title: 'Fake News Detector', github: 'https://github.com/bhagavan444/News-detector', live: null, desc: 'NLP-based fake news detection with TF-IDF and supervised learning', tags: ['NLP', 'TensorFlow', 'Python'], icon: '📰', img: 'https://drive.google.com/thumbnail?id=1i-qZCMDiOAy677h3y12es5xM_IL-_oOF&sz=w1200', color: '#10B981' },
  { title: 'AI News Detector Live', github: 'https://github.com/bhagavan444/News-detector', live: 'https://bliss-gala-22285345.figma.site/', desc: 'Live AI news verification platform with interactive UI', tags: ['AI', 'NLP', 'Live'], icon: '🗞️', img: 'https://drive.google.com/thumbnail?id=17XFIpJvdtb-0KXi5cyW37FQyXXc1-iC9&sz=w1200', color: '#22C55E' },
  { title: 'Heart Disease Predictor', github: 'https://github.com/bhagavan444/Heart-Disease-Web-', live: null, desc: 'Healthcare ML app predicting heart disease risk from medical data', tags: ['ML', 'Healthcare', 'Python'], icon: '❤️', img: 'https://drive.google.com/thumbnail?id=1Uy1JiAFMcAwMD0LZgm0J-bYiWuHpRzqq&sz=w1200', color: '#EC4899' },
  { title: 'AI Architecture Generator', github: null, live: 'https://archmind-spark.lovable.app', desc: 'AI-driven system architecture generator for software design', tags: ['AI', 'Architecture', 'React'], icon: '🧠', img: 'https://drive.google.com/thumbnail?id=15dAzqZOC60zlje-DevzjWLFH4lIf5L0E&sz=w1200', color: '#8B5CF6', featured: true },
  { title: 'NeuralLearn Platform', github: null, live: 'https://neurallearn.lovable.app', desc: 'AI EdTech with personalized learning paths and recommendations', tags: ['AI', 'EdTech', 'React'], icon: '📚', img: 'https://drive.google.com/thumbnail?id=1jxmO9h3FbnKDYAiN9mWXpfR--cN8YF2O&sz=w1200', color: '#EC4899', featured: true },
  { title: 'AI Project Generator', github: null, live: 'https://aiprojecttool.lovable.app', desc: 'Generates complete project ideas with tech stacks and guidance', tags: ['AI', 'React', 'Tools'], icon: '⚡', img: 'https://drive.google.com/thumbnail?id=1X3P5LUi4qynETadfMVPxIhh9WtevWJlZ&sz=w1200', color: '#FBBF24', featured: true },
  { title: 'Real-Time Chatbot', github: 'https://github.com/bhagavan444', live: 'https://example.com', desc: 'Production-grade chatbot with streaming and session memory', tags: ['AI', 'Real-Time', 'React'], icon: '💬', img: 'https://drive.google.com/thumbnail?id=1rJJNdWtrTUESob0nhQmmOcYymNpj2xmYJ&sz=w1200', color: '#6366F1', featured: true }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handle = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  const filters = [
    { id: 'all', name: 'All', icon: '🚀' },
    { id: 'featured', name: 'Featured', icon: '⭐' },
    { id: 'live', name: 'Live', icon: '🌐' },
    { id: 'ai', name: 'AI/ML', icon: '🤖' }
  ];

  const filtered = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'featured') return p.featured;
    if (filter === 'live') return p.live;
    if (filter === 'ai') return p.tags.some(t => ['AI', 'ML', 'NLP'].includes(t));
    return true;
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#000', overflow: 'hidden', padding: '60px 20px', fontFamily: 'system-ui' }}>
      
      {/* Mega Background */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 30%, #1a0033 0%, #000 50%)', animation: 'hueRotate 30s infinite' }} />
      
      {/* Floating Gradient Orbs */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '800px', height: '800px', background: 'radial-gradient(circle, #8B5CF680 0%, transparent 70%)', filter: 'blur(120px)', animation: 'float1 25s infinite' }} />
      <div style={{ position: 'absolute', top: '50%', right: '10%', width: '700px', height: '700px', background: 'radial-gradient(circle, #06B6D480 0%, transparent 70%)', filter: 'blur(120px)', animation: 'float2 30s infinite' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '40%', width: '600px', height: '600px', background: 'radial-gradient(circle, #EC489380 0%, transparent 70%)', filter: 'blur(100px)', animation: 'float3 28s infinite' }} />
      
      {/* Animated Grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(#8B5CF620 2px, transparent 2px), linear-gradient(90deg, #8B5CF620 2px, transparent 2px)', backgroundSize: '80px 80px', opacity: 0.15, animation: 'gridMove 40s linear infinite' }} />
      
      {/* Particles */}
      {[...Array(40)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: Math.random() * 6 + 3 + 'px',
          height: Math.random() * 6 + 3 + 'px',
          background: i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#06B6D4' : '#EC4899',
          borderRadius: '50%',
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          opacity: 0.7,
          boxShadow: `0 0 20px ${i % 3 === 0 ? '#8B5CF6' : i % 3 === 1 ? '#06B6D4' : '#EC4899'}`,
          animation: `particle ${Math.random() * 20 + 15}s linear infinite`,
          animationDelay: Math.random() * 5 + 's'
        }} />
      ))}
      
      {/* Mouse Spotlight */}
      <div style={{
        position: 'fixed',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
        left: mouse.x - 350,
        top: mouse.y - 350,
        pointerEvents: 'none',
        transition: 'all 0.15s',
        zIndex: 1
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1600px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px', animation: 'fadeDown 1.2s ease' }}>
          <div style={{ display: 'inline-block', fontSize: '8rem', marginBottom: '20px', filter: 'drop-shadow(0 0 50px #8B5CF6)', animation: 'iconSpin 20s linear infinite' }}>🚀</div>
          
          <h1 style={{
            fontSize: 'clamp(4rem, 12vw, 9rem)',
            fontWeight: '900',
            background: 'linear-gradient(90deg, #fff, #8B5CF6, #06B6D4, #EC4899, #fff)',
            backgroundSize: '300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'shimmer 6s linear infinite',
            marginBottom: '30px',
            lineHeight: 0.9
          }}>
            PROJECTS
          </h1>
          
          <p style={{ fontSize: '1.5rem', color: '#aaa', maxWidth: '900px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Elite portfolio showcasing AI mastery, full-stack excellence, and production-ready innovations
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {[
              { label: 'PROJECTS', val: projects.length, icon: '📊', color: '#8B5CF6' },
              { label: 'FEATURED', val: projects.filter(p => p.featured).length, icon: '⭐', color: '#FBBF24' },
              { label: 'LIVE APPS', val: projects.filter(p => p.live).length, icon: '🌐', color: '#06B6D4' }
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '25px 40px',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(20px)',
                border: `3px solid ${stat.color}60`,
                borderRadius: '25px',
                boxShadow: `0 0 40px ${stat.color}40`,
                animation: 'float 4s ease-in-out infinite',
                animationDelay: `${i * 0.3}s`
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{stat.icon}</div>
                <div style={{ fontSize: '3rem', fontWeight: '900', color: stat.color, textShadow: `0 0 20px ${stat.color}` }}>{stat.val}</div>
                <div style={{ fontSize: '13px', color: '#999', letterSpacing: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '80px', flexWrap: 'wrap', animation: 'fadeUp 1s ease 0.3s backwards' }}>
          {filters.map(f => (
            <button key={f.id} onClick={() => setFilter(f.id)} style={{
              padding: '18px 40px',
              background: filter === f.id ? 'linear-gradient(135deg, #8B5CF6, #06B6D4)' : 'rgba(255,255,255,0.08)',
              border: `3px solid ${filter === f.id ? '#8B5CF6' : 'rgba(255,255,255,0.2)'}`,
              borderRadius: '50px',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '800',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              transition: 'all 0.4s',
              boxShadow: filter === f.id ? '0 0 50px #8B5CF680' : 'none',
              transform: filter === f.id ? 'scale(1.1)' : 'scale(1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = filter === f.id ? 'scale(1.1)' : 'scale(1)'}>
              <span style={{ fontSize: '22px' }}>{f.icon}</span>
              {f.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '40px' }}>
          {filtered.map((p, i) => (
            <div key={i} onClick={() => setModal(p)} onMouseEnter={() => setActiveCard(i)} onMouseLeave={() => setActiveCard(null)} style={{
              position: 'relative',
              cursor: 'pointer',
              transition: 'all 0.6s cubic-bezier(0.4,0,0.2,1)',
              transform: activeCard === i ? 'scale(1.05) translateY(-15px)' : 'scale(1)',
              animation: `cardPop 0.8s ease ${i * 0.15}s backwards`
            }}>
              
              {/* Glow */}
              <div style={{
                position: 'absolute',
                inset: '-25px',
                background: p.color,
                filter: 'blur(50px)',
                opacity: activeCard === i ? 0.7 : 0,
                transition: 'opacity 0.6s',
                animation: activeCard === i ? 'breathe 3s infinite' : 'none'
              }} />

              <div style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(25px)',
                border: activeCard === i ? `3px solid ${p.color}` : '2px solid rgba(255,255,255,0.1)',
                borderRadius: '35px',
                overflow: 'hidden',
                boxShadow: activeCard === i ? `0 30px 80px ${p.color}50` : '0 20px 50px rgba(0,0,0,0.5)'
              }}>
                
                {/* Badge */}
                {p.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '10px 25px',
                    background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
                    borderRadius: '50px',
                    fontSize: '14px',
                    fontWeight: '900',
                    color: '#000',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 0 30px #FBBF2480',
                    animation: 'pulse 2s infinite'
                  }}>
                    <Star size={16} />
                    FEATURED
                  </div>
                )}

                {/* Image */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img src={p.img} alt={p.title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s',
                    transform: activeCard === i ? 'scale(1.15)' : 'scale(1.05)'
                  }} loading="lazy" />
                  
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent 60%)',
                    opacity: activeCard === i ? 1 : 0.7,
                    transition: 'opacity 0.6s'
                  }} />
                  
                  <div style={{
                    position: 'absolute',
                    top: '25px',
                    left: '25px',
                    fontSize: '6rem',
                    filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.8))',
                    animation: activeCard === i ? 'iconRotate 1s ease' : 'none'
                  }}>
                    {p.icon}
                  </div>

                  {activeCard === i && (
                    <div style={{
                      position: 'absolute',
                      bottom: '30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '12px 30px',
                      background: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(15px)',
                      border: '2px solid rgba(255,255,255,0.4)',
                      borderRadius: '25px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      color: '#fff',
                      fontWeight: '700',
                      animation: 'slideUp 0.5s ease'
                    }}>
                      <Eye size={20} color={p.color} />
                      View Details
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '35px' }}>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '900',
                    color: '#fff',
                    marginBottom: '15px',
                    background: activeCard === i ? `linear-gradient(90deg, ${p.color}, #fff)` : '#fff',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {p.title}
                  </h3>

                  <p style={{ fontSize: '15px', color: '#ccc', lineHeight: 1.7, marginBottom: '25px' }}>{p.desc}</p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                    {p.tags.map((t, idx) => (
                      <span key={idx} style={{
                        padding: '8px 18px',
                        fontSize: '13px',
                        background: `${p.color}25`,
                        border: `2px solid ${p.color}60`,
                        borderRadius: '15px',
                        color: '#e0e0e0',
                        fontWeight: '700',
                        animation: activeCard === i ? `slideIn 0.4s ease ${idx * 0.1}s backwards` : 'none'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{
                        flex: 1,
                        padding: '16px',
                        background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                        borderRadius: '20px',
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: '800',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        border: `2px solid ${p.color}`,
                        boxShadow: `0 10px 30px ${p.color}50`,
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <Rocket size={18} />
                        LIVE DEMO
                      </a>
                    ) : p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{
                        flex: 1,
                        padding: '16px',
                        background: 'rgba(255,255,255,0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderRadius: '20px',
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: '800',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        <Github size={18} />
                        GITHUB
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner Accents */}
                <div style={{ position: 'absolute', top: '15px', left: '15px', width: '50px', height: '50px', borderTop: `3px solid ${p.color}`, borderLeft: `3px solid ${p.color}`, borderTopLeftRadius: '15px', opacity: activeCard === i ? 1 : 0.3, transition: 'opacity 0.6s' }} />
                <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '50px', height: '50px', borderBottom: `3px solid ${p.color}`, borderRight: `3px solid ${p.color}`, borderBottomRightRadius: '15px', opacity: activeCard === i ? 1 : 0.3, transition: 'opacity 0.6s' }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: '100px',
          textAlign: 'center',
          padding: '60px 40px',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(30px)',
          borderRadius: '40px',
          border: '3px solid rgba(139,92,246,0.3)',
          boxShadow: '0 30px 80px rgba(139,92,246,0.3)',
          animation: 'fadeUp 1s ease 1s backwards'
        }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '25px'
          }}>
            Ready to Collaborate?
          </h2>
          <p style={{ fontSize: '1.3rem', color: '#aaa', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Let's build breakthrough solutions together. Reach out for collaborations or custom projects.
          </p>
          <button style={{
            padding: '20px 50px',
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
            border: 'none',
            borderRadius: '50px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '900',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '15px',
            boxShadow: '0 20px 50px rgba(139,92,246,0.5)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
            <Zap size={24} />
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(null)} style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.97)',
          backdropFilter: 'blur(30px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          animation: 'fadeIn 0.3s'
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '1200px',
            width: '100%',
            background: 'rgba(20,20,30,0.95)',
            border: `4px solid ${modal.color}`,
            borderRadius: '40px',
            overflow: 'hidden',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: `0 40px 120px ${modal.color}70`,
            animation: 'zoomIn 0.4s ease'
          }}>
            <div style={{ position: 'relative', height: '400px' }}>
              <img src={modal.img} alt={modal.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent 50%)' }} />
              
              <button onClick={() => setModal(null)} style={{
                position: 'absolute',
                top: '25px',
                right: '25px',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(15px)',
                border: '3px solid rgba(255,255,255,0.4)',
                color: '#fff',
                fontSize: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg) scale(1.1)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0) scale(1)'}>
                <X size={30} />
              </button>
            </div>

            <div style={{ padding: '50px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '30px' }}>
                <span style={{ fontSize: '5rem' }}>{modal.icon}</span>
                <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff' }}>{modal.title}</h2>
              </div>

              <p style={{ fontSize: '1.3rem', color: '#ccc', lineHeight: 2, marginBottom: '40px' }}>{modal.desc}</p>

              <div style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#fff', marginBottom: '20px' }}>Tech Stack</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  {modal.tags.map((t, idx) => (
                    <span key={idx} style={{
                      padding: '10px 22px',
                      fontSize: '14px',
                      background: `${modal.color}25`,
                      border: `2px solid ${modal.color}60`,
                      borderRadius: '20px',
                      color: '#e0e0e0',
                      fontWeight: '700'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                {modal.live && (
                  <a href={modal.live} target="_blank" rel="noopener noreferrer" style={{ 
                    flex: 1,
                    padding: '18px',
                    background: `linear-gradient(135deg, ${modal.color}, ${modal.color}cc)`,
                    borderRadius: '25px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: '800',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: `0 10px 30px ${modal.color}50`,
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <Rocket size={20} />
                    LIVE DEMO
                  </a>
                )}
                {modal.github && (
                  <a href={modal.github
} target="_blank" rel="noopener noreferrer" style={{ 
                    flex: 1,
                    padding: '18px',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '25px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: '800',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <Github size={20} />
                    GITHUB
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