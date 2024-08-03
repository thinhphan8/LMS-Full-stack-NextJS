import type {Metadata} from "next";
import {Inter} from "next/font/google";
// import "./globals.css";
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";
import React from "react";

const inter = Inter({subsets: ["latin"]});

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
            <body className={inter.className}>
                <Theme>
                    {children}
                </Theme>
            </body>
        </html>
    );
}
