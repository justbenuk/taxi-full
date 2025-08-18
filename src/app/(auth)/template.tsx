import { isLoggedIn } from "@/actions/user-actions";
import { auth } from "@/auth";
import SiteLogo from "@/components/shared/site-logo";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type AuthTemplateProps = {
  children: ReactNode;
};

export default async function AuthTemplate({ children }: AuthTemplateProps) {
  const session = await auth();
  if (session) return redirect("/dashboard");
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <SiteLogo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image width={1000} height={1000} src="/assets/auth.jpg" alt="Image" className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale" />
      </div>
    </div>
  );
}
