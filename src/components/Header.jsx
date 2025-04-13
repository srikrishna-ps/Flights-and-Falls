import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => (
  <header className="p-4 flex justify-between items-center bg-blue-100 dark:bg-[#0c0f1f] shadow-md">
    <h1 className="text-2xl font-mono text-blue-900 dark:text-blue-300">
      <Link to="/">flights and falls</Link>
    </h1>
    <nav className="flex gap-4 items-center">
      <Link to="/about" className="text-blue-900 dark:text-blue-300 hover:underline">About</Link>
      <Link to="/poems" className="text-blue-900 dark:text-blue-300 hover:underline">All Poems</Link>
      <ThemeToggle />
    </nav>
  </header>
);

export default Header;
