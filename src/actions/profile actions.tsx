"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { EmergencyContactProps } from "@/types";
import { CreateEmergencyContactSchema } from "@/validators/profile-Validators";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { UTApi } from "uploadthing/server";
import { UploadedFileData } from "uploadthing/types";

export async function updateProfilePicture(data: UploadedFileData) {
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

export async function CreateEmergencyContactAction(data: EmergencyContactProps) {
  const session = await auth();
  if (!session) return redirect("/");
  console.log(data);

  try {
    const validated = CreateEmergencyContactSchema.parse(data);

    await db.emergencyContact.create({
      data: {
        name: validated.name,
        contactNumber: validated.contactNumber,
        relationship: validated.relationship,
        isPrimary: validated.isPrimary,
        userId: session.user.id,
      },
    });
    revalidatePath("/profile");
    return { success: true, message: "Contact Added" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }
}
