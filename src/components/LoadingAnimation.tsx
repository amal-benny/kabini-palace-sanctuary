import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingAnimationProps {
  onLoadingComplete: () => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Extended elegant loading (2.5-3 seconds)
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          // Elegant fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 600); // Graceful transition
          }, 300);
          return 100;
        }
        return prev + Math.random() * 8 + 4; // Smoother, more elegant progress
      });
    }, 120); // Slower, more luxurious intervals

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            y: -20,
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-forest-light/20 to-earth-light/30"
        >
          {/* Background Forest Silhouette */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.3,
                  transition: { duration: 1.5, ease: "easeOut" }
                }}
                d="M0,600 Q200,500 400,550 T800,520 T1200,580 L1200,800 L0,800 Z"
                fill="hsl(var(--forest-deep))"
              />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 0.2,
                  transition: { duration: 1.5, delay: 0.2, ease: "easeOut" }
                }}
                d="M0,650 Q300,580 600,600 T1200,620 L1200,800 L0,800 Z"
                fill="hsl(var(--forest-medium))"
              />
            </svg>
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 text-center">
            {/* Animated Leaf Logo */}
            <div className="relative mb-8">
              {/* Water Ripple Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1.8],
                  opacity: [0.6, 0.3, 0],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }
                }}
                className="absolute inset-0 rounded-full border-2 border-forest-medium/30"
                style={{ width: '120px', height: '120px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1.8],
                  opacity: [0.6, 0.3, 0],
                  transition: {
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.3
                  }
                }}
                className="absolute inset-0 rounded-full border border-forest-light/40"
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  left: '50%', 
                  top: '50%', 
                  transform: 'translate(-50%, -50%)'
                }}
              />

              {/* Animated Leaf */}
              <motion.div
                initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.1, 1],
                  rotate: [-10, 5, 0],
                  opacity: [0, 1, 1],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
                className="w-16 h-16 mx-auto mb-4"
              >
                <svg viewBox="0 0 64 64" className="w-full h-full">
                  <motion.path
                    d="M32 8C24 8 18 14 16 22C14 30 18 38 24 42C26 44 28 46 32 46C36 46 38 44 40 42C46 38 50 30 48 22C46 14 40 8 32 8Z"
                    fill="hsl(var(--forest-medium))"
                    animate={{ 
                      fill: ["hsl(var(--forest-deep))", "hsl(var(--forest-medium))", "hsl(var(--forest-light))"],
                      transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
                    }}
                  />
                  <motion.path
                    d="M32 8L32 46"
                    stroke="hsl(var(--earth-medium))"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      transition: { duration: 0.8, delay: 0.5 }
                    }}
                  />
                  <motion.path
                    d="M32 20C28 18 24 20 22 24"
                    stroke="hsl(var(--earth-medium))"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ 
                      pathLength: 1,
                      transition: { duration: 0.6, delay: 0.8 }
                    }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Resort Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.2
                }
              }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-forest-deep mb-2">
                J&L Kabini Palace
              </h1>
              <motion.p
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity,
                    times: [0, 0.3, 0.7, 1]
                  }
                }}
                className="text-earth-medium font-medium"
              >
                Escaping into Nature...
              </motion.p>
            </motion.div>

            {/* Progress Indicator */}
            <div className="w-64 mx-auto">
              <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-forest-medium to-forest-light rounded-full"
                  style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: `${Math.min(loadingProgress, 100)}%`,
                    transition: { duration: 0.15, ease: "easeOut" }
                  }}
                />
                
                {/* Glowing effect */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: [-32, 256],
                    transition: {
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                />
              </div>
              
              <motion.p 
                className="text-sm text-muted-foreground mt-3 font-medium"
                animate={{
                  opacity: [0.7, 1, 0.7],
                  transition: { duration: 1.5, repeat: Infinity }
                }}
              >
                {Math.round(loadingProgress)}% Complete
              </motion.p>
            </div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-forest-light/40 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${60 + (i % 2) * 10}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                  transition: {
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;