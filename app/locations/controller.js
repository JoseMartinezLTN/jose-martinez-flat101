import { getLocationListCall } from "../api/locationApi";

export const setLocationList = async ({ setLocations, setIsLoading }) => {
  setIsLoading(true);
  const locationList = await getLocationListCall();

  setLocations(locationList);
  setIsLoading(false);
};
