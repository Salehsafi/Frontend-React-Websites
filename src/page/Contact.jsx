import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="container">
        <div className="contact_header">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
        
        <div className="contact_container">
          <div className="contact_info_box">
            <div className="info_item">
              <h3>Visit Us</h3>
              <p>123 Minimalist St, Design City, DC 45678</p>
            </div>
            <div className="info_item">
              <h3>Call Us</h3>
              <p>+1 (234) 567-8900</p>
            </div>
            <div className="info_item">
              <h3>Email Us</h3>
              <p>hello@onyx-minimal.com</p>
            </div>
          </div>

          <form className="contact_form">
            <div className="form_group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form_group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form_group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit_btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
