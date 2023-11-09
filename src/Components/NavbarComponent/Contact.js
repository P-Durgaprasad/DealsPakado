import React from 'react';
import './Css/Contact.css';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-form">
      <div className="contact-form-header">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-form-body">
        <p>
          We'd love to hear from you! Please fill out the form below to contact us with any questions, feedback, or suggestions.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-form-footer">
      </div>
    </div>
  );
};

export default Contact;
