"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";

export async function updateProfilePicture(data: any) {
  const session = await auth();
  if (!session) return redirect("Unauthorised");
  try {
    const existingImage = await db.user.findFirst({
      where: {
        id: session.user.id,
      },
    });

    const utapi = new UTApi();

    if (existingImage?.imageKey) {
      await utapi.deleteFiles(existingImage.imageKey);
    }

    await db.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        image: data.ufsUrl,
        imageKey: data.key,
      },
    });
    revalidatePath("/profile");
    return { success: true, message: "Image Uploaded" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error uploading your image" };
  }
}
