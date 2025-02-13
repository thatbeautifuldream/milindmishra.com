import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Providers from "@/components/providers";
import { BRAND_COLOR } from "@/data/constants";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milind Mishra",
  description: "Milind Mishra's portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body
          className={cn(inter.className, "antialiased bg-black text-green-400")}
          suppressHydrationWarning
        >
          <NextTopLoader color={BRAND_COLOR} height={1.5} showSpinner={false} />
          <div className="min-h-screen">
            <Header />
            <main className="max-w-6xl mx-auto ~px-4/8 ~py-8/16">
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </Providers>
    </html>
  );
}
