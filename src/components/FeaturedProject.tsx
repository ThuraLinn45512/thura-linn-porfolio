'use client';

import { motion } from 'motion/react';
import { ExternalLink, Smartphone, Globe, Palette, ArrowRight } from 'lucide-react';
import mockupImage from '../assets/codewall_mockup.png';

export function FeaturedProject() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Project</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            CodeWall Edu: A complete educational ecosystem designed and developed across multiple platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <img 
              src={mockupImage.src} 
              alt="CodeWall Edu Mockup" 
              className="relative rounded-3xl border border-gray-700 shadow-2xl w-full"
            />
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">CodeWall Edu</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                An all-in-one learning management system that empowers students to master modern technologies. 
                I led the entire development cycle—from crafting the brand identity and UI/UX in Figma to building 
                the responsive web platform and the native Android application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <Palette className="text-cyan-400 mb-2" size={24} />
                <h4 className="font-semibold text-white">UI/UX Design</h4>
                <p className="text-sm text-gray-500">Atomic Design System</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <Globe className="text-teal-400 mb-2" size={24} />
                <h4 className="font-semibold text-white">Web Portal</h4>
                <p className="text-sm text-gray-500">React & Tailwind</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                <Smartphone className="text-emerald-400 mb-2" size={24} />
                <h4 className="font-semibold text-white">Android App</h4>
                <p className="text-sm text-gray-500">Native Performance</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="https://codewall-edu.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
              >
                Launch Web App <Globe size={18} />
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.codewall.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white border border-gray-700 rounded-full font-semibold hover:bg-gray-700 transition-all"
              >
                Play Store <Smartphone size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
