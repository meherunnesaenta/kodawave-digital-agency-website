import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import HeroSphere from '../3d/HeroSphere';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    })
  };

  const subheadingText = "We craft exceptional web experiences that drive growth and deliver results.";
  const [displayText, setDisplayText] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < subheadingText.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + subheadingText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, subheadingText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-100 via-base-100 to-primary/5" />

      {/* 3D Sphere */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-40 lg:opacity-100 pointer-events-none">
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

            {/* Main Heading - Letter by Letter Animation */}
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <div className="text-base-content">
                <div className="overflow-hidden inline-block">
                  {["Transform", "Your"].map((word, wordIdx) => (
                    <motion.span
                      key={wordIdx}
                      custom={wordIdx}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block mr-4"
                    >
                      {word.split("").map((letter, letterIdx) => (
                        <motion.span
                          key={letterIdx}
                          custom={letterIdx + wordIdx * 10}
                          variants={letterVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block"
                          style={{ display: 'inline-block' }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
                </div>
                <br />

                <div className="overflow-hidden inline-block">
                  {["Digital", "Presence"].map((word, wordIdx) => (
                    <motion.span
                      key={wordIdx}
                      custom={wordIdx + 2}
                      variants={wordVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block mr-4"
                    >
                      {word.split("").map((letter, letterIdx) => (
                        <motion.span
                          key={letterIdx}
                          custom={letterIdx + wordIdx * 10 + 20}
                          variants={letterVariants}
                          initial="hidden"
                          animate="visible"
                          className="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                          style={{ display: 'inline-block' }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subheading - Typing Animation with Cursor */}
            <motion.div
              variants={itemVariants}
              className="text-base-content/60 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-primary ml-1"
              />
            </motion.div>

            {/* Animated Gradient Text Below Subheading */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-sm text-base-content/40 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
              >
                 500+ Projects Delivered  |  100+ Happy Clients  |  24/7 Support 
              </motion.span>
            </motion.p>

            {/* CTA Buttons - Fixed Height Issue */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="group relative overflow-hidden px-8 py-4 bg-primary text-primary-content rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-glow transition-all duration-300"
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Get Started
                  </motion.span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>

              {/* Watch Demo Button - Fixed: Removed duplicate classes */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-8 py-4 w-50 bg-base-200 border border-base-300 rounded-xl text-primary font-semibold flex items-center justify-center gap-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaPlay size={14} />
                </motion.span>
                <motion.span
                  whileHover={{ letterSpacing: "0.5px" }}
                  transition={{ duration: 0.3 }}
                >
                  Watch Demo
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Simplified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.span
            className="text-xs text-base-content/40 uppercase tracking-wider"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <motion.div
            className="w-5 h-8 border border-base-content/30 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;