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
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4"
                        >
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                                Services
                            </span>
                            <span className="text-base-content"> We Provide</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base-content/60 text-lg"
                        >
                            We offer comprehensive digital solutions to help your business grow and succeed in the modern era.
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
                                className="inline-flex items-center gap-2 px-8 py-3 bg-base-200 border border-base-300 rounded-xl text-base-content font-semibold hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                            >
                                View All Services
                                <FaArrowRight />
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 md:py-28 bg-base-200">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                                Benefits
                            </span>
                            <span className="text-base-content"> of Working With Us</span>
                        </h2>
                        <p className="text-base-content/60 text-lg">
                            We combine expertise, innovation, and dedication to deliver exceptional results.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "⚡", title: "Fast Delivery", desc: "Quick turnaround without compromising quality" },
                            { icon: "💎", title: "Quality Assurance", desc: "Rigorous testing and quality checks" },
                            { icon: "🛡️", title: "Secure Solutions", desc: "Enterprise-grade security standards" },
                            { icon: "🎯", title: "Results Driven", desc: "Focused on achieving your business goals" }
                        ].map((benefit, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="text-center p-6 bg-base-100 rounded-2xl shadow-lg"
                                >
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-base-content/60 text-sm">{benefit.desc}</p>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
            {/* Pricing Section */}
            <PricingSection />

            {/* Testimonials Section */}
            <section className="py-20 md:py-28 bg-base-200">
                <div className="container mx-auto px-4 md:px-6">
                    <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                            What Our <span className="text-primary">Clients Say</span>
                        </h2>
                        <p className="text-base-content/60 text-lg">
                            Don't just take our word for it. Here's what our clients think about working with us.
                        </p>
                    </AnimatedSection>

                    <Testimonial testimonials={testimonials} />
                </div>
            </section>
            {/* CTA Section */}
            <section className="py-20 bg-gradient-primary">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you achieve your digital goals.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started Today →
                            </motion.button>
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default Home;