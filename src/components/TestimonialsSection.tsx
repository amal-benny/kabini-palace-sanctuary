import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh & Priya Sharma",
      location: "Bangalore",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "J&L Kabini Palace exceeded all our expectations. The perfect blend of luxury and nature made our anniversary unforgettable. The staff's attention to detail and the serene environment created memories we'll treasure forever.",
      experience: "Anniversary Celebration"
    },
    {
      id: 2,
      name: "Michael & Sarah Johnson",
      location: "London, UK",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "As international travelers, we've stayed at many resorts, but Kabini Palace is truly special. The authentic farm-style experience combined with luxury amenities gave us the perfect insight into Karnataka's natural beauty.",
      experience: "International Vacation"
    },
    {
      id: 3,
      name: "Dr. Anitha Reddy",
      location: "Hyderabad",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "The tranquility here is therapeutic. After months of busy hospital schedules, this resort provided the perfect escape. The morning walks by the pond and forest trekking refreshed my soul completely.",
      experience: "Solo Retreat"
    },
    {
      id: 4,
      name: "The Kumar Family",
      location: "Chennai",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "Our children had the time of their lives! The jeep safari was thrilling, and the natural pond was their favorite spot. It's rare to find a place that caters perfectly to both adults and children.",
      experience: "Family Vacation"
    },
    {
      id: 5,
      name: "James & Emma Wilson",
      location: "Melbourne, Australia",
      rating: 5,
      image: "/api/placeholder/80/80",
      text: "We came for our honeymoon and were blown away by the romantic ambiance. The Empress Suite with its jacuzzi overlooking the forest was magical. The sunset dinners by the pond were absolutely perfect.",
      experience: "Honeymoon"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-10 w-64 h-64 rounded-full bg-forest-medium"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-earth-medium"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sunset text-lg font-semibold mb-4"
          >
            GUEST EXPERIENCES
          </motion.h3>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-forest-deep mb-6"
          >
            Stories from Our Guests
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
          >
            Discover what makes J&L Kabini Palace special through the eyes of our cherished guests
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Main Testimonial Card */}
            <Card className="bg-white shadow-luxury relative overflow-hidden">
              <CardContent className="p-8 md:p-12">
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-6 left-6 opacity-10"
                >
                  <Quote className="w-16 h-16 text-forest-deep" />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating Stars */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center space-x-1 mb-6"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-sunset text-sunset" />
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.blockquote
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-lg md:text-xl text-foreground/80 leading-relaxed italic mb-8"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.blockquote>

                  {/* Guest Info */}
                  <motion.div
                    key={`info-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-forest flex items-center justify-center">
                      <span className="text-cream font-serif font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-forest-deep text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-foreground/60 text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="text-sunset text-sm font-medium">
                        {testimonials[currentIndex].experience}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-forest-deep/20 hover:bg-forest-deep hover:text-cream shadow-float"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-forest-deep/20 hover:bg-forest-deep hover:text-cream shadow-float"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center space-x-3 mt-8"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-forest-deep scale-125'
                    : 'bg-forest-deep/30 hover:bg-forest-deep/60'
                }`}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-forest-deep">500+</div>
            <div className="text-sm text-foreground/60 font-medium">Happy Guests</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-forest-deep">4.9</div>
            <div className="text-sm text-foreground/60 font-medium">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-forest-deep">95%</div>
            <div className="text-sm text-foreground/60 font-medium">Return Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;