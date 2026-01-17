import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles, Zap, Code, Cloud, Database, Cpu, TrendingUp, Star, Search, Terminal, Rocket, Brain, Globe, Shield, Circle } from 'lucide-react';

const certificationsData = [
  { title: "Full Stack Web Development", image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog", link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view", category: "Web", level: "Advanced", skills: ["React", "Node.js", "MongoDB"] },
  { title: "Python Programming", image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6", link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view", category: "Programming", level: "Advanced", skills: ["Python", "OOP", "Algorithms"] },
  { title: "Java Programming", image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM", link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view", category: "Programming", level: "Advanced", skills: ["Java", "Spring", "Multithreading"] },
  { title: "AWS Cloud", image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9", link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view", category: "Cloud", level: "Professional", skills: ["AWS", "EC2", "S3"] },
  { title: "Azure Fundamentals", image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM", link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view", category: "Cloud", level: "Professional", skills: ["Azure", "Cloud", "DevOps"] },
  { title: "Data Science", image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv", link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view", category: "Data", level: "Advanced", skills: ["Python", "Pandas", "Visualization"] },
  { title: "Machine Learning", image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6", link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view", category: "AI/ML", level: "Expert", skills: ["ML", "AI", "Neural Networks"] },
  { title: "Cloud Computing", image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX", link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view", category: "Cloud", level: "Professional", skills: ["Cloud", "Distributed Systems"] },
  { title: "R Programming", image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-", link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view", category: "Programming", level: "Advanced", skills: ["R", "Statistics", "Data Analysis"] },
  { title: "Art of Programming", image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx", link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view", category: "Programming", level: "Advanced", skills: ["Algorithms", "Problem Solving"] },
  { title: "Machine Learning with Python", image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK", link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view", category: "AI/ML", level: "Expert", skills: ["Python", "Scikit-learn", "TensorFlow"] },
  { title: "Large Language Models", image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s", link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view", category: "AI/ML", level: "Expert", skills: ["LLM", "GPT", "Prompt Engineering"] },
  { title: "React", image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf", link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view", category: "Web", level: "Advanced", skills: ["React", "Hooks", "State Management"] },
  { title: "JavaScript", image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd", link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view", category: "Web", level: "Advanced", skills: ["JavaScript", "ES6+", "Async"] },
  { title: "MLOps", image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP", link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view", category: "DevOps", level: "Professional", skills: ["MLOps", "CI/CD", "Kubernetes"] },
  { title: "CI/CD", image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr", link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view", category: "DevOps", level: "Professional", skills: ["Jenkins", "GitHub Actions", "Docker"] },
  { title: "Django", image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc", link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view", category: "Web", level: "Advanced", skills: ["Django", "Python", "REST API"] },
  { title: "HTML", image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr", link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view", category: "Web", level: "Advanced", skills: ["HTML5", "Semantic", "Accessibility"] },
  { title: "CSS", image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE", link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view", category: "Web", level: "Advanced", skills: ["CSS3", "Flexbox", "Grid"] },
];

const categoryData = {
  Web: { icon: Code, color: '#00d4ff', glow: 'rgba(0,212,255,0.5)' },
  Programming: { icon: Terminal, color: '#ff006e', glow: 'rgba(255,0,110,0.5)' },
  Cloud: { icon: Cloud, color: '#8338ec', glow: 'rgba(131,56,236,0.5)' },
  Data: { icon: Database, color: '#06ffa5', glow: 'rgba(6,255,165,0.5)' },
  "AI/ML": { icon: Brain, color: '#ffbe0b', glow: 'rgba(255,190,11,0.5)' },
  DevOps: { icon: Rocket, color: '#fb5607', glow: 'rgba(251,86,7,0.5)' }
};

export default function FuturisticCertifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  const categories = ["All", ...Object.keys(categoryData)];
  const filteredCerts = certificationsData.filter(cert => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cert.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    const stars = [...Array(150)].map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random()
    }));

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 200, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', setCanvasSize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <div
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #000000 0%, #0a0e27 50%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px var(--glow), 0 0 40px var(--glow); } 50% { box-shadow: 0 0 40px var(--glow), 0 0 80px var(--glow); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes neon { 0%, 100% { text-shadow: 0 0 10px var(--neon), 0 0 20px var(--neon), 0 0 30px var(--neon); } 50% { text-shadow: 0 0 20px var(--neon), 0 0 40px var(--neon), 0 0 60px var(--neon); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes borderFlow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .slideIn { animation: slideIn 0.8s ease-out forwards; }
        .glow { animation: glow 2s ease-in-out infinite; }
        .neon { animation: neon 1.5s ease-in-out infinite; }
        .shimmer { background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent); background-size: 200% 100%; animation: shimmer 2s infinite; }
        * { -webkit-tap-highlight-color: transparent; }
        
        .holographic {
          background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(255,0,110,0.1), rgba(131,56,236,0.1));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .cyber-border {
          position: relative;
          overflow: hidden;
        }
        
        .cyber-border::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          animation: scan 2s linear infinite;
        }
        
        .grid-bg {
          background-image: 
            linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        @media (max-width: 768px) {
          .grid-bg { background-size: 30px 30px; }
        }
      `}</style>

      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, zIndex: 0 }} />
      
      <div className="grid-bg" style={{ position: 'fixed', inset: 0, zIndex: 1, opacity: 0.3 }} />

      {/* Cursor Glow */}
      <div style={{
        position: 'fixed',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.15), transparent 70%)',
        left: mousePos.x - 300,
        top: mousePos.y - 300,
        pointerEvents: 'none',
        filter: 'blur(60px)',
        transition: 'left 0.1s, top 0.1s',
        zIndex: 2,
      }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
        
        {/* Hero Section */}
        <div className="slideIn" style={{ textAlign: 'center', padding: '60px 20px 40px', position: 'relative' }}>
          
          {/* Floating Orbs */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="float" style={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: `radial-gradient(circle, ${['rgba(0,212,255,0.3)', 'rgba(255,0,110,0.3)', 'rgba(131,56,236,0.3)'][i]}, transparent)`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              filter: 'blur(40px)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`,
              pointerEvents: 'none',
            }} />
          ))}

          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '30px' }}>
            <div className="pulse" style={{
              width: '120px',
              height: '120px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00d4ff, #ff006e)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              '--glow': 'rgba(0,212,255,0.8)',
            }}>
              <Shield style={{ width: '60px', height: '60px', color: '#fff', position: 'relative', zIndex: 2 }} />
              <div className="glow" style={{
                position: 'absolute',
                inset: -5,
                borderRadius: '50%',
                border: '3px solid rgba(0,212,255,0.5)',
                '--glow': 'rgba(0,212,255,0.5)',
              }} />
            </div>
            
            {[...Array(6)].map((_, i) => (
              <Circle key={i} style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-80px)`,
                width: '12px',
                height: '12px',
                color: '#00d4ff',
                fill: '#00d4ff',
                filter: 'drop-shadow(0 0 8px #00d4ff)',
              }} className="pulse" />
            ))}
          </div>

          <h1 className="neon" style={{
            fontSize: 'clamp(2.5rem, 12vw, 6rem)',
            fontWeight: '900',
            background: 'linear-gradient(90deg, #00d4ff, #ff006e, #8338ec, #06ffa5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% auto',
            animation: 'shimmer 3s linear infinite, neon 1.5s ease-in-out infinite',
            marginBottom: '20px',
            letterSpacing: '0.05em',
            '--neon': '#00d4ff',
          }}>
            CERTIFICATIONS
          </h1>

          <div className="cyber-border holographic" style={{
            display: 'inline-block',
            padding: '12px 32px',
            borderRadius: '50px',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)',
            color: '#00d4ff',
            fontWeight: '600',
            letterSpacing: '0.1em',
            '--accent': '#00d4ff',
          }}>
            <Terminal style={{ width: '20px', height: '20px', display: 'inline', marginRight: '10px', verticalAlign: 'middle' }} />
            DEVELOPER TALENT SHOWCASE
          </div>

          {/* Stats HUD */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 'clamp(15px, 4vw, 40px)', 
            marginTop: '50px',
            flexWrap: 'wrap',
          }}>
            {[
              { icon: Award, value: '19+', label: 'CERTS', color: '#00d4ff' },
              { icon: TrendingUp, value: '6', label: 'DOMAINS', color: '#ff006e' },
              { icon: Sparkles, value: '100%', label: 'VERIFIED', color: '#8338ec' },
            ].map((stat, i) => (
              <div key={i} className="slideIn cyber-border holographic" style={{
                padding: 'clamp(15px, 3vw, 25px)',
                borderRadius: '20px',
                animationDelay: `${0.3 + i * 0.1}s`,
                '--accent': stat.color,
                minWidth: '140px',
              }}>
                <div className="pulse" style={{
                  width: 'clamp(50px, 10vw, 70px)',
                  height: 'clamp(50px, 10vw, 70px)',
                  margin: '0 auto 12px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 30px ${stat.color}60`,
                }}>
                  <stat.icon style={{ width: 'clamp(25px, 5vw, 35px)', height: 'clamp(25px, 5vw, 35px)', color: '#fff' }} />
                </div>
                <div style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 'bold', color: stat.color, marginBottom: '5px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.9rem)', color: '#64c8ff', letterSpacing: '0.15em', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter */}
        <div className="slideIn" style={{ 
          marginBottom: '40px',
          animationDelay: '0.6s',
        }}>
          <div className="cyber-border holographic" style={{
            padding: 'clamp(15px, 3vw, 20px)',
            borderRadius: '20px',
            '--accent': '#00d4ff',
          }}>
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Search style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#00d4ff',
                zIndex: 1,
              }} />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 50px',
                  borderRadius: '12px',
                  border: '2px solid rgba(0,212,255,0.3)',
                  background: 'rgba(0,0,0,0.4)',
                  color: '#fff',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  outline: 'none',
                  transition: 'all 0.3s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00d4ff';
                  e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0,212,255,0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '10px', 
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              {categories.map((cat) => {
                const catInfo = categoryData[cat];
                const Icon = catInfo?.icon || Globe;
                const isSelected = selectedCategory === cat;
                
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={isSelected ? 'glow' : ''}
                    style={{
                      padding: 'clamp(10px, 2vw, 14px) clamp(16px, 3vw, 24px)',
                      borderRadius: '12px',
                      border: `2px solid ${isSelected ? catInfo?.color || '#00d4ff' : 'rgba(255,255,255,0.2)'}`,
                      background: isSelected 
                        ? `linear-gradient(135deg, ${catInfo?.color || '#00d4ff'}40, ${catInfo?.color || '#00d4ff'}20)`
                        : 'rgba(0,0,0,0.3)',
                      color: isSelected ? catInfo?.color || '#00d4ff' : '#fff',
                      fontSize: 'clamp(0.75rem, 2vw, 0.95rem)',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.3s',
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: isSelected ? `0 0 25px ${catInfo?.glow || 'rgba(0,212,255,0.5)'}` : 'none',
                      '--glow': catInfo?.glow || 'rgba(0,212,255,0.5)',
                      letterSpacing: '0.05em',
                    }}
                    onMouseEnter={(e) => !isSelected && (e.currentTarget.style.borderColor = catInfo?.color || '#00d4ff')}
                    onMouseLeave={(e) => !isSelected && (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
                  >
                    {cat !== "All" && <Icon style={{ width: 'clamp(14px, 3vw, 18px)', height: 'clamp(14px, 3vw, 18px)' }} />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="slideIn" style={{
          textAlign: 'center',
          color: '#64c8ff',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          marginBottom: '30px',
          fontWeight: '600',
          letterSpacing: '0.05em',
          animationDelay: '0.7s',
        }}>
          <Zap style={{ width: '16px', height: '16px', display: 'inline', marginRight: '8px', color: '#ffbe0b' }} />
          {filteredCerts.length} / {certificationsData.length} ACTIVE
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(20px, 3vw, 30px)',
        }}>
          {filteredCerts.map((cert, i) => {
            const catInfo = categoryData[cert.category];
            const isHovered = hoveredIndex === i;

            return (
              <a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="slideIn cyber-border"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: 'block',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  background: 'rgba(0,0,0,0.4)',
                  border: `2px solid rgba(255,255,255,0.1)`,
                  boxShadow: isHovered ? `0 0 30px ${catInfo?.glow || 'rgba(0,212,255,0.5)'}` : 'none',
                  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                  transition: 'all 0.3s',
                  animationDelay: `${0.8 + i * 0.1}s`,
                  '--accent': catInfo?.color || '#00d4ff',
                }}
              >
                <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', overflow: 'hidden' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{  
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', 
                      transition: 'transform 0.3s',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                    color: '#fff',  
                    marginBottom: '10px',
                    fontWeight: '700',
                  }}>
                    {cert.title}
                  </h3>
                  <div style={{
                    fontSize: 'clamp(0.8rem, 2vw, 1rem)',
                    color: catInfo?.color || '#00d4ff',
                    fontWeight: '600',
                    marginBottom: '10px',
                  }}>
                    {cert.category} &bull; {cert.level}
                  </div>
                  <div style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}>
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                        color: '#64c8ff',
                        background: 'rgba(255,255,255,0.1)',
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontWeight: '500',
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}