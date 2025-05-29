import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono } from "@/utils/fonts";
import { LayoutContent } from "./components/LayoutContent";

export const metadata: Metadata = {
  title: "Zenful Programming",
  description: "Learning Mindfully",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutContent>
          {children}
        </LayoutContent>
      </body>
    </html>
  );
}
