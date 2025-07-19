import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Leaf,
  Heart,
  ArrowUp
} from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Facilities", href: "#facilities" },
        { name: "Rooms", href: "#rooms" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Room Booking", href: "#rooms" },
        { name: "Jeep Safari", href: "#facilities" },
        { name: "Forest Trekking", href: "#facilities" },
        { name: "Restaurant", href: "#facilities" },
        { name: "Function Hall", href: "#facilities" },
        { name: "Event Planning", href: "#contact" }
      ]
    },
    {
      title: "Policies",
      links: [
        { name: "Booking Policy", href: "/booking-policy" },
        { name: "Cancellation", href: "/cancellation" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Safety Guidelines", href: "/safety" },
        { name: "Eco-Friendly Practices", href: "/eco-friendly" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/jlkabinipalace", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/jlkabinipalace", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com/jlkabinipalace", label: "Twitter" }
  ];

  return (
    <footer className="bg-forest-deep text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border border-cream" />
        <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-sunset" />
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border border-cream" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-3xl font-serif font-bold mb-4">J&L Kabini Palace</h3>
                <p className="text-cream/80 leading-relaxed mb-6">
                  Experience rustic royalty where luxury meets nature. Nestled in the pristine 
                  Kabini forest, we offer an unparalleled escape into serenity and comfort.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-sunset mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-cream/90">Kabini Forest Area</p>
                    <p className="text-cream/70 text-sm">Karnataka, India - 571123</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sunset flex-shrink-0" />
                  <div>
                    <p className="text-cream/90">+91 98765 43210</p>
                    <p className="text-cream/70 text-sm">24/7 Support Available</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sunset flex-shrink-0" />
                  <div>
                    <p className="text-cream/90">info@jlkabinipalace.com</p>
                    <p className="text-cream/70 text-sm">Quick Response Guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-sunset hover:text-forest-deep transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + sectionIndex * 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-semibold text-sunset">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.5 + sectionIndex * 0.1 + linkIndex * 0.05 
                      }}
                    >
                      <a
                        href={link.href}
                        className="text-cream/70 hover:text-cream transition-colors duration-300 hover:translate-x-1 inline-block"
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            document.querySelector(link.href)?.scrollIntoView({
                              behavior: 'smooth'
                            });
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="py-8 border-t border-cream/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-serif font-semibold mb-2">
                Stay Connected with Nature
              </h4>
              <p className="text-cream/70">
                Subscribe for exclusive offers and updates from Kabini Palace
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/10 border border-cream/30 rounded-lg text-cream placeholder:text-cream/60 focus:outline-none focus:border-sunset min-w-[250px]"
              />
              <Button className="bg-sunset text-forest-deep hover:bg-sunset/90 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="py-6 border-t border-cream/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-cream/70">
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-sunset" />
                <span>Made with love for nature</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4 text-forest-light" />
                <span>Eco-friendly practices</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="text-sm text-cream/70">
                © 2024 J&L Kabini Palace. All rights reserved.
              </p>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-cream/70 hover:text-cream hover:bg-white/10 p-2"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-3 h-3 bg-sunset rounded-full"
      />
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-32 left-1/4 w-2 h-2 bg-cream rounded-full"
      />
    </footer>
  );
};

export default Footer;