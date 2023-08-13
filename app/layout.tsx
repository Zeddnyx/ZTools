import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Tanstack from "./Tanstack";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZTools",
  description: "A collection of useful tools for your daily needs",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Tanstack>{children}</Tanstack>
      </body>
    </html>
  );
}
