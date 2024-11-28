import axiosInstance from "./axiosInstance";

export const getBenefits = async (facilityId: string) => {
  try {
    const response = await axiosInstance.get(
      "/facilities/" + facilityId + "/benefits"
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getBenefits ~ error:", error);
    throw error;
  }
};
