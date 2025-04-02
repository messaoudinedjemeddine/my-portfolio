import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: "UI/UX Design Mastery",
      issuer: "Design Academy",
      date: "2023",
      description: "Advanced techniques in user interface and experience design."
    },
    {
      title: "Web Development Certification",
      issuer: "Tech Institute",
      date: "2022",
      description: "Full-stack web development with modern frameworks."
    },
    {
      title: "Creative Direction",
      issuer: "Creative Arts College",
      date: "2021",
      description: "Strategic leadership in design and creative projects."
    },
    {
      title: "3D Modeling Expert",
      issuer: "Digital Arts Foundation",
      date: "2020",
      description: "Advanced 3D character and environment creation."
    },
  ];

  return (
    <section id="certifications" className="bg-dark py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-primary text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 10px 25px -5px rgba(247, 183, 51, 0.1)",
                borderColor: "rgba(247, 183, 51, 0.5)"
              }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <motion.div 
                  className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15L8.5 10L15.5 10L12 15Z" fill="#F7B733"/>
                    <path d="M5 5H19V19H5V5Z" stroke="#F7B733" strokeWidth="2"/>
                  </svg>
                </motion.div>
                <h3 className="text-white text-xl font-bold">{cert.title}</h3>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-400">{cert.issuer}</span>
                  <span className="text-primary">{cert.date}</span>
                </div>
              </div>
              <p className="text-gray-300 mt-auto">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
