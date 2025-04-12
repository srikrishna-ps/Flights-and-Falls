import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function PoemCard({ poem }) {
  const { user } = useAuth();
  const isAdmin = user?.email === process.env.REACT_APP_ADMIN_EMAIL;
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Delete this poem?")) {
      await deleteDoc(doc(db, "poems", poem.id));
    }
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#12172a] p-4 shadow-lg dark:shadow-blue-900">
      <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200">
        {poem.title} {poem.isAdmin && <span className="text-sm">(admin)</span>}
      </h3>
      <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
        {poem.body.length > 200 ? poem.body.slice(0, 200) + "..." : poem.body}
      </p>
      <div className="mt-4 flex gap-2">
        {isAdmin && (
          <>
            <button
              onClick={() => navigate(`/edit/${poem.id}`)}
              className="text-xs rounded bg-yellow-500 px-2 py-1 text-white hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-xs rounded bg-red-600 px-2 py-1 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}