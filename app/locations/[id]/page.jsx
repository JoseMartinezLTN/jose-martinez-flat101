"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { setLocationDetail } from "./controller";

export default function LocationDetail({}) {
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLocationDetail({
      id: id,
      setLocationDetail: setLocation,
      setLoading: setLoading,
    });
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <div>{location.name}</div>
      <div>Tipo:{location.type}</div>
      <div>Dimensión: {location.dimension}</div>
    </div>
  );
}
