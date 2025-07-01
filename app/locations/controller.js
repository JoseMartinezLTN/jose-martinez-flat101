import { getLocationListCall } from "../api/locationApi";

export const setLocationList = async ({ setLocations }) => {
  const locationList = await getLocationListCall();

  setLocations(locationList);
};
