import { db } from "../firebase/config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export async function generateRSS() {
  const q = query(collection(db, "poems"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  const items = snapshot.docs.map((doc) => {
    const data = doc.data();
    return `
      <item>
        <title>${data.title}</title>
        <description>${data.body}</description>
        <link>https://flights-and-falls.netlify.app</link>
        <guid>${doc.id}</guid>
      </item>`;
  });

  const rss = `<?xml version="1.0"?><rss version="2.0"><channel>
    <title>Flights and Falls Poems</title>
    <link>https://flights-and-falls.netlify.app</link>
    <description>Daily poems by the admin</description>
    ${items.join("\n")}
  </channel></rss>`;

  return new Blob([rss], { type: "application/xml" });
}
