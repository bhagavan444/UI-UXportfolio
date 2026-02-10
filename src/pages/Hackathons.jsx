"use client";

import { useState, useEffect, useRef } from "react";
import {
  Trophy, Award, X, Code, Database, Shield, Rocket, Clock, Users, Sparkles, Zap, Terminal,
  Download, Layers, CheckCircle2, ArrowRight, Server, Lock, Github, Mail, Container, Network,
  ChevronDown, Star, Target, TrendingUp, Activity, Cpu, GitBranch, Package, Globe, Gauge,
  FileCode, CloudLightning, Share2, ExternalLink, Play, Pause, BarChart3, PieChart, LineChart
} from "lucide-react";

export default function EliteHackathonPortfolio() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [expandedTech, setExpandedTech] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [showMetrics, setShowMetrics] = useState(false);
  const heroRef = useRef(null);

  const certUrl = "https://lh3.googleusercontent.com/d/1bkXJCzHQPbSSovbaLs4EPeKT1f9ERl5O";

  // Advanced scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);

      // Section detection
      const sections = ['hero', 'stats', 'team', 'timeline', 'tech', 'metrics'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.dataset.section === 'stats') setStatsVisible(true);
            if (entry.target.dataset.section === 'metrics') setShowMetrics(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const phases = [
    {
      id: 1, time: "0-6h", title: "Foundation & Architecture",
      desc: "System design, microservices setup, database sharding, authentication infrastructure, CI/CD pipeline configuration",
      icon: Terminal, color: "#00ffff", gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      achievements: ["Microservices Architecture", "MongoDB Sharding Setup", "JWT & Refresh Tokens", "Docker Containerization", "GitHub Actions CI/CD"],
      stack: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "Redis", "Nginx"],
      metrics: { code: 1200, apis: 5, tests: 15, commits: 24 },
      highlights: ["Database replication configured", "Load balancer implemented", "Security headers added"],
      challenges: ["Cross-service communication", "Database consistency", "Auth token management"]
    },
    {
      id: 2, time: "6-14h", title: "Core Development",
      desc: "RESTful API development, Redux state management, TypeScript components, real-time WebSocket integration, responsive UI design",
      icon: Code, color: "#a78bfa", gradient: "linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)",
      achievements: ["20+ REST Endpoints", "TypeScript Integration", "Redux Toolkit Setup", "React Router v6", "Material-UI Components"],
      stack: ["React 18", "TypeScript", "Redux Toolkit", "Axios", "React Query", "Tailwind CSS"],
      metrics: { code: 2400, apis: 12, tests: 42, commits: 38 },
      highlights: ["Optimistic UI updates", "Infinite scroll pagination", "Advanced form validation"],
      challenges: ["State synchronization", "Performance optimization", "Type safety enforcement"]
    },
    {
      id: 3, time: "14-20h", title: "Security & Scale",
      desc: "OAuth 2.0 implementation, rate limiting, WebSocket scaling with Redis, comprehensive logging, monitoring dashboards",
      icon: Shield, color: "#ff61d2", gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      achievements: ["OAuth 2.0 Flow", "Redis Pub/Sub", "Rate Limiting Middleware", "Winston Logger", "Helmet.js Security"],
      stack: ["Socket.io", "Redis", "OAuth 2.0", "Helmet.js", "Express-rate-limit", "Morgan"],
      metrics: { code: 1800, apis: 6, tests: 35, commits: 29 },
      highlights: ["CORS configuration", "XSS protection", "SQL injection prevention"],
      challenges: ["WebSocket authentication", "Session management", "Security compliance"]
    },
    {
      id: 4, time: "20-24h", title: "Deployment & Monitoring",
      desc: "AWS ECS deployment, CloudFront CDN, Prometheus metrics, Grafana dashboards, production optimization, demo preparation",
      icon: Rocket, color: "#10b981", gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      achievements: ["AWS ECS Cluster", "CloudFront CDN", "Prometheus Metrics", "Grafana Dashboard", "SSL Certificates"],
      stack: ["Docker Compose", "AWS ECR", "Nginx", "Grafana", "Prometheus", "Let's Encrypt"],
      metrics: { code: 600, apis: 2, tests: 18, commits: 15 },
      highlights: ["Auto-scaling configured", "99.9% uptime", "Sub-200ms latency"],
      challenges: ["Zero-downtime deployment", "Cost optimization", "Performance tuning"]
    }
  ];

  const techStack = [
    { name: "MongoDB", icon: Database, skill: 95, color: "#10b981", category: "Database", description: "Sharded cluster with replica sets" },
    { name: "Express.js", icon: Server, skill: 92, color: "#00ffff", category: "Backend", description: "RESTful API framework" },
    { name: "React 18", icon: Sparkles, skill: 98, color: "#a78bfa", category: "Frontend", description: "Concurrent rendering & Suspense" },
    { name: "Node.js", icon: Layers, skill: 90, color: "#ec4899", category: "Runtime", description: "Event-driven architecture" },
    { name: "JWT & OAuth", icon: Lock, skill: 88, color: "#f59e0b", category: "Security", description: "Token-based authentication" },
    { name: "Socket.io", icon: Zap, skill: 85, color: "#3b82f6", category: "Real-time", description: "WebSocket communication" },
    { name: "Docker", icon: Container, skill: 87, color: "#06b6d4", category: "DevOps", description: "Containerization platform" },
    { name: "Redis", icon: Network, skill: 84, color: "#dc2626", category: "Cache", description: "In-memory data store" },
    { name: "TypeScript", icon: FileCode, skill: 93, color: "#3b82f6", category: "Language", description: "Type-safe development" },
    { name: "AWS", icon: CloudLightning, skill: 82, color: "#f97316", category: "Cloud", description: "Cloud infrastructure" },
    { name: "Nginx", icon: Server, skill: 86, color: "#22c55e", category: "Web Server", description: "Reverse proxy & load balancer" },
    { name: "Redux", icon: Package, skill: 91, color: "#8b5cf6", category: "State", description: "Predictable state container" }
  ];

  const stats = [
    { label: "Duration", value: 24, unit: "hrs", icon: Clock, color: "#00ffff", trend: "+0%", description: "Non-stop development" },
    { label: "Team Size", value: 4, unit: "devs", icon: Users, color: "#a78bfa", trend: "100%", description: "Elite engineers" },
    { label: "Code Written", value: "6K", unit: "lines", icon: Code, color: "#ff61d2", trend: "+250%", description: "Production-ready code" },
    { label: "Final Rank", value: "1st", unit: "place", icon: Trophy, color: "#ffd700", trend: "🏆", description: "National champions" },
    { label: "API Routes", value: 25, unit: "routes", icon: Server, color: "#f59e0b", trend: "+25", description: "RESTful endpoints" },
    { label: "Test Coverage", value: 92, unit: "%", icon: CheckCircle2, color: "#10b981", trend: "+92%", description: "Comprehensive testing" },
    { label: "Response Time", value: "< 150", unit: "ms", icon: Zap, color: "#3b82f6", trend: "-80%", description: "Lightning fast" },
    { label: "Uptime", value: "99.9", unit: "%", icon: Activity, color: "#ec4899", trend: "+99%", description: "Highly available" }
  ];

  const team = [
    {
      name: "Bhagavan", role: "Tech Lead & Full-Stack",
      avatar: "🧑‍💻",
      contrib: "System Architecture, Backend APIs, AWS Infrastructure",
      skills: ["Node.js", "MongoDB", "AWS", "System Design"],
      github: "https://github.com/bhagavan444",
      achievements: ["Microservices Design", "Database Optimization", "CI/CD Setup"],
      stats: { commits: 67, prs: 12, linesOfCode: 2100 }
    },
    {
      name: "Dhanus", role: "Frontend Architect",
      avatar: "👩‍💻",
      contrib: "UI/UX Design, React Components, State Management",
      skills: ["React", "TypeScript", "Redux", "UI/UX"],
      achievements: ["Design System", "Component Library", "Performance Optimization"],
      stats: { commits: 58, prs: 15, linesOfCode: 1900 }
    },
    {
      name: "Pavan", role: "DevOps Engineer",
      avatar: "👨‍💻",
      contrib: "Docker Containerization, CI/CD Pipeline, Deployment Automation",
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
      achievements: ["Container Orchestration", "Auto-scaling", "Zero-downtime Deploy"],
      stats: { commits: 42, prs: 8, linesOfCode: 1200 }
    },
    {
      name: "Rahul", role: "Security Specialist",
      avatar: "👩‍💻",
      contrib: "Authentication Systems, Security Audits, API Security",
      skills: ["OAuth", "JWT", "Security", "Encryption"],
      achievements: ["OAuth Integration", "Rate Limiting", "Security Hardening"],
      stats: { commits: 39, prs: 10, linesOfCode: 900 }
    }
  ];

  const performanceMetrics = [
    { metric: "First Contentful Paint", value: "0.8s", target: "< 1.8s", status: "excellent", color: "#10b981", icon: Gauge },
    { metric: "Time to Interactive", value: "1.2s", target: "< 3.8s", status: "excellent", color: "#10b981", icon: Activity },
    { metric: "Largest Contentful Paint", value: "1.5s", target: "< 2.5s", status: "good", color: "#3b82f6", icon: Target },
    { metric: "Cumulative Layout Shift", value: "0.05", target: "< 0.1", status: "excellent", color: "#10b981", icon: TrendingUp },
    { metric: "API Response Time", value: "145ms", target: "< 200ms", status: "excellent", color: "#10b981", icon: Zap },
    { metric: "Bundle Size", value: "287KB", target: "< 500KB", status: "good", color: "#3b82f6", icon: Package }
  ];

  const projectHighlights = [
    { icon: Star, title: "Scalable Architecture", desc: "Microservices-based design with horizontal scaling capability" },
    { icon: Shield, title: "Enterprise Security", desc: "OAuth 2.0, JWT refresh tokens, rate limiting, and XSS protection" },
    { icon: Zap, title: "Real-time Features", desc: "WebSocket integration with Redis pub/sub for instant updates" },
    { icon: Database, title: "Optimized Database", desc: "MongoDB sharding with replica sets for high availability" },
    { icon: CloudLightning, title: "Cloud-Native", desc: "AWS ECS deployment with CloudFront CDN and auto-scaling" },
    { icon: CheckCircle2, title: "Quality Assurance", desc: "92% test coverage with unit, integration, and E2E tests" }
  ];

  const codeMetrics = [
    { label: "Total Commits", value: 106, icon: GitBranch, color: "#a78bfa" },
    { label: "Pull Requests", value: 45, icon: GitBranch, color: "#3b82f6" },
    { label: "Code Reviews", value: 38, icon: CheckCircle2, color: "#10b981" },
    { label: "Bug Fixes", value: 12, icon: Code, color: "#f59e0b" }
  ];

  const glassStyle = {
    background: 'rgba(15, 15, 25, 0.75)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '24px',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  };

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #00ffff, #a78bfa, #ff61d2, #ffd700, #10b981)',
    backgroundSize: '400% 400%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'shimmer 10s ease infinite'
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(3deg); }
          66% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes expand {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes progressBar {
          from { width: 0%; }
          to { width: var(--progress); }
        }
        
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 255, 255, 0.3);
        }
        
        .smooth-scroll {
          scroll-behavior: smooth;
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #020617, #0f172a, #1e1b4b, #020617)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Space Grotesk', sans-serif"
      }}>
        
        {/* Scroll Progress Bar */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '4px',
          background: 'linear-gradient(to right, #00ffff, #a78bfa, #ff61d2, #ffd700)',
          width: `${scrollProgress}%`,
          zIndex: 1000,
          transition: 'width 0.1s ease-out',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
        }} />

        {/* Navigation Dots */}
        <div style={{
          position: 'fixed',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {['hero', 'stats', 'team', 'timeline', 'tech', 'metrics'].map((section, i) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                width: activeSection === section ? '12px' : '8px',
                height: activeSection === section ? '12px' : '8px',
                borderRadius: '50%',
                background: activeSection === section ? '#00ffff' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeSection === section ? '0 0 12px #00ffff' : 'none'
              }}
              title={section.toUpperCase()}
            />
          ))}
        </div>

        {/* Animated Background Gradients */}
        <div style={{
          position: 'fixed',
          inset: 0,
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 0
        }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '20%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 20s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '40%',
            right: '15%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, #a78bfa 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 25s ease-in-out infinite',
            animationDelay: '3s'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '40%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)',
            animation: 'float 30s ease-in-out infinite',
            animationDelay: '6s'
          }} />
        </div>

        {/* Main Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 3rem)',
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          
          {/* Hero Section */}
          <section 
            id="hero" 
            ref={heroRef}
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginBottom: '6rem',
              position: 'relative'
            }}
          >
            {/* Status Badge */}
            <div style={{
              ...glassStyle,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.875rem 1.75rem',
              marginBottom: '2.5rem',
              animation: 'pulse 3s ease infinite'
            }}>
              <Terminal size={20} style={{ color: '#06b6d4' }} />
              <span style={{ 
                color: '#06b6d4', 
                fontFamily: "'JetBrains Mono', monospace", 
                fontSize: '0.95rem',
                fontWeight: 600
              }}>
                $ hackathon.execute() --mode=championship
              </span>
              <Sparkles size={20} style={{ color: '#06b6d4' }} />
            </div>

            {/* Main Title */}
            <h1 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(3rem, 14vw, 9rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
              lineHeight: 0.95,
              textShadow: '0 0 80px rgba(0, 255, 255, 0.3)'
            }}>
              BRAINO VISION
            </h1>

            {/* Subtitle */}
            <h2 style={{
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              fontWeight: 800,
              background: 'linear-gradient(to right, #06b6d4, #a78bfa, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem'
            }}>
              National Championship 2024
            </h2>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              marginBottom: '3rem',
              lineHeight: 1.6
            }}>
              Enterprise-grade MERN stack application built in 24 hours by elite developers
            </p>

            {/* Quick Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              width: '100%',
              maxWidth: '1100px',
              marginBottom: '3.5rem'
            }}>
              {[
                { icon: Trophy, text: '1st Place Winner', color: '#ffd700', glow: true },
                { icon: Users, text: '4 Elite Devs', color: '#00ffff' },
                { icon: Clock, text: '24 Hour Sprint', color: '#a78bfa' },
                { icon: Code, text: '6K+ Lines', color: '#ff61d2' }
              ].map((item, i) => (
                <div 
                  key={i} 
                  style={{
                    ...glassStyle,
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transform: hoveredItem === `quick-${i}` ? 'translateY(-8px) scale(1.03)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `quick-${i}` ? `0 25px 70px ${item.color}40` : 'none',
                    borderColor: hoveredItem === `quick-${i}` ? `${item.color}aa` : 'rgba(255, 255, 255, 0.12)',
                    animation: `slideInUp 0.6s ease-out ${i * 0.1}s backwards`
                  }}
                  onMouseEnter={() => setHoveredItem(`quick-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <item.icon 
                    size={28} 
                    style={{ 
                      color: item.color, 
                      filter: `drop-shadow(0 0 ${item.glow ? '12px' : '8px'} ${item.color})`,
                      animation: item.glow ? 'pulse 2s ease-in-out infinite' : 'none'
                    }} 
                  />
                  <span style={{ 
                    fontWeight: 700, 
                    fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                    textAlign: 'center'
                  }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Project Highlights */}
            <div style={{
              ...glassStyle,
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              width: '100%',
              maxWidth: '1100px',
              marginBottom: '3rem'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 800,
                marginBottom: '2rem',
                textAlign: 'center',
                background: 'linear-gradient(to right, #00ffff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Project Highlights
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem'
              }}>
                {projectHighlights.map((item, i) => (
                  <div 
                    key={i}
                    style={{
                      padding: '1.25rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      transform: hoveredItem === `highlight-${i}` ? 'translateY(-4px)' : 'translateY(0)',
                      borderColor: hoveredItem === `highlight-${i}` ? 'rgba(0, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={() => setHoveredItem(`highlight-${i}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <item.icon size={24} style={{ color: '#00ffff', marginBottom: '0.75rem' }} />
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Section */}
            <div style={{
              ...glassStyle,
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              width: '100%',
              maxWidth: '1100px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <Award size={36} style={{ color: '#ffd700', animation: 'float 3s ease-in-out infinite' }} />
                <h3 style={{
                  fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e, #ffd700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(255, 215, 0, 0.3)'
                }}>
                  CHAMPIONSHIP CERTIFICATE
                </h3>
                <Award size={36} style={{ color: '#ffd700', animation: 'float 3s ease-in-out infinite', animationDelay: '0.3s' }} />
              </div>

              <div 
                onClick={() => setShowCert(true)} 
                style={{
                  cursor: 'pointer',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '3px solid rgba(255, 215, 0, 0.6)',
                  transition: 'all 0.4s ease',
                  transform: hoveredItem === 'cert' ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: hoveredItem === 'cert' ? '0 0 50px rgba(255, 215, 0, 0.4)' : '0 0 20px rgba(255, 215, 0, 0.2)'
                }}
                onMouseEnter={() => setHoveredItem('cert')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img src={certUrl} alt="Championship Certificate" style={{ width: '100%', display: 'block' }} />
              </div>

              <button 
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = certUrl;
                  a.download = 'BrainoVision_Championship_Certificate.jpg';
                  a.click();
                }} 
                style={{
                  marginTop: '2rem',
                  padding: '1.25rem 2.5rem',
                  background: 'linear-gradient(135deg, #ffd700, #ffed4e)',
                  border: 'none',
                  borderRadius: '9999px',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  margin: '2rem auto 0',
                  transition: 'all 0.3s ease',
                  transform: hoveredItem === 'download' ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: hoveredItem === 'download' ? '0 0 60px rgba(255, 215, 0, 0.6)' : '0 15px 50px rgba(255, 215, 0, 0.5)'
                }}
                onMouseEnter={() => setHoveredItem('download')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Download size={22} />
                Download Certificate
              </button>
            </div>

            <ChevronDown size={36} style={{ 
              color: '#06b6d4', 
              marginTop: '4rem', 
              animation: 'float 2s ease-in-out infinite',
              filter: 'drop-shadow(0 0 12px #06b6d4)'
            }} />
          </section>

          {/* Performance Stats Dashboard */}
          <section id="stats" data-section="stats" style={{ marginBottom: '6rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              PERFORMANCE METRICS
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '3.5rem',
              maxWidth: '700px',
              margin: '0 auto 3.5rem'
            }}>
              Real-time analytics and performance indicators from our championship project
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  style={{
                    ...glassStyle,
                    padding: '1.75rem 1.25rem',
                    textAlign: 'center',
                    animation: statsVisible ? `expand 0.6s ease-out ${i * 0.08}s backwards` : 'none',
                    transform: activeCard === `stat-${i}` ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
                    boxShadow: activeCard === `stat-${i}` ? `0 25px 70px ${stat.color}40` : 'none',
                    borderColor: activeCard === `stat-${i}` ? `${stat.color}aa` : 'rgba(255, 255, 255, 0.12)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setActiveCard(`stat-${i}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.75rem',
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.5rem',
                    background: `${stat.color}20`,
                    border: `1px solid ${stat.color}40`,
                    borderRadius: '6px',
                    color: stat.color,
                    fontWeight: 700
                  }}>
                    {stat.trend}
                  </div>
                  <stat.icon 
                    size={40} 
                    style={{ 
                      color: stat.color, 
                      margin: '0 auto 1rem', 
                      filter: `drop-shadow(0 0 10px ${stat.color})`,
                      display: 'block'
                    }} 
                  />
                  <div style={{
                    fontSize: 'clamp(2.25rem, 6vw, 3.5rem)',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.5rem',
                    textShadow: `0 0 30px ${stat.color}99`,
                    lineHeight: 1
                  }}>
                    {stat.value}
                    <span style={{ fontSize: '0.5em', opacity: 0.8 }}>{stat.unit}</span>
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.4)',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}>
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Code Metrics */}
            <div style={{
              ...glassStyle,
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 800,
                marginBottom: '1.5rem',
                textAlign: 'center',
                color: '#00ffff'
              }}>
                Development Statistics
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem'
              }}>
                {codeMetrics.map((metric, i) => (
                  <div key={i} style={{
                    padding: '1.25rem',
                    background: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '12px',
                    border: `1px solid ${metric.color}30`,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    transform: hoveredItem === `code-${i}` ? 'translateY(-4px)' : 'translateY(0)'
                  }}
                  onMouseEnter={() => setHoveredItem(`code-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  >
                    <metric.icon size={28} style={{ color: metric.color, margin: '0 auto 0.75rem', display: 'block' }} />
                    <div style={{ fontSize: '2rem', fontWeight: 900, color: metric.color, marginBottom: '0.25rem' }}>
                      {metric.value}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Elite Team Section */}
          <section id="team" style={{ marginBottom: '6rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              ELITE TEAM
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '3.5rem',
              maxWidth: '700px',
              margin: '0 auto 3.5rem'
            }}>
              Meet the championship squad that delivered enterprise-grade solutions in 24 hours
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {team.map((member, i) => (
                <div 
                  key={i} 
                  style={{
                    ...glassStyle,
                    padding: '2rem',
                    textAlign: 'center',
                    transform: hoveredItem === `team-${i}` ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `team-${i}` ? '0 25px 70px rgba(0, 255, 255, 0.35)' : 'none',
                    borderColor: hoveredItem === `team-${i}` ? 'rgba(0, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.12)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setHoveredItem(`team-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(to right, #00ffff, #a78bfa)',
                    opacity: hoveredItem === `team-${i}` ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }} />
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '1.25rem',
                    animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}>
                    {member.avatar}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(to right, #ffffff, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {member.name}
                  </h3>
                  <div style={{ 
                    color: '#06b6d4', 
                    fontSize: '1rem', 
                    fontWeight: 700, 
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {member.role}
                  </div>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '0.875rem',
                    marginBottom: '1.25rem',
                    lineHeight: 1.6
                  }}>
                    {member.contrib}
                  </p>

                  {/* Stats */}
                  {member.stats && (
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.75rem',
                      marginBottom: '1.25rem',
                      padding: '1rem',
                      background: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '12px'
                    }}>
                      {[
                        { label: 'Commits', value: member.stats.commits },
                        { label: 'PRs', value: member.stats.prs },
                        { label: 'Lines', value: member.stats.linesOfCode }
                      ].map((stat, idx) => (
                        <div key={idx} style={{ textAlign: 'center' }}>
                          <div style={{ color: '#00ffff', fontSize: '1.5rem', fontWeight: 800 }}>{stat.value}</div>
                          <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.7rem' }}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem', 
                    justifyContent: 'center', 
                    marginBottom: '1.25rem' 
                  }}>
                    {member.skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        style={{
                          fontSize: '0.8rem',
                          padding: '0.4rem 0.9rem',
                          background: 'rgba(0, 0, 0, 0.6)',
                          border: '1px solid #06b6d4',
                          borderRadius: '9999px',
                          color: '#06b6d4',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 600
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Achievements */}
                  <div style={{
                    marginBottom: '1.25rem',
                    textAlign: 'left',
                    padding: '1rem',
                    background: 'rgba(0, 255, 255, 0.05)',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 255, 255, 0.2)'
                  }}>
                    <div style={{ 
                      fontSize: '0.75rem', 
                      color: '#00ffff', 
                      fontWeight: 700, 
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Key Achievements
                    </div>
                    {member.achievements.map((ach, idx) => (
                      <div key={idx} style={{
                        fontSize: '0.8rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <CheckCircle2 size={14} style={{ color: '#10b981', flexShrink: 0 }} />
                        {ach}
                      </div>
                    ))}
                  </div>

                  {member.github && (
                    <a 
                      href={member.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'rgba(6, 182, 212, 0.15)',
                        border: '2px solid rgba(6, 182, 212, 0.4)',
                        borderRadius: '9999px',
                        color: '#06b6d4',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Github size={18} />
                      View Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 24-Hour Timeline */}
          <section id="timeline" style={{ marginBottom: '6rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              24-HOUR TIMELINE
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '3.5rem',
              maxWidth: '700px',
              margin: '0 auto 3.5rem'
            }}>
              From concept to deployment - a detailed breakdown of our championship sprint
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}>
              {phases.map((phase, i) => (
                <div 
                  key={phase.id} 
                  onClick={() => setSelectedPhase(phase)} 
                  style={{
                    ...glassStyle,
                    padding: '2rem',
                    cursor: 'pointer',
                    transform: hoveredItem === `phase-${i}` ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `phase-${i}` ? `0 30px 80px ${phase.color}40` : 'none',
                    borderColor: hoveredItem === `phase-${i}` ? `${phase.color}aa` : 'rgba(255, 255, 255, 0.12)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setHoveredItem(`phase-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: phase.gradient
                  }} />

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '4.5rem',
                      height: '4.5rem',
                      borderRadius: '1.25rem',
                      background: phase.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 15px 40px ${phase.color}50`,
                      transform: hoveredItem === `phase-${i}` ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)',
                      transition: 'all 0.4s ease'
                    }}>
                      <phase.icon size={36} style={{ color: '#000' }} />
                    </div>
                    <span style={{
                      padding: '0.6rem 1.25rem',
                      background: 'rgba(0, 0, 0, 0.7)',
                      border: `2px solid ${phase.color}`,
                      borderRadius: '9999px',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      color: phase.color,
                      fontFamily: "'JetBrains Mono', monospace"
                    }}>
                      {phase.time}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: 900,
                    marginBottom: '1rem',
                    color: '#fff'
                  }}>
                    {phase.title}
                  </h3>

                  <p style={{
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    marginBottom: '1.5rem'
                  }}>
                    {phase.desc}
                  </p>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    padding: '1.25rem',
                    background: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '12px',
                    border: `1px solid ${phase.color}20`
                  }}>
                    {[
                      { label: 'Code', value: phase.metrics.code },
                      { label: 'APIs', value: phase.metrics.apis },
                      { label: 'Tests', value: phase.metrics.tests },
                      { label: 'Commits', value: phase.metrics.commits }
                    ].map((metric, idx) => (
                      <div key={idx} style={{ textAlign: 'center' }}>
                        <div style={{ 
                          color: phase.color, 
                          fontSize: '1.75rem', 
                          fontWeight: 900,
                          textShadow: `0 0 20px ${phase.color}88`
                        }}>
                          {metric.value}
                        </div>
                        <div style={{ 
                          color: 'rgba(255, 255, 255, 0.5)', 
                          fontSize: '0.7rem',
                          textTransform: 'uppercase',
                          fontWeight: 600,
                          letterSpacing: '0.05em'
                        }}>
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'transparent',
                    border: `2px solid ${phase.color}`,
                    borderRadius: '12px',
                    color: phase.color,
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease'
                  }}>
                    Explore Details
                    <ArrowRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Arsenal */}
          <section id="tech" style={{ marginBottom: '6rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              TECH ARSENAL
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '3.5rem',
              maxWidth: '700px',
              margin: '0 auto 3.5rem'
            }}>
              Cutting-edge technologies and frameworks powering enterprise-grade solutions
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}>
              {techStack.map((tech, i) => (
                <div 
                  key={i} 
                  onClick={() => setExpandedTech(expandedTech === i ? null : i)} 
                  style={{
                    ...glassStyle,
                    padding: '2rem',
                    cursor: 'pointer',
                    transform: hoveredItem === `tech-${i}` ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                    boxShadow: hoveredItem === `tech-${i}` ? `0 25px 70px ${tech.color}40` : 'none',
                    borderColor: hoveredItem === `tech-${i}` ? `${tech.color}aa` : 'rgba(255, 255, 255, 0.12)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={() => setHoveredItem(`tech-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    fontSize: '0.75rem',
                    padding: '0.35rem 0.75rem',
                    background: `${tech.color}20`,
                    border: `1px solid ${tech.color}50`,
                    borderRadius: '6px',
                    color: tech.color,
                    fontWeight: 700
                  }}>
                    {tech.category}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '4rem',
                      height: '4rem',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: `${tech.color}25`,
                      border: `2px solid ${tech.color}50`,
                      transform: hoveredItem === `tech-${i}` ? 'rotate(15deg) scale(1.1)' : 'rotate(0deg) scale(1)',
                      transition: 'all 0.4s ease'
                    }}>
                      <tech.icon size={32} style={{ color: tech.color }} />
                    </div>
                    <div style={{
                      fontSize: '2.25rem',
                      fontWeight: 900,
                      color: tech.color,
                      textShadow: `0 0 20px ${tech.color}99`
                    }}>
                      {tech.skill}%
                    </div>
                  </div>

                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: 900,
                    marginBottom: '0.75rem',
                    color: '#fff'
                  }}>
                    {tech.name}
                  </h3>

                  <p style={{
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    marginBottom: '1.25rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    lineHeight: 1.5
                  }}>
                    {tech.description}
                  </p>

                  <div style={{
                    height: '8px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: statsVisible ? `${tech.skill}%` : '0%',
                      height: '100%',
                      background: `linear-gradient(to right, ${tech.color}, ${tech.color}dd)`,
                      borderRadius: '4px',
                      transition: 'width 1.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: `0 0 15px ${tech.color}`,
                      position: 'relative'
                    }}>
                      <div style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '30%',
                        background: `linear-gradient(to right, transparent, ${tech.color}ff)`,
                        animation: 'pulse 2s ease-in-out infinite'
                      }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section id="metrics" data-section="metrics" style={{ marginBottom: '6rem' }}>
            <h2 style={{
              ...gradientTextStyle,
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              PERFORMANCE BENCHMARKS
            </h2>
            <p style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255, 255, 255, 0.6)',
              marginBottom: '3.5rem',
              maxWidth: '700px',
              margin: '0 auto 3.5rem'
            }}>
              Industry-leading metrics demonstrating production-ready quality
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem'
            }}>
              {performanceMetrics.map((metric, i) => (
                <div 
                  key={i}
                  style={{
                    ...glassStyle,
                    padding: '2rem',
                    animation: showMetrics ? `expand 0.6s ease-out ${i * 0.1}s backwards` : 'none',
                    transform: hoveredItem === `perf-${i}` ? 'translateY(-8px)' : 'translateY(0)',
                    borderColor: hoveredItem === `perf-${i}` ? `${metric.color}aa` : 'rgba(255, 255, 255, 0.12)'
                  }}
                  onMouseEnter={() => setHoveredItem(`perf-${i}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <metric.icon size={32} style={{ color: metric.color }} />
                    <span style={{
                      padding: '0.4rem 1rem',
                      background: `${metric.color}20`,
                      border: `1px solid ${metric.color}50`,
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: metric.color,
                      textTransform: 'uppercase'
                    }}>
                      {metric.status}
                    </span>
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: 'rgba(255, 255, 255, 0.9)'
                  }}>
                    {metric.metric}
                  </h4>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '0.75rem'
                  }}>
                    <div>
                      <span style={{ fontSize: '2rem', fontWeight: 900, color: metric.color }}>
                        {metric.value}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)' }}>
                      Target: {metric.target}
                    </div>
                  </div>
                  <div style={{
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: showMetrics ? '95%' : '0%',
                      height: '100%',
                      background: metric.color,
                      borderRadius: '3px',
                      transition: 'width 1.5s ease-out',
                      boxShadow: `0 0 10px ${metric.color}`
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section style={{
            ...glassStyle,
            padding: 'clamp(2.5rem, 6vw, 4rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 255, 0.1), transparent)',
              pointerEvents: 'none'
            }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{
                ...gradientTextStyle,
                fontSize: 'clamp(2rem, 7vw, 4rem)',
                fontWeight: 900,
                marginBottom: '1.5rem'
              }}>
                READY FOR YOUR PROJECT?
              </h2>
              <p style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '850px',
                margin: '0 auto 2.5rem',
                lineHeight: 1.7
              }}>
                From hackathon champions to production deployment - we deliver enterprise-grade MERN stack solutions with cutting-edge architecture and uncompromising quality
              </p>
              <div style={{
                display: 'flex',
                gap: '1.25rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a 
                  href="https://github.com/bhagavan444" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    padding: '1.25rem 2.5rem',
                    background: 'rgba(6, 182, 212, 0.2)',
                    border: '2px solid rgba(6, 182, 212, 0.7)',
                    borderRadius: '12px',
                    color: '#06b6d4',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Github size={22} />
                  GitHub Portfolio
                </a>
                <a 
                  href="mailto:g.sivasatyasaibhagavan@gmail.com" 
                  style={{
                    padding: '1.25rem 2.5rem',
                    background: 'linear-gradient(135deg, #06b6d4, #a78bfa)',
                    borderRadius: '12px',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 15px 50px rgba(6, 182, 212, 0.5)'
                  }}
                >
                  <Mail size={22} />
                  Let's Collaborate
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer style={{
            marginTop: '5rem',
            padding: '2rem 0',
            textAlign: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <p style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.95rem',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              © 2024 Braino Vision • Built with React & Passion • National Championship Winners 🏆
            </p>
          </footer>
        </div>

        {/* Certificate Modal */}
        {showCert && (
          <div 
            onClick={() => setShowCert(false)} 
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.97)',
              backdropFilter: 'blur(30px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div 
              onClick={e => e.stopPropagation()} 
              style={{
                position: 'relative',
                maxWidth: '95vw',
                maxHeight: '95vh',
                overflow: 'auto',
                animation: 'expand 0.4s ease-out'
              }}
            >
              <button 
                onClick={() => setShowCert(false)} 
                style={{
                  position: 'absolute',
                  top: '-1rem',
                  right: '-1rem',
                  width: '3.5rem',
                  height: '3.5rem',
                  background: 'rgba(239, 68, 68, 0.9)',
                  border: '2px solid #ef4444',
                  borderRadius: '50%',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)'
                }}
              >
                <X size={28} />
              </button>
              <img 
                src={certUrl} 
                alt="Championship Certificate" 
                style={{
                  width: '100%',
                  borderRadius: '1.5rem',
                  border: '5px solid #ffd700',
                  boxShadow: '0 0 120px rgba(255, 215, 0, 0.7)'
                }} 
              />
            </div>
          </div>
        )}

        {/* Phase Details Modal */}
        {selectedPhase && (
          <div 
            onClick={() => setSelectedPhase(null)} 
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.97)',
              backdropFilter: 'blur(30px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              overflowY: 'auto',
              animation: 'fadeIn 0.3s ease-out'
            }}
          >
            <div 
              onClick={e => e.stopPropagation()} 
              style={{
                ...glassStyle,
                padding: 'clamp(2rem, 5vw, 3rem)',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '92vh',
                overflowY: 'auto',
                position: 'relative',
                animation: 'expand 0.4s ease-out'
              }}
            >
              <button 
                onClick={() => setSelectedPhase(null)} 
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  width: '3.5rem',
                  height: '3.5rem',
                  background: 'rgba(239, 68, 68, 0.4)',
                  border: '2px solid #ef4444',
                  borderRadius: '50%',
                  color: '#ef4444',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  zIndex: 10
                }}
              >
                <X size={26} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{
                  width: '7rem',
                  height: '7rem',
                  margin: '0 auto 1.5rem',
                  borderRadius: '2rem',
                  background: selectedPhase.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 70px ${selectedPhase.color}`,
                  animation: 'pulse 3s ease-in-out infinite'
                }}>
                  <selectedPhase.icon size={56} style={{ color: '#000' }} />
                </div>
                <span style={{
                  display: 'inline-block',
                  padding: '0.75rem 2rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: `2px solid ${selectedPhase.color}`,
                  borderRadius: '9999px',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                  color: selectedPhase.color,
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                  {selectedPhase.time}
                </span>
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                  fontWeight: 900,
                  marginBottom: '1.5rem',
                  background: `linear-gradient(135deg, ${selectedPhase.color}, #fff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {selectedPhase.title}
                </h2>
                <p style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.7,
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  {selectedPhase.desc}
                </p>
              </div>

              {/* Key Achievements */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  color: selectedPhase.color, 
                  marginBottom: '1.5rem', 
                  fontWeight: 900,
                  textAlign: 'center'
                }}>
                  Key Achievements
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {selectedPhase.achievements.map((ach, idx) => (
                    <div key={idx} style={{
                      padding: '1.25rem',
                      background: `${selectedPhase.color}20`,
                      border: `2px solid ${selectedPhase.color}50`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <CheckCircle2 size={24} style={{ color: selectedPhase.color, flexShrink: 0 }} />
                      <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '1rem', fontWeight: 600 }}>
                        {ach}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  color: selectedPhase.color, 
                  marginBottom: '1.5rem', 
                  fontWeight: 900,
                  textAlign: 'center'
                }}>
                  Technologies Used
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                  {selectedPhase.stack.map((tech, idx) => (
                    <span key={idx} style={{
                      padding: '0.75rem 1.5rem',
                      background: 'rgba(0, 0, 0, 0.7)',
                      border: `2px solid ${selectedPhase.color}`,
                      borderRadius: '9999px',
                      color: selectedPhase.color,
                      fontSize: '1rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights & Challenges */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '16px'
                }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    color: '#10b981', 
                    marginBottom: '1rem', 
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Star size={24} />
                    Highlights
                  </h4>
                  {selectedPhase.highlights.map((item, idx) => (
                    <div key={idx} style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#10b981'
                      }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '2px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '16px'
                }}>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    color: '#ef4444', 
                    marginBottom: '1rem', 
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Target size={24} />
                    Challenges
                  </h4>
                  {selectedPhase.challenges.map((item, idx) => (
                    <div key={idx} style={{
                      fontSize: '0.95rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#ef4444'
                      }}>⚡</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}