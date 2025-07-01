export const getEpisodeListCall = async () => {
  return fetch("https://rickandmortyapi.com/api/episode")
    .then((res) => res.json())
    .then((data) => data.results);
};

export const getEpisodeDetailCall = async ({ id }) => {
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

export const postCommentToEpisodeCall = async ({
  id,
  comment,
  name,
  email,
}) => {
  const body = {
    comment: comment,
    name: name,
    email: email,
  };
  return fetch(`https://rickandmortyapi.com/api/episode/${id}`, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => response);
};
