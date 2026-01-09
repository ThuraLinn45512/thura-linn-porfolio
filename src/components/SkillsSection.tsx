import { motion } from 'motion/react';
import { Code2, Blocks, Palette, Box, FolderKanban, Megaphone, GraduationCap, Server, Cloud } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      skills: ['Java', 'Kotlin', 'Dart', 'PHP', 'JavaScript', 'Python'],
      expert: ['Java', 'Kotlin']
    },
    {
      icon: Blocks,
      title: 'Frameworks',
      skills: ['Android', 'Flutter', 'Laravel', 'Spring', 'Next JS'],
      expert: ['Android']
    },
    {
      icon: Palette,
      title: 'Graphic Designs',
      skills: ['Figma', 'Photoshop', 'Illustrator'],
      expert: []
    },
    {
      icon: Box,
      title: 'UI/UX',
      skills: ['Figma', 'Framer Motion'],
      expert: ['Figma']
    },
    {
      icon: FolderKanban,
      title: 'Project Management',
      skills: ['GitHub', 'Linear', 'Trello', 'Notion'],
      expert: ['Github', 'Linear']
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      skills: ['Content Creation and Planning', 'Video Editing', 'Strategy Ads'],
      expert: ['Content Creation and Planning']
    },
    {
      icon: GraduationCap,
      title: 'Teaching',
      skills: ['Computer Science related technologies', 'Android, UI UX', 'Web Development & Flutter'],
      expert: ['Android, UI UX, Web Development & Flutter']
    },
    {
      icon: Server,
      title: 'Additional Skills',
      skills: ['Linux Administrator'],
      expert: []
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      skills: ['Google Cloud'],
      expert: []
    }
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
          Skills & <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Expertise</span>
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          A comprehensive skill set spanning development, design, and management
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <category.icon size={20} className="text-white" />
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => {
                  const isExpert = category.expert.some(expertSkill => 
                    skill.toLowerCase().includes(expertSkill.toLowerCase())
                  );
                  
                  return (
                    <div
                      key={skillIndex}
                      className={`inline-block mr-2 mb-2 px-3 py-1.5 rounded-full text-sm ${
                        isExpert
                          ? 'bg-gradient-to-r from-cyan-500 to-emerald-600 text-white'
                          : 'bg-gray-700 text-gray-300'
                      }`}
                    >
                      {skill}
                      {isExpert && <span className="ml-1 text-xs">⭐</span>}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            ⭐ = Expert Level Skills
          </p>
        </div>
      </motion.div>
    </div>
  );
}