
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, ArrowRight, Check, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Consultation = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // First, save the submission to the database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            message: formData.message || null
          }
        ]);
        
      if (dbError) throw dbError;
      
      // Then, send the email notification
      const response = await fetch('https://chnrurahkyiuolrsxlgr.supabase.co/functions/v1/send-consultation-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.auth.getSession()}`
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send notification');
      }
      
      // Show success toast
      toast({
        title: "Consultation Request Submitted",
        description: "We'll get back to you soon. You can also schedule directly via Calendly.",
        variant: "default",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Redirect to Calendly after successful submission
      window.open('https://calendly.com/sotsnetwork/30min', '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error submitting consultation request:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or schedule directly via Calendly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-background to-accent/30">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb')] bg-cover bg-center opacity-[0.03]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal className="lg:col-span-3">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-accent/80 px-3 py-1.5 rounded-full backdrop-blur-md">
                  <span className="text-xs font-medium">Book a Consultation</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Ready to transform your business with
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-1">
                    cutting-edge technology?
                  </span>
                </h2>
                
                <p className="text-muted-foreground max-w-xl">
                  Schedule a free 30-minute consultation with our experts to discuss your project needs, 
                  challenges, and how our solutions can help you achieve your business goals.
                </p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Flexible Scheduling</p>
                      <p className="text-xs text-muted-foreground">Choose a time that works for you</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">30-Minute Session</p>
                      <p className="text-xs text-muted-foreground">Focused and valuable discussion</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 space-y-4">
                  <h3 className="text-lg font-semibold">What You'll Get:</h3>
                  
                  <ul className="space-y-3">
                    {[
                      "Expert assessment of your current systems and processes",
                      "Tailored recommendations for technology solutions",
                      "Clear roadmap for implementation and integration",
                      "Transparent pricing and timeline information",
                      "No obligation to proceed - it's completely free"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 mr-3">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal className="lg:col-span-2" animation="slide-up">
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-6">Book Your Free Consultation</h3>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                    <Input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="ACME Inc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">What can we help you with?</label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or challenges..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full rounded-lg h-12 shadow-md hover:shadow-lg transition-all bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Schedule Consultation</span>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                  
                  <div className="text-center mt-4">
                    <p className="text-sm text-muted-foreground">Or schedule directly via</p>
                    <a 
                      href="https://calendly.com/sotsnetwork/30min" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-primary hover:underline font-medium text-sm mt-1"
                    >
                      Calendly
                    </a>
                  </div>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to our 
                    <a href="#" className="text-primary hover:underline mx-1">Privacy Policy</a>
                    and 
                    <a href="#" className="text-primary hover:underline ml-1">Terms of Service</a>.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
