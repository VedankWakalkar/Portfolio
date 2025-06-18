"use client";
import { ThemeProvider } from "./theme-provider";
import { useTheme } from "next-themes";
import { Toaster } from "./ui/sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
      >
        {children}
        <ToastProvider />
      </ThemeProvider>
    </>
  );
}

function ToastProvider() {
  const { resolvedTheme } = useTheme();
  return (
    <Toaster
      className=""
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
