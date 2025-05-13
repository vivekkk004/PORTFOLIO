import React from 'react';
import { motion } from 'framer-motion';
import "./Work.css";

const cardData = [
  {
    title: "Explorax-Holiday Home",
    image: "../data/explora.png",
    description: "Designed and developed a full-stack travel booking platform using MongoDB, Bootstrap, and EJS to simplify vacation rental searches. Enabled users to explore, book, and review highly-rated stays with a seamless UI.",
    viewLink: "https://explorax-1.onrender.com/",
    githubLink: "https://github.com/vivekkk004/ExploraX.git"
  },
  {
    title: "Fusioninvest - Trading Platform",
    image: "../data/Crypto All Inclusive.jpeg",
    description: "Developed a stock trading platform, Fusioninvest, using the MERN stack, mimicking key features of Zerodha. Integrated secure authentication and a real-time trading dashboard for managing portfolios, orders, and market performance",
    viewLink: "https://fusioninvestt.vercel.app/",
    githubLink: "https://github.com/vivekkk004/Fusioninvest.git"
  },
  {
    title: "Shopping Time - Girls Fashion",
    image: "../data/Shopping.jpeg",
    description: "Created a visually appealing shopping platform for girls using HTML, CSS, and JavaScript within the React framework. Focused on delivering an intuitive, responsive user experience with a range of fashion and lifestyle products.",
    viewLink: "https://shopping-time.vercel.app/",
    githubLink: "https://github.com/vivekkk004/shopping-time.git"
  }
];

const Work = () => {
  return (
    <div className="work-bg py-5 px-3">
      <div className="text-center mb-5">
        <motion.p
          className="head-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <b>My Creative Portfolio Section</b>
        </motion.p>
      </div>

      <div className="button-group d-flex justify-content-center mt-4 mb-5">
        <button className="gradient-btn me-4">Web App</button>
        <button className="gradient-btn me-4">React JS</button>
        <button className="gradient-btn me-4">UI/UX</button>
      </div>

      <div className="row justify-content-center container">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="col-lg-3 col-md-4 col-sm-4 col-12 m-3 card card-work"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 * index }}
          >
            <div className="image-container position-relative">
              <img
                src={card.image}
                className="card-img-work rounded-5 w-100"
                alt={card.title}
              />
              <div className="overlay d-flex justify-content-center align-items-center gap-3">
                <a
                  href={card.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-circle icon-btn"
                >
                  <i className="bi bi-eye"></i>
                </a>
                <a
                  href={card.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light rounded-circle icon-btn"
                >
                  <i className="bi bi-github"></i>
                </a>
              </div>
            </div>

            <div className="card-body-work">
              <h5 className="card-title mt-3 mb-1" style={{ margin: 0, padding: 0, lineHeight: 1.5 }}>
                <b>{card.title}</b>
              </h5>
              <p className="card-text">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;