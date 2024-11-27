import axiosInstance from "./axiosInstance";

export const getAllCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllcategories ~ error:", error);
    throw error;
  }
};
