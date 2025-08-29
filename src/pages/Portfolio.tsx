import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Sample data - replace with your actual information
const portfolioData = {
  name: "HAQQ",
  tagline: "Ethical Web3 for All",
  subtitle: "Blockchain that meets Shariah values. For builders and businesses, with end consumers in mind.",
  
  about: {
    bio: "I'm a passionate full-stack developer and blockchain enthusiast with over 5 years of experience crafting digital solutions. I specialize in modern web technologies, 3D graphics, and creating immersive user experiences that align with ethical principles. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code and building products that not only work flawlessly but also delight users with their design and functionality.",
    skills: [
      "React", "TypeScript", "Node.js", "Three.js", "WebGL", "Solidity", 
      "Ethereum", "Polygon", "AWS", "Docker", "MongoDB", "PostgreSQL", "GraphQL", "Tailwind CSS"
    ],
    experience: "5+ years building scalable web applications, interactive 3D experiences, and blockchain solutions for clients ranging from startups to Fortune 500 companies."
  },
  
  projects: [
    {
      id: "1",
      title: "HAQQ Network Platform",
      description: "A comprehensive Web3 platform built with React, Solidity, and Three.js. Features include DeFi tools, NFT marketplace, and interactive 3D visualizations.",
      technologies: ["React", "Solidity", "Three.js", "Ethereum", "Web3.js", "Tailwind CSS"],
      category: "blockchain",
      liveUrl: "https://haqq.network",
      githubUrl: "https://github.com/haqq-network"
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
    email: "chidera@sotsnetwork.xyz",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/haqq-network",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        )
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/company/haqq-network",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        )
      },
      {
        name: "Twitter",
        url: "https://twitter.com/haqqnetwork",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        )
      },
      {
        name: "Discord",
        url: "https://discord.gg/haqq",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
          </svg>
        )
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
    <div className="min-h-screen">
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
