import { motion } from 'framer-motion';
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
  Send
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section id="contact" className="py-20 bg-gradient-forest relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 rounded-full border border-cream"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-sunset"
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-white/20 ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-cream mb-2">
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-cream/80 text-sm mb-1">
                              {detail}
                            </p>
                          ))}
                          <Button
                            variant="link"
                            className="text-sunset hover:text-sunset/80 p-0 h-auto mt-2"
                          >
                            {info.action} →
                          </Button>
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
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-5 h-5 text-sunset" />
                    <h4 className="text-lg font-semibold text-cream">Reception Hours</h4>
                  </div>
                  <div className="space-y-2 text-cream/80 text-sm">
                    <p>Check-in: 2:00 PM - 11:00 PM</p>
                    <p>Check-out: 7:00 AM - 12:00 PM</p>
                    <p>24/7 Emergency Assistance Available</p>
                  </div>
                </CardContent>
              </Card>

              {/* How to Reach */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-cream mb-4">How to Reach</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Car className="w-4 h-4 text-sunset" />
                      <span className="text-cream/80 text-sm">120 km from Bangalore (2.5 hours drive)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Plane className="w-4 h-4 text-sunset" />
                      <span className="text-cream/80 text-sm">Nearest Airport: Mysore (60 km)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-cream text-sm font-medium mb-2 block">
                        First Name *
                      </label>
                      <Input
                        placeholder="Your first name"
                        required
                        className="bg-white/20 border-white/30 text-cream placeholder:text-cream/60"
                      />
                    </div>
                    <div>
                      <label className="text-cream text-sm font-medium mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Your last name"
                        required
                        className="bg-white/20 border-white/30 text-cream placeholder:text-cream/60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-cream text-sm font-medium mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-white/20 border-white/30 text-cream placeholder:text-cream/60"
                    />
                  </div>

                  <div>
                    <label className="text-cream text-sm font-medium mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="bg-white/20 border-white/30 text-cream placeholder:text-cream/60"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-cream text-sm font-medium mb-2 block">
                        Check-in Date
                      </label>
                      <Input
                        type="date"
                        className="bg-white/20 border-white/30 text-cream"
                      />
                    </div>
                    <div>
                      <label className="text-cream text-sm font-medium mb-2 block">
                        Check-out Date
                      </label>
                      <Input
                        type="date"
                        className="bg-white/20 border-white/30 text-cream"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-cream text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your requirements, number of guests, special requests..."
                      rows={5}
                      required
                      className="bg-white/20 border-white/30 text-cream placeholder:text-cream/60 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sunset text-forest-deep hover:bg-sunset/90 font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
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