import { AppConfig } from "@/config/app.config";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./provider";
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ToastContainer />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
