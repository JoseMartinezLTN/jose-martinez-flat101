import { getEpisodeDetailCall } from "@/app/api/episodeApi";

export const setEpisodeDetail = async ({
  id,
  setEpisodeDetail,
  setLoading,
}) => {
  setLoading(true);
  const episode = await getEpisodeDetailCall({ id });

  setEpisodeDetail(episode);
  setLoading(false);
};
