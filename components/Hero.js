import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center bg-dark pt-16">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        {/* 3D Character Image */}
        <div className="order-1">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image 
                src="/images/character.png" 
                alt="3D Character" 
                width={600} 
                height={600} 
                className="w-full" 
                priority
              />
            </motion.div>
          ) : (
            <div className="w-full h-[600px]"></div>
          )}
        </div>
        
        {/* Text Content */}
        <div className="order-2">
          {isMounted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-gray-300 text-xl mb-4 font-heading">HI, I AM MORGAN, I DESIGN</h2>
              <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4">
                THE PERFECT<br />WEBSITE
              </h1>
              <h3 className="text-gray-300 text-xl mb-12 font-heading">FOR YOUR BUSINESS!</h3>
              
              <div className="mt-28 text-right">
                <p className="text-gray-300 text-lg font-heading tracking-wider">
                  A GRAPHICS DESIGNER<br />
                  THAT SOLVES DESIGN<br />
                  RELATED PROBLEMS.
                </p>
              </div>
            </motion.div>
          ) : (
            <div>
              <h2 className="text-gray-300 text-xl mb-4 font-heading">HI, I AM MORGAN, I DESIGN</h2>
              <h1 className="text-primary text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-4">
                THE PERFECT<br />WEBSITE
              </h1>
              <h3 className="text-gray-300 text-xl mb-12 font-heading">FOR YOUR BUSINESS!</h3>
            </div>
          )}
        </div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[120px] -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 rounded-full filter blur-[120px] -z-10"></div>
    </section>
  );
}
