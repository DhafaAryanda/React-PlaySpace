"use client";

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
import React from "react";
import ButtonLogout from "./button-logout";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className="grow-0 w-[20%] h-screen shadow p-5 space-y-5">
      <div className="space-y-2">
        <div className="uppercase text-xs font-bold ml-1">Space Provider</div>
        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard"}>
            <House className="mr-2 w-4 h-4" /> Dashboard
          </Link>
        </Button>
      </div>
      <div className="space-y-2">
        <div className="uppercase text-xs font-bold">Menu Manajemen</div>
        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard/manajemen/sewa"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard/manajemen/sewa"}>
            <Map className="mr-2 w-4 h-4 ml-1" /> Manajemen Penyewaan
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard/manajemen/konten"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard/manajemen/konten"}>
            <FilePenLine className="mr-2 w-4 h-4" /> Manajemen Fasilitas
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard/manajemen/riwayat-transaksi"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard/manajemen/riwayat-transaksi"}>
            <Archive className="mr-2 w-4 h-4" /> Riwayat Transaksi
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard/manajemen/buat-transaksi"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard/manajemen/buat-transaksi"}>
            <CalendarPlus className="mr-2 w-4 h-4" /> Buat Sewa
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard/akun"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard/akun"}>
            <User className="mr-2 w-4 h-4" /> Akun Pengguna
          </Link>
        </Button>
      </div>
      <div className="space-y-2">
        <div className="uppercase text-xs font-bold ml-1">Akun</div>

        <Button
          variant={"ghost"}
          asChild
          className={`w-full justify-start ${
            pathname === "/space-provider/dashboard/profile"
              ? "bg-accent text-accent-foreground"
              : ""
          }`}
        >
          <Link href={"/space-provider/dashboard/profile"}>
            <User className="mr-2 w-4 h-4" /> Profile
          </Link>
        </Button>
      </div>

      <ButtonLogout />
    </section>
  );
}
