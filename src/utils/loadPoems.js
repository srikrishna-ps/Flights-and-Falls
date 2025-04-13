import matter from 'gray-matter';

function importAll(r) {
  return r.keys().map((fileName) => {
    const rawContent = r(fileName).default;
    const { data, content } = matter(rawContent);
    const slug = fileName.replace('./', '').replace('.md.js', '');

    return {
      slug,
      ...data,
      content,
    };
  });
}

export function loadPoems() {
  const poems = importAll(require.context('../poems', false, /\.md\.js$/));
  return poems.sort((a, b) => new Date(b.date) - new Date(a.date));
}
