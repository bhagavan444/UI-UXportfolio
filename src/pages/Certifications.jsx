import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Sparkles, Zap, Code, Cloud, Database, Cpu, Filter, TrendingUp } from 'lucide-react';

const certificationsData = [
  { title: "Full Stack Web Development", image: "https://lh3.googleusercontent.com/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog", link: "https://drive.google.com/file/d/1AfvPfSaXHgVK9lPOsS3MUJimynH6xlog/view", category: "Web", desc: "Complete web applications from frontend to backend, including UI design, server-side logic, database integration, and deployment." },
  { title: "Python Programming", image: "https://lh3.googleusercontent.com/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6", link: "https://drive.google.com/file/d/1rZNRLvle0r_gUqzDjxR3_k6yApSyMxz6/view", category: "Programming", desc: "Strong fundamentals in Python programming, data types, control structures, functions, and real-world problem-solving." },
  { title: "Java Programming", image: "https://lh3.googleusercontent.com/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM", link: "https://drive.google.com/file/d/1esxKzHNp_cuB7G87hs2MDeMpr2LKXucM/view", category: "Programming", desc: "Solid foundation in Java OOP concepts, exception handling, multithreading, and building structured applications." },
  { title: "AWS Cloud", image: "https://lh3.googleusercontent.com/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9", link: "https://drive.google.com/file/d/17vu2Vd5QnxAHe4iEYv21ADC-Pfs-90U9/view", category: "Cloud", desc: "Cloud computing fundamentals using AWS, including EC2, storage services, networking, and cloud deployments." },
  { title: "Azure Fundamentals", image: "https://lh3.googleusercontent.com/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM", link: "https://drive.google.com/file/d/1ygiQILNjBAfcZse27n_px1_tgupajlWM/view", category: "Cloud", desc: "Core Azure cloud concepts: virtual machines, storage, networking, and cloud security for enterprise environments." },
  { title: "Data Science", image: "https://lh3.googleusercontent.com/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv", link: "https://drive.google.com/file/d/1JENKEIpZkc1Mvro1mmRVyQr5u8fdUXqv/view", category: "Data", desc: "Data analysis workflows including cleaning, visualization, exploratory analysis, and drawing insights from datasets." },
  { title: "Machine Learning", image: "https://lh3.googleusercontent.com/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6", link: "https://drive.google.com/file/d/19vV6Nyq8A418eDvQ2ezrek4pqyUBb6X6/view", category: "AI/ML", desc: "Core ML algorithms: regression, classification, clustering, with model evaluation and real-world use cases." },
  { title: "Cloud Computing", image: "https://lh3.googleusercontent.com/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX", link: "https://drive.google.com/file/d/13gTq6yHm8jCOvqHKRjPpGw4hU4p7kovX/view", category: "Cloud", desc: "Cloud computing concepts: virtualization, scalability, distributed systems, and modern application deployment." },
  { title: "R Programming", image: "https://lh3.googleusercontent.com/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-", link: "https://drive.google.com/file/d/1vFclrkOAe3GaA8brE3c5Sjd0k5RMXwr-/view", category: "Programming", desc: "R programming for statistical analysis, data visualization, and exploratory data analysis in research." },
  { title: "Art of Programming", image: "https://lh3.googleusercontent.com/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx", link: "https://drive.google.com/file/d/1SwQGo_zGZIGcTzzlMApXZU0Wt5ScyWXx/view", category: "Programming", desc: "Logical thinking, problem-solving, programming best practices, code structure, and algorithmic thinking." },
  { title: "Machine Learning with Python", image: "https://lh3.googleusercontent.com/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK", link: "https://drive.google.com/file/d/1uaTJTnijSpjCsD_ZPHKwen9i3RDYwShK/view", category: "AI/ML", desc: "Applied ML using Python libraries like Scikit-learn to build, train, and evaluate predictive models." },
  { title: "Large Language Models (LLM)", image: "https://lh3.googleusercontent.com/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s", link: "https://drive.google.com/file/d/1CyN6_Bm3c68R0NkQWWTOgNAXTv27In_s/view", category: "AI/ML", desc: "Fundamentals of large language models, prompt engineering, and real-world generative AI applications." },
  { title: "React", image: "https://lh3.googleusercontent.com/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf", link: "https://drive.google.com/file/d/1yy4OpoVRAX2ZGVPUH9VmorLc2kiXalYf/view", category: "Web", desc: "Dynamic and reusable UI with React, focusing on components, hooks, state management, and modern frontend." },
  { title: "JavaScript", image: "https://lh3.googleusercontent.com/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd", link: "https://drive.google.com/file/d/1zrscfW3cyWq59mMYsK399CRjgEjA-zbd/view", category: "Web", desc: "Core JavaScript concepts: DOM manipulation, async programming, and building interactive web applications." },
  { title: "MLOps", image: "https://lh3.googleusercontent.com/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP", link: "https://drive.google.com/file/d/1BmvjGknXs-K5wOfepFcl_CuU8DsFBApP/view", category: "DevOps", desc: "MLOps practices: model versioning, deployment, monitoring, and maintaining ML systems in production." },
  { title: "CI/CD", image: "https://lh3.googleusercontent.com/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr", link: "https://drive.google.com/file/d/1xccQv29hZCWCvr-JnM-nEfE8meESrWIr/view", category: "DevOps", desc: "Continuous Integration and Deployment concepts to automate testing, building, and deploying applications." },
  { title: "Django", image: "https://lh3.googleusercontent.com/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc", link: "https://drive.google.com/file/d/1QdiX2u-ARCZCEdEmlu4l3ChnQT-SmhKc/view", category: "Web", desc: "Backend web applications using Django: MVC architecture, database models, authentication, and RESTful services." },
  { title: "HTML", image: "https://lh3.googleusercontent.com/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr", link: "https://drive.google.com/file/d/1NYtaxfhQUfxaL4n6Vv6gJSEQMySy1gqr/view", category: "Web", desc: "Fundamentals of HTML for structuring web pages, accessibility, and semantic markup for modern websites." },
  { title: "CSS", image: "https://lh3.googleusercontent.com/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE", link: "https://drive.google.com/file/d/1iC65FGw0MSmjeKIivdnrZVm3GfXOKVvE/view", category: "Web", desc: "CSS for styling responsive web pages, layouts, animations, and creating visually appealing interfaces." },
];

const categoryIcons = { Web: Code, Programming: Cpu, Cloud: Cloud, Data: Database, "AI/ML": Sparkles, DevOps: Zap };
const categoryColors = {
  Web: { from: '#3b82f6', to: '#06b6d4', shadow: 'rgba(59,130,246,0.4)' },
  Programming: { from: '#a855f7', to: '#ec4899', shadow: 'rgba(168,85,247,0.4)' },
  Cloud: { from: '#6366f1', to: '#3b82f6', shadow: 'rgba(99,102,241,0.4)' },
  Data: { from: '#10b981', to: '#059669', shadow: 'rgba(16,185,129,0.4)' },
  "AI/ML": { from: '#f97316', to: '#ef4444', shadow: 'rgba(249,115,22,0.4)' },
  DevOps: { from: '#eab308', to: '#f97316', shadow: 'rgba(234,179,8,0.4)' }
};

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ["All", ...new Set(certificationsData.map(c => c.category))];
  const filteredCerts = selectedCategory === "All" ? certificationsData : certificationsData.filter(c => c.category === selectedCategory);

  useEffect(() => {
    setParticles([...Array(40)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    })));
  }, []);

  return (
    <div
      onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse at top, rgba(88,28,135,0.3) 0%, #0a0a0a 50%, #000 100%)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-30px) rotate(180deg); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px currentColor; } 50% { box-shadow: 0 0 50px currentColor; } }
        @keyframes shimmer { 0% { background-position: -200%; } 100% { background-position: 200%; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes scale-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes border-flow { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
        .float { animation: float var(--duration, 15s) ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .shimmer { animation: shimmer 3s linear infinite; background-size: 200%; }
        .bounce { animation: bounce 2s ease-in-out infinite; }
        .fade-in { animation: fade-in 0.8s ease-out forwards; }
        .rotate { animation: rotate 20s linear infinite; }
        .scale-pulse { animation: scale-pulse 2s ease-in-out infinite; }
        .border-flow { animation: border-flow 3s linear infinite; }
      `}</style>

      {/* Animated Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Floating Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="float"
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${['#a855f7', '#ec4899', '#3b82f6'][p.id % 3]}, transparent)`,
              '--duration': `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="float" style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.2), transparent)',
          filter: 'blur(100px)',
          top: '10%',
          left: '10%',
          '--duration': '20s',
        }} />
        <div className="float" style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.2), transparent)',
          filter: 'blur(100px)',
          bottom: '10%',
          right: '10%',
          '--duration': '15s',
          animationDelay: '5s',
        }} />

        {/* Grid Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(168,85,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          opacity: 0.2,
        }} />

        {/* Mouse Glow */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%)',
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          filter: 'blur(60px)',
          transition: 'all 0.3s ease',
        }} />
      </div>

      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '80px 16px' }}>
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="bounce" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            marginBottom: '24px',
            boxShadow: '0 20px 60px rgba(168,85,247,0.4)',
          }}>
            <Award style={{ width: '40px', height: '40px', color: '#fff' }} />
          </div>

          <h1 className="shimmer" style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '900',
            marginBottom: '16px',
            background: 'linear-gradient(90deg, #a855f7, #ec4899, #3b82f6, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Certifications
          </h1>
          <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
            Showcasing achievements across <span style={{ color: '#3b82f6', fontWeight: 'bold' }}>web development</span>, <span style={{ color: '#a855f7', fontWeight: 'bold' }}>programming</span>, <span style={{ color: '#ec4899', fontWeight: 'bold' }}>cloud computing</span>, and <span style={{ color: '#f97316', fontWeight: 'bold' }}>AI/ML</span>
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '32px', flexWrap: 'wrap' }}>
            {[
              { icon: Award, value: '19+', label: 'Certificates', color: '#a855f7' },
              { icon: TrendingUp, value: '6', label: 'Categories', color: '#3b82f6' },
              { icon: Sparkles, value: '100%', label: 'Verified', color: '#ec4899' },
            ].map((stat, i) => (
              <div key={i} className="scale-pulse" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                animationDelay: `${i * 0.2}s`,
              }}>
                <stat.icon style={{ width: '24px', height: '24px', color: stat.color }} />
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: '#9ca3af' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="fade-in" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '12px', 
          marginBottom: '48px', 
          flexWrap: 'wrap',
          animationDelay: '0.2s',
        }}>
          <Filter className="bounce" style={{ width: '24px', height: '24px', color: '#a855f7', marginRight: '8px' }} />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '12px 24px',
                borderRadius: '9999px',
                border: 'none',
                background: selectedCategory === cat ? 'linear-gradient(90deg, #a855f7, #ec4899)' : 'rgba(255,255,255,0.05)',
                color: selectedCategory === cat ? '#fff' : '#9ca3af',
                fontWeight: 'bold',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: selectedCategory === cat ? 'scale(1.05)' : 'scale(1)',
                boxShadow: selectedCategory === cat ? '0 10px 30px rgba(168,85,247,0.4)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat) {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'scale(1)';
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {filteredCerts.map((cert, i) => {
            const Icon = categoryIcons[cert.category];
            const colors = categoryColors[cert.category];
            const isHovered = hoveredCard === i;

            return (
              <div
                key={i}
                className="fade-in"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'rgba(15,23,42,0.8)',
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${isHovered ? colors.from : 'rgba(255,255,255,0.1)'}`,
                  transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
                  transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: isHovered ? `0 30px 80px ${colors.shadow}` : '0 10px 30px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Animated Border */}
                <div className="border-flow" style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '24px',
                  padding: '2px',
                  background: `linear-gradient(90deg, ${colors.from}, transparent, ${colors.to})`,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 0.5s ease',
                }} />

                {/* Image Container */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                      transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.9) 100%)',
                  }} />

                  {/* Category Badge */}
                  <div className="bounce" style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
                    color: '#fff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: `0 10px 30px ${colors.shadow}`,
                  }}>
                    <Icon style={{ width: '14px', height: '14px' }} />
                    {cert.category}
                  </div>

                  {/* Hover Icon */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `linear-gradient(135deg, ${colors.from}95, ${colors.to}95)`,
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.5s ease',
                  }}>
                    <ExternalLink className="scale-pulse" style={{
                      width: '48px',
                      height: '48px',
                      color: '#fff',
                    }} />
                  </div>

                  {/* Sparkles */}
                  {isHovered && (
                    <>
                      <Sparkles className="bounce" style={{
                        position: 'absolute',
                        top: '32px',
                        left: '32px',
                        width: '24px',
                        height: '24px',
                        color: '#fbbf24',
                      }} />
                      <Sparkles className="bounce" style={{
                        position: 'absolute',
                        bottom: '32px',
                        right: '32px',
                        width: '20px',
                        height: '20px',
                        color: '#ec4899',
                        animationDelay: '0.2s',
                      }} />
                    </>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '900',
                    marginBottom: '12px',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    background: isHovered ? `linear-gradient(90deg, ${colors.from}, ${colors.to})` : 'none',
                    WebkitBackgroundClip: isHovered ? 'text' : 'unset',
                    WebkitTextFillColor: isHovered ? 'transparent' : '#fff',
                  }}>
                    {cert.title}
                  </h3>

                  <p style={{
                    color: '#9ca3af',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    marginBottom: '16px',
                  }}>
                    {cert.desc}
                  </p>

                  {/* View Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      textDecoration: 'none',
                      boxShadow: `0 10px 30px ${colors.shadow}`,
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 15px 40px ${colors.shadow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = `0 10px 30px ${colors.shadow}`;
                    }}
                  >
                    View Certificate
                    <ExternalLink style={{ width: '16px', height: '16px' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}