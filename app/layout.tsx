import type { Metadata } from "next";
import '@/styles/globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Task Management",
  description: "A modern task management application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
