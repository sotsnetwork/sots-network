
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

  // Functions to match the behavior of the Hero buttons
  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // New function for the Learn More button, matching functionality in Hero
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 px-3 md:px-6',
        scrolled
          ? 'bg-white/70 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/913029d6-168e-4030-ac03-3862815dff36.png" 
              alt="SOTS Network Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-lg font-medium">Network</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-xs font-medium hover:text-primary transition-colors">
              Services
            </a>
            <a href="#testimonials" className="text-xs font-medium hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#portfolio" className="text-xs font-medium hover:text-primary transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-xs font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3 py-1 h-auto text-xs border-primary text-primary hover:bg-primary hover:text-white"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
            <Button 
              size="sm" 
              className="rounded-full px-3 py-1 h-auto text-xs shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              onClick={scrollToConsultation}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-md focus:outline-none"
            >
              <div className="w-5 flex flex-col items-end space-y-1">
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300",
                    mobileMenuOpen ? "w-5 rotate-45 translate-y-1.5" : "w-5"
                  )}
                ></span>
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300",
                    mobileMenuOpen ? "opacity-0" : "w-3.5"
                  )}
                ></span>
                <span
                  className={cn(
                    "h-0.5 bg-foreground transition-all duration-300",
                    mobileMenuOpen ? "w-5 -rotate-45 -translate-y-1.5" : "w-5"
                  )}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-white z-40 pt-14 px-4 transition-all duration-300 ease-in-out transform",
            mobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          )}
        >
          <nav className="flex flex-col space-y-4 text-center pt-6">
            <a
              href="#services"
              className="text-base font-medium py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-base font-medium py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#portfolio"
              className="text-base font-medium py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-base font-medium py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col space-y-3 pt-3">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
              <Button 
                size="sm"
                className="rounded-full shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                onClick={scrollToConsultation}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
