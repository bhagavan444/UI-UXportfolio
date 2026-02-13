"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, ExternalLink, ArrowRight, MapPin, Clock } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   DESIGN TOKENS — WHITE BACKGROUND PREMIUM
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
  red: "#ef4444",
  redDim: "rgba(239,68,68,0.08)",
};

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
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("[data-magnetic]");
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
          background: `linear-gradient(90deg, ${C.accent}, ${C.green})`,
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING LABEL INPUT
═══════════════════════════════════════════════════════════════ */
function FloatingInput({ label, error, value, onChange, ...props }) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = focused || hasValue;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        {...props}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "1.5rem 1.25rem 0.75rem",
          background: C.surface,
          border: `2px solid ${error ? C.red : focused ? C.accent : C.border}`,
          borderRadius: "12px",
          color: C.text,
          fontSize: "0.95rem",
          fontFamily: "'Geist', sans-serif",
          outline: "none",
          transition: "all 0.2s ease",
          boxShadow: error
            ? `0 0 0 4px ${C.redDim}`
            : focused
            ? `0 0 0 4px ${C.accentDim}`
            : "none",
          transform: focused ? "scale(1.01)" : "scale(1)",
        }}
      />
      <label
        style={{
          position: "absolute",
          left: "1.25rem",
          top: isFloating ? "0.5rem" : "50%",
          transform: isFloating ? "translateY(0)" : "translateY(-50%)",
          fontSize: isFloating ? "0.7rem" : "0.95rem",
          fontWeight: isFloating ? 600 : 400,
          color: error ? C.red : focused ? C.accent : C.muted,
          pointerEvents: "none",
          transition: "all 0.2s ease",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: isFloating ? "0.08em" : "0",
          textTransform: isFloating ? "uppercase" : "none",
        }}
      >
        {label}
      </label>
      {error && (
        <div
          style={{
            fontSize: "0.75rem",
            color: C.red,
            marginTop: "0.5rem",
            fontFamily: "'DM Mono', monospace",
            animation: "shake 0.3s ease, fadeIn 0.2s ease",
          }}
        >
          ↳ {error}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING LABEL TEXTAREA
═══════════════════════════════════════════════════════════════ */
function FloatingTextarea({ label, error, value, onChange, maxLength, ...props }) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = focused || hasValue;
  const charCount = value ? value.length : 0;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <textarea
        {...props}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        maxLength={maxLength}
        style={{
          width: "100%",
          padding: "1.5rem 1.25rem 0.75rem",
          background: C.surface,
          border: `2px solid ${error ? C.red : focused ? C.accent : C.border}`,
          borderRadius: "12px",
          color: C.text,
          fontSize: "0.95rem",
          fontFamily: "'Geist', sans-serif",
          outline: "none",
          transition: "all 0.2s ease",
          resize: "vertical",
          minHeight: "140px",
          lineHeight: 1.6,
          boxShadow: error
            ? `0 0 0 4px ${C.redDim}`
            : focused
            ? `0 0 0 4px ${C.accentDim}`
            : "none",
          transform: focused ? "scale(1.01)" : "scale(1)",
        }}
      />
      <label
        style={{
          position: "absolute",
          left: "1.25rem",
          top: isFloating ? "0.5rem" : "1.25rem",
          fontSize: isFloating ? "0.7rem" : "0.95rem",
          fontWeight: isFloating ? 600 : 400,
          color: error ? C.red : focused ? C.accent : C.muted,
          pointerEvents: "none",
          transition: "all 0.2s ease",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: isFloating ? "0.08em" : "0",
          textTransform: isFloating ? "uppercase" : "none",
        }}
      >
        {label}
      </label>
      {maxLength && (
        <div
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "1.25rem",
            fontSize: "0.7rem",
            color: charCount >= maxLength ? C.red : C.muted,
            fontFamily: "'DM Mono', monospace",
            transition: "color 0.2s ease",
          }}
        >
          {charCount}/{maxLength}
        </div>
      )}
      {error && (
        <div
          style={{
            fontSize: "0.75rem",
            color: C.red,
            marginTop: "0.5rem",
            fontFamily: "'DM Mono', monospace",
            animation: "shake 0.3s ease, fadeIn 0.2s ease",
          }}
        >
          ↳ {error}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FLOATING LABEL SELECT
═══════════════════════════════════════════════════════════════ */
function FloatingSelect({ label, error, value, onChange, children, ...props }) {
  const [focused, setFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const isFloating = focused || hasValue;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <select
        {...props}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "1.5rem 1.25rem 0.75rem",
          paddingRight: "3rem",
          background: C.surface,
          border: `2px solid ${error ? C.red : focused ? C.accent : C.border}`,
          borderRadius: "12px",
          color: hasValue ? C.text : C.muted,
          fontSize: "0.95rem",
          fontFamily: "'Geist', sans-serif",
          outline: "none",
          transition: "all 0.2s ease",
          cursor: "pointer",
          appearance: "none",
          boxShadow: error
            ? `0 0 0 4px ${C.redDim}`
            : focused
            ? `0 0 0 4px ${C.accentDim}`
            : "none",
          transform: focused ? "scale(1.01)" : "scale(1)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1.25rem center",
        }}
      >
        {children}
      </select>
      <label
        style={{
          position: "absolute",
          left: "1.25rem",
          top: isFloating ? "0.5rem" : "50%",
          transform: isFloating ? "translateY(0)" : "translateY(-50%)",
          fontSize: isFloating ? "0.7rem" : "0.95rem",
          fontWeight: isFloating ? 600 : 400,
          color: error ? C.red : focused ? C.accent : C.muted,
          pointerEvents: "none",
          transition: "all 0.2s ease",
          fontFamily: "'DM Mono', monospace",
          letterSpacing: isFloating ? "0.08em" : "0",
          textTransform: isFloating ? "uppercase" : "none",
        }}
      >
        {label}
      </label>
      {error && (
        <div
          style={{
            fontSize: "0.75rem",
            color: C.red,
            marginTop: "0.5rem",
            fontFamily: "'DM Mono', monospace",
            animation: "shake 0.3s ease, fadeIn 0.2s ease",
          }}
        >
          ↳ {error}
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC BUTTON
═══════════════════════════════════════════════════════════════ */
function MagneticButton({ children, href, variant = "primary", ...props }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const isPrimary = variant === "primary";

  const Component = href ? "a" : "button";

  return (
    <Component
      ref={ref}
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "0.875rem 1.75rem",
        background: isPrimary ? C.accent : "transparent",
        border: isPrimary ? "none" : `2px solid ${C.border2}`,
        borderRadius: "12px",
        fontSize: "0.9rem",
        fontWeight: 600,
        color: isPrimary ? "#fff" : C.text,
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: `translate(${position.x}px, ${position.y}px) scale(${isPressed ? 0.97 : 1})`,
        boxShadow: isPrimary ? "0 4px 20px rgba(79,127,255,0.25)" : "none",
        fontFamily: "'Geist', sans-serif",
        position: "relative",
        overflow: "hidden",
        ...props.style,
      }}
      onMouseEnter={(e) => {
        if (isPrimary) {
          e.currentTarget.style.transform = `translate(${position.x}px, ${position.y}px) translateY(-2px) scale(${isPressed ? 0.97 : 1})`;
          e.currentTarget.style.boxShadow = "0 8px 28px rgba(79,127,255,0.4)";
        } else {
          e.currentTarget.style.borderColor = C.border3;
          e.currentTarget.style.background = C.surface;
        }
      }}
      onMouseLeave={(e) => {
        if (isPrimary) {
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(79,127,255,0.25)";
        } else {
          e.currentTarget.style.borderColor = C.border2;
          e.currentTarget.style.background = "transparent";
        }
      }}
    >
      {isPrimary && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transform: "translateX(-100%)",
            animation: "shimmer 3s infinite",
          }}
        />
      )}
      {children}
    </Component>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TRUST SIGNAL CHIP
═══════════════════════════════════════════════════════════════ */
function TrustChip({ icon: Icon, label, value }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "1rem 1.5rem",
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: "12px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: C.accentDim,
          border: `1px solid ${C.accent}20`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={16} color={C.accent} />
      </div>
      <div>
        <div
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "1.25rem",
            fontWeight: 400,
            color: C.text,
            lineHeight: 1,
            marginBottom: "0.25rem",
          }}
        >
          {value}
        </div>
        <div
          style={{
            fontSize: "0.75rem",
            color: C.muted,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONTACT CARD
═══════════════════════════════════════════════════════════════ */
function ContactCard({ icon: Icon, label, value, href, detail, accent = C.accent }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * 3, y: -x * 3 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <a
      ref={ref}
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1.25rem",
        background: hovered ? `${accent}08` : C.surface,
        border: `1px solid ${hovered ? accent + "30" : C.border}`,
        borderRadius: "12px",
        textDecoration: "none",
        transition: "all 0.3s ease",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${hovered ? "-4px" : "0"})`,
        boxShadow: hovered ? "0 12px 32px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "10px",
          background: hovered ? `${accent}15` : C.surface2,
          border: `1px solid ${hovered ? accent + "40" : C.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.3s ease",
        }}
      >
        <Icon size={18} style={{ color: hovered ? accent : C.muted }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "0.7rem",
            color: C.muted,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "0.25rem",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontSize: "0.95rem",
            fontWeight: 600,
            color: C.text,
            marginBottom: detail ? "0.25rem" : 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </div>
        {detail && (
          <div
            style={{
              fontSize: "0.75rem",
              color: C.muted,
              lineHeight: 1.5,
            }}
          >
            {detail}
          </div>
        )}
      </div>
      <ArrowRight
        size={16}
        style={{
          color: hovered ? accent : C.muted,
          flexShrink: 0,
          transition: "all 0.3s ease",
          transform: hovered ? "translateX(4px)" : "translateX(0)",
        }}
      />
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SUCCESS STATE
═══════════════════════════════════════════════════════════════ */
function SuccessState() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem 2rem",
        animation: "successReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) both",
      }}
    >
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: C.greenDim,
          border: `2px solid ${C.green}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 2rem",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${C.green}20 0%, transparent 70%)`,
            animation: "pulse 2s ease infinite",
          }}
        />
        <CheckCircle2
          size={40}
          style={{
            color: C.green,
            animation: "checkDraw 0.6s ease 0.2s both",
          }}
        />
      </div>
      <h3
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "2rem",
          fontWeight: 400,
          color: C.text,
          marginBottom: "1rem",
          letterSpacing: "-0.02em",
        }}
      >
        Message Received
      </h3>
      <p
        style={{
          fontSize: "1rem",
          color: C.muted2,
          lineHeight: 1.8,
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        Thank you for reaching out. I'll respond to your email within 24 hours.
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [headerInView, setHeaderInView] = useState(false);
  const [formInView, setFormInView] = useState(false);
  const [sidebarInView, setSidebarInView] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const sidebarRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observers = [
      { ref: headerRef, setter: setHeaderInView },
      { ref: formRef, setter: setFormInView },
      { ref: sidebarRef, setter: setSidebarInView },
      { ref: ctaRef, setter: setCtaInView },
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

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    else if (form.name.trim().length < 2) e.name = "Name too short";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.subject) e.subject = "Please select a subject";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10) e.message = "Too short (min 10 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSuccess(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitting(false);
    setTimeout(() => setSuccess(false), 6000);
  };

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

        select option {
          background: ${C.surface};
          color: ${C.text};
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes successReveal {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes checkDraw {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes lineGrow {
          from { width: 0; }
          to { width: 180px; }
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Background */}
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
              Contact
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              fontWeight: 400,
              color: C.text,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              maxWidth: "900px",
            }}
          >
            Let's Connect
          </h1>

          {/* Animated underline */}
          <div
            style={{
              width: "180px",
              height: "4px",
              background: `linear-gradient(90deg, ${C.accent}, ${C.green})`,
              borderRadius: "2px",
              marginBottom: "2.5rem",
              animation: headerInView ? "lineGrow 0.8s ease 0.2s both" : "none",
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.25rem",
              color: C.muted2,
              lineHeight: 1.8,
              maxWidth: "640px",
              marginBottom: "3rem",
            }}
          >
            Open to software engineering roles, internships, and technical collaborations.
            I respond to all messages within 24 hours.
          </p>

          {/* Availability badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1.5rem",
              background: C.greenDim,
              border: `1px solid ${C.green}40`,
              borderRadius: "12px",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: C.green,
                animation: "pulse 2s ease infinite",
              }}
            />
            <span
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: C.green,
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.06em",
              }}
            >
              Available for Immediate Start
            </span>
          </div>

          {/* Trust signals */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
              maxWidth: "800px",
            }}
          >
            <TrustChip icon={CheckCircle2} value="3" label="Industry Internships" />
            <TrustChip icon={Send} value="15+" label="Production Projects" />
            <TrustChip icon={Clock} value="24hrs" label="Response Time" />
          </div>
        </header>

        {/* ═══════ MAIN GRID ═══════ */}
        <section
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "6rem 2rem",
          }}
        >
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left: Form */}
            <div
              ref={formRef}
              style={{
                opacity: formInView ? 1 : 0,
                transform: formInView ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: "2rem 2.5rem",
                    borderBottom: `1px solid ${C.border}`,
                    background: `linear-gradient(135deg, ${C.surface} 0%, ${C.surface2} 100%)`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Secure Communication Portal
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      color: C.text,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Send a Message
                  </div>
                </div>

                {/* Form body */}
                <div style={{ padding: "2.5rem" }}>
                  {success ? (
                    <SuccessState />
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1.5rem",
                        }}
                      >
                        {/* Name + Email */}
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1.5rem",
                          }}
                        >
                          <FloatingInput
                            label="Full Name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            error={errors.name}
                            autoComplete="name"
                          />
                          <FloatingInput
                            label="Email Address"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            error={errors.email}
                            autoComplete="email"
                          />
                        </div>

                        {/* Subject */}
                        <FloatingSelect
                          label="Subject"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          error={errors.subject}
                        >
                          <option value="">Select a topic...</option>
                          <option value="job">Job Opportunity</option>
                          <option value="internship">Internship</option>
                          <option value="collaboration">Technical Collaboration</option>
                          <option value="inquiry">General Inquiry</option>
                        </FloatingSelect>

                        {/* Message */}
                        <FloatingTextarea
                          label="Your Message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          error={errors.message}
                          maxLength={1000}
                        />

                        {/* Submit */}
                        <MagneticButton
                          variant="primary"
                          type="submit"
                          disabled={submitting}
                          style={{
                            width: "100%",
                            padding: "1.125rem 2rem",
                            opacity: submitting ? 0.6 : 1,
                            cursor: submitting ? "not-allowed" : "pointer",
                          }}
                        >
                          {submitting ? (
                            <>
                              <div
                                style={{
                                  width: "16px",
                                  height: "16px",
                                  border: "2px solid rgba(255,255,255,0.3)",
                                  borderTopColor: "#fff",
                                  borderRadius: "50%",
                                  animation: "spin 0.6s linear infinite",
                                }}
                              />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              Send Message
                            </>
                          )}
                        </MagneticButton>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div
              ref={sidebarRef}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                opacity: sidebarInView ? 1 : 0,
                transform: sidebarInView ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
                position: "sticky",
                top: "2rem",
              }}
            >
              {/* Contact info */}
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    padding: "1.75rem 2rem",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Direct Contact
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: C.text,
                    }}
                  >
                    Reach Me Directly
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <ContactCard
                    icon={Mail}
                    label="Primary Email"
                    value="g.sivasatyasaibhagavan@gmail.com"
                    href="mailto:g.sivasatyasaibhagavan@gmail.com"
                    detail="Preferred channel · Responds within 24h"
                    accent={C.accent}
                  />
                  <ContactCard
                    icon={Phone}
                    label="Mobile"
                    value="+91 75692 05626"
                    href="tel:+917569205626"
                    detail="Available 9 AM – 9 PM IST"
                    accent={C.green}
                  />
                </div>
              </div>

              {/* Professional links */}
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    padding: "1.75rem 2rem",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Professional
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: C.text,
                    }}
                  >
                    Online Presence
                  </div>
                </div>
                <div
                  style={{
                    padding: "1.5rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <ContactCard
                    icon={Linkedin}
                    label="LinkedIn"
                    value="Siva Satya Sai Bhagavan"
                    href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/"
                    detail="Work history, recommendations"
                    accent="#0a91fb"
                  />
                  <ContactCard
                    icon={Github}
                    label="GitHub"
                    value="@bhagavan444"
                    href="https://github.com/bhagavan444"
                    detail="15+ repositories · Active contributions"
                    accent={C.text}
                  />
                </div>
              </div>

              {/* What I bring */}
              <div
                style={{
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    padding: "1.75rem 2rem",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: C.muted,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Background
                  </div>
                  <div
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontSize: "1.25rem",
                      fontWeight: 400,
                      color: C.text,
                    }}
                  >
                    What I Bring
                  </div>
                </div>
                <div style={{ padding: "1.5rem 2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {[
                      { label: "Full-stack engineer", detail: "MERN · REST APIs · Auth systems" },
                      { label: "AI / ML practitioner", detail: "TensorFlow · Scikit-learn · NLP" },
                      { label: "Cloud & DevOps", detail: "AWS · Docker · GitHub Actions" },
                      { label: "3 industry internships", detail: "StudyOwl · SmartBridge · Blackbucks" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: "1rem",
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: C.accent,
                            flexShrink: 0,
                            marginTop: "0.5rem",
                          }}
                        />
                        <div>
                          <div
                            style={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: C.text,
                              marginBottom: "0.25rem",
                            }}
                          >
                            {item.label}
                          </div>
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: C.muted,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {item.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ CTA STRIP ═══════ */}
        <section
          ref={ctaRef}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "0 2rem 8rem",
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              background: `linear-gradient(135deg, ${C.accentDim} 0%, ${C.greenDim} 100%)`,
              border: `2px solid transparent`,
              backgroundImage: `linear-gradient(135deg, ${C.accentDim} 0%, ${C.greenDim} 100%), linear-gradient(90deg, ${C.accent}40, ${C.green}40)`,
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              borderRadius: "24px",
              padding: "3.5rem 4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "3rem",
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background: `radial-gradient(circle, ${C.accent}15 0%, transparent 70%)`,
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />

            <div style={{ maxWidth: "600px", position: "relative", zIndex: 1 }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: C.accent,
                  marginBottom: "1rem",
                }}
              >
                2026 Graduate · Immediate Availability
              </div>
              <h3
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "2rem",
                  fontWeight: 400,
                  color: C.text,
                  letterSpacing: "-0.02em",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Let's collaborate on meaningful engineering work
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: C.muted2,
                  lineHeight: 1.8,
                }}
              >
                Full-stack engineer specializing in MERN and AI/ML systems. Actively seeking
                full-time roles where I can build scalable, production-grade software.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                flexShrink: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              <MagneticButton variant="primary" href="mailto:g.sivasatyasaibhagavan@gmail.com">
                <Send size={16} />
                Schedule a Call
              </MagneticButton>
              <MagneticButton
                variant="secondary"
                href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/"
              >
                <ExternalLink size={16} />
                View LinkedIn
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* ═══════ FOOTER ═══════ */}
        <footer
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "3rem 2rem",
            borderTop: `1px solid ${C.border}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <MapPin size={16} color={C.green} />
              <span
                style={{
                  fontSize: "0.875rem",
                  color: C.muted2,
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                Hyderabad, India · UTC +5:30
              </span>
            </div>
            <span
              style={{
                fontSize: "0.875rem",
                color: C.muted,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              © 2026 Siva Satya Sai Bhagavan
            </span>
          </div>
        </footer>
      </div>

      {/* Spin animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}