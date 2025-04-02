import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Web Design",
      image: "/images/project1.jpg",
      description: "Modern e-commerce platform with seamless user experience."
    },
    {
      title: "Mobile Banking App",
      category: "UI/UX Design",
      image: "/images/project2.jpg",
      description: "Intuitive banking application focused on security and ease of use."
    },
    {
      title: "Corporate Branding",
      category: "Branding",
      image: "/images/project3.jpg",
      description: "Complete brand identity for a tech startup."
    },
  ];

  return (
    <section id="projects" className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
            >
              <div className="relative h-60">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-dark px-4 py-2 rounded font-bold">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary text-sm">{project.category}</span>
                <h3 className="text-white text-xl font-bold mt-2">{project.title}</h3>
                <p className="text-gray-300 mt-3">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* GitHub Link */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary mx-auto"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </motion.svg>
            <p className="mt-2 text-gray-300">View more on GitHub</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
