import { useState } from "react";
import { login } from "../firebase/auth";

export default function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      onLogin(); // callback to update app state
    } catch (err) {
      setError("Invalid credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-card bg-white rounded-2xl space-y-4">
      <h2 className="text-xl font-bold text-center text-[#1e3a8a]">Admin Login</h2>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="w-full bg-[#1e3a8a] text-white py-2 rounded hover:bg-[#172c5a] transition">Login</button>
    </form>
  );
}
