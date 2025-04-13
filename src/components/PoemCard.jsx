import React from 'react';
import { Link } from 'react-router-dom';

const PoemCard = ({ poem }) => {
  return (
    <div className="bg-white dark:bg-[#11182f] rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
      <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300">{poem.title}</h2>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {poem.body.length > 150 ? poem.body.slice(0, 150) + '...' : poem.body}
      </p>
      <Link to={`/poems/${poem.slug}`} className="text-blue-700 dark:text-blue-400 mt-4 inline-block">
        Read more →
      </Link>
    </div>
  );
};

export default PoemCard;
