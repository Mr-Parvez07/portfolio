import React from 'react';
import './Education.css';
import {
  BsMortarboardFill,
  BsCalendarCheck,
} from 'react-icons/bs';

function Education() {
  return (
    <section className="container py-5" id="education">
      <div className="card main-education-card shadow border-0 p-4">
        <h2 className="text-center mb-5 text-dark fw-bold">
          <BsMortarboardFill className="text-primary me-2" />
          Education Journey
        </h2>

        <div className="d-flex flex-column align-items-center gap-4">

          {/* BCA */}
          <div className="edu-box text-center shadow-sm p-4 rounded bg-white w-100">
            <h4 className="text-success fw-semibold">Bachelor of Computer Applications (BCA)</h4>
            <p className="text-muted mb-1">
              <BsCalendarCheck className="me-2 text-dark" />
              Completed in 2024
            </p>
            <p className="text-dark">
              <i className="bi bi-mortarboard-fill me-2 text-dark"></i>
              CMR University, Bengaluru — CGPA: 8.24
            </p>
          </div>

          {/* PUC */}
          <div className="edu-box text-center shadow-sm p-4 rounded bg-white w-100">
            <h4 className="fw-semibold text-dark">PUC (12th Grade)</h4>
            <p className="text-muted mb-1">
              <BsCalendarCheck className="me-2 text-dark" />
              Completed in 2021
            </p>
            <p className="text-dark">
              <i className="bi bi-bank2 me-2 text-dark"></i>
              Karnataka Pre-University Board — 67.33%
            </p>
          </div>

          {/* SSLC */}
          <div className="edu-box text-center shadow-sm p-4 rounded bg-white w-100">
            <h4 className="fw-semibold text-dark">SSLC (10th Grade)</h4>
            <p className="text-muted mb-1">
              <BsCalendarCheck className="me-2 text-dark" />
              Completed in 2019
            </p>
            <p className="text-dark">
              <i className="bi bi-house-door-fill me-2 text-dark"></i>
              Karnataka State Board — 58.56%
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;