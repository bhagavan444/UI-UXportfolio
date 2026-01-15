import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles, Zap, Code, Cloud, Database, Cpu, TrendingUp, Star, Hexagon } from 'lucide-react';

const certificationsData = [
  { title: "Full Stack Web Development", image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog", link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view", category: "Web", desc: "Complete web applications from frontend to backend, including UI design, server-side logic, database integration, and deployment." },
  { title: "Python Programming", image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6", link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view", category: "Programming", desc: "Strong fundamentals in Python programming, data types, control structures, functions, and real-world problem-solving." },
  { title: "Java Programming", image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM", link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view", category: "Programming", desc: "Solid foundation in Java OOP concepts, exception handling, multithreading, and building structured applications." },
  { title: "AWS Cloud", image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9", link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view", category: "Cloud", desc: "Cloud computing fundamentals using AWS, including EC2, storage services, networking, and cloud deployments." },
  { title: "Azure Fundamentals", image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM", link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view", category: "Cloud", desc: "Core Azure cloud concepts: virtual machines, storage, networking, and cloud security for enterprise environments." },
  { title: "Data Science", image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv", link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view", category: "Data", desc: "Data analysis workflows including cleaning, visualization, exploratory analysis, and drawing insights from datasets." },
  { title: "Machine Learning", image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6", link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view", category: "AI/ML", desc: "Core ML algorithms: regression, classification, clustering, with model evaluation and real-world use cases." },
  { title: "Cloud Computing", image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX", link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view", category: "Cloud", desc: "Cloud computing concepts: virtualization, scalability, distributed systems, and modern application deployment." },
  { title: "R Programming", image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-", link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view", category: "Programming", desc: "R programming for statistical analysis, data visualization, and exploratory data analysis in research." },
  { title: "Art of Programming", image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx", link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view", category: "Programming", desc: "Logical thinking, problem-solving, programming best practices, code structure, and algorithmic thinking." },
  { title: "Machine Learning with Python", image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK", link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view", category: "AI/ML", desc: "Applied ML using Python libraries like Scikit-learn to build, train, and evaluate predictive models." },
  { title: "Large Language Models (LLM)", image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s", link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view", category: "AI/ML", desc: "Fundamentals of large language models, prompt engineering, and real-world generative AI applications." },
  { title: "React", image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf", link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view", category: "Web", desc: "Dynamic and reusable UI with React, focusing on components, hooks, state management, and modern frontend." },
  { title: "JavaScript", image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd", link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view", category: "Web", desc: "Core JavaScript concepts: DOM manipulation, async programming, and building interactive web applications." },
  { title: "MLOps", image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP", link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view", category: "DevOps", desc: "MLOps practices: model versioning, deployment, monitoring, and maintaining ML systems in production." },
  { title: "CI/CD", image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr", link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view", category: "DevOps", desc: "Continuous Integration and Deployment concepts to automate testing, building, and deploying applications." },
  { title: "Django", image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc", link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view", category: "Web", desc: "Backend web applications using Django: MVC architecture, database models, authentication, and RESTful services." },
  { title: "HTML", image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr", link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view", category: "Web", desc: "Fundamentals of HTML for structuring web pages, accessibility, and semantic markup for modern websites." },
  { title: "CSS", image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE", link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view", category: "Web", desc: "CSS for styling responsive web pages, layouts, animations, and creating visually appealing interfaces." },
];

const categoryIcons = { Web: Code, Programming: Cpu, Cloud: Cloud, Data: Database, "AI/ML": Sparkles, DevOps: Zap };
const categoryColors = {
  Web: { from: '#3b82f6', to: '#06b6d4' },
  Programming: { from: '#a855f7', to: '#ec4899' },
  Cloud: { from: '#6366f1', to: '#8b5cf6' },
  Data: { from: '#10b981', to: '#059669' },
  "AI/ML": { from: '#f97316', to: '#ef4444' },
  DevOps: { from: '#eab308', to: '#f59e0b' }
};

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  const categories = ["All", ...new Set(certificationsData.map(c => c.category))];
  const filteredCerts = selectedCategory === "All" ? certificationsData : certificationsData.filter(c => c.category === selectedCategory);

  useEffect(() => {
    setParticles([...Array(100)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      color: ['#a855f7', '#ec4899', '#3b82f6', '#10b981', '#f97316'][Math.floor(Math.random() * 5)],
    })));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      setParticles(prev => prev.map(p => {
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;
        
        if (newX < 0 || newX > canvas.width) p.vx *= -1;
        if (newY < 0 || newY > canvas.height) p.vy *= -1;
        
        newX = Math.max(0, Math.min(canvas.width, newX));
        newY = Math.max(0, Math.min(canvas.height, newY));

        ctx.beginPath();
        ctx.arc(newX, newY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();

        return { ...p, x: newX, y: newY };
      }));

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${1 - dist / 120})`;
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
  }, [particles]);

  return (
    <div
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #0a0a0a 50%, #000 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(180deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; } }
        @keyframes glow { 0%, 100% { box-shadow: 0 0 20px var(--glow-color), 0 0 40px var(--glow-color); } 50% { box-shadow: 0 0 40px var(--glow-color), 0 0 80px var(--glow-color); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes borderGlow { 0%, 100% { border-color: var(--border-start); box-shadow: 0 0 30px var(--border-start); } 50% { border-color: var(--border-end); box-shadow: 0 0 50px var(--border-end); } }
        @keyframes ripple { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(2.5); opacity: 0; } }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .glow { animation: glow 3s ease-in-out infinite; }
        .shimmer { animation: shimmer 3s linear infinite; background-size: 200% 100%; }
        .spin { animation: spin 20s linear infinite; }
        .bounce { animation: bounce 2s ease-in-out infinite; }
        .slideIn { animation: slideIn 0.6s ease-out forwards; }
        .borderGlow { animation: borderGlow 3s ease-in-out infinite; }
      `}</style>

      {/* Particle Network Canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

      {/* Mouse Spotlight */}
      <div style={{
        position: 'absolute',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent 70%)',
        left: mousePos.x - 300,
        top: mousePos.y - 300,
        pointerEvents: 'none',
        filter: 'blur(80px)',
        transition: 'left 0.3s, top 0.3s',
      }} />

      {/* Rotating Hexagons */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className="spin" style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: `${200 + i * 80}px`,
          height: `${200 + i * 80}px`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.1,
          animationDelay: `${i * -2}s`,
          animationDuration: `${15 + i * 5}s`,
        }}>
          <Hexagon style={{ width: '100%', height: '100%', color: Object.values(categoryColors)[i % 6].from }} />
        </div>
      ))}

      <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        {/* Header */}
        <div className="slideIn" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="bounce" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            marginBottom: '24px',
            position: 'relative',
            '--glow-color': '#a855f7',
          }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{
                position: 'absolute',
                inset: -2,
                borderRadius: '50%',
                border: '2px solid #a855f7',
                animation: 'ripple 2s ease-out infinite',
                animationDelay: `${i * 0.6}s`,
              }} />
            ))}
            <Award style={{ width: '50px', height: '50px', color: '#fff', position: 'relative', zIndex: 1 }} />
          </div>

          <h1 className="shimmer" style={{
            fontSize: 'clamp(2.5rem, 10vw, 5rem)',
            fontWeight: '900',
            marginBottom: '20px',
            background: 'linear-gradient(90deg, #a855f7, #ec4899, #3b82f6, #10b981, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
          }}>
            CERTIFICATIONS
          </h1>

          {/* Animated Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
            {[
              { icon: Award, value: '19+', label: 'Certificates', color: '#a855f7', delay: 0 },
              { icon: TrendingUp, value: '6', label: 'Categories', color: '#3b82f6', delay: 0.2 },
              { icon: Sparkles, value: '100%', label: 'Verified', color: '#ec4899', delay: 0.4 },
            ].map((stat, i) => (
              <div key={i} className="slideIn pulse" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '20px',
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255,255,255,0.1)',
                animationDelay: `${stat.delay}s`,
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 10px 30px ${stat.color}60`,
                }}>
                  <stat.icon style={{ width: '30px', height: '30px', color: '#fff' }} />
                </div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: '#9ca3af', fontWeight: '600' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Category Filters */}
        <div className="slideIn" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          marginBottom: '60px', 
          flexWrap: 'wrap',
          animationDelay: '0.6s',
        }}>
          {categories.map((cat, i) => {
            const Icon = categoryIcons[cat] || Award;
            const colors = categoryColors[cat] || categoryColors.Web;
            const isSelected = selectedCategory === cat;
            
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={isSelected ? 'glow' : ''}
                style={{
                  padding: '14px 26px',
                  borderRadius: '50px',
                  border: `3px solid ${isSelected ? colors.from : 'rgba(255,255,255,0.2)'}`,
                  background: isSelected 
                    ? `linear-gradient(135deg, ${colors.from}, ${colors.to})`
                    : 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isSelected ? 'scale(1.1) translateY(-4px)' : 'scale(1)',
                  boxShadow: isSelected ? `0 15px 40px ${colors.from}60` : '0 5px 15px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  '--glow-color': colors.from,
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
              >
                {cat !== "All" && <Icon style={{ width: '18px', height: '18px' }} />}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {filteredCerts.map((cert, i) => {
            const Icon = categoryIcons[cert.category];
            const colors = categoryColors[cert.category];
            const isHovered = hoveredCard === i;

            return (
              <div
                key={i}
                className="slideIn"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(15,23,42,0.4)',
                  backdropFilter: 'blur(20px)',
                  border: `3px solid ${isHovered ? colors.from : 'rgba(255,255,255,0.1)'}`,
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isHovered ? 'translateY(-20px) rotateX(5deg) scale(1.03)' : 'translateY(0) rotateX(0deg) scale(1)',
                  boxShadow: isHovered 
                    ? `0 30px 80px ${colors.from}60, inset 0 0 60px ${colors.from}20` 
                    : '0 15px 40px rgba(0,0,0,0.5)',
                  cursor: 'pointer',
                  animationDelay: `${0.8 + i * 0.1}s`,
                  '--border-start': colors.from,
                  '--border-end': colors.to,
                }}
              >
                {/* Animated Border Glow */}
                {isHovered && (
                  <div className="borderGlow" style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '24px',
                    padding: '4px',
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    zIndex: -1,
                  }} />
                )}

                {/* Floating Stars on Hover */}
                {isHovered && [...Array(6)].map((_, si) => (
                  <Star key={si} className="float" style={{
                    position: 'absolute',
                    left: `${10 + si * 15}%`,
                    top: `${10 + (si % 2) * 40}%`,
                    width: '16px',
                    height: '16px',
                    color: colors.from,
                    animationDelay: `${si * 0.2}s`,
                    fill: colors.from,
                  }} />
                ))}

                {/* Image Section */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease',
                      transform: isHovered ? 'scale(1.2) rotate(2deg)' : 'scale(1)',
                      filter: isHovered ? 'brightness(1.2) saturate(1.3)' : 'brightness(1)',
                    }}
                  />
                  
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 0%, ${colors.from}40 100%)`,
                  }} />

                  {/* Glowing Category Badge */}
                  <div className="pulse" style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '10px 18px',
                    borderRadius: '50px',
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: `0 10px 30px ${colors.from}80`,
                    border: '2px solid rgba(255,255,255,0.3)',
                  }}>
                    <Icon style={{ width: '16px', height: '16px' }} />
                    {cert.category}
                  </div>

                  {/* Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, ${colors.from}e0, ${colors.to}e0)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                    <div className="pulse" style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #fff',
                    }}>
                      <ExternalLink style={{ width: '32px', height: '32px', color: '#fff' }} />
                    </div>
                  </div>
                </div>
                {/* Content Section */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px', color: '#fff' }}>{cert.title}</h3>
                  <p style={{ fontSize: '14px', color: '#d1d5db', marginBottom: '16px', minHeight: '48px' }}>{cert.desc}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                      color: '#fff',
                      fontWeight: '600',
                      fontSize: '14px',
                      textDecoration: 'none',
                      boxShadow: `0 10px 30px ${colors.from}80`,
                    }}>
                    View Certificate
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
