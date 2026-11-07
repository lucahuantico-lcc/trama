"use client";

import { useState } from "react";
import Link from "next/link";
import { COLOR_HEX, formatPrice, type Product } from "@/data/products";
import { Garment } from "./Garment";
import { useCart } from "./CartProvider";

const SIZES_TOP = ["XS", "S", "M", "L", "XL", "XXL"];
const SIZES_PACK = ["S", "M", "L", "XL"];
const SIZES_SOCKS = ["35–38", "39–42", "43–46"];

function sizesFor(p: Product) {
  if (p.garment === "socks") return SIZES_SOCKS;
  if (p.category === "interior") return SIZES_PACK;
  return SIZES_TOP;
}

export function ProductBuyBox({ product: p, categoryName }: { product: Product; categoryName: string }) {
  const { add } = useCart();
  const sizes = sizesFor(p);
  const [color, setColor] = useState(p.colors[0]);
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);
  const [missingSize, setMissingSize] = useState(false);

  function handleAdd() {
    if (!size) {
      setMissingSize(true);
      return;
    }
    add({ slug: p.slug, color, size });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="mt-4 grid gap-10 lg:grid-cols-[1.15fr_1fr]">
      <div className="relative aspect-square overflow-hidden border border-ink bg-paper-2">
        <span className="pointer-events-none absolute -left-2 -top-8 font-display text-[14rem] font-extrabold leading-none text-ink/[0.07]">
          {String(p.rank).padStart(2, "0")}
        </span>
        <Garment
          key={color}
          type={p.garment}
          color={COLOR_HEX[color]}
          className="rise absolute inset-[12%]"
        />
        <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest text-muted">
          Color: {color}
        </span>
      </div>

      <div>
        <p className="inline-block bg-ink px-2 py-0.5 font-mono text-xs text-paper">
          #{p.rank} de 100 · {categoryName}
        </p>
        {p.trending && (
          <p className="ml-2 inline-block rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-ink">
            Tendencia
          </p>
        )}
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {p.name}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-muted">
          <span className="text-ink">★ {p.rating.toFixed(1)}</span>
          <span>{p.reviews.toLocaleString("es")} reseñas</span>
          <span className="capitalize">· {p.gender}</span>
        </div>
        <p className="mt-6 font-mono text-3xl">{formatPrice(p.price)}</p>

        <blockquote className="mt-6 border-l-4 border-accent pl-4 font-serif text-xl italic leading-snug">
          {p.why}
        </blockquote>

        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Color</p>
          <div className="mt-2 flex gap-2">
            {p.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                aria-label={c}
                aria-pressed={color === c}
                className={`h-9 w-9 rounded-full border-2 transition ${
                  color === c ? "border-ink ring-2 ring-accent ring-offset-2 ring-offset-paper" : "border-ink/25"
                }`}
                style={{ background: COLOR_HEX[c] }}
              />
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className={`font-mono text-xs uppercase tracking-widest ${missingSize ? "text-accent" : "text-muted"}`}>
            {missingSize ? "Elige una talla" : "Talla"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setMissingSize(false);
                }}
                className={`min-w-12 border border-ink px-3 py-2 font-mono text-sm transition ${
                  size === s ? "bg-ink text-paper" : "hover:bg-paper-2"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAdd}
          className="mt-8 w-full bg-ink py-4 font-medium text-paper transition hover:bg-accent"
        >
          {added ? "✓ Añadido al carrito" : "Añadir al carrito"}
        </button>
        {added && (
          <Link href="/carrito" className="mt-3 block text-center text-sm underline hover:text-accent">
            Ir al carrito
          </Link>
        )}

        <ul className="mt-8 space-y-1 border-t border-line pt-6 text-sm text-muted">
          <li>Envío gratis en pedidos desde $60</li>
          <li>Cambios y devoluciones en 30 días</li>
        </ul>
      </div>
    </div>
  );
}
