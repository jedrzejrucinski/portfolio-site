'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { artist } from '@/data/projects';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light mb-6">
            Let's Connect
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Ready to create something beautiful together? I'd love to hear about your project 
            and discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-light mb-8">
              Send a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="editorial">Editorial Shoot</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="fashion">Fashion Show</option>
                  <option value="commercial">Commercial Campaign</option>
                  <option value="creative">Creative/Artistic Project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project, timeline, and vision..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent text-white font-light tracking-wide hover:bg-accent/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-2xl lg:text-3xl font-light mb-8">
              Get In Touch
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Email</h3>
                <a 
                  href={`mailto:${artist.email}`}
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  {artist.email}
                </a>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Location</h3>
                <p className="text-gray-600">{artist.location}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Available for travel worldwide
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Social</h3>
                <a 
                  href={`https://instagram.com/${artist.instagram?.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  {artist.instagram}
                </a>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-3">Response Time</h3>
                <p className="text-gray-600">
                  I typically respond to inquiries within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="mt-12 p-6 bg-muted">
              <h3 className="font-serif text-xl font-light mb-4">Services Offered</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Editorial & Fashion Makeup</li>
                <li>• Bridal & Special Events</li>
                <li>• Commercial & Advertising</li>
                <li>• Creative & Artistic Projects</li>
                <li>• Makeup Consultations</li>
                <li>• Set Design Collaboration</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.section 
          className="mt-24 pt-16 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What's your booking process?",
                answer: "I recommend booking 4-6 weeks in advance for most projects. After our initial consultation, I'll provide a detailed quote and timeline."
              },
              {
                question: "Do you travel for projects?",
                answer: "Yes! I'm available for travel worldwide. Travel expenses are discussed during the consultation process."
              },
              {
                question: "What's included in your service?",
                answer: "All makeup application, consultation, and touch-ups during the shoot. I bring my professional kit with high-end products."
              },
              {
                question: "Can you work with my creative vision?",
                answer: "Absolutely! I love collaborating on creative concepts and bringing unique visions to life. Let's discuss your ideas!"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-serif text-lg font-light">
                  {faq.question}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
