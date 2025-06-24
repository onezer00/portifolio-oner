import React from 'react';
import { motion } from 'framer-motion';

interface CareerItem {
  company: string;
  period: string;
  description: string;
  icon: React.JSX.Element;
}

const careerItems: CareerItem[] = [
  {
    company: 'IBM',
    period: '2023 – hoje',
    description: 'Backend Python para projetos de alta escala (APIs, Cloud, Security)',
    icon: <span>🎯</span>,
  },
  {
    company: 'Spassu Tecnologia',
    period: '2019 – 2022',
    description: 'API, ETL e integração de sistemas legados',
    icon: <span>💼</span>,
  },
  {
    company: 'Single Serviços',
    period: '2012 – 2019',
    description: 'Suporte técnico, redes e gestão de TI',
    icon: <span>🔧</span>,
  },
];

const AboutTimeline: React.FC = () => (
  <section className="py-16 bg-gradient-to-br from-indigo-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors">
    <div className="max-w-3xl mx-auto px-6">
      <motion.h3
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-8 text-center"
      >
        Minha Jornada
      </motion.h3>

      <div className="relative pl-8">
        {/* Linha da timeline */}
        <div className="absolute left-4 top-0 w-[3px] h-full bg-zinc-300 dark:bg-zinc-700"></div>

        {careerItems.map((item, idx) => (
          <motion.div
            key={item.company}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="mb-12 flex items-start space-x-4"
          >
            {/* Marcador */}
            <div className="relative w-8 h-8 flex-shrink-0">
              <div className="absolute -left-[1.5px] top-2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                {item.icon}
              </div>
            </div>

            {/* Conteúdo do item */}
            <div className="text-left">
              <h4 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">
                {item.company}
              </h4>
              <time className="block text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                {item.period}
              </time>
              <p className="text-zinc-700 dark:text-zinc-200">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutTimeline;
