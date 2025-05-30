import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Table } from 'lucide-react';

const About: React.FC = () => {
  const facts = [
    { 
      icon: <Briefcase size={24} />, 
      label: 'month Internship Experience', 
      value: '3+' 
    },
    { 
      icon: <Award size={24} />, 
      label: 'Projects Completed', 
      value: '20+' 
    },
    { 
      icon: <GraduationCap size={24} />, 
      label: 'Certifications', 
      value: '10+' 
    },
    { 
      icon: <Table size={24} />, 
      label: 'Rows processed', 
      value: '100k+' 
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto mb-12"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/assets/portfolio-image.jpg"
                  alt="Neelesh working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary-600 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-600 rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Data Analyst & Machine learning Engineer
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Hi, I’m Neelesh Singh — a passionate and results-driven data analyst with a deep interest in transforming raw data into actionable insights. Currently pursuing a B.Tech in Computer Technology (AI Specialization) at Sage University Indore, I specialize in data analytics, artificial intelligence, and machine learning.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Over the years, I’ve developed hands-on experience in Python, SQL, Power BI, and advanced machine learning frameworks like Scikit-learn, TensorFlow, and MySQL. Through impactful internships and academic projects, I’ve worked on real-world challenges in airline performance analysis, e-commerce sales dashboards, and predictive modeling—delivering insights that support smarter decisions and better outcomes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-4 text-center group hover:bg-primary-600 dark:hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <div className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-400 mb-3 mx-auto group-hover:bg-white group-hover:text-primary-600 transition-all duration-300">
                    {fact.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-all duration-300">
                    {fact.value}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/80 transition-all duration-300">
                    {fact.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;