import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Only needed if using npm install

const SocialMedia = () => {
  return (
    <div className="social-bar">
      <a href="https://www.linkedin.com/in/vivek-muthe-b34225248/"><i className="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/vivekkk004"><i className="fab fa-github"></i></a>
      <a href="https://x.com/vivekkk__004"><i className="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/vivekkk__004/"><i className="fab fa-instagram"></i></a>
      <a href="https://linktr.ee/vivekkk__004"><i className="fas fa-link"></i></a>
      <a href="#"><i className="fab fa-telegram-plane"></i></a>
    </div>
  );
};

export default SocialMedia;
