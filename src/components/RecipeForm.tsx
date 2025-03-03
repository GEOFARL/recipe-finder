'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const RecipeForm: React.FC = () => {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);
    router.push(`/recipes?${params.toString()}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-lg space-y-4"
    >
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select Cuisine</option>
        <option value="Italian">Italian</option>
        <option value="Mexican">Mexican</option>
        <option value="Chinese">Chinese</option>
      </select>
      <input
        type="number"
        placeholder="Max preparation time (mins)"
        value={maxReadyTime}
        onChange={(e) => setMaxReadyTime(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        type="submit"
        disabled={!query && !cuisine && !maxReadyTime}
        className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
      >
        Next
      </button>
    </form>
  );
};

export default RecipeForm;
