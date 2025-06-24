import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../projectcard/ProjectCard.tsx';
import { Project } from '../../types/Project';

const ProjectsGrid: React.FC<{ projects: Project[] }> = ({ projects }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
  >
    {projects.map((p, idx) => (
      <motion.div key={p.title} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
        <ProjectCard {...p} />
      </motion.div>
    ))}
  </motion.div>
);

export default ProjectsGrid;
