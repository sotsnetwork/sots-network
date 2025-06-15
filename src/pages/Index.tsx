
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Consultation from '@/components/Consultation';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 overflow-hidden">
      {/* Unified AI Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)] pointer-events-none"></div>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60 pointer-events-none"></div>
      <div className="fixed top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float opacity-40 pointer-events-none" style={{ animationDelay: '1s' }}></div>
      <div className="fixed bottom-40 left-20 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-80 pointer-events-none" style={{ animationDelay: '2s' }}></div>
      <div className="fixed bottom-20 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-50 pointer-events-none" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Grid overlay for futuristic feel */}
      <div className="fixed inset-0 opacity-[0.02] bg-[linear-gradient(rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Consultation />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
