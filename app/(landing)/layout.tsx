import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import "../custom-style.css";

import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedLayout } from "@/components/animated-layout";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
