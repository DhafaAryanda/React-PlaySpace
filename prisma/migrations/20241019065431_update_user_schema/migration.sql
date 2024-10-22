/*
  Warnings:

  - You are about to drop the column `nip` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `npm` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `nip`,
    DROP COLUMN `npm`;
