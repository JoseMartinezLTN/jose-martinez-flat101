import { getCharacterListCall } from "@/app/api/characterApi";
import { getEpisodeDetailCall } from "@/app/api/episodeApi";

export const setEpisodeDetail = async ({
  id,
  setEpisodeDetail,
  setCharacters,
  setIsLoading,
}) => {
  setIsLoading(true);
  const episode = await getEpisodeDetailCall({ id });

  const characterIds = episode.characters
    .map((url) => url.split("/").pop())
    .join(",");

  const characters = await getCharacterListCall({ characterIds });

  setEpisodeDetail(episode);
  setCharacters(characters);
  setIsLoading(false);
};
