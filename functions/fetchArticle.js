export const fetchArticle = async (category, slug) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/${category}/${slug}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const article = await response.json();
    console.log('return:', article);
    return article;
  } catch (error) {
    console.error(`Error fetching ${category} article:`, error);
    return null;
  }
};