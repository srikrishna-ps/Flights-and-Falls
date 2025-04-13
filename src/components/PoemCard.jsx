import React, { useState } from 'react';

const PoemCard = ({ poem }) => {
  const [expanded, setExpanded] = useState(false);
  const { title, date, body, thoughts } = poem;

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">{title}</h2>
      <p className="text-sm text-gray-500">{new Date(date).toDateString()}</p>
      {thoughts && <p className="italic text-sm my-2">{thoughts}</p>}
      <div className="mt-2 text-zinc-700 dark:text-zinc-100 whitespace-pre-wrap">
        {expanded ? body : `${body.slice(0, 300)}...`}
        {body.length > 300 && (
          <button onClick={toggleExpand} className="block text-blue-600 dark:text-blue-400 mt-2">
            {expanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default PoemCard;
