import React, { useEffect, useState } from 'react';
import { getBadges } from '../../services/badgesService.ts';

export default function BadgesGallery() {
  const [badges, setBadges] = useState<{ name: string; image: string }[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBadges().then(data => {
      setBadges(data);
      setLoading(false);
      setVisibleCount(0);
    });
  }, []);

  // Gradualmente revela as badges
  useEffect(() => {
    if (!loading && visibleCount < badges.length) {
      const timeout = setTimeout(() => {
        setVisibleCount(v => v + 1);
      }, 80); // tempo entre cada badge
      return () => clearTimeout(timeout);
    }
  }, [loading, visibleCount, badges.length]);

  if (loading) return (
    <div className="flex justify-center items-center h-32">
      <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
    </div>
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.slice(0, visibleCount).map(({ name, image }, idx) => (
        <div key={name} className="badge-card flex flex-col items-center transition-opacity duration-500 opacity-100">
          <img src={image} alt={name} className="w-20 h-20 object-contain" />
          <p className="text-sm mt-2 text-gray-800 dark:text-white text-center">{name}</p>
        </div>
      ))}
    </div>
  );
}
