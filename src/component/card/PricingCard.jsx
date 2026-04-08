import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaCheck, FaStar } from 'react-icons/fa';

const PricingCard = ({ plan, index, isYearly }) => {
  const { name, price, yearlyPrice, features, isPopular, icon } = plan;
  
  // Display price based on billing cycle
  const displayPrice = isYearly ? yearlyPrice : price;
  const billingText = isYearly ? '/year' : '/month';

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className={`relative bg-base-100 rounded-2xl overflow-hidden shadow-lg ${
        isPopular ? 'border-2 border-primary' : 'border border-base-200'
      }`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
            <div className="absolute top-2 right-[-20px] w-24 bg-gradient-primary text-white text-xs font-bold py-1 rotate-45 text-center">
              POPULAR
            </div>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 md:p-8">
        {/* Icon & Name */}
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-base-content">{name}</h3>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl md:text-4xl font-bold text-base-content">${displayPrice}</span>
            <span className="text-base-content/50">{billingText}</span>
          </div>
          {isYearly && (
            <p className="text-xs text-primary mt-1">Save 20% with yearly billing</p>
          )}
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-2 text-sm text-base-content/70"
            >
              <FaCheck className="text-primary text-xs" />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
              isPopular
                ? 'bg-gradient-primary text-white shadow-glow'
                : 'bg-base-200 text-base-content hover:bg-primary/10 hover:border-primary/50 border border-base-300'
            }`}
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;