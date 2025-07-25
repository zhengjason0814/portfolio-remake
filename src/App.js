import "./App.css";
import Hero from "./components/PageComponents/Hero";
import Header from "./components/Header";
import AboutMe from "./components/PageComponents/AboutMe";
import Experience from "./components/PageComponents/Experience";
import Projects from "./components/PageComponents/Projects";
import Contact from "./components/PageComponents/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Hero />
        <Header />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
