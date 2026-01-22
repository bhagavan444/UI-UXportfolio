"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Mail, Phone, Send, CheckCircle2, Linkedin, Github, Twitter,
  Code, Zap, MessageCircle, User, ArrowRight, Sparkles, Award,
  Target, X, ExternalLink, Terminal, Sun, Moon
} from "lucide-react";

export default function CyberpunkContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);
  const [theme, setTheme] = useState("light"); // DEFAULT: LIGHT theme
  const canvasRef = useRef(null);

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("contact-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save theme & apply to body
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("contact-theme", theme);
  }, [theme]);

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  // Typing animation
  const [currentText, setCurrentText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Let's build something amazing together!",
    "Ready to collaborate on your next project?",
    "Share your ideas - I'm all ears!",
    "Connect and let's create magic 🚀",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < texts[textIndex].length) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setTextIndex((textIndex + 1) % texts.length);
        }, 3000);
      }
    }, 100);

    setCurrentText(texts[textIndex].slice(0, charIndex));

    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  // ─── BACKGROUND PARTICLES ────────────────────────────────────────────────
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

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 1
    }));

    const animate = () => {
      ctx.fillStyle = theme === "dark" ? 'rgba(0,0,0,0.08)' : 'rgba(240,244,255,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        gradient.addColorStop(0, theme === "dark" ? 'rgba(0, 240, 255, 0.35)' : 'rgba(0, 102, 204, 0.35)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with real API call if needed)
    await new Promise(resolve => setTimeout(resolve, 1800));
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setSubmitStatus("idle");
      setIsSubmitting(false);
    }, 4000);
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bhagavan444",
      color: "#ffffff",
      stats: "8+ Repos"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/",
      color: "var(--neon-primary)",
      stats: "Connect"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/bhagavan444",
      color: "var(--neon-primary)",
      stats: "Follow"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:g.sivasatyasaibhagavan@gmail.com",
      color: "var(--neon-primary)",
      stats: "Direct"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Fira+Code:wght@400;500;600&display=swap');

        :root {
          --neon-primary: #00b7eb;
          --neon-secondary: #7c3aed;
          --neon-gradient: linear-gradient(90deg, #00b7eb, #7c3aed);
          --neon-glow: 0 0 35px rgba(0, 183, 235, 0.75);
          --bg-primary: #f8f9fa;
          --text-primary: #1a1a1a;
          --text-secondary: #4b5563;
          --card-bg: rgba(255,255,255,0.94);
          --border-glow: rgba(0,183,235,0.32);
          --input-bg: rgba(255,255,255,0.08);
          --modal-bg: rgba(255,255,255,0.98);
          --modal-text: #1a1a1a;
        }

        body.dark {
          --neon-primary: #00f0ff;
          --neon-secondary: #c084fc;
          --neon-gradient: linear-gradient(90deg, #00f0ff, #c084fc);
          --neon-glow: 0 0 35px rgba(0, 240, 255, 0.75);
          --bg-primary: #000000;
          --text-primary: #f1f5f9;
          --text-secondary: #cbd5e1;
          --card-bg: rgba(15,23,42,0.94);
          --border-glow: rgba(0,240,255,0.32);
          --input-bg: rgba(255,255,255,0.05);
          --modal-bg: rgba(6,6,28,0.98);
          --modal-text: #e0e0ff;
        }

        @keyframes slideIn { from { opacity:0; transform:translateY(50px); } to { opacity:1; transform:translateY(0); } }
        @keyframes scan     { 0% { transform:translateY(-100%); } 100% { transform:translateY(100%); } }
        @keyframes float    { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-10px); } }
        @keyframes pulse    { 0%,100% { opacity:1; } 50% { opacity:0.7; } }
        @keyframes spin     { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes blink    { 0%,100% { opacity:1; } 50% { opacity:0; } }

        .contact-card {
          transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
        }

        .contact-card:hover {
          transform: translateY(-12px);
          box-shadow: var(--neon-glow);
        }

        .input-focus {
          border-color: var(--neon-primary) !important;
          box-shadow: 0 0 20px rgba(var(--neon-primary-rgb),0.4) !important;
        }

        .neon-title {
          background: var(--neon-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 35px var(--neon-glow);
        }

        .theme-toggle {
          position: fixed;
          top: 20px;
          right: 30px;
          z-index: 1000;
          background: var(--card-bg);
          border: 2px solid var(--neon-primary);
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          alignItems: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 20px var(--neon-glow);
        }

        .theme-toggle:hover {
          transform: scale(1.15) rotate(15deg);
          box-shadow: 0 0 35px var(--neon-primary);
        }

        /* ─── RESPONSIVE FIXES ──────────────────────────────────────── */
        @media (max-width: 1024px) {
          .main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }

        @media (max-width: 768px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .action-buttons {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .social-grid {
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)) !important;
          }
          .floating-cta {
            display: flex !important;
          }
          .theme-toggle {
            top: 15px;
            right: 15px;
            width: 48px;
            height: 48px;
          }
        }

        @media (max-width: 480px) {
          .card-padding {
            padding: 1.8rem 1.4rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>

      {/* Theme Toggle Button */}
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle between Light & Dark mode"
      >
        {theme === "light" ? (
          <Moon size={26} color="#0066cc" />
        ) : (
          <Sun size={26} color="#00f0ff" />
        )}
      </button>

      <div style={{
        minHeight: '100vh',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 12vw, 10rem) 1.5rem 6rem',
        fontFamily: "'Outfit', sans-serif",
        transition: "background 0.5s ease, color 0.5s ease",
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(var(--neon-primary-rgb),0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--neon-primary-rgb),0.08) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: theme === "dark" ? 0.22 : 0.12,
          pointerEvents: 'none'
        }} />

        {/* Particles */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1600px',
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 10vw, 7rem)' }}>
            <div style={{
              display: 'inline-block',
              fontFamily: "'Fira Code', monospace",
              color: 'var(--neon-primary)',
              fontSize: 'clamp(1rem, 2.6vw, 1.15rem)',
              padding: '0.8rem 1.8rem',
              border: `2px solid rgba(var(--neon-primary-rgb),0.45)`,
              borderRadius: '999px',
              marginBottom: '1.6rem',
              animation: 'pulse 3.5s infinite'
            }}>
              {'>'} contact.initiate()
            </div>

            <h1 className="neon-title" style={{
              fontSize: 'clamp(3.8rem, 11vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '1.4rem',
              lineHeight: 1.1
            }}>
              OPEN CHANNEL
            </h1>

            <div style={{
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              fontWeight: 800,
              color: theme === "dark" ? '#b0b0ff' : '#374151',
              marginBottom: '2rem',
              minHeight: '3.2rem'
            }}>
              {currentText}
              <span style={{
                display: 'inline-block',
                width: '3px',
                height: '1.4em',
                background: 'var(--neon-primary)',
                animation: 'blink 1s step-end infinite',
                marginLeft: '4px',
                verticalAlign: 'middle'
              }} />
            </div>

            <p style={{
              fontSize: 'clamp(1.15rem, 3vw, 1.4rem)',
              color: theme === "dark" ? '#a0a0c8' : '#555555',
              maxWidth: '820px',
              margin: '0 auto',
              fontFamily: "'Fira Code', monospace",
              lineHeight: 1.8
            }}>
              Drop a message • Let's build the next big thing
            </p>
          </div>

          {/* Main Content - Form + Contact Info */}
          <div className="main-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 4rem)',
            '@media (max-width: 1024px)': {
              gridTemplateColumns: '1fr'
            }
          }}>
            {/* Contact Form */}
            <div style={{
              background: theme === "dark" ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.92)',
              border: `2px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.25)'}`,
              borderRadius: '24px',
              padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: '0 0 60px rgba(var(--neon-primary-rgb),0.2)'
            }}>
              {submitStatus === "success" ? (
                <div style={{
                  textAlign: 'center',
                  padding: '4rem 2rem'
                }}>
                  <div style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto 2rem',
                    borderRadius: '50%',
                    background: 'var(--neon-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 60px rgba(var(--neon-primary-rgb),0.8)'
                  }}>
                    <CheckCircle2 size={60} color="#000" />
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(2rem, 5vw, 2.4rem)',
                    fontWeight: 900,
                    color: 'var(--neon-primary)',
                    marginBottom: '1rem'
                  }}>
                    Message Received!
                  </h3>

                  <p style={{
                    fontSize: '1.3rem',
                    color: theme === "dark" ? '#b0b0ff' : '#374151'
                  }}>
                    I'll respond within 24 hours. Let's build something epic.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gap: '2rem' }}>
                    {/* Name & Email row */}
                    <div className="form-row" style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '2rem',
                      '@media (max-width: 640px)': { gridTemplateColumns: '1fr' }
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '0.8rem',
                          fontSize: '1.1rem',
                          color: theme === "dark" ? '#b0b0ff' : '#555555'
                        }}>
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          style={{
                            width: '100%',
                            padding: '1.2rem',
                            background: theme === "dark" ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            border: `2px solid ${focusedField === 'name' ? 'var(--neon-primary)' : theme === "dark" ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                            borderRadius: '12px',
                            color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                            fontSize: '1.1rem',
                            outline: 'none',
                            transition: 'all 0.3s'
                          }}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          marginBottom: '0.8rem',
                          fontSize: '1.1rem',
                          color: theme === "dark" ? '#b0b0ff' : '#555555'
                        }}>
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          style={{
                            width: '100%',
                            padding: '1.2rem',
                            background: theme === "dark" ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            border: `2px solid ${focusedField === 'email' ? 'var(--neon-primary)' : theme === "dark" ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                            borderRadius: '12px',
                            color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                            fontSize: '1.1rem',
                            outline: 'none',
                            transition: 'all 0.3s'
                          }}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.8rem',
                        fontSize: '1.1rem',
                        color: theme === "dark" ? '#b0b0ff' : '#555555'
                      }}>
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project collaboration / Job opportunity / Idea"
                        required
                        style={{
                          width: '100%',
                          padding: '1.2rem',
                          background: theme === "dark" ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          border: `2px solid ${focusedField === 'subject' ? 'var(--neon-primary)' : theme === "dark" ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                          borderRadius: '12px',
                          color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                          fontSize: '1.1rem',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '0.8rem',
                        fontSize: '1.1rem',
                        color: theme === "dark" ? '#b0b0ff' : '#555555'
                      }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about your project, idea, or how we can work together..."
                        required
                        style={{
                          width: '100%',
                          padding: '1.2rem',
                          background: theme === "dark" ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                          border: `2px solid ${focusedField === 'message' ? 'var(--neon-primary)' : theme === "dark" ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                          borderRadius: '12px',
                          color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                          fontSize: '1.1rem',
                          resize: 'vertical',
                          minHeight: '140px',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        padding: '1.4rem',
                        background: 'var(--neon-gradient)',
                        borderRadius: '999px',
                        color: '#000',
                        fontWeight: 900,
                        fontSize: '1.25rem',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        boxShadow: '0 0 50px rgba(var(--neon-primary-rgb),0.6)',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.7 : 1,
                        transition: 'all 0.4s'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div style={{
                            width: '24px',
                            height: '24px',
                            border: '3px solid #000',
                            borderTopColor: '#fff',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite'
                          }} />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={24} />
                          Send Transmission
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info & Social */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(2rem, 5vw, 3rem)'
            }}>
              {/* Quick Contact Cards */}
              <div className="contact-card" style={{
                background: theme === "dark" ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.92)',
                border: `2px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.25)'}`,
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.6rem, 4.5vw, 1.9rem)',
                  fontWeight: 800,
                  color: 'var(--neon-primary)',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  Direct Channels
                </h3>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.8rem'
                }}>
                  <a
                    href="mailto:g.sivasatyasaibhagavan@gmail.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: theme === "dark" ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                      borderRadius: '16px',
                      border: `1px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.25)'}`,
                      color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                      textDecoration: 'none',
                      transition: 'all 0.4s'
                    }}
                  >
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '20px',
                      background: 'var(--neon-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Mail size={36} color="#000" />
                    </div>

                    <div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                        Email
                      </div>
                      <div style={{ 
                        color: theme === "dark" ? '#b0b0ff' : '#555555', 
                        wordBreak: 'break-all' 
                      }}>
                        g.sivasatyasaibhagavan@gmail.com
                      </div>
                    </div>
                  </a>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1.5rem'
                  }}>
                    <a
                      href="tel:+917569205626"
                      style={{
                        padding: '1.5rem',
                        background: theme === "dark" ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                        borderRadius: '16px',
                        border: `1px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.25)'}`,
                        color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                        textDecoration: 'none',
                        textAlign: 'center',
                        transition: 'all 0.4s'
                      }}
                    >
                      <Phone size={28} style={{ marginBottom: '0.8rem' }} />
                      <div>+91 75692 05626</div>
                    </a>

                    <a
                      href="tel:+919032230626"
                      style={{
                        padding: '1.5rem',
                        background: theme === "dark" ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                        borderRadius: '16px',
                        border: `1px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.25)'}`,
                        color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                        textDecoration: 'none',
                        textAlign: 'center',
                        transition: 'all 0.4s'
                      }}
                    >
                      <Phone size={28} style={{ marginBottom: '0.8rem' }} />
                      <div>+91 90322 30626</div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-card" style={{
                background: theme === "dark" ? 'rgba(0,0,0,0.65)' : 'rgba(255,255,255,0.92)',
                border: `2px solid ${theme === "dark" ? 'rgba(0,240,255,0.3)' : 'rgba(0,183,235,0.25)'}`,
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 3rem) clamp(1.5rem, 4vw, 2.5rem)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.6rem, 4.5vw, 1.9rem)',
                  fontWeight: 800,
                  color: 'var(--neon-primary)',
                  marginBottom: '2rem',
                  textAlign: 'center'
                }}>
                  Social Gateways
                </h3>

                <div className="social-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: theme === "dark" ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                        borderRadius: '16px',
                        border: `1px solid ${link.color}40`,
                        color: theme === "dark" ? '#ffffff' : '#1a1a1a',
                        textDecoration: 'none',
                        transition: 'all 0.4s',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '20px',
                        background: link.color === '#ffffff' ? (theme === "dark" ? '#333' : '#ddd') : link.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <link.icon size={32} color={link.color === '#ffffff' ? (theme === "dark" ? '#fff' : '#000') : '#000'} />
                      </div>
                      <div style={{ fontWeight: 700 }}>
                        {link.label}
                      </div>
                      <div style={{ 
                        fontSize: '0.9rem', 
                        color: theme === "dark" ? '#b0b0ff' : '#555555' 
                      }}>
                        {link.stats}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div style={{
            marginTop: '8rem',
            padding: 'clamp(3rem, 8vw, 4.5rem) 2rem',
            background: theme === "dark" ? 'rgba(0,0,0,0.75)' : 'rgba(255,255,255,0.92)',
            border: `2.5px solid ${theme === "dark" ? 'rgba(0,240,255,0.38)' : 'rgba(0,183,235,0.25)'}`,
            borderRadius: '28px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
              fontWeight: 900,
              background: 'var(--neon-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2.5rem',
              textShadow: '0 0 40px rgba(var(--neon-primary-rgb),0.7)'
            }}>
              TRANSMISSION READY?
            </h2>

            <div className="cta-buttons" style={{ 
              display: 'flex', 
              gap: '2.5rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{
                padding: '1.4rem 3.2rem',
                background: theme === "dark" ? 'rgba(0,240,255,0.14)' : 'rgba(0,183,235,0.12)',
                border: `2.5px solid ${theme === "dark" ? 'rgba(0,240,255,0.7)' : 'rgba(0,183,235,0.4)'}`,
                borderRadius: '999px',
                color: 'var(--neon-primary)',
                fontWeight: 700,
                fontSize: '1.25rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}>
                <Github size={32} />
                VIEW REPOSITORIES
              </a>

              <a href="mailto:g.sivasatyasaibhagavan@gmail.com" style={{
                padding: '1.4rem 3.2rem',
                background: 'var(--neon-gradient)',
                borderRadius: '999px',
                color: '#000',
                fontWeight: 900,
                fontSize: '1.25rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem'
              }}>
                <Mail size={32} />
                INITIATE CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Floating CTA on mobile */}
        <div className="floating-cta" style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'none',
          gap: '1.5rem',
          zIndex: 100,
          '@media (max-width: 768px)': { display: 'flex' }
        }}>
          <button
            onClick={() => {/* Add WhatsApp or call action */}}
            style={{
              padding: '1rem 1.8rem',
              background: theme === "dark" ? 'rgba(0,240,255,0.2)' : 'rgba(0,183,235,0.15)',
              border: `2px solid var(--neon-primary)`,
              borderRadius: '999px',
              color: 'var(--neon-primary)',
              fontWeight: 700,
              backdropFilter: 'blur(12px)'
            }}
          >
            <Phone size={24} />
          </button>

          <a
            href="mailto:g.sivasatyasaibhagavan@gmail.com"
            style={{
              padding: '1rem 2rem',
              background: 'var(--neon-gradient)',
              borderRadius: '999px',
              color: '#000',
              fontWeight: 900,
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              boxShadow: '0 0 30px rgba(var(--neon-primary-rgb),0.6)'
            }}
          >
            <Mail size={24} />
            Email
          </a>
        </div>
      </div>
    </>
  );
}