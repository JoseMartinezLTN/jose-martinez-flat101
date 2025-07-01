"use client";

import { useContext, useEffect, useState } from "react";
import { setEpisodeDetail } from "./controller";
import { useParams } from "next/navigation";
import { AppContext } from "@/app/context/appContext";
import CharacterScroll from "@/app/components/characterScroll/CharacterScroll";
import CommentForm from "@/app/components/commentForm/CommentForm";
import styles from "./page.module.css";

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
      <div className={styles.infoContainer}>
        <div className={styles.infoPrimary}>{episode.episode}</div>
        <div className={styles.infoSecondary}>{episode.name}</div>
        <div className={styles.infoSecondary}>{episode.air_date}</div>
      </div>

      <CharacterScroll characters={characters} />
      <CommentForm episodeId={id} />
    </div>
  );
}
