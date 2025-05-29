import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Rocket, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="text-cyan-400">Neelesh Singh</span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8">
                I am a{' '}
                <span className="text-cyan-400 font-medium">
                  <Typewriter
                    words={[
                      'Data Analyst',
                      'Machine Learning Engineer',
                      'Python Developer',
                      'Tech Enthusiast',
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-300 text-lg mb-10 max-w-lg"
            >
              Leveraging data, AI, and automation to turn complex problems into
              impactful insights and smart solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="/resume.pdf"
                className="btn btn-primary flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} className="mr-2" /> View Resume
              </a>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-outline flex items-center cursor-pointer"
              >
                <Rocket size={18} className="mr-2" /> Explore Projects
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-secondary flex items-center cursor-pointer"
              >
                <Mail size={18} className="mr-2" /> Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="md:w-2/5"
          >
            <div className="w-full aspect-square rounded-full border-8 border-cyan-400/20 overflow-hidden animate-float relative">
              {/* <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEaFIOgj3Ys1g/profile-displayphoto-shrink_800_800/B4DZXV2W8fG4Ac-/0/1743049553450?e=1752710400&v=beta&t=HbqYKL56bsUOfPK9BrRmWXGMiwpxmWZu55-TtT9iq8Y"
                alt="Neelesh Singh"
                className="w-full h-full object-cover"
                loading="lazy"
              />  */}
              <img
                src="/assets/profile.jpg"
                 alt="Neelesh Singh"
                className="w-full h-full object-cover"
                />

              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

