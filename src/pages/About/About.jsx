import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router';
import { 
  FaTrophy, 
  FaUsers, 
  FaCode, 
  FaGlobe,
  FaArrowRight,
  FaAward,
  FaRocket,
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa';

import { testimonialsData } from '../../data/testimonials';
import AnimatedSection from '../../component/AnimatedSection';
import Testimonial from '../../component/Testimonial';

const About = () => {
  const { testimonials } = testimonialsData;
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  // Company stats with animation
  const stats = [
    { id: 1, label: "Projects Completed", value: 500, suffix: "+", icon: FaCode },
    { id: 2, label: "Happy Clients", value: 350, suffix: "+", icon: FaUsers },
    { id: 3, label: "Years Experience", value: 8, suffix: "", icon: FaRocket },
    { id: 4, label: "Global Reach", value: 25, suffix: "+ Countries", icon: FaGlobe },
  ];

  // Team members
  const teamMembers = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "10+ years of experience in digital innovation",
      avatar: "👨‍💼",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Lead Developer",
      bio: "React & Node.js expert",
      avatar: "👩‍💻",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "James Wilson",
      role: "SEO Specialist",
      bio: "Data-driven SEO strategist",
      avatar: "👨‍🎓",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "UI/UX Designer",
      bio: "Creating beautiful user experiences",
      avatar: "👩‍🎨",
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  // Awards & Recognitions
  const awards = [
    { id: 1, name: "Best Web Agency 2024", year: "2024", icon: FaTrophy },
    { id: 2, name: "Top React Developers", year: "2023", icon: FaAward },
    { id: 3, name: "SEO Excellence Award", year: "2023", icon: FaChartLine },
    { id: 4, name: "Client Choice Award", year: "2022", icon: FaCheckCircle },
  ];

  // Counter animation component
  const Counter = ({ value, suffix }) => {
    const [count, setCount] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    React.useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = value / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return (
      <span ref={ref}>
        {count}{suffix}
      </span>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                About Kodawave
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/60 max-w-3xl mx-auto">
              We're a team of passionate innovators dedicated to transforming ideas into exceptional digital experiences that drive real business growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-10"
              >
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-base-content/70 leading-relaxed">
                  To become the world's most trusted digital innovation partner, empowering businesses of all sizes to achieve their full potential through cutting-edge technology and creative excellence.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-10"
              >
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-20 blur-xl" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-base-content/70 leading-relaxed">
                  To deliver exceptional digital solutions that combine technical excellence, creative innovation, and strategic thinking, helping our clients succeed in the digital age.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-base-200">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Achievements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              By the <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-base-content/60 text-lg">
              We take pride in our accomplishments and the value we bring to our clients.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-6 bg-base-100 rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <stat.icon className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-base-content/60 text-sm">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Meet the <span className="text-primary">Experts</span>
            </h2>
            <p className="text-base-content/60 text-lg">
              Passionate professionals dedicated to your success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-6 bg-base-200 rounded-2xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-4xl shadow-glow"
                  >
                    {member.avatar}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-base-content/50 text-xs">{member.bio}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              Awards & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-base-content/60 text-lg">
              Our excellence has been recognized by industry leaders.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <AnimatedSection key={award.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-base-100 rounded-2xl"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <award.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="font-bold mb-1">{award.name}</h3>
                  <p className="text-primary text-sm">{award.year}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Client Love
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-base-content/60 text-lg">
              Real feedback from real clients about their experience with us.
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Work With Us
                <FaArrowRight />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;