"use client";
import { useContext, useEffect, useState } from "react";
import EpisodeCard from "../components/episodeItem/EpisodeCard";
import { setEpisodeList } from "./controller";
import { AppContext } from "../context/appContext";

export default function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setEpisodeList({ setEpisodes: setEpisodes, setIsLoading: setIsLoading });
  }, []);

  return (
    <div>
      {episodes.map((ep) => (
        <EpisodeCard key={ep.id} episode={ep} />
      ))}
    </div>
  );
}
