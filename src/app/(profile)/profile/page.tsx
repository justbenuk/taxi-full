import { getCurrentUser } from "@/actions/user-actions";
import PageContainer from "@/components/shared/page-container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { toast } from "react-toastify";

export default async function ProfilePage() {
  const { success, message, user } = await getCurrentUser();
  if (!success || !user) {
    toast.error(message);
    return (
      <div className="mt-10">
        <p>You must be logged in the view this page</p>
      </div>
    );
  }

  return <>profile page</>;
}
