import React from 'react';
import { Moon, Sun } from 'lucide-react';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs === 'dark';
    }
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return true;
    }
  }
  return false;
};

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = React.useState(getInitialTheme);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className={`relative w-14 h-8 flex items-center px-1 rounded-full
      transition-colors duration-500 
      ${dark ? 'bg-indigo-600' : 'bg-zinc-300'}`}
      aria-label="Alternar tema"
    >
      <div
        className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md 
        transform transition-transform duration-500
        ${dark ? 'translate-x-6' : 'translate-x-0'}`}
      />
      <Sun
        className={`w-4 h-4 absolute left-2 text-yellow-400 
        transition-opacity duration-500 ${dark ? 'opacity-0' : 'opacity-100'}`}
      />
      <Moon
        className={`w-4 h-4 absolute right-2 text-zinc-100 
        transition-opacity duration-500 ${dark ? 'opacity-100' : 'opacity-0'}`}
      />
    </button>
  );
};

export default ThemeToggle;
