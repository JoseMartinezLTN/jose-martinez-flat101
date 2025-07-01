"use client";

import { useEffect, useState } from "react";
import { setEpisodeDetail } from "./controller";
import { useParams } from "next/navigation";

export default function EpisodeDetail({}) {
  const [episode, setEpisode] = useState({});
  const [loading, setLoading] = useState(true); //TODO: add to context and extend to all components
  const { id } = useParams();

  useEffect(() => {
    setEpisodeDetail({
      id: id,
      setEpisodeDetail: setEpisode,
      setLoading: setLoading,
    });
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <div>Code: {episode.episode}</div>
      <div>{episode.name}</div>
      <div>Air Date: {episode.air_date}</div>
    </div>
  );
}
