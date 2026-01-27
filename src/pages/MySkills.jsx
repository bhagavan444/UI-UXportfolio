import React, { useState, useEffect, useRef } from "react";
import {
  Code2, Database, Brain, Cloud, Layers, Zap, Cpu, Globe, Terminal,
  TrendingUp, Award, Star, ExternalLink, CheckCircle2, Rocket,
  GitBranch, Server, Lock, BarChart2, Settings, FileCode,
  Database as DbIcon, Network, Wrench, Sparkles, Trophy,
  Target, Flame, Shield, Crown, Hexagon, Activity, Box,
  Eye, Film, Play, Gauge, Crosshair
} from "lucide-react";

const skills = [
  {
    id: 1,
    name: "Full-Stack Development",
    icon: Layers,
    level: 92,
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    rarity: "LEGENDARY",
    yearsActive: "4+",
    masteryRank: "S+",
    technologies: [
      "React", "Next.js", "Node.js", "Express", "MongoDB",
      "JWT", "OAuth 2.0", "REST APIs", "TypeScript", "Tailwind CSS"
    ],
    projects: 24,
    completionRate: 98,
    impact: "Built 24 production apps serving 10K+ users",
    usedIn: [
      "ATS Resume Builder Platform",
      "NexusAI – Multi-Modal AI Workspace",
      "Project Forge – AI Project Generator",
      "ArchMind – AI System Design Platform",
      "Production-Style AI Chatbot",
      "Hackathon Electronics Marketplace",
      "Internship Projects (StudyOwl)"
    ],
    howUsed: [
      "Built responsive & performant UI using React + Next.js",
      "Developed secure RESTful APIs with Node.js & Express",
      "Implemented JWT & OAuth authentication flows",
      "Designed MongoDB schemas with proper indexing & aggregation",
      "Integrated frontend with backend using Axios & fetch",
      "Used TypeScript for type-safe development",
      "Styled components with Tailwind CSS & custom animations"
    ],
    keyAchievements: [
      "🏆 Reduced load time by 60% through optimization",
      "🚀 Deployed 24 production-grade applications",
      "⚡ Achieved 98% uptime across all projects",
      "💎 Built real-time features with WebSocket"
    ],
    description:
      "Designed and developed end-to-end full-stack web applications with modern authentication, database integration, responsive UI, and production-ready architecture."
  },

  {
    id: 2,
    name: "Machine Learning",
    icon: Brain,
    level: 88,
    color: "#a855f7",
    glowRGB: "168, 85, 247",
    rarity: "EPIC",
    yearsActive: "3+",
    masteryRank: "S",
    technologies: [
      "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn",
      "Jupyter Notebook", "TF-IDF", "Feature Engineering", "Hyperparameter Tuning"
    ],
    projects: 18,
    completionRate: 94,
    impact: "Achieved 95%+ accuracy across 18 ML models",
    usedIn: [
      "TruthGuard AI – Fake News Detection",
      "Career Path Recommendation System",
      "Heart Disease Prediction Platform",
      "Blackbucks Internship Projects",
      "Academic ML Assignments"
    ],
    howUsed: [
      "Performed comprehensive data preprocessing & feature engineering",
      "Built classification & regression models using Scikit-learn",
      "Implemented TF-IDF for NLP-based text classification",
      "Evaluated models using accuracy, precision, recall, F1-score & ROC-AUC",
      "Optimized models with GridSearchCV & RandomizedSearchCV",
      "Visualized data insights using Matplotlib & Seaborn",
      "Documented experiments in Jupyter Notebooks"
    ],
    keyAchievements: [
      "🎯 95%+ accuracy on fake news detection",
      "📊 Processed 500K+ data points efficiently",
      "🔬 Published research-quality notebooks",
      "⚙️ Optimized models for 3x faster inference"
    ],
    description:
      "Developed high-accuracy machine learning models for classification, regression, and prediction tasks using structured and unstructured data."
  },

  {
    id: 3,
    name: "Deep Learning & AI",
    icon: Star,
    level: 87,
    color: "#ff6b35",
    glowRGB: "255, 107, 53",
    rarity: "LEGENDARY",
    yearsActive: "3+",
    masteryRank: "S",
    technologies: [
      "TensorFlow", "Keras", "PyTorch", "CNN", "Computer Vision",
      "OpenCV", "Neural Networks", "Transfer Learning", "Image Augmentation"
    ],
    projects: 14,
    completionRate: 92,
    impact: "Deployed AI models with 92% accuracy in production",
    usedIn: [
      "Smart Sorting (AI/ML Internship)",
      "Image Classification Projects",
      "Healthy vs Rotten Fruit Detection",
      "Object Detection Experiments",
      "Deep Learning Academic Projects"
    ],
    howUsed: [
      "Designed custom CNN architectures for image classification",
      "Implemented transfer learning using pre-trained models (ResNet, VGG, EfficientNet)",
      "Performed image preprocessing, augmentation & normalization",
      "Trained & validated deep learning models with GPU acceleration",
      "Integrated trained models into Flask & React applications",
      "Deployed AI models for real-time inference",
      "Used OpenCV for image processing pipelines"
    ],
    keyAchievements: [
      "🧠 Built custom CNN architectures from scratch",
      "🎨 Real-time object detection at 30 FPS",
      "💫 Transfer learning with 92% accuracy",
      "🔥 GPU-accelerated training pipelines"
    ],
    description:
      "Built powerful deep learning models for computer vision and intelligent automation with real-world deployment experience."
  },

  {
    id: 4,
    name: "Cloud & DevOps",
    icon: Cloud,
    level: 85,
    color: "#00f5ff",
    glowRGB: "0, 245, 255",
    rarity: "EPIC",
    yearsActive: "3+",
    masteryRank: "A+",
    technologies: [
      "AWS EC2", "AWS S3", "AWS Lambda", "Docker", "GitHub Actions",
      "Linux Server Management", "Nginx", "CI/CD Basics"
    ],
    projects: 16,
    completionRate: 96,
    impact: "Managed infrastructure serving 50K+ requests/day",
    usedIn: [
      "AI Chatbot Deployment",
      "ML Flask Applications",
      "Portfolio & Web Projects",
      "Internship Deployment Tasks"
    ],
    howUsed: [
      "Deployed full-stack & ML applications on AWS EC2",
      "Stored & served assets using AWS S3",
      "Containerized applications with Docker",
      "Set up basic CI/CD pipelines using GitHub Actions",
      "Managed Linux servers (Ubuntu) for production deployment",
      "Configured Nginx as reverse proxy & SSL setup",
      "Optimized deployment for cost & performance"
    ],
    keyAchievements: [
      "☁️ Zero-downtime deployments achieved",
      "🐳 Containerized 16 production apps",
      "⚡ 40% cost reduction through optimization",
      "🔒 Implemented SSL/TLS security protocols"
    ],
    description:
      "Deployed and managed scalable, production-ready applications using cloud platforms and containerization tools."
  },

  {
    id: 5,
    name: "Data Science & Analytics",
    icon: Database,
    level: 90,
    color: "#a855f7",
    glowRGB: "168, 85, 247",
    rarity: "LEGENDARY",
    yearsActive: "3+",
    masteryRank: "S",
    technologies: [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly",
      "SQL", "MySQL", "PostgreSQL", "Data Cleaning", "EDA"
    ],
    projects: 22,
    completionRate: 95,
    impact: "Analyzed 1M+ records to drive business insights",
    usedIn: [
      "ML Model Training Pipelines",
      "Internship Data Analysis Assignments",
      "Academic Data Science Projects",
      "Hackathon Data Challenges"
    ],
    howUsed: [
      "Cleaned & transformed large raw datasets using Pandas & NumPy",
      "Performed in-depth Exploratory Data Analysis (EDA)",
      "Visualized complex trends & insights using Matplotlib, Seaborn & Plotly",
      "Wrote efficient SQL queries for data extraction & analysis",
      "Prepared high-quality datasets for ML & DL pipelines",
      "Created interactive dashboards for data storytelling"
    ],
    keyAchievements: [
      "📈 Processed 1M+ data records efficiently",
      "🎨 Created 50+ interactive visualizations",
      "💡 Uncovered insights that drove key decisions",
      "⚡ Optimized queries for 10x faster execution"
    ],
    description:
      "Analyzed and processed complex datasets to extract meaningful insights and support advanced machine learning models."
  },

  {
    id: 6,
    name: "Core Programming & CS Fundamentals",
    icon: Code2,
    level: 94,
    color: "#ff6b35",
    glowRGB: "255, 107, 53",
    rarity: "MYTHIC",
    yearsActive: "5+",
    masteryRank: "S++",
    technologies: [
      "Python", "Java", "JavaScript", "TypeScript", "C++",
      "Data Structures & Algorithms", "OOP", "System Design Basics"
    ],
    projects: 32,
    completionRate: 97,
    impact: "Solved 500+ algorithmic problems, built 32 projects",
    usedIn: [
      "All Academic & Internship Projects",
      "LeetCode & HackerRank Practice",
      "Coding Competitions",
      "Technical Interview Preparation"
    ],
    howUsed: [
      "Implemented complex algorithms & data structures in Python & Java",
      "Applied OOP principles across multiple large-scale projects",
      "Solved 500+ coding problems on LeetCode & HackerRank",
      "Used JavaScript & TypeScript for modern web development",
      "Built strong foundation for scalable & maintainable systems",
      "Prepared for technical interviews with system design concepts"
    ],
    keyAchievements: [
      "🏅 500+ LeetCode problems solved",
      "🎖️ Top 5% on HackerRank",
      "🧩 Master of algorithms & data structures",
      "🌟 Built scalable system architectures"
    ],
    description:
      "Strong programming foundation with deep understanding of algorithms, data structures, OOP, and software design principles."
  }
];

export default function EliteSkillsShowcase() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [filterRarity, setFilterRarity] = useState('ALL');
  const [particles, setParticles] = useState([]);
  const [cursorTrail, setCursorTrail] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const canvasRef = useRef(null);

  // Particle System
  useEffect(() => {
    const newParticles = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  // Cursor Trail
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorTrail(prev => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Canvas Background
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

    const nodes = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2.5 + 1,
      hue: Math.random() * 60 + 180
    }));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw connections
        nodes.forEach((other, j) => {
          if (i < j) {
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {
              ctx.strokeStyle = `hsla(${node.hue}, 100%, 60%, ${0.15 * (1 - dist / 120)})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.stroke();
            }
          }
        });

        // Draw particle
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 4);
        gradient.addColorStop(0, `hsla(${node.hue}, 100%, 60%, 0.5)`);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();
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

  const getRarityColor = (rarity) => {
    const colors = {
      'MYTHIC': '#ff00ff',
      'LEGENDARY': '#ffd700',
      'EPIC': '#a855f7',
      'RARE': '#00f5ff'
    };
    return colors[rarity] || '#00f5ff';
  };

  const filteredSkills = filterRarity === 'ALL' 
    ? skills 
    : skills.filter(s => s.rarity === filterRarity);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Rajdhani', sans-serif; 
          background: #000; 
          color: #fff; 
          overflow-x: hidden;
          cursor: none;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* CUSTOM CURSOR */
        /* ═══════════════════════════════════════════════════════════ */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #00f5ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
        }

        .cursor-trail {
          position: fixed;
          width: 8px;
          height: 8px;
          background: rgba(0, 245, 255, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          animation: fadeTrail 0.8s ease-out forwards;
        }

        @keyframes fadeTrail {
          to { opacity: 0; transform: scale(0); }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* HOLLYWOOD ANIMATIONS */
        /* ═══════════════════════════════════════════════════════════ */
        @keyframes cinematic-reveal {
          from { 
            opacity: 0; 
            transform: translateY(80px) scale(0.95) rotateX(-5deg);
            filter: blur(8px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1) rotateX(0);
            filter: blur(0);
          }
        }

        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateZ(0deg); }
          50% { transform: translateY(-15px) rotateZ(5deg); }
        }

        @keyframes rotate-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px currentColor,
                        0 0 40px currentColor;
          }
          50% { 
            box-shadow: 0 0 40px currentColor,
                        0 0 80px currentColor,
                        0 0 120px currentColor;
          }
        }

        @keyframes neon-flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.2; }
          46% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }

        @keyframes expand-card {
          0% { transform: scale(0.85) rotateY(-15deg); opacity: 0; }
          100% { transform: scale(1) rotateY(0); opacity: 1; }
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* GLASS MORPHISM CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
          perspective: 1000px;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.7s;
        }

        .glass-card:hover::before {
          left: 100%;
        }

        .glass-card:hover {
          transform: translateY(-25px) scale(1.02) rotateX(5deg);
          border-color: var(--card-color);
          box-shadow: 
            0 40px 100px var(--card-glow),
            0 0 60px var(--card-glow) inset;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* SKILL TAGS */
        /* ═══════════════════════════════════════════════════════════ */
        .tech-tag {
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid;
          padding: 0.7rem 1.3rem;
          border-radius: 999px;
          font-family: 'Space Mono', monospace;
          font-size: 0.85rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .tech-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .tech-tag:hover::before {
          opacity: 0.2;
        }

        .tech-tag:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 40px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* FILTER BUTTONS */
        /* ═══════════════════════════════════════════════════════════ */
        .filter-btn {
          background: rgba(0, 0, 0, 0.7);
          border: 3px solid;
          padding: 0.9rem 2rem;
          border-radius: 999px;
          font-family: 'Orbitron', sans-serif;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: white;
          font-size: 0.95rem;
          letter-spacing: 1px;
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: -1;
        }

        .filter-btn:hover::before,
        .filter-btn.active::before {
          transform: scaleX(1);
        }

        .filter-btn:hover,
        .filter-btn.active {
          color: #000;
          transform: translateY(-5px);
          box-shadow: 0 20px 60px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* NEON TEXT */
        /* ═══════════════════════════════════════════════════════════ */
        .neon-text {
          text-shadow: 
            0 0 10px currentColor,
            0 0 20px currentColor,
            0 0 40px currentColor,
            0 0 80px currentColor;
          animation: neon-flicker 4s linear infinite;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* HEXAGON */
        /* ═══════════════════════════════════════════════════════════ */
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: rotate-border 25s linear infinite;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* STAT CARDS */
        /* ═══════════════════════════════════════════════════════════ */
        .stat-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 3px solid;
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: currentColor;
          opacity: 0.1;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .stat-card:hover::before {
          width: 500px;
          height: 500px;
        }

        .stat-card:hover {
          transform: translateY(-20px) scale(1.05);
          box-shadow: 0 40px 100px currentColor;
        }

        /* ═══════════════════════════════════════════════════════════ */
        /* RESPONSIVE */
        /* ═══════════════════════════════════════════════════════════ */
        @media (max-width: 768px) {
          body { cursor: default; }
          .custom-cursor, .cursor-trail { display: none; }
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: cursorTrail[cursorTrail.length - 1]?.x || 0,
          top: cursorTrail[cursorTrail.length - 1]?.y || 0,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {cursorTrail.slice(-8).map((point, i) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.05}s`
          }}
        />
      ))}

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #000000, #0a0a1a, #000000)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Progress Bar */}
        <div style={{
          position: 'fixed', top: 0, left: 0, width: `${scrollProgress}%`, height: '4px',
          background: 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)',
          zIndex: 10000, boxShadow: '0 0 20px currentColor', transition: 'width 0.1s'
        }} />

        {/* Particle System */}
        {particles.map(particle => (
          <div
            key={particle.id}
            style={{
              position: 'fixed',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'rgba(0, 245, 255, 0.6)',
              borderRadius: '50%',
              pointerEvents: 'none',
              animation: `particle-float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.8)',
              zIndex: 1
            }}
          />
        ))}

        {/* Grid Background */}
        <div style={{
          position: 'fixed', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(168,85,247,0.05) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite',
          opacity: 0.3, pointerEvents: 'none'
        }} />

        {/* Canvas Background */}
        <canvas ref={canvasRef} style={{ 
          position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2 
        }} />

        {/* Floating Orbs */}
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            position: 'fixed',
            top: `${15 + i * 30}%`,
            right: `${-5 + i * 10}%`,
            width: `${500 - i * 100}px`,
            height: `${500 - i * 100}px`,
            border: '2px solid rgba(0, 245, 255, 0.1)',
            borderRadius: '50%',
            animation: `rotate-border ${35 + i * 10}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
            pointerEvents: 'none',
            zIndex: 0
          }} />
        ))}

        <div style={{
          position: 'relative', zIndex: 10, maxWidth: '1600px',
          margin: '0 auto', padding: '0 2rem',
          paddingTop: 'clamp(4rem, 8vw, 6rem)',
          paddingBottom: '6rem'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '1rem',
              fontFamily: "'Space Mono', monospace", color: '#00f5ff',
              fontSize: 'clamp(0.9rem, 2vw, 1rem)', padding: '1rem 2rem',
              border: '2px solid rgba(0, 245, 255, 0.5)', borderRadius: '999px',
              marginBottom: '2rem', background: 'rgba(0, 245, 255, 0.05)',
              animation: 'pulse-glow 3s infinite'
            }}>
              <Film size={20} />
              ELITE_DEVELOPER.INITIALIZE()
              <Activity size={20} />
            </div>

            <h1 className="neon-text" style={{
              fontSize: 'clamp(3rem, 9vw, 6rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif", letterSpacing: '8px',
              textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1.1,
              background: 'linear-gradient(90deg, #00f5ff 0%, #a855f7 50%, #ff6b35 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 100%'
            }}>
              SKILLS ARSENAL
            </h1>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)', color: '#b0b0d8',
              maxWidth: '900px', margin: '0 auto 3rem',
              fontFamily: "'Rajdhani', sans-serif", lineHeight: 1.8,
              fontWeight: 500
            }}>
              Master-level proficiency across full-stack development, AI/ML, cloud architecture, and data science
              <br/>
              <span style={{ color: '#00f5ff', fontFamily: "'Space Mono', monospace" }}>
                [ 50+ projects | 500+ problems solved | 5+ years experience ]
              </span>
            </p>

            {/* Filter Buttons */}
            <div style={{
              display: 'flex', justifyContent: 'center',
              gap: '1.2rem', flexWrap: 'wrap', marginBottom: '3rem'
            }}>
              {['ALL', 'MYTHIC', 'LEGENDARY', 'EPIC'].map(rarity => (
                <button
                  key={rarity}
                  className={`filter-btn ${filterRarity === rarity ? 'active' : ''}`}
                  onClick={() => setFilterRarity(rarity)}
                  style={{
                    borderColor: getRarityColor(rarity),
                    color: filterRarity === rarity ? '#000' : 'white',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  {rarity === 'ALL' ? '🌟 ALL SKILLS' : `✨ ${rarity}`}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '6rem'
          }}>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === skill.id;
              const rarityColor = getRarityColor(skill.rarity);

              return (
                <div
                  key={skill.id}
                  className="glass-card"
                  onMouseEnter={() => setActiveSkill(skill.id)}
                  onMouseLeave={() => setActiveSkill(null)}
                  style={{
                    '--card-color': skill.color,
                    '--card-glow': `rgba(${skill.glowRGB}, 0.4)`,
                    padding: 'clamp(1.5rem, 3vw, 2rem)',
                    animation: `cinematic-reveal ${0.8 + index * 0.1}s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  {/* Top Accent */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '5px',
                    background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                    opacity: isActive ? 1 : 0.6, transition: 'opacity 0.5s'
                  }} />

                  {/* Rarity Badge */}
                  <div style={{
                    position: 'absolute', top: '1.2rem', right: '1.2rem',
                    padding: '0.6rem 1.2rem', background: rarityColor,
                    color: '#000', borderRadius: '999px',
                    fontSize: '0.75rem', fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    letterSpacing: '1px', border: `2px solid ${rarityColor}`,
                    animation: 'pulse-glow 2.5s infinite',
                    boxShadow: isActive ? `0 0 40px ${rarityColor}` : 'none',
                    zIndex: 10
                  }}>
                    {skill.rarity}
                  </div>

                  {/* Header Section */}
                  <div style={{
                    display: 'flex', alignItems: 'flex-start',
                    justifyContent: 'space-between', marginBottom: '1.8rem',
                    gap: '1rem', flexWrap: 'wrap'
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      gap: '1.2rem', flex: 1, minWidth: '200px'
                    }}>
                      <div className="hexagon" style={{
                        width: '80px', height: '80px',
                        background: `linear-gradient(135deg, ${skill.color}, transparent)`,
                        boxShadow: isActive ? `0 0 50px ${skill.color}` : 'none',
                        transition: 'all 0.5s'
                      }}>
                        <Icon size={36} style={{ 
                          color: skill.color,
                          filter: 'drop-shadow(0 0 10px currentColor)',
                          transform: 'rotate(0deg)',
                          animation: 'none'
                        }} />
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{
                          color: skill.color,
                          fontFamily: "'Orbitron', sans-serif",
                          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                          fontWeight: 900, letterSpacing: '3px',
                          textShadow: isActive ? `0 0 30px ${skill.color}` : 'none',
                          marginBottom: '0.5rem'
                        }}>
                          {skill.masteryRank}
                        </div>
                        <div style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.9rem', color: '#888',
                          display: 'flex', alignItems: 'center', gap: '0.5rem'
                        }}>
                          <Zap size={16} style={{ color: skill.color }} />
                          {skill.yearsActive} Active
                        </div>
                      </div>
                    </div>

                    {/* Progress Circle */}
                    <svg width="90" height="90" style={{ 
                      transform: 'rotate(-90deg)', flexShrink: 0 
                    }}>
                      <circle cx="45" cy="45" r="38" fill="none"
                        stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                      <circle cx="45" cy="45" r="38" fill="none"
                        stroke={skill.color} strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 38}`}
                        strokeDashoffset={`${2 * Math.PI * 38 * (1 - skill.level / 100)}`}
                        strokeLinecap="round"
                        style={{
                          transition: 'stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
                          filter: `drop-shadow(0 0 ${isActive ? '15px' : '8px'} ${skill.color})`
                        }}
                      />
                      <text x="45" y="45" textAnchor="middle" dy="8"
                        fill={skill.color} fontSize="18" fontWeight="900"
                        fontFamily="'Orbitron', sans-serif"
                        style={{ transform: 'rotate(90deg)', transformOrigin: '45px 45px' }}>
                        {skill.level}%
                      </text>
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: 'clamp(1.7rem, 3vw, 2rem)', fontWeight: 900,
                    color: '#ffffff', marginBottom: '1.2rem',
                    textTransform: 'uppercase', letterSpacing: '2px',
                    fontFamily: "'Orbitron', sans-serif"
                  }}>
                    {skill.name}
                  </h3>

                  {/* Impact Badge */}
                  <div style={{
                    background: `linear-gradient(135deg, rgba(${skill.glowRGB}, 0.15), rgba(${skill.glowRGB}, 0.05))`,
                    border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                    borderRadius: '16px', padding: '1rem',
                    marginBottom: '1.5rem', display: 'flex',
                    alignItems: 'center', gap: '0.8rem'
                  }}>
                    <Trophy size={24} style={{ color: skill.color, flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: '1.05rem', fontWeight: 600,
                      color: '#e0e0ff'
                    }}>
                      {skill.impact}
                    </span>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '1.05rem', color: '#c0c0ff',
                    lineHeight: 1.7, marginBottom: '2rem',
                    fontFamily: "'Rajdhani', sans-serif"
                  }}>
                    {skill.description}
                  </p>

                  {/* Stats Grid */}
                  <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem', marginBottom: '2rem'
                  }}>
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                      borderRadius: '14px', padding: '1.2rem',
                      textAlign: 'center', transition: 'all 0.4s'
                    }}>
                      <div style={{
                        fontSize: '2.2rem', fontWeight: 900,
                        color: skill.color, fontFamily: "'Orbitron', sans-serif",
                        marginBottom: '0.3rem'
                      }}>
                        {skill.projects}
                      </div>
                      <div style={{
                        fontSize: '0.85rem', color: '#999',
                        textTransform: 'uppercase', letterSpacing: '1px'
                      }}>
                        Projects
                      </div>
                    </div>

                    <div style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                      borderRadius: '14px', padding: '1.2rem',
                      textAlign: 'center', transition: 'all 0.4s'
                    }}>
                      <div style={{
                        fontSize: '2.2rem', fontWeight: 900,
                        color: skill.color, fontFamily: "'Orbitron', sans-serif",
                        marginBottom: '0.3rem'
                      }}>
                        {skill.completionRate}%
                      </div>
                      <div style={{
                        fontSize: '0.85rem', color: '#999',
                        textTransform: 'uppercase', letterSpacing: '1px'
                      }}>
                        Success Rate
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                    borderRadius: '18px', padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{
                      color: skill.color, fontSize: '1.2rem',
                      fontWeight: 700, marginBottom: '1rem',
                      display: 'flex', alignItems: 'center', gap: '0.8rem',
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      <Code2 size={22} /> TECH STACK
                    </h4>
                    <div style={{
                      display: 'flex', flexWrap: 'wrap', gap: '0.8rem'
                    }}>
                      {skill.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag"
                          style={{
                            color: hoveredTech === tech ? '#000' : (isActive ? skill.color : '#aaa'),
                            borderColor: hoveredTech === tech ? skill.color : (isActive ? skill.color : '#555'),
                            background: hoveredTech === tech ? skill.color : 'rgba(0,0,0,0.7)'
                          }}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                    borderRadius: '18px', padding: '1.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{
                      color: skill.color, fontSize: '1.2rem',
                      fontWeight: 700, marginBottom: '1rem',
                      display: 'flex', alignItems: 'center', gap: '0.8rem',
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      <Star size={22} /> ACHIEVEMENTS
                    </h4>
                    <div style={{
                      display: 'flex', flexDirection: 'column', gap: '0.8rem'
                    }}>
                      {skill.keyAchievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          style={{
                            background: isActive ? `rgba(${skill.glowRGB}, 0.1)` : 'transparent',
                            border: `1px solid rgba(${skill.glowRGB}, 0.3)`,
                            borderRadius: '12px', padding: '0.8rem',
                            transition: 'all 0.3s',
                            fontSize: '0.95rem', color: '#e0e0ff'
                          }}
                        >
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects Used In */}
                  <details style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                    borderRadius: '18px', padding: '1.5rem',
                    marginBottom: '1.5rem', cursor: 'pointer'
                  }}>
                    <summary style={{
                      color: skill.color, fontSize: '1.2rem',
                      fontWeight: 700, display: 'flex',
                      alignItems: 'center', gap: '0.8rem',
                      fontFamily: "'Orbitron', sans-serif",
                      userSelect: 'none', listStyle: 'none'
                    }}>
                      <Rocket size={22} /> FEATURED PROJECTS ({skill.usedIn.length})
                    </summary>
                    <ul style={{
                      color: '#e0f7ff', fontSize: '1rem',
                      listStyleType: 'none', padding: 0,
                      margin: '1.2rem 0 0 0'
                    }}>
                      {skill.usedIn.map((proj, idx) => (
                        <li key={idx} style={{
                          marginBottom: '0.8rem', display: 'flex',
                          alignItems: 'center', gap: '0.8rem',
                          padding: '0.6rem', borderRadius: '10px',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(${skill.glowRGB}, 0.15)`;
                          e.currentTarget.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}>
                          <CheckCircle2 size={18} style={{ 
                            color: skill.color, minWidth: '18px' 
                          }} />
                          {proj}
                        </li>
                      ))}
                    </ul>
                  </details>

                  {/* Implementation Details */}
                  <details style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: `2px solid rgba(${skill.glowRGB}, 0.3)`,
                    borderRadius: '18px', padding: '1.5rem',
                    cursor: 'pointer'
                  }}>
                    <summary style={{
                      color: skill.color, fontSize: '1.2rem',
                      fontWeight: 700, display: 'flex',
                      alignItems: 'center', gap: '0.8rem',
                      fontFamily: "'Orbitron', sans-serif",
                      userSelect: 'none', listStyle: 'none'
                    }}>
                      <Wrench size={22} /> IMPLEMENTATION
                    </summary>
                    <ul style={{
                      color: '#e0f7ff', fontSize: '1rem',
                      listStyleType: 'none', padding: 0,
                      margin: '1.2rem 0 0 0'
                    }}>
                      {skill.howUsed.map((use, idx) => (
                        <li key={idx} style={{
                          marginBottom: '0.8rem', display: 'flex',
                          alignItems: 'flex-start', gap: '0.8rem',
                          padding: '0.6rem', borderRadius: '10px',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(${skill.glowRGB}, 0.15)`;
                          e.currentTarget.style.transform = 'translateX(10px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}>
                          <GitBranch size={18} style={{ 
                            color: skill.color, minWidth: '18px', marginTop: '2px' 
                          }} />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              );
            })}
          </div>

          {/* Stats Dashboard */}
          <div className="glass-card" style={{
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: '5rem', borderColor: 'rgba(0, 245, 255, 0.3)'
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
              background: 'linear-gradient(90deg, #00f5ff, #a855f7, #ff6b35, #00f5ff)',
              backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'
            }} />

            <h2 className="neon-text" style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
              color: '#00f5ff', textAlign: 'center',
              marginBottom: '3rem', fontFamily: "'Orbitron', sans-serif",
              textTransform: 'uppercase', letterSpacing: '4px'
            }}>
              🏆 ACHIEVEMENTS UNLOCKED
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}>
              {[
                { label: 'Experience', value: '5+Y', icon: Cpu, color: '#00f5ff', desc: 'Years Active' },
                { label: 'Projects', value: '50+', icon: Layers, color: '#a855f7', desc: 'Production Apps' },
                { label: 'Technologies', value: '38+', icon: Globe, color: '#ff6b35', desc: 'Mastered' },
                { label: 'Certifications', value: '15+', icon: Award, color: '#ffd700', desc: 'Recognized' },
                { label: 'Problems', value: '500+', icon: Target, color: '#ff00ff', desc: 'Solved' },
                { label: 'Success', value: '96%', icon: TrendingUp, color: '#00ff88', desc: 'Completion' }
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="stat-card"
                    style={{
                      borderColor: stat.color,
                      animation: `cinematic-reveal ${1 + i * 0.15}s ease-out forwards`,
                      animationDelay: `${i * 0.1}s`,
                      opacity: 0
                    }}
                  >
                    <div style={{
                      width: '85px', height: '85px',
                      margin: '0 auto 1.5rem',
                      border: `3px solid ${stat.color}`,
                      borderRadius: '18px', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      animation: 'float-3d 4s ease-in-out infinite',
                      animationDelay: `${i * 0.4}s`,
                      boxShadow: `0 0 40px ${stat.color}50`,
                      background: `linear-gradient(135deg, ${stat.color}10, transparent)`
                    }}>
                      <Icon size={38} style={{ color: stat.color }} />
                    </div>
                    <div style={{
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      fontWeight: 900, color: stat.color,
                      marginBottom: '0.5rem',
                      fontFamily: "'Orbitron', sans-serif",
                      textShadow: `0 0 30px ${stat.color}`
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '1.1rem', color: '#ffffff',
                      fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '1px', marginBottom: '0.5rem',
                      fontFamily: "'Rajdhani', sans-serif"
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontSize: '0.9rem', color: '#b0b0d8',
                      fontFamily: "'Rajdhani', sans-serif"
                    }}>
                      {stat.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final CTA */}
          <div className="glass-card" style={{
            padding: 'clamp(3rem, 6vw, 4.5rem) clamp(2rem, 4vw, 3rem)',
            textAlign: 'center', borderColor: 'rgba(0, 245, 255, 0.3)'
          }}>
            <div style={{
              fontSize: '0.95rem', color: '#00f5ff',
              marginBottom: '1rem', fontFamily: "'Space Mono', monospace",
              letterSpacing: '2px'
            }}>
              &lt;READY_TO_INNOVATE&gt;
            </div>

            <h2 className="neon-text" style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900,
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(135deg, #00f5ff, #a855f7, #ff6b35)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '2rem'
            }}>
              BUILD SOMETHING EXTRAORDINARY
            </h2>

            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: '#c0c0ff', marginBottom: '3rem',
              fontFamily: "'Rajdhani', sans-serif",
              maxWidth: '800px', margin: '0 auto 3rem',
              lineHeight: 1.8
            }}>
              Let's leverage these elite skills to create cutting-edge solutions
              that push the boundaries of technology.
            </p>

            <div style={{
              display: 'flex', gap: '1.5rem',
              justifyContent: 'center', flexWrap: 'wrap'
            }}>
              <button className="filter-btn" style={{
                borderColor: '#00f5ff', color: 'white',
                fontSize: '1.05rem', padding: '1.2rem 3rem',
                display: 'flex', alignItems: 'center',
                gap: '0.8rem', position: 'relative', zIndex: 1
              }}>
                <Eye size={22} />
                VIEW PROJECTS
              </button>
              <button className="filter-btn" style={{
                borderColor: '#a855f7', color: 'white',
                fontSize: '1.05rem', padding: '1.2rem 3rem',
                display: 'flex', alignItems: 'center',
                gap: '0.8rem', position: 'relative', zIndex: 1
              }}>
                <Rocket size={22} />
                START PROJECT
              </button>
            </div>

            <div style={{
              marginTop: '2.5rem', fontSize: '0.9rem',
              color: '#00f5ff', fontFamily: "'Space Mono', monospace"
            }}>
              &lt;/ELITE_DEVELOPER_2026&gt;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}