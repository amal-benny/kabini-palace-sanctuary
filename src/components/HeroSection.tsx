import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-forest.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="J&L Kabini Palace Forest Resort"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-sunset rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-cream rounded-full opacity-40"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-6"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-cream/90 font-medium tracking-wide"
          >
            Welcome to
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-cream text-shadow leading-tight"
          >
            J&L Kabini Palace
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xl md:text-2xl text-sunset font-medium tracking-wide"
          >
            Experience Rustic Royalty by the Wild
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed"
          >
            Immerse yourself in luxury amidst the pristine Kabini forest. 
            Where comfort meets wilderness, and every moment is a celebration of nature's grandeur.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-sunset text-forest-deep hover:bg-sunset/90 shadow-glow text-lg px-8 py-6 font-semibold"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Your Stay
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-cream text-cream hover:bg-cream hover:text-forest-deep text-lg px-8 py-6 font-semibold"
            >
              Explore Facilities
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-cream/60"
            >
              <p className="text-sm mb-2">Discover More</p>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full border border-cream/20"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className="absolute top-20 right-10 w-24 h-24 rounded-full border border-sunset/20"
      />
    </section>
  );
};

export default HeroSection;