import React, { useState, useEffect } from 'react';
import './Home.css';
import { BsDownload } from 'react-icons/bs';

function Home() {
  const [showModal, setShowModal] = useState(false);
  const titles = [
    'Full-Stack Developer',
    'Front-End Developer',
    'Python Developer',
    'Software Developer',
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="container py-5" id="home">
      <div className="row align-items-center justify-content-center text-white">
        {/* Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="/profile1.jpg"
            alt="Profile"
            className="img-fluid rounded-circle shadow-lg profile-img"
            width="130"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Intro Text and Buttons */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold">Hi, I'm Mohammed Parvez</h1>
          <p className="lead rotating-title">{titles[titleIndex]}</p>
          <div className="d-flex justify-content-center justify-content-md-start flex-wrap gap-3">
            <a
              href="/parvez.pdf"
              className="btn btn-outline-info btn-lg rounded-pill shadow-sm"
              download
            >
              <BsDownload className="me-2" />
              Download Resume
            </a>
            <a
              href="#about"
              className="btn btn-outline-warning btn-lg rounded-pill shadow-sm"
            >
              More About Me
            </a>
          </div>
        </div>
      </div>

      {/* Modal for enlarged profile image */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <img src="/profile1.jpg" alt="Enlarged Profile" className="modal-img" />
        </div>
      )}
    </section>
  );
}

export default Home;