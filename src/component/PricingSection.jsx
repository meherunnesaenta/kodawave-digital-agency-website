import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from './card/PricingCard';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router';


const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      name: "Starter",
      price: 499,
      yearlyPrice: 399,
      icon: "🚀",
      isPopular: false,
      features: [
        "Landing Page (1 page)",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Mobile Responsive Design",
        "1 Month Support",
        "Basic Analytics"
      ]
    },
    {
      id: 2,
      name: "Growth",
      price: 1499,
      yearlyPrice: 1199,
      icon: "📈",
      isPopular: true,
      features: [
        "Full Website (5 pages)",
        "Advanced SEO Optimization",
        "Blog Setup & Integration",
        "Analytics Dashboard",
        "Speed Optimization",
        "3 Months Support",
        "Social Media Integration"
      ]
    },
    {
      id: 3,
      name: "Premium",
      price: 3499,
      yearlyPrice: 2799,
      icon: "👑",
      isPopular: false,
      features: [
        "Custom Web Application",
        "E-commerce Integration",
        "SEO + Ads Strategy",
        "1 Year Priority Support",
        "24/7 Monitoring",
        "Unlimited Revisions",
        "Dedicated Project Manager"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-base-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Flexible
            </span>
            <span className="text-base-content"> Pricing Options</span>
          </h2>
          <p className="text-base-content/60 text-lg">
            Choose the perfect plan for your business needs. All plans include core features.
          </p>
        </AnimatedSection>

        {/* Billing Toggle */}
        <AnimatedSection delay={0.1} className="flex justify-center mb-12">
          <div className="bg-base-200 p-1 rounded-full inline-flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                !isYearly
                  ? 'bg-gradient-primary text-white shadow-md'
                  : 'text-base-content/60 hover:text-base-content'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isYearly
                  ? 'bg-gradient-primary text-white shadow-md'
                  : 'text-base-content/60 hover:text-base-content'
              }`}
            >
              Yearly <span className="text-xs text-primary">Save 20%</span>
            </button>
          </div>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              index={index}
              isYearly={isYearly}
            />
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection delay={0.3} className="text-center mt-12">
          <p className="text-base-content/50 text-sm">
            All plans include free setup, SSL certificate, and 24/7 customer support.
            <br />
            Need a custom plan? <Link to="/contact" className="text-primary hover:underline">Contact us</Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;