import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import { ReservationProvider } from "@/components/ReservationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oak & Barrell | Steaks, Sushi & Craft Cocktails — New York",
  description:
    "A fusion of Japanese precision and Western warmth. Premium steaks, artisan sushi, handcrafted cocktails in the heart of Manhattan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} antialiased`}
      >
        <ReservationProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <ReservationModal />
        </ReservationProvider>
      </body>
    </html>
  );
}
