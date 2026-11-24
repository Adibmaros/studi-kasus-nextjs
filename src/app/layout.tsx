import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalog Produk — Level 1 CRUD MySQL",
  description: "Studi kasus Next.js Fullstack + Prisma 5 + MySQL Lokal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
