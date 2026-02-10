import React, { useState, useEffect, useRef } from 'react';

const skills = [
  {
    id: 1,
    category: "Full-Stack",
    title: "Full-Stack Development",
    subtitle: "MERN Stack Specialist",
    level: 82,
    projects: 2,
    experience: "Internship",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
    icon: "💻",
    techs: [
      { name: "React", icon: "devicon-react-original colored", color: "#61DAFB" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored", color: "#339933" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", color: "#47A248" },
      { name: "Express", icon: "devicon-express-original", color: "#fff" },
      { name: "JWT", icon: "devicon-json-plain", color: "#fff" },
      { name: "OAuth", icon: "devicon-google-plain colored", color: "#4285F4" },
      { name: "REST API", icon: "devicon-nodejs-plain", color: "#339933" }
    ],
    achievements: [
      "Built ATS-friendly Resume Builder with PDF & Word export",
      "Implemented secure OAuth-based authentication system",
      "Optimized REST API performance by 40%"
    ],
    metrics: { apps: "2", auth: "OAuth", db: "Atlas" }
  },
  {
    id: 2,
    category: "AI/ML",
    title: "Machine Learning",
    subtitle: "NLP & Data Science",
    level: 80,
    projects: 2,
    experience: "Internship",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #a855f7 0%, #9333ea 100%)",
    icon: "🧠",
    techs: [
      { name: "Python", icon: "devicon-python-plain colored", color: "#3776AB" },
      { name: "Scikit-learn", icon: "devicon-scikitlearn-plain colored", color: "#F7931E" },
      { name: "Pandas", icon: "devicon-pandas-original colored", color: "#150458" },
      { name: "NumPy", icon: "devicon-numpy-original colored", color: "#013243" },
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored", color: "#FF6F00" },
      { name: "Jupyter", icon: "devicon-jupyter-plain colored", color: "#F37626" }
    ],
    achievements: [
      "Built Fake News Detection with 89% accuracy",
      "Implemented TF-IDF vectorization pipeline",
      "Analyzed 50K+ data points for model training"
    ],
    metrics: { models: "4+", accuracy: "89%", data: "50K+" }
  },
  {
    id: 3,
    category: "Deep Learning",
    title: "Deep Learning & CV",
    subtitle: "Neural Networks Expert",
    level: 78,
    projects: 2,
    experience: "Internship",
    color: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
    icon: "🤖",
    techs: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored", color: "#FF6F00" },
      { name: "Keras", icon: "devicon-keras-plain colored", color: "#D00000" },
      { name: "Python", icon: "devicon-python-plain colored", color: "#3776AB" },
      { name: "OpenCV", icon: "devicon-opencv-plain colored", color: "#5C3EE8" },
      { name: "PyTorch", icon: "devicon-pytorch-original colored", color: "#EE4C2C" },
      { name: "Flask", icon: "devicon-flask-original", color: "#fff" }
    ],
    achievements: [
      "Developed CNN models with 92% accuracy",
      "Deployed real-time object detection system",
      "Optimized inference time by 35%"
    ],
    metrics: { models: "3+", accuracy: "92%", deploy: "Flask" }
  },
  {
    id: 4,
    category: "Data Science",
    title: "Data Science",
    subtitle: "Analytics & Visualization",
    level: 76,
    projects: 2,
    experience: "Internship",
    color: "#f97316",
    gradient: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
    icon: "📊",
    techs: [
      { name: "Python", icon: "devicon-python-plain colored", color: "#3776AB" },
      { name: "Pandas", icon: "devicon-pandas-original colored", color: "#150458" },
      { name: "NumPy", icon: "devicon-numpy-original colored", color: "#013243" },
      { name: "Jupyter", icon: "devicon-jupyter-plain colored", color: "#F37626" },
      { name: "MySQL", icon: "devicon-mysql-plain colored", color: "#4479A1" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", color: "#336791" }
    ],
    achievements: [
      "Analyzed datasets with 100K+ records",
      "Created interactive data visualizations",
      "Automated data cleaning workflows"
    ],
    metrics: { datasets: "10+", records: "100K+", viz: "Multi" }
  },
  {
    id: 5,
    category: "Programming",
    title: "Core Programming",
    subtitle: "Algorithms & Problem Solving",
    level: 85,
    projects: 5,
    experience: "Fresher",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
    icon: "⚡",
    techs: [
      { name: "Python", icon: "devicon-python-plain colored", color: "#3776AB" },
      { name: "Java", icon: "devicon-java-plain colored", color: "#007396" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", color: "#F7DF1E" },
      { name: "C++", icon: "devicon-cplusplus-plain colored", color: "#00599C" },
      { name: "Git", icon: "devicon-git-plain colored", color: "#F05032" },
      { name: "GitHub", icon: "devicon-github-original", color: "#fff" }
    ],
    achievements: [
      "Solved 100+ DSA problems on coding platforms",
      "Strong foundation in OOP principles",
      "Implemented complex algorithms efficiently"
    ],
    metrics: { problems: "100+", oop: "Expert", dsa: "Strong" }
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    title: "Cloud & DevOps",
    subtitle: "AWS & Docker Specialist",
    level: 70,
    projects: 2,
    experience: "Basic",
    color: "#10b981",
    gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    icon: "☁️",
    techs: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored", color: "#FF9900" },
      { name: "Docker", icon: "devicon-docker-plain colored", color: "#2496ED" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored", color: "#326CE5" },
      { name: "Linux", icon: "devicon-linux-plain", color: "#FCC624" },
      { name: "Nginx", icon: "devicon-nginx-original colored", color: "#009639" },
      { name: "Jenkins", icon: "devicon-jenkins-plain colored", color: "#D24939" }
    ],
    achievements: [
      "Deployed apps on AWS EC2 & S3",
      "Containerized microservices with Docker",
      "Set up CI/CD pipelines with GitHub Actions"
    ],
    metrics: { cloud: "AWS", ci: "GitHub", container: "Docker" }
  }
];

export default function UltimatePortfolioShowcase() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('cards');
  const [isLoaded, setIsLoaded] = useState(false);
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Advanced particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.size = Math.random() * 2.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.hue = Math.random() * 60 + 240;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
        gradient.addColorStop(0, `hsla(${this.hue}, 80%, 60%, ${this.opacity})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 80%, 60%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 80 }, () => new Particle());

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        particles.forEach((other, j) => {
          if (i < j) {
            const dx = p.x - other.x;
            const dy = p.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              ctx.strokeStyle = `hsla(${(p.hue + other.hue) / 2}, 70%, 60%, ${0.15 * (1 - dist / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });
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

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(s => s.category.toLowerCase().replace(/\s+/g, '-') === filter);

  const SkillCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [ripples, setRipples] = useState([]);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: (y - 0.5) * -12,
        y: (x - 0.5) * 12
      });
    };

    const handleClick = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      const newRipple = { x, y, id: Date.now() };
      setRipples([...ripples, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);

      setActiveSkill(activeSkill === skill.id ? null : skill.id);
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setTilt({ x: 0, y: 0 });
        }}
        onClick={handleClick}
        style={{
          position: 'relative',
          background: 'rgba(15, 23, 42, 0.5)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          borderRadius: '28px',
          overflow: 'hidden',
          cursor: 'pointer',
          transform: isHovered 
            ? `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.03) translateZ(30px)`
            : 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease',
          boxShadow: isHovered
            ? `0 40px 80px rgba(0, 0, 0, 0.5), 0 0 60px ${skill.color}50, inset 0 2px 0 rgba(255, 255, 255, 0.15)`
            : '0 15px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          animation: `cardSlideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s both`,
          border: `1px solid ${isHovered ? `${skill.color}70` : 'rgba(255, 255, 255, 0.12)'}`,
          transformStyle: 'preserve-3d',
          willChange: 'transform'
        }}
      >
        {/* Ripple effects */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            style={{
              position: 'absolute',
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: skill.color,
              transform: 'translate(-50%, -50%) scale(0)',
              opacity: 0.6,
              animation: 'rippleEffect 1s ease-out forwards',
              pointerEvents: 'none',
              zIndex: 10
            }}
          />
        ))}

        {/* Animated gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: skill.gradient,
          opacity: isHovered ? 0.2 : 0.1,
          transition: 'opacity 0.6s ease',
          zIndex: 1,
          mixBlendMode: 'overlay'
        }} />

        {/* Top animated border */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: skill.gradient,
          opacity: isHovered ? 1 : 0.6,
          transition: 'opacity 0.3s ease',
          boxShadow: `0 0 25px ${skill.color}`,
          animation: isHovered ? 'borderFlow 2s ease-in-out infinite' : 'none'
        }} />

        {/* Shine effect */}
        <div style={{
          position: 'absolute',
          top: '-100%',
          left: '-100%',
          width: '300%',
          height: '300%',
          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.15) 50%, transparent 70%)',
          transform: isHovered ? 'translate(33%, 33%)' : 'translate(-100%, -100%)',
          transition: 'transform 0.8s ease',
          pointerEvents: 'none',
          zIndex: 5
        }} />

        <div style={{ position: 'relative', zIndex: 2, padding: 'clamp(24px, 5vw, 32px)' }}>
          {/* Header with icon */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: 'clamp(20px, 4vw, 28px)',
            gap: '16px'
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                background: `${skill.color}18`,
                borderRadius: '100px',
                marginBottom: '14px',
                border: `1px solid ${skill.color}40`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}>
                <span style={{
                  fontSize: 'clamp(10px, 2.2vw, 12px)',
                  fontWeight: 800,
                  color: skill.color,
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  textShadow: `0 0 20px ${skill.color}`
                }}>
                  {skill.category}
                </span>
              </div>
              <h3 style={{
                fontSize: 'clamp(22px, 4.5vw, 28px)',
                fontWeight: 900,
                color: '#fff',
                marginBottom: '8px',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
              }}>
                {skill.title}
              </h3>
              <p style={{
                fontSize: 'clamp(13px, 2.8vw, 16px)',
                color: 'rgba(148, 163, 184, 0.95)',
                fontWeight: 500,
                letterSpacing: '0.2px'
              }}>
                {skill.subtitle}
              </p>
            </div>

            {/* 3D Floating Icon */}
            <div style={{
              width: 'clamp(70px, 16vw, 90px)',
              height: 'clamp(70px, 16vw, 90px)',
              background: `linear-gradient(135deg, ${skill.color}25, ${skill.color}10)`,
              borderRadius: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 'clamp(36px, 8vw, 48px)',
              border: `2px solid ${skill.color}35`,
              transform: isHovered ? 'scale(1.15) rotate(12deg) translateZ(20px)' : 'scale(1) rotate(0deg) translateZ(0px)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: isHovered 
                ? `0 15px 40px ${skill.color}50, inset 0 0 20px ${skill.color}20` 
                : `0 5px 15px ${skill.color}30`,
              position: 'relative',
              transformStyle: 'preserve-3d',
              flexShrink: 0
            }}>
              <div style={{
                position: 'absolute',
                inset: '-6px',
                borderRadius: '22px',
                background: `radial-gradient(circle at 30% 30%, ${skill.color}50, transparent 70%)`,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.5s ease',
                filter: 'blur(20px)',
                zIndex: -1,
                animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
              }} />
              {skill.icon}
            </div>
          </div>

          {/* Animated circular progress */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'clamp(22px, 5vw, 30px)',
            position: 'relative'
          }}>
            <svg width="clamp(130, 35vw, 160)" height="clamp(130, 35vw, 160)" style={{ transform: 'rotate(-90deg)' }}>
              <defs>
                <linearGradient id={`gradient-${skill.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: skill.color, stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: skill.color, stopOpacity: 0.4 }} />
                </linearGradient>
                <filter id={`glow-${skill.id}`}>
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor={skill.color} floodOpacity="0.7"/>
                </filter>
              </defs>
              <circle cx="50%" cy="50%" r="clamp(55, 15vw, 65)" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
              <circle
                cx="50%" cy="50%" r="clamp(55, 15vw, 65)" fill="none"
                stroke={`url(#gradient-${skill.id})`}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={408}
                strokeDashoffset={408 - (408 * skill.level / 100)}
                style={{
                  transition: 'stroke-dashoffset 1.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s',
                  filter: `url(#glow-${skill.id})`
                }}
              />
            </svg>
            <div style={{
              position: 'absolute',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: 'clamp(32px, 8vw, 42px)',
                fontWeight: 900,
                background: skill.gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1,
                fontFamily: 'monospace',
                textShadow: `0 0 30px ${skill.color}80`
              }}>
                {skill.level}
              </div>
              <div style={{
                fontSize: 'clamp(11px, 2.5vw, 14px)',
                color: 'rgba(148, 163, 184, 0.9)',
                fontWeight: 700,
                marginTop: '6px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                MASTERY
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(10px, 2.5vw, 14px)',
            marginBottom: 'clamp(20px, 4vw, 26px)'
          }}>
            {Object.entries(skill.metrics).map(([key, value], i) => (
              <div
                key={key}
                style={{
                  background: 'rgba(0, 0, 0, 0.35)',
                  borderRadius: '16px',
                  padding: 'clamp(12px, 3vw, 16px)',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transform: isHovered ? `translateY(-6px) scale(1.05)` : 'translateY(0) scale(1)',
                  transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.06}s`,
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow: isHovered ? `0 8px 20px ${skill.color}30` : 'none'
                }}
              >
                <div style={{
                  fontSize: 'clamp(18px, 4.5vw, 24px)',
                  fontWeight: 900,
                  color: skill.color,
                  marginBottom: '6px',
                  fontFamily: 'monospace',
                  textShadow: `0 0 15px ${skill.color}80`
                }}>
                  {value}
                </div>
                <div style={{
                  fontSize: 'clamp(9px, 2vw, 11px)',
                  color: 'rgba(148, 163, 184, 0.85)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {key}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack with Icons */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.25)',
            borderRadius: '20px',
            padding: 'clamp(16px, 4vw, 22px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)'
          }}>
            <div style={{
              fontSize: 'clamp(10px, 2.2vw, 12px)',
              color: 'rgba(148, 163, 184, 0.95)',
              fontWeight: 800,
              letterSpacing: '1.8px',
              marginBottom: '16px',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: skill.color,
                boxShadow: `0 0 12px ${skill.color}`
              }} />
              Technology Stack
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(8px, 2vw, 12px)'
            }}>
              {skill.techs.map((tech, i) => (
                <div
                  key={tech.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(8px, 2vw, 12px)',
                    padding: 'clamp(8px, 2vw, 12px) clamp(12px, 3vw, 18px)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    fontSize: 'clamp(12px, 2.8vw, 15px)',
                    color: '#fff',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    cursor: 'pointer',
                    animation: `techSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.06}s both`,
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${skill.color}28`;
                    e.currentTarget.style.borderColor = `${skill.color}70`;
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                    e.currentTarget.style.boxShadow = `0 10px 25px ${skill.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className={tech.icon} style={{ 
                    fontSize: 'clamp(20px, 5vw, 28px)',
                    transition: 'transform 0.3s ease'
                  }} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expandable Achievements */}
          {activeSkill === skill.id && (
            <div style={{
              marginTop: 'clamp(18px, 4vw, 24px)',
              padding: 'clamp(16px, 4vw, 22px)',
              background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}08)`,
              borderRadius: '20px',
              border: `1px solid ${skill.color}35`,
              animation: 'expandIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: `0 10px 30px ${skill.color}20`
            }}>
              <div style={{
                fontSize: 'clamp(11px, 2.5vw, 13px)',
                color: skill.color,
                fontWeight: 800,
                letterSpacing: '1.5px',
                marginBottom: '16px',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textShadow: `0 0 20px ${skill.color}`
              }}>
                <span style={{ fontSize: 'clamp(16px, 4vw, 20px)' }}>🏆</span>
                Key Achievements
              </div>
              {skill.achievements.map((achievement, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 'clamp(10px, 2.5vw, 14px)',
                    marginBottom: i < skill.achievements.length - 1 ? '12px' : '0',
                    fontSize: 'clamp(13px, 3vw, 15px)',
                    color: 'rgba(226, 232, 240, 0.95)',
                    lineHeight: 1.7,
                    animation: `achievementSlide 0.4s ease-out ${i * 0.1}s both`
                  }}
                >
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: skill.color,
                    marginTop: '8px',
                    flexShrink: 0,
                    boxShadow: `0 0 12px ${skill.color}`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }} />
                  <span style={{ fontWeight: 500 }}>{achievement}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Devicon CDN */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #030712;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @keyframes cardSlideUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes techSlideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes achievementSlide {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expandIn {
          from {
            opacity: 0;
            transform: scaleY(0);
            transformOrigin: top;
          }
          to {
            opacity: 1;
            transform: scaleY(1);
            transformOrigin: top;
          }
        }

        @keyframes rippleEffect {
          to {
            transform: translate(-50%, -50%) scale(40);
            opacity: 0;
          }
        }

        @keyframes borderFlow {
          0%, 100% {
            box-shadow: 0 0 25px currentColor;
          }
          50% {
            box-shadow: 0 0 50px currentColor;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(0.95); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #7c3aed, #0891b2);
        }

        @media (max-width: 640px) {
          body {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#030712',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Scroll Progress */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '5px',
          background: 'rgba(15, 23, 42, 0.8)',
          zIndex: 10000,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}>
          <div style={{
            height: '100%',
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981)',
            backgroundSize: '200% 100%',
            animation: 'gradientShift 3s ease infinite',
            transition: 'width 0.1s ease',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)'
          }} />
        </div>

        {/* Particle Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            opacity: 0.7
          }}
        />

        {/* Gradient Orbs */}
        <div style={{
          position: 'fixed',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <div style={{
            position: 'absolute',
            width: 'clamp(400px, 60vw, 800px)',
            height: 'clamp(400px, 60vw, 800px)',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2), transparent 70%)',
            borderRadius: '50%',
            top: '-15%',
            right: '-15%',
            animation: 'float 10s ease-in-out infinite',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            width: 'clamp(350px, 55vw, 700px)',
            height: 'clamp(350px, 55vw, 700px)',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent 70%)',
            borderRadius: '50%',
            bottom: '-15%',
            left: '-15%',
            animation: 'float 12s ease-in-out infinite 2s',
            filter: 'blur(80px)'
          }} />
          <div style={{
            position: 'absolute',
            width: 'clamp(300px, 50vw, 600px)',
            height: 'clamp(300px, 50vw, 600px)',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15), transparent 70%)',
            borderRadius: '50%',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'float 14s ease-in-out infinite 4s',
            filter: 'blur(80px)'
          }} />
        </div>

        {/* Custom Cursor */}
        <div 
          ref={cursorRef}
          style={{
            position: 'fixed',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5), transparent 70%)',
            pointerEvents: 'none',
            left: mousePosition.x - 15,
            top: mousePosition.y - 15,
            transition: 'transform 0.2s ease',
            zIndex: 9999,
            filter: 'blur(15px)',
            mixBlendMode: 'screen',
            display: window.innerWidth > 768 ? 'block' : 'none'
          }}
        />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 32px)'
        }}>
          {/* Hero Header */}
          <header style={{
            padding: 'clamp(80px, 18vw, 120px) 0 clamp(50px, 12vw, 80px)',
            textAlign: 'center'
          }}>
            {/* Status Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'clamp(10px, 2.5vw, 14px)',
              padding: 'clamp(10px, 2.5vw, 14px) clamp(20px, 5vw, 28px)',
              background: 'rgba(15, 23, 42, 0.7)',
              backdropFilter: 'blur(30px)',
              WebkitBackdropFilter: 'blur(30px)',
              border: '2px solid rgba(139, 92, 246, 0.4)',
              borderRadius: '100px',
              marginBottom: 'clamp(28px, 7vw, 40px)',
              animation: 'fadeInUp 1s ease-out, pulse 3s ease-in-out infinite 2s',
              boxShadow: '0 10px 40px rgba(139, 92, 246, 0.3)'
            }}>
              <div style={{
                width: 'clamp(8px, 2vw, 10px)',
                height: 'clamp(8px, 2vw, 10px)',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 15px #10b981',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              <span style={{
                fontSize: 'clamp(11px, 2.5vw, 14px)',
                fontWeight: 800,
                background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                Open To Work • Available Now
              </span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(40px, 12vw, 96px)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #fff 0%, #8b5cf6 40%, #06b6d4 80%, #10b981 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'clamp(20px, 5vw, 32px)',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              animation: 'fadeInUp 1s ease-out 0.2s both, gradientShift 5s ease infinite',
              fontFamily: 'Outfit, sans-serif',
              textShadow: '0 20px 60px rgba(139, 92, 246, 0.3)'
            }}>
              TECHNICAL
              <br />
              EXCELLENCE
            </h1>

            <p style={{
              fontSize: 'clamp(15px, 3.8vw, 22px)',
              color: 'rgba(148, 163, 184, 0.95)',
              maxWidth: '900px',
              margin: '0 auto clamp(40px, 10vw, 60px)',
              lineHeight: 1.8,
              fontWeight: 500,
              animation: 'fadeInUp 1s ease-out 0.4s both',
              letterSpacing: '0.3px'
            }}>
              Transforming ideas into scalable, production-ready solutions with modern tech stack.
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                fontSize: 'clamp(16px, 4vw, 24px)'
              }}>
                Code with purpose. Build with passion.
              </span>
            </p>

            {/* Filter Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(10px, 2.5vw, 14px)',
              animation: 'fadeInUp 1s ease-out 0.6s both',
              marginBottom: 'clamp(30px, 7vw, 50px)'
            }}>
              {[
                { value: 'all', label: 'All Skills', icon: '⚡' },
                { value: 'full-stack', label: 'Full-Stack', icon: '💻' },
                { value: 'ai/ml', label: 'AI/ML', icon: '🧠' },
                { value: 'deep-learning', label: 'Deep Learning', icon: '🤖' },
                { value: 'cloud-&-devops', label: 'Cloud', icon: '☁️' }
              ].map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  style={{
                    padding: 'clamp(12px, 3vw, 16px) clamp(20px, 5vw, 32px)',
                    background: filter === f.value 
                      ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' 
                      : 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    border: filter === f.value 
                      ? '2px solid rgba(139, 92, 246, 0.7)' 
                      : '2px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '100px',
                    color: filter === f.value ? '#000' : '#fff',
                    fontSize: 'clamp(12px, 3vw, 15px)',
                    fontWeight: 800,
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: filter === f.value ? '0 10px 30px rgba(139, 92, 246, 0.5)' : 'none',
                    fontFamily: 'JetBrains Mono, monospace',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    if (filter !== f.value) {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                      e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== f.value) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}
                >
                  <span>{f.icon}</span>
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </header>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: 'clamp(24px, 6vw, 40px)',
            marginBottom: 'clamp(80px, 18vw, 120px)'
          }}>
            {filteredSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>

          {/* CTA Section */}
          <section style={{
            background: 'rgba(15, 23, 42, 0.5)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            borderRadius: 'clamp(24px, 6vw, 40px)',
            padding: 'clamp(50px, 12vw, 80px) clamp(30px, 7vw, 60px)',
            textAlign: 'center',
            marginBottom: 'clamp(80px, 18vw, 120px)',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.2), transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #8b5cf6, #06b6d4, #10b981, transparent)',
              backgroundSize: '200% 100%',
              animation: 'gradientShift 3s ease infinite'
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: 'clamp(36px, 9vw, 72px)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #fff, #8b5cf6, #06b6d4)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: 'clamp(20px, 5vw, 32px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontFamily: 'Outfit, sans-serif',
                animation: 'gradientShift 5s ease infinite'
              }}>
                Let's Create Together
              </div>

              <p style={{
                fontSize: 'clamp(15px, 3.8vw, 20px)',
                color: 'rgba(148, 163, 184, 0.95)',
                maxWidth: '800px',
                margin: '0 auto clamp(40px, 10vw, 50px)',
                lineHeight: 1.8,
                fontWeight: 500,
                letterSpacing: '0.3px'
              }}>
                Ready to bring your vision to life with cutting-edge technology and innovative solutions. Let's build something amazing!
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'clamp(14px, 3.5vw, 24px)'
              }}>
                <a
                  href="https://github.com/bhagavan444"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: 'clamp(16px, 4vw, 22px) clamp(32px, 8vw, 50px)',
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                    borderRadius: '100px',
                    color: '#000',
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    fontWeight: 900,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'clamp(10px, 2.5vw, 14px)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    boxShadow: '0 15px 40px rgba(139, 92, 246, 0.5)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    border: '2px solid transparent',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.08)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(139, 92, 246, 0.7)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.5)';
                  }}
                >
                  <i className="devicon-github-original" style={{ fontSize: 'clamp(20px, 5vw, 24px)' }} />
                  <span>View Projects</span>
                  <span>→</span>
                </a>
                <a
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  style={{
                    padding: 'clamp(16px, 4vw, 22px) clamp(32px, 8vw, 50px)',
                    background: 'transparent',
                    border: '2px solid rgba(139, 92, 246, 0.7)',
                    borderRadius: '100px',
                    color: '#fff',
                    fontSize: 'clamp(14px, 3.5vw, 18px)',
                    fontWeight: 900,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'clamp(10px, 2.5vw, 14px)',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    fontFamily: 'JetBrains Mono, monospace',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.08)';
                    e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)';
                    e.currentTarget.style.borderColor = '#8b5cf6';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.7)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>✉</span>
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{
            textAlign: 'center',
            paddingBottom: 'clamp(50px, 12vw, 80px)',
            color: 'rgba(148, 163, 184, 0.6)',
            fontSize: 'clamp(12px, 3vw, 15px)',
            letterSpacing: '0.5px',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            <div style={{ 
              marginBottom: '20px',
              fontSize: 'clamp(14px, 3.5vw, 16px)',
              fontWeight: 600
            }}>
              Engineered with precision • Designed with passion
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <div style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                boxShadow: '0 0 12px #8b5cf6',
                animation: 'pulse 2s ease-in-out infinite'
              }} />
              <span>© 2026 Portfolio Showcase</span>
              <div style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                boxShadow: '0 0 12px #06b6d4',
                animation: 'pulse 2s ease-in-out infinite 0.5s'
              }} />
              <span>All rights reserved</span>
              <div style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10b981, #8b5cf6)',
                boxShadow: '0 0 12px #10b981',
                animation: 'pulse 2s ease-in-out infinite 1s'
              }} />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}