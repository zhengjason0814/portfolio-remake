import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';

function App() {
  return (
    <>
      <MouseGlow />
      <Hero />
      <div className="container">
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
