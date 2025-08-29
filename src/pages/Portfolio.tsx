import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Sample data - replace with your actual information
const portfolioData = {
  name: "John Doe",
  tagline: "Full-Stack Developer & Creative Technologist",
  subtitle: "I build digital experiences that matter, combining cutting-edge technology with thoughtful design to create solutions that inspire and engage.",
  
  about: {
    bio: "I'm a passionate full-stack developer with over 5 years of experience crafting digital solutions. I specialize in modern web technologies, 3D graphics, and creating immersive user experiences. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and building products that not only work flawlessly but also delight users with their design and functionality.",
    skills: [
      "React", "TypeScript", "Node.js", "Three.js", "WebGL", "Python", 
      "AWS", "Docker", "MongoDB", "PostgreSQL", "GraphQL", "Tailwind CSS"
    ],
    experience: "5+ years building scalable web applications and interactive 3D experiences for clients ranging from startups to Fortune 500 companies."
  },
  
  projects: [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, secure payments, and an intuitive admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: "2",
      title: "3D Product Viewer",
      description: "Interactive 3D product visualization tool using Three.js and WebGL. Allows customers to view products from all angles with realistic lighting and materials.",
      technologies: ["Three.js", "WebGL", "React", "TypeScript"],
      category: "3d",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: "3",
      title: "AI Chat Application",
      description: "Real-time chat application powered by AI, featuring natural language processing, sentiment analysis, and intelligent response generation.",
      technologies: ["Python", "TensorFlow", "React", "WebSocket", "Redis"],
      category: "ai",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my work and skills. Built with modern web technologies and featuring smooth animations and 3D elements.",
      technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: "5",
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex data sets with real-time updates, custom charts, and responsive design for all devices.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      category: "data",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: "6",
      title: "Mobile Game Engine",
      description: "Cross-platform mobile game engine built with React Native and Three.js. Supports both 2D and 3D games with physics and audio.",
      technologies: ["React Native", "Three.js", "TypeScript", "Redux"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ],
  
  contact: {
    email: "john.doe@example.com",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/johndoe",
        icon: "🐙"
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/johndoe",
        icon: "💼"
      },
      {
        name: "Twitter",
        url: "https://twitter.com/johndoe",
        icon: "🐦"
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/johndoe",
        icon: "🏀"
      }
    ]
  }
};

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const navigationSections = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navigation sections={navigationSections} />
      
      <main>
        <Hero 
          name={portfolioData.name}
          tagline={portfolioData.tagline}
          subtitle={portfolioData.subtitle}
        />
        
        <About 
          name={portfolioData.name}
          bio={portfolioData.about.bio}
          skills={portfolioData.about.skills}
          experience={portfolioData.about.experience}
        />
        
        <Projects projects={portfolioData.projects} />
        
        <Contact 
          email={portfolioData.contact.email}
          socialLinks={portfolioData.contact.socialLinks}
        />
      </main>
      
      <Footer 
        name={portfolioData.name}
        socialLinks={portfolioData.contact.socialLinks}
      />
    </div>
  );
}
