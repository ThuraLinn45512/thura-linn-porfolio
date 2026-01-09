import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Senior Developer',
      subtitle: 'Cross-platform Development',
      location: 'Hlaing, Myanmar (Burma)',
      period: 'Present',
      highlights: [
        'Over 4 years of experience in developing native Android applications using Kotlin, and Jetpack Compose',
        '2 years experience in development cross platform development using flutter framework',
        '3 years experience in web development using react js and next js'
      ]
    },
    {
      title: 'UI Designer',
      subtitle: 'UI/UX Development',
      period: '2023 - present',
      highlights: [
        '3 years of experience in UI/UX design tools, with expertise in animation, responsive design, and creating design systems'
      ]
    },
    {
      title: 'Senior Instructor',
      subtitle: 'Teaching Experience, Course Creation, and Curriculum Planning',
      period: '2020 - present',
      highlights: [
        'Over 5 years of experience teaching and coaching in programming languages, as well as web development technologies starting from September 24, 2020'
      ]
    },
    {
      title: 'Project Manager',
      subtitle: 'Project Management',
      period: 'Present',
      highlights: [
        '2 year of experience in project management, overseeing ui/ux, android, and web projects'
      ]
    },
    {
      title: 'Digital Marketer',
      subtitle: 'Digital Marketing',
      period: 'present',
      highlights: [
        '4 years of experience in digital marketing and content creation, advertising with ad tools, and audience targeting'
      ]
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
          Professional <span className="bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
          A proven track record across development, design, education, and management
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full border-4 border-gray-900"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl mb-1">{exp.title}</h3>
                  <p className="text-teal-400 italic mb-2">{exp.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2 text-gray-400">

                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 ml-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-gray-300 flex gap-3">
                    <span className="text-teal-400 mt-1.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}