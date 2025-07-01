import { getLocationDetailCall } from "@/app/api/locationApi";

export const setLocationDetail = async ({
  id,
  setLocationDetail,
  setLoading,
}) => {
  setLoading(true);
  const location = await getLocationDetailCall({ id });

  setLocationDetail(location);
  setLoading(false);
};
