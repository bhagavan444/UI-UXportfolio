import { useState } from 'react';
import { ExternalLink, CheckCircle, Calendar, Award, Code2, Cloud, Brain, Database, Server, Terminal } from 'lucide-react';

const certificationsData = {
  featured: [
    {
      id: 'fullstack-web',
      title: "Full Stack Web Development",
      issuer: "Tech Academy",
      year: "2024",
      duration: "6 months",
      link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      appliedIn: "ATS Resume Builder (3k+ users, 2× improvement)",
      verified: true,
      image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog"
    },
    {
      id: 'ml-python',
      title: "Machine Learning with Python",
      issuer: "ML Academy",
      year: "2024",
      duration: "7 months",
      link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view",
      skills: ["Python", "Scikit-learn", "TensorFlow", "Keras"],
      appliedIn: "Fake News Detector (95% accuracy, 1M+ articles)",
      verified: true,
      image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK"
    },
    {
      id: 'aws-cloud',
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      duration: "3 months",
      link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view",
      skills: ["AWS", "EC2", "S3", "Lambda"],
      appliedIn: "Multi-region deployment for production apps",
      verified: true,
      image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9"
    }
  ],
  
  domains: {
    "Web Development": [
      {
        title: "Full Stack Web Development",
        issuer: "Tech Academy",
        year: "2024",
        link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view",
        skills: ["React", "Node.js", "MongoDB", "Express"],
        appliedIn: "Resume Builder, AI Chat Workspace",
        image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog"
      },
      {
        title: "React Development",
        issuer: "Meta",
        year: "2024",
        link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view",
        skills: ["React", "Hooks", "Context API", "Performance"],
        appliedIn: "Component architecture for all frontend projects",
        image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf"
      },
      {
        title: "JavaScript (Advanced)",
        issuer: "JS Academy",
        year: "2024",
        link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view",
        skills: ["ES6+", "Async/Await", "Closures", "Prototypes"],
        appliedIn: "Core language foundation for all web apps",
        image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd"
      },
      {
        title: "Django Framework",
        issuer: "Django Foundation",
        year: "2023",
        link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view",
        skills: ["Django", "ORM", "REST API", "PostgreSQL"],
        appliedIn: "Backend services for ML model serving",
        image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc"
      },
      {
        title: "HTML5 & Semantic Markup",
        issuer: "W3C",
        year: "2023",
        link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view",
        skills: ["HTML5", "Accessibility", "SEO", "Web Standards"],
        appliedIn: "Accessible interfaces across all projects",
        image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr"
      },
      {
        title: "CSS3 & Modern Layouts",
        issuer: "CSS Academy",
        year: "2023",
        link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view",
        skills: ["Flexbox", "Grid", "Animations", "Responsive Design"],
        appliedIn: "Responsive design system for portfolio",
        image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE"
      }
    ],
    
    "Cloud & DevOps": [
      {
        title: "AWS Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2024",
        link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view",
        skills: ["AWS", "EC2", "S3", "Lambda"],
        appliedIn: "Cloud infrastructure for production deployments",
        image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9"
      },
      {
        title: "Azure Fundamentals",
        issuer: "Microsoft",
        year: "2024",
        link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view",
        skills: ["Azure", "VMs", "Storage", "Networking"],
        appliedIn: "Multi-cloud deployment strategy",
        image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM"
      },
      {
        title: "Cloud Computing",
        issuer: "Cloud Academy",
        year: "2023",
        link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view",
        skills: ["Distributed Systems", "Scalability", "Fault Tolerance"],
        appliedIn: "Architecture design for scalable applications",
        image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX"
      },
      {
        title: "CI/CD Pipelines",
        issuer: "DevOps Academy",
        year: "2024",
        link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view",
        skills: ["Jenkins", "Docker", "Git", "Automation"],
        appliedIn: "Automated deployment for web applications",
        image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr"
      },
      {
        title: "MLOps",
        issuer: "MLOps Institute",
        year: "2024",
        link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view",
        skills: ["Kubernetes", "Docker", "Model Deployment", "Monitoring"],
        appliedIn: "ML model deployment pipeline",
        image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP"
      }
    ],
    
    "AI & Machine Learning": [
      {
        title: "Machine Learning with Python",
        issuer: "ML Academy",
        year: "2024",
        link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view",
        skills: ["Scikit-learn", "TensorFlow", "Keras", "Model Tuning"],
        appliedIn: "Fake News Detection, Heart Disease Prediction",
        image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK"
      },
      {
        title: "Deep Learning Specialization",
        issuer: "AI Research Lab",
        year: "2024",
        link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view",
        skills: ["Neural Networks", "CNN", "RNN", "Transfer Learning"],
        appliedIn: "Image classification and NLP projects",
        image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6"
      },
      {
        title: "Large Language Models",
        issuer: "OpenAI Institute",
        year: "2024",
        link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view",
        skills: ["GPT", "Prompt Engineering", "Fine-tuning", "Embeddings"],
        appliedIn: "AI Chat Workspace, Resume optimization",
        image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s"
      }
    ],
    
    "Programming & Foundations": [
      {
        title: "Python Programming",
        issuer: "Python Institute",
        year: "2024",
        link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view",
        skills: ["OOP", "Data Structures", "Algorithms", "Clean Code"],
        appliedIn: "Backend services and ML pipelines",
        image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6"
      },
      {
        title: "Java Programming",
        issuer: "Oracle",
        year: "2024",
        link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view",
        skills: ["Java", "Spring Boot", "Maven", "Microservices"],
        appliedIn: "Enterprise application architecture",
        image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM"
      },
      {
        title: "Algorithmic Thinking",
        issuer: "Programming Institute",
        year: "2023",
        link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view",
        skills: ["Algorithms", "Problem Solving", "Optimization", "Design Patterns"],
        appliedIn: "Efficient code across all projects",
        image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx"
      },
      {
        title: "R Programming",
        issuer: "R Consortium",
        year: "2023",
        link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view",
        skills: ["R", "Statistical Computing", "ggplot2", "Data Viz"],
        appliedIn: "Statistical analysis and visualization",
        image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-"
      }
    ],
    
    "Data Science": [
      {
        title: "Data Science",
        issuer: "Data Science Institute",
        year: "2024",
        link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view",
        skills: ["Python", "Pandas", "NumPy", "Data Analysis"],
        appliedIn: "Career path recommendation ML pipeline",
        image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv"
      }
    ]
  }
};

const domainIcons = {
  "Web Development": Code2,
  "Cloud & DevOps": Cloud,
  "AI & Machine Learning": Brain,
  "Programming & Foundations": Terminal,
  "Data Science": Database
};

export default function Certifications() {
  const [expandedDomain, setExpandedDomain] = useState("Web Development");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap');
        
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

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        .section-header {
          margin-bottom: 3rem;
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
          font-family: 'Manrope', sans-serif;
          font-size: clamp(2rem, 4vw, 2.75rem);
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .section-desc {
          font-size: 1.0625rem;
          color: #94a3b8;
          max-width: 700px;
        }

        .featured-section {
          margin-bottom: 4rem;
        }

        .featured-label {
          font-size: 1rem;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 768px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }
        }

        .featured-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          padding: 1.75rem;
          transition: all 200ms ease;
        }

        .featured-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .cert-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .cert-title {
          font-family: 'Manrope', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.375rem;
        }

        .cert-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: #64748b;
          margin-bottom: 0.75rem;
        }

        .cert-meta-item {
          display: flex;
          align-items: center;
          gap: 0.375rem;
        }

        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          padding: 0.25rem 0.625rem;
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 4px;
          color: #22c55e;
          font-size: 0.75rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .skill-badge {
          padding: 0.375rem 0.75rem;
          background: rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(148, 163, 184, 0.15);
          border-radius: 6px;
          font-size: 0.8125rem;
          color: #cbd5e1;
          font-weight: 500;
        }

        .applied-section {
          padding: 1rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.15);
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .applied-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.375rem;
        }

        .applied-text {
          font-size: 0.9375rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .view-cert-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 6px;
          color: #3b82f6;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 200ms ease;
        }

        .view-cert-btn:hover {
          background: rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
        }

        .domains-section {
          margin-bottom: 4rem;
        }

        .domain-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 10px;
          margin-bottom: 1.5rem;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .domain-header:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(148, 163, 184, 0.2);
        }

        .domain-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 8px;
          flex-shrink: 0;
        }

        .domain-info {
          flex: 1;
        }

        .domain-name {
          font-family: 'Manrope', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.25rem;
        }

        .domain-count {
          font-size: 0.875rem;
          color: #64748b;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }

        .cert-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 10px;
          padding: 1.5rem;
          transition: all 200ms ease;
        }

        .cert-card:hover {
          border-color: rgba(148, 163, 184, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

      <div style={{ minHeight: '100vh', background: '#0f1117' }}>
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <span className="section-label">Professional Development</span>
            <h1 className="section-title">Certifications</h1>
            <p className="section-desc">
              Industry-recognized credentials validating technical expertise across web development, cloud infrastructure, and machine learning.
            </p>
          </div>

          {/* Featured Certifications */}
          <div className="featured-section">
            <div className="featured-label">
              <Award size={18} style={{ color: '#3b82f6' }} />
              Most Relevant to Current Role Focus
            </div>
            
            <div className="featured-grid">
              {certificationsData.featured.map((cert) => (
                <div key={cert.id} className="featured-card">
                  <div className="cert-header">
                    <div style={{ flex: 1 }}>
                      <h3 className="cert-title">{cert.title}</h3>
                      <div className="cert-meta">
                        <span className="cert-meta-item">
                          {cert.issuer}
                        </span>
                        <span>•</span>
                        <span className="cert-meta-item">
                          <Calendar size={14} />
                          {cert.year}
                        </span>
                      </div>
                    </div>
                    {cert.verified && (
                      <div className="verified-badge">
                        <CheckCircle size={12} />
                        Verified
                      </div>
                    )}
                  </div>

                  <div className="skills-list">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="skill-badge">{skill}</span>
                    ))}
                  </div>

                  <div className="applied-section">
                    <div className="applied-label">Applied Knowledge In</div>
                    <div className="applied-text">{cert.appliedIn}</div>
                  </div>

                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-cert-btn"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* All Certifications by Domain */}
          <div className="domains-section">
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 700, 
                color: '#f1f5f9', 
                marginBottom: '0.5rem',
                fontFamily: "'Manrope', sans-serif"
              }}>
                All Certifications
              </h2>
              <p style={{ fontSize: '0.9375rem', color: '#94a3b8' }}>
                Grouped by technical domain
              </p>
            </div>

            {Object.entries(certificationsData.domains).map(([domain, certs]) => {
              const Icon = domainIcons[domain];
              const isExpanded = expandedDomain === domain;
              
              return (
                <div key={domain} style={{ marginBottom: '2rem' }}>
                  <div 
                    className="domain-header"
                    onClick={() => setExpandedDomain(isExpanded ? null : domain)}
                  >
                    <div className="domain-icon">
                      <Icon size={20} style={{ color: '#3b82f6' }} />
                    </div>
                    <div className="domain-info">
                      <div className="domain-name">{domain}</div>
                      <div className="domain-count">
                        {certs.length} {certs.length === 1 ? 'certification' : 'certifications'}
                      </div>
                    </div>
                    <div style={{ 
                      transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 200ms ease',
                      color: '#64748b'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="certs-grid">
                      {certs.map((cert, idx) => (
                        <div key={idx} className="cert-card">
                          <h4 className="cert-title" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>
                            {cert.title}
                          </h4>
                          
                          <div className="cert-meta" style={{ marginBottom: '1rem' }}>
                            <span>{cert.issuer}</span>
                            <span>•</span>
                            <span className="cert-meta-item">
                              <Calendar size={14} />
                              {cert.year}
                            </span>
                          </div>

                          <div className="skills-list" style={{ marginBottom: '1rem' }}>
                            {cert.skills.map((skill, i) => (
                              <span key={i} className="skill-badge" style={{ fontSize: '0.75rem', padding: '0.3rem 0.625rem' }}>
                                {skill}
                              </span>
                            ))}
                          </div>

                          <div style={{ 
                            padding: '0.875rem', 
                            background: 'rgba(148, 163, 184, 0.05)', 
                            border: '1px solid rgba(148, 163, 184, 0.1)',
                            borderRadius: '6px',
                            marginBottom: '1rem'
                          }}>
                            <div className="applied-label">Applied In</div>
                            <div style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                              {cert.appliedIn}
                            </div>
                          </div>

                          <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="view-cert-btn"
                            style={{ width: '100%', justifyContent: 'center' }}
                          >
                            <ExternalLink size={14} />
                            View Credential
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Summary Footer */}
          <div style={{ 
            marginTop: '4rem',
            padding: '2.5rem',
            background: 'rgba(59, 130, 246, 0.05)',
            border: '1px solid rgba(59, 130, 246, 0.15)',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <div style={{ 
              fontSize: '1.25rem', 
              fontWeight: 700, 
              color: '#f1f5f9', 
              marginBottom: '0.5rem',
              fontFamily: "'Manrope', sans-serif"
            }}>
              {Object.values(certificationsData.domains).reduce((sum, certs) => sum + certs.length, 0)} Total Certifications
            </div>
            <div style={{ 
              fontSize: '0.9375rem', 
              color: '#94a3b8' 
            }}>
              Validated expertise applied across production applications
            </div>
          </div>
        </div>
      </div>
    </>
  );
}