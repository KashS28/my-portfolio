import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillDisplay from "../components/SkillDisplay";

export default function Home() {
  const [particles, setParticles] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Experience data with durations in months - wrapped in useMemo
  const experiences = React.useMemo(() => [
    { company: "SquareResults", role: "ML Engineer", period: "Aug 2025 - Present", color: "#58a6ff", months: 4 },
    { company: "Adaptive Concepts Academy", role: "Lead SDE", period: "Aug 2025 - Present", color: "#f85149", months: 4 },
    { company: "KAP Ventures", role: "ML Engineer", period: "May - Aug 2025", color: "#a371f7", months: 3 },
    { company: "Northeastern University", role: "Teaching Assistant", period: "Aug 2024 - May 2025", color: "#14b8a6", months: 9 },
    { company: "Institute for Experiential AI", role: "AI Researcher", period: "Aug - Dec 2024", color: "#10b981", months: 4 },
    { company: "Northeastern University", role: "Data Scientist RA", period: "Mar - Jul 2024", color: "#06b6d4", months: 4 },
    { company: "The Spiral Squad", role: "Co-founder & Creative Lead", period: "Feb 2023 - Present", color: "#f59e0b", months: 6 },
    { company: "Kleren Oak Group", role: "UI/UX Designer & Fullstack SWE", period: "Apr 2021 - Mar 2023", color: "#ec4899", months: 23 },
    { company: "Blanc Space Branding", role: "Web Designer & Frontend SWE", period: "Apr - Dec 2021", color: "#06b6d4", months: 8 }
  ], []);

  // Certifications
  const certifications = React.useMemo(() => [
    { id: 1, name: "AWS Educate Introduction to Generative AI", issuer: "Amazon Web Services (AWS)", date: "2024", category: "Cloud & AI", description: "Comprehensive introduction to generative AI concepts, applications, and AWS services for AI development.", color: "#ff9900" },
    { id: 2, name: "Ask Questions to Make Data-Driven Decisions", issuer: "Google", date: "2023", category: "Data Analytics", description: "Learned to ask effective questions, use data to make informed decisions, and communicate insights clearly.", color: "#4285f4" },
    { id: 3, name: "Foundations: Data, Data, Everywhere", issuer: "Google", date: "2023", category: "Data Analytics", description: "Foundational course covering data analysis lifecycle, tools, and techniques used in data science.", color: "#4285f4" },
    { id: 4, name: "Python Programming Beginners Tutorial: Python 3 Programming", issuer: "Udemy", date: "2021", category: "Programming", description: "Complete Python programming course covering fundamentals, data structures, and practical applications.", color: "#ec5252" },
    { id: 5, name: "Python Data Structures", issuer: "University of Michigan (Coursera)", date: "2020", category: "Programming", description: "Advanced Python programming focused on data structures, algorithms, and efficient coding practices.", color: "#0056d3" },
    { id: 6, name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2021", category: "Web Development", description: "Comprehensive web design certification covering HTML, CSS, responsive design, and accessibility.", color: "#0a0a23" },
    { id: 7, name: "C++ Intermediate to Advanced Course with Project", issuer: "Udemy", date: "2021", category: "Programming", description: "Advanced C++ programming including OOP, memory management, and real-world project development.", color: "#ec5252" }
  ], []);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({ id: i, x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, size: Math.random() * 3 + 1, delay: Math.random() * 15 });
      }
      setParticles(newParticles);
    };
    createParticles();
  }, []);

  // Auto-play based on role duration
  useEffect(() => {
    if (isPaused) return;

    const currentExp = experiences[currentTrack];
    const duration = currentExp.months * 1000; // Convert months to milliseconds (1 month = 1 second)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (duration / 50)); // Update every 50ms
      });
    }, 50);

    const trackTimer = setTimeout(() => {
      setProgress(0);
      setCurrentTrack((prev) => (prev + 1) % experiences.length);
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(trackTimer);
    };
  }, [currentTrack, isPaused, experiences]);

  const currentExp = experiences[currentTrack];

  return (
    <>
      <div className="particles">{particles.map((p) => <div key={p.id} className="particle" style={{ left: `${p.x}px`, top: `${p.y}px`, width: `${p.size}px`, height: `${p.size}px`, animationDelay: `${p.delay}s` }} />)}</div>
      <div className="matrix-rain" />
      <Header />
      
      <main>
        <div className="container">
          <section className="hero">
            <h1 className="glitch"><span className="typing-text">Hello, I'm Kashish 👋</span></h1>
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

          {/* Spotify Music Player Experience */}
          <section className="experience-container" style={{ 
            maxWidth: '650px', 
            margin: '0 auto',
            padding: '0 var(--space-md)',
            textAlign: 'left'
          }}>
            <h2 style={{ marginBottom: 'var(--space-lg)', fontSize: 'var(--font-size-xl)' }}>♫ Now Playing: My Career Journey</h2>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(29, 185, 84, 0.1) 0%, rgba(88, 166, 255, 0.1) 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              border: '2px solid rgba(29, 185, 84, 0.3)'
            }}>
              {/* Now Playing Card */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-sm)',
                marginBottom: 'var(--space-md)',
                padding: 'var(--space-sm)',
                background: 'var(--surface-bg)',
                borderRadius: 'var(--radius-md)',
                border: `2px solid ${currentExp.color}`
              }}>
                {/* Album Art */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: `linear-gradient(135deg, ${currentExp.color}, ${currentExp.color}dd)`,
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  flexShrink: 0,
                  boxShadow: `0 4px 16px ${currentExp.color}50`
                }}>
                  {currentTrack === 0 ? '🚂' : currentTrack === 1 ? '💻' : currentTrack === 2 ? '🤖' : 
                   currentTrack === 3 ? '👨‍🏫' : currentTrack === 4 ? '🔬' : currentTrack === 5 ? '📊' :
                   currentTrack === 6 ? '🎨' : currentTrack === 7 ? '🎯' : '✨'}
                </div>
                
                {/* Track Info */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 'var(--font-size-base)', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {currentExp.role}
                  </div>
                  <div style={{ fontSize: 'var(--font-size-sm)', color: '#1DB954', fontWeight: '600' }}>
                    {currentExp.company}
                  </div>
                  <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)', marginTop: '2px' }}>
                    {currentExp.period} • {currentExp.months} months
                  </div>
                </div>

                {/* Play/Pause Button */}
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#1DB954',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.1rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {isPaused ? '▶' : '⏸'}
                </button>
              </div>

              {/* Progress Bar */}
              <div style={{ marginBottom: 'var(--space-sm)' }}>
                <div style={{
                  height: '5px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: '#1DB954',
                    borderRadius: '3px',
                    transition: 'width 0.1s linear'
                  }} />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '10px',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                  fontFamily: 'var(--font-family-mono)'
                }}>
                  <span>{currentExp.months} month{currentExp.months > 1 ? 's' : ''}</span>
                  <span>Track {currentTrack + 1} of {experiences.length}</span>
                </div>
              </div>

              {/* Career Queue */}
              <div>
                <div style={{ 
                  fontSize: '11px', 
                  fontWeight: '600', 
                  color: 'var(--text-muted)',
                  marginBottom: 'var(--space-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Career Journey Queue
                </div>
                
                {experiences.map((track, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-xs)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      borderRadius: 'var(--radius-sm)',
                      background: index === currentTrack ? 'rgba(29, 185, 84, 0.15)' : 'transparent',
                      marginBottom: '4px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: index === currentTrack ? '1px solid rgba(29, 185, 84, 0.3)' : '1px solid transparent'
                    }}
                    onClick={() => {
                      setCurrentTrack(index);
                      setProgress(0);
                    }}
                    onMouseEnter={(e) => {
                      if (index !== currentTrack) {
                        e.currentTarget.style.background = 'rgba(88, 166, 255, 0.08)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index !== currentTrack) {
                        e.currentTarget.style.background = 'transparent';
                      }
                    }}
                  >
                    {/* Track Number / Playing Icon */}
                    <div style={{ 
                      width: '24px', 
                      textAlign: 'center',
                      fontSize: index === currentTrack ? '1rem' : '10px',
                      color: index === currentTrack ? '#1DB954' : 'var(--text-muted)',
                      fontWeight: '600',
                      fontFamily: 'var(--font-family-mono)'
                    }}>
                      {index === currentTrack ? '▶' : index + 1}
                    </div>
                    
                    {/* Track Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ 
                        fontSize: '12px', 
                        fontWeight: index === currentTrack ? '600' : '500',
                        color: index === currentTrack ? '#1DB954' : 'var(--text-primary)'
                      }}>
                        {track.role}
                      </div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                        {track.company}
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div style={{ 
                      fontSize: '10px', 
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-family-mono)',
                      textAlign: 'right',
                      minWidth: '50px'
                    }}>
                      {track.months}mo
                    </div>
                  </div>
                ))}
              </div>

              {/* Playback Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'var(--space-sm)',
                marginTop: 'var(--space-md)',
                paddingTop: 'var(--space-sm)',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                <button
                  onClick={() => {
                    setCurrentTrack((prev) => (prev - 1 + experiences.length) % experiences.length);
                    setProgress(0);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'var(--text-muted)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '11px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#1DB954';
                    e.currentTarget.style.color = '#1DB954';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  ⏮ Prev
                </button>
                
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  style={{
                    background: '#1DB954',
                    border: 'none',
                    color: 'white',
                    padding: '6px 16px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  {isPaused ? '▶ Play' : '⏸ Pause'}
                </button>
                
                <button
                  onClick={() => {
                    setCurrentTrack((prev) => (prev + 1) % experiences.length);
                    setProgress(0);
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'var(--text-muted)',
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-sm)',
                    cursor: 'pointer',
                    fontSize: '11px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#1DB954';
                    e.currentTarget.style.color = '#1DB954';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  Next ⏭
                </button>
              </div>
            </div>
          </section>

          <section className="education-container" style={{ padding: '0 var(--space-xl)', marginTop: 'var(--space-2xl)' }}>
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
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: 'var(--space-md)',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {certifications.map((cert) => (
                <div key={cert.id} style={{ width: '100%', minHeight: '220px', background: 'var(--surface-bg)', borderRadius: 'var(--radius-md)', padding: 'var(--space-sm)', border: '2px solid transparent', transition: 'all 0.3s ease', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'; e.currentTarget.style.borderColor = cert.color; e.currentTarget.style.boxShadow = `0 16px 48px ${cert.color}30`; }}
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

      <Footer />
    </>
  );
}