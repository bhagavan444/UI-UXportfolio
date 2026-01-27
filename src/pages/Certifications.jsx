import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Code, Cloud, Database, Terminal, Brain, Rocket, Zap, Star, Sparkles, Trophy, Target, Cpu, Shield, Box, GitBranch, Layers } from 'lucide-react';

const certificationsData = [
  {
    title: "Full Stack Web Development",
    image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog",
    link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view",
    category: "Web",
    level: "Advanced",
    skills: ["React", "Node.js", "MongoDB"],  
    power: 95,
    desc: "Advanced full-stack certification focused on building complete web applications.",
    year: "2024"
  },
  {
    title: "Python Programming",
    image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6",
    link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Python", "OOP", "Algorithms"],
    power: 92,
    desc: "Comprehensive Python programming certification.",
    year: "2024"
  },
  {
    title: "Java Programming",
    image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM",
    link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Java", "Spring", "Multithreading"],
    power: 90,
    desc: "Advanced Java certification covering core and backend concepts.",
    year: "2024"
  },
  {
    title: "AWS Cloud",
    image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9",
    link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view",
    category: "Cloud",
    level: "Professional",
    skills: ["AWS", "EC2", "S3"],
    power: 88,
    desc: "Professional certification on AWS cloud services.",
    year: "2024"
  },
  {
    title: "Azure Fundamentals",
    image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM",
    link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view",
    category: "Cloud",
    level: "Professional",
    skills: ["Azure", "Cloud", "DevOps"],
    power: 85,
    desc: "Fundamental certification on Microsoft Azure cloud.",
    year: "2024"
  },
  {
    title: "Data Science",
    image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv",
    link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view",
    category: "Data",
    level: "Advanced",
    skills: ["Python", "Pandas", "Visualization"],
    power: 93,
    desc: "Advanced data science certification.",
    year: "2024"
  },
  {
    title: "Machine Learning",
    image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6",
    link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["ML", "AI", "Neural Networks"],
    power: 98,
    desc: "Expert-level certification in machine learning.",
    year: "2024"
  },
  {
    title: "Cloud Computing",
    image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX",
    link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view",
    category: "Cloud",
    level: "Professional",
    skills: ["Cloud", "Distributed Systems"],
    power: 87,
    desc: "Cloud computing concepts and architectures.",
    year: "2023"
  },
  {
    title: "R Programming",
    image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-",
    link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view",
    category: "Programming",
    level: "Advanced",
    skills: ["R", "Statistics", "Data Analysis"],
    power: 86,
    desc: "Statistical programming using R.",
    year: "2023"
  },
  {
    title: "Art of Programming",
    image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx",
    link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Algorithms", "Problem Solving"],
    power: 91,
    desc: "Algorithmic thinking and problem-solving certification.",
    year: "2023"
  },
  {
    title: "Machine Learning with Python",
    image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK",
    link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["Python", "Scikit-learn", "TensorFlow"],
    power: 96,
    desc: "Hands-on ML certification using Python.",
    year: "2024"
  },
  {
    title: "Large Language Models",
    image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s",
    link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["LLM", "GPT", "Prompt Engineering"],
    power: 99,
    desc: "Advanced certification on Large Language Models.",
    year: "2024"
  },
  {
    title: "React",
    image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf",
    link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view",
    category: "Web",
    level: "Advanced",
    skills: ["React", "Hooks", "State Management"],
    power: 94,
    desc: "Advanced React development certification.",
    year: "2024"
  },
  {
    title: "JavaScript",
    image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd",
    link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view",
    category: "Web",
    level: "Advanced",
    skills: ["JavaScript", "ES6+", "Async"],
    power: 93,
    desc: "Modern JavaScript programming certification.",
    year: "2024"
  },
  {
    title: "MLOps",
    image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP",
    link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view",
    category: "DevOps",
    level: "Professional",
    skills: ["MLOps", "CI/CD", "Kubernetes"],
    power: 89,
    desc: "Professional certification in MLOps.",
    year: "2024"
  },
  {
    title: "CI/CD",
    image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr",
    link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view",
    category: "DevOps",
    level: "Professional",
    skills: ["Jenkins", "GitHub Actions", "Docker"],
    power: 87,
    desc: "CI/CD pipeline automation certification.",
    year: "2024"
  },
  {
    title: "Django",
    image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc",
    link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view",
    category: "Web",
    level: "Advanced",
    skills: ["Django", "Python", "REST API"],
    power: 90,
    desc: "Backend web development using Django.",
    year: "2023"
  },
  {
    title: "HTML",
    image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr",
    link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view",
    category: "Web",
    level: "Advanced",
    skills: ["HTML5", "Semantic", "Accessibility"],
    power: 88,
    desc: "Advanced HTML and semantic web development.",
    year: "2023"
  },
  {
    title: "CSS",
    image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE",
    link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view",
    category: "Web",
    level: "Advanced",
    skills: ["CSS3", "Flexbox", "Grid"],
    power: 89,
    desc: "Advanced CSS layout and styling techniques.",
    year: "2023"
  }
];

const categoryConfig = {
  Web: { icon: Code, color: '#00ff9f', gradient: 'linear-gradient(135deg, #00ff9f, #00cc7a)' },
  Programming: { icon: Terminal, color: '#ff0080', gradient: 'linear-gradient(135deg, #ff0080, #cc0066)' },
  Cloud: { icon: Cloud, color: '#00d4ff', gradient: 'linear-gradient(135deg, #00d4ff, #0099cc)' },
  Data: { icon: Database, color: '#ffd700', gradient: 'linear-gradient(135deg, #ffd700, #ffb700)' },
  "AI/ML": { icon: Brain, color: '#a855f7', gradient: 'linear-gradient(135deg, #a855f7, #8b35d4)' },
  DevOps: { icon: Rocket, color: '#ff6b35', gradient: 'linear-gradient(135deg, #ff6b35, #e64a19)' }
};

// Advanced Developer Background Component
function DeveloperAnimatedBackground() {
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

    // Floating code snippets
    const codeSnippets = [
      'import React from "react"',
      'const [state, setState]',
      'async function getData()',
      'export default App',
      'npm install package',
      'git commit -m "feat"',
      'docker-compose up',
      'kubectl apply -f',
      'const express = require',
      'app.listen(PORT)',
      'mongoose.connect(URI)',
      'JWT.verify(token)',
      'await fetch(API_URL)',
      'Redux.dispatch(action)',
      '<Component prop={} />',
      'styled.div`padding`',
      'useEffect(() => {})',
      'class Model extends',
    ];

    class CodeParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.speed = Math.random() * 0.8 + 0.3;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = ['#00ff9f', '#00d4ff', '#a855f7', '#ff0080'][Math.floor(Math.random() * 4)];
        this.rotation = Math.random() * 0.02 - 0.01;
        this.angle = 0;
      }
      update() {
        this.y += this.speed;
        this.angle += this.rotation;
        if (this.y > canvas.height + 50) this.reset();
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.font = '13px "JetBrains Mono", monospace';
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }
    }

    class BinaryStream {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.speed = Math.random() * 2 + 1.5;
        this.length = Math.floor(Math.random() * 15) + 10;
        this.chars = Array(this.length).fill(0).map(() => Math.random() > 0.5 ? '1' : '0');
        this.opacity = Math.random() * 0.3 + 0.2;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height + 100) this.reset();
      }
      draw() {
        ctx.font = '11px "JetBrains Mono", monospace';
        this.chars.forEach((char, i) => {
          const alpha = Math.max(0, this.opacity - (i * 0.015));
          ctx.fillStyle = `rgba(0, 212, 255, ${alpha})`;
          ctx.fillText(char, this.x, this.y - (i * 14));
        });
      }
    }

    class CircuitNode {
      constructor() {
        this.reset();
      }
      reset() {
        this.startX = Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = this.startX + (Math.random() - 0.5) * 400;
        this.endY = this.startY + (Math.random() - 0.5) * 400;
        this.progress = 0;
        this.speed = Math.random() * 0.008 + 0.004;
        this.color = ['#00ff9f', '#00d4ff', '#a855f7'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      update() {
        this.progress += this.speed;
        if (this.progress > 1) this.reset();
      }
      draw() {
        const x = this.startX + (this.endX - this.startX) * this.progress;
        const y = this.startY + (this.endY - this.startY) * this.progress;
        
        ctx.strokeStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.startX, this.startY);
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Glowing node
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class GeometricParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 80 + 40;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.008;
        this.opacity = Math.random() * 0.08 + 0.04;
        this.type = Math.floor(Math.random() * 4);
        this.color = ['#00ff9f', '#00d4ff', '#a855f7', '#ff0080'][Math.floor(Math.random() * 4)];
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
          ctx.rect(-this.size/2, -this.size/2, this.size, this.size);
        } else if (this.type === 1) {
          ctx.moveTo(0, -this.size/2);
          ctx.lineTo(this.size/2, this.size/2);
          ctx.lineTo(-this.size/2, this.size/2);
          ctx.closePath();
        } else if (this.type === 2) {
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = (this.size/2) * Math.cos(angle);
            const y = (this.size/2) * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else {
          ctx.arc(0, 0, this.size/2, 0, Math.PI * 2);
        }
        ctx.stroke();
        ctx.restore();
      }
    }

    class WaveformLine {
      constructor() {
        this.reset();
      }
      reset() {
        this.y = Math.random() * canvas.height;
        this.amplitude = Math.random() * 30 + 20;
        this.frequency = Math.random() * 0.01 + 0.005;
        this.speed = Math.random() * 0.02 + 0.01;
        this.offset = 0;
        this.color = ['#00ff9f', '#ff0080', '#00d4ff'][Math.floor(Math.random() * 3)];
        this.opacity = Math.random() * 0.2 + 0.1;
      }
      update() {
        this.offset += this.speed;
      }
      draw() {
        ctx.strokeStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = this.y + Math.sin((x * this.frequency) + this.offset) * this.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    // Create elements
    const codeParticles = Array.from({ length: 20 }, () => new CodeParticle());
    const binaryStreams = Array.from({ length: 15 }, () => new BinaryStream());
    const circuitNodes = Array.from({ length: 12 }, () => new CircuitNode());
    const geometricParticles = Array.from({ length: 8 }, () => new GeometricParticle());
    const waveformLines = Array.from({ length: 3 }, () => new WaveformLine());

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      geometricParticles.forEach(p => {
        p.update();
        p.draw();
      });

      waveformLines.forEach(w => {
        w.update();
        w.draw();
      });

      circuitNodes.forEach(c => {
        c.update();
        c.draw();
      });

      binaryStreams.forEach(b => {
        b.update();
        b.draw();
      });

      codeParticles.forEach(c => {
        c.update();
        c.draw();
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
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7
      }}
    />
  );
}

export default function CertificationsShowcase() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Stats animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredCerts = certificationsData.filter(cert => {
    const matchesFilter = filter === "All" || cert.category === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const avgPower = Math.round(filteredCerts.reduce((sum, c) => sum + c.power, 0) / filteredCerts.length);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse3d {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 5px currentColor); }
          50% { filter: drop-shadow(0 0 20px currentColor); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes rotate3d {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        .glass-card {
          background: rgba(10, 10, 30, 0.6);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .glass-card:hover {
          border-color: rgba(0, 240, 255, 0.4);
          box-shadow: 
            0 20px 60px 0 rgba(0, 240, 255, 0.3),
            0 0 80px rgba(0, 240, 255, 0.2);
        }

        .neon-text {
          background: linear-gradient(135deg, #00ff9f, #00d4ff, #a855f7, #ff0080);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 8s ease infinite;
        }

        .holographic {
          background: linear-gradient(135deg, 
            rgba(0, 255, 159, 0.08) 0%,
            rgba(0, 212, 255, 0.08) 25%,
            rgba(168, 85, 247, 0.08) 50%,
            rgba(255, 0, 128, 0.08) 75%,
            rgba(0, 255, 159, 0.08) 100%);
          background-size: 400% 400%;
          animation: shimmer 10s ease infinite;
        }

        @media (max-width: 768px) {
          .glass-card:hover {
            transform: translateY(-5px) !important;
          }
        }
      `}</style>

      <div style={{
        minHeight: '100vh',
        background: '#000000',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Inter', sans-serif"
      }}>
        {/* Developer Animated Background */}
        <DeveloperAnimatedBackground />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '4rem 2rem'
        }}>
          {/* Hero Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '5rem',
            animation: 'fadeInUp 1s ease-out',
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.8rem 2rem',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '2px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '999px',
              marginBottom: '2rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '1.1rem',
              color: '#00f0ff',
              animation: 'pulse3d 3s infinite'
            }}>
              <Trophy size={24} style={{ animation: 'glow 2s infinite' }} />
              {'> certificates.showcase()'}
              <Sparkles size={24} style={{ animation: 'glow 2s infinite' }} />
            </div>

            <h1 className="neon-text" style={{
              fontSize: 'clamp(4rem, 15vw, 9rem)',
              fontWeight: 900,
              letterSpacing: '8px',
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1,
              textTransform: 'uppercase',
              textShadow: '0 0 80px rgba(0, 240, 255, 0.5)'
            }}>
              CERTIFICATIONS
            </h1>

            <div style={{
              fontSize: 'clamp(1.2rem, 4vw, 2rem)',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #00ff9f, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '3rem'
            }}>
              Professional Technical Credentials
            </div>

            {/* Stats Dashboard */}
            <div 
              ref={statsRef}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                maxWidth: '1000px',
                margin: '0 auto'
              }}
            >
              {[
                { label: 'Power Score', value: avgPower, icon: Zap, color: '#ffd700' },
                { label: 'Certifications', value: filteredCerts.length, icon: Award, color: '#00ff9f' },
                { label: 'Categories', value: 6, icon: Layers, color: '#ff0080' },
                { label: 'Skill Level', value: 'Expert', icon: Star, color: '#00d4ff' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '2rem 1.5rem',
                    borderRadius: '20px',
                    textAlign: 'center',
                    animation: statsAnimated ? `scaleIn 0.6s ease-out ${i * 0.1}s both` : 'none',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    if (window.innerWidth >= 768) {
                      e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)';
                      e.currentTarget.style.borderColor = stat.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  <div style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto 1rem',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: `0 0 40px ${stat.color}60`,
                    animation: 'float 3s ease-in-out infinite'
                  }}>
                    <stat.icon size={36} style={{ color: '#000' }} />
                  </div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: stat.color,
                    marginBottom: '0.5rem',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textShadow: `0 0 20px ${stat.color}60`
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Search & Filter */}
          <div style={{ marginBottom: '3rem' }}>
            <div className="glass-card" style={{
              padding: '1.5rem',
              borderRadius: '20px',
              marginBottom: '1.5rem'
            }}>
              <input
                type="text"
                placeholder="🔍 Search certifications, skills, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '2px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '1.2rem 1.5rem',
                  fontSize: '1.1rem',
                  outline: 'none',
                  color: '#fff',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#00f0ff';
                  e.target.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.3)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0, 240, 255, 0.2)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {['All', ...Object.keys(categoryConfig)].map(cat => {
                const config = categoryConfig[cat];
                const Icon = config?.icon || Award;
                const isActive = filter === cat;
                
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    style={{
                      padding: '0.9rem 1.8rem',
                      borderRadius: '12px',
                      fontWeight: 700,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      transition: 'all 0.3s ease',
                      border: `2px solid ${isActive ? config?.color || '#00f0ff' : 'rgba(255, 255, 255, 0.2)'}`,
                      background: isActive 
                        ? `${config?.gradient || 'linear-gradient(135deg, #00f0ff, #00cc7a)'}20`
                        : 'rgba(0, 0, 0, 0.3)',
                      color: isActive ? config?.color || '#00f0ff' : '#fff',
                      boxShadow: isActive ? `0 0 40px ${config?.color || '#00f0ff'}40` : 'none',
                      transform: isActive ? 'scale(1.08)' : 'scale(1)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(10px)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive && window.innerWidth >= 768) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.borderColor = config?.color || '#00f0ff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      }
                    }}
                  >
                    {cat !== 'All' && <Icon size={20} />}
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Certification Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {filteredCerts.map((cert, idx) => {
              const config = categoryConfig[cert.category];
              const isHovered = hoveredCard === idx;
              
              return (
                <div
                  key={idx}
                  style={{
                    position: 'relative',
                    perspective: '1500px',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer',
                    animation: `fadeInUp 0.8s ease-out ${idx * 0.08}s both`
                  }}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => window.open(cert.link, '_blank')}
                >
                  <div className="glass-card" style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    transform: isHovered && window.innerWidth >= 768 
                      ? 'rotateY(5deg) rotateX(3deg) scale(1.04) translateY(-10px)' 
                      : 'none',
                    transformStyle: 'preserve-3d',
                    position: 'relative'
                  }}>
                    {/* Power Score Bar */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '5px',
                      background: 'rgba(0, 0, 0, 0.5)',
                      zIndex: 20
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${cert.power}%`,
                        background: config.gradient,
                        boxShadow: `0 0 15px ${config.color}`,
                        transition: 'width 1.5s ease-out'
                      }} />
                    </div>

                    {/* Certificate Image */}
                    <div style={{
                      position: 'relative',
                      height: '240px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, #000, transparent)',
                        zIndex: 10
                      }} />
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s ease',
                          transform: isHovered && window.innerWidth >= 768 ? 'scale(1.15)' : 'scale(1)'
                        }}
                      />
                      
                      {/* Category Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        padding: '0.6rem 1rem',
                        borderRadius: '999px',
                        backdropFilter: 'blur(15px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        zIndex: 20,
                        background: `${config.color}25`,
                        border: `2px solid ${config.color}`,
                        boxShadow: `0 0 30px ${config.color}50`
                      }}>
                        <config.icon size={18} style={{ color: config.color }} />
                        <span style={{ 
                          fontSize: '0.85rem', 
                          fontWeight: 700, 
                          color: config.color,
                          fontFamily: "'JetBrains Mono', monospace"
                        }}>
                          {cert.category}
                        </span>
                      </div>

                      {/* Year Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        padding: '0.5rem 0.9rem',
                        borderRadius: '999px',
                        background: 'rgba(0, 0, 0, 0.7)',
                        backdropFilter: 'blur(10px)',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        color: '#fff',
                        zIndex: 20,
                        fontFamily: "'JetBrains Mono', monospace"
                      }}>
                        {cert.year}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: '1.8rem' }}>
                      <h3 style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        marginBottom: '0.8rem',
                        color: isHovered ? config.color : '#fff',
                        transition: 'color 0.3s ease',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}>
                        {cert.title}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '1rem'
                      }}>
                        <span style={{ 
                          fontSize: '0.95rem', 
                          fontWeight: 600, 
                          color: config.color,
                          padding: '0.4rem 0.8rem',
                          background: `${config.color}15`,
                          borderRadius: '8px',
                          border: `1px solid ${config.color}40`
                        }}>
                          {cert.level}
                        </span>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.4rem',
                          padding: '0.4rem 0.8rem',
                          background: 'rgba(255, 215, 0, 0.15)',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 215, 0, 0.4)'
                        }}>
                          <Zap size={18} style={{ color: '#ffd700' }} />
                          <span style={{ 
                            fontSize: '0.95rem', 
                            fontWeight: 800, 
                            color: '#ffd700',
                            fontFamily: "'Space Grotesk', sans-serif"
                          }}>
                            {cert.power}
                          </span>
                        </div>
                      </div>

                      <p style={{
                        fontSize: '0.95rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '1.2rem',
                        lineHeight: 1.6
                      }}>
                        {cert.desc}
                      </p>

                      {/* Skills Tags */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginBottom: '1.2rem'
                      }}>
                        {cert.skills.map((skill, i) => (
                          <span 
                            key={i}
                            style={{
                              fontSize: '0.8rem',
                              padding: '0.4rem 0.8rem',
                              borderRadius: '8px',
                              background: 'rgba(0, 0, 0, 0.5)',
                              color: 'rgba(255, 255, 255, 0.8)',
                              border: '1px solid rgba(255, 255, 255, 0.15)',
                              fontFamily: "'JetBrains Mono', monospace",
                              fontWeight: 500
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* View Certificate Link */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: isHovered ? '0.8rem' : '0.5rem',
                        color: config.color,
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        transition: 'gap 0.3s ease'
                      }}>
                        <span>View Certificate</span>
                        <ExternalLink size={18} style={{
                          transition: 'transform 0.3s ease',
                          transform: isHovered ? 'translateX(3px)' : 'translateX(0)'
                        }} />
                      </div>
                    </div>

                    {/* Holographic Glow Effect */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: `radial-gradient(circle at center, ${config.color}20, transparent 60%)`,
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                      borderRadius: '24px'
                    }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results State */}
          {filteredCerts.length === 0 && (
            <div className="glass-card" style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              borderRadius: '24px',
              marginTop: '3rem'
            }}>
              <div style={{ 
                fontSize: '5rem', 
                marginBottom: '1.5rem',
                animation: 'float 3s ease-in-out infinite'
              }}>
                🔍
              </div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: 800,
                color: '#00f0ff',
                marginBottom: '1rem'
              }}>
                No Certifications Found
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}