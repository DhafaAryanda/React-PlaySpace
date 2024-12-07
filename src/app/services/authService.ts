import { z } from "zod";
import axiosInstance from "./axiosInstance";
import { signUpSchema } from "../(auth)/sign-up/lib/validation";
import { jwtDecode } from "jwt-decode";

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

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    // sessionStorage.setItem("accessToken", response.data.accessToken);

    const decodedToken = jwtDecode(response.data.accessToken);

    const { id, name, role, avatar } = decodedToken as {
      id: string;
      name: string;
      role: string;
      avatar: string;
    };

    localStorage.setItem("user", JSON.stringify({ id, name, role, avatar }));
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    throw new Error("Something went wrong during the login process.");
  }
};

export const refreshToken = async (): Promise<string | null> => {
  try {
    const response = await axiosInstance.post("/users/refresh-token", null, {
      withCredentials: true,
    });

    const { accessToken } = response.data;

    // sessionStorage.setItem("accessToken", accessToken);
    console.log("🚀 ~ refreshToken ~ accessToken:", accessToken);

    return accessToken;
  } catch (error) {
    console.log("🚀 ~ refreshToken ~ error:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await axiosInstance.post("/users/logout", null, {
      withCredentials: true,
    });
    localStorage.removeItem("user");
    window.location.href = "/sign-in";
  } catch (error) {
    console.log("🚀 ~ logout ~ error:", error);
  }
};

export const getUser = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data.data;
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);
  }
};
