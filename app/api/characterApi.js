export const getCharacterListCall = async ({ characterIds }) => {
  return fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
    .then((res) => res.json())
    .then((data) => {
      if (!Array.isArray(data)) {
        data = [data];
      }
      return data;
    });
};
