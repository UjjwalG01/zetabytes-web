import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { AnimatedLayout } from "@/components/animated-layout";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

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
          {/* <Header /> */}
          <AnimatedLayout>{children}</AnimatedLayout>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
