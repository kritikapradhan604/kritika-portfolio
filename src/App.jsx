import React, { useState, useEffect } from 'react';
import './index.css';

// Components
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Analytics from './sections/Analytics';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''} style={{ background: darkMode ? '#0d0d1a' : '#f0f4ff', minHeight: '100vh' }}>
      <CustomCursor />
      {loading && <Preloader />}
      {!loading && (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Analytics />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
