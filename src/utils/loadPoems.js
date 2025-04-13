const poems = require.context('../content/poems', false, /\.md\.js$/);

const loadPoems = () => {
  return poems.keys().map((key) => {
    const poem = poems(key);
    return {
      ...poem.attributes,
      body: poem.body,
      slug: key.replace('./', '').replace('.md.js', '')
    };
  });
};

export default loadPoems;
