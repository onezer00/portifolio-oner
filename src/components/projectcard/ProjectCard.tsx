import React from 'react';

interface Project {
  title: string;
  description: string;
  github: string;
  demo?: string;
  status?: 'online' | 'offline';
  techs?: string[];
}

// Mapeamento de cores para as principais techs (todas as chaves em minúsculo)
const techColors: Record<string, string> = {
  python: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-400 dark:text-yellow-900',
  javascript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-300 dark:text-yellow-900',
  typescript: 'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-blue-900',
  java: 'bg-red-100 text-red-700 dark:bg-red-400 dark:text-red-900',
  css: 'bg-blue-200 text-blue-800 dark:bg-blue-600 dark:text-blue-100',
  scss: 'bg-pink-100 text-pink-700 dark:bg-pink-400 dark:text-pink-900',
  html: 'bg-orange-100 text-orange-700 dark:bg-orange-400 dark:text-orange-900',
  'c++': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-400 dark:text-indigo-900',
  flask: 'bg-green-100 text-green-700 dark:bg-green-400 dark:text-green-900',
  django: 'bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-100',
  redis: 'bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-100',
  mysql: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-400 dark:text-cyan-900',
  selenium: 'bg-lime-100 text-lime-700 dark:bg-lime-400 dark:text-lime-900',
  pandas: 'bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-100',
  beautifulsoup: 'bg-green-100 text-green-700 dark:bg-green-400 dark:text-green-900',
  celery: 'bg-lime-200 text-lime-800 dark:bg-lime-600 dark:text-lime-100',
  youtube_dl: 'bg-gray-100 text-gray-700 dark:bg-gray-400 dark:text-gray-900',
  flower: 'bg-purple-100 text-purple-700 dark:bg-purple-400 dark:text-purple-900',
  vercel: 'bg-black text-white',
  cloudflare: 'bg-orange-200 text-orange-800 dark:bg-orange-400 dark:text-orange-900',
};

const ProjectCard: React.FC<Project> = ({ title, description, github, demo, status, techs }) => (
  <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow hover:shadow-lg flex flex-col h-full w-full break-words">
    {/* Badge de status compacto com tooltip */}
    {status && (
      <div className="relative flex items-center mb-2 group">
        <span
          className={`h-2.5 w-2.5 rounded-full mr-1
            ${status === 'online' ? 'bg-green-500' : 'bg-red-500'}
            cursor-pointer
          `}
          tabIndex={0}
        >
          <span className="sr-only">{status === 'online' ? 'Online' : 'Offline'}</span>
        </span>
        {/* Tooltip expansivo com fundo dinâmico */}
        <span
          className={`absolute left-4 top-1/2 -translate-y-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100 text-white text-xs rounded px-2 py-1 pointer-events-none transition-all duration-200 z-10 whitespace-nowrap shadow-lg
            ${status === 'online' ? 'bg-green-600' : 'bg-red-600'}
          `}
        >
          {status === 'online' ? 'Online' : 'Offline'}
        </span>
      </div>
    )}
    <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 capitalize">{title.replace(/[-_]/g, ' ')}</h4>
    {/* Badges de tecnologias coloridas */}
    {techs && techs.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-3">
        {techs.map((tech) => {
          const colorClass = techColors[tech.toLowerCase()] || 'bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100';
          return (
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-full text-xs font-medium shadow-sm ${colorClass}`}
            >
              {tech}
            </span>
          );
        })}
      </div>
    )}
    <p className="text-zinc-700 dark:text-zinc-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {demo ? (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Ver Demo
        </a>
      ) : null}
      <a href={github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-100 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-200 rounded hover:bg-zinc-200 dark:hover:bg-zinc-600">
        Ver GitHub
      </a>
    </div>
  </div>
);

export default ProjectCard;
