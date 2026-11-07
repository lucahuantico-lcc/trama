import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = { title: "Carrito" };

export default function CarritoPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
      <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-tight">
        Tu carrito
      </h1>
      <CartView />
    </div>
  );
}
