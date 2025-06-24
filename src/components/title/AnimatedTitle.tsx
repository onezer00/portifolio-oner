import React, { useEffect, useRef, useState } from 'react';
import './AnimatedTitle.css';

const words = [
  'Python | Django | FastAPI | Flask',
  'APIs REST | Backend | Microservices',
  'PostgreSQL | Redis | MongoDB | SQL',
  'AWS (Lambda, EC2, S3, RDS) | Azure',
  'Docker | Kubernetes | CI/CD | Git',
  'Automação | Cloud | Cybersecurity',
];

const AnimatedTitle: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentText = words[currentWordIndex];
  const splitWords = currentText.split(' ');

  return (
    <div className="flex justify-center items-center min-h-[100px] font-semibold animated-title-text text-white text-center px-4">
      <div className="flex items-center gap-2 flex-wrap justify-center">
        <span className="text-teal-400">{'{'}</span>

        <span className="text-white whitespace-nowrap">Oner</span>

        <div className="overflow-x-auto">
          <div className="relative flex items-center overflow-hidden whitespace-nowrap justify-end">
            {splitWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="word-fade text-teal-400"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {word}&nbsp;
              </span>
            ))}
          </div>
        </div>

        <span className="text-teal-400">{'}'}</span>
      </div>
    </div>
  );
};


export default AnimatedTitle;
