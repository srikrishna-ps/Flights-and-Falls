import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import PoemCard from "../components/PoemCard";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";

function AllPoemsPage() {
  const [poems, setPoems] = useState([]);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const q = query(collection(db, "poems"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPoems(data);
    });
    return unsub;
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">All Poems</h2>

      {isAdmin && (
        <div className="mb-4">
          <Link to="/new" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            ✍️ Write a New Poem
          </Link>
        </div>
      )}

      {poems.map((poem) => (
        <PoemCard key={poem.id} poem={poem} />
      ))}
    </div>
  );
}

export default AllPoemsPage;
