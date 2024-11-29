import { z } from "zod";
import { signUpSchema } from "../(auth)/sign-up/lib/validation";
import axiosInstance from "./axiosInstance";

export interface SignUpData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  password: string;
  confirmPassword: string;
}

export const signUp = async (data: SignUpData) => {
  try {
    const validatedData = signUpSchema.parse(data);

    const response = await axiosInstance.post("/users", validatedData);
    return response.data;
    console.log("User Registered", response.data);
    alert("User Registered");
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed", error.errors);
      throw new Error(
        "Validation failed: " +
          error.errors.map((err) => err.message).join(", ")
      );
    }
    console.error("Error during sign-up:", error);
    throw new Error("Something went wrong during the sign-up process.");
  }
};
