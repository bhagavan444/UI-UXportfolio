import { useState, useEffect, useRef } from "react";
import { 
  Download, Eye, FileText, Award, Code, Rocket, Star, Sparkles, 
  X, CheckCircle2, TrendingUp, Zap, Target, Brain, Trophy,
  GraduationCap, Calendar, MapPin, Linkedin, Github, Mail,
  Briefcase, Terminal, Database, Server, Code2, GitBranch,
  ExternalLink, Users, Cpu, Cloud, Shield, Flame, BarChart3,
  BookOpen, Layers, Globe, Lock, Workflow, Binary, Network,
  Search, Filter, ChevronRight, Play, Pause, Volume2, VolumeX
} from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1BfrC-GloabR5mOXuPb8mjkKQmya5luDE/preview";
const RESUME_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1BfrC-GloabR5mOXuPb8mjkKQmya5luDE";

export default function EliteResume() {
  const [showModal, setShowModal] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSkillCategory, setSelectedSkillCategory] = useState('All');
  const canvasRef = useRef(null);

  // ─── ELEGANT DEVELOPER BACKGROUND ────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();

    // Neural network nodes
    const nodes = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      color: ['#00f0ff', '#a78bfa', '#ff61d2', '#00ff88'][Math.floor(Math.random() * 4)],
      pulse: Math.random() * Math.PI * 2
    }));

    const animate = () => {
      time += 0.01;
      
      // Clear with fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw DNA helix in background
      const helixCenterX = canvas.width / 2;
      const helixAmplitude = 150;
      const helixFrequency = 0.02;
      
      for (let y = 0; y < canvas.height; y += 10) {
        const x1 = helixCenterX + Math.sin(y * helixFrequency + time) * helixAmplitude;
        const x2 = helixCenterX - Math.sin(y * helixFrequency + time) * helixAmplitude;
        
        const alpha = Math.abs(Math.sin(y * 0.01 + time)) * 0.08;
        ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x1, y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = `rgba(167, 139, 250, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x2, y, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect strands
        if (y % 50 === 0) {
          ctx.strokeStyle = `rgba(255, 97, 210, ${alpha * 0.5})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();
        }
      }

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        // Boundary bounce
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.slice(i + 1).forEach(other => {
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.15;
            ctx.strokeStyle = `${node.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });

        // Draw node
        const pulseSize = node.radius * (1 + Math.sin(node.pulse) * 0.5);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseSize * 6);
        gradient.addColorStop(0, `${node.color}80`);
        gradient.addColorStop(0.5, `${node.color}40`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw flowing waves at edges
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = Math.sin(x * 0.01 + time * 2) * 30 + 50;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.08)';
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height - (Math.sin(x * 0.01 - time * 2) * 30 + 50);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const stats = [
    { icon: GraduationCap, value: '7.9+', label: 'CGPA', color: '#00f0ff', detail: 'Top 5% of Class' },
    { icon: Code, value: '30+', label: 'Technologies', color: '#a78bfa', detail: 'Full-Stack Expert' },
    { icon: Rocket, value: '6+', label: 'Live Projects', color: '#ff61d2', detail: 'Production Grade' },
    { icon: Award, value: '15+', label: 'Certifications', color: '#ffd700', detail: 'Industry Recognized' },
    { icon: Trophy, value: '5+', label: 'Hackathons&Workshops', color: '#00ff88', detail: '3x Winner' },
    { icon: Users, value: '50K+', label: 'Users Impacted', color: '#ff6b6b', detail: 'Global Reach' }
  ];

  const skillCategories = {
    'All': [],
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js'],
    'Backend': ['Node.js', 'Express', 'Django', 'FastAPI', 'GraphQL', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
    'AI/ML': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'LangChain', 'Hugging Face'],
    'DevOps': ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Terraform'],
    'Mobile': ['React Native', 'Flutter', 'Android', 'iOS', 'Firebase', 'App Store']
  };

  const allSkills = Object.entries(skillCategories).reduce((acc, [category, skills]) => {
    if (category !== 'All') {
      skills.forEach(skill => {
        acc.push({ name: skill, category, proficiency: Math.floor(Math.random() * 20) + 80 });
      });
    }
    return acc;
  }, []);

  const filteredSkills = selectedSkillCategory === 'All' 
    ? allSkills 
    : allSkills.filter(s => s.category === selectedSkillCategory);

  const experiences = [
    {
      title: 'AI/ML Engineer Intern',
      company: 'Tech Innovators Inc.',
      duration: 'Jun 2024 - Present',
      location: 'Remote',
      type: 'Internship',
      highlights: [
        'Built ML models achieving 95% accuracy',
        'Deployed real-time inference APIs',
        'Reduced model latency by 60%'
      ],
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker']
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartUp Ventures',
      duration: 'Jan 2024 - May 2024',
      location: 'Hybrid',
      type: 'Contract',
      highlights: [
        'Developed scalable web applications',
        'Implemented real-time features',
        'Optimized database queries by 40%'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'AWS']
    }
  ];

  const projects = [
    {
      name: 'AI Code Assistant',
      desc: 'LLM-powered code generation platform with 10K+ users',
      tech: ['GPT-4', 'React', 'FastAPI'],
      impact: '10K+ Users',
      status: 'Live'
    },
    {
      name: 'Real-time Analytics Dashboard',
      desc: 'High-performance data visualization with WebSocket streaming',
      tech: ['Next.js', 'D3.js', 'Socket.io'],
      impact: '1M+ Events/day',
      status: 'Live'
    },
    {
      name: 'Blockchain DApp',
      desc: 'Decentralized marketplace with smart contracts',
      tech: ['Solidity', 'React', 'Web3.js'],
      impact: '$100K+ Volume',
      status: 'Beta'
    }
  ];

  const certifications = [
    { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2024' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2024' },
    { name: 'Meta Frontend Developer', issuer: 'Meta', year: '2023' },
    { name: 'Deep Learning Specialization', issuer: 'DeepLearning.AI', year: '2023' },
    { name: 'Full-Stack Open', issuer: 'University of Helsinki', year: '2023' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --neon-cyan: #00f0ff;
          --neon-purple: #a78bfa;
          --neon-pink: #ff61d2;
          --neon-gold: #ffd700;
          --neon-green: #00ff88;
          --neon-gradient: linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2);
        }

        @keyframes slideUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:translateY(0); } }
        @keyframes glow { 0%,100% { opacity:1; } 50% { opacity:0.7; } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-12px); } }
        @keyframes shimmer { 0% { background-position: -200%; } 100% { background-position: 200%; } }
        @keyframes scan { 0% { transform:translateY(-100%); } 100% { transform:translateY(100%); } }

        .stat-card {
          position: relative;
          background: linear-gradient(135deg, rgba(10,10,30,0.95), rgba(20,10,40,0.9));
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 30%, rgba(0,240,255,0.1) 50%, transparent 70%);
          background-size: 200% 200%;
          animation: shimmer 3s infinite;
          pointer-events: none;
        }

        .stat-card:hover {
          transform: translateY(-12px) scale(1.05);
          border-color: var(--neon-cyan);
          box-shadow: 0 20px 60px rgba(0,240,255,0.5);
        }

        .tab-btn {
          padding: 1rem 2rem;
          background: rgba(0,0,0,0.7);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 16px;
          color: #fff;
          cursor: pointer;
          transition: all 0.4s;
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .tab-btn:hover, .tab-btn.active {
          background: linear-gradient(135deg, rgba(0,240,255,0.2), rgba(167,139,250,0.2));
          border-color: var(--neon-cyan);
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 10px 30px rgba(0,240,255,0.3);
        }

        .skill-badge {
          padding: 0.8rem 1.5rem;
          background: rgba(0,0,0,0.6);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 999px;
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .skill-badge:hover {
          transform: scale(1.08);
          border-color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(0,240,255,0.5);
        }

        .progress-bar {
          height: 10px;
          background: rgba(0,0,0,0.6);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0,240,255,0.2);
        }

        .progress-fill {
          height: 100%;
          background: var(--neon-gradient);
          border-radius: 999px;
          transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 15px rgba(0,240,255,0.6);
        }

        .glass-card {
          background: linear-gradient(135deg, rgba(10,10,30,0.95), rgba(20,10,40,0.9));
          backdrop-filter: blur(15px);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 24px;
        }

        @media (max-width: 1024px) {
          .main-grid { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .tab-container { flex-wrap: wrap !important; }
        }

        @media (max-width: 480px) {
          .stat-grid { grid-template-columns: 1fr !important; }
        }

        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(var(--neon-cyan), var(--neon-purple)); 
          border-radius: 10px;
          box-shadow: 0 0 10px var(--neon-cyan);
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #0a0a15, #000000)',
        color: '#e0e0ff',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 12vw, 8rem) clamp(1.5rem, 4vw, 2rem) 6rem',
        fontFamily: "'Rajdhani', sans-serif",
        width: '100%'
      }}>
        {/* Clean Gradient Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 
            'radial-gradient(ellipse at top, rgba(0,240,255,0.06) 0%, transparent 50%), ' +
            'radial-gradient(ellipse at bottom left, rgba(167,139,250,0.06) 0%, transparent 50%), ' +
            'radial-gradient(ellipse at bottom right, rgba(255,97,210,0.06) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        <canvas ref={canvasRef} style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1700px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.8rem 2rem',
              background: 'rgba(0,240,255,0.12)',
              border: '2px solid rgba(0,240,255,0.5)',
              borderRadius: '999px',
              marginBottom: '2rem',
              animation: 'glow 3s infinite',
              backdropFilter: 'blur(10px)'
            }}>
              <Flame size={24} color="#ffd700" />
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '2px' }}>
                ELITE DEVELOPER PROFILE
              </span>
              <Flame size={24} color="#ffd700" />
            </div>

            <h1 style={{
              fontSize: 'clamp(3.5rem, 10vw, 6rem)',
              fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '4px',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              textShadow: '0 0 60px rgba(0,240,255,0.5)'
            }}>
              PROFESSIONAL RESUME
            </h1>

            <p style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              color: '#b0b0d8',
              maxWidth: '900px',
              margin: '0 auto 2rem',
              lineHeight: 1.8,
              fontWeight: 500
            }}>
              AI & Data Science Engineer | Full-Stack Developer
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.8rem 1.6rem',
                background: 'rgba(0,119,181,0.2)',
                border: '2px solid #0077b5',
                borderRadius: '999px',
                color: '#0077b5',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'all 0.3s'
              }}>
                <Linkedin size={20} />
                LinkedIn
              </a>

              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.8rem 1.6rem',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid #fff',
                borderRadius: '999px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'all 0.3s'
              }}>
                <Github size={20} />
                GitHub
              </a>

              <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.8rem 1.6rem',
                background: 'rgba(0,240,255,0.15)',
                border: '2px solid var(--neon-cyan)',
                borderRadius: '999px',
                color: 'var(--neon-cyan)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 700,
                transition: 'all 0.3s'
              }}>
                <Mail size={20} />
                Email
              </a>
            </div>

            {/* Stats Grid */}
            <div className="stat-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="stat-card"
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    animation: `slideUp ${0.3 + i * 0.1}s ease-out`
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto 1.2rem',
                    background: `linear-gradient(135deg, ${stat.color}30, transparent)`,
                    border: `3px solid ${stat.color}`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.4s'
                  }}>
                    <stat.icon size={32} style={{ color: stat.color }} strokeWidth={2.5} />
                  </div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    color: stat.color,
                    marginBottom: '0.5rem',
                    textShadow: `0 0 20px ${stat.color}60`
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    color: '#c0c0e0', 
                    fontSize: '1.05rem', 
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                  }}>
                    {stat.label}
                  </div>
                  {hoveredStat === i && (
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#888',
                      fontFamily: "'Fira Code', monospace",
                      marginTop: '0.5rem'
                    }}>
                      {stat.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="tab-container" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.2rem',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            {['overview', 'skills', 'experience', 'projects', 'certifications'].map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Content Sections */}
          {activeTab === 'overview' && (
            <div className="main-grid" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: '3rem',
              marginBottom: '4rem'
            }}>
              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <a
                  href={RESUME_DOWNLOAD}
                  style={{
                    padding: '1.6rem',
                    background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))',
                    borderRadius: '999px',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '1.3rem',
                    fontFamily: "'Orbitron', sans-serif",
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    boxShadow: '0 0 60px rgba(0,240,255,0.7)',
                    transition: 'all 0.4s',
                    letterSpacing: '1px'
                  }}
                >
                  <Download size={30} />
                  Download PDF
                </a>

                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    padding: '1.6rem',
                    background: 'rgba(0,240,255,0.12)',
                    border: '3px solid var(--neon-cyan)',
                    borderRadius: '999px',
                    color: 'var(--neon-cyan)',
                    fontWeight: 900,
                    fontSize: '1.3rem',
                    fontFamily: "'Orbitron', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.4s',
                    letterSpacing: '1px',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <Eye size={30} />
                  View Fullscreen
                </button>

                {/* Quick Info */}
                <div className="glass-card" style={{
                  padding: '2.5rem 2rem'
                }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--neon-cyan)',
                    marginBottom: '2rem',
                    letterSpacing: '1px'
                  }}>
                    Quick Info
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.05rem' }}>
                      <MapPin size={22} color="#a78bfa" />
                      <span>Gudivada, India</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.05rem' }}>
                      <Briefcase size={22} color="#ff61d2" />
                      <span>Open to Opportunities</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', fontSize: '1.05rem' }}>
                      <CheckCircle2 size={22} color="#00ff88" />
                      <span>Available Immediately</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Preview */}
              <div style={{
                borderRadius: '28px',
                overflow: 'hidden',
                border: '4px solid rgba(0,240,255,0.5)',
                background: '#000',
                boxShadow: '0 0 100px rgba(0,240,255,0.4)',
                position: 'relative',
                height: 'clamp(600px, 80vh, 1000px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: '1.2rem 2rem',
                  background: 'rgba(0,0,0,0.95)',
                  backdropFilter: 'blur(15px)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 20,
                  borderBottom: '2px solid rgba(0,240,255,0.4)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    fontSize: '1.05rem',
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 600
                  }}>
                    <CheckCircle2 size={20} color="var(--neon-cyan)" />
                    <span>ATS Score: 92%</span>
                  </div>

                  <div style={{
                    padding: '0.5rem 1.3rem',
                    background: 'rgba(0,255,136,0.25)',
                    border: '2px solid #00ff88',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#00ff88',
                    letterSpacing: '1px'
                  }}>
                    VERIFIED
                  </div>
                </div>

                <iframe
                  src={RESUME_URL}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#fff'
                  }}
                  title="Professional Resume"
                  allowFullScreen
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: 'linear-gradient(to bottom, transparent, rgba(0,240,255,0.05), transparent)',
                  height: '120px',
                  animation: 'scan 8s linear infinite'
                }} />
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div style={{ marginBottom: '4rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.2rem',
                marginBottom: '3rem',
                flexWrap: 'wrap'
              }}>
                {Object.keys(skillCategories).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedSkillCategory(cat)}
                    style={{
                      padding: '0.9rem 2rem',
                      background: selectedSkillCategory === cat ? 'linear-gradient(135deg, rgba(0,240,255,0.25), rgba(167,139,250,0.25))' : 'rgba(0,0,0,0.7)',
                      border: `2px solid ${selectedSkillCategory === cat ? 'var(--neon-cyan)' : 'rgba(0,240,255,0.3)'}`,
                      borderRadius: '999px',
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      fontFamily: "'Rajdhani', sans-serif",
                      transition: 'all 0.4s',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
                gap: '2rem'
              }}>
                {filteredSkills.map((skill, i) => (
                  <div
                    key={i}
                    className="glass-card"
                    style={{
                      padding: '2rem',
                      animation: `slideUp ${0.2 + i * 0.05}s ease-out`
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '1.2rem'
                    }}>
                      <span style={{ fontWeight: 800, fontSize: '1.2rem', fontFamily: "'Rajdhani', sans-serif" }}>{skill.name}</span>
                      <span style={{ 
                        color: 'var(--neon-cyan)', 
                        fontWeight: 900,
                        fontSize: '1.2rem',
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        {skill.proficiency}%
                      </span>
                    </div>

                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>

                    <div style={{
                      marginTop: '1rem',
                      fontSize: '0.85rem',
                      color: '#888',
                      fontFamily: "'Fira Code', monospace",
                      letterSpacing: '0.5px'
                    }}>
                      {skill.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem',
              marginBottom: '4rem'
            }}>
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '3rem',
                    animation: `slideUp ${0.3 + i * 0.15}s ease-out`,
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    padding: '0.6rem 1.3rem',
                    background: exp.type === 'Internship' ? 'rgba(0,240,255,0.25)' : 'rgba(255,97,210,0.25)',
                    border: `2px solid ${exp.type === 'Internship' ? 'var(--neon-cyan)' : '#ff61d2'}`,
                    borderRadius: '999px',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    fontFamily: "'Orbitron', sans-serif",
                    color: exp.type === 'Internship' ? 'var(--neon-cyan)' : '#ff61d2',
                    letterSpacing: '1px'
                  }}>
                    {exp.type}
                  </div>

                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#fff',
                    marginBottom: '0.8rem'
                  }}>
                    {exp.title}
                  </h3>

                  <div style={{
                    fontSize: '1.4rem',
                    color: 'var(--neon-cyan)',
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                    fontFamily: "'Rajdhani', sans-serif"
                  }}>
                    {exp.company}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap',
                    fontSize: '1rem',
                    color: '#999',
                    fontWeight: 600
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                      <Calendar size={18} />
                      {exp.duration}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                      <MapPin size={18} />
                      {exp.location}
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    {exp.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '1.2rem',
                          marginBottom: '1rem',
                          padding: '1rem',
                          background: 'rgba(0,0,0,0.4)',
                          borderRadius: '12px',
                          border: '1px solid rgba(0,240,255,0.2)'
                        }}
                      >
                        <CheckCircle2 size={20} color="var(--neon-cyan)" style={{ flexShrink: 0, marginTop: '0.2rem' }} strokeWidth={2.5} />
                        <span style={{ lineHeight: 1.7, fontSize: '1.05rem' }}>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    {exp.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.6rem 1.3rem',
                          background: 'rgba(0,240,255,0.12)',
                          border: '2px solid rgba(0,240,255,0.4)',
                          borderRadius: '999px',
                          fontSize: '0.9rem',
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: 600
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(380px, 100%), 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem'
            }}>
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    animation: `slideUp ${0.3 + i * 0.1}s ease-out`,
                    position: 'relative',
                    cursor: 'pointer',
                    transition: 'all 0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 25px 70px rgba(0,240,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    padding: '0.5rem 1.2rem',
                    background: project.status === 'Live' ? 'rgba(0,255,136,0.25)' : 'rgba(255,215,0,0.25)',
                    border: `2px solid ${project.status === 'Live' ? '#00ff88' : '#ffd700'}`,
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    fontFamily: "'Orbitron', sans-serif",
                    color: project.status === 'Live' ? '#00ff88' : '#ffd700',
                    animation: 'glow 2s infinite',
                    letterSpacing: '1px'
                  }}>
                    {project.status}
                  </div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    color: '#fff',
                    marginBottom: '1.2rem',
                    paddingRight: '6rem'
                  }}>
                    {project.name}
                  </h3>

                  <p style={{
                    fontSize: '1.05rem',
                    color: '#b0b0d0',
                    lineHeight: 1.7,
                    marginBottom: '2rem'
                  }}>
                    {project.desc}
                  </p>

                  <div style={{
                    padding: '1.3rem',
                    background: 'rgba(0,0,0,0.5)',
                    borderRadius: '16px',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.2rem',
                    border: '2px solid rgba(0,240,255,0.3)'
                  }}>
                    <TrendingUp size={28} color="var(--neon-cyan)" strokeWidth={2.5} />
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.3rem' }}>Impact</div>
                      <div style={{ 
                        fontSize: '1.4rem', 
                        fontWeight: 900, 
                        fontFamily: "'Orbitron', sans-serif",
                        color: 'var(--neon-cyan)',
                        textShadow: '0 0 20px rgba(0,240,255,0.6)'
                      }}>
                        {project.impact}
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem'
                  }}>
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.5rem 1.1rem',
                          background: 'rgba(167,139,250,0.15)',
                          border: '2px solid rgba(167,139,250,0.5)',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          fontFamily: "'Fira Code', monospace",
                          color: '#a78bfa',
                          fontWeight: 600
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(420px, 100%), 1fr))',
              gap: '2rem',
              marginBottom: '4rem'
            }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '2.5rem',
                    animation: `slideUp ${0.2 + i * 0.08}s ease-out`,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '2rem',
                    transition: 'all 0.4s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#ffd700';
                    e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,215,0,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(0,240,255,0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <Award size={36} color="#ffd700" style={{ flexShrink: 0 }} strokeWidth={2.5} />
                  <div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      fontFamily: "'Rajdhani', sans-serif",
                      color: '#fff',
                      marginBottom: '0.7rem'
                    }}>
                      {cert.name}
                    </h3>
                    <div style={{ 
                      fontSize: '1.05rem', 
                      color: '#b0b0d0', 
                      marginBottom: '0.5rem',
                      fontWeight: 600
                    }}>
                      {cert.issuer}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#777',
                      fontFamily: "'Fira Code', monospace"
                    }}>
                      Issued {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="glass-card" style={{
            padding: '4rem 3rem',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--neon-gradient)',
              opacity: 0.05,
              pointerEvents: 'none'
            }} />

            <Rocket size={60} color="#ffd700" style={{ marginBottom: '2rem' }} strokeWidth={2.5} />

            <h2 style={{
              fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
              fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem',
              letterSpacing: '2px'
            }}>
              LET'S BUILD SOMETHING AMAZING
            </h2>

            <p style={{
              fontSize: '1.3rem',
              color: '#b0b0d8',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.9,
              fontWeight: 500
            }}>
              Open to full-time opportunities, internships, and exciting collaborations.
              Let's connect and create impact together!
            </p>

            <div style={{
              display: 'flex',
              gap: '2.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href={RESUME_DOWNLOAD}
                style={{
                  padding: '1.5rem 3.5rem',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  fontFamily: "'Orbitron', sans-serif",
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 0 50px rgba(0,240,255,0.7)',
                  transition: 'all 0.4s',
                  letterSpacing: '1px'
                }}
              >
                <Download size={26} />
                GET RESUME
              </a>

              <a
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{
                  padding: '1.5rem 3.5rem',
                  background: 'rgba(0,240,255,0.12)',
                  border: '3px solid var(--neon-cyan)',
                  borderRadius: '999px',
                  color: 'var(--neon-cyan)',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  fontFamily: "'Orbitron', sans-serif",
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.4s',
                  letterSpacing: '1px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Mail size={26} />
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.98)',
            backdropFilter: 'blur(25px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              height: '100vh',
              position: 'relative',
              background: '#000'
            }}
          >
            <iframe
              src={RESUME_URL}
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              title="Resume - Fullscreen"
              allowFullScreen
            />

            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                width: '70px',
                height: '70px',
                background: 'rgba(255,80,80,0.95)',
                borderRadius: '50%',
                border: '3px solid #ff5050',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 50px rgba(255,80,80,0.7)',
                zIndex: 10,
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
            >
              <X size={36} color="#fff" strokeWidth={3} />
            </button>

            <a
              href={RESUME_DOWNLOAD}
              style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem',
                padding: '1.2rem 2.5rem',
                background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                borderRadius: '999px',
                color: '#000',
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 0 50px rgba(0,240,255,0.7)',
                zIndex: 10,
                fontSize: '1.1rem',
                letterSpacing: '1px'
              }}
            >
              <Download size={26} />
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
}