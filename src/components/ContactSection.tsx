import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  Car,
  Plane,
  Send,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      action: "Call Now",
      color: "text-forest-medium"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jlkabinipalace.com", "bookings@jlkabinipalace.com"],
      action: "Send Email",
      color: "text-sunset"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Kabini Forest Area", "Karnataka, India"],
      action: "Get Directions",
      color: "text-river"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+91 98765 43210"],
      action: "Chat Now",
      color: "text-forest-deep"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 bg-gradient-to-br from-forest-deep/95 via-forest-medium/90 to-forest-deep/95 relative overflow-hidden">
      {/* Nature-themed Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,197,63,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,183,77,0.1)_0%,transparent_60%)]" />
        
        {/* Floating Nature Elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-river/20 to-transparent backdrop-blur-sm border border-river/30"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 right-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-sunset/15 to-transparent backdrop-blur-sm border border-sunset/25"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-cream/20"
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
            GET IN TOUCH
          </motion.h3>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6"
          >
            Plan Your Perfect Getaway
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-cream/80 max-w-2xl mx-auto"
          >
            Ready to experience rustic royalty? Contact us to plan your stay or 
            ask any questions about our facilities and services.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Enhanced Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="bg-white/10 backdrop-blur-2xl border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-sunset/20 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 ${info.color} group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm`}
                          whileHover={{ rotate: 8, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <info.icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-cream mb-2 group-hover:text-sunset transition-colors duration-300 text-lg">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-cream/80 text-sm leading-relaxed mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-6"
            >
              {/* Operating Hours */}
              <Card className="bg-white/15 backdrop-blur-2xl border-white/25 hover:bg-white/20 transition-all duration-300 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div 
                      className="p-2 rounded-lg bg-gradient-to-br from-sunset/20 to-sunset/10 backdrop-blur-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Clock className="w-5 h-5 text-sunset" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-cream">Reception Hours</h4>
                  </div>
                  <div className="space-y-2 text-cream/90 text-sm">
                    <p className="flex justify-between"><span>Check-in:</span> <span className="text-sunset font-medium">2:00 PM - 11:00 PM</span></p>
                    <p className="flex justify-between"><span>Check-out:</span> <span className="text-sunset font-medium">7:00 AM - 12:00 PM</span></p>
                    <p className="text-cream/70 text-xs mt-3 italic">24/7 Emergency Assistance Available</p>
                  </div>
                </CardContent>
              </Card>

              {/* How to Reach */}
              <Card className="bg-white/15 backdrop-blur-2xl border-white/25 hover:bg-white/20 transition-all duration-300 shadow-xl">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-cream mb-4">How to Reach</h4>
                  <div className="space-y-4">
                    <motion.div 
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Car className="w-5 h-5 text-sunset" />
                      <span className="text-cream/90 text-sm">120 km from Bangalore (2.5 hours)</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <Plane className="w-5 h-5 text-sunset" />
                      <span className="text-cream/90 text-sm">Nearest Airport: Mysore (60 km)</span>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form with Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 80 }}
            className="lg:col-span-3"
          >
            <Card className="bg-white/10 backdrop-blur-3xl border-white/20 hover:bg-white/15 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:shadow-sunset/10">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring" }}
                    className="p-2 rounded-lg bg-gradient-to-br from-sunset to-sunset/80"
                  >
                    <Send className="w-5 h-5 text-forest-deep" />
                  </motion.div>
                  <h3 className="text-xl font-serif font-bold text-cream">Send us a Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="text-cream text-sm font-semibold mb-3 block">
                      First Name *
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        placeholder="Your first name"
                        required
                        className="bg-white/25 backdrop-blur-sm border-white/40 text-cream placeholder:text-cream/70 focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 h-12 rounded-xl"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="text-cream text-sm font-semibold mb-3 block">
                      Last Name *
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        placeholder="Your last name"
                        required
                        className="bg-white/25 backdrop-blur-sm border-white/40 text-cream placeholder:text-cream/70 focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 h-12 rounded-xl"
                      />
                    </motion.div>
                  </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="text-cream text-sm font-semibold mb-3 block">
                      Email *
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/25 backdrop-blur-sm border-white/40 text-cream placeholder:text-cream/70 focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 h-12 rounded-xl"
                      />
                    </motion.div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1 }}
                    >
                      <label className="text-cream text-sm font-semibold mb-3 block">
                        Phone Number
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="bg-white/25 backdrop-blur-sm border-white/40 text-cream placeholder:text-cream/70 focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 h-12 rounded-xl"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <label className="text-cream text-sm font-semibold mb-3 block">
                        Room Inquiry
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <select className="w-full bg-white/25 backdrop-blur-sm border border-white/40 text-cream rounded-xl h-12 px-4 focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300">
                          <option value="general" className="bg-forest-deep text-cream">General Inquiry</option>
                          <option value="booking" className="bg-forest-deep text-cream">Room Booking</option>
                          <option value="kings-grove" className="bg-forest-deep text-cream">The King's Grove</option>
                          <option value="empress-suite" className="bg-forest-deep text-cream">The Empress Suite</option>
                          <option value="regal-crest" className="bg-forest-deep text-cream">Regal Crest</option>
                        </select>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <label className="text-cream text-sm font-semibold mb-3 block">
                        Check-in Date
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          type="date"
                          className="bg-white/25 backdrop-blur-sm border-white/40 text-cream focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 h-12 rounded-xl"
                        />
                      </motion.div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <label className="text-cream text-sm font-semibold mb-3 block">
                        Check-out Date
                      </label>
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <Input
                          type="date"
                          className="bg-white/25 backdrop-blur-sm border-white/40 text-cream focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 h-12 rounded-xl"
                        />
                      </motion.div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    <label className="text-cream text-sm font-semibold mb-3 block">
                      Message *
                    </label>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <Textarea
                        placeholder="Tell us about your requirements, number of guests, special requests..."
                        rows={5}
                        required
                        className="bg-white/25 backdrop-blur-sm border-white/40 text-cream placeholder:text-cream/70 resize-none focus:bg-white/30 focus:border-sunset/50 focus:ring-2 focus:ring-sunset/25 transition-all duration-300 rounded-xl"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-sunset via-sunset/95 to-sunset/90 text-forest-deep hover:from-sunset/95 hover:to-sunset/85 font-bold py-6 text-lg shadow-2xl hover:shadow-sunset/30 transition-all duration-500 rounded-xl relative overflow-hidden group"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                      />
                      {isSubmitting ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center relative z-10"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-3 border-forest-deep border-t-transparent rounded-full mr-3"
                          />
                          Sending Message...
                        </motion.div>
                      ) : (
                        <div className="flex items-center relative z-10">
                          <Send className="w-6 h-6 mr-3" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-cream mb-4">
                Ready to Book?
              </h3>
              <p className="text-cream/80 mb-6">
                Call us directly for instant bookings and special offers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-sunset text-forest-deep hover:bg-sunset/90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 98765 43210
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-cream text-cream hover:bg-cream hover:text-forest-deep"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;