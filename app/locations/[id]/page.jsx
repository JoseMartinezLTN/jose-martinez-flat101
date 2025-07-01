"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { setLocationDetail } from "./controller";
import { AppContext } from "@/app/context/appContext";
import CharacterScroll from "@/app/components/characterScroll/CharacterScroll";
import styles from "./page.module.css";

export default function LocationDetail({}) {
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);
  const { setIsLoading } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    setLocationDetail({
      id: id,
      setLocationDetail: setLocation,
      setResidents: setResidents,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <div>
      <div className={styles.infoContainer}>
        <div className={styles.infoPrimary}>{location.name}</div>
        <div className={styles.infoSecondary}>Tipo:{location.type}</div>
        <div className={styles.infoSecondary}>
          Dimensión: {location.dimension}
        </div>
      </div>

      <CharacterScroll characters={residents} />
    </div>
  );
}
