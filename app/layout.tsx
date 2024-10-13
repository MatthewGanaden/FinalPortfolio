import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from './components/header'
import Footer from './components/footer'

const generalSans = localFont({
  src: "./fonts/GeneralSans-Variable.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MJGanaden",
  description: "A portfolio website made by Matthew Ganaden",
  icons: {
    icon: "/logo.webp", // This points to your favicon file in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${generalSans.variable} antialiased`}>
        <div id="smooth-content">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
