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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      mixBlendMode: 'difference' as const,
    },
    luxury: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: 'rgba(219, 174, 105, 0.6)', // sunset color
      mixBlendMode: 'normal' as const,
    },
    text: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 24,
      scale: 0.8,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      mixBlendMode: 'difference' as const,
    },
    pointer: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      mixBlendMode: 'difference' as const,
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
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
                ? 'rgba(219, 174, 105, 0.2)' 
                : 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CursorEffects;