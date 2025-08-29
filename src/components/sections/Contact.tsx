import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

interface ContactProps {
  email: string;
  newsletter: string;
  socialLinks: SocialLink[];
}

export default function Contact({ email, newsletter, socialLinks }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API)
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', newsletterEmail);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Aesthetic spotlights */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-white/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-88 h-88 bg-white/7 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute top-32 left-1/2 w-3 h-3 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-24 left-24 w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-3 h-3 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Curved accent lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M0,30 Q25,20 50,30 T100,30" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
            <path 
              d="M0,70 Q25,60 50,70 T100,70" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
            <path 
              d="M0,50 Q25,40 50,50 T100,50" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="0.3" 
              fill="none"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent font-['Horizon']">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-['Horizon']">
            Have a project in mind or just want to say hello? Reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {/* Contact Form */}
          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white font-['Horizon']">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2 font-['Horizon']">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 font-['Horizon']"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2 font-['Horizon']">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 font-['Horizon']"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2 font-['Horizon']">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 font-['Horizon']"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2 font-['Horizon']">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 font-['Horizon']"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-['Horizon']"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <div className="space-y-12">
            {/* Contact Information */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50">
              <h4 className="text-2xl font-bold mb-6 text-white font-['Horizon']">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18.003 9.882L22 7.884V16a2 2 0 01-2 2H4a2 2 0 01-2-2V7.884l3.997 1.998 4.003 2.002 4.003-2.002z"/>
                    </svg>
                  </div>
                  <span className="text-slate-300 text-lg font-['Horizon']">{email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <span className="text-slate-300 text-lg font-['Horizon']">Available for Freelance</span>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-slate-700/50">
              <h4 className="text-2xl font-bold mb-6 text-white font-['Horizon']">Stay Updated</h4>
              <p className="text-slate-300 mb-6 font-['Horizon']">
                Subscribe to our newsletter for the latest updates on Web3, blockchain, and ethical technology.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <label htmlFor="newsletter-email" className="block text-slate-300 text-sm font-medium mb-2 font-['Horizon']">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="newsletter-email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 font-['Horizon']"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 font-['Horizon']"
                >
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
