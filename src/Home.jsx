import React from "react";
import "./Home.css";
import profilePic from "./assets/Ashkin Fino_Latest.jpeg";

function Home() {
    return (
        <section id="home" className="home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Hello, I'm <span className="highlight">Ashkin Fino R</span></h1>
                    <h3>Full-Stack Software Developer | AWS & Cloud Integration | SQL & Postgres</h3>
                    <p className="intro">
                        I am a Software Developer with experience in migration and integration projects for Electronic Lab Notebooks (ELNs) such as Benchling ELN, Labguru, and E-Notebook and LIMS systems such as SAPIO. 
                        I have experience in collaborating with offshore teams using GitHub, BitBucket and Jira. I possess good communication skills and routinely interact with clients and off shore teams. 
                        My work involves data extraction and ingestion via APIs and database queries, transforming and parsing complex datasets into modern, scalable platforms, building and deploying integrations and data pipelines using cloud services. 
                    </p>
                    <span>
                        <a href="#contact" className="contact-btn">Contact Me</a>
                        <a href="/resume.pdf" className="resume-btn" download="Ashkin_Fino_Resume.pdf">Download Resume</a>
                    </span>
                </div>
                <div className="home-image">
                    <img src={profilePic} alt="Profile" />
                </div>
            </div>
        </section>
    );
}

export default Home;
