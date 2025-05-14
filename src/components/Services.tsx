
import React from 'react';
import { ArrowRight, Brain, Code, Layout, Smartphone, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

const ServiceCard = ({ icon, title, description, gradient, delay = 0 }: ServiceCardProps) => {
  return (
    <ScrollReveal delay={delay} animation="fade-in" className="h-full">
      <div className="glass-card h-full p-4 flex flex-col hover:translate-y-[-5px] transform transition-all duration-300">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", gradient)}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-xs flex-grow">{description}</p>
        <div className="mt-4 flex items-center text-primary font-medium text-xs group cursor-pointer">
          <span>Learn more</span>
          <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </ScrollReveal>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Brain className="text-white h-4 w-4" />,
      title: "AI-driven Workflow Automation",
      description: "Streamline your business processes with intelligent automation powered by cutting-edge AI technology.",
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      icon: <Layout className="text-white h-4 w-4" />,
      title: "Web Application Design",
      description: "Create beautiful, responsive web applications with intuitive user interfaces and seamless experiences.",
      gradient: "bg-gradient-to-br from-indigo-600 to-violet-600",
    },
    {
      icon: <Smartphone className="text-white h-4 w-4" />,
      title: "Native App Development",
      description: "Build powerful, native mobile applications that deliver exceptional performance and user satisfaction.",
      gradient: "bg-gradient-to-br from-violet-600 to-purple-600",
    },
    {
      icon: <Zap className="text-white h-4 w-4" />,
      title: "MVP Creation",
      description: "Rapidly develop and launch minimum viable products to test your ideas and gain market validation.",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      icon: <Users className="text-white h-4 w-4" />,
      title: "Consultancy Services",
      description: "Get expert advice and guidance on technology strategy, digital transformation, and innovation.",
      gradient: "bg-gradient-to-br from-pink-600 to-rose-600",
    },
    {
      icon: <Code className="text-white h-4 w-4" />,
      title: "Custom Software Development",
      description: "Develop tailor-made software solutions designed specifically to address your unique business challenges.",
      gradient: "bg-gradient-to-br from-rose-600 to-red-600",
    },
  ];

  return (
    <section id="services" className="py-0 relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-4">
        <ScrollReveal>
          <div className="text-center mb-8 max-w-xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/80 px-2 py-1 rounded-full backdrop-blur-md mb-3">
              <span className="text-xs font-medium">Our Services</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Transforming Ideas into 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-2">
                Digital Reality
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              We offer a comprehensive suite of services designed to help businesses innovate, 
              automate, and excel in today's digital landscape.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              gradient={service.gradient}
              delay={Math.min(index, 5)}
            />
          ))}
        </div>
        
        <ScrollReveal className="mt-8 text-center">
          <Button size="sm" className="rounded-full px-4 shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group">
            <span>View All Services</span>
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
