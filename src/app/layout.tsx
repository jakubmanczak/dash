import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "manczak.net | Service Dashboard",
  description: "Peep the status of services and hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
