import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [inView, level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{
            width: `${width}%`,
            transition: 'width 1s ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;