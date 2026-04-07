import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center gap-2 cursor-pointer"
    >
      {/* Glassmorphism Box */}
      <motion.div
        whileHover={{
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.3 }
        }}
        className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg backdrop-blur-sm bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 flex items-center justify-center"
      >
        <span className="text-primary font-bold text-lg md:text-xl">K</span>
        
        {/* Corner Accent */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-primary rounded-full" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-cta rounded-full" />
      </motion.div>

      {/* Text */}
      <div>
        <motion.span
          whileHover={{ letterSpacing: "1px" }}
          className="text-lg md:text-xl font-semibold tracking-tight"
        >
          <span className="text-primary">Koda</span>
          <span className="text-base-content">wave</span>
        </motion.span>
        <div className="flex gap-1 text-[8px] md:text-[10px]">
          <span className="text-primary">✦</span>
          <span className="text-base-content/40">DIGITAL</span>
          <span className="text-secondary">✦</span>
          <span className="text-base-content/40">CREATIVE</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Logo;