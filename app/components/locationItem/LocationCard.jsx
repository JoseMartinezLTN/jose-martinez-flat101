import Link from "next/link";
import styles from "./LocationCard.module.css";

export default function LocationCard({ location }) {
  return (
    <Link href={`/locations/${location.id}`}>
      <div className={styles.card}>
        <div className={styles.cardMainText}>{location.name}</div>
        <div className={styles.cardText1}>{`Tipo: ${location.type}`}</div>
        <div
          className={styles.cardText2}
        >{`Dimensión: ${location.dimension}`}</div>
      </div>
    </Link>
  );
}
