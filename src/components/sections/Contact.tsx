import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field if user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        // Reset submission status after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title text-center mx-auto mb-12"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out through the contact form or connect with me directly via email or social media.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">Email</h4>
                    <a 
                      href="mailto:neeleshchoursiya0786@gmail.com" 
                      className="text-gray-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      neeleshchoursiya0786@gmail.com
                    </a>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href="https://linkedin.com/in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a
                      href="https://twitter.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-400 mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                    <Send size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-green-800 dark:text-green-400 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-green-700 dark:text-green-500">
                    Thank you for reaching out. I'll get back to you as soon as possible!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`block w-full pl-10 pr-3 py-3 border ${
                          errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className={`block w-full pl-10 pr-3 py-3 border ${
                          errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <div className="absolute top-3 left-3 text-gray-500">
                        <MessageSquare size={18} />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows={5}
                        className={`block w-full pl-10 pr-3 py-3 border ${
                          errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                        } rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary w-full flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;