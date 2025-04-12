import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const isAdmin = user?.email === process.env.REACT_APP_ADMIN_EMAIL;

  return (
    <header className="flex items-center justify-between p-4 shadow-md dark:bg-[#0c0f1c] bg-blue-100">
      <Link to="/" className="text-2xl font-bold text-blue-900 dark:text-blue-100">
        flights & falls
      </Link>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            to="/write"
            className="rounded bg-blue-700 px-3 py-1 text-white hover:bg-blue-800 transition"
          >
            Write a New Poem
          </Link>
        )}
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 bg-blue-300 dark:bg-blue-900 text-blue-900 dark:text-blue-200 hover:scale-110 transition"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
