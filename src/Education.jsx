import "./Education.css";
import educationData from "./data/education_details.json";

function Education() {
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
                {educationData.map((edu) => (
                    <div className="education-item" key={edu.id}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-period">{edu.period}</div>
                        <div className="timeline-card">
                            <h3>{edu.degree}</h3>
                            <p>{edu.school}</p>
                            <small>{edu.details}</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Education;
