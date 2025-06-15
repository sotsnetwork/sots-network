
import React from 'react';
import { ArrowRight, Brain, Code, Layout, Smartphone, Zap, Users, Bot, Network, Cpu } from 'lucide-react';
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
      <div className="relative h-full p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-blue-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:translate-y-[-8px] group overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Icon container */}
        <div className={cn("relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg", gradient)}>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent"></div>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-100 transition-colors">{title}</h3>
        <p className="text-blue-200/80 text-sm flex-grow leading-relaxed mb-4">{description}</p>
        
        <div className="flex items-center text-cyan-400 font-medium text-sm group cursor-pointer hover:text-cyan-300 transition-colors">
          <span>Explore Solution</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
        
        {/* Hover effect lines */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </ScrollReveal>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Bot className="text-white h-6 w-6 relative z-10" />,
      title: "Autonomous AI Agents",
      description: "Deploy intelligent agents that operate independently, make decisions, and execute complex workflows without human intervention.",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    },
    {
      icon: <Brain className="text-white h-6 w-6 relative z-10" />,
      title: "Neural Workflow Automation",
      description: "Transform business processes with self-learning systems that adapt and optimize operations in real-time.",
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
    },
    {
      icon: <Network className="text-white h-6 w-6 relative z-10" />,
      title: "Multi-Agent Orchestration",
      description: "Coordinate teams of specialized AI agents working together to solve complex, multi-faceted business challenges.",
      gradient: "bg-gradient-to-br from-indigo-600 to-purple-600",
    },
    {
      icon: <Cpu className="text-white h-6 w-6 relative z-10" />,
      title: "Intelligent Process Mining",
      description: "Analyze and optimize business processes using advanced AI to identify bottlenecks and improvement opportunities.",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600",
    },
    {
      icon: <Layout className="text-white h-6 w-6 relative z-10" />,
      title: "Agentic Web Platforms",
      description: "Build responsive web applications powered by AI agents that provide personalized, intelligent user experiences.",
      gradient: "bg-gradient-to-br from-pink-600 to-rose-600",
    },
    {
      icon: <Smartphone className="text-white h-6 w-6 relative z-10" />,
      title: "Smart Mobile Solutions",
      description: "Native mobile applications with embedded AI capabilities for on-the-go intelligent decision making.",
      gradient: "bg-gradient-to-br from-rose-600 to-orange-600",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-cyan-400/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-100">AI-Powered Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Next-Generation
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Agentic Intelligence
              </span>
            </h2>
            <p className="text-lg text-blue-200/80 leading-relaxed">
              Harness the power of autonomous AI agents that think, learn, and act. 
              Our cutting-edge solutions transform how businesses operate in the digital age.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        
        <ScrollReveal className="mt-16 text-center">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 transition-all group border-0 text-white font-semibold"
          >
            <Brain className="mr-2 h-5 w-5" />
            <span>Explore All Solutions</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
