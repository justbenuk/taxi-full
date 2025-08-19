import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import CustomToastContainer from "@/components/shared/custom-toast-container";

export const metadata: Metadata = {
  title: {
    template: "%s - Taxi",
    default: "Taxi - Book Now 01827 123456",
  },
  description: "Taxi Application - Custom built for your Taxi business",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light" disableTransitionOnChange attribute={"class"}>
          {children}
          <CustomToastContainer />
        </ThemeProvider>
      </body>
    </html>
  );
}
