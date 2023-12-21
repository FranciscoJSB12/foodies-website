import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { MainHeader } from "@/components/MainHeader";
import "./globals.scss";

const quicksand = Quicksand({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foodies App",
  description: "No description yet, it's just amazing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
