// PoemForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PoemForm = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate(); // ✅ rename history → navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && body) {
      console.log("Poem submitted:", { title, body });
      navigate('/'); // ✅ correct usage in v6
    } else {
      alert("Please fill out both title and body!");
    }
  };

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
