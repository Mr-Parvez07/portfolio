import React from 'react';
import './Projects.css';
import { BsCartCheckFill, BsKanbanFill, BsBoxArrowUpRight } from 'react-icons/bs';

function Projects() {
    return (
        <section className="container py-5" id="projects" data-aos="fade-up">
            <div className="project-container card shadow border-0 p-4">
                <h2 className="text-center mb-4 fw-bold text-dark">
                    <BsKanbanFill className="text-primary me-2" />
                     Featured Projects
                </h2>
                <p className="text-center text-muted mb-5">
                    Here are some of my recent projects that showcase my skills and passion for development
                </p>


                {/* Buytime Project */}
                <div className="project-card-inner card p-3 mb-4">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5 text-center">
                            <img
                                src="/btlogo.png"
                                alt="Buytime Project"
                                className="img-fluid rounded project-img"
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="project-details">
                                <h4 className="text-primary d-flex align-items-center">
                                    <BsCartCheckFill className="me-2 text-success" />
                                    Buytime (E-commerce Website)
                                </h4>
                                <p className="text-muted mb-3">
                                    Developed a fully responsive e-commerce frontend using <strong>React.js</strong> and <strong>Bootstrap</strong>. It features a product listing page, a user-friendly cart interface, and a clean, adaptive layout.
                                </p>
                                <a
                                    href="https://buytime.netlify.app/"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <BsBoxArrowUpRight className="me-2" />
                                    View Live Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Portal Project */}
                <div className="project-card-inner card p-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5 text-center">
                            <img
                                src="/job.jpg"
                                alt="Job Portal Project"
                                className="img-fluid rounded project-img"
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="project-details">
                                <h4 className="text-primary d-flex align-items-center">
                                    <BsCartCheckFill className="me-2 text-warning" />
                                    Job Portal (Final Year Clg Project - 2024 )
                                </h4>
                                <p className="text-muted mb-3">
                                    Developed a complete job portal system using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, and <strong>MySQL</strong>. It includes user authentication, job listings, and separate dashboards for job seekers and employers.
                                </p>
                                {/* Optional: add a live link or GitHub link if available */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Projects;