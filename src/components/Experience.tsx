'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function Experience() {
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      title: 'Senior Developer',
      subtitle: 'Cross-platform Development',
      location: 'Hlaing, Myanmar (Burma)',
      period: 'Present',
      highlights: [
        'Over 4 years of experience in developing native Android applications using Kotlin, and Jetpack Compose',
        '2 years experience in development cross platform development using flutter framework',
        '3 years experience in web development using react js and next js',
      ],
    },
    {
      title: 'UI Designer',
      subtitle: 'UI/UX Development',
      period: '2023 - present',
      highlights: [
        '3 years of experience in UI/UX design tools, with expertise in animation, responsive design, and creating design systems',
      ],
    },
    {
      title: 'Senior Instructor',
      subtitle: 'Teaching Experience, Course Creation, and Curriculum Planning',
      period: '2020 - present',
      highlights: [
        'Over 5 years of experience teaching and coaching in programming languages, as well as web development technologies starting from September 24, 2020',
      ],
    },
    {
      title: 'Project Manager',
      subtitle: 'Project Management',
      period: 'Present',
      highlights: [
        '2 year of experience in project management, overseeing ui/ux, android, and web projects',
      ],
    },
    {
      title: 'Digital Marketer',
      subtitle: 'Digital Marketing',
      period: 'present',
      highlights: [
        '4 years of experience in digital marketing and content creation, advertising with ad tools, and audience targeting',
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveIndex(Number(visibleEntry.target.getAttribute('data-index')));
        }
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0.2, 0.4, 0.65],
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

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

        <div className="relative max-w-5xl mx-auto mt-20">
          <div className="absolute left-3 md:left-6 top-3 bottom-10 w-px bg-cyan-400/15">
            <motion.div
              className="w-px bg-gradient-to-b from-cyan-300 via-teal-400 to-emerald-400 shadow-[0_0_18px_rgba(45,212,191,0.75)]"
              initial={{ height: '8%' }}
              animate={{ height: `${((activeIndex + 1) / experiences.length) * 100}%` }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            />
          </div>

          <div className="space-y-28">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative pl-16 md:pl-24 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-45'
                }`}
              >
                <div
                  className={`absolute left-0 md:left-3 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                    activeIndex === index
                      ? 'border-cyan-200 bg-gradient-to-br from-cyan-400 to-emerald-500 shadow-[0_0_30px_rgba(45,212,191,0.9)]'
                      : 'border-cyan-500/60 bg-[#060b15]'
                  }`}
                >
                  <span
                    className={`h-3 w-3 rounded-full transition-all duration-500 ${
                      activeIndex === index
                        ? 'bg-white scale-110 shadow-[0_0_16px_rgba(255,255,255,0.9)]'
                        : 'bg-cyan-500/60'
                    }`}
                  />
                </div>

                <div className="max-w-3xl">
                  <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <span
                      className={`w-fit rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-500 ${
                        activeIndex === index
                          ? 'border-cyan-200/70 bg-gradient-to-r from-cyan-500/25 to-emerald-500/25 text-cyan-50 shadow-[0_0_28px_rgba(45,212,191,0.3)]'
                          : 'border-cyan-500/20 bg-gray-900/30 text-cyan-400/70'
                      }`}
                    >
                      {exp.subtitle}
                    </span>

                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <h3
                    className={`text-3xl font-bold transition-colors duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    {exp.title}
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-4 text-lg leading-8 text-gray-300">
                        <span
                          className={`mt-3 h-2 w-2 flex-shrink-0 rounded-full transition-all duration-500 ${
                            activeIndex === index
                              ? 'bg-teal-300 shadow-[0_0_16px_rgba(45,212,191,0.8)]'
                              : 'bg-cyan-500/50'
                          }`}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
