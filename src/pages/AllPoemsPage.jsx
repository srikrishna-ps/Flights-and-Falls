import React from 'react';
import loadPoems from '../utils/loadPoems';
import PoemCard from '../components/PoemCard';

const AllPoemsPage = () => {
  const poems = loadPoems().sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="p-4 text-blue-200">
      <h1 className="text-2xl font-semibold mb-4">All Poems</h1>
      <div className="space-y-4">
        {poems.map((poem) => (
          <PoemCard key={poem.slug} poem={poem} />
        ))}
      </div>
    </div>
  );
};

export default AllPoemsPage;
