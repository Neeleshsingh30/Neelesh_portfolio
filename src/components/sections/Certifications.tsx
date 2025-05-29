import React from 'react';
import { motion } from 'framer-motion';
import CertificationCard from '../ui/CertificationCard';
import certifications from '../../data/certifications';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto mb-12"
        >
          Certifications & Awards
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          I believe in continuous learning and professional development. Here are some of my key certifications and accomplishments.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard 
              key={certification.id} 
              certification={certification} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;