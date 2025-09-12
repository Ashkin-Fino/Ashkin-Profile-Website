import Navbar from "./Navbar";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WorkExperience />

      <section id="learning-journey" style={{ height: "100vh", padding: "4rem 1.5rem" }}>
        <h1>Learning Journey</h1>
      </section>

      <section id="education" style={{ height: "100vh", padding: "4rem 1.5rem", backgroundColor: "#f0f0f0", color: "#333" }}>
        <h1>Education</h1>
      </section>

      <Contact />
    </>
  );
}

export default App;
