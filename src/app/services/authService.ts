import { z } from "zod";
import { signUpSchema } from "../(auth)/sign-up/lib/validation";
import axiosInstance from "./axiosInstance";
import { signInSchema } from "../(auth)/sign-in/lib/validation";

export interface SignUpData {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  password: string;
  confirmPassword: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export const signUp = async (data: SignUpData) => {
  try {
    const validatedData = signUpSchema.parse(data);

    const response = await axiosInstance.post("/users", validatedData);
    return response.data;
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

export const signIn = async (data: SignInData) => {
  try {
    const validatedData = signInSchema.parse(data);
    const response = await axiosInstance.post("/auth/login", validatedData);
    return response.data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Validation failed", error.errors);
      throw new Error(
        "Validation failed: " +
          error.errors.map((err) => err.message).join(", ")
      );
    }
    console.error("Error during sign-in:", error);
    throw new Error("Something went wrong during the sign-in process.");
  }
};

export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await axiosInstance.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);
    throw new Error("Something went wrong while fetching user data.");
  }
};
