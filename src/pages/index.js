import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillDisplay from "../components/SkillDisplay";

export default function Home() {
  const [particles, setParticles] = useState([]);
  const [currentStation, setCurrentStation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const experiences = [
    { company: "Blanc Space Branding", role: "Web Designer & Frontend SWE", period: "Apr - Dec 2021", color: "#06b6d4" },
    { company: "Kleren Oak Group", role: "UI/UX Designer & Fullstack SWE", period: "Apr 2021 - Mar 2023", color: "#ec4899" },
    { company: "The Spiral Squad", role: "Co-founder & Creative Lead", period: "Feb 2023 - Present", color: "#f59e0b" },
    { company: "Northeastern University", role: "Data Scientist RA", period: "Mar - Jul 2024", color: "#06b6d4" },
    { company: "Institute for Experiential AI", role: "AI Researcher", period: "Aug - Dec 2024", color: "#10b981" },
    { company: "Northeastern University", role: "Teaching Assistant", period: "Aug 2024 - May 2025", color: "#14b8a6" },
    { company: "KAP Ventures", role: "ML Engineer", period: "May - Aug 2025", color: "#a371f7" },
    { company: "Adaptive Concepts Academy", role: "Lead SDE", period: "Aug 2025 - Present", color: "#f85149" },
    { company: "SquareResults", role: "ML Engineer", period: "Aug 2025 - Present", color: "#58a6ff" }
  ];

  const certifications = [
    { id: 1, name: "AWS Educate Introduction to Generative AI", issuer: "Amazon Web Services (AWS)", date: "2024", category: "Cloud & AI", description: "Comprehensive introduction to generative AI concepts, applications, and AWS services for AI development.", color: "#ff9900" },
    { id: 2, name: "Ask Questions to Make Data-Driven Decisions", issuer: "Google", date: "2023", category: "Data Analytics", description: "Learned to ask effective questions, use data to make informed decisions, and communicate insights clearly.", color: "#4285f4" },
    { id: 3, name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "2023", category: "Data Analytics", description: "Foundational course covering data analysis lifecycle, tools, and techniques used in data science.", color: "#4285f4" },
    { id: 4, name: "Python Programming Beginners Tutorial: Python 3 Programming", issuer: "Udemy", date: "2021", category: "Programming", description: "Complete Python programming course covering fundamentals, data structures, and practical applications.", color: "#ec5252" },
    { id: 5, name: "Python Data Structures", issuer: "University of Michigan (Coursera)", date: "2020", category: "Programming", description: "Advanced Python programming focused on data structures, algorithms, and efficient coding practices.", color: "#0056d3" },
    { id: 6, name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2021", category: "Web Development", description: "Comprehensive web design certification covering HTML, CSS, responsive design, and accessibility.", color: "#0a0a23" },
    { id: 7, name: "C++ Intermediate to Advanced Course with Project", issuer: "Udemy", date: "2021", category: "Programming", description: "Advanced C++ programming including OOP, memory management, and real-world project development.", color: "#ec5252" }
  ];

  // Track path points - horizontal flow with gentle curves
  const trackPath = [
    { x: 5, y: 50 },    // Blanc
    { x: 15, y: 35 },   // Kleren
    { x: 25, y: 55 },   // Spiral
    { x: 35, y: 40 },   // Northeastern DS
    { x: 45, y: 60 },   // AI Research
    { x: 55, y: 45 },   // TA
    { x: 65, y: 58 },   // KAP
    { x: 75, y: 42 },   // Adaptive
    { x: 85, y: 50 }    // SquareResults
  ];

  // Random offsets for floating cards (above or below, offset left/right)
  const cardOffsets = [
    { offsetX: -40, offsetY: -80 },  // Blanc - top left
    { offsetX: 30, offsetY: 70 },    // Kleren - bottom right
    { offsetX: -50, offsetY: -75 },  // Spiral - top left
    { offsetX: 40, offsetY: 80 },    // Northeastern DS - bottom right
    { offsetX: -45, offsetY: -70 },  // AI - top left
    { offsetX: 35, offsetY: 75 },    // TA - bottom right
    { offsetX: -40, offsetY: -80 },  // KAP - top left
    { offsetX: 45, offsetY: 70 },    // Adaptive - bottom right
    { offsetX: -35, offsetY: -75 }   // Square - top left
  ];

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 15
        });
      }
      setParticles(newParticles);
    };
    createParticles();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentStation((prev) => {
        if (prev === experiences.length - 1) {
          setTimeout(() => setCurrentStation(0), 10000);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, experiences.length]);

  return (
    <>
      <div className="particles">
        {particles.map((p) => (
          <div key={p.id} className="particle" style={{ left: `${p.x}px`, top: `${p.y}px`, width: `${p.size}px`, height: `${p.size}px`, animationDelay: `${p.delay}s` }} />
        ))}
      </div>
      <div className="matrix-rain" />
      <Header />
      
      <main>
        <div className="container">
          <section className="hero">
            <h1 className="glitch">
              <span className="typing-text">Hello, I'm Kashish 👋</span>
            </h1>
            <p>Machine Learning Engineer by day, problem-solver by nature. I'm fascinated by how AI can transform industries — from healthcare to fashion to sustainability.</p>
            <p>Currently building the future of intelligent systems, one algorithm at a time. Let's create something amazing together.</p>
            <div className="social-links">
              <a href="https://github.com/KashS28" target="_blank" rel="noreferrer">GitHub</a>
              <span className="social-separator">|</span>
              <a href="https://linkedin.com/in/kashish-shah-2804" target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="social-separator">|</span>
              <a href="https://medium.com/@ctrlaltthrive" target="_blank" rel="noreferrer">Blog</a>
              <span className="social-separator">|</span>
              <a href="https://calendly.com/kashayn-2001/15min" target="_blank" rel="noreferrer">Schedule a Call</a>
            </div>
          </section>
          <SkillDisplay />
        </div>

        {/* Horizontal Railway Journey */}
        <section style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: 'var(--space-2xl) 0', background: 'rgba(0,0,0,0.15)' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-xl)' }}>
            <h2>🚂 My Career Journey</h2>
            <button onClick={() => setIsPaused(!isPaused)} className="btn btn-secondary">{isPaused ? '▶ Play' : '⏸ Pause'}</button>
          </div>

          {/* Railway Container - Horizontal Scroll */}
          <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 var(--space-lg)', overflowX: 'auto' }}>
            <div style={{ position: 'relative', minWidth: '1400px', height: '500px' }}>
              
              {/* Curved Track Line */}
              <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="rail" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="30%" stopColor="#ec4899" />
                    <stop offset="55%" stopColor="#f59e0b" />
                    <stop offset="80%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#58a6ff" />
                  </linearGradient>
                </defs>
                
                {/* Smooth flowing horizontal path */}
                <path
                  d="M 70,250 C 200,150 250,300 350,220 C 450,140 550,280 650,200 C 750,120 850,260 950,210 C 1050,160 1150,240 1250,200 C 1300,180 1320,220 1330,250"
                  stroke="url(#rail)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.8"
                />
              </svg>

              {/* Dots and Stations */}
              {trackPath.map((point, index) => {
                const exp = experiences[index];
                const offset = cardOffsets[index];
                const isPassed = !isPaused && index <= currentStation;
                const isCurrent = !isPaused && index === currentStation;
                const absoluteX = (point.x / 100) * 1400;
                const absoluteY = (point.y / 100) * 500;

                return (
                  <div key={index}>
                    {/* Dot on track */}
                    <div style={{
                      position: 'absolute',
                      left: `${absoluteX}px`,
                      top: `${absoluteY}px`,
                      width: isCurrent ? '14px' : '10px',
                      height: isCurrent ? '14px' : '10px',
                      borderRadius: '50%',
                      background: isPassed || isPaused ? exp.color : '#555',
                      border: `2px solid ${isCurrent ? '#fff' : 'transparent'}`,
                      boxShadow: isCurrent ? `0 0 16px ${exp.color}` : 'none',
                      transition: 'all 0.5s ease',
                      zIndex: 5,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer'
                    }}
                    onClick={() => { setIsPaused(true); setCurrentStation(index); }}
                    />

                    {/* Floating station card - NOT connected */}
                    <div style={{
                      position: 'absolute',
                      left: `${absoluteX + offset.offsetX}px`,
                      top: `${absoluteY + offset.offsetY}px`,
                      width: '240px',
                      background: isPassed || isPaused 
                        ? `linear-gradient(135deg, ${exp.color}12, ${exp.color}05)`
                        : 'rgba(20, 20, 20, 0.5)',
                      backdropFilter: 'blur(8px)',
                      border: `2px solid ${isCurrent ? exp.color : (isPassed || isPaused ? `${exp.color}25` : 'rgba(255,255,255,0.05)')}`,
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-sm)',
                      opacity: isPaused ? 1 : (isPassed ? 1 : 0.2),
                      boxShadow: isCurrent ? `0 6px 20px ${exp.color}30` : (isPassed || isPaused ? `0 3px 10px ${exp.color}15` : 'none'),
                      transition: 'all 0.5s ease',
                      cursor: 'pointer',
                      zIndex: 3
                    }}
                    onClick={() => { setIsPaused(true); setCurrentStation(index); }}
                    onMouseEnter={(e) => {
                      if (isPassed || isPaused) {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = `0 8px 28px ${exp.color}40`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = isCurrent ? `0 6px 20px ${exp.color}30` : (isPassed || isPaused ? `0 3px 10px ${exp.color}15` : 'none');
                    }}
                    >
                      <div style={{ fontSize: 'var(--font-size-base)', fontWeight: '700', color: isPassed || isPaused ? exp.color : 'var(--text-muted)', marginBottom: '4px', lineHeight: '1.2' }}>
                        {exp.company}
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)', marginBottom: '4px' }}>
                        {exp.period}
                      </div>
                      <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', lineHeight: '1.2' }}>
                        {exp.role}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Train moving on the track line */}
              {!isPaused && (
                <div style={{
                  position: 'absolute',
                  left: `${(trackPath[currentStation].x / 100) * 1400}px`,
                  top: `${(trackPath[currentStation].y / 100) * 500}px`,
                  transform: 'translate(-50%, -50%)',
                  fontSize: '2rem',
                  transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: 'drop-shadow(0 2px 12px rgba(88, 166, 255, 0.9))',
                  zIndex: 10,
                  animation: 'trainWiggle 0.5s ease-in-out infinite'
                }}>
                  🚂
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="container">
          <section className="education-container">
            <h2>Education</h2>
            <div className="education-item" style={{ maxWidth: '600px', margin: '0 auto var(--space-md) auto', padding: 'var(--space-lg)' }}>
              <div className="education-degree">MS, Electrical & Computer Engineering</div>
              <div className="education-school">Northeastern University, Boston MA</div>
              <div className="education-date">2023 – 2025</div>
              <div className="education-gpa">GPA: 3.56</div>
            </div>
            <div className="education-item" style={{ maxWidth: '600px', margin: '0 auto var(--space-md) auto', padding: 'var(--space-lg)' }}>
              <div className="education-degree">BTech, Electronics & Telecommunication Engineering</div>
              <div className="education-school">University of Mumbai, Mumbai IN</div>
              <div className="education-date">2019 – 2023</div>
              <div className="education-gpa">GPA: 3.52</div>
            </div>
          </section>
        </div>

        <section style={{ padding: 'var(--space-2xl) 0' }}>
          <div className="container"><h2>Certifications</h2></div>
          <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: 'var(--space-lg)', background: 'linear-gradient(135deg, rgba(88, 166, 255, 0.03) 0%, rgba(248, 81, 73, 0.03) 100%)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-lg)', maxWidth: '1400px', margin: '0 auto' }}>
              {certifications.map((cert) => (
                <div key={cert.id} style={{ width: 'min(300px, 90vw)', minHeight: '350px', background: 'var(--surface-bg)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', border: '2px solid transparent', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'; e.currentTarget.style.borderColor = cert.color; e.currentTarget.style.boxShadow = `0 20px 60px ${cert.color}30`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)'; }}>
                  <div style={{ marginBottom: 'var(--space-md)' }}>
                    <div style={{ color: cert.color, fontSize: 'var(--font-size-sm)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 'var(--space-xs)' }}>{cert.category}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-xs)', fontFamily: 'var(--font-family-mono)' }}>{cert.date}</div>
                  </div>
                  <h4 style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-base)', fontWeight: '700', marginBottom: 'var(--space-sm)', lineHeight: '1.3', textAlign: 'center' }}>{cert.name}</h4>
                  <div style={{ color: cert.color, fontSize: 'var(--font-size-sm)', fontWeight: '600', marginBottom: 'var(--space-sm)', textAlign: 'center' }}>{cert.issuer}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-xs)', lineHeight: '1.5', margin: 0, flex: 1, textAlign: 'center' }}>{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes trainWiggle {
          0%, 100% { transform: translate(-50%, -50%); }
          50% { transform: translate(-50%, -52%); }
        }
      `}</style>

      <Footer />
    </>
  );
}