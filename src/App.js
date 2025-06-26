import './App.css';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mohamed Id Attaleb</h1>
        <p>Développeur Web Full Stack</p>
      </header>
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mohamed Idattaleb. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

