import React from 'react';
import './Css/Contact.css';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h1>Contact Us</h1>
            </div>

            <div className="card-body">
              <p>
                We'd love to hear from you! Please fill out the form below to contact us with any questions, feedback, or suggestions.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label"></label>
                  <textarea
                    className="form-control"
                    placeholder="Your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">Send</button>
              </form>
              <p className="mt-3">You can also reach us at: <strong>contact@dealspakado.com</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
