import React, { useState } from 'react';
import './contact.css';
import { Phone, Mail, MapPin } from 'lucide-react';



const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">
            Get In <span className="contact-title-gradient">Touch</span>
          </h1>
          <p className="contact-subtitle">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          {/* Single Contact Box */}
          <div className="contact-box">
            <div className="contact-sections">
              
              {/* Phone Contact */}
              <div className="contact-section contact-section-phone">
                <div className="contact-icon contact-icon-phone">
                  <Phone className="icon" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-method-title">Call Me</h3>
                  <p className="contact-method-desc">Ready to discuss your project</p>
                  <a 
                    href="tel:+919922736350" 
                    className="contact-link contact-link-phone"
                  >
                    +91 9922736350
                  </a>
                  <p className="contact-availability">Available 9 AM - 8 PM IST</p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="contact-section contact-section-email">
                <div className="contact-icon contact-icon-email">
                  <Mail className="icon" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-method-title">Email Me</h3>
                  <p className="contact-method-desc">Send me a detailed message</p>
                  <a 
                    href="mailto:vivekmuthe4@gmail.com" 
                    className="contact-link contact-link-email"
                  >
                    vivekmuthe4@gmail.com
                  </a>
                  <p className="contact-availability">Response within 24 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="contact-section contact-section-location">
                <div className="contact-icon contact-icon-location">
                  <MapPin className="icon" />
                </div>
                <div className="contact-info">
                  <h3 className="contact-method-title">Location</h3>
                  <p className="contact-method-desc">Working remotely worldwide</p>
                  <p className="contact-link contact-link-location">Pune</p>
                  <p className="contact-availability">Remote collaboration</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
