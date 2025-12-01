import {Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";



const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "BluGrid Technologies",
  description: "Premium Paint Protection Films",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable}`}>
      <body className="antialiased bg-black text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
