import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillBar from '../ui/SkillBar';
import skills from '../../data/skills';

type SkillCategory = 'all' | 'languages' | 'ml-tools' | 'cloud' | 'erp' | 'Data-tools';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'ml-tools', label: 'ML Tools' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'erp', label: 'ERP & Oracle' },
    { id: 'Data-tools', label: 'Data-tools' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto mb-12"
        >
          My Skills
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {filteredSkills.map((skill, index) => (
            <SkillBar
              key={skill.id}
              name={skill.name}
              level={skill.level}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;