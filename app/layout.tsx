import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Car Display",
  description: "Discover the best cars in the World.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Nav />
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
