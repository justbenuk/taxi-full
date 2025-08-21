import React from "react";
import PageContainer from "./page-container";
import Link from "next/link";

export default function LoggedInError() {
  return (
    <PageContainer className="min-h-[80dvh] flex flex-col items-center justify-center">
      <h1 className="text-7xl dark:text-yellow-500">OOOHHHH No!</h1>
      <p className="text-xl font-semibold">You must be logged in the view this page</p>
      <p className="lg:w-2/3 mx-auto text-center mt-2">
        Something went wrong, her you shouldn&apos;t be here. Please{" "}
        <Link href={"/login"} className="font-semibold underline underline-offset-4">
          Login
        </Link>{" "}
        and try again. if this problem continues, please contact support
      </p>
    </PageContainer>
  );
}
