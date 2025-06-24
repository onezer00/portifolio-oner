import React from 'react';
import ProjectsGrid from '../grid/ProjectsGrid.tsx';

import { Project } from '../../types/Project.ts';

const ProjectsSection: React.FC<{ title: string; projects: Project[] }> = ({ title, projects }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6 text-center">{title}</h3>
    <ProjectsGrid projects={projects} />
  </div>
);

export default ProjectsSection;
