'use client';

import { motion } from 'motion/react';
import { GraduationCap, Calendar, Languages } from 'lucide-react';

export function Education() {
  const languages = [
    { name: 'English', level: 'B2', color: 'from-cyan-400 to-teal-600' },
    { name: 'Japanese', level: 'N5', color: 'from-emerald-400 to-green-600' },
    { name: 'Thai', level: 'Basic', color: 'from-teal-400 to-cyan-600' }
  ];

  return (
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl mb-6 text-center">
          Education & <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Languages</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-2xl">Education</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl mb-1">Bachelor of Information Technology (IT)</h4>
                <p className="text-teal-400 mb-1">SouthEast Bangkok University (SBU)</p>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Calendar size={16} />
                  <span>2025 - 2026 (Ongoing)</span>
                </div>
                <p className="text-gray-400 text-sm italic">Top-up Program</p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-xl mb-1">Fourth Year Student (B.C.Sc.)</h4>
                <p className="text-teal-400 mb-1">University of Computer Studies, Hinthada (UCSH)</p>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Calendar size={16} />
                  <span>2016 - 2019</span>
                </div>
                <p className="text-gray-400 text-sm">Successfully completed the 4th year of a 5-year program.</p>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center">
                <Languages size={24} className="text-white" />
              </div>
              <h3 className="text-2xl">Languages</h3>
            </div>

            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg">{lang.name}</span>
                    <span className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${lang.color} text-white`}>
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: lang.level === 'B2' ? '75%' : lang.level === 'N5' ? '60%' : '40%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
