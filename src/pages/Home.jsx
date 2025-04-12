// Home.jsx

import React from 'react';
import { useAuth } from '../hooks/useAuth'; // Use the custom hook to check if the user is logged in
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useAuth(); // Accessing the user object from useAuth

  return (
    <div className="home-container">
      <h1>Welcome to Flights and Falls</h1>
      
      {/* Button to create a new poem visible only for admin */}
      {user && user.email === process.env.REACT_APP_ADMIN_EMAIL && (
        <Link to="/write-poem">
          <button className="write-poem-btn">Write a New Poem</button>
        </Link>
      )}
      
      <p>Here are the latest poems:</p>
      {/* Display latest poems */}
    </div>
  );
};

export default Home;
