import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData';

import { FaArrowRight } from 'react-icons/fa';
import AnimatedSection from '../../component/AnimatedSection';
import ServiceCard from '../../component/card/ServiceCard';
import PricingSection from '../../component/PricingSection';
import { Link } from 'react-router';

const Services = () => {
  const { services } = servicesData;

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/60 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to help your business grow and succeed in the modern era.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a <span className="text-primary">Custom Solution</span>?
            </h2>
            <p className="text-base-content/60 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a tailored package just for you.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-glow"
              >
                Contact Our Team
                <FaArrowRight />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;