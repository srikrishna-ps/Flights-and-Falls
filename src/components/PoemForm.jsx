// PoemForm.jsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Make sure we have access to user authentication

const PoemForm = () => {
  const { user } = useAuth(); // Get the logged-in user
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      // Push new poem to Firebase (or markdown, etc)
      console.log("Poem submitted:", { title, body });
      // Redirect back to Home or All Poems page after submission
      history.push('/');
    } else {
      alert("Please fill out both title and body!");
    }
  };

  // Ensure only admin can access the form
  if (!user || user.email !== process.env.REACT_APP_ADMIN_EMAIL) {
    return <p>You must be logged in as an admin to add poems.</p>;
  }

  return (
    <div className="poem-form-container">
      <h1>Write a New Poem</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Poem Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Poem Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Poem</button>
      </form>
    </div>
  );
};

export default PoemForm;
