import type { Metadata } from "next";
import { berlin } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Why Berlin – Berlin Business Office, USA",
  description:
    "Why US companies choose Berlin: strategic location, innovation & research, startup hub, international talent, and Innovation Districts.",
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32" },
      { url: "/images/favicon-192.png", sizes: "192x192" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={berlin.variable}>
      <body>{children}</body>
    </html>
  );
}
