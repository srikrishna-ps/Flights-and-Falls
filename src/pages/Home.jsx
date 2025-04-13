import React from 'react';
import { loadPoems } from '../utils/loadPoems';

const Home = () => {
  const poems = loadPoems();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Here are the latest poems:</h2>
      {poems.map((poem) => (
        <div key={poem.slug} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">{poem.title}</h3>
          <p className="text-sm text-gray-500">{poem.date}</p>
          <p className="mt-2 whitespace-pre-line">
            {poem.content.substring(0, 200)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
