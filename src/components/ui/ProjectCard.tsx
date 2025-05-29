import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  details: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className="glass rounded-xl overflow-hidden cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-400 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div
                  className="h-64 bg-cover bg-center rounded-t-xl"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <button
                  className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Details</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.details}</p>
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline flex items-center"
                    >
                      <Github size={18} className="mr-2" /> View Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary flex items-center"
                    >
                      <ExternalLink size={18} className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;