import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  Smartphone, Code, Brain, Cpu, Shield, GitBranch,
  Calendar, Users, Sparkles, Zap, Star, Award,
  Rocket, BookOpen, X, CheckCircle2, ArrowRight,
  GraduationCap, Layers, Terminal, Database, Server, Lock,
  Globe, TrendingUp, Target, Clock, Trophy, Flame,
  Microscope, Workflow, Network, Binary, ChevronRight,
  Play, Pause, Filter, Search, BarChart3, Eye, Heart,
  Share2, Bookmark, Download, FileText, MonitorPlay,
  Code2, Lightbulb, Briefcase, Medal, Activity
} from "lucide-react";

const workshops = [
  {
    title: "Quantum Computing Fundamentals",
    icon: Cpu,
    color: "#00f0ff",
    category: "Emerging Tech",
    rarity: "Legendary",
    desc: "Master quantum algorithms, qubits, and quantum circuit design for next-gen computing.",
    fullDesc: "Dive deep into quantum mechanics, quantum gates, entanglement, and quantum algorithms. Build real quantum circuits using Qiskit and explore quantum machine learning applications.",
    skills: ["Qiskit", "Quantum Gates", "Superposition", "Entanglement", "Q-Algorithms", "IBM Quantum"],
    whatILearned: [
      "Understanding quantum mechanics principles",
      "Designing and simulating quantum circuits",
      "Implementing Grover's and Shor's algorithms",
      "Quantum machine learning applications",
      "Working with IBM Quantum Experience"
    ],
    outcomes: [
      "Built 5+ quantum algorithms from scratch",
      "Created quantum ML models",
      "Achieved 95% quantum circuit efficiency"
    ],
    duration: "14 Weeks",
    level: "Advanced",
    projects: 9,
    enrolled: 342,
    featured: true,
    difficulty: 95,
    completionRate: 68,
    avgSalaryBoost: "+45%",
    certifications: ["IBM Quantum Developer", "Quantum Computing Specialist"],
    videos: 48,
    rating: 4.9,
    reviews: 284
  },
  {
    title: "Advanced Blockchain Architecture",
    icon: Lock,
    color: "#a78bfa",
    category: "Web3",
    rarity: "Epic",
    desc: "Design decentralized systems, smart contracts, and build production-grade blockchain solutions.",
    fullDesc: "Master blockchain fundamentals, consensus algorithms, smart contract security, DeFi protocols, and build scalable decentralized applications on multiple chains.",
    skills: ["Solidity", "Rust", "Smart Contracts", "Web3.js", "DeFi Protocols", "Layer 2"],
    whatILearned: [
      "Building secure smart contracts",
      "Implementing consensus mechanisms",
      "DeFi protocol architecture",
      "Cross-chain interoperability",
      "Smart contract auditing"
    ],
    outcomes: [
      "Deployed 12+ production smart contracts",
      "Built DeFi lending protocol",
      "Passed smart contract security audits"
    ],
    duration: "16 Weeks",
    level: "Advanced",
    projects: 11,
    enrolled: 567,
    featured: true,
    difficulty: 88,
    completionRate: 72,
    avgSalaryBoost: "+52%",
    certifications: ["Certified Blockchain Developer", "Smart Contract Auditor"],
    videos: 56,
    rating: 4.8,
    reviews: 412
  },
  {
    title: "AI/ML System Design at Scale",
    icon: Brain,
    color: "#ff61d2",
    category: "AI/ML",
    rarity: "Legendary",
    desc: "Build production ML systems handling millions of predictions with advanced MLOps practices.",
    fullDesc: "Learn to design, deploy, and maintain large-scale ML systems. Master MLOps, model monitoring, A/B testing, feature stores, and real-time inference at scale.",
    skills: ["MLOps", "Kubeflow", "Feature Engineering", "Model Monitoring", "A/B Testing", "Real-time ML"],
    whatILearned: [
      "Building scalable ML pipelines",
      "Implementing feature stores",
      "Real-time model serving",
      "ML system monitoring and observability",
      "Advanced model optimization"
    ],
    outcomes: [
      "Built ML systems serving 10M+ requests/day",
      "Reduced model latency by 80%",
      "Implemented automated retraining pipelines"
    ],
    duration: "18 Weeks",
    level: "Expert",
    projects: 14,
    enrolled: 423,
    featured: true,
    difficulty: 92,
    completionRate: 65,
    avgSalaryBoost: "+58%",
    certifications: ["ML Systems Engineer", "MLOps Professional"],
    videos: 64,
    rating: 4.9,
    reviews: 356
  },
  {
    title: "Distributed Systems Engineering",
    icon: Network,
    color: "#00ff88",
    category: "Backend",
    rarity: "Epic",
    desc: "Design fault-tolerant distributed systems with microservices, event-driven architecture.",
    fullDesc: "Master distributed computing patterns, consensus algorithms, distributed databases, message queues, and build highly available, fault-tolerant systems.",
    skills: ["Kafka", "Redis", "Kubernetes", "gRPC", "Distributed Databases", "Service Mesh"],
    whatILearned: [
      "Designing distributed architectures",
      "Implementing consensus algorithms",
      "Building event-driven systems",
      "Distributed tracing and monitoring",
      "Handling distributed transactions"
    ],
    outcomes: [
      "Built systems handling 100K+ RPS",
      "Achieved 99.99% uptime",
      "Implemented zero-downtime deployments"
    ],
    duration: "16 Weeks",
    level: "Advanced",
    projects: 12,
    enrolled: 678,
    featured: false,
    difficulty: 89,
    completionRate: 71,
    avgSalaryBoost: "+48%",
    certifications: ["Distributed Systems Architect", "Cloud Native Developer"],
    videos: 52,
    rating: 4.7,
    reviews: 489
  },
  {
    title: "Advanced Computer Vision",
    icon: Microscope,
    color: "#ffd700",
    category: "AI/ML",
    rarity: "Epic",
    desc: "Build state-of-the-art CV models for object detection, segmentation, and recognition.",
    fullDesc: "Master CNNs, Vision Transformers, object detection (YOLO, R-CNN), semantic segmentation, and deploy CV models at scale using TensorRT and ONNX.",
    skills: ["PyTorch", "YOLO", "Vision Transformers", "OpenCV", "TensorRT", "ONNX"],
    whatILearned: [
      "Training custom object detection models",
      "Implementing semantic segmentation",
      "Optimizing CV models for edge devices",
      "Building real-time video processing pipelines",
      "Transfer learning and fine-tuning"
    ],
    outcomes: [
      "Built models with 98%+ accuracy",
      "Deployed real-time inference systems",
      "Optimized models for 30+ FPS on edge"
    ],
    duration: "14 Weeks",
    level: "Advanced",
    projects: 10,
    enrolled: 534,
    featured: false,
    difficulty: 87,
    completionRate: 74,
    avgSalaryBoost: "+44%",
    certifications: ["Computer Vision Expert", "Deep Learning Specialist"],
    videos: 46,
    rating: 4.8,
    reviews: 378
  },
  {
    title: "Cloud Native Security",
    icon: Shield,
    color: "#ff4d6d",
    category: "Security",
    rarity: "Rare",
    desc: "Master zero-trust architecture, container security, and cloud security best practices.",
    fullDesc: "Learn advanced security patterns for cloud-native applications including secrets management, identity and access management, security scanning, and incident response.",
    skills: ["Zero Trust", "IAM", "Vault", "Container Security", "SIEM", "Penetration Testing"],
    whatILearned: [
      "Implementing zero-trust architecture",
      "Securing Kubernetes clusters",
      "Automated security scanning",
      "Threat modeling and risk assessment",
      "Incident response procedures"
    ],
    outcomes: [
      "Reduced security vulnerabilities by 90%",
      "Achieved SOC 2 compliance",
      "Built automated security pipelines"
    ],
    duration: "12 Weeks",
    level: "Advanced",
    projects: 8,
    enrolled: 445,
    featured: false,
    difficulty: 82,
    completionRate: 79,
    avgSalaryBoost: "+41%",
    certifications: ["Cloud Security Professional", "Kubernetes Security Specialist"],
    videos: 42,
    rating: 4.6,
    reviews: 312
  },
  {
    title: "Real-Time Data Engineering",
    icon: Zap,
    color: "#ff9500",
    category: "Data",
    rarity: "Epic",
    desc: "Build streaming data pipelines processing millions of events per second at scale.",
    fullDesc: "Master real-time data processing with Apache Kafka, Flink, and Spark Streaming. Build event-driven architectures and real-time analytics systems.",
    skills: ["Kafka", "Apache Flink", "Spark Streaming", "Debezium", "ClickHouse", "Real-time Analytics"],
    whatILearned: [
      "Building streaming data pipelines",
      "Implementing exactly-once semantics",
      "Real-time data transformations",
      "Stream processing patterns",
      "Building real-time dashboards"
    ],
    outcomes: [
      "Built pipelines processing 5M+ events/sec",
      "Achieved sub-second latency",
      "Implemented real-time fraud detection"
    ],
    duration: "14 Weeks",
    level: "Advanced",
    projects: 11,
    enrolled: 512,
    featured: false,
    difficulty: 86,
    completionRate: 73,
    avgSalaryBoost: "+46%",
    certifications: ["Streaming Data Engineer", "Real-time Systems Architect"],
    videos: 50,
    rating: 4.7,
    reviews: 445
  },
  {
    title: "Advanced System Design",
    icon: Workflow,
    color: "#00d4ff",
    category: "Architecture",
    rarity: "Legendary",
    desc: "Master designing systems like Netflix, Uber, Twitter at massive scale.",
    fullDesc: "Learn to design complex distributed systems handling billions of requests. Master trade-offs, scalability patterns, database sharding, caching strategies, and more.",
    skills: ["System Design", "Scalability", "CAP Theorem", "Load Balancing", "Caching", "Database Design"],
    whatILearned: [
      "Designing systems for massive scale",
      "Making architectural trade-offs",
      "Database sharding strategies",
      "Building globally distributed systems",
      "Performance optimization at scale"
    ],
    outcomes: [
      "Designed 15+ complex systems",
      "Passed FAANG system design interviews",
      "Built systems serving 100M+ users"
    ],
    duration: "12 Weeks",
    level: "Expert",
    projects: 15,
    enrolled: 892,
    featured: true,
    difficulty: 94,
    completionRate: 67,
    avgSalaryBoost: "+62%",
    certifications: ["Solutions Architect", "Distinguished Engineer Track"],
    videos: 68,
    rating: 5.0,
    reviews: 621
  }
];

const categories = ["All", "AI/ML", "Web3", "Backend", "Security", "Data", "Architecture", "Emerging Tech"];
const rarityColors = {
  "Legendary": "#ffd700",
  "Epic": "#a78bfa",
  "Rare": "#00f0ff"
};

export default function EliteWorkshops() {
  const [selected, setSelected] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [savedWorkshops, setSavedWorkshops] = useState(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Hollywood-style parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Advanced Developer/Designer Background System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Code snippets that float around
    const codeSnippets = [
      '{ }', '< />', '( )', '[ ]', '=>', '::',
      'fn', 'def', 'var', 'let', 'const',
      '===', '!==', '&&', '||', '++',
      'import', 'export', 'async', 'await',
      'class', 'extends', 'return', 'new'
    ];

    class CodeParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() < 0.5 ? -20 : canvas.height + 20;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.8;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.color = ['#00f0ff', '#a78bfa', '#ff61d2', '#00ff88', '#ffd700'][Math.floor(Math.random() * 5)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.size = Math.random() * 8 + 12;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -50 || this.x > canvas.width + 50 || 
            this.y < -50 || this.y > canvas.height + 50) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font = `${this.size}px 'Fira Code', monospace`;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.textAlign = 'center';
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }
    }

    class GeometricShape {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.size = Math.random() * 40 + 20;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.color = ['#00f0ff', '#a78bfa', '#ff61d2', '#00ff88'][Math.floor(Math.random() * 4)];
        this.type = Math.floor(Math.random() * 4); // 0: triangle, 1: square, 2: hexagon, 3: circle
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;

        if (this.x < -100) this.x = canvas.width + 100;
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.y < -100) this.y = canvas.height + 100;
        if (this.y > canvas.height + 100) this.y = -100;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        if (this.type === 0) {
          // Triangle
          ctx.moveTo(0, -this.size / 2);
          ctx.lineTo(this.size / 2, this.size / 2);
          ctx.lineTo(-this.size / 2, this.size / 2);
          ctx.closePath();
        } else if (this.type === 1) {
          // Square
          ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
        } else if (this.type === 2) {
          // Hexagon
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = Math.cos(angle) * this.size / 2;
            const y = Math.sin(angle) * this.size / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else {
          // Circle
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    class BinaryStream {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -500;
        this.speed = Math.random() * 2 + 1;
        this.characters = Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0');
        this.color = ['#00f0ff', '#a78bfa'][Math.floor(Math.random() * 2)];
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 100) {
          this.y = -100;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.font = '14px "Fira Code", monospace';
        ctx.fillStyle = this.color;
        this.characters.forEach((char, i) => {
          ctx.globalAlpha = 1 - (i / this.characters.length) * 0.8;
          ctx.fillText(char, this.x, this.y + i * 20);
        });
        ctx.globalAlpha = 1;
      }
    }

    class GridLine {
      constructor(isVertical) {
        this.isVertical = isVertical;
        this.position = Math.random() * (isVertical ? canvas.width : canvas.height);
        this.speed = Math.random() * 0.5 + 0.2;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.color = ['#00f0ff', '#a78bfa', '#ff61d2'][Math.floor(Math.random() * 3)];
      }

      update() {
        if (this.isVertical) {
          this.position += this.speed;
          if (this.position > canvas.width) this.position = 0;
        } else {
          this.position += this.speed;
          if (this.position > canvas.height) this.position = 0;
        }
      }

      draw() {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        if (this.isVertical) {
          ctx.moveTo(this.position, 0);
          ctx.lineTo(this.position, canvas.height);
        } else {
          ctx.moveTo(0, this.position);
          ctx.lineTo(canvas.width, this.position);
        }
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }

    const codeParticles = Array.from({ length: 40 }, () => new CodeParticle());
    const geometricShapes = Array.from({ length: 15 }, () => new GeometricShape());
    const binaryStreams = Array.from({ length: 8 }, () => new BinaryStream());
    const gridLines = [
      ...Array.from({ length: 5 }, () => new GridLine(true)),
      ...Array.from({ length: 5 }, () => new GridLine(false))
    ];

    const drawWaveform = () => {
      ctx.strokeStyle = 'rgba(0,240,255,0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const y = canvas.height / 2 + Math.sin((x + time) * 0.01) * 30 + Math.sin((x + time) * 0.02) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const drawCircuitPattern = () => {
      ctx.strokeStyle = 'rgba(167,139,250,0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < 5; i++) {
        const x = (time * 0.5 + i * 200) % canvas.width;
        const y = Math.sin(time * 0.001 + i) * 100 + canvas.height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x + 30, y);
        ctx.lineTo(x + 80, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      // Dark gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#000000');
      bgGradient.addColorStop(0.5, '#0a0a1e');
      bgGradient.addColorStop(1, '#000000');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated grid lines
      gridLines.forEach(line => {
        line.update();
        line.draw();
      });

      // Draw waveform
      drawWaveform();

      // Draw circuit pattern
      drawCircuitPattern();

      // Draw geometric shapes
      geometricShapes.forEach(shape => {
        shape.update();
        shape.draw();
      });

      // Draw binary streams
      binaryStreams.forEach(stream => {
        stream.update();
        stream.draw();
      });

      // Draw code particles
      codeParticles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Connection network
      ctx.strokeStyle = 'rgba(0,240,255,0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i < codeParticles.length; i++) {
        for (let j = i + 1; j < codeParticles.length; j++) {
          const dx = codeParticles[i].x - codeParticles[j].x;
          const dy = codeParticles[i].y - codeParticles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            ctx.globalAlpha = (1 - distance / 200) * 0.3;
            ctx.beginPath();
            ctx.moveTo(codeParticles[i].x, codeParticles[i].y);
            ctx.lineTo(codeParticles[j].x, codeParticles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      time += 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const Counter = ({ target, suffix = "" }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const step = target / (duration / 16);
      const timer = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [target]);
    return <span>{count}{suffix}</span>;
  };

  const toggleSave = useCallback((index) => {
    setSavedWorkshops(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  }, []);

  const filteredWorkshops = useMemo(() => {
    return workshops
      .filter(w => filterCategory === "All" || w.category === filterCategory)
      .filter(w => 
        w.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        w.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => {
        if (sortBy === "featured") return b.featured - a.featured;
        if (sortBy === "difficulty") return b.difficulty - a.difficulty;
        if (sortBy === "enrolled") return b.enrolled - a.enrolled;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [filterCategory, searchQuery, sortBy]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { 
          background: linear-gradient(180deg, #00f0ff, #a78bfa); 
          border-radius: 10px;
        }

        :root {
          --neon-cyan: #00f0ff;
          --neon-purple: #a78bfa;
          --neon-pink: #ff61d2;
          --neon-gold: #ffd700;
          --neon-green: #00ff88;
          --neon-gradient: linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2);
          --hollywood-glow: drop-shadow(0 0 20px currentColor);
        }

        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(60px) scale(0.95); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
        
        @keyframes slideInLeft { 
          from { opacity: 0; transform: translateX(-60px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        
        @keyframes slideInRight { 
          from { opacity: 0; transform: translateX(60px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        
        @keyframes glow { 
          0%, 100% { opacity: 1; filter: brightness(1); } 
          50% { opacity: 0.7; filter: brightness(1.3); } 
        }
        
        @keyframes float { 
          0%, 100% { transform: translateY(0) rotate(0deg); } 
          50% { transform: translateY(-20px) rotate(5deg); } 
        }
        
        @keyframes shimmer { 
          0% { background-position: -200% center; } 
          100% { background-position: 200% center; } 
        }
        
        @keyframes rotate { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }

        @keyframes pulse { 
          0%, 100% { transform: scale(1); } 
          50% { transform: scale(1.05); } 
        }

        @keyframes neonPulse {
          0%, 100% { 
            box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; 
          }
          50% { 
            box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor; 
          }
        }

        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor; }
          50% { text-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor; }
        }

        .workshop-card {
          position: relative;
          background: linear-gradient(135deg, rgba(10,10,30,0.98) 0%, rgba(20,10,40,0.95) 100%);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .workshop-card:hover {
          transform: translateY(-16px) scale(1.02);
          border-color: var(--neon-cyan);
          box-shadow: 
            0 25px 70px rgba(0,240,255,0.5),
            inset 0 0 60px rgba(0,240,255,0.1);
        }

        .workshop-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, transparent 30%, rgba(0,240,255,0.2) 50%, transparent 70%);
          background-size: 300% 300%;
          animation: shimmer 4s infinite;
          pointer-events: none;
          border-radius: 28px;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .workshop-card:hover::before {
          opacity: 1;
        }

        .workshop-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,240,255,0.15) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .workshop-card:hover::after {
          opacity: 1;
        }

        .rarity-badge {
          padding: 0.5rem 1.2rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          animation: neonPulse 2s infinite;
          backdrop-filter: blur(10px);
        }

        .filter-btn {
          padding: 0.8rem 1.8rem;
          background: rgba(0,0,0,0.7);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 999px;
          color: #fff;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .filter-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--neon-gradient);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .filter-btn:hover, .filter-btn.active {
          background: rgba(0,240,255,0.2);
          border-color: var(--neon-cyan);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0,240,255,0.4);
        }

        .filter-btn.active {
          color: #000;
          font-weight: 800;
        }

        .filter-btn.active::before {
          opacity: 1;
        }

        .search-input {
          width: 100%;
          padding: 1.2rem 1.8rem 1.2rem 4rem;
          background: rgba(0,0,0,0.7);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 999px;
          color: #fff;
          font-family: 'Fira Code', monospace;
          font-size: 1.05rem;
          outline: none;
          transition: all 0.4s;
          backdrop-filter: blur(10px);
        }

        .search-input:focus {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 30px rgba(0,240,255,0.4), inset 0 0 20px rgba(0,240,255,0.1);
          transform: scale(1.02);
        }

        .search-input::placeholder {
          color: rgba(255,255,255,0.4);
        }

        .stat-card {
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,20,60,0.4) 100%);
          border: 2px solid rgba(0,240,255,0.3);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--neon-gradient);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .stat-card:hover {
          border-color: var(--neon-cyan);
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 50px rgba(0,240,255,0.4);
        }

        .stat-card:hover::before {
          opacity: 0.1;
        }

        .icon-wrapper {
          width: 140px;
          height: 140px;
          border-radius: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -4px;
          background: conic-gradient(from 0deg, var(--icon-color), transparent, var(--icon-color));
          border-radius: 28px;
          animation: rotate 4s linear infinite;
          opacity: 0;
          transition: opacity 0.4s;
        }

        .workshop-card:hover .icon-wrapper::before {
          opacity: 1;
        }

        .icon-wrapper::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: rgba(0,0,0,0.9);
          border-radius: 24px;
        }

        .action-btn {
          padding: 0.6rem;
          background: rgba(0,0,0,0.6);
          border: 2px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-btn:hover {
          background: rgba(0,240,255,0.2);
          border-color: var(--neon-cyan);
          transform: scale(1.1);
        }

        .action-btn.active {
          background: rgba(255,0,100,0.3);
          border-color: #ff0066;
          color: #ff0066;
        }

        .skill-tag {
          padding: 0.6rem 1.2rem;
          background: rgba(0,0,0,0.6);
          border: 2px solid currentColor;
          border-radius: 999px;
          font-size: 0.85rem;
          font-family: 'Fira Code', monospace;
          font-weight: 600;
          transition: all 0.3s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .skill-tag::before {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px currentColor;
        }

        .skill-tag:hover::before {
          opacity: 0.2;
        }

        .progress-bar {
          height: 8px;
          background: rgba(255,255,255,0.1);
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: var(--neon-gradient);
          border-radius: 999px;
          position: relative;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: shimmer 2s infinite;
        }

        .modal-backdrop {
          backdrop-filter: blur(20px) saturate(180%);
          background: rgba(0,0,0,0.98);
        }

        .modal-content {
          background: linear-gradient(135deg, rgba(10,10,30,0.98) 0%, rgba(20,10,40,0.95) 100%);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
        }

        .modal-content::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 0deg, var(--neon-cyan), var(--neon-purple), var(--neon-pink), var(--neon-cyan));
          animation: rotate 8s linear infinite;
          z-index: -1;
        }

        .modal-content::after {
          content: '';
          position: absolute;
          inset: 4px;
          background: linear-gradient(135deg, rgba(10,10,30,0.98) 0%, rgba(20,10,40,0.95) 100%);
          border-radius: 28px;
          z-index: -1;
        }

        @media (max-width: 768px) {
          .workshop-grid { 
            grid-template-columns: 1fr !important;
            padding: 0 0.5rem;
          }
          .filter-container { 
            flex-direction: column !important; 
            gap: 1rem !important;
          }
          .stat-card { padding: 1.5rem; }
          .icon-wrapper { width: 100px; height: 100px; }
        }

        @media (max-width: 480px) {
          .workshop-grid { gap: 2rem !important; }
          .modal-content { margin: 1rem; }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#000000',
        color: '#e0e0ff',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(4rem, 10vw, 8rem) 1.5rem 6rem',
        fontFamily: "'Outfit', sans-serif"
      }}>
        {/* Radial Gradient Accents */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse at 10% 20%, rgba(0,240,255,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(167,139,250,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(255,97,210,0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          opacity: 0.7
        }} />

        {/* Animated Canvas */}
        <canvas ref={canvasRef} style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Dynamic Mouse Light */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(0,240,255,0.08) 0%, transparent 50%)`,
          pointerEvents: 'none',
          opacity: 0.5
        }} />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1600px',
          margin: '0 auto'
        }}>
          {/* Cinematic Header */}
          <div ref={heroRef} style={{ 
            textAlign: 'center', 
            marginBottom: '6rem',
            transform: `translateY(${scrollY * 0.3}px)`
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.8rem 2rem',
              background: 'rgba(0,240,255,0.15)',
              border: '2px solid rgba(0,240,255,0.5)',
              borderRadius: '999px',
              marginBottom: '2rem',
              animation: 'glow 3s infinite, slideUp 0.6s ease-out',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 40px rgba(0,240,255,0.3)'
            }}>
              <Flame size={24} color="#ffd700" style={{ animation: 'float 2s ease-in-out infinite' }} />
              <span style={{ 
                fontFamily: "'Orbitron', monospace", 
                fontSize: '1rem', 
                fontWeight: 700,
                letterSpacing: '3px',
                background: 'var(--neon-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                ELITE DEVELOPER PROGRAMS
              </span>
              <Flame size={24} color="#ffd700" style={{ animation: 'float 2s ease-in-out infinite' }} />
            </div>

            <h1 style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 900,
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '4px',
              marginBottom: '2rem',
              textTransform: 'uppercase',
              fontFamily: "'Orbitron', sans-serif",
              animation: 'slideUp 0.8s ease-out, textGlow 3s infinite',
              lineHeight: 1.1,
              textShadow: '0 0 80px rgba(0,240,255,0.5)'
            }}>
              LEGENDARY<br />WORKSHOPS
            </h1>

            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
              color: '#b0b0e0',
              maxWidth: '1000px',
              margin: '0 auto 4rem',
              lineHeight: 1.9,
              animation: 'slideUp 1s ease-out',
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}>
              Master cutting-edge technologies through intensive, hands-on programs designed 
              for elite developers. Join the top 1% of engineering talent worldwide and 
              transform your career trajectory.
            </p>

            {/* Hollywood Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {[
                { icon: Users, label: "Elite Students", value: 4500, suffix: "+", color: "#00f0ff" },
                { icon: Trophy, label: "Completion Rate", value: 73, suffix: "%", color: "#ffd700" },
                { icon: TrendingUp, label: "Avg Salary Boost", value: 48, suffix: "%", color: "#00ff88" },
                { icon: Award, label: "Industry Certs", value: 16, suffix: "", color: "#a78bfa" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="stat-card" 
                  style={{ 
                    animation: `slideUp ${0.4 + i * 0.15}s ease-out`,
                    animationDelay: `${i * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                >
                  <stat.icon 
                    size={40} 
                    color={stat.color} 
                    style={{ 
                      margin: '0 auto 1rem',
                      filter: 'var(--hollywood-glow)',
                      animation: 'float 3s ease-in-out infinite'
                    }} 
                  />
                  <div style={{ 
                    fontSize: '3rem', 
                    fontWeight: 900, 
                    color: stat.color, 
                    marginBottom: '0.5rem',
                    fontFamily: "'Orbitron', sans-serif",
                    textShadow: `0 0 20px ${stat.color}`
                  }}>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: '#888', 
                    fontFamily: "'Fira Code', monospace",
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Filters & Search */}
          <div style={{
            marginBottom: '5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}>
            {/* Search Bar */}
            <div style={{ 
              position: 'relative', 
              maxWidth: '700px', 
              margin: '0 auto', 
              width: '100%',
              animation: 'slideUp 1.2s ease-out'
            }}>
              <Search 
                size={24} 
                style={{
                  position: 'absolute',
                  left: '2rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00f0ff',
                  filter: 'var(--hollywood-glow)',
                  zIndex: 10
                }} 
              />
              <input
                type="text"
                placeholder="Search workshops, skills, technologies..."
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.2rem',
              animation: 'slideUp 1.4s ease-out'
            }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-btn ${filterCategory === cat ? 'active' : ''}`}
                  onClick={() => setFilterCategory(cat)}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>{cat}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              fontSize: '1rem',
              animation: 'slideUp 1.6s ease-out'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem',
                color: '#888',
                fontFamily: "'Fira Code', monospace"
              }}>
                <Filter size={20} />
                <span>Sort by:</span>
                {['featured', 'difficulty', 'enrolled', 'rating'].map(sort => (
                  <button
                    key={sort}
                    onClick={() => setSortBy(sort)}
                    style={{
                      background: sortBy === sort ? 'rgba(0,240,255,0.2)' : 'none',
                      border: sortBy === sort ? '2px solid #00f0ff' : '2px solid transparent',
                      borderRadius: '999px',
                      padding: '0.6rem 1.5rem',
                      color: sortBy === sort ? '#00f0ff' : '#666',
                      cursor: 'pointer',
                      fontFamily: "'Fira Code', monospace",
                      textTransform: 'capitalize',
                      fontWeight: sortBy === sort ? 700 : 400,
                      transition: 'all 0.3s',
                      fontSize: '0.95rem'
                    }}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div style={{
              textAlign: 'center',
              color: '#666',
              fontFamily: "'Fira Code', monospace",
              fontSize: '1rem',
              animation: 'slideUp 1.8s ease-out'
            }}>
              Showing {filteredWorkshops.length} of {workshops.length} elite programs
            </div>
          </div>

          {/* Workshops Grid */}
          <div className="workshop-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(400px, 100%), 1fr))',
            gap: '3rem',
            marginBottom: '8rem',
            width: '100%',
            maxWidth: '100%'
          }}>
            {filteredWorkshops.map((ws, i) => (
              <div
                key={i}
                className="workshop-card"
                onMouseEnter={() => setHoveredId(i)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelected(ws)}
                style={{ 
                  animation: `slideUp ${0.5 + i * 0.1}s ease-out`,
                  animationDelay: `${i * 0.05}s`,
                  animationFillMode: 'both',
                  '--icon-color': ws.color
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
                }}
              >
                {/* Card Header with Icon */}
                <div style={{
                  height: '240px',
                  background: `linear-gradient(135deg, ${ws.color}25, rgba(0,0,0,0.5))`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Animated background effect */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 50% 50%, ${ws.color}40 0%, transparent 70%)`,
                    animation: hoveredId === i ? 'pulse 2s ease-in-out infinite' : 'none'
                  }} />

                  <div 
                    className="icon-wrapper"
                    style={{
                      border: `4px solid ${ws.color}`,
                      animation: hoveredId === i ? 'float 2s ease-in-out infinite' : 'none',
                      boxShadow: hoveredId === i ? `0 0 60px ${ws.color}` : `0 0 20px ${ws.color}`,
                      '--icon-color': ws.color
                    }}
                  >
                    <ws.icon 
                      size={70} 
                      color={ws.color} 
                      style={{ 
                        position: 'relative', 
                        zIndex: 1,
                        filter: `drop-shadow(0 0 10px ${ws.color})`
                      }} 
                    />
                  </div>

                  {/* Badges */}
                  <div style={{ 
                    position: 'absolute', 
                    top: '1.5rem', 
                    left: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.8rem'
                  }}>
                    <div className="rarity-badge" style={{
                      background: `${rarityColors[ws.rarity]}25`,
                      border: `2px solid ${rarityColors[ws.rarity]}`,
                      color: rarityColors[ws.rarity]
                    }}>
                      <Star size={16} fill={rarityColors[ws.rarity]} />
                      {ws.rarity}
                    </div>
                  </div>

                  {ws.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '1.5rem',
                      right: '1.5rem',
                      padding: '0.6rem 1.3rem',
                      background: 'rgba(255,215,0,0.25)',
                      border: '2px solid #ffd700',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 900,
                      color: '#ffd700',
                      letterSpacing: '2px',
                      animation: 'neonPulse 2s infinite',
                      fontFamily: "'Orbitron', sans-serif"
                    }}>
                      ⚡ FEATURED
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    display: 'flex',
                    gap: '0.8rem'
                  }}>
                    <button 
                      className={`action-btn ${savedWorkshops.has(i) ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSave(i);
                      }}
                    >
                      <Heart 
                        size={18} 
                        fill={savedWorkshops.has(i) ? '#ff0066' : 'none'}
                      />
                    </button>
                    <button 
                      className="action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '2.5rem' }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: ws.color,
                    fontFamily: "'Fira Code', monospace",
                    marginBottom: '1rem',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase'
                  }}>
                    {ws.category}
                  </div>

                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#fff',
                    marginBottom: '1.2rem',
                    fontFamily: "'Outfit', sans-serif",
                    lineHeight: 1.3
                  }}>
                    {ws.title}
                  </h3>

                  <p style={{
                    fontSize: '1rem',
                    color: '#b0b0d0',
                    lineHeight: 1.7,
                    marginBottom: '1.8rem'
                  }}>
                    {ws.desc}
                  </p>

                  {/* Meta Info */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1rem',
                    marginBottom: '1.8rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem 1.2rem',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      border: `1px solid ${ws.color}30`
                    }}>
                      <Clock size={16} color={ws.color} />
                      <span>{ws.duration}</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem 1.2rem',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      border: `1px solid ${ws.color}30`
                    }}>
                      <MonitorPlay size={16} color={ws.color} />
                      <span>{ws.videos} Videos</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem 1.2rem',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      border: `1px solid ${ws.color}30`
                    }}>
                      <Target size={16} color={ws.color} />
                      <span>{ws.difficulty}% Difficulty</span>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.8rem 1.2rem',
                      background: 'rgba(0,0,0,0.5)',
                      borderRadius: '12px',
                      fontSize: '0.9rem',
                      border: `1px solid ${ws.color}30`
                    }}>
                      <Star size={16} color="#ffd700" fill="#ffd700" />
                      <span>{ws.rating} ({ws.reviews})</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: '1.8rem' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '0.8rem',
                      fontSize: '0.9rem',
                      color: '#888'
                    }}>
                      <span>Completion Rate</span>
                      <span style={{ color: ws.color, fontWeight: 700 }}>{ws.completionRate}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ 
                          width: hoveredId === i ? `${ws.completionRate}%` : '0%',
                          background: `linear-gradient(90deg, ${ws.color}, ${ws.color}80)`
                        }} 
                      />
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    marginBottom: '2rem',
                    padding: '1.5rem',
                    background: 'rgba(0,0,0,0.4)',
                    borderRadius: '16px',
                    border: `1px solid ${ws.color}20`,
                    gap: '1rem'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: 900, 
                        color: ws.color,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        {ws.enrolled}+
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.3rem' }}>
                        Students
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: 900, 
                        color: ws.color,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        {ws.projects}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.3rem' }}>
                        Projects
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '1.8rem', 
                        fontWeight: 900, 
                        color: ws.color,
                        fontFamily: "'Orbitron', sans-serif"
                      }}>
                        {ws.avgSalaryBoost}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.3rem' }}>
                        Salary ↑
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button style={{
                    width: '100%',
                    padding: '1.2rem',
                    background: `linear-gradient(90deg, ${ws.color}, ${ws.color}CC)`,
                    color: '#000',
                    border: 'none',
                    borderRadius: '999px',
                    fontWeight: 900,
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    transition: 'all 0.4s',
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    boxShadow: `0 10px 30px ${ws.color}40`
                  }}>
                    <Eye size={22} />
                    View Details
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '6rem 2rem',
              color: '#666',
              fontSize: '1.4rem',
              animation: 'slideUp 0.6s ease-out'
            }}>
              <Search size={80} color="#333" style={{ marginBottom: '2rem' }} />
              <div style={{ marginBottom: '1rem', fontSize: '1.8rem', fontWeight: 700 }}>
                No workshops found
              </div>
              <div>Try adjusting your search or filters</div>
            </div>
          )}

          {/* Hollywood CTA Section */}
          <div style={{
            padding: '5rem 3rem',
            background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,10,40,0.8) 100%)',
            border: '4px solid rgba(0,240,255,0.4)',
            borderRadius: '40px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            animation: 'slideUp 2s ease-out'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--neon-gradient)',
              opacity: 0.08,
              pointerEvents: 'none',
              animation: 'shimmer 5s infinite'
            }} />

            <Rocket 
              size={80} 
              color="#00f0ff" 
              style={{ 
                margin: '0 auto 2rem',
                animation: 'float 3s ease-in-out infinite',
                filter: 'drop-shadow(0 0 30px #00f0ff)'
              }} 
            />

            <h2 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 900,
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem',
              fontFamily: "'Orbitron', sans-serif",
              letterSpacing: '4px',
              animation: 'textGlow 3s infinite'
            }}>
              JOIN THE ELITE
            </h2>

            <p style={{
              fontSize: '1.4rem',
              color: '#b0b0e0',
              maxWidth: '800px',
              margin: '0 auto 4rem',
              lineHeight: 2,
              fontWeight: 300
            }}>
              These programs are designed for serious developers ready to master cutting-edge 
              technologies and accelerate their careers to the next level. Your transformation 
              starts here.
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
                  padding: '1.5rem 3.5rem',
                  background: 'rgba(0,240,255,0.15)',
                  border: '3px solid var(--neon-cyan)',
                  borderRadius: '999px',
                  color: 'var(--neon-cyan)',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.4s',
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,240,255,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Code size={28} />
                View Portfolio
              </a>

              <a 
                href="mailto:g.sivasatyasaibhagavan@gmail.com" 
                style={{
                  padding: '1.5rem 3.5rem',
                  background: 'var(--neon-gradient)',
                  borderRadius: '999px',
                  color: '#000',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  boxShadow: '0 20px 50px rgba(0,240,255,0.6)',
                  transition: 'all 0.4s',
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 70px rgba(0,240,255,0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,240,255,0.6)';
                }}
              >
                <Rocket size={28} />
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Workshop Detail Modal */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflowY: 'auto',
            animation: 'slideUp 0.4s ease-out'
          }}
        >
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '1400px',
              width: '100%',
              maxHeight: '95vh',
              overflowY: 'auto',
              boxShadow: `0 0 100px ${selected.color}CC`,
              position: 'relative'
            }}
          >
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255,0,0,0.3)',
                border: '2px solid #ff4444',
                borderRadius: '50%',
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ff4444',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)';
                e.currentTarget.style.background = 'rgba(255,0,0,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.style.background = 'rgba(255,0,0,0.3)';
              }}
            >
              <X size={28} />
            </button>

            {/* Modal Header */}
            <div style={{
              height: '320px',
              background: `linear-gradient(135deg, ${selected.color}35, rgba(0,0,0,0.7))`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderBottom: `3px solid ${selected.color}70`,
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 50% 50%, ${selected.color}50 0%, transparent 70%)`,
                animation: 'pulse 3s ease-in-out infinite'
              }} />

              <div className="icon-wrapper" style={{
                width: '180px',
                height: '180px',
                border: `5px solid ${selected.color}`,
                animation: 'float 3s ease-in-out infinite',
                boxShadow: `0 0 80px ${selected.color}`,
                '--icon-color': selected.color
              }}>
                <selected.icon 
                  size={90} 
                  color={selected.color} 
                  style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    filter: `drop-shadow(0 0 20px ${selected.color})`
                  }} 
                />
              </div>

              <div style={{
                position: 'absolute',
                top: '2rem',
                left: '2rem',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <div className="rarity-badge" style={{
                  background: `${rarityColors[selected.rarity]}25`,
                  border: `2px solid ${rarityColors[selected.rarity]}`,
                  color: rarityColors[selected.rarity]
                }}>
                  <Star size={18} fill={rarityColors[selected.rarity]} />
                  {selected.rarity}
                </div>
                <div style={{
                  padding: '0.6rem 1.4rem',
                  background: `${selected.color}25`,
                  border: `2px solid ${selected.color}`,
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: selected.color,
                  letterSpacing: '1px',
                  fontFamily: "'Fira Code', monospace"
                }}>
                  {selected.category}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '4rem 3rem' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: 900,
                  background: 'var(--neon-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: "'Orbitron', sans-serif",
                  letterSpacing: '2px'
                }}>
                  {selected.title}
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      color="#ffd700"
                      fill={i < Math.floor(selected.rating) ? '#ffd700' : 'none'}
                    />
                  ))}
                  <span style={{ 
                    marginLeft: '0.5rem', 
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#ffd700'
                  }}>
                    {selected.rating} ({selected.reviews} reviews)
                  </span>
                </div>
              </div>

              <p style={{
                fontSize: '1.4rem',
                color: '#c0c0e0',
                marginBottom: '4rem',
                lineHeight: 1.9,
                fontWeight: 300
              }}>
                {selected.fullDesc}
              </p>

              {/* Enhanced Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
              }}>
                {[
                  { icon: Calendar, label: "Duration", value: selected.duration, color: "#00f0ff" },
                  { icon: Users, label: "Students", value: `${selected.enrolled}+`, color: "#a78bfa" },
                  { icon: Target, label: "Difficulty", value: `${selected.difficulty}%`, color: "#ff61d2" },
                  { icon: CheckCircle2, label: "Completion", value: `${selected.completionRate}%`, color: "#00ff88" },
                  { icon: Layers, label: "Projects", value: selected.projects, color: "#ffd700" },
                  { icon: TrendingUp, label: "Salary Boost", value: selected.avgSalaryBoost, color: "#ff9500" }
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,20,60,0.4) 100%)',
                    border: `2px solid ${stat.color}40`,
                    borderRadius: '20px',
                    textAlign: 'center',
                    transition: 'all 0.4s',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = stat.color;
                    e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = `${stat.color}40`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  >
                    <stat.icon 
                      size={36} 
                      color={stat.color} 
                      style={{ 
                        margin: '0 auto 1rem',
                        filter: `drop-shadow(0 0 10px ${stat.color})`
                      }} 
                    />
                    <div style={{ 
                      fontSize: '2.2rem', 
                      fontWeight: 900, 
                      color: '#fff', 
                      marginBottom: '0.5rem',
                      fontFamily: "'Orbitron', sans-serif",
                      textShadow: `0 0 20px ${stat.color}`
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ 
                      fontSize: '1rem', 
                      color: '#888',
                      fontFamily: "'Fira Code', monospace",
                      letterSpacing: '1px'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '3rem',
                marginBottom: '4rem'
              }}>
                {/* Skills */}
                <div>
                  <h3 style={{
                    fontSize: '2.2rem',
                    background: 'var(--neon-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2rem',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <Terminal size={28} style={{ color: selected.color }} />
                    Core Skills
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
                    {selected.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="skill-tag"
                        style={{
                          color: selected.color,
                          borderColor: `${selected.color}60`
                        }}
                      >
                        <span style={{ position: 'relative', zIndex: 1 }}>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 style={{
                    fontSize: '2.2rem',
                    background: 'var(--neon-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '2rem',
                    fontWeight: 900,
                    fontFamily: "'Orbitron', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <Award size={28} style={{ color: selected.color }} />
                    Certifications
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    {selected.certifications.map(cert => (
                      <div key={cert} style={{
                        padding: '1.3rem 1.8rem',
                        background: 'rgba(0,0,0,0.5)',
                        border: `2px solid ${selected.color}60`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.2rem',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(8px)';
                        e.currentTarget.style.borderColor = selected.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.borderColor = `${selected.color}60`;
                      }}
                      >
                        <Medal size={24} color={selected.color} />
                        <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* What You'll Master */}
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{
                  fontSize: '2.2rem',
                  background: 'var(--neon-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  fontWeight: 900,
                  fontFamily: "'Orbitron', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <GraduationCap size={28} style={{ color: selected.color }} />
                  What You'll Master
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {selected.whatILearned.map((item, i) => (
                    <div key={i} style={{
                      padding: '1.5rem',
                      background: 'rgba(0,0,0,0.4)',
                      border: `2px solid ${selected.color}30`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.2rem',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.borderColor = selected.color;
                      e.currentTarget.style.background = `${selected.color}10`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = `${selected.color}30`;
                      e.currentTarget.style.background = 'rgba(0,0,0,0.4)';
                    }}
                    >
                      <CheckCircle2 
                        size={24} 
                        color={selected.color} 
                        style={{ 
                          flexShrink: 0, 
                          marginTop: '0.2rem',
                          filter: `drop-shadow(0 0 8px ${selected.color})`
                        }} 
                      />
                      <span style={{ lineHeight: 1.7, fontSize: '1.05rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div style={{
                padding: '3rem',
                background: `linear-gradient(135deg, ${selected.color}15, rgba(0,0,0,0.6))`,
                border: `3px solid ${selected.color}50`,
                borderRadius: '28px',
                marginBottom: '4rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${selected.color}20 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }} />

                <h3 style={{
                  fontSize: '2.2rem',
                  background: 'var(--neon-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '2rem',
                  fontWeight: 900,
                  textAlign: 'center',
                  fontFamily: "'Orbitron', sans-serif",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem'
                }}>
                  <Trophy size={28} style={{ color: selected.color }} />
                  Expected Outcomes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {selected.outcomes.map((outcome, i) => (
                    <div key={i} style={{
                      padding: '1.5rem 2rem',
                      background: 'rgba(0,0,0,0.6)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      fontSize: '1.15rem',
                      border: `2px solid ${selected.color}40`,
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(10px)';
                      e.currentTarget.style.borderColor = selected.color;
                      e.currentTarget.style.background = `${selected.color}15`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = `${selected.color}40`;
                      e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
                    }}
                    >
                      <Star 
                        size={24} 
                        color={selected.color} 
                        fill={selected.color}
                        style={{ filter: `drop-shadow(0 0 10px ${selected.color})` }}
                      />
                      <span style={{ fontWeight: 600 }}>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  padding: '1.8rem 4rem',
                  background: `linear-gradient(90deg, ${selected.color}, ${selected.color}DD)`,
                  color: '#000',
                  border: 'none',
                  borderRadius: '999px',
                  fontWeight: 900,
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.2rem',
                  boxShadow: `0 20px 50px ${selected.color}80`,
                  transition: 'all 0.4s',
                  fontFamily: "'Outfit', sans-serif",
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                  e.currentTarget.style.boxShadow = `0 30px 70px ${selected.color}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${selected.color}80`;
                }}
                >
                  <Rocket size={32} />
                  ENROLL NOW
                </button>

                <button
                  onClick={() => setSelected(null)}
                  style={{
                    padding: '1.8rem 4rem',
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    border: `3px solid ${selected.color}`,
                    borderRadius: '999px',
                    fontWeight: 900,
                    fontSize: '1.3rem',
                    cursor: 'pointer',
                    transition: 'all 0.4s',
                    fontFamily: "'Outfit', sans-serif",
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                    e.currentTarget.style.background = `${selected.color}20`;
                    e.currentTarget.style.boxShadow = `0 20px 40px ${selected.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.background = 'rgba(0,0,0,0.7)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  BACK TO WORKSHOPS
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}