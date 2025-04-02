import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior UI/UX Designer",
      company: "Creative Agency",
      description: "Leading design projects for major clients, creating user-friendly interfaces, and mentoring junior designers."
    },
    {
      year: "2019 - 2022",
      title: "UI Designer",
      company: "Tech Startup",
      description: "Designed responsive websites and mobile applications, collaborated with development teams, and conducted user testing."
    },
    {
      year: "2017 - 2019",
      title: "Graphic Designer",
      company: "Marketing Firm",
      description: "Created visual concepts for marketing campaigns, designed brand materials, and worked on digital advertisements."
    }
  ];

  return (
    <section id="experience" className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="vertical-timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-10 md:ml-auto' : 'md:pl-10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot left-0 md:left-auto md:right-auto md:-translate-x-1/2 top-5"></div>
              
              {/* Content Box */}
              <motion.div 
                className="pl-8 md:pl-0 bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-primary/50 transition-colors"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(247, 183, 51, 0.1)"
                }}
              >
                <span className="text-primary font-medium">{exp.year}</span>
                <h3 className="text-white text-xl font-bold mt-2">{exp.title}</h3>
                <h4 className="text-gray-400 font-medium">{exp.company}</h4>
                <p className="text-gray-300 mt-3">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
