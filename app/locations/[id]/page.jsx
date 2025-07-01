"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { setLocationDetail } from "./controller";
import { AppContext } from "@/app/context/appContext";

export default function LocationDetail({}) {
  const [location, setLocation] = useState({});
  const { setIsLoading } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    setLocationDetail({
      id: id,
      setLocationDetail: setLocation,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <div>
      <div>{location.name}</div>
      <div>Tipo:{location.type}</div>
      <div>Dimensión: {location.dimension}</div>
    </div>
  );
}
