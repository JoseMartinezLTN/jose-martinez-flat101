"use client";
import { useEffect, useState } from "react";
import EpisodeCard from "../components/episodeItem/EpisodeCard";
import { setEpisodeList } from "./controller";

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    setEpisodeList({ setEpisodes: setEpisodes });
  }, []);

  return (
    <div>
      <div>Lista de Episodios</div>
      {episodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  );
}
