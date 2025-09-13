import Navbar from "./Navbar";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
import Education from "./Education";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WorkExperience />
      <Education />

      <section id="learning-journey" style={{ height: "100vh", padding: "4rem 1.5rem" }}>
        <h1>Learning Journey</h1>
      </section>

      <Contact />
    </>
  );
}

export default App;
