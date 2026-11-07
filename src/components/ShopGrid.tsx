"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, PRODUCTS, type Category, type Gender } from "@/data/products";
import { ProductCard } from "./ProductCard";

type Sort = "rank" | "price-asc" | "price-desc";

const GENDERS: { id: Gender | "todos"; name: string }[] = [
  { id: "todos", name: "Todos" },
  { id: "mujer", name: "Mujer" },
  { id: "hombre", name: "Hombre" },
  { id: "unisex", name: "Unisex" },
];

export function ShopGrid() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const gender = (params.get("g") as Gender | null) ?? "todos";
  const category = (params.get("c") as Category | null) ?? "todas";
  const [sort, setSort] = useState<Sort>("rank");
  const [onlyTrending, setOnlyTrending] = useState(false);

  function setParam(key: string, value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const list = useMemo(() => {
    let out = PRODUCTS.filter(
      (p) =>
        (gender === "todos" || p.gender === gender || (gender !== "unisex" && p.gender === "unisex")) &&
        (category === "todas" || p.category === category) &&
        (!onlyTrending || p.trending),
    );
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    return out;
  }, [gender, category, sort, onlyTrending]);

  const chip = (active: boolean) =>
    `shrink-0 border border-ink px-3 py-1.5 text-sm transition ${
      active ? "bg-ink text-paper" : "hover:bg-paper-2"
    }`;

  return (
    <>
      <div className="sticky top-[57px] z-30 -mx-4 mt-8 space-y-3 border-y border-ink bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button className={chip(category === "todas")} onClick={() => setParam("c", null)}>
            Todas
          </button>
          {CATEGORIES.map((c) => (
            <button key={c.id} className={chip(category === c.id)} onClick={() => setParam("c", c.id)}>
              {c.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {GENDERS.map((g) => (
            <button
              key={g.id}
              className={chip(gender === g.id)}
              onClick={() => setParam("g", g.id === "todos" ? null : g.id)}
            >
              {g.name}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={onlyTrending}
              onChange={(e) => setOnlyTrending(e.target.checked)}
              className="accent-[var(--accent)]"
            />
            Solo tendencia
          </label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            className="border border-ink bg-paper px-2 py-1.5 text-sm"
            aria-label="Ordenar"
          >
            <option value="rank">Más vendidos</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
          </select>
        </div>
      </div>

      <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted">
        {list.length} {list.length === 1 ? "prenda" : "prendas"}
      </p>
      {list.length === 0 ? (
        <p className="mt-10 text-muted">No hay prendas con esos filtros.</p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </>
  );
}
