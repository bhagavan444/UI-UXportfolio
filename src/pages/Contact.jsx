// Contact.jsx
import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Send,
  Check,
  Linkedin,
  Github,
  Twitter,
  Code,
  Zap,
  MessageCircle,
  User,
  ArrowRight,
  Sparkles,
  Award,
  Target,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);

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

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitStatus("idle"), 4000);
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const techStack = [
    { icon: Code, label: "React", color: "#60a5fa" },
    { icon: Zap, label: "JavaScript", color: "#fbbf24" },
    { icon: Target, label: "Node.js", color: "#34d399" },
    { icon: Award, label: "Tailwind", color: "#22d3ee" },
    { icon: Sparkles, label: "Next.js", color: "#c084fc" },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/bhagavan444",
      color: "#6b7280",
      stats: "8+ Repos",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/",
      color: "#3b82f6",
      stats: "Connect",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/bhagavan444",
      color: "#60a5fa",
      stats: "Follow",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:g.sivasatyasaibhagavan@gmail.com",
      color: "#ef4444",
      stats: "Direct",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "80px 24px",
        background: "linear-gradient(135deg, #020617, #0f172a, #020617)",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Orbs */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "384px",
          height: "384px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.2))",
          filter: "blur(64px)",
          animation: "floatSlow 20s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "33%",
          right: "25%",
          width: "384px",
          height: "384px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(59,130,246,0.2))",
          filter: "blur(64px)",
          animation: "floatSlower 25s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: "33%",
          width: "384px",
          height: "384px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(236,72,153,0.15), rgba(244,63,94,0.15))",
          filter: "blur(64px)",
          animation: "floatMedium 22s ease-in-out infinite",
        }}
      />

      {/* Subtle Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Particles */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "linear-gradient(90deg, #6366f1, #a855f7)",
              opacity: 0.4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
            opacity: 0,
            transform: "translateY(60px)",
            animation: "fadeInUp 1s ease-out 0.4s forwards",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 24px",
              borderRadius: "9999px",
              background: "linear-gradient(90deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1), rgba(236,72,153,0.1))",
              border: "2px solid rgba(99,102,241,0.2)",
              backdropFilter: "blur(24px)",
              marginBottom: "32px",
              boxShadow: "0 0 40px rgba(99,102,241,0.2)",
              animation: "glow 3s ease-in-out infinite",
            }}
          >
            <Zap size={20} color="#6366f1" />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #a5f3fc, #e9d5ff, #fecaca)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "0.1em",
              }}
            >
              OPEN TO COLLABORATE
            </span>
            <div style={{ position: "relative", width: "8px", height: "8px" }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  backgroundColor: "#6366f1",
                  animation: "pingSmooth 2s cubic-bezier(0,0,0.2,1) infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  backgroundColor: "#6366f1",
                }}
              />
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              fontWeight: "900",
              lineHeight: 1.1,
              marginBottom: "24px",
              animation: "titleReveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
            }}
          >
            <span style={{ display: "block", color: "white", textShadow: "0 0 20px rgba(255,255,255,0.3)" }}>
              GET IN
            </span>
            <span
              style={{
                display: "block",
                background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200%",
                animation: "bgAnimate 6s ease infinite",
              }}
            >
              TOUCH
            </span>
          </h1>

          <div style={{ maxWidth: "672px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                color: "#cbd5e1",
                fontWeight: "500",
              }}
            >
              {currentText}
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "1.4em",
                  background: "linear-gradient(to bottom, #6366f1, #a855f7)",
                  animation: "cursorBlink 1s step-end infinite",
                  marginLeft: "4px",
                  verticalAlign: "middle",
                }}
              />
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "64px",
            "@media (min-width: 1024px)": { gridTemplateColumns: "1fr 1fr" },
            alignItems: "start",
          }}
        >
          {/* Form Section */}
          <div
            style={{
              opacity: 0,
              transform: "translateX(-60px)",
              animation: "slideInLeft 1s ease-out 0.6s forwards",
            }}
          >
            {submitStatus === "success" ? (
              <div
                style={{
                  padding: "48px",
                  borderRadius: "24px",
                  background: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(5,150,105,0.1))",
                  border: "2px solid rgba(16,185,129,0.3)",
                  backdropFilter: "blur(24px)",
                  textAlign: "center",
                  animation: "successBounce 2s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    margin: "0 auto 24px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 40px rgba(16,185,129,0.5)",
                    animation: "rotateSlow 20s linear infinite",
                  }}
                >
                  <Check size={48} color="white" />
                </div>
                <h3 style={{ fontSize: "2.25rem", fontWeight: "900", color: "white", marginBottom: "12px" }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: "1.25rem", color: "#6ee7b7" }}>
                  I'll get back to you within 24 hours 🚀
                </p>
              </div>
            ) : (
              <div
                onMouseMove={handleMouseMove}
                style={{
                  position: "relative",
                  padding: "40px",
                  backgroundColor: "rgba(15,23,42,0.5)",
                  backdropFilter: "blur(24px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                  overflow: "hidden",
                }}
              >
                {/* Mouse-follow gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0,
                    transition: "opacity 0.5s",
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.12), transparent 40%)`,
                    pointerEvents: "none",
                  }}
                />

                <div style={{ display: "grid", gap: "24px", "@media (min-width: 640px)": { gridTemplateColumns: "1fr 1fr" } }}>
                  {/* Name */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#cbd5e1",
                        marginBottom: "12px",
                      }}
                    >
                      <User size={16} color="#6366f1" />
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your name"
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        borderRadius: "16px",
                        border: "2px solid rgba(255,255,255,0.1)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(8px)",
                        color: "white",
                        fontSize: "16px",
                        transition: "all 0.3s",
                        outline: "none",
                        ":focus": {
                          borderColor: "#6366f1",
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    />
                    {focusedField === "name" && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-1px",
                          left: 0,
                          width: "0%",
                          height: "2px",
                          background: "linear-gradient(to right, #6366f1, #a855f7)",
                          animation: "expand 0.3s ease forwards",
                        }}
                      />
                    )}
                  </div>

                  {/* Email */}
                  <div style={{ position: "relative" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "#cbd5e1",
                        marginBottom: "12px",
                      }}
                    >
                      <Mail size={16} color="#6366f1" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={{
                        width: "100%",
                        padding: "16px 20px",
                        borderRadius: "16px",
                        border: "2px solid rgba(255,255,255,0.1)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(8px)",
                        color: "white",
                        fontSize: "16px",
                        transition: "all 0.3s",
                        outline: "none",
                        ":focus": {
                          borderColor: "#6366f1",
                          backgroundColor: "rgba(255,255,255,0.1)",
                        },
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#cbd5e1",
                      marginBottom: "12px",
                    }}
                  >
                    <MessageCircle size={16} color="#6366f1" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, job opportunity, etc."
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      borderRadius: "16px",
                      border: "2px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(8px)",
                      color: "white",
                      fontSize: "16px",
                      transition: "all 0.3s",
                      outline: "none",
                      ":focus": {
                        borderColor: "#6366f1",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#cbd5e1",
                      marginBottom: "12px",
                    }}
                  >
                    <Code size={16} color="#6366f1" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project, idea, or how we can work together..."
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      borderRadius: "16px",
                      border: "2px solid rgba(255,255,255,0.1)",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(8px)",
                      color: "white",
                      fontSize: "16px",
                      resize: "none",
                      outline: "none",
                      transition: "all 0.3s",
                      ":focus": {
                        borderColor: "#6366f1",
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{
                    position: "relative",
                    width: "100%",
                    padding: "20px 32px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #4f46e5, #a855f7, #ec4899)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "18px",
                    border: "none",
                    overflow: "hidden",
                    boxShadow: "0 10px 40px rgba(99,102,241,0.4)",
                    transition: "all 0.3s",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.6 : 1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                      transform: "translateX(-100%)",
                      transition: "transform 0.7s",
                    }}
                    className="hover-slide"
                  />
                  <span style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                    {isSubmitting ? (
                      <>
                        <div
                          style={{
                            width: "24px",
                            height: "24px",
                            border: "3px solid rgba(255,255,255,0.3)",
                            borderTopColor: "white",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} style={{ transition: "transform 0.3s" }} />
                        Send Message
                        <ArrowRight
                          size={20}
                          style={{
                            opacity: 0,
                            transition: "all 0.3s",
                          }}
                          className="group-hover:opacity-100 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Info & Social */}
          <div
            style={{
              opacity: 0,
              transform: "translateX(60px)",
              animation: "slideInRight 1s ease-out 0.8s forwards",
            }}
          >
            {/* Tech Stack */}
            <div
              style={{
                padding: "32px",
                borderRadius: "24px",
                backgroundColor: "rgba(15,23,42,0.5)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                transition: "all 0.5s",
                ":hover": { borderColor: "rgba(255,255,255,0.2)" },
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <Sparkles size={28} color="#6366f1" style={{ animation: "pulseSlow 3s infinite" }} />
                <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "white" }}>Tech I'm Loving</h3>
              </div>

              <div style={{ display: "grid", gap: "16px", "@media (min-width: 640px)": { gridTemplateColumns: "1fr 1fr" } }}>
                {techStack.map((tech, i) => (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      padding: "20px",
                      borderRadius: "16px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      transition: "all 0.4s",
                      overflow: "hidden",
                      animation: `fadeInStagger 0.5s ease ${i * 0.1 + 0.5}s backwards`,
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(90deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))",
                        opacity: 0,
                        transition: "opacity 0.4s",
                      }}
                    />
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${tech.color})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                        transition: "all 0.4s",
                      }}
                    >
                      <tech.icon size={24} color="white" />
                    </div>
                    <p style={{ fontWeight: "bold", fontSize: "1.125rem", color: "white" }}>{tech.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div
              style={{
                padding: "32px",
                borderRadius: "24px",
                background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.1))",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(99,102,241,0.2)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <h3 style={{ fontSize: "1.75rem", fontWeight: "900", color: "white", marginBottom: "24px" }}>
                Connect With Me
              </h3>

              {/* Phone Numbers */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.4s",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                      transition: "all 0.4s",
                    }}
                  >
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", color: "#94a3b8" }}>Primary</p>
                    <a
                      href="tel:+917569205626"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.125rem",
                        color: "white",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                    >
                      +91 75692 05626
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px",
                    borderRadius: "16px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.4s",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                      transition: "all 0.4s",
                    }}
                  >
                    <Phone size={24} color="white" />
                  </div>
                  <div>
                    <p style={{ fontSize: "13px", color: "#94a3b8" }}>Secondary</p>
                    <a
                      href="tel:+919032230626"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.125rem",
                        color: "white",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                    >
                      +91 90322 30626
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ display: "grid", gap: "16px", "@media (min-width: 640px)": { gridTemplateColumns: "1fr 1fr" } }}>
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "20px",
                      borderRadius: "16px",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.4s",
                      animation: `fadeInStagger 0.5s ease ${i * 0.1 + 0.5}s backwards`,
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `linear-gradient(135deg, ${social.color}, #4b5563)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                        transition: "all 0.4s",
                      }}
                    >
                      <social.icon size={24} color="white" />
                    </div>
                    <div>
                      <p style={{ fontWeight: "bold", fontSize: "1.125rem", color: "white" }}>{social.label}</p>
                      <p style={{ fontSize: "13px", color: "#94a3b8" }}>{social.stats}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes titleReveal {
          from { opacity: 0; transform: scale(0.92) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 30px rgba(99,102,241,0.3); }
          50% { box-shadow: 0 0 60px rgba(99,102,241,0.6); }
        }
        @keyframes pingSmooth {
          0% { opacity: 1; transform: scale(1); }
          75%, 100% { opacity: 0; transform: scale(2.5); }
        }
        @keyframes cursorBlink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes bgAnimate {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 200% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(40px, -40px) rotate(3deg); }
          66% { transform: translate(-30px, 30px) rotate(-3deg); }
        }
        @keyframes floatSlower {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 40px) rotate(-3deg); }
          66% { transform: translate(35px, -25px) rotate(3deg); }
        }
        @keyframes floatMedium {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(60px, -60px) scale(1.6); opacity: 0.9; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes expand {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes successBounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes fadeInStagger {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparkleBurst {
          0%, 100% { opacity: 0.6; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}