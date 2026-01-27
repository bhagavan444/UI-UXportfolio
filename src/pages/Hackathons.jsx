"use client";

import { useState, useEffect, useRef } from "react";
import {
  Trophy, Award, X, Code, Database, Shield, Rocket, Crown,
  Clock, Users, Sparkles, Zap, Star, Flame, Target, Cpu, GitBranch,
  Download, TrendingUp, Layers, CheckCircle2, ArrowRight, Terminal,
  Server, Lock, Brain, Eye, Heart, Coffee, Mic, Volume2, Play, Pause,
  ChevronDown, ChevronUp, Calendar, MapPin, Mail, Github, Linkedin,
  Globe, MessageSquare, Send, BarChart3, PieChart, Activity, AlertCircle,
  Fingerprint, Boxes, Network, Webhook, Container, Shuffle
} from "lucide-react";

const phaseIcons = {
  1: Terminal,
  2: Code,
  3: Zap,
  4: Rocket
};

// Developer Animated Background Component
function DeveloperBackground() {
  const canvasRef = useRef(null);

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

    // Code snippets that scroll
    const codeSnippets = [
      'const app = express();',
      'app.use(middleware);',
      'mongoose.connect(URI);',
      'JWT.verify(token);',
      'socket.on("message");',
      'async function fetch()',
      'return response.json()',
      'if (authenticated) {',
      'const [state, setState]',
      'useEffect(() => {',
      'router.get("/api")',
      'app.listen(PORT);',
      'try { await axios',
      'Redux.dispatch()',
      'React.createElement',
      'npm run build',
      'docker-compose up',
      'git commit -m',
      'export default App',
      'import { useState }',
    ];

    // Binary rain characters
    const binaryChars = ['0', '1'];
    
    // Terminal commands
    const terminalCommands = [
      '$ npm install',
      '$ node server.js',
      '$ git push origin',
      '$ docker build',
      '$ kubectl apply',
      '$ yarn start',
    ];

    class CodeLine {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.speed = Math.random() * 1 + 0.5;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = Math.random() * 0.3 + 0.1;
        this.color = ['#00f0ff', '#a78bfa', '#ff61d2', '#10b981'][Math.floor(Math.random() * 4)];
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 50) this.reset();
      }
      draw() {
        ctx.font = '14px "JetBrains Mono", monospace';
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    class BinaryRain {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.speed = Math.random() * 3 + 2;
        this.chars = Array(20).fill(0).map(() => 
          binaryChars[Math.floor(Math.random() * binaryChars.length)]
        );
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 100) this.reset();
      }
      draw() {
        ctx.font = '12px "JetBrains Mono", monospace';
        this.chars.forEach((char, i) => {
          const alpha = Math.max(0, this.opacity - (i * 0.02));
          ctx.fillStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.fillText(char, this.x, this.y - (i * 16));
        });
      }
    }

    class TerminalLine {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = -500;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.text = terminalCommands[Math.floor(Math.random() * terminalCommands.length)];
        this.opacity = Math.random() * 0.25 + 0.1;
      }
      update() {
        this.x += this.speed;
        if (this.x > canvas.width + 200) this.reset();
      }
      draw() {
        ctx.font = '16px "JetBrains Mono", monospace';
        ctx.fillStyle = `rgba(16, 185, 129, ${this.opacity})`;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    class GeometricShape {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.type = Math.floor(Math.random() * 3); // 0: square, 1: triangle, 2: hexagon
        this.color = ['#00f0ff', '#a78bfa', '#ff61d2'][Math.floor(Math.random() * 3)];
      }
      update() {
        this.rotation += this.rotationSpeed;
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        if (this.type === 0) {
          // Square
          ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
        } else if (this.type === 1) {
          // Triangle
          ctx.moveTo(0, -this.size/2);
          ctx.lineTo(this.size/2, this.size/2);
          ctx.lineTo(-this.size/2, this.size/2);
          ctx.closePath();
        } else {
          // Hexagon
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = (this.size/2) * Math.cos(angle);
            const y = (this.size/2) * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    class CircuitLine {
      constructor() {
        this.reset();
      }
      reset() {
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = this.startX + (Math.random() - 0.5) * 300;
        this.endY = this.startY + (Math.random() - 0.5) * 300;
        this.progress = 0;
        this.speed = Math.random() * 0.01 + 0.005;
        this.color = ['#00f0ff', '#a78bfa'][Math.floor(Math.random() * 2)];
        this.opacity = Math.random() * 0.3 + 0.1;
      }
      update() {
        this.progress += this.speed;
        if (this.progress > 1) this.reset();
      }
      draw() {
        const currentX = this.startX + (this.endX - this.startX) * this.progress;
        const currentY = this.startY + (this.endY - this.startY) * this.progress;
        
        ctx.strokeStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
        
        // Draw node at end
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create elements
    const codeLines = Array.from({ length: 15 }, () => new CodeLine());
    const binaryRains = Array.from({ length: 10 }, () => new BinaryRain());
    const terminalLines = Array.from({ length: 8 }, () => new TerminalLine());
    const geometricShapes = Array.from({ length: 6 }, () => new GeometricShape());
    const circuitLines = Array.from({ length: 12 }, () => new CircuitLine());

    const animate = () => {
      // Dark background with slight transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw geometric shapes (background layer)
      geometricShapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Draw circuit lines
      circuitLines.forEach(line => {
        line.update();
        line.draw();
      });

      // Draw binary rain
      binaryRains.forEach(rain => {
        rain.update();
        rain.draw();
      });

      // Draw code lines
      codeLines.forEach(line => {
        line.update();
        line.draw();
      });

      // Draw terminal commands
      terminalLines.forEach(line => {
        line.update();
        line.draw();
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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.6
      }}
    />
  );
}


export default function EliteHackathonShowcase() {
  const [activePhase, setActivePhase] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  const certificateImage = "https://lh3.googleusercontent.com/d/1bkXJCzHQPbSSovbaLs4EPeKT1f9ERl5O";

  const phases = [
    {
      id: 1,
      hour: "0–6h",
      icon: Terminal,
      title: "Foundation Sprint",
      desc: "Designed system architecture with microservices approach, implemented MongoDB sharding strategy, created JWT authentication with refresh tokens, and established CI/CD pipeline foundation.",
      color: "#00f0ff",
      gradient: "linear-gradient(135deg, #00f0ff 0%, #0099cc 100%)",
      achievements: [
        "Microservices Architecture Design",
        "MongoDB Sharding & Indexing Strategy",
        "JWT + Refresh Token Authentication",
        "Docker Containerization Setup"
      ],
      techUsed: ["Node.js", "Express", "MongoDB Atlas", "JWT", "Docker"],
      challenges: "Designing scalable architecture under extreme time pressure while ensuring security best practices",
      solutions: "Implemented modular microservices with API gateway pattern and comprehensive middleware authentication layer",
      metrics: { linesOfCode: 1200, apis: 5, tests: 15 }
    },
    {
      id: 2,
      hour: "6–14h",
      icon: Code,
      title: "Core Development",
      desc: "Built RESTful APIs with advanced error handling, implemented Redux Toolkit for state management, created reusable component library with TypeScript, and integrated real-time data synchronization.",
      color: "#a78bfa",
      gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
      achievements: [
        "20+ REST API Endpoints with Validation",
        "TypeScript Component Library (30+ components)",
        "Redux Toolkit + RTK Query Integration",
        "Advanced Client-Side Routing & Guards"
      ],
      techUsed: ["React 18", "TypeScript", "Redux Toolkit", "React Router v6", "Axios Interceptors"],
      challenges: "Managing complex async state with multiple data sources while maintaining type safety and performance",
      solutions: "Leveraged RTK Query for automatic caching, Redux Toolkit for normalized state, and React.memo for optimization",
      metrics: { linesOfCode: 2100, apis: 10, tests: 35 }
    },
    {
      id: 3,
      hour: "14–20h",
      icon: Zap,
      title: "Integration & Security",
      desc: "Integrated Socket.io with Redis adapter for horizontal scaling, implemented OAuth 2.0 flow, added rate limiting and DDoS protection, created comprehensive logging system with Winston.",
      color: "#ff61d2",
      gradient: "linear-gradient(135deg, #ff61d2 0%, #e91e63 100%)",
      achievements: [
        "WebSocket + Redis Pub/Sub Architecture",
        "OAuth 2.0 & RBAC Authorization",
        "Rate Limiting + Helmet.js Security",
        "Winston Logger + Error Tracking"
      ],
      techUsed: ["Socket.io", "Redis", "OAuth 2.0", "Helmet.js", "Winston", "express-rate-limit"],
      challenges: "Securing WebSocket connections with authentication while maintaining real-time performance at scale",
      solutions: "Implemented Redis-backed Socket.io adapter with JWT middleware for connection authentication and room-based authorization",
      metrics: { linesOfCode: 1500, apis: 4, tests: 28 }
    },
    {
      id: 4,
      hour: "20–24h",
      icon: Rocket,
      title: "Launch & Demo",
      desc: "Deployed to AWS ECS with auto-scaling, implemented CDN for static assets, added comprehensive monitoring with Prometheus, created interactive demo with live metrics dashboard.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      achievements: [
        "AWS ECS Production Deployment",
        "CloudFront CDN + S3 Integration",
        "Prometheus + Grafana Monitoring",
        "Live Demo with Real-time Analytics"
      ],
      techUsed: ["Docker", "AWS ECS", "CloudFront", "Nginx", "Prometheus", "Grafana"],
      challenges: "Optimizing bundle size and achieving sub-second load times while deploying complex microservices architecture",
      solutions: "Implemented code splitting, lazy loading, aggressive caching strategies, and containerized services with orchestration",
      metrics: { linesOfCode: 200, apis: 1, tests: 12 }
    }
  ];

  const techStack = [
    { 
      icon: Database, 
      name: "MongoDB", 
      desc: "Distributed NoSQL with sharding & replication", 
      color: "#10b981", 
      proficiency: 95,
      features: ["Sharding", "Atlas Search", "Aggregation Pipeline"]
    },
    { 
      icon: Server, 
      name: "Express.js", 
      desc: "High-performance REST API framework", 
      color: "#00f0ff", 
      proficiency: 92,
      features: ["Middleware", "Routing", "Error Handling"]
    },
    { 
      icon: Sparkles, 
      name: "React", 
      desc: "Component-based UI with hooks & context", 
      color: "#8b5cf6", 
      proficiency: 98,
      features: ["Hooks", "Context API", "Suspense"]
    },
    { 
      icon: Layers, 
      name: "Node.js", 
      desc: "Async I/O runtime with event-driven architecture", 
      color: "#ec4899", 
      proficiency: 90,
      features: ["Event Loop", "Streams", "Cluster"]
    },
    { 
      icon: Lock, 
      name: "JWT & OAuth", 
      desc: "Token-based authentication & authorization", 
      color: "#f59e0b", 
      proficiency: 88,
      features: ["Access Tokens", "Refresh Tokens", "RBAC"]
    },
    { 
      icon: Zap, 
      name: "Socket.io", 
      desc: "Bidirectional real-time communication", 
      color: "#3b82f6", 
      proficiency: 85,
      features: ["WebSocket", "Redis Adapter", "Rooms"]
    },
    { 
      icon: Container, 
      name: "Docker", 
      desc: "Containerization & orchestration", 
      color: "#06b6d4", 
      proficiency: 87,
      features: ["Multi-stage", "Compose", "Swarm"]
    },
    { 
      icon: Network, 
      name: "Redis", 
      desc: "In-memory data structure store", 
      color: "#dc2626", 
      proficiency: 84,
      features: ["Caching", "Pub/Sub", "Sessions"]
    }
  ];

  const stats = [
    { label: "Duration", value: "24", unit: "hours", icon: Clock, color: "#00f0ff", target: 24 },
    { label: "Team Size", value: "4", unit: "developers", icon: Users, color: "#a78bfa", target: 4 },
    { label: "Code Written", value: "5000", unit: "lines", icon: Code, color: "#ff61d2", target: 5000 },
    { label: "Achievement", value: "1st", unit: "place", icon: Trophy, color: "#10b981", target: 1 },
    { label: "API Endpoints", value: "20", unit: "routes", icon: Server, color: "#f59e0b", target: 20 },
    { label: "Test Coverage", value: "90", unit: "percent", icon: Shield, color: "#3b82f6", target: 90 }
  ];

  const teamMembers = [
    { 
      name: "Bhagavan", 
      role: "Full-Stack Architect", 
      avatar: "🧑‍💻", 
      contribution: "System Design & Backend Infrastructure",
      skills: ["Node.js", "MongoDB", "AWS", "Docker"],
      github: "https://github.com/bhagavan444"
    },
    { 
      name: "Dhanus Chandra", 
      role: "Frontend Engineer", 
      avatar: "👩‍💻", 
      contribution: "UI/UX & Component Architecture",
      skills: ["React", "TypeScript", "Redux", "Tailwind"]
    },
    { 
      name: "Pavan", 
      role: "DevOps Engineer", 
      avatar: "👨‍💻", 
      contribution: "CI/CD & Cloud Infrastructure",
      skills: ["Docker", "Kubernetes", "AWS", "Nginx"]
    },
    { 
      name: "Rahul", 
      role: "Security Specialist", 
      avatar: "👩‍💻", 
      contribution: "Authentication & Authorization Systems",
      skills: ["JWT", "OAuth", "Security", "Encryption"]
    }
  ];

  const milestones = [
    { time: "00:00", event: "Kickoff - Team Formation & Ideation", icon: Users, status: "completed" },
    { time: "02:00", event: "Architecture Design & Tech Stack Selection", icon: Brain, status: "completed" },
    { time: "06:00", event: "Database Schema & API Contracts Finalized", icon: Database, status: "completed" },
    { time: "10:00", event: "Core API Endpoints Implemented", icon: Server, status: "completed" },
    { time: "14:00", event: "Frontend Components & State Management", icon: Code, status: "completed" },
    { time: "18:00", event: "Real-Time Features & WebSocket Integration", icon: Zap, status: "completed" },
    { time: "22:00", event: "Security Hardening & Performance Testing", icon: Shield, status: "completed" },
    { time: "24:00", event: "Deployment & Final Presentation - Victory!", icon: Trophy, status: "completed" }
  ];

  const [displayStats, setDisplayStats] = useState(stats.map(() => 0));

  // Advanced Particle System with 3D effect
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

    class Particle3D {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.vz = Math.random() * 2 + 1;
        this.size = Math.random() * 2 + 1;
        this.life = 1;
        this.hue = Math.random() * 60 + 180; // Blue to cyan range
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z -= this.vz;
        
        if (this.z <= 0) this.reset();
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
        const size = this.size * scale;
        const alpha = (1 - this.z / 1000) * 0.6;

        const gradient = ctx.createRadialGradient(x2d, y2d, 0, x2d, y2d, size * 8);
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 60%, ${alpha})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 50%, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x2d, y2d, size * 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 150 }, () => new Particle3D());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update();
        p.draw();
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

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / documentHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated stats counter
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setDisplayStats(prev => {
                const newStats = [...prev];
                newStats[index] = Math.floor(current);
                return newStats;
              });
            }, 25);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  const handleCertificateDownload = () => {
    const link = document.createElement("a");
    link.href = certificateImage;
    link.download = "Brainovision-National-Championship-Certificate-2024.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --cyber-blue: #00f0ff;
          --cyber-purple: #a78bfa;
          --cyber-pink: #ff61d2;
          --cyber-green: #10b981;
          --cyber-orange: #f59e0b;
          --cyber-red: #ef4444;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px currentColor); }
          50% { filter: drop-shadow(0 0 20px currentColor); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes rotate3d {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        .glass-card {
          background: rgba(15, 15, 35, 0.7);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px 0 rgba(0, 0, 0, 0.37),
            inset 0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }

        .glass-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s;
        }

        .glass-card:hover::before {
          left: 100%;
        }

        .glass-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(0, 240, 255, 0.5);
          box-shadow: 
            0 20px 60px 0 rgba(0, 240, 255, 0.3),
            0 0 80px rgba(0, 240, 255, 0.2),
            inset 0 0 0 1px rgba(0, 240, 255, 0.2);
        }

        .neon-text {
          background: linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 8s ease infinite;
        }

        .tech-badge {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 2px solid var(--cyber-blue);
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9rem;
          color: var(--cyber-blue);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .tech-badge::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(0, 240, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s;
        }

        .tech-badge:hover::before {
          width: 300px;
          height: 300px;
        }

        .tech-badge:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px var(--cyber-blue);
          border-color: var(--cyber-blue);
        }

        .progress-ring {
          transform: rotate(-90deg);
          transition: stroke-dashoffset 1s ease;
        }

        .holographic {
          background: linear-gradient(135deg, 
            rgba(0, 240, 255, 0.1) 0%,
            rgba(167, 139, 250, 0.1) 25%,
            rgba(255, 97, 210, 0.1) 50%,
            rgba(16, 185, 129, 0.1) 75%,
            rgba(0, 240, 255, 0.1) 100%);
          background-size: 400% 400%;
          animation: shimmer 10s ease infinite;
        }

        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--cyber-blue), transparent);
          animation: scanline 4s linear infinite;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .glass-card:hover {
            transform: translateY(-5px) scale(1.01);
          }
        }
      `}</style>

      {/* Scroll Progress */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        background: 'linear-gradient(90deg, #00f0ff, #a78bfa, #ff61d2, #10b981)',
        zIndex: 10000,
        transition: 'width 0.1s ease'
      }} />

      <div style={{
        minHeight: '100vh',
        background: '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Developer Animated Background */}
        <DeveloperBackground />

        {/* 3D Particle Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div style={{
          position: 'relative',
          zIndex: 10,
          padding: '6rem 2rem',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          {/* Hero Section */}
          <div 
            ref={heroRef}
            style={{
              textAlign: 'center',
              marginBottom: '8rem',
              animation: 'fadeInUp 1s ease-out',
              transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
            }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#00f0ff',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              padding: '1rem 2.5rem',
              border: '2px solid rgba(0, 240, 255, 0.5)',
              borderRadius: '999px',
              marginBottom: '2rem',
              animation: 'pulse 3s infinite',
              background: 'rgba(0, 240, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}>
              <Terminal size={24} style={{ animation: 'glow 2s infinite' }} />
              {'> system.hackathon.execute()'}
              <Sparkles size={24} style={{ animation: 'glow 2s infinite' }} />
            </div>

            <h1 className="neon-text" style={{
              fontSize: 'clamp(4rem, 15vw, 10rem)',
              fontWeight: 900,
              letterSpacing: '10px',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1,
              textShadow: '0 0 80px rgba(0, 240, 255, 0.5)'
            }}>
              BRAINO VISION
            </h1>

            <div style={{
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00f0ff, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '3rem',
              fontFamily: "'Poppins', sans-serif"
            }}>
              National Talent Hunt Championship 2024
            </div>

            {/* Floating achievement badges */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '4rem'
            }}>
              {[
                { icon: Trophy, text: '1st Place', color: '#ffd700' },
                { icon: Users, text: '4 Developers', color: '#00f0ff' },
                { icon: Clock, text: '24 Hours', color: '#a78bfa' },
                { icon: Code, text: '5000+ Lines', color: '#ff61d2' }
              ].map((badge, i) => (
                <div key={i} className="glass-card" style={{
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  animation: `float 3s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}>
                  <badge.icon size={32} style={{ color: badge.color }} />
                  <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Certificate Showcase */}
            <div className="glass-card holographic" style={{
              margin: '4rem auto',
              maxWidth: '1200px',
              padding: '3rem',
              position: 'relative'
            }}>
              <div className="scanline" />
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                marginBottom: '2rem'
              }}>
                <Award size={48} style={{ color: '#ffd700', animation: 'glow 2s infinite' }} />
                <h2 style={{
                  fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  NATIONAL CHAMPIONSHIP
                </h2>
                <Award size={48} style={{ color: '#ffd700', animation: 'glow 2s infinite' }} />
              </div>

              <div 
                onClick={() => setShowCertificate(true)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '3px solid rgba(255, 215, 0, 0.5)',
                  transition: 'all 0.4s',
                  position: 'relative'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 0 60px rgba(255, 215, 0, 0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img 
                  src={certificateImage}
                  alt="Certificate"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, transparent, rgba(0, 240, 255, 0.1))',
                  pointerEvents: 'none'
                }} />
              </div>

              <button
                onClick={handleCertificateDownload}
                style={{
                  marginTop: '2rem',
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  border: 'none',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s',
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: '0 10px 40px rgba(255, 215, 0, 0.4)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 60px rgba(255, 215, 0, 0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(255, 215, 0, 0.4)';
                }}
              >
                <Download size={24} />
                Download Certificate
              </button>
            </div>
          </div>

          {/* Live Stats Dashboard */}
          <div ref={statsRef} style={{
            marginBottom: '8rem'
          }}>
            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              PERFORMANCE METRICS
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem'
            }}>
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '2.5rem 2rem',
                    textAlign: 'center',
                    animation: 'scaleIn 0.6s ease-out',
                    animationDelay: `${i * 0.1}s`,
                    animationFillMode: 'backwards',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: stat.color,
                    boxShadow: `0 0 20px ${stat.color}`,
                    animation: 'pulse 2s infinite'
                  }} />

                  <stat.icon size={48} style={{ 
                    color: stat.color, 
                    marginBottom: '1.5rem',
                    filter: `drop-shadow(0 0 10px ${stat.color})`
                  }} />

                  <div style={{
                    fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.5rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: `0 0 20px ${stat.color}`
                  }}>
                    {stat.label === "Achievement" ? stat.value : displayStats[i]}
                    {stat.unit && stat.label !== "Achievement" && <span style={{ fontSize: '1.5rem', opacity: 0.7 }}>{stat.unit}</span>}
                  </div>

                  <div style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}>
                    {stat.label}
                  </div>

                  {/* Progress bar for percentage stats */}
                  {stat.label === "Test Coverage" && (
                    <div style={{
                      marginTop: '1.5rem',
                      height: '6px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${displayStats[i]}%`,
                        height: '100%',
                        background: stat.color,
                        transition: 'width 1s ease'
                      }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Elite Team Section */}
          <div style={{ marginBottom: '8rem' }}>
            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              DEVELOPMENT TEAM
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem'
            }}>
              {teamMembers.map((member, i) => (
                <div key={i} className="glass-card" style={{
                  padding: '2.5rem',
                  textAlign: 'center',
                  animation: 'fadeInUp 0.8s ease-out',
                  animationDelay: `${i * 0.15}s`,
                  animationFillMode: 'backwards'
                }}>
                  <div style={{
                    fontSize: '5rem',
                    marginBottom: '1.5rem',
                    animation: 'float 4s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`,
                    filter: 'drop-shadow(0 10px 30px rgba(0, 240, 255, 0.3))'
                  }}>
                    {member.avatar}
                  </div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(135deg, #fff, #00f0ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {member.name}
                  </h3>

                  <div style={{
                    color: '#00f0ff',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '1rem'
                  }}>
                    {member.role}
                  </div>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {member.contribution}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {member.github && (
                    <a 
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: '1.5rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(0, 240, 255, 0.1)',
                        border: '2px solid rgba(0, 240, 255, 0.3)',
                        borderRadius: '999px',
                        color: '#00f0ff',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      <Github size={18} />
                      GitHub Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Battle Log - Phases */}
          <div style={{ marginBottom: '8rem' }}>
            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              24-HOUR BATTLE LOG
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2.5rem'
            }}>
              {phases.map((phase, i) => (
                <div
                  key={phase.id}
                  className="glass-card"
                  onClick={() => setActivePhase(phase.id)}
                  onMouseEnter={() => setHoveredId(phase.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    padding: '2.5rem',
                    cursor: 'pointer',
                    animation: 'slideInRight 0.8s ease-out',
                    animationDelay: `${i * 0.15}s`,
                    animationFillMode: 'backwards',
                    borderColor: hoveredId === phase.id ? phase.color : 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '2rem'
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      background: phase.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: hoveredId === phase.id ? `0 0 40px ${phase.color}` : 'none',
                      transition: 'all 0.4s'
                    }}>
                      <phase.icon size={40} style={{ color: '#000' }} />
                    </div>

                    <div style={{
                      padding: '0.5rem 1.2rem',
                      background: `${phase.color}20`,
                      border: `2px solid ${phase.color}`,
                      borderRadius: '999px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: phase.color,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      {phase.hour}
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    marginBottom: '1rem',
                    color: '#fff'
                  }}>
                    {phase.title}
                  </h3>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem'
                  }}>
                    {phase.desc}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                    padding: '1.5rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '12px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: phase.color, fontSize: '1.8rem', fontWeight: 800 }}>
                        {phase.metrics.linesOfCode}
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
                        Lines
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: phase.color, fontSize: '1.8rem', fontWeight: 800 }}>
                        {phase.metrics.apis}
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
                        APIs
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ color: phase.color, fontSize: '1.8rem', fontWeight: 800 }}>
                        {phase.metrics.tests}
                      </div>
                      <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem' }}>
                        Tests
                      </div>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {phase.techUsed.slice(0, 3).map((tech, idx) => (
                      <span key={idx} style={{
                        padding: '0.4rem 0.8rem',
                        background: `${phase.color}15`,
                        border: `1px solid ${phase.color}40`,
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: phase.color,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {tech}
                      </span>
                    ))}
                    {phase.techUsed.length > 3 && (
                      <span style={{
                        padding: '0.4rem 0.8rem',
                        background: `${phase.color}15`,
                        border: `1px solid ${phase.color}40`,
                        borderRadius: '6px',
                        fontSize: '0.85rem',
                        color: phase.color
                      }}>
                        +{phase.techUsed.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setActivePhase(phase.id)}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'transparent',
                      border: `2px solid ${phase.color}`,
                      borderRadius: '12px',
                      color: phase.color,
                      fontWeight: 700,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = phase.color;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = phase.color;
                    }}
                  >
                    View Details
                    <ArrowRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: '8rem' }}>
            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              TECHNOLOGY ARSENAL
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {techStack.map((tech, i) => (
                <div key={i} className="glass-card" style={{
                  padding: '2.5rem',
                  animation: 'scaleIn 0.8s ease-out',
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'backwards'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '16px',
                      background: `${tech.color}20`,
                      border: `2px solid ${tech.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <tech.icon size={36} style={{ color: tech.color }} />
                    </div>

                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: tech.color,
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                      {tech.proficiency}%
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    marginBottom: '0.5rem',
                    color: '#fff'
                  }}>
                    {tech.name}
                  </h3>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '0.95rem',
                    marginBottom: '1.5rem'
                  }}>
                    {tech.desc}
                  </p>

                  <div style={{
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      width: statsAnimated ? `${tech.proficiency}%` : '0%',
                      height: '100%',
                      background: tech.color,
                      transition: 'width 1.5s ease-out',
                      boxShadow: `0 0 10px ${tech.color}`
                    }} />
                  </div>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {tech.features.map((feature, idx) => (
                      <span key={idx} style={{
                        padding: '0.4rem 0.8rem',
                        background: 'rgba(0, 0, 0, 0.4)',
                        border: `1px solid ${tech.color}30`,
                        borderRadius: '6px',
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: '8rem' }}>
            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '4rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              MISSION TIMELINE
            </h2>

            <div style={{
              position: 'relative',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '4px',
                background: 'linear-gradient(180deg, #00f0ff, #a78bfa, #ff61d2, #10b981)',
                transform: 'translateX(-50%)',
                borderRadius: '2px'
              }} />

              {milestones.map((milestone, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '3rem',
                  position: 'relative',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse'
                }}>
                  <div style={{
                    width: '50%',
                    padding: i % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem',
                    textAlign: i % 2 === 0 ? 'right' : 'left'
                  }}>
                    <div className="glass-card" style={{
                      padding: '1.5rem',
                      animation: 'fadeInUp 0.8s ease-out',
                      animationDelay: `${i * 0.1}s`,
                      animationFillMode: 'backwards'
                    }}>
                      <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: i % 2 === 0 ? '#00f0ff' : '#ff61d2',
                        marginBottom: '0.5rem',
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {milestone.time}
                      </div>
                      <div style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '1rem'
                      }}>
                        {milestone.event}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: i % 2 === 0 ? '#00f0ff' : '#ff61d2',
                    border: '4px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    boxShadow: `0 0 30px ${i % 2 === 0 ? '#00f0ff' : '#ff61d2'}`
                  }}>
                    <milestone.icon size={24} style={{ color: '#000' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card holographic" style={{
            padding: '5rem 3rem',
            textAlign: 'center',
            marginBottom: '4rem',
            position: 'relative'
          }}>
            <div className="scanline" />

            <div style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(0, 240, 255, 0.2)',
              border: '2px solid rgba(0, 240, 255, 0.5)',
              borderRadius: '999px',
              marginBottom: '2rem',
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#00f0ff',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Let's Build Together
            </div>

            <h2 className="neon-text" style={{
              fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              READY FOR THE NEXT CHALLENGE?
            </h2>

            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: 1.6
            }}>
              From hackathon domination to production-grade applications, I bring enterprise-level MERN stack expertise, cloud architecture, and real-time systems to every project.
            </p>

            <div style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="https://github.com/bhagavan444"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.2rem 3rem',
                  background: 'rgba(0, 240, 255, 0.15)',
                  border: '2px solid rgba(0, 240, 255, 0.6)',
                  borderRadius: '12px',
                  color: '#00f0ff',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s',
                  fontFamily: "'Poppins', sans-serif"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 240, 255, 0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Github size={24} />
                View GitHub
              </a>

              <a
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, #00f0ff, #a78bfa)',
                  borderRadius: '12px',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s',
                  fontFamily: "'Poppins', sans-serif",
                  boxShadow: '0 10px 40px rgba(0, 240, 255, 0.4)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 60px rgba(0, 240, 255, 0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 240, 255, 0.4)';
                }}
              >
                <Mail size={24} />
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div
          onClick={() => setShowCertificate(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeInUp 0.3s ease-out'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '4px solid #ffd700',
              boxShadow: '0 0 100px rgba(255, 215, 0, 0.6)',
              animation: 'scaleIn 0.4s ease-out'
            }}
          >
            <button
              onClick={() => setShowCertificate(false)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(255, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <X size={32} strokeWidth={3} />
            </button>

            <img
              src={certificateImage}
              alt="Certificate"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />

            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <button
                onClick={handleCertificateDownload}
                style={{
                  padding: '1.2rem 3rem',
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#000',
                  fontWeight: 800,
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 10px 40px rgba(255, 215, 0, 0.6)'
                }}
              >
                <Download size={24} />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phase Detail Modal */}
      {activePhase !== null && (
        <div
          onClick={() => setActivePhase(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeInUp 0.3s ease-out'
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="glass-card"
            style={{
              maxWidth: '1200px',
              width: '95%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '3rem',
              position: 'relative',
              animation: 'scaleIn 0.4s ease-out'
            }}
          >
            <button
              onClick={() => setActivePhase(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(255, 0, 0, 0.3)',
                border: '2px solid rgba(255, 0, 0, 0.6)',
                color: '#ff4444',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
            >
              <X size={24} />
            </button>

            {(() => {
              const phase = phases[activePhase - 1];
              return (
                <>
                  <div style={{
                    textAlign: 'center',
                    marginBottom: '3rem'
                  }}>
                    <div style={{
                      width: '120px',
                      height: '120px',
                      margin: '0 auto 2rem',
                      borderRadius: '50%',
                      background: phase.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 60px ${phase.color}`
                    }}>
                      <phase.icon size={60} style={{ color: '#000' }} />
                    </div>

                    <div style={{
                      fontSize: '1.3rem',
                      color: phase.color,
                      fontWeight: 700,
                      marginBottom: '1rem',
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      {phase.hour}
                    </div>

                    <h2 style={{
                      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                      fontWeight: 900,
                      marginBottom: '1rem',
                      background: `linear-gradient(135deg, ${phase.color}, #ffffff)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {phase.title}
                    </h2>

                    <p style={{
                      fontSize: '1.2rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      lineHeight: 1.6
                    }}>
                      {phase.desc}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                      fontSize: '1.8rem',
                      color: phase.color,
                      marginBottom: '1.5rem',
                      fontWeight: 800
                    }}>
                      Key Achievements
                    </h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '1rem'
                    }}>
                      {phase.achievements.map((ach, idx) => (
                        <div key={idx} style={{
                          padding: '1.2rem',
                          background: `${phase.color}15`,
                          border: `2px solid ${phase.color}40`,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem'
                        }}>
                          <CheckCircle2 size={24} style={{ color: phase.color, flexShrink: 0 }} />
                          <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div style={{ marginBottom: '3rem' }}>
                    <h3 style={{
                      fontSize: '1.8rem',
                      color: phase.color,
                      marginBottom: '1.5rem',
                      fontWeight: 800
                    }}>
                      Technologies Used
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}>
                      {phase.techUsed.map((tech, idx) => (
                        <span key={idx} className="tech-badge" style={{
                          borderColor: phase.color,
                          color: phase.color
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                    gap: '2rem'
                  }}>
                    <div style={{
                      padding: '2rem',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '2px solid rgba(239, 68, 68, 0.3)',
                      borderRadius: '16px'
                    }}>
                      <h4 style={{
                        color: '#ef4444',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 700
                      }}>
                        <AlertCircle size={28} />
                        Challenge
                      </h4>
                      <p style={{ 
                        color: 'rgba(255, 255, 255, 0.8)', 
                        lineHeight: 1.6,
                        fontSize: '1.05rem'
                      }}>
                        {phase.challenges}
                      </p>
                    </div>

                    <div style={{
                      padding: '2rem',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '2px solid rgba(16, 185, 129, 0.3)',
                      borderRadius: '16px'
                    }}>
                      <h4 style={{
                        color: '#10b981',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 700
                      }}>
                        <Zap size={28} />
                        Solution
                      </h4>
                      <p style={{ 
                        color: 'rgba(255, 255, 255, 0.8)', 
                        lineHeight: 1.6,
                        fontSize: '1.05rem'
                      }}>
                        {phase.solutions}
                      </p>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </>
  );
}