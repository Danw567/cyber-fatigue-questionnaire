import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "./_components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyFa-4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-background">
        <main className="bg-card mx-auto h-dvh max-w-200 overflow-auto px-5 pb-10 shadow-2xl">
          <div id="survey-top" className="h-5 w-0" />
          <div className="flex justify-between">
            <Logo width="150" />
            <div
              id="logo-bar-right"
              className="mx-auto flex w-full justify-end"
            ></div>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
