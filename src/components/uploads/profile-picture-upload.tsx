"use client";
import React from "react";
import { UploadButton } from "@/lib/uploadthing";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { updateProfilePicture } from "@/actions/profile actions";

export default function ProfilePictureUpload() {
  return (
    <div className="flex flex-col items-center justify-between">
      <Button className="mt-4">
        <UploadButton
          endpoint={"profilePictureUploader"}
          onClientUploadComplete={async (res) => {
            const { success, message } = await updateProfilePicture(res[0]);
            if (!success) toast.error(message);
            toast.success(message);
          }}
          onUploadError={(error) => {
            toast.error("Image upload failed" + error);
          }}
          className="flex flex-row gap-4"
        />
      </Button>
    </div>
  );
}
