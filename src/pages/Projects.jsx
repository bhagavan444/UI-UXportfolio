import { useState, useEffect, useRef } from 'react';
import {
  ExternalLink, Code, Brain, Sparkles, Award, Zap, Eye, X, CheckCircle2,
  Terminal, Github, Rocket, Star, TrendingUp, Cpu, Layers, Globe, Mail,
  Database, Server, Shield, BarChart, Lightbulb, Users, Clock, Target,
  FileText, GitBranch, LayoutDashboard, Search, MessageSquare, BookOpen
} from 'lucide-react';

const aiProjects = [
  {
  id: 11,
  title: "ATS Resume Builder Platform",
  github:null,
  live:"https://melody-nap-17037283.figma.site",
  desc: "AI-powered ATS resume builder designed to help candidates create resumes that pass applicant tracking systems and get shortlisted.",
  longDesc: "ATS Resume Builder is a full-stack web platform focused on helping job seekers beat Applicant Tracking Systems. It enables users to create professional resumes using optimized templates, analyze resumes against ATS rules, score them in real time, and improve keyword alignment based on job descriptions. The platform ensures clean formatting, recruiter-friendly layouts, and ATS-safe exports for maximum shortlisting success.",
  tags: [
    "ATS Optimization",
    "Resume Builder",
    "Full-Stack Web App",
    "React",
    "Node.js",
    "MongoDB"
  ],
  icon: "📄",
  img: "/src/assets/resume.jpeg",
  color: "#2563EB",
  featured: true,
  highlights: [
    "ATS-Friendly Resume Templates",
    "Real-Time Resume Scoring",
    "Keyword Optimization Suggestions",
    "Clean & Recruiter-Readable Formatting",
    "PDF Resume Export",
    "Modern UI with Light/Dark Mode"
  ],
  stats: {
    atsScore: "90%+",
    templates: "10+",
    resumesBuilt: "3k+",
    shortlistingBoost: "2×"
  }
},
  {
  id: 9,
  title: "NexusAI – Multi-Modal AI Workspace",
  github: null,
  live: "https://bhagavanai.lovable.app/",
  desc: "An enterprise-grade AI workspace enabling users to build, research, automate, and generate content in one unified platform.",
  longDesc: "NexusAI is a next-generation AI workspace designed to streamline productivity through a single intelligent interface. It supports multi-modal inputs such as text, images, PDFs, and code files, allowing users to generate content, translate text, conduct research, and automate workflows effortlessly. Built with a clean, futuristic UI and optimized for speed, NexusAI delivers a premium, enterprise-ready experience similar to modern AI copilots.",
  tags: ["AI Platform", "Multi-Modal AI", "Productivity", "Automation", "Enterprise UI"],
  icon: "⚡",
  img: "/src/assets/chat.jpeg",
  color: "#3B82F6",
  featured: true,
  highlights: [
    "Unified AI Workspace Experience",
    "Multi-Modal Input Support (Text, Images, PDFs, Code)",
    "Ultra-Fast AI Responses",
    "Clean, Enterprise-Grade UI",
    "Built-in Tools for Generate, Translate, Research & Automate",
    "Scalable Architecture for Pro & Enterprise Users"
  ],
  stats: {
    speed: "Ultra-Fast",
    modes: "Multi-Modal",
    quality: "Premium",
    users: "Growing"
  }
},
 
{
  id: 5,
  title: "Project Forge – AI Project Generator",
  github: null,
  live: "https://aiprojecttool.lovable.app",
  desc: "AI-powered platform that generates production-ready software projects in seconds from simple prompts.",
  longDesc: "Project Forge is a next-generation AI platform that transforms raw ideas into fully structured, production-ready software projects. It generates clean architecture, scalable folder structures, boilerplate code, and deployment-ready setups using advanced AI models. Designed for developers, startups, and rapid prototyping, it drastically reduces setup time while maintaining engineering best practices.",
  tags: ["AI", "React", "Web Platform", "Automation", "Developer Tools"],
  icon: "⚡",
  img: "/src/assets/Ai website builder.jpg",
  color: "#22D3EE",
  featured: true,
  highlights: [
    "AI-Generated Production-Ready Projects",
    "Instant Code & Folder Structure Creation",
    "Clean Architecture & Best Practices",
    "Prompt-to-Code Workflow",
    "Modern UI with Enterprise Feel",
    "Rapid Prototyping for Startups & Devs"
  ],
  stats: {
    projects: "100k+",
    satisfaction: "99.9%"
  }
},
{
  id: 7,
  title: "ArchMind – AI System Design Platform",
  live: "https://archmind-spark.lovable.app/",
  desc: "AI-powered platform that helps engineers design infinitely scalable system architectures like top-tier tech companies.",
  longDesc: "ArchMind is a next-generation AI system design and architecture platform built to think like elite engineers. It enables real-time AI-driven architecture generation, deep trade-off analysis, and FAANG-grade design pattern recommendations. The platform helps developers, architects, and students design scalable, resilient systems with clarity, speed, and engineering rigor.",
  tags: ["AI", "System Design", "Architecture", "Scalability", "Engineering Tools"],
  icon: "🧠",
  img: "/src/assets/arc.jpeg",
  color: "#22D3EE",
  featured: true,
  highlights: [
    "AI-Powered System Architecture Generation",
    "Real-Time Trade-Off & Bottleneck Analysis",
    "FAANG-Grade Design Patterns",
    "Scalability & Performance Modeling",
    "Clean, Cinematic Enterprise UI",
    "Built for Engineers & System Designers"
  ],
  stats: {
    architectures: "50k+",
    uptime: "99%",
    latency: "<50ms"
  }
},
{
  id: 8,
  title: "TruthGuard AI – Fake News Detection Platform",
  github: null,
  live: "https://bliss-gala-22285345.figma.site/",
  desc: "AI-powered platform to detect and combat fake news using advanced NLP and deep learning models.",
  longDesc: "TruthGuard AI is an intelligent fake news detection platform designed to restore trust in digital information. It leverages TF-IDF feature extraction combined with LSTM and Bi-LSTM deep learning models to analyze news articles with high accuracy and explainability. The system processes content in real time, flags misinformation, and provides confidence-based predictions, making it suitable for journalists, researchers, and large-scale media monitoring.",
  tags: ["AI", "Machine Learning", "NLP", "LSTM", "Fake News Detection"],
  icon: "🛡️",
  img: "/src/assets/fake.jpeg",
  color: "#EC4899",
  featured: true,
  highlights: [
    "AI-Powered Fake News Classification",
    "TF-IDF + LSTM & Bi-LSTM Models",
    "High Accuracy with Explainable Results",
    "Real-Time News Analysis",
    "Scalable & Low-Latency System",
    "Modern, Trust-Focused UI"
  ],
  stats: {
    accuracy: "95%",
    articles: "1M+",
    responseTime: "<100ms",
    users: "50K+"
  }
},
{
  id: 6,
  title: "VisionForge Studio",
  github: null,
  live: "https://cinematic-muse-studio.lovable.app/",
  desc: "Cinematic AI image generation platform that transforms simple prompts into professional-grade visuals in seconds.",
  longDesc: "VisionForge Studio is a next-generation AI art and image creation platform designed for creators, designers, and developers. It leverages advanced AI models and intelligent prompt engineering to generate cinematic, portfolio-ready visuals from minimal input. The platform focuses on speed, visual quality, and an enterprise-grade user experience, making AI creativity accessible without sacrificing artistic control.",
  tags: ["AI", "Image Generation", "Creative Tools", "Web Platform", "Prompt Engineering"],
  icon: "🎨",
  img: "/src/assets/image.jpg",
  color: "#A855F7",
  featured: true,
  highlights: [
    "Cinematic AI Image Generation",
    "Advanced Prompt Engineering Workflow",
    "Image-to-Image Transformation Support",
    "Professional-Grade Visual Outputs",
    "Modern Dark UI with Premium Animations",
    "Fast Generation with Scalable Architecture"
  ],
  stats: {
    creations: "50k+",
    creators: "4.9★"
  }
},
{
  id: 10,
  title: "NeuralLearn – AI Adaptive Learning Platform",
  github: null,
  live:"https://neurallearn.lovable.app/",
  desc: "AI-powered adaptive learning platform that personalizes education in real time based on learner performance and behavior.",
  longDesc: "NeuralLearn is a next-generation AI education platform designed to revolutionize learning through adaptive intelligence. The system continuously analyzes user performance, learning speed, strengths, and weaknesses to dynamically adjust content difficulty and learning paths. With a futuristic interface and scalable architecture, NeuralLearn delivers a personalized, evolving education experience powered by AI-driven insights.",
  tags: [
    "AI Education",
    "Adaptive Learning",
    "Machine Learning",
    "EdTech Platform",
    "Personalized Learning"
  ],
  icon: "🧠",
  img: "/src/assets/neural.jpeg",
  color: "#0EA5E9",
  featured: true,
  highlights: [
    "AI-Powered Adaptive Learning Engine",
    "Personalized Learning Paths in Real Time",
    "Performance-Based Content Evolution",
    "Modern, Futuristic UI Experience",
    "Scalable Platform for Education & Training",
    "Gamified Learning & Progress Tracking"
  ],
  stats: {
    subjects: "26+",
    rounds: "78+",
    questions: "2340+",
    possibilities: "Infinite"
  }
}
];

const gitProjects = [
  {
    id: 3,
    title: "ATS Resume Builder",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: null,
    desc: "Full-stack ATS-optimized resume builder with smart templates, keyword optimization, real-time scoring, and professional PDF export.",
    longDesc: "Designed to beat Applicant Tracking Systems. Analyzes job descriptions, suggests powerful keywords, scores your resume in real-time, and offers multiple modern templates with perfect formatting for both humans and ATS.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "PDFKit"],
    icon: "📄",
    img: "https://drive.google.com/thumbnail?id=1ngApn37ig05YDXxCbA5mppeva_opwcUs&sz=w1200",
    color: "#8B5CF6",
    featured: true,
    highlights: [
      "Real-time ATS Scoring (0-100)",
      "Job Description Keyword Extraction",
      "Multiple Professional Templates",
      "Dark/Light Mode + Export PDF",
      "Drag & Drop Section Reordering",
      "Achievement Quantifier Suggestions"
    ],
    stats: {
      resumes: "3.8k+",
      downloads: "12k+"
    }
  },
 {
  id: 4,
  title: "Heart Disease Prediction Platform",
  github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
  live: null,
  desc: "Machine learning–powered web application to predict heart disease risk using clinical health parameters.",
  longDesc: "A healthcare-focused ML platform that analyzes patient medical data such as age, blood pressure, cholesterol, ECG results, and lifestyle indicators to predict the likelihood of heart disease. Built with a Flask backend and trained ML models, the system provides fast, accurate predictions through a clean web interface, supporting early diagnosis and preventive care.",
  tags: ["Python", "Machine Learning", "Flask", "Scikit-learn", "Pandas"],
  icon: "❤️",
  img: "https://lh3.googleusercontent.com/d/1Uy1JiAFMcAwMD0LZgm0J-bYiWuHpRzqq",
  color: "#EF4444",
  featured: true,
  highlights: [
    "ML-based Heart Disease Risk Prediction",
    "Clinical Feature Engineering & Data Preprocessing",
    "Trained & Evaluated Multiple ML Models",
    "Flask-based Web Application",
    "User-Friendly Medical Input Interface",
    "Fast & Accurate Real-Time Predictions"
  ],
  stats: {
    accuracy: "87%",
    predictions: "1.2k+"
  }
},
  {
    id: 4,
    title: "AI Chatbot Platform",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://bhagavanai.lovable.app",
    desc: "Advanced conversational AI platform with streaming responses, persistent memory, file upload, code highlighting, and multi-model support.",
    longDesc: "Feature-rich AI chat interface supporting Gemini, GPT-4o, Claude, and more. Maintains long-term context, handles file uploads (PDFs, images), syntax highlighting, and beautiful markdown rendering.",
    tags: ["AI", "React", "Flask", "Gemini", "Streaming"],
    icon: "🤖",
    img: "https://drive.google.com/thumbnail?id=10gvXlgHCb__NAWBoLEbj6LglL9dT6Kew&sz=w1200",
    color: "#06B6D4",
    featured: true,
    highlights: [
      "Real-time Streaming Responses",
      "Persistent Conversation Memory",
      "Syntax Highlighting & Markdown",
      "File Upload & Analysis (PDF/Image)",
      "Multi-LLM Support",
      "Customizable System Prompts"
    ],
    stats: {
      chats: "45k+",
      messages: "320k+"
    }
  },
  {
    id: 5,
    title: "AI Career Path System",
    github: "https://github.com/bhagavan444/carrer-path-web-",
    live: null,
    desc: "Machine Learning powered career recommendation engine that analyzes your skills, suggests personalized career paths, learning roadmaps, and market demand insights.",
    longDesc: "Uses advanced NLP and recommendation algorithms to match your profile with thousands of job roles. Identifies skill gaps, recommends courses/certifications, and shows salary trends and growth projections.",
    tags: ["ML", "Python", "Flask", "Scikit-learn", "NLP"],
    icon: "🎯",
    img: "https://drive.google.com/thumbnail?id=1pTnIysNCQgb3oHPOyofDKVkAe_acI2Bj&sz=w1200",
    color: "#F59E0B",
    highlights: [
      "AI-Powered Career Matching",
      "Skills Gap Analysis",
      "Personalized Learning Roadmaps",
      "Market Demand & Salary Insights",
      "Job Role Comparison",
      "Progress Tracking Dashboard"
    ],
    stats: {
      users: "1.9k+",
      roadmaps: "7.2k+"
    }
  },
  {
    id: 6,
    title: "Fake News Detector",
    github: "https://github.com/bhagavan444/News-detector",
    live: null,
    desc: "High-accuracy NLP-based fake news detection system using LSTM and BERT architectures with 92%+ accuracy on real-world datasets.",
    longDesc: "Advanced deep learning model trained on millions of articles. Provides confidence scores, highlights misleading phrases, and explains why content is classified as fake or real.",
    tags: ["NLP", "TensorFlow", "LSTM", "BERT", "Python"],
    icon: "📰",
    img: "https://drive.google.com/thumbnail?id=1i-qZCMDiOAy677h3y12es5xM_IL-_oOF&sz=w1200",
    color: "#10B981",
    highlights: [
      "92%+ Detection Accuracy",
      "LSTM + BERT Ensemble",
      "Real-time Analysis",
      "Explainable AI Highlights",
      "Confidence Scoring",
      "Multi-language Support"
    ],
    stats: {
      articles: "150k+",
      accuracy: "92.4%"
    }
  }
];

export default function FuturisticPortfolio2050() {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [filter, setFilter] = useState("All");
  const containerRef = useRef(null);
  const particlesRef = useRef(null);

  // Mouse & Scroll Effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Holographic Particle System
  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const allProjects = [...aiProjects, ...gitProjects];
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.5 + 1,
      color: allProjects[Math.floor(Math.random() * allProjects.length)].color,
      opacity: Math.random() * 0.6 + 0.3,
      pulse: Math.random() * 0.02 + 0.01
    }));

    let animationId;
    const animate = () => {
      ctx.fillStyle = 'rgba(5, 0, 15, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.pulse;
        if (p.opacity > 0.9 || p.opacity < 0.3) p.pulse *= -1;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 + Math.sin(Date.now() * 0.001 + i) * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.floor(p.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i < j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `${p.color}${Math.floor((1 - dist / 180) * 60).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const allTags = ["All", ...new Set([...aiProjects, ...gitProjects].flatMap(p => p.tags))];
  const filteredProjects = filter === "All" 
    ? [...aiProjects, ...gitProjects] 
    : [...aiProjects, ...gitProjects].filter(p => p.tags.includes(filter));

  return (
    <div ref={containerRef} style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #05000f 0%, #0a0520 50%, #050012 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: '"Inter", system-ui, sans-serif'
    }}>
      {/* Global Animations */}
      <style>{`
        @keyframes holographicShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes floatPulse {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.85; }
          50% { transform: translateY(-25px) scale(1.06); opacity: 1; }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 15px currentColor); }
          50% { filter: drop-shadow(0 0 35px currentColor); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rotate3D {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes shimmerSweep {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
      `}</style>

      {/* Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        background: 'rgba(255,255,255,0.08)',
        zIndex: 9999
      }}>
        <div style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #EC4899, #F59E0B)',
          transition: 'width 0.15s ease-out',
          boxShadow: '0 0 25px rgba(139,92,246,0.9)'
        }} />
      </div>

      {/* Particle Canvas */}
      <canvas ref={particlesRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Cursor Glow */}
      <div style={{
        position: 'fixed',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.18), transparent 65%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        left: mousePosition.x,
        top: mousePosition.y,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 2,
        filter: 'blur(70px)'
      }} />

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1700px',
        margin: '0 auto',
        padding: '5rem clamp(1.5rem, 6vw, 4rem)'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '8rem',
          animation: 'slideIn 1.2s ease-out'
        }}>
          <div style={{
            fontSize: 'clamp(5rem, 14vw, 9rem)',
            marginBottom: '2.5rem',
            animation: 'floatPulse 7s ease-in-out infinite'
          }}>
            🌌
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.2rem',
            padding: '1rem 2.5rem',
            background: 'rgba(139,92,246,0.12)',
            backdropFilter: 'blur(25px)',
            border: '2.5px solid rgba(139,92,246,0.35)',
            borderRadius: '999px',
            marginBottom: '2.5rem',
            boxShadow: '0 12px 50px rgba(139,92,246,0.4)'
          }}>
            <Terminal size={28} style={{ color: '#8B5CF6', animation: 'glowPulse 3.5s infinite' }} />
            <span style={{
              fontWeight: '900',
              letterSpacing: '0.15em',
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              background: 'linear-gradient(90deg, #8B5CF6, #06B6D4, #EC4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              2050 — FUTURE PORTFOLIO
            </span>
            <Sparkles size={28} style={{ color: '#06B6D4', animation: 'rotate3D 10s linear infinite' }} />
          </div>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 12vw, 7.5rem)',
            fontWeight: '900',
            lineHeight: '1.05',
            marginBottom: '1.8rem',
            background: 'linear-gradient(135deg, #ffffff, #8B5CF6, #06B6D4, #EC4899)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'holographicShift 6s ease infinite'
          }}>
            Project Showcase
          </h1>

          <p style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)',
            color: '#a0a8c0',
            maxWidth: '900px',
            margin: '0 auto 4rem',
            lineHeight: '1.7'
          }}>
            Cutting-edge <span style={{ color: '#8B5CF6', fontWeight: '800' }}>MERN Stack</span> • <span style={{ color: '#06B6D4', fontWeight: '800' }}>AI-Powered</span> • <span style={{ color: '#EC4899', fontWeight: '800' }}>Machine Learning</span> Applications
          </p>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            maxWidth: '1100px',
            margin: '0 auto 4rem'
          }}>
            {[
              { icon: Code, label: 'Total Projects', value: aiProjects.length + gitProjects.length, color: '#8B5CF6' },
              { icon: Brain, label: 'AI Projects', value: aiProjects.length, color: '#06B6D4' },
              { icon: Star, label: 'Featured', value: [...aiProjects, ...gitProjects].filter(p => p.featured).length, color: '#FBBF24' },
              { icon: Rocket, label: 'Live Demos', value: [...aiProjects, ...gitProjects].filter(p => p.live).length, color: '#EC4899' }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} style={{
                  padding: '2.2rem 1.8rem',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(25px)',
                  borderRadius: '1.8rem',
                  border: `2.5px solid ${stat.color}35`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  animation: `slideIn 0.8s ease-out ${i * 0.15}s backwards`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 25px 60px ${stat.color}45`;
                  e.currentTarget.style.borderColor = stat.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = `${stat.color}35`;
                }}>
                  <Icon size={40} color={stat.color} style={{ marginBottom: '1rem' }} />
                  <div style={{
                    fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
                    fontWeight: '900',
                    color: stat.color,
                    marginBottom: '0.6rem'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: 'clamp(0.95rem, 2.2vw, 1.15rem)',
                    color: '#a0a8c0',
                    fontWeight: '700',
                    letterSpacing: '0.06em'
                  }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Filter Tags */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '6rem',
            animation: 'slideIn 1.2s ease-out 0.4s backwards'
          }}>
            {allTags.map(tag => (
              <button key={tag} onClick={() => setFilter(tag)} style={{
                padding: '0.9rem 1.8rem',
                background: filter === tag ? 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899)' : 'rgba(255,255,255,0.06)',
                border: filter === tag ? 'none' : '2.5px solid rgba(139,92,246,0.35)',
                borderRadius: '999px',
                color: filter === tag ? '#fff' : '#a0a8c0',
                fontWeight: '800',
                fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
                cursor: 'pointer',
                transition: 'all 0.4s',
                boxShadow: filter === tag ? '0 12px 35px rgba(139,92,246,0.6)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (filter !== tag) {
                  e.currentTarget.style.background = 'rgba(139,92,246,0.18)';
                  e.currentTarget.style.color = '#e2e8f0';
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== tag) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#a0a8c0';
                }
              }}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* AI Projects Section */}
        <div style={{ marginBottom: '8rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <Brain size={48} style={{ verticalAlign: 'middle', marginRight: '1rem', color: '#8B5CF6' }} />
            AI Projects
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)'
          }}>
            {aiProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id}
                project={project}
                idx={idx}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                setActiveProject={setActiveProject}
              />
            ))}
          </div>
        </div>

        {/* GitHub Projects Section */}
        <div style={{ marginBottom: '10rem' }}>
          <h2 style={{
            fontSize: 'clamp(2.8rem, 7vw, 4.5rem)',
            fontWeight: '900',
            textAlign: 'center',
            marginBottom: '4rem',
            background: 'linear-gradient(135deg, #EC4899, #F59E0B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <Github size={48} style={{ verticalAlign: 'middle', marginRight: '1rem', color: '#EC4899' }} />
            GitHub Projects
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)'
          }}>
            {gitProjects.map((project, idx) => (
              <ProjectCard 
                key={project.id}
                project={project}
                idx={idx}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                setActiveProject={setActiveProject}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(4rem, 10vw, 7rem) clamp(2rem, 6vw, 4rem)',
          background: 'rgba(139,92,246,0.08)',
          backdropFilter: 'blur(30px)',
          borderRadius: '3rem',
          border: '3px solid rgba(139,92,246,0.25)',
          animation: 'slideIn 1.2s ease-out 0.6s backwards'
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '900',
            marginBottom: '2rem',
            background: 'linear-gradient(135deg, #8B5CF6, #06B6D4, #EC4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Ready to Build the Future?
          </h2>
          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
            color: '#a0a8c0',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem',
            lineHeight: '1.7'
          }}>
            Let's collaborate on groundbreaking AI-powered applications that shape tomorrow.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{
              padding: '1.3rem 2.8rem',
              background: 'rgba(139,92,246,0.18)',
              border: '2.5px solid #8B5CF6',
              borderRadius: '999px',
              color: '#8B5CF6',
              fontWeight: '900',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'all 0.4s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(139,92,246,0.3)';
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(139,92,246,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(139,92,246,0.18)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
              <Github size={28} />
              Explore GitHub
            </a>
            <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
              padding: '1.3rem 2.8rem',
              background: 'linear-gradient(135deg, #06B6D4, #EC4899)',
              border: 'none',
              borderRadius: '999px',
              color: '#fff',
              fontWeight: '900',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 20px 60px rgba(6,182,212,0.6)',
              transition: 'all 0.4s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 30px 70px rgba(6,182,212,0.8)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(6,182,212,0.6)';
            }}>
              <Mail size={28} />
              Let's Collaborate
            </a>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div onClick={() => setActiveProject(null)} style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.96)',
          backdropFilter: 'blur(50px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          animation: 'slideIn 0.4s ease-out'
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'rgba(15,15,35,0.98)',
            backdropFilter: 'blur(50px)',
            borderRadius: '2.5rem',
            maxWidth: '1300px',
            width: '100%',
            maxHeight: '92vh',
            overflowY: 'auto',
            border: `4px solid ${activeProject.color}`,
            boxShadow: `0 60px 120px ${activeProject.color}70`,
            animation: 'slideIn 0.5s ease-out'
          }}>
            {/* Modal Header */}
            <div style={{
              position: 'sticky',
              top: 0,
              background: 'rgba(15,15,35,0.98)',
              backdropFilter: 'blur(40px)',
              padding: 'clamp(2rem, 5vw, 3rem)',
              borderBottom: `3px solid ${activeProject.color}50`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ fontSize: 'clamp(3.5rem, 8vw, 5.5rem)' }}>{activeProject.icon}</span>
                <div>
                  <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                    fontWeight: '900',
                    marginBottom: '0.6rem'
                  }}>
                    {activeProject.title}
                  </h2>
                  <p style={{ 
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
                    color: activeProject.color, 
                    fontWeight: '800' 
                  }}>
                    Advanced AI / Full-Stack Project
                  </p>
                </div>
              </div>
              <button onClick={() => setActiveProject(null)} style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#ef4444',
                transition: 'all 0.4s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg) scale(1.3)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0) scale(1)'}>
                <X size={40} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: 'clamp(2.5rem, 6vw, 4rem)' }}>
              <img src={activeProject.img} alt={activeProject.title} style={{
                width: '100%',
                borderRadius: '2rem',
                marginBottom: '3rem',
                boxShadow: `0 40px 80px ${activeProject.color}50`
              }} />

              <p style={{
                fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)',
                lineHeight: '1.9',
                color: '#cbd5e1',
                marginBottom: '3rem'
              }}>
                {activeProject.longDesc || activeProject.desc}
              </p>

              {/* Stats */}
              {activeProject.stats && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1.5rem',
                  marginBottom: '3rem'
                }}>
                  {Object.entries(activeProject.stats).map(([key, value], i) => (
                    <div key={i} style={{
                      padding: '1.5rem',
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: '1.5rem',
                      border: `2px solid ${activeProject.color}40`,
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        fontWeight: '900',
                        color: activeProject.color,
                        marginBottom: '0.5rem'
                      }}>
                        {value}
                      </div>
                      <div style={{
                        fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                        color: '#94a3b8',
                        fontWeight: '600',
                        textTransform: 'capitalize'
                      }}>
                        {key.replace(/([A-Z])/g, ' $1')}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <h3 style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: '900',
                color: activeProject.color,
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Sparkles size={32} />
                Key Features
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3.5rem'
              }}>
                {activeProject.highlights.map((highlight, i) => (
                  <div key={i} style={{
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.06)',
                    borderRadius: '1.5rem',
                    border: `2px solid ${activeProject.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <CheckCircle2 size={24} style={{ color: activeProject.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 'clamp(1rem, 2.2vw, 1.2rem)', fontWeight: '700' }}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <h3 style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)',
                fontWeight: '900',
                color: activeProject.color,
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}>
                <Layers size={32} />
                Technology Stack
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                {activeProject.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '0.9rem 1.8rem',
                    background: `${activeProject.color}25`,
                    border: `2.5px solid ${activeProject.color}60`,
                    borderRadius: '999px',
                    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                    fontWeight: '800',
                    color: '#e2e8f0'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" style={{
                    padding: '1.3rem 2.8rem',
                    background: 'rgba(139,92,246,0.18)',
                    border: '2.5px solid #8B5CF6',
                    borderRadius: '999px',
                    color: '#8B5CF6',
                    fontWeight: '900',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.3)';
                    e.currentTarget.style.transform = 'translateY(-6px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.18)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <Github size={28} />
                    View Source Code
                  </a>
                )}
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noopener noreferrer" style={{
                    padding: '1.3rem 2.8rem',
                    background: `linear-gradient(135deg, ${activeProject.color}, #ffffff)`,
                    border: 'none',
                    borderRadius: '999px',
                    color: '#000',
                    fontWeight: '900',
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    boxShadow: `0 20px 60px ${activeProject.color}70`,
                    transition: 'all 0.4s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.05)';
                    e.currentTarget.style.boxShadow = `0 30px 80px ${activeProject.color}90`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${activeProject.color}70`;
                  }}>
                    <Rocket size={28} />
                    Launch Live Demo
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable Project Card Component
function ProjectCard({ project, idx, hoveredCard, setHoveredCard, setActiveProject }) {
  return (
    <div 
      onMouseEnter={() => setHoveredCard(project.id)}
      onMouseLeave={() => setHoveredCard(null)}
      onClick={() => setActiveProject(project)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        animation: `slideIn 0.8s ease-out ${idx * 0.12}s backwards`,
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hoveredCard === project.id ? 'translateY(-16px) scale(1.03)' : 'translateY(0) scale(1)'
      }}>
      {/* Outer Glow */}
      <div style={{
        position: 'absolute',
        inset: '-50px',
        background: `radial-gradient(circle, ${project.color}40, transparent 70%)`,
        opacity: hoveredCard === project.id ? 1 : 0,
        transition: 'opacity 0.6s',
        filter: 'blur(80px)',
        zIndex: -1
      }} />

      {/* Card */}
      <div style={{
        background: 'rgba(20,20,40,0.92)',
        backdropFilter: 'blur(35px)',
        borderRadius: '2.5rem',
        overflow: 'hidden',
        border: `2.5px solid ${hoveredCard === project.id ? project.color : 'rgba(255,255,255,0.12)'}`,
        boxShadow: hoveredCard === project.id ? `0 50px 100px ${project.color}50` : '0 15px 40px rgba(0,0,0,0.6)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Featured Badge */}
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            padding: '0.6rem 1.3rem',
            background: 'linear-gradient(135deg, #FBBF24, #F59E0B)',
            borderRadius: '999px',
            fontSize: '0.9rem',
            fontWeight: '900',
            color: '#000',
            zIndex: 20,
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 12px 35px rgba(251,191,36,0.7)'
          }}>
            <Star size={16} fill="#000" />
            FEATURED
          </div>
        )}

        {/* Image */}
        <div style={{ position: 'relative', height: 'clamp(220px, 45vw, 340px)', overflow: 'hidden' }}>
          <img src={project.img} alt={project.title} style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: hoveredCard === project.id ? 'scale(1.18)' : 'scale(1.08)'
          }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(20,20,40,1) 0%, transparent 65%)'
          }} />
          {hoveredCard === project.id && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)',
              animation: 'shimmerSweep 2.5s infinite'
            }} />
          )}
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: 'clamp(2.8rem, 7vw, 4.2rem)' }}>{project.icon}</span>
            <h3 style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: '900',
              color: '#fff',
              lineHeight: '1.2'
            }}>
              {project.title}
            </h3>
          </div>

          <p style={{
            color: '#a0a8c0',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            lineHeight: '1.7',
            marginBottom: '2rem'
          }}>
            {project.desc}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                padding: '0.5rem 1.1rem',
                background: `${project.color}25`,
                border: `1.5px solid ${project.color}50`,
                borderRadius: '999px',
                fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
                fontWeight: '700',
                color: '#e2e8f0'
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: '2rem' }}>
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '0.8rem',
                fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                color: '#cbd5e1'
              }}>
                <CheckCircle2 size={18} style={{ color: project.color }} />
                {highlight}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  flex: 1,
                  minWidth: '140px',
                  padding: '0.9rem 1.5rem',
                  background: 'rgba(139,92,246,0.18)',
                  border: '2px solid rgba(139,92,246,0.6)',
                  borderRadius: '999px',
                  color: '#8B5CF6',
                  fontWeight: '800',
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.7rem',
                  transition: 'all 0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(139,92,246,0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(139,92,246,0.18)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                <Github size={20} />
                View Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  flex: 1,
                  minWidth: '140px',
                  padding: '0.9rem 1.5rem',
                  background: `linear-gradient(135deg, ${project.color}, #ffffff)`,
                  border: 'none',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: '900',
                  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.7rem',
                  boxShadow: `0 12px 35px ${project.color}60`,
                  transition: 'all 0.4s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${project.color}80`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 12px 35px ${project.color}60`;
                }}>
                <Rocket size={20} />
                Live Demo
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}