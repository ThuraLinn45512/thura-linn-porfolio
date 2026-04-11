'use client';

import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { SkillsSection } from '../components/SkillsSection';
import { FeaturedProject } from '../components/FeaturedProject';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="min-h-screen py-20">
          <About />
        </section>

        <section id="projects">
          <FeaturedProject />
        </section>
        
        <section id="skills" className="min-h-screen py-20">
          <SkillsSection />
        </section>
        
        <section id="experience" className="min-h-screen py-20">
          <Experience />
        </section>
        
        <section id="education" className="py-20">
          <Education />
        </section>
        
        <section id="contact" className="min-h-screen py-20">
          <Contact />
        </section>
      </main>
      
      <footer className="border-t border-gray-800 py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Thura Linn. All rights reserved.</p>
      </footer>
    </div>
  );
}
