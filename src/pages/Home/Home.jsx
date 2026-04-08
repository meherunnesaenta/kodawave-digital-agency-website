import React from 'react';
import Hero from '../../component/Home/Hero';
import AnimatedSection from '../../component/AnimatedSection';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ServiceCard from '../../component/card/ServiceCard';
import { servicesData } from '../../data/servicesData';
import Testimonial from '../../component/Testimonial';
import PricingSection from '../../component/PricingSection';
import { testimonialsData } from '../../data/testimonials';
import Header from '../../component/shared/Header';
import About from '../../component/Home/About';

const Home = () => {
    const services = servicesData.services;
    const testimonials = testimonialsData.testimonials;
    return (
        <div>
            <Hero></Hero>

            <section className="py-20 md:py-28 bg-base-100">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Section Header */}
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-semibold text-sm uppercase tracking-wider"
                        >
                            What We Do
                        </motion.span>
                        <Header subText='We offer comprehensive digital solutions to help your business grow and succeed in the modern era.'>Services</Header>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base-content/60 text-lg"
                        >
                        </motion.p>
                    </AnimatedSection>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>

                    {/* View All Services CTA */}
                    <AnimatedSection delay={0.3} className="text-center mt-12">
                        <Link to="/services">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-3 bg-base-200 border border-base-300 rounded-xl text-primary text-bold font-semibold hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                            >
                                View All Services
                                <FaArrowRight />
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-base-200">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Why Choose Us
                        </span>
                        <Header subText=' We combine expertise, innovation, and dedication to deliver exceptional results.'> Benefits With Us</Header>

                    </AnimatedSection>
                        <About></About>
                </div>
            </section>
            {/* Pricing Section */}
            <PricingSection />

            {/* Testimonials Section */}
            <section className="py-20 md:py-28 bg-base-200">
                <div className="container mx-auto px-4 md:px-6">


                    <Testimonial testimonials={testimonials} />
                </div>
            </section>
            
        </div>
    );
};

export default Home;