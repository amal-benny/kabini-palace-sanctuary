import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Waves, TreePine, Truck, UtensilsCrossed, Building } from 'lucide-react';
import naturalPondImage from '@/assets/natural-pond.jpg';
import forestTrekkingImage from '@/assets/forest-trekking.jpg';
import jeepSafariImage from '@/assets/jeep-safari.jpg';
import luxuryRestaurantImage from '@/assets/luxury-restaurant.jpg';
import luxuryFunctionHallImage from '@/assets/luxury-function-hall.jpg';

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facilities = [
    {
      icon: Waves,
      title: "Natural Pond",
      description: "Crystal clear waters surrounded by lush greenery, perfect for peaceful reflection and connecting with nature's tranquility.",
      image: naturalPondImage,
      color: "text-river"
    },
    {
      icon: TreePine,
      title: "Forest Trekking with Guide",
      description: "Explore the mystical forest trails with our experienced guides who share the secrets of the wild.",
      image: forestTrekkingImage,
      color: "text-forest-medium"
    },
    {
      icon: Truck,
      title: "Jeep Safari",
      description: "Venture deep into the wilderness and witness exotic wildlife in their natural habitat with our safari adventures.",
      image: jeepSafariImage,
      color: "text-earth-dark"
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant",
      description: "Savor authentic local cuisine and international delicacies prepared with fresh, organic ingredients.",
      image: luxuryRestaurantImage,
      color: "text-sunset"
    },
    {
      icon: Building,
      title: "Function Hall",
      description: "Host memorable events in our elegant function hall with stunning forest views and premium amenities.",
      image: luxuryFunctionHallImage,
      color: "text-forest-deep"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-forest relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-32 h-32 border border-cream rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-24 h-24 border border-sunset rounded-full"
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
            WORLD-CLASS FACILITIES
          </motion.h3>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6"
          >
            Immerse in Nature's Finest Offerings
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-cream/80 max-w-2xl mx-auto"
          >
            From adventurous excursions to peaceful relaxation, our facilities 
            are designed to create unforgettable memories in harmony with nature.
          </motion.p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-luxury hover:shadow-glow transition-all duration-500 hover:-translate-y-4">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-50" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <facility.icon className={`w-6 h-6 ${facility.color}`} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xl font-serif font-semibold text-cream">
                    {facility.title}
                  </h4>
                  
                  <p className="text-cream/80 text-sm leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Decorative Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    className="h-0.5 bg-gradient-sunset"
                  />
                </div>
              </div>

              {/* Floating Animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="absolute -bottom-2 -right-2 w-4 h-4 bg-sunset rounded-full opacity-60"
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sunset text-forest-deep px-8 py-4 rounded-full font-semibold text-lg shadow-glow hover:shadow-luxury transition-all duration-300"
          >
            Book Your Adventure
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;