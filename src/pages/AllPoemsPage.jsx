import React from 'react';
import { getAllPoems } from '../utils/getPoems';
import PoemCard from '../components/PoemCard';

const AllPoemsPage = () => {
  const poems = getAllPoems();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-900 dark:text-blue-300">All Poems</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {poems.map(poem => (
          <PoemCard key={poem.slug} poem={{ ...poem.content, slug: poem.slug }} />
        ))}
      </div>
    </div>
  );
};

export default AllPoemsPage;
