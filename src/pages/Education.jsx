import { useState, useEffect, useRef } from "react";
import { Award, Trophy, Target, Flame, Sparkles, TrendingUp, Zap } from "lucide-react";

const education = [
  { 
    title: "B.Tech AI & Data Science", 
    school: "Ramachandra College of Engineering", 
    year: "2022–2026", 
    score: "75%", 
    desc: "Specialized in ML, Deep Learning, and AI systems. Hands-on with Python, TensorFlow, MERN stack, and production-ready applications.",
    gradient: "linear-gradient(135deg, #22d3ee, #3b82f6)",
    color: "#22d3ee",
    icon: "🚀",
    badge: "INNOVATION"
  },
  { 
    title: "Intermediate MPC", 
    school: "Sree Vidhya College", 
    year: "2020–2022", 
    score: "78%", 
    desc: "Mathematics, Physics, Chemistry with focus on analytical problem-solving, algorithms, and computational thinking.",
    gradient: "linear-gradient(135deg, #a78bfa, #ec4899)",
    color: "#a78bfa",
    icon: "🔬",
    badge: "EVOLUTION"
  },
  { 
    title: "10th Grade", 
    school: "Montessori High School", 
    year: "2020", 
    score: "95%", 
    desc: "Excellence in Mathematics and Science. Top-tier performance with strong foundation in logical reasoning.",
    gradient: "linear-gradient(135deg, #34d399, #06b6d4)",
    color: "#34d399",
    icon: "🌟",
    badge: "FOUNDATION"
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
          setTimeout(() => setProgress([75, 78, 95]), 500);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>{keyframes}</style>

      {/* Animated Background */}
      <div style={styles.bgContainer}>
        {/* Morphing Gradients */}
        <div style={{...styles.gradient1, animation: 'morphGradient 20s ease-in-out infinite'}} />
        <div style={{...styles.gradient2, animation: 'morphGradient 25s ease-in-out infinite reverse'}} />
        <div style={{...styles.gradient3, animation: 'morphGradient 18s ease-in-out infinite 5s'}} />

        {/* Floating Orbs */}
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: `${100 + Math.random() * 100}px`,
            height: `${100 + Math.random() * 100}px`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${['rgba(34,211,238,0.3)', 'rgba(168,85,247,0.3)', 'rgba(236,72,153,0.3)'][i % 3]}, transparent)`,
            filter: 'blur(60px)',
            animation: `float ${15 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`
          }} />
        ))}

        {/* Rising Particles */}
        {[...Array(30)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            bottom: 0,
            background: ['#22d3ee', '#a855f7', '#ec4899', '#34d399'][i % 4],
            boxShadow: `0 0 15px ${['#22d3ee', '#a855f7', '#ec4899', '#34d399'][i % 4]}`,
            animation: `rise ${10 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`,
            opacity: 0
          }} />
        ))}

        {/* Animated Grid */}
        <div style={styles.grid} />

        {/* Wave Pattern */}
        <svg style={styles.wave} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 C1200,100 1500,20 1800,60 L1800,120 L0,120 Z" fill="rgba(34,211,238,0.05)" />
        </svg>

        {/* Rotating Gradient Ring */}
        <div style={{...styles.ring, animation: 'rotate 40s linear infinite'}} />
      </div>

      <div style={styles.container}>
        {/* Header */}
        <div style={{...styles.header, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(60px)', transition: 'all 1s cubic-bezier(0.34,1.56,0.64,1)'}}>
          <div style={styles.badge}>
            <div style={styles.badgeGlow} />
            <div style={styles.badgeContent}>
              <Trophy style={{width: '24px', height: '24px', color: '#fbbf24'}} />
              <span style={styles.badgeText}>EDUCATION JOURNEY</span>
              <Sparkles style={{width: '24px', height: '24px', color: '#22d3ee'}} />
            </div>
          </div>

          <h2 style={styles.title}>
            <div style={{animation: isVisible ? 'fadeUp 0.8s ease-out 0.3s backwards' : 'none'}}>
              <span style={styles.titleWhite}>Academic</span>
              <span style={styles.titleGradient}>Excellence</span>
            </div>
          </h2>
          
          <p style={{...styles.subtitle, animation: isVisible ? 'fadeUp 0.8s ease-out 0.6s backwards' : 'none'}}>
            From <span style={styles.highlight1}>foundations</span> to <span style={styles.highlight2}>innovation</span> — Building expertise in <span style={styles.highlight3}>AI/ML</span>
          </p>
        </div>

        {/* Education Cards */}
        <div style={styles.cardsGrid}>
          {education.map((edu, i) => (
            <Card 
              key={i}
              edu={edu}
              index={i}
              isVisible={isVisible}
              isActive={activeCard === i}
              progress={progress[i]}
              onHover={() => setActiveCard(i)}
              onLeave={() => setActiveCard(null)}
            />
          ))}
        </div>

        {/* Stats */}
        <div style={{...styles.statsGrid, opacity: isVisible ? 1 : 0, animation: isVisible ? 'fadeUp 1s ease-out 1.5s backwards' : 'none'}}>
          {[
            {icon: Trophy, label: "8.5+ CGPA", value: "Current", color: "#fbbf24"},
            {icon: Target, label: "AI/ML Focus", value: "Specialized", color: "#22d3ee"},
            {icon: Flame, label: "Production", value: "Ready", color: "#fb923c"},
            {icon: Award, label: "Future MNC", value: "Engineer", color: "#a78bfa"}
          ].map((stat, i) => (
            <Stat key={i} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({edu, index, isVisible, isActive, progress, onHover, onLeave}) {
  const [tilt, setTilt] = useState({x: 0, y: 0});
  const cardRef = useRef(null);

  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    setTilt({x: -y, y: x});
  };

  return (
    <div ref={cardRef} onMouseMove={handleMove} onMouseEnter={onHover} onMouseLeave={() => {setTilt({x:0, y:0}); onLeave();}}
      style={{...styles.cardWrapper, opacity: isVisible ? 1 : 0, transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, 
        animation: isVisible ? `slideUp 0.8s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.2}s backwards` : 'none'}}>
      
      <div style={{...styles.cardGlow, opacity: isActive ? 1 : 0, background: edu.gradient}} />
      {isActive && <div style={{...styles.glowRing, animation: 'ringPulse 2s ease-out infinite'}} />}
      
      <div style={{...styles.card, boxShadow: isActive ? `0 30px 90px -20px ${edu.color}80` : '0 20px 60px -20px rgba(0,0,0,0.8)'}}>
        <div style={styles.cardBg}>
          <div style={{...styles.cardGradientBg, background: edu.gradient}} />
        </div>

        <div style={styles.cardContent}>
          <div>
            <div style={styles.cardHeader}>
              <div style={{...styles.iconBox, background: edu.color, boxShadow: `0 0 20px ${edu.color}80`}}>
                <span style={{fontSize: '28px'}}>{edu.icon}</span>
              </div>
              <div>
                <h3 style={styles.cardTitle}>{edu.title}</h3>
                <div style={styles.cardMeta}>{edu.school} • {edu.year}</div>
              </div>
            </div>
            <p style={styles.cardDesc}>{edu.desc}</p>
          </div>

          <div>
            <div style={styles.progressContainer}>
              <div style={styles.progressLabel}>Score: {edu.score}</div>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: `${progress}%`, background: edu.color}} />
              </div>
            </div>
            <div style={styles.cardFooter}>
              <div style={{...styles.cardBadge, background: edu.color, boxShadow: `0 0 20px ${edu.color}80`}}>
                {edu.badge}
              </div>
              <Zap style={{width: '20px', height: '20px', color: edu.color}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({stat, delay}) {
  return (
    <div style={{...styles.statCard, animation: `slideUp 0.6s cubic-bezier(0.34,1.56,0.64,1) ${1.7 + delay}s backwards`}}>
      <stat.icon style={{width: '32px', height: '32px', color: stat.color, marginBottom: '12px'}} />
      <div style={styles.statValue}>{stat.value}</div>
      <div style={styles.statLabel}>{stat.label}</div>
    </div>
  );
}

const keyframes = `
  @keyframes float { 0%, 100% { transform: translate3d(0,0,0); } 50% { transform: translate3d(30px,-40px,0); } }
  @keyframes rise { 0% { transform: translateY(100vh); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(-100vh); opacity: 0; } }
  @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slideUp { from { opacity: 0; transform: translate3d(0,120px,-200px) rotateX(-45deg); } to { opacity: 1; transform: translate3d(0,0,0) rotateX(0deg); } }
  @keyframes morphGradient { 0%, 100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; } }
  @keyframes ringPulse { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(2); opacity: 0; } }
`;

const styles = {
  section: {position: 'relative', minHeight: '100vh', background: '#000', overflow: 'hidden', padding: '128px 24px'},
  bgContainer: {position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden'},
  gradient1: {position: 'absolute', top: '-20%', left: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(34,211,238,0.4), rgba(168,85,247,0.3), transparent)', filter: 'blur(120px)'},
  gradient2: {position: 'absolute', bottom: '-20%', right: '-10%', width: '70%', height: '70%', background: 'radial-gradient(circle, rgba(236,72,153,0.4), rgba(251,146,60,0.3), transparent)', filter: 'blur(120px)'},
  gradient3: {position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(16,185,129,0.35), rgba(6,182,212,0.25), transparent)', filter: 'blur(100px)'},
  grid: {position: 'absolute', inset: 0, opacity: 0.15, backgroundImage: 'linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)', backgroundSize: '100px 100px'},
  wave: {position: 'absolute', bottom: 0, left: 0, width: '200%', height: '400px'},
  ring: {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '150%', height: '150%', background: 'conic-gradient(from 0deg, transparent, rgba(34,211,238,0.05) 60deg, transparent 120deg)', filter: 'blur(40px)'},
  container: {position: 'relative', maxWidth: '1280px', margin: '0 auto'},
  header: {textAlign: 'center', marginBottom: '96px'},
  badge: {position: 'relative', display: 'inline-block', marginBottom: '32px'},
  badgeGlow: {position: 'absolute', inset: '-16px', background: 'linear-gradient(to right, #06b6d4, #a855f7, #ec4899)', borderRadius: '9999px', filter: 'blur(40px)', opacity: 0.5},
  badgeContent: {position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '16px 32px', borderRadius: '9999px', background: 'rgba(0,0,0,0.5)', border: '2px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(24px)'},
  badgeText: {fontSize: '16px', fontWeight: '900', letterSpacing: '0.1em', background: 'linear-gradient(to right, #22d3ee, #a78bfa, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'},
  title: {fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: '900', marginBottom: '24px', lineHeight: 1.2},
  titleWhite: {display: 'block', color: '#fff', marginBottom: '12px'},
  titleGradient: {display: 'block', background: 'linear-gradient(to right, #34d399, #22d3ee, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'},
  subtitle: {fontSize: '24px', color: '#9ca3af', maxWidth: '768px', margin: '0 auto'},
  highlight1: {color: '#34d399', fontWeight: 'bold'},
  highlight2: {color: '#a78bfa', fontWeight: 'bold'},
  highlight3: {color: '#22d3ee', fontWeight: 'bold'},
  cardsGrid: {display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px'},
  cardWrapper: {position: 'relative', transition: 'transform 0.3s ease-out'},
  cardGlow: {position: 'absolute', inset: '-4px', borderRadius: '32px', filter: 'blur(40px)', transition: 'opacity 0.5s'},
  glowRing: {position: 'absolute', inset: '-16px', borderRadius: '32px', border: '2px solid rgba(255,255,255,0.2)'},
  card: {position: 'relative', height: '100%', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(17,24,39,0.95), rgba(0,0,0,0.98))', border: '2px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(20px)', overflow: 'hidden', transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)'},
  cardBg: {position: 'absolute', inset: 0, opacity: 0.25},
  cardGradientBg: {position: 'absolute', inset: 0, opacity: 0.15},
  cardContent: {position: 'relative', padding: '32px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'},
  cardHeader: {display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px'},
  iconBox: {width: '56px', height: '56px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'},
  cardTitle: {fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '4px'},
  cardMeta: {fontSize: '14px', color: '#9ca3af'},
  cardDesc: {fontSize: '14px', color: '#d1d5db', marginBottom: '24px', lineHeight: 1.5},
  progressContainer: {marginBottom: '16px'},
  progressLabel: {fontSize: '14px', color: '#9ca3af', marginBottom: '4px'},
  progressBar: {width: '100%', height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden'},
  progressFill: {height: '100%', borderRadius: '4px', transition: 'width 2s ease-out'},
  cardFooter: {display: 'flex', alignItems: 'center', justifyContent: 'space-between'},
  cardBadge: {padding: '8px 16px', borderRadius: '9999px', color: '#000', fontWeight: '700', fontSize: '12px'},
  statsGrid: {marginTop: '96px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px'},
  statCard: {padding: '24px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.1))', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', transition: 'all 0.3s', cursor: 'pointer'},
  statValue: {fontSize: '30px', fontWeight: '900', color: '#fff', marginBottom: '4px'},
  statLabel: {fontSize: '14px', color: '#9ca3af'}
};