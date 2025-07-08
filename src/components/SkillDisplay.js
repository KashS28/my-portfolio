import React, { useState, useEffect } from "react";

const skills = {
  "Programming Languages": [
    "Python", "Java", "Scala", "C/C++", "JavaScript", "TypeScript", "Go", "R", "MATLAB", "PHP"
  ],
  "Machine Learning": [
    "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "XGBoost", "LightGBM", "Transfer Learning", "Model Optimization", "Hyperparameter Tuning", "MLOps"
  ],
  "Data Science": [
    "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Statistical Testing", "Exploratory Data Analysis", "Feature Engineering", "Data Visualization", "Jupyter Notebooks"
  ],
  "Software Development": [
    "React", "Node.js", "FastAPI", "Flask", "Django", "Git", "Docker", "CI/CD", "REST APIs", "GraphQL"
  ],
  "Data Analytics": [
    "SQL", "PostgreSQL", "MongoDB", "Power BI", "Tableau", "Apache Airflow", "PySpark", "Databricks", "ETL Pipelines", "Data Warehousing"
  ],
  "Artificial Intelligence": [
    "Natural Language Processing", "Computer Vision", "CNNs", "RNNs", "LSTMs", "Transformers", "BERT", "GPT", "OpenAI API", "Hugging Face"
  ],
  "Cloud & DevOps": [
    "AWS", "Google Cloud", "Azure", "Lambda Functions", "EC2", "S3", "Docker", "Kubernetes", "Terraform", "GitHub Actions"
  ]
};

export default function SkillDisplay() {
  const [selected, setSelected] = useState("Programming Languages");
  const [animatingSkills, setAnimatingSkills] = useState(false);

  useEffect(() => {
    setAnimatingSkills(true);
    const timer = setTimeout(() => setAnimatingSkills(false), 600);
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <section className="skills-container">
      <h2>Skills</h2>
      
      {/* Category Selection Buttons */}
      <div style={{ 
        marginBottom: "var(--space-xl)", 
        display: "flex", 
        flexWrap: "wrap", 
        justifyContent: "center", 
        gap: "var(--space-sm)" 
      }}>
        {Object.keys(skills).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`btn ${selected === cat ? 'btn-primary' : 'btn-secondary'}`}
            style={{ margin: "var(--space-xs)" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Display - Horizontal Format */}
      <div className="skills-category">
        <h3>{selected}</h3>
        <div className={`skills-list ${animatingSkills ? 'animating' : ''}`}>
          {skills[selected].map((skill, idx) => (
            <React.Fragment key={idx}>
              <span 
                className="skill-item"
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  transform: animatingSkills ? 'scale(0)' : 'scale(1)'
                }}
              >
                {skill}
              </span>
              {idx < skills[selected].length - 1 && (
                <span className="skill-separator">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}