import { motion } from 'motion/react';
import { Code, Palette, Users, TrendingUp, GraduationCap, Globe } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: '4+ years building native Android apps and cross-platform solutions'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: '3 years creating beautiful, responsive design systems'
    },
    {
      icon: GraduationCap,
      title: 'Teaching',
      description: '5+ years teaching programming and web development'
    },
    {
      icon: Users,
      title: 'Project Management',
      description: '2 years managing UI/UX, Android, and web projects'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: '4 years in content creation and audience targeting'
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Fluent in English (C2), Japanese (N5), and Thai'
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
          About <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Full-stack developer with robust problem-solving skills and proven experience in creating and designing software in a test-driven environment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}