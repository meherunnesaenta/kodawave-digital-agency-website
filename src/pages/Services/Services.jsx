import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../../data/servicesData';
import { FaArrowRight, FaTimes, FaTh, FaBars } from 'react-icons/fa';
import AnimatedSection from '../../component/AnimatedSection';
import ServiceCard from '../../component/card/ServiceCard';
import PricingSection from '../../component/PricingSection';
import { Link } from 'react-router';
import Header from '../../component/shared/Header';

const Services = () => {
  const { services } = servicesData;
  const [selectedCard, setSelectedCard] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <Header 
              badge="WHAT WE OFFER"
              subText="Comprehensive digital solutions tailored to help your business grow and succeed in the modern era."
            >
              Our <span className="text-primary">Services</span>
            </Header>
          </AnimatedSection>
        </div>
      </section>

      {/* All Services Gallery Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Gallery Header with Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
            <div>
              <p className="text-base-content/60 text-sm">
                Showing <span className="font-semibold text-primary">{services.length}</span> services
              </p>
            </div>
            
            {/* Gallery Controls */}
            <div className="flex gap-2 bg-base-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'text-base-content/60 hover:text-base-content'
                }`}
              >
                <FaTh size={14} />
                Grid View
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  viewMode === 'masonry'
                    ? 'bg-gradient-primary text-white shadow-glow'
                    : 'text-base-content/60 hover:text-base-content'
                }`}
              >
                <FaBars size={14} />
                Masonry View
              </button>
            </div>
          </div>

          {/* Gallery Grid - Grid View */}
          {viewMode === 'grid' ? (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.05 }
                    }
                  }}
                  whileHover={{ y: -8 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCard(service)}
                  className="cursor-pointer"
                >
                  <ServiceCard service={service} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Gallery Grid - Masonry View */
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.4, delay: index * 0.05 }
                    }
                  }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedCard(service)}
                  className="break-inside-avoid cursor-pointer"
                >
                  <ServiceCard service={service} index={index} />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* View More Button */}
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-3 bg-gradient-primary text-white rounded-xl font-semibold shadow-glow flex items-center gap-2 mx-auto"
            >
              <span>Load More Services</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Need a <span className="text-gradient">Custom Solution</span>?
            </h2>
            <p className="text-base-content/60 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a tailored package just for you.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-glow hover:shadow-xl transition-all duration-300"
              >
                Contact Our Team
                <FaArrowRight />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 p-2"
              >
                <FaTimes size={24} />
              </button>
              
              {/* Modal Content */}
              <div className="transform transition-all duration-300">
                <ServiceCard service={selectedCard} index={0} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;