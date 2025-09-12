import "./Contact.css";
import contacts from "./data/contact_details.json";

function Contact() {

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-grid">
                {contacts.map((c) => (
                    <a href={c.link} key={c.id} target="_blank" rel="noopener noreferrer" className="contact-card">
                        <span className="contact-icon">{c.icon}</span>
                        <div className="contact-info">
                            <h3>{c.name}</h3>
                            <p>{c.value}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Contact;
