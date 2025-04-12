import { useState, useEffect } from "react";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/config";
import useAuth from "../hooks/useAuth";

export default function PoemForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (id) {
      const fetchPoem = async () => {
        const docRef = doc(db, "poems", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setBody(data.body);
          setThoughts(data.thoughts);
          setImage(data.image);
        }
      };
      fetchPoem();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const poemData = {
      title,
      body,
      thoughts,
      image,
      createdAt: serverTimestamp(),
      isAdmin: user?.email === process.env.REACT_APP_ADMIN_EMAIL,
    };
    if (id) {
      await updateDoc(doc(db, "poems", id), poemData);
    } else {
      await addDoc(collection(db, "poems"), poemData);
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-2xl mx-auto">
      <input
        className="w-full mb-2 rounded p-2 border border-blue-300"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full mb-2 rounded p-2 border border-blue-300"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <input
        className="w-full mb-2 rounded p-2 border border-blue-300"
        placeholder="Thoughts"
        value={thoughts}
        onChange={(e) => setThoughts(e.target.value)}
      />
      <input
        className="w-full mb-2 rounded p-2 border border-blue-300"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        {id ? "Update Poem" : "Submit Poem"}
      </button>
    </form>
  );
}