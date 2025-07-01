export const getLocationListCall = async () => {
  return fetch("https://rickandmortyapi.com/api/location")
    .then((res) => res.json())
    .then((data) => data.results);
};

export const getLocationDetailCall = async ({ id }) => {
  return fetch(`https://rickandmortyapi.com/api/location/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};
