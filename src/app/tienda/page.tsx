import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid } from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "La lista completa",
  description: "Las 100 prendas más compradas, ordenadas por ventas. Filtra por categoría y género.",
};

export default function TiendaPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6">
      <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-none tracking-tight">
        La lista <span className="font-serif font-normal italic text-accent">completa</span>
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Del puesto 1 al 100, ordenado por lo que más se compra. Usa los filtros para acotar.
      </p>
      <Suspense fallback={<div className="mt-10 h-96 animate-pulse bg-paper-2" />}>
        <ShopGrid />
      </Suspense>
    </div>
  );
}
