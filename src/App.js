import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
