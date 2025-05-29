import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="glass rounded-xl p-6"
    >
      <div className="flex items-start">
        <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400 mr-4">
          <Award size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-400 mb-1">
            {certification.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            {certification.issuer} • {certification.date}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {certification.description}
          </p>
          {certification.link && (
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent-600 hover:text-accent-700 font-medium"
            >
              View Certificate <ExternalLink size={16} className="ml-1" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;