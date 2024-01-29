import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hi~",
  description: "this is my website, heaux!~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="this is my website, heaux!~" />

        <meta property="og:url" content="https://uhhwavee.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="hi~" />
        <meta property="og:description" content="this is my website, heaux!~" />
        <meta property="og:image" content="https://uhhwavee.vercel.app/image.psd.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="uhhwavee.vercel.app" />
        <meta property="twitter:url" content="https://uhhwavee.vercel.app" />
        <meta name="twitter:title" content="hi~" />
        <meta name="twitter:description" content="this is my website, heaux!~" />
        <meta name="twitter:image" content="https://uhhwavee.vercel.app/image.psd.png" />
        <meta name="theme-color" content="#5865F2" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >{children}</ThemeProvider></body>
    </html>
  );
}
