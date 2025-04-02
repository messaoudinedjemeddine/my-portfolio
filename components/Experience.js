import { motion } from 'framer-motion';

export default function Experience() {
  // Array of random experiences
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2020 - Dec 2021",
      description: "Developed responsive websites and optimized user interfaces using React and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      company: "Cloud Innovators",
      duration: "Feb 2019 - Dec 2020",
      description: "Built scalable APIs and managed databases using Node.js, Express, and MongoDB.",
    },
    {
      title: "Full Stack Developer",
      company: "Startup Hub",
      duration: "Jan 2022 - Present",
      description: "Led the development of full-stack web applications, integrating frontend and backend technologies.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-light-card dark:bg-dark-card">
      <h2 className="text-4xl font-bold text-center mb-10 text-light-text dark:text-dark-text">
        Experience
      </h2>
      
      <div className="timeline-container relative container mx-auto px-4">
        {/* Vertical Timeline Line */}
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full bg-gray-300 dark:bg-gray-600"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-20">
            {/* Timeline Dot */}
            <div 
              className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"
              style={{ top: `${index * 25}%` }}
            ></div>

            {/* Experience Card */}
            <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} p-6`}>
              <motion.div 
                className="bg-light-card dark:bg-dark-card p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Card Content */}
                <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                <p className="text-sm text-light-text dark:text-dark-text font-semibold">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                <p className="mt-4 text-light-text dark:text-dark-text">{exp.description}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
