import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <section id="work" style={{ height: "100vh", padding: "4rem 1.5rem", backgroundColor: "#f0f0f0", color: "#333" }}>
        <h1>Work Experience</h1>
      </section>

      <section id="learning-journey" style={{ height: "100vh", padding: "4rem 1.5rem" }}>
        <h1>Learning Journey</h1>
      </section>

      <section id="education" style={{ height: "100vh", padding: "4rem 1.5rem", backgroundColor: "#f0f0f0", color: "#333" }}>
        <h1>Education</h1>
      </section>

      <section id="contact" style={{ height: "100vh", padding: "4rem 1.5rem" }}>
        <h1>Contact Me</h1>
      </section>
    </>
  );
}

export default App;
