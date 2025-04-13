import React from 'react';
import loadPoems from '../utils/loadPoems';
import PoemCard from '../components/PoemCard';

const Home = () => {
  const poems = loadPoems();
  const latestPoems = poems
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="p-4 text-blue-200">
      <h1 className="text-3xl font-bold mb-4">Welcome to Flights and Falls</h1>
      <p className="mb-6 text-lg">Here are the latest poems:</p>
      <div className="space-y-4">
        {latestPoems.map((poem) => (
          <PoemCard key={poem.slug} poem={poem} />
        ))}
      </div>
    </div>
  );
};

export default Home;
