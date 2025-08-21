import React from "react";
import { Card, CardContent } from "../ui/card";
import ProfilePictureUpload from "../uploads/profile-picture-upload";
import { UserProfileCardProps } from "@/types";
import Image from "next/image";

export default function PersonalInfoCard({ user }: UserProfileCardProps) {
  return (
    <Card>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div className="col-span-1">
          <Image src={user.image || "/assets/profile.jpg"} alt="profile pic" height={200} width={500} className="lg:h-[200px] w-[200px] mx-auto md:h-full rounded-full" />
          <ProfilePictureUpload />
        </div>
        <div className="lg:col-span-3 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 md:pt-0 gap-2 md:gap-6">
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">Name</span>
              <span>{user.name}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">Email Address</span>
              <span>{user.email}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">Contact Number</span>
              <span>{user.contactNumber}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">Date Of Birth</span>
              <span>{user.dob}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">National Insurance Number</span>
              <span>{user.nin}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">Gender</span>
              <span>{user.gender}</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-muted-foreground">Role</span>
              <span>{user.role}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
