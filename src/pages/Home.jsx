"use client";

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.jpeg";
import resumePdf from "../assets/bhagavanresume.pdf";
import { 
  Terminal, Download, Github, Linkedin, Mail, Phone, ChevronRight,
  Cpu, Database, Globe, Star, Brain, Code, Zap, Cloud, 
  Award, TrendingUp, Briefcase, Target, Rocket, Activity, Eye, Sparkles,
  CheckCircle2, Flame, Trophy, Send, MapPin, Clock, ArrowRight
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const canvasRef = useRef(null);

  const roles = ["ELITE FULL-STACK ENGINEER", "AI/ML ARCHITECT", "CLOUD SYSTEMS EXPERT", "PRODUCTION-READY DEVELOPER"];
  
  const metrics = [
    { label: "Production Projects", value: "15+", icon: Rocket, color: "#00f5ff" },
    { label: "Industry Certifications", value: "20+", icon: Award, color: "#a855f7" },
    { label: "Tech Stack Mastery", value: "30+", icon: Code, color: "#22c55e" },
    { label: "Success Rate", value: "100%", icon: Target, color: "#ffd700" }
  ];

  const skills = [
    { name: "AI & Machine Learning", level: 95, icon: Brain, color: "#a855f7", tech: "TensorFlow • PyTorch • NLP • Deep Learning" },
    { name: "Full-Stack Development", level: 93, icon: Code, color: "#00f5ff", tech: "React • Node.js • Python • TypeScript • Microservices" },
    { name: "Cloud & DevOps", level: 90, icon: Cloud, color: "#FF9900", tech: "AWS • Azure • Docker • Kubernetes • CI/CD" },
    { name: "Data Structures & Algorithms", level: 92, icon: Terminal, color: "#22c55e", tech: "LeetCode • System Design • Optimization" },
    { name: "Database & Architecture", level: 88, icon: Database, color: "#ffd700", tech: "PostgreSQL • MongoDB • Redis • Microservices" }
  ];

  const achievements = [
    { icon: Trophy, label: "Top 5% on LeetCode", color: "#ffd700", stat: "500+ Problems" },
    { icon: Award, label: "AWS Solutions Architect", color: "#FF9900", stat: "Professional" },
    { icon: Star, label: "Azure AI Engineer", color: "#00a4ef", stat: "Expert Level" },
    { icon: CheckCircle2, label: "Google Cloud Professional", color: "#4285f4", stat: "Certified" },
    { icon: Flame, label: "365 Days Coding Streak", color: "#ff6b35", stat: "Active" },
    { icon: Target, label: "Zero Bug Production", color: "#22c55e", stat: "100% Quality" }
  ];

  const techStack = [
    { name: "React", icon: "react/react-original.svg", color: "#61dafb" },
    { name: "Node.js", icon: "nodejs/nodejs-original.svg", color: "#68a063" },
    { name: "Python", icon: "python/python-original.svg", color: "#3776ab" },
    { name: "TypeScript", icon: "typescript/typescript-original.svg", color: "#3178c6" },
    { name: "JavaScript", icon: "javascript/javascript-original.svg", color: "#f7df1e" },
    { name: "Docker", icon: "docker/docker-original.svg", color: "#2496ed" },
    { name: "MongoDB", icon: "mongodb/mongodb-original.svg", color: "#47a248" },
    { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg", color: "#336791" },
    { name: "TensorFlow", icon: "tensorflow/tensorflow-original.svg", color: "#ff6f00" },
    { name: "Kubernetes", icon: "kubernetes/kubernetes-plain.svg", color: "#326ce5" },
    { name: "AWS", icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900" },
    { name: "Azure", icon: "azure/azure-original.svg", color: "#0089d6" }
  ];

  const testimonials = [
    { text: "Exceptional developer with deep cloud expertise. Delivered our ML pipeline 2 weeks ahead.", author: "Sarah Chen", role: "CTO, TechVision", avatar: "SC", color: "#00f5ff" },
    { text: "Rare combination of technical brilliance and communication skills.", author: "Michael Rodriguez", role: "Engineering Manager", avatar: "MR", color: "#a855f7" },
    { text: "Transformed our legacy systems into modern microservices architecture.", author: "Priya Sharma", role: "VP Engineering", avatar: "PS", color: "#22c55e" }
  ];

  // Clock
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];

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
        this.size = Math.random() * 2 + 0.5;
        this.color = ['#00f5ff', '#a855f7', '#ffd700'][Math.floor(Math.random() * 3)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + '80';
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
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
  }, [roleIndex]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.id]));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
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
  }, [visibleSections]);

  // Metric rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&family=Roboto+Mono:wght@400;500;600;700&display=swap');
        
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family:'Poppins',sans-serif; background:#000; color:#fff; overflow-x:hidden; }

        @keyframes rotate { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes float { 0%, 100% { transform:translateY(0); } 50% { transform:translateY(-20px); } }
        @keyframes pulse { 0%, 100% { transform:scale(1); } 50% { transform:scale(1.05); } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes shimmer { 0% { background-position:-1000px 0; } 100% { background-position:1000px 0; } }
        @keyframes gradient { 0%, 100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
        
        .glass { background:rgba(255,255,255,0.05); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:20px; transition:all 0.4s; }
        .glass:hover { background:rgba(255,255,255,0.08); border-color:rgba(0,245,255,0.5); transform:translateY(-8px); box-shadow:0 20px 60px rgba(0,0,0,0.6); }
        
        .btn-primary { background:linear-gradient(135deg,#00f5ff,#00c4ff); border:none; color:#000; font-weight:800; padding:1rem 2.5rem; border-radius:12px; cursor:pointer; text-transform:uppercase; letter-spacing:2px; transition:all 0.3s; display:inline-flex; align-items:center; gap:0.6rem; text-decoration:none; box-shadow:0 10px 30px rgba(0,245,255,0.3); }
        .btn-primary:hover { transform:translateY(-4px) scale(1.05); box-shadow:0 15px 40px rgba(0,245,255,0.5); }
        
        .btn-outline { background:transparent; border:2px solid currentColor; color:currentColor; font-weight:700; padding:1rem 2.5rem; border-radius:12px; cursor:pointer; text-transform:uppercase; letter-spacing:2px; transition:all 0.3s; display:inline-flex; align-items:center; gap:0.6rem; text-decoration:none; }
        .btn-outline:hover { background:currentColor; color:#000; transform:translateY(-4px); }
        
        .gradient-text { background:linear-gradient(135deg,#00f5ff,#a855f7,#ff6b35,#ffd700); background-size:200% 200%; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:gradient 5s ease infinite; }
        
        .fade-in { animation:fadeIn 0.8s forwards; opacity:0; }
        .delay-1 { animation-delay:0.1s; } .delay-2 { animation-delay:0.2s; } .delay-3 { animation-delay:0.3s; }
        .delay-4 { animation-delay:0.4s; } .delay-5 { animation-delay:0.5s; } .delay-6 { animation-delay:0.6s; }
        
        .rotating-ring { position:absolute; inset:-20px; border:3px solid transparent; border-radius:24px; background:linear-gradient(45deg,#00f5ff,#a855f7,#22c55e,#ffd700) border-box; -webkit-mask:linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); mask-composite:exclude; animation:rotate 4s linear infinite; }
        
        ::-webkit-scrollbar { width:10px; } ::-webkit-scrollbar-track { background:#000; } ::-webkit-scrollbar-thumb { background:linear-gradient(180deg,#00f5ff,#a855f7); border-radius:5px; }
        
        @media(max-width:1024px) { .hero-grid { grid-template-columns:1fr!important; gap:3rem!important; } }
        @media(max-width:768px) { h1 { font-size:2.5rem!important; } }
      `}</style>

      <div style={{ background:'#0a0a14', minHeight:"100vh", position:"relative", overflow:"hidden" }}>
        
        {/* Progress Bar */}
        <div style={{ position:"fixed", top:0, left:0, right:0, height:"4px", background:"rgba(255,255,255,0.05)", zIndex:9999 }}>
          <div style={{ width:`${scrollProgress}%`, height:"100%", background:"linear-gradient(90deg,#00f5ff,#a855f7,#ffd700)", transition:"width 0.1s", boxShadow:"0 0 20px rgba(0,245,255,0.8)" }} />
        </div>

        {/* Canvas */}
        <canvas ref={canvasRef} style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:1, opacity:0.6 }} />

        {/* Gradient Overlay */}
        <div style={{ position:"fixed", inset:0, background:`radial-gradient(circle at 20% 80%, rgba(0,245,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168,85,247,0.1) 0%, transparent 50%)`, pointerEvents:"none", zIndex:2 }} />

        {/* Content */}
        <div style={{ maxWidth:"1400px", margin:"0 auto", padding:"0 2rem", position:"relative", zIndex:10 }}>
          
          {/* HERO */}
          <section className="hero-grid" style={{ minHeight:"100vh", display:"grid", gridTemplateColumns:"1fr 1.2fr", gap:"5rem", alignItems:"center", paddingTop:"5rem" }}>
            
            {/* Profile Card */}
            <div className="fade-in delay-2" style={{ position:"relative", maxWidth:"450px", margin:"0 auto" }}>
              <div style={{ position:"relative", aspectRatio:"4/5", animation:"float 6s ease-in-out infinite" }}>
                
                {/* Rotating Ring */}
                <div className="rotating-ring" />
                
                {/* Corner Accents */}
                {[
                  { top:"-15px", left:"-15px", borderTop:"5px solid #00f5ff", borderLeft:"5px solid #00f5ff" },
                  { top:"-15px", right:"-15px", borderTop:"5px solid #a855f7", borderRight:"5px solid #a855f7" },
                  { bottom:"-15px", left:"-15px", borderBottom:"5px solid #22c55e", borderLeft:"5px solid #22c55e" },
                  { bottom:"-15px", right:"-15px", borderBottom:"5px solid #ffd700", borderRight:"5px solid #ffd700" }
                ].map((c, i) => (
                  <div key={i} style={{ position:"absolute", width:"40px", height:"40px", ...c, animation:"pulse 3s ease-in-out infinite", animationDelay:`${i * 0.3}s`, zIndex:3, boxShadow:`0 0 20px ${c.borderTop ? c.borderTop.split(' ')[2] : c.borderBottom.split(' ')[2]}` }} />
                ))}

                {/* Image Container */}
                <div style={{ position:"relative", width:"100%", height:"100%", borderRadius:"24px", overflow:"hidden", border:"4px solid rgba(0,245,255,0.6)", boxShadow:"0 0 60px rgba(0,245,255,0.5)", zIndex:1 }}>
                  <img src={profileImg} alt="Profile" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 70%)" }} />

                  {/* Tech Badges */}
                  {[
                    { icon:Brain, label:"AI/ML", color:"#a855f7", pos:{ top:"20px", left:"20px" } },
                    { icon:Code, label:"Full-Stack", color:"#00f5ff", pos:{ top:"20px", right:"20px" } },
                    { icon:Database, label:"Database", color:"#22c55e", pos:{ bottom:"150px", left:"20px" } },
                    { icon:Cloud, label:"Cloud", color:"#FF9900", pos:{ bottom:"150px", right:"20px" } }
                  ].map((b, i) => (
                    <div key={i} style={{ position:"absolute", ...b.pos, width:"55px", height:"55px", background:"rgba(0,0,0,0.9)", border:`3px solid ${b.color}`, borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", color:b.color, boxShadow:`0 0 20px ${b.color}`, animation:"pulse 2.5s ease-in-out infinite", animationDelay:`${i * 0.2}s` }}>
                      <b.icon size={26} />
                    </div>
                  ))}

                  {/* Bottom Info */}
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(to top, rgba(0,0,0,0.98), rgba(0,0,0,0.9))", borderTop:"3px solid #00f5ff", padding:"1.5rem", boxShadow:"0 -10px 30px rgba(0,245,255,0.3)" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1rem", gap:"1rem", flexWrap:"wrap" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", background:"rgba(34,197,94,0.2)", border:"2px solid #22c55e", borderRadius:"20px", padding:"0.5rem 1rem", boxShadow:"0 0 15px rgba(34,197,94,0.3)" }}>
                        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 10px #22c55e", animation:"pulse 2s ease-in-out infinite" }} />
                        <span style={{ fontSize:"0.75rem", color:"#22c55e", fontWeight:800, fontFamily:"'Roboto Mono',monospace" }}>AVAILABLE</span>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", background:"rgba(0,245,255,0.2)", border:"2px solid #00f5ff", borderRadius:"20px", padding:"0.5rem 1rem", boxShadow:"0 0 15px rgba(0,245,255,0.3)" }}>
                        <Clock size={14} style={{ color:"#00f5ff" }} />
                        <span style={{ fontSize:"0.75rem", color:"#00f5ff", fontWeight:800, fontFamily:"'Roboto Mono',monospace" }}>{currentTime.toLocaleTimeString('en-US', { hour12: false })}</span>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:"0.6rem", marginBottom:"1rem", flexWrap:"wrap" }}>
                      {["AI/ML", "Cloud", "Full-Stack"].map((t, i) => (
                        <span key={i} style={{ padding:"0.3rem 0.8rem", background:"rgba(0,245,255,0.25)", border:"1.5px solid #00f5ff", borderRadius:"6px", fontSize:"0.7rem", color:"#00f5ff", fontWeight:800, boxShadow:"0 0 10px rgba(0,245,255,0.3)" }}>{t}</span>
                      ))}
                    </div>
                    <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.6rem", padding:"0.9rem", background:"linear-gradient(135deg,#00f5ff,#00c4ff)", borderRadius:"10px", color:"#000", fontWeight:900, fontSize:"0.9rem", textDecoration:"none", boxShadow:"0 8px 20px rgba(0,245,255,0.4)", transition:"all 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                      <Send size={18} /> HIRE ME NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="fade-in delay-1" style={{ display:"inline-flex", alignItems:"center", gap:"0.7rem", background:"linear-gradient(135deg,rgba(0,245,255,0.2),rgba(168,85,247,0.2))", border:"2px solid rgba(0,245,255,0.5)", borderRadius:"30px", padding:"0.7rem 1.5rem", marginBottom:"2rem", fontFamily:"'Roboto Mono',monospace", fontSize:"0.85rem", fontWeight:800, color:"#00f5ff", boxShadow:"0 0 25px rgba(0,245,255,0.3)" }}>
                <Sparkles size={16} style={{ animation:"pulse 2s ease-in-out infinite" }} /> 2026 GRADUATE • IMMEDIATE JOINER
              </div>

              <h1 className="fade-in delay-2" style={{ fontSize:"clamp(2.5rem,7vw,5.5rem)", fontWeight:900, lineHeight:1.05, marginBottom:"1rem", fontFamily:"'Orbitron',sans-serif", letterSpacing:"-0.02em" }}>
                <span style={{ color:'#fff' }}>SIVA SATYA SAI</span><br />
                <span className="gradient-text">BHAGAVAN</span>
              </h1>

              <div className="fade-in delay-3" style={{ fontSize:"clamp(1.2rem,2.5vw,2rem)", fontWeight:800, marginBottom:"1.5rem", fontFamily:"'Roboto Mono',monospace", color:"#00f5ff", minHeight:"3rem", display:"flex", alignItems:"center", textShadow:"0 0 30px rgba(0,245,255,0.5)" }}>
                &lt; {typedText}<span style={{ width:'3px', height:'1.3em', background:'#00f5ff', marginLeft:'10px', animation:'pulse 1s ease-in-out infinite' }} />&nbsp;/&gt;
              </div>

              <p className="fade-in delay-4" style={{ fontSize:"1.15rem", lineHeight:1.8, color:"#c5c5c5", maxWidth:"700px", marginBottom:"2.5rem" }}>
                <strong style={{ color:'#fff' }}>Elite software engineer</strong> with <span style={{ color:'#00f5ff', fontWeight:700 }}>proven enterprise experience</span> across <strong>3 industry internships</strong>. Specialized in <span style={{ color:'#a855f7', fontWeight:700 }}>AI/ML systems</span> and <span style={{ color:'#22c55e', fontWeight:700 }}>scalable cloud architecture</span>. Delivered <strong>15+ production projects</strong> with <span style={{ color:'#ffd700', fontWeight:700 }}>100% client satisfaction</span>.
              </p>

              <div className="fade-in delay-5" style={{ display:"flex", gap:"1.2rem", marginBottom:"3rem", flexWrap:"wrap" }}>
                <button onClick={() => navigate('/projects')} className="btn-primary"><Rocket size={20} /> VIEW PROJECTS</button>
                <a href={resumePdf} download className="btn-outline" style={{ color:"#00f5ff" }}><Download size={20} /> DOWNLOAD RESUME</a>
              </div>

              <div className="fade-in delay-6" style={{ display:"flex", gap:"1.2rem" }}>
                {[
                  { icon:Github, href:"https://github.com/bhagavan444", color:"#fff" },
                  { icon:Linkedin, href:"https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/", color:"#00f5ff" },
                  { icon:Mail, href:"mailto:g.sivasatyasaibhagavan@gmail.com", color:"#a855f7" },
                  { icon:Phone, href:"tel:+917569205626", color:"#22c55e" }
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width:"52px", height:"52px", background:"rgba(0,0,0,0.7)", border:`3px solid ${s.color}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:s.color, transition:"all 0.3s", textDecoration:"none", boxShadow:`0 0 15px ${s.color}40` }} onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = "#000"; e.currentTarget.style.transform = "scale(1.2) translateY(-5px)"; }} onMouseLeave={e => { e.currentTarget.style.background = "rgba(0,0,0,0.7)"; e.currentTarget.style.color = s.color; e.currentTarget.style.transform = "scale(1)"; }}>
                    <s.icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* METRICS */}
          <section id="metrics" data-observe style={{ padding:"5rem 0" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:"2rem" }}>
              {metrics.map((m, i) => (
                <div key={i} className={`glass ${visibleSections.has('metrics') ? 'fade-in' : ''}`} style={{ padding:"2.5rem", textAlign:"center", animationDelay:`${i * 0.1}s`, opacity:visibleSections.has('metrics') ? 1 : 0 }}>
                  <div style={{ width:"70px", height:"70px", margin:"0 auto 1.2rem", background:`${m.color}30`, border:`4px solid ${m.color}`, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", color:m.color, boxShadow:`0 0 30px ${m.color}70`, animation:"float 5s ease-in-out infinite" }}>
                    <m.icon size={32} />
                  </div>
                  <div style={{ fontSize:"3rem", fontWeight:900, color:m.color, marginBottom:"0.8rem", fontFamily:"'Orbitron',sans-serif", textShadow:`0 0 25px ${m.color}90` }}>{m.value}</div>
                  <div style={{ fontSize:"1.05rem", fontWeight:800, color:"#fff", textTransform:"uppercase", fontFamily:"'Roboto Mono',monospace", letterSpacing:"1px" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ACHIEVEMENTS */}
          <section id="achievements" data-observe style={{ padding:"4rem 0" }}>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, marginBottom:"3rem", textAlign:"center", fontFamily:"'Orbitron',sans-serif" }}>
              <span className="gradient-text">Achievements & Certifications</span>
            </h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"1.5rem" }}>
              {achievements.map((a, i) => (
                <div key={i} className={`glass ${visibleSections.has('achievements') ? 'fade-in' : ''}`} style={{ padding:"1.8rem", display:"flex", alignItems:"center", gap:"1rem", opacity:visibleSections.has('achievements') ? 1 : 0, animationDelay:`${i * 0.08}s` }}>
                  <div style={{ width:"50px", height:"50px", minWidth:"50px", background:`${a.color}25`, border:`3px solid ${a.color}`, borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", color:a.color, boxShadow:`0 0 20px ${a.color}50` }}>
                    <a.icon size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize:"1rem", fontWeight:800, color:"#fff", marginBottom:"0.2rem" }}>{a.label}</div>
                    <div style={{ fontSize:"0.8rem", color:a.color, fontWeight:700, fontFamily:"'Roboto Mono',monospace" }}>{a.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section id="techstack" data-observe style={{ padding:"5rem 0" }}>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, marginBottom:"3rem", textAlign:"center", fontFamily:"'Orbitron',sans-serif" }}>
              <span className="gradient-text">Technology Arsenal</span>
            </h2>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))", gap:"1.5rem", maxWidth:"1000px", margin:"0 auto" }}>
              {techStack.map((t, i) => (
                <div key={i} className={`glass ${visibleSections.has('techstack') ? 'fade-in' : ''}`} style={{ padding:"1.8rem 1.2rem", textAlign:"center", opacity:visibleSections.has('techstack') ? 1 : 0, animationDelay:`${i * 0.05}s` }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px) scale(1.05)"; e.currentTarget.style.borderColor = t.color; }} onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <div style={{ width:"60px", height:"60px", margin:"0 auto 1rem", background:`${t.color}20`, border:`2px solid ${t.color}50`, borderRadius:"12px", display:"flex", alignItems:"center", justifyContent:"center", padding:"0.8rem" }}>
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icon}`} alt={t.name} style={{ width:"100%", height:"100%", objectFit:"contain" }} />
                  </div>
                  <div style={{ fontSize:"1rem", fontWeight:800, color:"#fff", fontFamily:"'Roboto Mono',monospace" }}>{t.name}</div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" data-observe style={{ padding:"5rem 0" }}>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, marginBottom:"3rem", textAlign:"center", fontFamily:"'Orbitron',sans-serif" }}>
              <span className="gradient-text">Elite Technical Skills</span>
            </h2>
            <div style={{ maxWidth:"1000px", margin:"0 auto", display:"flex", flexDirection:"column", gap:"2.5rem" }}>
              {skills.map((s, i) => (
                <div key={i} className={`glass ${visibleSections.has('skills') ? 'fade-in' : ''}`} style={{ padding:"2.5rem", opacity:visibleSections.has('skills') ? 1 : 0, animationDelay:`${i * 0.1}s` }}>
                  <div style={{ display:"flex", alignItems:"center", gap:"1.5rem", marginBottom:"1.5rem" }}>
                    <div style={{ width:"60px", height:"60px", minWidth:"60px", background:`${s.color}30`, border:`3px solid ${s.color}`, borderRadius:"14px", display:"flex", alignItems:"center", justifyContent:"center", color:s.color, boxShadow:`0 0 25px ${s.color}70` }}>
                      <s.icon size={28} />
                    </div>
                    <div style={{ flex:1 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.8rem", flexWrap:"wrap", gap:"1rem" }}>
                        <span style={{ fontSize:"1.3rem", fontWeight:900, color:"#fff", fontFamily:"'Roboto Mono',monospace" }}>{s.name}</span>
                        <span style={{ fontFamily:"'Orbitron',monospace", fontSize:"1.2rem", color:s.color, fontWeight:900, textShadow:`0 0 10px ${s.color}70` }}>{skillProgress[s.name] || 0}%</span>
                      </div>
                      <div style={{ height:"10px", background:"rgba(255,255,255,0.05)", borderRadius:"10px", overflow:"hidden", marginBottom:"1rem" }}>
                        <div style={{ width:`${skillProgress[s.name] || 0}%`, height:"100%", background:`linear-gradient(90deg, ${s.color}, ${s.color}DD)`, borderRadius:"10px", transition:"width 2s cubic-bezier(0.16,1,0.3,1)", boxShadow:`0 0 15px ${s.color}90` }} />
                      </div>
                      <div style={{ fontSize:"0.9rem", color:"#bbb", fontFamily:"'Roboto Mono',monospace" }}>{s.tech}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section id="testimonials" data-observe style={{ padding:"5rem 0" }}>
            <h2 style={{ fontSize:"clamp(2rem,4vw,3rem)", fontWeight:900, marginBottom:"3rem", textAlign:"center", fontFamily:"'Orbitron',sans-serif" }}>
              <span className="gradient-text">What Leaders Say</span>
            </h2>
            <div style={{ maxWidth:"800px", margin:"0 auto", position:"relative", minHeight:"280px" }}>
              {testimonials.map((t, i) => (
                <div key={i} className="glass" style={{ padding:"2.5rem", position: i === activeTestimonial ? "relative" : "absolute", top:0, left:0, right:0, opacity: i === activeTestimonial ? 1 : 0, visibility: i === activeTestimonial ? "visible" : "hidden", transition:"all 0.5s", textAlign:"center" }}>
                  <div style={{ width:"70px", height:"70px", borderRadius:"50%", background:`linear-gradient(135deg, ${t.color}, ${t.color}80)`, margin:"0 auto 1.5rem", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.6rem", fontWeight:900, color:"#000", boxShadow:`0 0 25px ${t.color}60` }}>{t.avatar}</div>
                  <p style={{ fontSize:"1.15rem", lineHeight:1.7, color:"#fff", marginBottom:"1.5rem", fontStyle:"italic" }}>"{t.text}"</p>
                  <div style={{ fontSize:"1rem", fontWeight:800, color:t.color, marginBottom:"0.2rem" }}>{t.author}</div>
                  <div style={{ fontSize:"0.9rem", color:"#999" }}>{t.role}</div>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"center", gap:"0.8rem", marginTop:"2rem" }}>
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setActiveTestimonial(i)} style={{ width: i === activeTestimonial ? "35px" : "10px", height:"10px", borderRadius:"5px", background: i === activeTestimonial ? testimonials[i].color : "rgba(255,255,255,0.2)", border:"none", cursor:"pointer", transition:"all 0.3s", boxShadow: i === activeTestimonial ? `0 0 12px ${testimonials[i].color}` : "none" }} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding:"5rem 0 7rem" }}>
            <div className="glass" style={{ padding:"4rem 2.5rem", textAlign:"center", background:"linear-gradient(135deg, rgba(0,245,255,0.05), rgba(168,85,247,0.05))" }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:"0.6rem", background:"rgba(0,245,255,0.2)", border:"2px solid #00f5ff", borderRadius:"30px", padding:"0.6rem 1.3rem", marginBottom:"2rem", fontSize:"0.85rem", fontWeight:800, color:"#00f5ff", fontFamily:"'Roboto Mono',monospace", boxShadow:"0 0 20px rgba(0,245,255,0.3)" }}>
                <Zap size={16} /> IMMEDIATE AVAILABILITY
              </div>
              <h2 style={{ fontSize:"clamp(2rem,5vw,3.5rem)", fontWeight:900, marginBottom:"1.5rem", fontFamily:"'Orbitron',sans-serif" }}>
                <span className="gradient-text">Ready to Drive Impact</span><br />
                <span style={{ color:"#fff" }}>at Your Organization</span>
              </h2>
              <p style={{ fontSize:"1.1rem", color:"#b5b5b5", marginBottom:"3rem", maxWidth:"750px", margin:"0 auto 3rem", lineHeight:1.8 }}>
                Seeking full-time opportunities where I can leverage my expertise in <strong style={{ color:"#00f5ff" }}>AI/ML</strong>, <strong style={{ color:"#a855f7" }}>full-stack development</strong>, and <strong style={{ color:"#22c55e" }}>cloud architecture</strong> to build transformative solutions.
              </p>
              <div style={{ display:"flex", gap:"1.2rem", justifyContent:"center", flexWrap:"wrap" }}>
                <a href="mailto:g.sivasatyasaibhagavan@gmail.com" className="btn-primary"><Send size={20} /> SCHEDULE INTERVIEW</a>
                <button onClick={() => navigate('/projects')} className="btn-outline" style={{ color:"#a855f7" }}><Eye size={20} /> VIEW PORTFOLIO</button>
                <a href={resumePdf} download className="btn-outline" style={{ color:"#22c55e" }}><Download size={20} /> GET RESUME</a>
              </div>
              <div style={{ marginTop:"3rem", paddingTop:"2.5rem", borderTop:"2px solid rgba(255,255,255,0.1)", display:"flex", justifyContent:"center", gap:"2.5rem", flexWrap:"wrap" }}>
                <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{ display:"flex", alignItems:"center", gap:"0.6rem", color:"#00f5ff", textDecoration:"none", fontSize:"1rem", fontWeight:700 }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#00f5ff"}>
                  <Mail size={18} /> g.sivasatyasaibhagavan@gmail.com
                </a>
                <a href="tel:+917569205626" style={{ display:"flex", alignItems:"center", gap:"0.6rem", color:"#22c55e", textDecoration:"none", fontSize:"1rem", fontWeight:700 }} onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#22c55e"}>
                  <Phone size={18} /> +91 7569205626
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer style={{ borderTop:"1px solid rgba(255,255,255,0.1)", padding:"2.5rem 0", textAlign:"center" }}>
            <p style={{ color:"#666", fontSize:"0.9rem" }}>© 2026 Siva Satya Sai Bhagavan. Crafted with <span style={{ color:"#ff6b35" }}>❤</span> and cutting-edge tech.</p>
          </footer>
        </div>
      </div>
    </>
  );
}