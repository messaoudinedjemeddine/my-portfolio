import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-primary font-bold text-3xl">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L80 20L50 80L20 20Z" fill="#F7B733" stroke="#F7B733" strokeWidth="2"/>
            </svg>
          </a>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#home" legacyBehavior>
            <a className="text-primary font-heading font-medium">HOME</a>
          </Link>
          <Link href="#projects" legacyBehavior>
            <a className="text-white hover:text-primary transition-colors font-heading font-medium">PROJECT</a>
          </Link>
          <Link href="#about" legacyBehavior>
            <a className="text-white hover:text-primary transition-colors font-heading font-medium">ABOUT</a>
          </Link>
          <Link href="#contact" legacyBehavior>
            <a className="text-white hover:text-primary transition-colors font-heading font-medium">CONTACT</a>
          </Link>
        </div>
        
        {/* CTA Button */}
        {isMounted ? (
          <div className="relative">
            <Link href="#contact" legacyBehavior>
              <a>
                <motion.button 
                  className="bg-primary text-dark font-bold py-2 px-6 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  REACH OUT
                </motion.button>
              </a>
            </Link>
            <motion.div 
              className="absolute -right-20 top-6 text-primary font-handwriting text-xl rotate-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              click me
            </motion.div>
            <motion.div 
              className="absolute -right-2 top-5"
              animate={{ 
                y: [0, -5, 0], 
                rotate: [0, 10, 0] 
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#F7B733" strokeWidth="2"/>
              </svg>
            </motion.div>
          </div>
        ) : (
          <button className="bg-primary text-dark font-bold py-2 px-6 rounded-lg">
            REACH OUT
          </button>
        )}
      </div>
    </nav>
  );
}
