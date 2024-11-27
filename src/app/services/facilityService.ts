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
