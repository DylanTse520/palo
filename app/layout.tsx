import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: "variable",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Palo",
  description: "Palo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
