import React from 'react';
import './Courses.css';
import {
  BsCalendarCheck,
  BsBuilding,
  BsCodeSlash,
  BsBoxArrowUpRight,
  BsPatchCheckFill,
  BsBriefcaseFill
} from 'react-icons/bs';

function Courses() {
  return (
    <section className="container py-5" id="courses" data-aos="fade-up">
      <div className="card course-container shadow border-0 p-4">
        {/* Title with Icon */}
        <h2 className="text-center mb-4 fw-bold text-dark">
          <BsPatchCheckFill className="text-success me-2" />
          My Course & Internship
        </h2>

        {/* Python Full Stack Course */}
        <div className="timeline-item card p-3 mb-4 border-0">
          <div className="timeline-content">
            <h4 className="text-primary fw-semibold">Python Full-Stack Developer Course</h4>
            <p className="text-muted mb-1">
              <BsCalendarCheck className="me-2 text-dark" />
              6 Months (2024)
            </p>
            <p className="text-dark">
              <BsBuilding className="me-2 text-dark" />
              Besant Technologies, Bengaluru
            </p>
            <p className="text-secondary mt-2">
              <BsCodeSlash className="me-2 text-info" />
              Covered HTML, CSS, JavaScript, React, Python, Django, and MySQL with real-time projects.
            </p>
            <a
              href="/course certificate.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-success mt-3"
            >
              <BsBoxArrowUpRight className="me-2" />
              View Certificate
            </a>
          </div>
        </div>

        {/* Internship Section */}
        <div className="timeline-item card p-3 border-0">
          <div className="timeline-content">
            <h4 className="text-primary fw-semibold">Web Development Internship</h4>
            <p className="text-muted mb-1">
              <BsCalendarCheck className="me-2 text-dark" />
              1 Months (2024)
            </p>
            <p className="text-dark">
              <BsBriefcaseFill className="me-2 text-dark" />
              Internship at Coding Raja Technologies
            </p>
            <p className="text-secondary mt-2">
              <BsCodeSlash className="me-2 text-info" />
              Worked on real-time web development tasks including frontend design using HTML, CSS, JavaScript, and basic backend integration.
            </p>
            <a
              href="/certificate.jpg"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-success mt-3"
            >
              <BsBoxArrowUpRight className="me-2" />
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;