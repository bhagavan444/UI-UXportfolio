"use client";
import { useState, useEffect, useRef } from "react";
import {
  Trophy, Award, Users, Target, TrendingUp, Zap, Star, Medal,
  Sparkles, X, CheckCircle2, Rocket, Brain, Code2, Flame,
  Crown, Globe, Cpu, Database, Lock, GitBranch, Terminal,
  Download, ExternalLink, Share2, Heart, Eye, Clock,
  ArrowRight, ChevronRight, BadgeCheck, ShieldCheck,
  Code, Server, Layers, GitPullRequest, GitCommit,
  Hexagon, Shield, Swords, Gem, Skull, Radio
} from "lucide-react";

const achievements = [
  {
    id: 1,
    category: "Competition",
    icon: Trophy,
    title: "National Hackathon Champion",
    subtitle: "Brainovision National Talent Hunt 2024",
    rank: "1st Place",
    description: "Led full-stack development in a 24-hour national championship. Built a production-grade MERN electronics marketplace with real-time chat (Socket.io), JWT fortress security, role-based access control, and optimized deployment.",
    highlights: [
      "Designed complete system architecture & MongoDB schemas",
      "Implemented 20+ secure REST APIs & WebSocket features",
      "Delivered responsive React frontend with Redux state management",
      "Achieved 100% uptime during live demo under extreme pressure"
    ],
    impact: [
      "Won ₹50,000 cash prize + national recognition",
      "Selected for top industry mentorship program"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Redux"],
    color: "#00f0ff",
    secondaryColor: "#0088ff",
    rarity: "Legendary",
    year: "2024",
    certificate: true,
    stats: { difficulty: 98, impact: 95, innovation: 92 }
  },
  {
    id: 2,
    category: "Certification",
    icon: Award,
    title: "15+ Industry Certifications",
    subtitle: "Elite Developer Credential Stack",
    rank: "Multiple Specializations",
    description: "Mastered cutting-edge technologies through rigorous professional certifications from leading platforms and organizations.",
    highlights: [
      "Generative AI & Large Language Models",
      "Advanced Machine Learning & Deep Learning",
      "Full-Stack Web Development (MERN)",
      "Cloud Computing (AWS & Azure)",
      "DevOps & CI/CD Pipelines",
      "Data Structures & Algorithms Mastery"
    ],
    impact: [
      "Recognized by top 1% of certified developers globally",
      "Directly applied knowledge in production-grade projects"
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker", "Kubernetes", "Git"],
    color: "#a78bfa",
    secondaryColor: "#8b5cf6",
    rarity: "Legendary",
    year: "2023–2025",
    stats: { difficulty: 88, impact: 90, innovation: 85 }
  },
  {
    id: 3,
    category: "Production",
    icon: Rocket,
    title: "8+ End-to-End Production Projects",
    subtitle: "Real-World Impact Delivered",
    rank: "Full Ownership",
    description: "Architected, developed, and successfully deployed 8+ complete full-stack & AI/ML projects from concept to production.",
    highlights: [
      "Secure authentication systems with JWT & OAuth 2.0",
      "Scalable REST & GraphQL APIs with rate limiting & caching",
      "Real-time features using WebSockets & Server-Sent Events",
      "CI/CD pipelines with GitHub Actions & Docker",
      "Performance optimization (Lighthouse 95+ scores)"
    ],
    impact: [
      "Used by 5000+ users across multiple platforms",
      "Zero critical security vulnerabilities in production"
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "AWS"],
    color: "#ff61d2",
    secondaryColor: "#ec4899",
    rarity: "Epic",
    year: "2023–2025",
    stats: { difficulty: 92, impact: 96, innovation: 89 }
  },
  {
    id: 4,
    category: "Open Source",
    icon: GitPullRequest,
    title: "Active Open Source Contributor",
    subtitle: "GitHub Impact & Community",
    rank: "Consistent Contributor",
    description: "Regularly contribute to open-source projects, create developer tools, and maintain popular repositories.",
    highlights: [
      "Created 5+ developer productivity tools (10k+ downloads)",
      "Contributed to major libraries & frameworks",
      "Maintained 3 repositories with 2k+ stars collectively",
      "Active in GitHub Discussions & Issues"
    ],
    impact: [
      "Helped 5000+ developers worldwide",
      "Featured in GitHub trending repositories"
    ],
    tech: ["TypeScript", "React", "Node.js", "Rust", "Go"],
    color: "#00ff88",
    secondaryColor: "#10b981",
    rarity: "Epic",
    year: "2024–2025",
    stats: { difficulty: 85, impact: 88, innovation: 91 }
  }
];

const metrics = [
  { label: "Production Projects", value: "8+", icon: Rocket, color: "#00f0ff" },
  { label: "Technologies Mastered", value: "35+", icon: Cpu, color: "#a78bfa" },
  { label: "Total Lines of Code", value: "25K+", icon: Code2, color: "#ff61d2" },
  { label: "GitHub Stars", value: "2.1K+", icon: Star, color: "#ffd700" },
  { label: "Hackathon Wins", value: "3", icon: Trophy, color: "#00ff88" },
  { label: "Certifications", value: "15+", icon: Award, color: "#ff9500" }
];

export default function EliteAchievements() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [activeMetric, setActiveMetric] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

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
    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: ['#00f0ff', '#a78bfa', '#ff61d2', '#00ff88'][Math.floor(Math.random() * 4)],
        pulse: Math.random() * Math.PI * 2
      }));
    }

    const nodes = particlesRef.current;

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
        
        const alpha = Math.abs(Math.sin(y * 0.01 + time)) * 0.1;
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
            const alpha = (1 - dist / 150) * 0.2;
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
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = Math.sin(x * 0.01 + time * 2) * 30 + 50;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      ctx.strokeStyle = 'rgba(167, 139, 250, 0.1)';
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

  // ─── MOUSE TRACKING ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCertificateDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/images/Brainovision-certificate.jpg";
    link.download = "Brainovision-National-Championship-Certificate-2024.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600;700&display=swap');

        :root {
          --neon-cyan: #00f0ff;
          --neon-purple: #a78bfa;
          --neon-pink: #ff61d2;
          --neon-gold: #ffd700;
          --neon-green: #00ff88;
          --neon-gradient: linear-gradient(135deg, #00f0ff 0%, #a78bfa 25%, #ff61d2 50%, #ffd700 75%, #00ff88 100%);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body { overflow-x: hidden; }

        @keyframes slideInUp { 
          from { opacity:0; transform:translateY(80px) scale(0.95); } 
          to { opacity:1; transform:translateY(0) scale(1); } 
        }
        
        @keyframes glitchPulse { 
          0%, 100% { transform:translate(0) scale(1); filter:hue-rotate(0deg); } 
          20% { transform:translate(-3px,3px) scale(1.02); filter:hue-rotate(5deg); } 
          40% { transform:translate(3px,-3px) scale(0.98); filter:hue-rotate(-5deg); } 
          60% { transform:translate(-2px,-2px) scale(1.01); filter:hue-rotate(3deg); }
        }
        
        @keyframes energyFlow { 
          0% { transform:translateX(-100%) rotate(0deg); opacity:0; } 
          50% { opacity:0.6; } 
          100% { transform:translateX(200%) rotate(360deg); opacity:0; } 
        }
        
        @keyframes float3D { 
          0%, 100% { transform:translateY(0) rotateX(0deg) rotateY(0deg); } 
          25% { transform:translateY(-15px) rotateX(5deg) rotateY(5deg); }
          50% { transform:translateY(-8px) rotateX(-5deg) rotateY(10deg); }
          75% { transform:translateY(-12px) rotateX(3deg) rotateY(-5deg); }
        }
        
        @keyframes scanline { 
          0% { transform:translateY(-100%); } 
          100% { transform:translateY(100%); } 
        }
        
        @keyframes hologramFlicker { 
          0%, 100% { opacity:1; } 
          50% { opacity:0.85; } 
        }
        
        @keyframes borderRun { 
          0% { background-position:0% 50%; } 
          50% { background-position:100% 50%; } 
          100% { background-position:0% 50%; } 
        }
        
        @keyframes textGlitch {
          0% { text-shadow: 2px 2px #00f0ff, -2px -2px #ff61d2; }
          25% { text-shadow: -2px 2px #a78bfa, 2px -2px #00ff88; }
          50% { text-shadow: 2px -2px #ffd700, -2px 2px #00f0ff; }
          75% { text-shadow: -2px -2px #ff61d2, 2px 2px #a78bfa; }
          100% { text-shadow: 2px 2px #00f0ff, -2px -2px #ff61d2; }
        }

        @keyframes pulseGradient {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        .achieve-card {
          position: relative;
          background: linear-gradient(135deg, rgba(8,8,22,0.95), rgba(15,5,30,0.9));
          border: 2px solid rgba(0,240,255,0.25);
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(12px) saturate(180%);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .achieve-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, transparent 30%, var(--neon-cyan) 50%, transparent 70%);
          border-radius: 28px;
          opacity: 0;
          transition: opacity 0.5s;
          animation: scanline 4s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        .achieve-card:hover::before {
          opacity: 0.3;
        }

        .achieve-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                      rgba(0,240,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          z-index: 1;
        }

        .achieve-card:hover::after {
          opacity: 1;
        }

        .achieve-card:hover {
          transform: translateY(-25px) rotateX(5deg) scale(1.05);
          border-color: var(--card-color, var(--neon-cyan));
          box-shadow: 
            0 0 80px var(--card-color, var(--neon-cyan))40,
            0 30px 80px rgba(0,0,0,0.6),
            inset 0 0 60px rgba(0,240,255,0.1);
        }

        .metric-card {
          position: relative;
          background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(10,10,25,0.9));
          border: 2.5px solid;
          padding: 2rem 1.8rem;
          border-radius: 24px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(10px);
          overflow: hidden;
        }

        .metric-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent 30%, var(--metric-color) 50%, transparent 70%);
          animation: energyFlow 3s linear infinite;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .metric-card:hover::before {
          opacity: 0.4;
        }

        .metric-card:hover {
          transform: translateY(-15px) scale(1.08) rotateZ(2deg);
          box-shadow: 
            0 0 70px var(--metric-color),
            0 25px 60px rgba(0,0,0,0.5);
          border-width: 3px;
        }

        .neon-text {
          background: linear-gradient(135deg, #00f0ff 0%, #a78bfa 25%, #ff61d2 50%, #ffd700 75%, #00ff88 100%);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: borderRun 8s ease infinite, textGlitch 5s infinite;
        }

        .hologram {
          position: relative;
          animation: hologramFlicker 4s infinite;
        }

        .hologram::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, 
            transparent 0%, 
            rgba(0,240,255,0.1) 50%, 
            transparent 100%);
          animation: scanline 2s linear infinite;
          pointer-events: none;
        }

        .tech-badge {
          position: relative;
          padding: 0.7rem 1.5rem;
          background: rgba(0,0,0,0.6);
          border: 1.5px solid;
          border-radius: 16px;
          font-family: 'Fira Code', monospace;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.4s;
          overflow: hidden;
        }

        .tech-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, var(--badge-color), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        .tech-badge:hover::before {
          transform: translateX(100%);
        }

        .tech-badge:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 25px var(--badge-color);
        }

        .stat-bar {
          position: relative;
          height: 10px;
          background: rgba(0,0,0,0.5);
          border-radius: 10px;
          overflow: hidden;
        }

        .stat-bar-fill {
          height: 100%;
          border-radius: 10px;
          position: relative;
          transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 0 20px currentColor;
        }

        .stat-bar-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: energyFlow 2s linear infinite;
        }

        .crt-effect {
          position: relative;
        }

        .crt-effect::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            rgba(0,240,255,0.05) 1px,
            transparent 2px
          );
          pointer-events: none;
          animation: scanline 10s linear infinite;
        }

        .glass-morphism {
          background: rgba(8,8,22,0.7);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.1);
        }

        @media (max-width: 1200px) {
          .achieve-grid { grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)) !important; }
        }
        
        @media (max-width: 768px) {
          .achieve-grid { grid-template-columns: 1fr !important; }
          .achieve-card:hover { transform: translateY(-15px) scale(1.02); }
        }
      `}</style>

      <div className="crt-effect" style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #0a0a15, #000000)',
        color: '#e0e0ff',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(8rem, 15vw, 12rem) 2rem 10rem',
        fontFamily: "'Rajdhani', sans-serif"
      }}>
        {/* Animated Developer Grid Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #000000 0%, #0a0515 50%, #000000 100%)',
          pointerEvents: 'none'
        }} />

        {/* Radial Gradient Overlay with Animation */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 
            'radial-gradient(circle at 20% 30%, rgba(0,240,255,0.08), transparent 40%), ' +
            'radial-gradient(circle at 80% 20%, rgba(167,139,250,0.08), transparent 40%), ' +
            'radial-gradient(circle at 50% 80%, rgba(255,97,210,0.08), transparent 40%), ' +
            'radial-gradient(circle at 10% 90%, rgba(0,255,136,0.06), transparent 35%)',
          animation: 'pulseGradient 15s ease-in-out infinite',
          pointerEvents: 'none'
        }} />

        {/* Advanced Particle Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Mouse Follower Effect */}
        <div style={{
          position: 'fixed',
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(0,240,255,0.15), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 2,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          filter: 'blur(60px)'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1800px',
          margin: '0 auto'
        }}>
          {/* Epic Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(6rem, 15vw, 10rem)' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1.2rem 2.5rem',
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(167,139,250,0.15))',
              border: '3px solid rgba(0,240,255,0.6)',
              borderRadius: '999px',
              marginBottom: '3rem',
              animation: 'float3D 6s ease-in-out infinite',
              backdropFilter: 'blur(15px)',
              boxShadow: '0 0 60px rgba(0,240,255,0.4)'
            }}>
              <Hexagon size={32} color="#ffd700" strokeWidth={3} />
              <span style={{ 
                fontFamily: "'Orbitron', sans-serif", 
                fontSize: '1.2rem', 
                fontWeight: 800,
                letterSpacing: '3px'
              }}>
                ELITE DEVELOPER ARSENAL — 2026
              </span>
              <Shield size={32} color="#ffd700" strokeWidth={3} />
            </div>

            <h1 className="neon-text hologram" style={{
              fontSize: 'clamp(5rem, 15vw, 11rem)',
              fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '8px',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              lineHeight: 1,
              textShadow: '0 0 80px rgba(0,240,255,0.8)'
            }}>
              ACHIEVEMENTS
            </h1>

            <div style={{
              width: '200px',
              height: '6px',
              background: 'linear-gradient(90deg, transparent, #00f0ff, #a78bfa, #ff61d2, transparent)',
              margin: '3rem auto',
              borderRadius: '10px',
              boxShadow: '0 0 30px rgba(0,240,255,0.6)'
            }} />

            <p style={{
              fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
              color: '#b0b0d8',
              maxWidth: '1000px',
              margin: '0 auto',
              fontFamily: "'Fira Code', monospace",
              lineHeight: 2,
              fontWeight: 500
            }}>
              <span style={{ color: '#00f0ff' }}>▸</span> Where precision engineering meets creative innovation<br/>
              <span style={{ color: '#a78bfa' }}>▸</span> National championships • Elite certifications • Production mastery
            </p>
          </div>

          {/* Advanced Metrics Showcase */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '10rem'
          }}>
            {metrics.map((metric, i) => {
              const isActive = activeMetric === i;
              return (
                <div
                  key={i}
                  className="metric-card hologram"
                  onMouseEnter={() => setActiveMetric(i)}
                  onMouseLeave={() => setActiveMetric(null)}
                  style={{
                    '--metric-color': metric.color,
                    borderColor: isActive ? metric.color : `${metric.color}40`,
                    animation: `slideInUp ${i * 0.15}s ease-out`
                  }}
                >
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto 1.5rem',
                      background: `linear-gradient(135deg, ${metric.color}25, transparent)`,
                      border: `3px solid ${metric.color}`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.5s',
                      transform: isActive ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      boxShadow: isActive ? `0 0 50px ${metric.color}` : 'none'
                    }}>
                      <metric.icon size={40} style={{ color: metric.color }} strokeWidth={2.5} />
                    </div>
                    
                    <div style={{
                      fontSize: 'clamp(2.8rem, 6vw, 4rem)',
                      fontWeight: 900,
                      fontFamily: "'Orbitron', sans-serif",
                      color: metric.color,
                      marginBottom: '0.8rem',
                      textShadow: `0 0 30px ${metric.color}80`,
                      letterSpacing: '2px'
                    }}>
                      {metric.value}
                    </div>
                    
                    <div style={{
                      color: '#c0c0e0',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      {metric.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hollywood-Grade Achievements Grid */}
          <div className="achieve-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            marginBottom: '10rem'
          }}>
            {achievements.map((ach) => {
              const isHovered = hoveredId === ach.id;
              return (
                <div
                  key={ach.id}
                  className="achieve-card"
                  onMouseEnter={() => setHoveredId(ach.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setActiveAchievement(ach)}
                  style={{
                    cursor: 'pointer',
                    '--card-color': ach.color,
                    animation: `slideInUp ${ach.id * 0.2}s ease-out`
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                  }}
                >
                  {/* Card Header with 3D Icon */}
                  <div style={{
                    height: 'clamp(250px, 55vw, 320px)',
                    background: `linear-gradient(135deg, ${ach.color}20 0%, ${ach.secondaryColor}15 50%, transparent 100%)`,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: `2px solid ${ach.color}40`
                  }}>
                    {/* Animated Background Pattern */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `radial-gradient(circle, ${ach.color}15 1px, transparent 1px)`,
                      backgroundSize: '30px 30px',
                      opacity: 0.4,
                      animation: isHovered ? 'scanline 3s linear infinite' : 'none'
                    }} />

                    {/* Main Icon */}
                    <div style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '180px',
                      height: '180px',
                      border: `5px solid ${ach.color}`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${ach.color}25, transparent)`,
                      backdropFilter: 'blur(10px)',
                      animation: isHovered ? 'float3D 4s ease-in-out infinite' : 'none',
                      boxShadow: isHovered ? `0 0 100px ${ach.color}` : `0 0 40px ${ach.color}50`,
                      transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}>
                      <ach.icon size={90} color={ach.color} strokeWidth={2.5} />
                      
                      {/* Rotating Ring */}
                      {isHovered && (
                        <div style={{
                          position: 'absolute',
                          inset: -15,
                          border: `2px solid ${ach.color}`,
                          borderRadius: '50%',
                          borderTopColor: 'transparent',
                          animation: 'spin 3s linear infinite'
                        }} />
                      )}
                    </div>

                    {/* Rarity Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '2rem',
                      right: '2rem',
                      padding: '0.8rem 1.8rem',
                      background: `linear-gradient(135deg, ${ach.color}35, ${ach.secondaryColor}25)`,
                      border: `3px solid ${ach.color}`,
                      borderRadius: '999px',
                      fontSize: '1rem',
                      fontWeight: 900,
                      fontFamily: "'Orbitron', sans-serif",
                      color: ach.color,
                      backdropFilter: 'blur(10px)',
                      boxShadow: `0 0 30px ${ach.color}50`,
                      letterSpacing: '2px',
                      textShadow: `0 0 20px ${ach.color}`
                    }}>
                      {ach.rarity === 'Legendary' && <Crown size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />}
                      {ach.rarity}
                    </div>

                    {/* Category Tag */}
                    <div style={{
                      position: 'absolute',
                      top: '2rem',
                      left: '2rem',
                      padding: '0.6rem 1.4rem',
                      background: 'rgba(0,0,0,0.8)',
                      border: `2px solid ${ach.color}60`,
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      fontFamily: "'Fira Code', monospace",
                      color: ach.color,
                      backdropFilter: 'blur(10px)'
                    }}>
                      {ach.category} • {ach.year}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div style={{ padding: '3rem 2.5rem', position: 'relative', zIndex: 2 }}>
                    <h3 style={{
                      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                      fontWeight: 900,
                      fontFamily: "'Orbitron', sans-serif",
                      color: '#ffffff',
                      marginBottom: '1rem',
                      letterSpacing: '1px',
                      lineHeight: 1.2
                    }}>
                      {ach.title}
                    </h3>

                    <div style={{
                      fontSize: '1.45rem',
                      fontWeight: 800,
                      color: ach.color,
                      marginBottom: '0.8rem',
                      fontFamily: "'Rajdhani', sans-serif",
                      textShadow: `0 0 20px ${ach.color}60`
                    }}>
                      {ach.subtitle}
                    </div>

                    <div style={{
                      display: 'inline-block',
                      padding: '0.5rem 1.2rem',
                      background: `${ach.color}15`,
                      border: `2px solid ${ach.color}50`,
                      borderRadius: '999px',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: ach.color,
                      marginBottom: '2rem'
                    }}>
                      <Target size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                      {ach.rank}
                    </div>

                    <p style={{
                      fontSize: '1.1rem',
                      color: '#d0d0ff',
                      lineHeight: 1.8,
                      marginBottom: '2rem',
                      fontFamily: "'Fira Code', monospace",
                      fontWeight: 400
                    }}>
                      {ach.description}
                    </p>

                    {/* Stats Bars */}
                    <div style={{ marginBottom: '2rem' }}>
                      {Object.entries(ach.stats).map(([key, value]) => (
                        <div key={key} style={{ marginBottom: '1rem' }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: '0.5rem',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: ach.color,
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                          }}>
                            <span>{key}</span>
                            <span>{value}%</span>
                          </div>
                          <div className="stat-bar">
                            <div 
                              className="stat-bar-fill"
                              style={{
                                width: isHovered ? `${value}%` : '0%',
                                background: `linear-gradient(90deg, ${ach.color}, ${ach.secondaryColor})`,
                                color: ach.color
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.9rem',
                      marginBottom: '2.5rem'
                    }}>
                      {ach.tech.slice(0, 5).map((t, idx) => (
                        <div 
                          key={idx} 
                          className="tech-badge"
                          style={{
                            '--badge-color': ach.color,
                            borderColor: `${ach.color}60`,
                            color: ach.color
                          }}
                        >
                          {t}
                        </div>
                      ))}
                      {ach.tech.length > 5 && (
                        <div 
                          className="tech-badge"
                          style={{
                            '--badge-color': ach.color,
                            borderColor: `${ach.color}60`,
                            color: ach.color
                          }}
                        >
                          +{ach.tech.length - 5} more
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      style={{
                        width: '100%',
                        padding: '1.4rem',
                        background: `linear-gradient(135deg, ${ach.color}, ${ach.secondaryColor})`,
                        color: '#000',
                        fontWeight: 900,
                        fontFamily: "'Orbitron', sans-serif",
                        border: 'none',
                        borderRadius: '999px',
                        fontSize: '1.15rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        boxShadow: `0 0 50px ${ach.color}70`,
                        transition: 'all 0.4s',
                        letterSpacing: '2px',
                        textTransform: 'uppercase'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = `0 0 80px ${ach.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = `0 0 50px ${ach.color}70`;
                      }}
                    >
                      <Sparkles size={24} />
                      View Full Details
                      <ArrowRight size={24} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certificate Showcase */}
          <div className="glass-morphism" style={{
            margin: '8rem auto',
            maxWidth: '1100px',
            padding: '4rem 3rem',
            borderRadius: '32px',
            border: '3px solid var(--neon-cyan)',
            boxShadow: '0 0 100px rgba(0,240,255,0.5)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(0,240,255,0.1), transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <Award size={40} color="var(--neon-cyan)" strokeWidth={3} />
                <h2 style={{
                  fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
                  fontWeight: 900,
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'var(--neon-cyan)',
                  letterSpacing: '3px',
                  textShadow: '0 0 40px rgba(0,240,255,0.8)'
                }}>
                  CHAMPIONSHIP CERTIFICATE
                </h2>
                <Award size={40} color="var(--neon-cyan)" strokeWidth={3} />
              </div>

              <p style={{
                fontSize: '1.3rem',
                color: '#b0b0d8',
                marginBottom: '3rem',
                fontFamily: "'Fira Code', monospace"
              }}>
                Official recognition of national excellence
              </p>

              <div
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.5s',
                  position: 'relative',
                  display: 'inline-block'
                }}
                onClick={() => setShowCertificate(true)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.querySelector('img').style.boxShadow = '0 0 120px rgba(0,240,255,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.querySelector('img').style.boxShadow = '0 0 70px rgba(0,240,255,0.6)';
                }}
              >
                <img
                  src="/assets/images/Brainovision-certificate.jpg"
                  alt="National Championship Certificate"
                  style={{
                    width: '100%',
                    maxWidth: '900px',
                    height: 'auto',
                    borderRadius: '20px',
                    border: '4px solid var(--neon-cyan)',
                    boxShadow: '0 0 70px rgba(0,240,255,0.6)',
                    transition: 'all 0.5s'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, transparent 30%, rgba(0,240,255,0.2) 50%, transparent 70%)',
                  animation: 'scanline 4s linear infinite',
                  pointerEvents: 'none',
                  borderRadius: '20px'
                }} />
              </div>

              <p style={{
                marginTop: '2.5rem',
                fontSize: '1.2rem',
                color: '#a0a0c0',
                fontFamily: "'Fira Code', monospace"
              }}>
                <Eye size={20} style={{ display: 'inline', marginRight: '0.5rem' }} />
                Click to view full certificate
              </p>

              <button
                onClick={handleCertificateDownload}
                style={{
                  marginTop: '2.5rem',
                  padding: '1.5rem 4rem',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                  border: 'none',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: 900,
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  boxShadow: '0 0 60px rgba(0,240,255,0.7)',
                  transition: 'all 0.4s',
                  letterSpacing: '2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 0 100px rgba(0,240,255,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(0,240,255,0.7)';
                }}
              >
                <Download size={30} />
                DOWNLOAD CERTIFICATE
              </button>
            </div>
          </div>

          {/* Epic Final CTA */}
          <div className="glass-morphism" style={{
            padding: 'clamp(6rem, 12vw, 9rem) 3rem',
            borderRadius: '40px',
            border: '3px solid rgba(0,240,255,0.4)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15), transparent 60%), ' +
                         'radial-gradient(circle at 0% 100%, rgba(167,139,250,0.15), transparent 60%), ' +
                         'radial-gradient(circle at 100% 100%, rgba(255,97,210,0.15), transparent 60%)',
              pointerEvents: 'none'
            }} />

            <div style={{ position: 'relative', zIndex: 2 }}>
              <Rocket size={60} color="#ffd700" style={{ marginBottom: '2rem' }} strokeWidth={2.5} />
              
              <h2 className="neon-text" style={{
                fontSize: 'clamp(3.5rem, 9vw, 6rem)',
                fontWeight: 900,
                fontFamily: "'Orbitron', sans-serif",
                marginBottom: '2.5rem',
                letterSpacing: '4px',
                lineHeight: 1.2
              }}>
                LET'S BUILD THE FUTURE
              </h2>

              <p style={{
                fontSize: '1.5rem',
                color: '#b0b0d8',
                maxWidth: '900px',
                margin: '0 auto 4rem',
                lineHeight: 2,
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 500
              }}>
                Ready to transform your vision into production-grade reality?<br/>
                Let's collaborate on something extraordinary.
              </p>

              <div style={{
                display: 'flex',
                gap: '2.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a
                  href="https://github.com/bhagavan444"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.6rem 4rem',
                    background: 'rgba(0,240,255,0.15)',
                    border: '3px solid var(--neon-cyan)',
                    borderRadius: '999px',
                    color: 'var(--neon-cyan)',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.4rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    transition: 'all 0.4s',
                    letterSpacing: '2px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 80px var(--neon-cyan)';
                    e.currentTarget.style.background = 'rgba(0,240,255,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.background = 'rgba(0,240,255,0.15)';
                  }}
                >
                  <Code2 size={34} />
                  EXPLORE PROJECTS
                </a>

                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.6rem 4rem',
                    background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink))',
                    borderRadius: '999px',
                    color: '#000',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.4rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: '0 0 60px rgba(0,240,255,0.7)',
                    transition: 'all 0.4s',
                    letterSpacing: '2px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 120px rgba(0,240,255,0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 60px rgba(0,240,255,0.7)';
                  }}
                >
                  <Users size={34} />
                  CONNECT & COLLABORATE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'fixed',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: scrollY < 200 ? 'block' : 'none',
          zIndex: 100
        }}>
          <div style={{
            width: '40px',
            height: '60px',
            border: '3px solid var(--neon-cyan)',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '10px',
            animation: 'float3D 3s ease-in-out infinite'
          }}>
            <div style={{
              width: '6px',
              height: '10px',
              background: 'var(--neon-cyan)',
              borderRadius: '3px',
              animation: 'scanline 2s ease-in-out infinite'
            }} />
          </div>
        </div>
      </div>

      {/* Full Certificate Modal */}
      {showCertificate && (
        <div
          onClick={() => setShowCertificate(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(30px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'slideInUp 0.4s ease-out'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              border: '6px solid var(--neon-cyan)',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 0 150px rgba(0,240,255,0.9)',
              animation: 'glitchPulse 0.5s ease-out'
            }}
          >
            <button
              onClick={() => setShowCertificate(false)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,50,50,0.5)',
                border: '3px solid #ff3333',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                e.currentTarget.style.background = 'rgba(255,50,50,0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.background = 'rgba(255,50,50,0.5)';
              }}
            >
              <X size={40} strokeWidth={4} />
            </button>

            <img
              src="/assets/images/Brainovision-certificate.jpg"
              alt="National Championship Certificate"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />

            <div style={{
              position: 'absolute',
              bottom: '3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '2rem'
            }}>
              <button
                onClick={handleCertificateDownload}
                style={{
                  padding: '1.4rem 3.5rem',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                  border: 'none',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: 900,
                  fontFamily: "'Orbitron', sans-serif",
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 0 80px rgba(0,240,255,0.9)',
                  transition: 'all 0.3s',
                  letterSpacing: '2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 0 120px rgba(0,240,255,1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 80px rgba(0,240,255,0.9)';
                }}
              >
                <Download size={30} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Detail Modal */}
      {activeAchievement && (
        <div
          onClick={() => setActiveAchievement(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.97)',
            backdropFilter: 'blur(30px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'slideInUp 0.4s ease-out',
            overflowY: 'auto'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="glass-morphism"
            style={{
              background: 'linear-gradient(135deg, rgba(8,8,22,0.98), rgba(15,5,30,0.95))',
              border: `6px solid ${activeAchievement.color}`,
              borderRadius: '40px',
              maxWidth: '1300px',
              width: '96%',
              maxHeight: '95vh',
              overflowY: 'auto',
              boxShadow: `0 0 200px ${activeAchievement.color}`,
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActiveAchievement(null)}
              style={{
                position: 'sticky',
                top: '2rem',
                left: 'calc(100% - 5rem)',
                background: 'rgba(255,50,50,0.5)',
                border: '3px solid #ff3333',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                cursor: 'pointer',
                zIndex: 10,
                marginBottom: '-70px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
              }}
            >
              <X size={40} strokeWidth={4} />
            </button>

            <div style={{
              padding: 'clamp(4rem, 8vw, 6rem) clamp(2.5rem, 6vw, 5rem) 8rem'
            }}>
              {/* Header */}
              <div style={{
                textAlign: 'center',
                marginBottom: '5rem'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  margin: '0 auto 3rem',
                  border: `6px solid ${activeAchievement.color}`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${activeAchievement.color}30, transparent)`,
                  boxShadow: `0 0 120px ${activeAchievement.color}`,
                  animation: 'float3D 6s ease-in-out infinite',
                  position: 'relative'
                }}>
                  <activeAchievement.icon size={100} color={activeAchievement.color} strokeWidth={2.5} />
                  
                  {/* Rotating rings */}
                  <div style={{
                    position: 'absolute',
                    inset: -20,
                    border: `3px solid ${activeAchievement.color}`,
                    borderRadius: '50%',
                    borderTopColor: 'transparent',
                    borderRightColor: 'transparent',
                    animation: 'spin 4s linear infinite'
                  }} />
                  <div style={{
                    position: 'absolute',
                    inset: -35,
                    border: `2px solid ${activeAchievement.color}50`,
                    borderRadius: '50%',
                    borderBottomColor: 'transparent',
                    borderLeftColor: 'transparent',
                    animation: 'spin 6s linear infinite reverse'
                  }} />
                </div>

                <div style={{
                  fontSize: '1.8rem',
                  color: activeAchievement.color,
                  fontWeight: 800,
                  fontFamily: "'Orbitron', sans-serif",
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1.5rem',
                  letterSpacing: '3px'
                }}>
                  <Star size={36} fill={activeAchievement.rarity === "Legendary" ? "#ffd700" : activeAchievement.color} />
                  {activeAchievement.rarity} • {activeAchievement.category}
                  <Star size={36} fill={activeAchievement.rarity === "Legendary" ? "#ffd700" : activeAchievement.color} />
                </div>

                <h2 style={{
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  fontWeight: 900,
                  fontFamily: "'Orbitron', sans-serif",
                  background: `linear-gradient(135deg, ${activeAchievement.color}, ${activeAchievement.secondaryColor}, #ffffff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  letterSpacing: '2px',
                  lineHeight: 1.2
                }}>
                  {activeAchievement.title}
                </h2>

                <div style={{
                  fontSize: '2rem',
                  fontWeight: 900,
                  fontFamily: "'Rajdhani', sans-serif",
                  color: activeAchievement.color,
                  marginBottom: '2rem',
                  textShadow: `0 0 30px ${activeAchievement.color}`
                }}>
                  {activeAchievement.subtitle} — {activeAchievement.rank}
                </div>

                <p style={{
                  fontSize: '1.4rem',
                  color: '#d0d0ff',
                  maxWidth: '1000px',
                  margin: '0 auto',
                  lineHeight: 2,
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: 400
                }}>
                  {activeAchievement.description}
                </p>
              </div>

              {/* Stats */}
              <div style={{
                marginBottom: '5rem',
                maxWidth: '800px',
                margin: '0 auto 5rem'
              }}>
                <h3 style={{
                  fontSize: '2.5rem',
                  color: activeAchievement.color,
                  marginBottom: '3rem',
                  textAlign: 'center',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '2px'
                }}>
                  PERFORMANCE METRICS
                </h3>
                {Object.entries(activeAchievement.stats).map(([key, value]) => (
                  <div key={key} style={{ marginBottom: '2rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      fontFamily: "'Orbitron', sans-serif",
                      color: activeAchievement.color,
                      textTransform: 'uppercase',
                      letterSpacing: '2px'
                    }}>
                      <span>{key}</span>
                      <span>{value}%</span>
                    </div>
                    <div style={{
                      height: '14px',
                      background: 'rgba(0,0,0,0.6)',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: `2px solid ${activeAchievement.color}30`
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${value}%`,
                        background: `linear-gradient(90deg, ${activeAchievement.color}, ${activeAchievement.secondaryColor})`,
                        borderRadius: '10px',
                        position: 'relative',
                        boxShadow: `0 0 20px ${activeAchievement.color}`,
                        animation: 'energyFlow 2s linear infinite'
                      }}>
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                          animation: 'energyFlow 2s linear infinite'
                        }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div style={{ marginBottom: '5rem' }}>
                <h3 style={{
                  fontSize: '2.5rem',
                  color: activeAchievement.color,
                  marginBottom: '3rem',
                  textAlign: 'center',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '2px'
                }}>
                  KEY HIGHLIGHTS
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '2rem'
                }}>
                  {activeAchievement.highlights.map((highlight, idx) => (
                    <div key={idx} style={{
                      padding: '2rem',
                      background: `linear-gradient(135deg, ${activeAchievement.color}20, transparent)`,
                      border: `2px solid ${activeAchievement.color}60`,
                      borderRadius: '24px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                      transition: 'all 0.4s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                      e.currentTarget.style.borderColor = activeAchievement.color;
                      e.currentTarget.style.boxShadow = `0 0 40px ${activeAchievement.color}60`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = `${activeAchievement.color}60`;
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <CheckCircle2 size={32} style={{ color: activeAchievement.color, flexShrink: 0 }} strokeWidth={2.5} />
                      <span style={{ 
                        color: '#e0e0ff', 
                        fontSize: '1.2rem',
                        fontFamily: "'Fira Code', monospace",
                        lineHeight: 1.7
                      }}>
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: '5rem' }}>
                <h3 style={{
                  fontSize: '2.5rem',
                  color: activeAchievement.color,
                  marginBottom: '3rem',
                  textAlign: 'center',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '2px'
                }}>
                  TECHNOLOGY ARSENAL
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  justifyContent: 'center'
                }}>
                  {activeAchievement.tech.map((tech, idx) => (
                    <div key={idx} className="tech-badge" style={{
                      '--badge-color': activeAchievement.color,
                      padding: '1rem 2rem',
                      background: `${activeAchievement.color}25`,
                      border: `2px solid ${activeAchievement.color}70`,
                      borderRadius: '999px',
                      color: activeAchievement.color,
                      fontWeight: 800,
                      fontSize: '1.2rem',
                      fontFamily: "'Fira Code', monospace"
                    }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div style={{ marginBottom: '5rem' }}>
                <h3 style={{
                  fontSize: '2.5rem',
                  color: activeAchievement.color,
                  marginBottom: '3rem',
                  textAlign: 'center',
                  fontFamily: "'Orbitron', sans-serif",
                  fontWeight: 800,
                  letterSpacing: '2px'
                }}>
                  REAL-WORLD IMPACT
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '2rem'
                }}>
                  {activeAchievement.impact.map((item, idx) => (
                    <div key={idx} style={{
                      padding: '2.5rem',
                      background: `linear-gradient(135deg, rgba(0,0,0,0.8), ${activeAchievement.color}15)`,
                      border: `3px solid ${activeAchievement.color}70`,
                      borderRadius: '24px',
                      textAlign: 'center',
                      transition: 'all 0.4s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 0 60px ${activeAchievement.color}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                      <Zap size={48} style={{ 
                        color: activeAchievement.color, 
                        marginBottom: '1.5rem' 
                      }} strokeWidth={2.5} />
                      <div style={{
                        fontSize: '1.6rem',
                        fontWeight: 900,
                        fontFamily: "'Rajdhani', sans-serif",
                        color: activeAchievement.color,
                        lineHeight: 1.6
                      }}>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <div style={{ textAlign: 'center', marginTop: '6rem' }}>
                <button
                  onClick={() => setActiveAchievement(null)}
                  style={{
                    padding: '1.6rem 5rem',
                    background: `linear-gradient(135deg, ${activeAchievement.color}, ${activeAchievement.secondaryColor})`,
                    border: 'none',
                    borderRadius: '999px',
                    color: '#000',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: '1.4rem',
                    cursor: 'pointer',
                    transition: 'all 0.4s',
                    boxShadow: `0 0 60px ${activeAchievement.color}`,
                    letterSpacing: '2px',
                    textTransform: 'uppercase'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.08)';
                    e.currentTarget.style.boxShadow = `0 0 100px ${activeAchievement.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = `0 0 60px ${activeAchievement.color}`;
                  }}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: rgba(0,0,0,0.5); }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(var(--neon-cyan), var(--neon-purple)); 
          border-radius: 10px;
          box-shadow: 0 0 10px var(--neon-cyan);
        }
        ::-webkit-scrollbar-thumb:hover { 
          background: linear-gradient(var(--neon-purple), var(--neon-pink)); 
        }
      `}</style>
    </>
  );
}