"use client";

import { useState, useEffect } from "react";
import {
  Trophy, Clock, Users, Code, Database, Shield, Server, Terminal,
  Download, CheckCircle, ArrowRight, Github, Calendar, Target,
  Zap, ChevronDown, X, ExternalLink, Award
} from "lucide-react";

export default function HackathonPortfolio() {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [showCert, setShowCert] = useState(false);

  const certUrl = "https://lh3.googleusercontent.com/d/1bkXJCzHQPbSSovbaLs4EPeKT1f9ERl5O";

  const phases = [
    {
      id: 1,
      time: "0-6h",
      title: "Architecture Setup",
      description: "Designed system architecture, configured MongoDB, implemented authentication infrastructure, and set up CI/CD pipeline.",
      contributions: [
        "Designed microservices architecture with service separation",
        "Configured MongoDB with basic indexing",
        "Implemented JWT authentication with refresh tokens",
        "Set up Docker containerization for consistency",
        "Configured GitHub Actions for automated testing"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Docker", "Redis"],
      color: "#3b82f6",
      icon: Terminal
    },
    {
      id: 2,
      time: "6-14h",
      title: "Core Development",
      description: "Built RESTful APIs, developed React frontend with TypeScript, implemented state management, and created responsive UI components.",
      contributions: [
        "Developed 20+ REST API endpoints with validation",
        "Built React components with TypeScript for type safety",
        "Implemented Redux Toolkit for state management",
        "Created responsive layouts with Tailwind CSS",
        "Added form validation and error handling"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Axios"],
      color: "#8b5cf6",
      icon: Code
    },
    {
      id: 3,
      time: "14-20h",
      title: "Security & Real-time",
      description: "Implemented OAuth 2.0, added rate limiting, integrated WebSocket for real-time features, and configured comprehensive logging.",
      contributions: [
        "Integrated OAuth 2.0 authentication flow",
        "Implemented Redis pub/sub for WebSocket scaling",
        "Added rate limiting middleware to prevent abuse",
        "Configured Winston logger for debugging",
        "Implemented security headers with Helmet.js"
      ],
      technologies: ["Socket.io", "Redis", "OAuth 2.0", "Helmet.js", "Winston"],
      color: "#ec4899",
      icon: Shield
    },
    {
      id: 4,
      time: "20-24h",
      title: "Deployment & Testing",
      description: "Deployed application to AWS, configured CDN, set up monitoring, optimized performance, and prepared final demo.",
      contributions: [
        "Deployed containers to AWS EC2",
        "Configured Nginx as reverse proxy",
        "Set up CloudFront CDN for static assets",
        "Added basic monitoring with logs",
        "Performed load testing and optimization"
      ],
      technologies: ["AWS EC2", "Nginx", "CloudFront", "Docker Compose"],
      color: "#10b981",
      icon: Server
    }
  ];

  const team = [
    {
      name: "Bhagavan",
      role: "Tech Lead & Backend",
      contributions: "Led system architecture decisions, built backend APIs, and managed AWS deployment.",
      technologies: ["Node.js", "MongoDB", "AWS", "System Design"]
    },
    {
      name: "Dhanus",
      role: "Frontend Developer",
      contributions: "Designed UI/UX, built React components, and implemented state management.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind"]
    },
    {
      name: "Pavan",
      role: "DevOps Engineer",
      contributions: "Managed containerization, CI/CD pipeline, and deployment automation.",
      technologies: ["Docker", "GitHub Actions", "AWS", "Nginx"]
    },
    {
      name: "Rahul",
      role: "Security Engineer",
      contributions: "Implemented authentication systems, OAuth integration, and security audits.",
      technologies: ["OAuth", "JWT", "Security", "Testing"]
    }
  ];

  const technicalStack = [
    {
      category: "Frontend",
      description: "React with TypeScript, Redux for state management, Tailwind for styling",
      technologies: ["React 18", "TypeScript", "Redux Toolkit", "Tailwind CSS"]
    },
    {
      category: "Backend",
      description: "Node.js with Express framework, RESTful API architecture",
      technologies: ["Node.js", "Express.js", "JWT", "OAuth 2.0"]
    },
    {
      category: "Database",
      description: "MongoDB for data persistence, Redis for caching and real-time features",
      technologies: ["MongoDB", "Redis", "Mongoose"]
    },
    {
      category: "DevOps",
      description: "Docker for containerization, AWS for cloud hosting, GitHub Actions for CI/CD",
      technologies: ["Docker", "AWS EC2", "CloudFront", "GitHub Actions"]
    }
  ];

  const learnings = [
    "Working under time pressure while maintaining code quality",
    "Making rapid architecture decisions with limited information",
    "Coordinating with team members on overlapping features",
    "Debugging production issues quickly during deployment",
    "Balancing feature scope with available time constraints"
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0b1220;
          color: #e2e8f0;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .hero-section {
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 100px;
          color: #3b82f6;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 2rem;
        }

        .page-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(3rem, 8vw, 5rem);
          font-weight: 800;
          color: #f1f5f9;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .page-subtitle {
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 600;
          background: linear-gradient(to right, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .page-description {
          font-size: 1.0625rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .quick-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 250ms ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-4px);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-family: 'Manrope', sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .section-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 1rem;
          text-align: center;
        }

        .section-description {
          font-size: 1.0625rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .cert-container {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 3rem 2rem;
          margin-bottom: 4rem;
        }

        .cert-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .cert-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.5rem, 4vw, 2.25rem);
          font-weight: 800;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cert-image-wrapper {
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid rgba(251, 191, 36, 0.3);
          margin-bottom: 2rem;
          transition: all 300ms ease;
        }

        .cert-image-wrapper:hover {
          border-color: rgba(251, 191, 36, 0.5);
          transform: scale(1.01);
          box-shadow: 0 12px 24px rgba(251, 191, 36, 0.2);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border: none;
          border-radius: 8px;
          color: #000000;
          font-size: 0.9375rem;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(251, 191, 36, 0.3);
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .phase-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 2rem;
          cursor: pointer;
          transition: all 250ms ease;
          position: relative;
          overflow: hidden;
        }

        .phase-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--phase-color);
        }

        .phase-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.25);
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }

        .phase-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .phase-icon {
          width: 56px;
          height: 56px;
          background: var(--phase-bg);
          border: 2px solid var(--phase-border);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .phase-time {
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid var(--phase-border);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--phase-color);
        }

        .phase-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.75rem;
        }

        .phase-description {
          font-size: 0.9375rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
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

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .team-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 2rem;
          transition: all 250ms ease;
        }

        .team-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-4px);
        }

        .team-member-name {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
        }

        .team-member-role {
          font-size: 0.9375rem;
          font-weight: 600;
          color: #3b82f6;
          margin-bottom: 1rem;
        }

        .team-member-contrib {
          font-size: 0.9375rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .stack-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 2rem;
          transition: all 250ms ease;
        }

        .stack-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-4px);
        }

        .stack-category {
          font-family: 'Manrope', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.75rem;
        }

        .stack-description {
          font-size: 0.9375rem;
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        .learnings-card {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          margin-bottom: 4rem;
        }

        .learning-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .learning-item:last-child {
          margin-bottom: 0;
        }

        .learning-text {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow-y: auto;
        }

        .modal-content {
          background: #0f1729;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-header {
          padding: 2rem;
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .close-btn {
          width: 40px;
          height: 40px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 8px;
          color: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 200ms ease;
          flex-shrink: 0;
        }

        .close-btn:hover {
          background: rgba(239, 68, 68, 0.2);
          border-color: rgba(239, 68, 68, 0.4);
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-section {
          margin-bottom: 2rem;
        }

        .modal-section-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 1rem;
        }

        .contribution-list {
          list-style: none;
          padding: 0;
        }

        .contribution-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.875rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 8px;
          margin-bottom: 0.75rem;
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.6;
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

      <div style={{ minHeight: '100vh', background: '#0b1220' }}>
        <div className="container">
          {/* Hero Section */}
          <div className="hero-section">
            <div className="badge">
              <Terminal size={16} />
              24-Hour Hackathon Project
            </div>

            <h1 className="page-title">Braino Vision</h1>
            
            <h2 className="page-subtitle">MERN Stack Application</h2>

            <p className="page-description">
              Full-stack e-commerce marketplace built during the Brainovision National Talent Hunt 2024. 
              Led backend architecture and deployment for a 4-person team.
            </p>

            <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <Trophy size={24} style={{ color: '#3b82f6' }} />
                </div>
                <div className="stat-value">1st Place</div>
                <div className="stat-label">National Winner</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Clock size={24} style={{ color: '#3b82f6' }} />
                </div>
                <div className="stat-value">24 Hours</div>
                <div className="stat-label">Build Duration</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Users size={24} style={{ color: '#3b82f6' }} />
                </div>
                <div className="stat-value">4 Members</div>
                <div className="stat-label">Team Size</div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Code size={24} style={{ color: '#3b82f6' }} />
                </div>
                <div className="stat-value">25 APIs</div>
                <div className="stat-label">Endpoints Built</div>
              </div>
            </div>

            {/* Certificate */}
            <div className="cert-container">
              <div className="cert-header">
                <Award size={32} style={{ color: '#fbbf24' }} />
                <h3 className="cert-title">Winner Certificate</h3>
                <Award size={32} style={{ color: '#fbbf24' }} />
              </div>

              <div 
                className="cert-image-wrapper"
                onClick={() => setShowCert(true)}
              >
                <img 
                  src={certUrl} 
                  alt="Championship Certificate" 
                  style={{ width: '100%', display: 'block' }} 
                />
              </div>

              <div style={{ textAlign: 'center' }}>
                <button 
                  onClick={() => {
                    const a = document.createElement('a');
                    a.href = certUrl;
                    a.download = 'BrainoVision_Certificate.jpg';
                    a.click();
                  }}
                  className="btn-primary"
                >
                  <Download size={18} />
                  Download Certificate
                </button>
              </div>
            </div>
          </div>

          <div className="divider" />

          {/* Timeline */}
          <div>
            <h2 className="section-title">Development Timeline</h2>
            <p className="section-description">
              Four-phase approach: architecture, development, security, and deployment
            </p>

            <div className="timeline-grid">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className="phase-card"
                  style={{
                    '--phase-color': phase.color,
                    '--phase-bg': `${phase.color}15`,
                    '--phase-border': `${phase.color}40`
                  }}
                  onClick={() => setSelectedPhase(phase)}
                >
                  <div className="phase-header">
                    <div className="phase-icon">
                      <phase.icon size={28} style={{ color: phase.color }} />
                    </div>
                    <div className="phase-time">{phase.time}</div>
                  </div>

                  <h3 className="phase-title">{phase.title}</h3>
                  <p className="phase-description">{phase.description}</p>

                  <div className="tech-list">
                    {phase.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                    {phase.technologies.length > 3 && (
                      <span className="tech-badge">+{phase.technologies.length - 3}</span>
                    )}
                  </div>

                  <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: phase.color, fontSize: '0.875rem', fontWeight: 600 }}>
                    View Details
                    <ArrowRight size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Team */}
          <div>
            <h2 className="section-title">Team Members</h2>
            <p className="section-description">
              Four-person team with distributed responsibilities
            </p>

            <div className="team-grid">
              {team.map((member, idx) => (
                <div key={idx} className="team-card">
                  <h3 className="team-member-name">{member.name}</h3>
                  <div className="team-member-role">{member.role}</div>
                  <p className="team-member-contrib">{member.contributions}</p>

                  <div className="tech-list">
                    {member.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Technical Stack */}
          <div>
            <h2 className="section-title">Technical Stack</h2>
            <p className="section-description">
              Technologies and frameworks used in the project
            </p>

            <div className="stack-grid">
              {technicalStack.map((stack, idx) => (
                <div key={idx} className="stack-card">
                  <h3 className="stack-category">{stack.category}</h3>
                  <p className="stack-description">{stack.description}</p>

                  <div className="tech-list">
                    {stack.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* What I Learned */}
          <div>
            <h2 className="section-title">Key Learnings</h2>
            <p className="section-description">
              Technical and teamwork skills developed during the hackathon
            </p>

            <div className="learnings-card">
              {learnings.map((learning, idx) => (
                <div key={idx} className="learning-item">
                  <CheckCircle size={20} style={{ color: '#3b82f6', flexShrink: 0, marginTop: '2px' }} />
                  <span className="learning-text">{learning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <a 
              href="https://github.com/bhagavan444" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                borderRadius: '8px',
                color: '#3b82f6',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 200ms ease'
              }}
            >
              <Github size={18} />
              View More Projects
            </a>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCert && (
        <div className="modal-overlay" onClick={() => setShowCert(false)}>
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '95vw',
              maxHeight: '95vh'
            }}
          >
            <button 
              onClick={() => setShowCert(false)}
              className="close-btn"
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>
            <img 
              src={certUrl} 
              alt="Championship Certificate"
              style={{
                width: '100%',
                borderRadius: '12px',
                border: '3px solid #fbbf24'
              }}
            />
          </div>
        </div>
      )}

      {/* Phase Details Modal */}
      {selectedPhase && (
        <div className="modal-overlay" onClick={() => setSelectedPhase(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ flex: 1 }}>
                <div style={{
                  padding: '0.5rem 1rem',
                  background: `${selectedPhase.color}20`,
                  border: `1px solid ${selectedPhase.color}40`,
                  borderRadius: '100px',
                  color: selectedPhase.color,
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}>
                  {selectedPhase.time}
                </div>
                <h2 style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#f1f5f9',
                  marginBottom: '0.5rem'
                }}>
                  {selectedPhase.title}
                </h2>
                <p style={{ fontSize: '1.0625rem', color: '#94a3b8' }}>
                  {selectedPhase.description}
                </p>
              </div>
              <button className="close-btn" onClick={() => setSelectedPhase(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: selectedPhase.color }}>
                  My Contributions
                </h3>
                <ul className="contribution-list">
                  {selectedPhase.contributions.map((contribution, idx) => (
                    <li key={idx}>
                      <CheckCircle size={18} style={{ color: selectedPhase.color, flexShrink: 0 }} />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: selectedPhase.color }}>
                  Technologies Used
                </h3>
                <div className="tech-list">
                  {selectedPhase.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="tech-badge"
                      style={{
                        background: `${selectedPhase.color}15`,
                        borderColor: `${selectedPhase.color}30`,
                        color: selectedPhase.color
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}