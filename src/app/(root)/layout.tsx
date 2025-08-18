import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header>Header</header>
      <main className="flex-1">{children}</main>
      <footer>footer</footer>
    </div>
  );
}
