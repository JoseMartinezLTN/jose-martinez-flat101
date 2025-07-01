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
