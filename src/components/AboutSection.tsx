import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Heart, Star, Leaf } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Nestled beside the pristine Kabini river with direct forest access"
    },
    {
      icon: Heart,
      title: "Luxury Comfort",
      description: "Modern amenities seamlessly blended with rustic charm"
    },
    {
      icon: Star,
      title: "Unique Experience",
      description: "Farm-style living meets premium hospitality"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable practices that respect and preserve nature"
    }
  ];

  return (
    <section id="about" className="py-20 bg-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-forest-medium" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-earth-medium" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sunset text-lg font-semibold mb-4"
              >
                ABOUT OUR RESORT
              </motion.h3>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-serif font-bold text-forest-deep mb-6"
              >
                Where Wilderness Meets Luxury
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 text-foreground/80 text-lg leading-relaxed"
            >
              <p>
                J&L Kabini Palace stands as a testament to harmonious living, 
                where the boundaries between luxury and nature beautifully blur. 
                Located in the heart of Karnataka's pristine Kabini region, our resort 
                offers an unparalleled escape from the ordinary.
              </p>
              
              <p>
                Experience the serenity of farm-style living elevated to royal standards. 
                Our carefully crafted accommodations and thoughtful amenities ensure that 
                your connection with nature never compromises on comfort. From sunrise 
                over the river to the symphony of the forest at night, every moment here 
                is designed to rejuvenate your soul.
              </p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-deep">50+</div>
                <div className="text-sm text-foreground/60 font-medium">Acres of Land</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-deep">9</div>
                <div className="text-sm text-foreground/60 font-medium">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-deep">24/7</div>
                <div className="text-sm text-foreground/60 font-medium">Nature Access</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-float hover:shadow-luxury transition-all duration-300 hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-forest-medium mb-4" />
                <h4 className="text-lg font-semibold text-forest-deep mb-2">
                  {feature.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;