"use client";
import { useContext, useEffect, useState } from "react";
import LocationCard from "../components/locationItem/LocationCard";
import { setLocationList } from "./controller";
import { AppContext } from "../context/appContext";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const { setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setLocationList({
      setLocations: setLocations,
      setIsLoading: setIsLoading,
    });
  }, []);

  return (
    <div>
      {locations.map((loc) => (
        <LocationCard key={loc.id} location={loc} />
      ))}
    </div>
  );
}
