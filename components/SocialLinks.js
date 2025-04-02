import { motion } from 'framer-motion';

export default function SocialLinks() {
  const socialLinks = [
    { name: 'Facebook', icon: 'facebook-f', url: 'https://facebook.com/yourprofile' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/yourprofile' },
    { name: 'LinkedIn', icon: 'linkedin-in', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourprofile' },
    { name: 'WhatsApp', icon: 'whatsapp', url: 'https://wa.me/yourphonenumber' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {socialLinks.map((social) => (
        <motion.a 
          key={social.name} 
          href={social.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-primary hover:bg-primary hover:text-dark transition-all duration-300"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fab fa-${social.icon} text-lg`}></i>
        </motion.a>
      ))}
    </div>
  );
}
