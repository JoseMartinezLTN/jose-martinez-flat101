import { getEpisodeDetailCall } from "@/app/api/episodeApi";

export const setEpisodeDetail = async ({
  id,
  setEpisodeDetail,
  setIsLoading,
}) => {
  setIsLoading(true);
  const episode = await getEpisodeDetailCall({ id });

  setEpisodeDetail(episode);
  setIsLoading(false);
};
