import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SkillDisplay from "../components/SkillDisplay";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // Certifications data
  const certifications = [
    {
      id: 1,
      name: "AWS Educate Introduction to Generative AI",
      issuer: "Amazon Web Services (AWS)",
      date: "2024",
      category: "Cloud & AI",
      description: "Comprehensive introduction to generative AI concepts, applications, and AWS services for AI development.",
      color: "#ff9900"
    },
    {
      id: 2,
      name: "Ask Questions to Make Data-Driven Decisions",
      issuer: "Google",
      date: "2023",
      category: "Data Analytics",
      description: "Learned to ask effective questions, use data to make informed decisions, and communicate insights clearly.",
      color: "#4285f4"
    },
    {
      id: 3,
      name: "Foundations: Data, Data, Everywhere",
      issuer: "Google",
      date: "2023",
      category: "Data Analytics",
      description: "Foundational course covering data analysis lifecycle, tools, and techniques used in data science.",
      color: "#4285f4"
    },
    {
      id: 4,
      name: "Python Programming Beginners Tutorial: Python 3 Programming",
      issuer: "Udemy",
      date: "2021",
      category: "Programming",
      description: "Complete Python programming course covering fundamentals, data structures, and practical applications.",
      color: "#ec5252"
    },
    {
      id: 5,
      name: "Python Data Structures",
      issuer: "University of Michigan (Coursera)",
      date: "2020",
      category: "Programming",
      description: "Advanced Python programming focused on data structures, algorithms, and efficient coding practices.",
      color: "#0056d3"
    },
    {
      id: 6,
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2021",
      category: "Web Development",
      description: "Comprehensive web design certification covering HTML, CSS, responsive design, and accessibility.",
      color: "#0a0a23"
    },
    {
      id: 7,
      name: "C++ Intermediate to Advanced Course with Project",
      issuer: "Udemy",
      date: "2021",
      category: "Programming",
      description: "Advanced C++ programming including OOP, memory management, and real-world project development.",
      color: "#ec5252"
    }
  ];

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          delay: Math.random() * 15
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Mouse tracking
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Matrix rain effect
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    const matrixContainer = document.querySelector('.matrix-rain');
    
    if (matrixContainer) {
      const createMatrixChar = () => {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + '%';
        char.style.animationDuration = (Math.random() * 3 + 2) + 's';
        matrixContainer.appendChild(char);

        setTimeout(() => {
          char.remove();
        }, 5000);
      };

      const interval = setInterval(createMatrixChar, 200);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      {/* Floating Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Matrix Rain Effect */}
      <div className="matrix-rain" />

      <Header />
      <main>
        <div className="container">
          {/* Hero Section */}
          <section className="hero">
            <h1 className="glitch">
              <span className="typing-text">Hello, I'm Kashish 👋</span>
            </h1>
            <p>
              Machine Learning Engineer by day, problem-solver by nature. I'm fascinated by how AI can transform industries — from healthcare to fashion to sustainability.
            </p>
            <p>
              Currently building the future of intelligent systems, one algorithm at a time. Let's create something amazing together.
            </p>

            <div className="social-links" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'var(--space-sm)',
              fontSize: 'var(--font-size-base)'
            }}>
              <a href="https://github.com/KashS28" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span className="social-separator">|</span>
              <a href="https://linkedin.com/in/kashish-shah-2804" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span className="social-separator">|</span>
              <a href="https://medium.com/@ctrlaltthrive" target="_blank" rel="noreferrer">
                Blog
              </a>
              <span className="social-separator">|</span>
              <a href="https://calendly.com/kashayn-2001/15min" target="_blank" rel="noreferrer">
                Schedule a Call
              </a>
            </div>
          </section>

          {/* Skills Section */}
          <SkillDisplay />

          {/* Experience Section */}
          <section className="experience-container">
            <h2>Experience</h2>
            
            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-title">Machine Learning Engineer</div>
                  <div className="experience-company">KAP Ventures</div>
                </div>
                <div className="experience-date">May 2025 – Present</div>
              </div>
              <div className="experience-description">
                Implemented agentic AI workflows using LLaMA and GPT to power autonomous fashion styling assistants, driving social media growth from 0 to 20K+ followers and tripling user engagement within 3 months through dynamic, conversation-led experiences. Deployed NLP microservices via FastAPI and AWS Lambda, reducing inference latency by 40%.
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-title">Assistant Researcher</div>
                  <div className="experience-company">Institute for Experiential AI at Northeastern University</div>
                </div>
                <div className="experience-date">Mar 2024 – Jun 2024</div>
              </div>
              <div className="experience-description">
                Investigated research on smart glasses for depression diagnosis and processed extensive data to develop machine learning models for detecting depression indicators through movement responses. Explored patient features to find patterns and validated sensor glass efficacy through dataset comparison.
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-title">Co-Founder</div>
                  <div className="experience-company">The Spiral Squad</div>
                </div>
                <div className="experience-date">Feb 2023 – Aug 2023</div>
              </div>
              <div className="experience-description">
                Co-founded and led a remote development team specializing in startup leadership, marketing management, web design, data structures, and cross-functional team collaboration to build cloud-based digital branding platforms.
              </div>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <div>
                  <div className="experience-title">Fullstack Software Engineer</div>
                  <div className="experience-company">Kleren Oak</div>
                </div>
                <div className="experience-date">Apr 2021 – Mar 2023</div>
              </div>
              <div className="experience-description">
                Employed React Hooks for streamlined state management across diverse client projects, reducing code complexity by 26% and enhancing maintainability. Developed reusable React components with responsive design, boosting UI consistency by 23%. Implemented server-side rendering and memory optimization techniques, resulting in 17% faster page loading speed.
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="education-container">
            <h2>Education</h2>
            
            <div className="education-item" style={{ maxWidth: '600px', margin: '0 auto var(--space-md) auto', padding: 'var(--space-lg)' }}>
              <div className="education-degree">MS, Electrical & Computer Engineering</div>
              <div className="education-school">Northeastern University, Boston MA</div>
              <div className="education-date">2023 – 2025</div>
              <div className="education-gpa">GPA: 3.56</div>
            </div>

            <div className="education-item" style={{ maxWidth: '600px', margin: '0 auto var(--space-md) auto', padding: 'var(--space-lg)' }}>
              <div className="education-degree">Graduate Certificate, MBA</div>
              <div className="education-school">D'Amore-McKim School of Business, Northeastern University</div>
              <div className="education-date">2025</div>
            </div>

            <div className="education-item" style={{ maxWidth: '600px', margin: '0 auto var(--space-md) auto', padding: 'var(--space-lg)' }}>
              <div className="education-degree">BTech, Electronics & Telecommunication Engineering</div>
              <div className="education-school">University of Mumbai, Mumbai IN</div>
              <div className="education-date">2019 – 2023</div>
              <div className="education-gpa">GPA: 3.52</div>
            </div>
          </section>
        </div>

        {/* Certifications Section - Floating Layout */}
        <section style={{ padding: 'var(--space-2xl) 0' }}>
          <div className="container">
            <h2>Certifications</h2>
          </div>
          
          {/* Floating Layout - FULL WIDTH */}
          <div style={{ 
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            padding: 'var(--space-lg)',
            background: 'linear-gradient(135deg, rgba(88, 166, 255, 0.03) 0%, rgba(248, 81, 73, 0.03) 100%)'
          }}>
            <div 
              className="certifications-grid"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: 'var(--space-lg)',
                maxWidth: '1400px',
                margin: '0 auto'
              }}>
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id}
                  style={{
                    width: 'min(300px, 90vw)',
                    minHeight: '350px',
                    background: 'var(--surface-bg)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-md)',
                    border: `2px solid transparent`,
                    transition: 'all var(--transition-base)',
                    cursor: 'pointer',
                    position: 'relative',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.borderColor = cert.color;
                    e.currentTarget.style.boxShadow = `0 20px 60px ${cert.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* Header without icon */}
                  <div style={{
                    marginBottom: 'var(--space-md)'
                  }}>
                    <div style={{
                      color: cert.color,
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: 'var(--space-xs)'
                    }}>
                      {cert.category}
                    </div>
                    <div style={{
                      color: 'var(--text-muted)',
                      fontSize: 'var(--font-size-xs)',
                      fontFamily: 'var(--font-family-mono)'
                    }}>
                      {cert.date}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 style={{
                    color: 'var(--text-primary)',
                    fontSize: 'var(--font-size-base)',
                    fontWeight: '700',
                    marginBottom: 'var(--space-sm)',
                    lineHeight: '1.3',
                    textAlign: 'center'
                  }}>
                    {cert.name}
                  </h4>
                  
                  <div style={{
                    color: cert.color,
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    marginBottom: 'var(--space-sm)',
                    textAlign: 'center'
                  }}>
                    {cert.issuer}
                  </div>
                  
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-size-xs)',
                    lineHeight: '1.5',
                    margin: 0,
                    flex: 1,
                    textAlign: 'center'
                  }}>
                    {cert.description}
                  </p>
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