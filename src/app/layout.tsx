import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milind Mishra",
  description: "Milind Mishra's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(sans.className, "antialiased bg-black text-green-400")}
        suppressHydrationWarning
      >
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
