import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { ProjectsGallery } from './components/ProjectsGallery';
import { EngineeringApproach } from './components/EngineeringApproach';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'approach', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <ProjectsGallery />
        <EngineeringApproach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
