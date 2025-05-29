import React from 'react';
import { motion } from 'framer-motion';
import TimelineItem from '../ui/TimelineItem';
import experience from '../../data/experience';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto mb-12"
        >
          Professional Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-16"
        >
          My professional journey has equipped me with a diverse skill set and experience across AI, data science, and enterprise applications.
        </motion.p>

        <div className="max-w-3xl mx-auto mt-8 pl-6">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;