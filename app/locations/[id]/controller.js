import { getLocationDetailCall } from "@/app/api/locationApi";

export const setLocationDetail = async ({
  id,
  setLocationDetail,
  setIsLoading,
}) => {
  setIsLoading(true);
  const location = await getLocationDetailCall({ id });

  setLocationDetail(location);
  setIsLoading(false);
};
