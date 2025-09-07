import React from "react";
import { useState } from "react";
import "./WorkExperience.css";
import experiences from "./data/work_experience.json";

function WorkExperience() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="work" className="experience-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-card-separator">
                            {/* Date label */}
                            <div className="timeline-date">{exp.end}</div>
                
                            {/* Horizontal line */}
                            <div className="timeline-connector"></div>
                        </div>

                        {/* Card */}
                        <div className={`timeline-card ${expandedIndex === index ? "expanded" : ""}`}
                        onClick={() => toggleExpand(index)}>
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <h5>{exp.duration}</h5>
                            {expandedIndex === index && <p>{exp.expandedText}</p>}
                            {expandedIndex === index && <p dangerouslySetInnerHTML={{ __html: exp["skills used"] }} />}
                        </div>
                    </div>
                ))}
                <div className="timeline-card-separator">
                    {/* Date label */}
                    <div className="timeline-date">June 2023</div>
        
                    {/* Horizontal line */}
                    <div className="timeline-connector"></div>
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
