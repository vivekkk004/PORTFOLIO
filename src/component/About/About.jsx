import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./About.css";

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const headerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  const headerInView = useInView(headerRef, { threshold: 0.3, triggerOnce: true });
  const card1InView = useInView(card1Ref, { threshold: 0.3, triggerOnce: true });
  const card2InView = useInView(card2Ref, { threshold: 0.3, triggerOnce: true });

  return (
    <div className="about-bg py-5">
      {/* Scroll-In Header */}
      <motion.div
        ref={headerRef}
        variants={fadeInUpVariant}
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        transition={{ duration: 1 }}
        className="text-center mb-5"
      >
        <p className="head-text font-bold text-lg md:text-2xl">
          I Believe Great Design Paired With <br />
          Scalable Code Leads To Real-World Success
        </p>
      </motion.div>

      {/* Card Container */}
      <div className="container d-flex flex-wrap justify-content-center gap-4">
        {/* Card 1 */}
        <motion.div
          ref={card1Ref}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={card1InView ? 'visible' : 'hidden'}
          transition={{ duration: 1, delay: 0.1 }}
          className="m-3 card card-work card-about"
        >
          <img
            src="../data/img1.avif"
            alt="MERN Stack"
            className="card-img-about rounded-5"
          />
          <div className="card-body-work">
            <h5 className="card-title mt-3 mb-2 font-bold">MERN Stack Developer</h5>
            <p className="card-text">
              As a MERN Stack Developer, I specialize in building scalable web applications using MongoDB, Express.js, React, and Node.js. I focus on creating responsive user interfaces, developing efficient backends, and ensuring seamless full-stack functionality.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          ref={card2Ref}
          variants={fadeInUpVariant}
          initial="hidden"
          animate={card2InView ? 'visible' : 'hidden'}
          transition={{ duration: 1, delay: 0.2 }}
          className="m-3 card card-work card-about"
        >
          <img
            src="../data/uiux.jpeg"
            alt="UI UX Design"
            className="card-img rounded-5"
          />
          <div className="card-body-work">
            <h5 className="card-title mt-3 mb-2 font-bold">UI UX Designer</h5>
            <p className="card-text">
              I am a passionate UI/UX Designer dedicated to crafting visually appealing and highly functional designs. By understanding user behavior and combining creativity with usability principles, I deliver intuitive experiences that drive engagement and satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;