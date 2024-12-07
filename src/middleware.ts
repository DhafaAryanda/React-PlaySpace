import { NextRequest, NextResponse } from "next/server";
import { isTokenValid } from "./utils/auth";
import { refreshToken } from "./utils/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value || null;

  if (!token) {
    // Token tidak ada, arahkan ke halaman login
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  if (!isTokenValid(token)) {
    try {
      // Jika token tidak valid, coba lakukan refresh token
      const newToken = await refreshToken(req);

      if (newToken) {
        // Jika refresh token berhasil, set cookie dan lanjutkan ke halaman
        const response = NextResponse.next();
        response.cookies.set({
          name: "accessToken",
          value: newToken,
          httpOnly: true, // Token hanya bisa diakses melalui server
          path: "/",
        });
        return response;
      }
    } catch (error) {
      console.error("Error refreshing token", error);
    }

    // Jika refresh token gagal, arahkan pengguna ke halaman login
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // Jika token valid, lanjutkan ke halaman yang diminta
  return NextResponse.next();
}

// Atur route yang akan memanfaatkan middleware ini
export const config = {
  matcher: ["/"], // Halaman yang memerlukan autentikasi
};
