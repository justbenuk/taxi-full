import PageContainer from "@/components/shared/page-container";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <PageContainer>
        <div className="flex flex-col items-center justify-center h-[80dvh] space-y-4">
          <h1 className="text-5xl">App is currently under construction</h1>
          <h3>
            Please contact{" "}
            <Link href={"mailto:justbenuk@gmail.com"} className="underline underline-offset-4">
              justbenuk@gmail.com
            </Link>{" "}
            if you are interested in more information
          </h3>
        </div>
      </PageContainer>
    </div>
  );
}
