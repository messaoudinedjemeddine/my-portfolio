import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "React", logo: "/skills/react-logo.png" },
    { name: "Node.js", logo: "/skills/nodejs-logo.png" },
    { name: "JavaScript", logo: "/skills/javascript-logo.png" },
    { name: "Python", logo: "/skills/python-logo.png" },
    { name: "CSS", logo: "/skills/css-logo.png" },
    { name: "HTML", logo: "/skills/html-logo.png" },
    { name: "Git", logo: "/skills/git-logo.png" },
    { name: "Docker", logo: "/skills/docker-logo.png" },
    { name: "MongoDB", logo: "/skills/mongodb-logo.png" },
    { name: "PostgreSQL", logo: "/skills/postgresql-logo.png" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of skills to display at a time
  const visibleSkills = 6;

  // Handle navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + skills.length) % skills.length
    );
  };

  // Get the currently visible skills
  const getVisibleSkills = () => {
    return skills.slice(currentIndex, currentIndex + visibleSkills).concat(
      currentIndex + visibleSkills > skills.length
        ? skills.slice(0, (currentIndex + visibleSkills) % skills.length)
        : []
    );
  };

  return (
    <section id="skills" className="py-20 bg-light-background dark:bg-dark-background">
      <h2 className="text-4xl font-bold text-center mb-10 text-light-text dark:text-dark-text">
        Skills
      </h2>
      <div className="relative flex items-center justify-between">
        {/* Left Arrow */}
        <button 
          onClick={handlePrev} 
          className="slider-arrow left-4 absolute"
        >
          ←
        </button>

        {/* Skills Display */}
        <div className="grid grid-cols-6 gap-6 w-full px-16">
          {getVisibleSkills().map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={skill.logo} 
                alt={`${skill.name} Logo`} 
                className="w-16 h-16 mb-4"
              />
              <span className="text-light-text dark:text-dark-text">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={handleNext} 
          className="slider-arrow right-4 absolute"
        >
          →
        </button>
      </div>
    </section>
  );
}
