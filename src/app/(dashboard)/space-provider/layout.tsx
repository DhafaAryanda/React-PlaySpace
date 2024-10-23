import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../../globals.css";
import { Toaster } from "@/components/ui/toaster";
import AdminNavbar from "./components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  House,
  Map,
  Archive,
  CalendarPlus,
  FilePenLine,
  User,
} from "lucide-react";
import Image from "next/image";
import ButtonLogout from "./components/button-logout";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

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
        className={`${inter.className}  bg-playspace-black font-poppins text-white `}
      >
        <section>
          <nav className="borber-b border-muted py-5 px-10 ">
            <div className="flex flex-row items-center justify-between">
              <Image
                width={154}
                height={40}
                src="../../../assets/images/logos/logo.svg"
                alt="logo"
              />
            </div>
          </nav>
          <section className="flex flex-row gap-5 items-start flex-nowrap">
            <Sidebar />
            <section className="grow mr-5 mt-5 h-[87vh] overflow-y-auto">
              {children}
            </section>
          </section>
        </section>
      </body>
    </html>
  );
}
