import React, { useState, useEffect } from "react";

// Streamlined to 5 core competencies
const skills = {
  "Machine Learning & AI": [
    "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "NLP", "Computer Vision", 
    "CNNs", "RNNs", "LSTMs", "Transformers", "BERT", "GPT", "XGBoost", "MLOps"
  ],
  "Fullstack Development": [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "FastAPI", "Flask", 
    "Django", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Docker", "AWS"
  ],
  "Data Science & Analytics": [
    "Python", "Pandas", "NumPy", "SQL", "Matplotlib", "Seaborn", "Plotly", 
    "Statistical Analysis", "Feature Engineering", "Data Visualization", "Power BI", "Tableau"
  ],
  "UI/UX & Graphic Design": [
    "Figma", "Adobe XD", "Photoshop", "Illustrator", "InDesign", "Canva", 
    "Wireframing", "Prototyping", "Brand Identity", "Logo Design", "Typography"
  ],
  "Web Design & Frontend": [
    "HTML/CSS", "React", "Tailwind CSS", "Responsive Design", "Wix", "Webflow",
    "WordPress", "UI Components", "Accessibility", "Design Systems"
  ]
};

export default function SkillDisplay() {
  const [selected, setSelected] = useState("Machine Learning & AI");
  const [animatingSkills, setAnimatingSkills] = useState(false);

  useEffect(() => {
    setAnimatingSkills(true);
    const timer = setTimeout(() => setAnimatingSkills(false), 300);
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <section className="skills-section" style={{ 
      maxWidth: '800px', 
      margin: '0 auto',
      padding: '0 var(--space-md)',
      textAlign: 'center'
    }}>
      <h2>Skills & Expertise</h2>
      
      {/* Category Tabs - Masonry Layout */}
      <div style={{
        columnCount: 'auto',
        columnWidth: '180px',
        columnGap: 'var(--space-sm)',
        marginBottom: 'var(--space-2xl)',
        maxWidth: '700px',
        margin: '0 auto var(--space-2xl) auto'
      }}>
        {Object.keys(skills).map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`skill-tab ${selected === category ? 'active' : ''}`}
            style={{
              display: 'inline-block',
              width: '100%',
              marginBottom: 'var(--space-xs)',
              breakInside: 'avoid',
              padding: 'var(--space-xs) var(--space-sm)',
              borderRadius: 'var(--radius-md)',
              border: selected === category 
                ? '2px solid var(--accent-primary)' 
                : '2px solid var(--border-default)',
              background: selected === category 
                ? 'rgba(88, 166, 255, 0.1)' 
                : 'var(--surface-bg)',
              color: selected === category 
                ? 'var(--accent-primary)' 
                : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all var(--transition-base)',
              fontSize: 'var(--font-size-xs)',
              fontWeight: selected === category ? '600' : '500',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              if (selected !== category) {
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (selected !== category) {
                e.currentTarget.style.borderColor = 'var(--border-default)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid - Different look from categories */}
      <div 
        className={`skills-grid ${animatingSkills ? 'animating' : ''}`}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-xs)',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto'
        }}
      >
        {skills[selected].map((skill, index) => (
          <div
            key={skill}
            className="skill-badge"
            style={{
              padding: '6px 14px',
              background: 'linear-gradient(135deg, rgba(88, 166, 255, 0.05), rgba(248, 81, 73, 0.05))',
              borderRadius: '20px',
              fontSize: 'var(--font-size-xs)',
              color: 'var(--text-primary)',
              border: '1px solid rgba(88, 166, 255, 0.2)',
              transition: 'all var(--transition-base)',
              cursor: 'default',
              fontWeight: '500',
              letterSpacing: '0.3px',
              animation: animatingSkills ? `skillFadeIn 0.3s ease-out ${index * 0.03}s both` : 'none',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.borderColor = 'var(--accent-primary)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(88, 166, 255, 0.15), rgba(248, 81, 73, 0.15))';
              e.currentTarget.style.color = 'var(--accent-primary)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(88, 166, 255, 0.3)';
              e.currentTarget.style.fontWeight = '600';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = 'rgba(88, 166, 255, 0.2)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(88, 166, 255, 0.05), rgba(248, 81, 73, 0.05))';
              e.currentTarget.style.color = 'var(--text-primary)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              e.currentTarget.style.fontWeight = '500';
            }}
          >
            {skill}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes skillFadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}