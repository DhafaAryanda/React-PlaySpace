import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ClientWrapper from "../components/client-wrapper";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "PlaySpace - Field Booking Made Easy",
  description:
    "PlaySpace is your go-to platform for effortlessly booking sports fields and recreational spaces. Whether you're planning a casual game or organizing a tournament, PlaySpace offers a seamless, user-friendly experience to secure the perfect venue. Explore available locations, check real-time availability, and confirm your reservation in just a few clicks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />

      <body
        className={`${inter.className}  bg-white dark:bg-playspace-black font-poppins text-black dark:text-white`}
      >
        <ClientWrapper>
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
