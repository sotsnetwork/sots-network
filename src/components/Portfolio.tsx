
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  delay?: number;
}

const PortfolioItem = ({ title, category, image, delay = 0 }: PortfolioItemProps) => {
  return (
    <ScrollReveal delay={delay} animation="zoom-in" className="h-full">
      <div className="group relative h-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="text-xs font-medium text-white/70 mb-1">{category}</div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <Button variant="outline" size="sm" className="rounded-full bg-white/10 text-white border-white/20 hover:bg-white/20">
              View Case Study
            </Button>
          </div>
        </div>
        <div className="bg-gray-200 h-full">
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 ease-in-out group-hover:scale-105 aspect-[4/3]"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const placeholderImages = [
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
  "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
  "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
  "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
  "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=640",
];

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "AI-Powered CRM Dashboard",
      category: "Web Application",
      image: placeholderImages[0],
    },
    {
      title: "Healthcare Workflow Automation",
      category: "AI Solution",
      image: placeholderImages[1],
    },
    {
      title: "E-commerce Mobile App",
      category: "Native App",
      image: placeholderImages[2],
    },
    {
      title: "Smart Home Control System",
      category: "IoT Solution",
      image: placeholderImages[3],
    },
    {
      title: "Financial Analytics Platform",
      category: "FinTech",
      image: placeholderImages[4],
    },
    {
      title: "Logistics Tracking Dashboard",
      category: "Web Application",
      image: placeholderImages[5],
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 max-w-xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/80 px-3 py-1 rounded-full backdrop-blur-md mb-3">
              <span className="text-xs font-medium">Our Portfolio</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Our Recent
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-2">
                Case Studies
              </span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Explore our portfolio of successful projects that showcase our expertise in creating innovative digital solutions.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              image={item.image}
              delay={Math.min(index, 5)}
            />
          ))}
        </div>
        
        <ScrollReveal className="mt-10 text-center">
          <Button 
            size="sm" 
            className="rounded-full px-4 shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
            onClick={() => window.open('https://linkedin.com/in/chidera-nwachukwu-32647a216', '_blank')}
          >
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Portfolio;
