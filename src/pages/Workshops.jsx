import { useState, useEffect, useRef } from "react";
import {
  Cpu, Brain, Microscope, Cloud, Network, Shield,
  Github, ExternalLink, ChevronRight, X, Terminal,
  Code2, Layers, Boxes, ArrowUpRight, FolderOpen, Search
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────────────────────────────────────
const T = {
  bg:       "#0a0c12",
  surface:  "#0f1119",
  raised:   "#151821",
  overlay:  "#1a1e2e",
  border:   "rgba(255,255,255,0.06)",
  borderMd: "rgba(255,255,255,0.10)",
  borderHi: "rgba(255,255,255,0.18)",
  ink:      "#e4e7f0",
  inkSub:   "#7880a0",
  inkMute:  "#424760",
  inkFaint: "#252838",
  // Accent palette — one per skill domain
  accents: {
    fullstack:  { hex: "#38bdf8", rgb: "56,189,248"   },
    aiml:       { hex: "#a78bfa", rgb: "167,139,250"  },
    vision:     { hex: "#60a5fa", rgb: "96,165,250"   },
    cloud:      { hex: "#34d399", rgb: "52,211,153"   },
    blockchain: { hex: "#fb923c", rgb: "251,146,60"   },
    security:   { hex: "#f87171", rgb: "248,113,113"  },
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// SKILL DATA
// ─────────────────────────────────────────────────────────────────────────────
const SKILLS = [
  {
    id: "fullstack",
    icon: Cpu,
    title: "MERN Stack Development",
    domain: "Full Stack",
    depth: "Production",
    since: "2022",
    proficiency: 88,
    summary: "End-to-end web engineering — from database schema design to deployed React frontends. Built and shipped complete products across client and server.",
    stack: ["React.js", "Node.js", "Express", "MongoDB", "REST API", "Tailwind CSS", "JWT Auth"],
    projects: [
      { name: "AI-Powered Task Manager", desc: "Full-stack SaaS with real-time updates, role-based auth and MongoDB Atlas", link: "#" },
      { name: "E-Commerce Platform", desc: "Production MERN app with payment integration, inventory and admin dashboard", link: "#" },
      { name: "Social Dev Network", desc: "Developer community platform with profiles, posts, and GitHub integration", link: "#" },
      { name: "Real-Time Chat App", desc: "WebSocket-powered messaging system with rooms and message history", link: "#" },
      { name: "Portfolio CMS", desc: "Headless content management system with custom API layer", link: "#" },
    ],
    evidence: "5 production deployments · Vercel, Railway & AWS",
    github: "https://github.com/bhagavan444",
  },
  {
    id: "aiml",
    icon: Brain,
    title: "Machine Learning & AI",
    domain: "AI / ML",
    depth: "Applied",
    since: "2023",
    proficiency: 82,
    summary: "Applied ML across classification, regression, NLP and recommendation systems. Focus on model reliability and deployment pipelines, not just notebook accuracy.",
    stack: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy", "FastAPI", "Streamlit"],
    projects: [
      { name: "Sentiment Analysis API", desc: "NLP pipeline for product review classification — deployed as a REST service", link: "#" },
      { name: "Price Prediction Engine", desc: "Gradient boosted model for real estate with feature engineering and explainability", link: "#" },
      { name: "Churn Detection System", desc: "Logistic regression + SHAP explanations for a subscription analytics demo", link: "#" },
      { name: "Movie Recommendation Engine", desc: "Collaborative filtering using cosine similarity on the MovieLens dataset", link: "#" },
      { name: "Crop Yield Forecaster", desc: "Time-series ML model with agricultural datasets and seasonal features", link: "#" },
      { name: "Spam Filter Model", desc: "Naive Bayes + TF-IDF pipeline with 97% precision on email classification", link: "#" },
    ],
    evidence: "6 models trained on real datasets · FastAPI deployments",
    github: "https://github.com/bhagavan444",
  },
  {
    id: "vision",
    icon: Microscope,
    title: "Deep Learning & Computer Vision",
    domain: "Deep Learning",
    depth: "Research-grade",
    since: "2023",
    proficiency: 78,
    summary: "CNN architectures, transfer learning and object detection pipelines. Applied to real image datasets — not toy demos.",
    stack: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "YOLO", "ResNet", "Albumentations"],
    projects: [
      { name: "Face Mask Detector", desc: "Real-time detection using MobileNetV2 with OpenCV webcam stream", link: "#" },
      { name: "Plant Disease Classifier", desc: "CNN trained on 50k+ leaf images for agricultural disease identification", link: "#" },
      { name: "Object Counter System", desc: "YOLOv5-based pipeline to count inventory items from warehouse footage", link: "#" },
      { name: "Signature Verifier", desc: "Siamese network for verifying handwritten signatures on documents", link: "#" },
    ],
    evidence: "4 CV models · YOLO, ResNet, MobileNet architectures",
    github: "https://github.com/bhagavan444",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud Architecture & DevOps",
    domain: "Cloud / DevOps",
    depth: "Practitioner",
    since: "2023",
    proficiency: 75,
    summary: "Infrastructure-as-code, containerised deployments and CI/CD pipelines. Focus on reproducibility and cost-efficient architectures.",
    stack: ["AWS", "Docker", "GitHub Actions", "Nginx", "EC2", "S3", "Terraform"],
    projects: [
      { name: "CI/CD Pipeline Template", desc: "GitHub Actions workflow for Docker build, test, and EC2 deploy", link: "#" },
      { name: "Containerised ML API", desc: "FastAPI model server Dockerised and deployed with Nginx reverse proxy", link: "#" },
      { name: "S3-Backed File Storage", desc: "Presigned URL upload system with lifecycle policies and CDN integration", link: "#" },
      { name: "Terraform AWS Infra", desc: "Modular IaC setup for VPC, security groups, EC2 and RDS provisioning", link: "#" },
      { name: "Zero-Downtime Deploy", desc: "Blue-green deployment strategy on EC2 using ALB and target groups", link: "#" },
      { name: "Log Aggregation Stack", desc: "CloudWatch + Lambda-based alerting pipeline for production error monitoring", link: "#" },
      { name: "Cost Optimisation Audit", desc: "Reserved instance analysis and right-sizing report for dev environments", link: "#" },
    ],
    evidence: "7 cloud deployments · AWS Certified Cloud Practitioner",
    github: "https://github.com/bhagavan444",
  },
  {
    id: "blockchain",
    icon: Network,
    title: "Blockchain & Web3",
    domain: "Web3",
    depth: "Builder",
    since: "2023",
    proficiency: 70,
    summary: "Smart contract development and decentralised app frontends. Focused on understanding protocol mechanics and building functional DApp prototypes.",
    stack: ["Solidity", "Hardhat", "Ethers.js", "Web3.js", "IPFS", "MetaMask", "OpenZeppelin"],
    projects: [
      { name: "ERC-20 Token Contract", desc: "Custom token with mint/burn, allowance logic and Hardhat test suite", link: "#" },
      { name: "NFT Minting DApp", desc: "ERC-721 contract + React frontend with MetaMask wallet connection", link: "#" },
      { name: "Decentralised Voting", desc: "On-chain governance contract with delegate, proposal, and vote logic", link: "#" },
      { name: "DeFi Yield Simulator", desc: "Staking contract simulation with reward rate calculation on testnet", link: "#" },
      { name: "IPFS File Storage DApp", desc: "Decentralised file uploader storing hashes on-chain via Filecoin gateway", link: "#" },
    ],
    evidence: "5 contracts deployed on Sepolia testnet",
    github: "https://github.com/bhagavan444",
  },
  {
    id: "security",
    icon: Shield,
    title: "Cybersecurity & Ethical Hacking",
    domain: "Security",
    depth: "Practitioner",
    since: "2023",
    proficiency: 73,
    summary: "Offensive security fundamentals, network analysis and secure software practices. Applied in CTF environments and integrated into application design.",
    stack: ["Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "Nmap", "OWASP", "Cryptography"],
    projects: [
      { name: "CTF Write-Ups (15+)", desc: "Documented challenge solutions across web exploitation, crypto, and forensics", link: "#" },
      { name: "Vulnerability Scanner CLI", desc: "Python tool using Nmap bindings for automated port and service analysis", link: "#" },
      { name: "Secure Auth Implementation", desc: "JWT + refresh token system with rate limiting and brute-force protection", link: "#" },
      { name: "SQL Injection Demo Lab", desc: "Intentionally vulnerable Flask app and corresponding secure refactor", link: "#" },
      { name: "Network Packet Analyser", desc: "Wireshark-based lab capturing and decoding HTTP and DNS traffic patterns", link: "#" },
      { name: "OWASP Top 10 Audit", desc: "Manual security review checklist applied to a portfolio web application", link: "#" },
    ],
    evidence: "6 security projects · 15+ CTF challenges solved",
    github: "https://github.com/bhagavan444",
  },
];

const DOMAINS = ["All", "Full Stack", "AI / ML", "Deep Learning", "Cloud / DevOps", "Web3", "Security"];

// ─────────────────────────────────────────────────────────────────────────────
// DEPTH BADGE COLOURS
// ─────────────────────────────────────────────────────────────────────────────
const depthColor = (d) => ({
  "Production":      { bg: "rgba(52,211,153,0.10)", border: "rgba(52,211,153,0.25)", text: "#34d399" },
  "Applied":         { bg: "rgba(96,165,250,0.10)",  border: "rgba(96,165,250,0.25)",  text: "#60a5fa" },
  "Research-grade":  { bg: "rgba(167,139,250,0.10)", border: "rgba(167,139,250,0.25)", text: "#a78bfa" },
  "Practitioner":    { bg: "rgba(251,146,60,0.10)",  border: "rgba(251,146,60,0.25)",  text: "#fb923c" },
  "Builder":         { bg: "rgba(248,113,113,0.10)", border: "rgba(248,113,113,0.25)", text: "#f87171" },
}[d] || { bg: "rgba(255,255,255,0.06)", border: T.borderMd, text: T.inkSub });

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

// ─────────────────────────────────────────────────────────────────────────────
// PROFICIENCY BAR
// ─────────────────────────────────────────────────────────────────────────────
function ProfBar({ pct, color }) {
  const [ref, vis] = useInView(0.2);
  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ flex: 1, height: "3px", background: T.border, borderRadius: "2px", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: "2px",
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
          width: vis ? `${pct}%` : "0%",
          transition: "width 900ms cubic-bezier(0.22,1,0.36,1) 150ms",
        }} />
      </div>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T.inkMute, flexShrink: 0, width: "32px", textAlign: "right" }}>
        {vis ? `${pct}%` : "—"}
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILL CARD
// ─────────────────────────────────────────────────────────────────────────────
function SkillCard({ skill, idx, onOpen }) {
  const [ref, vis] = useInView();
  const [hov, setHov] = useState(false);
  const acc = T.accents[skill.id];
  const dc = depthColor(skill.depth);
  const Icon = skill.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(skill)}
      style={{
        position: "relative",
        background: T.surface,
        border: `1px solid ${hov ? `rgba(${acc.rgb},0.30)` : T.border}`,
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 280ms cubic-bezier(0.22,1,0.36,1)",
        transform: vis ? `translateY(${hov ? "-4px" : "0"})` : "translateY(24px)",
        opacity: vis ? 1 : 0,
        transitionDelay: `${idx * 70}ms`,
        boxShadow: hov ? `0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px rgba(${acc.rgb},0.12)` : "none",
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${acc.hex}, transparent 70%)`,
        opacity: hov ? 1 : 0.4, transition: "opacity 280ms",
      }} />

      {/* Card header */}
      <div style={{
        padding: "22px 22px 16px",
        background: hov ? `linear-gradient(135deg, rgba(${acc.rgb},0.05) 0%, transparent 60%)` : "transparent",
        transition: "background 280ms",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "14px" }}>
          {/* Icon */}
          <div style={{
            width: "44px", height: "44px", borderRadius: "10px",
            background: T.raised,
            border: `1px solid ${hov ? `rgba(${acc.rgb},0.3)` : T.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "all 280ms",
            boxShadow: hov ? `0 0 20px rgba(${acc.rgb},0.2)` : "none",
          }}>
            <Icon size={22} color={acc.hex} />
          </div>

          {/* Depth + domain badges */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <span style={{
              padding: "3px 9px", borderRadius: "4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px", letterSpacing: "0.5px",
              background: dc.bg, border: `1px solid ${dc.border}`, color: dc.text,
            }}>{skill.depth}</span>
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "18px", fontWeight: 800,
          color: T.ink, letterSpacing: "-0.3px",
          lineHeight: 1.2, margin: "0 0 6px",
        }}>
          {skill.title}
        </h3>

        {/* Domain + since */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px", color: acc.hex, letterSpacing: "0.5px",
          }}>{skill.domain}</span>
          <span style={{ color: T.inkFaint, fontSize: "12px" }}>·</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T.inkMute }}>
            since {skill.since}
          </span>
        </div>

        {/* Proficiency */}
        <div style={{ marginBottom: "14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: T.inkMute, textTransform: "uppercase" }}>
              Proficiency
            </span>
          </div>
          <ProfBar pct={skill.proficiency} color={acc.hex} />
        </div>

        {/* Summary */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13px", lineHeight: 1.7,
          color: T.inkSub, margin: "0 0 16px",
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {skill.summary}
        </p>

        {/* Evidence tag */}
        <div style={{
          display: "flex", alignItems: "center", gap: "7px",
          padding: "8px 12px", borderRadius: "7px",
          background: T.raised, border: `1px solid ${T.border}`,
          marginBottom: "16px",
        }}>
          <FolderOpen size={13} color={acc.hex} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: T.inkSub, letterSpacing: "0.3px" }}>
            {skill.evidence}
          </span>
        </div>

        {/* Stack chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "16px" }}>
          {skill.stack.slice(0, 5).map(s => (
            <span key={s} style={{
              padding: "3px 9px", borderRadius: "4px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: T.inkSub, background: T.raised,
              border: `1px solid ${T.border}`,
            }}>{s}</span>
          ))}
          {skill.stack.length > 5 && (
            <span style={{ padding: "3px 9px", borderRadius: "4px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T.inkMute, background: T.raised, border: `1px solid ${T.border}` }}>
              +{skill.stack.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card footer */}
      <div style={{
        padding: "14px 22px",
        borderTop: `1px solid ${T.border}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px", color: T.inkMute,
        }}>
          {skill.projects.length} projects
        </span>
        <div style={{
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase",
          color: hov ? acc.hex : T.inkMute,
          transition: "color 200ms",
        }}>
          VIEW PROJECTS
          <ChevronRight size={13} />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DETAIL DRAWER
// ─────────────────────────────────────────────────────────────────────────────
function Drawer({ skill, onClose }) {
  const [open, setOpen] = useState(false);
  const acc = T.accents[skill.id];
  const dc = depthColor(skill.depth);
  const Icon = skill.icon;

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
        position: "fixed", inset: 0, zIndex: 9000,
        background: "rgba(5,6,10,0.82)",
        backdropFilter: "blur(12px) saturate(0.7)",
        opacity: open ? 1 : 0, transition: "opacity 300ms ease",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(580px, 100vw)",
          background: T.surface,
          borderLeft: `1px solid ${T.borderMd}`,
          display: "flex", flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(40px)",
          opacity: open ? 1 : 0,
          transition: "transform 360ms cubic-bezier(0.22,1,0.36,1), opacity 300ms ease",
          overflowY: "auto",
        }}
      >
        {/* Accent top line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${acc.hex}, transparent 60%)` }} />

        {/* Header */}
        <div style={{
          position: "sticky", top: 0, zIndex: 10,
          background: T.surface, borderBottom: `1px solid ${T.border}`,
          padding: "20px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div style={{ width: "40px", height: "40px", borderRadius: "9px", background: T.raised, border: `1px solid rgba(${acc.rgb},0.28)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 0 16px rgba(${acc.rgb},0.18)` }}>
              <Icon size={20} color={acc.hex} />
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: T.inkMute, textTransform: "uppercase", marginBottom: "3px" }}>
                {skill.domain}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", fontWeight: 800, color: T.ink, letterSpacing: "-0.3px" }}>
                {skill.title}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ width: "34px", height: "34px", borderRadius: "8px", border: `1px solid ${T.border}`, background: "transparent", color: T.inkMute, cursor: "pointer", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 180ms" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHi; e.currentTarget.style.color = T.ink; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.inkMute; }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "28px" }}>

          {/* Meta row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: T.border, borderRadius: "10px", overflow: "hidden" }}>
            {[
              ["Depth", skill.depth, dc.text],
              ["Since", skill.since, acc.hex],
              ["Proficiency", `${skill.proficiency}%`, T.ink],
            ].map(([k, v, col]) => (
              <div key={k} style={{ background: T.raised, padding: "14px 16px" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "2.5px", color: T.inkMute, textTransform: "uppercase", marginBottom: "5px" }}>{k}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: col }}>{v}</div>
              </div>
            ))}
          </div>

          {/* Proficiency bar */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "3px", color: T.inkMute, textTransform: "uppercase", marginBottom: "10px" }}>Skill Depth</div>
            <ProfBar pct={skill.proficiency} color={acc.hex} />
          </div>

          {/* Summary */}
          <div style={{ borderLeft: `2px solid rgba(${acc.rgb},0.3)`, paddingLeft: "16px" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: T.inkSub, lineHeight: 1.8, margin: 0 }}>
              {skill.summary}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <Terminal size={13} color={acc.hex} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "3px", color: T.inkMute, textTransform: "uppercase" }}>Technologies Used</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {skill.stack.map(s => (
                <span key={s} style={{ padding: "5px 12px", borderRadius: "5px", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: acc.hex, background: `rgba(${acc.rgb},0.08)`, border: `1px solid rgba(${acc.rgb},0.22)` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
              <Boxes size={13} color={acc.hex} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "3px", color: T.inkMute, textTransform: "uppercase" }}>
                Projects Built · {skill.projects.length}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {skill.projects.map((p, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "flex-start", justifyContent: "space-between",
                    padding: "13px 15px",
                    background: T.raised, border: `1px solid ${T.border}`,
                    borderRadius: "8px", gap: "12px",
                    transition: "all 180ms", cursor: "default",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${acc.rgb},0.28)`; e.currentTarget.style.background = T.overlay; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.raised; }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: T.ink, marginBottom: "4px" }}>
                      {p.name}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: T.inkSub, lineHeight: 1.55 }}>
                      {p.desc}
                    </div>
                  </div>
                  <a
                    href={p.link} target="_blank" rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{ color: T.inkMute, flexShrink: 0, marginTop: "2px", transition: "color 150ms" }}
                    onMouseEnter={e => { e.currentTarget.style.color = acc.hex; }}
                    onMouseLeave={e => { e.currentTarget.style.color = T.inkMute; }}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <a
            href={skill.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "9px",
              padding: "14px", borderRadius: "8px",
              background: T.raised, border: `1px solid ${T.borderMd}`,
              color: T.inkSub, textDecoration: "none",
              fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "2px",
              transition: "all 200ms",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `rgba(${acc.rgb},0.10)`; e.currentTarget.style.borderColor = `rgba(${acc.rgb},0.30)`; e.currentTarget.style.color = acc.hex; }}
            onMouseLeave={e => { e.currentTarget.style.background = T.raised; e.currentTarget.style.borderColor = T.borderMd; e.currentTarget.style.color = T.inkSub; }}
          >
            <Github size={15} />
            EXPLORE ON GITHUB
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────────────────────
export default function Workshops() {
  const [active, setActive]   = useState(null);
  const [domain, setDomain]   = useState("All");
  const [search, setSearch]   = useState("");
  const [heroIn, setHeroIn]   = useState(false);

  useEffect(() => { const r = requestAnimationFrame(() => setHeroIn(true)); return () => cancelAnimationFrame(r); }, []);

  const filtered = SKILLS
    .filter(s => domain === "All" || s.domain === domain)
    .filter(s =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.stack.some(t => t.toLowerCase().includes(search.toLowerCase())) ||
      s.domain.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .ws-root *, .ws-root *::before, .ws-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .ws-root {
          background: #0a0c12;
          min-height: 100vh;
          font-family: 'DM Sans', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          color: #e4e7f0;
        }
        .ws-root ::-webkit-scrollbar { width: 3px; }
        .ws-root ::-webkit-scrollbar-track { background: transparent; }
        .ws-root ::-webkit-scrollbar-thumb { background: #252838; border-radius: 2px; }
        .ws-root input::placeholder { color: #424760; }

        @keyframes wsSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 900px) {
          .ws-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 620px) {
          .ws-inner { padding: 56px 18px 80px !important; }
          .ws-grid { grid-template-columns: 1fr !important; }
          .ws-hero-title { font-size: 38px !important; }
          .ws-hero-ghost { font-size: 38px !important; }
          .ws-summary-strip { flex-direction: column !important; gap: 14px !important; }
          .ws-summary-item { border-right: none !important; padding-right: 0 !important; margin-right: 0 !important; }
          .ws-filter-bar { justify-content: flex-start !important; overflow-x: auto; padding-bottom: 4px; flex-wrap: nowrap !important; }
        }
        @media (max-width: 420px) {
          .ws-inner { padding: 44px 14px 64px !important; }
          .ws-hero-title { font-size: 30px !important; }
          .ws-hero-ghost { font-size: 30px !important; }
        }
      `}</style>

      <div className="ws-root">
        <main className="ws-inner" style={{ maxWidth: "1180px", margin: "0 auto", padding: "108px 40px 112px" }}>

          {/* ── HERO ── */}
          <header style={{
            marginBottom: "72px",
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? "none" : "translateY(18px)",
            transition: "opacity 600ms ease, transform 600ms ease",
          }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
              <div style={{ display: "flex", gap: "4px" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#38bdf8" }} />
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#a78bfa" }} />
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#34d399" }} />
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "4px", color: T.inkMute, textTransform: "uppercase" }}>
                Portfolio · Technical Depth
              </span>
            </div>

            {/* Title stack */}
            <div style={{ marginBottom: "22px" }}>
              <div className="ws-hero-title" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(40px, 7vw, 78px)",
                fontWeight: 800, color: T.ink,
                letterSpacing: "-2.5px", lineHeight: 0.93, display: "block",
              }}>
                Technical
              </div>
              <div className="ws-hero-ghost" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(40px, 7vw, 78px)",
                fontWeight: 800, color: "transparent",
                letterSpacing: "-2.5px", lineHeight: 0.93,
                WebkitTextStroke: "1.5px #252838", display: "block",
              }}>
                Specializations
              </div>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", lineHeight: 1.8, color: T.inkSub, fontWeight: 400, maxWidth: "560px", margin: "0 0 36px" }}>
              Technologies I've mastered through hands-on projects — each domain backed by shipped code, not just coursework.
            </p>

            {/* Summary strip */}
            <div className="ws-summary-strip" style={{ display: "flex", borderTop: `1px solid ${T.border}`, paddingTop: "28px", flexWrap: "wrap" }}>
              {[
                ["6", "Skill Domains"],
                ["30+", "Projects Built"],
                ["Production", "Deployment Target"],
              ].map(([v, l], i) => (
                <div key={l} className="ws-summary-item" style={{ paddingRight: "32px", marginRight: "32px", borderRight: i < 2 ? `1px solid ${T.border}` : "none" }}>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", fontWeight: 700, color: T.ink, marginBottom: "3px", letterSpacing: "-0.2px" }}>{v}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "2px", color: T.inkMute, textTransform: "uppercase" }}>{l}</div>
                </div>
              ))}
            </div>
          </header>

          {/* ── SEARCH + FILTERS ── */}
          <div style={{
            marginBottom: "40px",
            opacity: heroIn ? 1 : 0,
            transition: "opacity 600ms ease 250ms",
          }}>
            {/* Search */}
            <div style={{ position: "relative", maxWidth: "460px", marginBottom: "20px" }}>
              <Search size={15} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: T.inkMute, pointerEvents: "none" }} />
              <input
                type="text"
                placeholder="Search skill or technology..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: "100%", padding: "10px 14px 10px 38px",
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: "8px",
                  color: T.ink, fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                  outline: "none", transition: "border-color 200ms",
                }}
                onFocus={e => { e.target.style.borderColor = T.borderMd; }}
                onBlur={e => { e.target.style.borderColor = T.border; }}
              />
            </div>

            {/* Domain filters */}
            <div className="ws-filter-bar" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {DOMAINS.map(d => {
                const isActive = domain === d;
                return (
                  <button
                    key={d}
                    onClick={() => setDomain(d)}
                    style={{
                      padding: "6px 14px", borderRadius: "6px",
                      border: `1px solid ${isActive ? T.borderHi : T.border}`,
                      background: isActive ? T.raised : "transparent",
                      color: isActive ? T.ink : T.inkMute,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px", letterSpacing: "1px",
                      cursor: "pointer", transition: "all 180ms", outline: "none",
                      flexShrink: 0,
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = T.borderMd; e.currentTarget.style.color = T.inkSub; } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.inkMute; } }}
                  >
                    {d}
                  </button>
                );
              })}
              {/* Result count */}
              <span style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: T.inkFaint, alignSelf: "center", paddingRight: "2px" }}>
                {filtered.length}/{SKILLS.length}
              </span>
            </div>
          </div>

          {/* ── GRID ── */}
          {filtered.length > 0 ? (
            <div
              className="ws-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                marginBottom: "64px",
              }}
            >
              {filtered.map((s, i) => (
                <SkillCard key={s.id} skill={s} idx={i} onOpen={setActive} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 20px", color: T.inkMute }}>
              <Code2 size={48} color={T.inkFaint} style={{ margin: "0 auto 16px", display: "block" }} />
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 700, color: T.ink, marginBottom: "8px" }}>No results</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: T.inkMute }}>Try a different search or filter</p>
            </div>
          )}

          {/* ── FOOTER CTA ── */}
          <div style={{
            padding: "36px 40px",
            background: T.surface,
            border: `1px solid ${T.border}`,
            borderRadius: "14px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: "24px",
            animation: "wsSlideUp 0.6s ease 0.8s both",
          }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: T.inkMute, textTransform: "uppercase", marginBottom: "6px" }}>
                Open Source
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "20px", fontWeight: 800, color: T.ink, letterSpacing: "-0.3px", marginBottom: "6px" }}>
                All implementations on GitHub
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: T.inkSub, lineHeight: 1.6 }}>
                Source code, notebooks and deployment configs — not just descriptions.
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href="https://github.com/bhagavan444"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "11px 22px", borderRadius: "8px",
                  background: T.raised, border: `1px solid ${T.borderMd}`,
                  color: T.ink, textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "1.5px",
                  transition: "all 200ms",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = T.borderHi; e.currentTarget.style.background = T.overlay; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = T.borderMd; e.currentTarget.style.background = T.raised; }}
              >
                <Github size={15} />
                VIEW GITHUB
              </a>
              <a
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "11px 22px", borderRadius: "8px",
                  background: "rgba(56,189,248,0.10)", border: "1px solid rgba(56,189,248,0.28)",
                  color: "#38bdf8", textDecoration: "none",
                  fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "1.5px",
                  transition: "all 200ms",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(56,189,248,0.18)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(56,189,248,0.10)"; }}
              >
                <ArrowUpRight size={14} />
                GET IN TOUCH
              </a>
            </div>
          </div>

        </main>
      </div>

      {/* ── DRAWER ── */}
      {active && <Drawer skill={active} onClose={() => setActive(null)} />}
    </>
  );
}