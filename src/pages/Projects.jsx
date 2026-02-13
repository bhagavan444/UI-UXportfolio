import React, { useState } from 'react';
import {
  ExternalLink, Github, ChevronDown, ChevronUp, Check, 
  Zap, Database, Server, Layout, Lock, Cloud, GitBranch,
  Box, Smartphone, AlertCircle, Target, TrendingUp, Code2
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "ATS Resume Builder",
    tagline: "AI-powered resume optimization platform",
    github: "https://github.com/bhagavan444/Resumebuilderwebapp",
    live: "https://resumebuilder-demo.vercel.app",
    featured: true,
    year: "2024",
    duration: "3 months",
    
    problem: "Qualified candidates face 75% rejection rates from ATS filters before human review, losing opportunities due to formatting and keyword mismatches rather than qualifications.",
    
    solution: "Built an intelligent resume builder that analyzes job descriptions, suggests ATS-compatible formatting, and optimizes keyword placement while maintaining readability.",
    
    impact: [
      { label: "Shortlisting Rate", value: "2× improvement", desc: "Doubled interview callbacks for users" },
      { label: "ATS Compatibility", value: "90%+ score", desc: "Consistent high scores across major ATS systems" },
      { label: "Active Users", value: "3,000+", desc: "Generated resumes with 85% retention" }
    ],
    
    tech: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "OpenAI API", category: "AI/ML" },
      { name: "PDF Generation", category: "Integration" }
    ],
    
    architecture: {
      frontend: "React with component-based architecture, state management via Context API",
      backend: "Express.js REST API with JWT authentication",
      database: "MongoDB for user profiles and resume templates",
      deployment: "Vercel (frontend), Railway (backend)",
      infrastructure: "CDN for static assets, Redis for session management"
    },
    
    productionReady: [
      { feature: "Authentication", status: true, detail: "JWT-based auth with secure refresh tokens" },
      { feature: "Cloud Deployed", status: true, detail: "Multi-region deployment on Vercel/Railway" },
      { feature: "CI/CD Pipeline", status: true, detail: "GitHub Actions for automated testing and deployment" },
      { feature: "Responsive Design", status: true, detail: "Mobile-first design, works on all devices" },
      { feature: "Dockerized", status: false, detail: "Planned for v2.0" }
    ],
    
    technicalHighlights: [
      "Real-time AI keyword analysis using GPT-3.5 with custom prompts",
      "Client-side PDF generation to reduce server load",
      "Optimistic UI updates for better perceived performance",
      "Template system supporting 15+ ATS-compatible layouts"
    ],
    
    screenshot: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&auto=format&fit=crop",
    color: "#3b82f6"
  },
  
  {
    id: 2,
    title: "AI Chat Workspace",
    tagline: "Multi-modal AI assistant for research and automation",
    github: "https://github.com/bhagavan444/chatbotwebapp",
    live: "https://ai-workspace-demo.vercel.app",
    featured: true,
    year: "2024",
    duration: "4 months",
    
    problem: "Professionals juggle multiple AI tools (ChatGPT, Claude, Midjourney) across different tabs, losing context and wasting time on tool switching and re-authentication.",
    
    solution: "Unified workspace supporting text, images, PDFs, and code generation with persistent conversation history and cross-modal context retention.",
    
    impact: [
      { label: "Response Time", value: "<500ms", desc: "40% faster than switching between tools" },
      { label: "Context Retention", value: "96%", desc: "Maintains context across modalities" },
      { label: "Workflow Efficiency", value: "3× improvement", desc: "Measured by task completion time" }
    ],
    
    tech: [
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "OpenAI API", category: "AI/ML" },
      { name: "Anthropic Claude", category: "AI/ML" }
    ],
    
    architecture: {
      frontend: "React + TypeScript with custom hooks for API management",
      backend: "Serverless functions (Vercel Edge) for API orchestration",
      database: "Supabase for conversation history and user preferences",
      deployment: "Vercel Edge Network",
      infrastructure: "Edge caching for common queries, WebSocket for streaming"
    },
    
    productionReady: [
      { feature: "Authentication", status: true, detail: "OAuth2 with Google/GitHub" },
      { feature: "Cloud Deployed", status: true, detail: "Vercel Edge with global CDN" },
      { feature: "CI/CD Pipeline", status: true, detail: "Automated testing with Playwright" },
      { feature: "Responsive Design", status: true, detail: "Progressive Web App (PWA)" },
      { feature: "Dockerized", status: true, detail: "Docker Compose for local development" }
    ],
    
    technicalHighlights: [
      "Streaming responses using Server-Sent Events for real-time output",
      "Smart prompt engineering with conversation context compression",
      "Client-side encryption for sensitive conversations",
      "Markdown rendering with syntax highlighting for code blocks"
    ],
    
    screenshot: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop",
    color: "#8b5cf6"
  },
  
  {
    id: 3,
    title: "Career AI Recommender",
    tagline: "ML-powered career guidance system",
    github: "https://github.com/bhagavan444/Career-Path-Recommendation",
    live: "https://career-ai-demo.vercel.app",
    featured: false,
    year: "2024",
    duration: "2 months",
    
    problem: "Students lack personalized career direction, relying on generic aptitude tests that don't account for evolving job markets and individual skill profiles.",
    
    solution: "Machine learning system analyzing student profiles, academic performance, and interests to recommend optimal career paths with actionable skill gap analysis.",
    
    impact: [
      { label: "Prediction Accuracy", value: "92%", desc: "Validated against actual career outcomes" },
      { label: "Career Paths", value: "50+", desc: "Covering tech, business, and creative fields" },
      { label: "Response Time", value: "<200ms", desc: "Real-time recommendations" }
    ],
    
    tech: [
      { name: "Python", category: "Backend" },
      { name: "Scikit-learn", category: "ML" },
      { name: "Flask", category: "API" },
      { name: "React", category: "Frontend" },
      { name: "PostgreSQL", category: "Database" }
    ],
    
    architecture: {
      frontend: "React SPA with responsive design",
      backend: "Flask REST API with model serving",
      database: "PostgreSQL for user data and career profiles",
      deployment: "Heroku (backend), Netlify (frontend)",
      infrastructure: "Model versioning with MLflow"
    },
    
    productionReady: [
      { feature: "Authentication", status: true, detail: "Session-based auth" },
      { feature: "Cloud Deployed", status: true, detail: "Heroku with auto-scaling" },
      { feature: "CI/CD Pipeline", status: false, detail: "Manual deployments currently" },
      { feature: "Responsive Design", status: true, detail: "Mobile-optimized" },
      { feature: "Dockerized", status: true, detail: "Docker for reproducible ML environment" }
    ],
    
    technicalHighlights: [
      "Random Forest classifier with 92% accuracy on test set",
      "Feature engineering from academic transcripts and assessments",
      "SHAP values for model explainability",
      "Incremental learning for model updates without full retraining"
    ],
    
    screenshot: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop",
    color: "#10b981"
  },
  
  {
    id: 4,
    title: "Fake News Detector",
    tagline: "NLP system for misinformation detection",
    github: "https://github.com/bhagavan444/News-detector",
    live: "https://news-detector-demo.vercel.app",
    featured: false,
    year: "2024",
    duration: "5 months",
    
    problem: "Fake news spreads 6× faster than verified news on social media, undermining public trust and decision-making during critical events.",
    
    solution: "Deep learning NLP model using TF-IDF vectorization and LSTM networks to detect misinformation with explainable confidence scores.",
    
    impact: [
      { label: "Detection Accuracy", value: "95%", desc: "Precision/recall balanced F1 score" },
      { label: "Processing Speed", value: "95ms avg", desc: "35% faster than baseline models" },
      { label: "False Positive Rate", value: "3.2%", desc: "45% reduction from initial version" }
    ],
    
    tech: [
      { name: "Python", category: "Backend" },
      { name: "TensorFlow", category: "ML" },
      { name: "NLTK", category: "NLP" },
      { name: "Docker", category: "Infrastructure" },
      { name: "FastAPI", category: "API" }
    ],
    
    architecture: {
      frontend: "Static HTML/JS for demo interface",
      backend: "FastAPI for model serving",
      database: "MongoDB for article cache and user feedback",
      deployment: "AWS EC2 with Docker",
      infrastructure: "Load balancing with NGINX, Redis for caching"
    },
    
    productionReady: [
      { feature: "Authentication", status: false, detail: "Public demo interface" },
      { feature: "Cloud Deployed", status: true, detail: "AWS EC2 t3.medium instance" },
      { feature: "CI/CD Pipeline", status: true, detail: "GitLab CI for model updates" },
      { feature: "Responsive Design", status: true, detail: "Works on mobile browsers" },
      { feature: "Dockerized", status: true, detail: "Multi-stage Docker build" }
    ],
    
    technicalHighlights: [
      "LSTM architecture with attention mechanism for feature importance",
      "TF-IDF preprocessing with domain-specific stop words",
      "Model explains predictions using LIME for transparency",
      "Continuous learning from user feedback"
    ],
    
    screenshot: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&auto=format&fit=crop",
    color: "#ef4444"
  },
  
  {
    id: 5,
    title: "Heart Disease Predictor",
    tagline: "Clinical ML model for early risk assessment",
    github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
    live: "https://heart-predictor-demo.vercel.app",
    featured: false,
    year: "2023",
    duration: "6 weeks",
    
    problem: "Heart disease is the leading cause of death globally, but early detection remains challenging and expensive, especially in resource-constrained settings.",
    
    solution: "Web-based ML tool using clinical parameters (age, blood pressure, cholesterol) to predict heart disease risk, making screening accessible and affordable.",
    
    impact: [
      { label: "Prediction Accuracy", value: "87%", desc: "Validated on Cleveland dataset" },
      { label: "Assessments", value: "1,200+", desc: "Predictions served" },
      { label: "Precision", value: "85%", desc: "Low false positive rate" }
    ],
    
    tech: [
      { name: "Python", category: "Backend" },
      { name: "Scikit-learn", category: "ML" },
      { name: "Flask", category: "API" },
      { name: "Bootstrap", category: "Frontend" },
      { name: "SQLite", category: "Database" }
    ],
    
    architecture: {
      frontend: "Bootstrap-based responsive UI",
      backend: "Flask application with model inference",
      database: "SQLite for prediction history",
      deployment: "PythonAnywhere shared hosting",
      infrastructure: "Single-server deployment"
    },
    
    productionReady: [
      { feature: "Authentication", status: false, detail: "Stateless predictions" },
      { feature: "Cloud Deployed", status: true, detail: "PythonAnywhere hosting" },
      { feature: "CI/CD Pipeline", status: false, detail: "Manual deployment process" },
      { feature: "Responsive Design", status: true, detail: "Bootstrap responsive grid" },
      { feature: "Dockerized", status: false, detail: "Not containerized" }
    ],
    
    technicalHighlights: [
      "Logistic regression with feature scaling and regularization",
      "Cross-validation to prevent overfitting",
      "Clinical parameter validation on input",
      "Probability scores with confidence intervals"
    ],
    
    screenshot: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop",
    color: "#f59e0b"
  }
];

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);
  const [activeSection, setActiveSection] = useState({});

  const featured = projects.filter(p => p.featured);
  const other = projects.filter(p => !p.featured);

  const toggleSection = (projectId, section) => {
    setActiveSection(prev => ({
      ...prev,
      [projectId]: prev[projectId] === section ? null : section
    }));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0f1117;
          color: #e2e8f0;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-label {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .section-desc {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 700px;
        }

        .featured-grid {
          display: grid;
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }

        .featured-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .featured-card:hover {
          border-color: rgba(148, 163, 184, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 2rem;
          transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }

        .featured-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
        }

        .featured-content {
          padding: 3rem;
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #64748b;
        }

        .project-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
        }

        .featured-title {
          font-size: 2.25rem;
        }

        .project-tagline {
          font-size: 1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .problem-solution {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .problem-solution {
            grid-template-columns: 1fr;
          }
        }

        .ps-card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 10px;
        }

        .ps-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .ps-text {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .impact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .impact-card {
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 10px;
        }

        .impact-label {
          font-size: 0.8125rem;
          color: #64748b;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .impact-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.25rem;
        }

        .impact-desc {
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .tech-badge {
          padding: 0.375rem 0.875rem;
          background: rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 6px;
          font-size: 0.8125rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: #3b82f6;
          border: none;
          border-radius: 8px;
          color: #ffffff;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 8px;
          color: #cbd5e1;
          font-size: 0.9375rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(148, 163, 184, 0.3);
          transform: translateY(-1px);
        }

        .expandable-section {
          margin-top: 2rem;
          border-top: 1px solid rgba(148, 163, 184, 0.1);
          padding-top: 2rem;
        }

        .section-toggle {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .toggle-btn {
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 8px;
          color: #94a3b8;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .toggle-btn:hover {
          border-color: rgba(148, 163, 184, 0.2);
          color: #cbd5e1;
        }

        .toggle-btn.active {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: #3b82f6;
        }

        .section-content {
          animation: fadeIn 300ms ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .architecture-grid {
          display: grid;
          gap: 1rem;
        }

        .arch-item {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 8px;
        }

        .arch-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .arch-value {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .readiness-grid {
          display: grid;
          gap: 1rem;
        }

        .readiness-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 8px;
        }

        .status-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          border-radius: 6px;
        }

        .status-true {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
        }

        .status-false {
          background: rgba(148, 163, 184, 0.1);
          color: #64748b;
        }

        .readiness-content {
          flex: 1;
        }

        .readiness-feature {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 0.25rem;
        }

        .readiness-detail {
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .highlights-list {
          display: grid;
          gap: 0.75rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 8px;
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .highlight-icon {
          color: #3b82f6;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }

        .divider {
          height: 1px;
          background: rgba(148, 163, 184, 0.1);
          margin: 4rem 0;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.5);
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#0f1117' }}>
        <div className="section-container">
          {/* Header */}
          <div className="section-header">
            <span className="section-label">Engineering Portfolio</span>
            <h1 className="section-title">Selected Projects</h1>
            <p className="section-desc">
              Production-ready applications demonstrating full-stack development, system design, and measurable business impact.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="featured-grid">
            {featured.map(project => (
              <div key={project.id} className="featured-card">
                <img 
                  src={project.screenshot} 
                  alt={project.title}
                  className="featured-image"
                />
                
                <div className="featured-content">
                  <div className="project-header">
                    <div style={{ flex: 1 }}>
                      <div className="project-meta">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                      <h2 className="project-title featured-title">{project.title}</h2>
                      <p className="project-tagline">{project.tagline}</p>
                    </div>
                  </div>

                  {/* Problem & Solution */}
                  <div className="problem-solution">
                    <div className="ps-card">
                      <div className="ps-label" style={{ color: '#ef4444' }}>
                        <AlertCircle size={16} />
                        Problem
                      </div>
                      <p className="ps-text">{project.problem}</p>
                    </div>
                    
                    <div className="ps-card">
                      <div className="ps-label" style={{ color: '#22c55e' }}>
                        <Target size={16} />
                        Solution
                      </div>
                      <p className="ps-text">{project.solution}</p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div>
                    <h3 style={{ 
                      fontSize: '1rem', 
                      fontWeight: 600, 
                      color: '#f1f5f9', 
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <TrendingUp size={18} style={{ color: '#3b82f6' }} />
                      Measurable Impact
                    </h3>
                    <div className="impact-grid">
                      {project.impact.map((item, idx) => (
                        <div key={idx} className="impact-card">
                          <div className="impact-label">{item.label}</div>
                          <div className="impact-value" style={{ color: project.color }}>
                            {item.value}
                          </div>
                          <div className="impact-desc">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 600, 
                      color: '#64748b', 
                      marginBottom: '0.75rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Tech Stack
                    </h3>
                    <div className="tech-stack">
                      {project.tech.map((tech, idx) => (
                        <div key={idx} className="tech-badge">
                          {tech.name}
                          <span style={{ color: '#64748b', marginLeft: '0.25rem' }}>
                            · {tech.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="cta-group">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={18} />
                        View Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    )}
                  </div>

                  {/* Expandable Sections */}
                  <div className="expandable-section">
                    <div className="section-toggle">
                      <button
                        className={`toggle-btn ${activeSection[project.id] === 'architecture' ? 'active' : ''}`}
                        onClick={() => toggleSection(project.id, 'architecture')}
                      >
                        <Server size={16} style={{ display: 'inline', marginRight: '0.375rem' }} />
                        Architecture
                        {activeSection[project.id] === 'architecture' ? <ChevronUp size={14} style={{ display: 'inline', marginLeft: '0.375rem' }} /> : <ChevronDown size={14} style={{ display: 'inline', marginLeft: '0.375rem' }} />}
                      </button>
                      
                      <button
                        className={`toggle-btn ${activeSection[project.id] === 'production' ? 'active' : ''}`}
                        onClick={() => toggleSection(project.id, 'production')}
                      >
                        <Cloud size={16} style={{ display: 'inline', marginRight: '0.375rem' }} />
                        Production Ready
                        {activeSection[project.id] === 'production' ? <ChevronUp size={14} style={{ display: 'inline', marginLeft: '0.375rem' }} /> : <ChevronDown size={14} style={{ display: 'inline', marginLeft: '0.375rem' }} />}
                      </button>
                      
                      <button
                        className={`toggle-btn ${activeSection[project.id] === 'highlights' ? 'active' : ''}`}
                        onClick={() => toggleSection(project.id, 'highlights')}
                      >
                        <Code2 size={16} style={{ display: 'inline', marginRight: '0.375rem' }} />
                        Technical Details
                        {activeSection[project.id] === 'highlights' ? <ChevronUp size={14} style={{ display: 'inline', marginLeft: '0.375rem' }} /> : <ChevronDown size={14} style={{ display: 'inline', marginLeft: '0.375rem' }} />}
                      </button>
                    </div>

                    {activeSection[project.id] === 'architecture' && (
                      <div className="section-content">
                        <div className="architecture-grid">
                          {Object.entries(project.architecture).map(([key, value]) => (
                            <div key={key} className="arch-item">
                              <div className="arch-label">{key}</div>
                              <div className="arch-value">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection[project.id] === 'production' && (
                      <div className="section-content">
                        <div className="readiness-grid">
                          {project.productionReady.map((item, idx) => (
                            <div key={idx} className="readiness-item">
                              <div className={`status-icon ${item.status ? 'status-true' : 'status-false'}`}>
                                {item.status ? <Check size={18} /> : <Box size={18} />}
                              </div>
                              <div className="readiness-content">
                                <div className="readiness-feature">{item.feature}</div>
                                <div className="readiness-detail">{item.detail}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection[project.id] === 'highlights' && (
                      <div className="section-content">
                        <div className="highlights-list">
                          {project.technicalHighlights.map((highlight, idx) => (
                            <div key={idx} className="highlight-item">
                              <Zap size={16} className="highlight-icon" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Other Projects */}
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 700, 
              color: '#f1f5f9', 
              marginBottom: '2rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}>
              More Projects
            </h2>
          </div>

          <div className="project-grid">
            {other.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: 600, 
                    color: '#64748b', 
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Impact
                  </div>
                  <div style={{ display: 'grid', gap: '0.5rem' }}>
                    {project.impact.slice(0, 3).map((item, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.875rem'
                      }}>
                        <span style={{ color: '#94a3b8' }}>{item.label}</span>
                        <span style={{ 
                          fontWeight: 600, 
                          color: project.color,
                          fontFamily: "'Space Grotesk', sans-serif"
                        }}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-stack">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <div key={idx} className="tech-badge">
                      {tech.name}
                    </div>
                  ))}
                  {project.tech.length > 4 && (
                    <div className="tech-badge">
                      +{project.tech.length - 4} more
                    </div>
                  )}
                </div>

                <div className="cta-group">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ flex: 1 }}
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-secondary"
                      style={{ flex: 1 }}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}