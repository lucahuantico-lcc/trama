"use client";

import Link from "next/link";
import { useState } from "react";
import { COLOR_HEX, formatPrice, getProduct } from "@/data/products";
import { Garment } from "./Garment";
import { useCart } from "./CartProvider";

const FREE_SHIPPING = 60;
const SHIPPING = 6.9;

export function CartView() {
  const { items, subtotal, setQty, remove, clear } = useCart();
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mt-10 border border-ink bg-paper-2 p-10 text-center">
        <p className="font-display text-3xl font-extrabold">¡Pedido de prueba recibido!</p>
        <p className="mt-2 text-muted">
          Esta tienda es una demostración: aquí se conectaría la pasarela de pago.
        </p>
        <Link href="/tienda" className="mt-6 inline-block bg-ink px-6 py-3 text-paper hover:bg-accent">
          Seguir viendo la lista
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mt-10 border border-dashed border-ink p-10 text-center">
        <p className="text-lg text-muted">Tu carrito está vacío.</p>
        <Link href="/tienda" className="mt-6 inline-block bg-ink px-6 py-3 text-paper hover:bg-accent">
          Ver las 100 prendas
        </Link>
      </div>
    );
  }

  const shipping = subtotal >= FREE_SHIPPING ? 0 : SHIPPING;
  const missing = Math.max(0, FREE_SHIPPING - subtotal);

  return (
    <div className="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
      <ul className="border-t border-ink">
        {items.map((item, i) => {
          const p = getProduct(item.slug);
          if (!p) return null;
          return (
            <li key={`${item.slug}-${item.color}-${item.size}`} className="flex gap-4 border-b border-ink py-4">
              <Link href={`/producto/${p.slug}`} className="h-24 w-24 shrink-0 bg-paper-2 p-2">
                <Garment type={p.garment} color={COLOR_HEX[item.color]} className="h-full w-full" />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-3">
                  <Link href={`/producto/${p.slug}`} className="font-medium hover:text-accent">
                    {p.name}
                  </Link>
                  <span className="font-mono">{formatPrice(p.price * item.qty)}</span>
                </div>
                <p className="text-sm capitalize text-muted">
                  {item.color} · Talla {item.size}
                </p>
                <div className="mt-auto flex items-center gap-3 pt-2">
                  <div className="flex items-center border border-ink font-mono text-sm">
                    <button
                      className="px-3 py-1 hover:bg-paper-2"
                      onClick={() => setQty(i, item.qty - 1)}
                      aria-label="Quitar uno"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.qty}</span>
                    <button
                      className="px-3 py-1 hover:bg-paper-2"
                      onClick={() => setQty(i, item.qty + 1)}
                      aria-label="Añadir uno"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => remove(i)} className="text-sm text-muted underline hover:text-accent">
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <aside className="h-fit border border-ink bg-paper-2 p-6">
        <p className="font-display text-2xl font-bold">Resumen</p>
        <dl className="mt-4 space-y-2 font-mono text-sm">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Envío</dt>
            <dd>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</dd>
          </div>
          <div className="flex justify-between border-t border-ink pt-2 text-base">
            <dt>Total</dt>
            <dd>{formatPrice(subtotal + shipping)}</dd>
          </div>
        </dl>
        {missing > 0 && (
          <p className="mt-4 text-sm text-muted">
            Te faltan <span className="text-accent">{formatPrice(missing)}</span> para el envío gratis.
          </p>
        )}
        <button
          onClick={() => {
            clear();
            setDone(true);
          }}
          className="mt-6 w-full bg-ink py-3 font-medium text-paper transition hover:bg-accent"
        >
          Finalizar compra
        </button>
      </aside>
    </div>
  );
}
