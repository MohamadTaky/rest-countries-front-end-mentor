import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import isDarkMode from "@/utils/isDarkMode";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const font = Nunito_Sans({ subsets: ["latin"], weight: ["300", "600", "800"] });

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "front end mentor challenge",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = isDarkMode() ? "dark" : "";
  return (
    <html lang="en">
      <body className={`bg-base text-sm font-base text-base antialiased md:text-base ${font.className} ${theme}`}>
        <Header />
        <main className="relative min-h-screen px-4 py-10 md:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
