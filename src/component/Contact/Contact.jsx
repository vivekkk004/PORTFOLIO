import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contacts-container py-5 px-3">
      <h1 className="contact-title text-center mb-4">Contact Us</h1>

      <div className="contacts-content d-flex flex-wrap justify-content-center">
        <div className="contact-info text-center mb-5">
          <h2 className="mb-3">Get in Touch</h2>
          <div className="info-item d-flex justify-content-center align-items-center mb-2">
            <i className="fas fa-phone me-2"></i>
            <p className="mb-0">+91 9922736350</p>
          </div>
          <div className="info-item d-flex justify-content-center align-items-center">
            <i className="fas fa-envelope me-2"></i>
            <p className="mb-0">vivekmuthe4@gmail.com</p>
          </div>
        </div>

        {/* <form className="contact-form w-100 w-md-50" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;
