"use client";

import { useContext, useEffect, useState } from "react";
import { setEpisodeDetail } from "./controller";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/context/appContext";
import CharacterScroll from "@/app/components/characterScroll/CharacterScroll";

export default function EpisodeDetail({}) {
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);
  const { setIsLoading } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    setEpisodeDetail({
      id: id,
      setEpisodeDetail: setEpisode,
      setCharacters: setCharacters,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <div>
      <div>
        <div>Code: {episode.episode}</div>
        <div>{episode.name}</div>
        <div>Air Date: {episode.air_date}</div>
      </div>

      <CharacterScroll characters={characters} />
      <div>//TODO FORM</div>
    </div>
  );
}
