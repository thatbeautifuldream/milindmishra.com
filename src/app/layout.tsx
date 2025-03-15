import Providers from "@/components/providers";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { BRAND_COLOR } from "@/lib/constants";
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
    <Providers>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(inter.className, "antialiased bg-black text-green-400")}
          suppressHydrationWarning
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader
              color={BRAND_COLOR}
              height={1.5}
              showSpinner={false}
            />
            <div className="min-h-screen">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </Providers>
  );
}
