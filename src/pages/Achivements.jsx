import { useState, useEffect } from "react";
import {
  Trophy, Award, Users, Code2, GitBranch, Briefcase,
  GraduationCap, Target, CheckCircle, ExternalLink,
  Github, Linkedin, Download, X, ChevronRight,
  Calendar, Clock, Zap, Database, Server, Terminal
} from "lucide-react";

const achievements = [
  {
    id: 1,
    category: "Competition",
    icon: Trophy,
    title: "National Hackathon Winner",
    event: "Brainovision Talent Hunt 2024",
    rank: "1st Place National",
    context: "24-hour hackathon with 200+ teams competing nationwide. Challenged to build a production-ready e-commerce platform.",
    contribution: "Led full-stack development as technical lead. Made all architectural decisions, implemented core features, and coordinated with 4 team members.",
    decisions: [
      "Chose MERN stack for rapid development and team familiarity",
      "Implemented JWT authentication with refresh tokens for security",
      "Used Socket.io for real-time bid notifications",
      "Deployed on AWS EC2 with Docker for consistency"
    ],
    outcome: "Won ₹50,000 prize. Project recognized for technical execution and scalability approach.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Docker", "AWS"],
    color: "#3b82f6",
    year: "2024",
    duration: "24 hours",
    link: null,
    metrics: {
      team: "5 members",
      competitors: "200+ teams",
      lines: "~6,000 lines"
    }
  },
  
  {
    id: 2,
    category: "Professional Development",
    icon: GraduationCap,
    title: "Technical Certifications",
    event: "Industry-Recognized Credentials",
    rank: "15+ Certifications Completed",
    context: "Pursued structured learning across web development, cloud infrastructure, and machine learning to build industry-relevant skills.",
    contribution: "Completed comprehensive certification programs from AWS, Microsoft, and specialized ML platforms. Applied knowledge directly in projects.",
    decisions: [
      "Prioritized AWS for cloud deployment knowledge",
      "Focused on full-stack JavaScript for project consistency",
      "Studied ML/DL fundamentals for AI project implementations",
      "Completed DevOps certifications for CI/CD understanding"
    ],
    outcome: "15+ certifications completed. Knowledge applied across 8 production projects. Contributed to successful project deployments.",
    tech: ["AWS", "React", "Python", "TensorFlow", "Docker", "Kubernetes", "Node.js"],
    color: "#8b5cf6",
    year: "2023-2025",
    duration: "Ongoing",
    link: "/certifications",
    metrics: {
      total: "15+ certs",
      platforms: "AWS, Coursera, Udemy",
      domains: "Web, Cloud, AI/ML"
    }
  },
  
  {
    id: 3,
    category: "Project Portfolio",
    icon: Code2,
    title: "Production Applications",
    event: "End-to-End System Development",
    rank: "8 Deployed Projects",
    context: "Built complete applications from concept to deployment, demonstrating full-stack capabilities and system design understanding.",
    contribution: "Sole developer for 6 projects, team member in 2. Handled frontend, backend, database design, and deployment for each system.",
    decisions: [
      "Selected tech stack based on project requirements (MERN, Django, Flask)",
      "Implemented authentication and authorization for all applications",
      "Used PostgreSQL for relational data, MongoDB for flexible schemas",
      "Deployed on Vercel, Railway, and AWS for production experience"
    ],
    outcome: "All 8 projects successfully deployed and accessible. Resume Builder serves 3,000+ users. Fake News Detector achieves 95% accuracy.",
    tech: ["React", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
    color: "#ec4899",
    year: "2023-2025",
    duration: "Ongoing",
    link: "/projects",
    metrics: {
      projects: "8 deployed",
      users: "3,000+ total",
      uptime: "Maintained"
    }
  },
  
  {
    id: 4,
    category: "Open Source",
    icon: GitBranch,
    title: "GitHub Contributions",
    event: "Code Sharing & Collaboration",
    rank: "Active Contributor",
    context: "Shared all projects publicly on GitHub for portfolio visibility and community learning. Maintained clean documentation.",
    contribution: "Created 12+ repositories with detailed READMEs, setup instructions, and architectural documentation. Responded to issues and questions.",
    decisions: [
      "Open-sourced all personal projects for transparency",
      "Wrote comprehensive documentation for each repository",
      "Used conventional commits for clear history",
      "Implemented CI/CD with GitHub Actions where applicable"
    ],
    outcome: "2,100+ total stars across repositories. Projects referenced by students learning similar technologies.",
    tech: ["Git", "GitHub Actions", "Markdown", "CI/CD"],
    color: "#10b981",
    year: "2024-2025",
    duration: "Ongoing",
    link: "https://github.com/bhagavan444",
    metrics: {
      repos: "12+ public",
      stars: "2,100+ total",
      commits: "800+"
    }
  },
  
  {
    id: 5,
    category: "Technical Skills",
    icon: Terminal,
    title: "Algorithm Problem Solving",
    event: "Competitive Programming Practice",
    rank: "100+ Problems Solved",
    context: "Consistent practice on LeetCode and HackerRank to strengthen data structures and algorithms knowledge for technical interviews.",
    contribution: "Solved problems across arrays, trees, graphs, dynamic programming, and system design. Focused on optimal solutions.",
    decisions: [
      "Prioritized medium and hard difficulty problems",
      "Studied time/space complexity analysis",
      "Practiced explaining solutions clearly",
      "Reviewed solutions from top performers for optimization"
    ],
    outcome: "Solved 100+ problems. Improved problem-solving speed and pattern recognition. Better prepared for technical interviews.",
    tech: ["Python", "JavaScript", "Data Structures", "Algorithms"],
    color: "#f59e0b",
    year: "2024-2025",
    duration: "Ongoing",
    link: null,
    metrics: {
      problems: "100+",
      platforms: "LeetCode, HackerRank",
      focus: "DSA, System Design"
    }
  },
  
  {
    id: 6,
    category: "Workshops & Learning",
    icon: Briefcase,
    title: "Industry Workshops",
    event: "Hands-on Technical Training",
    rank: "4 Workshops Completed",
    context: "Attended technical workshops on AI/ML, cloud computing, and full-stack development to gain practical, hands-on experience.",
    contribution: "Active participant in all sessions. Built small projects during workshops. Connected with industry professionals and mentors.",
    decisions: [
      "Selected workshops aligned with career goals",
      "Implemented learnings in personal projects immediately",
      "Networked with speakers and participants",
      "Documented key takeaways for future reference"
    ],
    outcome: "Completed 4 workshops. Gained practical exposure to enterprise tools and best practices. Expanded professional network.",
    tech: ["TensorFlow", "AWS", "React", "Docker"],
    color: "#06b6d4",
    year: "2023-2024",
    duration: "Various",
    link: null,
    metrics: {
      workshops: "4 completed",
      topics: "AI/ML, Cloud, Full-Stack",
      hours: "40+ training"
    }
  }
];

const metrics = [
  { label: "Production Projects", value: "8", icon: Code2, color: "#3b82f6" },
  { label: "Hackathons", value: "3", icon: Trophy, color: "#10b981" },
  { label: "Certifications", value: "15+", icon: Award, color: "#8b5cf6" },
  { label: "DSA Problems", value: "100+", icon: Target, color: "#f59e0b" },
  { label: "GitHub Stars", value: "2.1K+", icon: GitBranch, color: "#ec4899" },
  { label: "Workshops", value: "4", icon: Users, color: "#06b6d4" }
];

const skills = [
  { 
    name: "React & Frontend",
    projects: ["Resume Builder", "AI Chat Workspace", "Career Recommender"],
    details: ["Component architecture", "State management with Redux", "Performance optimization"],
    color: "#3b82f6"
  },
  { 
    name: "Node.js & Backend",
    projects: ["Resume Builder API", "Chat Workspace API"],
    details: ["RESTful API design", "JWT authentication", "Database integration"],
    color: "#10b981"
  },
  { 
    name: "Machine Learning",
    projects: ["Fake News Detector", "Heart Disease Predictor"],
    details: ["Model training & evaluation", "Scikit-learn, TensorFlow", "Deployment to production"],
    color: "#8b5cf6"
  },
  { 
    name: "Cloud & DevOps",
    projects: ["All production deployments"],
    details: ["AWS EC2, S3, Lambda", "Docker containerization", "CI/CD with GitHub Actions"],
    color: "#f59e0b"
  }
];

export default function Achievements() {
  const [activeAchievement, setActiveAchievement] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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
          background: #0a0a0f;
          color: #e2e8f0;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .header-section {
          text-align: center;
          margin-bottom: 4rem;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 100px;
          color: #22c55e;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.025em;
          margin-bottom: 1.5rem;
        }

        .page-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          color: #f1f5f9;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .page-subtitle {
          font-size: 1.125rem;
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto 2rem;
        }

        .cta-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
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
          transition: all 200ms ease;
        }

        .btn-primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
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
          transition: all 200ms ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(148, 163, 184, 0.3);
          transform: translateY(-2px);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .metric-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 250ms ease;
        }

        .metric-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .metric-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 1rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-value {
          font-family: 'Manrope', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #f1f5f9;
          margin-bottom: 0.375rem;
        }

        .metric-label {
          font-size: 0.875rem;
          color: #64748b;
          font-weight: 500;
        }

        .section-title {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 2rem;
          text-align: center;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          overflow: hidden;
          transition: all 250ms ease;
          cursor: pointer;
        }

        .achievement-card:hover {
          border-color: rgba(148, 163, 184, 0.25);
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
        }

        .card-header {
          height: 160px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-meta {
          position: absolute;
          top: 1rem;
          left: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 0.875rem;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        .card-content {
          padding: 2rem;
        }

        .category-badge {
          display: inline-block;
          padding: 0.375rem 0.875rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .card-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.375rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.5rem;
        }

        .card-event {
          font-size: 0.9375rem;
          color: #94a3b8;
          margin-bottom: 1rem;
        }

        .card-outcome {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .metric-item {
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(148, 163, 184, 0.08);
          border-radius: 8px;
          text-align: center;
        }

        .metric-item-value {
          font-size: 1rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.25rem;
        }

        .metric-item-label {
          font-size: 0.6875rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-badge {
          padding: 0.375rem 0.75rem;
          background: rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 6px;
          font-size: 0.8125rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .view-details-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.875rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          color: #3b82f6;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .view-details-btn:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.3);
        }

        .skills-section {
          margin-bottom: 4rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 2rem;
          transition: all 250ms ease;
        }

        .skill-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-4px);
        }

        .skill-name {
          font-family: 'Manrope', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 1rem;
        }

        .skill-projects {
          margin-bottom: 1rem;
        }

        .skill-projects-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }

        .skill-projects-list {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.6;
        }

        .skill-details {
          list-style: none;
          padding: 0;
        }

        .skill-details li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #94a3b8;
          margin-bottom: 0.375rem;
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
          background: #0f1117;
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

        .modal-text {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .decision-list {
          list-style: none;
          padding: 0;
        }

        .decision-list li {
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
          margin: 3rem 0;
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

      <div style={{ minHeight: '100vh', background: '#0a0a0f' }}>
        <div className="container">
          {/* Header */}
          <div className="header-section">
            <div className="status-badge">
              <CheckCircle size={16} />
              Open to Software Engineering Roles • 2026 Graduate
            </div>

            <h1 className="page-title">Achievements & Portfolio</h1>
            
            <p className="page-subtitle">
              Full-Stack & AI Engineer focused on building scalable, production-ready systems.
              Demonstrated through competitions, certifications, and deployed applications.
            </p>

            <div className="cta-row">
              <a href="/resume" className="btn-primary">
                <Download size={18} />
                Download Resume
              </a>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github size={18} />
                GitHub
              </a>
              <a href="https://linkedin.com/in/bhagavan" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Metrics Overview */}
          <div className="metrics-grid">
            {metrics.map((metric, i) => (
              <div key={i} className="metric-card">
                <div className="metric-icon" style={{ background: `${metric.color}15` }}>
                  <metric.icon size={24} style={{ color: metric.color }} />
                </div>
                <div className="metric-value" style={{ color: metric.color }}>
                  {metric.value}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Key Achievements */}
          <div>
            <h2 className="section-title">Key Achievements</h2>
            <div className="achievements-grid">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="achievement-card"
                  onMouseEnter={() => setHoveredCard(achievement.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveAchievement(achievement)}
                >
                  <div className="card-header" style={{ background: `linear-gradient(135deg, ${achievement.color}20 0%, ${achievement.color}05 100%)` }}>
                    <div className="card-meta">
                      <Calendar size={12} />
                      {achievement.year}
                    </div>
                    <div className="card-icon" style={{ borderColor: `${achievement.color}40` }}>
                      <achievement.icon size={40} style={{ color: achievement.color }} />
                    </div>
                  </div>

                  <div className="card-content">
                    <span className="category-badge" style={{ 
                      background: `${achievement.color}15`, 
                      borderColor: `${achievement.color}30`,
                      color: achievement.color
                    }}>
                      {achievement.category}
                    </span>

                    <h3 className="card-title">{achievement.title}</h3>
                    <p className="card-event">{achievement.event}</p>
                    <p className="card-outcome">{achievement.outcome}</p>

                    <div className="metrics-row">
                      {Object.entries(achievement.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <div className="metric-item-value">{value}</div>
                          <div className="metric-item-label">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>

                    <div className="tech-list">
                      {achievement.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                      {achievement.tech.length > 4 && (
                        <span className="tech-badge">+{achievement.tech.length - 4}</span>
                      )}
                    </div>

                    <button className="view-details-btn" style={{
                      background: hoveredCard === achievement.id ? `${achievement.color}15` : `${achievement.color}10`,
                      borderColor: hoveredCard === achievement.id ? `${achievement.color}30` : `${achievement.color}20`,
                      color: achievement.color
                    }}>
                      View Details
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Skills Section */}
          <div className="skills-section">
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <div key={i} className="skill-card">
                  <h3 className="skill-name" style={{ color: skill.color }}>{skill.name}</h3>
                  
                  <div className="skill-projects">
                    <div className="skill-projects-label">Applied In</div>
                    <div className="skill-projects-list">
                      {skill.projects.join(', ')}
                    </div>
                  </div>

                  <ul className="skill-details">
                    {skill.details.map((detail, j) => (
                      <li key={j}>
                        <CheckCircle size={14} style={{ color: skill.color, flexShrink: 0, marginTop: '2px' }} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {activeAchievement && (
        <div className="modal-overlay" onClick={() => setActiveAchievement(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div style={{ flex: 1 }}>
                <span className="category-badge" style={{ 
                  background: `${activeAchievement.color}15`, 
                  borderColor: `${activeAchievement.color}30`,
                  color: activeAchievement.color,
                  marginBottom: '1rem'
                }}>
                  {activeAchievement.category}
                </span>
                <h2 style={{ 
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '2rem', 
                  fontWeight: 800, 
                  color: '#f1f5f9',
                  marginBottom: '0.5rem'
                }}>
                  {activeAchievement.title}
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#94a3b8' }}>
                  {activeAchievement.event}
                </p>
              </div>
              <button className="close-btn" onClick={() => setActiveAchievement(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: activeAchievement.color }}>Context</h3>
                <p className="modal-text">{activeAchievement.context}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: activeAchievement.color }}>My Contribution</h3>
                <p className="modal-text">{activeAchievement.contribution}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: activeAchievement.color }}>Technical Decisions</h3>
                <ul className="decision-list">
                  {activeAchievement.decisions.map((decision, i) => (
                    <li key={i}>
                      <Zap size={16} style={{ color: activeAchievement.color, flexShrink: 0 }} />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: activeAchievement.color }}>Outcome</h3>
                <p className="modal-text">{activeAchievement.outcome}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title" style={{ color: activeAchievement.color }}>Technologies</h3>
                <div className="tech-list">
                  {activeAchievement.tech.map((tech, i) => (
                    <span key={i} className="tech-badge" style={{
                      background: `${activeAchievement.color}15`,
                      borderColor: `${activeAchievement.color}30`,
                      color: activeAchievement.color
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {activeAchievement.link && (
                <a 
                  href={activeAchievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ 
                    background: activeAchievement.color,
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '1rem'
                  }}
                >
                  <ExternalLink size={18} />
                  View Related Work
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}