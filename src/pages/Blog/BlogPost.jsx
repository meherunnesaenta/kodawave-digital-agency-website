import React from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaTag, FaShare } from 'react-icons/fa';

import { blogData } from '../../data/blogData';
import AnimatedSection from '../../component/AnimatedSection';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-base-content/60 mb-8">Article not found</p>
          <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection>
            {/* Back Button */}
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-primary mb-6 hover:gap-3 transition-all"
            >
              <FaArrowLeft size={14} />
              Back to Blog
            </button>

            {/* Category */}
            <span className="inline-block px-4 py-1 bg-gradient-primary text-white text-sm rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-base-content/60 mb-8">
              <span className="flex items-center gap-2">
                <FaUser className="text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendar className="text-primary" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-primary" />
                {post.readTime}
              </span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-8 border-t border-base-300">
              <span className="flex items-center gap-2 text-base-content/60">
                <FaTag className="text-primary" />
                Tags:
              </span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-base-200 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Share Button */}
              <button className="ml-auto inline-flex items-center gap-2 px-4 py-2 bg-base-200 rounded-lg hover:bg-primary hover:text-white transition-all">
                <FaShare size={14} />
                Share
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-12 bg-base-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto flex items-center gap-6 p-6 bg-base-100 rounded-2xl">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl shadow-glow">
              {post.authorAvatar}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">{post.author}</h3>
              <p className="text-primary text-sm mb-2">Author</p>
              <p className="text-base-content/60 text-sm">
                Digital expert with years of experience in the industry, passionate about sharing knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 bg-base-100">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Related <span className="text-primary">Articles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogData.posts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map(relatedPost => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-base-200 rounded-xl overflow-hidden"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <span className="text-primary text-sm">Read More →</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;