import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about_page">
      <div className="container">
        <div className="about_content">
          <h1>About Our Store</h1>
          <p>
            Welcome to ONYX, where style meets simplicity. Our mission is to provide you with the finest 
            selection of products in a sleek, minimalist environment.
          </p>
          <div className="about_grid">
            <div className="about_item">
              <h3>Our Vision</h3>
              <p>We believe in the power of design and quality. Our collection is curated to bring you the best in modern aesthetics.</p>
            </div>
            <div className="about_item">
              <h3>Quality First</h3>
              <p>Every item in our store undergoes a rigorous selection process to ensure it meets our high standards of excellence.</p>
            </div>
            <div className="about_item">
              <h3>Customer Care</h3>
              <p>We are dedicated to providing an exceptional shopping experience, from browsing to delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
