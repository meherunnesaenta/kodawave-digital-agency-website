import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest('button, a, [role="button"], .cursor-pointer');
      if (isClickable) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Don't show on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          mass: 0.5
        }}
      >
        <div className={`relative w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovering 
            ? 'bg-gradient-primary text-white shadow-glow scale-110' 
            : 'bg-primary/15 text-primary border border-primary/40'
        }`}>
          {/* Simple Dot Instead of Arrow */}
          <div className={`w-1.5 h-1.5 rounded-full bg-current transition-all duration-300 ${
            isHovering ? 'scale-150' : ''
          }`} />
        </div>
      </motion.div>

      {/* Trailing Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isHovering ? 0.3 : 0.5,
          opacity: isHovering ? 0.5 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.3,
          delay: 0.03
        }}
      >
        <div className="w-1 h-1 rounded-full bg-primary" />
      </motion.div>
    </>
  );
};

export default MouseFollower;