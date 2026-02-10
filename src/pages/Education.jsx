import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  GraduationCap, Calendar, MapPin, Brain, Code, Trophy,
  Sparkles, X, CheckCircle2, ExternalLink, Award,
  Star, ChevronRight, Rocket, Terminal, Activity,
  Zap, Flame, Globe, Play, ArrowRight, Target,
  BookOpen, TrendingUp, Layers, Grid3x3
} from "lucide-react";

export default function NextGenEducation() {
  const [activeView, setActiveView] = useState("cards");
  const [selectedEdu, setSelectedEdu] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const education = [
    {
      id: 1,
      degree: "B.Tech in AI & Data Science",
      institution: "Ramachandra College of Engineering",
      university: "JNTUK",
      duration: "2022 – 2026",
      score: "7.9 CGPA",
      location: "Eluru, Andhra Pradesh",
      description: "Specialized in building intelligent systems using Machine Learning, Deep Learning, and Full-Stack Development. Focus on production-ready AI applications.",
      image: "https://lh3.googleusercontent.com/d/1wxnzvsS3MA7xWSxuXKeIkS8GaQoG4Y1a",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      color: "#06b6d4",
      icon: Brain,
      badge: "CURRENT",
      year: 2024,
      skills: [
        "Machine Learning",
        "Deep Learning", 
        "MERN Stack",
        "Computer Vision",
        "MLOps",
        "Neural Networks",
        "Python",
        "React.js"
      ],
      achievements: [
        "AI/ML Internship at Leading Tech Firms",
        "Top 10% Academic Performer",
        "10+ Full-Stack AI Projects Deployed",
        "24-Hour Hackathon Winner",
        "20+ Professional Certifications"
      ],
      progress: 85
    },
    {
      id: 2,
      degree: "Intermediate (MPC)",
      institution: "Srividhya Junior College",
      university: "Board of Intermediate",
      duration: "2020 – 2022",
      score: "7.8 CGPA",
      location: "Gudivada, Andhra Pradesh",
      description: "Pre-engineering curriculum with emphasis on Mathematics, Physics, and Chemistry. Built strong analytical and problem-solving foundation.",
      image: "https://lh3.googleusercontent.com/d/1N1K1j6QGrgNPNL2D9UmfJAL2PVSulhPJ",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      color: "#a855f7",
      icon: Code,
      badge: "FOUNDATION",
      year: 2021,
      skills: [
        "Mathematical Reasoning",
        "Physics Principles",
        "Problem Solving",
        "Analytical Thinking",
        "Scientific Method"
      ],
      achievements: [
        "Top Performer in Mathematics",
        "Strong Academic Foundation",
        "Science Exhibition Participant"
      ],
      progress: 78
    },
    {
      id: 3,
      degree: "Secondary Education (10th)",
      institution: "Montessori English Medium High School",
      university: "SSC Board",
      duration: "2019 – 2020",
      score: "9.5 GPA",
      location: "Gudivada, Andhra Pradesh",
      description: "Achieved academic excellence with exceptional performance in Mathematics and Science. Perfect GPA with distinction in all subjects.",
      image: "https://lh3.googleusercontent.com/d/1p1RXnVn9jySamu8OiIWF0WFhe7G6QxiL",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      color: "#f59e0b",
      icon: Trophy,
      badge: "EXCELLENCE",
      year: 2020,
      skills: [
        "Academic Excellence",
        "Leadership",
        "Critical Thinking",
        "Discipline"
      ],
      achievements: [
        "School Topper (9.5 GPA)",
        "Perfect Score in Mathematics",
        "Excellence Award Winner"
      ],
      progress: 95
    }
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotate for carousel
  useEffect(() => {
    if (activeView === "carousel") {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % education.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeView, education.length]);

  const HeroSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        textAlign: 'center',
        marginBottom: 'clamp(4rem, 8vw, 8rem)',
        position: 'relative'
      }}
    >
      {/* Floating badge */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'clamp(0.5rem, 1vw, 1rem)',
          padding: 'clamp(0.6rem, 1.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)',
          background: 'rgba(6, 182, 212, 0.1)',
          border: '2px solid rgba(6, 182, 212, 0.5)',
          borderRadius: '100px',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 10px 40px rgba(6, 182, 212, 0.2)'
        }}
      >
        <Terminal size={20} color="#06b6d4" strokeWidth={2.5} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
          fontWeight: 700,
          color: '#06b6d4',
          letterSpacing: '2px'
        }}>
          EDUCATION.NEXUS
        </span>
        <Activity size={20} color="#06b6d4" strokeWidth={2.5} />
      </motion.div>

      {/* Main title */}
      <motion.h1
        style={{
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 900,
          fontFamily: "'Space Grotesk', sans-serif",
          marginBottom: 'clamp(1rem, 2vw, 2rem)',
          lineHeight: 1,
          letterSpacing: '-0.02em'
        }}
      >
        <motion.span
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f59e0b, #06b6d4)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Academic Journey
        </motion.span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.4rem)',
          color: '#94a3b8',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: 1.8,
          fontWeight: 500,
          padding: '0 1rem'
        }}
      >
        From foundational excellence to cutting-edge AI expertise
        <br />
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            color: '#06b6d4',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(0.85rem, 1.6vw, 1.1rem)',
            display: 'inline-block',
            marginTop: '1rem'
          }}
        >
          [ 2019 → Present ] • 7 Years of Growth
        </motion.span>
      </motion.p>

      {/* View mode selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'flex',
          gap: 'clamp(0.8rem, 2vw, 1.5rem)',
          justifyContent: 'center',
          marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          flexWrap: 'wrap',
          padding: '0 1rem'
        }}
      >
        {[
          { mode: "cards", icon: Grid3x3, label: "Cards" },
          { mode: "timeline", icon: Layers, label: "Timeline" },
          { mode: "carousel", icon: Play, label: "Carousel" }
        ].map(({ mode, icon: Icon, label }) => (
          <motion.button
            key={mode}
            onClick={() => setActiveView(mode)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(0.8rem, 2vw, 1rem) clamp(2rem, 4vw, 3rem)',
              background: activeView === mode
                ? 'rgba(6, 182, 212, 0.2)'
                : 'rgba(255, 255, 255, 0.05)',
              border: activeView === mode
                ? '2px solid #06b6d4'
                : '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '100px',
              color: activeView === mode ? '#06b6d4' : '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.5rem, 1vw, 0.8rem)',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
              fontWeight: 700,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              boxShadow: activeView === mode
                ? '0 10px 40px rgba(6, 182, 212, 0.3)'
                : '0 5px 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            <Icon size={18} strokeWidth={2.5} />
            {label}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );

  const CardsView = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px, 100%), 1fr))',
        gap: 'clamp(2rem, 4vw, 3rem)',
        padding: '0 clamp(1rem, 2vw, 2rem)'
      }}
    >
      {education.map((edu, index) => {
        const Icon = edu.icon;
        const isHovered = hoveredId === edu.id;

        return (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ y: -10, rotateX: 2 }}
            onHoverStart={() => setHoveredId(edu.id)}
            onHoverEnd={() => setHoveredId(null)}
            onClick={() => setSelectedEdu(edu)}
            style={{
              position: 'relative',
              background: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(30px)',
              border: `2px solid ${isHovered ? edu.color : 'rgba(255, 255, 255, 0.1)'}`,
              borderRadius: '24px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: isHovered
                ? `0 30px 60px rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.4)`
                : '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Image section */}
            <div style={{
              height: '280px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <motion.img
                src={edu.image}
                alt={edu.institution}
                animate={{
                  scale: isHovered ? 1.15 : 1.05
                }}
                transition={{ duration: 0.6 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 70%)'
              }} />

              {/* Badge */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.05 : 1
                }}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  padding: '0.6rem 1.5rem',
                  background: `rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`,
                  backdropFilter: 'blur(20px)',
                  border: `2px solid ${edu.color}`,
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  color: edu.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: `0 5px 20px rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.3)`
                }}
              >
                <Flame size={14} />
                {edu.badge}
              </motion.div>

              {/* Icon */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0
                }}
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '2rem',
                  width: '80px',
                  height: '80px',
                  background: `linear-gradient(135deg, ${edu.gradient})`,
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid rgba(15, 23, 42, 1)',
                  boxShadow: `0 10px 30px rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.5)`
                }}
              >
                <Icon size={40} color="white" strokeWidth={2.5} />
              </motion.div>
            </div>

            {/* Content */}
            <div style={{ padding: '3rem 2rem 2rem' }}>
              {/* Year */}
              <div style={{
                fontSize: '0.85rem',
                color: '#64748b',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Calendar size={16} />
                {edu.duration}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                fontWeight: 800,
                color: edu.color,
                marginBottom: '0.5rem',
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.2
              }}>
                {edu.degree}
              </h3>

              {/* Institution */}
              <div style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                marginBottom: '0.3rem',
                fontWeight: 600
              }}>
                {edu.institution}
              </div>

              {/* Location */}
              <div style={{
                fontSize: '0.95rem',
                color: '#64748b',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                <MapPin size={16} />
                {edu.location}
              </div>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: '2rem'
              }}>
                {edu.description}
              </p>

              {/* Score & Progress */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  padding: '0.8rem 2rem',
                  background: `rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.15)`,
                  border: `2px solid ${edu.color}`,
                  borderRadius: '100px',
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  color: edu.color,
                  fontFamily: "'Space Grotesk', sans-serif"
                }}>
                  {edu.score}
                </div>

                {/* Progress ring */}
                <div style={{ position: 'relative', width: '60px', height: '60px' }}>
                  <svg style={{ transform: 'rotate(-90deg)', width: '100%', height: '100%' }}>
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.1)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="30"
                      cy="30"
                      r="26"
                      fill="none"
                      stroke={edu.color}
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 26}`}
                      strokeDashoffset={`${2 * Math.PI * 26 * (1 - edu.progress / 100)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: edu.color
                  }}>
                    {edu.progress}%
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem'
              }}>
                {edu.skills.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(0, 0, 0, 0.5)',
                      border: `1.5px solid ${edu.color}40`,
                      borderRadius: '100px',
                      fontSize: '0.8rem',
                      color: edu.color,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ x: 5 }}
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: edu.color,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: 'pointer'
                }}
              >
                View Details
                <ArrowRight size={18} strokeWidth={3} />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  const TimelineView = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        padding: '4rem 0',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {/* Timeline line */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: '3px',
        background: 'linear-gradient(to bottom, #06b6d4, #a855f7, #f59e0b)',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
      }} />

      {education.map((edu, index) => {
        const Icon = edu.icon;
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            style={{
              display: 'flex',
              justifyContent: isLeft ? 'flex-end' : 'flex-start',
              marginBottom: '6rem',
              position: 'relative',
              padding: '0 clamp(1rem, 3vw, 3rem)'
            }}
          >
            {/* Timeline node */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                background: `linear-gradient(135deg, ${edu.gradient})`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid rgba(0, 0, 0, 1)',
                boxShadow: `0 0 40px ${edu.color}`,
                zIndex: 10
              }}
            >
              <Icon size={36} color="white" strokeWidth={2.5} />
            </motion.div>

            {/* Content card */}
            <motion.div
              whileHover={{ scale: 1.02, x: isLeft ? -10 : 10 }}
              onClick={() => setSelectedEdu(edu)}
              style={{
                width: 'calc(50% - 60px)',
                background: 'rgba(15, 23, 42, 0.8)',
                backdropFilter: 'blur(30px)',
                border: `2px solid ${edu.color}40`,
                borderRadius: '20px',
                padding: '2.5rem',
                cursor: 'pointer',
                transition: 'all 0.4s',
                boxShadow: `0 10px 40px rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`
              }}
            >
              {/* Badge */}
              <div style={{
                display: 'inline-block',
                padding: '0.5rem 1.5rem',
                background: `rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`,
                border: `2px solid ${edu.color}`,
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 900,
                color: edu.color,
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '1.5rem'
              }}>
                {edu.year}
              </div>

              <h3 style={{
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                fontWeight: 800,
                color: edu.color,
                marginBottom: '0.8rem',
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                {edu.degree}
              </h3>

              <div style={{
                fontSize: '1.1rem',
                color: '#cbd5e1',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}>
                {edu.institution}
              </div>

              <div style={{
                fontSize: '0.9rem',
                color: '#64748b',
                marginBottom: '1.5rem',
                fontFamily: "'JetBrains Mono', monospace"
              }}>
                {edu.duration}
              </div>

              <p style={{
                fontSize: '1rem',
                color: '#94a3b8',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}>
                {edu.description}
              </p>

              <div style={{
                padding: '0.8rem 2rem',
                background: `rgba(${edu.color === '#06b6d4' ? '6, 182, 212' : edu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.15)`,
                border: `2px solid ${edu.color}`,
                borderRadius: '100px',
                fontSize: '1.2rem',
                fontWeight: 900,
                color: edu.color,
                fontFamily: "'Space Grotesk', sans-serif",
                display: 'inline-block'
              }}>
                {edu.score}
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  const CarouselView = () => {
    const currentEdu = education[currentIndex];
    const Icon = currentEdu.icon;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
          position: 'relative'
        }}
      >
        {/* Background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '32px',
          overflow: 'hidden'
        }}>
          <motion.img
            key={currentIndex}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            src={currentEdu.image}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'blur(20px) brightness(0.3)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.95) 80%)'
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1400px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 1024 ? '1fr 1fr' : '1fr',
          gap: 'clamp(3rem, 6vw, 5rem)',
          alignItems: 'center'
        }}>
          {/* Image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              border: `4px solid ${currentEdu.color}`,
              boxShadow: `0 30px 80px rgba(${currentEdu.color === '#06b6d4' ? '6, 182, 212' : currentEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.6)`
            }}
          >
            <img
              src={currentEdu.image}
              alt={currentEdu.institution}
              style={{
                width: '100%',
                aspectRatio: '4/3',
                objectFit: 'cover'
              }}
            />
            
            {/* Icon overlay */}
            <div style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              width: '100px',
              height: '100px',
              background: `rgba(${currentEdu.color === '#06b6d4' ? '6, 182, 212' : currentEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`,
              backdropFilter: 'blur(20px)',
              borderRadius: '50%',
              border: `3px solid ${currentEdu.color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 40px ${currentEdu.color}`
            }}>
              <Icon size={50} color={currentEdu.color} strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              padding: '0.7rem 2rem',
              background: `rgba(${currentEdu.color === '#06b6d4' ? '6, 182, 212' : currentEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`,
              border: `2px solid ${currentEdu.color}`,
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 900,
              color: currentEdu.color,
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: '2rem'
            }}>
              {currentEdu.badge} • {currentEdu.duration}
            </div>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              fontFamily: "'Space Grotesk', sans-serif",
              color: currentEdu.color,
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              {currentEdu.degree}
            </h2>

            <div style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: '#cbd5e1',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              {currentEdu.institution}
            </div>

            <div style={{
              fontSize: '1rem',
              color: '#64748b',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'JetBrains Mono', monospace"
            }}>
              <MapPin size={18} />
              {currentEdu.location}
            </div>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: 1.8,
              marginBottom: '2.5rem'
            }}>
              {currentEdu.description}
            </p>

            {/* Score */}
            <div style={{
              display: 'inline-block',
              padding: '1.2rem 3rem',
              background: `linear-gradient(135deg, ${currentEdu.gradient})`,
              borderRadius: '100px',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 900,
              color: '#000',
              fontFamily: "'Space Grotesk', sans-serif",
              boxShadow: `0 15px 50px rgba(${currentEdu.color === '#06b6d4' ? '6, 182, 212' : currentEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.6)`,
              marginBottom: '2.5rem'
            }}>
              {currentEdu.score}
            </div>

            {/* Navigation */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex((currentIndex - 1 + education.length) % education.length)}
                style={{
                  padding: '1rem 2rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '100px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  backdropFilter: 'blur(10px)'
                }}
              >
                ← Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex((currentIndex + 1) % education.length)}
                style={{
                  padding: '1rem 2rem',
                  background: `linear-gradient(135deg, ${currentEdu.gradient})`,
                  border: 'none',
                  borderRadius: '100px',
                  color: '#000',
                  cursor: 'pointer',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 700,
                  boxShadow: `0 10px 30px rgba(${currentEdu.color === '#06b6d4' ? '6, 182, 212' : currentEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.5)`
                }}
              >
                Next →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
          zIndex: 20
        }}>
          {education.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              whileHover={{ scale: 1.2 }}
              style={{
                width: idx === currentIndex ? '50px' : '12px',
                height: '12px',
                borderRadius: '100px',
                background: idx === currentIndex ? currentEdu.color : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: idx === currentIndex ? `0 0 20px ${currentEdu.color}` : 'none'
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  const DetailModal = () => {
    if (!selectedEdu) return null;

    const Icon = selectedEdu.icon;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEdu(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2rem)',
            overflowY: 'auto'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(15, 23, 42, 0.95)',
              border: `3px solid ${selectedEdu.color}`,
              borderRadius: '32px',
              maxWidth: '1200px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: `0 0 100px rgba(${selectedEdu.color === '#06b6d4' ? '6, 182, 212' : selectedEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.5)`
            }}
          >
            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedEdu(null)}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                width: '50px',
                height: '50px',
                background: 'rgba(239, 68, 68, 0.2)',
                border: '2px solid #ef4444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                zIndex: 10
              }}
            >
              <X size={24} strokeWidth={3} />
            </motion.button>

            <div style={{ padding: 'clamp(2rem, 5vw, 4rem)' }}>
              {/* Header */}
              <div style={{
                display: 'inline-block',
                padding: '0.7rem 2rem',
                background: `rgba(${selectedEdu.color === '#06b6d4' ? '6, 182, 212' : selectedEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.2)`,
                border: `2px solid ${selectedEdu.color}`,
                borderRadius: '100px',
                fontSize: '0.85rem',
                fontWeight: 900,
                color: selectedEdu.color,
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '2rem'
              }}>
                {selectedEdu.badge} • {selectedEdu.duration}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? '120px 1fr' : '1fr',
                gap: '2rem',
                alignItems: 'start',
                marginBottom: '3rem'
              }}>
                {/* Icon */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  background: `linear-gradient(135deg, ${selectedEdu.gradient})`,
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 20px 60px rgba(${selectedEdu.color === '#06b6d4' ? '6, 182, 212' : selectedEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.5)`
                }}>
                  <Icon size={60} color="white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <div>
                  <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontWeight: 900,
                    fontFamily: "'Space Grotesk', sans-serif",
                    color: selectedEdu.color,
                    marginBottom: '1rem',
                    lineHeight: 1.1
                  }}>
                    {selectedEdu.degree}
                  </h2>

                  <div style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                    color: '#cbd5e1',
                    marginBottom: '0.5rem',
                    fontWeight: 600
                  }}>
                    {selectedEdu.institution}
                  </div>

                  <div style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    fontFamily: "'JetBrains Mono', monospace",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <MapPin size={16} />
                    {selectedEdu.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: '#94a3b8',
                lineHeight: 1.8,
                marginBottom: '3rem'
              }}>
                {selectedEdu.description}
              </p>

              {/* Score */}
              <div style={{
                display: 'inline-block',
                padding: '1.2rem 3rem',
                background: `linear-gradient(135deg, ${selectedEdu.gradient})`,
                borderRadius: '100px',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: 900,
                color: '#000',
                fontFamily: "'Space Grotesk', sans-serif",
                boxShadow: `0 15px 50px rgba(${selectedEdu.color === '#06b6d4' ? '6, 182, 212' : selectedEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.6)`,
                marginBottom: '3rem'
              }}>
                {selectedEdu.score}
              </div>

              {/* Skills */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: selectedEdu.color,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  marginBottom: '1.5rem'
                }}>
                  Key Skills & Technologies
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  {selectedEdu.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.8rem 1.5rem',
                        background: 'rgba(0, 0, 0, 0.5)',
                        border: `2px solid ${selectedEdu.color}`,
                        borderRadius: '100px',
                        fontSize: '0.95rem',
                        color: selectedEdu.color,
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: selectedEdu.color,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  marginBottom: '1.5rem'
                }}>
                  Major Achievements
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  {selectedEdu.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.2rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '16px',
                        border: `1.5px solid rgba(${selectedEdu.color === '#06b6d4' ? '6, 182, 212' : selectedEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.3)`
                      }}
                    >
                      <CheckCircle2 size={24} color={selectedEdu.color} strokeWidth={2.5} />
                      <span style={{
                        fontSize: '1.05rem',
                        color: '#cbd5e1'
                      }}>
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{
                marginTop: '3rem',
                textAlign: 'center'
              }}>
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:g.sivasatyasaibhagavan@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.2rem 3rem',
                    background: `linear-gradient(135deg, ${selectedEdu.gradient})`,
                    borderRadius: '100px',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#000',
                    fontFamily: "'Space Grotesk', sans-serif",
                    textDecoration: 'none',
                    boxShadow: `0 15px 50px rgba(${selectedEdu.color === '#06b6d4' ? '6, 182, 212' : selectedEdu.color === '#a855f7' ? '168, 85, 247' : '245, 158, 11'}, 0.6)`
                  }}
                >
                  <Sparkles size={24} strokeWidth={2.5} />
                  Let's Collaborate
                  <Rocket size={24} strokeWidth={2.5} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: '#000',
      color: '#fff',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #06b6d4, #a855f7);
          borderRadius: 10px;
        }
      `}</style>

      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none'
        }}
      />

      {/* Grid pattern */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        opacity: 0.5
      }} />

      {/* Content */}
      <div
        ref={containerRef}
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1800px',
          margin: '0 auto',
          padding: 'clamp(5rem, 10vw, 8rem) clamp(1rem, 3vw, 3rem) clamp(4rem, 8vw, 6rem)'
        }}
      >
        <HeroSection />

        {activeView === "cards" && <CardsView />}
        {activeView === "timeline" && <TimelineView />}
        {activeView === "carousel" && <CarouselView />}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: 'clamp(5rem, 10vw, 8rem)',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem)',
            background: 'rgba(6, 182, 212, 0.05)',
            border: '2px solid rgba(6, 182, 212, 0.3)',
            borderRadius: '32px',
            textAlign: 'center',
            backdropFilter: 'blur(20px)'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 900,
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '1.5rem'
          }}>
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #06b6d4, #a855f7, #f59e0b, #06b6d4)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Let's Build Together
            </motion.span>
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#94a3b8',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: 1.8
          }}>
            Ready to collaborate on innovative AI projects and cutting-edge solutions
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
                padding: '1.2rem 3rem',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                borderRadius: '100px',
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#000',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 10px 40px rgba(6, 182, 212, 0.5)'
              }}
            >
              <Globe size={22} strokeWidth={2.5} />
              View Projects
              <ExternalLink size={22} strokeWidth={2.5} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:g.sivasatyasaibhagavan@gmail.com"
              style={{
                padding: '1.2rem 3rem',
                background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                borderRadius: '100px',
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#000',
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 10px 40px rgba(168, 85, 247, 0.5)'
              }}
            >
              <Sparkles size={22} strokeWidth={2.5} />
              Get In Touch
              <Rocket size={22} strokeWidth={2.5} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <DetailModal />
    </div>
  );
}