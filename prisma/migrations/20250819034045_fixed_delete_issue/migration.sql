-- DropForeignKey
ALTER TABLE "public"."UserGroup" DROP CONSTRAINT "UserGroup_userId_fkey";

-- AddForeignKey
ALTER TABLE "public"."UserGroup" ADD CONSTRAINT "UserGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
