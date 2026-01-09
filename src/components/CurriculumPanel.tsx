import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Book, Code, Layers, CheckCircle2, Circle, Lock } from 'lucide-react';

interface Chapter {
  id: string;
  title: string;
  completed: boolean;
  locked: boolean;
}

interface Module {
  id: string;
  title: string;
  chapters: Chapter[];
  project?: {
    title: string;
    completed: boolean;
    locked: boolean;
  };
  progress: number;
}

const curriculumData: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1',
    progress: 75,
    chapters: [
      { id: 'ch-01', title: 'The Basics', completed: true, locked: false },
      { id: 'ch-02', title: 'Control Statements', completed: true, locked: false },
      { id: 'ch-03', title: 'Arrays', completed: true, locked: false },
    ],
    project: { title: 'First Project', completed: false, locked: false },
  },
  {
    id: 'module-2',
    title: 'Module 2',
    progress: 45,
    chapters: [
      { id: 'ch-04', title: 'Object & Class', completed: true, locked: false },
      { id: 'ch-05', title: 'Inheritance', completed: true, locked: false },
      { id: 'ch-06', title: 'Polymorphism', completed: false, locked: false },
      { id: 'ch-07', title: 'Abstraction', completed: false, locked: false },
      { id: 'ch-08', title: 'Encapsulation', completed: false, locked: false },
      { id: 'ch-09', title: 'Interfaces', completed: false, locked: false },
      { id: 'ch-10', title: 'Exception Handling', completed: false, locked: false },
      { id: 'ch-11', title: 'File I/O', completed: false, locked: false },
      { id: 'ch-12', title: 'Collections Framework', completed: false, locked: false },
    ],
    project: { title: 'Second Project', completed: false, locked: false },
  },
  {
    id: 'module-3',
    title: 'Module 3',
    progress: 0,
    chapters: [
      { id: 'ch-13', title: 'Inner Class', completed: false, locked: true },
      { id: 'ch-14', title: 'Lambda Function', completed: false, locked: true },
      { id: 'ch-15', title: 'List', completed: false, locked: true },
      { id: 'ch-16', title: 'Stream API', completed: false, locked: true },
      { id: 'ch-17', title: 'Multithreading', completed: false, locked: true },
      { id: 'ch-18', title: 'Synchronization', completed: false, locked: true },
      { id: 'ch-19', title: 'Networking', completed: false, locked: true },
      { id: 'ch-20', title: 'JDBC', completed: false, locked: true },
      { id: 'ch-21', title: 'Design Patterns', completed: false, locked: true },
      { id: 'ch-22', title: 'Best Practices', completed: false, locked: true },
    ],
    project: { title: 'Final Project', completed: false, locked: true },
  },
];

export function CurriculumPanel() {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(['module-1', 'module-2'])
  );

  const toggleModule = (moduleId: string) => {
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
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
        <div className="flex items-center gap-3">
          <Book className="w-8 h-8 text-white" />
          <h1 className="text-white text-2xl">Curriculum</h1>
        </div>
        <p className="text-blue-100 mt-2">Track your learning journey</p>
      </div>

      {/* Modules */}
      <div className="divide-y divide-slate-200">
        {curriculumData.map((module) => {
          const isExpanded = expandedModules.has(module.id);
          const moduleIcon = module.id === 'module-1' 
            ? Code 
            : module.id === 'module-2' 
            ? Layers 
            : Book;
          const ModuleIcon = moduleIcon;

          return (
            <div key={module.id} className="transition-all">
              {/* Module Header */}
              <button
                onClick={() => toggleModule(module.id)}
                className="w-full px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex-shrink-0">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                    <ModuleIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3">
                    <h3 className="text-slate-900">{module.title}</h3>
                    <span className="text-xs text-slate-500">
                      {module.chapters.length + (module.project ? 1 : 0)} items
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 rounded-full"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-slate-600 min-w-[3rem] text-right">
                      {module.progress}%
                    </span>
                  </div>
                </div>
              </button>

              {/* Module Content */}
              {isExpanded && (
                <div className="px-6 pb-4 bg-slate-50/50">
                  <div className="ml-9 space-y-1 border-l-2 border-slate-200 pl-6">
                    {/* Chapters */}
                    {module.chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className={`group flex items-center gap-3 py-2.5 px-3 rounded-lg transition-all ${
                          chapter.locked
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-white hover:shadow-sm cursor-pointer'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {chapter.locked ? (
                            <Lock className="w-4 h-4 text-slate-400" />
                          ) : chapter.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            chapter.locked
                              ? 'text-slate-400'
                              : chapter.completed
                              ? 'text-slate-600'
                              : 'text-slate-700 group-hover:text-blue-600'
                          } ${chapter.completed ? 'line-through' : ''}`}
                        >
                          Chapter {chapter.id.split('-')[1]} - {chapter.title}
                        </span>
                      </div>
                    ))}

                    {/* Project */}
                    {module.project && (
                      <div
                        className={`group flex items-center gap-3 py-2.5 px-3 rounded-lg mt-3 transition-all ${
                          module.project.locked
                            ? 'opacity-50 cursor-not-allowed bg-slate-100'
                            : 'bg-gradient-to-r from-amber-50 to-orange-50 hover:shadow-md cursor-pointer border border-amber-200'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {module.project.locked ? (
                            <Lock className="w-4 h-4 text-slate-400" />
                          ) : module.project.completed ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : (
                            <Circle className="w-4 h-4 text-amber-500" />
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            module.project.locked
                              ? 'text-slate-400'
                              : 'text-amber-900'
                          }`}
                        >
                          {module.project.title}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer Stats */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl text-blue-600">3</div>
            <div className="text-xs text-slate-600">Modules</div>
          </div>
          <div>
            <div className="text-2xl text-green-600">5</div>
            <div className="text-xs text-slate-600">Completed</div>
          </div>
          <div>
            <div className="text-2xl text-slate-600">22</div>
            <div className="text-xs text-slate-600">Total Chapters</div>
          </div>
        </div>
      </div>
    </div>
  );
}
