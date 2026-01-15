import { useState, useEffect } from "react";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/bhagavanresume.pdf";
import { 
  Award, Briefcase, Rocket, Sparkles, ExternalLink, GraduationCap 
} from "lucide-react";

export default function ProHero() {
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const roles = ["AI Engineer", "Full-Stack Developer", "Machine Learning Specialist", "MERN Stack Expert"];

  // Removed all orbiting tech icons — clean & focused on profile only
  // Only keeping the glowing ring and subtle background effects

  useEffect(() => {
    setTimeout(() => setVisible(true), 400);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentRole.substring(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, roleIndex]);

  const handleMouseMove = (e) => {
    if (window.innerWidth >= 1024) {
      const x = (e.clientX / window.innerWidth - 0.5) * 2.8;
      const y = (e.clientY / window.innerHeight - 0.5) * 2.8;
      setMouse({ x, y });
    }
  };

  const stats = [
    { icon: Briefcase, value: "3", label: "Internships", desc: "Production Level" },
    { icon: Rocket, value: "5+", label: "Live Projects", desc: "Deployed Apps" },
    { icon: Award, value: "13+", label: "Certifications", desc: "Google • IBM • AWS" }
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a001a, #001f33, #0a0028)',
        color: 'white',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem 4rem',
      }}
    >
      {/* Background Effects */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Orbs */}
        <div style={{
          position: 'absolute', width: '1000px', height: '1000px', top: '-30%', left: '-30%',
          background: 'radial-gradient(circle at 40% 30%, rgba(34,211,238,0.52), transparent 60%)',
          filter: 'blur(110px)',
          transform: `translate(${mouse.x * 70}px, ${mouse.y * 60}px)`,
          transition: 'transform 0.8s ease-out',
          opacity: window.innerWidth < 1024 ? 0.6 : 1
        }} />
        <div style={{
          position: 'absolute', width: '1100px', height: '1100px', bottom: '-35%', right: '-35%',
          background: 'radial-gradient(circle at 60% 70%, rgba(6,182,212,0.42), transparent 65%)',
          filter: 'blur(130px)',
          transform: `translate(${-mouse.x * 80}px, ${-mouse.y * 70}px)`,
          transition: 'transform 0.8s ease-out',
          opacity: window.innerWidth < 1024 ? 0.6 : 1
        }} />
        {/* Floating shapes */}
        {[...Array(window.innerWidth < 768 ? 10 : 16)].map((_, i) => (
          <div
            key={`shape-${i}`}
            style={{
              position: 'absolute',
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              borderRadius: '50%',
              border: `1.5px solid rgba(34,211,238,0.35)`,
              background: 'rgba(34,211,238,0.06)',
              boxShadow: '0 0 25px rgba(34,211,238,0.3)',
              top: `${Math.random() * 120 - 10}%`,
              left: `${Math.random() * 120 - 10}%`,
              animation: `premiumFloat ${18 + Math.random() * 15}s ease-in-out infinite`,
              animationDelay: `-${Math.random() * 12}s`,
              opacity: 0.25 + Math.random() * 0.2,
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%', 
        maxWidth: '1600px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth < 1024 ? 'column' : 'row-reverse',
          alignItems: 'center',
          textAlign: window.innerWidth < 1024 ? 'center' : 'left',
          gap: 'clamp(2rem, 4vw, 3.5rem)',           // slightly increased for breathing room
          justifyContent: 'center',                  // centers content horizontally
          paddingLeft: window.innerWidth >= 1024 ? 'clamp(3rem, 8vw, 6rem)' : '0', // ← added left padding to content
        }}>
          {/* === PROFILE PICTURE - LARGER SQUARE + CLEAN DESIGN === */}
          <div style={{
            position: 'relative',
            width: 'clamp(320px, 42vw, 420px)',        // ← increased size for better presence
            height: 'clamp(320px, 42vw, 420px)',       // square
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.92)',
            transition: 'all 1.6s cubic-bezier(0.34,1.56,0.64,1)',
            flexShrink: 0,
            margin: window.innerWidth < 1024 ? '0 auto' : '0',
          }}>
            {/* Premium outer glow */}
            <div style={{
              position: 'absolute',
              inset: '-80px',
              background: 'conic-gradient(from 0deg at 50% 50%, #22d3ee, #06b6d4, #34d399, #22d3ee)',
              filter: 'blur(90px)',
              opacity: 0.5,
              animation: 'slowAuraRotate 24s linear infinite',
            }} />

            {/* Minimal floating rings - only 2 for elegance */}
            {[0, 1].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  inset: `${-40 - i * 40}px`,
                  borderRadius: '20px',
                  border: `${6 - i * 2}px solid transparent`,
                  background: `conic-gradient(from ${i*180}deg, transparent 20%, #22d3ee 40%, transparent 80%)`,
                  mask: 'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 7px))',
                  animation: `smoothRing ${20 + i * 6}s linear infinite`,
                  opacity: 0.7 - i * 0.2,
                }}
              />
            ))}

            {/* Profile Image - Clean Square */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '20px',                     // soft corners
              overflow: 'hidden',
              border: '8px solid rgba(34,211,238,0.6)',
              boxShadow: '0 30px 100px rgba(34,211,238,0.6), inset 0 0 70px rgba(34,211,238,0.3)',
              background: 'linear-gradient(135deg, rgba(34,211,238,0.25), rgba(6,182,212,0.25))',
              animation: 'premiumFloat 10s ease-in-out infinite'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)',
                backgroundSize: '300% 100%',
                animation: 'premiumShimmer 5s linear infinite'
              }} />
              <img
                src={profileImg}
                alt="Siva Satya Sai Bhagavan"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',   // perfect face framing
                }}
              />
            </div>

            {/* Fresher Badge - Top Right */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              padding: '10px 20px',
              background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
              borderRadius: '999px',
              fontSize: '0.9rem',
              fontWeight: '800',
              color: 'white',
              boxShadow: '0 8px 30px rgba(34,211,238,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              animation: 'cyberPulse 4s ease-in-out infinite'
            }}>
              <GraduationCap size={18} />
              FINAL YEAR STUDENT
            </div>
          </div>

          {/* Content - now with comfortable left padding */}
          <div style={{
            flex: 1,
            maxWidth: '840px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(60px)',
            transition: 'all 1.5s cubic-bezier(0.34,1.56,0.64,1) 0.4s',
            paddingLeft: window.innerWidth >= 1024 ? '2rem' : '0', // extra breathing room
          }}>
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 36px)',
              borderRadius: '999px',
              background: 'rgba(34,211,238,0.16)',
              border: '2px solid rgba(34,211,238,0.48)',
              backdropFilter: 'blur(24px)',
              marginBottom: '2.5rem',
              boxShadow: '0 0 50px rgba(34,211,238,0.4)',
              animation: 'cyberPulse 5s ease-in-out infinite'
            }}>
              <Sparkles size={20} color="#22d3ee" />
              <span style={{
                color: '#67e8f9',
                fontSize: 'clamp(13px, 3.2vw, 15px)',
                fontWeight: '900',
                letterSpacing: '1.8px'
              }}>
                OPEN FOR 2026 OPPORTUNITIES
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(3rem, 10vw, 6.2rem)',
              fontWeight: '900',
              lineHeight: 1.05,
              marginBottom: '1.5rem'
            }}>
              <div style={{
                background: 'linear-gradient(90deg, #22d3ee, #06b6d4, #34d399, #22d3ee)',
                backgroundSize: '300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'ultraFlow 6.5s ease infinite'
              }}>
                SIVA SATYA SAI
              </div>
              <div style={{
                background: 'linear-gradient(90deg, #06b6d4, #34d399, #22d3ee, #06b6d4)',
                backgroundSize: '300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'ultraFlow 8s ease infinite'
              }}>
                BHAGAVAN
              </div>
            </h1>

            {/* Typing */}
            <div style={{
              fontFamily: 'monospace',
              fontSize: 'clamp(1.4rem, 5vw, 2.1rem)',
              fontWeight: '700',
              color: '#22d3ee',
              marginBottom: '2.5rem',
              textShadow: '0 0 25px #22d3ee80',
              display: 'flex',
              justifyContent: window.innerWidth < 1024 ? 'center' : 'flex-start',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>system@portfolio:~$</span>
              <span>{typedText}</span>
              <span style={{
                width: '4px',
                height: '1.4em',
                background: '#22d3ee',
                animation: 'blinkCursor 0.85s step-end infinite'
              }} />
            </div>

            <p style={{
              fontSize: 'clamp(1.05rem, 3.5vw, 1.35rem)',
              color: '#d1d5db',
              lineHeight: 1.7,
              maxWidth: '760px',
              marginBottom: '3.5rem'
            }}>
              Final-year <strong style={{ color: 'white' }}>AI & Data Science</strong> engineer crafting
              <strong style={{ color: '#22d3ee' }}> next-generation intelligent systems</strong> and
              <strong style={{ color: '#06b6d4' }}> scalable full-stack architectures</strong>.
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '1.8rem',
              marginBottom: '3.5rem'
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: '1.6rem 1.2rem',
                  borderRadius: '16px',
                  background: 'rgba(15,15,40,0.75)',
                  backdropFilter: 'blur(18px)',
                  border: '1px solid rgba(34,211,238,0.35)',
                  textAlign: 'center',
                  boxShadow: '0 12px 40px rgba(34,211,238,0.22)'
                }}>
                  <s.icon size={36} color="#22d3ee" style={{ marginBottom: '1rem' }} />
                  <div style={{ fontSize: 'clamp(2.2rem, 6vw, 2.8rem)', fontWeight: '900', color: 'white' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: '600', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: window.innerWidth < 1024 ? 'center' : 'flex-start'
            }}>
              <button style={{
                padding: 'clamp(14px, 4vw, 18px) clamp(32px, 6vw, 44px)',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #22d3ee, #06b6d4)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 'clamp(1rem, 3.5vw, 1.15rem)',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 15px 50px rgba(34,211,238,0.45)',
                transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)'
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
              >
                Explore Projects <ExternalLink size={20} style={{ marginLeft: '10px' }} />
              </button>

              <a
                href={resumePdf}
                download="Siva_Satya_Sai_Bhagavan_Resume.pdf"
                style={{
                  padding: 'clamp(14px, 4vw, 18px) clamp(32px, 6vw, 44px)',
                  borderRadius: '14px',
                  border: '2px solid rgba(34,211,238,0.5)',
                  background: 'rgba(15,15,40,0.65)',
                  backdropFilter: 'blur(20px)',
                  color: '#22d3ee',
                  fontWeight: 'bold',
                  fontSize: 'clamp(1rem, 3.5vw, 1.15rem)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(34,211,238,0.25)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(15,15,40,0.65)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slowAuraRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes smoothRing { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes premiumFloat { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.018); } }
        @keyframes premiumShimmer { 0% { background-position: -300% center; } 100% { background-position: 300% center; } }
        @keyframes cyberPulse { 0%,100% { box-shadow: 0 0 35px rgba(34,211,238,0.35); } 50% { box-shadow: 0 0 80px rgba(34,211,238,0.65); } }
        @keyframes ultraFlow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 200% 50%; } }
        @keyframes blinkCursor { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
      `}</style>
    </div>
  );
}