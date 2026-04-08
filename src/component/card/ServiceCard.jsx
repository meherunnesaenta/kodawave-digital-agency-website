import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const ServiceCard = ({ service, index }) => {
  const { title, description, icon, features, image } = service; // Added 'image' to destructuring

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const imageContainerVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.1,
        ease: 'backOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.15,
        ease: 'easeOut',
      },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.2,
        ease: 'easeOut',
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: index * 0.1 + 0.35,
      },
    },
    hover: { x: 4 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-30px" }}
      className="group relative bg-base-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-base-200 hover:border-primary/20 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Section (Replaces Icon) */}
      <motion.div
        variants={imageContainerVariants}
        className="relative mb-6 overflow-hidden rounded-2xl"
        whileHover={{
          rotateX: 12,
          rotateY: 18,
          rotateZ: -5,
          scale: 1.05,
          y: -8
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 12
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "600px"
        }}
      >
        {/* 3D Shadow under image */}
        <motion.div
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-gradient-primary/30 rounded-full blur-xl z-0"
          whileHover={{
            scale: 1.2,
            opacity: 0.5,
            y: 8,
            blur: "8px"
          }}
        />

        <div className="relative w-full h-40 md:h-48 rounded-2xl overflow-hidden shadow-glow">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Title */}
      <motion.h3
        variants={titleVariants}
        whileHover={{
          scale: 1.05
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut"
        }}
        className="text-xl md:text-2xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors duration-300 line-clamp-2"
        style={{
          transformStyle: "preserve-3d",
          display: "inline-block"
        }}
      >
        <motion.h3
          variants={titleVariants}
          className="text-xl md:text-2xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors duration-300 line-clamp-2 inline-block"
          style={{
            display: "inline-block",
            transformStyle: "preserve-3d"
          }}
        >
          {title.split('').map((char, idx) => (
            <motion.span
              key={idx}
              animate={{
                y: [0, -8, 0, 8, 0],
                rotateX: [0, 10, 0, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.05
              }}
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d"
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h3>
      </motion.h3>

      {/* Description */}
      <motion.p
        variants={descVariants}
        className="text-base-content/60 text-sm md:text-base mb-4 leading-relaxed line-clamp-3"
      >
        {description}
      </motion.p>

      {/* Features - Fixed Overflow Issue */}
      <div className="mb-6 overflow-hidden">
        <Swiper
          loop={true}
          slidesPerView="auto"
          spaceBetween={8}
          centeredSlides={false}
          grabCursor={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="features-slider"
        >
          {features.map((feature, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <div className="bg-primary/10 rounded-full px-3 py-1.5 group-hover:bg-primary/20 transition-all duration-300">
                <span className="text-xs md:text-sm text-primary font-medium whitespace-nowrap">
                  {feature}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Learn More Link */}
      <motion.div variants={linkVariants} whileHover="hover" className="mt-auto">
        <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link">
          <span>Learn More</span>
          <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="absolute top-4 right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-secondary rounded-full" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;