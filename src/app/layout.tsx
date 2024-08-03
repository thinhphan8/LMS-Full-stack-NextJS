import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LMS",
  description: "A LMS build with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Theme>
      <body className={inter.className}>{children}</body>
    </Theme>
    </html>
  );
}
