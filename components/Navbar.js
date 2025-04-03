import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const opacity = 1 - Math.min(currentScroll / 200, 0.2);
      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className="fixed w-full z-50 backdrop-blur-sm transition-all duration-300"
      style={{ backgroundColor: `rgba(30, 30, 30, ${scrollOpacity})` }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
          </motion.div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Projects", "Experience", "Skills", "Resume"].map((item) => (
            item === "Resume" ? (
              <a
                key={item}
                href="/cv.pdf"
                download="cv.pdf"
                className="text-light-text dark:text-dark-text hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            ) : (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-light-text dark:text-dark-text hover:text-primary transition-colors duration-200"
              >
                {item}
              </Link>
            )
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="#contact"
              className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-all duration-200 flex items-center gap-2"
            >
              Reach Out
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
