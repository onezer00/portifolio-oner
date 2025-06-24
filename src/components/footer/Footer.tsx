import React from 'react';
import SocialLinks from '../social/SocialLinks.tsx';

const Footer: React.FC = () => (
  <footer className="py-8 bg-white dark:bg-zinc-900 text-center border-t border-zinc-200 dark:border-zinc-700">
    <SocialLinks />
    <p className="mt-4 text-zinc-500 dark:text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Oner. Todos os direitos reservados.</p>
  </footer>
);

export default Footer; 