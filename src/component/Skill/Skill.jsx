import React from 'react';
import './Skill.css';

// Data for Skills
const skillCategories = [
    {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3 & Sass', icon: 'fab fa-sass' },
            { name: 'JavaScript', icon: 'fab fa-js-square' },
            { name: 'React', icon: 'fab fa-react' },
            { name: 'Vue.js', icon: 'fab fa-vuejs' },
            { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: 'fab fa-node-js' },
            { name: 'Express.js', icon: 'fas fa-server' },
            { name: 'Python', icon: 'fab fa-python' },
            { name: 'MongoDB', icon: 'fas fa-leaf' },
            { name: 'SQL', icon: 'fas fa-database' },
            { name: 'Firebase', icon: 'fas fa-fire' },
        ],
    },
    {
        title: 'Tools & Methods',
        skills: [
            { name: 'Git & GitHub', icon: 'fab fa-git-alt' },
            { name: 'Docker', icon: 'fab fa-docker' },
            { name: 'AWS', icon: 'fab fa-aws' },
            { name: 'CI/CD', icon: 'fas fa-cogs' },
            { name: 'Agile/Scrum', icon: 'fas fa-users' },
            { name: 'Performance Opt.', icon: 'fas fa-tachometer-alt' },
        ],
    },
];

// Data for Timeline
const timelineItems = [
    {
        type: 'Work',
        title: 'Software Developer Intern',
        subtitle: 'RadicleMindsIndia Pvt Ltd, Pune',
        date: '2025 – 2025',
        description: 'Gained hands-on experience in full-stack development, contributing to production-level code and collaborating within a dynamic team environment using Agile methodologies.',
    },
    {
        type: 'Work',
        title: 'Software Developer',
        subtitle: 'AiRevolution(A.I.R)-course selling platform ',
        date: '2025 – 2025',
        description: 'Developed a full-stack course-selling platform with secure video handling, review analytics, and mobile-first UI, boosting engagement by 35% and reducing bounce rate by 40%.',
    },
    {
        type: 'Education',
        title: 'B.Tech in AI & Data Science',
        subtitle: 'Savitribai Phule Pune University',
        date: '2022 – 2026',
        description: 'Pursuing a comprehensive curriculum focused on machine learning, software engineering principles, and data structures.',
    }
];

const Skill = () => {
    return (
        <div className="sae-section">
            <div className="sae-container">

<<<<<<< HEAD
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
=======
                {/* --- Technologies & Skills Section (Now in one box) --- */}
                <div className="sae-skills">
                    <h2 className="sae-section-title">Technologies & Skills</h2>
                    <div className="skills-unified-box">
                        {skillCategories.map((category, index) => (
                            <div className="skill-subsection" key={index}>
                                <h3 className="skill-subsection-title">{category.title}</h3>
                                <div className="sae-skill-tags">
                                    {category.skills.map((skill, idx) => (
                                        <div className="sae-skill-tag" key={idx}>
                                            <i className={skill.icon}></i>
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
>>>>>>> 3890684 (Updated portfolio with new features/design)
                    </div>
                </div>

                {/* --- My Journey Section --- */}
                <div className="sae-timeline">
                    <h2 className="sae-section-title">My Journey</h2>
                    <div className="sae-timeline-container">
                        {timelineItems.map((item, index) => (
                            <div className="sae-timeline-item" key={index}>
                                <div className="sae-timeline-icon-wrapper">
                                    <div className="sae-timeline-icon">
                                        <i className={item.type === 'Work' ? 'fas fa-briefcase' : 'fas fa-graduation-cap'}></i>
                                    </div>
                                </div>
                                <div className="sae-timeline-content">
                                    <span className="sae-timeline-date">{item.date}</span>
                                    <h3 className="sae-timeline-title">{item.title}</h3>
                                    <h4 className="sae-timeline-subtitle">{item.subtitle}</h4>
                                    <p className="sae-timeline-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;