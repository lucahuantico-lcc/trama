import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Bricolage_Grotesque({ variable: "--f-display", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--f-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const body = DM_Sans({ variable: "--f-body", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--f-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "TRAMA · Las 100 prendas más compradas",
    template: "%s · TRAMA",
  },
  description:
    "Tienda de ropa con las 100 prendas que más compra la gente hoy: básicos, sudaderas, deporte, denim, abrigos y más.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${display.variable} ${serif.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
