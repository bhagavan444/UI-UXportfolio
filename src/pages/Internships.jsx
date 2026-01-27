import React, { useState, useEffect, useRef } from 'react';
import {
  Code, Brain, Database, Terminal, Award, ExternalLink, X,
  CheckCircle2, Layers, Sparkles, Zap, Github, Trophy,
  Target, Flame, Star, Rocket, Clock, MapPin, Calendar,
  TrendingUp, Shield, Crown, Hexagon, Activity, Users,
  ChevronRight, Cpu, GitBranch, Box, Boxes, Globe
} from 'lucide-react';

const internships = [
  {
    id: 1,
    title: "MERN Stack Intern",
    company: "StudyOwl Education Pvt Ltd",
    location: "Hybrid",
    period: "May – July 2025",
    duration: "3 months",
    badge: "Full-Stack Pro",
    rarity: "LEGENDARY",
    certId: "1bwbNlc9mdPYQOIyUpoiBIOhpyxaMBvbC",
    color: "#00f0ff",
    secondaryColor: "#8b5cf6",
    accentColor: "#f59e0b",
    icon: Code,
    impact: "Built production apps serving 1000+ users",
    rating: 98,
    tech: [
      "React", "Node.js", "Express", "MongoDB",
      "JWT", "REST APIs", "Git", "Cloud Deployment"
    ],
    responsibilities: [
      "Developed responsive UI components using React",
      "Built secure RESTful APIs with Node.js and Express",
      "Implemented JWT-based authentication and authorization",
      "Integrated frontend with backend services",
      "Collaborated with team using Git and Agile workflows"
    ],
    achievements: [
      "🚀 Built 3+ full-stack web applications",
      "🔐 Implemented secure login & role-based access",
      "⚡ Optimized API performance and database queries",
      "☁️ Deployed applications to cloud environments"
    ],
    impact_metrics: [
      { label: "Apps Built", value: "3+", icon: Layers },
      { label: "Users Served", value: "1K+", icon: Users },
      { label: "Uptime", value: "99%", icon: Activity }
    ],
    skills_gained: [
      "Full-Stack Development",
      "API Design & Security",
      "Cloud Deployment",
      "Team Collaboration"
    ]
  },
  {
    id: 2,
    title: "AI / ML Intern",
    company: "SmartBridge",
    location: "Remote",
    period: "May – June 2025",
    duration: "2 months",
    badge: "AI Engineer",
    rarity: "EPIC",
    certId: "1-_8ZI8uZ3DcrFpfZ3pts7VSYrAqPN5Zw",
    color: "#a78bfa",
    secondaryColor: "#ec4899",
    accentColor: "#06b6d4",
    icon: Brain,
    impact: "Achieved 85%+ accuracy on ML models",
    rating: 95,
    tech: [
      "Python", "TensorFlow", "Scikit-learn",
      "CNN", "OpenCV", "Flask"
    ],
    responsibilities: [
      "Designed and trained CNN models for image classification",
      "Preprocessed and augmented image datasets",
      "Evaluated models using accuracy and loss metrics",
      "Integrated trained models into Flask web applications",
      "Deployed ML models for real-time inference"
    ],
    achievements: [
      "🧠 Built and evaluated 5+ ML/DL models",
      "🎯 Achieved 85%+ accuracy on image classification tasks",
      "🔄 Implemented end-to-end ML pipelines",
      "⏱️ Delivered working AI demos within deadlines"
    ],
    impact_metrics: [
      { label: "Models Built", value: "5+", icon: Brain },
      { label: "Accuracy", value: "85%", icon: Target },
      { label: "Projects", value: "4", icon: Rocket }
    ],
    skills_gained: [
      "Deep Learning & CNNs",
      "Computer Vision",
      "Model Deployment",
      "ML Pipeline Design"
    ]
  },
  {
    id: 3,
    title: "Machine Learning & Data Science Intern",
    company: "Blackbucks",
    location: "Remote",
    period: "May – June 2024",
    duration: "2 months",
    badge: "Data Specialist",
    rarity: "EPIC",
    certId: "1yQQqBf32o8d3sYlheDCdaLTKj5_hepfY",
    color: "#00f0ff",
    secondaryColor: "#10b981",
    accentColor: "#f472b6",
    icon: Database,
    impact: "Processed 100K+ data records efficiently",
    rating: 92,
    tech: [
      "Python", "Pandas", "NumPy",
      "Scikit-learn", "Data Analysis", "Feature Engineering"
    ],
    responsibilities: [
      "Cleaned and preprocessed real-world datasets",
      "Performed exploratory data analysis (EDA)",
      "Built ML models for classification and prediction",
      "Evaluated models using standard ML metrics",
      "Documented findings and model performance"
    ],
    achievements: [
      "📊 Built multiple ML models from scratch",
      "🔧 Implemented feature engineering pipelines",
      "📈 Improved data quality and model accuracy",
      "💡 Strengthened foundation in data science workflows"
    ],
    impact_metrics: [
      { label: "Data Processed", value: "100K+", icon: Database },
      { label: "Models", value: "6", icon: TrendingUp },
      { label: "Accuracy", value: "92%", icon: CheckCircle2 }
    ],
    skills_gained: [
      "Data Preprocessing",
      "Feature Engineering",
      "ML Model Building",
      "Statistical Analysis"
    ]
  }
];

export default function EliteInternships() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeCert, setActiveCert] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef(null);
  const parallaxRef = useRef(null);

  // Advanced mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Developer-themed Matrix code rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Matrix-style code rain
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>{}[]()=+-*/@#$%&';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    // Binary particles
    class BinaryParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 0.5;
        this.value = Math.random() > 0.5 ? '1' : '0';
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = ['#00f0ff', '#a78bfa', '#ec4899'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.font = '12px "Fira Code", monospace';
        ctx.fillText(this.value, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    const binaryParticles = Array.from({ length: 50 }, () => new BinaryParticle());

    // Code symbols floating
    class CodeSymbol {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.symbol = characters.charAt(Math.floor(Math.random() * characters.length));
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = ['#00f0ff', '#a78bfa', '#10b981'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.font = '20px "Fira Code", monospace';
        ctx.fillText(this.symbol, this.x, this.y);
        ctx.globalAlpha = 1;
      }
    }

    const codeSymbols = Array.from({ length: 30 }, () => new CodeSymbol());

    const animate = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix rain effect
      ctx.fillStyle = '#00f0ff';
      ctx.font = fontSize + 'px "Fira Code", monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.globalAlpha = 0.15;
        ctx.fillStyle = i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#a78bfa' : '#10b981';
        ctx.fillText(text, x, y);
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.globalAlpha = 1;

      // Binary particles
      binaryParticles.forEach(p => {
        p.update();
        p.draw();
      });

      // Floating code symbols
      codeSymbols.forEach(s => {
        s.update();
        s.draw();
      });

      // Draw connection lines between nearby symbols
      codeSymbols.forEach((s1, i) => {
        codeSymbols.forEach((s2, j) => {
          if (i < j) {
            const dx = s1.x - s2.x;
            const dy = s1.y - s2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
              ctx.strokeStyle = `rgba(0, 240, 255, ${0.1 * (1 - dist / 150)})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(s1.x, s1.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const getCertificateUrl = (id) => `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
  const getViewUrl = (id) => `https://drive.google.com/file/d/${id}/view`;

  const getRarityColor = (rarity) => {
    const colors = {
      'LEGENDARY': '#ffd700',
      'EPIC': '#a78bfa',
      'RARE': '#00f0ff'
    };
    return colors[rarity] || '#00f0ff';
  };

  const filteredInternships = selectedFilter === 'ALL'
    ? internships
    : internships.filter(i => i.rarity === selectedFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --neon-cyan: #00f0ff;
          --neon-purple: #a78bfa;
          --neon-pink: #ec4899;
          --neon-gold: #ffd700;
          --neon-green: #10b981;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(80px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 30px currentColor,
                        0 0 60px currentColor,
                        inset 0 0 20px currentColor;
          }
          50% { 
            box-shadow: 0 0 50px currentColor,
                        0 0 100px currentColor,
                        inset 0 0 40px currentColor;
          }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes rotate3d {
          from { transform: rotateY(0deg) rotateX(0deg); }
          to { transform: rotateY(360deg) rotateX(360deg); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        @keyframes hologram {
          0%, 100% { opacity: 0.8; transform: translateZ(0); }
          50% { opacity: 1; transform: translateZ(20px); }
        }

        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        .intern-card {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(0, 0, 0, 0.98) 0%, 
            rgba(10, 10, 30, 0.95) 50%, 
            rgba(0, 0, 0, 0.98) 100%
          );
          border: 3px solid;
          border-radius: 32px;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
          backdrop-filter: blur(20px);
          cursor: pointer;
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .intern-card:hover {
          transform: translateY(-30px) scale(1.04) rotateX(5deg);
          box-shadow: 
            0 40px 100px currentColor,
            0 0 150px currentColor;
        }

        .intern-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, 
            transparent 30%, 
            currentColor 50%, 
            transparent 70%
          );
          animation: scanline 8s linear infinite;
          pointer-events: none;
          z-index: 1;
          opacity: 0.1;
        }

        .intern-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            currentColor, 
            transparent
          );
          animation: shimmer 4s infinite;
          pointer-events: none;
          opacity: 0.05;
        }

        .card-3d-layer {
          transform: translateZ(30px);
          transition: transform 0.6s;
        }

        .intern-card:hover .card-3d-layer {
          transform: translateZ(60px);
        }

        .tech-pill {
          position: relative;
          background: rgba(0, 0, 0, 0.9);
          border: 2.5px solid;
          padding: 0.7rem 1.3rem;
          border-radius: 999px;
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          font-weight: 700;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .tech-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            currentColor, 
            transparent
          );
          transition: left 0.6s;
          opacity: 0.1;
        }

        .tech-pill:hover {
          transform: translateY(-6px) scale(1.12) rotateZ(-2deg);
          box-shadow: 
            0 10px 30px currentColor,
            0 0 50px currentColor;
        }

        .tech-pill:hover::before {
          left: 100%;
        }

        .rarity-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          padding: 0.7rem 1.5rem;
          border-radius: 999px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 2px;
          border: 3px solid;
          animation: pulse 3s ease-in-out infinite, glow 2s ease-in-out infinite;
          z-index: 20;
          backdrop-filter: blur(15px);
          transform-style: preserve-3d;
          box-shadow: 0 0 40px currentColor;
        }

        .impact-metric {
          background: rgba(0, 0, 0, 0.7);
          border: 2.5px solid;
          border-radius: 20px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .impact-metric::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, currentColor, transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .impact-metric:hover {
          transform: translateY(-12px) scale(1.08) rotateZ(3deg);
          box-shadow: 
            0 15px 40px currentColor,
            0 0 80px currentColor;
        }

        .impact-metric:hover::before {
          opacity: 0.1;
        }

        .hexagon-icon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, currentColor, transparent);
          animation: rotate3d 30s linear infinite, morph 8s ease-in-out infinite;
          filter: drop-shadow(0 0 20px currentColor);
        }

        .filter-btn {
          background: rgba(0, 0, 0, 0.85);
          border: 3px solid;
          padding: 1rem 2.2rem;
          border-radius: 999px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          font-size: 0.95rem;
          letter-spacing: 1.5px;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .filter-btn:hover {
          transform: scale(1.12) translateY(-4px);
          box-shadow: 0 0 50px currentColor, 0 10px 30px currentColor;
        }

        .filter-btn.active {
          background: currentColor;
          color: black;
          box-shadow: 0 0 80px currentColor, 0 0 150px currentColor;
          animation: glow 2s ease-in-out infinite;
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 5px;
          background: linear-gradient(90deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink));
          z-index: 9999;
          transition: width 0.3s;
          box-shadow: 0 0 20px currentColor;
        }

        .cert-preview {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.8s;
        }

        .cert-preview::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            transparent 0%, 
            rgba(255, 255, 255, 0.1) 50%, 
            transparent 100%
          );
          transform: translateX(-100%);
          transition: transform 0.8s;
        }

        .cert-preview:hover::before {
          transform: translateX(100%);
        }

        .hologram-effect {
          animation: hologram 3s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .intern-card { 
            max-width: 100%; 
            margin: 0 auto;
          }
          .cert-preview { 
            height: 220px !important; 
          }
          .impact-metrics-grid { 
            grid-template-columns: 1fr !important; 
          }
          .intern-card:hover {
            transform: translateY(-15px) scale(1.02);
          }
        }

        @media (max-width: 480px) {
          .cert-preview { 
            height: 200px !important; 
          }
          .tech-pill { 
            padding: 0.6rem 1rem; 
            font-size: 0.85rem; 
          }
        }

        .glass-morphism {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(30px);
          border: 1px solid currentColor;
        }

        .perspective-container {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#000000',
        color: '#e0e0ff',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1rem 7rem',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Scroll Progress Bar */}
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Developer Grid Pattern */}
        <div 
          ref={parallaxRef}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(167, 139, 250, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(167, 139, 250, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            opacity: 0.5,
            pointerEvents: 'none',
            transform: `translateY(${scrollProgress * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Circuit Board Pattern */}
        <svg style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.08,
          pointerEvents: 'none'
        }}>
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#00f0ff" />
              <circle cx="190" cy="190" r="2" fill="#a78bfa" />
              <circle cx="100" cy="50" r="3" fill="#ec4899" />
              <line x1="10" y1="10" x2="100" y2="50" stroke="#00f0ff" strokeWidth="0.5" />
              <line x1="100" y1="50" x2="190" y2="190" stroke="#a78bfa" strokeWidth="0.5" />
              <rect x="95" y="45" width="10" height="10" fill="none" stroke="#10b981" strokeWidth="0.5" />
              <circle cx="150" cy="150" r="2" fill="#10b981" />
              <line x1="100" y1="50" x2="150" y2="150" stroke="#ec4899" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Matrix-style code rain canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.7
          }}
        />

        {/* Developer Terminal Lines */}
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: `${15 + i * 15}%`,
            height: '1px',
            background: `linear-gradient(90deg, transparent, ${i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#a78bfa' : '#10b981'}40, transparent)`,
            opacity: 0.3,
            pointerEvents: 'none'
          }} />
        ))}

        {/* Floating Code Brackets */}
        {[
          { symbol: '<>', color: '#00f0ff', top: '10%', left: '5%', rotate: 45 },
          { symbol: '{}', color: '#a78bfa', top: '25%', right: '8%', rotate: -30 },
          { symbol: '[]', color: '#ec4899', top: '50%', left: '3%', rotate: 15 },
          { symbol: '()', color: '#10b981', bottom: '20%', right: '5%', rotate: -45 },
          { symbol: '</>', color: '#fbbf24', top: '70%', right: '10%', rotate: 60 },
          { symbol: '=>', color: '#00f0ff', bottom: '30%', left: '7%', rotate: -15 }
        ].map((item, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...item,
            fontSize: '80px',
            fontFamily: "'Fira Code', monospace",
            fontWeight: 700,
            color: item.color,
            opacity: 0.06,
            pointerEvents: 'none',
            zIndex: 0,
            transform: `rotate(${item.rotate}deg)`,
            animation: `float ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            textShadow: `0 0 30px ${item.color}`
          }}>
            {item.symbol}
          </div>
        ))}

        {/* Binary Code Streams */}
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${i * 12}%`,
            left: `${5 + i * 10}%`,
            width: '2px',
            height: '200px',
            background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? '#00f0ff' : '#a78bfa'}20, transparent)`,
            opacity: 0.3,
            transform: 'rotate(25deg)',
            pointerEvents: 'none',
            animation: `slideUp ${10 + i * 2}s linear infinite`,
            animationDelay: `${i * 0.7}s`
          }} />
        ))}

        {/* Glowing Nodes */}
        {[
          { top: '15%', left: '15%', color: '#00f0ff' },
          { top: '30%', right: '20%', color: '#a78bfa' },
          { bottom: '25%', left: '25%', color: '#ec4899' },
          { top: '60%', right: '15%', color: '#10b981' },
          { bottom: '40%', right: '30%', color: '#fbbf24' }
        ].map((node, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...node,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: node.color,
            boxShadow: `0 0 40px ${node.color}, 0 0 80px ${node.color}`,
            opacity: 0.5,
            pointerEvents: 'none',
            zIndex: 0,
            animation: `pulse ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`
          }} />
        ))}

        <div className="perspective-container" style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1700px',
          margin: '0 auto',
          width: '100%',
          padding: '0 1rem'
        }}>
          {/* Header Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '6rem',
            animation: 'fadeInUp 1.2s ease-out'
          }}>
            {/* Terminal Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.2rem',
              fontFamily: "'Fira Code', monospace",
              color: 'var(--neon-cyan)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              padding: '1.2rem 2.5rem',
              border: '3px solid rgba(0, 240, 255, 0.6)',
              borderRadius: 999,
              marginBottom: '2.5rem',
              background: 'rgba(0, 0, 0, 0.9)',
              animation: 'pulse 4s ease-in-out infinite, glow 3s ease-in-out infinite',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.5)',
              position: 'relative'
            }}>
              <Terminal size={28} />
              <span style={{ display: 'flex', alignItems: 'center' }}>
                {'>'} ELITE_EXPERIENCE.initialize()
                <span style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '20px',
                  background: '#00f0ff',
                  marginLeft: '5px',
                  animation: 'blink 1s infinite'
                }}>|</span>
              </span>
              <Activity size={28} />
            </div>

            {/* Main Title with Hologram Effect */}
            <h1 className="hologram-effect" style={{
              fontSize: 'clamp(4rem, 12vw, 8.5rem)',
              fontWeight: 900,
              letterSpacing: '8px',
              textTransform: 'uppercase',
              marginBottom: '2.5rem',
              lineHeight: 1,
              background: 'linear-gradient(90deg, #00f0ff, #a78bfa, #ec4899, #ffd700, #00f0ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '300% 100%',
              animation: 'shimmer 6s linear infinite',
              fontFamily: "'Orbitron', sans-serif",
              filter: 'drop-shadow(0 0 40px #00f0ff)'
            }}>
              LEGENDARY<br/>INTERNSHIPS
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.25rem, 3.5vw, 1.6rem)',
              color: '#c0c0e0',
              maxWidth: '950px',
              margin: '0 auto 3rem',
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 500,
              lineHeight: 1.8,
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)'
            }}>
              Elite-tier professional experience across cutting-edge domains:
              <br />
              <span style={{ 
                color: '#00f0ff', 
                fontFamily: "'Fira Code', monospace", 
                fontSize: '1.15rem',
                fontWeight: 700,
                textShadow: '0 0 20px rgba(0, 240, 255, 0.8)'
              }}>
                [ Full-Stack Engineering | Artificial Intelligence | Advanced Data Science ]
              </span>
            </p>

            {/* Stats Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              flexWrap: 'wrap',
              marginBottom: '3rem'
            }}>
              {[
                { icon: Flame, label: '3 Elite Firms', color: '#ff6b35' },
                { icon: Clock, label: '7+ Months', color: '#00f0ff' },
                { icon: Trophy, label: '95% Success', color: '#ffd700' },
                { icon: Rocket, label: '15+ Projects', color: '#a78bfa' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="glass-morphism" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1rem 1.8rem',
                    borderRadius: '999px',
                    color: stat.color,
                    fontSize: '1rem',
                    fontWeight: 700,
                    fontFamily: "'Rajdhani', sans-serif",
                    border: `2px solid ${stat.color}40`,
                    animation: `fadeInUp ${1 + i * 0.1}s ease-out`,
                    boxShadow: `0 0 30px ${stat.color}30`
                  }}>
                    <Icon size={22} />
                    {stat.label}
                  </div>
                );
              })}
            </div>

            {/* Filter Buttons with Enhanced Design */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem'
            }}>
              {['ALL', 'LEGENDARY', 'EPIC'].map((filter, i) => (
                <button
                  key={filter}
                  className={`filter-btn ${selectedFilter === filter ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter)}
                  style={{
                    borderColor: getRarityColor(filter),
                    color: selectedFilter === filter ? '#000' : getRarityColor(filter),
                    background: selectedFilter === filter ? getRarityColor(filter) : 'rgba(0, 0, 0, 0.85)',
                    animation: `fadeInUp ${1.2 + i * 0.1}s ease-out`
                  }}
                >
                  {filter === 'ALL' ? '⚡ ALL EXPERIENCES' : `✨ ${filter}`}
                </button>
              ))}
            </div>
          </div>

          {/* Internship Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(3rem, 6vw, 4.5rem)',
            marginBottom: '7rem',
            width: '100%'
          }}>
            {filteredInternships.map((intern, i) => {
              const isHovered = hoveredId === intern.id;
              const rarityColor = getRarityColor(intern.rarity);

              return (
                <div
                  key={intern.id}
                  className="intern-card"
                  onMouseEnter={() => setHoveredId(intern.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    borderColor: isHovered ? intern.color : 'rgba(0, 240, 255, 0.3)',
                    animation: `fadeInUp ${0.8 + i * 0.15}s ease-out`,
                    opacity: 0,
                    animationFillMode: 'forwards',
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  {/* Rarity Badge */}
                  <div className="rarity-badge" style={{
                    background: rarityColor,
                    color: '#000',
                    borderColor: rarityColor
                  }}>
                    ★ {intern.rarity}
                  </div>

                  {/* Animated Top Border */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '8px',
                    background: `linear-gradient(90deg, ${intern.color}, ${intern.secondaryColor}, ${intern.accentColor})`,
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                    opacity: isHovered ? 1 : 0.7,
                    transition: 'opacity 0.6s'
                  }} />

                  {/* Certificate Preview */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCert(intern);
                    }}
                    className="cert-preview"
                    style={{
                      height: 'clamp(220px, 40vw, 280px)',
                      position: 'relative'
                    }}
                  >
                    <img
                      src={getCertificateUrl(intern.certId)}
                      alt={`${intern.title} Certificate`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 1s cubic-bezier(0.23, 1, 0.32, 1)',
                        transform: isHovered ? 'scale(1.2) rotate(2deg)' : 'scale(1.08)'
                      }}
                    />

                    {/* Rating Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '2rem',
                      left: '2rem',
                      background: 'rgba(0, 0, 0, 0.95)',
                      backdropFilter: 'blur(20px)',
                      padding: '1rem 1.5rem',
                      borderRadius: 999,
                      border: `3px solid ${intern.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontFamily: "'Orbitron', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.2rem',
                      color: intern.color,
                      boxShadow: `0 0 40px ${intern.color}`,
                      animation: isHovered ? 'pulse 2s ease-in-out infinite' : 'none'
                    }}>
                      <Star size={24} fill={intern.color} />
                      {intern.rating}%
                    </div>

                    {/* Overlay with View Button */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.98) 0%, transparent 70%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: isHovered ? 1 : 0.6,
                      transition: 'opacity 0.6s'
                    }}>
                      <div className="glass-morphism" style={{
                        padding: '1.2rem 2.5rem',
                        border: `3px solid ${intern.color}`,
                        borderRadius: 999,
                        color: '#fff',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '1.1rem',
                        fontFamily: "'Rajdhani', sans-serif",
                        boxShadow: isHovered ? `0 0 60px ${intern.color}` : 'none',
                        animation: isHovered ? 'pulse 2.5s ease-in-out infinite' : 'none'
                      }}>
                        <Award size={26} />
                        VIEW CERTIFICATE
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-3d-layer" style={{
                    padding: 'clamp(2rem, 4.5vw, 3rem) clamp(1.8rem, 4vw, 2.5rem)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {/* Icon + Duration Bar */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '2rem',
                      flexWrap: 'wrap',
                      gap: '1.5rem'
                    }}>
                      <div className="hexagon-icon" style={{
                        width: '90px',
                        height: '90px',
                        background: `linear-gradient(135deg, ${intern.color}, ${intern.secondaryColor})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        animation: isHovered ? 'float 3.5s ease-in-out infinite' : 'none',
                        boxShadow: isHovered ? `0 0 60px ${intern.color}` : `0 0 30px ${intern.color}50`,
                        flexShrink: 0
                      }}>
                        <intern.icon size={44} style={{
                          color: '#fff',
                          transform: 'rotate(90deg)',
                          filter: 'drop-shadow(0 0 15px currentColor)'
                        }} />
                      </div>

                      <div className="glass-morphism" style={{
                        padding: '0.9rem 1.8rem',
                        border: `3px solid ${intern.color}`,
                        borderRadius: 999,
                        fontSize: '1rem',
                        fontWeight: 900,
                        color: intern.color,
                        fontFamily: "'Orbitron', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        boxShadow: `0 0 30px ${intern.color}40`
                      }}>
                        <Clock size={20} />
                        {intern.duration}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                      fontWeight: 900,
                      color: '#ffffff',
                      marginBottom: '1rem',
                      fontFamily: "'Orbitron', sans-serif",
                      letterSpacing: '1.5px',
                      lineHeight: 1.2
                    }}>
                      {intern.title}
                    </h3>

                    {/* Company Info */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.8rem',
                      marginBottom: '1rem',
                      fontFamily: "'Rajdhani', sans-serif"
                    }}>
                      <div style={{
                        fontSize: '1.2rem',
                        color: '#d0d0ff',
                        fontWeight: 700
                      }}>
                        {intern.company}
                      </div>

                      <div style={{
                        display: 'flex',
                        gap: '2rem',
                        flexWrap: 'wrap',
                        fontSize: '1.05rem',
                        color: intern.color,
                        fontWeight: 600
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <MapPin size={18} />
                          {intern.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                          <Calendar size={18} />
                          {intern.period}
                        </div>
                      </div>
                    </div>

                    {/* Impact Statement */}
                    <div className="glass-morphism" style={{
                      border: `2.5px solid ${intern.color}50`,
                      borderRadius: '20px',
                      padding: '1.5rem',
                      marginBottom: '2.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.2rem',
                      background: `linear-gradient(135deg, ${intern.color}10, ${intern.secondaryColor}10)`
                    }}>
                      <Trophy size={32} style={{ 
                        color: intern.color, 
                        flexShrink: 0,
                        filter: 'drop-shadow(0 0 10px currentColor)'
                      }} />
                      <span style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: '#f0f0ff',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                      }}>
                        {intern.impact}
                      </span>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="impact-metrics-grid" style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '1.2rem',
                      marginBottom: '2.5rem'
                    }}>
                      {intern.impact_metrics.map((metric, idx) => {
                        const MetricIcon = metric.icon;
                        return (
                          <div
                            key={idx}
                            className="impact-metric"
                            style={{
                              borderColor: intern.color,
                              background: isHovered ? `${intern.color}15` : 'rgba(0, 0, 0, 0.7)'
                            }}
                          >
                            <MetricIcon size={28} style={{ 
                              color: intern.color, 
                              marginBottom: '0.8rem',
                              display: 'block',
                              margin: '0 auto 0.8rem',
                              filter: 'drop-shadow(0 0 10px currentColor)'
                            }} />
                            <div style={{
                              fontSize: '2rem',
                              fontWeight: 900,
                              color: intern.color,
                              fontFamily: "'Orbitron', sans-serif",
                              marginBottom: '0.4rem'
                            }}>
                              {metric.value}
                            </div>
                            <div style={{
                              fontSize: '0.9rem',
                              color: '#b0b0d0',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              fontWeight: 600
                            }}>
                              {metric.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Tech Stack */}
                    <div className="glass-morphism" style={{
                      border: `2.5px solid ${intern.color}35`,
                      borderRadius: '22px',
                      padding: '1.8rem',
                      marginBottom: '2.5rem'
                    }}>
                      <h4 style={{
                        color: intern.color,
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        <Cpu size={26} /> Tech Arsenal
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        {intern.tech.map(t => (
                          <span
                            key={t}
                            className="tech-pill"
                            style={{
                              color: isHovered ? intern.color : '#b0e0ff',
                              borderColor: isHovered ? intern.color : `${intern.color}60`
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="glass-morphism" style={{
                      border: `2.5px solid ${intern.color}35`,
                      borderRadius: '22px',
                      padding: '1.8rem',
                      marginBottom: '2.5rem'
                    }}>
                      <h4 style={{
                        color: intern.color,
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        <Zap size={26} /> Key Achievements
                      </h4>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                      }}>
                        {intern.achievements.map((ach, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              fontSize: '1.08rem',
                              padding: '0.9rem 1.2rem',
                              borderRadius: '12px',
                              transition: 'all 0.4s',
                              background: 'transparent',
                              border: '2px solid transparent',
                              fontWeight: 500
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = `${intern.color}18`;
                              e.currentTarget.style.borderColor = `${intern.color}60`;
                              e.currentTarget.style.transform = 'translateX(15px)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.borderColor = 'transparent';
                              e.currentTarget.style.transform = 'translateX(0)';
                            }}
                          >
                            {ach}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Gained (Collapsible) */}
                    <details className="glass-morphism" style={{
                      border: `2.5px solid ${intern.color}35`,
                      borderRadius: '22px',
                      padding: '1.8rem',
                      marginBottom: '2.5rem',
                      cursor: 'pointer'
                    }}>
                      <summary style={{
                        color: intern.color,
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontFamily: "'Orbitron', sans-serif",
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}>
                        <Target size={26} /> Skills Mastered ({intern.skills_gained.length})
                      </summary>
                      <div style={{
                        marginTop: '1.5rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem'
                      }}>
                        {intern.skills_gained.map((skill, idx) => (
                          <div
                            key={idx}
                            style={{
                              padding: '0.8rem 1.5rem',
                              background: `${intern.color}20`,
                              border: `2.5px solid ${intern.color}70`,
                              borderRadius: 999,
                              fontSize: '1rem',
                              fontWeight: 800,
                              color: intern.color,
                              boxShadow: `0 0 20px ${intern.color}30`
                            }}
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </details>

                    {/* View Certificate CTA */}
                    <a
                      href={getViewUrl(intern.certId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.2rem',
                        padding: '1.5rem',
                        background: `linear-gradient(90deg, ${intern.color}, ${intern.secondaryColor}, ${intern.accentColor})`,
                        backgroundSize: '200% 100%',
                        color: '#000',
                        fontWeight: 900,
                        borderRadius: 999,
                        textDecoration: 'none',
                        boxShadow: isHovered ? `0 0 80px ${intern.color}` : `0 0 40px ${intern.color}60`,
                        transition: 'all 0.5s',
                        fontSize: '1.15rem',
                        fontFamily: "'Orbitron', sans-serif",
                        letterSpacing: '1.5px',
                        animation: 'shimmer 3s linear infinite'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.08) translateY(-4px)';
                        e.currentTarget.style.boxShadow = `0 0 100px ${intern.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = `0 0 40px ${intern.color}60`;
                      }}
                    >
                      <Award size={28} />
                      VIEW CERTIFICATE
                      <ExternalLink size={28} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Overview Section */}
          <div className="glass-morphism" style={{
            border: '4px solid rgba(0, 240, 255, 0.4)',
            borderRadius: '40px',
            padding: 'clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 4rem)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '6rem',
            boxShadow: '0 0 100px rgba(0, 240, 255, 0.3)'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #00f0ff, #a78bfa, #ec4899, #ffd700, #00f0ff)',
              backgroundSize: '300% 100%',
              animation: 'shimmer 4s linear infinite'
            }} />

            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 4.5rem)',
              fontWeight: 900,
              color: '#00f0ff',
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Orbitron', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '4px'
            }}>
              🏆 CAREER ACHIEVEMENTS
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '3rem'
            }}>
              {[
                { label: 'Total Experience', value: '7+', unit: 'Months', icon: Clock, color: '#00f0ff' },
                { label: 'Elite Companies', value: '3', unit: 'Firms', icon: Shield, color: '#a78bfa' },
                { label: 'Projects Built', value: '15+', unit: 'Production', icon: Rocket, color: '#ec4899' },
                { label: 'Technologies', value: '25+', unit: 'Mastered', icon: Zap, color: '#10b981' },
                { label: 'Success Rate', value: '95%', unit: 'Achievement', icon: TrendingUp, color: '#fbbf24' },
                { label: 'Certifications', value: '3', unit: 'Verified', icon: Award, color: '#f97316' }
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <div
                    key={i}
                    className="glass-morphism"
                    style={{
                      border: `3.5px solid ${stat.color}`,
                      borderRadius: '28px',
                      padding: '2.5rem',
                      textAlign: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                      cursor: 'pointer',
                      animation: `fadeInUp ${1.2 + i * 0.12}s ease-out`,
                      opacity: 0,
                      animationFillMode: 'forwards',
                      animationDelay: `${0.5 + i * 0.12}s`,
                      background: `linear-gradient(135deg, ${stat.color}08, ${stat.color}15)`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-18px) scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 20px 60px ${stat.color}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '85px',
                      height: '85px',
                      margin: '0 auto 1.8rem',
                      border: `4px solid ${stat.color}`,
                      borderRadius: '22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'float 4s ease-in-out infinite',
                      animationDelay: `${i * 0.4}s`,
                      boxShadow: `0 0 50px ${stat.color}50`,
                      background: `${stat.color}15`
                    }}>
                      <StatIcon size={42} style={{ 
                        color: stat.color,
                        filter: 'drop-shadow(0 0 10px currentColor)'
                      }} />
                    </div>
                    <div style={{
                      fontSize: 'clamp(3.5rem, 8vw, 4.5rem)',
                      fontWeight: 900,
                      color: stat.color,
                      marginBottom: '0.6rem',
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '1.15rem',
                      color: '#ffffff',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      marginBottom: '0.5rem',
                      fontFamily: "'Rajdhani', sans-serif"
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontSize: '1rem',
                      color: '#b0b0d8',
                      fontWeight: 600
                    }}>
                      {stat.unit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="glass-morphism" style={{
            padding: 'clamp(4rem, 10vw, 6rem) clamp(2.5rem, 6vw, 4rem)',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(167, 139, 250, 0.15))',
            border: '4px solid rgba(0, 240, 255, 0.5)',
            borderRadius: '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 120px rgba(0, 240, 255, 0.4)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.2) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div style={{
              fontSize: 'clamp(3.5rem, 10vw, 6rem)',
              fontWeight: 900,
              background: 'linear-gradient(90deg, #00f0ff, #a78bfa, #ec4899, #ffd700)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2.5rem',
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '3px',
              lineHeight: 1.2
            }}>
              READY FOR THE<br/>NEXT MISSION?
            </div>

            <p style={{
              fontSize: 'clamp(1.3rem, 3.5vw, 1.7rem)',
              color: '#d0d0ff',
              marginBottom: '4rem',
              fontFamily: "'Rajdhani', sans-serif",
              maxWidth: '900px',
              margin: '0 auto 4rem',
              lineHeight: 1.8,
              fontWeight: 500
            }}>
              Let's collaborate on cutting-edge projects that push the boundaries of technology.
              From full-stack applications to AI-powered solutions—let's build something legendary.
            </p>

            <div style={{
              display: 'flex',
              gap: 'clamp(2rem, 5vw, 3rem)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="https://github.com/bhagavan444" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-morphism"
                style={{
                  padding: '1.6rem 3.5rem',
                  border: '3.5px solid rgba(0, 240, 255, 0.8)',
                  borderRadius: 999,
                  color: '#00f0ff',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  fontFamily: "'Orbitron', sans-serif",
                  transition: 'all 0.5s',
                  letterSpacing: '1.5px',
                  textShadow: '0 0 20px rgba(0, 240, 255, 0.8)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 0 80px #00f0ff';
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <Github size={32} />
                VIEW REPOSITORIES
              </a>

              <a 
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{
                  padding: '1.6rem 3.5rem',
                  background: 'linear-gradient(90deg, #00f0ff, #a78bfa, #ec4899)',
                  backgroundSize: '200% 100%',
                  borderRadius: 999,
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  fontFamily: "'Orbitron', sans-serif",
                  transition: 'all 0.5s',
                  letterSpacing: '1.5px',
                  boxShadow: '0 0 60px rgba(0, 240, 255, 0.6)',
                  animation: 'shimmer 4s linear infinite'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.12) translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 0 100px rgba(0, 240, 255, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(0, 240, 255, 0.6)';
                }}
              >
                <Sparkles size={32} />
                LET'S COLLABORATE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {activeCert && (
        <div
          onClick={() => setActiveCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.98)',
            backdropFilter: 'blur(30px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2.5rem)',
            animation: 'fadeInUp 0.4s ease-out'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="glass-morphism"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.98), rgba(10, 10, 30, 0.98))',
              border: `5px solid ${activeCert.color}`,
              borderRadius: '40px',
              maxWidth: '1500px',
              width: '96%',
              maxHeight: '95vh',
              overflowY: 'auto',
              boxShadow: `0 0 200px ${activeCert.color}80`,
              position: 'relative',
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="glass-morphism"
              style={{
                position: 'absolute',
                top: 'clamp(1.5rem, 3vw, 2.5rem)',
                right: 'clamp(1.5rem, 3vw, 2.5rem)',
                background: 'rgba(255, 100, 100, 0.25)',
                border: '3px solid #ff6666',
                borderRadius: '50%',
                width: '65px',
                height: '65px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff6666',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.4s',
                backdropFilter: 'blur(20px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 100, 100, 0.5)';
                e.currentTarget.style.transform = 'scale(1.15) rotate(90deg)';
                e.currentTarget.style.boxShadow = '0 0 40px #ff6666';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 100, 100, 0.25)';
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <X size={36} strokeWidth={3} />
            </button>

            <img
              src={getCertificateUrl(activeCert.certId)}
              alt={`${activeCert.title} Certificate`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '55vh',
                objectFit: 'contain',
                display: 'block',
                borderTopLeftRadius: '36px',
                borderTopRightRadius: '36px',
                boxShadow: '0 10px 50px rgba(0, 0, 0, 0.5)'
              }}
            />

            <div style={{ 
              padding: 'clamp(2.5rem, 6vw, 5rem) clamp(2rem, 5vw, 4.5rem)'
            }}>
              <h2 style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: 900,
                background: `linear-gradient(90deg, ${activeCert.color}, ${activeCert.secondaryColor}, ${activeCert.accentColor})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '2rem',
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: '2px'
              }}>
                {activeCert.title}
              </h2>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2.5rem',
                marginBottom: '3rem',
                fontSize: 'clamp(1.15rem, 3vw, 1.5rem)',
                color: '#d0d0ff',
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <Code size={32} style={{ color: activeCert.color }} />
                  {activeCert.company}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <Calendar size={32} style={{ color: activeCert.color }} />
                  {activeCert.period}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                  <MapPin size={32} style={{ color: activeCert.color }} />
                  {activeCert.location}
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                marginBottom: '3rem'
              }}>
                {activeCert.tech.map(t => (
                  <span key={t} className="glass-morphism" style={{
                    padding: '1rem 2rem',
                    border: `3px solid ${activeCert.color}70`,
                    borderRadius: 999,
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: activeCert.color,
                    boxShadow: `0 0 30px ${activeCert.color}30`
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                marginBottom: '4rem'
              }}>
                {activeCert.achievements.map((ach, idx) => (
                  <div key={idx} className="glass-morphism" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    fontSize: 'clamp(1.1rem, 2.8vw, 1.3rem)',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    borderLeft: `5px solid ${activeCert.color}`,
                    border: `2px solid ${activeCert.color}30`,
                    fontWeight: 500
                  }}>
                    {ach}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <a
                  href={getViewUrl(activeCert.certId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '1.8rem 4rem',
                    background: `linear-gradient(90deg, ${activeCert.color}, ${activeCert.secondaryColor}, ${activeCert.accentColor})`,
                    backgroundSize: '200% 100%',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '1.3rem',
                    borderRadius: 999,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    boxShadow: `0 0 100px ${activeCert.color}70`,
                    transition: 'all 0.5s',
                    letterSpacing: '1.5px',
                    fontFamily: "'Orbitron', sans-serif",
                    animation: 'shimmer 3s linear infinite, pulse 3s ease-in-out infinite'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 0 150px ${activeCert.color}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = `0 0 100px ${activeCert.color}70`;
                  }}
                >
                  <Award size={32} />
                  VIEW FULL CERTIFICATE
                  <ExternalLink size={32} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}