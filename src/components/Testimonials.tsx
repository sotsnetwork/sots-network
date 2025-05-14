
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';
import { cn } from '@/lib/utils';
import CountUp from './CountUp';

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  rating: number;
  active: boolean;
}

const Testimonial = ({ content, author, position, rating, active }: TestimonialProps) => {
  return (
    <div
      className={cn(
        "bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md transition-all duration-500 ease-in-out",
        active ? "opacity-100 scale-100" : "opacity-40 scale-95"
      )}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4 mr-1",
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            )}
          />
        ))}
      </div>
      <p className="text-foreground mb-6 text-lg leading-relaxed">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-semibold">
          {author.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold">{author}</h4>
          <p className="text-muted-foreground text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const totalTestimonials = 3;

  const testimonials = [
    {
      content: "SOTS Network completely transformed our workflow automation. Their AI-driven solutions increased our efficiency by 40% in just two months. I couldn't be happier with the results!",
      author: "Sarah Johnson",
      position: "Content Creator",
      rating: 5,
    },
    {
      content: "The web application SOTS Network designed for us has received incredible feedback from our users. It's intuitive, beautiful, and performs flawlessly across all devices.",
      author: "Michael Chen",
      position: "Product Manager",
      rating: 5,
    },
    {
      content: "Working with SOTS Network on our MVP was a game-changer. They helped us launch in record time while maintaining excellent quality, allowing us to secure our next round of funding.",
      author: "Jessica Chisom",
      position: "Online Vendor and Creator",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-b from-accent/50 to-background/50 relative overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-accent/80 px-3 py-1.5 rounded-full backdrop-blur-md mb-4">
              <span className="text-xs font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-2">
                Say About Us
              </span>
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with SOTS Network.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative">
            <div className="grid grid-cols-1 gap-6 transition-all duration-300">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  content={testimonial.content}
                  author={testimonial.author}
                  position={testimonial.position}
                  rating={testimonial.rating}
                  active={index === activeIndex}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -left-4 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/90 shadow-md h-10 w-10"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>

            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/90 shadow-md h-10 w-10"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalTestimonials }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === activeIndex
                    ? "bg-primary"
                    : "bg-primary/30"
                )}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-20">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Follow Our Journey</h3>
                <p className="text-muted-foreground">
                  Stay updated with our latest projects, insights, and innovations by following us on social media.
                </p>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="rounded-full flex items-center space-x-2"
                    onClick={() => window.open('https://www.instagram.com/sotsnetwork', '_blank', 'noopener,noreferrer')}
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="rounded-full flex items-center space-x-2"
                    onClick={() => window.open('https://www.youtube.com/@sotsnetwork', '_blank', 'noopener,noreferrer')}
                  >
                    <Youtube className="h-4 w-4" />
                    <span>YouTube</span>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <CountUp end={278} className="text-3xl font-bold" />
                    <span className="text-xs text-muted-foreground">Projects Delivered</span>
                  </div>
                  <div className="flex flex-col">
                    <CountUp end={113} className="text-3xl font-bold" />
                    <span className="text-xs text-muted-foreground">Happy Clients</span>
                  </div>
                  <div className="flex flex-col">
                    <CountUp end={5} className="text-3xl font-bold" />
                    <span className="text-xs text-muted-foreground">Years Experience</span>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-[92%] rounded-full"></div>
                </div>
                <p className="text-sm text-muted-foreground">92% of our clients report increased efficiency after implementing our solutions</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
