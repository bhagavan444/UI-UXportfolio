import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import {
  ExternalLink, Github, ArrowRight, Sparkles, TrendingUp, 
  Zap, Server, Code2, Target, AlertCircle
} from 'lucide-react';

// All projects data
const allProjects = [
  {
    id: 1,
    title: "ATS Resume Builder",
    tagline: "AI-powered resume optimization platform",
    subtitle: "Solving the 75% rejection rate problem",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: "https://resumebuilder-demo.vercel.app",
    year: "2024",
    duration: "3 months",
    color: "#2563eb",
    featured: true,
    
    insight: "Discovered that 75% of qualified candidates never reach human recruiters due to ATS filters optimized for keywords over competence.",
    
    problem: "Qualified candidates face 75% rejection rates from ATS filters before human review, losing opportunities due to formatting and keyword mismatches rather than qualifications.",
    
    solution: "Built an intelligent resume builder that analyzes job descriptions, suggests ATS-compatible formatting, and optimizes keyword placement while maintaining readability.",
    
    impact: [
      { label: "Interview Rate", value: 2, suffix: "×" },
      { label: "ATS Score", value: 90, suffix: "%+" },
      { label: "Active Users", value: 3000, suffix: "+" }
    ],
    
    architecture: [
      { label: "Frontend", value: "React + Context API for state management" },
      { label: "Backend", value: "Express.js REST API with JWT authentication" },
      { label: "AI Engine", value: "OpenAI GPT-3.5 with custom keyword extraction" },
      { label: "Database", value: "MongoDB for user profiles and resume templates" },
      { label: "Infrastructure", value: "Vercel + Railway with CDN for static assets" }
    ],
    
    techStack: {
      "Frontend": ["React", "Context API", "PDF.js"],
      "Backend": ["Node.js", "Express", "JWT"],
      "Database": ["MongoDB", "Redis"],
      "AI/ML": ["OpenAI API", "GPT-3.5"],
      "DevOps": ["Vercel", "Railway", "GitHub Actions"]
    },
    
    challenges: [
      {
        title: "Real-time AI Analysis",
        description: "Implemented streaming responses and optimistic UI updates to keep latency under 500ms",
        solution: "Client-side caching + debounced API calls reduced server load by 60%"
      },
      {
        title: "PDF Generation at Scale",
        description: "Server-side PDF generation was bottleneck at 2000+ concurrent users",
        solution: "Shifted to client-side generation using pdf-lib, eliminated server costs"
      }
    ],
    
    results: [
      "Doubled interview callback rates for 85% of active users",
      "Maintained 90%+ ATS compatibility across Fortune 500 companies",
      "Reduced resume creation time from 4 hours to 18 minutes",
      "3,000+ resumes generated with 85% weekly retention"
    ],
    
    learned: "User research revealed candidates cared more about confidence than perfection. Shipped 'Good Enough' ATS scores vs 'Perfect' scores 3 weeks earlier.",
    
    screenshot: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1600&auto=format&fit=crop"
  },
  
  {
    id: 2,
    title: "AI Chat Workspace",
    tagline: "Multi-modal AI assistant for research",
    subtitle: "End the tab-switching nightmare",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://ai-workspace-demo.vercel.app",
    year: "2024",
    duration: "4 months",
    color: "#7c3aed",
    featured: true,
    
    insight: "Professionals waste 40% of their AI interaction time switching between ChatGPT, Claude, and Midjourney, losing context each time.",
    
    problem: "Professionals juggle multiple AI tools across different tabs, losing context and wasting time on tool switching and re-authentication.",
    
    solution: "Unified workspace supporting text, images, PDFs, and code generation with persistent conversation history and cross-modal context retention.",
    
    impact: [
      { label: "Response Time", value: 500, suffix: "ms" },
      { label: "Context Retention", value: 96, suffix: "%" },
      { label: "Efficiency Gain", value: 3, suffix: "×" }
    ],
    
    architecture: [
      { label: "Frontend", value: "React + TypeScript with custom hooks for API orchestration" },
      { label: "Backend", value: "Vercel Edge Functions for serverless API routing" },
      { label: "Real-time", value: "Server-Sent Events for streaming responses" },
      { label: "Database", value: "Supabase for conversation history and user preferences" },
      { label: "Infrastructure", value: "Edge caching + WebSocket for live updates" }
    ],
    
    techStack: {
      "Frontend": ["React", "TypeScript", "Tailwind CSS"],
      "Backend": ["Vercel Edge", "Serverless Functions"],
      "Database": ["Supabase", "PostgreSQL"],
      "AI/ML": ["OpenAI API", "Anthropic Claude", "Replicate"],
      "DevOps": ["Vercel", "GitHub Actions", "Docker"]
    },
    
    challenges: [
      {
        title: "Streaming Large Responses",
        description: "Handling 10,000+ token responses without UI blocking",
        solution: "Implemented chunked Server-Sent Events with React Suspense boundaries"
      },
      {
        title: "Context Window Management",
        description: "Conversations exceeding 32K tokens crashed the app",
        solution: "Built smart summarization that compresses old context while preserving key entities"
      }
    ],
    
    results: [
      "40% faster workflow completion vs tab-switching approach",
      "96% context retention across text, image, and code modalities",
      "Sub-500ms response latency maintained under peak load",
      "Progressive Web App supporting offline conversation history"
    ],
    
    learned: "Users didn't want 'more features'—they wanted fewer clicks. Removed 12 planned features to focus on conversation speed.",
    
    screenshot: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop"
  },
  
  {
    id: 3,
    title: "Career AI Recommender",
    tagline: "ML-powered career guidance system",
    github: "https://github.com/bhagavan444/Career-Path-Recommendation",
    live: "https://career-ai-demo.vercel.app",
    color: "#10b981",
    featured: false,
    screenshot: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    impact: [
      { label: "Accuracy", value: 92, suffix: "%" },
      { label: "Career Paths", value: 50, suffix: "+" },
      { label: "Response Time", value: 200, suffix: "ms" }
    ],
    tech: ["Python", "Scikit-learn", "React", "PostgreSQL", "Flask"]
  },
  {
    id: 4,
    title: "Fake News Detector",
    tagline: "NLP system for misinformation detection",
    github: "https://github.com/bhagavan444/News-detector",
    live: "https://news-detector-demo.vercel.app",
    color: "#ef4444",
    featured: false,
    screenshot: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop",
    impact: [
      { label: "Accuracy", value: 95, suffix: "%" },
      { label: "Speed", value: 95, suffix: "ms" },
      { label: "False Positive", value: 3.2, suffix: "%" }
    ],
    tech: ["Python", "TensorFlow", "LSTM", "FastAPI", "Docker"]
  },
  {
    id: 5,
    title: "Heart Disease Predictor",
    tagline: "Clinical ML model for risk assessment",
    github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
    live: "https://heart-predictor-demo.vercel.app",
    color: "#f59e0b",
    featured: false,
    screenshot: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    impact: [
      { label: "Accuracy", value: 87, suffix: "%" },
      { label: "Predictions", value: 1200, suffix: "+" },
      { label: "Precision", value: 85, suffix: "%" }
    ],
    tech: ["Python", "Scikit-learn", "Flask", "Bootstrap", "SQLite"]
  }
];

// Magnetic Button Component
const MagneticButton = ({ children, href, external = false, className = "", style = {} }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouse = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };
  
  const reset = () => setPosition({ x: 0, y: 0 });
  
  const buttonContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
  
  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} style={{ textDecoration: 'none' }}>
        {buttonContent}
      </a>
    );
  }
  
  return buttonContent;
};

// Animated Counter
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value);
          if (start === end) return;
          
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

// Flagship Project Component
const FlagshipProject = ({ project, index }) => {
  const [activeTab, setActiveTab] = useState('architecture');
  const isEven = index % 2 === 0;
  
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flagship-section"
    >
      {/* Background Elements */}
      <div className="bg-glow" style={{ 
        background: `radial-gradient(circle at ${isEven ? '20%' : '80%'} 50%, ${project.color}15 0%, transparent 50%)` 
      }} />
      <div className="bg-watermark" style={{ left: isEven ? '5%' : 'auto', right: isEven ? 'auto' : '5%' }}>
        {project.title.split(' ')[0]}
      </div>
      
      <div className="flagship-container">
        <div className={`flagship-grid ${isEven ? '' : 'reverse'}`}>
          {/* Image Side */}
          <motion.div 
            className="flagship-image-wrapper"
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="precision-badge">
              <Sparkles size={14} />
              <span>Built With Precision</span>
            </div>
            
            <motion.div
              className="flagship-image-container"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="image-glow" style={{ background: `${project.color}40` }} />
              <img src={project.screenshot} alt={project.title} className="flagship-image" />
            </motion.div>
            
            <div className="image-meta">
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.duration}</span>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <div className="flagship-content">
            {/* Hero */}
            <div className="project-hero">
              <motion.h2 
                className="project-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {project.title}
                <div className="title-underline" style={{ background: project.color }} />
              </motion.h2>
              
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-tagline">{project.tagline}</p>
            </div>
            
            {/* Impact Metrics */}
            <motion.div 
              className="impact-showcase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {project.impact.map((metric, idx) => (
                <div key={idx} className="impact-metric">
                  <div className="metric-value" style={{ color: project.color }}>
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* CTAs */}
            <div className="cta-row">
              <MagneticButton href={project.live} external className="btn-primary" style={{ background: project.color }}>
                <ExternalLink size={18} />
                <span>View Live Demo</span>
                <ArrowRight size={18} />
              </MagneticButton>
              
              <MagneticButton href={project.github} external className="btn-secondary">
                <Github size={18} />
                <span>Source Code</span>
              </MagneticButton>
            </div>
            
            {/* Insight */}
            <motion.div 
              className="insight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="insight-icon">
                <Zap size={20} style={{ color: project.color }} />
              </div>
              <div>
                <div className="insight-label">Key Insight</div>
                <div className="insight-text">{project.insight}</div>
              </div>
            </motion.div>
            
            {/* Problem & Solution */}
            <div className="ps-grid">
              <motion.div 
                className="ps-card problem"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="ps-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="ps-label">Problem</div>
                <div className="ps-text">{project.problem}</div>
              </motion.div>
              
              <motion.div 
                className="ps-card solution"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="ps-icon">
                  <Target size={18} />
                </div>
                <div className="ps-label">Solution</div>
                <div className="ps-text">{project.solution}</div>
              </motion.div>
            </div>
            
            {/* Tab System */}
            <div className="tab-system">
              <div className="tab-nav">
                {['architecture', 'tech', 'challenges', 'results'].map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === 'architecture' && <Server size={16} />}
                    {tab === 'tech' && <Code2 size={16} />}
                    {tab === 'challenges' && <TrendingUp size={16} />}
                    {tab === 'results' && <Zap size={16} />}
                    <span>{tab.charAt(0).toUpperCase() + tab.slice(1)}</span>
                  </button>
                ))}
                <motion.div 
                  className="tab-indicator"
                  layoutId={`indicator-${project.id}`}
                  style={{ background: project.color }}
                />
              </div>
              
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="tab-content"
              >
                {activeTab === 'architecture' && (
                  <div className="arch-grid">
                    {project.architecture.map((section, idx) => (
                      <motion.div
                        key={idx}
                        className="arch-item"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="arch-label">{section.label}</div>
                        <div className="arch-value">{section.value}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'tech' && (
                  <div className="tech-categories">
                    {Object.entries(project.techStack).map(([category, techs], idx) => (
                      <motion.div
                        key={category}
                        className="tech-category"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="tech-category-label">{category}</div>
                        <div className="tech-items">
                          {techs.map((tech, techIdx) => (
                            <div key={techIdx} className="tech-item">
                              <div className="tech-dot" style={{ background: project.color }} />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'challenges' && (
                  <div className="challenges-grid">
                    {project.challenges.map((challenge, idx) => (
                      <motion.div
                        key={idx}
                        className="challenge-card"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="challenge-title">{challenge.title}</div>
                        <div className="challenge-desc">{challenge.description}</div>
                        <div className="challenge-solution">
                          <div className="solution-label" style={{ color: project.color }}>Solution</div>
                          <div className="solution-text">{challenge.solution}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'results' && (
                  <div className="results-grid">
                    {project.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="result-item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="result-check" style={{ background: `${project.color}20`, color: project.color }}>
                          <Zap size={16} />
                        </div>
                        <span>{result}</span>
                      </motion.div>
                    ))}
                    
                    <div className="learned-card" style={{ borderColor: `${project.color}30` }}>
                      <div className="learned-label">Lesson Learned</div>
                      <div className="learned-text">{project.learned}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Compact Project Card
const CompactProject = ({ project }) => {
  return (
    <motion.div
      className="compact-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)" }}
      transition={{ duration: 0.4 }}
    >
      {/* Project Image */}
      <motion.div 
        className="compact-image-wrapper"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="compact-image-overlay" style={{ background: `linear-gradient(135deg, ${project.color}20 0%, transparent 100%)` }} />
        <img 
          src={project.screenshot} 
          alt={project.title} 
          className="compact-image"
        />
        <div className="compact-color-badge" style={{ background: project.color }} />
      </motion.div>
      
      <div className="compact-content">
        <div className="compact-header">
          <motion.h3 
            className="compact-title"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {project.title}
          </motion.h3>
          <motion.p 
            className="compact-tagline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {project.tagline}
          </motion.p>
        </div>
        
        <motion.div 
          className="compact-metrics"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {project.impact.map((metric, idx) => (
            <motion.div 
              key={idx} 
              className="compact-metric"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
            >
              <div className="compact-metric-value" style={{ color: project.color }}>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="compact-metric-label">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="compact-tech"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {project.tech.map((tech, idx) => (
            <motion.span 
              key={idx} 
              className="compact-tech-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + idx * 0.05 }}
              whileHover={{ scale: 1.1, backgroundColor: '#ffffff', borderColor: project.color }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div 
          className="compact-links"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <MagneticButton href={project.live} external className="compact-link" style={{ borderColor: project.color }}>
            <ExternalLink size={14} />
            <span>Demo</span>
          </MagneticButton>
          <MagneticButton href={project.github} external className="compact-link">
            <Github size={14} />
            <span>Code</span>
          </MagneticButton>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Component
export default function Projects() {
  const featured = allProjects.filter(p => p.featured);
  const supporting = allProjects.filter(p => !p.featured);
  
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #ffffff;
          color: #18181b;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        
        /* Hero Section */
        .hero-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 8rem 3rem 6rem;
          position: relative;
        }
        
        .hero-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          background: #f4f4f5;
          border: 1px solid #e4e4e7;
          border-radius: 100px;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #52525b;
          margin-bottom: 2rem;
        }
        
        .hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 7vw, 5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: #09090b;
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-description {
          font-size: 1.25rem;
          color: #52525b;
          max-width: 700px;
          line-height: 1.7;
        }
        
        .hero-stats {
          display: flex;
          gap: 4rem;
          margin-top: 3rem;
        }
        
        .hero-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #09090b;
        }
        
        .hero-stat-label {
          font-size: 0.875rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* Flagship Section */
        .flagship-section {
          position: relative;
          padding: 6rem 0;
          overflow: hidden;
        }
        
        .flagship-section:not(:last-child) {
          margin-bottom: 6rem;
        }
        
        .bg-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.4;
        }
        
        .bg-watermark {
          position: absolute;
          top: 20%;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15rem;
          font-weight: 900;
          color: rgba(0, 0, 0, 0.02);
          pointer-events: none;
          user-select: none;
          z-index: 0;
          line-height: 1;
        }
        
        .flagship-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
          position: relative;
          z-index: 1;
        }
        
        .flagship-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        
        .flagship-grid.reverse {
          direction: rtl;
        }
        
        .flagship-grid.reverse > * {
          direction: ltr;
        }
        
        @media (max-width: 1024px) {
          .flagship-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          
          .flagship-grid.reverse {
            direction: ltr;
          }
        }
        
        /* Image Side */
        .flagship-image-wrapper {
          position: relative;
        }
        
        .precision-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: #f4f4f5;
          border: 1px solid #e4e4e7;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #18181b;
          margin-bottom: 1.5rem;
        }
        
        .flagship-image-container {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
        }
        
        .image-glow {
          position: absolute;
          inset: -50%;
          opacity: 0.15;
          filter: blur(60px);
          z-index: -1;
        }
        
        .flagship-image {
          width: 100%;
          height: auto;
          display: block;
          border: 1px solid #e4e4e7;
          border-radius: 20px;
        }
        
        .image-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: #71717a;
        }
        
        /* Content Side */
        .flagship-content {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .project-hero {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .project-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #09090b;
          position: relative;
          display: inline-block;
          width: fit-content;
        }
        
        .title-underline {
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          animation: expandLine 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @keyframes expandLine {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .project-subtitle {
          font-size: 1.125rem;
          font-weight: 600;
          color: #3f3f46;
          margin-top: 0.75rem;
        }
        
        .project-tagline {
          font-size: 0.9375rem;
          color: #71717a;
        }
        
        /* Impact Metrics */
        .impact-showcase {
          display: flex;
          gap: 3rem;
          padding: 2rem 0;
          border-top: 1px solid #e4e4e7;
          border-bottom: 1px solid #e4e4e7;
        }
        
        .impact-metric {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .metric-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        
        .metric-label {
          font-size: 0.8125rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* CTAs */
        .cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.875rem 1.75rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .btn-primary {
          background: #2563eb;
          color: #fff;
          border: none;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
        }
        
        .btn-primary:hover {
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          background: #f4f4f5;
          border: 1px solid #e4e4e7;
          color: #18181b;
        }
        
        .btn-secondary:hover {
          background: #e4e4e7;
          border-color: #d4d4d8;
        }
        
        /* Insight Card */
        .insight-card {
          display: flex;
          gap: 1.25rem;
          padding: 1.5rem;
          background: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 14px;
        }
        
        .insight-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          background: #f4f4f5;
          border-radius: 10px;
        }
        
        .insight-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        
        .insight-text {
          font-size: 0.9375rem;
          color: #18181b;
          line-height: 1.6;
        }
        
        /* Problem & Solution */
        .ps-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        
        @media (max-width: 768px) {
          .ps-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .ps-card {
          padding: 1.5rem;
          border-radius: 14px;
          border: 1px solid #e4e4e7;
        }
        
        .ps-card.problem {
          background: #fef2f2;
          border-color: #fecaca;
        }
        
        .ps-card.solution {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }
        
        .ps-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          margin-bottom: 0.875rem;
        }
        
        .ps-card.problem .ps-icon {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
        
        .ps-card.solution .ps-icon {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }
        
        .ps-label {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.625rem;
        }
        
        .ps-card.problem .ps-label {
          color: #ef4444;
        }
        
        .ps-card.solution .ps-label {
          color: #22c55e;
        }
        
        .ps-text {
          font-size: 0.875rem;
          color: #27272a;
          line-height: 1.6;
        }
        
        /* Tab System */
        .tab-system {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .tab-nav {
          display: flex;
          gap: 0.75rem;
          padding: 0.5rem;
          background: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 10px;
          position: relative;
          flex-wrap: wrap;
        }
        
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: transparent;
          border: none;
          border-radius: 7px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #71717a;
          cursor: pointer;
          transition: color 200ms ease;
          position: relative;
          z-index: 2;
        }
        
        .tab-btn:hover {
          color: #52525b;
        }
        
        .tab-btn.active {
          color: #ffffff;
        }
        
        .tab-indicator {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          height: calc(100% - 1rem);
          border-radius: 7px;
          z-index: 1;
        }
        
        .tab-content {
          padding: 1.75rem;
          background: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 14px;
        }
        
        /* Architecture */
        .arch-grid {
          display: grid;
          gap: 1rem;
        }
        
        .arch-item {
          padding: 1.125rem;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 10px;
        }
        
        .arch-label {
          font-size: 0.6875rem;
          font-weight: 600;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        
        .arch-value {
          font-size: 0.875rem;
          color: #18181b;
          line-height: 1.5;
        }
        
        /* Tech Stack */
        .tech-categories {
          display: grid;
          gap: 1.75rem;
        }
        
        .tech-category {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        
        .tech-category-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .tech-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 0.625rem;
        }
        
        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.625rem;
          padding: 0.625rem 0.875rem;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 7px;
          font-size: 0.8125rem;
          color: #18181b;
          transition: all 200ms ease;
        }
        
        .tech-item:hover {
          background: #f4f4f5;
          border-color: #d4d4d8;
        }
        
        .tech-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        /* Challenges */
        .challenges-grid {
          display: grid;
          gap: 1.25rem;
        }
        
        .challenge-card {
          padding: 1.5rem;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 10px;
        }
        
        .challenge-title {
          font-size: 1rem;
          font-weight: 600;
          color: #09090b;
          margin-bottom: 0.625rem;
        }
        
        .challenge-desc {
          font-size: 0.875rem;
          color: #52525b;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .challenge-solution {
          padding: 0.875rem;
          background: #f4f4f5;
          border-radius: 7px;
        }
        
        .solution-label {
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        
        .solution-text {
          font-size: 0.875rem;
          color: #18181b;
          line-height: 1.6;
        }
        
        /* Results */
        .results-grid {
          display: grid;
          gap: 0.875rem;
        }
        
        .result-item {
          display: flex;
          align-items: flex-start;
          gap: 0.875rem;
          padding: 0.875rem;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 7px;
          font-size: 0.875rem;
          color: #18181b;
          line-height: 1.6;
        }
        
        .result-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          border-radius: 5px;
        }
        
        .learned-card {
          margin-top: 1.25rem;
          padding: 1.5rem;
          background: #fafafa;
          border: 1px solid;
          border-radius: 10px;
        }
        
        .learned-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #52525b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.625rem;
        }
        
        .learned-text {
          font-size: 0.9375rem;
          color: #18181b;
          line-height: 1.6;
          font-style: italic;
        }
        
        /* Supporting Projects */
        .supporting-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 3rem;
        }
        
        .supporting-header {
          margin-bottom: 3rem;
        }
        
        .supporting-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.75rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: #09090b;
          margin-bottom: 0.75rem;
        }
        
        .supporting-desc {
          font-size: 1rem;
          color: #71717a;
        }
        
        .compact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.75rem;
        }
        
        .compact-card {
          background: #fafafa;
          border: 1px solid #e4e4e7;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .compact-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f4f4f5;
        }
        
        .compact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .compact-card:hover .compact-image {
          transform: scale(1.08);
        }
        
        .compact-image-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          pointer-events: none;
          transition: opacity 300ms ease;
        }
        
        .compact-card:hover .compact-image-overlay {
          opacity: 0.6;
        }
        
        .compact-color-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .compact-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
        }
        
        .compact-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .compact-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #09090b;
          line-height: 1.3;
        }
        
        .compact-tagline {
          font-size: 0.875rem;
          color: #71717a;
          line-height: 1.5;
        }
        
        .compact-metrics {
          display: flex;
          gap: 1.75rem;
          padding: 1.25rem 0;
          border-top: 1px solid #e4e4e7;
          border-bottom: 1px solid #e4e4e7;
        }
        
        .compact-metric {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
          flex: 1;
        }
        
        .compact-metric-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .compact-metric-label {
          font-size: 0.6875rem;
          color: #71717a;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1.3;
        }
        
        .compact-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .compact-tech-badge {
          padding: 0.375rem 0.75rem;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 6px;
          font-size: 0.75rem;
          color: #52525b;
          font-weight: 500;
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .compact-tech-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
        }
        
        .compact-links {
          display: flex;
          gap: 0.875rem;
          margin-top: auto;
        }
        
        .compact-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex: 1;
          padding: 0.875rem;
          background: #ffffff;
          border: 1px solid #e4e4e7;
          border-radius: 8px;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #18181b;
          text-decoration: none;
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .compact-link:hover {
          background: #f4f4f5;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
        }
        
        .compact-link:first-child:hover {
          background: #ffffff;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero-section {
            padding: 6rem 2rem 4rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 2rem;
          }
          
          .flagship-container {
            padding: 0 2rem;
          }
          
          .impact-showcase {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .tab-nav {
            flex-wrap: wrap;
          }
          
          .supporting-section {
            padding: 4rem 2rem;
          }
          
          .compact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #fafafa;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #d4d4d8;
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a1a1aa;
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#ffffff' }}>
        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-label">
              <Sparkles size={14} />
              Engineering Portfolio
            </div>
            
            <h1 className="hero-title">
              Building products that <span className="hero-gradient">solve real problems</span>
            </h1>
            
            <p className="hero-description">
              Production-grade applications with measurable business impact. 
              Full-stack development meets rigorous system design.
            </p>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="hero-stat-value">5+</div>
              <div className="hero-stat-label">Production Apps</div>
            </div>
            <div>
              <div className="hero-stat-value">4K+</div>
              <div className="hero-stat-label">Active Users</div>
            </div>
            <div>
              <div className="hero-stat-value">90%+</div>
              <div className="hero-stat-label">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Flagship Projects */}
        {featured.map((project, index) => (
          <FlagshipProject key={project.id} project={project} index={index} />
        ))}
        
        {/* Supporting Projects */}
        <div className="supporting-section">
          <motion.div 
            className="supporting-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="supporting-title">Additional Projects</h2>
            <p className="supporting-desc">
              More production applications demonstrating versatility across domains
            </p>
          </motion.div>
          
          <div className="compact-grid">
            {supporting.map(project => (
              <CompactProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}