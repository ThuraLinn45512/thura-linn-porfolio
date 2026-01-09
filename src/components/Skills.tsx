import { Layers, Figma, Palette, Code, Users, Zap } from 'lucide-react';

const skillCategories = [
  {
    title: 'Design Tools',
    icon: Figma,
    skills: [
      { name: 'Figma', level: 95 },
      { name: 'Adobe XD', level: 90 },
      { name: 'Sketch', level: 85 },
      { name: 'Photoshop', level: 88 },
    ],
  },
  {
    title: 'Design Skills',
    icon: Palette,
    skills: [
      { name: 'UI Design', level: 95 },
      { name: 'UX Research', level: 90 },
      { name: 'Prototyping', level: 92 },
      { name: 'Design Systems', level: 88 },
    ],
  },
  {
    title: 'Development',
    icon: Code,
    skills: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'React Basics', level: 75 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Animations', level: 80 },
    ],
  },
];

const softSkills = [
  { icon: Users, title: 'Collaboration', description: 'Working effectively with cross-functional teams' },
  { icon: Zap, title: 'Problem Solving', description: 'Finding creative solutions to complex challenges' },
  { icon: Layers, title: 'Systems Thinking', description: 'Building scalable and consistent design systems' },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-blue-600 mb-2">Expertise</p>
          <h2 className="text-slate-900 mb-4">
            Skills & Tools
          </h2>
          <p className="text-slate-600 text-lg">
            A comprehensive toolkit built through years of experience and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-slate-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-700 text-sm">{skill.name}</span>
                        <span className="text-slate-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-white mb-2">Soft Skills</h3>
            <p className="text-blue-200">
              Beyond technical abilities, I bring these qualities to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-800/50 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-300" />
                  </div>
                  <h4 className="text-white mb-2">{skill.title}</h4>
                  <p className="text-blue-200 text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
