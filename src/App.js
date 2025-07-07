import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="container">
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
      <Footer />
    </div>
  );
}

export default App;
