/*
  Warnings:

  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_userId_fkey";

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "image" TEXT,
ADD COLUMN     "imageKey" TEXT;

-- DropTable
DROP TABLE "public"."Image";
