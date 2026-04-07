import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  const { title, description, icon, features, gradient } = service;

  // Card hover animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    },
    hover: {
      y: -10,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  // Icon animation
  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-base-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-200 hover:border-primary/20"
    >
      {/* Gradient Background on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Icon Section */}
      <motion.div
        variants={iconVariants}
        className="relative mb-6"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
          <span className="text-3xl md:text-4xl">{icon}</span>
        </div>
        
        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        className="text-xl md:text-2xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors duration-300"
      >
        {title}
      </motion.h3>

      {/* Description */}
      <motion.p
        className="text-base-content/60 text-sm md:text-base mb-4 leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Features List */}
      <motion.ul
        className="space-y-2 mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.2 }
          }
        }}
      >
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center gap-2 text-sm text-base-content/70"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      {/* Learn More Link */}
      <motion.div
        whileHover={{ x: 5 }}
        className="mt-auto"
      >
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
        >
          <span>Learn More</span>
          <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      {/* Corner Decoration */}
      <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-secondary rounded-full" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;