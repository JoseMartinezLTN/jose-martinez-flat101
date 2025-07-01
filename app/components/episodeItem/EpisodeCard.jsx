import Link from "next/link";
import styles from "./EpisodeCard.module.css";

export default function EpisodeCard({ episode }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardMainText}>{episode.episode}</div>
      <div className={styles.cardText1}>{episode.name}</div>
      <div className={styles.cardText2}>{`Air Date: ${episode.air_date}`}</div>
      <Link href={`/episodes/${episode.id}`} className={styles.link}>
        Ver detalle
      </Link>
    </div>
  );
}
