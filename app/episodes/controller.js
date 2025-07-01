import { getEpisodeListCall } from "../api/episodeApi";

export const setEpisodeList = async ({ setEpisodes }) => {
  const episodeList = await getEpisodeListCall();

  setEpisodes(episodeList);
};
