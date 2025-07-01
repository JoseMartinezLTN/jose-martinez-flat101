import { getLocationDetailCall } from "@/app/api/locationApi";

export const setLocationDetail = async ({
  id,
  setLocationDetail,
  setResidents,
  setIsLoading,
}) => {
  setIsLoading(true);
  const location = await getLocationDetailCall({ id });

  const characterIds = location.residents
    .map((url) => url.split("/").pop())
    .join(",");

  const residents = await getCharacterListCall({ characterIds });

  setLocationDetail(location);
  setResidents(residents);
  setIsLoading(false);
};
