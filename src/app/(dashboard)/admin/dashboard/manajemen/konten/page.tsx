"use client";

import { FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function page() {
  return (
    <div className=" m-10 flex items-center justify-center font-dmsans">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-blue-gray">
            Tambah Fasilitas
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Form untuk menambahkan kontent
          </p>

          <form id="submitForm" action="" method="POST">
            <section>
              <div className="bg-white rounded-lg border border-gray-300 shadow-md mb-3 dark:bg-[#181818] dark:border-gray-700">
                <div>
                  <p className="mt-8 mx-10 font-bold text-black dark:text-white">
                    Informasi Fasilitas
                  </p>
                </div>

                <div className="mt-4 mb-4 mx-10">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold">
                      <p className="text-black dark:text-white">Nama</p>
                      <p className="after:content-['*'] after:text-red-500 dark:after:text-red-500">
                        Fasilitas
                      </p>
                      <p className="font-normal text-xs mt-2 text-gray-600 dark:text-playspace-grey">
                        Masukkan nama fasilitas
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <Input className="border border-gray-300 dark:border-gray-700" />
                      </div>
                    </div>
                  </div>
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold">
                      <p className="after:content-['*'] after:text-red-500 dark:after:text-red-500">
                        Kategori
                      </p>
                      <p className="font-normal text-xs mt-2 text-gray-600 dark:text-playspace-grey">
                        Pilih kategori fasilitas
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Pilih kategori" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">
                              Lapangan Outdoor
                            </SelectItem>
                            <SelectItem value="dark">
                              Lapangan Indoor
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold">
                      <p className="after:content-['*'] after:text-red-500 dark:after:text-red-500">
                        Jadwal Tersedia
                      </p>
                      <p className="font-normal text-xs mt-2 text-gray-600 dark:text-playspace-grey">
                        Pilih jadwal tersedia fasilitas
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center">
                        <div className="flex w-[600px]">
                          <Select>
                            <SelectTrigger className="">
                              <SelectValue placeholder="Pilih jam ketersediaan" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">
                                Jam Tersedia 1
                              </SelectItem>
                              <SelectItem value="dark">
                                Jam Tersedia 2
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="bg-white border-gray-300 dark:bg-[#181818] rounded-lg border dark:border-gray-700 shadow-md mb-3">
                <div>
                  <p className="mt-8 mx-10 font-bold text-black dark:text-white">
                    Detail Fasilitas
                  </p>
                </div>
                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-6 mx-2">
                    <div className="mt-5 w-[240px] font-semibold">
                      <p className="text-black dark:text-white">Foto</p>
                      <p className="text-black dark:text-white">Fasilitas</p>
                      <p className="font-normal text-xs mt-2 text-gray-600 dark:text-playspace-grey">
                        Unggah Foto Fasilitas
                      </p>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      <div className="items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer overflow-hidden bg-white hover:bg-gray-100">
                          <button
                            id="remove-image-1"
                            className="absolute z-20  text-xs bg-gray-300/70 hover:bg-gray-300 text-red-700 font-bold rounded-full hidden p-2"
                          >
                            Hapus
                          </button>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <img
                              id="selected-image-1"
                              src=""
                              alt=""
                              className="w-full h-full hidden"
                            />
                            <p
                              id="image-text-1"
                              className="mb-2 text-base text-gray-500 after:content-['*'] after:text-red-500"
                            >
                              Foto Utama
                            </p>
                          </div>
                          <input
                            id="image_1_path"
                            name="image_1_path"
                            type="file"
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <div className=" items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white overflow-hidden hover:bg-gray-100">
                          <button
                            id="remove-image-2"
                            className="absolute z-20  text-xs bg-gray-300/70 hover:bg-gray-300 text-red-700 font-bold rounded-full hidden p-2"
                          >
                            Hapus
                          </button>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <img
                              id="selected-image-2"
                              src=""
                              alt=""
                              className="w-full h-full hidden"
                            />
                            <p
                              id="image-text-2"
                              className="mb-2 text-base text-gray-500 after:content-['*'] after:text-red-500"
                            >
                              Foto 2
                            </p>
                          </div>
                          <input
                            id="image_2_path"
                            name="image_2_path"
                            type="file"
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <div className=" items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white overflow-hidden hover:bg-gray-100">
                          <button
                            id="remove-image-3"
                            className="absolute z-20  text-xs bg-gray-300/70 hover:bg-gray-300 text-red-700 font-bold rounded-full hidden p-2"
                          >
                            Hapus
                          </button>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <img
                              id="selected-image-3"
                              src=""
                              alt=""
                              className="w-full h-full hidden"
                            />
                            <p
                              id="image-text-3"
                              className="mb-2 text-base text-gray-500"
                            >
                              Foto 3
                            </p>
                          </div>
                          <input
                            id="image_3_path"
                            name="image_3_path"
                            type="file"
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <div className="items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-36 h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white overflow-hidden hover:bg-gray-100">
                          <button
                            id="remove-image-4"
                            className="absolute z-20  text-xs bg-gray-300/70 hover:bg-gray-300 text-red-700 font-bold rounded-full hidden p-2"
                          >
                            Hapus
                          </button>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
                            <svg
                              className="w-8 h-8"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M13 4H8.8C7.11984 4 6.27976 4 5.63803 4.32698C5.07354 4.6146 4.6146 5.07354 4.32698 5.63803C4 6.27976 4 7.11984 4 8.8V15.2C4 16.8802 4 17.7202 4.32698 18.362C4.6146 18.9265 5.07354 19.3854 5.63803 19.673C6.27976 20 7.11984 20 8.8 20H15.2C16.8802 20 17.7202 20 18.362 19.673C18.9265 19.3854 19.3854 18.9265 19.673 18.362C20 17.7202 20 16.8802 20 15.2V11"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M4 16L8.29289 11.7071C8.68342 11.3166 9.31658 11.3166 9.70711 11.7071L13 15M13 15L15.7929 12.2071C16.1834 11.8166 16.8166 11.8166 17.2071 12.2071L20 15M13 15L15.25 17.25"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                d="M18.5 3V5.5M18.5 8V5.5M18.5 5.5H16M18.5 5.5H21"
                                stroke="#6b7280"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            <img
                              id="selected-image-4"
                              src=""
                              alt=""
                              className="w-full h-full hidden"
                            />
                            <p
                              id="image-text-4"
                              className="mb-2 text-base text-gray-500"
                            >
                              Foto 4
                            </p>
                          </div>
                          <input
                            id="image_4_path"
                            name="image_4_path"
                            type="file"
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex py-6 mx-2">
                    <div className="mt-5 w-[250px] font-semibold">
                      <p className="text-black dark:text-white">Deskripsi</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Fasilitas
                      </p>
                      <p className="font-normal text-xs mt-2 text-gray-600 dark:text-playspace-grey">
                        Tuliskan deskripsi fasilitas
                      </p>
                    </div>

                    <Textarea className="text-sm h-44 w-[600px] border  mt-2 rounded-md" />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="dark:bg-[#181818] bg-white rounded-lg border dark:border-gray-700 border-gray-300 shadow-md mb-3">
                <div>
                  <p className="mt-8 mx-10 font-bold dark:text-white text-gray-900">
                    Harga Sewa
                  </p>
                </div>
                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold dark:text-white text-gray-900">
                      <p>Harga Umum</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Per Jam
                      </p>
                      <p className="font-normal text-xs mt-2 dark:text-playspace-grey text-gray-500">
                        Masukkan harga sewa 1 jam
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-playspace-light-grey border border-r-0 border-gray-300 rounded-l-md">
                          <div className="dark:text-playspace-dark-grey/80 font-bold text-gray-900">
                            Rp
                          </div>
                        </span>
                        <Input className="rounded-none rounded-r-md " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold dark:text-white text-gray-900">
                      <p>Harga Umum</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Per Hari
                      </p>
                      <p className="font-normal text-xs mt-2 dark:text-playspace-grey text-gray-500">
                        Masukkan harga sewa 1 Hari &#40;7 jam&#41;
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-playspace-light-grey border border-r-0 border-gray-300 rounded-l-md">
                          <div className="dark:text-playspace-dark-grey/80 font-bold text-gray-900">
                            Rp
                          </div>
                        </span>
                        <Input className="rounded-none rounded-r-md " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold dark:text-white text-gray-900">
                      <p>Harga Staff</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Per Jam
                      </p>
                      <p className="font-normal text-xs mt-2 dark:text-playspace-grey text-gray-500">
                        Masukkan harga sewa 1 jam
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-playspace-light-grey border border-r-0 border-gray-300 rounded-l-md">
                          <div className="dark:text-playspace-dark-grey/80 font-bold text-gray-900">
                            Rp
                          </div>
                        </span>
                        <Input className="rounded-none rounded-r-md " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold dark:text-white text-gray-900">
                      <p>Harga Staff</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Per Hari
                      </p>
                      <p className="font-normal text-xs mt-2 dark:text-playspace-grey text-gray-500">
                        Masukkan harga sewa 1 Hari &#40;7 jam&#41;
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-playspace-light-grey border border-r-0 border-gray-300 rounded-l-md">
                          <div className="dark:text-playspace-dark-grey/80 font-bold text-gray-900">
                            Rp
                          </div>
                        </span>
                        <Input className="rounded-none rounded-r-md " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold dark:text-white text-gray-900">
                      <p>Harga Mahasiswa</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Per Jam
                      </p>
                      <p className="font-normal text-xs mt-2 dark:text-playspace-grey text-gray-500">
                        Masukkan harga sewa 1 jam
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-playspace-light-grey border border-r-0 border-gray-300 rounded-l-md">
                          <div className="dark:text-playspace-dark-grey/80 font-bold text-gray-900">
                            Rp
                          </div>
                        </span>
                        <Input className="rounded-none rounded-r-md " />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 mb-4 mx-10 ">
                  <div className="flex py-3 mx-2">
                    <div className="w-[250px] mt-5 font-semibold dark:text-white text-gray-900">
                      <p>Harga Mahasiswa</p>
                      <p className="after:content-['*'] after:text-red-500">
                        Per Hari
                      </p>
                      <p className="font-normal text-xs mt-2 dark:text-playspace-grey text-gray-500">
                        Masukkan harga sewa 1 Hari &#40;7 jam&#41;
                      </p>
                    </div>

                    <div className="flex items-center">
                      <div className="flex w-[600px]">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-playspace-light-grey border border-r-0 border-gray-300 rounded-l-md">
                          <div className="dark:text-playspace-dark-grey/80 font-bold text-gray-900">
                            Rp
                          </div>
                        </span>
                        <Input className="rounded-none rounded-r-md " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="dark:bg-[#181818] bg-white rounded-lg border dark:border-gray-700 border-gray-300 shadow-md mb-3">
                <div>
                  <p className="mt-8 mx-10 font-bold dark:text-white text-gray-900">
                    Pengelolaan Fasilitas
                  </p>
                </div>
                <div className="lg:col-span-2 mt-8 mb-4 mx-10 ">
                  <div className="grid gap-4 gap-y-3 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 mb-5">
                      <label className="font-medium dark:text-white text-gray-900 after:content-['*'] after:text-red-500">
                        Tampilkan
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tampilkan/sembunyikan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Tampilkan</SelectItem>
                          <SelectItem value="dark">Sembunyikan</SelectItem>
                        </SelectContent>
                      </Select>

                      <p className="text-xs mt-2 text-playspace-grey dark:text-gray-500">
                        Pilih kategori fasilitas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="md:col-span-5 text-right">
              <div className="inline-flex items-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Kirim
                </button>
              </div>
            </div>
          </form>

          <div
            id="loading"
            className="hidden z-50 fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
          >
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
