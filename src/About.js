import React from 'react';
import './About.css';
import profileImg from './profile.jpg';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

function About() {
  return (
    <section className="container py-5" id="about">
      <div className="row justify-content-center" data-aos="fade-up">
        <div className="col-lg-10">
          <div className="card about-card shadow border-0 p-4">
            <div className="row g-4 align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="img-fluid rounded-circle profile-img"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title mb-3 text-center text-md-start">
                    👋 About Me
                  </h2>
                  <p className="lead">
                    I'm <strong>Mohammed Parvez</strong>, a passionate and motivated <strong>Full-Stack Developer</strong> based in Bangalore, India.
                  </p>
                  <p>
                    With a background in <strong>Computer Applications (BCA)</strong>, I thrive in creating seamless, user-friendly digital experiences. I’m committed to writing clean, efficient code and continuously exploring new technologies to expand my capabilities.
                  </p>
                  <p>
                    My journey into software development stems from a love for building real, impactful solutions. I believe in continuous learning, creative problem-solving, and turning ideas into fully functional digital products.
                  </p>
                  <p>
                    Outside of coding, I enjoy exploring design trends, improving my soft skills, and staying updated with tech innovations.
                  </p>

                  <h4 className="mt-4 mb-2">🔗 Connect With Me</h4>
                  <div className="social-links">
                    <a
                      href="https://linkedin.com/in/mohammed-parvez-785bb0284"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon linkedin"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="https://github.com/Mr-Parvez07"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon github"
                    >
                      <BsGithub />
                    </a>
                    <a
                      href="https://instagram.com/khanbxy"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon instagram"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
