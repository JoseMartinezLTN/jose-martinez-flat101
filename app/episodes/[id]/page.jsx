"use client";

import { useContext, useEffect, useState } from "react";
import { setEpisodeDetail } from "./controller";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/context/appContext";

export default function EpisodeDetail({}) {
  const [episode, setEpisode] = useState({});
  const { setIsLoading } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    setEpisodeDetail({
      id: id,
      setEpisodeDetail: setEpisode,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <div>
      <div>Code: {episode.episode}</div>
      <div>{episode.name}</div>
      <div>Air Date: {episode.air_date}</div>
    </div>
  );
}
