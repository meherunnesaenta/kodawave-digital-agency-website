import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const Testimonial = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300 }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent rounded-3xl p-8 md:p-12 overflow-hidden">
      {/* Background Quote Icon */}
      <FaQuoteLeft className="absolute text-8xl text-primary/5 top-8 left-8" />
      
      <div className="relative z-10">
        {/* Rating Stars */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-lg ${
                i < currentTestimonial.rating ? 'text-yellow-400' : 'text-base-300'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Content with Animation */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-center"
          >
            <p className="text-lg md:text-xl text-base-content/80 italic mb-8 max-w-3xl mx-auto leading-relaxed">
              "{currentTestimonial.content}"
            </p>
            
            {/* Avatar & Info */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl shadow-glow">
                {currentTestimonial.avatar}
              </div>
              <div className="text-left">
                <h4 className="font-bold text-lg text-base-content">{currentTestimonial.name}</h4>
                <p className="text-sm text-primary">{currentTestimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FaChevronLeft />
          </motion.button>
          
          {/* Dots Indicator */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 h-2 bg-gradient-primary rounded-full'
                    : 'w-2 h-2 bg-base-300 rounded-full hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full bg-base-200 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;