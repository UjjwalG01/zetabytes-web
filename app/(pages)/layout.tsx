import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

import { AnimatedLayout } from "@/components/animated-layout";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedLayout>{children}</AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}