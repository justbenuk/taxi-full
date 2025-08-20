-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('Male', 'Female', 'NonBinary');

-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "dob" TEXT DEFAULT '',
ADD COLUMN     "gender" "public"."Gender",
ADD COLUMN     "nin" TEXT DEFAULT '',
ADD COLUMN     "position" TEXT DEFAULT '';
