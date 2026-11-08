import Link from "next/link";
import { COLOR_HEX, formatPrice, type Product } from "@/data/products";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  return (
    <Link
      href={`/producto/${product.slug}`}
      className="group relative flex flex-col border border-ink bg-paper transition hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden border-b border-ink bg-paper-2">
        {!product.image && (
          <span className="pointer-events-none absolute -left-1 -top-4 font-display text-[7.5rem] font-extrabold leading-none text-ink/[0.07]">
            {String(product.rank).padStart(2, "0")}
          </span>
        )}
        <ProductImage
          product={product}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          preload={priority}
          className="transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 bg-ink px-2 py-0.5 font-mono text-[11px] text-paper">
          #{product.rank}
        </span>
        {product.trending && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-ink">
            Tendencia
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="text-sm font-medium leading-snug">{product.name}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-mono text-sm">{formatPrice(product.price)}</span>
          <span className="flex gap-1">
            {product.colors.slice(0, 4).map((c) => (
              <span
                key={c}
                title={c}
                className="h-3 w-3 rounded-full border border-ink/30"
                style={{ background: COLOR_HEX[c] }}
              />
            ))}
          </span>
        </div>
      </div>
    </Link>
  );
}
