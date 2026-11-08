import Link from "next/link";
import { CATEGORIES, PRODUCTS, formatPrice } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const [first, second, third] = PRODUCTS;
  const trending = PRODUCTS.filter((p) => p.trending).slice(0, 8);
  const top = PRODUCTS.slice(3, 11);

  return (
    <>
      {/* Portada */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pt-16">
        <div className="rise">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Edición otoño–invierno 2026
          </p>
          <h1 className="mt-5 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight">
            Las <span className="text-accent">100</span> prendas que más compra la gente.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted">
            Sin relleno. Ordenamos la tienda según lo que de verdad se vende hoy: de la sudadera
            número uno hasta el puesto cien.{" "}
            <span className="font-serif text-xl italic text-ink">Tú eliges, la lista ya filtró.</span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tienda"
              className="bg-ink px-6 py-3 font-medium text-paper transition hover:bg-accent"
            >
              Ver la lista completa →
            </Link>
            <Link
              href="#categorias"
              className="border border-ink px-6 py-3 font-medium transition hover:bg-paper-2"
            >
              Por categoría
            </Link>
          </div>
        </div>

        {/* Podio */}
        <div className="grid grid-cols-2 content-center gap-3">
          {[first, second, third].map((p, i) => (
            <Link
              key={p.slug}
              href={`/producto/${p.slug}`}
              style={{ animationDelay: `${150 + i * 120}ms` }}
              className={`rise group relative overflow-hidden border border-ink bg-paper-2 ${
                i === 0 ? "col-span-2 aspect-[2/1.15]" : "aspect-[4/5]"
              }`}
            >
              <ProductImage
                product={p}
                preload
                sizes={i === 0 ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 22vw, 50vw"}
                className="transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-0 top-0 bg-ink px-3 py-1 font-display text-2xl font-extrabold text-paper">
                {i + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 border-t border-ink bg-paper/95 p-3">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  Nº{i + 1} más vendido
                </p>
                <div className="flex items-end justify-between gap-2">
                  <p className={`font-display font-bold leading-tight ${i === 0 ? "text-2xl" : "text-sm"}`}>
                    {p.name}
                  </p>
                  <p className="shrink-0 font-mono text-sm">{formatPrice(p.price)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cinta */}
      <div className="overflow-hidden border-y border-ink bg-accent py-3 text-accent-ink">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-xl font-bold">
          {[...PRODUCTS.slice(0, 14), ...PRODUCTS.slice(0, 14)].map((p, i) => (
            <span key={i}>
              #{p.rank} {p.name} <span className="opacity-50">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Siguientes en la lista */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <div className="flex items-end justify-between gap-4 border-b border-ink pb-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">Del 4 al 11</h2>
          <Link href="/tienda" className="font-mono text-sm hover:text-accent">
            Ver los 100 →
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {top.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-20 sm:px-6">
        <h2 className="border-b border-ink pb-4 font-display text-4xl font-extrabold tracking-tight">
          Por categoría
        </h2>
        <div className="grid sm:grid-cols-2">
          {CATEGORIES.map((c) => {
            const items = PRODUCTS.filter((p) => p.category === c.id);
            const lead = items[0];
            return (
              <Link
                key={c.id}
                href={`/categoria/${c.id}`}
                className="group flex items-center gap-5 border-b border-ink py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-ink bg-paper-2">
                  <ProductImage product={lead} sizes="80px" className="transition group-hover:scale-110" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-2xl font-bold group-hover:text-accent">{c.name}</p>
                  <p className="text-sm text-muted">{c.blurb}</p>
                </div>
                <span className="font-mono text-sm text-muted">{items.length}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tendencias */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <div className="border-b border-ink pb-4">
          <h2 className="font-display text-4xl font-extrabold tracking-tight">
            Lo que <span className="font-serif font-normal italic text-accent">está subiendo</span>
          </h2>
          <p className="mt-1 text-muted">Prendas cuyas búsquedas y ventas crecen más rápido esta temporada.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {trending.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Método */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 border border-ink bg-paper-2 p-8 md:grid-cols-3 md:p-12">
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight">
            ¿Cómo armamos la lista?
          </h2>
          <p className="text-muted">
            Cruzamos los rankings públicos de más vendidos en ropa con reportes de ventas mensuales y
            tendencias de búsqueda. Los básicos baratos con miles de reseñas dominan arriba; las
            tendencias de temporada entran más abajo.
          </p>
          <ul className="space-y-2 font-mono text-sm">
            <li>01 — Rankings de más vendidos</li>
            <li>02 — Unidades e ingresos al mes</li>
            <li>03 — Crecimiento en búsquedas</li>
            <li>04 — Revisión cada temporada</li>
          </ul>
        </div>
      </section>
    </>
  );
}
