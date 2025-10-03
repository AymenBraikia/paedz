import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
    src: [
        {
            path: "../public/fonts/static/OpenSans-Light.ttf",
            weight: "300",
            style: "light",
        },
        {
            path: "../public/fonts/static/OpenSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/static/OpenSans-Medium.ttf",
            weight: "500",
            style: "medium",
        },
        {
            path: "../public/fonts/static/OpenSans-SemiBold.ttf",
            weight: "600",
            style: "bolder",
        },
        {
            path: "../public/fonts/static/OpenSans-Bold.ttf",
            weight: "700",
            style: "bold",
        },
    ],
    variable: "--font-default", // optional CSS variable
    display: "swap", // prevents invisible text
});

export const metadata: Metadata = {
    title: "Crazy Story",
    description: "just having fun",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${myFont.variable} antialiased`}>{children}</body>
        </html>
    );
}
