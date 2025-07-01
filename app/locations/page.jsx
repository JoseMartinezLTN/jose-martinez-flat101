"use client";
import { useEffect, useState } from "react";
import LocationCard from "../components/locationItem/LocationCard";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setLocations(data.results));
  }, []);

  return (
    <div>
      <div>Localizaciones</div>

      {locations.map((loc) => (
        <LocationCard key={loc.id} location={loc} />
      ))}
    </div>
  );
}
