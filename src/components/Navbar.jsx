import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaEllipsisH,
  FaTrophy,
  FaLaptopCode,
  FaFileAlt,
  FaCertificate,
  FaHeart,
  FaAward,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const moreRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard accessibility
  const handleKeyToggle = useCallback((e) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
      setMoreOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyToggle);
    return () => window.removeEventListener("keydown", handleKeyToggle);
  }, [handleKeyToggle]);

  // Primary navigation (always visible on desktop)
  const primaryLinks = [
    { label: "Home", path: "/home", icon: <FaHome /> },
    { label: "Education", path: "/education", icon: <FaGraduationCap /> },
    { label: "Skills", path: "/myskills", icon: <FaCode /> },
    { label: "Internships", path: "/internships", icon: <FaBriefcase /> },
    { label: "Projects", path: "/projects", icon: <FaLaptopCode /> },
  ];

  // Secondary navigation (hidden under "More" on desktop)
  const secondaryLinks = [
    { label: "Hackathons", path: "/hackathons", icon: <FaTrophy /> },
    { label: "Workshops", path: "/workshops", icon: <FaLaptopCode /> },
    { label: "Resume", path: "/resume", icon: <FaFileAlt /> },
    { label: "Certifications", path: "/certifications", icon: <FaCertificate /> },
    { label: "Beyond Coding", path: "/beyondcoding", icon: <FaHeart /> },
    { label: "Achivements", path: "/achivements", icon: <FaAward /> },
    { label: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  const allLinks = [...primaryLinks, ...secondaryLinks];

  // Inline Styles
  const styles = {
    navbarRoot: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: isScrolled 
        ? "rgba(10, 10, 30, 0.95)" 
        : "rgba(15, 15, 40, 0.85)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: isScrolled 
        ? "1px solid rgba(99, 102, 241, 0.3)" 
        : "1px solid rgba(255, 255, 255, 0.05)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: isScrolled 
        ? "0 8px 32px rgba(0, 0, 0, 0.4)" 
        : "0 4px 16px rgba(0, 0, 0, 0.1)",
    },
    navbarInner: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "70px",
    },
    navLogo: {
      fontSize: "26px",
      fontWeight: "800",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textDecoration: "none",
      letterSpacing: "0.5px",
      padding: "8px 0",
    },
    navDesktop: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    navLink: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 18px",
      color: "#e0e7ff",
      textDecoration: "none",
      fontSize: "14.5px",
      fontWeight: "500",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      position: "relative",
      overflow: "hidden",
    },
    navLinkActive: {
      background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))",
      color: "#a5b4fc",
      boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
    },
    moreButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 18px",
      color: "#e0e7ff",
      background: moreOpen ? "rgba(99, 102, 241, 0.15)" : "transparent",
      border: "none",
      fontSize: "14.5px",
      fontWeight: "500",
      borderRadius: "12px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      position: "relative",
    },
    moreDropdown: {
      position: "absolute",
      top: "calc(100% + 12px)",
      right: 0,
      background: "rgba(20, 20, 45, 0.98)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderRadius: "16px",
      padding: "12px",
      minWidth: "240px",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(99, 102, 241, 0.2)",
      border: "1px solid rgba(99, 102, 241, 0.2)",
    },
    dropdownLink: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 16px",
      color: "#e0e7ff",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "500",
      borderRadius: "10px",
      transition: "all 0.2s ease",
      marginBottom: "4px",
    },
    navActions: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    socialIcon: {
      color: "#a5b4fc",
      fontSize: "20px",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
    },
    hamburgerBtn: {
      display: "none",
      background: "transparent",
      border: "none",
      color: "#e0e7ff",
      fontSize: "24px",
      cursor: "pointer",
      padding: "8px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
    },
    mobileMenu: {
      position: "fixed",
      top: "70px",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(10, 10, 30, 0.98)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      padding: "24px",
      overflowY: "auto",
    },
    mobileLink: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px 20px",
      color: "#e0e7ff",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      borderRadius: "12px",
      marginBottom: "8px",
      transition: "all 0.3s ease",
      background: "rgba(255, 255, 255, 0.03)",
    },
    mobileLinkActive: {
      background: "linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(139, 92, 246, 0.25))",
      color: "#a5b4fc",
      boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
    },
  };

  // Responsive styles
  const mediaStyles = `
    @media (max-width: 1024px) {
      .nav-desktop { display: none !important; }
      .hamburger-btn { display: flex !important; }
    }
    @media (min-width: 1025px) {
      .nav-desktop { display: flex !important; }
      .hamburger-btn { display: none !important; }
    }
  `;

  return (
    <>
      <style>{mediaStyles}</style>
      <motion.header
        style={styles.navbarRoot}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={styles.navbarInner}>
          {/* Logo */}
          <Link to="/home" style={styles.navLogo}>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Bhagavan's Portfolio
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" style={styles.navDesktop}>
            {primaryLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  ...styles.navLink,
                  ...(location.pathname === link.path ? styles.navLinkActive : {}),
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.background = "rgba(99, 102, 241, 0.1)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                <span style={{ fontSize: "16px" }}>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}

            {/* More Dropdown */}
            <div ref={moreRef} style={{ position: "relative" }}>
              <motion.button
                style={styles.moreButton}
                onClick={() => setMoreOpen(!moreOpen)}
                whileHover={{
                  y: -2,
                  background: !moreOpen ? "rgba(99, 102, 241, 0.1)" : undefined,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <FaEllipsisH />
                <span>More</span>
              </motion.button>

              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    style={styles.moreDropdown}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {secondaryLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        style={{
                          ...styles.dropdownLink,
                          ...(location.pathname === link.path ? {
                            background: "rgba(99, 102, 241, 0.2)",
                            color: "#a5b4fc",
                          } : {}),
                        }}
                        onClick={() => setMoreOpen(false)}
                        onMouseEnter={(e) => {
                          if (location.pathname !== link.path) {
                            e.currentTarget.style.background = "rgba(99, 102, 241, 0.12)";
                            e.currentTarget.style.transform = "translateX(4px)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (location.pathname !== link.path) {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.transform = "translateX(0)";
                          }
                        }}
                      >
                        <span style={{ fontSize: "16px", opacity: 0.8 }}>{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Actions */}
          <div style={styles.navActions}>
            <motion.a
              href="https://github.com/bhagavan444"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
              whileHover={{ scale: 1.15, color: "#818cf8" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              style={styles.socialIcon}
              whileHover={{ scale: 1.15, color: "#818cf8" }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>

            {/* Hamburger Button */}
            <motion.button
              className="hamburger-btn"
              style={styles.hamburgerBtn}
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ background: "rgba(99, 102, 241, 0.15)" }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaTimes />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaBars />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              style={styles.mobileMenu}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {allLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      ...styles.mobileLink,
                      ...(location.pathname === link.path ? styles.mobileLinkActive : {}),
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span style={{ fontSize: "20px", opacity: 0.9 }}>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;