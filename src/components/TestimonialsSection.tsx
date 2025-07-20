import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Quote, Star, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from './ui/button';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
    setDirection(1);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" ref={containerRef} className="py-24 bg-gradient-to-br from-cream/95 via-earth-light/90 to-cream/95 relative overflow-hidden">
      {/* Nature-inspired Background with Glassmorphism */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMyIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(139,197,63,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,183,77,0.12)_0%,transparent_70%)]" />
        
        {/* Floating Organic Shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-forest-medium/15 to-transparent backdrop-blur-sm border border-forest-medium/25"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -15, 15, 0],
            scale: [1.1, 1, 1.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-24 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-sunset/15 to-transparent backdrop-blur-sm border border-sunset/25"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-river/20"
        />
        
        {/* Subtle Particle Effects */}
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[30%] left-[25%] w-2 h-2 rounded-full bg-sunset/40"
        />
        <motion.div
          animate={{ 
            y: [0, -80, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[60%] right-[30%] w-1.5 h-1.5 rounded-full bg-forest-medium/40"
        />
      </motion.div>

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
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Main Testimonial Card */}
            <div className="relative h-[450px] md:h-[400px] perspective-1000">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      nextTestimonial();
                    } else if (swipe > swipeConfidenceThreshold) {
                      prevTestimonial();
                    }
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <Card className="h-full bg-white/95 backdrop-blur-3xl shadow-2xl relative overflow-hidden border border-white/40 hover:shadow-3xl hover:bg-white/98 transition-all duration-700 hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-sunset/8" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-forest-medium via-sunset to-river opacity-60" />
                    <CardContent className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
                      {/* Enhanced Quote Icon */}
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="absolute top-6 left-6 opacity-10"
                      >
                        <div className="relative">
                          <Quote className="w-24 h-24 text-forest-deep" />
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-br from-sunset/20 to-transparent rounded-full blur-xl"
                          />
                        </div>
                      </motion.div>

                      <div>
                        {/* Rating Stars */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4, type: "spring" }}
                          className="flex items-center space-x-1 mb-6 relative z-20"
                        >
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                              whileHover={{ scale: 1.2, rotate: 15 }}
                            >
                              <Star className="w-6 h-6 fill-sunset text-sunset drop-shadow-sm" />
                            </motion.div>
                          ))}
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="ml-3 flex items-center space-x-1"
                          >
                            <Heart className="w-4 h-4 text-sunset fill-sunset" />
                            <span className="text-sm text-forest-deep font-medium">Verified Guest</span>
                          </motion.div>
                        </motion.div>

                        {/* Testimonial Text */}
                        <motion.blockquote
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-lg md:text-xl text-forest-deep/90 leading-relaxed italic mb-8 font-medium relative z-20"
                        >
                          "{testimonials[currentIndex].text}"
                        </motion.blockquote>
                      </div>

                      {/* Guest Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center space-x-4 relative z-20"
                      >
                        <motion.div 
                          className="w-18 h-18 rounded-2xl bg-gradient-to-br from-forest-deep via-forest-medium to-forest-deep flex items-center justify-center shadow-xl border-2 border-white/30 backdrop-blur-sm"
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-cream font-serif font-bold text-2xl">
                            {testimonials[currentIndex].name.charAt(0)}
                          </span>
                          <motion.div
                            className="absolute inset-0 rounded-2xl border border-sunset/30"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.div>
                        
                        <div>
                          <h4 className="font-bold text-forest-deep text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-forest-deep/70 text-sm mb-1">
                            {testimonials[currentIndex].location}
                          </p>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-sunset"></div>
                            <p className="text-sunset text-sm font-semibold">
                              {testimonials[currentIndex].experience}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Enhanced Navigation Arrows */}
            <motion.div
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-2xl border-2 border-forest-deep/25 hover:bg-forest-deep hover:text-cream shadow-2xl hover:shadow-forest-deep/30 transition-all duration-500 rounded-2xl group"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-sunset/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-2xl border-2 border-forest-deep/25 hover:bg-forest-deep hover:text-cream shadow-2xl hover:shadow-forest-deep/30 transition-all duration-500 rounded-2xl group"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <motion.div
                  className="absolute inset-0 rounded-2xl border border-sunset/20"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Dots Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center items-center space-x-2 mt-12"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className="relative p-2 group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`w-4 h-4 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-forest-deep via-sunset to-forest-medium scale-125 shadow-xl shadow-sunset/25'
                      : 'bg-forest-deep/25 hover:bg-forest-deep/50 group-hover:scale-110 backdrop-blur-sm border border-white/20'
                  }`}
                  layoutId={index === currentIndex ? "active-dot" : undefined}
                />
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-sunset/60"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.8, opacity: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                )}
                {index === currentIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-sunset/10"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
              </motion.button>
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