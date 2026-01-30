import { useState, useEffect, useRef, useMemo } from 'react';
import { Award, ExternalLink, Code, Cloud, Database, Terminal, Brain, Rocket, Zap, Star, Sparkles, Trophy, Target, Cpu, Shield, Box, GitBranch, Layers, CheckCircle, TrendingUp, BarChart3, Activity, Calendar, Users, Briefcase, LineChart, ChevronRight, Filter, Search, SortDesc, Grid3x3, List, LayoutGrid, Clock, Flame, Crown, Hexagon } from 'lucide-react';

// Tech stack icon mappings to CDN URLs
const techIcons = {
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'Spring Boot': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Scikit-learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  'Sass': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'Maven': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
};

const certificationsData = [
  {
    title: "Full Stack Web Development",
    image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog",
    link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view",
    category: "Web",
    level: "Advanced",
    skills: ["React", "Node.js", "MongoDB", "Express", "Redux"],  
    power: 95,
    desc: "Comprehensive full-stack development certification covering modern web technologies, including front-end frameworks, server-side programming, database management, and deployment strategies.",
    year: "2024",
    issuer: "Tech Academy",
    duration: "6 months intensive program",
    projects: "15+ real-world applications",
    masteryLevel: "Expert"
  },
  {
    title: "Python Programming",
    image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6",
    link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Python"],
    power: 92,
    desc: "Advanced Python programming certification demonstrating expertise in object-oriented design, algorithm optimization, clean code practices, and software architecture.",
    year: "2024",
    issuer: "Python Institute",
    duration: "4 months",
    projects: "10+ algorithmic solutions",
    masteryLevel: "Expert"
  },
  {
    title: "Java Programming",
    image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM",
    link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Java", "Spring Boot", "Maven"],
    power: 90,
    desc: "Enterprise-level Java certification focusing on Spring ecosystem, concurrent programming, design patterns, and building robust microservices architectures.",
    year: "2024",
    issuer: "Oracle",
    duration: "5 months",
    projects: "8+ enterprise applications",
    masteryLevel: "Expert"
  },
  {
    title: "AWS Cloud",
    image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9",
    link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view",
    category: "Cloud",
    level: "Professional",
    skills: ["AWS"],
    power: 88,
    desc: "Professional AWS certification validating expertise in cloud architecture, infrastructure as code, serverless computing, and cost optimization.",
    year: "2024",
    issuer: "Amazon Web Services",
    duration: "3 months preparation",
    projects: "Cloud migration & optimization",
    masteryLevel: "Professional"
  },
  {
    title: "Azure Fundamentals",
    image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM",
    link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view",
    category: "Cloud",
    level: "Professional",
    skills: ["Azure"],
    power: 85,
    desc: "Microsoft Azure certification demonstrating foundational knowledge of cloud services, pricing models, and Azure-specific tools.",
    year: "2024",
    issuer: "Microsoft",
    duration: "2 months",
    projects: "Multi-cloud deployments",
    masteryLevel: "Professional"
  },
  {
    title: "Data Science",
    image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv",
    link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view",
    category: "Data",
    level: "Advanced",
    skills: ["Python", "Pandas", "NumPy", "SQL"],
    power: 93,
    desc: "Comprehensive data science certification covering the entire data analysis pipeline from data collection and cleaning to visualization and insights generation.",
    year: "2024",
    issuer: "Data Science Institute",
    duration: "6 months intensive",
    projects: "12+ data analysis projects",
    masteryLevel: "Expert"
  },
  {
    title: "Machine Learning",
    image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6",
    link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["PyTorch"],
    power: 98,
    desc: "Expert-level machine learning certification demonstrating mastery of supervised and unsupervised learning, deep neural networks, and advanced ML techniques.",
    year: "2024",
    issuer: "AI Research Lab",
    duration: "8 months advanced program",
    projects: "20+ ML models deployed",
    masteryLevel: "Master"
  },
  {
    title: "Cloud Computing",
    image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX",
    link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view",
    category: "Cloud",
    level: "Professional",
    skills: ["AWS", "Azure"],
    power: 87,
    desc: "Advanced cloud computing certification focusing on distributed systems architecture, fault tolerance, and building resilient cloud-native applications.",
    year: "2023",
    issuer: "Cloud Academy",
    duration: "4 months",
    projects: "Global infrastructure design",
    masteryLevel: "Professional"
  },
  {
    title: "R Programming",
    image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-",
    link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view",
    category: "Programming",
    level: "Advanced",
    skills: ["R"],
    power: 86,
    desc: "Advanced R programming certification specializing in statistical computing, data manipulation, and creating interactive data visualizations.",
    year: "2023",
    issuer: "R Consortium",
    duration: "3 months",
    projects: "Statistical modeling & dashboards",
    masteryLevel: "Expert"
  },
  {
    title: "Art of Programming",
    image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx",
    link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view",
    category: "Programming",
    level: "Advanced",
    skills: ["Python", "Java"],
    power: 91,
    desc: "Comprehensive algorithmic thinking certification emphasizing problem-solving strategies, computational efficiency, and elegant code design.",
    year: "2023",
    issuer: "Programming Institute",
    duration: "5 months intensive",
    projects: "500+ algorithmic challenges",
    masteryLevel: "Expert"
  },
  {
    title: "Machine Learning with Python",
    image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK",
    link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["Python", "Scikit-learn", "TensorFlow", "Keras"],
    power: 96,
    desc: "Expert Python-based machine learning certification covering end-to-end ML pipeline implementation from data preprocessing to model deployment.",
    year: "2024",
    issuer: "ML Academy",
    duration: "7 months",
    projects: "18+ production ML systems",
    masteryLevel: "Master"
  },
  {
    title: "Large Language Models",
    image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s",
    link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view",
    category: "AI/ML",
    level: "Expert",
    skills: ["Python", "PyTorch", "TensorFlow"],
    power: 99,
    desc: "Cutting-edge LLM certification demonstrating expertise in working with state-of-the-art language models, prompt engineering techniques, and building AI-powered applications.",
    year: "2024",
    issuer: "OpenAI Institute",
    duration: "6 months advanced research",
    projects: "AI chatbots & content systems",
    masteryLevel: "Master"
  },
  {
    title: "React",
    image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf",
    link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view",
    category: "Web",
    level: "Advanced",
    skills: ["React", "JavaScript"],
    power: 94,
    desc: "Advanced React certification demonstrating mastery of modern React development including functional components, custom hooks, performance optimization, and testing strategies.",
    year: "2024",
    issuer: "Meta",
    duration: "4 months",
    projects: "12+ React applications",
    masteryLevel: "Expert"
  },
  {
    title: "JavaScript",
    image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd",
    link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view",
    category: "Web",
    level: "Advanced",
    skills: ["JavaScript"],
    power: 93,
    desc: "Comprehensive modern JavaScript certification covering advanced language features, asynchronous programming patterns, and functional programming concepts.",
    year: "2024",
    issuer: "JS Academy",
    duration: "3 months",
    projects: "Complex web applications",
    masteryLevel: "Expert"
  },
  {
    title: "MLOps",
    image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP",
    link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view",
    category: "DevOps",
    level: "Professional",
    skills: ["Kubernetes", "Docker", "Python"],
    power: 89,
    desc: "Professional MLOps certification focusing on operationalizing machine learning models through automated pipelines, containerization, and continuous monitoring.",
    year: "2024",
    issuer: "MLOps Institute",
    duration: "4 months",
    projects: "ML pipeline automation",
    masteryLevel: "Professional"
  },
  {
    title: "CI/CD",
    image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr",
    link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view",
    category: "DevOps",
    level: "Professional",
    skills: ["Jenkins", "Docker", "Git"],
    power: 87,
    desc: "Professional CI/CD certification demonstrating expertise in building automated deployment pipelines, infrastructure as code, and implementing DevOps best practices.",
    year: "2024",
    issuer: "DevOps Academy",
    duration: "3 months",
    projects: "Enterprise CI/CD pipelines",
    masteryLevel: "Professional"
  },
  {
    title: "Django",
    image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc",
    link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view",
    category: "Web",
    level: "Advanced",
    skills: ["Django", "Python", "PostgreSQL"],
    power: 90,
    desc: "Advanced Django framework certification covering full-stack web development with Python. Expert in building secure, scalable web applications.",
    year: "2023",
    issuer: "Django Foundation",
    duration: "4 months",
    projects: "E-commerce & CMS platforms",
    masteryLevel: "Expert"
  },
  {
    title: "HTML",
    image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr",
    link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view",
    category: "Web",
    level: "Advanced",
    skills: ["HTML5"],
    power: 88,
    desc: "Advanced HTML certification emphasizing semantic markup, web accessibility standards (WCAG), and modern HTML5 features.",
    year: "2023",
    issuer: "W3C",
    duration: "2 months",
    projects: "Accessible web interfaces",
    masteryLevel: "Expert"
  },
  {
    title: "CSS",
    image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE",
    link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view",
    category: "Web",
    level: "Advanced",
    skills: ["CSS3", "Sass"],
    power: 89,
    desc: "Advanced CSS certification demonstrating mastery of modern layout techniques, responsive design principles, and creating smooth animations.",
    year: "2023",
    issuer: "CSS Academy",
    duration: "3 months",
    projects: "Responsive design systems",
    masteryLevel: "Expert"
  }
];

const categoryConfig = {
  Web: { icon: Code, color: '#61DAFB', gradient: 'linear-gradient(135deg, #61DAFB, #21A1F1)', bgGlow: 'rgba(97, 218, 251, 0.15)' },
  Programming: { icon: Terminal, color: '#F7DF1E', gradient: 'linear-gradient(135deg, #F7DF1E, #F0DB4F)', bgGlow: 'rgba(247, 223, 30, 0.15)' },
  Cloud: { icon: Cloud, color: '#FF9900', gradient: 'linear-gradient(135deg, #FF9900, #EC7211)', bgGlow: 'rgba(255, 153, 0, 0.15)' },
  Data: { icon: Database, color: '#00D9FF', gradient: 'linear-gradient(135deg, #00D9FF, #00A8CC)', bgGlow: 'rgba(0, 217, 255, 0.15)' },
  "AI/ML": { icon: Brain, color: '#FF6F00', gradient: 'linear-gradient(135deg, #FF6F00, #E65100)', bgGlow: 'rgba(255, 111, 0, 0.15)' },
  DevOps: { icon: Rocket, color: '#326CE5', gradient: 'linear-gradient(135deg, #326CE5, #2563EB)', bgGlow: 'rgba(50, 108, 229, 0.15)' }
};

const masteryColors = {
  'Master': { color: '#FFD700', glow: 'rgba(255, 215, 0, 0.4)', icon: Crown },
  'Expert': { color: '#FF6B35', glow: 'rgba(255, 107, 53, 0.4)', icon: Flame },
  'Professional': { color: '#00D4FF', glow: 'rgba(0, 212, 255, 0.4)', icon: Star }
};

function ParticleBackground() {
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

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = ['#61DAFB', '#FFD700', '#FF6B35', '#00D4FF'][Math.floor(Math.random() * 4)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        gradient.addColorStop(0, `${this.color}${Math.floor(this.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class ConnectionLine {
      constructor(p1, p2, distance) {
        this.p1 = p1;
        this.p2 = p2;
        this.distance = distance;
      }
      draw() {
        const opacity = (1 - this.distance / 150) * 0.15;
        ctx.strokeStyle = `rgba(97, 218, 251, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
      }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());

    const animate = () => {
      ctx.fillStyle = 'rgba(5, 5, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            new ConnectionLine(particles[i], particles[j], distance).draw();
          }
        }
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
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

  return <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />;
}

export default function CertificationsShowcase() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("power");
  const [viewMode, setViewMode] = useState("grid"); // grid, list, compact, masonry

  const filteredCerts = useMemo(() => {
    return certificationsData
      .filter(cert => {
        const matchesFilter = filter === "All" || cert.category === filter;
        const matchesSearch = 
          cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cert.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
          cert.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "power") return b.power - a.power;
        if (sortBy === "year") return b.year.localeCompare(a.year);
        if (sortBy === "name") return a.title.localeCompare(b.title);
        return 0;
      });
  }, [filter, searchQuery, sortBy]);

  const stats = useMemo(() => ({
    avgPower: Math.round(certificationsData.reduce((sum, c) => sum + c.power, 0) / certificationsData.length),
    totalCerts: certificationsData.length,
    expertCerts: certificationsData.filter(c => c.level === "Expert").length,
    categories: Object.keys(categoryConfig).length,
    masterCerts: certificationsData.filter(c => c.masteryLevel === "Master").length
  }), []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { overflow-x: hidden; }
        
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes glow { 
          0%, 100% { filter: drop-shadow(0 0 10px currentColor); } 
          50% { filter: drop-shadow(0 0 25px currentColor); } 
        }
        @keyframes shimmer { 
          0% { background-position: -1000px 0; } 
          100% { background-position: 1000px 0; } 
        }
        @keyframes float { 
          0%, 100% { transform: translateY(0); } 
          50% { transform: translateY(-10px); } 
        }
        @keyframes slideInLeft { 
          from { opacity: 0; transform: translateX(-50px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes slideInRight { 
          from { opacity: 0; transform: translateX(50px); } 
          to { opacity: 1; transform: translateX(0); } 
        }
        @keyframes borderGlow { 
          0%, 100% { border-color: rgba(97, 218, 251, 0.3); box-shadow: 0 0 20px rgba(97, 218, 251, 0.2); } 
          50% { border-color: rgba(97, 218, 251, 0.8); box-shadow: 0 0 40px rgba(97, 218, 251, 0.5); } 
        }
        
        .glass { 
          background: linear-gradient(135deg, rgba(15, 15, 35, 0.85), rgba(30, 15, 45, 0.7)); 
          backdrop-filter: blur(25px) saturate(180%); 
          border: 2px solid rgba(97, 218, 251, 0.2); 
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(97, 218, 251, 0.1); 
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cert-card {
          background: linear-gradient(145deg, rgba(10, 10, 25, 0.95), rgba(20, 10, 35, 0.85));
          backdrop-filter: blur(30px);
          border: 2px solid rgba(97, 218, 251, 0.2);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .cert-card:hover {
          transform: translateY(-8px);
          border-color: var(--category-color);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 80px var(--category-glow);
        }

        .cert-image {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }

        .power-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: rgba(0, 0, 0, 0.5);
          overflow: hidden;
          z-index: 10;
        }

        .power-fill {
          height: 100%;
          background: var(--category-gradient);
          box-shadow: 0 0 20px var(--category-color);
          transition: width 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .mastery-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          border: 3px solid;
          animation: pulse 3s ease-in-out infinite;
        }

        .tech-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: rgba(0, 0, 0, 0.6);
          border: 1.5px solid rgba(97, 218, 251, 0.3);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #61DAFB;
          font-family: 'JetBrains Mono';
        }

        .tech-icon {
          width: 18px;
          height: 18px;
        }
      `}</style>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #05050F 0%, #0A0A1A 50%, #0F0A1F 100%)', 
        color: '#fff', 
        position: 'relative', 
        fontFamily: 'Inter, sans-serif' 
      }}>
        <ParticleBackground />

        <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '3px', 
          background: 'linear-gradient(90deg, #61DAFB, #FFD700, #FF6B35, #00D4FF, #61DAFB)', 
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s linear infinite',
          zIndex: 1000,
          boxShadow: '0 0 20px rgba(97, 218, 251, 0.6)'
        }} />

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '1600px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
          
          {/* Hero Section */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)', animation: 'fadeUp 1s ease' }}>
            
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.8rem', 
              padding: '0.7rem 2rem', 
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 107, 53, 0.15))',
              border: '2px solid rgba(255, 215, 0, 0.5)', 
              borderRadius: '999px', 
              marginBottom: '2rem', 
              fontFamily: 'Orbitron', 
              fontSize: 'clamp(0.8rem, 1.8vw, 1rem)', 
              color: '#FFD700', 
              animation: 'borderGlow 3s infinite',
              boxShadow: '0 0 40px rgba(255, 215, 0, 0.3)'
            }}>
              <Crown size={22} style={{ animation: 'glow 2s infinite' }} />
              <span style={{ fontWeight: 700, letterSpacing: '3px' }}>PROFESSIONAL CREDENTIALS</span>
              <Crown size={22} style={{ animation: 'glow 2s infinite' }} />
            </div>

            <h1 style={{ 
              fontSize: 'clamp(3rem, 12vw, 7rem)', 
              fontWeight: 900, 
              letterSpacing: 'clamp(5px, 2vw, 15px)', 
              fontFamily: 'Orbitron', 
              lineHeight: 1.1, 
              textTransform: 'uppercase', 
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #61DAFB 0%, #FFD700 50%, #FF6B35 100%)',
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'shimmer 4s ease infinite',
              filter: 'drop-shadow(0 0 30px rgba(97, 218, 251, 0.5))'
            }}>
              TECH EXCELLENCE
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
              lineHeight: 1.8,
              color: 'rgba(255, 255, 255, 0.85)',
              maxWidth: '900px',
              margin: '0 auto 2rem',
              fontWeight: 400,
              fontFamily: 'Rajdhani'
            }}>
              Industry-recognized certifications across cutting-edge technologies. 
              Validated expertise through rigorous training and real-world application.
            </p>

            {/* Stats Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: 'clamp(1rem, 2vw, 2rem)', 
              maxWidth: '1200px', 
              margin: '0 auto' 
            }}>
              {[
                { label: 'Master Level', value: stats.masterCerts, icon: Crown, color: '#FFD700' },
                { label: 'Total Skills', value: stats.totalCerts, icon: Target, color: '#61DAFB' },
                { label: 'Avg Power', value: stats.avgPower, icon: Zap, color: '#FF6B35' },
                { label: 'Categories', value: stats.categories, icon: Layers, color: '#00D4FF' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="glass"
                  style={{ 
                    padding: 'clamp(1.5rem, 3vw, 2rem)', 
                    borderRadius: '18px', 
                    textAlign: 'center', 
                    animation: `scaleIn 0.6s ease ${i * 0.15}s both, float 6s ease-in-out ${i * 0.5}s infinite`
                  }}
                >
                  <div style={{ 
                    width: 'clamp(60px, 10vw, 80px)', 
                    height: 'clamp(60px, 10vw, 80px)', 
                    margin: '0 auto 1rem', 
                    borderRadius: '50%', 
                    background: `linear-gradient(135deg, ${stat.color}, ${stat.color}60)`,
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    boxShadow: `0 0 40px ${stat.color}70`
                  }}>
                    <stat.icon size={Math.min(40, window.innerWidth * 0.06)} style={{ color: '#000' }} />
                  </div>
                  
                  <div style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', 
                    fontWeight: 900, 
                    color: stat.color, 
                    marginBottom: '0.5rem', 
                    fontFamily: 'Orbitron',
                    textShadow: `0 0 20px ${stat.color}80`
                  }}>
                    {stat.value}
                  </div>
                  
                  <div style={{ 
                    fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', 
                    color: stat.color, 
                    fontWeight: 700, 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.5px',
                    fontFamily: 'Rajdhani'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div className="glass" style={{ padding: '0.5rem', borderRadius: '16px', animation: 'slideInLeft 0.8s ease' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={20} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#61DAFB' }} />
                  <input 
                    type="text" 
                    placeholder="Search certifications..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    style={{ 
                      width: '100%', 
                      background: 'rgba(0, 0, 0, 0.5)', 
                      border: '2px solid rgba(97, 218, 251, 0.3)', 
                      borderRadius: '12px', 
                      padding: '1.2rem 1.5rem 1.2rem 3.5rem', 
                      fontSize: '1.05rem', 
                      outline: 'none', 
                      color: '#fff', 
                      fontFamily: 'Rajdhani',
                      fontWeight: 500
                    }} 
                  />
                </div>
              </div>

              <div className="glass" style={{ padding: '0.5rem', borderRadius: '16px', animation: 'slideInRight 0.8s ease' }}>
                <div style={{ position: 'relative' }}>
                  <SortDesc size={20} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#61DAFB' }} />
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)} 
                    style={{ 
                      width: '100%', 
                      background: 'rgba(0, 0, 0, 0.5)', 
                      border: '2px solid rgba(97, 218, 251, 0.3)', 
                      borderRadius: '12px', 
                      padding: '1.2rem 1.5rem 1.2rem 3.5rem', 
                      fontSize: '1.05rem', 
                      outline: 'none', 
                      color: '#fff', 
                      cursor: 'pointer', 
                      fontFamily: 'Rajdhani', 
                      fontWeight: 600
                    }}
                  >
                    <option value="power">⚡ Power Score</option>
                    <option value="year">📅 Year</option>
                    <option value="name">🔤 Name</option>
                  </select>
                </div>
              </div>

              {/* View Mode Selector */}
              <div className="glass" style={{ padding: '0.5rem', borderRadius: '16px', animation: 'fadeUp 0.8s ease 0.2s both' }}>
                <div style={{ display: 'flex', gap: '0.5rem', height: '100%' }}>
                  {[
                    { mode: 'grid', icon: LayoutGrid, label: 'Grid' },
                    { mode: 'list', icon: List, label: 'List' },
                    { mode: 'compact', icon: Grid3x3, label: 'Compact' },
                    { mode: 'masonry', icon: Box, label: 'Masonry' }
                  ].map(({ mode, icon: Icon, label }) => (
                    <button
                      key={mode}
                      onClick={() => setViewMode(mode)}
                      title={label}
                      style={{
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '0.8rem',
                        background: viewMode === mode ? 'linear-gradient(135deg, #61DAFB, #21A1F1)' : 'rgba(0, 0, 0, 0.3)',
                        border: viewMode === mode ? '2px solid #61DAFB' : '2px solid rgba(97, 218, 251, 0.2)',
                        borderRadius: '10px',
                        color: viewMode === mode ? '#000' : '#61DAFB',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontFamily: 'Orbitron',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        boxShadow: viewMode === mode ? '0 0 20px rgba(97, 218, 251, 0.4)' : 'none'
                      }}
                    >
                      <Icon size={18} />
                      <span style={{ display: window.innerWidth > 1200 ? 'inline' : 'none' }}>{label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Filters */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['All', ...Object.keys(categoryConfig)].map((cat, idx) => {
                const config = categoryConfig[cat];
                const Icon = config?.icon || Award;
                const isActive = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    style={{
                      padding: '1rem 2rem',
                      borderRadius: '14px',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.7rem',
                      transition: 'all 0.3s ease',
                      border: isActive ? `3px solid ${config?.color || '#61DAFB'}` : '3px solid rgba(97, 218, 251, 0.1)',
                      background: isActive 
                        ? `linear-gradient(135deg, ${config?.color || '#61DAFB'}30, ${config?.color || '#61DAFB'}10)` 
                        : 'rgba(0, 0, 0, 0.4)',
                      color: isActive ? config?.color || '#61DAFB' : '#fff',
                      boxShadow: isActive 
                        ? `0 0 40px ${config?.color || '#61DAFB'}50` 
                        : 'none',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      cursor: 'pointer',
                      backdropFilter: 'blur(20px)',
                      fontFamily: 'Orbitron',
                      animation: `fadeUp 0.6s ease ${idx * 0.1}s both`
                    }}
                  >
                    {cat !== 'All' && <Icon size={20} />}
                    <span>{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Certifications Display - Dynamic Based on View Mode */}
          {viewMode === 'grid' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2.5rem' }}>
              {filteredCerts.map((cert, idx) => {
                const config = categoryConfig[cert.category];
                const mastery = masteryColors[cert.masteryLevel];
                const MasteryIcon = mastery.icon;
                
                return (
                  <div 
                    key={idx} 
                    className="cert-card"
                    style={{ 
                      '--category-color': config.color,
                      '--category-gradient': config.gradient,
                      '--category-glow': config.bgGlow,
                      animation: `fadeUp 0.8s ease ${Math.min(idx * 0.05, 1)}s both`,
                      cursor: 'pointer'
                    }} 
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <div className="power-bar">
                      <div className="power-fill" style={{ width: `${cert.power}%` }} />
                    </div>

                    <div 
                      className="mastery-badge" 
                      style={{
                        background: `linear-gradient(135deg, ${mastery.color}, ${mastery.color}80)`,
                        borderColor: mastery.color,
                        boxShadow: `0 0 30px ${mastery.glow}`
                      }}
                    >
                      <MasteryIcon size={26} style={{ color: '#000' }} />
                    </div>

                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="cert-image"
                    />

                    <div style={{ padding: '2rem' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.2rem',
                        background: `${config.color}20`,
                        border: `2px solid ${config.color}`,
                        borderRadius: '999px',
                        marginBottom: '1.2rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: config.color,
                        fontFamily: 'Orbitron'
                      }}>
                        <config.icon size={16} />
                        {cert.category}
                      </div>

                      <h3 style={{ 
                        fontSize: '1.6rem', 
                        fontWeight: 800, 
                        color: '#fff', 
                        marginBottom: '0.8rem', 
                        fontFamily: 'Orbitron'
                      }}>
                        {cert.title}
                      </h3>

                      <p style={{ 
                        fontSize: '0.95rem', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        lineHeight: 1.6,
                        marginBottom: '1.5rem',
                        fontFamily: 'Rajdhani'
                      }}>
                        {cert.desc}
                      </p>

                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.6rem',
                        marginBottom: '1.5rem'
                      }}>
                        {cert.skills.map((skill, i) => {
                          const iconUrl = techIcons[skill] || techIcons[Object.keys(techIcons).find(key => skill.toLowerCase().includes(key.toLowerCase()))];
                          return (
                            <div key={i} className="tech-badge">
                              {iconUrl && <img src={iconUrl} alt={skill} className="tech-icon" />}
                              {skill}
                            </div>
                          );
                        })}
                      </div>

                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1rem',
                        padding: '1.2rem',
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '12px',
                        border: '1px solid rgba(97, 218, 251, 0.1)',
                        marginBottom: '1.5rem'
                      }}>
                        <div style={{ textAlign: 'center' }}>
                          <Zap size={20} style={{ color: '#FFD700', marginBottom: '0.3rem' }} />
                          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FFD700', fontFamily: 'Orbitron' }}>{cert.power}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Rajdhani' }}>Power</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Calendar size={20} style={{ color: config.color, marginBottom: '0.3rem' }} />
                          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: config.color, fontFamily: 'Orbitron' }}>{cert.year}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Rajdhani' }}>Year</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                          <Target size={20} style={{ color: mastery.color, marginBottom: '0.3rem' }} />
                          <div style={{ fontSize: '0.95rem', fontWeight: 900, color: mastery.color, fontFamily: 'Orbitron' }}>{cert.masteryLevel}</div>
                          <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Rajdhani' }}>Level</div>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem',
                        background: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '10px',
                        marginBottom: '1.2rem'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.9rem',
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontFamily: 'Rajdhani',
                          fontWeight: 600
                        }}>
                          <Award size={16} style={{ color: config.color }} />
                          {cert.issuer}
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: 'rgba(255, 255, 255, 0.5)',
                          fontFamily: 'Rajdhani'
                        }}>
                          {cert.duration}
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        padding: '1.1rem 2rem',
                        background: config.gradient,
                        borderRadius: '12px',
                        border: `2px solid ${config.color}`,
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1rem',
                        fontFamily: 'Orbitron',
                        boxShadow: `0 0 30px ${config.color}50`,
                        transition: 'all 0.3s ease'
                      }}>
                        <ExternalLink size={18} />
                        <span>VIEW CREDENTIAL</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filteredCerts.map((cert, idx) => {
                const config = categoryConfig[cert.category];
                const mastery = masteryColors[cert.masteryLevel];
                const MasteryIcon = mastery.icon;
                
                return (
                  <div 
                    key={idx}
                    className="cert-card"
                    style={{
                      '--category-color': config.color,
                      '--category-gradient': config.gradient,
                      '--category-glow': config.bgGlow,
                      animation: `fadeUp 0.6s ease ${Math.min(idx * 0.03, 0.5)}s both`,
                      cursor: 'pointer',
                      display: 'grid',
                      gridTemplateColumns: '300px 1fr',
                      gap: '2rem',
                      alignItems: 'center'
                    }}
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <div className="power-bar">
                      <div className="power-fill" style={{ width: `${cert.power}%` }} />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: '220px',
                          objectFit: 'cover',
                          borderRadius: '12px 0 0 12px'
                        }}
                      />
                      <div 
                        className="mastery-badge" 
                        style={{
                          background: `linear-gradient(135deg, ${mastery.color}, ${mastery.color}80)`,
                          borderColor: mastery.color,
                          boxShadow: `0 0 30px ${mastery.glow}`,
                          top: '12px',
                          right: '12px'
                        }}
                      >
                        <MasteryIcon size={24} style={{ color: '#000' }} />
                      </div>
                    </div>

                    <div style={{ padding: '2rem 2rem 2rem 0' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div>
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 1rem',
                            background: `${config.color}20`,
                            border: `2px solid ${config.color}`,
                            borderRadius: '999px',
                            marginBottom: '0.8rem',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: config.color,
                            fontFamily: 'Orbitron'
                          }}>
                            <config.icon size={14} />
                            {cert.category}
                          </div>
                          
                          <h3 style={{ 
                            fontSize: '1.8rem', 
                            fontWeight: 800, 
                            color: '#fff', 
                            marginBottom: '0.5rem', 
                            fontFamily: 'Orbitron'
                          }}>
                            {cert.title}
                          </h3>
                        </div>

                        <div style={{ 
                          fontSize: '2rem', 
                          fontWeight: 900, 
                          color: '#FFD700', 
                          fontFamily: 'Orbitron',
                          textAlign: 'right'
                        }}>
                          {cert.power}
                          <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'Rajdhani' }}>POWER</div>
                        </div>
                      </div>

                      <p style={{ 
                        fontSize: '1rem', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        lineHeight: 1.6,
                        marginBottom: '1.2rem',
                        fontFamily: 'Rajdhani'
                      }}>
                        {cert.desc}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                        {cert.skills.map((skill, i) => {
                          const iconUrl = techIcons[skill] || techIcons[Object.keys(techIcons).find(key => skill.toLowerCase().includes(key.toLowerCase()))];
                          return (
                            <div key={i} className="tech-badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                              {iconUrl && <img src={iconUrl} alt={skill} className="tech-icon" style={{ width: '14px', height: '14px' }} />}
                              {skill}
                            </div>
                          );
                        })}
                      </div>

                      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Award size={16} style={{ color: config.color }} />
                          <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
                            {cert.issuer}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Calendar size={16} style={{ color: config.color }} />
                          <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
                            {cert.year}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Target size={16} style={{ color: mastery.color }} />
                          <span style={{ fontSize: '0.9rem', color: mastery.color, fontFamily: 'Orbitron', fontWeight: 700 }}>
                            {cert.masteryLevel}
                          </span>
                        </div>
                        <div style={{
                          marginLeft: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.7rem 1.5rem',
                          background: config.gradient,
                          borderRadius: '10px',
                          border: `2px solid ${config.color}`,
                          color: '#000',
                          fontWeight: 700,
                          fontSize: '0.9rem',
                          fontFamily: 'Orbitron'
                        }}>
                          <ExternalLink size={16} />
                          <span>VIEW</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Compact View */}
          {viewMode === 'compact' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {filteredCerts.map((cert, idx) => {
                const config = categoryConfig[cert.category];
                const mastery = masteryColors[cert.masteryLevel];
                const MasteryIcon = mastery.icon;
                
                return (
                  <div 
                    key={idx}
                    className="cert-card"
                    style={{
                      '--category-color': config.color,
                      '--category-gradient': config.gradient,
                      '--category-glow': config.bgGlow,
                      animation: `fadeUp 0.6s ease ${Math.min(idx * 0.03, 0.8)}s both`,
                      cursor: 'pointer'
                    }}
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <div className="power-bar">
                      <div className="power-fill" style={{ width: `${cert.power}%` }} />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover'
                        }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${mastery.color}, ${mastery.color}80)`,
                          border: `2px solid ${mastery.color}`,
                          boxShadow: `0 0 20px ${mastery.glow}`
                        }}
                      >
                        <MasteryIcon size={20} style={{ color: '#000' }} />
                      </div>
                    </div>

                    <div style={{ padding: '1.5rem' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.3rem 0.8rem',
                        background: `${config.color}20`,
                        border: `1.5px solid ${config.color}`,
                        borderRadius: '999px',
                        marginBottom: '0.8rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: config.color,
                        fontFamily: 'Orbitron'
                      }}>
                        <config.icon size={12} />
                        {cert.category}
                      </div>

                      <h3 style={{ 
                        fontSize: '1.1rem', 
                        fontWeight: 800, 
                        color: '#fff', 
                        marginBottom: '0.5rem', 
                        fontFamily: 'Orbitron',
                        lineHeight: 1.3
                      }}>
                        {cert.title}
                      </h3>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Zap size={14} style={{ color: '#FFD700' }} />
                          <span style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFD700', fontFamily: 'Orbitron' }}>{cert.power}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Calendar size={14} style={{ color: config.color }} />
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: config.color, fontFamily: 'Orbitron' }}>{cert.year}</span>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                        {cert.skills.slice(0, 3).map((skill, i) => {
                          const iconUrl = techIcons[skill] || techIcons[Object.keys(techIcons).find(key => skill.toLowerCase().includes(key.toLowerCase()))];
                          return (
                            <div key={i} className="tech-badge" style={{ fontSize: '0.65rem', padding: '3px 8px' }}>
                              {iconUrl && <img src={iconUrl} alt={skill} className="tech-icon" style={{ width: '12px', height: '12px' }} />}
                              {skill}
                            </div>
                          );
                        })}
                        {cert.skills.length > 3 && (
                          <div className="tech-badge" style={{ fontSize: '0.65rem', padding: '3px 8px' }}>
                            +{cert.skills.length - 3}
                          </div>
                        )}
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.4rem',
                        padding: '0.8rem',
                        background: config.gradient,
                        borderRadius: '8px',
                        border: `2px solid ${config.color}`,
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        fontFamily: 'Orbitron'
                      }}>
                        <ExternalLink size={14} />
                        <span>VIEW</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Masonry View */}
          {viewMode === 'masonry' && (
            <div style={{ 
              columnCount: window.innerWidth > 1400 ? 4 : window.innerWidth > 1000 ? 3 : window.innerWidth > 600 ? 2 : 1,
              columnGap: '2rem'
            }}>
              {filteredCerts.map((cert, idx) => {
                const config = categoryConfig[cert.category];
                const mastery = masteryColors[cert.masteryLevel];
                const MasteryIcon = mastery.icon;
                
                return (
                  <div 
                    key={idx}
                    className="cert-card"
                    style={{
                      '--category-color': config.color,
                      '--category-gradient': config.gradient,
                      '--category-glow': config.bgGlow,
                      animation: `fadeUp 0.6s ease ${Math.min(idx * 0.03, 0.8)}s both`,
                      cursor: 'pointer',
                      breakInside: 'avoid',
                      marginBottom: '2rem',
                      display: 'inline-block',
                      width: '100%'
                    }}
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <div className="power-bar">
                      <div className="power-fill" style={{ width: `${cert.power}%` }} />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        style={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          maxHeight: '200px'
                        }}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: `linear-gradient(135deg, ${mastery.color}, ${mastery.color}80)`,
                          border: `2px solid ${mastery.color}`,
                          boxShadow: `0 0 25px ${mastery.glow}`
                        }}
                      >
                        <MasteryIcon size={22} style={{ color: '#000' }} />
                      </div>
                    </div>

                    <div style={{ padding: '1.5rem' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.4rem 1rem',
                        background: `${config.color}20`,
                        border: `2px solid ${config.color}`,
                        borderRadius: '999px',
                        marginBottom: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: config.color,
                        fontFamily: 'Orbitron'
                      }}>
                        <config.icon size={14} />
                        {cert.category}
                      </div>

                      <h3 style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: 800, 
                        color: '#fff', 
                        marginBottom: '0.8rem', 
                        fontFamily: 'Orbitron',
                        lineHeight: 1.3
                      }}>
                        {cert.title}
                      </h3>

                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        lineHeight: 1.5,
                        marginBottom: '1rem',
                        fontFamily: 'Rajdhani'
                      }}>
                        {cert.desc.length > 150 ? cert.desc.substring(0, 150) + '...' : cert.desc}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
                        {cert.skills.map((skill, i) => {
                          const iconUrl = techIcons[skill] || techIcons[Object.keys(techIcons).find(key => skill.toLowerCase().includes(key.toLowerCase()))];
                          return (
                            <div key={i} className="tech-badge" style={{ fontSize: '0.7rem', padding: '4px 10px' }}>
                              {iconUrl && <img src={iconUrl} alt={skill} className="tech-icon" style={{ width: '14px', height: '14px' }} />}
                              {skill}
                            </div>
                          );
                        })}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', marginBottom: '1rem' }}>
                        <div style={{ textAlign: 'center', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
                          <Zap size={16} style={{ color: '#FFD700', marginBottom: '0.2rem' }} />
                          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FFD700', fontFamily: 'Orbitron' }}>{cert.power}</div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
                          <Calendar size={16} style={{ color: config.color, marginBottom: '0.2rem' }} />
                          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: config.color, fontFamily: 'Orbitron' }}>{cert.year}</div>
                        </div>
                        <div style={{ textAlign: 'center', padding: '0.8rem', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '8px' }}>
                          <Target size={16} style={{ color: mastery.color, marginBottom: '0.2rem' }} />
                          <div style={{ fontSize: '0.75rem', fontWeight: 900, color: mastery.color, fontFamily: 'Orbitron' }}>{cert.level}</div>
                        </div>
                      </div>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        padding: '1rem',
                        background: config.gradient,
                        borderRadius: '10px',
                        border: `2px solid ${config.color}`,
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        fontFamily: 'Orbitron'
                      }}>
                        <ExternalLink size={16} />
                        <span>VIEW CREDENTIAL</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* No Results */}
          {filteredCerts.length === 0 && (
            <div className="glass" style={{ 
              textAlign: 'center', 
              padding: '5rem 2rem', 
              borderRadius: '24px', 
              marginTop: '3rem',
              animation: 'scaleIn 0.5s ease' 
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🔍</div>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: 800, 
                color: '#61DAFB', 
                marginBottom: '1rem',
                fontFamily: 'Orbitron' 
              }}>
                No Certifications Found
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                color: 'rgba(255, 255, 255, 0.6)',
                fontFamily: 'Rajdhani' 
              }}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Footer */}
          <div style={{ 
            marginTop: '5rem', 
            padding: '3rem', 
            textAlign: 'center', 
            background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.05), rgba(255, 215, 0, 0.05))', 
            borderRadius: '24px',
            border: '1px solid rgba(97, 218, 251, 0.2)'
          }}>
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              color: '#61DAFB', 
              marginBottom: '1rem',
              fontFamily: 'Orbitron' 
            }}>
              🚀 Industry-Ready Professional
            </div>
            <div style={{ 
              fontSize: '1.1rem', 
              color: 'rgba(255, 255, 255, 0.7)',
              fontFamily: 'Rajdhani' 
            }}>
              Validated expertise across multiple high-demand technology domains
            </div>
          </div>
        </div>
      </div>
    </>
  );
}