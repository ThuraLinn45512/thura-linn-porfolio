import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  chapters: string[];
  project: string;
}

const modules: Module[] = [
  {
    id: 1,
    title: 'Module 1',
    chapters: [
      'Chapter 01 - The Basics',
      'Chapter 02 - Control Statements',
      'Chapter 03 - Arrays'
    ],
    project: 'First Project'
  },
  {
    id: 2,
    title: 'Module 2',
    chapters: [
      'Chapter 04 - Object & Class',
      'Chapter 05 - Inheritance',
      'Chapter 06 - Polymorphism',
      'Chapter 07 - *****',
      'Chapter 08 - *****',
      'Chapter 09 - *****',
      'Chapter 10 - *****',
      'Chapter 11 - *****',
      'Chapter 12 - *****'
    ],
    project: 'Second Project'
  },
  {
    id: 3,
    title: 'Module 3',
    chapters: [
      'Chapter 13 - Inner Class',
      'Chapter 14 - Lambda Function',
      'Chapter 15 - List',
      'Chapter 16 - *****',
      'Chapter 17 - *****',
      'Chapter 18 - *****',
      'Chapter 19 - *****',
      'Chapter 20 - *****',
      'Chapter 21 - *****',
      'Chapter 22 - *****'
    ],
    project: 'Final Project'
  }
];

export function Curriculum() {
  const [expandedModules, setExpandedModules] = useState<Set<number>>(
    new Set([1, 2, 3])
  );

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => {
      const newSet = new Set(prev);
      if (newSet.has(moduleId)) {
        newSet.delete(moduleId);
      } else {
        newSet.add(moduleId);
      }
      return newSet;
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-md p-1">
      <div className="px-1 py-2">
        <h2 className="text-[#121318]">Curriculum</h2>
      </div>
      
      <div className="space-y-1">
        {modules.map((module) => {
          const isExpanded = expandedModules.has(module.id);
          
          return (
            <div key={module.id}>
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full flex items-center gap-2 px-1 py-0 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-[#445861] text-xs">{module.title}</span>
                <ChevronDown
                  className={`w-6 h-6 text-[#1C1B1F] transition-transform ${
                    isExpanded ? 'rotate-0' : '-rotate-90'
                  }`}
                />
              </button>

              {/* Module Content */}
              {isExpanded && (
                <div className="px-1">
                  <ul className="list-disc ml-9 space-y-0">
                    {module.chapters.map((chapter, index) => (
                      <li key={index} className="text-[#445861] text-xs">
                        {chapter}
                      </li>
                    ))}
                    <li className="text-[#445861] text-xs">{module.project}</li>
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
