import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "MindScope Mental Health Dashboard",
      category: "NLP & Healthcare",
      description: "Real-time sentiment & emotion tracking dashboard using advanced NLP techniques. Processes text data to provide mental health insights and emotional state monitoring with interactive visualizations.",
      technologies: ["Python", "NLP", "Streamlit", "Sentiment Analysis", "Dashboard", "Real-time Processing"],
      github: "https://github.com/KashS28/mindscope-mental-health-dashboard",
      demo: "https://mindscope-mental-health-dashboard.streamlit.app",
      featured: true
    },
    {
      id: 2,
      title: "Breast Cancer Detection using Transfer Learning",
      category: "Computer Vision & Healthcare",
      description: "High-accuracy CNN-based classifier using transfer learning for breast cancer detection from medical imagery. Implements VGG16 architecture with custom layers for medical image analysis.",
      technologies: ["Python", "TensorFlow", "CNN", "Transfer Learning", "VGG16", "Medical Imaging"],
      github: "https://github.com/KashS28/Breast-Cancer-Detection-using-Transfer-Learning-Approach",
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: "Customer Segmentation and Recommendation System",
      category: "Machine Learning & Analytics",
      description: "Advanced customer segmentation using clustering algorithms and personalized recommendation engine. Analyzes customer behavior patterns to drive business insights and improve user experience.",
      technologies: ["Python", "Scikit-learn", "Clustering", "Recommendation Systems", "Data Analytics", "Visualization"],
      github: "https://github.com/KashS28/Customer-Segmentation-and-Recommendation-System",
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: "Predictive Maintenance Using LSTM",
      category: "Time Series & IoT",
      description: "LSTM-based predictive maintenance system for industrial equipment. Analyzes sensor data patterns to predict equipment failures and optimize maintenance schedules, reducing downtime and costs.",
      technologies: ["Python", "LSTM", "TensorFlow", "Time Series", "IoT", "Predictive Analytics"],
      github: "https://github.com/KashS28/Predictive-Maintenance-Using-LSTM",
      demo: null,
      featured: true
    },
    {
      id: 5,
      title: "Garbage Waste Segregation",
      category: "Computer Vision & Sustainability",
      description: "AI-powered waste classification system using computer vision to automatically segregate different types of waste. Contributes to environmental sustainability through smart waste management.",
      technologies: ["Python", "Computer Vision", "CNN", "Image Classification", "Environmental Tech", "Deep Learning"],
      github: "https://github.com/KashS28/Garbage-Waste-Segregation",
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: "Productivity Tracker",
      category: "Data Analytics & Visualization",
      description: "Comprehensive job & coding productivity tracker built with Streamlit. Features Excel integration, data visualization, and performance analytics for personal productivity monitoring.",
      technologies: ["Python", "Streamlit", "Excel Integration", "Data Visualization", "Analytics"],
      github: "https://github.com/KashS28/streamlit-productivity-tracker",
      demo: "https://productivity-tracker.streamlit.app",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="hero">
            <h1>Projects</h1>
            <p>A showcase of my technical projects and innovative AI/ML solutions</p>
            <div className="social-links">
              <a href="https://github.com/KashS28" target="_blank" rel="noreferrer">
                View All on GitHub
              </a>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="experience-container">
            <h2>🌟 Featured Projects</h2>
            
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="experience-item"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  transform: hoveredProject === project.id ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="experience-header">
                  <div>
                    <div className="experience-title">{project.title}</div>
                    <div className="experience-company">{project.category}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--space-sm)' }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-xs) var(--space-sm)' }}
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ fontSize: 'var(--font-size-sm)', padding: 'var(--space-xs) var(--space-sm)' }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="experience-description">
                  {project.description}
                </div>
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 'var(--space-sm)', 
                  marginTop: 'var(--space-md)' 
                }}>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      style={{
                        background: 'rgba(88, 166, 255, 0.1)',
                        color: 'var(--accent-primary)',
                        padding: 'var(--space-xs) var(--space-sm)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--font-size-sm)',
                        border: '1px solid rgba(88, 166, 255, 0.2)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Other Projects */}
          <section className="experience-container">
            <h2>🚀 Other Projects</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: 'var(--space-lg)',
              marginTop: 'var(--space-xl)'
            }}>
              {otherProjects.map((project) => (
                <div 
                  key={project.id}
                  className="experience-item"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{
                    transform: hoveredProject === project.id ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                    transition: 'all 0.3s ease',
                    margin: 0
                  }}
                >
                  <div className="experience-header">
                    <div>
                      <div className="experience-title" style={{ fontSize: 'var(--font-size-lg)' }}>
                        {project.title}
                      </div>
                      <div className="experience-company" style={{ fontSize: 'var(--font-size-base)' }}>
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="experience-description" style={{ fontSize: 'var(--font-size-sm)' }}>
                    {project.description}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 'var(--space-xs)', 
                    marginTop: 'var(--space-md)' 
                  }}>
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span 
                        key={index}
                        style={{
                          background: 'rgba(88, 166, 255, 0.1)',
                          color: 'var(--accent-primary)',
                          padding: 'var(--space-xs) var(--space-sm)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: 'var(--font-size-xs)',
                          border: '1px solid rgba(88, 166, 255, 0.2)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: 'var(--font-size-xs)' 
                      }}>
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    gap: 'var(--space-sm)', 
                    marginTop: 'var(--space-md)' 
                  }}>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn btn-secondary"
                      style={{ 
                        fontSize: 'var(--font-size-xs)', 
                        padding: 'var(--space-xs) var(--space-sm)',
                        flex: 1
                      }}
                    >
                      GitHub
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="btn btn-primary"
                        style={{ 
                          fontSize: 'var(--font-size-xs)', 
                          padding: 'var(--space-xs) var(--space-sm)',
                          flex: 1
                        }}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}