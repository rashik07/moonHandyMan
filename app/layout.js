// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderLayout from "./_components/layout/Header";
import FooterLayout from "./_components/layout/Footer";

// Load fonts with CSS variable support
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Optional: SEO metadata
export const metadata = {
  title: "Moon Handyman",
  description: "Professional Handyman Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white text-black font-sans">
        <HeaderLayout />
        <main>{children}</main>
        <FooterLayout/>
      </body>
    </html>
  );
}
