
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedGradient from './AnimatedGradient';
import { ArrowRight } from 'lucide-react';
import CountUp from './CountUp';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <AnimatedGradient>
        {/* AnimatedGradient content */}
      </AnimatedGradient>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
            <div className="inline-flex items-center space-x-2 bg-accent/80 dark:bg-accent/30 px-3 py-1.5 rounded-full backdrop-blur-md animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
              <span className="text-xs font-medium">Innovative AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight tracking-tight animate-fade-in animate-delay-1">
              <span className="block">Innovative</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-md animate-fade-in animate-delay-2">
              Simple workflows and seamless automation to transform your business processes.
            </p>
            
            <div className="flex items-center space-x-4 pt-2 animate-fade-in animate-delay-3">
              <Button 
                size="default" 
                className="rounded-full px-4 shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
                onClick={scrollToConsultation}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="default" 
                className="rounded-full px-4 border-primary/20 hover:border-primary/40 hover:bg-accent/50"
                onClick={handleLearnMore}
              >
                <span>Learn More</span>
              </Button>
            </div>
            
            <div className="flex flex-col space-y-4 pt-4 animate-fade-in animate-delay-4">
              <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                  <CountUp end={278} className="text-2xl font-bold" />
                  <span className="text-xs text-muted-foreground">Projects Delivered</span>
                </div>
                
                <div className="w-px h-8 bg-border"></div>
                
                <div className="flex flex-col">
                  <CountUp end={113} className="text-2xl font-bold" />
                  <span className="text-xs text-muted-foreground">Happy Clients</span>
                </div>
              </div>
              
              {/* Contra Hire Button */}
              <div className="pt-2">
                <div 
                  className="contra-hire-me-button" 
                  data-analyticsUserId="7c4472bb-5cc9-4283-8261-69263f8cdde0" 
                  data-theme="dark" 
                  data-username="sotsnetwork"
                ></div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            {/* Mockup Image */}
            <div className="relative w-full mx-auto animate-fade-in animate-delay-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl animate-pulse-slow"></div>
              
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/20 shadow-lg p-4 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640" 
                  alt="Application Mockup" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-gray-900/30 to-transparent rounded-2xl pointer-events-none"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                    Innovative Solutions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
