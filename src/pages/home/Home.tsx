import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedTitle from '../../components/title/AnimatedTitle.tsx';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center
        bg-gradient-to-br from-indigo-100 via-white to-zinc-100
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        transition-colors overflow-hidden w-full px-6 sm:px-8 lg:px-12"
    >
      {/* Spotlight no fundo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
        animate={{
          opacity: 0.5,
          scale: 1.2,
          x: ['-50%', '-40%', '-50%'],
          y: ['-50%', '-60%', '-50%'],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px]
          rounded-full bg-indigo-400/30 blur-3xl z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10 max-w-md sm:max-w-xl lg:max-w-2xl"
      >
        <AnimatedTitle />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300
            mt-4 mb-8"
        >
          <span className="font-semibold text-zinc-900 dark:text-white">
            Desenvolvedor Backend especializado em Python.
          </span>{' '}
          Apaixonado por automação, APIs e microsserviços.
          Entrego código limpo, escalável e com foco em alta performance.
        </motion.p>

        <a
          href={`${process.env.PUBLIC_URL}/assets/curriculo.pdf`}
          download="curriculo-onerzer00.pdf"
          className="btn-glow mt-4 px-6 py-3 bg-indigo-600 dark:bg-indigo-400
            text-white dark:text-zinc-900 font-semibold rounded-lg shadow-lg
            hover:shadow-indigo-400/40 transition-all"
        >
          Baixar CV
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 sm:mt-16 relative z-10"
      >
        <button
          onClick={() => navigate('/projects')}
          className="text-indigo-600 dark:text-indigo-400 text-base sm:text-lg font-bold animate-bounce
            px-6 py-2 border-2 border-indigo-600 dark:border-indigo-400 rounded-lg
            hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-zinc-900
            transition-colors"
        >
          Ver projetos ↓
        </button>
      </motion.div>
    </section>

  );
};

export default Home;
