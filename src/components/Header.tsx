"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
          TRAMA<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium sm:gap-5">
          <Link href="/tienda" className="hidden px-2 py-1 hover:text-accent sm:inline">
            La lista
          </Link>
          <Link href="/tienda?g=mujer" className="hidden px-2 py-1 hover:text-accent md:inline">
            Mujer
          </Link>
          <Link href="/tienda?g=hombre" className="hidden px-2 py-1 hover:text-accent md:inline">
            Hombre
          </Link>
          <Link href="/tienda" className="px-2 py-1 hover:text-accent sm:hidden">
            Tienda
          </Link>
          <Link
            href="/carrito"
            className="flex items-center gap-2 rounded-full border border-ink px-3 py-1.5 transition hover:bg-ink hover:text-paper"
          >
            Carrito
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 font-mono text-[11px] text-accent-ink">
              {count}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
