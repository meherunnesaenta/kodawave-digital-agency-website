import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { 
  FaArrowRight, 
  FaPlay, 
  FaChartLine, 
  FaShieldAlt, 
  FaRocket 
} from 'react-icons/fa';
import HeroSphere from '../3d/HeroSphere';


const Hero = () => {
  // Floating text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-100 to-primary/5" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 3D Sphere Component */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-50 lg:opacity-100 pointer-events-none">
        <HeroSphere />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Digital Innovation Agency
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span>
                Transform Your
              </span>
              <br />
              <span className="text-base-content">
                Digital Presence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base-content/70 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We craft exceptional web experiences that drive growth, 
              engage users, and deliver measurable results for your business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-4 bg-gradient-primary rounded-xl text-white font-semibold flex items-center justify-center gap-2 shadow-glow"
              >
                <span>Get Started Free</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-base-200 border border-base-300 rounded-xl text-base-content font-semibold flex items-center justify-center gap-2 hover:border-primary/50 transition-all duration-300"
              >
                <FaPlay size={14} />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { number: "500+", label: "Projects Completed", icon: FaRocket },
                { number: "98%", label: "Client Satisfaction", icon: FaChartLine },
                { number: "24/7", label: "Support Available", icon: FaShieldAlt },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon className="text-primary text-xl" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-base-content">{stat.number}</div>
                    <div className="text-xs text-base-content/50">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Cards (Visible on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Floating Card 1 */}
              <motion.div
                animate={floatingAnimation}
                className="absolute -top-20 -left-20 w-64 bg-base-100/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-base-300"
                style={{ animationDelay: "0s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Fast Delivery</h4>
                    <p className="text-xs text-base-content/50">2x faster development</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={floatingAnimation}
                className="absolute -bottom-10 -right-10 w-64 bg-base-100/80 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-base-300"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Expert Team</h4>
                    <p className="text-xs text-base-content/50">10+ years experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                animate={floatingAnimation}
                className="absolute top-1/2 -right-32 w-56 bg-base-100/80 backdrop-blur-lg rounded-2xl p-3 shadow-xl border border-base-300"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs border-2 border-base-100">
                        👤
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold">500+ Happy Clients</p>
                    <p className="text-xs text-base-content/50">Worldwide</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs text-base-content/50">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-base-content/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;