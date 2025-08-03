import React from 'react';
import { Download } from 'lucide-react';

const ProfessionalResume = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  const styles = {
    body: {
      fontFamily: "'Times New Roman', serif",
      fontSize: '11px',
      lineHeight: '1.2',
      color: '#000',
      background: '#e0e0e0',
      margin: 0,
      padding: '20px 0'
    },
    a4Page: {
      width: '210mm',
      minHeight: '297mm',
      background: 'white',
      margin: '0 auto',
      boxShadow: '0 0 15px rgba(0,0,0,0.3)',
      position: 'relative',
      display: 'block'
    },
    downloadButton: {
      position: 'absolute',
      top: '-60px',
      right: '0',
      background: '#2563eb',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.3)'
    },
    resumeContent: {
      padding: '20mm 15mm 15mm 20mm',
      height: '100%',
      fontFamily: "'Times New Roman', serif"
    },
    resumeHeader: {
      textAlign: 'center',
      marginBottom: '15px',
      paddingBottom: '10px',
      borderBottom: '2px solid #000'
    },
    nameTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
      letterSpacing: '1px'
    },
    contactDetails: {
      fontSize: '10px',
      lineHeight: '1.3'
    },
    resumeSection: {
      marginBottom: '15px',
      borderBottom: '1px solid #000',
      paddingBottom: '8px'
    },
    resumeSectionLast: {
      marginBottom: '15px',
      paddingBottom: '8px'
    },
    sectionHeader: {
      fontSize: '13px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      marginBottom: '8px',
      letterSpacing: '0.5px'
    },
    educationLine: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontSize: '10px',
      marginBottom: '2px'
    },
    institution: {
      fontWeight: 'bold',
      flex: 1
    },
    location: {
      textAlign: 'right',
      minWidth: '80px'
    },
    degreeLine: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontSize: '10px'
    },
    workEntry: {
      marginBottom: '12px'
    },
    companyLine: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      fontSize: '10px',
      marginBottom: '2px'
    },
    companyName: {
      fontWeight: 'bold',
      flex: 1
    },
    jobRole: {
      fontSize: '10px',
      fontWeight: 'bold',
      marginBottom: '4px',
      textTransform: 'uppercase'
    },
    achievementItem: {
      fontSize: '10px',
      marginBottom: '3px',
      textAlign: 'justify',
      lineHeight: '1.25',
      paddingLeft: '12px',
      position: 'relative'
    },
    skillsCategory: {
      fontSize: '10px',
      marginBottom: '6px',
      textAlign: 'justify',
      lineHeight: '1.3'
    },
    categoryLabel: {
      fontWeight: 'bold'
    },
    certificationsSection: {
      marginTop: '8px'
    },
    certHeader: {
      fontSize: '10px',
      fontWeight: 'bold',
      marginBottom: '4px'
    },
    certEntry: {
      fontSize: '10px',
      marginBottom: '2px',
      paddingLeft: '12px',
      position: 'relative',
      lineHeight: '1.2'
    }
  };

  return (
    <div style={{...styles.body, padding: '20px 0', minHeight: '100vh'}}>
      <div style={styles.a4Page}>
        <button style={styles.downloadButton} onClick={handleDownloadPDF}>
          <Download size={16} />
          Download PDF
        </button>

        <div style={styles.resumeContent}>
          {/* Header Section */}
          <div style={styles.resumeHeader}>
            <div style={styles.nameTitle}>Vivek Muthe</div>
            <div style={styles.contactDetails}>
              vivekmuthe4@gmail.com +91 9922736350 linkedin.com/in/vivek-muthe-b34225248/ / vivekportfolio-rust.vercel.app
            </div>
          </div>

          {/* Education Section */}
          <div style={styles.resumeSection}>
            <div style={styles.sectionHeader}>Education</div>
            <div>
              <div style={styles.educationLine}>
                <span style={styles.institution}>Savitribai Phule Pune University, PGMCOE</span>
                <span style={styles.location}>Pune, India</span>
              </div>
              <div style={styles.degreeLine}>
                <span>Bachelor of Engineering, Artificial Intelligence And Data Science</span>
                <span style={{textAlign: 'right', minWidth: '120px'}}>July 2022 – June 2026</span>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div style={styles.resumeSection}>
            <div style={styles.sectionHeader}>Work Experience</div>
            
            <div style={styles.workEntry}>
              <div style={styles.companyLine}>
                <span style={styles.companyName}>Ekyamm - mental healthcare provider network</span>
                <span style={styles.location}>Pune, India</span>
              </div>
              <div style={styles.jobRole}>Software Developer</div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Redesigned homepage React components with responsive Bootstrap Grid architecture, boosting user retention 45% through enhanced cross-device compatibility and engagement.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Resolved DOM update failures by implementing jQuery deferred script execution, reducing session page load times 50% across all devices.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Structured service content using React Router navigation paths, increasing average page depth 35% through improved accessibility and user flow.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Optimized component reusability through modular React architecture, achieving 60% better cross-device compatibility via systematic multi-resolution QA testing.
              </div>
            </div>

            <div style={styles.workEntry}>
              <div style={styles.companyLine}>
                <span style={styles.companyName}>AiRevolution(A.I.R) - course selling platform</span>
                <span style={styles.location}>Pune, India</span>
              </div>
              <div style={styles.jobRole}>Software Developer</div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Orchestrated a full-stack course portal using MongoDB, React, and Express, reducing manual enrollment by 100% through automated content delivery and JWT-secured access controls.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Streamlined video management using Multer and GridFS, enabling secure storage and playback for course intros, increasing admin efficiency by 60% and video-based engagement by 35%.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Implemented a course review feature which collected 300+ actionable reviews, resulting in identification of the top 3 factors impacting course satisfaction and student retention.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Optimized mobile-first UI using Bootstrap and conditional rendering logic, decreasing bounce rates by 40% and ensuring seamless access for 90% of student users on mobile.
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div style={styles.resumeSection}>
            <div style={styles.sectionHeader}>Projects</div>
            
            <div style={styles.workEntry}>
              <div style={styles.companyLine}>
                <span style={styles.companyName}>EXPLORAX– FIND PLACES TO STAY ON EXPLORAX (EXPLORAX)</span>
                <span style={styles.location}>Pune, India</span>
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Engineered a responsive property showcase using Bootstrap and EJS templates, increasing mobile compatibility and achieving a 92+ score in Lighthouse mobile audits during internal performance evaluations.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Implemented authentication using Passport.js and express-session to protect user-specific content, reducing access vulnerabilities by 60% in mock security testing.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Designed an advanced filtering system with server-side EJS rendering and MongoDB queries, cutting average search time by 45% during feature usability reviews.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Integrated user profile pages using EJS templating to display saved preferences and custom listings, improving user engagement by 37% during internal testing and simplifying server-side code maintenance through modular component reuse.
              </div>
            </div>

            <div style={styles.workEntry}>
              <div style={styles.companyLine}>
                <span style={styles.companyName}>FUSIONINVEST -ZERODHA INSPIRED STOCK TRADING PLATFORM(FUSIONINVEST)</span>
                <span style={styles.location}>Pune, India</span>
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Secured user sessions using JWT and HTTP-only cookies, increasing login success rate by 55% during local usability tests by preventing token tampering and unauthorized access.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Visualized portfolio performance through Chart.js graphs, raising trading clarity by 50% in peer walkthroughs by mapping stock trends and positions in real-time.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Strengthened backend security protocols by deploying bcrypt password encryption, thwarting unauthorized access attempts during penetration tests,and ensuring compliance with industry best practices; achieved Level 1 security certification.
              </div>
              <div style={styles.achievementItem}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Reduced UI latency by 40% in test environments by isolating rendering bottlenecks and applying React memoization in key trade-related components.
              </div>
            </div>
          </div>

          {/* Skills & Certifications Section */}
          <div style={styles.resumeSectionLast}>
            <div style={styles.sectionHeader}>Skills & Certification</div>
            
            <div style={styles.skillsCategory}>
              <span style={styles.categoryLabel}>Technical Skills: </span>
              <span>Java, JavaScript, React.js, Node.js, Express.js, MongoDB, Mongoose, SQL, MySQL, EJS, Bootstrap, Tailwind CSS, Framer Motion, JWT, Bcrypt, RESTful APIs, Axios</span>
            </div>
            
            <div style={styles.skillsCategory}>
              <span style={styles.categoryLabel}>Tools and Platforms: </span>
              <span>Git, GitHub, Postman, MongoDB Atlas, Vercel</span>
            </div>
            
            <div style={styles.certificationsSection}>
              <div style={styles.certHeader}>Certifications:</div>
              <div style={styles.certEntry}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                Geodata Processing using Python – ISRO, February 2023
              </div>
              <div style={styles.certEntry}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                DSA with Java – Apna College, June 2024
              </div>
              <div style={styles.certEntry}>
                <span style={{position: 'absolute', left: '0', top: '0', fontWeight: 'bold'}}>•</span>
                MERN Stack Development – Apna College, January 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalResume;