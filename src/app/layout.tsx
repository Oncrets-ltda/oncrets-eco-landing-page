import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oncrets",
  description: "Oncrets Eco Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{
        background: "#F9FBF1",
      }}
      lang="en"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
