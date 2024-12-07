import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";
/**
 * Memeriksa apakah token masih valid berdasarkan masa berlaku (exp).
 * @param token Token JWT dari penyimpanan atau sesi
 * @returns true jika token masih valid, false jika sudah kadaluarsa
 */
export const isTokenValid = (token: string | null): boolean => {
  if (!token) return false;

  try {
    const decodedToken = jwtDecode<{ exp: number }>(token);

    const currentTime = Date.now() / 1000; // Waktu sekarang dalam detik
    if (decodedToken.exp < currentTime) {
      return false; // Token kadaluarsa
    }

    return true;
  } catch (error) {
    console.error("Token decoding error", error);
    return false;
  }
};

export const refreshToken = async (req: NextRequest) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/refresh-token`,
      {},
      {
        headers: {
          Cookie: req.headers.get("cookie") || "",
        },
      }
    );

    const { accessToken } = response.data;

    if (accessToken) {
      return accessToken;
    }

    return null;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    return null;
  }
};
