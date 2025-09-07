'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
                Hello! I'm Alexandra Mitchell, a passionate makeup artist with over 8 years of experience 
                in the beauty industry. Based in New York City, I specialize in editorial, fashion, 
                and creative makeup artistry that transforms visions into stunning realities.
              </p>
              <p>
                My journey began with a fascination for the transformative power of makeup. What started 
                as experimenting with colors and textures has evolved into a career dedicated to enhancing 
                natural beauty and creating artistic expressions that tell compelling stories.
              </p>
              <p>
                I believe that makeup is more than just cosmetics—it's an art form that celebrates 
                individuality and empowers confidence. Whether I'm working on a high-fashion editorial, 
                a bride's special day, or a creative concept shoot, my goal is always to bring out 
                the unique beauty in every person I work with.
              </p>
            </div>
          </div>

          <motion.div 
            className="relative aspect-[3/4] overflow-hidden"
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

        {/* Call to Action */}
        <motion.section 
          className="text-center bg-muted -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 lg:py-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-light mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto mb-8">
            Ready to bring your vision to life? I'd love to collaborate with you on your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="px-8 py-3 bg-accent text-white font-light tracking-wide hover:bg-accent/90 transition-all duration-300 hover-scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="/projects"
              className="px-8 py-3 border border-accent text-accent font-light tracking-wide hover:bg-accent hover:text-white transition-all duration-300 hover-scale-105"
            >
              View My Work
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
