import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "Windows", logo: "/images/skills/windows.png" },
    { name: "MacOs", logo: "/images/skills/macos.png" },
    { name: "JavaScript", logo: "/images/skills/js.png" },
    { name: "HTML", logo: "/images/skills/html.png" },
    { name: "CSS", logo: "/images/skills/css.png" },
    { name: "MySQL", logo: "/images/skills/sql.png" },
    { name: "Git", logo: "/images/skills/git.png" },
    { name: "PHP", logo: "/images/skills/php.png" },
    { name: "Google Workspace", logo: "/images/skills/google.png" },
    { name: "Wireshark", logo: "/images/skills/wireshark.png" },
    { name: "Microsoft Office", logo: "/images/skills/office.png" },
    { name: "Adobe Pack", logo: "/images/skills/adobe.png" },
    { name: "Linux", logo: "/images/skills/linux.png" },
    { name: "Bootstrap", logo: "/images/skills/bootstrap.png" },
    { name: "Tailwind", logo: "/images/skills/tailwind.png" },
    { name: "Cisco Packet Tracer", logo: "/images/skills/cisco.png" }
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
