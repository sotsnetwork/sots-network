
import React from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimatedGradient from './AnimatedGradient';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('contact');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // List of automation software platforms with logos
  const automationPlatforms = [
    { name: "Zapier", logo: "/lovable-uploads/zapier-logo.png" },
    { name: "Slack", logo: "/lovable-uploads/slack-logo.png" },
    { name: "HubSpot", logo: "/lovable-uploads/hubspot-logo.png" },
    { name: "Microsoft Power Automate", logo: "/lovable-uploads/power-automate-logo.png" },
    { name: "n8n", logo: "/lovable-uploads/n8n-logo.png" },
    { name: "Make.com", logo: "/lovable-uploads/make-logo.png" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      <AnimatedGradient>
        {/* AnimatedGradient content */}
      </AnimatedGradient>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent/80 px-3 py-1.5 rounded-full backdrop-blur-md animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-slow"></span>
              <span className="text-xs font-medium">Innovative AI-Powered Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight animate-fade-in animate-delay-1">
              <span className="block">Innovative</span>
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md animate-fade-in animate-delay-2">
              Simple workflows and seamless automation to transform your business processes.
            </p>
            
            <div className="flex items-center space-x-4 pt-4 animate-fade-in animate-delay-3">
              <Button 
                size="lg" 
                className="rounded-full px-6 shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
                onClick={scrollToConsultation}
              >
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-6 border-primary/20 hover:border-primary/40 hover:bg-accent/50"
                onClick={scrollToConsultation}
              >
                <span>Consult with Us</span>
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-8 animate-fade-in animate-delay-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">100+</span>
                <span className="text-xs text-muted-foreground">Projects Delivered</span>
              </div>
              
              <div className="w-px h-10 bg-border"></div>
              
              <div className="flex flex-col">
                <span className="text-3xl font-bold">50+</span>
                <span className="text-xs text-muted-foreground">Happy Clients</span>
              </div>
            </div>

            {/* Automation Software Platforms Logos */}
            <div className="pt-6 animate-fade-in animate-delay-5">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Integrated Automation Platforms:</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
                {automationPlatforms.map((platform, index) => (
                  <div key={index} className="flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm flex items-center justify-center p-2 hover:scale-110 transition-transform">
                      <img 
                        src={platform.logo} 
                        alt={`${platform.name} logo`} 
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = platform.name.substring(0, 2);
                        }}
                      />
                    </div>
                    <span className="text-xs mt-2 text-muted-foreground">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 relative">
            {/* Workflow Diagram Image - Enlarged */}
            <div className="relative w-full mx-auto animate-fade-in animate-delay-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
              
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-lg p-6 animate-float">
                <img 
                  src="/lovable-uploads/f91990a5-3425-4805-a0df-bf85108957e0.png" 
                  alt="Workflow Automation Diagram" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-3xl pointer-events-none"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-xs font-semibold text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full inline-block">
                    Automated Workflow Processes
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
