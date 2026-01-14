import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpeg";
import { Mail, Phone, Linkedin, Github, ExternalLink, Code2, Brain, Database, Server, Zap, Award, Briefcase, Terminal, Globe, Rocket, Flame, Box, Cloud, GitBranch, Layers, Sparkles, Star, Crown } from "lucide-react";

export default function ProHero() {
  const [v, setV] = useState(false);
  const [txt, setTxt] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const roles = ["AI Engineer", "Full-Stack Dev", "ML Specialist", "MERN Expert"];
  const icons = [
    { I: Code2, l: "React", c: "#61DAFB" }, { I: Terminal, l: "Python", c: "#3776AB" },
    { I: Zap, l: "JS", c: "#F7DF1E" }, { I: Flame, l: "Java", c: "#E76F00" },
    { I: Layers, l: "C++", c: "#00599C" }, { I: Database, l: "Mongo", c: "#47A248" },
    { I: Server, l: "Node", c: "#339933" }, { I: Brain, l: "AI/ML", c: "#FF6F00" },
    { I: Box, l: "Docker", c: "#2496ED" }, { I: GitBranch, l: "Git", c: "#F05032" },
    { I: Cloud, l: "AWS", c: "#FF9900" }, { I: Globe, l: "SQL", c: "#4479A1" }
  ];

  useEffect(() => { setTimeout(() => setV(true), 100); }, []);

  useEffect(() => {
    const spd = del ? 30 : 70;
    const t = roles[idx];
    const timer = setTimeout(() => {
      if (!del) {
        if (txt.length < t.length) setTxt(t.substring(0, txt.length + 1));
        else setTimeout(() => setDel(true), 1500);
      } else {
        if (txt.length > 0) setTxt(t.substring(0, txt.length - 1));
        else { setDel(false); setIdx((idx + 1) % roles.length); }
      }
    }, spd);
    return () => clearTimeout(timer);
  }, [txt, del, idx]);

  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  };

  const stats = [
    { i: Briefcase, v: "3", l: "Internships", d: "Production" },
    { i: Rocket, v: "5+", l: "Projects", d: "Live Apps" },
    { i: Award, v: "13+", l: "Certifications", d: "Google, IBM" }
  ];

  const tech = [
    { i: Code2, l: "MERN", c: "#60a5fa" }, { i: Brain, l: "TensorFlow", c: "#c084fc" },
    { i: Database, l: "MongoDB", c: "#34d399" }, { i: Server, l: "AWS", c: "#fb923c" }
  ];

  const links = [
    { i: Github, l: "GitHub", h: "#", c: "#c084fc" },
    { i: Linkedin, l: "LinkedIn", h: "#", c: "#60a5fa" },
    { i: Mail, l: "Email", h: "mailto:example@gmail.com", c: "#22d3ee" }
  ];

  return (
    <div onMouseMove={handleMove} style={{ position: 'relative', minHeight: '100vh', background: 'linear-gradient(135deg, #0a0118, #0f0a1e, #1a0b2e)', overflow: 'hidden', display: 'flex', alignItems: 'center', padding: '2rem 1rem' }}>
      
      {/* Animated Background Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '15%', left: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)', filter: 'blur(90px)', animation: 'float1 15s ease-in-out infinite', transform: `translate(${mouse.x * 40}px, ${mouse.y * 30}px)`, transition: 'transform 0.3s' }} />
        <div style={{ position: 'absolute', top: '20%', right: '10%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(168,85,247,0.25), transparent 70%)', filter: 'blur(100px)', animation: 'float2 18s ease-in-out infinite', transform: `translate(${-mouse.x * 50}px, ${mouse.y * 40}px)`, transition: 'transform 0.3s' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '30%', width: '480px', height: '480px', background: 'radial-gradient(circle, rgba(236,72,153,0.22), transparent 70%)', filter: 'blur(95px)', animation: 'float3 20s ease-in-out infinite', transform: `translate(${mouse.x * 35}px, ${-mouse.y * 35}px)`, transition: 'transform 0.3s' }} />
      </div>

      {/* Grid Pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(96,165,250,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.3, animation: 'gridMove 20s linear infinite' }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', gap: '3rem', alignItems: 'center' }}>
          
          {/* Profile Image Section */}
          <div style={{ position: 'relative', flexShrink: 0, width: window.innerWidth < 768 ? '300px' : '400px', height: window.innerWidth < 768 ? '300px' : '400px', opacity: v ? 1 : 0, transform: v ? 'scale(1)' : 'scale(0.8)', transition: 'all 1.2s cubic-bezier(0.34,1.56,0.64,1)' }}>
            
            {/* Mega Glow */}
            <div style={{ position: 'absolute', inset: '-60px', background: 'radial-gradient(circle, rgba(34,211,238,0.4), rgba(168,85,247,0.35), rgba(236,72,153,0.3), transparent 65%)', filter: 'blur(80px)', animation: 'pulseGlow 4s ease-in-out infinite' }} />

            {/* Multi-Ring System */}
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ position: 'absolute', inset: `${-20 - i * 15}px`, border: `${3 - i * 0.5}px solid`, borderColor: i % 2 ? 'transparent rgba(34,211,238,0.6) transparent rgba(168,85,247,0.5)' : 'transparent rgba(236,72,153,0.5) transparent rgba(96,165,250,0.6)', borderRadius: '50%', animation: `${i % 2 ? 'spin' : 'spinRev'} ${12 + i * 2}s linear infinite`, opacity: 0.7 - i * 0.15 }} />
            ))}

            {/* Particle Ring */}
            <div style={{ position: 'absolute', inset: '-80px' }}>
              {[...Array(24)].map((_, i) => (
                <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: '8px', height: '8px', borderRadius: '50%', background: ['#22d3ee', '#a855f7', '#ec4899'][i % 3], animation: `orbit ${15 + (i % 3) * 2}s linear infinite`, animationDelay: `${-i * 0.6}s`, boxShadow: `0 0 15px ${['#22d3ee', '#a855f7', '#ec4899'][i % 3]}` }} />
              ))}
            </div>

            {/* Floating Tech Icons on Corners */}
            <div style={{ position: 'absolute', inset: '-50px' }}>
              {icons.slice(0, 8).map((icon, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 220;
                return (
                  <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`, animation: `iconFloat ${3 + i * 0.3}s ease-in-out infinite ${i * 0.2}s` }}>
                    <div style={{ width: '55px', height: '55px', borderRadius: '12px', background: 'rgba(10,1,24,0.95)', backdropFilter: 'blur(20px)', border: `2px solid ${icon.c}60`, boxShadow: `0 10px 35px ${icon.c}50, 0 0 25px ${icon.c}40`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', padding: '6px', animation: `iconPulse 2s ease-in-out infinite ${i * 0.15}s` }}>
                      <icon.I size={24} color={icon.c} strokeWidth={2.5} style={{ filter: `drop-shadow(0 0 10px ${icon.c})` }} />
                      <span style={{ fontSize: '9px', color: '#e2e8f0', fontWeight: '800', textAlign: 'center' }}>{icon.l}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Profile Image Container */}
            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid rgba(34,211,238,0.5)', boxShadow: '0 30px 90px rgba(34,211,238,0.6), 0 0 70px rgba(168,85,247,0.5), inset 0 0 50px rgba(34,211,238,0.15)', animation: 'imageFloat 6s ease-in-out infinite', background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(168,85,247,0.2))' }}>
              
              {/* Shimmer Effect */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 2.5s linear infinite', zIndex: 2 }} />
              
              {/* Profile Image */}
              <img 
                src={profileImg}
                alt="Siva Satya Sai Bhagavan"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />

              {/* Overlay gradient */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,1,24,0.8) 100%)', zIndex: 1 }} />
            </div>

            {/* Corner Stars */}
            {[0, 1, 2, 3].map(i => (
              <Star key={i} size={20} color="#fbbf24" style={{ position: 'absolute', [i < 2 ? 'top' : 'bottom']: '10px', [i % 2 ? 'right' : 'left']: '10px', animation: `starTwinkle 2s ease-in-out infinite ${i * 0.3}s`, filter: 'drop-shadow(0 0 10px #fbbf24)' }} />
            ))}
          </div>

          {/* Content Section */}
          <div style={{ flex: 1, opacity: v ? 1 : 0, transform: v ? 'translateY(0)' : 'translateY(40px)', transition: 'all 1s cubic-bezier(0.4,0,0.2,1) 0.3s' }}>
            
            {/* Available Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', borderRadius: '9999px', background: 'rgba(16,185,129,0.15)', border: '2px solid rgba(16,185,129,0.5)', backdropFilter: 'blur(20px)', marginBottom: '1.5rem', animation: 'badgePulse 3s ease-in-out infinite' }}>
              <div style={{ position: 'relative', width: '12px', height: '12px' }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981', animation: 'ping 2s ease-in-out infinite' }} />
                <div style={{ position: 'absolute', inset: '2px', borderRadius: '50%', background: '#10b981' }} />
              </div>
              <Sparkles size={16} color="#6ee7b7" style={{ animation: 'sparkleRotate 3s linear infinite' }} />
              <span style={{ color: '#6ee7b7', fontSize: '13px', fontWeight: '800', letterSpacing: '0.5px' }}>AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Name */}
            <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4.5rem)', fontWeight: '900', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              <div style={{ background: 'linear-gradient(90deg, #60a5fa, #22d3ee, #60a5fa)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradFlow 4s ease infinite', filter: 'drop-shadow(0 0 25px rgba(34,211,238,0.6))', display: 'inline-block' }}>
                Siva Satya Sai
              </div>
              <div style={{ background: 'linear-gradient(90deg, #c084fc, #ec4899, #c084fc)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'gradFlow 4.5s ease infinite', filter: 'drop-shadow(0 0 25px rgba(236,72,153,0.6))', display: 'inline-block' }}>
                Bhagavan
              </div>
              <Rocket size={window.innerWidth < 768 ? 30 : 40} color="#fbbf24" style={{ display: 'inline-block', marginLeft: '1rem', animation: 'rocketLaunch 2s ease-in-out infinite', filter: 'drop-shadow(0 0 15px #fbbf24)' }} />
            </h1>

            {/* Typing Effect */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'clamp(1rem, 4vw, 1.6rem)', fontWeight: '700', color: 'white', minHeight: '2.5rem', marginBottom: '2rem' }}>
              <span style={{ color: '#22d3ee', fontWeight: '900', textShadow: '0 0 20px #22d3ee' }}>&gt;</span>
              <span>{txt}</span>
              <span style={{ display: 'inline-block', width: '4px', height: '1.5em', background: '#22d3ee', animation: 'blink 0.8s step-end infinite', boxShadow: '0 0 15px #22d3ee' }} />
            </div>

            {/* Bio */}
            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '2rem' }}>
              <strong style={{ color: 'white' }}>AI & Data Science undergraduate</strong> with expertise in{' '}
              <strong style={{ color: '#22d3ee' }}>machine learning</strong> and{' '}
              <strong style={{ color: '#c084fc' }}>full-stack development</strong>. Building intelligent, scalable solutions.
            </p>

            {/* Tech Stack Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '2rem' }}>
              {tech.map((t, i) => (
                <div key={i} style={{ padding: '10px 18px', borderRadius: '12px', background: 'rgba(10,1,24,0.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13px', fontWeight: '600', boxShadow: `0 5px 20px ${t.c}30`, animation: `slideUp 0.6s ease ${i * 0.1}s backwards` }}>
                  <t.i size={16} color={t.c} style={{ filter: `drop-shadow(0 0 8px ${t.c})` }} />
                  {t.l}
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ padding: '1.5rem 1rem', borderRadius: '16px', background: 'rgba(10,1,24,0.7)', backdropFilter: 'blur(20px)', border: '2px solid rgba(34,211,238,0.3)', textAlign: 'center', boxShadow: '0 10px 40px rgba(34,211,238,0.2)', animation: `scaleIn 0.8s ease ${i * 0.15}s backwards` }}>
                  <s.i size={28} color="#22d3ee" style={{ marginBottom: '0.5rem', filter: 'drop-shadow(0 0 10px #22d3ee)', animation: 'iconBounce 2s ease-in-out infinite' }} />
                  <div style={{ fontSize: '2rem', fontWeight: '900', color: 'white', textShadow: '0 0 25px rgba(34,211,238,0.6)' }}>{s.v}</div>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8', marginTop: '4px' }}>{s.l}</div>
                  <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>{s.d}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2rem' }}>
              <button style={{ padding: '14px 32px', borderRadius: '14px', background: 'linear-gradient(135deg, #2563eb, #06b6d4)', color: 'white', fontWeight: '700', fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 15px 50px rgba(34,211,238,0.5)', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 20px 60px rgba(34,211,238,0.6)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 15px 50px rgba(34,211,238,0.5)'; }}>
                View Projects <ExternalLink size={18} />
              </button>
              <button style={{ padding: '14px 32px', borderRadius: '14px', border: '2px solid rgba(34,211,238,0.6)', background: 'rgba(10,1,24,0.8)', backdropFilter: 'blur(20px)', color: 'white', fontWeight: '700', fontSize: '1rem', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(34,211,238,0.15)'; e.currentTarget.style.transform = 'translateY(-5px)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,1,24,0.8)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                Resume
              </button>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              {links.map((l, i) => (
                <a key={i} href={l.h} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: l.c, fontSize: '0.95rem', fontWeight: '600', textDecoration: 'none', filter: `drop-shadow(0 0 8px ${l.c})`, animation: `fadeIn 0.6s ease ${i * 0.1 + 0.5}s backwards` }}>
                  <l.i size={18} />
                  {l.l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-30px)}}
        @keyframes float2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,40px)}}
        @keyframes float3{0%,100%{transform:translate(0,0)}50%{transform:translate(25px,-25px)}}
        @keyframes gridMove{0%{background-position:0 0}100%{background-position:50px 50px}}
        @keyframes pulseGlow{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.9;transform:scale(1.1)}}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes spinRev{0%{transform:rotate(0deg)}100%{transform:rotate(-360deg)}}
        @keyframes orbit{0%{transform:translate(-50%,-50%) rotate(0deg) translateX(180px) rotate(0deg)}100%{transform:translate(-50%,-50%) rotate(360deg) translateX(180px) rotate(-360deg)}}
        @keyframes iconFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes iconPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
        @keyframes imageFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-15px) scale(1.02)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        @keyframes starTwinkle{0%,100%{opacity:0.5;transform:scale(0.8) rotate(0deg)}50%{opacity:1;transform:scale(1.3) rotate(180deg)}}
        @keyframes badgePulse{0%,100%{box-shadow:0 0 30px rgba(16,185,129,0.3)}50%{box-shadow:0 0 60px rgba(16,185,129,0.6)}}
        @keyframes sparkleRotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        @keyframes ping{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(3);opacity:0}}
        @keyframes gradFlow{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes rocketLaunch{0%,100%{transform:translateY(0) rotate(-45deg)}50%{transform:translateY(-10px) rotate(-35deg)}}
        @keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}
        @keyframes slideUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes scaleIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}
        @keyframes iconBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      `}</style>
    </div>
  );
}