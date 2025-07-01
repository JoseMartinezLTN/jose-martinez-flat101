import { getEpisodeListCall } from "../api/episodeApi";

export const setEpisodeList = async ({ setEpisodes, setIsLoading }) => {
  setIsLoading(true);
  const episodeList = await getEpisodeListCall();

  setEpisodes(episodeList);
  setIsLoading(false);
};
