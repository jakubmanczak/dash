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
      <body className={`antialiased`}>
        <div className="min-h-screen w-full bg-gray-900 text-gray-200 py-16 px-4 relative">
          <div className="z-10 absolute inset-0 bg-[url(/hideout.svg)] opacity-15 bg-svgsize bg-center bg-repeat [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

          {children}
        </div>
      </body>
    </html>
  );
}
