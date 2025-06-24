import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle.tsx';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Instale o lucide-react para ícones modernos

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projetos' },
    { to: '/about', label: 'Sobre' },
    { to: '/contact', label: 'Contato' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md shadow-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Oner.dev
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`relative group ${
                    isActive
                      ? 'text-indigo-700 dark:text-indigo-300'
                      : 'text-indigo-600 dark:text-indigo-400'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left ${
                      isActive ? 'scale-x-100' : ''
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-indigo-600 dark:text-indigo-400 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block ${
                      isActive
                        ? 'text-indigo-700 dark:text-indigo-300'
                        : 'text-indigo-600 dark:text-indigo-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
