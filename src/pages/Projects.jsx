import { useState, useEffect } from "react";
import { Eye, Github, Rocket, Star, X, Sparkles } from "lucide-react";

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

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div style={{position: 'relative', minHeight: '100vh', background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)', padding: '80px 20px', overflow: 'hidden'}}>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.05); opacity: 1; } }
      `}</style>

      {/* Animated Background */}
      <div style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'}}>
        {[...Array(15)].map((_, i) => (
          <div key={i} style={{position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: `radial-gradient(circle, ${projects[i % projects.length].color}20, transparent)`, filter: 'blur(60px)', left: `${(i * 23) % 100}%`, top: `${(i * 31) % 100}%`, animation: `float ${8 + i}s ease-in-out infinite`, animationDelay: `${i * 0.5}s`}} />
        ))}
        <div style={{position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(139,92,246,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px', animation: 'glow 3s ease-in-out infinite'}} />
      </div>

      <div style={{position: 'relative', maxWidth: '1400px', margin: '0 auto', zIndex: 1}}>
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '70px', opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-30px)', transition: 'all 1s ease'}}>
          <div style={{fontSize: '6rem', marginBottom: '20px', animation: 'float 3s ease-in-out infinite'}}>🚀</div>
          <h1 style={{fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', lineHeight: 1, margin: 0, background: 'linear-gradient(135deg, #fff, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '20px'}}>
            Elite Projects
          </h1>
          <p style={{fontSize: '1.3rem', color: '#9ca3af', maxWidth: '700px', margin: '0 auto 40px'}}>
            Showcasing <span style={{color: '#8B5CF6', fontWeight: '700'}}>AI mastery</span> & full-stack innovations
          </p>
          
          {/* Stats */}
          <div style={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap'}}>
            {[{l: 'PROJECTS', v: projects.length, c: '#8B5CF6'}, {l: 'FEATURED', v: projects.filter(p => p.featured).length, c: '#FBBF24'}, {l: 'LIVE', v: projects.filter(p => p.live).length, c: '#06B6D4'}].map((s, i) => (
              <div key={i} style={{padding: '20px 35px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: `2px solid ${s.c}40`, borderRadius: '20px', animation: `pulse 2s ease-in-out ${i * 0.2}s infinite`}}>
                <div style={{fontSize: '2.5rem', fontWeight: '900', color: s.c, marginBottom: '5px'}}>{s.v}</div>
                <div style={{fontSize: '12px', color: '#9ca3af', fontWeight: '600', letterSpacing: '0.1em'}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid - 2 per row */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px'}}>
          {projects.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setModal(p)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                opacity: visible ? 1 : 0,
                animation: `slideUp 0.8s ease ${i * 0.1}s backwards`,
                transform: hover === i ? 'translateY(-10px) scale(1.02)' : 'scale(1)',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              {/* Glow */}
              <div style={{position: 'absolute', inset: '-20px', background: `radial-gradient(circle, ${p.color}60, transparent)`, filter: 'blur(40px)', opacity: hover === i ? 0.8 : 0, transition: 'opacity 0.4s'}} />
              
              {/* Card */}
              <div style={{position: 'relative', background: 'rgba(255,255,255,0.05)', border: `2px solid ${hover === i ? p.color : 'rgba(255,255,255,0.1)'}`, borderRadius: '24px', overflow: 'hidden', backdropFilter: 'blur(20px)', boxShadow: hover === i ? `0 30px 70px ${p.color}40` : '0 15px 40px rgba(0,0,0,0.5)', transition: 'all 0.4s'}}>
                
                {/* Featured Badge */}
                {p.featured && (
                  <div style={{position: 'absolute', top: '15px', right: '15px', display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: 'linear-gradient(135deg, #FBBF24, #F59E0B)', borderRadius: '20px', fontSize: '11px', fontWeight: '700', color: '#000', zIndex: 10, boxShadow: '0 5px 15px rgba(251,191,36,0.4)'}}>
                    <Star style={{width: '14px', height: '14px'}} />
                    FEATURED
                  </div>
                )}

                {/* Image */}
                <div style={{position: 'relative', height: '240px', overflow: 'hidden'}}>
                  <img src={p.img} alt={p.title} style={{width: '100%', height: '100%', objectFit: 'cover', transform: hover === i ? 'scale(1.1)' : 'scale(1)', transition: 'transform 0.5s'}} loading="lazy" />
                  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', opacity: hover === i ? 0.5 : 0.7, transition: 'opacity 0.4s'}} />
                  
                  {/* Icon */}
                  <div style={{position: 'absolute', top: '15px', left: '15px', fontSize: '2.5rem', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))'}}>{p.icon}</div>
                  
                  {/* View Button */}
                  {hover === i && (
                    <div style={{position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'rgba(255,255,255,0.95)', borderRadius: '30px', fontSize: '14px', fontWeight: '700', color: '#000', boxShadow: '0 5px 20px rgba(0,0,0,0.3)'}}>
                      <Eye style={{width: '18px', height: '18px', color: p.color}} />
                      VIEW DETAILS
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{padding: '30px'}}>
                  <h3 style={{fontSize: '1.6rem', fontWeight: '800', marginBottom: '12px', color: '#fff'}}>{p.title}</h3>
                  <p style={{fontSize: '0.95rem', color: '#d1d5db', marginBottom: '20px', lineHeight: 1.6}}>{p.desc}</p>

                  {/* Tags */}
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px'}}>
                    {p.tags.map((tag, j) => (
                      <div key={j} style={{padding: '6px 14px', border: `1.5px solid ${p.color}50`, background: `${p.color}15`, borderRadius: '20px', fontSize: '12px', color: '#fff', fontWeight: '600'}}>
                        {tag}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div style={{display: 'flex', gap: '12px'}}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: `linear-gradient(135deg, ${p.color}, ${p.color}CC)`, borderRadius: '30px', fontSize: '13px', fontWeight: '700', color: '#fff', textDecoration: 'none', boxShadow: `0 10px 25px ${p.color}40`, transition: 'transform 0.3s', transform: hover === i ? 'scale(1.05)' : 'scale(1)'}}>
                        <Rocket style={{width: '16px', height: '16px'}} />
                        LIVE DEMO
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'rgba(255,255,255,0.08)', borderRadius: '30px', fontSize: '13px', fontWeight: '700', color: '#9ca3af', textDecoration: 'none', transition: 'all 0.3s', transform: hover === i ? 'scale(1.05)' : 'scale(1)'}}>
                        <Github style={{width: '16px', height: '16px'}} />
                        GITHUB
                      </a>
                    )}
                  </div>
                </div>

                {/* Corner Accents */}
                <div style={{position: 'absolute', top: '15px', left: '15px', width: '30px', height: '30px', borderTop: `3px solid ${p.color}`, borderLeft: `3px solid ${p.color}`, borderTopLeftRadius: '12px', opacity: hover === i ? 1 : 0.3, transition: 'opacity 0.4s'}} />
                <div style={{position: 'absolute', bottom: '15px', right: '15px', width: '30px', height: '30px', borderBottom: `3px solid ${p.color}`, borderRight: `3px solid ${p.color}`, borderBottomRightRadius: '12px', opacity: hover === i ? 1 : 0.3, transition: 'opacity 0.4s'}} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(null)} style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(15px)', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px', zIndex: 1000}}>
          <div onClick={(e) => e.stopPropagation()} style={{position: 'relative', background: 'rgba(10,10,10,0.95)', border: `3px solid ${modal.color}`, borderRadius: '24px', overflow: 'hidden', maxWidth: '900px', width: '100%', maxHeight: '90vh', overflowY: 'auto', boxShadow: `0 50px 100px ${modal.color}50`}}>
            
            {/* Animated Glow */}
            <div style={{position: 'absolute', inset: '-40px', background: `radial-gradient(circle, ${modal.color}40, transparent 70%)`, filter: 'blur(60px)', animation: 'pulse 3s ease-in-out infinite'}} />
            
            {/* Image */}
            <div style={{position: 'relative', height: '300px'}}>
              <img src={modal.img} alt={modal.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} loading="eager" />
              <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'}} />
            </div>

            {/* Content */}
            <div style={{position: 'relative', padding: '35px', zIndex: 1}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px'}}>
                <span style={{fontSize: '3rem'}}>{modal.icon}</span>
                <h2 style={{fontSize: '2.2rem', fontWeight: '900', color: '#fff', margin: 0}}>{modal.title}</h2>
              </div>

              <p style={{fontSize: '1.15rem', color: '#d1d5db', lineHeight: 1.7, marginBottom: '30px'}}>{modal.desc}</p>

              <div style={{marginBottom: '30px'}}>
                <h3 style={{fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '15px'}}>Tech Stack</h3>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '12px'}}>
                  {modal.tags.map((tag, i) => (
                    <div key={i} style={{padding: '10px 18px', border: `2px solid ${modal.color}60`, background: `${modal.color}25`, borderRadius: '25px', fontSize: '14px', color: '#fff', fontWeight: '600'}}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{display: 'flex', gap: '15px'}}>
                {modal.live && (
                  <a href={modal.live} target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: `linear-gradient(135deg, ${modal.color}, ${modal.color}CC)`, borderRadius: '30px', fontSize: '15px', fontWeight: '700', color: '#fff', textDecoration: 'none', boxShadow: `0 10px 30px ${modal.color}50`}}>
                    <Rocket style={{width: '20px', height: '20px'}} />
                    LIVE DEMO
                  </a>
                )}
                {modal.github && (
                  <a href={modal.github} target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 28px', background: 'rgba(255,255,255,0.1)', borderRadius: '30px', fontSize: '15px', fontWeight: '700', color: '#9ca3af', textDecoration: 'none'}}>
                    <Github style={{width: '20px', height: '20px'}} />
                    GITHUB
                  </a>
                )}
              </div>
            </div>

            {/* Close Button */}
            <button onClick={() => setModal(null)} style={{position: 'absolute', top: '20px', right: '20px', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50%', cursor: 'pointer', backdropFilter: 'blur(10px)', transition: 'all 0.3s'}}>
              <X style={{width: '24px', height: '24px', color: '#fff'}} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}