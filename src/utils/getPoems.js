const poemsContext = require.context('../../public/poems', false, /\.md$/);

export function getAllPoems() {
  return poemsContext.keys().map((fileName) => {
    const slug = fileName.replace('./', '').replace('.md', '');
    return {
      slug,
      content: poemsContext(fileName).default,
    };
  });
}
