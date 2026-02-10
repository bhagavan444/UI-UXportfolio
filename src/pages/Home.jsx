"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/bhagavanresume.pdf";

import { 
  Terminal, Download, Github, Linkedin, Mail, Phone, ChevronRight,
  Cpu, Database, Globe, Star, Brain, Code, Zap, Cloud, Layers, Server,
  Award, TrendingUp, Briefcase, Target, Rocket, Activity, Eye, Sparkles,
  Film, Play, ArrowRight, CheckCircle, Flame, Lightbulb, Shield, Users,
  BarChart3, GitBranch, BookOpen, Trophy, Calendar, ExternalLink, FileText,
  Code2, Box, Workflow, Maximize2, MessageSquare, Coffee, Headphones,
  Settings, Monitor, Smartphone, Lock, Unlock, Gauge, Binary, CircuitBoard,
  Fingerprint, Radar, Blocks, Network, Wifi, CheckCircle2, Sparkle, Clock,
  MousePointer2, Palette, Zap as Lightning, Command, Send, MapPin
} from "lucide-react";

export default function ModernDeveloperHome() {
  const navigate = useNavigate();
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [skillProgress, setSkillProgress] = useState({});
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [activeMetric, setActiveMetric] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [magneticElements, setMagneticElements] = useState([]);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVariant, setCursorVariant] = useState('default');
  
  const canvasRef = useRef(null);
  const observerRef = useRef(null);
  const heroRef = useRef(null);

  const roles = useMemo(() => [
    "ELITE FULL-STACK ENGINEER",
    "AI/ML ARCHITECT", 
    "CLOUD SYSTEMS EXPERT",
    "PRODUCTION-READY DEVELOPER",
    "INNOVATION CATALYST"
  ], []);

  const metrics = useMemo(() => [
    { 
      label: "Production Projects", 
      value: "15+", 
      icon: Rocket, 
      color: "#00f5ff",
      subtitle: "Enterprise-grade solutions",
      countUp: true
    },
    { 
      label: "Industry Certifications", 
      value: "20+", 
      icon: Award, 
      color: "#a855f7",
      subtitle: "AWS, Azure, Google Cloud",
      countUp: true
    },
    { 
      label: "Tech Stack Mastery", 
      value: "30+", 
      icon: Code2, 
      color: "#22c55e",
      subtitle: "Modern frameworks & tools",
      countUp: true
    },
    { 
      label: "Success Rate", 
      value: "100%", 
      icon: Target, 
      color: "#ffd700",
      subtitle: "On-time delivery guaranteed",
      countUp: false
    }
  ], []);

  const skills = useMemo(() => [
    { 
      name: "AI & Machine Learning", 
      level: 95, 
      icon: Brain, 
      color: "#a855f7",
      tech: "TensorFlow • PyTorch • Scikit-learn • NLP • Computer Vision • Deep Learning"
    },
    { 
      name: "Full-Stack Development", 
      level: 93, 
      icon: Code, 
      color: "#00f5ff",
      tech: "React • Node.js • Python • Next.js • TypeScript • REST/GraphQL • Microservices"
    },
    { 
      name: "Cloud & DevOps", 
      level: 90, 
      icon: Cloud, 
      color: "#FF9900",
      tech: "AWS • Azure • Docker • Kubernetes • CI/CD • Terraform • Jenkins"
    },
    { 
      name: "Data Structures & Algorithms", 
      level: 92, 
      icon: Terminal, 
      color: "#22c55e",
      tech: "LeetCode • System Design • Optimization • Competitive Programming"
    },
    { 
      name: "Database & Architecture", 
      level: 88, 
      icon: Database, 
      color: "#ffd700",
      tech: "PostgreSQL • MongoDB • Redis • Microservices • Scalable Systems • MySQL"
    }
  ], []);

  const achievements = useMemo(() => [
    { icon: Trophy, label: "Top 5% on LeetCode", color: "#ffd700", stat: "500+ Problems" },
    { icon: Award, label: "AWS Certified Solutions Architect", color: "#FF9900", stat: "Professional" },
    { icon: Star, label: "Azure AI Engineer", color: "#00a4ef", stat: "Expert Level" },
    { icon: CheckCircle2, label: "Google Cloud Professional", color: "#4285f4", stat: "Certified" },
    { icon: Flame, label: "365 Days Coding Streak", color: "#ff6b35", stat: "Active" },
    { icon: Target, label: "Zero Bug Production", color: "#22c55e", stat: "100% Quality" },
    { icon: GitBranch, label: "Open Source Contributor", color: "#fff", stat: "50+ PRs" },
    { icon: Users, label: "Mentored Developers", color: "#a855f7", stat: "20+ Students" }
  ], []);

  const techStack = useMemo(() => [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61dafb", category: "Frontend" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#68a063", category: "Backend" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776ab", category: "Backend" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178c6", category: "Language" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#f7df1e", category: "Language" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ed", category: "DevOps" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47a248", category: "Database" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791", category: "Database" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", color: "#ff6f00", category: "AI/ML" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", color: "#326ce5", category: "DevOps" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000", category: "Frontend" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#e10098", category: "API" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#dc382d", category: "Database" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#f05032", category: "Tools" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900", category: "Cloud" },
    { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", color: "#0089d6", category: "Cloud" }
  ], []);

  const testimonials = useMemo(() => [
    {
      text: "Exceptional developer with deep expertise in cloud architecture. Delivered our ML pipeline 2 weeks ahead of schedule.",
      author: "Sarah Chen",
      role: "CTO, TechVision Inc",
      avatar: "SC",
      color: "#00f5ff"
    },
    {
      text: "Rare combination of technical brilliance and communication skills. Best intern we've ever had.",
      author: "Michael Rodriguez",
      role: "Engineering Manager, CloudScale",
      avatar: "MR",
      color: "#a855f7"
    },
    {
      text: "Transformed our legacy systems into a modern microservices architecture. Truly impressive work.",
      author: "Priya Sharma",
      role: "VP Engineering, DataFlow",
      avatar: "PS",
      color: "#22c55e"
    }
  ], []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Real-time clock
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced particle system with interactive connections
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.color = ['#00f5ff', '#a855f7', '#ffd700'][Math.floor(Math.random() * 3)];
      }

      update(mouseX, mouseY) {
        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          this.x -= (dx / dist) * force * 2;
          this.y -= (dy / dist) * force * 2;
        }

        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        this.pulsePhase += this.pulseSpeed;
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * pulse);
        gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * pulse * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${this.color}00`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 245, 255, ${(1 - dist / 150) * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      particles.forEach(p => { 
        p.update(mousePos.x, mousePos.y); 
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
  }, [mousePos]);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const role = roles[roleIndex];
    let char = 0;
    
    const interval = setInterval(() => {
      if (char <= role.length) {
        setTypedText(role.slice(0, char));
        char++;
      } else {
        clearInterval(interval);
        setTimeout(() => setRoleIndex((prev) => (prev + 1) % roles.length), 1500);
      }
    }, 70);
    
    return () => clearInterval(interval);
  }, [roleIndex, roles]);

  // Scroll handler with performance optimization
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress((scrolled / maxScroll) * 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-observe]').forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // Skill animation
  useEffect(() => {
    if (visibleSections.has('skills')) {
      skills.forEach((skill, i) => {
        setTimeout(() => {
          setSkillProgress(prev => ({ ...prev, [skill.name]: skill.level }));
        }, 100 + i * 150);
      });
    }
  }, [visibleSections, skills]);

  // Metric rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [metrics.length]);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNavigation = useCallback((path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Roboto+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * { margin:0; padding:0; box-sizing:border-box; }
        
        body { 
          font-family:'Inter', 'Poppins', sans-serif; 
          background:#000; 
          color:#fff; 
          overflow-x:hidden;
          -webkit-font-smoothing:antialiased;
          cursor:none;
        }

        .custom-cursor {
          position:fixed;
          width:24px;
          height:24px;
          border:2px solid #00f5ff;
          border-radius:50%;
          pointer-events:none;
          z-index:10001;
          transition:all 0.2s cubic-bezier(0.16,1,0.3,1);
          mix-blend-mode:difference;
        }

        .custom-cursor.hover {
          width:50px;
          height:50px;
          background:rgba(0,245,255,0.1);
          border-color:#a855f7;
        }

        .custom-cursor-dot {
          position:fixed;
          width:6px;
          height:6px;
          background:#00f5ff;
          border-radius:50%;
          pointer-events:none;
          z-index:10002;
          box-shadow:0 0 15px #00f5ff;
          transition:transform 0.15s cubic-bezier(0.16,1,0.3,1);
        }

        @keyframes fadeIn {
          from { opacity:0; transform:translateY(40px); }
          to { opacity:1; transform:translateY(0); }
        }

        @keyframes slideIn {
          from { opacity:0; transform:translateX(-60px); }
          to { opacity:1; transform:translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity:0; transform:scale(0.85); }
          to { opacity:1; transform:scale(1); }
        }

        @keyframes float {
          0%, 100% { transform:translateY(0) rotate(0deg); }
          50% { transform:translateY(-25px) rotate(2deg); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
        }

        @keyframes cursor {
          0%, 50% { opacity:1; }
          51%, 100% { opacity:0; }
        }

        @keyframes pulse {
          0%, 100% { transform:scale(1); opacity:1; }
          50% { transform:scale(1.08); opacity:0.7; }
        }

        @keyframes slideUp {
          from { opacity:0; transform:translateY(30px); }
          to { opacity:1; transform:translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position:-1000px 0; }
          100% { background-position:1000px 0; }
        }

        @keyframes rotate {
          from { transform:rotate(0deg); }
          to { transform:rotate(360deg); }
        }

        @keyframes bounce {
          0%, 100% { transform:translateY(0); }
          50% { transform:translateY(-15px); }
        }

        @keyframes ripple {
          0% { transform:scale(1); opacity:1; }
          100% { transform:scale(1.5); opacity:0; }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow:0 0 20px currentColor; }
          50% { box-shadow:0 0 40px currentColor, 0 0 60px currentColor; }
        }

        @keyframes slide-in-left {
          from { opacity:0; transform:translateX(-100px); }
          to { opacity:1; transform:translateX(0); }
        }

        @keyframes slide-in-right {
          from { opacity:0; transform:translateX(100px); }
          to { opacity:1; transform:translateX(0); }
        }

        @keyframes loading-spinner {
          0% { transform:rotate(0deg); }
          100% { transform:rotate(360deg); }
        }

        .glass {
          background:rgba(255,255,255,0.04);
          backdrop-filter:blur(30px) saturate(180%);
          border:1px solid rgba(255,255,255,0.12);
          border-radius:24px;
          transition:all 0.4s cubic-bezier(0.16,1,0.3,1);
          position:relative;
          overflow:hidden;
        }

        .glass::before {
          content:'';
          position:absolute;
          top:0;
          left:-100%;
          width:100%;
          height:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition:left 0.6s;
        }

        .glass:hover::before {
          left:100%;
        }

        .glass:hover {
          background:rgba(255,255,255,0.08);
          border-color:rgba(0,245,255,0.5);
          transform:translateY(-10px) scale(1.02);
          box-shadow:0 30px 70px rgba(0,0,0,0.7), 0 0 50px rgba(0,245,255,0.4);
        }

        .glass-strong {
          background:rgba(255,255,255,0.08);
          backdrop-filter:blur(40px) saturate(200%);
          border:1px solid rgba(255,255,255,0.2);
        }

        .btn-primary {
          background:linear-gradient(135deg, #00f5ff, #00c4ff);
          border:none;
          color:#000;
          font-weight:800;
          padding:1.2rem 2.8rem;
          border-radius:14px;
          cursor:pointer;
          font-family:'Rajdhani',sans-serif;
          text-transform:uppercase;
          letter-spacing:2px;
          font-size:1rem;
          transition:all 0.4s cubic-bezier(0.16,1,0.3,1);
          display:inline-flex;
          align-items:center;
          gap:0.7rem;
          text-decoration:none;
          position:relative;
          overflow:hidden;
          box-shadow:0 10px 30px rgba(0,245,255,0.3);
        }

        .btn-primary::before {
          content:'';
          position:absolute;
          top:0;
          left:-100%;
          width:100%;
          height:100%;
          background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition:left 0.6s;
        }

        .btn-primary:hover::before {
          left:100%;
        }

        .btn-primary:hover {
          transform:translateY(-5px) scale(1.05);
          box-shadow:0 20px 50px rgba(0,245,255,0.6);
        }

        .btn-outline {
          background:transparent;
          border:2px solid currentColor;
          color:currentColor;
          font-weight:700;
          padding:1.2rem 2.8rem;
          border-radius:14px;
          cursor:pointer;
          font-family:'Rajdhani',sans-serif;
          text-transform:uppercase;
          letter-spacing:2px;
          font-size:1rem;
          transition:all 0.4s cubic-bezier(0.16,1,0.3,1);
          display:inline-flex;
          align-items:center;
          gap:0.7rem;
          text-decoration:none;
          position:relative;
          overflow:hidden;
        }

        .btn-outline::before {
          content:'';
          position:absolute;
          top:50%;
          left:50%;
          width:0;
          height:0;
          background:currentColor;
          border-radius:50%;
          transform:translate(-50%, -50%);
          transition:width 0.6s, height 0.6s;
        }

        .btn-outline:hover::before {
          width:400%;
          height:400%;
        }

        .btn-outline:hover {
          color:#000;
          transform:translateY(-5px) scale(1.05);
          box-shadow:0 20px 50px rgba(0,0,0,0.4);
        }

        .btn-outline span {
          position:relative;
          z-index:1;
        }

        .gradient-text {
          background:linear-gradient(135deg, #00f5ff 0%, #a855f7 35%, #ff6b35 65%, #ffd700 100%);
          background-size:250% 250%;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          animation:gradient-shift 5s ease infinite;
        }

        .fade-in { animation:fadeIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        .slide-in { animation:slideIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        .scale-in { animation:scaleIn 0.9s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }
        .slide-up { animation:slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }

        .delay-1 { animation-delay:0.1s; }
        .delay-2 { animation-delay:0.2s; }
        .delay-3 { animation-delay:0.3s; }
        .delay-4 { animation-delay:0.4s; }
        .delay-5 { animation-delay:0.5s; }
        .delay-6 { animation-delay:0.6s; }
        .delay-7 { animation-delay:0.7s; }
        .delay-8 { animation-delay:0.8s; }

        ::-webkit-scrollbar { width:12px; }
        ::-webkit-scrollbar-track { background:#000; }
        ::-webkit-scrollbar-thumb { 
          background:linear-gradient(180deg, #00f5ff, #a855f7); 
          border-radius:6px;
        }
        ::-webkit-scrollbar-thumb:hover { 
          background:linear-gradient(180deg, #00c4ff, #8b3fc7); 
        }

        .loading-screen {
          position:fixed;
          inset:0;
          background:#000;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:10000;
          transition:opacity 0.5s, visibility 0.5s;
        }

        .loading-screen.hidden {
          opacity:0;
          visibility:hidden;
        }

        .tech-category-badge {
          position:absolute;
          top:8px;
          right:8px;
          padding:0.3rem 0.6rem;
          background:rgba(0,0,0,0.7);
          border:1px solid currentColor;
          border-radius:6px;
          font-size:0.65rem;
          font-weight:700;
          text-transform:uppercase;
          letter-spacing:0.5px;
        }

        @media(max-width:1024px) {
          body { cursor:auto; }
          .custom-cursor, .custom-cursor-dot { display:none; }
          .hero-grid { grid-template-columns:1fr!important; gap:3rem!important; }
          .profile-card { order:-1; max-width:100%!important; }
          .tech-stack-grid { grid-template-columns:repeat(3, 1fr)!important; }
          .achievement-grid { grid-template-columns:repeat(2, 1fr)!important; }
        }

        @media(max-width:768px) {
          h1 { font-size:2.5rem!important; }
          .btn-primary, .btn-outline { padding:1rem 2rem!important; font-size:0.9rem!important; }
          .tech-stack-grid { grid-template-columns:repeat(2, 1fr)!important; }
          .achievement-grid { grid-template-columns:1fr!important; }
        }
      `}</style>

      {/* Loading Screen */}
      <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
        <div style={{ textAlign:'center' }}>
          <div style={{
            width:'80px',
            height:'80px',
            border:'4px solid rgba(0,245,255,0.2)',
            borderTop:'4px solid #00f5ff',
            borderRadius:'50%',
            animation:'loading-spinner 1s linear infinite',
            margin:'0 auto 1.5rem'
          }} />
          <div style={{
            fontSize:'1.2rem',
            fontWeight:700,
            color:'#00f5ff',
            fontFamily:"'Roboto Mono',monospace",
            letterSpacing:'3px'
          }}>
            INITIALIZING...
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${cursorVariant === 'hover' ? 'hover' : ''}`}
        style={{ 
          left: mousePos.x - (cursorVariant === 'hover' ? 25 : 12), 
          top: mousePos.y - (cursorVariant === 'hover' ? 25 : 12)
        }} 
      />
      <div 
        className="custom-cursor-dot" 
        style={{ 
          left: mousePos.x - 3, 
          top: mousePos.y - 3 
        }} 
      />

      <div style={{ 
        background:'#0a0a14', 
        minHeight:"100vh",
        position:"relative",
        overflow:"hidden"
      }}>
        
        {/* Enhanced Progress Bar with Gradient */}
        <div style={{
          position:"fixed",
          top:0,
          left:0,
          right:0,
          height:"5px",
          background:"rgba(255,255,255,0.05)",
          zIndex:10000
        }}>
          <div style={{
            width:`${scrollProgress}%`,
            height:"100%",
            background:"linear-gradient(90deg, #00f5ff, #a855f7, #ffd700, #00f5ff)",
            backgroundSize:"200% 100%",
            transition:"width 0.1s",
            boxShadow:"0 0 25px rgba(0,245,255,0.8)",
            animation:"gradient-shift 3s linear infinite"
          }} />
        </div>

        {/* Canvas */}
        <canvas 
          ref={canvasRef} 
          style={{ 
            position:'fixed', 
            inset:0, 
            pointerEvents:'none', 
            zIndex:1,
            opacity:0.7
          }} 
        />

        {/* Enhanced Gradient Overlay */}
        <div style={{
          position:"fixed",
          inset:0,
          background:`
            radial-gradient(circle at 20% 80%, rgba(0,245,255,0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168,85,247,0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255,215,0,0.08) 0%, transparent 70%)
          `,
          pointerEvents:"none",
          zIndex:2
        }} />

        {/* Floating Shapes Background */}
        <div style={{
          position:"fixed",
          inset:0,
          pointerEvents:"none",
          zIndex:1
        }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{
              position:"absolute",
              width:`${100 + i * 50}px`,
              height:`${100 + i * 50}px`,
              background:`radial-gradient(circle, ${['#00f5ff', '#a855f7', '#ffd700'][i % 3]}20, transparent)`,
              borderRadius:"50%",
              top:`${20 + i * 15}%`,
              left:`${10 + i * 20}%`,
              animation:`float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay:`${i * 0.5}s`,
              opacity:0.3
            }} />
          ))}
        </div>

        {/* Content */}
        <div style={{ 
          maxWidth:"1400px", 
          margin:"0 auto", 
          padding:"0 2rem", 
          position:"relative", 
          zIndex:10 
        }}>
          
          {/* HERO SECTION */}
          <section ref={heroRef} style={{ 
            minHeight:"100vh", 
            display:"grid", 
            gridTemplateColumns:"1fr 1.2fr", 
            gap:"5rem", 
            alignItems:"center",
            paddingTop:"5rem"
          }} className="hero-grid">
            
            {/* Enhanced Profile Card - LEFT SIDE */}
            <div className="profile-card scale-in delay-2" style={{
              position:"relative",
              maxWidth:"450px",
              margin:"0 auto"
            }}>
              <div style={{
                position:"relative",
                aspectRatio:"4/5",
                animation:"float 6s ease-in-out infinite"
              }}>
                {/* Glowing Animated Corners */}
                {[
                  { top:"-15px", left:"-15px", borderTop:"5px solid #00f5ff", borderLeft:"5px solid #00f5ff", boxShadow:"0 0 25px #00f5ff" },
                  { top:"-15px", right:"-15px", borderTop:"5px solid #a855f7", borderRight:"5px solid #a855f7", boxShadow:"0 0 25px #a855f7" },
                  { bottom:"-15px", left:"-15px", borderBottom:"5px solid #22c55e", borderLeft:"5px solid #22c55e", boxShadow:"0 0 25px #22c55e" },
                  { bottom:"-15px", right:"-15px", borderBottom:"5px solid #ffd700", borderRight:"5px solid #ffd700", boxShadow:"0 0 25px #ffd700" }
                ].map((c, i) => (
                  <div key={i} style={{
                    position:"absolute",
                    width:"40px",
                    height:"40px",
                    ...c,
                    animation:"pulse 3s ease-in-out infinite",
                    animationDelay:`${i * 0.3}s`,
                    zIndex:3
                  }} />
                ))}

                {/* Image Container */}
                <div style={{
                  position:"relative",
                  width:"100%",
                  height:"100%",
                  borderRadius:"24px",
                  overflow:"hidden",
                  border:"4px solid rgba(0,245,255,0.6)",
                  boxShadow:"0 0 80px rgba(0,245,255,0.5), inset 0 0 40px rgba(0,245,255,0.15)",
                  zIndex:1
                }}>
                  <img src={profileImg} alt="Profile" style={{
                    width:"100%",
                    height:"100%",
                    objectFit:"cover",
                    filter:"brightness(1.05) contrast(1.1)"
                  }} />

                  {/* Gradient Overlay */}
                  <div style={{
                    position:"absolute",
                    inset:0,
                    background:"linear-gradient(to top, rgba(0,0,0,0.96) 0%, transparent 70%)"
                  }} />

                  {/* Tech Badges with Enhanced Design */}
                  {[
                    { icon:Brain, label:"AI/ML", color:"#a855f7", pos:{ top:"20px", left:"20px" } },
                    { icon:Code, label:"Full-Stack", color:"#00f5ff", pos:{ top:"20px", right:"20px" } },
                    { icon:Database, label:"Databases", color:"#22c55e", pos:{ bottom:"160px", left:"20px" } },
                    { icon:Cloud, label:"Cloud", color:"#FF9900", pos:{ bottom:"160px", right:"20px" } }
                  ].map((b, i) => (
                    <div key={i} style={{
                      position:"absolute",
                      ...b.pos,
                      width:"60px",
                      height:"60px",
                      background:"rgba(0,0,0,0.95)",
                      border:`3px solid ${b.color}`,
                      borderRadius:"14px",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      color:b.color,
                      boxShadow:`0 0 25px ${b.color}70, inset 0 0 15px ${b.color}20`,
                      animation:"pulse 2.5s ease-in-out infinite",
                      animationDelay:`${i * 0.2}s`,
                      backdropFilter:"blur(10px)"
                    }}>
                      <b.icon size={28} />
                    </div>
                  ))}

                  {/* Enhanced Bottom Section */}
                  <div style={{
                    position:"absolute",
                    bottom:0,
                    left:0,
                    right:0,
                    background:"linear-gradient(to top, rgba(0,0,0,0.99), rgba(0,0,0,0.9))",
                    borderTop:"3px solid #00f5ff",
                    padding:"1.5rem",
                    boxShadow:"0 -15px 40px rgba(0,245,255,0.3)",
                    backdropFilter:"blur(20px)"
                  }}>
                    {/* Status Bar */}
                    <div style={{
                      display:"flex",
                      justifyContent:"space-between",
                      alignItems:"center",
                      marginBottom:"1.2rem",
                      gap:"1rem",
                      flexWrap:"wrap"
                    }}>
                      {/* Available Badge */}
                      <div style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"0.6rem",
                        background:"rgba(34,197,94,0.25)",
                        border:"2px solid #22c55e",
                        borderRadius:"25px",
                        padding:"0.6rem 1.2rem",
                        flex:"1",
                        minWidth:"150px",
                        boxShadow:"0 0 20px rgba(34,197,94,0.3)"
                      }}>
                        <div style={{
                          width:"10px",
                          height:"10px",
                          borderRadius:"50%",
                          background:"#22c55e",
                          boxShadow:"0 0 15px #22c55e",
                          animation:"pulse 2s ease-in-out infinite"
                        }} />
                        <span style={{
                          fontSize:"0.8rem",
                          color:"#22c55e",
                          fontWeight:800,
                          fontFamily:"'Roboto Mono',monospace",
                          textShadow:"0 0 15px #22c55e",
                          letterSpacing:"1px"
                        }}>
                          AVAILABLE
                        </span>
                      </div>

                      {/* Live Clock */}
                      <div style={{
                        display:"flex",
                        alignItems:"center",
                        gap:"0.6rem",
                        background:"rgba(0,245,255,0.25)",
                        border:"2px solid #00f5ff",
                        borderRadius:"25px",
                        padding:"0.6rem 1.2rem",
                        boxShadow:"0 0 20px rgba(0,245,255,0.3)"
                      }}>
                        <Clock size={16} style={{ color:"#00f5ff" }} />
                        <span style={{
                          fontSize:"0.8rem",
                          color:"#00f5ff",
                          fontWeight:800,
                          fontFamily:"'Roboto Mono',monospace",
                          letterSpacing:"0.5px"
                        }}>
                          {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                        </span>
                      </div>
                    </div>

                    {/* Enhanced Tags */}
                    <div style={{
                      display:"flex",
                      gap:"0.7rem",
                      marginBottom:"1.2rem",
                      flexWrap:"wrap"
                    }}>
                      {["AI/ML", "Cloud", "Full-Stack"].map((t, i) => (
                        <span key={i} style={{
                          padding:"0.4rem 0.9rem",
                          background:"rgba(0,245,255,0.3)",
                          border:"1.5px solid #00f5ff",
                          borderRadius:"8px",
                          fontSize:"0.75rem",
                          color:"#00f5ff",
                          fontWeight:800,
                          boxShadow:"0 0 15px rgba(0,245,255,0.4)",
                          letterSpacing:"0.5px"
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced CTA Button */}
                    <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      gap:"0.7rem",
                      padding:"1rem",
                      background:"linear-gradient(135deg, #00f5ff, #00c4ff)",
                      borderRadius:"12px",
                      color:"#000",
                      fontWeight:900,
                      fontSize:"0.95rem",
                      textDecoration:"none",
                      transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      boxShadow:"0 8px 25px rgba(0,245,255,0.5)",
                      letterSpacing:"1px"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,245,255,0.7)";
                      setCursorVariant('hover');
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,245,255,0.5)";
                      setCursorVariant('default');
                    }}>
                      <Send size={20} />
                      HIRE ME NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - RIGHT SIDE */}
            <div>
              {/* Enhanced Status Badge */}
              <div className="fade-in delay-1" style={{
                display:"inline-flex",
                alignItems:"center",
                gap:"0.8rem",
                background:"linear-gradient(135deg, rgba(0,245,255,0.2), rgba(168,85,247,0.2))",
                border:"2px solid rgba(0,245,255,0.5)",
                borderRadius:"35px",
                padding:"0.8rem 1.8rem",
                marginBottom:"2rem",
                fontFamily:"'Roboto Mono',monospace",
                fontSize:"0.9rem",
                fontWeight:800,
                color:"#00f5ff",
                boxShadow:"0 0 30px rgba(0,245,255,0.4)",
                letterSpacing:"1px"
              }}>
                <Sparkles size={18} style={{ animation:"pulse 2s ease-in-out infinite" }} />
                2026 GRADUATE • IMMEDIATE JOINER
              </div>

              {/* Enhanced Name */}
              <h1 className="fade-in delay-2" style={{
                fontSize:"clamp(2.5rem, 7vw, 6rem)",
                fontWeight:900,
                lineHeight:1.05,
                marginBottom:"1.2rem",
                fontFamily:"'Orbitron',sans-serif",
                letterSpacing:"-0.03em"
              }}>
                <span style={{ color:'#fff', display:'block' }}>SIVA SATYA SAI</span>
                <span className="gradient-text" style={{ display:'block' }}>BHAGAVAN</span>
              </h1>

              {/* Enhanced Role with Animation */}
              <div className="fade-in delay-3" style={{
                fontSize:"clamp(1.2rem, 2.5vw, 2.2rem)",
                fontWeight:800,
                marginBottom:"1.8rem",
                fontFamily:"'Roboto Mono',monospace",
                color:"#00f5ff",
                minHeight:"3.5rem",
                display:"flex",
                alignItems:"center",
                textShadow:"0 0 40px rgba(0,245,255,0.6)"
              }}>
                &lt; {typedText}
                <span style={{
                  width:'4px',
                  height:'1.4em',
                  background:'#00f5ff',
                  marginLeft:'12px',
                  animation:'cursor 1s step-end infinite',
                  boxShadow:"0 0 15px #00f5ff"
                }} />
                &nbsp;/&gt;
              </div>

              {/* Enhanced Description */}
              <p className="fade-in delay-4" style={{
                fontSize:"1.2rem",
                lineHeight:1.9,
                color:"#c5c5c5",
                maxWidth:"750px",
                marginBottom:"3rem"
              }}>
                <strong style={{ color:'#fff', fontWeight:800 }}>Elite software engineer</strong> with{' '}
                <span style={{ color:'#00f5ff', fontWeight:700 }}>proven enterprise experience</span> across{' '}
                <strong style={{ color:'#fff' }}>3 industry internships</strong> at leading tech companies.
                Specialized in <span style={{ color:'#a855f7', fontWeight:700 }}>AI/ML systems</span> and{' '}
                <span style={{ color:'#22c55e', fontWeight:700 }}>scalable cloud architecture</span>.
                Delivered <strong style={{ color:'#fff' }}>15+ production-grade projects</strong> with{' '}
                <span style={{ color:'#ffd700', fontWeight:700 }}>100% client satisfaction</span>.
                Armed with <strong style={{ color:'#fff' }}>20+ industry certifications</strong> from 
                AWS, Azure, and Google Cloud.
              </p>

              {/* Enhanced Buttons */}
              <div className="fade-in delay-5" style={{
                display:"flex",
                gap:"1.5rem",
                marginBottom:"3.5rem",
                flexWrap:"wrap"
              }}>
                <button 
                  onClick={() => handleNavigation('/projects')} 
                  className="btn-primary"
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Rocket size={22} />
                  <span>VIEW PROJECTS</span>
                </button>
                <a 
                  href={resumePdf} 
                  download="Bhagavan_Resume.pdf" 
                  className="btn-outline" 
                  style={{ color:"#00f5ff" }}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <Download size={22} />
                  <span>DOWNLOAD RESUME</span>
                </a>
              </div>

              {/* Enhanced Social Links */}
              <div className="fade-in delay-6" style={{
                display:"flex",
                gap:"1.3rem"
              }}>
                {[
                  { icon:Github, href:"https://github.com/bhagavan444", color:"#fff", label:"GitHub" },
                  { icon:Linkedin, href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/", color:"#00f5ff", label:"LinkedIn" },
                  { icon:Mail, href:"mailto:g.sivasatyasaibhagavan@gmail.com", color:"#a855f7", label:"Email" },
                  { icon:Phone, href:"tel:+917569205626", color:"#22c55e", label:"Phone" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    style={{
                      width:"56px",
                      height:"56px",
                      background:"rgba(0,0,0,0.7)",
                      border:`3px solid ${social.color}`,
                      borderRadius:"50%",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      color:social.color,
                      transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
                      textDecoration:"none",
                      position:"relative",
                      boxShadow:`0 0 15px ${social.color}40`
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = social.color;
                      e.currentTarget.style.color = "#000";
                      e.currentTarget.style.transform = "scale(1.35) translateY(-10px)";
                      e.currentTarget.style.boxShadow = `0 15px 40px ${social.color}90`;
                      setCursorVariant('hover');
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(0,0,0,0.7)";
                      e.currentTarget.style.color = social.color;
                      e.currentTarget.style.transform = "scale(1) translateY(0)";
                      e.currentTarget.style.boxShadow = `0 0 15px ${social.color}40`;
                      setCursorVariant('default');
                    }}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ENHANCED METRICS SECTION */}
          <section id="metrics" data-observe style={{ padding:"6rem 0" }}>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",
              gap:"2.5rem"
            }}>
              {metrics.map((m, i) => (
                <div key={i} className={`glass ${visibleSections.has('metrics') ? 'fade-in' : ''}`} style={{
                  padding:"3rem",
                  textAlign:"center",
                  animationDelay:`${i * 0.15}s`,
                  opacity:visibleSections.has('metrics') ? 1 : 0,
                  position:"relative"
                }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}>
                  {/* Active Glow Effect */}
                  {activeMetric === i && (
                    <div style={{
                      position:"absolute",
                      inset:"-3px",
                      background:`linear-gradient(135deg, ${m.color}50, transparent)`,
                      borderRadius:"24px",
                      zIndex:-1,
                      animation:"pulse 2s ease-in-out infinite"
                    }} />
                  )}
                  
                  <div style={{
                    width:"80px",
                    height:"80px",
                    margin:"0 auto 1.5rem",
                    background:`${m.color}30`,
                    border:`4px solid ${m.color}`,
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:m.color,
                    boxShadow:`0 0 40px ${m.color}70`,
                    animation:"float 5s ease-in-out infinite",
                    animationDelay:`${i * 0.3}s`
                  }}>
                    <m.icon size={36} />
                  </div>
                  <div style={{
                    fontSize:"3.5rem",
                    fontWeight:900,
                    color:m.color,
                    marginBottom:"1rem",
                    fontFamily:"'Orbitron',sans-serif",
                    textShadow:`0 0 30px ${m.color}90`,
                    letterSpacing:"-0.02em"
                  }}>
                    {m.value}
                  </div>
                  <div style={{
                    fontSize:"1.15rem",
                    fontWeight:800,
                    color:"#fff",
                    textTransform:"uppercase",
                    fontFamily:"'Rajdhani',sans-serif",
                    marginBottom:"0.6rem",
                    letterSpacing:"1.5px"
                  }}>
                    {m.label}
                  </div>
                  <div style={{
                    fontSize:"0.9rem",
                    color:"#aaa",
                    fontWeight:600
                  }}>
                    {m.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ENHANCED ACHIEVEMENTS */}
          <section id="achievements" data-observe style={{ padding:"4rem 0" }}>
            <h2 style={{
              fontSize:"clamp(2rem, 4vw, 3.5rem)",
              fontWeight:900,
              marginBottom:"1.5rem",
              textAlign:"center",
              fontFamily:"'Orbitron',sans-serif"
            }}>
              <span className="gradient-text">Achievements & Certifications</span>
            </h2>
            <p style={{
              textAlign:"center",
              fontSize:"1.15rem",
              color:"#999",
              marginBottom:"3.5rem",
              maxWidth:"700px",
              margin:"0 auto 3.5rem"
            }}>
              Recognition and expertise validated by industry leaders
            </p>
            <div className="achievement-grid" style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",
              gap:"2rem"
            }}>
              {achievements.map((ach, i) => (
                <div key={i} className={`glass ${visibleSections.has('achievements') ? 'scale-in' : ''}`} style={{
                  padding:"2rem",
                  display:"flex",
                  flexDirection:"column",
                  gap:"1rem",
                  opacity:visibleSections.has('achievements') ? 1 : 0,
                  animationDelay:`${i * 0.1}s`
                }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}>
                  <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"1.2rem"
                  }}>
                    <div style={{
                      width:"56px",
                      height:"56px",
                      minWidth:"56px",
                      background:`${ach.color}25`,
                      border:`3px solid ${ach.color}`,
                      borderRadius:"14px",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      color:ach.color,
                      boxShadow:`0 0 25px ${ach.color}50`
                    }}>
                      <ach.icon size={26} />
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{
                        fontSize:"1.05rem",
                        fontWeight:800,
                        color:"#fff",
                        fontFamily:"'Rajdhani',sans-serif",
                        marginBottom:"0.3rem",
                        letterSpacing:"0.5px"
                      }}>
                        {ach.label}
                      </div>
                      <div style={{
                        fontSize:"0.85rem",
                        color:ach.color,
                        fontWeight:700,
                        fontFamily:"'Roboto Mono',monospace"
                      }}>
                        {ach.stat}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECH STACK WITH CATEGORIES */}
          <section id="techstack" data-observe style={{ padding:"5rem 0" }}>
            <h2 style={{
              fontSize:"clamp(2rem, 4vw, 3.5rem)",
              fontWeight:900,
              marginBottom:"1.5rem",
              textAlign:"center",
              fontFamily:"'Orbitron',sans-serif"
            }}>
              <span className="gradient-text">Technology Arsenal</span>
            </h2>
            <p style={{
              textAlign:"center",
              fontSize:"1.15rem",
              color:"#999",
              marginBottom:"4rem",
              maxWidth:"700px",
              margin:"0 auto 4rem"
            }}>
              Mastery across the modern tech ecosystem
            </p>
            <div className="tech-stack-grid" style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",
              gap:"2rem",
              maxWidth:"1100px",
              margin:"0 auto"
            }}>
              {techStack.map((tech, i) => (
                <div key={i} className={`glass ${visibleSections.has('techstack') ? 'fade-in' : ''}`} style={{
                  padding:"2rem 1.5rem",
                  textAlign:"center",
                  opacity:visibleSections.has('techstack') ? 1 : 0,
                  animationDelay:`${i * 0.05}s`,
                  transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  position:"relative"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.08)";
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${tech.color}60`;
                  setCursorVariant('hover');
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                  setCursorVariant('default');
                }}>
                  {/* Category Badge */}
                  <div className="tech-category-badge" style={{ color:tech.color }}>
                    {tech.category}
                  </div>
                  
                  <div style={{
                    width:"70px",
                    height:"70px",
                    margin:"0 auto 1.2rem",
                    background:`${tech.color}20`,
                    border:`2.5px solid ${tech.color}50`,
                    borderRadius:"14px",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    padding:"1rem",
                    transition:"all 0.4s"
                  }}>
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      style={{
                        width:"100%",
                        height:"100%",
                        objectFit:"contain",
                        filter: tech.name === "Next.js" ? "invert(1)" : "none"
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement.innerHTML = `<div style="font-size:1.8rem;font-weight:900;color:${tech.color}">${tech.name.charAt(0)}</div>`;
                      }}
                    />
                  </div>
                  <div style={{
                    fontSize:"1.05rem",
                    fontWeight:800,
                    color:"#fff",
                    fontFamily:"'Rajdhani',sans-serif",
                    letterSpacing:"0.8px"
                  }}>
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ENHANCED SKILLS */}
          <section id="skills" data-observe style={{ padding:"6rem 0" }}>
            <h2 style={{
              fontSize:"clamp(2rem, 4vw, 3.5rem)",
              fontWeight:900,
              marginBottom:"1.5rem",
              textAlign:"center",
              fontFamily:"'Orbitron',sans-serif"
            }}>
              <span className="gradient-text">Elite Technical Arsenal</span>
            </h2>
            <p style={{
              textAlign:"center",
              fontSize:"1.15rem",
              color:"#999",
              marginBottom:"4.5rem",
              maxWidth:"700px",
              margin:"0 auto 4.5rem"
            }}>
              Battle-tested expertise in cutting-edge technologies and frameworks
            </p>

            <div style={{
              maxWidth:"1100px",
              margin:"0 auto",
              display:"flex",
              flexDirection:"column",
              gap:"3rem"
            }}>
              {skills.map((s, i) => (
                <div key={i} className={`glass ${visibleSections.has('skills') ? 'slide-in' : ''}`} style={{
                  padding:"3rem",
                  opacity:visibleSections.has('skills') ? 1 : 0,
                  animationDelay:`${i * 0.15}s`,
                  position:"relative"
                }}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}>
                  <div style={{
                    display:"flex",
                    alignItems:"flex-start",
                    gap:"2rem",
                    marginBottom:"1.8rem"
                  }}>
                    <div style={{
                      width:"70px",
                      height:"70px",
                      minWidth:"70px",
                      background:`${s.color}30`,
                      border:`3px solid ${s.color}`,
                      borderRadius:"16px",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      color:s.color,
                      boxShadow:`0 0 30px ${s.color}70`
                    }}>
                      <s.icon size={32} />
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{
                        display:"flex",
                        justifyContent:"space-between",
                        alignItems:"center",
                        marginBottom:"1rem",
                        flexWrap:"wrap",
                        gap:"1.5rem"
                      }}>
                        <span style={{
                          fontSize:"1.5rem",
                          fontWeight:900,
                          color:"#fff",
                          fontFamily:"'Rajdhani',sans-serif",
                          letterSpacing:"1px"
                        }}>
                          {s.name}
                        </span>
                        <div style={{ display:"flex", alignItems:"center", gap:"1.2rem" }}>
                          <span style={{
                            fontFamily:"'Roboto Mono',monospace",
                            fontSize:"1.4rem",
                            color:s.color,
                            fontWeight:900,
                            textShadow:`0 0 15px ${s.color}70`
                          }}>
                            {skillProgress[s.name] || 0}%
                          </span>
                          <div style={{
                            padding:"0.5rem 1rem",
                            background:`${s.color}25`,
                            border:`2px solid ${s.color}`,
                            borderRadius:"8px",
                            fontSize:"0.8rem",
                            color:s.color,
                            fontWeight:800,
                            boxShadow:`0 0 15px ${s.color}40`
                          }}>
                            EXPERT
                          </div>
                        </div>
                      </div>
                      <div style={{
                        height:"12px",
                        background:"rgba(255,255,255,0.06)",
                        borderRadius:"12px",
                        overflow:"hidden",
                        marginBottom:"1.2rem",
                        position:"relative",
                        boxShadow:"inset 0 2px 4px rgba(0,0,0,0.3)"
                      }}>
                        <div style={{
                          width:`${skillProgress[s.name] || 0}%`,
                          height:"100%",
                          background:`linear-gradient(90deg, ${s.color}, ${s.color}DD)`,
                          borderRadius:"12px",
                          transition:"width 2.5s cubic-bezier(0.16,1,0.3,1)",
                          boxShadow:`0 0 20px ${s.color}90`,
                          position:"relative"
                        }}>
                          <div style={{
                            position:"absolute",
                            top:0,
                            left:0,
                            right:0,
                            bottom:0,
                            background:"linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                            animation:"shimmer 2s linear infinite"
                          }} />
                        </div>
                      </div>
                      <div style={{
                        fontSize:"0.95rem",
                        color:"#bbb",
                        fontFamily:"'Roboto Mono',monospace",
                        lineHeight:1.7,
                        fontWeight:500
                      }}>
                        {s.tech}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS SECTION */}
          <section id="testimonials" data-observe style={{ padding:"5rem 0" }}>
            <h2 style={{
              fontSize:"clamp(2rem, 4vw, 3.5rem)",
              fontWeight:900,
              marginBottom:"1.5rem",
              textAlign:"center",
              fontFamily:"'Orbitron',sans-serif"
            }}>
              <span className="gradient-text">What Leaders Say</span>
            </h2>
            <p style={{
              textAlign:"center",
              fontSize:"1.15rem",
              color:"#999",
              marginBottom:"4rem",
              maxWidth:"700px",
              margin:"0 auto 4rem"
            }}>
              Trusted by engineering leaders at top tech companies
            </p>
            
            <div style={{
              maxWidth:"900px",
              margin:"0 auto",
              position:"relative",
              minHeight:"300px"
            }}>
              {testimonials.map((test, i) => (
                <div key={i} className={`glass-strong ${i === activeTestimonial ? 'fade-in' : ''}`} style={{
                  padding:"3rem",
                  position: i === activeTestimonial ? "relative" : "absolute",
                  top: i === activeTestimonial ? "auto" : 0,
                  left: i === activeTestimonial ? "auto" : 0,
                  right: i === activeTestimonial ? "auto" : 0,
                  opacity: i === activeTestimonial ? 1 : 0,
                  visibility: i === activeTestimonial ? "visible" : "hidden",
                  transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)",
                  textAlign:"center"
                }}>
                  <div style={{
                    width:"80px",
                    height:"80px",
                    borderRadius:"50%",
                    background:`linear-gradient(135deg, ${test.color}, ${test.color}80)`,
                    margin:"0 auto 2rem",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    fontSize:"1.8rem",
                    fontWeight:900,
                    color:"#000",
                    boxShadow:`0 0 30px ${test.color}60`
                  }}>
                    {test.avatar}
                  </div>
                  <p style={{
                    fontSize:"1.25rem",
                    lineHeight:1.8,
                    color:"#fff",
                    marginBottom:"2rem",
                    fontStyle:"italic",
                    fontWeight:500
                  }}>
                    "{test.text}"
                  </p>
                  <div style={{
                    fontSize:"1.1rem",
                    fontWeight:800,
                    color:test.color,
                    marginBottom:"0.3rem",
                    fontFamily:"'Rajdhani',sans-serif"
                  }}>
                    {test.author}
                  </div>
                  <div style={{
                    fontSize:"0.95rem",
                    color:"#999",
                    fontWeight:600
                  }}>
                    {test.role}
                  </div>
                </div>
              ))}
              
              {/* Testimonial Indicators */}
              <div style={{
                display:"flex",
                justifyContent:"center",
                gap:"1rem",
                marginTop:"2rem"
              }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    style={{
                      width: i === activeTestimonial ? "40px" : "12px",
                      height:"12px",
                      borderRadius:"6px",
                      background: i === activeTestimonial ? testimonials[i].color : "rgba(255,255,255,0.2)",
                      border:"none",
                      cursor:"pointer",
                      transition:"all 0.4s",
                      boxShadow: i === activeTestimonial ? `0 0 15px ${testimonials[i].color}` : "none"
                    }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ENHANCED CTA */}
          <section style={{ padding:"6rem 0 8rem" }}>
            <div className="glass-strong" style={{
              padding:"5rem 3rem",
              maxWidth:"1100px",
              margin:"0 auto",
              textAlign:"center",
              position:"relative",
              overflow:"hidden"
            }}>
              {/* Animated Background */}
              <div style={{
                position:"absolute",
                inset:0,
                background:"linear-gradient(135deg, rgba(0,245,255,0.08), rgba(168,85,247,0.08))",
                animation:"gradient-shift 4s ease infinite",
                backgroundSize:"200% 200%"
              }} />
              
              <div style={{ position:"relative", zIndex:1 }}>
                <div style={{
                  display:"inline-flex",
                  alignItems:"center",
                  gap:"0.7rem",
                  background:"rgba(0,245,255,0.25)",
                  border:"2px solid #00f5ff",
                  borderRadius:"35px",
                  padding:"0.7rem 1.5rem",
                  marginBottom:"2.5rem",
                  fontSize:"0.9rem",
                  fontWeight:800,
                  color:"#00f5ff",
                  fontFamily:"'Roboto Mono',monospace",
                  boxShadow:"0 0 25px rgba(0,245,255,0.4)"
                }}>
                  <Lightning size={18} />
                  IMMEDIATE AVAILABILITY
                </div>

                <h2 style={{
                  fontSize:"clamp(2.2rem, 5vw, 4.2rem)",
                  fontWeight:900,
                  marginBottom:"2rem",
                  fontFamily:"'Orbitron',sans-serif",
                  lineHeight:1.15
                }}>
                  <span className="gradient-text">Ready to Drive Impact</span>
                  <br />
                  <span style={{ color:"#fff" }}>at Your Organization</span>
                </h2>
                
                <p style={{
                  fontSize:"1.2rem",
                  color:"#b5b5b5",
                  marginBottom:"3.5rem",
                  maxWidth:"850px",
                  margin:"0 auto 3.5rem",
                  lineHeight:1.9
                }}>
                  Seeking full-time opportunities at innovative tech companies where I can leverage my 
                  expertise in <strong style={{ color:"#00f5ff" }}>AI/ML</strong>, <strong style={{ color:"#a855f7" }}>
                  full-stack development</strong>, and <strong style={{ color:"#22c55e" }}>cloud architecture</strong> to 
                  build transformative solutions. Ready to contribute from day one with proven 
                  enterprise experience and a track record of delivery excellence.
                </p>
                
                <div style={{
                  display:"flex",
                  gap:"1.5rem",
                  justifyContent:"center",
                  flexWrap:"wrap"
                }}>
                  <a href="mailto:g.sivasatyasaibhagavan@gmail.com" className="btn-primary"
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}>
                    <Send size={22} />
                    <span>SCHEDULE INTERVIEW</span>
                  </a>
                  <button onClick={() => handleNavigation('/projects')} className="btn-outline" style={{ color:"#a855f7" }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}>
                    <Eye size={22} />
                    <span>VIEW PORTFOLIO</span>
                  </button>
                  <a href={resumePdf} download="Bhagavan_Resume.pdf" className="btn-outline" style={{ color:"#22c55e" }}
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}>
                    <Download size={22} />
                    <span>GET RESUME</span>
                  </a>
                </div>

                {/* Enhanced Contact Info */}
                <div style={{
                  marginTop:"4rem",
                  paddingTop:"3rem",
                  borderTop:"2px solid rgba(255,255,255,0.15)",
                  display:"flex",
                  justifyContent:"center",
                  gap:"3rem",
                  flexWrap:"wrap"
                }}>
                  <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"0.7rem",
                    color:"#00f5ff",
                    textDecoration:"none",
                    fontSize:"1.05rem",
                    fontWeight:700,
                    transition:"all 0.3s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.color = "#fff";
                    setCursorVariant('hover');
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.color = "#00f5ff";
                    setCursorVariant('default');
                  }}>
                    <Mail size={20} />
                    g.sivasatyasaibhagavan@gmail.com
                  </a>
                  <a href="tel:+917569205626" style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"0.7rem",
                    color:"#22c55e",
                    textDecoration:"none",
                    fontSize:"1.05rem",
                    fontWeight:700,
                    transition:"all 0.3s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.color = "#fff";
                    setCursorVariant('hover');
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.color = "#22c55e";
                    setCursorVariant('default');
                  }}>
                    <Phone size={20} />
                    +91 7569205626
                  </a>
                  <div style={{
                    display:"flex",
                    alignItems:"center",
                    gap:"0.7rem",
                    color:"#a855f7",
                    fontSize:"1.05rem",
                    fontWeight:700
                  }}>
                    <MapPin size={20} />
                    India
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer style={{
            borderTop:"1px solid rgba(255,255,255,0.1)",
            padding:"3rem 0",
            textAlign:"center"
          }}>
            <p style={{
              color:"#666",
              fontSize:"0.95rem",
              fontWeight:600
            }}>
              © 2026 Siva Satya Sai Bhagavan. Crafted with{' '}
              <span style={{ color:"#ff6b35" }}>❤</span> and cutting-edge tech.
            </p>
            <div style={{
              marginTop:"1rem",
              display:"flex",
              justifyContent:"center",
              gap:"2rem",
              flexWrap:"wrap"
            }}>
              {["React", "TypeScript", "Passion"].map((tech, i) => (
                <span key={i} style={{
                  color:"#999",
                  fontSize:"0.85rem",
                  fontWeight:600,
                  fontFamily:"'Roboto Mono',monospace"
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}