import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show navigation after a brief delay to ensure loading is complete
    const showTimer = setTimeout(() => setIsVisible(true), 100);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(showTimer);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.8, 
        ease: [0.23, 1, 0.32, 1],
        delay: isVisible ? 0.2 : 0
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'backdrop-blur-lg bg-forest-deep/80 border-b border-cream/10 shadow-lg py-3' 
          : 'bg-gradient-to-b from-black/30 to-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
          transition={{ delay: isVisible ? 0.4 : 0, duration: 0.6 }}
          className={`text-2xl font-serif font-bold transition-colors duration-300 ${
            isScrolled ? 'text-cream drop-shadow-sm' : 'text-cream text-shadow'
          }`}
        >
          J&L Kabini Palace
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
              transition={{ delay: isVisible ? 0.5 + index * 0.1 : 0, duration: 0.5 }}
              className={`transition-all duration-300 font-medium relative group ${
                isScrolled 
                  ? 'text-cream hover:text-sunset drop-shadow-sm' 
                  : 'text-cream hover:text-sunset text-shadow'
              }`}
              onClick={() => {
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sunset transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
          transition={{ delay: isVisible ? 0.8 : 0, duration: 0.6 }}
          className="hidden md:flex items-center space-x-4"
        >
          <Button
            variant="outline"
            size="sm"
            className={`transition-all duration-300 ${
              isScrolled
                ? 'bg-transparent border-cream text-cream hover:bg-cream hover:text-forest-deep backdrop-blur-sm'
                : 'bg-transparent border-cream text-cream hover:bg-cream hover:text-forest-deep'
            }`}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button
            size="sm"
            className="bg-sunset text-forest-deep hover:bg-sunset/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book Now
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: isVisible ? 0.9 : 0, duration: 0.5 }}
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-cream drop-shadow-sm' : 'text-cream text-shadow'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 backdrop-blur-lg bg-forest-deep/90 border-b border-cream/10 md:hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-cream hover:text-sunset transition-colors duration-300 font-medium"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-cream text-cream hover:bg-cream hover:text-forest-deep"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  size="sm"
                  className="bg-sunset text-forest-deep hover:bg-sunset/90"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navigation;