import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  FaCheckCircle,
  FaUserTie,
  FaLaptopCode,
  FaChartBar,
  FaPaintBrush,
  FaLinkedin,
  FaTwitter,
  FaEye,
  FaBullseye
} from 'react-icons/fa';

import { testimonialsData } from '../../data/testimonials';
import AnimatedSection from '../../component/AnimatedSection';
import Testimonial from '../../component/Testimonial';
import Header from '../../component/shared/Header';

const About = () => {
  const { testimonials } = testimonialsData;
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  // Company stats with animation
  const stats = [
    { id: 1, label: "Projects Completed", value: 500, suffix: "+", icon: FaCode },
    { id: 2, label: "Happy Clients", value: 350, suffix: "+", icon: FaUsers },
    { id: 3, label: "Years Experience", value: 8, suffix: "", icon: FaRocket },
    { id: 4, label: "Global Reach", value: 25, suffix: "+", icon: FaGlobe },
  ];

  // Team members with React Icons instead of emojis
  const teamMembers = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "10+ years of experience in digital innovation",
      icon: FaUserTie,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 2,
      name: "Maria Garcia",
      role: "Lead Developer",
      bio: "React & Node.js expert",
      icon: FaLaptopCode,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 3,
      name: "James Wilson",
      role: "SEO Specialist",
      bio: "Data-driven SEO strategist",
      icon: FaChartBar,
      social: { linkedin: "#", twitter: "#" }
    },
    {
      id: 4,
      name: "Emily Chen",
      role: "UI/UX Designer",
      bio: "Creating beautiful user experiences",
      icon: FaPaintBrush,
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

  // 3D Tilt effect component instead of hook
  const TiltCard = ({ children, className = "" }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Header subText="We're a team of passionate innovators dedicated to transforming ideas into exceptional digital experiences that drive real business growth.">About Kodawave</Header>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission Section with 3D Effects */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-10 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
                    <FaEye className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    To become the world's most trusted digital innovation partner, empowering businesses of all sizes to achieve their full potential through cutting-edge technology and creative excellence.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 md:p-10 overflow-hidden"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-20 blur-xl" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-secondary flex items-center justify-center mb-6 shadow-glow">
                    <FaBullseye className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    To deliver exceptional digital solutions that combine technical excellence, creative innovation, and strategic thinking, helping our clients succeed in the digital age.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section with 3D Effects */}
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
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative group text-center p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-base-200 hover:border-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      className="relative mb-4 inline-flex"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)"
                      }}
                    >
                      <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                        <stat.icon className="text-white text-2xl" />
                      </div>
                    </motion.div>
                    
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-base-content/60 text-sm">{stat.label}</p>
                  </motion.div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with 3D Effects */}
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
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="relative group text-center p-6 bg-base-200 rounded-2xl overflow-hidden border border-base-300 hover:border-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow relative"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)"
                      }}
                    >
                      <member.icon className="text-white text-3xl" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-base-content/50 text-xs">{member.bio}</p>
                    
                    {/* Social Icons */}
                    <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={member.social.linkedin} className="text-base-content/40 hover:text-primary transition-colors">
                        <FaLinkedin size={16} />
                      </a>
                      <a href={member.social.twitter} className="text-base-content/40 hover:text-primary transition-colors">
                        <FaTwitter size={16} />
                      </a>
                    </div>
                  </motion.div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section with 3D Effects */}
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
                <TiltCard>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group text-center p-6 bg-base-100 rounded-2xl overflow-hidden border border-base-200 hover:border-primary/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow relative"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(20px)"
                      }}
                    >
                      <award.icon className="text-white text-2xl" />
                    </motion.div>
                    
                    <h3 className="font-bold mb-1">{award.name}</h3>
                    <p className="text-primary text-sm">{award.year}</p>
                  </motion.div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <Testimonial testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
};

export default About;