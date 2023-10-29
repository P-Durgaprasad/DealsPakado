import React from 'react';
import './Css/About.css';

const About = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <img src="/images/about-us.png" alt="About Us" />
        <h1>About Us</h1>
      </div>

      <div className="about-us-body">
        <p>
          We are a company that is passionate about building innovative and user-friendly products. We believe that everyone should have access to great technology, and we are committed to making our products affordable and accessible to everyone.
        </p>

        <p>
          We have a team of experienced and talented engineers and designers who are constantly working on new and exciting products. We are always looking for new ways to improve our products and make them even more useful and enjoyable for our users.
        </p>

        <p>
          If you have any questions or feedback about our products, please don't hesitate to contact us. We would love to hear from you!
        </p>

        <div className="about-us-image">
          <img src="/images/about-us-image.png" alt="About Us Image" />
        </div>
      </div>

      <div className="about-us-footer">
        <img src="/images/about-us-footer.png" alt="About Us Footer" />
      </div>
    </div>
  );
};

export default About;
