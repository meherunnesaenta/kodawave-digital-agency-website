import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ 
  children, 
  center = true, 
  subText,
  badge,
  className = '',
  gradient = true
}) => {
  
  // 3D Animation Variants

  const containerVariants = {
    hidden: { opacity: 0, perspective: 1000 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: -90,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 200, 
        damping: 15,
        duration: 0.6 
      }
    }
  };

  const headingVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -45,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 12,
        duration: 0.7,
        delay: 0.2
      }
    }
  };

  const underlineVariants = {
    hidden: { 
      width: 0,
      opacity: 0,
      scaleX: 0
    },
    visible: { 
      width: "6rem",
      opacity: 1,
      scaleX: 1,
      transition: { 
        duration: 0.6, 
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  const subTextVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateX: -30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  // 3D Hover Effect for Heading
  const headingHoverVariants = {
    hover: {
      scale: 1.02,
      textShadow: "0px 0px 8px rgba(139, 92, 246, 0.5)",
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`${center ? 'text-center' : 'text-left'} ${className}`}
      style={{ perspective: "1000px" }}
    >
      
      {/* 3D Badge */}
      {badge && (
        <motion.div 
          variants={badgeVariants}
          className={`inline-block mb-4 ${center ? 'mx-auto' : ''}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
            }}
            className="px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm inline-block cursor-default"
          >
            {badge}
          </motion.span>
        </motion.div>
      )}
      
      {/* 3D Heading with Hover Effect */}
      <motion.h2 
        variants={headingVariants}
        whileHover="hover"
        animate="visible"
        className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${
          gradient ? 'text-primary' : 'text-base-content'
        }`}
        style={{ 
          transformStyle: "preserve-3d",
          display: "inline-block",
          width: "100%"
        }}
      >
        <motion.span
          variants={headingHoverVariants}
          style={{ display: "inline-block" }}
        >
          {children}
        </motion.span>
      </motion.h2>
      
      {/* 3D Animated Underline */}
      <div className={`relative ${center ? 'mx-auto' : ''} mb-6 flex justify-center`}>
        <motion.div 
          variants={underlineVariants}
          className="h-1 bg-gradient-primary rounded-full"
          style={{ transformOrigin: "center" }}
        />
        {/* Glowing effect */}
        <motion.div 
          className="absolute inset-0 h-1 bg-gradient-primary rounded-full blur-sm"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* 3D Subtext */}
      {subText && (
        <motion.p 
          variants={subTextVariants}
          className={`text-base-content/70 max-w-2xl text-base md:text-lg ${center ? 'mx-auto' : ''}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {subText}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Header;