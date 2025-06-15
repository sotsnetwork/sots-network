
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Brain, Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 md:px-6',
        scrolled
          ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-700/50'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/83a24099-2885-4aa2-82c0-9028836b2935.png" 
              alt="SOTS Network Logo" 
              className="h-12 w-auto"
            />
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                SOTS
              </span>
              <span className="text-xl font-medium text-slate-200 ml-1">Network</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group">
              AI Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group">
              Connect
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-4 py-2 border-2 border-slate-600/50 bg-slate-800/30 backdrop-blur-sm text-slate-300 hover:bg-slate-700/40 hover:border-slate-500/60 transition-all group"
              onClick={handleLearnMore}
            >
              <Brain className="mr-2 h-4 w-4" />
              Explore AI
            </Button>
            <Button 
              size="sm" 
              className="rounded-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 transition-all group border-0 text-white font-semibold"
              onClick={scrollToConsultation}
            >
              <Zap className="mr-2 h-4 w-4" />
              Deploy Agent
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              <div className="w-6 flex flex-col items-end space-y-1">
                <span
                  className={cn(
                    "h-0.5 bg-cyan-400 transition-all duration-300",
                    mobileMenuOpen ? "w-6 rotate-45 translate-y-1.5" : "w-6"
                  )}
                ></span>
                <span
                  className={cn(
                    "h-0.5 bg-cyan-400 transition-all duration-300",
                    mobileMenuOpen ? "opacity-0" : "w-4"
                  )}
                ></span>
                <span
                  className={cn(
                    "h-0.5 bg-cyan-400 transition-all duration-300",
                    mobileMenuOpen ? "w-6 -rotate-45 -translate-y-1.5" : "w-6"
                  )}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-xl z-40 pt-20 px-6 transition-all duration-300 ease-in-out transform",
            mobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-6 text-center pt-8">
            <a
              href="#services"
              className="text-lg font-medium py-2 text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Solutions
            </a>
            <a
              href="#contact"
              className="text-lg font-medium py-2 text-slate-300 hover:text-cyan-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </a>
            <div className="flex flex-col space-y-4 pt-6">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-2 border-slate-600/50 bg-slate-800/30 text-slate-300 hover:bg-slate-700/40 hover:border-slate-500/60"
                onClick={handleLearnMore}
              >
                <Brain className="mr-2 h-4 w-4" />
                Explore AI
              </Button>
              <Button 
                size="sm"
                className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 transition-all border-0 text-white font-semibold"
                onClick={scrollToConsultation}
              >
                <Zap className="mr-2 h-4 w-4" />
                Deploy Agent
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
