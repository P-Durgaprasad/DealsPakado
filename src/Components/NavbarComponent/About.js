import React from 'react';
import './Css/About.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h1 className="about-us-title">About Us</h1>

      <p className="about-us-paragraph">
        We are DealsPakado, a genuine deals provider that scours the internet to collect the best deals from different e-commerce websites and presents coupon codes in a clear and concise manner. We understand that searching for the finest deals can be time-consuming, so we do the work for you. Our team of experts searches the web to find the latest and greatest deals on a wide range of products, from clothing and electronics to home goods and travel. Each deal is meticulously verified to ensure accuracy and up-to-dateness.
      </p>

      <h3 className="about-us-heading">Why Choose Us?</h3>
      <ul className="about-us-list">
        <li>We are a genuine deals provider. We verify each deal to ensure that it is accurate and up-to-date.</li>
        <li>We make it easy to find the deals that are most relevant to you. You can filter by category, brand, and price.</li>
        <li>We offer a money-back guarantee on all of our deals.</li>
      </ul>

      <h3 className="about-us-heading">Our Mission</h3>
      <p className="about-us-paragraph">
        Our mission is to help people save money by finding the best deals on the internet. We believe that everyone should have access to the best deals, regardless of their budget or technical expertise.
      </p>

      <h3 className="about-us-heading">Our Values</h3>
      <ul className="about-us-list">
        <li><strong>Integrity:</strong> We are committed to honest and ethical business practices.</li>
        <li><strong>Transparency:</strong> We are transparent about our deals and how we make money.</li>
        <li><strong>Customer satisfaction:</strong> We are committed to providing our customers with the best possible experience.</li>
      </ul>

      <p className="about-us-paragraph">
        We hope you will give us a try and see for yourself why we are the best place to find the latest and greatest deals on the internet.
      </p>

      <a href="/deals" className="about-us-button" aria-label="Shop Now">Shop Now</a>
    </section>
  );
};

export default AboutUs;
