// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import ProjectsSection from '../../components/section/ProjectsSection.tsx';
import { Project } from '../../types/Project.ts';
import projectData from './configs/projects.json';


const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectData as Project[]);
  }, []);

  const deployed = projects.filter((p) => p.demo);
  const notDeployed = projects.filter((p) => !p.demo);

  return (
    <section id="projects" className="min-h-screen py-20 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {deployed.length > 0 && (
          <ProjectsSection title="Projetos Deployados" projects={deployed} />
        )}
        {notDeployed.length > 0 && (
          <ProjectsSection title="Repositórios GitHub" projects={notDeployed} />
        )}
      </div>
    </section>
  );
};

export default Projects;

