import React from 'react';
import AboutTimeline from './AboutTimeline.tsx';
import BadgesGallery from '../../components/certbadges/BadgesGallery.tsx';
import { motion } from 'framer-motion';

const skills = [
  'Python',
  'FastAPI',
  'Flask',
  'Rust',
  'Django',
  'React',
  'Docker',
  'AWS',
  'Azure',
  'CI/CD',
  'Automação',
  'SQL',
  'Redis',
  'Git',
];

const values = [
  'Alta Performance Backend',
  'Microsserviços & Integrações',
  'Cloud (AWS | Azure)',
  'ETL & Automação',
  'Cybersecurity & DevSecOps',
  'Clean Code & Refatoração',
  'Mentoria & Open Source',
];

const certifications = [
  '🎓 Bacharel em Análise e Desenvolvimento de Sistemas — Estácio de Sá ✅',
  '🛡️ Pós‑graduação em Cybersecurity — Faculdade Única ✅',
  '🤖 Pós‑graduação em Inteligência Artificial — Faculdade Única ✅',
  '🏅 Microsoft Certified: Azure Fundamentals',
];

const About: React.FC = () => (
  <section
    id="about"
    className="bg-gradient-to-br from-indigo-50 via-white to-zinc-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 transition-colors"
  >
    <div className="max-w-4xl w-full mx-auto px-4 py-20 space-y-16">

      {/* Introdução */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4 text-center"
      >
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          Quem sou eu
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/profile.png`}
            alt="Foto de perfil de Oner"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200 dark:border-indigo-500 shadow-md mb-4 md:mb-0"
          />
          <p className="text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed text-left max-w-xl">
            Olá, sou{' '}
            <span className="font-semibold text-zinc-900 dark:text-white">
              Oner
            </span>
            , desenvolvedor backend com paixão por código. Especializado em{' '}
            <span className="text-indigo-600">Python</span> e{' '}
            <span className="text-indigo-600">automação de sistemas</span>,
            colaboro na <span className="font-semibold">IBM</span> em projetos
            para a <span className="font-semibold">Petrobras</span>. Sou movido
            por desafios e soluções impactantes. Adoro open source e novas
            tecnologias.
          </p>
        </div>
      </motion.div>

      {/* Timeline */}
      <AboutTimeline />

      {/* Formação & Certificações */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 text-center">
          Formação & Certificações
        </h3>
        <ul className="text-left space-y-3 text-zinc-700 dark:text-zinc-200">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-start space-x-2">
              {cert.includes('Azure') ? (
              <>
                <a
                href="https://learn.microsoft.com/api/credentials/share/pt-br/JOAOBPECANHA-6722/18D2305214B1E128?sharingId=D7E0491820B6C3DC"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-indigo-600 dark:text-indigo-400"
                >
                {cert}
                </a>
                <img
                src={`${process.env.PUBLIC_URL}/assets/certifications/azure-fundamentals.svg`}
                alt="Azure Fundamentals Badge"
                className="w-8 h-8 mr-2"
                />
              </>
              ) : (
              <span>{cert}</span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Habilidades Técnicas */}
      <h3 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 text-center">
          Habilidades Técnicas
      </h3>

      <BadgesGallery />

      {/* Valores & Especialidades */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="space-y-6"
      >
        <h3 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 text-center">
          Especialidades & Valores
        </h3>
        <ul className="inline-grid grid-cols-2 gap-4 text-left text-zinc-700 dark:text-zinc-200">
          {values.map((item) => (
            <li key={item} className="flex items-start space-x-2">
              <span className="text-indigo-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

export default About;
