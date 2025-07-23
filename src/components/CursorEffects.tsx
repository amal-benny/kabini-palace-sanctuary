import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('button') || target.closest('a')) {
        setIsHovering(true);
        if (target.classList.contains('cursor-luxury') || target.closest('.cursor-luxury')) {
          setCursorVariant('luxury');
        } else {
          setCursorVariant('pointer');
        }
      } else if (target.closest('img') || target.closest('[data-cursor="view"]')) {
        setIsHovering(true);
        setCursorVariant('view');
      } else if (target.closest('input') || target.closest('textarea') || target.classList.contains('cursor-text')) {
        setIsHovering(true);
        setCursorVariant('text');
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      const relatedTarget = (e as MouseEvent).relatedTarget as HTMLElement;
      
      // Only reset if we're not moving to a child element
      if (!target.contains(relatedTarget)) {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add event listeners to interactive elements
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Inner dot variants
  const innerDotVariants = {
    default: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 1,
    },
    pointer: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 1.5,
    },
    luxury: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 2,
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      scale: 0.8,
    },
    view: {
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      scale: 1.2,
    }
  };

  // Outer ring variants
  const outerRingVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1,
      opacity: 0.6,
    },
    pointer: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      scale: 1.2,
      opacity: 0.8,
    },
    luxury: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      scale: 1.5,
      opacity: 0.9,
    },
    text: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 0.8,
      opacity: 0.5,
    },
    view: {
      x: mousePosition.x - 28,
      y: mousePosition.y - 28,
      scale: 1.3,
      opacity: 0.7,
    }
  };

  // Click ripple variants
  const clickRippleVariants = {
    initial: { scale: 0, opacity: 0.8 },
    animate: { scale: 2, opacity: 0 },
    exit: { scale: 0, opacity: 0 }
  };

  const getCursorColors = (variant: string) => {
    switch (variant) {
      case 'luxury':
        return {
          innerDot: 'hsl(45, 90%, 65%)', // sunset
          outerRing: 'hsl(45, 90%, 65% / 0.3)',
          border: 'hsl(25, 30%, 55%)', // earth-medium
        };
      case 'pointer':
        return {
          innerDot: 'hsl(140, 25%, 65%)', // forest-light
          outerRing: 'hsl(140, 25%, 65% / 0.2)',
          border: 'hsl(45, 90%, 65%)', // sunset
        };
      case 'text':
        return {
          innerDot: 'hsl(25, 30%, 55%)', // earth-medium
          outerRing: 'hsl(25, 30%, 55% / 0.2)',
          border: 'hsl(140, 45%, 25%)', // forest-deep
        };
      case 'view':
        return {
          innerDot: 'hsl(200, 60%, 45%)', // river
          outerRing: 'hsl(200, 60%, 45% / 0.2)',
          border: 'hsl(45, 90%, 65%)', // sunset
        };
      default:
        return {
          innerDot: 'hsl(140, 45%, 25%)', // forest-deep
          outerRing: 'hsl(140, 45%, 25% / 0.15)',
          border: 'hsl(35, 40%, 95%)', // cream
        };
    }
  };

  const colors = getCursorColors(cursorVariant);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-50 hidden md:block"
        variants={innerDotVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 30,
          mass: 0.2
        }}
        style={{
          backgroundColor: colors.innerDot,
          boxShadow: `0 0 10px ${colors.innerDot}`,
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-40 hidden md:block glass"
        variants={outerRingVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8
        }}
        style={{
          background: colors.outerRing,
          border: `1px solid ${colors.border}`,
          backdropFilter: 'blur(8px)',
        }}
      />

      {/* Click Ripple Effect */}
      <AnimatePresence>
        {isClicking && (
          <motion.div
            className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-30 hidden md:block"
            variants={clickRippleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeOut"
            }}
            style={{
              x: mousePosition.x - 32,
              y: mousePosition.y - 32,
              background: `radial-gradient(circle, ${colors.innerDot} 0%, transparent 70%)`,
              border: `1px solid ${colors.border}`,
            }}
          />
        )}
      </AnimatePresence>

      {/* View Icon for Gallery Items */}
      <AnimatePresence>
        {cursorVariant === 'view' && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-45 hidden md:block"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x + 20,
              y: mousePosition.y - 10
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
          >
            <div className="glass px-2 py-1 rounded-md">
              <span className="text-xs font-medium text-foreground">View</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CursorEffects;