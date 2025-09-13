import { useState, useEffect } from "react";
import "./Navbar.css"; // 👈 import CSS

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        /*
            This function gets all sections and iterates them
            to find the currently active section. Then it uses 
            the setActiveSection method to the activeSession field.
        */
        function handleScroll() {
            const sections = document.querySelectorAll("section");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 60;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            setActiveSection(current);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = ["home", "work", "education", "projects", "contact"];

    return (
        <nav className="navbar">
            {/* 👈 Left side logo/name */}
            <div className="navbar-logo">
                <a className='navbar-text' href='#home'>Ashkin Fino R</a>
            </div>

            {/* 👈 Right side menu */}
            <div className="navbar-links">
                {menuItems.map((id) => {
                    return (
                        <a
                        key={id}
                        href={`#${id.replace(" ", "-")}`}
                        className={`navbar-link ${activeSection === id.replace(" ", "-") ? "active" : ""}`}
                        >
                            {capitalizeWords(id)}
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}

export default Navbar;
