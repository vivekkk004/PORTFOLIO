import React from 'react';
import "./Skill.css";

const Skill = () => {
  return (
    <div className="row bg-s">
      <h1 className="head-text">Skills & Experiences</h1>
      <div className="col-md-8 col-sm-3 offset-2 skill">
        {/* Skills Section */}
        <section className="skills-section tech">
          <h2>Technical Skills</h2>

          {/* Front-End */}
          <div className="skills-category">
            <h3>Front-End Development</h3>
            <div className="skills-grid" >
              {[
                { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
                { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
                { name: 'JavaScript', icon: 'fab fa-js', level: 85 },
                { name: 'React', icon: 'fab fa-react', level: 80 },
                { name: 'Vite', icon: 'fab fa-vuejs', level: 75 },
                { name: 'Sass', icon: 'fab fa-sass', level: 70 },
              ].map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back-End */}
          <div className="skills-category">
            <h3>Back-End Development</h3>
            <div className="skills-grid">
              {[
                { name: 'Node.js', icon: 'fab fa-node-js', level: 85 },
                { name: 'Python', icon: 'fab fa-python', level: 80 },
                { name: 'SQL', icon: 'fas fa-database', level: 75 },
                { name: 'Express.js', icon: 'fas fa-server', level: 80 },
                { name: 'MongoDB', icon: 'fas fa-leaf', level: 70 },
                { name: 'Firebase', icon: 'fas fa-fire', level: 65 },
              ].map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Other */}
          <div className="skills-category">
            <h3>Tools & Other Skills</h3>
            <div className="skills-grid">
              {[
                { name: 'Git', icon: 'fab fa-git-alt', level: 90 },
                { name: 'Docker', icon: 'fab fa-docker', level: 60 },
                { name: 'AWS', icon: 'fas fa-cloud', level: 65 },
                { name: 'Responsive Design', icon: 'fas fa-mobile-alt', level: 95 },
                { name: 'Accessibility', icon: 'fas fa-universal-access', level: 85 },
                { name: 'Performance Optimization', icon: 'fas fa-tachometer-alt', level: 80 },
              ].map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <div className="skill-bar">
                      <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
       <div className="container py-4">
  <div className="row">
    {/* Work Experience Section */}
    <section className="experience col-12 mb-4">
      <h2 className="text-center text-md-start">Work Experience</h2>
      <div className="timeline">
        {[
          {
            title: 'Software Developer Intern',
            company: 'RadicleMindsIndia Pvt Ltd.',
            date: '2025 - Present',
            desc: 'Gained hands-on experience in software development, problem-solving, and collaboration within a dynamic team environment.',
          },
        ].map((exp, idx) => (
          <div className="timeline-item mb-3" key={idx}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="timeline-date">{exp.date}</p>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Education Section */}
    <section className="education col-12">
      <h2 className="text-center text-md-start">Education</h2>
      {[
        {
          degree: 'B.Tech in Artificial Intelligence and Data Science',
          institution: 'Savitribai Phule Pune University',
          date: '2022 - 2026',
          detail: '',
        },
      ].map((edu, idx) => (
        <div className="education-item mb-3" key={idx}>
          <h3>{edu.degree}</h3>
          <h4>{edu.institution}</h4>
          <p className="education-date">{edu.date}</p>
          {edu.detail && <p>{edu.detail}</p>}
        </div>
      ))}
    </section>
  </div>
</div>

      </div>
    </div>
  );
};

export default Skill;
