import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, MapPin, Calendar, Heart } from 'lucide-react';
import profileImage from 'figma:asset/efff91fe0cb1f1c1ab594d806e529db66a3da699.png';

export function Hero() {
  return (
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center pt-32 pb-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-6xl md:text-8xl mb-4 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent font-bold">Thura Linn</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 text-[32px]">
            Full-stack Developer & Project Manager
          </h2>

        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-pulse"></div>
            
            {/* Profile image */}
            <img
              src={profileImage}
              alt="Thura Linn"
              className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-gray-700/50 shadow-2xl group-hover:border-cyan-400/50 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}