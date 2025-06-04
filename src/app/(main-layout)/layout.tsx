import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ToastProvider } from "@/providers/toast-provider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastProvider>
        <Header />
        <main className="max-w-6xl mx-auto ~px-2/4 ~py-2/4 pb-20">
          {children}
        </main>
        <Footer />
      </ToastProvider>
    </>
  );
}
