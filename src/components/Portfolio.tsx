import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import CustomCursor from './CustomCursor';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Achievements from './Achievements';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground font-inter">
        <CustomCursor />
        <Navigation />
        
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="achievements">
            <Achievements />
          </section>
          
          <section id="education">
            <Education />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;