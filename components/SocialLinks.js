import { motion } from 'framer-motion';

export default function SocialLinks() {
  const socialLinks = [
    { name: 'Facebook', icon: 'fa-facebook-f', url: 'https://facebook.com/yourprofile' },
    { name: 'Instagram', icon: 'fa-instagram', url: 'https://instagram.com/yourprofile' },
    { name: 'LinkedIn', icon: 'fa-linkedin-in', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://twitter.com/yourprofile' },
    { name: 'WhatsApp', icon: 'fa-whatsapp', url: 'https://wa.me/yourphonenumber' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 dark:bg-dark-card hover:bg-primary transition-all duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fab ${social.icon} text-white text-2xl`}></i>
        </motion.a>
      ))}
    </div>
  );
}
