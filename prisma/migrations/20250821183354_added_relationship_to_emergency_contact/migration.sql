/*
  Warnings:

  - Added the required column `relationship` to the `EmergencyContact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."EmergencyContact" ADD COLUMN     "relationship" TEXT NOT NULL;
