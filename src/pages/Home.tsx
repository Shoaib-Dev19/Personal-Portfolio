import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Expertise from '../components/Expertise';
import Offer from '../components/Offer';
import TechStack from '../components/TechStack';
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import LinkedInSection from '../components/LinkedInSection';
import HireMe from '../components/HireMe';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <main className="bg-[#fafafa] dark:bg-[#050505] min-h-screen transition-colors duration-500">
      <Hero />
      <About />
      <Expertise />
      <Offer />
      <TechStack />
      <WorkExperience />
      <Projects />
      <LinkedInSection />
      <HireMe />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
