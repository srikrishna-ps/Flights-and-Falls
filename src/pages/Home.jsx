import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";
import PoemCard from "../components/PoemCard";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { generateRSS } from "../utils/generateRSS";

export default function Home() {
  const [poems, setPoems] = useState([]);
  const { user } = useAuth();
  const isAdmin = user?.email === process.env.REACT_APP_ADMIN_EMAIL;

  useEffect(() => {
    const q = query(collection(db, "poems"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newPoems = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPoems(newPoems);
    });
    return unsubscribe;
  }, []);

  const handleRSSDownload = async () => {
    const blob = await generateRSS();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "feed.xml");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-900 dark:text-blue-100">
          Recent Poems
        </h2>
        <div className="flex items-center gap-4">
          <Link
            to="/poems"
            className="text-sm text-blue-700 hover:underline dark:text-blue-300"
          >
            Read more poems →
          </Link>
          {isAdmin && (
            <button
              onClick={handleRSSDownload}
              className="text-xs rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
            >
              Download RSS
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {poems.slice(0, 3).map((poem) => (
          <PoemCard key={poem.id} poem={poem} />
        ))}
      </div>
    </div>
  );
}