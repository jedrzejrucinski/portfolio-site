'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { artist } from '@/data/projects';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-light mb-8">
              About Me
            </h1>
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                Hello! I&apos;m Joanna Mrowczynska, a passionate makeup artist with over 8 years of experience 
                in the beauty industry. Based in New York City, I specialize in editorial, fashion, 
                and creative makeup artistry that transforms visions into stunning realities.
              </p>
              <p>
                My journey began with a fascination for the transformative power of makeup. What started 
                as experimenting with colors and textures has evolved into a career dedicated to enhancing 
                natural beauty and creating artistic expressions that tell compelling stories.
              </p>
              <p>
                I believe that makeup is more than just cosmetics—it&apos;s an art form that celebrates 
                individuality and empowers confidence. Whether I&apos;m working on a high-fashion editorial, 
                a bride&apos;s special day, or a creative concept shoot, my goal is always to bring out 
                the unique beauty in every person I work with.
              </p>
            </div>
          </div>

          <motion.div 
            className="relative w-80 h-80 mx-auto overflow-hidden rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={artist.avatar}
              alt={artist.name}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-center mb-16">
            Expertise & Specializations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Editorial Makeup",
                description: "High-fashion and editorial looks for magazines, campaigns, and creative shoots."
              },
              {
                title: "Bridal Beauty",
                description: "Timeless, elegant makeup that enhances natural beauty for your special day."
              },
              {
                title: "Fashion Shows",
                description: "Runway-ready looks that complement designer collections and fashion concepts."
              },
              {
                title: "Special Effects",
                description: "Creative and transformative makeup for film, television, and artistic projects."
              },
              {
                title: "Beauty Campaigns",
                description: "Commercial beauty looks for product launches and brand campaigns."
              },
              {
                title: "Creative Concepts",
                description: "Avant-garde and artistic makeup that pushes creative boundaries."
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="font-serif text-xl font-light mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-center mb-16">
            Professional Journey
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                year: "2024",
                title: "Senior Makeup Artist",
                company: "Freelance",
                description: "Expanded creative portfolio with editorial work for major fashion magazines and beauty campaigns."
              },
              {
                year: "2022-2023",
                title: "Lead Makeup Artist",
                company: "Elite Beauty Studio",
                description: "Managed high-profile clients and led makeup teams for fashion week events and commercial shoots."
              },
              {
                year: "2020-2022",
                title: "Creative Makeup Artist",
                company: "Fashion Forward Agency",
                description: "Specialized in editorial and avant-garde makeup for fashion photography and creative campaigns."
              },
              {
                year: "2016-2020",
                title: "Junior Makeup Artist",
                company: "Beauty Collective NYC",
                description: "Developed foundational skills in bridal, beauty, and special event makeup artistry."
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.year}
                className="flex flex-col lg:flex-row gap-6 lg:gap-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="lg:w-24 flex-shrink-0">
                  <span className="font-serif text-xl text-accent">
                    {experience.year}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-light mb-2">
                    {experience.title}
                  </h3>
                  <p className="text-accent mb-3">
                    {experience.company}
                  </p>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section 
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-light text-center mb-16">
            Get in Touch
          </h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-light mb-4">Contact Details</h3>
                <div className="space-y-3 text-gray-600">
                  <p>
                    <span className="font-medium text-gray-900">Email:</span>{' '}
                    <a href="mailto:hello@makeup-artist.com" className="hover:text-accent transition-colors">
                      hello@makeup-artist.com
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Phone:</span>{' '}
                    <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p>
                    <span className="font-medium text-gray-900">Location:</span>{' '}
                    New York, NY
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-accent transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-accent transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-light mb-4">Services</h3>
              <div className="space-y-2 text-gray-600">
                <p>• Bridal Makeup</p>
                <p>• Editorial & Fashion</p>
                <p>• Special Events</p>
                <p>• Photography Shoots</p>
                <p>• Makeup Lessons</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          className="text-center bg-muted -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 lg:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Ready to bring your vision to life? I&apos;d love to collaborate with you on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hello@makeup-artist.com"
              className="px-8 py-3 bg-accent text-white font-light tracking-wide hover:bg-accent/90 transition-all duration-300 hover-scale-105"
            >
              Send Me an Email
            </a>
            <Link 
              href="/projects"
              className="px-8 py-3 border border-accent text-accent font-light tracking-wide hover:bg-accent hover:text-white transition-all duration-300 hover-scale-105"
            >
              View My Work
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
