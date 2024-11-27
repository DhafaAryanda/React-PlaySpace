import axiosInstance from "./axiosInstance";

export const getAllFacilities = async () => {
  try {
    const response = await axiosInstance.get("/facilities");
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllFacilities ~ error:", error);
    throw error;
  }
};

export const getFacilityById = async (id: string) => {
  try {
    const response = await axiosInstance.get("/facilities/" + id);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getFacilityById ~ error:", error);
    throw error;
  }
};
