import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.classList.contains('cursor-luxury')) {
        setIsHovering(true);
        setCursorVariant('luxury');
      } else if (target.classList.contains('cursor-text')) {
        setIsHovering(true);
        setCursorVariant('text');
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setIsHovering(true);
        setCursorVariant('pointer');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorVariant('default');
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add event listeners to interactive elements
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      backgroundColor: 'hsl(140, 45%, 25%)', // forest-deep
      mixBlendMode: 'normal' as const,
      border: '2px solid hsl(45, 90%, 65%)', // sunset accent
      boxShadow: '0 0 8px hsl(140, 45%, 25% / 0.3)',
    },
    luxury: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 1.4,
      backgroundColor: 'hsl(45, 90%, 65%)', // sunset
      mixBlendMode: 'normal' as const,
      border: '3px solid hsl(25, 30%, 55%)', // earth-medium
      boxShadow: '0 0 20px hsl(45, 90%, 65% / 0.4)',
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 20,
      scale: 0.9,
      backgroundColor: 'hsl(25, 30%, 55%)', // earth-medium
      mixBlendMode: 'normal' as const,
      border: '2px solid hsl(140, 25%, 65%)', // forest-light
      boxShadow: '0 0 10px hsl(25, 30%, 55% / 0.2)',
    },
    pointer: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.3,
      backgroundColor: 'hsl(140, 25%, 65%)', // forest-light
      mixBlendMode: 'normal' as const,
      border: '2px solid hsl(45, 90%, 65%)', // sunset
      boxShadow: '0 0 15px hsl(140, 25%, 65% / 0.3)',
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.3
        }}
        style={{
          background: variants[cursorVariant as keyof typeof variants].backgroundColor,
          border: variants[cursorVariant as keyof typeof variants].border,
          boxShadow: variants[cursorVariant as keyof typeof variants].boxShadow
        }}
      />
      
      {/* Cursor trail effect */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-40 hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.3, 
              scale: 1,
              x: mousePosition.x - 24,
              y: mousePosition.y - 24
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            style={{
              backgroundColor: cursorVariant === 'luxury' 
                ? 'hsl(45, 90%, 65% / 0.15)' 
                : 'hsl(140, 45%, 25% / 0.1)',
              border: '1px solid hsl(35, 40%, 95% / 0.2)'
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CursorEffects;