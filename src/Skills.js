import React from 'react';
import './Skills.css';
import { FaTools } from 'react-icons/fa';

function Skills() {
    return (
        <section className="skills-section py-5" id="skills">
            <div className="skills-card" data-aos="fade-up">
                <div className="container text-center">
                    <p className="sub-title">TECHNICAL AND PROFESSIONAL</p>
                    <h2 className="section-title mb-5 d-flex align-items-center justify-content-center gap-2">
                        <FaTools /> My Skills
                    </h2>

                    <div className="row g-4">
                        {/* Technical Skills */}
                        <div className="col-md-6">
                            <h4 className="mb-4">Technical Skills</h4>
                            {[
                                { name: 'HTML, CSS', value: 80 },
                                { name: 'JavaScript', value: 75 },
                                { name: 'React.js & Bootstrap', value: 80 },
                                { name: 'Python', value: 50 },
                                { name: 'MySQL', value: 50 },
                            ].map((skill, idx) => (
                                <div className="skill-bar mb-4" key={idx}>
                                    <div className="d-flex justify-content-between">
                                        <span>{skill.name}</span>
                                        <span>{skill.value}%</span>
                                    </div>
                                    <div className="bar-bg">
                                        <div
                                            className="bar-fill"
                                            style={{ width: `${skill.value}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Professional Skills */}
                        <div className="col-md-6">
                            <h4 className="mb-4">Professional Skills</h4>
                            <div className="row g-4">
                                {[
                                    { name: 'Teamwork & Collaboration', value: 89 },
                                    { name: 'Visual Design', value: 60 },
                                    { name: 'Adaptability', value: 78 },
                                    { name: 'Soft Skills', value: 85 },
                                ].map((skill, idx) => (
                                    <div className="col-6 text-center" key={idx}>
                                        <div className="circular-bar">
                                            <svg>
                                                <circle cx="40" cy="40" r="35" />
                                                <circle
                                                    cx="40"
                                                    cy="40"
                                                    r="35"
                                                    style={{
                                                        strokeDashoffset:
                                                            220 - (220 * skill.value) / 100,
                                                    }}
                                                />
                                            </svg>
                                            <div className="percentage">{skill.value}%</div>
                                        </div>
                                        <p className="mt-2 small fw-medium">{skill.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
