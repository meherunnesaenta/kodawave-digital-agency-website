import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaArrowRight
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import Logo from './Logo';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  // Quick links
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services links
  const services = [
    'Web Development',
    'SEO Optimization',
    'Online Advertising',
    'UI/UX Design',
    'Mobile Apps',
    'Cloud Solutions',
  ];

  // Social links with theme colors
  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, url: '#', bgColor: '#1877f2' },
    { name: 'Twitter', icon: FaTwitter, url: '#', bgColor: '#1da1f2' },
    { name: 'LinkedIn', icon: FaLinkedinIn, url: '#', bgColor: '#0a66c2' },
    { name: 'Instagram', icon: FaInstagram, url: '#', bgColor: '#e4405f' },
    { name: 'GitHub', icon: FaGithub, url: '#', bgColor: '#333' },
  ];

  // Contact info with icons
  const contactInfo = [
    { icon: MdLocationOn, text: '123 Digital Street, Tech City, TC 12345' },
    { icon: FaEnvelope, text: 'hello@kodawave.com' },
    { icon: FaPhoneAlt, text: '+1 (555) 123-4567' },
    { icon: FaClock, text: 'Mon-Fri: 9AM - 6PM' },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing! ${email}`);
      setEmail('');
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-base-200 pt-16 pb-8 mt-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      {/* Floating Shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
                <Logo></Logo>

            
            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-4">
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-base-100 border border-base-300 focus:outline-none focus:border-primary transition-colors text-base-content"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-3 py-2 bg-gradient-primary text-white rounded-lg text-sm flex items-center gap-1"
                >
                  <FaPaperPlane size={12} />
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-base-content/60 hover:text-primary transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <FaArrowRight size={10} className="text-primary" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg ">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to="/services"
                    className="text-base-content/60 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg">
              Contact Info
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-base-content/60">
                  <info.icon className="text-primary text-lg mt-0.5" />
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-9 h-9 rounded-full bg-base-100 flex items-center justify-center text-base-content/60 hover:text-white transition-all duration-300 group relative overflow-hidden"
                    style={{ position: 'relative' }}
                  >
                    <span className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <social.icon className="relative z-10 text-sm group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent my-8"
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center text-sm text-base-content/50">
          <p>
            &copy; {currentYear} Kodawave. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Cookies Policy
            </Link>
          </div>
          <p className="text-xs flex items-center gap-1">
            Made with <span className="text-accent animate-pulse">❤️</span> for digital excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;