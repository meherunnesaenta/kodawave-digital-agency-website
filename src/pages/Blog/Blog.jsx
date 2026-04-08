import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendar, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';
import { blogData } from '../../data/blogData';
import AnimatedSection from '../../component/AnimatedSection';
import Header from '../../component/shared/Header';

const Blog = () => {
  const { posts } = blogData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection>
            <Header subText="Insights, stories, and expert advice on digital innovation, development, and design.">Our Blog</Header>
          </AnimatedSection>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-base-100 sticky top-16 z-20 backdrop-blur-lg bg-base-100/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-base-200 border border-base-300 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-primary text-white shadow-glow'
                      : 'bg-base-200 text-base-content/60 hover:text-base-content'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-base-content/60">No articles found. Try a different search term.</p>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group bg-base-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Featured Image */}
                  <Link to={`/blog/${post.id}`}>
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-primary text-white text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-base-content/50 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendar size={10} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaUser size={10} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock size={10} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-xl font-bold mb-2 text-base-content group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-base-content/60 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <Link to={`/blog/${post.id}`}>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
                      >
                        Read More
                        <FaArrowRight size={12} />
                      </motion.span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;