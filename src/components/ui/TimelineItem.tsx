import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface TimelineItemData {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
  logo?: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="timeline-item"
    >
      <div className="timeline-dot"></div>
      <div className="mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400">
            {item.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 md:ml-4">
            {item.date}
          </span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          {item.company}
        </p>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        {item.description}
      </p>
    </motion.div>
  );
};

export default TimelineItem;