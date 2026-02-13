"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Cpu, Brain, Cloud, Shield, Network, Terminal,
  Github, ExternalLink, ChevronRight, X, ArrowUpRight,
  CheckCircle2, Layers, Box, TrendingUp, Zap, Database
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS — WHITE BACKGROUND EXECUTIVE
═══════════════════════════════════════════════════════════════ */
const C = {
  bg: "#ffffff",
  surface: "#f9fafb",
  surface2: "#f3f4f6",
  surface3: "#e5e7eb",
  border: "rgba(0,0,0,0.06)",
  border2: "rgba(0,0,0,0.10)",
  border3: "rgba(0,0,0,0.14)",
  text: "#0f172a",
  muted: "#64748b",
  muted2: "#475569",
  accent: "#4f7fff",
  accentDim: "rgba(79,127,255,0.08)",
  green: "#10b981",
  greenDim: "rgba(16,185,129,0.08)",
  purple: "#a78bfa",
  purpleDim: "rgba(167,139,250,0.08)",
  amber: "#f59e0b",
  amberDim: "rgba(245,158,11,0.08)",
};

/* ═══════════════════════════════════════════════════════════════
   DATA — ENGINEERING CAPABILITY MATRIX
═══════════════════════════════════════════════════════════════ */
const CAPABILITIES = [
  {
    id: "fullstack",
    icon: Cpu,
    title: "Full-Stack Engineering",
    domain: "MERN Stack",
    depth: "Production",
    since: "2022",
    maturity: "Enterprise-ready",
    accent: C.accent,
    accentDim: C.accentDim,
    
    problemSpace: "End-to-end product development from database design to deployed user interfaces. Solving for complete ownership of web applications.",
    
    architecturalPatterns: [
      "MVC Architecture",
      "REST API Design",
      "JWT + OAuth 2.0",
      "Server-Side Rendering",
      "Client-Side State Management",
      "Database Schema Design",
    ],
    
    engineeringFocus: [
      "API architecture & endpoint design",
      "Authentication & session strategy",
      "MongoDB schema optimization",
      "Performance & caching layers",
      "Security best practices",
      "Deployment automation",
    ],
    
    tradeoffs: [
      { decision: "MongoDB vs PostgreSQL", rationale: "Chose MongoDB for flexible schema evolution in early-stage products" },
      { decision: "JWT vs Sessions", rationale: "JWT for stateless auth in distributed deployments" },
      { decision: "Monolith vs Microservices", rationale: "Started monolith, refactored to services at scale" },
      { decision: "Client vs Server State", rationale: "Redux for complex state, Context API for simple" },
    ],
    
    productionEvidence: {
      deployments: "5 production apps",
      users: "3,000+ active users",
      scale: "Multi-region AWS deployment",
      performance: "40% API latency reduction",
    },
    
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis", "JWT", "Tailwind CSS"],
    
    projects: [
      { name: "ATS Resume Builder", impact: "3k+ users, 2× hire improvement", tech: ["React", "Node.js", "MongoDB"] },
      { name: "AI Chat Workspace", impact: "Real-time collaboration", tech: ["WebSockets", "Redis", "Express"] },
      { name: "E-Commerce Platform", impact: "Payment integration", tech: ["Stripe", "MongoDB", "React"] },
    ],
  },
  
  {
    id: "aiml",
    icon: Brain,
    title: "Machine Learning Engineering",
    domain: "AI / ML",
    depth: "Applied",
    since: "2023",
    maturity: "Production-deployed",
    accent: C.purple,
    accentDim: C.purpleDim,
    
    problemSpace: "Building ML systems that solve real business problems, not just achieving notebook accuracy. Focus on model reliability and production pipelines.",
    
    architecturalPatterns: [
      "ETL Pipelines",
      "Feature Engineering",
      "Model Versioning",
      "A/B Testing Framework",
      "Real-time Inference API",
      "Batch Prediction Jobs",
    ],
    
    engineeringFocus: [
      "Model training & evaluation",
      "Feature engineering pipelines",
      "Deployment & serving strategy",
      "Monitoring & drift detection",
      "Data validation & quality",
      "Model explainability (SHAP)",
    ],
    
    tradeoffs: [
      { decision: "Model Complexity vs Interpretability", rationale: "Chose simpler models where explainability matters (healthcare, finance)" },
      { decision: "Real-time vs Batch Inference", rationale: "Batch for cost efficiency, real-time only when latency critical" },
      { decision: "Cloud ML vs Self-hosted", rationale: "Self-hosted for cost control at scale" },
      { decision: "SQL vs NoSQL for Features", rationale: "PostgreSQL for structured features, Redis for real-time" },
    ],
    
    productionEvidence: {
      deployments: "6 ML models deployed",
      users: "Serving 1M+ predictions",
      scale: "95% accuracy on fake news detection",
      performance: "50ms inference latency",
    },
    
    stack: ["Python", "Scikit-learn", "TensorFlow", "FastAPI", "Pandas", "Docker", "MLflow"],
    
    projects: [
      { name: "Fake News Detector", impact: "95% accuracy, 1M+ articles", tech: ["TF-IDF", "Logistic Regression", "FastAPI"] },
      { name: "Price Prediction Engine", impact: "Real estate forecasting", tech: ["XGBoost", "Feature Engineering"] },
      { name: "Churn Detection System", impact: "SHAP explainability", tech: ["Scikit-learn", "Streamlit"] },
    ],
  },
  
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Architecture",
    domain: "DevOps / Infrastructure",
    depth: "Practitioner",
    since: "2023",
    maturity: "Production-grade",
    accent: C.green,
    accentDim: C.greenDim,
    
    problemSpace: "Building reliable, cost-efficient infrastructure that scales. Focus on reproducibility and automated deployments.",
    
    architecturalPatterns: [
      "Infrastructure as Code",
      "Blue-Green Deployment",
      "Load Balancing Strategy",
      "Container Orchestration",
      "CI/CD Pipelines",
      "Monitoring & Alerting",
    ],
    
    engineeringFocus: [
      "AWS service architecture",
      "Docker containerization",
      "CI/CD automation",
      "Cost optimization strategies",
      "Security group configuration",
      "Zero-downtime deployments",
    ],
    
    tradeoffs: [
      { decision: "EC2 vs Lambda", rationale: "EC2 for predictable workloads, Lambda for spiky traffic" },
      { decision: "Kubernetes vs Docker Compose", rationale: "Compose for simplicity until scale demands K8s" },
      { decision: "Multi-cloud vs Single Provider", rationale: "AWS-first for team expertise, avoid vendor lock-in complexity" },
      { decision: "Cost vs Availability", rationale: "Reserved instances for baseline, spot for batch jobs" },
    ],
    
    productionEvidence: {
      deployments: "7 cloud deployments",
      users: "Multi-region availability",
      scale: "99.9% uptime maintained",
      performance: "Auto-scaling enabled",
    },
    
    stack: ["AWS", "Docker", "Terraform", "GitHub Actions", "Nginx", "EC2", "S3"],
    
    projects: [
      { name: "Multi-region Infrastructure", impact: "Global deployment", tech: ["AWS", "Terraform", "ALB"] },
      { name: "CI/CD Pipeline", impact: "10min deploy time", tech: ["GitHub Actions", "Docker"] },
      { name: "Cost Optimization", impact: "40% cost reduction", tech: ["Reserved Instances", "Spot"] },
    ],
  },
  
  {
    id: "blockchain",
    icon: Network,
    title: "Blockchain Engineering",
    domain: "Web3",
    depth: "Builder",
    since: "2023",
    maturity: "Testnet-deployed",
    accent: C.amber,
    accentDim: C.amberDim,
    
    problemSpace: "Building decentralized applications and understanding protocol mechanics. Focus on smart contract security and DApp frontend integration.",
    
    architecturalPatterns: [
      "Smart Contract Design",
      "Gas Optimization",
      "Event-driven Architecture",
      "IPFS Storage Pattern",
      "Wallet Integration",
      "On-chain Governance",
    ],
    
    engineeringFocus: [
      "Solidity contract development",
      "Security audit practices",
      "Gas optimization techniques",
      "Web3.js / Ethers.js integration",
      "MetaMask wallet flow",
      "Hardhat testing framework",
    ],
    
    tradeoffs: [
      { decision: "Layer 1 vs Layer 2", rationale: "L2 (Polygon) for lower gas costs in production" },
      { decision: "On-chain vs Off-chain Storage", rationale: "IPFS for large data, only hashes on-chain" },
      { decision: "Upgradeable vs Immutable", rationale: "Proxy pattern for upgradeability with governance" },
      { decision: "ERC-20 vs ERC-721", rationale: "Token type depends on use case (fungible vs unique)" },
    ],
    
    productionEvidence: {
      deployments: "5 contracts on testnet",
      users: "NFT minting DApp",
      scale: "Gas-optimized contracts",
      performance: "Hardhat test coverage",
    },
    
    stack: ["Solidity", "Hardhat", "Ethers.js", "IPFS", "MetaMask", "OpenZeppelin", "React"],
    
    projects: [
      { name: "NFT Minting Platform", impact: "ERC-721 contract", tech: ["Solidity", "React", "IPFS"] },
      { name: "Decentralized Voting", impact: "On-chain governance", tech: ["Solidity", "Hardhat"] },
      { name: "Token Staking", impact: "DeFi yield simulation", tech: ["ERC-20", "Hardhat"] },
    ],
  },
  
  {
    id: "security",
    icon: Shield,
    title: "Security Engineering",
    domain: "Cybersecurity",
    depth: "Practitioner",
    since: "2023",
    maturity: "Applied",
    accent: "#ef4444",
    accentDim: "rgba(239,68,68,0.08)",
    
    problemSpace: "Building secure systems and identifying vulnerabilities. Applied in CTF environments and integrated into application design.",
    
    architecturalPatterns: [
      "Defense in Depth",
      "Zero Trust Architecture",
      "Secure by Default",
      "Rate Limiting Strategy",
      "Input Validation",
      "Security Monitoring",
    ],
    
    engineeringFocus: [
      "OWASP Top 10 mitigation",
      "Penetration testing techniques",
      "Secure authentication flows",
      "Network security analysis",
      "Vulnerability scanning",
      "Security audit practices",
    ],
    
    tradeoffs: [
      { decision: "Security vs Usability", rationale: "MFA where critical, passwordless where possible" },
      { decision: "Client vs Server Validation", rationale: "Both layers - never trust client" },
      { decision: "Encrypted vs Plaintext Logs", rationale: "Encrypt PII, plaintext for debugging" },
      { decision: "Rate Limit Strictness", rationale: "Aggressive on auth, lenient on public APIs" },
    ],
    
    productionEvidence: {
      deployments: "6 security projects",
      users: "15+ CTF challenges",
      scale: "Auth system hardening",
      performance: "Brute-force protection",
    },
    
    stack: ["Kali Linux", "Burp Suite", "Metasploit", "Wireshark", "Nmap", "OWASP ZAP"],
    
    projects: [
      { name: "Secure Auth System", impact: "JWT + rate limiting", tech: ["Node.js", "Redis"] },
      { name: "Vulnerability Scanner", impact: "Automated port analysis", tech: ["Python", "Nmap"] },
      { name: "CTF Write-ups", impact: "15+ challenges", tech: ["Web Exploitation", "Crypto"] },
    ],
  },
  
  {
    id: "vision",
    icon: Terminal,
    title: "Deep Learning",
    domain: "Computer Vision",
    depth: "Research-grade",
    since: "2023",
    maturity: "Applied",
    accent: "#6366f1",
    accentDim: "rgba(99,102,241,0.08)",
    
    problemSpace: "CNN architectures, transfer learning, and object detection for real-world image datasets - not toy demos.",
    
    architecturalPatterns: [
      "Transfer Learning",
      "Data Augmentation",
      "Model Compression",
      "Ensemble Methods",
      "Real-time Inference",
      "Active Learning",
    ],
    
    engineeringFocus: [
      "CNN architecture design",
      "Transfer learning strategies",
      "Data augmentation pipelines",
      "Model optimization (pruning)",
      "Real-time inference (YOLO)",
      "Deployment on edge devices",
    ],
    
    tradeoffs: [
      { decision: "Accuracy vs Speed", rationale: "MobileNet for edge, ResNet for accuracy-critical" },
      { decision: "Pre-trained vs Train from Scratch", rationale: "Transfer learning unless unique domain" },
      { decision: "Data Quantity vs Quality", rationale: "Quality annotations beat quantity" },
      { decision: "GPU vs CPU Inference", rationale: "GPU for batch, CPU for real-time edge" },
    ],
    
    productionEvidence: {
      deployments: "4 CV models",
      users: "Real-time detection",
      scale: "50k+ training images",
      performance: "30 FPS inference",
    },
    
    stack: ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "ResNet", "MobileNet"],
    
    projects: [
      { name: "Face Mask Detector", impact: "Real-time webcam", tech: ["MobileNetV2", "OpenCV"] },
      { name: "Plant Disease Classifier", impact: "50k+ leaf images", tech: ["CNN", "PyTorch"] },
      { name: "Object Counter", impact: "YOLO-based pipeline", tech: ["YOLOv5", "Python"] },
    ],
  },
];

const CROSS_DOMAIN = [
  {
    title: "Full Stack + AI",
    integration: "ML-backed SaaS Applications",
    example: "Resume builder with AI optimization, fake news detector API",
    value: "Combine web engineering with intelligent features",
  },
  {
    title: "Cloud + Security",
    integration: "Secure Deployment Pipelines",
    example: "Zero-trust infrastructure, encrypted secrets management",
    value: "Build security into infrastructure from day one",
  },
  {
    title: "Blockchain + Full Stack",
    integration: "Decentralized Applications",
    example: "NFT minting platform, DeFi staking interface",
    value: "Bridge Web2 UX with Web3 functionality",
  },
  {
    title: "AI + Cloud",
    integration: "ML Model Deployment",
    example: "Scalable inference APIs, containerized model serving",
    value: "Deploy ML models to production at scale",
  },
];

const PHILOSOPHY = [
  {
    principle: "Build for clarity before scale",
    rationale: "Premature optimization is the root of all evil. Start simple, measure, then optimize.",
  },
  {
    principle: "Secure by default",
    rationale: "Security is not a feature to add later - it's a foundation to build upon.",
  },
  {
    principle: "Measure everything",
    rationale: "You can't improve what you don't measure. Instrumentation enables informed decisions.",
  },
  {
    principle: "Optimize only after profiling",
    rationale: "Guessing where bottlenecks are wastes time. Profile first, then optimize hotspots.",
  },
];

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
═══════════════════════════════════════════════════════════════ */
function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("[data-hover]");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "32px" : "8px",
          height: isHovering ? "32px" : "8px",
          borderRadius: "50%",
          background: isHovering ? "transparent" : C.accent,
          border: isHovering ? `2px solid ${C.accent}` : "none",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, border 0.2s ease",
          mixBlendMode: "difference",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? "64px" : "48px",
          height: isHovering ? "64px" : "48px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.accent}15 0%, transparent 70%)`,
          pointerEvents: "none",
          zIndex: 9999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease",
        }}
      />
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL PROGRESS
═══════════════════════════════════════════════════════════════ */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: C.surface2,
        zIndex: 9998,
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${C.accent}, ${C.purple}, ${C.green})`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════════════════ */
function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const numericValue = parseInt(value.toString().replace(/[^0-9]/g, "")) || 0;
          const start = 0;
          const end = numericValue;
          const startTime = Date.now();

          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * eased));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          animate();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  const formatCount = (num) => {
    if (value.toString().includes("+")) {
      return `${num}+`;
    }
    return num.toString();
  };

  return <span ref={ref}>{formatCount(count)}</span>;
}

/* ═══════════════════════════════════════════════════════════════
   CAPABILITY CARD
═══════════════════════════════════════════════════════════════ */
function CapabilityCard({ capability, index, onClick }) {
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const Icon = capability.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-hover
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(capability)}
      style={{
        background: C.surface,
        border: `1px solid ${hovered ? capability.accent + "40" : C.border}`,
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.08)" : "0 4px 16px rgba(0,0,0,0.04)",
        opacity: inView ? 1 : 0,
        animation: inView ? `cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 0.1}s both` : "none",
      }}
    >
      {/* Top accent */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${capability.accent}, transparent)`,
        }}
      />

      <div style={{ padding: "2rem" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: capability.accentDim,
              border: `1px solid ${capability.accent}30`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            <Icon size={26} style={{ color: capability.accent }} />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                padding: "0.4rem 0.9rem",
                background: C.greenDim,
                border: `1px solid ${C.green}30`,
                borderRadius: "6px",
                fontSize: "0.7rem",
                fontWeight: 700,
                color: C.green,
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {capability.depth}
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                color: C.muted,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              Since {capability.since}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "1.5rem",
            fontWeight: 400,
            color: C.text,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: "0.5rem",
          }}
        >
          {capability.title}
        </h3>

        <div
          style={{
            fontSize: "0.875rem",
            color: capability.accent,
            fontWeight: 600,
            marginBottom: "1.5rem",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {capability.domain}
        </div>

        {/* Problem space */}
        <p
          style={{
            fontSize: "0.9rem",
            color: C.muted2,
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}
        >
          {capability.problemSpace}
        </p>

        {/* Engineering focus preview */}
        <div
          style={{
            padding: "1.25rem",
            background: C.surface2,
            border: `1px solid ${C.border}`,
            borderRadius: "10px",
            marginBottom: "1.5rem",
          }}
        >
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              color: C.muted,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
              marginBottom: "0.75rem",
            }}
          >
            Primary Engineering Focus
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {capability.engineeringFocus.slice(0, 3).map((focus, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <ChevronRight size={14} style={{ color: capability.accent, flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: C.muted2,
                  }}
                >
                  {focus}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Production evidence */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.75rem",
            marginBottom: "1.5rem",
          }}
        >
          {Object.entries(capability.productionEvidence).slice(0, 2).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: "0.75rem",
                background: hovered ? capability.accentDim : C.surface2,
                border: `1px solid ${hovered ? capability.accent + "30" : C.border}`,
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: C.muted,
                  marginBottom: "0.25rem",
                  fontFamily: "'DM Mono', monospace",
                  textTransform: "uppercase",
                }}
              >
                {key}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: C.text,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        {/* View details */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "1rem",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <span
            style={{
              fontSize: "0.8rem",
              color: C.muted,
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {capability.projects.length} production projects
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: hovered ? capability.accent : C.muted,
              fontFamily: "'DM Mono', monospace",
              transition: "color 0.2s ease",
            }}
          >
            VIEW DETAILS
            <ArrowUpRight size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DETAIL PANEL
═══════════════════════════════════════════════════════════════ */
function DetailPanel({ capability, onClose }) {
  const [open, setOpen] = useState(false);
  const Icon = capability.icon;

  useEffect(() => {
    const raf = requestAnimationFrame(() => setOpen(true));
    const esc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(8px)",
        opacity: open ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "min(680px, 100vw)",
          background: C.bg,
          borderLeft: `1px solid ${C.border2}`,
          display: "flex",
          flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(40px)",
          opacity: open ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
          overflowY: "auto",
        }}
      >
        {/* Top accent */}
        <div
          style={{
            height: "3px",
            background: `linear-gradient(90deg, ${capability.accent}, transparent)`,
          }}
        />

        {/* Header */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            background: C.bg,
            borderBottom: `1px solid ${C.border}`,
            padding: "2rem 2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: capability.accentDim,
                border: `1px solid ${capability.accent}40`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Icon size={24} style={{ color: capability.accent }} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: C.muted,
                  fontFamily: "'DM Mono', monospace",
                  marginBottom: "0.25rem",
                }}
              >
                {capability.domain}
              </div>
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: C.text,
                  letterSpacing: "-0.02em",
                }}
              >
                {capability.title}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            data-hover
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              border: `1px solid ${C.border}`,
              background: "transparent",
              color: C.muted,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.border3;
              e.currentTarget.style.color = C.text;
              e.currentTarget.style.background = C.surface;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.border;
              e.currentTarget.style.color = C.muted;
              e.currentTarget.style.background = "transparent";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {/* Meta grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {[
              { label: "Depth", value: capability.depth },
              { label: "Since", value: capability.since },
              { label: "Maturity", value: capability.maturity },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "1.25rem",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: C.muted,
                    marginBottom: "0.5rem",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: C.text,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Problem Space */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <Box size={16} style={{ color: capability.accent }} />
              <h4
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Problem Space
              </h4>
            </div>
            <p
              style={{
                fontSize: "1rem",
                color: C.muted2,
                lineHeight: 1.8,
                paddingLeft: "2rem",
                borderLeft: `2px solid ${capability.accent}40`,
              }}
            >
              {capability.problemSpace}
            </p>
          </div>

          {/* Architectural Patterns */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <Layers size={16} style={{ color: capability.accent }} />
              <h4
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Architectural Patterns Used
              </h4>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "0.75rem",
              }}
            >
              {capability.architecturalPatterns.map((pattern) => (
                <div
                  key={pattern}
                  style={{
                    padding: "0.875rem 1rem",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "8px",
                    fontSize: "0.85rem",
                    color: C.muted2,
                    fontWeight: 500,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = capability.accentDim;
                    e.currentTarget.style.borderColor = capability.accent + "40";
                    e.currentTarget.style.color = C.text;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = C.surface;
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.color = C.muted2;
                  }}
                >
                  {pattern}
                </div>
              ))}
            </div>
          </div>

          {/* Tradeoffs Managed */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <TrendingUp size={16} style={{ color: capability.accent }} />
              <h4
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Tradeoffs Managed
              </h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {capability.tradeoffs.map((tradeoff, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.25rem",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {tradeoff.decision}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: C.muted2,
                      lineHeight: 1.6,
                    }}
                  >
                    {tradeoff.rationale}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Production Evidence */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <CheckCircle2 size={16} style={{ color: capability.accent }} />
              <h4
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Production Evidence
              </h4>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1rem",
              }}
            >
              {Object.entries(capability.productionEvidence).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    padding: "1.25rem",
                    background: capability.accentDim,
                    border: `1px solid ${capability.accent}30`,
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: C.muted,
                      marginBottom: "0.5rem",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {key}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: capability.accent,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1rem",
              }}
            >
              <Database size={16} style={{ color: capability.accent }} />
              <h4
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: C.muted,
                }}
              >
                Production Projects
              </h4>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {capability.projects.map((project, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1.5rem",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: "10px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = capability.accent + "40";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: C.text,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {project.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: C.muted2,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.impact}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: "0.35rem 0.75rem",
                          background: C.surface2,
                          border: `1px solid ${C.border}`,
                          borderRadius: "6px",
                          fontSize: "0.75rem",
                          color: C.muted2,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <a
            href="https://github.com/bhagavan444"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              padding: "1.125rem",
              background: C.surface,
              border: `1px solid ${C.border2}`,
              borderRadius: "10px",
              color: C.text,
              textDecoration: "none",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = capability.accentDim;
              e.currentTarget.style.borderColor = capability.accent + "40";
              e.currentTarget.style.color = capability.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = C.surface;
              e.currentTarget.style.borderColor = C.border2;
              e.currentTarget.style.color = C.text;
            }}
          >
            <Github size={18} />
            VIEW ON GITHUB
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Workshops() {
  const [activeCapability, setActiveCapability] = useState(null);
  const [headerInView, setHeaderInView] = useState(false);
  const [metricsInView, setMetricsInView] = useState(false);
  const [gridInView, setGridInView] = useState(false);
  const [crossDomainInView, setCrossDomainInView] = useState(false);
  const [philosophyInView, setPhilosophyInView] = useState(false);

  const headerRef = useRef(null);
  const metricsRef = useRef(null);
  const gridRef = useRef(null);
  const crossDomainRef = useRef(null);
  const philosophyRef = useRef(null);

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderInView },
      { ref: metricsRef, setter: setMetricsInView },
      { ref: gridRef, setter: setGridInView },
      { ref: crossDomainRef, setter: setCrossDomainInView },
      { ref: philosophyRef, setter: setPhilosophyInView },
    ];

    const observerInstances = observers.map(({ ref, setter }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setter(true);
        },
        { threshold: 0.2 }
      );
      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => observerInstances.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <>
      {/* ═══════ GLOBAL STYLES ═══════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500;600;700&family=Geist:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Geist', system-ui, sans-serif;
          background: ${C.bg};
          color: ${C.text};
          -webkit-font-smoothing: antialiased;
          cursor: none;
        }

        ::selection {
          background: ${C.accentDim};
          color: ${C.text};
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: ${C.bg};
        }

        ::-webkit-scrollbar-thumb {
          background: ${C.border3};
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${C.muted};
        }

        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 240px; }
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }

        @media (max-width: 1024px) {
          .capability-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .capability-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Background texture */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ═══════ PAGE WRAPPER ═══════ */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* ═══════ HERO HEADER ═══════ */}
        <header
          ref={headerRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "10rem 2rem 6rem",
            borderBottom: `1px solid ${C.border}`,
            position: "relative",
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          {/* Background glow */}
          <div
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "800px",
              height: "400px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${C.accent}08 0%, transparent 70%)`,
              filter: "blur(100px)",
              pointerEvents: "none",
            }}
          />

          {/* Overline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ width: "48px", height: "2px", background: C.accent }} />
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.accent,
              }}
            >
              Technical Depth · System-Level Thinking
            </span>
          </div>

          {/* Main headline - Two lines */}
          <div style={{ marginBottom: "1rem" }}>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 400,
                color: C.text,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              ENGINEERING
            </h1>
            <h1
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                fontWeight: 400,
                color: "transparent",
                WebkitTextStroke: `2px ${C.border3}`,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              CAPABILITIES
            </h1>
          </div>

          {/* Animated underline */}
          <div
            style={{
              width: "240px",
              height: "4px",
              background: `linear-gradient(90deg, ${C.accent}, ${C.purple}, ${C.green})`,
              borderRadius: "2px",
              marginBottom: "2.5rem",
              animation: headerInView ? "lineGrow 0.8s ease 0.2s both" : "none",
            }}
          />

          {/* Subheadline */}
          <p
            style={{
              fontSize: "1.25rem",
              color: C.muted2,
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            Production-ready systems across Full Stack, AI, Cloud and Security — built, deployed, and maintained.
          </p>
        </header>

        {/* ═══════ ENGINEERING METRICS BAR ═══════ */}
        <section
          ref={metricsRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "3rem 2rem",
            opacity: metricsInView ? 1 : 0,
            transform: metricsInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { value: "30+", label: "Production Systems", desc: "Deployed applications" },
              { value: "6", label: "Core Domains", desc: "Technical expertise areas" },
              { value: "12+", label: "Deployments", desc: "Cloud & containerized" },
              { value: "3", label: "Cloud Environments", desc: "AWS, Azure, GCP" },
              { value: "Active", label: "Open Source", desc: "GitHub contributions" },
            ].map((metric, i) => (
              <div
                key={i}
                style={{
                  padding: "1.5rem",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "12px",
                  textAlign: "center",
                  opacity: metricsInView ? 1 : 0,
                  transform: metricsInView ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease ${i * 0.1}s`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "2rem",
                    fontWeight: 400,
                    color: C.text,
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {typeof metric.value === "number" ? (
                    <AnimatedCounter value={metric.value} />
                  ) : (
                    metric.value
                  )}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: "0.25rem",
                  }}
                >
                  {metric.label}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: C.muted,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {metric.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ DOMAIN ARCHITECTURE GRID ═══════ */}
        <section
          ref={gridRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "6rem 2rem",
            borderTop: `1px solid ${C.border}`,
            opacity: gridInView ? 1 : 0,
            transform: gridInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: "1rem",
              }}
            >
              Engineering Capability Matrix
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 400,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              Domain Architecture
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: C.muted2,
                lineHeight: 1.8,
                maxWidth: "720px",
              }}
            >
              Each domain represents production-ready capabilities with architectural decisions,
              tradeoffs managed, and measurable outcomes.
            </p>
          </div>

          <div
            className="capability-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {CAPABILITIES.map((capability, i) => (
              <CapabilityCard
                key={capability.id}
                capability={capability}
                index={i}
                onClick={setActiveCapability}
              />
            ))}
          </div>
        </section>

        {/* ═══════ CROSS-DOMAIN INTEGRATION ═══════ */}
        <section
          ref={crossDomainRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "6rem 2rem",
            borderTop: `1px solid ${C.border}`,
            opacity: crossDomainInView ? 1 : 0,
            transform: crossDomainInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: "1rem",
              }}
            >
              Systems Thinking
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 400,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              Cross-Domain Engineering
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: C.muted2,
                lineHeight: 1.8,
                maxWidth: "720px",
              }}
            >
              Real engineering problems don't fit in boxes. These integrations show how domains
              connect to solve complex challenges.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {CROSS_DOMAIN.map((integration, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "16px",
                  transition: "all 0.3s ease",
                  opacity: crossDomainInView ? 1 : 0,
                  animation: crossDomainInView
                    ? `cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.accent + "40";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: C.accent,
                    marginBottom: "0.75rem",
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {integration.title}
                </div>
                <h3
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    color: C.text,
                    lineHeight: 1.3,
                    marginBottom: "1rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {integration.integration}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: C.muted2,
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {integration.example}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.8rem",
                    color: C.muted,
                    fontStyle: "italic",
                  }}
                >
                  <Zap size={14} style={{ color: C.accent }} />
                  {integration.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ ENGINEERING PHILOSOPHY ═══════ */}
        <section
          ref={philosophyRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "6rem 2rem 8rem",
            borderTop: `1px solid ${C.border}`,
            opacity: philosophyInView ? 1 : 0,
            transform: philosophyInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div style={{ marginBottom: "3rem" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: "1rem",
              }}
            >
              Engineering Mindset
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                fontWeight: 400,
                color: C.text,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              How I Approach Systems
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: C.muted2,
                lineHeight: 1.8,
                maxWidth: "720px",
              }}
            >
              Principles that guide technical decision-making and system design
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PHILOSOPHY.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "2rem",
                  background: `linear-gradient(135deg, ${C.accentDim} 0%, ${C.surface} 100%)`,
                  border: `1px solid ${C.border}`,
                  borderRadius: "16px",
                  opacity: philosophyInView ? 1 : 0,
                  animation: philosophyInView
                    ? `cardReveal 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s both`
                    : "none",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: C.accentDim,
                    border: `1px solid ${C.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <CheckCircle2 size={20} style={{ color: C.accent }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: C.text,
                    marginBottom: "0.75rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.principle}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: C.muted2,
                    lineHeight: 1.7,
                  }}
                >
                  {item.rationale}
                </p>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div
            style={{
              marginTop: "4rem",
              padding: "3rem",
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "1.75rem",
                fontWeight: 400,
                color: C.text,
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              All Implementations on GitHub
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: C.muted2,
                lineHeight: 1.8,
                maxWidth: "560px",
                margin: "0 auto 2rem",
              }}
            >
              Source code, deployment configs, and production evidence — not just descriptions.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <a
                href="https://github.com/bhagavan444"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 2rem",
                  background: C.accent,
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontFamily: "'Geist', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 28px rgba(79,127,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Github size={18} />
                VIEW GITHUB
              </a>
              <a
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                data-hover
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 2rem",
                  background: "transparent",
                  border: `2px solid ${C.border2}`,
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: C.text,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  fontFamily: "'Geist', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C.border3;
                  e.currentTarget.style.background = C.surface;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = C.border2;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                GET IN TOUCH
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Detail Panel */}
      {activeCapability && (
        <DetailPanel capability={activeCapability} onClose={() => setActiveCapability(null)} />
      )}
    </>
  );
}