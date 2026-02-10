import { useState, useEffect, useRef } from "react";
import {
  Cpu, Brain, Microscope, Cloud, Network, Shield,
  Rocket, Zap, Star, Trophy, Award, TrendingUp, CheckCircle2,
  Clock, Users, Calendar, Layers, Target, Terminal,
  Eye, Heart, Share2, X, ChevronRight, Filter, Search, Github, Mail
} from "lucide-react";

const workshops = [
  {
    id: 1, title: "MERN Stack Development", icon: Cpu,
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", color: "#06b6d4",
    category: "Full Stack", level: "Intermediate", duration: "3 Months",
    students: 1247, rating: 4.8, reviews: 342, progress: 100, projects: 5, difficulty: 65,
    tags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    description: "Master full-stack development with the MERN stack through hands-on projects.",
    highlights: ["Build 5+ production apps", "Master React hooks", "Design REST APIs", "MongoDB schemas", "Cloud deployment"],
    outcomes: ["Launch SaaS products", "Full-stack developer role", "Open-source contributor"],
    featured: true, popular: true
  },
  {
    id: 2, title: "Machine Learning & AI", icon: Brain,
    gradient: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)", color: "#a855f7",
    category: "AI/ML", level: "Advanced", duration: "4 Months",
    students: 892, rating: 4.9, reviews: 267, progress: 100, projects: 6, difficulty: 80,
    tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    description: "Deep dive into machine learning algorithms and AI model deployment.",
    highlights: ["Train ML models", "Deep learning", "Data pipelines", "Production ML", "Real datasets"],
    outcomes: ["Build AI apps", "ML engineer role", "Predictive systems"],
    featured: true, popular: true
  },
  {
    id: 3, title: "Deep Learning & Computer Vision", icon: Microscope,
    gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)", color: "#3b82f6",
    category: "Deep Learning", level: "Expert", duration: "3 Months",
    students: 634, rating: 4.9, reviews: 189, progress: 100, projects: 4, difficulty: 85,
    tags: ["TensorFlow", "Keras", "CNN", "PyTorch", "OpenCV"],
    description: "Master computer vision and deep learning with CNNs and transformers.",
    highlights: ["Image classification", "Object detection", "Facial recognition", "Model deployment", "Performance optimization"],
    outcomes: ["CV products", "AI research", "Autonomous systems"],
    featured: true, popular: false
  },
  {
    id: 4, title: "Cloud Architecture & DevOps", icon: Cloud,
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)", color: "#10b981",
    category: "Cloud & DevOps", level: "Advanced", duration: "3 Months",
    students: 1089, rating: 4.7, reviews: 423, progress: 85, projects: 7, difficulty: 70,
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    description: "Master cloud infrastructure and modern DevOps practices.",
    highlights: ["Cloud architecture", "CI/CD pipelines", "Container orchestration", "Infrastructure as Code", "Cost optimization"],
    outcomes: ["Cloud architect", "DevOps lead", "Enterprise optimization"],
    featured: false, popular: true
  },
  {
    id: 5, title: "Blockchain & Web3", icon: Network,
    gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)", color: "#f97316",
    category: "Web3", level: "Advanced", duration: "4 Months",
    students: 567, rating: 4.8, reviews: 201, progress: 75, projects: 5, difficulty: 75,
    tags: ["Solidity", "Ethereum", "Web3.js", "Smart Contracts", "DeFi"],
    description: "Build decentralized applications and smart contracts.",
    highlights: ["Smart contracts", "DeFi protocols", "NFT marketplaces", "Web3 frontends", "Security audits"],
    outcomes: ["Launch DApps", "Web3 startups", "Blockchain solutions"],
    featured: false, popular: true
  },
  {
    id: 6, title: "Cybersecurity & Ethical Hacking", icon: Shield,
    gradient: "linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)", color: "#ef4444",
    category: "Security", level: "Advanced", duration: "3 Months",
    students: 723, rating: 4.9, reviews: 298, progress: 90, projects: 6, difficulty: 80,
    tags: ["Penetration Testing", "Kali Linux", "Network Security", "OSINT", "Cryptography"],
    description: "Learn ethical hacking and enterprise security practices.",
    highlights: ["Security assessments", "Pen testing tools", "Cryptography", "Security practices", "Malware analysis"],
    outcomes: ["Ethical hacker", "Cybersecurity firm", "Enterprise protection"],
    featured: true, popular: false
  }
];

const categories = ["All", "Full Stack", "AI/ML", "Deep Learning", "Cloud & DevOps", "Web3", "Security"];

export default function Workshops() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [saved, setSaved] = useState(new Set());
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMouse = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 50 }, () => new Particle());
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const filtered = workshops
    .filter(w => category === "All" || w.category === category)
    .filter(w => w.title.toLowerCase().includes(search.toLowerCase()) || 
                 w.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
    .sort((a, b) => {
      if (sort === "popular") return b.students - a.students;
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "difficulty") return b.difficulty - a.difficulty;
      return 0;
    });

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #00f0ff, #a78bfa); border-radius: 5px; }
        input::placeholder { color: rgba(255, 255, 255, 0.3); }
      `}</style>

      <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', opacity: 0.4, zIndex: 1 }} />
      <div style={{ position: 'fixed', inset: 0, background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 240, 255, 0.08), transparent 40%)`, pointerEvents: 'none', zIndex: 2 }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', margin: '0 auto', padding: '3rem 1rem', opacity: mounted ? 1 : 0, transition: 'all 0.6s' }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '4rem', animation: 'fadeIn 0.8s' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.5rem', background: 'rgba(15, 15, 35, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '9999px', marginBottom: '1.5rem', animation: 'pulse 2s infinite' }}>
            <Zap size={18} color="#ffd700" />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: 'linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ELITE TRAINING PROGRAMS</span>
            <Zap size={18} color="#ffd700" />
          </div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', background: 'linear-gradient(135deg, #00f0ff 0%, #a78bfa 50%, #ff61d2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
            PROFESSIONAL<br />WORKSHOPS
          </h1>
          
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '800px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            Transform your career with industry-leading programs. Master cutting-edge technologies and join thousands of successful developers worldwide.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { icon: Users, label: "Students", value: "5000+", color: "#00f0ff" },
              { icon: Trophy, label: "Success Rate", value: "94%", color: "#ffd700" },
              { icon: Award, label: "Certifications", value: "12+", color: "#a855f7" },
              { icon: TrendingUp, label: "Growth", value: "3x", color: "#10b981" }
            ].map((s, i) => (
              <div key={i} style={{ background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(25, 20, 50, 0.5))', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', transition: 'all 0.4s', cursor: 'default' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.boxShadow = `0 20px 40px ${s.color}30`; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <s.icon size={32} color={s.color} style={{ margin: '0 auto 1rem', display: 'block' }} />
                <div style={{ fontSize: '2rem', fontWeight: 900, color: s.color, marginBottom: '0.5rem' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* Filters */}
        <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
            <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: '#00f0ff', pointerEvents: 'none' }} />
            <input type="text" placeholder="Search workshops, technologies..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: '100%', padding: '1rem 1.5rem 1rem 3.5rem', background: 'rgba(15, 15, 35, 0.8)', backdropFilter: 'blur(10px)', border: '2px solid rgba(0, 240, 255, 0.2)', borderRadius: '9999px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s' }} onFocus={e => { e.target.style.borderColor = 'rgba(0, 240, 255, 0.6)'; e.target.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.2)'; }} onBlur={e => { e.target.style.borderColor = 'rgba(0, 240, 255, 0.2)'; e.target.style.boxShadow = 'none'; }} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)} style={{ padding: '0.75rem 1.5rem', background: category === c ? 'linear-gradient(135deg, #00f0ff, #3b82f6)' : 'rgba(15, 15, 35, 0.6)', backdropFilter: 'blur(10px)', border: category === c ? 'none' : '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '9999px', color: category === c ? '#000' : 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s', outline: 'none', transform: category === c ? 'translateY(-2px)' : 'translateY(0)', boxShadow: category === c ? '0 8px 20px rgba(0, 240, 255, 0.4)' : 'none' }} onMouseEnter={e => { if (category !== c) { e.target.style.borderColor = 'rgba(0, 240, 255, 0.3)'; e.target.style.color = 'rgba(255, 255, 255, 0.9)'; }}} onMouseLeave={e => { if (category !== c) { e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.target.style.color = 'rgba(255, 255, 255, 0.6)'; }}}>
                {c}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', fontSize: '0.875rem' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Filter size={16} />Sort:</span>
            {['popular', 'rating', 'difficulty'].map(s => (
              <button key={s} onClick={() => setSort(s)} style={{ padding: '0.5rem 1rem', background: sort === s ? 'rgba(0, 240, 255, 0.15)' : 'transparent', border: sort === s ? '1px solid #00f0ff' : '1px solid transparent', borderRadius: '9999px', color: sort === s ? '#00f0ff' : 'rgba(255, 255, 255, 0.5)', cursor: 'pointer', transition: 'all 0.3s', textTransform: 'capitalize', outline: 'none' }} onMouseEnter={e => { if (sort !== s) e.target.style.color = 'rgba(255, 255, 255, 0.8)'; }} onMouseLeave={e => { if (sort !== s) e.target.style.color = 'rgba(255, 255, 255, 0.5)'; }}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(380px, 100%), 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {filtered.map((w, i) => (
            <div key={w.id} style={{ background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(25, 15, 45, 0.9))', backdropFilter: 'blur(20px)', border: '2px solid rgba(255, 255, 255, 0.08)', borderRadius: '1.5rem', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.5s', transform: hovered === w.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0)', boxShadow: hovered === w.id ? '0 25px 50px rgba(0, 0, 0, 0.5)' : 'none', borderColor: hovered === w.id ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 255, 255, 0.08)', animation: `fadeIn ${0.4 + i * 0.1}s` }} onMouseEnter={() => setHovered(w.id)} onMouseLeave={() => setHovered(null)} onClick={() => setSelected(w)}>
              
              <div style={{ height: '200px', background: w.gradient, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(2px)' }} />
                <div style={{ width: '100px', height: '100px', borderRadius: '1.5rem', background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, transition: 'transform 0.5s', transform: hovered === w.id ? 'translateY(-10px) rotate(5deg) scale(1.1)' : 'translateY(0)' }}>
                  <w.icon size={48} color={w.color} />
                </div>
                
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', zIndex: 3 }}>
                  {w.featured && <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(255, 215, 0, 0.9)', color: '#000', fontSize: '0.7rem', fontWeight: 800, borderRadius: '9999px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>FEATURED</span>}
                  {w.popular && <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(239, 68, 68, 0.9)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, borderRadius: '9999px', letterSpacing: '0.05em', textTransform: 'uppercase', animation: 'pulse 2s infinite' }}>POPULAR</span>}
                </div>

                <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem', zIndex: 3 }}>
                  <button onClick={e => { e.stopPropagation(); setSaved(p => { const n = new Set(p); n.has(w.id) ? n.delete(w.id) : n.add(w.id); return n; }); }} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', outline: 'none' }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)'; e.currentTarget.style.borderColor = '#00f0ff'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}>
                    <Heart size={18} color={saved.has(w.id) ? '#ef4444' : '#fff'} fill={saved.has(w.id) ? '#ef4444' : 'none'} />
                  </button>
                  <button onClick={e => e.stopPropagation()} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', outline: 'none' }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.15)'; e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)'; e.currentTarget.style.borderColor = '#00f0ff'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; }}>
                    <Share2 size={18} color="#fff" />
                  </button>
                </div>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: w.color }}>{w.category}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
                    <Star size={16} color="#ffd700" fill="#ffd700" />
                    <span style={{ fontWeight: 700 }}>{w.rating}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.75rem' }}>({w.reviews})</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.3 }}>{w.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.6)', lineHeight: 1.6, marginBottom: '1.25rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{w.description}</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {[
                    { icon: Clock, text: w.duration },
                    { icon: Users, text: `${w.students} students` },
                    { icon: Target, text: `${w.difficulty}% Difficulty` },
                    { icon: Layers, text: `${w.projects} Projects` }
                  ].map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                      <s.icon size={16} color="rgba(255, 255, 255, 0.5)" />
                      <span>{s.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Progress</span>
                    <span style={{ fontWeight: 700, color: w.color }}>{w.progress}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: hovered === w.id ? `${w.progress}%` : '0%', background: `linear-gradient(90deg, ${w.color}, ${w.color}aa)`, borderRadius: '9999px', transition: 'width 1s', position: 'relative' }}>
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)', animation: 'shimmer 2s infinite' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  {w.tags.slice(0, 3).map(t => (
                    <span key={t} style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px', border: `1px solid ${w.color}50`, color: w.color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{t}</span>
                  ))}
                  {w.tags.length > 3 && <span style={{ padding: '0.375rem 0.75rem', fontSize: '0.75rem', borderRadius: '9999px', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'rgba(255, 255, 255, 0.5)' }}>+{w.tags.length - 3}</span>}
                </div>

                <button style={{ width: '100%', padding: '0.875rem', borderRadius: '9999px', border: 'none', background: `linear-gradient(90deg, ${w.color}, ${w.color}cc)`, color: '#000', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.3s', textTransform: 'uppercase', letterSpacing: '0.05em', outline: 'none' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 30px ${w.color}60`; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  View Details
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem 2rem', color: 'rgba(255, 255, 255, 0.5)' }}>
            <Search size={64} color="rgba(255, 255, 255, 0.3)" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem', color: '#fff' }}>No workshops found</h3>
            <p style={{ fontSize: '1.125rem' }}>Try adjusting your filters or search</p>
          </div>
        )}

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.95), rgba(25, 15, 45, 0.9))', backdropFilter: 'blur(20px)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '2rem', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.05), rgba(167, 139, 250, 0.05))', opacity: 0.5, pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <Rocket size={64} color="#00f0ff" style={{ margin: '0 auto 2rem', display: 'block', animation: 'pulse 2s infinite' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, background: 'linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
              Ready to Transform Your Career?
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
              Join thousands of developers who have accelerated their careers. Start your journey today.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2.5rem', background: 'rgba(15, 15, 35, 0.8)', backdropFilter: 'blur(10px)', border: '2px solid #00f0ff', borderRadius: '9999px', color: '#00f0ff', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.625rem', transition: 'all 0.3s', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 240, 255, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                <Github size={20} />Portfolio
              </a>
              <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{ padding: '1rem 2.5rem', background: 'linear-gradient(135deg, #00f0ff, #3b82f6)', borderRadius: '9999px', color: '#000', fontWeight: 800, fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.625rem', boxShadow: '0 10px 30px rgba(0, 240, 255, 0.4)', transition: 'all 0.3s', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 240, 255, 0.6)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 240, 255, 0.4)'; }}>
                <Rocket size={20} />Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(20px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }} onClick={() => setSelected(null)}>
          <div style={{ background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.98), rgba(25, 15, 45, 0.95))', backdropFilter: 'blur(20px)', border: '2px solid rgba(0, 240, 255, 0.3)', borderRadius: '2rem', maxWidth: '1200px', width: '100%', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }} onClick={e => e.stopPropagation()}>
            
            <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '3rem', height: '3rem', borderRadius: '9999px', background: 'rgba(239, 68, 68, 0.2)', border: '2px solid #ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s', zIndex: 10, outline: 'none' }} onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)'; e.currentTarget.style.background = 'rgba(239, 68, 68, 0.4)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1) rotate(0deg)'; e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)'; }}>
              <X size={24} color="#ef4444" />
            </button>

            <div style={{ height: '280px', background: selected.gradient, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '2px solid rgba(0, 240, 255, 0.2)' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(2px)' }} />
              <div style={{ width: '140px', height: '140px', borderRadius: '1.5rem', background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, animation: 'pulse 2s infinite' }}>
                <selected.icon size={70} color={selected.color} />
              </div>
            </div>

            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.2 }}>{selected.title}</h2>
                  <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '0', lineHeight: 1.7 }}>{selected.description}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={20} color="#ffd700" fill={i < Math.floor(selected.rating) ? '#ffd700' : 'none'} />
                  ))}
                  <span style={{ marginLeft: '0.5rem', fontSize: '1.125rem', fontWeight: 700, color: '#ffd700' }}>{selected.rating}</span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { icon: Calendar, label: "Duration", value: selected.duration },
                  { icon: Users, label: "Students", value: selected.students },
                  { icon: Trophy, label: "Completion", value: `${selected.progress}%` }
                ].map((s, i) => (
                  <div key={i} style={{ background: 'linear-gradient(135deg, rgba(15, 15, 35, 0.7), rgba(25, 20, 50, 0.5))', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
                    <s.icon size={32} color={selected.color} style={{ margin: '0 auto 0.75rem', display: 'block' }} />
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.5rem' }}>{s.value}</div>
                    <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.5)' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <CheckCircle2 size={28} color={selected.color} />
                  What You'll Learn
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {selected.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '1rem', background: 'rgba(15, 15, 35, 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.75rem', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.borderColor = selected.color; e.currentTarget.style.background = `${selected.color}10`; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.background = 'rgba(15, 15, 35, 0.5)'; }}>
                      <CheckCircle2 size={20} color={selected.color} style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                      <span style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <Trophy size={28} color={selected.color} />
                  Career Outcomes
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {selected.outcomes.map((o, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: 'rgba(15, 15, 35, 0.6)', backdropFilter: 'blur(10px)', border: '2px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.75rem', fontSize: '1.0625rem', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.borderColor = selected.color; e.currentTarget.style.background = `${selected.color}10`; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.background = 'rgba(15, 15, 35, 0.6)'; }}>
                      <Star size={20} color={selected.color} fill={selected.color} />
                      <span style={{ fontWeight: 600 }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'linear-gradient(135deg, #00f0ff, #a78bfa, #ff61d2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  <Terminal size={28} color={selected.color} />
                  Technologies
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {selected.tags.map(t => (
                    <span key={t} style={{ padding: '0.625rem 1.25rem', borderRadius: '9999px', border: `2px solid ${selected.color}`, color: selected.color, fontFamily: "'JetBrains Mono', monospace", fontSize: '0.875rem', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button style={{ flex: 1, minWidth: '200px', padding: '1.25rem', borderRadius: '9999px', border: 'none', background: `linear-gradient(90deg, ${selected.color}, ${selected.color}cc)`, color: '#000', fontWeight: 900, fontSize: '1.125rem', cursor: 'pointer', transition: 'all 0.3s', textTransform: 'uppercase', letterSpacing: '0.05em', outline: 'none' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 15px 40px ${selected.color}70`; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Enroll Now
                </button>
                <button onClick={() => setSelected(null)} style={{ padding: '1.25rem 2.5rem', background: 'rgba(15, 15, 35, 0.8)', backdropFilter: 'blur(10px)', border: '2px solid rgba(0, 240, 255, 0.5)', borderRadius: '9999px', color: '#fff', fontWeight: 900, fontSize: '1.125rem', cursor: 'pointer', transition: 'all 0.3s', textTransform: 'uppercase', letterSpacing: '0.05em', outline: 'none' }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 240, 255, 0.3)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(15, 15, 35, 0.8)'; e.currentTarget.style.boxShadow = 'none'; }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}