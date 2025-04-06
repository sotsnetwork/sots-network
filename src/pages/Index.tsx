
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  // Smooth scroll to section when URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Services />
        <Testimonials />
        <Portfolio />
        <Consultation />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
