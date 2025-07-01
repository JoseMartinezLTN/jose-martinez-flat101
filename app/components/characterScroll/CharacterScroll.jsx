"use client";
import styles from "./CharacterScroll.module.css";

export default function CharacterScroll({ characters }) {
  return (
    <div>
      <div className={styles.scrollTitle}>Personajes</div>
      <div className={styles.characterContainer}>
        {characters.map((char) => (
          <div key={char.id} className={styles.character} title={char.name}>
            <img
              src={char.image}
              alt={char.name}
              className={styles.characterImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
