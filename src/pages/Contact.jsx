"use client";

import React, { useState, useRef } from "react";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle, ExternalLink, ArrowUpRight } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS
═══════════════════════════════════════════════════════════════ */
const C = {
  bg:       "#0f1117",
  surface:  "#141720",
  surface2: "#191c26",
  surface3: "#1e2130",
  border:   "rgba(255,255,255,0.06)",
  border2:  "rgba(255,255,255,0.10)",
  border3:  "rgba(255,255,255,0.16)",
  text:     "#e8e9ef",
  muted:    "#6b7280",
  muted2:   "#9ca3af",
  accent:   "#4f7fff",
  accentDim:"rgba(79,127,255,0.08)",
  green:    "#22c55e",
  greenDim: "rgba(34,197,94,0.08)",
  red:      "#f87171",
  redDim:   "rgba(248,113,113,0.08)",
};

/* ═══════════════════════════════════════════════════════════════
   HOOK: INTERSECTION OBSERVER
═══════════════════════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);
  return [ref, inView];
}

/* ═══════════════════════════════════════════════════════════════
   SUBCOMPONENTS
═══════════════════════════════════════════════════════════════ */

function FormField({ label, error, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label style={{
        fontSize: "0.75rem", fontWeight: 600,
        color: C.muted2, letterSpacing: "0.08em",
        textTransform: "uppercase", fontFamily: "'DM Mono',monospace",
      }}>
        {label}
      </label>
      {children}
      {error && (
        <span style={{
          fontSize: "0.72rem", color: C.red,
          fontFamily: "'DM Mono',monospace", letterSpacing: "0.02em",
          display: "flex", alignItems: "center", gap: "0.3rem",
          animation: "fadeUp 0.2s ease both",
        }}>
          ↳ {error}
        </span>
      )}
    </div>
  );
}

const INPUT_BASE = {
  width: "100%",
  padding: "0.75rem 1rem",
  background: C.surface2,
  border: `1px solid ${C.border2}`,
  borderRadius: "10px",
  color: C.text,
  fontSize: "0.9rem",
  fontFamily: "'Geist',sans-serif",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  appearance: "none",
  WebkitAppearance: "none",
};

function Input({ error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...INPUT_BASE,
        borderColor: error ? C.red : focused ? C.accent : C.border2,
        boxShadow: error
          ? `0 0 0 3px ${C.redDim}`
          : focused
          ? `0 0 0 3px ${C.accentDim}`
          : "none",
      }}
    />
  );
}

function Textarea({ error, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        ...INPUT_BASE,
        resize: "vertical",
        minHeight: "130px",
        lineHeight: 1.65,
        borderColor: error ? C.red : focused ? C.accent : C.border2,
        boxShadow: error
          ? `0 0 0 3px ${C.redDim}`
          : focused
          ? `0 0 0 3px ${C.accentDim}`
          : "none",
      }}
    />
  );
}

function Select({ error, children, ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <select
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...INPUT_BASE,
          cursor: "pointer",
          paddingRight: "2.5rem",
          borderColor: error ? C.red : focused ? C.accent : C.border2,
          boxShadow: error
            ? `0 0 0 3px ${C.redDim}`
            : focused
            ? `0 0 0 3px ${C.accentDim}`
            : "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
        }}
      >
        {children}
      </select>
    </div>
  );
}

/* ─── Social / contact link row ─── */
function ContactLink({ icon: Icon, label, value, href, sub, accentColor = C.accent }) {
  const [hovered, setHovered] = useState(false);
  const dim = accentColor === C.accent
    ? C.accentDim
    : accentColor === C.green
    ? C.greenDim
    : "rgba(255,255,255,0.04)";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex", alignItems: "center", gap: "1rem",
        padding: "1rem 1.1rem",
        background: hovered ? dim : C.surface2,
        border: `1px solid ${hovered ? accentColor + "35" : C.border}`,
        borderRadius: "12px",
        textDecoration: "none", color: C.text,
        transition: "all 0.25s ease",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
      }}
    >
      {/* Icon box */}
      <div style={{
        width: "38px", height: "38px", borderRadius: "9px", flexShrink: 0,
        background: hovered ? dim : C.surface3,
        border: `1px solid ${hovered ? accentColor + "40" : C.border2}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.25s ease",
      }}>
        <Icon size={16} style={{ color: hovered ? accentColor : C.muted2 }} />
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: "0.7rem", color: C.muted, fontFamily: "'DM Mono',monospace", letterSpacing: "0.06em", marginBottom: "0.15rem" }}>
          {label}
        </div>
        <div style={{ fontSize: "0.85rem", fontWeight: 600, color: hovered ? C.text : C.muted2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", transition: "color 0.2s" }}>
          {value}
        </div>
        {sub && (
          <div style={{ fontSize: "0.7rem", color: C.muted, marginTop: "0.1rem" }}>{sub}</div>
        )}
      </div>

      <ArrowUpRight size={13} style={{ color: hovered ? accentColor : C.muted, flexShrink: 0, transition: "color 0.2s" }} />
    </a>
  );
}

/* ─── Interest chip ─── */
function Chip({ children, color = C.accent }) {
  const dim = color === C.accent ? C.accentDim : color === C.green ? C.greenDim : "rgba(245,158,11,0.08)";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "0.35rem",
      padding: "0.3rem 0.75rem", borderRadius: "6px",
      background: dim, border: `1px solid ${color}30`,
      fontSize: "0.75rem", fontWeight: 600, color: color,
      fontFamily: "'DM Mono',monospace", letterSpacing: "0.04em",
      whiteSpace: "nowrap",
    }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: color, display: "inline-block" }} />
      {children}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════ */
export default function Contact() {
  /* Form state */
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors]     = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]   = useState(false);

  /* Scroll progress */
  const [scrollPct, setScrollPct] = useState(0);
  React.useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* InView refs */
  const [headerRef, headerIn] = useInView(0.2);
  const [formRef,   formIn]   = useInView(0.1);
  const [sideRef,   sideIn]   = useInView(0.1);
  const [ctaRef,    ctaIn]    = useInView(0.2);

  /* Validate */
  const validate = () => {
    const e = {};
    if (!form.name.trim())                              e.name    = "Name is required";
    else if (form.name.trim().length < 2)               e.name    = "Name too short";
    if (!form.email.trim())                             e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject)                                  e.subject = "Please select a subject";
    if (!form.message.trim())                           e.message = "Message is required";
    else if (form.message.trim().length < 10)           e.message = "Too short (min 10 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
    setTimeout(() => setSuccess(false), 6000);
  };

  /* ─── Render ─── */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500;600&family=Geist:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body {
          font-family:'Geist',system-ui,sans-serif;
          background:${C.bg};
          color:${C.text};
          -webkit-font-smoothing:antialiased;
          overflow-x:hidden;
        }
        ::selection { background:rgba(79,127,255,0.25); }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-track { background:${C.bg}; }
        ::-webkit-scrollbar-thumb { background:rgba(79,127,255,0.3); border-radius:3px; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeSlide {
          from { opacity:0; transform:translateX(-14px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity:0; }
          to   { opacity:1; }
        }
        @keyframes scaleIn {
          from { opacity:0; transform:scale(0.94); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes spin {
          from { transform:rotate(0deg); }
          to   { transform:rotate(360deg); }
        }

        select option { background:${C.surface2}; color:${C.text}; }

        @media (max-width:900px) {
          .contact-grid { grid-template-columns:1fr !important; }
        }
        @media (max-width:600px) {
          .chip-row { flex-wrap:wrap !important; }
        }
      `}</style>

      {/* Scroll progress */}
      <div style={{ position:"fixed", top:0, left:0, right:0, height:"2px", background:C.surface, zIndex:9999 }}>
        <div style={{ width:`${scrollPct}%`, height:"100%", background:`linear-gradient(90deg,${C.accent},#a78bfa)`, transition:"width 0.1s linear" }} />
      </div>

      {/* Faint radial mesh */}
      <div style={{
        position:"fixed", inset:0, zIndex:0, pointerEvents:"none",
        background:`radial-gradient(ellipse 70% 50% at 50% -5%, rgba(79,127,255,0.05) 0%, transparent 60%)`,
      }} />

      {/* ═══════ WRAPPER ═══════ */}
      <div style={{ maxWidth:"1100px", margin:"0 auto", padding:"0 1.5rem", position:"relative", zIndex:1 }}>

        {/* ══════════ HEADER ══════════ */}
        <header ref={headerRef} style={{ padding:"5rem 0 3.5rem", borderBottom:`1px solid ${C.border}` }}>

          {/* Label */}
          <div style={{
            display:"flex", alignItems:"center", gap:"0.65rem", marginBottom:"1.5rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeSlide 0.5s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}>
            <div style={{ width:"22px", height:"1px", background:C.accent }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.72rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:C.accent }}>
              Contact
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily:"'Instrument Serif',serif",
            fontSize:"clamp(2.4rem,5vw,3.8rem)",
            fontWeight:400, color:C.text,
            letterSpacing:"-0.025em", lineHeight:1.1, marginBottom:"1rem",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.07s both" : "none",
          }}>
            Let's Connect
          </h1>

          <p style={{
            fontSize:"1rem", color:C.muted2, lineHeight:1.8, maxWidth:"520px",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.14s both" : "none",
          }}>
            Open to software engineering roles, internships, and technical collaborations.
            I respond to all messages within 24 hours.
          </p>

          {/* Availability + interest chips */}
          <div style={{
            display:"flex", alignItems:"center", gap:"0.75rem", marginTop:"1.75rem",
            flexWrap:"wrap",
            opacity: headerIn ? 1 : 0,
            animation: headerIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.2s both" : "none",
          }}>
            {/* Availability dot */}
            <div style={{
              display:"flex", alignItems:"center", gap:"0.5rem",
              padding:"0.3rem 0.75rem", borderRadius:"6px",
              background:C.greenDim, border:`1px solid rgba(34,197,94,0.25)`,
            }}>
              <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:C.green }} />
              <span style={{ fontSize:"0.72rem", fontWeight:600, color:C.green, fontFamily:"'DM Mono',monospace", letterSpacing:"0.06em" }}>
                Available · Immediate
              </span>
            </div>

            <div className="chip-row" style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
              <Chip color={C.accent}>Full-Time Roles</Chip>
              <Chip color="#a78bfa">AI / ML Engineering</Chip>
              <Chip color="#f59e0b">Open Source Collab</Chip>
            </div>
          </div>
        </header>

        {/* ══════════ MAIN GRID ══════════ */}
        <div
          className="contact-grid"
          style={{
            display:"grid", gridTemplateColumns:"1.15fr 1fr",
            gap:"1.5rem", padding:"3rem 0",
          }}
        >

          {/* ─────── LEFT: FORM ─────── */}
          <div
            ref={formRef}
            style={{
              opacity: formIn ? 1 : 0,
              animation: formIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both" : "none",
            }}
          >
            <div style={{
              background:C.surface, border:`1px solid ${C.border}`,
              borderRadius:"18px", overflow:"hidden",
            }}>
              {/* Card header */}
              <div style={{ padding:"1.5rem 2rem", borderBottom:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.35rem" }}>
                    Direct Message
                  </div>
                  <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.25rem", color:C.text }}>
                    Send a Message
                  </div>
                </div>
                {/* Status pill */}
                <div style={{
                  display:"flex", alignItems:"center", gap:"0.4rem",
                  padding:"0.3rem 0.7rem", borderRadius:"6px",
                  background:C.greenDim, border:`1px solid rgba(34,197,94,0.2)`,
                }}>
                  <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:C.green }} />
                  <span style={{ fontSize:"0.68rem", fontWeight:600, color:C.green, fontFamily:"'DM Mono',monospace" }}>Online</span>
                </div>
              </div>

              {/* Form body */}
              <div style={{ padding:"1.75rem 2rem 2rem" }}>
                {success ? (
                  /* ── Success state ── */
                  <div style={{
                    textAlign:"center", padding:"3rem 1.5rem",
                    animation:"scaleIn 0.4s cubic-bezier(0.34,1.56,0.64,1) both",
                  }}>
                    <div style={{
                      width:"56px", height:"56px", borderRadius:"50%",
                      background:C.greenDim, border:`2px solid rgba(34,197,94,0.3)`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      margin:"0 auto 1.5rem",
                    }}>
                      <CheckCircle size={24} style={{ color:C.green }} />
                    </div>
                    <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", color:C.text, marginBottom:"0.6rem" }}>
                      Message received
                    </div>
                    <p style={{ fontSize:"0.875rem", color:C.muted2, lineHeight:1.75 }}>
                      Thanks for reaching out. I'll get back to you at your email
                      within 24 hours.
                    </p>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} noValidate>
                    <div style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>

                      {/* Name + Email row */}
                      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                        <FormField label="Full Name" error={errors.name}>
                          <Input
                            type="text" name="name"
                            value={form.name} onChange={handleChange}
                            placeholder="Jane Smith"
                            error={errors.name}
                            autoComplete="name"
                          />
                        </FormField>
                        <FormField label="Email Address" error={errors.email}>
                          <Input
                            type="email" name="email"
                            value={form.email} onChange={handleChange}
                            placeholder="jane@company.com"
                            error={errors.email}
                            autoComplete="email"
                          />
                        </FormField>
                      </div>

                      {/* Subject */}
                      <FormField label="Subject" error={errors.subject}>
                        <Select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          error={errors.subject}
                        >
                          <option value="" disabled>Select a topic…</option>
                          <option value="job">Job Opportunity</option>
                          <option value="internship">Internship</option>
                          <option value="collaboration">Technical Collaboration</option>
                          <option value="inquiry">General Inquiry</option>
                        </Select>
                      </FormField>

                      {/* Message */}
                      <FormField label="Message" error={errors.message}>
                        <Textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell me about the role, project, or collaboration you have in mind…"
                          error={errors.message}
                        />
                      </FormField>

                      {/* Submit */}
                      <SubmitButton submitting={submitting} />
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ─────── RIGHT: SIDEBAR ─────── */}
          <div
            ref={sideRef}
            style={{
              display:"flex", flexDirection:"column", gap:"1.25rem",
              opacity: sideIn ? 1 : 0,
              animation: sideIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both" : "none",
            }}
          >

            {/* ── Contact info ── */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"18px", overflow:"hidden" }}>
              <div style={{ padding:"1.25rem 1.5rem", borderBottom:`1px solid ${C.border}` }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.3rem" }}>
                  Direct Contact
                </div>
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.1rem", color:C.text }}>
                  Reach Me Directly
                </div>
              </div>
              <div style={{ padding:"1.25rem 1.5rem", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                <ContactLink
                  icon={Mail}
                  label="Primary email"
                  value="g.sivasatyasaibhagavan@gmail.com"
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  sub="Preferred channel · responds within 24h"
                  accentColor={C.accent}
                />
                <ContactLink
                  icon={Phone}
                  label="Mobile"
                  value="+91 75692 05626"
                  href="tel:+917569205626"
                  sub="Available 9 AM – 9 PM IST"
                  accentColor={C.green}
                />
              </div>
            </div>

            {/* ── Social / professional links ── */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"18px", overflow:"hidden" }}>
              <div style={{ padding:"1.25rem 1.5rem", borderBottom:`1px solid ${C.border}` }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.3rem" }}>
                  Professional
                </div>
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.1rem", color:C.text }}>
                  Online Presence
                </div>
              </div>
              <div style={{ padding:"1.25rem 1.5rem", display:"flex", flexDirection:"column", gap:"0.6rem" }}>
                <ContactLink
                  icon={Linkedin}
                  label="LinkedIn"
                  value="Siva Satya Sai Bhagavan"
                  href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/"
                  sub="Work history, recommendations"
                  accentColor="#0a91fb"
                />
                <ContactLink
                  icon={Github}
                  label="GitHub"
                  value="@bhagavan444"
                  href="https://github.com/bhagavan444"
                  sub="15+ repositories · active contributions"
                  accentColor={C.muted2}
                />
              </div>
            </div>

            {/* ── What I'm looking for ── */}
            <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:"18px", overflow:"hidden" }}>
              <div style={{ padding:"1.25rem 1.5rem", borderBottom:`1px solid ${C.border}` }}>
                <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.3rem" }}>
                  Background
                </div>
                <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.1rem", color:C.text }}>
                  What I Bring
                </div>
              </div>
              <div style={{ padding:"1.25rem 1.5rem" }}>
                <div style={{ display:"flex", flexDirection:"column", gap:"0.65rem" }}>
                  {[
                    { label:"Full-stack engineer",   detail:"MERN · REST APIs · Auth systems" },
                    { label:"AI / ML practitioner",  detail:"TensorFlow · Scikit-learn · NLP" },
                    { label:"Cloud & DevOps",         detail:"AWS · Docker · GitHub Actions" },
                    { label:"3 industry internships", detail:"StudyOwl · SmartBridge · Blackbucks" },
                  ].map((item, i) => (
                    <div key={i} style={{ display:"flex", gap:"0.75rem", alignItems:"flex-start" }}>
                      <div style={{ width:"5px", height:"5px", borderRadius:"50%", background:C.accent, flexShrink:0, marginTop:"0.45rem" }} />
                      <div>
                        <div style={{ fontSize:"0.825rem", fontWeight:600, color:C.text }}>{item.label}</div>
                        <div style={{ fontSize:"0.72rem", color:C.muted, fontFamily:"'DM Mono',monospace", marginTop:"0.1rem" }}>{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ══════════ CTA STRIP ══════════ */}
        <section ref={ctaRef} style={{ borderTop:`1px solid ${C.border}`, paddingTop:"3rem", paddingBottom:"5rem" }}>
          <div style={{
            background:`linear-gradient(135deg, rgba(79,127,255,0.05) 0%, rgba(167,139,250,0.03) 100%)`,
            border:`1px solid ${C.border2}`,
            borderRadius:"18px",
            padding:"2.5rem 2.75rem",
            display:"flex", alignItems:"center", justifyContent:"space-between",
            gap:"2rem", flexWrap:"wrap",
            opacity: ctaIn ? 1 : 0,
            animation: ctaIn ? "fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both" : "none",
          }}>
            <div style={{ maxWidth:"520px" }}>
              <div style={{ fontFamily:"'DM Mono',monospace", fontSize:"0.67rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.6rem" }}>
                2026 Graduate · Immediate Availability
              </div>
              <div style={{ fontFamily:"'Instrument Serif',serif", fontSize:"1.5rem", color:C.text, letterSpacing:"-0.02em", marginBottom:"0.6rem" }}>
                Let's collaborate on meaningful engineering work
              </div>
              <p style={{ fontSize:"0.85rem", color:C.muted2, lineHeight:1.7 }}>
                Full-stack engineer specialising in MERN and AI/ML systems. Actively seeking
                full-time roles where I can build scalable, production-grade software.
              </p>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem", flexShrink:0 }}>
              <a
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  padding:"0.75rem 1.5rem",
                  background:C.accent, borderRadius:"10px",
                  color:"#fff", fontWeight:600, fontSize:"0.875rem",
                  textDecoration:"none",
                  boxShadow:"0 4px 20px rgba(79,127,255,0.25)",
                  transition:"all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                  border:"none", cursor:"pointer",
                  fontFamily:"'Geist',sans-serif",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(79,127,255,0.4)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(79,127,255,0.25)"; }}
              >
                <Send size={14} /> Schedule a Call
              </a>
              <a
                href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display:"inline-flex", alignItems:"center", gap:"0.5rem",
                  padding:"0.75rem 1.5rem",
                  background:"transparent",
                  border:`1px solid ${C.border3}`,
                  borderRadius:"10px",
                  color:C.muted2, fontWeight:500, fontSize:"0.875rem",
                  textDecoration:"none",
                  transition:"all 0.25s ease",
                  fontFamily:"'Geist',sans-serif",
                  justifyContent:"center",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = C.text; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = C.muted2; e.currentTarget.style.borderColor = C.border3; }}
              >
                <ExternalLink size={13} /> View LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer style={{ borderTop:`1px solid ${C.border}`, padding:"1.75rem 0", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"1rem" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"0.5rem" }}>
            <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:C.green }} />
            <span style={{ fontSize:"0.75rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
              Hyderabad, India · UTC +5:30
            </span>
          </div>
          <span style={{ fontSize:"0.75rem", color:C.muted, fontFamily:"'DM Mono',monospace" }}>
            © 2026 Siva Satya Sai Bhagavan
          </span>
        </footer>

      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUBMIT BUTTON
═══════════════════════════════════════════════════════════════ */
function SubmitButton({ submitting }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={submitting}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width:"100%", padding:"0.85rem 1.5rem",
        background: submitting ? "rgba(79,127,255,0.5)" : hovered ? "#6b93ff" : C.accent,
        border:"none", borderRadius:"10px",
        color:"#fff", fontSize:"0.9rem", fontWeight:600,
        fontFamily:"'Geist',sans-serif",
        cursor: submitting ? "not-allowed" : "pointer",
        display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem",
        transition:"all 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        transform: !submitting && hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: !submitting && hovered ? "0 8px 24px rgba(79,127,255,0.35)" : "0 4px 16px rgba(79,127,255,0.2)",
        letterSpacing:"0.01em",
      }}
    >
      {submitting ? (
        <>
          <div style={{
            width:"15px", height:"15px",
            border:`2px solid rgba(255,255,255,0.3)`,
            borderTopColor:"#fff", borderRadius:"50%",
            animation:"spin 0.75s linear infinite",
            flexShrink:0,
          }} />
          Sending…
        </>
      ) : (
        <>
          <Send size={15} /> Send Message
        </>
      )}
    </button>
  );
}