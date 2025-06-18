import React, { useState } from 'react';
import './Contact.css';
import {
  BsEnvelopeAtFill,
  BsLinkedin,
  BsGeoAltFill,
  BsGithub,
  BsTelephoneFill,
} from 'react-icons/bs';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://formspree.io/f/meokkpea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert('✅ Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert('⚠️ Failed to send message. Please try again.');
        }
      })
      .catch(() => alert('❌ Network error. Please try again.'));
  };

  return (
    <section className="container py-5" id="contact" data-aos="fade-up">
      <div className="card contact-card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="text-center mb-4 text-dark fw-bold">
            <BsEnvelopeAtFill className="me-2 text-primary" />
            Contact Me
          </h2>

          <p className="text-center text-muted lead mb-4">
            I'm always open to discussing new opportunities and interesting projects. <br />
            <strong>Let’s Connect!</strong> Whether you have a project in mind, want to collaborate, or just say hello — I’d love to hear from you!
          </p>

          <div className="row">
            {/* Contact Info */}
            <div className="col-md-6">
              <ul className="list-group list-group-flush contact-list">
                <li className="list-group-item d-flex align-items-center">
                  <BsEnvelopeAtFill className="icon text-danger fs-4 me-3" style={{ minWidth: '1.5rem' }} />
                  <span>mohammedparvez7457@gmail.com</span>
                </li>

                <li className="list-group-item d-flex align-items-center">
                  <BsLinkedin className="icon text-primary fs-4 me-3" />
                  <a
                    href="https://linkedin.com/in/mohammed-parvez-785bb0284"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    linkedin.com/in/mohammed-parvez-785bb0284
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <BsGithub className="icon fs-4 me-3" />
                  <a
                    href="https://github.com/Mr-Parvez07"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link"
                  >
                    github.com/Mr-Parvez07
                  </a>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <BsTelephoneFill className="icon text-success fs-4 me-3" />
                  <span>+91 7899455308</span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <BsGeoAltFill className="icon text-warning fs-4 me-3" />
                  <span>Bangalore, India</span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="col-md-6 mt-4 mt-md-0">
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    style={{ height: '120px' }}
                    required
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;