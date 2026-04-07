import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import AnimatedSection from '../../component/AnimatedSection';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Us",
      details: "hello@kodawave.com",
      sub: "support@kodawave.com",
      color: "from-primary to-secondary"
    },
    {
      icon: FaPhone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      sub: "Mon-Fri, 9AM-6PM",
      color: "from-secondary to-accent"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Us",
      details: "123 Digital Street",
      sub: "Tech City, TC 12345",
      color: "from-accent to-primary"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: "Monday - Friday",
      sub: "9:00 AM - 6:00 PM",
      color: "from-primary to-secondary"
    }
  ];

  const socialLinks = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaInstagram, url: "#", label: "Instagram" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/60 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Let's bring your ideas to life.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-6 bg-base-200 rounded-2xl"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-glow`}>
                    <info.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                  <p className="text-base-content/70">{info.details}</p>
                  <p className="text-sm text-base-content/50">{info.sub}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-base-200 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Send us a <span className="text-primary">Message</span>
                </h2>
                
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-success text-xl" />
                    <p className="text-success">Thank you! We'll get back to you soon.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-base-100 border border-base-300 focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-base-100 border border-base-300 focus:outline-none focus:border-primary transition-colors"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-base-100 border border-base-300 focus:outline-none focus:border-primary transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-base-100 border border-base-300 focus:outline-none focus:border-primary transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-base-100 border border-base-300 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-glow disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane size={14} />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-base-300">
                  <h3 className="text-center mb-4">Follow Us</h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-base-100 flex items-center justify-center text-base-content/60 hover:bg-gradient-primary hover:text-white transition-all duration-300"
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Google Map */}
            <AnimatedSection delay={0.2}>
              <div className="bg-base-200 rounded-2xl overflow-hidden h-full">
                <div className="p-6 md:p-8 border-b border-base-300">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    Find Us <span className="text-primary">Here</span>
                  </h2>
                  <p className="text-base-content/60 mt-2">
                    Visit our office for a cup of coffee and discuss your ideas.
                  </p>
                </div>
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.1583091352!2d-74.11976397304688!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-primary mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready for a Free Consultation?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Schedule a Call →
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;