import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "PinPoint",
  description: "GeoGuesser Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} enableSystem defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
