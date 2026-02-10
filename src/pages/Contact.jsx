import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  Mail, Phone, Send, CheckCircle2, Linkedin, Github, Twitter,
  MapPin, Calendar, ExternalLink, Sparkles, Rocket, Zap,
  User, MessageCircle, ArrowRight, Star, TrendingUp,
  Award, Target, Shield, Activity, Clock, Globe, Terminal
} from "lucide-react";

export default function PremiumContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroTexts = [
    "Let's Build Something Amazing",
    "Transform Ideas Into Reality",
    "Your Vision, My Expertise",
    "Premium Solutions Delivered"
  ];

  // Text rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2) newErrors.name = "Name too short";
    
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) {
      newErrors.message = "Message too short (min 10 characters)";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const stats = [
    { icon: Award, value: "50+", label: "Projects Delivered", color: "#06b6d4" },
    { icon: Star, value: "98%", label: "Success Rate", color: "#a855f7" },
    { icon: Target, value: "45+", label: "Happy Clients", color: "#f59e0b" },
    { icon: Clock, value: "<24h", label: "Response Time", color: "#10b981" }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "g.sivasatyasaibhagavan@gmail.com",
      href: "mailto:g.sivasatyasaibhagavan@gmail.com",
      color: "#06b6d4",
      description: "Primary contact"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 75692 05626",
      href: "tel:+917569205626",
      color: "#a855f7",
      description: "Available 9 AM - 9 PM IST"
    },
    {
      icon: Phone,
      title: "Alternative",
      value: "+91 90322 30626",
      href: "tel:+919032230626",
      color: "#f59e0b",
      description: "Secondary contact"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@bhagavan444",
      href: "https://github.com/bhagavan444",
      color: "#ffffff",
      stats: "15+ repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Bhagavan G",
      href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/",
      color: "#0077b5",
      stats: "500+ connections"
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@bhagavan444",
      href: "https://twitter.com/bhagavan444",
      color: "#1da1f2",
      stats: "Tech insights"
    }
  ];

  const features = [
    { icon: Shield, title: "Secure Communication", desc: "End-to-end encrypted" },
    { icon: Activity, title: "Real-time Updates", desc: "Instant notifications" },
    { icon: TrendingUp, title: "Professional Service", desc: "Enterprise-grade quality" },
    { icon: Zap, title: "Fast Response", desc: "24-hour guarantee" }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px currentColor; }
          50% { box-shadow: 0 0 40px currentColor, 0 0 60px currentColor; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(30px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-card:hover {
          transform: translateY(-8px);
          border-color: rgba(6, 182, 212, 0.5);
          box-shadow: 0 20px 60px rgba(6, 182, 212, 0.2);
        }

        .input-field {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #fff;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s;
          outline: none;
        }

        .input-field:focus {
          border-color: #06b6d4;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          background: rgba(255, 255, 255, 0.08);
        }

        .input-field.error {
          border-color: #ef4444;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.3);
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #06b6d4, #a855f7);
          border-radius: 5px;
        }
      `}</style>

      <div
        ref={containerRef}
        style={{
          minHeight: '100vh',
          background: '#000',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Progress bar */}
        <motion.div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f59e0b)',
            transformOrigin: '0%',
            scaleX,
            zIndex: 10000
          }}
        />

        {/* Animated background */}
        <div style={{
          position: 'fixed',
          inset: 0,
          background: `
            radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }} />

        {/* Grid pattern */}
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
          opacity: 0.5
        }} />

        {/* Cursor gradient effect */}
        <motion.div
          animate={{
            x: mousePos.x - 200,
            y: mousePos.y - 200
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          style={{
            position: 'fixed',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Main content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1600px',
          margin: '0 auto',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)'
        }}>
          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem 1.5rem',
              marginBottom: '3rem',
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '20px',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 15px #10b981'
                }}
              />
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.95rem',
                color: '#10b981',
                fontWeight: 700
              }}>
                AVAILABLE FOR PROJECTS
              </span>
            </div>
            
            <div style={{
              display: 'flex',
              gap: '2rem',
              fontSize: '0.9rem',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              <div>Response: <span style={{ color: '#06b6d4', fontWeight: 700 }}>{'<24h'}</span></div>
              <div>Status: <span style={{ color: '#10b981' }}>Active</span></div>
            </div>
          </motion.div>

          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(4rem, 8vw, 6rem)'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                display: 'inline-block',
                marginBottom: '2rem'
              }}
            >
              <Terminal size={50} color="#06b6d4" strokeWidth={2} />
            </motion.div>

            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 900,
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: '1.5rem',
              lineHeight: 1,
              letterSpacing: '-0.02em'
            }}>
              <motion.span
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Get In Touch
              </motion.span>
            </h1>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                  fontWeight: 600,
                  color: '#94a3b8',
                  marginBottom: '2rem',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {heroTexts[currentTextIndex]}
              </motion.p>
            </AnimatePresence>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#64748b',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              Ready to bring your vision to life with cutting-edge technology and professional expertise
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginTop: '3rem',
                maxWidth: '1000px',
                margin: '3rem auto 0'
              }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card"
                    style={{
                      padding: '1.5rem',
                      borderRadius: '20px',
                      textAlign: 'center'
                    }}
                  >
                    <Icon size={32} color={stat.color} style={{ marginBottom: '0.75rem' }} />
                    <div style={{
                      fontSize: '2rem',
                      fontWeight: 900,
                      color: stat.color,
                      marginBottom: '0.5rem',
                      fontFamily: "'Space Grotesk', sans-serif"
                    }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '4rem'
            }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    borderRadius: '20px'
                  }}
                >
                  <Icon size={28} color="#06b6d4" style={{ marginBottom: '1rem' }} />
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main contact section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth > 1024 ? '1.2fr 1fr' : '1fr',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px'
              }}
            >
              {submitSuccess ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ textAlign: 'center', padding: '3rem 1rem' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '100px',
                      height: '100px',
                      margin: '0 auto 2rem',
                      background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)'
                    }}
                  >
                    <CheckCircle2 size={50} color="#000" strokeWidth={3} />
                  </motion.div>
                  
                  <h3 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 900,
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, #06b6d4, #10b981)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Message Sent Successfully!
                  </h3>
                  
                  <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '0.5rem' }}>
                    Thank you for reaching out!
                  </p>
                  <p style={{ fontSize: '1rem', color: '#64748b' }}>
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 900,
                    marginBottom: '2rem',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    Send a Message
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#cbd5e1'
                      }}>
                        <User size={18} />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`input-field ${errors.name ? 'error' : ''}`}
                      />
                      {errors.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            color: '#ef4444',
                            fontSize: '0.85rem',
                            marginTop: '0.5rem',
                            fontFamily: "'JetBrains Mono', monospace"
                          }}
                        >
                          {errors.name}
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#cbd5e1'
                      }}>
                        <Mail size={18} />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`input-field ${errors.email ? 'error' : ''}`}
                      />
                      {errors.email && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            color: '#ef4444',
                            fontSize: '0.85rem',
                            marginTop: '0.5rem',
                            fontFamily: "'JetBrains Mono', monospace"
                          }}
                        >
                          {errors.email}
                        </motion.div>
                      )}
                    </div>

                    <div>
                      <label style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#cbd5e1'
                      }}>
                        <MessageCircle size={18} />
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell me about your project..."
                        className={`input-field ${errors.message ? 'error' : ''}`}
                        style={{ resize: 'vertical', minHeight: '150px' }}
                      />
                      {errors.message && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            color: '#ef4444',
                            fontSize: '0.85rem',
                            marginTop: '0.5rem',
                            fontFamily: "'JetBrains Mono', monospace"
                          }}
                        >
                          {errors.message}
                        </motion.div>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        width: '100%',
                        padding: '1.2rem',
                        background: isSubmitting 
                          ? 'rgba(6, 182, 212, 0.5)'
                          : 'linear-gradient(135deg, #06b6d4, #a855f7)',
                        border: 'none',
                        borderRadius: '12px',
                        color: '#000',
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        fontFamily: "'Space Grotesk', sans-serif",
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)',
                        transition: 'all 0.3s'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            style={{
                              width: '20px',
                              height: '20px',
                              border: '3px solid #000',
                              borderTopColor: 'transparent',
                              borderRadius: '50%'
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                          <Rocket size={20} />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}
            >
              {/* Contact methods */}
              <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  Contact Information
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <motion.a
                        key={index}
                        href={method.href}
                        whileHover={{ x: 5 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: `2px solid rgba(${method.color === '#06b6d4' ? '6, 182, 212' : method.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.3)`,
                          borderRadius: '12px',
                          textDecoration: 'none',
                          color: '#fff',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(${method.color === '#06b6d4' ? '6, 182, 212' : method.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.1)`;
                          e.currentTarget.style.borderColor = method.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = `rgba(${method.color === '#06b6d4' ? '6, 182, 212' : method.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.3)`;
                        }}
                      >
                        <div style={{
                          width: '45px',
                          height: '45px',
                          borderRadius: '10px',
                          background: `rgba(${method.color === '#06b6d4' ? '6, 182, 212' : method.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icon size={22} color={method.color} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: '0.8rem',
                            color: '#94a3b8',
                            marginBottom: '0.25rem'
                          }}>
                            {method.title}
                          </div>
                          <div style={{
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            wordBreak: 'break-all'
                          }}>
                            {method.value}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#64748b',
                            marginTop: '0.25rem'
                          }}>
                            {method.description}
                          </div>
                        </div>
                        <ArrowRight size={18} color={method.color} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social links */}
              <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  marginBottom: '1.5rem',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  Social Networks
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '1rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: `2px solid ${social.color}40`,
                          borderRadius: '12px',
                          textDecoration: 'none',
                          color: '#fff',
                          transition: 'all 0.3s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${social.color}20`;
                          e.currentTarget.style.borderColor = social.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.borderColor = `${social.color}40`;
                        }}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: social.color === '#ffffff' ? '#1e293b' : `${social.color}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icon size={20} color={social.color} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            marginBottom: '0.25rem'
                          }}>
                            {social.label}
                          </div>
                          <div style={{
                            fontSize: '0.8rem',
                            color: '#94a3b8'
                          }}>
                            {social.username}
                          </div>
                          <div style={{
                            fontSize: '0.75rem',
                            color: '#64748b',
                            marginTop: '0.25rem'
                          }}>
                            {social.stats}
                          </div>
                        </div>
                        <ExternalLink size={18} color={social.color} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability badge */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.3)',
                    '0 0 40px rgba(16, 185, 129, 0.6)',
                    '0 0 20px rgba(16, 185, 129, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  padding: '1.5rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '2px solid rgba(16, 185, 129, 0.4)',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 15px #10b981'
                    }}
                  />
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#10b981',
                    fontFamily: "'Space Grotesk', sans-serif"
                  }}>
                    ACCEPTING NEW PROJECTS
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Limited slots available for Q1 2025
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card"
            style={{
              padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem)',
              borderRadius: '32px',
              textAlign: 'center',
              background: 'rgba(6, 182, 212, 0.05)',
              border: '2px solid rgba(6, 182, 212, 0.3)'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ marginBottom: '2rem' }}
            >
              <Sparkles size={50} color="#06b6d4" />
            </motion.div>

            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Ready to Start Your Project?
            </h2>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.3rem)',
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.8
            }}>
              Let's collaborate to build something extraordinary together
            </p>

            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/bhagavan444"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.2rem 2.5rem',
                  background: 'rgba(6, 182, 212, 0.2)',
                  border: '2px solid #06b6d4',
                  borderRadius: '100px',
                  color: '#06b6d4',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#06b6d4';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                  e.currentTarget.style.color = '#06b6d4';
                }}
              >
                <Globe size={20} />
                View Portfolio
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:g.sivasatyasaibhagavan@gmail.com"
                style={{
                  padding: '1.2rem 2.5rem',
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  border: 'none',
                  borderRadius: '100px',
                  color: '#000',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  fontFamily: "'Space Grotesk', sans-serif",
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)'
                }}
              >
                <Rocket size={20} />
                Start Project Now
              </motion.a>
            </div>

            <div style={{
              marginTop: '3rem',
              fontSize: '1.5rem',
              letterSpacing: '0.3rem'
            }}>
              ⭐⭐⭐⭐⭐
            </div>
            <div style={{
              fontSize: '0.9rem',
              color: '#64748b',
              marginTop: '0.5rem'
            }}>
              Trusted by clients worldwide
            </div>
          </motion.div>

          {/* Footer */}
          <div style={{
            marginTop: '4rem',
            padding: '2rem',
            textAlign: 'center',
            borderTop: '2px solid rgba(6, 182, 212, 0.2)'
          }}>
            <p style={{
              fontSize: '0.9rem',
              color: '#64748b',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              © 2025 Bhagavan G • Crafted with precision and passion
            </p>
          </div>
        </div>
      </div>
    </>
  );
}