import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
