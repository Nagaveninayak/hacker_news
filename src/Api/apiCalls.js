export const getFrontPageStory = async () => {
  const result = await fetch(
    `https://hn.algolia.com/api/v1/search?tags=front_page`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return result;
};

export const getCommentById = async (objectId) => {
  const result = await fetch(`https://hn.algolia.com/api/v1/items/${objectId}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return result;
};
