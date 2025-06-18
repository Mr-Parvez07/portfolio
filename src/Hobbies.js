import React from 'react';
import './Hobbies.css';
import { BsStars, BsLightbulbFill, BsMusicNoteBeamed, BsGeoAltFill } from 'react-icons/bs';

function Hobbies() {
  return (
    <section className="container py-5" id="hobbies" data-aos="fade-up">
      <div className="card hobbies-card shadow-lg border-0 p-4">
        <h2 className="text-center mb-4 text-dark fw-bold">
          <BsStars className="me-2 text-warning" />
          Hobbies
        </h2>
        <ul className="list-group list-group-flush fs-5">
          <li className="list-group-item d-flex align-items-center">
            <BsLightbulbFill className="icon text-primary fs-4 me-3" />
            <span>Learning New Technologies</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <BsMusicNoteBeamed className="icon text-danger fs-4 me-3" />
            <span>Listening to Music</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <BsGeoAltFill className="icon text-success fs-4 me-3" />
            <span>Travelling</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hobbies;