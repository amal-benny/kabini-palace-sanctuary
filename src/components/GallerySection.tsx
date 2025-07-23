import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { X, ZoomIn } from 'lucide-react';
import heroImage from '@/assets/hero-forest.jpg';
import naturalPondImage from '@/assets/natural-pond.jpg';
import forestTrekkingImage from '@/assets/forest-trekking.jpg';
import jeepSafariImage from '@/assets/jeep-safari.jpg';
import luxuryRoomImage from '@/assets/luxury-room.jpg';
import luxuryRestaurantImage from '@/assets/luxury-restaurant.jpg';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroImage,
      alt: "Forest Resort Overview",
      category: "Resort",
      className: "md:col-span-2 md:row-span-2"
    },
    {
      src: naturalPondImage,
      alt: "Natural Pond",
      category: "Facilities",
      className: ""
    },
    {
      src: forestTrekkingImage,
      alt: "Forest Trekking",
      category: "Activities",
      className: ""
    },
    {
      src: jeepSafariImage,
      alt: "Jeep Safari Adventure",
      category: "Activities",
      className: ""
    },
    {
      src: luxuryRoomImage,
      alt: "Luxury Room Interior",
      category: "Rooms",
      className: ""
    },
    {
      src: heroImage,
      alt: "Sunset by the River",
      category: "Nature",
      className: "md:col-span-2"
    },
    {
      src: luxuryRestaurantImage,
      alt: "Dining Experience",
      category: "Dining",
      className: ""
    },
    {
      src: forestTrekkingImage,
      alt: "Forest Path",
      category: "Nature",
      className: ""
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-forest relative overflow-hidden">
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
            GALLERY
          </motion.h3>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-cream mb-6"
          >
            Capture the Essence of Kabini
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-cream/80 max-w-2xl mx-auto"
          >
            Immerse yourself in the visual journey of our resort's natural beauty, 
            luxury accommodations, and unforgettable experiences.
          </motion.p>
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${image.className}`}
              onClick={() => setSelectedImage(image.src)}
              data-cursor="view"
            >
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-between items-start">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-cream text-xs font-semibold">
                    {image.category}
                  </span>
                  <ZoomIn className="w-5 h-5 text-cream" />
                </div>
                
                <h4 className="text-cream font-semibold text-sm">
                  {image.alt}
                </h4>
              </div>

              {/* Floating Animation Dots */}
              <motion.div
                animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className="absolute top-2 right-2 w-2 h-2 bg-sunset rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-cream text-cream hover:bg-cream hover:text-forest-deep"
          >
            View Full Gallery
          </Button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg"
            />
            
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}

      {/* Background Decorative Elements */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-10 w-32 h-32 border border-cream/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-10 w-24 h-24 border border-sunset/10 rounded-full"
      />
    </section>
  );
};

export default GallerySection;