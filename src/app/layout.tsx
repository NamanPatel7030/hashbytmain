import type { Metadata } from "next";
import { Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";

const poppins = PoppinsFont({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "HASHBYT",
  description: "SaaS Redesign & Development Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
