import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Crown, Waves, MapPin, Users, ArrowRight } from 'lucide-react';
import luxuryRoomImage from '@/assets/luxury-room.jpg';

const RoomsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('all');

  const rooms = [
    {
      id: '110',
      name: "The King's Grove",
      type: "Hut",
      category: "premium",
      description: "Royal experience in a traditional hut setting with modern amenities",
      features: ["Forest View", "Private Deck", "Rustic Luxury"],
      image: luxuryRoomImage,
      icon: Crown,
      price: "₹12,000"
    },
    {
      id: '105',
      name: "The Empress Suite",
      type: "Main Building - First Floor",
      category: "luxury",
      description: "Ultimate luxury with private jacuzzi and panoramic forest views",
      features: ["Jacuzzi", "Premium Suite", "Balcony"],
      image: luxuryRoomImage,
      icon: Waves,
      price: "₹15,000"
    },
    {
      id: '104',
      name: "Regal Crest",
      type: "Main Building - First Floor",
      category: "premium",
      description: "Elevated comfort with regal interiors and forest panorama",
      features: ["First Floor", "Forest View", "Royal Decor"],
      image: luxuryRoomImage,
      icon: Crown,
      price: "₹10,000"
    },
    {
      id: '102',
      name: "Sterling Manor",
      type: "Main Building - Ground Floor",
      category: "standard",
      description: "Comfortable elegance with easy access and modern conveniences",
      features: ["Ground Floor", "Garden Access", "Modern Amenities"],
      image: luxuryRoomImage,
      icon: MapPin,
      price: "₹8,000"
    },
    {
      id: '103',
      name: "Imperial Ridge",
      type: "Main Building - Ground Floor",
      category: "standard",
      description: "Spacious accommodation with imperial charm and comfort",
      features: ["Ground Floor", "Spacious", "Classic Design"],
      image: luxuryRoomImage,
      icon: Crown,
      price: "₹8,500"
    },
    {
      id: '101',
      name: "The Earl's Retreat",
      type: "Special",
      category: "premium",
      description: "Private retreat offering intimate luxury and personalized service",
      features: ["Private", "Exclusive", "Personalized Service"],
      image: luxuryRoomImage,
      icon: Crown,
      price: "₹11,000"
    },
    {
      id: '106',
      name: "Verdant Vista",
      type: "Entrance Side",
      category: "standard",
      description: "Fresh perspectives with lush green views and modern comfort",
      features: ["Green Views", "Fresh Air", "Modern"],
      image: luxuryRoomImage,
      icon: MapPin,
      price: "₹7,500"
    },
    {
      id: '107',
      name: "Laurel Horizon",
      type: "Entrance Side",
      category: "standard",
      description: "Horizon views with contemporary design and natural ambiance",
      features: ["Horizon View", "Contemporary", "Natural"],
      image: luxuryRoomImage,
      icon: MapPin,
      price: "₹7,500"
    },
    {
      id: '108',
      name: "Emerald Outlook",
      type: "Entrance Side",
      category: "family",
      description: "Perfect for families with double beds and emerald forest views",
      features: ["Double Beds", "Family Friendly", "Forest Views"],
      image: luxuryRoomImage,
      icon: Users,
      price: "₹9,000"
    }
  ];

  const filters = [
    { id: 'all', name: 'All Rooms' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'premium', name: 'Premium' },
    { id: 'standard', name: 'Standard' },
    { id: 'family', name: 'Family' }
  ];

  const filteredRooms = selectedFilter === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === selectedFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      luxury: 'bg-sunset text-forest-deep',
      premium: 'bg-forest-medium text-cream',
      standard: 'bg-earth-medium text-cream',
      family: 'bg-river text-cream'
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-foreground';
  };

  return (
    <section id="rooms" className="py-20 bg-cream relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-forest-medium" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-earth-medium" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sunset text-lg font-semibold mb-4"
          >
            LUXURY ACCOMMODATIONS
          </motion.h3>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-forest-deep mb-6"
          >
            Royal Suites & Premium Rooms
          </motion.h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter.id)}
              className={`${
                selectedFilter === filter.id
                  ? 'bg-forest-deep text-cream'
                  : 'bg-transparent border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-cream'
              } transition-all duration-300`}
            >
              {filter.name}
            </Button>
          ))}
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              layout
            >
              <Card className="group overflow-hidden shadow-float hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 bg-white">
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-40" />
                  
                  {/* Room Number Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-forest-deep text-cream font-semibold">
                      Room {room.id}
                    </Badge>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className={getCategoryColor(room.category)}>
                      {room.category.charAt(0).toUpperCase() + room.category.slice(1)}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <room.icon className="w-5 h-5 text-cream" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-serif font-semibold text-forest-deep mb-1">
                      {room.name}
                    </h4>
                    <p className="text-sm text-earth-medium font-medium">
                      {room.type}
                    </p>
                  </div>

                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs bg-forest-light/20 text-forest-deep px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-xs text-foreground/60">Starting from</span>
                      <div className="text-xl font-bold text-forest-deep">
                        {room.price}<span className="text-sm font-normal">/night</span>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      className="bg-sunset text-forest-deep hover:bg-sunset/90 group/btn"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floor Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-forest-deep text-forest-deep hover:bg-forest-deep hover:text-cream"
          >
            <MapPin className="w-5 h-5 mr-2" />
            View Interactive Floor Plan
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;